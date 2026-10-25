/*
 * Survival analysis for DHSim (v0.3): the questions "do we live, who dies and
 * when, how good is our defense, do we need a healer". Everything here is
 * async and yields between small batches, so a browser page stays smooth
 * while hundreds of fights run. Works the same in Node.
 *
 *   DHSim.survival.run(opts, {runs, onProgress})        -> simulate() result
 *   DHSim.survival.breakingPoint(opts, {runs})           -> boss strength the team still beats 50% of the time
 *   DHSim.survival.healerCheck(opts, pool, {runs})       -> team with and without healers, side by side
 *   DHSim.survival.robustness(opts, {runs})              -> win rate under every assumed-rule extreme
 *   DHSim.survival.defense(result, opts)                 -> effective HP per hero and seconds to fall alone
 *   DHSim.survival.fromAccount(json)                     -> loadout specs from a "dragonheir-account" export
 */
(function (root) {
  var S = root.DHSim || (typeof require !== 'undefined' ? require('./sim.js') : null);
  function tick() { return new Promise(function (r) { setTimeout(r, 0); }); }
  function withRules(opts, extra) { return Object.assign({}, opts, { rules: Object.assign({}, opts.rules || {}, extra) }); }
  function rule(opts, k) { var r = opts.rules || {}; return r[k] != null ? r[k] : S.RULE_INFO[k].v; }

  // Monte Carlo in batches. Same seeds as DHSim.simulate, so results match it exactly.
  async function run(opts, o) {
    o = o || {};
    var runs = o.runs || opts.runs || 200, batch = o.batch || 10, all = [];
    for (var i = 0; i < runs; i += batch) {
      all = all.concat(S.runBatch(opts, i, Math.min(batch, runs - i)));
      if (o.onProgress) o.onProgress(all.length / runs);
      if (o.cancel && o.cancel()) throw new Error('cancelled');
      await tick();
    }
    return S.summarize(all, opts);
  }

  // Raise or lower the boss strength rule until the team wins half the time.
  // Answers "how much stronger can this boss get before we lose?"
  async function breakingPoint(opts, o) {
    o = o || {};
    var runs = o.runs || 40, base = rule(opts, 'bossPower'), lo = o.lo || 0.3, hi = o.hi || 4, steps = o.steps || 7, done = 0;
    var cache = {};
    async function winAt(p) {
      if (cache[p] != null) return cache[p];
      var r = await run(withRules(opts, { bossPower: p }), { runs: runs, batch: 20, cancel: o.cancel });
      done++; if (o.onProgress) o.onProgress(done / (steps + 2));
      return (cache[p] = r.winRate);
    }
    var wLo = await winAt(lo), wHi = await winAt(hi);
    if (wLo < 0.5) return { power: lo, margin: lo / base, capped: 'low' };
    if (wHi >= 0.5) return { power: hi, margin: hi / base, capped: 'high' };
    for (var i = 0; i < steps; i++) {
      var mid = Math.round(Math.sqrt(lo * hi) * 1000) / 1000;
      if ((await winAt(mid)) >= 0.5) lo = mid; else hi = mid;
    }
    var p = Math.round((lo + hi) / 2 * 100) / 100;
    return { power: p, margin: p / base };
  }

  // Heroes in `pool` (names or ids) that heal or shield, tried in every slot.
  // The test runs at a harder boss than the current one (`stress`, default the
  // breaking point) so differences in survival show up.
  async function healerCheck(opts, pool, o) {
    o = o || {};
    var runs = o.runs || 60, stress = o.stress || rule(opts, 'bossPower');
    var sOpts = withRules(opts, { bossPower: stress });
    var inTeam = opts.team.map(function (sp) { return S.hero(sp.hero).id; });
    var base = await run(sOpts, { runs: runs, batch: 20 });
    var healers = (o.healers || pool).filter(function (n) { return inTeam.indexOf(S.hero(n).id) < 0 && isSustain(n); });
    // Healers go in for the 2 heroes that add the least (lowest damage share,
    // never the hero taking most hits or one that already heals or shields).
    var totalTaken = base.perHero.reduce(function (s, x) { return s + x.taken; }, 0) || 1;
    var tank = base.perHero.slice().sort(function (a, b) { return b.taken - a.taken; })[0];
    var slots = o.slots || base.perHero.filter(function (p) { return p !== tank && p.healing + p.shielding < 0.02 * totalTaken; })
      .sort(function (a, b) { return a.share - b.share; }).slice(0, 2).map(function (p) { return p.slot; });
    var jobs = [];
    healers.forEach(function (n) { slots.forEach(function (slot) { jobs.push({ hero: n, slot: slot }); }); });
    // Also: each sustain hero already in the team taken out for the best damage hero of the pool.
    var teamSustain = base.perHero.filter(function (p) { return p.healing + p.shielding > 0.02 * totalTaken; });
    var dps = (o.dps || pool).filter(function (n) { return inTeam.indexOf(S.hero(n).id) < 0 && !isSustain(n); }).slice(0, o.maxDps || 4);
    teamSustain.forEach(function (p) { dps.forEach(function (n) { jobs.push({ hero: n, slot: p.slot, without: p.name }); }); });
    var rows = [], done = 0;
    for (var j = 0; j < jobs.length; j++) {
      var jb = jobs[j], team = opts.team.slice();
      team[jb.slot] = { hero: jb.hero, level: opts.team[jb.slot].level || 60 };
      var r = await run(Object.assign({}, sOpts, { team: team }), { runs: runs, batch: 20, cancel: o.cancel });
      rows.push({ hero: S.hero(jb.hero).n, out: S.hero(opts.team[jb.slot].hero).n, slot: jb.slot, without: jb.without || null,
        win: r.winRate, hpLeft: r.teamHpLeft.mean, deaths: r.perHero.reduce(function (s, p) { return s + p.deathRate; }, 0), ttk: r.ttk ? r.ttk.p50 : null,
        healPs: r.survival.healPs, absorbPs: r.survival.absorbPs });
      done++; if (o.onProgress) o.onProgress(done / jobs.length);
    }
    function score(x) { return x.win * 1000 + x.hpLeft * 100 - x.deaths; }
    // Best slot per added healer; best replacement per removed healer.
    var best = {}, removed = {};
    rows.forEach(function (x) {
      var key = x.without ? 'w:' + x.without : 'h:' + x.hero, map = x.without ? removed : best;
      if (!map[key] || score(x) > score(map[key])) map[key] = x;
    });
    var cur = { win: base.winRate, hpLeft: base.teamHpLeft.mean, deaths: base.perHero.reduce(function (s, p) { return s + p.deathRate; }, 0), ttk: base.ttk ? base.ttk.p50 : null, healPs: base.survival.healPs, absorbPs: base.survival.absorbPs };
    var add = Object.keys(best).map(function (k) { return best[k]; }).sort(function (a, b) { return score(b) - score(a); });
    var drop = Object.keys(removed).map(function (k) { return removed[k]; }).sort(function (a, b) { return score(b) - score(a); });
    var top = add[0];
    var verdict = !top ? 'none' : top.win - cur.win > 0.1 ? 'yes' : top.win - cur.win > 0.03 ? 'maybe' : 'no';
    return { stress: stress, current: cur, add: add, without: drop, verdict: verdict };
  }
  // Does this hero heal or shield? Measured once in a reference fight.
  var SUSTAIN = {};
  function isSustain(n) {
    var id = S.hero(n).id;
    if (SUSTAIN[id] != null) return SUSTAIN[id];
    var team = ['Auster', 'Hvitar', 'Lossenia', 'Hochadir'].filter(function (x) { return S.hero(x).id !== id; }).slice(0, 4).map(function (x) { return { hero: x, level: 60 }; });
    team.push({ hero: id, level: 60 });
    var r = S.simulate({ team: team, enemy: { preset: 'boss', level: 60 }, seconds: 60, runs: 2, rules: { bonds: false } });
    var p = r.perHero[r.perHero.length - 1];
    return (SUSTAIN[id] = p.healing + p.shielding > 2000);
  }

  // Win rate when each assumed rule sits at the end of its range.
  async function robustness(opts, o) {
    o = o || {};
    var runs = o.runs || 60, keys = o.keys || ['bossPower', 'defK', 'frostBurstCap', 'castUlt'], rows = [], done = 0, total = 0;
    keys.forEach(function (k) { total += (S.RULE_INFO[k].range || []).length; });
    var base = await run(opts, { runs: runs, batch: 20 });
    for (var i = 0; i < keys.length; i++) {
      var k = keys[i], range = S.RULE_INFO[k].range || [];
      for (var j = 0; j < range.length; j++) {
        var v = range[j], ex = {}; ex[k] = k === 'bossPower' ? v * rule(opts, 'bossPower') : v;
        var r = await run(withRules(opts, ex), { runs: runs, batch: 20, cancel: o.cancel });
        rows.push({ rule: k, value: ex[k], win: r.winRate, hpLeft: r.teamHpLeft.mean, deaths: r.perHero.reduce(function (s, p) { return s + p.deathRate; }, 0) });
        done++; if (o.onProgress) o.onProgress(done / total);
      }
    }
    var wins = rows.map(function (x) { return x.win; }).concat([base.winRate]);
    var lo = Math.min.apply(null, wins), hi = Math.max.apply(null, wins);
    var label = function (w) { return w >= 0.9 ? 'safe' : w >= 0.5 ? 'risky' : 'losing'; };
    return { base: base.winRate, rows: rows, min: lo, max: hi, robust: label(lo) === label(hi), verdict: label(base.winRate), worst: label(lo) };
  }

  // Effective HP per hero (HP after DEF, before shields) and how long each one
  // would last if the boss focused only them at the measured incoming DPS.
  function defense(res, opts) {
    var defK = rule(opts, 'defK'), team = opts.team, out = [];
    var inc = res.survival.incomingDps || 0;
    res.perHero.forEach(function (p, i) {
      var st = S.finalStats(S.buildStats(team[i]).s);
      var ehp = st.hp * (st.def + defK) / defK;
      var share = res.perHero.reduce(function (s, x) { return s + x.taken; }, 0);
      out.push({ name: p.name, hp: Math.round(st.hp), def: Math.round(st.def), res: Math.round(st.res), ehp: Math.round(ehp), dmgCut: st.def / (st.def + defK),
        takenShare: share ? p.taken / share : 0, aloneSeconds: inc ? ehp / inc : null });
    });
    return out;
  }

  // ---- import: "dragonheir-account" export (capture tool v1, Companion v2)
  function num(v) { if (v == null) return null; var s = String(v).replace(/,/g, '').trim(); var m = /-?\d+(\.\d+)?/.exec(s); if (!m) return null; return /%$/.test(s) ? parseFloat(m[0]) / 100 : parseFloat(m[0]); }
  var STAT_KEYS = { 'atk': 'atk', 'attack': 'atk', 'hp': 'hp', 'def': 'def', 'defense': 'def', 'crit rate': 'critRate', 'crit damage': 'critDmg', 'crit dmg': 'critDmg', 'accuracy': 'acc', 'resistance': 'res', 'enlightenment': 'ench', 'skill haste': 'haste', 'attack speed': 'atkSpd' };
  function fromAccount(acc) {
    if (typeof acc === 'string') acc = JSON.parse(acc);
    if (!acc || acc.format !== 'dragonheir-account') throw new Error('Not a dragonheir-account export');
    var arts = {};
    (acc.artifacts || []).forEach(function (a) { if (a.equipped_on) arts[String(a.equipped_on).toLowerCase()] = a; });
    var out = {};
    (acc.heroes || []).forEach(function (h) {
      var id; try { id = S.hero(h.name).id; } catch (e) { return; }
      var spec = { hero: id, level: h.level || 60 };
      if (h.stars) spec.stars = h.stars;
      var st = {}, any = false;
      var list = Array.isArray(h.stats) ? h.stats : Object.keys(h.stats || {}).map(function (k) { return { stat: k, value: h.stats[k] }; });
      list.forEach(function (x) { var k = STAT_KEYS[String(x.stat).toLowerCase()]; var v = num(x.value); if (k && v != null) { st[k] = v; any = true; } });
      if (any) { st.totals = true; spec.stats = st; }
      var count = {};
      (h.gear || []).forEach(function (g) { if (g.set) count[g.set] = (count[g.set] || 0) + 1; });
      var sets = Object.keys(count).filter(function (n) { return S.setByName(n); }).map(function (n) { return { name: S.setByName(n).n, pieces: count[n] }; });
      if (sets.length) spec.sets = sets;
      var a = arts[String(h.name).toLowerCase()];
      if (a && S.artifactByName(a.name)) spec.artifact = { name: S.artifactByName(a.name).n, level: a.level || 20, tier: Math.max(0, Math.min(5, (a.stars || 1) - 1)) };
      out[id] = spec;
    });
    return out;
  }

  S.survival = { run: run, breakingPoint: breakingPoint, healerCheck: healerCheck, robustness: robustness, defense: defense, fromAccount: fromAccount, isSustain: isSustain };
})(typeof window !== 'undefined' ? window : globalThis);
