// Checks the kits in kits/extra-ice.js against their official texts.
// Probe setup as in kits.test.js: one hero, no crit, no DEF mitigation, one
// dummy, so damage per cast must equal the stat x the printed multipliers.
// Run: node simulator/tests/extra-ice.test.js
var assert = require('assert');
var S = require('../node-loader.js');

var NO_DEF = { defK: 1e15, energyRegen: 0, energyPerBasic: 0, energyPerHitTaken: 0, battleFirst: 0.5, battleCd: 1000, bossControlMult: 1, landCap: 1, accShift: 300, ultFirst: 1000, heroTiming: false };

// Runs a short battle; casts happen on their own (battle skill at 0.5s).
function probe(hero, extra) {
  extra = extra || {};
  var spec = { hero: hero, level: 60, gear: 'none', insp: extra.insp || 0, stats: { critRate: 0, ench: extra.ench == null ? 0 : extra.ench } };
  var b = S.runOnce({
    team: [spec], enemy: { preset: extra.preset || 'dummy', level: 60, res: extra.res }, seconds: extra.seconds || 3,
    rules: Object.assign({}, NO_DEF, extra.rules || {}), captain: 99
  }, 1);
  var u = b.units[0];
  return { b: b, u: u, d: b.units[1], atk: b.atk(u), ench: b.stat(u, 'ench'), hp: b.maxHp(u), def: b.def(u) };
}
// Builds the battle (0.1s, nothing cast) so a test can call kit methods directly.
function setup(hero, extra) {
  extra = extra || {};
  return probe(hero, Object.assign({}, extra, { seconds: 0.1, rules: Object.assign({ battleFirst: 1000 }, extra.rules || {}) }));
}
function near(a, e, msg) { assert.ok(Math.abs(a - e) <= Math.max(1, Math.abs(e) * 0.01), msg + ': got ' + a.toFixed(1) + ', expected ' + e.toFixed(1)); }
function by(u, tag) { return u.rec.by[tag] || 0; }
var checks = 0;
function check(name, fn) { fn(); checks++; console.log('ok', name); }

// ------------------------------------------------------------------ FROST --
check('Rowena battle skill: 365% ATK on the lowest-HP enemy', function () {
  var p = probe('Rowena');
  near(by(p.u, 'battle'), 3.65 * p.atk, 'battle');
});
check('Rowena ult: 560% ATK (no Frost) / 800% ATK (Frost)', function () {
  var p = setup('Rowena');
  p.u.kit.ult(p.u, p.b);
  near(by(p.u, 'ult'), 5.6 * p.atk, 'ult no Frost');
  var q = setup('Rowena');
  q.b.apply(q.u, q.d, 'Frost', 1, 10);
  q.u.kit.ult(q.u, q.b);
  near(by(q.u, 'ult'), 8.0 * q.atk, 'ult Frost');
});
check('Rowena passive: ignores 20% DEF of a Frosted enemy (0 Crit Rate)', function () {
  var p = setup('Rowena', { rules: { defK: 1000 } });
  p.b.apply(p.u, p.d, 'Frost', 1, 10);
  p.u.kit.ult(p.u, p.b);
  near(by(p.u, 'ult'), 8.0 * p.atk * 1000 / (1000 + 0.8 * p.b.def(p.d)), 'ult vs DEF');
});

check('Rava battle skill: one orb (260% ATK) on one enemy, 3 orbs on five', function () {
  var p = setup('Rava');
  p.u.kit.battle(p.u, p.b);
  near(by(p.u, 'battle'), 2.6 * p.atk, 'one enemy');
  var q = setup('Rava', { preset: 'dummy5', res: 1e9 });
  q.u.kit.battle(q.u, q.b);
  near(by(q.u, 'battle'), 3 * 2.6 * q.atk, 'five enemies');
});
check('Rava ult: 6 pulses x 50% ATK + 360% ATK explosion', function () {
  var p = probe('Rava', { seconds: 12, res: 1e9, rules: { battleFirst: 1000, energyRegen: 1000, castUlt: 100 } });
  assert.strictEqual(p.u.rec.ults, 1);
  near(by(p.u, 'ult'), 6 * 0.5 * p.atk + 3.6 * p.atk, 'ult');
});
check('Rava passive: one Attack Up stack per Frosted enemy', function () {
  var p = setup('Rava', { preset: 'dummy5' });
  p.b.apply(p.u, p.b.units[1], 'Frost', 1, 10);
  p.b.apply(p.u, p.b.units[2], 'Frost', 1, 10);
  var s = p.u.s;
  near(p.b.atk(p.u), s.atkB * (1 + s.atkP + 2 * p.b.tierValue('Attack Up', 1)) + s.atkF, 'ATK with 2 stacks');
});

check('Olgan battle skill: 330% ATK; Frozen on a Frosted target', function () {
  var p = setup('Olgan');
  p.b.apply(p.u, p.d, 'Frost', 1, 10);
  p.u.kit.battle(p.u, p.b);
  near(by(p.u, 'battle'), 3.3 * p.atk, 'battle');
  assert.ok(p.b.has(p.d, 'Frozen'), 'Frozen');
});
check('Olgan ult: 550% ATK, then +25% ATK to Frost allies', function () {
  var p = setup('Olgan');
  p.u.kit.ult(p.u, p.b);
  near(by(p.u, 'ult'), 5.5 * p.atk, 'ult');
  var s = p.u.s;
  near(p.b.atk(p.u), s.atkB * (1 + s.atkP + 0.25) + s.atkF, 'ATK after');
});
check('Olgan passive: 20% ATK per second after a cast', function () {
  var p = probe('Olgan', { seconds: 3.5 });
  near(by(p.u, 'passive'), 3 * 0.2 * p.atk, 'passive (3 ticks)');
});

check('Dorkuraz battle skill: 280% ATK and +25 energy; ult 480% ATK', function () {
  var p = setup('Dorkuraz');
  p.u.kit.battle(p.u, p.b);
  near(by(p.u, 'battle'), 2.8 * p.atk, 'battle');
  near(p.u.energy, 25, 'energy');
  p.u.kit.ult(p.u, p.b);
  near(by(p.u, 'ult'), 4.8 * p.atk, 'ult');
});

check('Vidimir battle skill: 350% ATK', function () {
  var p = setup('Vidimir');
  p.u.kit.battle(p.u, p.b);
  near(by(p.u, 'battle'), 3.5 * p.atk, 'battle');
});
check('Vidimir ult on one enemy: 260% ATK, +260% ATK explosion if Frosted', function () {
  var p = setup('Vidimir');
  p.u.kit.ult(p.u, p.b);
  near(by(p.u, 'ult'), 2.6 * p.atk, 'no Frost');
  var q = setup('Vidimir');
  q.b.apply(q.u, q.d, 'Frost', 1, 10);
  q.u.kit.ult(q.u, q.b);
  near(by(q.u, 'ult'), 5.2 * q.atk, 'Frost');
  assert.ok(!q.b.has(q.d, 'Frost'), 'Frost removed');
});
check('Vidimir passive: a Frosted enemy dies -> Attack Up and +15 energy', function () {
  var p = setup('Vidimir', { preset: 'dummy5' });
  var d = p.b.units[1];
  p.b.apply(p.u, d, 'Frost', 1, 10);
  p.b.damage(d, 1e13, p.u);
  assert.ok(!d.alive && p.b.has(p.u, 'Icebreaker'), 'buff');
  near(p.u.energy, 15, 'energy');
});

check("Drizzt battle skill: 1, 2, then 3 hits of 75% ATK", function () {
  var p = setup("Drizzt Do'Urden");
  for (var i = 0; i < 3; i++) p.u.kit.battle(p.u, p.b);
  near(by(p.u, 'battle'), 0.75 * (1 + 2 + 3) * p.atk, 'three casts');
});
check('Drizzt ult: 3 + 3 hits x 110% ATK; +0.6% per 1% HP lost (max 30%)', function () {
  var p = setup("Drizzt Do'Urden");
  p.u.kit.ult(p.u, p.b);
  near(by(p.u, 'ult'), 6 * 1.1 * p.atk, 'full HP');
  var q = setup("Drizzt Do'Urden");
  q.d.hp = 0.5 * q.b.maxHp(q.d);
  q.u.kit.ult(q.u, q.b);
  near(by(q.u, 'ult'), 6 * 1.1 * 1.3 * q.atk, 'half HP');
});

check('Trolgar battle skill: 400% ATK; first Frost adds 10% target max HP (cap 1500% ATK)', function () {
  var p = setup('Trolgar');
  p.u.kit.battle(p.u, p.b);
  near(by(p.u, 'battle'), 4.0 * p.atk, 'battle');
  near(by(p.u, 'passive'), 15 * p.atk, 'passive (capped on the dummy)');
  p.b.apply(p.u, p.d, 'Frost', 1, 10);
  near(by(p.u, 'passive'), 15 * p.atk, 'only the first Frost');
});
check('Trolgar ult: +20% ATK to Frost heroes, then 2 x 320% ATK', function () {
  var p = setup('Trolgar');
  p.u.kit.ult(p.u, p.b);
  near(by(p.u, 'ult'), 2 * 3.2 * 1.2 * p.atk, 'ult');
});
check('Trolgar Frigid Force: a skill hit gives a stack; next basic is a 200% ATK Tornado Slash', function () {
  var p = setup('Trolgar');
  p.u.cdBattle = 0; p.u.basicT = 99;
  p.b.act(p.u);
  assert.strictEqual(p.u.flags.frigid, 1);
  var before = by(p.u, 'basic');
  p.u.kit.basic(p.u, p.b, p.d);
  near(by(p.u, 'basic') - before, 2.0 * p.atk, 'Tornado Slash');
  assert.strictEqual(p.u.flags.frigid, 0);
});

// ------------------------------------------------------------ ICE SUPPORT --
check('Lucien: start shield 8% max HP; battle 300% ATK + 7% HP; ult 500% ATK + 11% HP', function () {
  var p = setup('Lucien');
  near(p.u.rec.shield, 0.08 * p.hp, 'Oath of Dawn shield');
  p.u.energy = 50;
  p.b.energy(p.u, -20);
  near(p.u.energy, 50, 'no energy cut under the shield');
  p.b.apply(p.d, p.u, 'Stunned', 1, 5, { ignoreRes: true });
  assert.ok(!p.b.has(p.u, 'Stunned'), 'control immunity under the shield');
  p.u.kit.battle(p.u, p.b);
  near(by(p.u, 'battle'), 3.0 * p.atk + 0.07 * p.hp, 'battle');
  p.u.kit.ult(p.u, p.b);
  near(by(p.u, 'ult'), 5.0 * p.atk + 0.11 * p.hp, 'ult');
});

check('Elecebre: start 150% ATK to all; battle shield 30% max HP + 30% of her RES', function () {
  var p = setup('Elecebre');
  near(by(p.u, 'passive'), 1.5 * p.atk, 'passive');
  p.u.kit.battle(p.u, p.b);
  near(p.u.rec.shield, 0.3 * p.hp, 'shield');
  var st = p.b.has(p.u, "Nature's Blessing");
  near(st.mods.res, 0.3 * (p.b.stat(p.u, 'res') - st.mods.res), 'RES share');
});
check('Charmed (control) and Blind land as hostile statuses', function () {
  var p = setup('Elecebre');
  S.iceKitHelpers.charm(p.b, p.u, p.d, 1, 5, { ignoreRes: true });
  assert.ok(p.b.controlled(p.d), 'Charmed stops actions');
  assert.strictEqual(p.b.countDebuffs(p.d), 1);
  S.iceKitHelpers.blind(p.b, p.u, p.d, 1, 5, { ignoreRes: true });
  var r = p.b.hit(p.d, p.u, 100, { tag: 'basic' });
  assert.strictEqual(r.amount, 0, 'Blind: basic attack misses');
});

check('Lethander battle 430% ATK; ult 720% ATK', function () {
  var p = setup('Lethander');
  p.u.kit.battle(p.u, p.b);
  near(by(p.u, 'battle'), 4.3 * p.atk, 'battle');
  p.u.kit.ult(p.u, p.b);
  near(by(p.u, 'ult'), 7.2 * p.atk, 'ult');
});

check('Elvis battle skill: shield 375% DEF; 260% DEF when it wears off', function () {
  var p = probe('Elvis', { seconds: 7 });
  near(p.u.rec.shield, 3.75 * p.def, 'shield');
  near(by(p.u, 'battle'), 2.6 * p.def, 'blast');
});
check('Elvis ult: Defense Up II; 75% DEF back when hit', function () {
  var p = setup('Elvis');
  p.u.kit.ult(p.u, p.b);
  p.b.hit(p.d, p.u, 100, { tag: 'test', noCrit: true });
  near(by(p.u, 'ult'), 0.75 * p.b.def(p.u), 'counter');
  near(p.b.def(p.u), p.u.s.defB * (1 + p.u.s.defP + p.b.tierValue('Defense Up', 2)) + p.u.s.defF, 'Defense Up II');
});

check('Soveliss: ult 2 x 320% ATK; battle heals 10% target max HP; passive arrow 200% ATK', function () {
  var p = setup('Soveliss');
  p.u.kit.ult(p.u, p.b);
  near(by(p.u, 'ult'), 2 * 3.2 * p.atk, 'ult');
  p.u.hp = 0.5 * p.hp;
  p.u.kit.battle(p.u, p.b);
  near(p.u.rec.heal, 0.1 * p.hp, 'heal');
  assert.ok(p.b.has(p.u, 'Hit Recovery'));
  p.b.apply(p.d, p.d, 'Invisibility', 1, 10);
  near(by(p.u, 'passive'), 2.0 * p.atk, 'arrow');
  assert.ok(!p.b.has(p.d, 'Invisibility'), 'Invisibility removed');
});

check('Dallbam: battle shield 15% max HP; ult 520% DEF; survives the first fatal hit', function () {
  var p = setup('Dallbam');
  p.u.kit.battle(p.u, p.b);
  near(p.u.rec.shield, 0.15 * p.hp, 'shield');
  var def = p.b.def(p.u);
  p.u.kit.ult(p.u, p.b);
  near(by(p.u, 'ult'), 5.2 * def, 'ult');
  p.u.shields = [];
  p.b.damage(p.u, 1e9, p.d);
  assert.ok(p.u.alive && p.b.has(p.u, 'Invincibility'), 'crystal armor');
});

// ---------------------------------------------------------- OWNED EPICS --
check('Brody: battle 330% DEF; ult 600% DEF; copies 50% of an enemy shield', function () {
  var p = setup('Brody');
  p.u.kit.battle(p.u, p.b);
  near(by(p.u, 'battle'), 3.3 * p.def, 'battle');
  p.u.kit.ult(p.u, p.b);
  near(by(p.u, 'ult'), 6.0 * p.def, 'ult');
  p.b.shield(p.d, p.d, 1000, 10);
  near(p.u.rec.shield, 500, 'copied shield');
});

check('Liko: ult 780% ATK; battle heals 20% target max HP; Accuracy Up without buffs', function () {
  var p = setup('Liko');
  assert.ok(p.b.has(p.u, 'Bloodline Accuracy Up'), 'Accuracy Up');
  p.u.kit.ult(p.u, p.b);
  near(by(p.u, 'ult'), 7.8 * p.atk, 'ult');
  assert.ok(p.b.has(p.d, 'Buff Prohibition'));
  p.u.hp = 0.5 * p.hp;
  p.u.kit.battle(p.u, p.b);
  near(p.u.rec.heal, 0.2 * p.hp, 'heal');
  assert.ok(p.b.has(p.u, 'Bloodline Resistance Up') && !p.b.has(p.u, 'Bloodline Accuracy Up'), 'switches to Resistance Up');
});

check('Irma: battle 355% DEF; ult 740% DEF + 30% Damage Reduction', function () {
  var p = setup('Irma');
  p.u.kit.battle(p.u, p.b);
  near(by(p.u, 'battle'), 3.55 * p.def, 'battle');
  p.u.kit.ult(p.u, p.b);
  near(by(p.u, 'ult'), 7.4 * p.def, 'ult');
  near(p.b.stat(p.u, 'dmgRed'), 0.3, 'damage reduction');
});

check('Thia: ult 850% ATK; battle heal 200% ATK + 2000% Enlightenment; Invisible allies take 15% less', function () {
  var p = setup('Thia', { ench: 100 });
  p.u.kit.ult(p.u, p.b);
  near(by(p.u, 'ult'), 8.5 * p.atk, 'ult');
  assert.ok(p.b.has(p.u, 'Invisibility') && p.b.has(p.u, 'Debuff Immunity'));
  p.u.hp = 0.3 * p.hp;
  p.u.kit.battle(p.u, p.b);
  near(p.u.rec.heal, 2.0 * p.atk + 20.0 * p.ench, 'heal');
  var hp0 = p.u.hp;
  p.b.damage(p.u, 1000, p.d);
  near(hp0 - p.u.hp, 850, 'damage taken while Invisible');
});

check('Martina battle: 310% ATK; with 2+ enemies a sure crit and 1 Rally (+10 energy)', function () {
  var p = setup('Martina');
  p.u.kit.battle(p.u, p.b);
  near(by(p.u, 'battle'), 3.1 * p.atk, 'one enemy');
  var q = setup('Martina', { preset: 'dummy5' });
  q.u.kit.battle(q.u, q.b);
  near(by(q.u, 'battle'), 3 * 3.1 * q.atk * (1 + q.b.stat(q.u, 'critDmg')), 'three enemies, crit');
  assert.strictEqual(q.u.flags.rally, 1);
  near(q.u.energy, 10, 'energy');
});
check('Martina ult: 620% ATK; 1 Rally +20% damage', function () {
  var p = setup('Martina');
  p.u.kit.ult(p.u, p.b);
  near(by(p.u, 'ult'), 6.2 * p.atk, 'no Rally');
  var q = setup('Martina');
  q.u.flags.rally = 1;
  q.u.kit.ult(q.u, q.b);
  near(by(q.u, 'ult'), 6.2 * 1.2 * q.atk, '1 Rally');
  assert.strictEqual(q.u.flags.rally, 0);
});

check('Zadok: battle 300% ATK (+2 Soul Lantern); ult 3 x 235% ATK', function () {
  var p = setup('Zadok');
  p.u.kit.battle(p.u, p.b);
  near(by(p.u, 'battle'), 3.0 * p.atk, 'battle');
  assert.strictEqual(p.u.flags.soul, 2);
  p.u.kit.ult(p.u, p.b);
  near(by(p.u, 'ult'), 3 * 2.35 * p.atk, 'ult');
});

// ------------------------------------------------------------------ smoke --
check('smoke: teams of 5 with every new kit vs boss and dummy5', function () {
  var teams = [
    ['Rowena', 'Rava', 'Olgan', 'Dorkuraz', 'Vidimir'],
    ["Drizzt Do'Urden", 'Trolgar', 'Lucien', 'Elecebre', 'Lethander'],
    ['Elvis', 'Soveliss', 'Dallbam', 'Brody', 'Liko'],
    ['Irma', 'Thia', 'Martina', 'Zadok', 'Trolgar']
  ];
  teams.forEach(function (names, ti) {
    var team = names.map(function (n) { return { hero: n, level: 60, insp: ti % 2 ? 5 : 0 }; });
    ['boss', 'dummy5'].forEach(function (preset) {
      var r = S.simulate({ team: team, enemy: { preset: preset, level: 60 }, runs: 4, seconds: 60 });
      assert.ok(r.dps.mean > 0, names.join(',') + ' vs ' + preset);
      r.perHero.forEach(function (h) { assert.strictEqual(h.kit, 'hand', h.name + ' kit'); });
    });
  });
  // Team vs team, so the kits also run on side B (arena).
  var a = teams[0].map(function (n) { return { hero: n, level: 60 }; });
  var e = teams[1].map(function (n) { return { hero: n, level: 60, insp: 5 }; });
  var r = S.simulate({ team: a, enemy: { team: e }, mode: 'arena', runs: 4, seconds: 60 });
  assert.ok(r.runs === 4);
  var r2 = S.simulate({ team: teams[2].map(function (n) { return { hero: n, level: 60 }; }), enemy: { team: teams[3].map(function (n) { return { hero: n, level: 60 }; }) }, mode: 'arena', runs: 4, seconds: 60 });
  assert.ok(r2.runs === 4);
});

console.log(checks + ' checks passed');
