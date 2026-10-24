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

  var VERSION = '0.1.0';

  // ---------------------------------------------------------------- rules --
  // conf: verified = official text or table; estimated = derived from data;
  // assumed = placeholder until a source or an in-game test pins it down.
  var RULE_INFO = {
    dt: { v: 0.05, conf: 'model', note: 'Simulation time step in seconds.' },
    maxTime: { v: 90, conf: 'assumed', note: 'Fight length cap (s) when the mode sets none.' },
    ultMax: { v: 100, conf: 'estimated', note: 'Ultimate energy bar. Vinyara and Gardrus texts move energy in steps of 25/100.', range: [100, 100] },
    energyRegen: { v: 4, conf: 'assumed', note: 'Ultimate energy gained per second.', range: [2, 6] },
    energyPerBasic: { v: 8, conf: 'assumed', note: 'Ultimate energy per basic attack.', range: [4, 12] },
    energyPerHitTaken: { v: 1, conf: 'assumed', note: 'Ultimate energy per hit taken.', range: [0, 3] },
    battleCd: { v: 10, conf: 'assumed', note: 'Battle skill cooldown (s) when the kit gives none.', range: [8, 14] },
    battleFirst: { v: 2, conf: 'assumed', note: 'Time (s) after battle start when the battle skill is first ready.', range: [0, 4] },
    castBattle: { v: 0.8, conf: 'assumed', note: 'Animation lock after a battle skill (s).', range: [0.5, 1.2] },
    castUlt: { v: 1.5, conf: 'assumed', note: 'Animation lock after an ultimate (s).', range: [1, 2.5] },
    basicMult: { v: 1.0, conf: 'assumed', note: 'Basic attack = this x ATK.', range: [0.8, 1.2] },
    attackFreqMeaning: { v: 'perSecond', conf: 'assumed', note: 'attack_frequency from the official table read as basic attacks per second.' },
    hasteMode: { v: 'div', conf: 'assumed', note: 'Skill Haste: cooldown / (1 + haste/100).' },
    defK: { v: 1200, conf: 'assumed', note: 'DEF mitigation = DEF / (DEF + defK).', range: [600, 2400] },
    dmgRedCap: { v: 0.8, conf: 'assumed', note: 'Cap on summed Damage Reduction.' },
    resScale: { v: 100, conf: 'assumed', note: 'Debuff land chance = base x resScale / (resScale + max(0, RES - ACC)).', range: [50, 200] },
    tier1: { v: 0.15, conf: 'assumed', note: 'Value of a tier I stat buff/debuff (ATK Up I, DEF Penalty I...).', range: [0.1, 0.2] },
    tier2: { v: 0.30, conf: 'assumed', note: 'Tier II value.', range: [0.2, 0.4] },
    tier3: { v: 0.45, conf: 'assumed', note: 'Tier III value.', range: [0.3, 0.6] },
    flatTier: { v: 40, conf: 'assumed', note: 'Accuracy/Resistance Up or Penalty per tier (flat points).' },
    frostAtkSpd: { v: 0.2, conf: 'assumed', note: 'Frost slows the target attack speed by this fraction.', range: [0, 0.3] },
    poisonPerStack: { v: 0.08, conf: 'assumed', note: 'Poison: each stack deals this x caster ATK per second (Poison damage, no crit).', range: [0.04, 0.15] },
    poisonMaxStacks: { v: 20, conf: 'assumed', note: 'Max Poison stacks per target.' },
    burnPerStack: { v: 0.1, conf: 'assumed', note: 'Burn per stack per second x caster ATK.' },
    dotCanCrit: { v: false, conf: 'assumed', note: 'DoT and Derivative damage cannot crit.' },
    derivativeIgnoresDef: { v: false, conf: 'assumed', note: 'Derivative damage still reduced by DEF.' },
    areaSize: { v: 3, conf: 'assumed', note: 'Enemies hit by an "enemies within range" skill when more are alive.', range: [2, 5] },
    bossControlMult: { v: 0.5, conf: 'assumed', note: 'Control duration on bosses is multiplied by this.', range: [0, 1] },
    rechargePenalty: { v: 0.5, conf: 'assumed', note: 'Recharging Speed Penalty multiplies energy gain.' },
    bondFrost: { v: 0, conf: 'assumed', note: 'Frost bond bonus: not modelled until its numbers are found.' }
  };
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
    var lvl = spec.level || 60;
    var n = nakedStats(h, lvl, spec.stars);
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
      for (var k in set.bonus2) addStat(s, k, set.bonus2[k]);
    });
    if (spec.stats) {
      // Measured in-game totals override the model (best accuracy).
      var o = spec.stats;
      if (o.atk != null) { s.atkB = o.atk; s.atkF = 0; s.atkP = 0; }
      if (o.hp != null) { s.hpB = o.hp; s.hpF = 0; s.hpP = 0; }
      if (o.def != null) { s.defB = o.def; s.defF = 0; s.defP = 0; }
      ['critRate', 'critDmg', 'acc', 'res', 'ench', 'haste', 'atkSpd'].forEach(function (k) { if (o[k] != null) s[k] = o[k]; });
    }
    return { s: s, h: h, notes: notes };
  }
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
  // Names follow the game ("Defense Up II", "Attack Penalty II"). Tier values
  // come from RULES.tier1..3 until the real numbers are known.
  // [stat, sign, 'pct' | 'flat']; pct uses RULES.tierN, flat uses RULES.flatTier x tier.
  var STAT_STATUS = {
    'Attack Up': ['atkP', 1, 'pct'], 'Attack Penalty': ['atkP', -1, 'pct'],
    'Defense Up': ['defP', 1, 'pct'], 'Defense Penalty': ['defP', -1, 'pct'],
    'Accuracy Up': ['acc', 1, 'flat'], 'Accuracy Penalty': ['acc', -1, 'flat'],
    'Resistance Up': ['res', 1, 'flat'], 'Resistance Penalty': ['res', -1, 'flat'],
    'Attack Speed Up': ['atkSpd', 1, 'pct'], 'Attack Speed Penalty': ['atkSpd', -1, 'pct'],
    'Crit Rate Up': ['critRate', 1, 'pct'], 'Crit Damage Up': ['critDmg', 1, 'pct'],
    'Received Healing Up': ['healRecv', 1, 'pct'], 'Healing Penalty': ['healRecv', -1, 'pct'],
    'Damage Reduction': ['dmgRed', 1, 'pct']
  };
  var CONTROL = { 'Frozen': 1, 'Stunned': 1, 'Knocked Up': 1, 'Silenced': 0, 'Taunt': 0, 'Sleep': 1, 'Petrified': 1, 'Fear': 1 };
  var DEBUFF_OTHER = { 'Frost': 1, 'Poison': 1, 'Burn': 1, 'Bleeding': 1, 'Buff Prohibition': 1, 'Recharging Speed Penalty': 1, 'Healing Prohibition': 1, 'Vulnerable': 1, 'Static': 1 };
  var STACKING = { 'Poison': 'poisonMaxStacks', 'Burn': 20, 'Bleeding': 10, 'Static': 10 };
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
  }
  var B = Battle.prototype;

  B.chance = function (p) { return p >= 1 || this.rand() < p; };
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
    var u = {
      uid: ++this.uidSeq, side: side, spec: spec, h: built.h, name: (built.h && built.h.n) || spec.name,
      heroId: built.h ? built.h.id : null, s: built.s, alive: true, isBoss: !!spec.isBoss,
      melee: built.h ? built.h.melee : !!spec.melee, sts: [], shields: [], flags: {}, energy: 0,
      cdBattle: this.R.battleFirst, basicT: 0.2 + 0.3 * this.rand(), castUntil: 0, insp: spec.insp || 0,
      rec: { dmg: 0, by: {}, heal: 0, shield: 0, taken: 0, absorbed: 0, deathAt: null, ults: 0, battles: 0, basics: 0 }
    };
    if (extra) for (var k in extra) u[k] = extra[k];
    var fs = finalStats(u.s);
    u.maxHp0 = fs.hp;
    u.hp = fs.hp;
    u.kit = spec.kit || KITS[u.heroId] || autoKit(u.h);
    u.notes = built.notes;
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
        var val = st.value != null ? st.value : ss[2] === 'flat' ? R.flatTier * (st.tier || 1) : R['tier' + (st.tier || 1)];
        v += ss[1] * val;
      }
    }
    return v;
  };
  B.atk = function (u) { return Math.max(0, u.s.atkB * (1 + u.s.atkP + this.mod(u, 'atkP')) + u.s.atkF + this.mod(u, 'atkF')); };
  B.def = function (u) { return Math.max(0, u.s.defB * (1 + u.s.defP + this.mod(u, 'defP')) + u.s.defF + this.mod(u, 'defF')); };
  B.maxHp = function (u) { return u.maxHp0 + this.mod(u, 'hpF'); };
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
    var ctx = { src: src, tgt: tgt, o: o, bonus: (o.bonus || 0) + this.stat(src, 'dmgBonus'), defIgnore: (o.defIgnore || 0) + this.stat(src, 'defIgnore'),
      critRate: this.stat(src, 'critRate') + (o.critRate || 0), critDmg: this.stat(src, 'critDmg'), vuln: this.stat(tgt, 'vuln'), raw: raw };
    this.emit('modifyDamage', ctx);
    if (this.has(tgt, 'Invincibility')) { this.emit('hit', { src: src, tgt: tgt, o: o, amount: 0, crit: false }); return { amount: 0 }; }
    var isDot = o.tag === 'dot' || o.el === 'Derivative';
    var crit = !o.noCrit && (!isDot || R.dotCanCrit) && this.rand() < ctx.critRate;
    var m = (1 + ctx.bonus) * (1 + ctx.vuln) * (1 - clamp(this.stat(tgt, 'dmgRed'), 0, R.dmgRedCap));
    if (crit) m *= 1 + ctx.critDmg * (1 - this.stat(tgt, 'critDmgTakenRed'));
    if (!o.trueDmg && !(o.el === 'Derivative' && R.derivativeIgnoresDef)) {
      var d = this.def(tgt) * (1 - clamp(ctx.defIgnore, 0, 1));
      m *= R.defK / (d + R.defK);
    }
    var amount = ctx.raw * m;
    var dealt = this.damage(tgt, amount, src, o);
    var tag = o.tag || 'skill';
    src.rec.dmg += dealt;
    src.rec.by[tag] = (src.rec.by[tag] || 0) + dealt;
    tgt.energy = Math.min(R.ultMax, tgt.energy + R.energyPerHitTaken * this.energyMult(tgt));
    var ev = { src: src, tgt: tgt, o: o, amount: dealt, crit: crit };
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
    if (tgt.hp <= 0) this.kill(tgt, src);
    else this.emit('damaged', { tgt: tgt, src: src, amount: lost, o: ctx.o });
    return lost + (ctx.amount - amount);
  };
  B.kill = function (u, src) {
    if (!u.alive) return;
    u.alive = false; u.hp = 0; u.rec.deathAt = this.t;
    u.sts = []; u.shields = [];
    this.note(u.name + ' dies');
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
    tgt.hp += eff;
    src.rec.heal += eff;
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
    this.emit('shielded', { src: src, tgt: tgt, amount: amt, o: o });
    return amt;
  };
  B.energyMult = function (u) { return this.has(u, 'Recharging Speed Penalty') ? this.R.rechargePenalty : 1; };
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
      var c = (chance == null ? 1 : chance) * (1 + this.stat(src, 'statusChance') + (extra.skill ? this.stat(src, 'statusChance_' + extra.skill) : 0));
      if (!extra.ignoreRes) {
        var gap = this.stat(tgt, 'res') * (1 - this.stat(src, 'resIgnore')) - this.stat(src, 'acc');
        c *= R.resScale / (R.resScale + Math.max(0, gap));
      }
      if (!this.chance(Math.min(1, c))) return false;
      var dctx = { src: src, tgt: tgt, name: name, base: p.base, dur: dur };
      this.emit('debuffDuration', dctx);
      dur = dctx.dur;
      if (p.kind === 'control' && tgt.isBoss) dur *= R.bossControlMult;
    } else {
      if (this.has(tgt, 'Buff Prohibition')) return false;
      if (chance != null && chance < 1 && !this.chance(chance * (1 + this.stat(src, 'statusChance')))) return false;
    }
    if (dur <= 0) return false;
    var until = this.t + dur, ex = this.has(tgt, p.base);
    var maxStacks = STACKING[p.base];
    if (typeof maxStacks === 'string') maxStacks = R[maxStacks];
    var already = !!ex;
    if (maxStacks) {
      if (!ex) { ex = { base: p.base, name: p.base, kind: p.kind, tier: 0, stacks: [], src: src }; tgt.sts.push(ex); }
      var n = extra.stacks || 1;
      for (var i = 0; i < n; i++) {
        if (ex.stacks.length >= maxStacks) ex.stacks.shift();
        ex.stacks.push({ until: until, src: src, pow: extra.value != null ? extra.value : this.atk(src) });
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
    this.emit('statusApplied', ev);
    if (hostile) this.emit('debuffApplied', ev);
    if (p.base === 'Taunt') tgt.tgt = src;
    return true;
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
  B.battleCd = function (u) {
    var base = (u.kit && u.kit.battleCd) || this.R.battleCd;
    var h = Math.max(0, this.stat(u, 'haste'));
    return this.R.hasteMode === 'div' ? base / (1 + h / 100) : base * Math.max(0.2, 1 - h / 100);
  };

  B.act = function (u) {
    var R = this.R, k = u.kit;
    if (this.controlled(u) || this.t < u.castUntil) return;
    var silenced = this.has(u, 'Silenced');
    if (k.ult && !silenced && u.energy >= R.ultMax && (!k.ultReady || k.ultReady(u, this))) {
      u.energy = 0;
      u.rec.ults++;
      this.note(u.name + ' ult');
      this.emit('cast', { src: u, slot: 'ult' });
      k.ult(u, this);
      this.emit('afterCast', { src: u, slot: 'ult' });
      u.castUntil = this.t + R.castUlt;
      return;
    }
    if (k.battle && !silenced && u.cdBattle <= 0) {
      u.cdBattle = this.battleCd(u);
      u.rec.battles++;
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
      this.energy(u, R.energyPerBasic);
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
        u.cdBattle -= R.dt;
        u.basicT -= R.dt;
        this.energy(u, R.energyRegen * R.dt);
        this.act(u);
      }
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
    return this;
  };
  B.spawnWave = function (idx) {
    var self = this, w = this.waves[idx];
    w.forEach(function (spec) { var u = self.addUnit('B', spec, spec.extra); if (u.kit.init) u.kit.init(u, self); });
    this.note('wave ' + (idx + 1));
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
  // Bonds need 2+ heroes of one school. Effects are hooks; numbers unknown.
  var BONDS = {};

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
        var set = setByName(sn.name || sn), pieces = sn.pieces || (set && set.r === 'Mythic' ? 2 : 4);
        var fx = set && SET_FX[set.n];
        var need = set && set.r === 'Mythic' ? 2 : 4;
        if (fx && pieces >= need) fx(u, b);
      });
    });
    return units;
  }

  function enemySide(b, enemy, opts) {
    if (!enemy) enemy = { preset: 'dummy' };
    if (enemy.team) return prepareSide(b, 'B', enemy.team, { mode: opts.mode, enemyCaptain: enemy.captain });
    var preset = typeof enemy.preset === 'object' ? enemy.preset : BOSSES[enemy.preset || 'dummy'];
    if (!preset) throw new Error('DHSim: unknown enemy preset ' + enemy.preset);
    var made = preset.make(enemy, opts);
    if (made.waves) {
      b.waves = made.waves;
      b.waves[0].forEach(function (spec) { b.addUnit('B', spec, spec.extra); });
    } else made.units.forEach(function (spec) { b.addUnit('B', spec, spec.extra); });
    b.enemyInfo = { name: preset.name, conf: preset.conf, note: preset.note };
    return null;
  }

  function runOnce(opts, seed) {
    var R = defaultRules();
    if (opts.rules) for (var k in opts.rules) R[k] = opts.rules[k];
    var b = new Battle({ rules: R, seed: seed, log: opts.log, mode: opts.mode, timelineStep: opts.timelineStep });
    var team = prepareSide(b, 'A', opts.team, opts);
    enemySide(b, opts.enemy, opts);
    var maxTime = opts.seconds || (opts.enemy && opts.enemy.seconds) || R.maxTime;
    b.maxTime = maxTime;
    b.run(maxTime);
    return b;
  }

  function summarize(battles, opts) {
    var n = battles.length, first = battles[0];
    var A = first.units.filter(function (u) { return u.side === 'A'; });
    var wins = 0, ttk = [], dps = [], hpLeft = [], deaths = 0, clear = [];
    var per = A.map(function (u) { return { slot: u.slot, heroId: u.heroId, name: u.name, kit: u.kit.conf || 'hand', damage: 0, by: {}, healing: 0, shielding: 0, taken: 0, deaths: 0, ults: 0, battles: 0, basics: 0 }; });
    battles.forEach(function (b) {
      var aUnits = b.units.filter(function (u) { return u.side === 'A'; });
      var total = 0;
      aUnits.forEach(function (u, i) {
        var p = per[i];
        p.damage += u.rec.dmg; p.healing += u.rec.heal; p.shielding += u.rec.shield; p.taken += u.rec.taken;
        p.ults += u.rec.ults; p.battles += u.rec.battles; p.basics += u.rec.basics;
        for (var k in u.rec.by) p.by[k] = (p.by[k] || 0) + u.rec.by[k];
        if (!u.alive) { p.deaths++; deaths++; }
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
      p.damage /= n; p.healing /= n; p.shielding /= n; p.taken /= n; p.deathRate = p.deaths / n; delete p.deaths;
      p.ults /= n; p.battles /= n; p.basics /= n;
      for (var k in p.by) p.by[k] /= n;
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
      runs: n, winRate: wins / n, ttk: stats(ttk), dps: stats(dps), teamHpLeft: stats(hpLeft), clear: stats(clear),
      perHero: per, captain: first.captain && first.captain.A, enemy: first.enemyInfo || null,
      timeline: opts.timelineStep ? first.timeline : undefined, log: opts.log ? first.log : undefined,
      confidence: {
        level: autoKits.length ? 'low' : 'medium',
        assumedRules: assumed, autoKits: autoKits,
        note: 'Hero stats and skill multipliers are official data; timing (cooldowns, energy), DEF curve, buff tiers and statuses are assumptions (see RULE_INFO). Compare results, do not read them as exact in-game numbers.'
      },
      notes: [].concat.apply([], first.units.map(function (u) { return u.notes || []; }))
    };
  }

  // ------------------------------------------------------------ public API --
  // opts: {team: [spec], enemy: {preset, ...} | {team: [spec]}, mode, seconds, runs, seed, rules, captain, timelineStep, log}
  function simulate(opts) {
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
    VERSION: VERSION, RULE_INFO: RULE_INFO, defaultRules: defaultRules, GEAR_PROFILES: GEAR_PROFILES,
    setData: setData, data: function () { return DATA; }, hero: hero, nakedStats: nakedStats, buildStats: buildStats, finalStats: finalStats,
    starsForLevel: starsForLevel, captainFx: captainFx, artifactByName: artifactByName, setByName: setByName,
    registerKit: registerKit, registerArtifact: registerArtifact, registerSet: registerSet, registerBond: registerBond, registerBoss: registerBoss,
    kits: function () { return KITS; }, bosses: function () { return BOSSES; }, artifactsCoded: function () { return Object.keys(ARTIFACT_FX); }, setsCoded: function () { return Object.keys(SET_FX); },
    simulate: simulate, compare: compare, rankCandidates: rankCandidates, rankVariants: rankVariants, optimizeTeam: optimizeTeam, statWeights: statWeights, sensitivity: sensitivity, metric: metric,
    runOnce: runOnce, Battle: Battle, parseStatus: parseStatus, autoKit: autoKit
  };
});
