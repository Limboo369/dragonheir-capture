// Checks the sourced combat rules (official wiki article 103 and the 2025
// skill-timing guides): energy timing, Skill Haste, ACC vs RES, Derivative
// damage, Frozen and tier values.
// Run: node simulator/tests/rules.test.js
var assert = require('assert');
var S = require('../node-loader.js');

function near(a, e, msg, tol) { assert.ok(Math.abs(a - e) <= (tol || Math.max(0.01, Math.abs(e) * 0.01)), msg + ': got ' + a + ', expected ' + e); }
var checks = 0;
function check(name, fn) { fn(); checks++; console.log('ok', name); }
function battle(spec, rules, seconds) {
  return S.runOnce({ team: [spec], enemy: { preset: 'dummy', level: 60 }, seconds: seconds || 0.1, rules: Object.assign({ defK: 1e15 }, rules || {}), captain: 99, log: true }, 1);
}
function ultTimes(b) { return b.log.filter(function (l) { return / ult$/.test(l); }).map(function (l) { return parseFloat(l); }); }

check('ultimate: first at 12 s, then every 20 s (+ cast lock) at 0 haste', function () {
  var b = battle({ hero: 'Voresh', level: 60, gear: 'none', stats: { haste: 0 } }, { battleFirst: 1000 }, 60);
  var t = ultTimes(b);
  near(t[0], 12, 'first', 0.06);
  near(t[1] - t[0], 20, 'cycle', 0.06);
});

check('Skill Haste 100 = recharge x1.2 (20 s ultimate -> 16.67 s)', function () {
  var b = battle({ hero: 'Voresh', level: 60, gear: 'none', stats: { haste: 100 } }, { battleFirst: 1000 }, 60);
  var t = ultTimes(b);
  near(t[1] - t[0], 20 / 1.2, 'cycle', 0.06);
  near(t[0], 12 / 1.2, 'first', 0.06);
});

check('Recharging Speed Penalty: recharge x0.7', function () {
  var b = battle({ hero: 'Voresh', level: 60, gear: 'none', stats: { haste: 0 } });
  var u = b.units[0];
  near(b.rechargeRate(u), 1, 'base');
  b.units[1].side = 'B';
  b.apply(b.units[1], u, 'Recharging Speed Penalty', 1, 10, { ignoreRes: true });
  near(b.rechargeRate(u), 0.7, 'penalised');
});

check('ACC vs RES curve: official test points', function () {
  var b = battle({ hero: 'Voresh', level: 60, gear: 'none', stats: { acc: 0 } });
  var u = b.units[0], d = b.units[1];
  [[-50, 0.17], [-30, 0.76], [0, 0.9], [50, 0.95], [200, 0.97], [300, 0.97], [-120, 0]].forEach(function (p) {
    d.s.res = -p[0];
    near(b.landChance(u, d, 1), p[1], 'diff ' + p[0], 0.001);
  });
  d.s.res = 0;
  near(b.landChance(u, d, 0.5), 0.5 * 0.9, 'skill chance x curve', 0.001);
});

check('Derivative damage x (1 + Enlightenment/200), no crit', function () {
  var b = battle({ hero: 'Voresh', level: 60, gear: 'none', stats: { ench: 100, critRate: 1 } });
  var u = b.units[0], d = b.units[1];
  var r = b.hit(u, d, 1000, { tag: 'dot' });
  near(r.amount, 1500, 'dot');
  assert.ok(!r.crit, 'dot cannot crit');
});

check('Frozen target takes 30% less damage', function () {
  var b = battle({ hero: 'Voresh', level: 60, gear: 'none', stats: { critRate: 0 } }, { bossControlMult: 1 });
  var u = b.units[0], d = b.units[1];
  b.apply(u, d, 'Frozen', 1, 5, { ignoreRes: true });
  near(b.hit(u, d, 1000, {}).amount, 700, 'frozen');
});

check('tier values: Defense Up I/II 30/60%, Attack Penalty II 50%, Crit Rate Up 20%', function () {
  var b = battle({ hero: 'Voresh', level: 60, gear: 'none' });
  near(b.tierValue('Defense Up', 1), 0.3, 'DEF Up I');
  near(b.tierValue('Defense Up', 2), 0.6, 'DEF Up II');
  near(b.tierValue('Attack Penalty', 2), 0.5, 'ATK Penalty II');
  near(b.tierValue('Crit Rate Up', 0), 0.2, 'Crit Rate Up');
});

check('bosses ignore control', function () {
  var b = S.runOnce({ team: [{ hero: 'Voresh', level: 60 }], enemy: { preset: 'boss', level: 60 }, seconds: 0.1, captain: 99 }, 1);
  assert.ok(!b.apply(b.units[0], b.units[1], 'Stunned', 1, 5, { ignoreRes: true }), 'stun on boss');
});

console.log(checks + ' checks passed');
