/*
 * Extra hand-written kits for DHSim: the Poison school, Poison supports, and
 * the top S1 Legendaries of other schools a new player may pull.
 * Translated from the official skill texts (data/sim-data.json, same texts as
 * raw-official/heroes-2025.json). Anything the text leaves open is marked
 * ASSUMED in a comment. Multipliers are the printed values (read as the
 * hero's current max skill level, as in kits.js).
 *
 * Where heroes-2025.json also has an upgraded skill version (change_slot),
 * the base text is coded and the upgrade is noted in a comment.
 *
 * Kit shape: {battleCd, init(u,b), basic(u,b,tgt), battle(u,b), ult(u,b)}.
 */
(function (root) {
  var S = root.DHSim || (typeof require !== 'undefined' ? require('../sim.js') : null);
  var POI = 'Poison', DER = 'Derivative';
  // Use the engine's own statuses when it knows them; older engines get stand-ins.
  // ASSUMED (older engine only): "Healing Reduction" = Healing Penalty II.
  var HEAL_RED = S.parseStatus('Healing Reduction').kind !== 'buff' ? 'Healing Reduction' : 'Healing Penalty II';
  // ASSUMED: "Charmed" (target attacks its own side) only stops the target acting, as the engine has no attack-own-allies behaviour (Fear on older engines).
  var CHARM = S.parseStatus('Charmed').kind === 'control' ? 'Charmed' : 'Fear';

  // ASSUMED: in-game Poison ticks every 3s (the engine ticks every 1s at the same damage rate). Used by Vicana's -2s and by Poison Explosion.
  if (!S.RULE_INFO.poisonInterval) {
    S.RULE_INFO.poisonInterval = { v: 3, conf: 'assumed', note: 'In-game seconds between Poison ticks. The engine ticks every 1s at the same damage rate; this sets Vicana\'s interval cut (x interval/(interval-2)) and the size of a Poison Explosion (one tick of every stack).', range: [3, 5] };
  }

  // ---- helpers copied from kits.js
  function K(id, kit) { kit.conf = kit.conf || 'hand'; S.registerKit(id, kit); }
  function frac(b, u) { return u.hp / b.maxHp(u); }
  function bonusIf(b, u, test, v) {
    b.on(u, 'modifyDamage', function (c) { if (c.src === u && test(c)) c.bonus += v; });
  }
  // "When inflicting a debuff, there is a 70% chance of extending its duration by 30%."
  function debuffExtender(b, u) {
    b.on(u, 'debuffDuration', function (d) { if (d.src === u && b.chance(0.7)) d.dur *= 1.3; });
  }
  function takesLessCrit(b, u, v) { u.s.critDmgTakenRed = (u.s.critDmgTakenRed || 0) + v; }
  function insp1Common(b, u, h) {
    var t = (h.insp[0] && h.insp[0].t) || '';
    if (/takes 20% less crit damage/.test(t)) takesLessCrit(b, u, 0.2);
    if (/damage taken by 20% when under Control/.test(t)) {
      b.on(u, 'beforeDamaged', function (c) { if (c.tgt === u && b.controlled(u)) c.amount *= 0.8; });
    }
  }
  function ignoreDef(u, v) { u.s.defIgnore = (u.s.defIgnore || 0) + v; }
  function ignoreRes(u, v) { u.s.resIgnore = (u.s.resIgnore || 0) + v; }
  function std(u, b) {
    if (u.insp >= 1) insp1Common(b, u, u.h);
    var t5 = (u.h.insp[4] && u.h.insp[4].t) || '';
    if (u.insp >= 5) {
      var m = /Ignores (\d+)% of the target's Defense/.exec(t5); if (m) ignoreDef(u, m[1] / 100);
      m = /Ignores (\d+)% of the target's Resistance/.exec(t5); if (m) ignoreRes(u, m[1] / 100);
    }
  }

  // ---- helpers for this file
  // A listener that keeps running after its owner dies (debuffs outlive their caster).
  function onAlways(b, u, ev, fn) { (b.listeners[ev] = b.listeners[ev] || []).push({ owner: u, fn: fn, always: true }); }
  function pick(b, list) { return list.length ? list[Math.floor(b.rand() * list.length)] : null; }
  function shuffled(b, list) {
    var a = list.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(b.rand() * (i + 1)); var x = a[i]; a[i] = a[j]; a[j] = x; }
    return a;
  }
  // Same land roll as Battle.apply for a hostile status (for statuses the
  // engine does not know, which are added by hand below).
  function lands(b, src, tgt, chance, skill, noRes) {
    if (!tgt || !tgt.alive || tgt.side === src.side || b.has(tgt, 'Debuff Immunity')) return false;
    if (b.landChance) return b.chance(b.landChance(src, tgt, chance, skill, noRes));
    var c = (chance == null ? 1 : chance) * (1 + b.stat(src, 'statusChance') + (skill ? b.stat(src, 'statusChance_' + skill) : 0));
    if (!noRes) {
      var gap = b.stat(tgt, 'res') * (1 - b.stat(src, 'resIgnore')) - b.stat(src, 'acc');
      c *= b.R.resScale / (b.R.resScale + Math.max(0, gap));
    }
    return b.chance(Math.min(1, c));
  }
  // Stacking debuff the engine does not know (Thorny Poison, Potent Medicine).
  // It sits in tgt.sts like Poison, so it counts as a debuff and can be dispelled.
  function addStacks(b, src, tgt, base, n, dur, cap, skill) {
    var dctx = { src: src, tgt: tgt, name: base, base: base, dur: dur };
    b.emit('debuffDuration', dctx);
    var st = b.has(tgt, base), already = !!st;
    if (!st) { st = { base: base, name: base, kind: 'debuff', tier: 0, stacks: [], src: src }; tgt.sts.push(st); }
    var added = [];
    for (var i = 0; i < n; i++) {
      if (cap && st.stacks.length >= cap) break;
      var s = { until: b.t + dctx.dur, src: src };
      st.stacks.push(s);
      added.push(s);
    }
    if (!st.stacks.length) tgt.sts.splice(tgt.sts.indexOf(st), 1);
    var ev = { src: src, tgt: tgt, name: base, base: base, kind: 'debuff', already: already, skill: skill };
    b.emit('statusApplied', ev);
    b.emit('debuffApplied', ev);
    return { st: st, added: added };
  }
  // Watches stacks once per second; calls end(entry, 'expired' | 'removed').
  // 'removed' = gone early while the holder lives (dispelled).
  function watchStacks(b, u, end) {
    u.flags.watch = [];
    onAlways(b, u, 'second', function (e) {
      var keep = [];
      u.flags.watch.forEach(function (w) {
        if (w.t !== e.u) { keep.push(w); return; }
        if (!w.t.alive) return;
        if (w.s.until <= b.t) end(w, 'expired');
        else if (w.t.sts.indexOf(w.st) < 0 || w.st.stacks.indexOf(w.s) < 0) end(w, 'removed');
        else keep.push(w);
      });
      u.flags.watch = keep;
    });
  }
  // ASSUMED: Poison Explosion = the target takes one in-game Poison tick of every Poison stack on it at once (poisonPerStack x poisonInterval x the stack's ATK), stacks are kept, credited to the hero who triggers it.
  // Tagged 'dot' (no crit, same engine bonuses as a Poison tick) but without dotOf, so Vicana's tick-rate factor does not apply to it.
  function poisonExplosion(b, u, t) {
    var p = b.has(t, 'Poison');
    if (!p || !p.stacks.length || !t.alive) return 0;
    var sum = 0, I = b.R.poisonInterval || 3;
    p.stacks.forEach(function (s) { sum += s.pow * b.R.poisonPerStack * I; });
    u.rec.explosions = (u.rec.explosions || 0) + 1;
    return b.hit(u, t, sum, { el: POI, tag: 'dot', noCrit: true, explosion: true }).amount;
  }
  // ASSUMED: spreading Poison copies every stack (same owner, same power) onto the new target as fresh 15s stacks, with a normal resistance roll.
  function spreadPoison(b, stacks, tgt) {
    var bySrc = new Map();
    stacks.forEach(function (s) { var g = bySrc.get(s.src) || { n: 0, pow: 0 }; g.n++; g.pow += s.pow; bySrc.set(s.src, g); });
    bySrc.forEach(function (g, src) { b.apply(src, tgt, 'Poison', 1, 15, { stacks: g.n, value: g.pow / g.n, skill: 'spread' }); });
  }
  // Snapshot debuffs and Poison when a unit takes a fatal hit (kill() clears
  // statuses before the 'death' event fires).
  function snapOnFatal(b, u) {
    b.on(u, 'fatal', function (f) {
      var t = f.tgt, p = b.has(t, 'Poison');
      t.flags.fatalT = b.t;
      t.flags.fatalDebuffs = b.countDebuffs(t);
      t.flags.fatalPoison = p ? p.stacks.slice() : [];
    });
  }
  function snap(b, t) { return t.flags.fatalT === b.t ? t : null; }
  // "Upon being hit by an enemy, reduces the hero's damage taken from that enemy by 1%, up to 15 stacks."
  function hitStackDR(b, u) {
    u.flags.hsdr = {};
    b.on(u, 'beforeDamaged', function (c) {
      if (c.tgt !== u || !c.src || c.src.side === u.side) return;
      var n = u.flags.hsdr[c.src.uid] || 0;
      c.amount *= 1 - 0.01 * n;
      u.flags.hsdr[c.src.uid] = Math.min(15, n + 1);
    });
  }
  function healOnKill(b, u, coef) {
    b.on(u, 'kill', function (e) { if (e.src === u) b.heal(u, u, coef, { tag: 'passive' }); });
  }
  // "Damage dealt to enemies with a shield is increased by 20%."
  function shieldBonus(b, u) { bonusIf(b, u, function (c) { return c.tgt.shields.length > 0; }, 0.2); }

  // =========================================================== POISON SCHOOL ==

  // Horace (Epic): each Poison stack on the target adds 1% Crit Rate to his hit.
  K(20130, {
    init: function (u, b) {
      std(u, b);
      b.on(u, 'modifyDamage', function (c) { if (c.src === u) c.critRate += 0.01 * b.stacks(c.tgt, 'Poison'); });
    },
    battle: function (u, b) {
      b.area(u, b.target(u)).forEach(function (t) {
        b.hit(u, t, { atk: 3.4 }, { el: POI, tag: 'battle', apply: [['Poison', 0.5, 15, { stacks: 3, skill: 'battle' }]] });
      });
    },
    ult: function (u, b) {
      b.area(u, b.target(u)).forEach(function (t) {
        var poisoned = b.stacks(t, 'Poison') > 0;
        b.hit(u, t, { atk: 6.0 }, { el: POI, tag: 'ult' });
        if (poisoned) poisonExplosion(b, u, t);
      });
    }
  });

  // Eli (Epic): extra 40% ATK Derivative on every hit against a Poisoned enemy.
  K(20280, {
    init: function (u, b) {
      std(u, b);
      u.flags.eliUntil = -1;
      // ASSUMED: the passive triggers on basic, battle and ultimate hits, not on Poison ticks or on its own Derivative hit.
      b.on(u, 'hit', function (e) {
        if (e.src !== u || ['basic', 'battle', 'ult'].indexOf(e.o.tag) < 0 || e.o.el === DER || !b.has(e.tgt, 'Poison')) return;
        b.hit(u, e.tgt, { atk: 0.4 }, { el: DER, tag: 'passive' });
      });
    },
    basic: function (u, b, t) {
      b.hit(u, t, { atk: b.R.basicMult }, { el: POI, tag: 'basic' });
      // ASSUMED: "each subsequent basic attack" = every basic attack during the 6s of Attack Speed Up I.
      if (b.t < u.flags.eliUntil) {
        var r = pick(b, b.enemies(u));
        if (r) {
          u.rec.eliBolts = (u.rec.eliBolts || 0) + 1;
          b.hit(u, r, { atk: 1.2 }, { el: POI, tag: 'battle', apply: [['Poison', 1, 15, { stacks: 1, skill: 'battle' }]] });
        }
      }
    },
    battle: function (u, b) {
      b.apply(u, u, 'Attack Speed Up I', 1, 6);
      u.flags.eliUntil = b.t + 6;
    },
    ult: function (u, b) {
      // "Shoots 3 waves of bolts in a designated direction" = 3 area hits.
      for (var i = 0; i < 3; i++) b.area(u, b.target(u)).forEach(function (t) { b.hit(u, t, { atk: 2.65 }, { el: POI, tag: 'ult' }); });
    }
  });

  // Corrin (Epic): when a Poisoned enemy dies its Poison spreads to nearby
  // enemies with an 80% ATK + 480% Enlightenment hit.
  K(21300, {
    init: function (u, b) {
      std(u, b);
      snapOnFatal(b, u);
      b.on(u, 'death', function (e) {
        var d = e.tgt;
        if (d.side === u.side || !snap(b, d) || !d.flags.fatalPoison.length) return;
        // ASSUMED: "nearby enemies" = up to areaSize - 1 other alive enemies.
        b.area(u, d).filter(function (x) { return x !== d; }).forEach(function (t) {
          spreadPoison(b, d.flags.fatalPoison, t);
          b.hit(u, t, { atk: 0.8, ench: 4.8 }, { el: POI, tag: 'passive' });
        });
      });
    },
    battle: function (u, b) {
      // "the nearest enemy" = the main target.
      for (var i = 0; i < 3; i++) {
        var t = b.target(u);
        if (t) b.hit(u, t, { atk: 1.0 }, { el: POI, tag: 'battle', apply: [['Poison', 0.75, 15, { stacks: 1, skill: 'battle' }]] });
      }
    },
    ult: function (u, b) {
      var t = b.target(u);
      if (!t) return;
      var p = b.has(t, 'Poison');
      // ASSUMED: "up to 30 stacks" caps how many stacks are refreshed (the engine cap is poisonMaxStacks, 20); it does not raise the cap.
      if (p) p.stacks.slice(-30).forEach(function (s) { s.until = b.t + 15; });
      poisonExplosion(b, u, t);
      var stacks = p ? p.stacks.slice() : [];
      // ASSUMED: the 400% ATK + 900% Enlightenment hit lands on the target and the nearby enemies the Poison spreads to.
      var list = b.area(u, t);
      list.forEach(function (e) { if (e !== t && stacks.length) spreadPoison(b, stacks, e); });
      list.forEach(function (e) { b.hit(u, e, { atk: 4.0, ench: 9.0 }, { el: POI, tag: 'ult' }); });
    }
  });

  // Shink (Epic): ignores 1% of the target's DEF per Poison stack on it.
  // Upgraded ult (change_slot): 75% Poison chance instead of 50%.
  K(22020, {
    init: function (u, b) {
      std(u, b);
      b.on(u, 'modifyDamage', function (c) { if (c.src === u) c.defIgnore += 0.01 * b.stacks(c.tgt, 'Poison'); });
    },
    battle: function (u, b) {
      // ASSUMED: "bounces up to 5 times" = 5 hits in total, cycling through the alive enemies from the main target; with one enemy all 5 hit it.
      var first = b.target(u);
      if (!first) return;
      var order = [first].concat(shuffled(b, b.enemies(u).filter(function (x) { return x !== first; })));
      for (var i = 0; i < 5; i++) {
        var alive = order.filter(function (x) { return x.alive; });
        if (!alive.length) return;
        b.hit(u, alive[i % alive.length], { atk: 1.05 }, { el: POI, tag: 'battle', apply: [['Poison', 0.75, 15, { stacks: 1, skill: 'battle' }]] });
      }
    },
    ult: function (u, b) {
      var list = b.area(u, b.target(u));
      for (var i = 0; i < 5; i++) list.forEach(function (t) {
        b.hit(u, t, { atk: 1.05 }, { el: POI, tag: 'ult', apply: [['Poison', 0.5, 15, { stacks: 1, skill: 'ult' }]] });
      });
    }
  });

  // Vicana: allies' Poison ticks 2s sooner (engine: Poison damage rate x
  // interval/(interval-2)). Ult marks the main target for 10s; each Poison
  // inflicted on it sets off a 105% ATK Derivative blast on enemies in range.
  // Upgraded battle skill (change_slot): 75% Poison chance instead of 50%.
  K(20630, {
    init: function (u, b) {
      std(u, b);
      u.flags.markUntil = -1;
      b.on(u, 'modifyDamage', function (c) {
        if (c.o.dotOf !== 'Poison' || c.src.side !== u.side) return;
        var I = b.R.poisonInterval || 3;
        c.raw *= I / Math.max(1, I - 2);
      });
      b.on(u, 'debuffApplied', function (e) {
        var m = u.flags.mark;
        if (e.base !== 'Poison' || e.tgt !== m || b.t >= u.flags.markUntil || !m.alive) return;
        b.area(u, m).forEach(function (t) { b.hit(u, t, { atk: 1.05 }, { el: DER, tag: 'ult' }); });
      });
      if (u.insp >= 1) healOnKill(b, u, { hp: 0.08 });
      if (u.insp >= 2) {
        // ASSUMED: "every 15% of the target's Max HP over that of the hero" = each 15% by which the target's max HP exceeds the hero's (excess / hero max HP), +1% each, max 12%.
        b.on(u, 'modifyDamage', function (c) {
          if (c.src !== u) return;
          var over = (b.maxHp(c.tgt) - b.maxHp(u)) / b.maxHp(u);
          if (over > 0) c.bonus += Math.min(0.12, 0.01 * Math.floor(over / 0.15));
        });
      }
    },
    battle: function (u, b) {
      for (var i = 0; i < 3; i++) {
        var t = pick(b, b.enemies(u));
        if (t) b.hit(u, t, { atk: 1.5 }, { el: POI, tag: 'battle', apply: [['Poison', 0.5, 15, { stacks: 1, skill: 'battle', ignoreRes: u.insp >= 5 }]] });
      }
    },
    ult: function (u, b) {
      var t = b.target(u);
      if (!t) return;
      u.flags.mark = t;
      u.flags.markUntil = b.t + 10;
      b.area(u, t).forEach(function (e) { b.hit(u, e, { atk: 5.0 }, { el: POI, tag: 'ult' }); });
    }
  });

  // Jathalea: Thorny Poison punishes whoever dispels it.
  // Upgraded passive (change_slot): 10% Target's Max HP per stack instead of 6%.
  K(20290, {
    init: function (u, b) {
      std(u, b);
      if (u.insp >= 1) shieldBonus(b, u);
      if (u.insp >= 2) bonusIf(b, u, function () { return frac(b, u) > 0.85; }, 0.15);
      // ASSUMED: Thorny Poison has no effect of its own (none is stated) besides counting as a debuff and the dispel punishment; no stack cap is stated, so none is set.
      // ASSUMED: the dispeller cannot be identified in the engine, so the dispel damage hits the enemy that held the stacks (6% of its max HP per stack, capped at 100% of Jathalea's ATK per stack).
      watchStacks(b, u, function (w, kind) {
        if (kind !== 'removed') return;
        b.hit(u, w.t, Math.min(0.06 * b.maxHp(w.t), b.atk(u)), { el: DER, tag: 'passive' });
      });
    },
    thorny: function (u, b, t, chance, n, dur, skill) {
      if (!lands(b, u, t, chance, skill)) return;
      var r = addStacks(b, u, t, 'Thorny Poison', n, dur, 0, skill);
      r.added.forEach(function (s) { u.flags.watch.push({ t: t, st: r.st, s: s }); });
    },
    battle: function (u, b) {
      var t = b.target(u);
      if (!t) return;
      b.hit(u, t, { atk: 3.0 }, { el: POI, tag: 'battle', apply: [['Poison', 0.75, 15, { stacks: 1, skill: 'battle' }]] });
      this.thorny(u, b, t, 0.5, 1, 10, 'battle');
    },
    ult: function (u, b) {
      var self = this;
      b.area(u, b.target(u)).forEach(function (t) {
        b.hit(u, t, { atk: 7.0 }, { el: POI, tag: 'ult' });
        if (!t.alive) { t.flags.noRes = true; return; }
        self.thorny(u, b, t, 1, 3, 15, 'ult');
        // "20% Enlightenment Penalty": -20% of the target's Enlightenment.
        b.apply(u, t, 'Enlightenment Penalty', 1, 15, { mods: { ench: -0.2 * Math.max(0, t.s.ench) }, skill: 'ult' });
      });
    }
  });

  // Sleight: Potent Medicine stacks turn into Poison when they expire, are
  // dispelled or are resisted.
  K(22430, {
    init: function (u, b) {
      std(u, b);
      if (u.insp >= 1) shieldBonus(b, u);
      if (u.insp >= 2) b.on(u, 'modifyDamage', function (c) { if (c.src === u) c.bonus += 0.04 * Math.min(5, b.enemies(u).length); });
      // ASSUMED: the base Potent Medicine stack limit is 5 (inspiration 5 raises it to 10); stacks past the limit are ignored.
      u.flags.pmCap = u.insp >= 5 ? 10 : 5;
      // ASSUMED: Potent Medicine has no effect of its own while it lasts (none is stated) besides counting as a debuff.
      watchStacks(b, u, function (w) { b.apply(u, w.t, 'Poison', 1, 15, { stacks: 1, skill: 'passive' }); });
      var self = this;
      b.on(u, 'battleStart', function () { b.enemies(u).forEach(function (t) { self.pm(u, b, t, 3, 'passive'); }); });
    },
    pm: function (u, b, t, n, skill) {
      if (!t || !t.alive || n <= 0) return;
      if (!lands(b, u, t, 1, skill)) {
        for (var i = 0; i < n; i++) b.apply(u, t, 'Poison', 1, 15, { stacks: 1, skill: 'passive' });
        return;
      }
      var r = addStacks(b, u, t, 'Potent Medicine', n, 15, u.flags.pmCap, skill);
      r.added.forEach(function (s) { u.flags.watch.push({ t: t, st: r.st, s: s }); });
    },
    battle: function (u, b) {
      for (var i = 0; i < 4; i++) {
        var t = b.target(u);
        if (!t) return;
        b.hit(u, t, { atk: 1.0, ench: 10.0 }, { el: POI, tag: 'battle', apply: [['Poison', 0.75, 15, { stacks: 1, skill: 'battle' }]] });
        if (i === 3) this.pm(u, b, t, 1, 'battle');
      }
    },
    ult: function (u, b) {
      var self = this, list = b.area(u, b.target(u));
      for (var i = 0; i < 3; i++) list.forEach(function (t) {
        b.hit(u, t, { atk: 2.4, ench: 24.0 }, { el: POI, tag: 'ult', apply: [['Poison', 1, 15, { stacks: 1, skill: 'ult' }]] });
      });
      // ASSUMED: the "1 Potent Medicine per 5 Poison stacks" check runs once per target, after its 3 strikes.
      list.forEach(function (t) { self.pm(u, b, t, Math.floor(b.stacks(t, 'Poison') / 5), 'ult'); });
    }
  });

  // ========================================================= POISON SUPPORT ==

  // ASSUMED: a "Damage Debuff" (which Reytah's ult cannot extend) is a damage-over-time debuff.
  var DMG_DEBUFF = { 'Poison': 1, 'Burn': 1, 'Bleeding': 1, 'Static': 1, 'Thorny Poison': 1 };

  // Reytah: enemies deal 10% less damage, 8% less per debuff on them (max 3).
  K(21870, {
    init: function (u, b) {
      std(u, b);
      // ASSUMED: the reductions add up and multiply the enemy's damage (10% + 10% inspiration 1 + 8% x debuffs, up to 3).
      b.on(u, 'modifyDamage', function (c) {
        if (c.src.side === u.side) return;
        var red = 0.1 + (u.insp >= 1 ? 0.1 : 0) + 0.08 * Math.min(3, b.countDebuffs(c.src));
        c.raw *= 1 - red;
      });
      if (u.insp >= 2) hitStackDR(b, u);
      if (u.insp >= 5) b.on(u, 'statusApplied', function (e) {
        if (e.src !== u || e.kind === 'buff' || !b.chance(0.5)) return;
        var st = b.has(e.tgt, e.base);
        if (st) st.undispellable = true;
      });
    },
    battle: function (u, b) {
      var wave = function () {
        b.area(u, b.target(u)).forEach(function (t) { b.hit(u, t, { atk: 2.5 }, { el: POI, tag: 'battle', apply: [['Attack Penalty II', 0.75, 5, { skill: 'battle' }]] }); });
      };
      wave();
      // ASSUMED: "after a short pause" = 1s.
      b.after(1, wave, u);
    },
    ult: function (u, b) {
      b.allies(u, true).forEach(function (a) {
        b.dispel(a, 99, 'debuff');
        b.apply(u, a, 'Defense Up II', 1, 10);
      });
      var ext = 5 + (u.insp >= 3 ? 2 : 0);
      b.enemies(u).forEach(function (t) {
        t.sts.forEach(function (st) {
          if (st.kind === 'buff' || DMG_DEBUFF[st.base]) return;
          if (st.stacks) st.stacks.forEach(function (s) { s.until += ext; });
          else st.until += ext;
        });
        b.apply(u, t, 'Recharging Speed Penalty', 1, 5, { skill: 'ult' });
      });
    }
  });

  // ASSUMED: Talwer's transfer moves one random non-stacking debuff (with its remaining time) from a random debuffed enemy to another random enemy, with no resistance roll.
  function transferDebuff(b, u) {
    var en = b.enemies(u);
    if (en.length < 2) return;
    var movable = function (x) { return x.sts.filter(function (s) { return s.kind !== 'buff' && !s.stacks; }); };
    var d = pick(b, en.filter(function (x) { return movable(x).length > 0; }));
    if (!d) return;
    var st = pick(b, movable(d)), r = pick(b, en.filter(function (x) { return x !== d; }));
    d.sts.splice(d.sts.indexOf(st), 1);
    var ex = b.has(r, st.base);
    if (!ex) r.sts.push(st);
    else if (!ex.stacks) ex.until = Math.max(ex.until, st.until);
  }

  // Talwer: 2% Damage Reduction per debuff on enemies (max 10).
  K(21320, {
    init: function (u, b) {
      std(u, b);
      // ASSUMED: each debuff status counts once (10 Poison stacks = 1 debuff).
      b.on(u, 'beforeDamaged', function (c) {
        if (c.tgt !== u) return;
        var n = 0;
        b.enemies(u).forEach(function (e) { n += b.countDebuffs(e); });
        c.amount *= 1 - 0.02 * Math.min(10, n);
      });
      if (u.insp >= 1) b.on(u, 'death', function (e) { if (e.tgt.side === u.side && e.tgt !== u) b.heal(u, u, { hp: 0.15 }, { tag: 'passive' }); });
      if (u.insp >= 2) debuffExtender(b, u);
      if (u.insp >= 5) u.cdBattle -= 3;
    },
    battle: function (u, b) {
      var center = b.target(u);
      if (!center) return;
      // ASSUMED: the mushroom is not a unit: Talwer stands in as the Taunt source, and the mushroom dies (and explodes) when its 5s Taunt ends.
      b.area(u, center).forEach(function (t) { b.apply(u, t, 'Taunt', 1, 5, { skill: 'battle' }); });
      b.after(5, function () {
        var c = center.alive ? center : b.target(u);
        if (!c) return;
        b.area(u, c).forEach(function (t) {
          b.hit(u, t, { atk: 1.5, ench: 9.0 }, { el: DER, tag: 'battle', apply: [['Stunned', 1, 3, { skill: 'battle' }], [HEAL_RED, 1, 10, { skill: 'battle' }]] });
        });
      }, u);
    },
    ult: function (u, b) {
      var center = b.target(u);
      // 4s cloud, a hit every 0.8s = 5 hits.
      b.every(0.8, 4, function () {
        var c = center && center.alive ? center : b.target(u);
        if (!c) return;
        b.area(u, c).forEach(function (t) {
          b.hit(u, t, { atk: 0.8, ench: 6.0 }, { el: DER, tag: 'ult', apply: [['Accuracy Penalty II', 1, 10, { skill: 'ult' }], ['Attack Penalty II', 1, 10, { skill: 'ult' }]] });
          transferDebuff(b, u);
        });
      }, u);
    }
  });

  // Gareth (Epic): a hit for more than 10% of his current HP heals him for half of it.
  K(23170, {
    init: function (u, b) {
      std(u, b);
      // ASSUMED: "single-instance damage" = HP lost to one hit (after shields), compared with his HP just before it.
      b.on(u, 'damaged', function (e) {
        if (e.tgt !== u || e.amount <= 0.1 * (u.hp + e.amount)) return;
        b.heal(u, u, 0.5 * e.amount, { tag: 'passive' });
      });
      b.on(u, 'beforeDamaged', function (c) {
        if (c.tgt === u && c.src && c.src === u.flags.steadySrc && b.t < u.flags.steadyUntil) c.amount *= 0.7;
      });
    },
    battle: function (u, b) {
      b.apply(u, u, 'Defense Up II', 1, 5);
      var t = b.target(u);
      if (!t) return;
      b.hit(u, t, { def: 3.4 }, { el: POI, tag: 'battle' });
      u.flags.steadySrc = t;
      u.flags.steadyUntil = b.t + 5;
    },
    ult: function (u, b) {
      b.area(u, b.target(u)).forEach(function (t) { b.hit(u, t, { atk: 6.2 }, { el: POI, tag: 'ult', apply: [['Attack Penalty II', 0.75, 10, { skill: 'ult' }]] }); });
    }
  });

  // Eches (Epic): enemies he debuffs deal 10% less damage.
  // Upgraded battle skill (change_slot): Healing Prohibition for 8s instead of Healing Reduction for 5s.
  K(20750, {
    init: function (u, b) {
      std(u, b);
      // ASSUMED: the 10% damage cut lasts as long as the debuff that caused it (no duration is stated).
      b.on(u, 'debuffApplied', function (e) {
        if (e.src !== u || e.tgt.side === u.side) return;
        var st = b.has(e.tgt, e.base), until = b.t;
        if (st) until = st.stacks ? Math.max.apply(null, st.stacks.map(function (s) { return s.until; }).concat([b.t])) : st.until;
        e.tgt.flags.echesUntil = Math.max(e.tgt.flags.echesUntil || 0, until);
      });
      b.on(u, 'modifyDamage', function (c) { if (c.src.side !== u.side && c.src.flags.echesUntil > b.t) c.raw *= 0.9; });
    },
    battle: function (u, b) {
      b.area(u, b.target(u)).forEach(function (t) { b.hit(u, t, { atk: 2.8 }, { el: POI, tag: 'battle', apply: [[HEAL_RED, 0.75, 5, { skill: 'battle' }]] }); });
    },
    ult: function (u, b) {
      b.area(u, b.target(u)).forEach(function (t) {
        b.hit(u, t, { atk: 5.5 }, { el: POI, tag: 'ult', apply: [[CHARM, 0.35, 5, { skill: 'ult' }], ['Recharging Speed Penalty', 0.85, 10, { skill: 'ult' }]] });
      });
      b.allies(u, true).forEach(function (a) { b.dispel(a, 1, 'debuff'); });
    }
  });

  function highestAtk(b, list) {
    var best = null;
    list.forEach(function (x) { if (!best || b.atk(x) > b.atk(best)) best = x; });
    return best;
  }

  // Theodore (Epic): Control on an enemy gives +10 energy to the ally with the
  // highest ATK; Control on an ally takes 20 energy from the enemy with the
  // highest ATK. Each once per 3s.
  K(23200, {
    init: function (u, b) {
      std(u, b);
      u.flags.thE = -99; u.flags.thA = -99;
      b.on(u, 'statusApplied', function (e) {
        if (e.kind !== 'control') return;
        if (e.tgt.side !== u.side) {
          if (b.t - u.flags.thE < 3) return;
          u.flags.thE = b.t;
          var a = highestAtk(b, b.allies(u, true));
          if (a) b.energy(a, 10);
        } else {
          if (b.t - u.flags.thA < 3) return;
          u.flags.thA = b.t;
          var en = highestAtk(b, b.enemies(u));
          if (en) b.energy(en, -20);
        }
      });
    },
    battle: function (u, b) {
      for (var i = 0; i < 2; i++) {
        var t = b.target(u);
        if (t) b.hit(u, t, { atk: 2.1 }, { el: POI, tag: 'battle', apply: [['Recharging Speed Penalty', 0.75, 5, { skill: 'battle' }]] });
      }
    },
    ult: function (u, b) {
      b.area(u, b.target(u)).forEach(function (t) {
        b.hit(u, t, { atk: 7.6 }, { el: POI, tag: 'ult', apply: [['Stunned', 0.75, 5, { skill: 'ult' }], ['Attack Penalty II', 0.5, 10, { skill: 'ult' }]] });
      });
    }
  });

  // Garian (Epic): healer; charges faster while allies are low.
  K(23180, {
    init: function (u, b) {
      std(u, b);
      // ASSUMED: each Recharging Speed Boost stack is the mirror of Recharging Speed Penalty: +(1 - rechargePenalty) recharge speed (+30% with the 0.7 rule), re-counted every second; he counts himself as an ally.
      var base = u.s.rechargeUp || 0;
      b.on(u, 'second', function (e) {
        if (e.u !== u) return;
        var n = 0;
        b.allies(u, true).forEach(function (a) { var f = frac(b, a); if (f < 0.5) n++; if (f < 0.2) n++; });
        var per = 1 - (b.R.rechargePenalty != null ? b.R.rechargePenalty : 0.7);
        u.flags.rsBoost = n;
        if (b.rechargeRate) { u.s.rechargeUp = base + n * per; return; }
        // Older engine (no recharge-speed stat): add the extra second of regen directly.
        if (n) b.energy(u, n * per * (b.R.energyRegen != null ? b.R.energyRegen : b.R.ultMax / (b.R.ultFull || 20)));
      });
    },
    battle: function (u, b) {
      var low = b.lowestCurHp(b.allies(u, true));
      if (!low) return;
      b.heal(u, low, { thp: 0.15, ench: 20.0 }, { tag: 'battle' });
      b.apply(u, low, 'Debuff Immunity', 1, 5);
    },
    ult: function (u, b) {
      // ASSUMED: "allies within range" of the nexus = all allies. 8s, a heal every 1s = 8 heals.
      b.every(1, 8, function () {
        b.allies(u, true).forEach(function (a) { b.heal(u, a, { thp: 0.01, ench: 3.5 }, { tag: 'ult' }); });
      }, u);
    }
  });

  // Sifris (Epic): spends her own HP to heal and to resurrect allies.
  // Upgraded ult (change_slot): Defense Up II for 10s instead of Defense Up I for 6s.
  K(21680, {
    init: function (u, b) {
      std(u, b);
      u.flags.sfDone = false;
      u.flags.sfCheck = function () {
        if (u.flags.sfDone || !u.alive || frac(b, u) >= 0.3) return;
        u.flags.sfDone = true;
        b.apply(u, u, 'Resurrection at Death', 1, 10);
      };
      b.on(u, 'damaged', function (e) { if (e.tgt === u) u.flags.sfCheck(); });
      // ASSUMED: Resurrection at Death brings her back at 30% max HP (the figure her ultimate uses).
      b.on(u, 'fatal', function (f) {
        if (f.tgt !== u || !b.has(u, 'Resurrection at Death')) return;
        f.saved = true;
        b.remove(u, 'Resurrection at Death');
        b.after(0.01, function () { u.hp = Math.max(u.hp, 0.3 * b.maxHp(u)); }, u);
      });
    },
    payHp: function (u, b, pct) {
      var cost = pct * u.hp;
      u.hp -= cost;
      u.rec.taken += cost;
      u.flags.sfCheck();
    },
    battle: function (u, b) {
      this.payHp(u, b, 0.1);
      b.allies(u, false).forEach(function (a) { b.heal(u, a, { hp: 0.2 }, { tag: 'battle' }); });
    },
    ult: function (u, b) {
      this.payHp(u, b, 0.3);
      var dead = b.units.filter(function (x) { return x.side === u.side && !x.alive && x !== u && !x.flags.noRes; });
      shuffled(b, dead).slice(0, 2).forEach(function (x) {
        x.alive = true;
        x.hp = 0.3 * b.maxHp(x);
        x.energy = 0.75 * x.energy;
        x.rec.deathAt = null;
        x.castUntil = b.t; x.tgt = null; x.sts = []; x.shields = [];
        u.rec.revives = (u.rec.revives || 0) + 1;
        b.note(x.name + ' resurrected by ' + u.name);
      });
      b.allies(u, true).forEach(function (a) { b.apply(u, a, 'Defense Up I', 1, 6); });
    }
  });

  // Sigrid (Rare): +25 energy when a debuffed enemy dies.
  K(20650, {
    init: function (u, b) {
      std(u, b);
      snapOnFatal(b, u);
      b.on(u, 'death', function (e) { if (e.tgt.side !== u.side && snap(b, e.tgt) && e.tgt.flags.fatalDebuffs > 0) b.energy(u, 25); });
    },
    battle: function (u, b) {
      var t = b.target(u);
      if (!t) return;
      for (var i = 0; i < 2; i++) b.hit(u, t, { atk: 2.1 }, { el: POI, tag: 'battle' });
      // "This skill has a 75% chance": one roll per cast.
      b.apply(u, t, 'Healing Prohibition', 0.75, 5, { skill: 'battle' });
    },
    ult: function (u, b) {
      var t = b.target(u);
      if (!t) return;
      var list = [t].concat(b.enemies(u).filter(function (x) { return x !== t && b.countDebuffs(x) > 0; }));
      list.forEach(function (x) {
        b.hit(u, x, { atk: 7.6 }, { el: POI, tag: 'ult', apply: [['Healing Prohibition', 0.75, 10, { skill: 'ult' }], ['Attack Penalty II', 0.75, 10, { skill: 'ult' }]] });
      });
    }
  });

  // Heksandra (Rare): +30% healing on allies under 40% HP.
  K(20780, {
    init: function (u, b) {
      std(u, b);
      b.on(u, 'modifyHeal', function (c) { if (c.src === u && frac(b, c.tgt) < 0.4) c.amount *= 1.3; });
    },
    battle: function (u, b) {
      // ASSUMED: "an ally" = the ally with the lowest HP %.
      var low = b.lowestHp(b.allies(u, true));
      if (!low) return;
      b.heal(u, low, { atk: 1.5, ench: 15.0 }, { tag: 'battle' });
      b.dispel(low, 1, 'debuff');
    },
    ult: function (u, b) {
      // ASSUMED: "allies within range" = all allies.
      b.allies(u, true).forEach(function (a) { b.heal(u, a, { thp: 0.2 }, { tag: 'ult' }); });
    }
  });

  // ================================================ OTHER-SCHOOL LEGENDARIES ==

  // Khrysos: 50% of every shield he grants turns into healing as it is used up or vanishes.
  K(20450, {
    init: function (u, b) {
      std(u, b);
      var rate = u.insp >= 5 ? 0.75 : 0.5;
      if (u.insp >= 3) u.s.shieldP = (u.s.shieldP || 0) + 0.3;
      u.flags.kSh = [];
      b.on(u, 'shielded', function (e) {
        if (e.src !== u) return;
        var sh = e.tgt.shields[e.tgt.shields.length - 1];
        if (sh) u.flags.kSh.push({ t: e.tgt, sh: sh, last: sh.amt });
      });
      // ASSUMED: his shields are checked once per second, and the healing goes to the ally that held the shield.
      b.on(u, 'second', function (e) {
        if (e.u !== u) return;
        u.flags.kSh = u.flags.kSh.filter(function (w) {
          var present = w.t.alive && w.t.shields.indexOf(w.sh) >= 0;
          var used = present ? w.last - w.sh.amt : w.last;
          if (used > 0.01) b.heal(u, w.t, rate * used, { tag: 'passive' });
          w.last = w.sh.amt;
          return present;
        });
        if (u.insp >= 2 && frac(b, u) < 0.6) b.heal(u, u, { hp: 0.01 }, { tag: 'passive' });
      });
    },
    battle: function (u, b) {
      for (var i = 0; i < 3; i++) b.area(u, b.target(u)).forEach(function (t) {
        b.hit(u, t, { atk: 1.0 }, { el: 'Fire', tag: 'battle' });
        if (t.alive && b.chance(0.75)) b.dispel(t, 1, 'buff');
      });
      var low = b.lowestCurHp(b.allies(u, true));
      if (low) b.shield(u, low, { thp: 0.15 }, 5);
      // ASSUMED: the inspiration 1 self shield lasts 5s, like the battle skill shield.
      if (u.insp >= 1) b.shield(u, u, { hp: 0.15 }, 5);
    },
    ult: function (u, b) {
      b.enemies(u).forEach(function (t) {
        t.shields = [];
        b.hit(u, t, { atk: 5.0, hp: 0.1 }, { el: 'Fire', tag: 'ult', apply: [['Attack Penalty II', 0.75, 10, { skill: 'ult' }]] });
      });
      b.allies(u, true).forEach(function (a) { b.shield(u, a, { thp: 0.25 }, 10); });
    }
  });

  // Tamar: an enemy gaining a buff takes a 100% ATK Derivative strike (once per target per 5s).
  K(20830, {
    init: function (u, b) {
      std(u, b);
      // ASSUMED: inspiration 2's "+15%" is added to the 30% dispel chance (45%).
      var p = 0.3 + (u.insp >= 2 ? 0.15 : 0), key = 'tamarT' + u.uid;
      b.on(u, 'statusApplied', function (e) {
        var t = e.tgt;
        if (e.kind !== 'buff' || t.side === u.side || !t.alive) return;
        if (t.flags[key] != null && b.t - t.flags[key] < 5) return;
        t.flags[key] = b.t;
        b.hit(u, t, { atk: 1.0 }, { el: DER, tag: 'passive' });
        if (t.alive && b.chance(p)) b.dispel(t, 1, 'buff');
      });
    },
    battle: function (u, b) {
      b.area(u, b.target(u)).forEach(function (t) {
        b.hit(u, t, { atk: 3.0 }, { el: 'Lightning', tag: 'battle', apply: [['Attack Penalty II', 0.75, 5, { skill: 'battle' }]] });
        if (t.alive && b.chance(0.75)) b.dispel(t, 1, 'buff');
      });
    },
    ult: function (u, b) {
      b.enemies(u).forEach(function (t) {
        var noBuff = !t.sts.some(function (s) { return s.kind === 'buff'; });
        b.hit(u, t, { atk: 7.0 }, { el: 'Lightning', tag: 'ult', apply: [['Buff Prohibition', 0.75, 10, { skill: 'ult' }]] });
        if (noBuff) b.apply(u, t, 'Stunned', 0.75, 5, { skill: 'ult' });
      });
    }
  });

  // The Dark Lady: when any unit dies, allies split its ATK, DEF and HP.
  // ASSUMED: her texts print no multipliers: battle hits are 150% ATK each and ult hits 350% ATK each (their sums match the 300% / 700% of comparable S1 Legendary support skills).
  // ASSUMED: debuffs with no printed chance or duration land at 100%, for 5s (battle) and 10s (ult).
  K(23011, {
    init: function (u, b) {
      std(u, b);
      var cap = u.insp >= 5 ? 0.35 : 0.3, healCap = u.insp >= 5 ? 0.15 : 0.1;
      // ASSUMED: the 30% cap is taken from her stats at battle start.
      var base = { atk: b.atk(u), def: b.def(u), hp: b.maxHp(u) };
      b.on(u, 'death', function (e) {
        var d = e.tgt, allies = b.allies(u, true);
        if (d === u || !allies.length) return;
        var n = allies.length, share = { atk: b.atk(d) / n, def: b.def(d) / n, hp: b.maxHp(d) / n };
        allies.forEach(function (a) {
          var g = a.flags.dlGain || (a.flags.dlGain = { atk: 0, def: 0, hp: 0 });
          var da = Math.max(0, Math.min(share.atk, cap * base.atk - g.atk));
          var dd = Math.max(0, Math.min(share.def, cap * base.def - g.def));
          var dh = Math.max(0, Math.min(share.hp, cap * base.hp - g.hp));
          g.atk += da; g.def += dd; g.hp += dh;
          a.s.atkF += da; a.s.defF += dd;
          a.s.hpF += dh; a.maxHp0 += dh; a.hp += dh;
          b.heal(u, a, Math.min(0.1 * b.maxHp(d), healCap * b.maxHp(a)), { tag: 'passive' });
        });
      });
    },
    battle: function (u, b) {
      var targets = shuffled(b, b.enemies(u)).slice(0, u.insp >= 3 ? 5 : 3);
      var ap = [['Attack Penalty II', 1, 5, { skill: 'battle' }]];
      if (u.insp >= 1) ap.push(['Healing Prohibition', 1, 5, { skill: 'battle' }]);
      for (var i = 0; i < 2; i++) targets.forEach(function (t) { b.hit(u, t, { atk: 1.5 }, { el: 'Necrotic', tag: 'battle', apply: i === 0 ? ap : null }); });
    },
    ult: function (u, b) {
      // ASSUMED: one 75% dispel roll per enemy; inspiration 2 raises it to 100%.
      var pd = u.insp >= 2 ? 1 : 0.75;
      b.enemies(u).forEach(function (t) {
        if (b.chance(pd)) { b.dispel(t, 99, 'buff'); t.shields = []; }
      });
      for (var i = 0; i < 2; i++) b.enemies(u).forEach(function (t) {
        b.hit(u, t, { atk: 3.5 }, { el: 'Necrotic', tag: 'ult', apply: i === 0 ? [['Buff Prohibition', 1, 10, { skill: 'ult' }]] : null });
      });
    }
  });

  // Ghul'ende: skills on enemies under 50% HP may Charm them.
  K(22310, {
    init: function (u, b) {
      std(u, b);
      if (u.insp >= 2) hitStackDR(b, u);
    },
    // ASSUMED: a failed 50% roll also counts as failing to Charm, so it gives Accuracy Penalty II; Healing Reduction only comes with a won 50% roll.
    disorder: function (u, b, t) {
      if (!t || !t.alive || frac(b, t) >= 0.5) return;
      var won = b.chance(0.5);
      var charmed = won && b.apply(u, t, CHARM, 1, 5, { skill: 'passive' });
      if (won) b.apply(u, t, HEAL_RED, 1, 5, { skill: 'passive' });
      if (!charmed) b.apply(u, t, 'Accuracy Penalty II', 1, 5, { skill: 'passive' });
    },
    battle: function (u, b) {
      var t = b.target(u);
      if (!t) return;
      this.disorder(u, b, t);
      b.apply(u, t, 'Stunned', 1, 3, { skill: 'battle' });
      // 3s, a hit every 0.6s = 5 hits.
      b.every(0.6, 3, function () {
        if (!t.alive) return;
        b.hit(u, t, { atk: 1.5 }, { el: 'Necrotic', tag: 'battle' });
        var got = Math.min(3, t.energy);
        b.energy(t, -3);
        b.energy(u, got);
        b.heal(u, u, { atk: 1.5 }, { tag: 'battle' });
      }, u);
    },
    ult: function (u, b) {
      var self = this;
      b.enemies(u).forEach(function (t) {
        self.disorder(u, b, t);
        b.hit(u, t, { atk: 7.2 }, { el: 'Necrotic', tag: 'ult', apply: [['Attack Penalty II', 0.75, 10, { skill: 'ult' }]] });
      });
      b.allies(u, true).forEach(function (a) {
        var n = b.dispel(a, 99, 'debuff');
        b.heal(u, a, { thp: 0.10 + 0.04 * n }, { tag: 'ult' });
      });
    }
  });

  // Donella: her puppet bird strikes a random enemy every 8s.
  K(21460, {
    init: function (u, b) {
      std(u, b);
      // ASSUMED: the puppet bird is not a unit: its strike is a 200% ATK hit credited to Donella every 8s from battle start.
      b.every(8, 600, function () {
        var t = pick(b, b.enemies(u));
        if (t) b.hit(u, t, { atk: 2.0 }, { el: 'Radiant', tag: 'passive', apply: [['Healing Prohibition', 0.75, 5, { skill: 'passive' }]] });
      }, u);
      if (u.insp >= 1) {
        // ASSUMED: inspiration 1 triggers on one hit of at least 20% of her max HP, and "a period" is 10s.
        u.flags.donT = -99;
        b.on(u, 'damaged', function (e) {
          if (e.tgt !== u || e.amount < 0.2 * b.maxHp(u) || b.t - u.flags.donT < 10) return;
          u.flags.donT = b.t;
          if (b.chance(0.5)) b.dispel(u, 1, 'debuff');
        });
      }
      if (u.insp >= 2) debuffExtender(b, u);
    },
    battle: function (u, b) {
      // ASSUMED: "deal ... to enemies" (no range printed) = enemies within range.
      b.area(u, b.target(u)).forEach(function (t) { b.hit(u, t, { atk: 4.0 }, { el: 'Radiant', tag: 'battle', apply: [['Stunned', 1, 3, { skill: 'battle' }]] }); });
    },
    ult: function (u, b) {
      b.enemies(u).forEach(function (t) {
        b.hit(u, t, { atk: 7.0 }, { el: 'Radiant', tag: 'ult', apply: [['Accuracy Penalty II', 0.75, 10, { skill: 'ult' }], ['Attack Penalty II', 0.75, 10, { skill: 'ult' }]] });
      });
    }
  });

  // ---- end of kits ----
})(typeof window !== 'undefined' ? window : globalThis);
