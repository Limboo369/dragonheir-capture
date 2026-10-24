// Checks that each hand-written kit deals what its official text says.
// Probe setup: one hero, no crit, no DEF mitigation, one dummy, so damage per
// cast must equal ATK x the printed multipliers.
// Run: node simulator/tests/kits.test.js
var assert = require('assert');
var S = require('../node-loader.js');

var NO_DEF = { defK: 1e15, energyRegen: 0, energyPerBasic: 0, energyPerHitTaken: 0, battleFirst: 0.5, battleCd: 1000, bossControlMult: 1, landCap: 1, accShift: 300, ultFirst: 1000, heroTiming: false };

function probe(hero, extra) {
  extra = extra || {};
  var spec = { hero: hero, level: 60, gear: 'none', stats: { critRate: 0, ench: extra.ench == null ? 0 : extra.ench } };
  var b = S.runOnce({
    team: [spec], enemy: { preset: extra.preset || 'dummy', level: 60 }, seconds: extra.seconds || 3,
    rules: Object.assign({}, NO_DEF, extra.rules || {}), captain: 99
  }, 1);
  var u = b.units[0];
  return { b: b, u: u, atk: b.atk(u), ench: b.stat(u, 'ench'), hp: b.maxHp(u), def: b.def(u) };
}
function near(a, e, msg) { assert.ok(Math.abs(a - e) <= Math.max(1, Math.abs(e) * 0.01), msg + ': got ' + a.toFixed(1) + ', expected ' + e.toFixed(1)); }
var checks = 0;
function check(name, fn) { fn(); checks++; console.log('ok', name); }

check('stats: official calculator formula (Auster Lv60, 3 stars)', function () {
  var h = S.hero('Auster');
  var s = S.nakedStats(h, 60);
  var D = S.data(), sum = 0;
  for (var k = 1; k <= 59; k++) sum += D.levelMult[k];
  near(s.atk, 99.8 + 4.99 * (sum + 8.51 + 12.97), 'ATK');
  near(s.hp, 1572 + 78.6 * (sum + 8.51 + 12.97), 'HP');
});

check('Auster battle skill: 3 arrows x 120% ATK', function () {
  var p = probe('Auster');
  near(p.u.rec.by.battle, 3 * 1.2 * p.atk, 'battle');
});

check('Auster ult: 520% + 110% ATK on one target', function () {
  var p = probe('Auster', { rules: { battleFirst: 1000, energyRegen: 1000 } });
  near(p.u.rec.by.ult / p.u.rec.ults, (5.2 + 1.1) * p.atk, 'ult');
});

check('Hvitar battle skill: 400% ATK', function () {
  var p = probe('Hvitar');
  near(p.u.rec.by.battle, 4.0 * p.atk, 'battle');
});

check('Hvitar ult on a target with Frost: 640% x (1 + 15%)', function () {
  // Auster's ult frosts the dummy; then Hvitar's ult counts 1 Frosted enemy.
  var b = S.runOnce({ team: [{ hero: 'Hvitar', level: 60, gear: 'none', stats: { critRate: 0 } }], enemy: { preset: 'dummy' }, seconds: 0.1, rules: NO_DEF, captain: 99 }, 1);
  var u = b.units[0], d = b.units[1];
  b.apply(u, d, 'Frost', 1, 10);
  u.kit.ult(u, b);
  near(u.rec.by.ult, 6.4 * 1.15 * b.atk(u), 'ult');
});

check('Lossenia ult: 6 ticks x 150% ATK', function () {
  var p = probe('Lossenia', { seconds: 8, rules: { battleFirst: 1000, energyRegen: 1000, castUlt: 100 } });
  near(p.u.rec.by.ult, 6 * 1.5 * p.atk, 'ult');
});

check('Hochadir ult on a Frosted single target: 500% ATK', function () {
  var b = S.runOnce({ team: [{ hero: 'Hochadir', level: 60, gear: 'none', stats: { critRate: 0 } }], enemy: { preset: 'dummy' }, seconds: 0.1, rules: NO_DEF, captain: 99 }, 1);
  var u = b.units[0], d = b.units[1];
  b.apply(u, d, 'Frost', 1, 10);
  u.kit.ult(u, b);
  near(u.rec.by.ult, 5.0 * b.atk(u), 'ult');
});

check('Voresh battle skill: 3 x 120% ATK', function () {
  var p = probe('Voresh');
  near(p.u.rec.by.battle, 3 * 1.2 * p.atk, 'battle');
});

check('Ergander battle skill: 200% ATK + 7% max HP', function () {
  var p = probe('Ergander');
  near(p.u.rec.by.battle, 2.0 * p.atk + 0.07 * p.hp, 'battle');
});

check('Durango battle skill: 3 x (100% ATK + 500% Enlightenment)', function () {
  var p = probe('Durango', { ench: 100 });
  near(p.u.rec.by.battle, 3 * (1.0 * p.atk + 5.0 * p.ench), 'battle');
});

check('Twitch battle skill: arrows = 1 + Enlightenment/60, max 4', function () {
  var p = probe('Twitch', { ench: 130 });
  near(p.u.rec.by.battle, 3 * (0.8 * p.atk + 9.0 * p.ench), 'battle');
});

check('Lothair battle skill: 250% ATK (no Poison yet, so no bonus)', function () {
  var p = probe('Lothair', { rules: { accShift: -300 } });
  assert.ok(p.u.rec.by.battle >= 2.5 * p.atk * 0.99);
});

check('Gardrus battle skill: 400% ATK', function () {
  var p = probe('Gardrus');
  near(p.u.rec.by.battle, 4.0 * p.atk, 'battle');
});

check('Vinyara battle skill: shield 450% ATK + 10% max HP on herself', function () {
  var p = probe('Vinyara');
  near(p.u.rec.shield, 4.5 * p.atk + 0.1 * p.hp, 'shield');
});

check('DEF mitigation: DEF / (DEF + K)', function () {
  var b = S.runOnce({ team: [{ hero: 'Auster', level: 60, gear: 'none', stats: { critRate: 0 } }], enemy: { preset: 'dummy' }, seconds: 0.1, rules: { defK: 1000 }, captain: 99 }, 1);
  var u = b.units[0], d = b.units[1];
  var r = b.hit(u, d, { atk: 1 }, { tag: 'test' });
  near(r.amount, b.atk(u) * 1000 / (1000 + b.def(d)), 'mitigated hit');
});

check('captain: Lossenia +24% ATK applies in all battles', function () {
  var b = S.runOnce({ team: [{ hero: 'Lossenia', level: 60, gear: 'none' }], enemy: { preset: 'dummy' }, seconds: 0.1, captain: 0 }, 1);
  var u = b.units[0];
  near(b.atk(u), S.nakedStats(S.hero('Lossenia'), 60).atk * 1.24, 'captain ATK');
});

check('artifact: Rift Hourglass tier 0 adds 50 Skill Haste', function () {
  var b = S.runOnce({ team: [{ hero: 'Ergander', level: 60, gear: 'none', artifact: { name: 'Rift Hourglass', level: 20, tier: 0 } }], enemy: { preset: 'dummy' }, seconds: 0.1 }, 1);
  near(b.stat(b.units[0], 'haste'), 50, 'haste');
});

console.log(checks + ' checks passed');
