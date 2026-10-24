// Checks that each kit in kits/extra-poison.js deals (heals, shields) what its
// official text says. Probe setup: no crit, no DEF, one dummy (or five), the
// kit's battle skill / ultimate called directly on a paused battle, then time
// stepped forward with only queued effects and status ticks running (no hero
// actions), so the numbers do not depend on energy or cooldown rules.
// Run: node simulator/tests/extra-poison.test.js
var assert = require('assert');
var S = require('../node-loader.js');

var RULES = { defK: 1e15, battleFirst: 1000, energyPerHitTaken: 0 };

function setup(heroes, o) {
  o = o || {};
  if (!Array.isArray(heroes)) heroes = [heroes];
  var team = heroes.map(function (h) {
    return { hero: h, level: 60, gear: 'none', insp: o.insp || 0, stats: { critRate: 0, critDmg: 0, ench: o.ench == null ? 0 : o.ench } };
  });
  var b = S.runOnce({ team: team, enemy: { preset: o.preset || 'dummy', level: 60, defX: 1e-9 }, seconds: 0.05, rules: Object.assign({}, RULES, o.rules || {}), captain: 99 }, o.seed || 1);
  var u = b.units[0];
  return { b: b, u: u, d: b.units.filter(function (x) { return x.side === 'B'; }), atk: b.atk(u), ench: b.stat(u, 'ench'), hp: b.maxHp(u) };
}
// Same step as Battle.run, without unit actions.
function advance(b, secs) {
  var end = b.t + secs;
  while (b.t < end - 1e-9) {
    b.t = Math.round((b.t + b.R.dt) * 1e6) / 1e6;
    var due = b.queue.filter(function (q) { return q.at <= b.t + 1e-9; });
    if (due.length) {
      b.queue = b.queue.filter(function (q) { return q.at > b.t + 1e-9; });
      due.sort(function (x, y) { return x.at - y.at; });
      due.forEach(function (q) { if (!q.owner || q.owner.alive) q.fn(); });
    }
    b.tickStatuses();
  }
}
function by(u, tag) { return u.rec.by[tag] || 0; }
// Damage under `tag` dealt while fn runs (plus `secs` of stepped time).
function dmg(p, tag, fn, secs) {
  var before = by(p.u, tag);
  fn(p.u, p.b);
  if (secs) advance(p.b, secs);
  return by(p.u, tag) - before;
}
function cast(p, slot, secs) { return dmg(p, slot, function (u, b) { u.kit[slot](u, b); }, secs); }
// Poison stacks put straight on a target (no land roll).
function poison(b, src, t, n, pow) {
  var st = b.has(t, 'Poison');
  if (!st) { st = { base: 'Poison', name: 'Poison', kind: 'debuff', tier: 0, stacks: [], src: src }; t.sts.push(st); }
  for (var i = 0; i < n; i++) st.stacks.push({ until: b.t + 15, src: src, pow: pow });
}
function tryApply(b, src, t, name, dur, n) {
  for (var i = 0; i < (n || 10); i++) if (b.apply(src, t, name, 1, dur, { ignoreRes: true })) return true;
  return false;
}
function near(a, e, msg) { assert.ok(Math.abs(a - e) <= Math.max(1, Math.abs(e) * 0.01), msg + ': got ' + a.toFixed(1) + ', expected ' + e.toFixed(1)); }
var checks = 0;
function check(name, fn) { fn(); checks++; console.log('ok', name); }
function explosionOf(b, n, pow) { return n * pow * b.R.poisonPerStack * b.R.poisonInterval; }
// Engine factor on Derivative / DoT damage: x (1 + Enlightenment / derivEnch) when the rules have it.
function derivF(p) { return p.b.R.derivEnch ? 1 + Math.max(0, p.ench) / p.b.R.derivEnch : 1; }

// ------------------------------------------------------------ Poison school

check('Horace battle: 340% ATK; ult: 600% ATK', function () {
  var p = setup('Horace');
  near(cast(p, 'battle'), 3.4 * p.atk, 'battle');
  p.b.remove(p.d[0], 'Poison');
  near(cast(p, 'ult'), 6.0 * p.atk, 'ult');
});

check('Horace ult on a Poisoned target adds one Poison Explosion', function () {
  var p = setup('Horace');
  poison(p.b, p.u, p.d[0], 6, 500);
  near(cast(p, 'ult'), 6.0 * p.atk, 'ult hit');
  near(by(p.u, 'dot'), explosionOf(p.b, 6, 500), 'explosion');
});

check('Eli battle: each basic in 6s fires a 120% ATK bolt; ult: 3 x 265% ATK', function () {
  var p = setup('Eli');
  p.u.kit.battle(p.u, p.b);
  var d = dmg(p, 'battle', function (u, b) { for (var i = 0; i < 3; i++) u.kit.basic(u, b, p.d[0]); });
  assert.strictEqual(p.u.rec.eliBolts, 3);
  near(d, 3 * 1.2 * p.atk, 'bolts');
  near(cast(p, 'ult'), 3 * 2.65 * p.atk, 'ult');
});

check('Eli passive: +40% ATK Derivative on a hit against a Poisoned enemy', function () {
  var p = setup('Eli');
  poison(p.b, p.u, p.d[0], 1, 100);
  near(dmg(p, 'passive', function (u, b) { u.kit.basic(u, b, p.d[0]); }), 0.4 * p.atk, 'passive');
});

check('Corrin battle: 3 x 100% ATK; ult: 400% ATK + 900% Enlightenment', function () {
  var p = setup('Corrin', { ench: 100 });
  near(cast(p, 'battle'), 3 * 1.0 * p.atk, 'battle');
  p.b.remove(p.d[0], 'Poison');
  near(cast(p, 'ult'), 4.0 * p.atk + 9.0 * p.ench, 'ult');
});

check('Corrin ult refreshes Poison, explodes it and spreads it', function () {
  var p = setup('Corrin', { preset: 'dummy5' });
  var t = p.b.target(p.u);
  poison(p.b, p.u, t, 4, 300);
  advance(p.b, 2);
  p.b.has(t, 'Poison').stacks.forEach(function (s) { assert.ok(s.until < p.b.t + 14); });
  var before = by(p.u, 'dot');
  p.u.kit.ult(p.u, p.b);
  p.b.has(t, 'Poison').stacks.forEach(function (s) { near(s.until, p.b.t + 15, 'refreshed'); });
  near(by(p.u, 'dot') - before, explosionOf(p.b, 4, 300), 'explosion');
  var spread = p.d.filter(function (x) { return x !== t && p.b.stacks(x, 'Poison') > 0; });
  assert.ok(spread.length >= 1 && spread.length <= p.b.R.areaSize - 1, 'spread to nearby enemies');
});

check('Corrin passive: a Poisoned enemy dying spreads Poison with 80% ATK + 480% Enlightenment', function () {
  var p = setup('Corrin', { preset: 'dummy5', ench: 100 });
  var t = p.d[0];
  poison(p.b, p.u, t, 3, 200);
  var d = dmg(p, 'passive', function (u, b) { b.damage(t, 1e13, u); });
  assert.ok(!t.alive);
  near(d, (p.b.R.areaSize - 1) * (0.8 * p.atk + 4.8 * p.ench), 'passive');
});

check('Shink battle: 5 x 105% ATK; ult: 5 x 105% ATK', function () {
  var p = setup('Shink');
  near(cast(p, 'battle'), 5 * 1.05 * p.atk, 'battle');
  near(cast(p, 'ult'), 5 * 1.05 * p.atk, 'ult');
});

check('Shink passive: ignores 1% DEF per Poison stack', function () {
  var p = setup('Shink', { rules: { defK: 1000 } });
  var t = p.d[0];
  t.s.defB = 1000; t.s.defF = 0; t.s.defP = 0;
  poison(p.b, p.u, t, 10, 1);
  var r = p.b.hit(p.u, t, 1000, { tag: 'test' });
  near(r.amount, 1000 * 1000 / (1000 + 1000 * 0.9), 'DEF ignored');
});

check('Vicana battle: 3 x 150% ATK; ult: 500% ATK', function () {
  var p = setup('Vicana');
  near(cast(p, 'battle'), 3 * 1.5 * p.atk, 'battle');
  near(cast(p, 'ult'), 5.0 * p.atk, 'ult');
});

check('Vicana mark: each Poison inflicted on it sets off a 105% ATK Derivative blast', function () {
  var p = setup('Vicana');
  p.u.kit.ult(p.u, p.b);
  var landed = 0;
  var d = dmg(p, 'ult', function (u, b) { for (var i = 0; i < 3; i++) if (b.apply(u, p.d[0], 'Poison', 1, 15, { stacks: 1, ignoreRes: true })) landed++; });
  assert.ok(landed >= 1);
  near(d, landed * 1.05 * p.atk, 'blasts');
});

check('Vicana passive: allied Poison ticks interval/(interval - 2) times as often', function () {
  var p = setup('Vicana');
  poison(p.b, p.u, p.d[0], 2, 1000);
  var I = p.b.R.poisonInterval;
  near(dmg(p, 'dot', function () {}, 1.0), 2 * 1000 * p.b.R.poisonPerStack * I / Math.max(1, I - 2), 'one tick');
});

check('Jathalea battle: 300% ATK; ult: 700% ATK', function () {
  var p = setup('Jathalea');
  near(cast(p, 'battle'), 3.0 * p.atk, 'battle');
  near(cast(p, 'ult'), 7.0 * p.atk, 'ult');
});

check('Jathalea passive: dispelled Thorny Poison hits per stack (6% max HP, capped at 100% ATK)', function () {
  var p = setup('Jathalea');
  var t = p.d[0];
  for (var i = 0; i < 10 && p.b.stacks(t, 'Thorny Poison') < 3; i++) p.u.kit.thorny(p.u, p.b, t, 1, 3, 15, 'ult');
  var n = p.b.stacks(t, 'Thorny Poison');
  assert.ok(n >= 3);
  var d = dmg(p, 'passive', function (u, b) { b.dispel(t, 99, 'debuff'); }, 1.0);
  near(d, n * Math.min(0.06 * p.b.maxHp(t), p.atk), 'dispel damage');
});

check('Sleight battle: 4 x (100% ATK + 1000% Enl.); ult: 3 x (240% ATK + 2400% Enl.)', function () {
  var p = setup('Sleight', { ench: 100 });
  near(cast(p, 'battle'), 4 * (1.0 * p.atk + 10.0 * p.ench), 'battle');
  near(cast(p, 'ult'), 3 * (2.4 * p.atk + 24.0 * p.ench), 'ult');
});

check('Sleight passive: Potent Medicine at battle start turns into Poison when dispelled', function () {
  var p = setup('Sleight');
  var t = p.d[0], n = p.b.stacks(t, 'Potent Medicine');
  p.b.dispel(t, 99, 'debuff');
  advance(p.b, 1.0);
  assert.ok(p.b.stacks(t, 'Poison') >= 1 && p.b.stacks(t, 'Poison') <= Math.max(n, 3), 'Poison from Potent Medicine');
});

// ----------------------------------------------------------- Poison support

check('Reytah battle: 250% ATK, then 250% ATK again after a pause', function () {
  var p = setup('Reytah');
  near(cast(p, 'battle', 1.0), 2 * 2.5 * p.atk, 'battle');
});

check('Reytah passive: enemies deal 10% less damage (+8% per debuff on them)', function () {
  var p = setup('Reytah');
  var t = p.d[0];
  near(p.b.hit(t, p.u, 1000, { tag: 'test' }).amount, 900, 'no debuffs');
  tryApply(p.b, p.u, t, 'Attack Penalty II', 5);
  var n = Math.min(3, p.b.countDebuffs(t));
  near(p.b.hit(t, p.u, 1000, { tag: 'test' }).amount, 1000 * (1 - 0.1 - 0.08 * n), 'with debuffs');
});

check('Reytah ult: Defense Up II on allies, enemy debuffs last 5s longer', function () {
  var p = setup('Reytah');
  var t = p.d[0];
  assert.ok(tryApply(p.b, p.u, t, 'Attack Penalty II', 5));
  var until = p.b.has(t, 'Attack Penalty').until;
  p.u.kit.ult(p.u, p.b);
  near(p.b.has(t, 'Attack Penalty').until, until + 5, 'extended');
  assert.ok(p.b.has(p.u, 'Defense Up'));
});

check('Talwer battle: mushroom bursts after 5s for 150% ATK + 900% Enl.; ult: 5 x (80% ATK + 600% Enl.)', function () {
  var p = setup('Talwer', { ench: 100 });
  near(cast(p, 'battle', 5.0), (1.5 * p.atk + 9.0 * p.ench) * derivF(p), 'battle');
  near(cast(p, 'ult', 4.0), 5 * (0.8 * p.atk + 6.0 * p.ench) * derivF(p), 'ult');
});

check('Talwer passive: 2% Damage Reduction per enemy debuff', function () {
  var p = setup('Talwer');
  var t = p.d[0];
  tryApply(p.b, p.u, t, 'Attack Penalty II', 5);
  var n = p.b.countDebuffs(t);
  assert.ok(n >= 1);
  near(p.b.hit(t, p.u, 1000, { tag: 'test' }).amount, 1000 * (1 - 0.02 * n), 'reduced');
});

check('Gareth battle: 340% DEF after Defense Up II; ult: 620% ATK', function () {
  var p = setup('Gareth');
  var d = cast(p, 'battle');
  assert.ok(p.b.has(p.u, 'Defense Up'));
  near(d, 3.4 * p.b.def(p.u), 'battle');
  near(cast(p, 'ult'), 6.2 * p.atk, 'ult');
});

check('Gareth: 30% less damage from the struck enemy; big hits heal 50%', function () {
  var p = setup('Gareth');
  p.u.kit.battle(p.u, p.b);
  var hit = 0.3 * p.u.hp / 0.7;
  var r = p.b.hit(p.d[0], p.u, hit, { tag: 'test' });
  near(r.amount, 0.7 * hit, 'reduced');
  near(p.u.rec.heal, 0.5 * r.amount, 'healed');
});

check('Eches battle: 280% ATK; ult: 550% ATK; debuffed enemies deal 10% less', function () {
  var p = setup('Eches');
  near(cast(p, 'battle'), 2.8 * p.atk, 'battle');
  near(cast(p, 'ult'), 5.5 * p.atk, 'ult');
  var q = setup('Eches');
  assert.ok(tryApply(q.b, q.u, q.d[0], 'Attack Penalty II', 5));
  near(q.b.hit(q.d[0], q.u, 1000, { tag: 'test' }).amount, 900, 'damage cut');
});

check('Theodore battle: 2 x 210% ATK; ult: 760% ATK; Control on an enemy gives +10 energy', function () {
  var p = setup('Theodore');
  near(cast(p, 'battle'), 2 * 2.1 * p.atk, 'battle');
  near(cast(p, 'ult'), 7.6 * p.atk, 'ult');
  var q = setup('Theodore', { preset: 'dummy5' });
  var e0 = q.u.energy;
  assert.ok(tryApply(q.b, q.u, q.d[0], 'Stunned', 3));
  near(q.u.energy - e0, 10, 'energy');
});

check('Garian battle: heal 15% target max HP + 2000% Enl.; ult: 8 x (1% max HP + 350% Enl.)', function () {
  var p = setup('Garian', { ench: 100 });
  p.u.hp = 1;
  p.u.kit.battle(p.u, p.b);
  near(p.u.rec.heal, 0.15 * p.hp + 20.0 * p.ench, 'battle heal');
  assert.ok(p.b.has(p.u, 'Debuff Immunity'));
  var q = setup('Garian', { ench: 100 });
  q.u.hp = 1;
  q.u.kit.ult(q.u, q.b);
  advance(q.b, 8.0);
  near(q.u.rec.heal, 8 * (0.01 * q.hp + 3.5 * q.ench), 'ult heal');
});

check('Sifris battle: pays 10% current HP, heals the other allies 20% of her max HP', function () {
  var p = setup(['Sifris', 'Sigrid']);
  var ally = p.b.units[1], hp0 = p.u.hp;
  ally.hp = 1;
  p.u.kit.battle(p.u, p.b);
  near(p.u.hp, 0.9 * hp0, 'HP cost');
  near(p.u.rec.heal, 0.2 * p.hp, 'heal');
});

check('Sifris ult: resurrects a dead ally at 30% max HP with 75% of its energy', function () {
  var p = setup(['Sifris', 'Sigrid']);
  var ally = p.b.units[1];
  ally.energy = 40;
  p.b.kill(ally, p.d[0]);
  var hp0 = p.u.hp;
  p.u.kit.ult(p.u, p.b);
  assert.ok(ally.alive);
  near(ally.hp, 0.3 * p.b.maxHp(ally), 'revive HP');
  near(ally.energy, 30, 'energy kept');
  near(p.u.hp, 0.7 * hp0, 'HP cost');
  assert.ok(p.b.has(ally, 'Defense Up'));
});

check('Sifris passive: first drop under 30% HP gives Resurrection at Death', function () {
  var p = setup('Sifris');
  p.b.damage(p.u, 0.75 * p.hp, p.d[0]);
  assert.ok(p.b.has(p.u, 'Resurrection at Death'));
  p.b.damage(p.u, 10 * p.hp, p.d[0]);
  advance(p.b, 0.05);
  assert.ok(p.u.alive);
  near(p.u.hp, 0.3 * p.hp, 'revived');
});

check('Sigrid battle: 2 x 210% ATK; ult: 760% ATK; debuffed enemy death gives 25 energy', function () {
  var p = setup('Sigrid');
  near(cast(p, 'battle'), 2 * 2.1 * p.atk, 'battle');
  near(cast(p, 'ult'), 7.6 * p.atk, 'ult');
  var q = setup('Sigrid', { preset: 'dummy5' });
  var t = q.d[1];
  assert.ok(tryApply(q.b, q.u, t, 'Attack Penalty II', 5));
  var e0 = q.u.energy;
  q.b.damage(t, 1e13, q.d[0]);
  near(q.u.energy - e0, 25, 'energy');
});

check('Heksandra battle: heal 150% ATK + 1500% Enl. (+30% under 40% HP); ult: 20% target max HP', function () {
  var p = setup('Heksandra', { ench: 100 });
  p.u.hp = 1;
  p.u.kit.battle(p.u, p.b);
  near(p.u.rec.heal, 1.3 * (1.5 * p.atk + 15.0 * p.ench), 'battle heal');
  var q = setup('Heksandra');
  q.u.hp = 0.5 * q.hp;
  q.u.kit.ult(q.u, q.b);
  near(q.u.rec.heal, 0.2 * q.hp, 'ult heal');
});

// --------------------------------------------- other-school Legendaries

check('Khrysos battle: 3 x 100% ATK + 15% max HP shield; ult: 500% ATK + 10% max HP, 25% shield', function () {
  var p = setup('Khrysos');
  near(cast(p, 'battle'), 3 * 1.0 * p.atk, 'battle');
  near(p.u.rec.shield, 0.15 * p.hp, 'battle shield');
  var q = setup('Khrysos');
  near(cast(q, 'ult'), 5.0 * q.atk + 0.1 * q.hp, 'ult');
  near(q.u.rec.shield, 0.25 * q.hp, 'ult shield');
});

check('Khrysos passive: 50% of shield used turns into healing', function () {
  var p = setup('Khrysos');
  p.b.shield(p.u, p.u, 5000, 10);
  p.u.hp = 0.5 * p.hp;
  p.b.damage(p.u, 1000, p.d[0]);
  advance(p.b, 1.0);
  near(p.u.rec.heal, 500, 'converted');
});

check('Tamar battle: 300% ATK; ult: 700% ATK; enemy buff triggers a 100% ATK strike once per 5s', function () {
  var p = setup('Tamar');
  near(cast(p, 'battle'), 3.0 * p.atk, 'battle');
  near(cast(p, 'ult'), 7.0 * p.atk, 'ult');
  var q = setup('Tamar');
  var d = dmg(q, 'passive', function (u, b) { b.buff(q.d[0], q.d[0], 'Enrage', 10, { atkP: 1 }); b.buff(q.d[0], q.d[0], 'Rage 2', 10, { atkP: 1 }); });
  near(d, 1.0 * q.atk, 'passive');
});

check('The Dark Lady battle: 2 x 150% ATK (ASSUMED); ult: 2 x 350% ATK (ASSUMED)', function () {
  var p = setup('The Dark Lady');
  near(cast(p, 'battle'), 2 * 1.5 * p.atk, 'battle');
  near(cast(p, 'ult'), 2 * 3.5 * p.atk, 'ult');
});

check('The Dark Lady passive: a death shares HP (cap 30% of hers) and heals 10% max HP', function () {
  var p = setup(['The Dark Lady', 'Sigrid'], { preset: 'dummy5' });
  var ally = p.b.units[1], mh0 = p.b.maxHp(ally);
  ally.hp = 1;
  p.b.damage(p.d[0], 1e13, p.u);
  near(p.b.maxHp(ally), mh0 + 0.3 * p.hp, 'HP gained');
  near(p.u.rec.heal, 0.1 * p.b.maxHp(ally), 'heal');
});

check("Ghul'ende battle: 5 x 150% ATK and 5 x 150% ATK self-heal; ult: 720% ATK, heal 10% max HP", function () {
  var p = setup("Ghul'ende");
  p.u.hp = 1;
  near(cast(p, 'battle', 3.0), 5 * 1.5 * p.atk, 'battle');
  near(p.u.rec.heal, 5 * 1.5 * p.atk, 'battle heal');
  var q = setup("Ghul'ende");
  q.u.hp = 1;
  near(cast(q, 'ult'), 7.2 * q.atk, 'ult');
  near(q.u.rec.heal, 0.1 * q.hp, 'ult heal');
});

check('Donella battle: 400% ATK; ult: 700% ATK; puppet bird 200% ATK every 8s', function () {
  var p = setup('Donella');
  near(cast(p, 'battle'), 4.0 * p.atk, 'battle');
  near(cast(p, 'ult'), 7.0 * p.atk, 'ult');
  near(dmg(p, 'passive', function () {}, 8.0), 2.0 * p.atk, 'bird');
});

// ------------------------------------------------------------------- smoke

check('smoke: every kit in full teams vs boss and dummy5 (inspiration 0 and 5)', function () {
  var ids = [20130, 20280, 21300, 22020, 20630, 20290, 22430, 21870, 21320, 23170, 20750, 23200, 23180, 21680, 20650, 20780, 20450, 20830, 23011, 22310, 21460];
  ids.forEach(function (id) { assert.ok(S.kits()[id] && S.kits()[id].conf === 'hand', 'kit ' + id); });
  for (var i = 0; i < ids.length; i += 5) {
    var team = ids.slice(i, i + 5);
    while (team.length < 5) team.push(ids[team.length]);
    [0, 5].forEach(function (insp) {
      ['boss', 'dummy5'].forEach(function (preset) {
        var r = S.simulate({ team: team.map(function (h) { return { hero: h, insp: insp }; }), enemy: { preset: preset }, runs: 3 });
        assert.ok(r.dps.mean > 0 && isFinite(r.dps.mean), 'dps ' + preset);
        r.perHero.forEach(function (x) { assert.ok(isFinite(x.damage) && isFinite(x.healing), x.name); });
      });
    });
  }
});

console.log(checks + ' checks passed');
