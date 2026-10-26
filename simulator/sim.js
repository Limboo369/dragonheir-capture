/*
 * DHSim: a math battle simulator for Dragonheir: Silent Gods.
 *
 * Plain script, no build step. In a browser it defines window.DHSim; in Node it
 * is a CommonJS module. Hero data comes from sim-data.js (official tables) and
 * hero kits from kits.js; both register themselves with DHSim when loaded.
 *
 * Every constant the game does not publish lives in RULES, with a confidence
 * label in RULE_INFO, so results can be re-run under other assumptions
 * (DHSim.sensitivity) and recalibrated once in-game tests are done.
 */
(function (root, factory) {
  var api = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.DHSim = api;
})(typeof window !== 'undefined' ? window : globalThis, function () {
  'use strict';

  var VERSION = '0.4.0';

  // ---------------------------------------------------------------- rules --
  // conf: verified = official text or table; estimated = derived from data;
  // assumed = placeholder until a source or an in-game test pins it down.
  var RULE_INFO = {
    dt: { v: 0.05, conf: 'model', note: 'Simulation time step in seconds.' },
    maxTime: { v: 90, conf: 'assumed', note: 'Fight length cap (s) when the mode sets none.' },
    ultMax: { v: 100, conf: 'estimated', note: 'Ultimate energy bar. Skill texts move energy in steps up to 100 (Vinyara drains 100), so the bar is read as 100.', range: [100, 100] },
    ultFull: { v: 20, conf: 'reported', note: 'Full ultimate charge time (s) at 0 Skill Haste. Most heroes show 20 or 23 s in game (CN guide 2025-04-18, HellHades 2025-07-30).', range: [18, 24] },
    ultFirst: { v: 12, conf: 'reported', note: 'First ultimate ready at (s). In-game examples 10.9, 17 and 18 s.', range: [9, 18] },
    energyRegen: { v: null, conf: 'model', note: 'Override for energy per second; empty = ultMax / ultFull.' },
    energyPerBasic: { v: 0, conf: 'estimated', note: 'Ultimate energy per basic attack. The game shows fixed charge times, so energy is read as time-based only.', range: [0, 4] },
    energyPerHitTaken: { v: 0, conf: 'estimated', note: 'Ultimate energy per hit taken (same reasoning).', range: [0, 1] },
    battleCd: { v: 10, conf: 'reported', note: 'Battle skill recharge (s) when the kit gives none. In-game examples 10 and 12 s.', range: [8, 14] },
    battleFirst: { v: 5, conf: 'reported', note: 'First battle skill ready at (s). In-game examples 5 and 7 s.', range: [3, 7] },
    heroTiming: { v: true, conf: 'reported', note: 'Use per-hero charge times from the CN wiki (2023-09, 187 heroes; Vinyara/Thia from a 2025 report). Off = the defaults above for everyone.' },
    scrolls: { v: 'max', conf: 'assumed', note: "Skill scroll upgrades: 'max' (matches the max-level skill numbers the kits use) or 'none' (unscrolled charge times, about 2-3 s slower)." },
    castBattle: { v: 0.8, conf: 'assumed', note: 'Animation lock after a battle skill (s).', range: [0.5, 1.2] },
    castUlt: { v: 1.5, conf: 'assumed', note: 'Animation lock after an ultimate (s).', range: [1, 2.5] },
    basicMult: { v: 1.0, conf: 'assumed', note: 'Basic attack = this x ATK.', range: [0.8, 1.2] },
    attackFreqMeaning: { v: 'perSecond', conf: 'verified', note: 'attack_frequency = basic attacks per second (0.4 = one every 2.5 s, official wiki article 103).' },
    hastePerPoint: { v: 0.002, conf: 'verified', note: 'Recharge speed = 1 + Skill Haste x this (5 haste = +1%, official wiki article 103; a 2025 CN guide implies 0.0018). Applies to battle skill and ultimate.', range: [0.0015, 0.0025] },
    defK: { v: 1200, conf: 'assumed', note: 'DEF mitigation = DEF / (DEF + defK). No source publishes the DEF formula; calibrate in game.', range: [600, 2400] },
    dmgRedCap: { v: 0.8, conf: 'assumed', note: 'Cap on summed Damage Reduction.' },
    accShift: { v: 0, conf: 'verified', note: 'Debuff land chance by ACC minus RES: developer Q&A 2025-12-09 (0 to +50 = 90-95%, +200 = 97%) and the official S1 test (-30 = 76%, -50 = 16%). This shifts the curve in points.', range: [-15, 15] },
    landCap: { v: 0.97, conf: 'reported', note: 'At least 3% of hostile effects are always resisted (CS reply 2023-10-19).', range: [0.95, 1] },
    tierScale: { v: 1, conf: 'verified', note: 'Buff/debuff tier values come from the official S1 table (Defense Up 30/60%, penalties 25/50%, Crit Rate Up 20%, Crit Damage Up 30%, Damage Reduction 30%). They may have changed after the 2025 relaunch; this scales them all.', range: [0.75, 1.25] },
    flatTier: { v: 50, conf: 'reported', note: 'Flat Accuracy/Resistance Up or Penalty per tier (CN tooltip: +50).' },
    frozenDmgTaken: { v: 0.3, conf: 'verified', note: 'Frozen units take 30% less damage (official S1 table).' },
    frostAtkSpd: { v: 0, conf: 'assumed', note: 'Frost slow on attack speed. No source states one, so off.', range: [0, 0.2] },
    poisonPerStack: { v: 0.045, conf: 'calibrated', note: 'Poison: each stack deals this x caster ATK per second as Derivative damage (x Enlightenment bonus). Not published; S1 capped a 5 s tick at 30% ATK (6%/s). Lowered from 0.065 to 0.045 on Darko\'s Poison-team Temporal Vortex statistics (2026-10-25: game 3.76M; 0.065 gave 4.2M).', range: [0.04, 0.1] },
    poisonMaxStacks: { v: 20, conf: 'assumed', note: 'Max Poison stacks per target.' },
    burnPerStack: { v: 0.1, conf: 'assumed', note: 'Burn per stack per second x caster ATK.' },
    derivEnch: { v: 200, conf: 'verified', note: 'Derivative damage (DoT) x (1 + Enlightenment / this) and cannot crit (official wiki article 103).' },
    dotCanCrit: { v: false, conf: 'verified', note: 'Derivative damage cannot crit (official wiki article 103).' },
    derivativeIgnoresDef: { v: false, conf: 'reported', note: 'Derivative damage is still reduced by enemy DEF and level (Reddit test 2023-05-30).' },
    areaSize: { v: 3, conf: 'assumed', note: 'Enemies hit by an "enemies within range" skill when more are alive.', range: [2, 5] },
    bossControlMult: { v: 0, conf: 'verified', note: 'Bosses are immune to control (official boss pages). Set above 0 to test partial control.', range: [0, 0.5] },
    rechargePenalty: { v: 0.7, conf: 'verified', note: 'Recharging Speed Penalty: recharge speed x 0.7 (official S1 table: -30%).' },
    bonds: { v: true, conf: 'verified', note: 'School bonds with published numbers (Support: 30 s shield of 10%/15% max HP; Frost [2]: 5 Frost stacks freeze for 5 s, [3]: Cold 5 s and Cold on 1 enemy at start). Poison and other bond numbers are not published, so those bonds are not modelled.' },
    frostStacks: { v: 5, conf: 'verified', note: 'Reborn S1: Frost stacks up to 5; at 5 stacks it bursts for [+3% Max HP] Cold damage (Steam overhaul preview 2025-05-12, CN beta 2025-01-21). 0 = old single Frost.' },
    frostBurst: { v: 0.03, conf: 'verified', note: 'Frost 5-stack burst: share of the target max HP dealt as Cold damage by the hero who added the 5th stack.' },
    frostBurstCap: { v: 4, conf: 'assumed', note: 'Cap on the Frost burst in x ATK of that hero ("scaled with the Frost hero\'s attack"). The text does not say how; without a cap a boss with 40x hero HP would take a huge hit.', range: [2, 8] },
    bossPower: { v: 1, conf: 'assumed', note: 'Boss and enemy ATK multiplier. No source publishes boss ATK/HP/DEF; 1 = the bench tuned so a level-matched team wins a normal boss with HP to spare. Calibrate from one in-game Statistics screen (damage taken / time).', range: [0.75, 1.4] },
    chanceAdd: { v: true, conf: 'assumed', note: '"+X% chance of inflicting status" (Frost Globe, sets) is added to the skill chance (75% + 20% = 95%, capped at 100%), then the Accuracy vs Resistance curve multiplies. The game text does not say add or multiply.' }
  };
  // [ACC - RES, land chance], linear between points, 0 below, landCap above.
  // Above 0: developer Q&A 2025-12-09 (dragonheir.info #1693): 0..50 fails
  // 5-10%, +200 or more fails about 3%. Below 0: official S1 test table (wiki
  // article 103) and the CS reply of 2023-10-19 (-40 = 50%, -100 = 5%).
  var ACC_CURVE = [[-107, 0], [-100, 0.03], [-70, 0.10], [-50, 0.17], [-40, 0.5], [-30, 0.76], [0, 0.9], [50, 0.95], [200, 0.97]];
  function accCurve(diff, cap) {
    if (diff <= ACC_CURVE[0][0]) return 0;
    for (var i = 1; i < ACC_CURVE.length; i++) {
      var a = ACC_CURVE[i - 1], b = ACC_CURVE[i];
      if (diff <= b[0]) return Math.min(cap, a[1] + (b[1] - a[1]) * (diff - a[0]) / (b[0] - a[0]));
    }
    return cap;
  }
  function defaultRules() {
    var r = {};
    for (var k in RULE_INFO) r[k] = RULE_INFO[k].v;
    return r;
  }

  // ------------------------------------------------------------------ rng --
  function makeRng(seed) {
    var a = (seed >>> 0) || 1;
    return function () {
      a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function clamp(x, lo, hi) { return x < lo ? lo : x > hi ? hi : x; }

  // ----------------------------------------------------------------- data --
  var DATA = null;
  var KITS = {};
  var ARTIFACT_FX = {};
  var SET_FX = {};
  var BOSSES = {};

  function setData(d) { DATA = d; }
  function hero(id) {
    if (!DATA) throw new Error('DHSim: sim-data.js not loaded');
    var h = DATA.heroes[String(id)];
    if (!h) {
      var low = String(id).toLowerCase();
      for (var k in DATA.heroes) if (DATA.heroes[k].n.toLowerCase() === low) return DATA.heroes[k];
      throw new Error('DHSim: unknown hero ' + id);
    }
    return h;
  }
  function artifactByName(name) {
    if (!name) return null;
    if (DATA.artifacts[String(name)]) return DATA.artifacts[String(name)];
    var low = String(name).toLowerCase().replace(/['’]/g, '');
    for (var k in DATA.artifacts) {
      if (DATA.artifacts[k].n.toLowerCase().replace(/['’]/g, '') === low) return DATA.artifacts[k];
    }
    return null;
  }
  function setByName(name) {
    if (!name) return null;
    var low = String(name).toLowerCase().replace(/['’]/g, '');
    for (var k in DATA.sets) {
      var s = DATA.sets[k];
      if (s.n.toLowerCase().replace(/['’]/g, '') === low || s.pieceSet.toLowerCase().replace(/['’]/g, '') === low) return s;
    }
    return null;
  }

  // ---------------------------------------------------------------- stats --
  var STAT_NAMES = ['hp', 'atk', 'def', 'critRate', 'critDmg', 'acc', 'res', 'ench', 'haste', 'atkSpd'];
  function starsForLevel(level) { return level >= 90 ? 5 : level >= 70 ? 4 : level >= 50 ? 3 : level >= 30 ? 2 : 1; }

  // Naked hero stats at a level and star count, using the formula of the
  // official site's hero calculator (dragonheir.info chunk 5ff7c56.js).
  function nakedStats(h, level, stars) {
    level = clamp(level | 0 || 1, 1, 100);
    stars = stars || starsForLevel(level);
    var sumL = 0;
    for (var k = 1; k <= level - 1; k++) sumL += DATA.levelMult[k] || 0;
    var out = {};
    STAT_NAMES.forEach(function (s) { out[s] = h.b[s] || 0; });
    ['hp', 'atk', 'def'].forEach(function (s) { out[s] += (h.g[s] || 0) * sumL; });
    for (var i = 0; i < stars - 1 && i < DATA.starUp.length; i++) {
      ['hp', 'atk', 'def', 'critDmg', 'critRate', 'res', 'ench', 'acc'].forEach(function (s) {
        out[s] += (h.g[s] || 0) * (DATA.starUp[i][s] || 0);
      });
    }
    return out;
  }

  // A gear profile is a bag of summed stats; profiles are estimates.
  var GEAR_PROFILES = {
    none: {},
    // Rough mid-game S1 gear, used only so heroes are compared on equal terms.
    dps: { atkF: 80, atkP: 0.35, hpF: 1200, hpP: 0.1, defF: 60, defP: 0.1, critRate: 0.2, critDmg: 0.3, acc: 40, res: 20, ench: 20, haste: 0 },
    poison: { atkF: 80, atkP: 0.3, hpF: 1200, hpP: 0.1, defF: 60, defP: 0.1, critRate: 0.15, critDmg: 0.2, acc: 60, res: 20, ench: 80, haste: 0 },
    support: { atkF: 60, atkP: 0.2, hpF: 1500, hpP: 0.25, defF: 80, defP: 0.2, critRate: 0.05, critDmg: 0.1, acc: 60, res: 40, ench: 60, haste: 30 },
    tank: { atkF: 40, atkP: 0.1, hpF: 1800, hpP: 0.35, defF: 100, defP: 0.3, critRate: 0.05, critDmg: 0.1, acc: 60, res: 60, ench: 30, haste: 30 }
  };
  function defaultProfile(h) {
    if (h.sc === 'Support') return /Warrior|Guard|Death Knight/.test(h.cl || '') ? 'tank' : 'support';
    if (h.sc === 'Poison' || h.sc === 'Corrosion') return 'poison';
    return 'dps';
  }

  // Full static stats of one hero spec, before battle buffs.
  // spec: {hero, level, stars, insp, gear: profileName | {..}, artifact: {name, level, tier}, sets: [names], stats: {...override}}
  function buildStats(spec) {
    var h = hero(spec.hero);
    // battleLevel: modes that set every hero to a fixed level (Temporal Vortex
    // shows Lv79 cards on Difficulty II for a Lv59 team). Typed totals were
    // measured at spec.level, so only the base growth between the two is added.
    var lvl0 = spec.level || 60, lvl = Math.max(lvl0, spec.battleLevel || 0);
    var n = nakedStats(h, lvl, spec.stars), n0 = lvl === lvl0 ? n : nakedStats(h, lvl0, spec.stars);
    var g = typeof spec.gear === 'string' ? GEAR_PROFILES[spec.gear] : spec.gear;
    if (!g) g = GEAR_PROFILES[defaultProfile(h)];
    var s = {
      hpB: n.hp, atkB: n.atk, defB: n.def,
      hpF: g.hpF || 0, atkF: g.atkF || 0, defF: g.defF || 0,
      hpP: g.hpP || 0, atkP: g.atkP || 0, defP: g.defP || 0,
      critRate: n.critRate + (g.critRate || 0), critDmg: n.critDmg + (g.critDmg || 0),
      acc: n.acc + (g.acc || 0), res: n.res + (g.res || 0), ench: n.ench + (g.ench || 0),
      haste: n.haste + (g.haste || 0), atkSpd: n.atkSpd + (g.atkSpd || 0),
      dmgBonus: g.dmgBonus || 0, dmgRed: g.dmgRed || 0, healP: g.healP || 0, shieldP: g.shieldP || 0,
      statusChance: 0, defIgnore: 0, resIgnore: 0
    };
    var insp = spec.insp || 0;
    for (var i = 0; i < Math.min(insp, 5); i++) {
      var st = (h.insp[i] && h.insp[i].stats) || {};
      for (var k in st) addStat(s, k, st[k]);
    }
    applySkillLevels(s, spec.skills);
    var notes = [];
    if (spec.artifact) {
      var a = artifactByName(spec.artifact.name || spec.artifact);
      if (a) {
        var al = clamp((spec.artifact.level || 20) - 1, 0, 19);
        a.stats.forEach(function (p) { addStat(s, p[0], p[1][al]); });
      } else notes.push('unknown artifact ' + (spec.artifact.name || spec.artifact));
    }
    (spec.sets || []).forEach(function (sn) {
      var set = setByName(sn.name || sn);
      if (!set) { notes.push('unknown set ' + (sn.name || sn)); return; }
      if (setPieces(set, sn) >= 2) for (var k in set.bonus2) addStat(s, k, set.bonus2[k]);
    });
    if (spec.stats) {
      // Measured hero-screen totals replace the model for the typed stats only
      // (they already contain gear, set 2-piece stats and artifact main stats,
      // so nothing is added twice; untyped stats keep the model's gear). ATK,
      // HP and DEF keep the hero's base so battle % buffs and auras scale off
      // the base as in game; the rest of the typed total becomes flat bonus.
      var o = spec.stats;
      if (o.atk != null) { s.atkF = o.atk - n0.atk; s.atkP = 0; }
      if (o.hp != null) { s.hpF = o.hp - n0.hp; s.hpP = 0; }
      if (o.def != null) { s.defF = o.def - n0.def; s.defP = 0; }
      ['critRate', 'critDmg', 'acc', 'res', 'ench', 'haste', 'atkSpd'].forEach(function (k) { if (o[k] != null) s[k] = o[k]; });
    }
    // mult: enemy heroes in PvE modes are stronger than a player's hero of the same level.
    if (spec.mult) { var mu = spec.mult; if (mu.hp) { s.hpB *= mu.hp; s.hpF *= mu.hp; } if (mu.atk) { s.atkB *= mu.atk; s.atkF *= mu.atk; } }
    return { s: s, h: h, notes: notes };
  }
  // Skill levels (Battle and Ultimate, 1-5; passives have no level). Skill
  // texts in the data are the level-1 text (Garrika's config text matches the
  // level-1 tooltip: 75% chance, which level 4 raises by 25). Each level adds
  // the step below on top. Per-hero paths differ in game; this is the common
  // pattern (tooltips: Garrika 2023 via ayumilove; Reborn tooltip 2025-05-12:
  // later levels add damage and cut recharge by 3 s). conf: reported pattern.
  var SKILL_LV = {
    max: 5,
    battle: [null, null, { dmg: 0.05 }, { dmg: 0.10 }, { chance: 0.25 }, { cd: 3 }],
    ult: [null, null, { dmg: 0.10 }, { chance: 0.25 }, { cd: 3 }, { dmg: 0.10 }]
  };
  function applySkillLevels(s, lv) {
    if (!lv) return;
    ['battle', 'ult'].forEach(function (slot) {
      var L = clamp(Math.round(+lv[slot] || 1), 1, SKILL_LV.max);
      for (var i = 2; i <= L; i++) {
        var st = SKILL_LV[slot][i];
        if (st.dmg) s['dmgBonus_' + slot] = (s['dmgBonus_' + slot] || 0) + st.dmg;
        if (st.chance) s['statusChance_' + slot] = (s['statusChance_' + slot] || 0) + st.chance;
        if (st.cd) s['cdCut_' + slot] = (s['cdCut_' + slot] || 0) + st.cd;
      }
    });
  }
  // Reborn gear: 4 slots; Legendary 2-piece stats + 3-piece effect, Mythic
  // 1-piece effect, Epic/Rare 2-piece stats (game config, gear-sets.json).
  function setPieces(set, sn) { return sn.pieces || (set.r === 'Mythic' ? 1 : set.r === 'Legendary' ? 3 : 2); }
  function setNeed(set) { return set.r === 'Mythic' ? 1 : 3; }
  function addStat(s, k, v) {
    switch (k) {
      case 'atk': s.atkF += v; break;
      case 'hp': s.hpF += v; break;
      case 'def': s.defF += v; break;
      case 'atkPct': s.atkP += v; break;
      case 'hpPct': s.hpP += v; break;
      case 'defPct': s.defP += v; break;
      default: s[k] = (s[k] || 0) + v;
    }
  }
  function finalStats(s) {
    return {
      atk: s.atkB * (1 + s.atkP) + s.atkF, hp: s.hpB * (1 + s.hpP) + s.hpF, def: s.defB * (1 + s.defP) + s.defF,
      critRate: s.critRate, critDmg: s.critDmg, acc: s.acc, res: s.res, ench: s.ench, haste: s.haste, atkSpd: s.atkSpd
    };
  }

  // ------------------------------------------------------------- statuses --
  // Names follow the game ("Defense Up II", "Attack Penalty II").
  // [stat, sign, kind, tier values I/II/III]; kind 'pct' adds the value,
  // 'pctStat' adds value x the unit's own base stat, 'flat' adds RULES.flatTier x tier.
  // Values from the official S1 status table (wiki article 103); 'Attack Up'
  // is always written with its own % in skill texts, 20% is only a fallback.
  var STAT_STATUS = {
    'Attack Up': ['atkP', 1, 'pct', [0.2, 0.4, 0.6]], 'Attack Penalty': ['atkP', -1, 'pct', [0.25, 0.5, 0.75]],
    'Defense Up': ['defP', 1, 'pct', [0.3, 0.6, 0.9]], 'Defense Penalty': ['defP', -1, 'pct', [0.25, 0.5, 0.75]],
    'Accuracy Up': ['acc', 1, 'pctStat', [0.25, 0.5, 0.75]], 'Accuracy Penalty': ['acc', -1, 'pctStat', [0.25, 0.5, 0.75]],
    'Resistance Up': ['res', 1, 'flat'], 'Resistance Penalty': ['res', -1, 'flat'],
    'Attack Speed Up': ['atkSpd', 1, 'pct', [0.25, 0.5, 0.75]], 'Attack Speed Penalty': ['atkSpd', -1, 'pct', [0.25, 0.5, 0.75]],
    'Crit Rate Up': ['critRate', 1, 'pct', [0.2, 0.2, 0.2]], 'Crit Damage Up': ['critDmg', 1, 'pct', [0.3, 0.3, 0.3]],
    'Enlightenment Up': ['ench', 1, 'pctStat', [0.2, 0.2, 0.2]],
    'Received Healing Up': ['healRecv', 1, 'pct', [0.3, 0.3, 0.3]], 'Healing Penalty': ['healRecv', -1, 'pct', [0.5, 0.5, 0.5]],
    'Healing Reduction': ['healRecv', -1, 'pct', [0.5, 0.5, 0.5]],
    'Damage Reduction': ['dmgRed', 1, 'pct', [0.3, 0.3, 0.3]]
  };
  // 1 = cannot act, 0 = control that still lets the unit act.
  var CONTROL = { 'Frozen': 1, 'Stunned': 1, 'Knocked Up': 1, 'Silenced': 0, 'Taunt': 0, 'Sleep': 1, 'Petrified': 1, 'Fear': 1, 'Charmed': 1, 'Devoured': 1 };
  // Controls during which the unit gains no ultimate energy (official S1 status table).
  var NO_ENERGY = { 'Frozen': 1, 'Stunned': 1, 'Knocked Up': 1, 'Sleep': 1, 'Petrified': 1, 'Devoured': 1 };
  var DEBUFF_OTHER = { 'Cold': 1, 'Frost': 1, 'Poison': 1, 'Burn': 1, 'Bleeding': 1, 'Buff Prohibition': 1, 'Recharging Speed Penalty': 1, 'Healing Prohibition': 1, 'Healing Reduction': 1, 'Vulnerable': 1, 'Static': 1, 'Blind': 1 };
  var STACKING = { 'Poison': 'poisonMaxStacks', 'Burn': 20, 'Bleeding': 10, 'Static': 10, 'Frost': 'frostStacks' };
  function parseStatus(name) {
    var m = /^(.*?)\s+(I{1,3})$/.exec(name);
    var base = m ? m[1] : name, tier = m ? m[2].length : 0;
    var kind = 'buff';
    if (CONTROL.hasOwnProperty(base)) kind = 'control';
    else if (DEBUFF_OTHER[base] || /Penalty|Prohibition/.test(base)) kind = 'debuff';
    return { base: base, tier: tier, kind: kind };
  }

  // --------------------------------------------------------------- battle --
  function Battle(cfg) {
    this.R = cfg.rules;
    this.rand = makeRng(cfg.seed || 1);
    this.t = 0;
    this.units = [];
    this.listeners = {};
    this.queue = [];
    this.log = cfg.log ? [] : null;
    this.mode = cfg.mode || 'pve';
    this.timeline = [];
    this.tlStep = cfg.timelineStep || 0;
    this.waves = cfg.waves || null;
    this.waveIdx = 0;
    this.result = null;
    this.uidSeq = 0;
    // Replay trace (one battle): frames every trace.step s plus an event list.
    this.trace = cfg.trace ? { step: cfg.trace.step || 0.2, frames: [], ev: [] } : null;
    // Team HP fraction and heroes alive, sampled every second (survival curves).
    this.curve = [];
  }
  var B = Battle.prototype;

  B.chance = function (p) { return p >= 1 || this.rand() < p; };
  B.tr = function (type, d) {
    if (!this.trace || this.trace.ev.length > 30000) return;
    d.t = Math.round(this.t * 100) / 100; d.k = type;
    this.trace.ev.push(d);
  };
  B.note = function (msg) { if (this.log && this.log.length < 4000) this.log.push(this.t.toFixed(2) + ' ' + msg); };

  B.on = function (owner, ev, fn) { (this.listeners[ev] = this.listeners[ev] || []).push({ owner: owner, fn: fn }); };
  B.emit = function (ev, p) {
    var L = this.listeners[ev];
    if (!L) return;
    for (var i = 0; i < L.length; i++) {
      var o = L[i].owner;
      if (o && !o.alive && !L[i].always) continue;
      L[i].fn(p);
    }
  };
  B.after = function (delay, fn, owner) { this.queue.push({ at: this.t + delay, fn: fn, owner: owner }); };
  B.every = function (period, duration, fn, owner, immediate) {
    var self = this, n = Math.round(duration / period);
    for (var i = immediate ? 0 : 1; i <= n; i++) self.after(i * period, fn, owner);
  };

  // ---- unit creation
  B.addUnit = function (side, spec, extra) {
    var built = spec.custom ? spec.custom : buildStats(spec);
    // Preset enemies: boss strength rule scales their ATK (fresh copy per battle).
    if (spec.custom && side === 'B' && this.R.bossPower !== 1) {
      built = { h: built.h, notes: built.notes, s: Object.assign({}, built.s, { atkB: built.s.atkB * this.R.bossPower }) };
    }
    var u = {
      uid: ++this.uidSeq, side: side, spec: spec, h: built.h, name: (built.h && built.h.n) || spec.name,
      heroId: built.h ? built.h.id : null, s: built.s, alive: true, isBoss: !!spec.isBoss,
      melee: built.h ? built.h.melee : !!spec.melee, sts: [], shields: [], flags: {}, energy: 0,
      cdBattle: this.R.battleFirst, basicT: 0.2 + 0.3 * this.rand(), castUntil: 0, insp: spec.insp || 0,
      rec: { dmg: 0, by: {}, heal: 0, shield: 0, taken: 0, takenHp: 0, absorbed: 0, deathAt: null, ults: 0, battles: 0, basics: 0, dTry: 0, dLand: 0, dResisted: 0, minHp: 1, takenBy: {} }
    };
    if (extra) for (var k in extra) u[k] = extra[k];
    var fs = finalStats(u.s);
    u.maxHp0 = fs.hp;
    u.hp = fs.hp;
    u.kit = spec.kit || KITS[u.heroId] || autoKit(u.h);
    u.notes = built.notes;
    // Energy is time-based: start so the first ultimate comes at ultFirst (0 haste).
    var full = this.ultFull(u), first = u.kit.ultFirst != null ? u.kit.ultFirst : this.timing(u, 'uf') || this.R.ultFirst;
    u.energy = this.R.ultMax * clamp(1 - first / full, 0, 1);
    var bf = u.kit.battleFirst != null ? u.kit.battleFirst : this.timing(u, 'bf');
    if (bf != null) u.cdBattle = bf;
    this.units.push(u);
    return u;
  };

  // ---- stat reads (static + status modifiers)
  B.mod = function (u, key) {
    var v = 0, R = this.R;
    for (var i = 0; i < u.sts.length; i++) {
      var st = u.sts[i];
      if (st.mods && st.mods[key] != null) v += st.mods[key] * (st.stacks ? st.stacks.length : 1);
      var ss = STAT_STATUS[st.base];
      if (ss && ss[0] === key) {
        var val = st.value != null ? st.value : this.tierValue(st.base, st.tier);
        if (ss[2] === 'pctStat' && st.value == null) val *= u.s[key] || 0;
        v += ss[1] * val;
      }
    }
    return v;
  };
  // Value of an untyped tier of a stat status (no % written in the text).
  B.tierValue = function (base, tier) {
    var ss = STAT_STATUS[base], t = clamp(tier || 1, 1, 3);
    if (!ss) return 0;
    if (ss[2] === 'flat') return this.R.flatTier * t;
    return ss[3][t - 1] * this.R.tierScale;
  };
  B.atk = function (u) { return Math.max(0, u.s.atkB * (1 + u.s.atkP + this.mod(u, 'atkP')) + u.s.atkF + this.mod(u, 'atkF')); };
  B.def = function (u) { return Math.max(0, u.s.defB * (1 + u.s.defP + this.mod(u, 'defP')) + u.s.defF + this.mod(u, 'defF')); };
  B.maxHp = function (u) { return Math.max(1, u.maxHp0 + this.mod(u, 'hpF') - (u.maxHpCut || 0)); };
  B.stat = function (u, k) { return (u.s[k] || 0) + this.mod(u, k); };
  B.has = function (u, base) {
    for (var i = 0; i < u.sts.length; i++) if (u.sts[i].base === base) return u.sts[i];
    return null;
  };
  B.stacks = function (u, base) { var s = this.has(u, base); return s ? (s.stacks ? s.stacks.length : 1) : 0; };
  B.controlled = function (u) {
    for (var i = 0; i < u.sts.length; i++) if (CONTROL[u.sts[i].base] === 1) return true;
    return false;
  };
  B.countDebuffs = function (u) {
    var n = 0;
    for (var i = 0; i < u.sts.length; i++) if (u.sts[i].kind !== 'buff') n++;
    return n;
  };

  // ---- targeting
  B.allies = function (u, includeSelf) {
    var self = this;
    return this.units.filter(function (x) { return x.side === u.side && x.alive && (includeSelf !== false || x !== u); });
  };
  B.enemies = function (u) {
    return this.units.filter(function (x) { return x.side !== u.side && x.alive; });
  };
  B.targetable = function (u) {
    var self = this;
    var e = this.enemies(u).filter(function (x) { return !self.has(x, 'Invisibility'); });
    return e.length ? e : this.enemies(u);
  };
  // Main target of u: taunter, else its current target if alive, else a new pick.
  B.target = function (u) {
    var taunt = this.has(u, 'Taunt');
    if (taunt && taunt.src && taunt.src.alive) return taunt.src;
    if (u.tgt && u.tgt.alive && !this.has(u.tgt, 'Invisibility')) return u.tgt;
    var e = this.targetable(u);
    if (!e.length) return null;
    var pick;
    if (u.side === 'B') {
      // Enemies go for the front line first.
      var front = e.filter(function (x) { return x.melee; });
      var pool = front.length ? front : e;
      pick = pool[Math.floor(this.rand() * pool.length)];
    } else {
      // Allies focus the boss, otherwise the first alive enemy.
      pick = e.filter(function (x) { return x.isBoss; })[0] || e[0];
    }
    u.tgt = pick;
    return pick;
  };
  B.area = function (u, center, n) {
    n = n || this.R.areaSize;
    var e = this.enemies(u);
    center = center || this.target(u);
    if (!center) return [];
    var rest = e.filter(function (x) { return x !== center; });
    for (var i = rest.length - 1; i > 0; i--) { var j = Math.floor(this.rand() * (i + 1)); var tmp = rest[i]; rest[i] = rest[j]; rest[j] = tmp; }
    return [center].concat(rest.slice(0, n - 1));
  };
  B.lowestHp = function (list) {
    var best = null;
    for (var i = 0; i < list.length; i++) if (!best || list[i].hp / this.maxHp(list[i]) < best.hp / this.maxHp(best)) best = list[i];
    return best;
  };
  B.lowestCurHp = function (list) {
    var best = null;
    for (var i = 0; i < list.length; i++) if (!best || list[i].hp < best.hp) best = list[i];
    return best;
  };

  // ---- scaling: coef keys atk, ench, hp (own max HP), def, thp (target max HP)
  B.scale = function (src, tgt, coef) {
    var v = 0;
    if (coef.atk) v += coef.atk * this.atk(src);
    if (coef.ench) v += coef.ench * this.stat(src, 'ench');
    if (coef.hp) v += coef.hp * this.maxHp(src);
    if (coef.def) v += coef.def * this.def(src);
    if (coef.thp && tgt) v += coef.thp * this.maxHp(tgt);
    if (coef.flat) v += coef.flat;
    return v;
  };

  // ---- damage
  // o: {el, tag, noCrit, trueDmg, defIgnore, bonus, apply: [[status, chance, dur, extra]], skill}
  B.hit = function (src, tgt, coef, o) {
    o = o || {};
    if (!tgt || !tgt.alive) return { amount: 0 };
    var R = this.R;
    var raw = typeof coef === 'number' ? coef : this.scale(src, tgt, coef);
    var ctx = { src: src, tgt: tgt, o: o, bonus: (o.bonus || 0) + this.stat(src, 'dmgBonus') + (o.tag === 'battle' || o.tag === 'ult' ? this.stat(src, 'dmgBonus_' + o.tag) : 0), defIgnore: (o.defIgnore || 0) + this.stat(src, 'defIgnore'),
      critRate: this.stat(src, 'critRate') + (o.critRate || 0), critDmg: this.stat(src, 'critDmg'), vuln: this.stat(tgt, 'vuln'), raw: raw, critExtra: 0 };
    this.emit('modifyDamage', ctx);
    if (this.has(tgt, 'Invincibility')) { this.emit('hit', { src: src, tgt: tgt, o: o, amount: 0, crit: false }); return { amount: 0 }; }
    var isDot = o.tag === 'dot' || o.el === 'Derivative' || o.derivative;
    var crit = !o.noCrit && (!isDot || R.dotCanCrit) && this.rand() < ctx.critRate;
    var m = (1 + ctx.bonus) * (1 + ctx.vuln) * (1 - clamp(this.stat(tgt, 'dmgRed'), 0, R.dmgRedCap));
    if (isDot && !o.trueDmg) m *= 1 + Math.max(0, this.stat(src, 'ench')) / R.derivEnch;
    if (this.has(tgt, 'Frozen')) m *= 1 - R.frozenDmgTaken;
    if (crit) m *= (1 + ctx.critDmg * (1 - this.stat(tgt, 'critDmgTakenRed'))) * (1 + ctx.critExtra);
    if (!o.trueDmg && !(o.el === 'Derivative' && R.derivativeIgnoresDef)) {
      var d = this.def(tgt) * (1 - clamp(ctx.defIgnore, 0, 1));
      m *= R.defK / (d + R.defK);
    }
    var amount = ctx.raw * m;
    var dealt = this.damage(tgt, amount, src, o);
    var tag = o.tag || 'skill';
    src.rec.dmg += dealt;
    src.rec.by[tag] = (src.rec.by[tag] || 0) + dealt;
    if (R.energyPerHitTaken && !this.noEnergy(tgt)) tgt.energy = Math.min(R.ultMax, tgt.energy + R.energyPerHitTaken * this.energyMult(tgt));
    var ev = { src: src, tgt: tgt, o: o, amount: dealt, crit: crit };
    if (this.trace && dealt > 0) this.tr('d', { s: src.uid, g: tgt.uid, a: Math.round(dealt), c: crit ? 1 : 0, g2: tag });
    if (!o.quiet) this.emit('hit', ev);
    if (crit && !o.quiet) this.emit('crit', ev);
    if (o.apply) for (var i = 0; i < o.apply.length; i++) {
      var a = o.apply[i];
      if (tgt.alive || a[0] === 'Poison') this.apply(src, tgt, a[0], a[1], a[2], a[3]);
    }
    return ev;
  };
  // Raw HP loss after shields and death checks; returns HP actually removed.
  B.damage = function (tgt, amount, src, o) {
    if (!tgt.alive || amount <= 0) return 0;
    var ctx = { tgt: tgt, src: src, amount: amount, o: o || {} };
    this.emit('beforeDamaged', ctx);
    amount = ctx.amount;
    for (var i = 0; i < tgt.shields.length && amount > 0; i++) {
      var sh = tgt.shields[i], take = Math.min(sh.amt, amount);
      sh.amt -= take; amount -= take; tgt.rec.absorbed += take;
      if (sh.src && sh.src.rec) sh.src.rec.shieldUsed = (sh.src.rec.shieldUsed || 0) + take; // the game books this as Healing
    }
    tgt.shields = tgt.shields.filter(function (x) { return x.amt > 0.01; });
    var floor = this.has(tgt, 'Immortality') ? 1 : 0;
    var before = tgt.hp;
    tgt.hp = Math.max(floor, tgt.hp - amount);
    if (tgt.hp <= 0) {
      var f = { tgt: tgt, src: src, saved: false };
      this.emit('fatal', f);
      if (f.saved) tgt.hp = Math.max(tgt.hp, 1);
    }
    var lost = before - tgt.hp;
    tgt.rec.taken += lost + (ctx.amount - amount);
    tgt.rec.takenHp += lost; // what the game's Statistics screen calls Damage Taken (shields excluded)
    if (src) { var sk = (o && o.tag) || 'skill'; tgt.rec.takenBy[sk] = (tgt.rec.takenBy[sk] || 0) + lost + (ctx.amount - amount); }
    var frac = tgt.hp / this.maxHp(tgt);
    if (frac < tgt.rec.minHp) tgt.rec.minHp = frac;
    ctx.hpLost = lost;
    if (tgt.hp <= 0) this.kill(tgt, src);
    else this.emit('damaged', { tgt: tgt, src: src, amount: lost, o: ctx.o });
    if (src && lost > 0) this.emit('hpLost', { tgt: tgt, src: src, amount: lost, o: ctx.o });
    return lost + (ctx.amount - amount);
  };
  B.kill = function (u, src) {
    if (!u.alive) return;
    u.alive = false; u.hp = 0; u.rec.deathAt = this.t;
    u.sts = []; u.shields = [];
    this.note(u.name + ' dies');
    this.tr('x', { g: u.uid, s: src ? src.uid : 0 });
    this.emit('death', { tgt: u, src: src });
    if (src) this.emit('kill', { src: src, tgt: u });
  };
  B.heal = function (src, tgt, coef, o) {
    o = o || {};
    if (!tgt || !tgt.alive || this.has(tgt, 'Healing Prohibition')) return 0;
    var amt = (typeof coef === 'number' ? coef : this.scale(src, tgt, coef)) * (1 + this.stat(src, 'healP') + (o.bonus || 0)) * (1 + this.stat(tgt, 'healRecv'));
    var ctx = { src: src, tgt: tgt, amount: amt, o: o };
    this.emit('modifyHeal', ctx);
    var mh = this.maxHp(tgt), eff = Math.min(ctx.amount, mh - tgt.hp);
    src.rec.healRaw = (src.rec.healRaw || 0) + ctx.amount; // overheal included
    tgt.hp += eff;
    src.rec.heal += eff;
    if (this.trace && eff > 0.5) this.tr('h', { s: src.uid, g: tgt.uid, a: Math.round(eff) });
    this.emit('healed', { src: src, tgt: tgt, amount: eff, o: o });
    return eff;
  };
  B.shield = function (src, tgt, coef, dur, o) {
    o = o || {};
    if (!tgt || !tgt.alive) return 0;
    var amt = (typeof coef === 'number' ? coef : this.scale(src, tgt, coef)) * (1 + this.stat(src, 'shieldP') + (o.bonus || 0));
    dur = dur * (1 + this.stat(src, 'shieldDur'));
    var sh = { amt: amt, until: this.t + dur, src: src };
    tgt.shields.push(sh);
    src.rec.shield += amt;
    if (this.trace && amt > 0.5) this.tr('s', { s: src.uid, g: tgt.uid, a: Math.round(amt) });
    this.emit('shielded', { src: src, tgt: tgt, amount: amt, o: o });
    return amt;
  };
  // Recharge speed: Skill Haste, then Recharging Speed Penalty / Up statuses.
  B.energyMult = function (u) { return this.has(u, 'Recharging Speed Penalty') ? this.R.rechargePenalty : 1; };
  B.rechargeRate = function (u) {
    return (1 + Math.max(0, this.stat(u, 'haste')) * this.R.hastePerPoint) * this.energyMult(u) * (1 + this.stat(u, 'rechargeUp'));
  };
  B.noEnergy = function (u) {
    for (var i = 0; i < u.sts.length; i++) if (NO_ENERGY[u.sts[i].base]) return true;
    return false;
  };
  // Per-hero charge time: kit, then the hero timing table, then the default rule.
  B.timing = function (u, key) {
    var tm = this.R.heroTiming && u.h && u.h.tm;
    if (!tm) return null;
    var v = this.R.scrolls === 'none' ? tm[key + 'B'] : tm[key];
    return v == null ? tm[key] == null ? null : tm[key] : v;
  };
  B.ultFull = function (u) { return Math.max(4, ((u.kit && u.kit.ultFull) || this.timing(u, 'uc') || this.R.ultFull) - this.stat(u, 'cdCut_ult')); };
  // Final chance that a hostile status lands: skill chance (+ additive chance
  // bonuses, capped at 100%) x the ACC vs RES curve.
  B.landChance = function (src, tgt, chance, skill, noRes) {
    var c = Math.min(1, (chance == null ? 1 : chance) + this.stat(src, 'statusChance') + (skill ? this.stat(src, 'statusChance_' + skill) : 0));
    if (noRes) return c;
    var diff = this.stat(src, 'acc') - this.stat(tgt, 'res') * (1 - clamp(this.stat(src, 'resIgnore'), 0, 1));
    return c * accCurve(diff + this.R.accShift, this.R.landCap);
  };
  B.energy = function (u, v) { u.energy = clamp(u.energy + (v > 0 ? v * this.energyMult(u) : v), 0, this.R.ultMax); };

  // ---- statuses
  // extra: {value, stacks, ignoreRes, data, mods, skill, undispellable}
  B.apply = function (src, tgt, name, chance, dur, extra) {
    extra = extra || {};
    if (!tgt || !tgt.alive) return false;
    var p = parseStatus(name), R = this.R;
    var hostile = p.kind !== 'buff';
    if (hostile) {
      if (tgt.side === src.side) return false;
      if (this.has(tgt, 'Debuff Immunity') || (p.kind === 'control' && (this.has(tgt, 'Control Immunity') || tgt.controlImmune))) return false;
      src.rec.dTry++;
      if (!this.chance(this.landChance(src, tgt, chance, extra.skill, extra.ignoreRes))) {
        // A miss: either the skill's own chance failed or the target resisted.
        tgt.rec.dResisted++;
        this.tr('m', { s: src.uid, g: tgt.uid, n: name });
        this.emit('resisted', { src: src, tgt: tgt, name: name });
        return false;
      }
      src.rec.dLand++;
      var dctx = { src: src, tgt: tgt, name: name, base: p.base, dur: dur };
      this.emit('debuffDuration', dctx);
      dur = dctx.dur;
      if (p.kind === 'control' && tgt.isBoss) { dur *= R.bossControlMult; if (dur <= 0) return false; }
    } else {
      if (this.has(tgt, 'Buff Prohibition')) return false;
      if (chance != null && chance < 1 && !this.chance(Math.min(1, chance + this.stat(src, 'statusChance')))) return false;
    }
    if (dur <= 0) return false;
    var until = this.t + dur, ex = this.has(tgt, p.base);
    var maxStacks = STACKING[p.base];
    if (typeof maxStacks === 'string') maxStacks = R[maxStacks];
    var burst = false;
    var already = !!ex;
    if (maxStacks) {
      if (!ex) { ex = { base: p.base, name: p.base, kind: p.kind, tier: 0, stacks: [], src: src }; tgt.sts.push(ex); }
      var n = extra.stacks || 1;
      for (var i = 0; i < n; i++) {
        if (ex.stacks.length >= maxStacks) ex.stacks.shift();
        ex.stacks.push({ until: until, src: src, pow: extra.value != null ? extra.value : this.atk(src) });
        if (p.base === 'Frost' && ex.stacks.length >= maxStacks) { burst = true; break; }
      }
    } else if (ex && ex.tier >= p.tier) {
      ex.until = Math.max(ex.until, until);
      if (p.tier === ex.tier) ex.src = src;
    } else {
      if (ex) tgt.sts.splice(tgt.sts.indexOf(ex), 1);
      ex = { base: p.base, name: name, kind: p.kind, tier: p.tier, until: until, src: src, value: extra.value, mods: extra.mods, data: extra.data, undispellable: !!extra.undispellable };
      tgt.sts.push(ex);
    }
    var ev = { src: src, tgt: tgt, name: name, base: p.base, kind: p.kind, already: already, skill: extra.skill };
    if (this.trace && !extra.quiet) this.tr('b', { s: src.uid, g: tgt.uid, n: name, h: hostile ? 1 : 0 });
    this.emit('statusApplied', ev);
    if (hostile) this.emit('debuffApplied', ev);
    if (p.base === 'Taunt') tgt.tgt = src;
    if (burst) this.frostBurst(src, tgt, ex);
    return true;
  };
  // Reborn Frost: 5 stacks burst for [+3% Max HP] Cold damage (capped by the
  // hero's ATK, see frostBurstCap), then the stacks are used up. Frost bond
  // [2] freezes for 5 s on the burst, [3] adds Cold for 5 s.
  B.frostBurst = function (src, tgt, st) {
    var R = this.R;
    this.remove(tgt, 'Frost');
    var amt = Math.min(R.frostBurst * this.maxHp(tgt), R.frostBurstCap * this.atk(src));
    this.hit(src, tgt, amt, { el: 'Cold', tag: 'passive', noCrit: true, frostBurst: true });
    var bond = this.bondCount && this.bondCount[src.side] && this.bondCount[src.side].Frost || 0;
    if (R.bonds && bond >= 2 && tgt.alive) this.apply(src, tgt, 'Frozen', 1, 5, { quiet: false });
    if (R.bonds && bond >= 3 && tgt.alive) this.apply(src, tgt, 'Cold', 1, 5);
    this.emit('frostBurst', { src: src, tgt: tgt });
  };
  B.remove = function (u, base) { u.sts = u.sts.filter(function (s) { return s.base !== base; }); };
  B.dispel = function (u, n, kind) {
    // kind: 'buff' removes buffs, 'debuff' removes debuffs and controls.
    var removed = 0;
    for (var i = u.sts.length - 1; i >= 0 && removed < n; i--) {
      var s = u.sts[i], isBuff = s.kind === 'buff';
      if ((kind === 'buff') === isBuff && !s.undispellable) { u.sts.splice(i, 1); removed++; }
    }
    if (kind === 'buff' && removed < n && u.shields.length && n >= 99) u.shields = [];
    return removed;
  };
  B.buff = function (src, tgt, name, dur, mods, extra) {
    extra = extra || {};
    extra.mods = mods;
    return this.apply(src, tgt, name, 1, dur, extra);
  };

  // ---- time
  B.tickStatuses = function () {
    var t = this.t, R = this.R, self = this;
    this.units.forEach(function (u) {
      if (!u.alive) return;
      for (var i = u.sts.length - 1; i >= 0; i--) {
        var s = u.sts[i];
        if (s.stacks) {
          s.stacks = s.stacks.filter(function (x) { return x.until > t; });
          if (!s.stacks.length) u.sts.splice(i, 1);
        } else if (s.until <= t) u.sts.splice(i, 1);
      }
      if (u.shields.length) u.shields = u.shields.filter(function (x) { return x.until > t; });
    });
    // DoT ticks once per second.
    if (Math.abs(t - Math.round(t)) < R.dt / 2 && t > 0.01) {
      this.units.forEach(function (u) {
        if (!u.alive) return;
        var p = self.has(u, 'Poison');
        if (p && p.stacks.length) {
          var bySrc = new Map();
          p.stacks.forEach(function (x) { bySrc.set(x.src, (bySrc.get(x.src) || 0) + x.pow * R.poisonPerStack); });
          bySrc.forEach(function (amt, src) { if (u.alive) self.hit(src, u, amt, { el: 'Poison', tag: 'dot', dotOf: 'Poison' }); });
        }
        var bu = self.has(u, 'Burn');
        if (bu && bu.stacks.length) {
          var bs = new Map();
          bu.stacks.forEach(function (x) { bs.set(x.src, (bs.get(x.src) || 0) + x.pow * R.burnPerStack); });
          bs.forEach(function (amt, src) { if (u.alive) self.hit(src, u, amt, { el: 'Fire', tag: 'dot', dotOf: 'Burn' }); });
        }
        self.emit('second', { u: u });
      });
    }
  };

  B.basicInterval = function (u) {
    var af = (u.h && u.h.af) || u.af || 0.5;
    var spd = 1 + this.stat(u, 'atkSpd') - (this.has(u, 'Frost') ? this.R.frostAtkSpd : 0);
    return 1 / (af * Math.max(0.2, spd));
  };
  // Base recharge of the battle skill; the countdown runs at rechargeRate(u).
  B.battleCd = function (u) { return Math.max(2, ((u.kit && u.kit.battleCd) || this.timing(u, 'bc') || this.R.battleCd) - this.stat(u, 'cdCut_battle')); };

  B.act = function (u) {
    var R = this.R, k = u.kit;
    if (this.controlled(u) || this.t < u.castUntil) return;
    var silenced = this.has(u, 'Silenced');
    if (k.ult && !silenced && u.energy >= R.ultMax && (!k.ultReady || k.ultReady(u, this))) {
      u.energy = 0;
      u.rec.ults++;
      this.note(u.name + ' ult');
      this.tr('u', { s: u.uid });
      this.emit('cast', { src: u, slot: 'ult' });
      k.ult(u, this);
      this.emit('afterCast', { src: u, slot: 'ult' });
      u.castUntil = this.t + R.castUlt;
      return;
    }
    if (k.battle && !silenced && u.cdBattle <= 0) {
      u.cdBattle = this.battleCd(u);
      u.rec.battles++;
      this.tr('k', { s: u.uid });
      this.emit('cast', { src: u, slot: 'battle' });
      k.battle(u, this);
      this.emit('afterCast', { src: u, slot: 'battle' });
      u.castUntil = this.t + R.castBattle;
      return;
    }
    if (u.basicT <= 0) {
      var tgt = this.target(u);
      if (!tgt) return;
      u.basicT = this.basicInterval(u);
      u.rec.basics++;
      if (R.energyPerBasic) this.energy(u, R.energyPerBasic);
      if (k.basic) k.basic(u, this, tgt);
      else this.hit(u, tgt, { atk: R.basicMult }, { el: u.h ? u.h.el : null, tag: 'basic' });
      this.emit('basic', { src: u, tgt: tgt });
    }
  };

  B.sideAlive = function (side) {
    for (var i = 0; i < this.units.length; i++) if (this.units[i].side === side && this.units[i].alive) return true;
    return false;
  };

  B.run = function (maxTime) {
    var R = this.R, self = this;
    this.units.forEach(function (u) { if (u.kit.init) u.kit.init(u, self); });
    this.emit('battleStart', {});
    var nextTl = 0;
    while (this.t < maxTime - 1e-9) {
      this.t = Math.round((this.t + R.dt) * 1e6) / 1e6;
      var due = this.queue.filter(function (q) { return q.at <= self.t + 1e-9; });
      if (due.length) {
        this.queue = this.queue.filter(function (q) { return q.at > self.t + 1e-9; });
        due.sort(function (a, b) { return a.at - b.at; });
        due.forEach(function (q) { if (!q.owner || q.owner.alive) q.fn(); });
      }
      this.tickStatuses();
      for (var i = 0; i < this.units.length; i++) {
        var u = this.units[i];
        if (!u.alive) continue;
        var rate = this.rechargeRate(u);
        // Battle skill recharge does not run during cast animations (reported, Reddit 2024-04-13).
        if (this.t >= u.castUntil) u.cdBattle -= R.dt * rate;
        u.basicT -= R.dt;
        if (!this.noEnergy(u)) u.energy = Math.min(R.ultMax, u.energy + (R.energyRegen != null ? R.energyRegen : R.ultMax / this.ultFull(u)) * rate * R.dt);
        this.act(u);
      }
      if (this.t >= this.curve.length - 1e-9) this.curve.push(this.teamState());
      if (this.trace && this.t >= this.trace.frames.length * this.trace.step - 1e-9) this.trace.frames.push(this.frame());
      if (this.tlStep && this.t >= nextTl) {
        nextTl += this.tlStep;
        this.timeline.push(this.snapshot());
      }
      if (!this.sideAlive('B')) {
        if (this.waves && this.waveIdx < this.waves.length - 1) { this.spawnWave(++this.waveIdx); continue; }
        this.result = 'win'; break;
      }
      if (!this.sideAlive('A')) { this.result = 'loss'; break; }
    }
    if (!this.result) this.result = 'timeout';
    this.curve.push(this.teamState());
    if (this.trace) this.trace.frames.push(this.frame());
    return this;
  };
  B.spawnWave = function (idx) {
    var self = this, w = this.waves[idx];
    w.forEach(function (spec) { var u = self.addUnit('B', spec, spec.extra); if (u.kit.init) u.kit.init(u, self); });
    this.note('wave ' + (idx + 1));
  };
  // [team HP fraction (shields not counted), heroes alive] for side A.
  B.teamState = function () {
    var mh = 0, ch = 0, alive = 0;
    for (var i = 0; i < this.units.length; i++) {
      var u = this.units[i];
      if (u.side !== 'A') continue;
      mh += u.maxHp0; ch += Math.max(0, u.hp);
      if (u.alive) alive++;
    }
    return [mh ? ch / mh : 0, alive];
  };
  // Replay frame: per unit [uid, hp, maxHp, shield, energy 0-1, alive, statuses].
  B.frame = function () {
    var self = this, R = this.R;
    return { t: Math.round(this.t * 100) / 100, u: this.units.map(function (u) {
      var sh = 0; for (var i = 0; i < u.shields.length; i++) sh += u.shields[i].amt;
      var sts = u.alive ? u.sts.map(function (s) { return [s.name || s.base, s.kind === 'buff' ? 0 : s.kind === 'control' ? 2 : 1, s.stacks ? s.stacks.length : 0]; }) : [];
      return [u.uid, Math.round(Math.max(0, u.hp)), Math.round(self.maxHp(u)), Math.round(sh), Math.round(u.energy / R.ultMax * 100) / 100, u.alive ? 1 : 0, sts];
    }) };
  };
  B.snapshot = function () {
    var self = this;
    return { t: this.t, units: this.units.map(function (u) { return { uid: u.uid, hp: Math.round(u.hp), hpPct: u.alive ? u.hp / self.maxHp(u) : 0, dmg: Math.round(u.rec.dmg), energy: Math.round(u.energy) }; }) };
  };

  // ------------------------------------------------------------- auto kit --
  // Fallback for heroes without a hand-written kit: damage parts of each skill
  // read from the official text. Mark results "auto" (low confidence).
  function autoKit(h) {
    if (!h) return { conf: 'auto' };
    function skillFn(sk, tag) {
      if (!sk || !sk.auto) return null;
      var A = sk.auto, dmgParts = A.parts.filter(function (p) { return p.kind === 'dmg' && p.el !== 'Derivative'; });
      var heal = A.parts.filter(function (p) { return p.kind === 'heal'; })[0];
      var shield = A.parts.filter(function (p) { return p.kind === 'shield'; })[0];
      if (!dmgParts.length && !heal && !shield) return null;
      return function (u, b) {
        var reps = A.ticks || 1, hits = A.hits || 1;
        var fire = function () {
          var tgt = b.target(u); if (!tgt) return;
          var list = A.tgt === 'all' ? b.enemies(u) : A.tgt === 'area' ? b.area(u, tgt) : [tgt];
          dmgParts.forEach(function (p) {
            for (var i = 0; i < hits; i++) list.forEach(function (t) { b.hit(u, t, p.coef, { el: p.el, tag: tag }); });
          });
          if (heal) b.heal(u, b.lowestHp(b.allies(u)), heal.coef, { tag: tag });
          if (shield) b.allies(u).forEach(function (a) { b.shield(u, a, shield.coef, 10); });
        };
        if (reps > 1) b.every(1, reps, fire, u, true); else fire();
      };
    }
    return { conf: 'auto', battle: skillFn(h.sk.b, 'battle'), ult: skillFn(h.sk.u, 'ult') };
  }

  // -------------------------------------------------------------- captain --
  function captainFx(h) {
    if (!h || !h.cap || !h.cap.t) return null;
    var t = h.cap.t, m;
    var map = [[/Attack Speed by ([\d.]+)%/, 'atkSpd', 0.01], [/Attack by ([\d.]+)%/, 'atkP', 0.01], [/Defense by ([\d.]+)%/, 'defP', 0.01],
      [/HP by ([\d.]+)%/, 'hpP', 0.01], [/Accuracy by ([\d.]+)/, 'acc', 1], [/Resistance by ([\d.]+)/, 'res', 1],
      [/Enlightenment by ([\d.]+)/, 'ench', 1], [/Crit Rate by ([\d.]+)%/, 'critRate', 0.01], [/Crit Damage by ([\d.]+)%/, 'critDmg', 0.01]];
    for (var i = 0; i < map.length; i++) if ((m = map[i][0].exec(t))) return { stat: map[i][1], value: parseFloat(m[1]) * map[i][2], mode: h.cap.mode, text: t };
    return { stat: null, mode: h.cap.mode, text: t };
  }
  function captainApplies(cap, mode) {
    if (!cap || !cap.stat) return false;
    if (cap.mode === 'all') return true;
    if (cap.mode === 'arena') return mode === 'arena';
    if (cap.mode === 'dungeon') return /grave|goblin|dungeon|ruins|battlefield/.test(mode || '');
    if (cap.mode === 'fey_trial') return /fey|trial/.test(mode || '');
    return false;
  }

  // ---------------------------------------------------------------- bonds --
  // Bonds need 2+ heroes of one school: fx(b, schoolUnits, allUnits, count).
  // Only bonds with published numbers are coded (Steam overhaul preview
  // 2025-05-12 and the CN official post); Frost, Poison, Wild, Rally, Summon and
  // Dauntless bonds also need numbers that are not published.
  var BONDS = {};
  // Support: all allies get a 30 s shield of 10% [2] / 15% [3] of their max HP at battle start.
  // Frost: the 5-stack effects live in B.frostBurst; [3] also puts Cold on 1 enemy at start.
  BONDS.Frost = function (b, mine, all, n) {
    if (!b.R.bonds || n < 3) return;
    b.on(null, 'battleStart', function () {
      var e = b.enemies(mine[0]);
      if (e.length) b.apply(mine[0], e[0], 'Cold', 1, 5);
    });
  };
  BONDS.Support = function (b, mine, all, n) {
    if (!b.R.bonds) return;
    var pct = n >= 3 ? 0.15 : 0.1;
    b.on(null, 'battleStart', function () {
      all.forEach(function (u) { if (u.alive) b.shield(mine[0], u, pct * b.maxHp(u), 30, { tag: 'bond' }); });
    });
  };

  // ----------------------------------------------------------- the runner --
  function prepareSide(b, side, team, opts) {
    var units = team.map(function (spec, i) {
      var u = b.addUnit(side, spec);
      u.slot = i;
      return u;
    });
    // Captain: index opts.captain (default 0) on side A.
    var capIdx = side === 'A' ? (opts.captain == null ? 0 : opts.captain) : (opts.enemyCaptain == null ? 0 : opts.enemyCaptain);
    var capU = units[capIdx];
    if (capU && capU.h) {
      var cap = captainFx(capU.h);
      if (captainApplies(cap, opts.mode)) units.forEach(function (u) { addStat(u.s, cap.stat === 'atkP' ? 'atkPct' : cap.stat === 'defP' ? 'defPct' : cap.stat === 'hpP' ? 'hpPct' : cap.stat, cap.value); });
      b.captain = b.captain || {};
      b.captain[side] = { hero: capU.name, effect: cap ? cap.text : null, active: captainApplies(cap, opts.mode) };
    }
    units.forEach(function (u) { u.maxHp0 = finalStats(u.s).hp; u.hp = u.maxHp0; });
    // Bonds
    var schools = {};
    units.forEach(function (u) { if (u.h && u.h.sc) schools[u.h.sc] = (schools[u.h.sc] || 0) + 1; });
    b.bondCount = b.bondCount || {};
    b.bondCount[side] = schools;
    for (var sc in schools) if (schools[sc] >= 2 && BONDS[sc]) BONDS[sc](b, units.filter(function (u) { return u.h && u.h.sc === sc; }), units, schools[sc]);
    // Artifacts and sets with coded effects.
    units.forEach(function (u) {
      var sp = u.spec;
      if (sp.artifact) {
        var a = artifactByName(sp.artifact.name || sp.artifact);
        var fx = a && ARTIFACT_FX[a.n];
        u.artifact = a ? { name: a.n, coded: !!fx } : null;
        if (fx) fx(u, b, clamp(sp.artifact.tier == null ? 0 : sp.artifact.tier, 0, 5));
      }
      (sp.sets || []).forEach(function (sn) {
        var set = setByName(sn.name || sn);
        var fx = set && SET_FX[set.n];
        if (fx && setPieces(set, sn) >= setNeed(set)) fx(u, b);
      });
    });
    return units;
  }

  function enemySide(b, enemy, opts) {
    if (!enemy) enemy = { preset: 'dummy' };
    if (enemy.team) return prepareSide(b, 'B', enemy.team, { mode: opts.mode, enemyCaptain: enemy.captain });
    var preset = typeof enemy.preset === 'object' ? enemy.preset : BOSSES[enemy.preset || 'dummy'];
    if (!preset) throw new Error('DHSim: unknown enemy preset ' + enemy.preset);
    if (preset.enemyTeam) {
      // Modes that send a team of enemy heroes (Fey Corridor floors).
      b.enemyInfo = { name: preset.name, conf: preset.conf, note: preset.note, skills: null, mechanics: preset.mechanics || null };
      return prepareSide(b, 'B', preset.enemyTeam(enemy, opts), { mode: opts.mode, enemyCaptain: enemy.captain == null ? 0 : enemy.captain });
    }
    var made = preset.make(enemy, opts);
    if (made.waves) {
      b.waves = made.waves;
      b.waves[0].forEach(function (spec) { b.addUnit('B', spec, spec.extra); });
    } else made.units.forEach(function (spec) { b.addUnit('B', spec, spec.extra); });
    b.enemyInfo = { name: preset.name, conf: preset.conf, note: preset.note, skills: preset.skills || null, mechanics: preset.mechanics || null };
    return null;
  }

  function runOnce(opts, seed) {
    var R = defaultRules();
    if (opts.rules) for (var k in opts.rules) R[k] = opts.rules[k];
    var b = new Battle({ rules: R, seed: seed, log: opts.log, mode: opts.mode, timelineStep: opts.timelineStep, trace: opts.trace });
    var team = prepareSide(b, 'A', opts.team, opts);
    enemySide(b, opts.enemy, opts);
    var maxTime = opts.seconds || (opts.enemy && opts.enemy.seconds) || R.maxTime;
    b.maxTime = maxTime;
    b.seed = seed;
    b.run(maxTime);
    return b;
  }

  function summarize(battles, opts) {
    var n = battles.length, first = battles[0];
    var A = first.units.filter(function (u) { return u.side === 'A'; });
    var wins = 0, ttk = [], dps = [], hpLeft = [], deaths = 0, clear = [];
    var per = A.map(function (u) { return { slot: u.slot, heroId: u.heroId, name: u.name, kit: u.kit.conf || 'hand', damage: 0, by: {}, healing: 0, shielding: 0, shieldUsed: 0, taken: 0, takenHp: 0, deaths: 0, ults: 0, battles: 0, basics: 0,
      absorbed: 0, debuffTries: 0, debuffLanded: 0, resisted: 0, minHp: [], deathTimes: [], maxHp: Math.round(u.maxHp0), takenBy: {} }; });
    battles.forEach(function (b) {
      var aUnits = b.units.filter(function (u) { return u.side === 'A'; });
      var total = 0;
      aUnits.forEach(function (u, i) {
        var p = per[i];
        p.damage += u.rec.dmg; p.healing += u.rec.heal; p.shielding += u.rec.shield; p.shieldUsed += u.rec.shieldUsed || 0; p.healRaw = (p.healRaw || 0) + (u.rec.healRaw || 0); p.taken += u.rec.taken; p.takenHp += u.rec.takenHp;
        p.ults += u.rec.ults; p.battles += u.rec.battles; p.basics += u.rec.basics;
        p.absorbed += u.rec.absorbed; p.debuffTries += u.rec.dTry; p.debuffLanded += u.rec.dLand; p.resisted += u.rec.dResisted;
        p.minHp.push(u.alive ? u.rec.minHp : 0);
        for (var k in u.rec.by) p.by[k] = (p.by[k] || 0) + u.rec.by[k];
        for (var k3 in u.rec.takenBy) p.takenBy[k3] = (p.takenBy[k3] || 0) + u.rec.takenBy[k3];
        if (!u.alive) { p.deaths++; deaths++; p.deathTimes.push(u.rec.deathAt); }
        total += u.rec.dmg;
      });
      if (b.result === 'win') { wins++; ttk.push(b.t); }
      var eh = 0, el = 0;
      b.units.forEach(function (u) { if (u.side === 'B' && u.maxHp0 < 1e11) { eh += u.maxHp0; el += u.maxHp0 - Math.max(0, u.hp); } });
      var progress = eh ? el / eh : 0;
      if (b.waves) progress = (b.waveIdx + progress) / b.waves.length;
      clear.push(b.result === 'win' ? 1 + (b.maxTime - b.t) / b.maxTime : progress);
      dps.push(total / Math.max(b.t, 1e-9));
      var mh = 0, ch = 0;
      aUnits.forEach(function (u) { mh += b.maxHp(u); ch += Math.max(0, u.hp); });
      hpLeft.push(ch / mh);
    });
    var totalDmg = per.reduce(function (s, p) { return s + p.damage; }, 0) || 1;
    per.forEach(function (p) {
      p.share = p.damage / totalDmg;
      p.damage /= n; p.healing /= n; p.shielding /= n; p.shieldUsed /= n; p.healRaw = (p.healRaw || 0) / n; p.taken /= n; p.takenHp /= n; p.deathRate = p.deaths / n; delete p.deaths;
      p.ults /= n; p.battles /= n; p.basics /= n; p.absorbed /= n;
      for (var k in p.by) p.by[k] /= n;
      for (var k4 in p.takenBy) p.takenBy[k4] /= n;
      p.landRate = p.debuffTries ? p.debuffLanded / p.debuffTries : null;
      p.debuffTries /= n; p.debuffLanded /= n; p.resisted /= n;
      p.minHp = stats(p.minHp);
      p.deathTime = p.deathTimes.length ? stats(p.deathTimes) : null;
      delete p.deathTimes;
    });
    function stats(arr) {
      if (!arr.length) return null;
      var s = arr.slice().sort(function (a, b) { return a - b; });
      var mean = s.reduce(function (x, y) { return x + y; }, 0) / s.length;
      var sd = Math.sqrt(s.reduce(function (x, y) { return x + (y - mean) * (y - mean); }, 0) / s.length);
      return { mean: mean, sd: sd, p10: s[Math.floor(s.length * 0.1)], p50: s[Math.floor(s.length * 0.5)], p90: s[Math.min(s.length - 1, Math.floor(s.length * 0.9))] };
    }
    var used = {};
    var R = defaultRules();
    if (opts.rules) for (var k in opts.rules) R[k] = opts.rules[k];
    var assumed = [];
    for (var k2 in RULE_INFO) if (RULE_INFO[k2].conf === 'assumed') assumed.push(k2);
    var autoKits = per.filter(function (p) { return p.kit === 'auto'; }).map(function (p) { return p.name; });
    return {
      survival: survival(battles),
      runs: n, winRate: wins / n, ttk: stats(ttk), dps: stats(dps), teamHpLeft: stats(hpLeft), clear: stats(clear),
      perHero: per, captain: first.captain && first.captain.A, enemy: first.enemyInfo || null,
      timeline: opts.timelineStep ? first.timeline : undefined, log: opts.log ? first.log : undefined,
      confidence: {
        level: autoKits.length ? 'low' : 'medium',
        assumedRules: assumed, autoKits: autoKits,
        note: 'Hero stats and skill numbers are official data. Charge times, Skill Haste, Accuracy vs Resistance and status values come from sourced game rules (some from 2023-2024). The DEF curve, gear, cast times and boss stats are assumptions (see RULE_INFO). Use results to compare options, not as exact in-game numbers.'
      },
      notes: [].concat.apply([], first.units.map(function (u) { return u.notes || []; }))
    };
  }

  // Survival view across runs: outcome split, team HP band per second, heroes
  // alive per second, first death, incoming damage vs healing and shields.
  function survival(battles) {
    var n = battles.length, out = { win: 0, loss: 0, timeout: 0 }, len = 0;
    battles.forEach(function (b) { out[b.result]++; len = Math.max(len, b.curve.length); });
    var band = [], alive = [];
    for (var t = 0; t < len; t++) {
      var hp = [], al = 0, cnt = 0;
      battles.forEach(function (b) {
        // After a battle ends its last state carries on (a win keeps its HP, a wipe stays at 0).
        var c = b.curve[Math.min(t, b.curve.length - 1)];
        hp.push(c[0]); al += c[1]; cnt++;
      });
      hp.sort(function (a, b) { return a - b; });
      band.push([hp[Math.floor(cnt * 0.1)], hp[Math.floor(cnt * 0.5)], hp[Math.min(cnt - 1, Math.floor(cnt * 0.9))]]);
      alive.push(al / cnt);
    }
    var first = [], anyDeath = 0, taken = 0, healed = 0, absorbed = 0, secs = 0, wipeAt = [];
    battles.forEach(function (b) {
      var d = null;
      b.units.forEach(function (u) {
        if (u.side !== 'A') return;
        if (u.rec.deathAt != null && (d == null || u.rec.deathAt < d)) d = u.rec.deathAt;
        taken += u.rec.taken; absorbed += u.rec.absorbed;
        healed += u.rec.heal;
      });
      if (d != null) { anyDeath++; first.push(d); }
      if (b.result === 'loss') wipeAt.push(b.t);
      secs += b.t;
    });
    first.sort(function (a, b) { return a - b; });
    wipeAt.sort(function (a, b) { return a - b; });
    var runs = battles.map(function (b) {
      var A = b.units.filter(function (u) { return u.side === 'A'; });
      var hp = b.curve[b.curve.length - 1][0];
      return { seed: b.seed, result: b.result, t: Math.round(b.t * 10) / 10, hpLeft: hp, deaths: A.filter(function (u) { return !u.alive; }).length };
    });
    return {
      win: out.win / n, loss: out.loss / n, timeout: out.timeout / n,
      anyDeath: anyDeath / n, firstDeath: first.length ? first[Math.floor(first.length / 2)] : null,
      wipeAt: wipeAt.length ? wipeAt[Math.floor(wipeAt.length / 2)] : null,
      band: band, alive: alive,
      // Damage the enemy dealt to the team per second (before shields), and how much of it
      // healing plus shields covered.
      incomingDps: taken / Math.max(1e-9, secs), healPs: healed / Math.max(1e-9, secs), absorbPs: absorbed / Math.max(1e-9, secs),
      sustain: taken ? (healed + absorbed) / taken : null,
      runs: runs
    };
  }
  // Pick a representative run for the replay: 'typical' (most common outcome,
  // median time), 'worst' (a loss if any, else the lowest HP left), 'best'.
  function pickRun(res, which) {
    var runs = res.survival.runs.slice();
    if (which === 'worst') {
      runs.sort(function (a, b) { return (a.result === 'loss' ? 0 : 1) - (b.result === 'loss' ? 0 : 1) || a.hpLeft - b.hpLeft; });
      return runs[0];
    }
    if (which === 'best') {
      runs.sort(function (a, b) { return (b.result === 'win' ? 1 : 0) - (a.result === 'win' ? 1 : 0) || b.hpLeft - a.hpLeft || a.t - b.t; });
      return runs[0];
    }
    var cnt = {}; runs.forEach(function (r) { cnt[r.result] = (cnt[r.result] || 0) + 1; });
    var top = Object.keys(cnt).sort(function (a, b) { return cnt[b] - cnt[a]; })[0];
    var same = runs.filter(function (r) { return r.result === top; }).sort(function (a, b) { return a.t - b.t || a.hpLeft - b.hpLeft; });
    return same[Math.floor(same.length / 2)];
  }
  // Re-run one battle by seed with a full trace for the animated replay.
  function replay(opts, seed, step) {
    var b = runOnce(Object.assign({}, opts, { trace: { step: step || 0.2 } }), seed);
    return {
      seed: seed, result: b.result, t: b.t, maxTime: b.maxTime,
      units: b.units.map(function (u) {
        return { uid: u.uid, side: u.side, slot: u.slot, name: u.name, heroId: u.heroId, isBoss: u.isBoss, melee: !!u.melee, school: u.h ? u.h.sc : null, el: u.h ? u.h.el : null, maxHp: Math.round(u.maxHp0) };
      }),
      frames: b.trace.frames, events: b.trace.ev
    };
  }

  // ------------------------------------------------------------ public API --
  // opts: {team: [spec], enemy: {preset, ...} | {team: [spec]}, mode, seconds, runs, seed, rules, captain, timelineStep, log}
  function simulate(opts) {
    var pre = opts.enemy && !opts.enemy.team && (typeof opts.enemy.preset === 'object' ? opts.enemy.preset : BOSSES[opts.enemy.preset]);
    var syncLv = pre && pre.heroLevel ? pre.heroLevel(opts.enemy) : 0;
    if (syncLv) opts = Object.assign({}, opts, { team: opts.team.map(function (sp) { return typeof sp === 'object' ? Object.assign({}, sp, { battleLevel: syncLv }) : { hero: sp, battleLevel: syncLv }; }) });
    var runs = opts.runs || 100, seed = opts.seed || 12345, battles = [];
    for (var i = 0; i < runs; i++) battles.push(runOnce(opts, seed + i * 7919));
    return summarize(battles, opts);
  }
  function metric(res, objective) {
    switch (objective || 'dps') {
      case 'ttk': return res.ttk ? -res.ttk.mean : -1e9;
      case 'win': return res.winRate * 1000 + (res.dps ? res.dps.mean / 1e6 : 0);
      case 'survival': return res.teamHpLeft.mean;
      case 'clear': return res.clear.mean;
      default: return res.dps.mean;
    }
  }
  function compare(a, b, opts) {
    opts = opts || {};
    var base = { runs: opts.runs, seed: opts.seed || 777 };
    var ra = simulate(Object.assign({}, a, base)), rb = simulate(Object.assign({}, b, base));
    var ma = metric(ra, opts.objective), mb = metric(rb, opts.objective);
    return { a: ra, b: rb, objective: opts.objective || 'dps', delta: mb - ma, deltaPct: ma ? (mb - ma) / Math.abs(ma) : 0, better: mb > ma ? 'b' : 'a' };
  }
  // Try each candidate hero in team[slot]; candidate: heroId or full spec.
  function rankCandidates(opts, slot, pool, rk) {
    rk = rk || {};
    var out = pool.map(function (c) {
      var spec = typeof c === 'object' ? c : Object.assign({}, opts.team[slot], { hero: c, kit: undefined, artifact: rk.keepArtifact ? opts.team[slot].artifact : undefined, sets: rk.keepSets ? opts.team[slot].sets : undefined, stats: undefined, gear: undefined });
      var team = opts.team.slice();
      team[slot] = spec;
      var r = simulate(Object.assign({}, opts, { team: team, runs: rk.runs || opts.runs || 60, seed: rk.seed || 4242 }));
      return { hero: spec.hero, name: hero(spec.hero).n, score: metric(r, rk.objective), dps: r.dps.mean, winRate: r.winRate, ttk: r.ttk && r.ttk.mean, teamHpLeft: r.teamHpLeft.mean, kit: KITS[hero(spec.hero).id] ? 'hand' : 'auto', result: r };
    });
    out.sort(function (x, y) { return y.score - x.score; });
    return out;
  }
  // Marginal value of stat points for one hero (damage per unit of stat).
  function statWeights(opts, slot, sw) {
    sw = sw || {};
    var steps = sw.steps || { atkP: 0.1, critRate: 0.1, critDmg: 0.2, ench: 30, haste: 30, atkF: 100, acc: 30 };
    var runs = sw.runs || 120;
    var base = simulate(Object.assign({}, opts, { runs: runs, seed: 99 }));
    var who = base.perHero[slot];
    var res = {};
    Object.keys(steps).forEach(function (k) {
      var team = opts.team.slice();
      var spec = Object.assign({}, team[slot]);
      var built = buildStats(spec);
      var g = Object.assign({}, typeof spec.gear === 'string' ? GEAR_PROFILES[spec.gear] : spec.gear || GEAR_PROFILES[defaultProfile(built.h)]);
      g[k] = (g[k] || 0) + steps[k];
      spec.gear = g;
      team[slot] = spec;
      var r = simulate(Object.assign({}, opts, { team: team, runs: runs, seed: 99 }));
      res[k] = { step: steps[k], heroDmgPct: (r.perHero[slot].damage - who.damage) / Math.max(1, who.damage), teamDpsPct: (r.dps.mean - base.dps.mean) / base.dps.mean };
    });
    return { hero: who.name, base: base, weights: res };
  }
  // Re-run a comparison across the plausible range of every assumed rule and
  // report whether the winner changes.
  function sensitivity(a, b, opts) {
    opts = opts || {};
    var rows = [];
    var keys = opts.keys || Object.keys(RULE_INFO).filter(function (k) { return RULE_INFO[k].range && RULE_INFO[k].conf === 'assumed'; });
    var baseCmp = compare(a, b, opts);
    keys.forEach(function (k) {
      RULE_INFO[k].range.forEach(function (v) {
        var rules = {}; rules[k] = v;
        var c = compare(Object.assign({}, a, { rules: Object.assign({}, a.rules, rules) }), Object.assign({}, b, { rules: Object.assign({}, b.rules, rules) }), opts);
        rows.push({ rule: k, value: v, deltaPct: c.deltaPct, better: c.better });
      });
    });
    var flips = rows.filter(function (r) { return r.better !== baseCmp.better; });
    return { base: { deltaPct: baseCmp.deltaPct, better: baseCmp.better }, rows: rows, robust: flips.length === 0, flips: flips };
  }

  // Score spec variants for one slot, e.g. artifacts or sets:
  // variants = [{label, patch: {artifact: {...}}}]
  function rankVariants(opts, slot, variants, rk) {
    rk = rk || {};
    var out = variants.map(function (v) {
      var team = opts.team.slice();
      team[slot] = Object.assign({}, team[slot], v.patch);
      var r = simulate(Object.assign({}, opts, { team: team, runs: rk.runs || opts.runs || 80, seed: rk.seed || 5150 }));
      return { label: v.label, score: metric(r, rk.objective), heroDamage: r.perHero[slot].damage, dps: r.dps.mean, winRate: r.winRate, result: r };
    });
    out.sort(function (x, y) { return y.score - x.score; });
    return out;
  }
  // Local search over a roster: swap one slot at a time while the objective
  // improves. roster: list of hero specs (or ids). fixed: slots never changed.
  function optimizeTeam(opts, roster, ok) {
    ok = ok || {};
    var specOf = function (c) { return typeof c === 'object' ? c : { hero: c, level: (opts.team[0] && opts.team[0].level) || 60 }; };
    var team = opts.team.slice();
    var run = function (tm) { return simulate(Object.assign({}, opts, { team: tm, runs: ok.runs || 30, seed: ok.seed || 3131 })); };
    var best = run(team), bestScore = metric(best, ok.objective), steps = [];
    for (var round = 0; round < (ok.maxRounds || 4); round++) {
      var improved = false;
      for (var slot = 0; slot < team.length; slot++) {
        if (ok.fixed && ok.fixed.indexOf(slot) >= 0) continue;
        var inTeam = team.map(function (x) { return hero(x.hero).id; });
        roster.forEach(function (c) {
          var sp = specOf(c);
          if (inTeam.indexOf(hero(sp.hero).id) >= 0) return;
          var tm = team.slice(); tm[slot] = sp;
          var r = run(tm), sc = metric(r, ok.objective);
          if (sc > bestScore * (1 + (ok.minGain || 0.01))) {
            steps.push({ slot: slot, out: hero(team[slot].hero).n, in: hero(sp.hero).n, from: bestScore, to: sc });
            team = tm; best = r; bestScore = sc; improved = true;
            inTeam = team.map(function (x) { return hero(x.hero).id; });
          }
        });
      }
      if (!improved) break;
    }
    return { team: team.map(function (x) { return hero(x.hero).n; }), specs: team, score: bestScore, steps: steps, result: best };
  }

  function registerKit(id, kit) { KITS[id] = kit; }
  function registerArtifact(name, fx) { ARTIFACT_FX[name] = fx; }
  function registerSet(name, fx) { SET_FX[name] = fx; }
  function registerBond(school, fx) { BONDS[school] = fx; }
  function registerBoss(id, preset) { BOSSES[id] = preset; }

  return {
    VERSION: VERSION, RULE_INFO: RULE_INFO, defaultRules: defaultRules, GEAR_PROFILES: GEAR_PROFILES, SKILL_LV: SKILL_LV,
    setData: setData, data: function () { return DATA; }, hero: hero, nakedStats: nakedStats, buildStats: buildStats, finalStats: finalStats,
    starsForLevel: starsForLevel, captainFx: captainFx, artifactByName: artifactByName, setByName: setByName,
    registerKit: registerKit, registerArtifact: registerArtifact, registerSet: registerSet, registerBond: registerBond, registerBoss: registerBoss,
    kits: function () { return KITS; }, bosses: function () { return BOSSES; }, artifactsCoded: function () { return Object.keys(ARTIFACT_FX); }, setsCoded: function () { return Object.keys(SET_FX); },
    simulate: simulate, replay: replay, pickRun: pickRun, runBatch: function (opts, from, count) {
      var seed = opts.seed || 12345, out = [];
      for (var i = from; i < from + count; i++) out.push(runOnce(opts, seed + i * 7919));
      return out;
    }, summarize: summarize, compare: compare, rankCandidates: rankCandidates, rankVariants: rankVariants, optimizeTeam: optimizeTeam, statWeights: statWeights, sensitivity: sensitivity, metric: metric,
    runOnce: runOnce, Battle: Battle, parseStatus: parseStatus, autoKit: autoKit
  };
});
