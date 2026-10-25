// Survival checks (v0.3): the acceptance tests from the review thread
// (sim-review/REQUIREMENTS.md, T2-T19) that can run in Node.
// Run: node simulator/tests/survival.test.js
var assert = require('assert');
var S = require('../node-loader.js');

var checks = 0;
function check(name, fn) { return Promise.resolve(fn()).then(function () { checks++; console.log('ok', name); }); }
function near(a, e, tol, msg) { assert.ok(Math.abs(a - e) <= tol, (msg || '') + ' got ' + a + ', expected ' + e + ' ±' + tol); }
var TEAM = ['Lossenia', 'Auster', 'Hvitar', 'Voresh', 'Ergander'];
function team(extra) { return TEAM.map(function (n, i) { return Object.assign({ hero: n, level: 59 }, extra && extra[i]); }); }
function opts(o) { return Object.assign({ team: team(), enemy: { preset: 'harpy', level: 59 }, seconds: 180, mode: 'grave_of_venom', runs: 60 }, o || {}); }
function bare() { return S.runOnce({ team: [{ hero: 'Voresh', level: 60, gear: 'none' }], enemy: { preset: 'dummy', level: 60 }, seconds: 0.1, captain: 99 }, 1); }

// Land rate of a 75% debuff at a given ACC - RES gap.
function landRate(diff, n) {
  var b = bare(), src = b.units[0], tgt = b.units[1], ok = 0;
  src.s.acc = Math.max(0, diff); tgt.s.res = Math.max(0, -diff);
  for (var i = 0; i < n; i++) { tgt.sts = []; if (b.apply(src, tgt, 'Attack Penalty II', 0.75, 5)) ok++; }
  return { rate: ok / n, src: src };
}

var tests = [
  ['T2 75% debuff at ACC-RES +50 lands about 0.75 x 95%', function () {
    var r = landRate(50, 10000);
    near(r.rate, 0.75 * 0.95, 0.015);
    assert.strictEqual(r.src.rec.dTry, 10000);
  }],
  ['T3 75% debuff at ACC-RES -50 lands about 0.75 x 17%', function () { near(landRate(-50, 10000).rate, 0.75 * 0.17, 0.015); }],
  ['T4 same seed twice = identical fight', function () {
    var a = S.simulate(opts({ runs: 20 })), b = S.simulate(opts({ runs: 20 }));
    assert.strictEqual(JSON.stringify(a.survival.runs), JSON.stringify(b.survival.runs));
    assert.strictEqual(a.dps.mean, b.dps.mean);
  }],
  ['T5 healer vs no healer: Oggok for Hvitar survives a hard Harpy better', function () {
    var hard = { rules: { bossPower: 1.6 }, runs: 80 };
    var no = S.simulate(opts(hard));
    var t = team(); t[2] = { hero: 'Oggok', level: 59 };
    var yes = S.simulate(opts(Object.assign({ team: t }, hard)));
    var deaths = function (r) { return r.perHero.reduce(function (s, p) { return s + p.deathRate; }, 0); };
    assert.ok(yes.winRate > no.winRate, 'win ' + yes.winRate + ' vs ' + no.winRate);
    assert.ok(deaths(yes) < deaths(no), 'deaths');
    assert.ok(yes.teamHpLeft.mean > no.teamHpLeft.mean, 'hp left');
  }],
  ['T6 boss strength 0: no deaths, always wins', function () {
    var r = S.simulate(opts({ rules: { bossPower: 0 }, runs: 20 }));
    assert.strictEqual(r.winRate, 1);
    r.perHero.forEach(function (p) { assert.strictEqual(p.deathRate, 0); });
  }],
  ['T7 very strong boss: team wipes, deaths have times', function () {
    var r = S.simulate(opts({ rules: { bossPower: 8 }, runs: 20 }));
    assert.strictEqual(r.winRate, 0);
    assert.strictEqual(r.survival.loss, 1);
    r.perHero.forEach(function (p) { assert.strictEqual(p.deathRate, 1); assert.ok(p.deathTime && p.deathTime.p50 > 0); });
  }],
  ['T8 a dead hero stops casting and dealing damage', function () {
    var b = S.runOnce(opts({ rules: { bossPower: 8 } }), 5);
    b.units.filter(function (u) { return u.side === 'A'; }).forEach(function (u) { assert.ok(!u.alive); });
    var tr = S.replay(opts({ rules: { bossPower: 8 } }), 5);
    var deadAt = {};
    tr.events.forEach(function (e) {
      if (e.k === 'x') deadAt[e.g] = e.t;
      if ((e.k === 'd' || e.k === 'u' || e.k === 'k' || e.k === 'h') && deadAt[e.s] != null) assert.ok(e.t <= deadAt[e.s], 'unit ' + e.s + ' acted after death');
    });
  }],
  ['T9 shield 1000 then an 800 hit: HP unchanged, 200 shield left', function () {
    var b = bare(), u = b.units[0], hp = u.hp;
    b.shield(u, u, 1000, 10);
    b.damage(u, 800, b.units[1], {});
    assert.strictEqual(u.hp, hp);
    near(u.shields[0].amt, 200, 1e-6);
  }],
  ['T10 Healing Prohibition blocks healing', function () {
    var b = bare(), u = b.units[0];
    u.hp = u.maxHp0 / 2;
    b.units[1].side = 'B';
    b.apply(b.units[1], u, 'Healing Prohibition', 1, 10, { ignoreRes: true });
    assert.strictEqual(b.heal(u, u, 5000), 0);
    b.remove(u, 'Healing Prohibition');
    assert.ok(b.heal(u, u, 5000) > 0);
  }],
  ['Healing Reduction halves healing; max HP cut caps healing', function () {
    var b = bare(), u = b.units[0];
    u.hp = 1; b.units[1].side = 'B';
    b.apply(b.units[1], u, 'Healing Reduction', 1, 10, { ignoreRes: true });
    near(b.heal(u, u, 1000), 500, 1e-6);
    u.maxHpCut = u.maxHp0 - 100; u.hp = 50;
    near(b.heal(u, u, 100000), 50, 1e-6);
  }],
  ['T12 typed totals are not raised again by set stats or artifact main stats', function () {
    var typed = { atk: 2000, hp: 20000, def: 800, critRate: 0.3, totals: true };
    var a = S.finalStats(S.buildStats({ hero: 'Auster', level: 59, stats: typed }).s);
    var b = S.finalStats(S.buildStats({ hero: 'Auster', level: 59, stats: typed, sets: [{ name: 'Imperial Executioner', pieces: 3 }], artifact: { name: 'Ring of Winter', level: 20 } }).s);
    assert.strictEqual(a.atk, 2000); assert.strictEqual(b.atk, 2000); assert.strictEqual(b.critRate, 0.3); assert.strictEqual(b.hp, 20000);
    var c = S.finalStats(S.buildStats({ hero: 'Auster', level: 59, sets: [{ name: 'Imperial Executioner', pieces: 3 }] }).s);
    var d = S.finalStats(S.buildStats({ hero: 'Auster', level: 59 }).s);
    assert.ok(c.atk > d.atk, 'without typed stats the 2-piece ATK% is added');
  }],
  ['Typed totals keep the base: % buffs and auras scale off base, not the typed total', function () {
    var base = S.nakedStats(S.hero('Auster'), 59).atk;
    var b = S.runOnce(opts({ team: team([{}, { stats: { atk: 3000, totals: true } }]), captain: 0 }), 1);
    var u = b.units[1], aura = S.captainFx(S.hero('Lossenia')).value;
    near(b.atk(u), 3000 + base * aura, 1e-6, 'aura on base');
    b.buff(u, u, 'Attack Up', 5, null, { value: 0.3 });
    near(b.atk(u), 3000 + base * (aura + 0.3), 1e-6, 'buff on base');
  }],
  ['Partial typing keeps gear in untyped stats', function () {
    var gear = { sets: [{ name: 'Imperial Executioner', pieces: 3 }], artifact: { name: 'Ring of Winter', level: 20 } };
    var full = S.finalStats(S.buildStats(Object.assign({ hero: 'Auster', level: 59 }, gear)).s);
    var typed = S.finalStats(S.buildStats(Object.assign({ hero: 'Auster', level: 59, stats: { atk: 3000, totals: true } }, gear)).s);
    assert.strictEqual(typed.atk, 3000);
    near(typed.critRate, full.critRate, 1e-9, 'crit from the set stays');
    near(typed.hp, full.hp, 1e-9, 'HP from the artifact stays');
  }],
  ['T13 Imperial Executioner: skill crits deal +16%', function () {
    var b = S.runOnce({ team: [{ hero: 'Auster', level: 60, sets: [{ name: 'Imperial Executioner', pieces: 3 }], stats: { critRate: 1, totals: true } }], enemy: { preset: 'dummy', level: 60 }, seconds: 0.1, captain: 99 }, 1);
    var u = b.units[0], t = b.units[1];
    var x = b.hit(u, t, 1000, { tag: 'battle' }).amount, y = b.hit(u, t, 1000, { tag: 'basic' }).amount;
    near(x / y, 1.16, 1e-6);
  }],
  ["T16 Monelisse's Teardrop: survives the first lethal hit, not a second within 120 s", function () {
    var b = S.runOnce({ team: [{ hero: 'Ergander', level: 60, sets: [{ name: "Monelisse's Teardrop", pieces: 1 }] }], enemy: { preset: 'dummy', level: 60 }, seconds: 0.1, captain: 99 }, 1);
    var u = b.units[0], e = b.units[1];
    b.damage(u, u.hp * 5, e, {});
    assert.ok(u.alive && u.hp >= 1, 'saved');
    assert.ok(b.has(u, 'Immortality'));
    b.remove(u, 'Immortality'); b.t += 10;
    b.damage(u, u.hp * 5, e, {});
    assert.ok(!u.alive, 'second lethal hit kills');
  }],
  ['Ancestral Protection: wearer takes 15% of an ally hit (less 10%)', function () {
    var b = S.runOnce({ team: [{ hero: 'Ergander', level: 60, sets: [{ name: 'Ancestral Protection', pieces: 3 }] }, { hero: 'Auster', level: 60 }], enemy: { preset: 'dummy', level: 60 }, seconds: 0.1, captain: 99 }, 1);
    var tank = b.units[0], dps = b.units[1], hp0 = tank.hp, hp1 = dps.hp;
    b.damage(dps, 1000, b.units[2], {});
    near(hp1 - dps.hp, 850, 1e-6, 'ally');
    near(hp0 - tank.hp, 135, 1e-6, 'tank');
  }],
  ['T14/T15 more DEF or HP on the tank: less damage taken, longer life', function () {
    var hard = { rules: { bossPower: 2 }, runs: 60 };
    var base = S.simulate(opts(hard));
    var st = S.finalStats(S.buildStats({ hero: 'Ergander', level: 59 }).s);
    var withDef = team(); withDef[4] = { hero: 'Ergander', level: 59, stats: { def: st.def * 2, totals: true } };
    var withHp = team(); withHp[4] = { hero: 'Ergander', level: 59, stats: { hp: st.hp * 1.5, totals: true } };
    var rd = S.simulate(opts(Object.assign({ team: withDef }, hard))), rh = S.simulate(opts(Object.assign({ team: withHp }, hard)));
    var life = function (r) { return r.perHero[4].deathRate === 0 ? 999 : r.perHero[4].deathTime.p50 * (2 - r.perHero[4].deathRate); };
    assert.ok(rd.perHero[4].taken / rd.survival.runs.reduce(function (s, x) { return s + x.t; }, 0) < base.perHero[4].taken / base.survival.runs.reduce(function (s, x) { return s + x.t; }, 0), 'DEF cuts damage taken per second');
    assert.ok(life(rd) >= life(base), 'DEF: tank lives longer');
    assert.ok(life(rh) >= life(base), 'HP: tank lives longer');
    assert.ok(rd.winRate >= base.winRate && rh.winRate >= base.winRate, 'win rate not lower');
  }],
  ['T17 captain: only one aura is active', function () {
    var b = S.runOnce(opts({ captain: 0 }), 1);
    assert.ok(b.captain.A && b.captain.A.hero === 'Lossenia');
    var withCap = S.finalStats(b.units[1].s).atk;
    var b2 = S.runOnce(opts({ captain: 3 }), 1);
    var noCap = S.finalStats(b2.units[1].s).atk;
    assert.ok(withCap > noCap, 'Lossenia aura raises Auster ATK');
    near(b.units[1].s.atkP - b2.units[1].s.atkP, S.captainFx(S.hero('Lossenia')).value, 1e-9, 'exactly one aura');
    near(b.units[3].s.atkP - b2.units[3].s.atkP, S.captainFx(S.hero('Lossenia')).value, 1e-9, 'captain gets it too');
  }],
  ['Frost: 5 stacks burst for 3% max HP (capped by ATK), then reset', function () {
    var b = bare(), src = b.units[0], tgt = b.units[1];
    var before = tgt.rec.taken;
    for (var i = 0; i < 4; i++) b.apply(src, tgt, 'Frost', 1, 10, { ignoreRes: true });
    assert.strictEqual(b.stacks(tgt, 'Frost'), 4);
    b.apply(src, tgt, 'Frost', 1, 10, { ignoreRes: true });
    assert.strictEqual(b.stacks(tgt, 'Frost'), 0);
    assert.ok(tgt.rec.taken > before, 'burst dealt damage');
  }],
  ['T18 replay: frames cover the fight, events in time order, finishes fast', function () {
    var r = S.simulate(opts({ runs: 30 })), pick = S.pickRun(r, 'typical');
    var t0 = Date.now(), rp = S.replay(opts(), pick.seed);
    assert.ok(Date.now() - t0 < 2000);
    assert.strictEqual(rp.result, pick.result);
    near(rp.t, pick.t, 0.06);
    assert.ok(rp.frames.length >= rp.t / 0.2 - 1);
    for (var i = 1; i < rp.events.length; i++) assert.ok(rp.events[i].t >= rp.events[i - 1].t);
  }],
  ['T11 setup round trip: same specs, same seed, same result', function () {
    var specs = team([{ stats: { atk: 1500, hp: 15000, totals: true }, artifact: { name: "Witch's Remains", level: 20, tier: 1 } }, { sets: [{ name: 'Imperial Executioner', pieces: 3 }, { name: 'Strike the Unprepared', pieces: 1 }] }]);
    var o1 = opts({ team: specs, runs: 20 }), o2 = JSON.parse(JSON.stringify(o1));
    assert.strictEqual(JSON.stringify(S.simulate(o1).survival.runs), JSON.stringify(S.simulate(o2).survival.runs));
  }],
  ['Import: dragonheir-account export -> typed totals, sets, artifact', function () {
    var acc = { format: 'dragonheir-account', version: 1, heroes: [{ name: 'Hvitar', level: 48, stars: 4, stats: [{ stat: 'ATK', value: '3,812' }, { stat: 'HP', value: '28,140' }, { stat: 'Crit Rate', value: '42%' }],
      gear: [{ slot: 'Weapon', set: 'Imperial Executioner' }, { slot: 'Helmet', set: 'Imperial Executioner' }, { slot: 'Armor', set: 'Imperial Executioner' }] }], artifacts: [{ name: 'Ring of Winter', level: 10, stars: 2, equipped_on: 'Hvitar' }] };
    var m = S.survival.fromAccount(acc), sp = m[S.hero('Hvitar').id];
    assert.strictEqual(sp.stats.atk, 3812); assert.strictEqual(sp.stats.hp, 28140); near(sp.stats.critRate, 0.42, 1e-9); assert.ok(sp.stats.totals);
    assert.strictEqual(sp.sets[0].pieces, 3); assert.strictEqual(sp.artifact.name, 'Ring of Winter');
  }],
  ['T19 robustness reports win rate at every assumed-rule extreme', function () {
    return S.survival.robustness(opts({ runs: 20 }), { runs: 20, keys: ['bossPower', 'defK'] }).then(function (rb) {
      assert.strictEqual(rb.rows.length, 4);
      assert.ok(rb.min <= rb.max);
      assert.ok(typeof rb.robust === 'boolean');
    });
  }],
  ['every S1 boss runs and fights back', function () {
    ['harpy', 'xenos', 'scavenger', 'gruentius', 'fyre'].forEach(function (p) {
      var r = S.simulate(opts({ enemy: { preset: p, level: 59 }, runs: 5 }));
      assert.ok(r.survival.incomingDps > 0, p + ' deals damage');
      assert.ok(S.bosses()[p].skills.length >= 3, p + ' lists skills');
    });
  }]
];

(async function () {
  for (var i = 0; i < tests.length; i++) await check(tests[i][0], tests[i][1]);
  console.log(checks + ' checks passed');
})().catch(function (e) { console.error(e); process.exit(1); });
