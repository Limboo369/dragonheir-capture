// Runs the standard analysis on Darko's roster and writes results/report.json
// and results/report.md. Re-run after any rule or kit change:
//   node simulator/tools/report.js [runs]
var fs = require('fs');
var path = require('path');
var S = require('../node-loader.js');

var RUNS = +process.argv[2] || 40;
var LEVEL = 59;
// Owned Legendaries (project memory, 2026-10-24) plus every Season 1 Epic with a
// hand-written kit (Darko owns every Epic).
var LEGENDARIES = ['Auster', 'Hvitar', 'Lossenia', 'Hochadir', 'Ergander', 'Alphanarsy', 'Vinyara', 'Felosia', 'Eurion', 'Torrin', 'Durango', 'Oggok'];
var EPICS = Object.keys(S.kits()).map(function (id) { return S.data().heroes[id]; })
  .filter(function (h) { return h && h.r === 'Epic' && h.season === 's1'; }).map(function (h) { return h.n; }).sort();
var OWNED = LEGENDARIES.concat(EPICS);
var INCOMING = ['Twitch', 'Lothair'];
var POOL = OWNED.concat(INCOMING);
var MAIN = ['Lossenia', 'Auster', 'Hvitar', 'Voresh', 'Ergander'];

var BENCHES = {
  single: { label: 'Single boss, damage in 60 s', enemy: { preset: 'dummy', level: LEVEL }, seconds: 60, objective: 'dps', mode: 'grave_of_venom' },
  aoe: { label: 'Five targets, damage in 60 s', enemy: { preset: 'dummy5', level: LEVEL }, seconds: 60, objective: 'dps', mode: 'goblin_lair' },
  boss: { label: 'Boss that fights back (clear in 120 s)', enemy: { preset: 'boss', level: LEVEL }, seconds: 120, objective: 'clear', mode: 'grave_of_venom' },
  hard: { label: 'Hard boss (survive and clear in 120 s)', enemy: { preset: 'bossHard', level: LEVEL }, seconds: 120, objective: 'clear', mode: 'grave_of_venom' },
  waves: { label: 'Three waves (clear in 150 s)', enemy: { preset: 'waves', level: LEVEL }, seconds: 150, objective: 'clear', mode: 'goblin_lair' }
};
function specs(names) { return names.map(function (n) { return { hero: n, level: LEVEL }; }); }
function opts(bench, names, extra) {
  var b = BENCHES[bench];
  return Object.assign({ team: specs(names), enemy: b.enemy, seconds: b.seconds, mode: b.mode, runs: RUNS, captain: 0 }, extra || {});
}
function r1(x) { return Math.round(x * 10) / 10; }
function summary(r) {
  return { dps: Math.round(r.dps.mean), dpsSd: Math.round(r.dps.sd), winRate: r1(r.winRate * 100), ttk: r.ttk ? r1(r.ttk.mean) : null, hpLeft: r1(r.teamHpLeft.mean * 100), clear: r.clear ? Math.round(r.clear.mean * 1000) / 1000 : null,
    perHero: r.perHero.map(function (p) { return { name: p.name, share: r1(p.share * 100), kit: p.kit, death: r1(p.deathRate * 100), heal: Math.round(p.healing), shield: Math.round(p.shielding) }; }), confidence: r.confidence.level, autoKits: r.confidence.autoKits };
}

var out = { generated: new Date().toISOString(), runs: RUNS, level: LEVEL, rules: S.defaultRules(), benches: {}, swaps: {}, optimized: {}, captains: {}, artifacts: {}, weights: {}, sensitivity: {}, modeTeams: {} };
var t0 = Date.now();

// 1. Main team on every bench.
Object.keys(BENCHES).forEach(function (k) {
  out.benches[k] = { label: BENCHES[k].label, main: summary(S.simulate(opts(k, MAIN))) };
});
console.log('benches', (Date.now() - t0) / 1000);

// 2. Best replacement for every slot, per bench.
Object.keys(BENCHES).forEach(function (k) {
  out.swaps[k] = MAIN.map(function (name, slot) {
    var rk = S.rankCandidates(opts(k, MAIN), slot, POOL.filter(function (n) { return MAIN.indexOf(n) < 0 || n === name; }), { objective: BENCHES[k].objective, runs: Math.max(20, RUNS / 2) });
    var cur = rk.filter(function (x) { return x.name === name; })[0];
    return { slot: slot, current: name, currentRank: rk.indexOf(cur) + 1, of: rk.length,
      top: rk.slice(0, 5).map(function (x) { return { name: x.name, kit: x.kit, deltaPct: r1((x.score - cur.score) / Math.abs(cur.score) * 100) }; }) };
  });
});
console.log('swaps', (Date.now() - t0) / 1000);

// 3. Local-search optimum from the main team, per bench.
Object.keys(BENCHES).forEach(function (k) {
  var o = S.optimizeTeam(opts(k, MAIN), POOL, { objective: BENCHES[k].objective, runs: Math.max(20, RUNS / 2), fixed: [] });
  out.optimized[k] = { team: o.team, steps: o.steps.map(function (s) { return s.out + ' -> ' + s.in; }), score: o.score, result: summary(o.result) };
});
console.log('optimize', (Date.now() - t0) / 1000);

// 4. Captain: each main-team hero as captain in a dungeon fight.
MAIN.forEach(function (n, i) {
  var r = S.simulate(opts('single', MAIN, { captain: i }));
  out.captains[n] = { dps: Math.round(r.dps.mean), effect: r.captain && r.captain.effect, active: r.captain && r.captain.active };
});

// 5. Artifacts per hero (coded effects only; tier 0, +20).
var ARTS = S.artifactsCoded();
['Auster', 'Hvitar', 'Lossenia', 'Voresh', 'Ergander'].forEach(function (n) {
  var slot = MAIN.indexOf(n);
  var variants = [{ label: 'none', patch: { artifact: undefined } }].concat(ARTS.map(function (a) { return { label: a, patch: { artifact: { name: a, level: 20, tier: 0 } } }; }));
  ['single', 'hard'].forEach(function (k) {
    var rk = S.rankVariants(opts(k, MAIN), slot, variants, { objective: BENCHES[k].objective, runs: RUNS });
    var none = rk.filter(function (x) { return x.label === 'none'; })[0];
    out.artifacts[n + '@' + k] = rk.map(function (x) { return { artifact: x.label, deltaPct: r1((x.score - none.score) / Math.abs(none.score) * 100), heroDamage: Math.round(x.heroDamage) }; });
  });
});
console.log('artifacts', (Date.now() - t0) / 1000);

// 6. Stat priority for the damage dealers.
['Auster', 'Hvitar', 'Lossenia'].forEach(function (n) {
  var w = S.statWeights(opts('single', MAIN), MAIN.indexOf(n), { runs: RUNS * 2 });
  out.weights[n] = {};
  Object.keys(w.weights).forEach(function (k) { out.weights[n][k] = r1(w.weights[k].heroDmgPct * 100); });
});

// 7. Teams the team thread recommends per mode, on the matching bench.
var MODE_TEAMS = {
  'Main (Vortex/AB)': { names: MAIN, bench: 'boss' },
  'Main on the hard boss': { names: MAIN, bench: 'hard' },
  'Grave: Hochadir for Hvitar': { names: ['Lossenia', 'Auster', 'Hochadir', 'Voresh', 'Ergander'], bench: 'boss' },
  'Goblin Lair: Alphanarsy for Ergander': { names: ['Lossenia', 'Auster', 'Hvitar', 'Voresh', 'Alphanarsy'], bench: 'waves' },
  'Goblin Lair: main team': { names: MAIN, bench: 'waves' },
  'Killer boss: Vinyara for Hvitar': { names: ['Lossenia', 'Auster', 'Vinyara', 'Voresh', 'Ergander'], bench: 'hard' },
  'If losing: Alphanarsy for Hvitar': { names: ['Lossenia', 'Auster', 'Alphanarsy', 'Voresh', 'Ergander'], bench: 'hard' },
  'Poison team (when Twitch and Lothair arrive)': { names: ['Durango', 'Twitch', 'Lothair', 'Oggok', 'Frurbath'], bench: 'boss' },
  'Poison team on the hard boss': { names: ['Durango', 'Twitch', 'Lothair', 'Oggok', 'Frurbath'], bench: 'hard' }
};
Object.keys(MODE_TEAMS).forEach(function (k) {
  var m = MODE_TEAMS[k];
  out.modeTeams[k] = { bench: m.bench, team: m.names, result: summary(S.simulate(opts(m.bench, m.names))) };
});

// 8. Do the key verdicts survive every assumption range?
function sens(label, a, b, objective) {
  var s = S.sensitivity(a, b, { objective: objective, runs: 20 });
  out.sensitivity[label] = { better: s.base.better === 'b' ? 'second' : 'first', deltaPct: r1(s.base.deltaPct * 100), robust: s.robust,
    flips: s.flips.map(function (f) { return f.rule + '=' + f.value; }) };
}
sens('Hvitar vs Hochadir (single boss)', opts('single', MAIN), opts('single', ['Lossenia', 'Auster', 'Hochadir', 'Voresh', 'Ergander']), 'dps');
sens('Hvitar vs Hochadir (boss clear)', opts('boss', MAIN), opts('boss', ['Lossenia', 'Auster', 'Hochadir', 'Voresh', 'Ergander']), 'clear');
sens('Hvitar vs Vinyara (hard boss)', opts('hard', MAIN), opts('hard', ['Lossenia', 'Auster', 'Vinyara', 'Voresh', 'Ergander']), 'clear');
sens('Ergander vs Alphanarsy (waves)', opts('waves', MAIN), opts('waves', ['Lossenia', 'Auster', 'Hvitar', 'Voresh', 'Alphanarsy']), 'clear');
var withArt = function (art) { var o = opts('single', MAIN); o.team = o.team.slice(); o.team[2] = Object.assign({}, o.team[2], { artifact: { name: art, level: 20, tier: 0 } }); return o; };
sens('Hvitar: Rift Hourglass vs Eyeball of the Giant', withArt('Rift Hourglass'), withArt('Eyeball of the Giant'), 'dps');
console.log('sensitivity', (Date.now() - t0) / 1000);

var dir = path.join(__dirname, '..', 'results');
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, 'report.json'), JSON.stringify(out, null, 1));

// Markdown digest
var md = ['# DHSim report', '', 'Generated ' + out.generated + ' (engine ' + S.VERSION + '), ' + RUNS + ' fights per test, heroes at level ' + LEVEL + ' with the same estimated gear profile per role. Pool: ' + POOL.length + ' heroes (' + POOL.join(', ') + ').', ''];
md.push('## Main team on each bench', '', '| Bench | DPS | Win % | Time to kill | HP left % | Damage shares |', '|---|---|---|---|---|---|');
Object.keys(out.benches).forEach(function (k) {
  var m = out.benches[k].main;
  md.push('| ' + out.benches[k].label + ' | ' + m.dps + ' | ' + m.winRate + ' | ' + (m.ttk || '-') + ' | ' + m.hpLeft + ' | ' + m.perHero.map(function (p) { return p.name + ' ' + p.share + '%'; }).join(', ') + ' |');
});
md.push('', '## Best replacement per slot', '');
Object.keys(out.swaps).forEach(function (k) {
  md.push('### ' + BENCHES[k].label, '', '| Slot | Current (rank) | Top options (change vs current) |', '|---|---|---|');
  out.swaps[k].forEach(function (s) { md.push('| ' + (s.slot + 1) + ' | ' + s.current + ' (' + s.currentRank + '/' + s.of + ') | ' + s.top.map(function (t) { return t.name + (t.kit === 'auto' ? '*' : '') + ' ' + (t.deltaPct > 0 ? '+' : '') + t.deltaPct + '%'; }).join(', ') + ' |'); });
  md.push('');
});
md.push('`*` = rough kit (damage parts only).', '', '## Local-search optimum', '');
Object.keys(out.optimized).forEach(function (k) { md.push('- ' + BENCHES[k].label + ': ' + out.optimized[k].team.join(', ') + (out.optimized[k].steps.length ? ' (swaps: ' + out.optimized[k].steps.join('; ') + ')' : ' (no swap beats the main team by 1%)')); });
md.push('', '## Captain (single boss, dungeon)', '');
Object.keys(out.captains).forEach(function (n) { var c = out.captains[n]; md.push('- ' + n + ': ' + c.dps + ' DPS (' + (c.active ? 'active' : 'inactive') + ': ' + (c.effect || 'no captain skill') + ')'); });
md.push('', '## Artifacts (team score change vs no artifact)', '');
Object.keys(out.artifacts).forEach(function (k) { md.push('- ' + k + ': ' + out.artifacts[k].slice(0, 6).map(function (a) { return a.artifact + ' ' + (a.deltaPct > 0 ? '+' : '') + a.deltaPct + '%'; }).join(', ')); });
md.push('', '## Stat priority (hero damage gain per step)', '');
Object.keys(out.weights).forEach(function (n) { var w = out.weights[n]; md.push('- ' + n + ': ' + Object.keys(w).sort(function (a, b) { return w[b] - w[a]; }).map(function (k) { return k + ' +' + w[k] + '%'; }).join(', ')); });
md.push('', '## Recommended mode teams', '', '| Team | Bench | Win % | Time to kill | HP left % |', '|---|---|---|---|---|');
Object.keys(out.modeTeams).forEach(function (k) { var m = out.modeTeams[k]; md.push('| ' + k + ' | ' + m.bench + ' | ' + m.result.winRate + ' | ' + (m.result.ttk || '-') + ' | ' + m.result.hpLeft + ' |'); });
md.push('', '## Robustness of key verdicts', '');
Object.keys(out.sensitivity).forEach(function (k) { var s = out.sensitivity[k]; md.push('- ' + k + ': ' + s.better + ' option better by ' + Math.abs(s.deltaPct) + '%; ' + (s.robust ? 'holds across every assumption range' : 'flips when ' + s.flips.join(', '))); });
fs.writeFileSync(path.join(dir, 'report.md'), md.join('\n') + '\n');
console.log('done', (Date.now() - t0) / 1000, 's');
