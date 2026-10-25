/*
 * Hand-written hero kits for DHSim, translated from the official skill texts
 * (heroes-2025.json, dragonheir.info). Each kit says what the text says;
 * anything the text leaves open is marked ASSUMED in a comment.
 *
 * Kit shape: {battleCd, init(u,b), basic(u,b,tgt), battle(u,b), ult(u,b)}.
 * Skill multipliers are the values printed in the official text, which is
 * read here as the hero's current max skill level (ASSUMED).
 */
(function (root) {
  var S = root.DHSim || (typeof require !== 'undefined' ? require('./sim.js') : null);
  var COLD = 'Cold', POI = 'Poison';

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
    // Shared inspiration 1 texts.
    var t = (h.insp[0] && h.insp[0].t) || '';
    if (/takes 20% less crit damage/.test(t)) takesLessCrit(b, u, 0.2);
    if (/damage taken by 20% when under Control/.test(t)) {
      b.on(u, 'beforeDamaged', function (c) { if (c.tgt === u && b.controlled(u)) c.amount *= 0.8; });
    }
  }
  function ignoreDef(u, v) { u.s.defIgnore = (u.s.defIgnore || 0) + v; }
  function ignoreRes(u, v) { u.s.resIgnore = (u.s.resIgnore || 0) + v; }
  function std(u, b) {
    // Inspirations every hand kit shares (1 and the generic % ones).
    if (u.insp >= 1) insp1Common(b, u, u.h);
    var t5 = (u.h.insp[4] && u.h.insp[4].t) || '';
    if (u.insp >= 5) {
      var m = /Ignores (\d+)% of the target's Defense/.exec(t5); if (m) ignoreDef(u, m[1] / 100);
      m = /Ignores (\d+)% of the target's Resistance/.exec(t5); if (m) ignoreRes(u, m[1] / 100);
    }
  }

  // ================================================================ FROST ==

  // Auster: arrows; each arrow shot with a basic or skill fires tracking
  // arrows at up to 2 Frosted enemies (55% ATK, Frost 5s, +2.5 energy each).
  K(21030, {
    init: function (u, b) {
      std(u, b);
      if (u.insp >= 2) bonusIf(b, u, function (c) { return frac(b, c.tgt) < 0.5; }, 0.15);
    },
    arrow: function (u, b) {
      var frosted = b.enemies(u).filter(function (e) { return b.has(e, 'Frost'); }).slice(0, 2);
      frosted.forEach(function (t) {
        var r = b.hit(u, t, { atk: 0.55 }, { el: COLD, tag: 'passive', apply: [['Frost', 1, 5]] });
        if (r.amount > 0) b.energy(u, 2.5);
      });
    },
    basic: function (u, b, t) {
      b.hit(u, t, { atk: b.R.basicMult }, { el: COLD, tag: 'basic' });
      this.arrow(u, b);
    },
    battle: function (u, b) {
      var t = b.target(u);
      for (var i = 0; i < 3; i++) {
        b.hit(u, t, { atk: 1.2 }, { el: COLD, tag: 'battle', defIgnore: b.chance(0.5) ? 1 : 0 });
        this.arrow(u, b);
      }
    },
    ult: function (u, b) {
      var list = b.area(u, b.target(u));
      list.forEach(function (t) { b.hit(u, t, { atk: 5.2 }, { el: COLD, tag: 'ult', apply: [['Frost', 1, 10, { skill: 'ult' }]] }); });
      list.forEach(function (t) { b.hit(u, t, { atk: 1.1 }, { el: COLD, tag: 'ult' }); });
      this.arrow(u, b);
    }
  });

  // Hvitar: Icewind weather (15s at start and on ult). Under Icewind, Frosted
  // enemies take 22% ATK Derivative over time (ASSUMED: per second and per
  // Frost stack; the text says neither, per-stack was chosen because it fits
  // Darko's two full Frost-team Vortex fights). Enemies under 15% HP are
  // executed; bosses under 15% HP take 600% ATK Derivative instead, as the
  // text says (ASSUMED: once per Icewind window).
  K(20120, {
    init: function (u, b) {
      std(u, b);
      u.flags.icewind = 15;
      u.flags.bossExecUsed = -1;
      if (u.insp >= 2) b.on(u, 'modifyDamage', function (c) { if (c.src === u) c.bonus += 0.04 * Math.min(5, b.enemies(u).length); });
      b.on(u, 'second', function (e) {
        var t = e.u;
        if (t.side === u.side || b.t > u.flags.icewind || !b.has(t, 'Frost')) return;
        // Per Frost stack (Reborn Frost stacks up to 5). Reading chosen on 2026-10-25: it
        // raised her in Darko's full Frost-team fights and left the solo fight unchanged.
        b.hit(u, t, { atk: 0.22 * Math.max(1, b.stacks(t, 'Frost')) }, { el: 'Derivative', tag: 'passive' });
      });
      b.on(u, 'damaged', function (e) {
        var t = e.tgt;
        if (t.side === u.side || !t.alive || b.t > u.flags.icewind || !b.has(t, 'Frost')) return;
        // Bosses only take the 600% below 15% HP, as the text says. (A per-window
        // proc on the endless Vortex boss was tried on 2026-10-25 and dropped:
        // Darko's Hvitar-without-Frost-team fight showed it over-rated her.)
        if (t.hp / b.maxHp(t) >= 0.15) return;
        if (!t.isBoss) { b.kill(t, u); u.rec.executes = (u.rec.executes || 0) + 1; }
        else if (u.flags.bossExecUsed !== u.flags.icewind) {
          u.flags.bossExecUsed = u.flags.icewind;
          b.hit(u, t, { atk: 6.0 }, { el: 'Derivative', tag: 'passive' });
        }
      });
    },
    battle: function (u, b) {
      b.area(u, b.target(u)).forEach(function (t) { b.hit(u, t, { atk: 4.0 }, { el: COLD, tag: 'battle', apply: [['Frost', 0.75, 5, { skill: 'battle' }]] }); });
    },
    ult: function (u, b) {
      u.flags.icewind = b.t + 15;
      var en = b.enemies(u);
      var frosted = en.filter(function (e) { return b.has(e, 'Frost'); }).length + (u.insp >= 5 ? 2 : 0);
      var bonus = 0.15 * frosted;
      en.forEach(function (t) {
        b.hit(u, t, { atk: 6.4 }, { el: COLD, tag: 'ult', bonus: bonus });
        if (b.has(t, 'Frozen')) { b.remove(t, 'Frozen'); b.hit(u, t, { atk: 3.6 }, { el: COLD, tag: 'ult', bonus: bonus }); }
      });
    }
  });

  // Hochadir: allies' Frost lasts 5s longer while he lives.
  K(22230, {
    init: function (u, b) {
      std(u, b);
      b.on(u, 'debuffDuration', function (d) { if (d.base === 'Frost' && d.src.side === u.side) d.dur += 5; });
      if (u.insp >= 2) debuffExtender(b, u);
    },
    battle: function (u, b) {
      var frostAllies = b.allies(u, true).filter(function (a) { return a.h && a.h.sc === 'Frost'; });
      var best = frostAllies.sort(function (x, y) { return b.atk(y) - b.atk(x); })[0];
      if (best) b.buff(u, best, 'Frostfall ATK', 5, { atkP: 0.2 }, { undispellable: u.insp >= 5 });
      b.area(u, b.target(u)).forEach(function (t) { b.hit(u, t, { atk: 3.6 }, { el: COLD, tag: 'battle', apply: [['Frost', 0.75, 5, { skill: 'battle' }]] }); });
    },
    ult: function (u, b) {
      var en = b.enemies(u);
      en.forEach(function (t) { b.apply(u, t, 'Frost', 0.5, 10, { skill: 'ult' }); });
      en.filter(function (t) { return b.has(t, 'Frost'); }).forEach(function (c) {
        b.area(u, c).forEach(function (t) { b.hit(u, t, { atk: 5.0 }, { el: COLD, tag: 'ult' }); });
      });
      b.enemies(u).filter(function (t) { return b.has(t, 'Frozen'); }).forEach(function (c) {
        b.area(u, c).forEach(function (t) { b.hit(u, t, { atk: 5.0 }, { el: COLD, tag: 'ult' }); });
      });
    }
  });

  // Lossenia: basic attacks become a bouncing Iceball (up to 2 bounces,
  // prefers enemies without Frost; ASSUMED: no bounce back onto the same target).
  K(20920, {
    init: function (u, b) {
      std(u, b);
      if (u.insp >= 2) bonusIf(b, u, function () { return frac(b, u) > 0.85; }, 0.15);
    },
    basic: function (u, b, t) {
      var hitList = [t], pool = b.enemies(u).filter(function (e) { return e !== t; });
      pool.sort(function (x, y) { return (b.has(x, 'Frost') ? 1 : 0) - (b.has(y, 'Frost') ? 1 : 0); });
      hitList = hitList.concat(pool.slice(0, 2));
      hitList.forEach(function (e) { b.hit(u, e, { atk: 1.0 }, { el: COLD, tag: 'basic', apply: [['Frost', 0.75, 10]] }); });
    },
    battle: function (u, b) {
      // Marks the ally with the highest ATK (ASSUMED pick); the pulse uses
      // the marked ally's ATK (ASSUMED) and is credited to Lossenia.
      var ally = b.allies(u, true).sort(function (x, y) { return b.atk(y) - b.atk(x); })[0];
      b.every(1.5, 6, function () {
        if (!ally.alive) return;
        var t = b.target(ally) || b.target(u);
        if (!t) return;
        b.area(u, t).forEach(function (e) { b.hit(u, e, b.atk(ally), { el: COLD, tag: 'battle', apply: [['Frost', 1, 5, { skill: 'battle' }]] }); });
      }, u);
    },
    ult: function (u, b) {
      var center = b.target(u);
      b.every(1, 6, function () {
        if (!center || !center.alive) center = b.target(u);
        if (!center) return;
        b.area(u, center).forEach(function (e) { b.hit(u, e, { atk: 1.5 }, { el: COLD, tag: 'ult', apply: [['Frost', 1, 5, { skill: 'ult' }]] }); });
      }, u);
    }
  });

  // ============================================================ ICE SUPPORT ==

  // Voresh: heals the lowest-HP ally by 70% ATK whenever he deals damage
  // (once per action when several targets are hit).
  K(22290, {
    init: function (u, b) {
      std(u, b);
      b.on(u, 'hit', function (e) {
        if (e.src !== u || e.amount <= 0 || u.flags.healT === b.t) return;
        u.flags.healT = b.t;
        b.heal(u, b.lowestCurHp(b.allies(u, true)), { atk: 0.7 }, { tag: 'passive' });
      });
    },
    battle: function (u, b) {
      var t = b.target(u);
      for (var i = 0; i < 3; i++) {
        if (!t || !t.alive) t = b.target(u);
        if (!t) return;
        b.hit(u, t, { atk: 1.2 }, { el: COLD, tag: 'battle' });
        if (b.chance(0.3)) b.dispel(t, 1, 'buff');
      }
    },
    ult: function (u, b) {
      for (var i = 0; i < 3; i++) b.enemies(u).forEach(function (t) {
        b.hit(u, t, { atk: 1.8 }, { el: COLD, tag: 'ult', apply: i === 0 ? [['Buff Prohibition', 0.75, 10, { skill: 'ult' }]] : null });
      });
    }
  });

  // Gardrus: 25% chance to resist a debuff (+25 energy when he does).
  K(21160, {
    init: function (u, b) { std(u, b); },
    battle: function (u, b) {
      var t = b.target(u);
      b.hit(u, t, { atk: 4.0 }, { el: COLD, tag: 'battle', apply: [['Attack Penalty II', 0.75, 5, { skill: 'battle' }]] });
    },
    ult: function (u, b) {
      b.area(u, b.target(u)).forEach(function (t) {
        b.hit(u, t, { atk: 6.2 }, { el: COLD, tag: 'ult', apply: [['Knocked Up', 1, 1, { skill: 'ult' }], ['Stunned', 1, 3, { skill: 'ult' }], ['Recharging Speed Penalty', 1, 5, { skill: 'ult' }]] });
      });
    }
  });
  // The resist check runs before a debuff lands; attach it via a wrapper.
  (function () {
    var orig = S.Battle.prototype.apply;
    S.Battle.prototype.apply = function (src, tgt, name, chance, dur, extra) {
      if (tgt && tgt.heroId === 21160 && tgt.alive && src.side !== tgt.side && S.parseStatus(name).kind !== 'buff' && this.chance(0.25)) {
        this.energy(tgt, 25);
        return false;
      }
      return orig.call(this, src, tgt, name, chance, dur, extra);
    };
  })();

  // Vinyara: immune to Control (freezes the caster for 5s, once per 6s).
  K(20770, {
    init: function (u, b) {
      std(u, b);
      u.flags.icyT = -99;
      if (u.insp >= 2) debuffExtender(b, u);
      b.on(u, 'statusApplied', function (e) {
        if (e.tgt !== u || e.kind !== 'control') return;
        b.remove(u, e.base);
        if (b.t - u.flags.icyT >= 6) { u.flags.icyT = b.t; b.apply(u, e.src, 'Frozen', 1, 5); }
      });
    },
    battle: function (u, b) {
      var others = b.allies(u, false);
      var low = b.lowestCurHp(others);
      [u, low].forEach(function (a) {
        if (!a) return;
        b.shield(u, a, { atk: 4.5, hp: 0.1 }, 10);
        b.apply(u, a, 'Defense Up II', 1, 5);
      });
    },
    ult: function (u, b) {
      var t = b.target(u);
      if (!t) return;
      b.hit(u, t, { atk: 9.0 }, { el: COLD, tag: 'ult' });
      b.dispel(t, 99, 'buff');
      b.energy(t, -100);
      b.apply(u, t, 'Frozen', 1, 3, { skill: 'ult' });
      b.apply(u, t, 'Attack Penalty II', 1, 10, { skill: 'ult' });
    }
  });

  // Alphanarsy: Death's Blessing stacks (start 5, +1 every 10s, max 10, one
  // removed per damage taken). ASSUMED effect: 5% damage reduction per stack.
  K(24770, {
    init: function (u, b) {
      std(u, b);
      u.flags.db = 5;
      b.every(10, 600, function () { u.flags.db = Math.min(10, u.flags.db + 1); }, u);
      b.on(u, 'beforeDamaged', function (c) {
        if (c.tgt !== u || u.flags.db <= 0) return;
        c.amount *= 1 - 0.05 * u.flags.db;
        u.flags.db--;
      });
      // Parry: while holding her ult shield, each hit is reduced by 10% of her DEF.
      b.on(u, 'beforeDamaged', function (c) {
        if (c.tgt.side !== u.side || !c.tgt.flags.parryUntil || b.t > c.tgt.flags.parryUntil || !c.tgt.shields.length) return;
        c.amount = Math.max(0, c.amount - 0.1 * b.def(u));
      });
    },
    battle: function (u, b) {
      var list = b.area(u, b.target(u));
      list.forEach(function (t) { b.hit(u, t, { atk: 2.0, ench: 10.0 }, { el: COLD, tag: 'battle' }); });
      u.flags.db = Math.min(10, u.flags.db + list.length * (u.insp >= 2 ? 2 : 1));
      b.allies(u, true).forEach(function (a) { b.apply(u, a, 'Defense Up II', 1, 5); });
    },
    ult: function (u, b) {
      // ASSUMED: shield lasts 10s (text gives no duration).
      b.allies(u, true).forEach(function (a) { b.shield(u, a, { hp: 0.15, ench: 36.0 }, 10); a.flags.parryUntil = b.t + 10; });
    }
  });

  // Felosia: 15% of all damage allies take turns into a 10s shield.
  K(21390, {
    init: function (u, b) {
      std(u, b);
      if (u.insp >= 2) u.s.shieldP = (u.s.shieldP || 0) + 0.15;
      b.on(u, 'damaged', function (e) {
        if (e.tgt.side !== u.side || !e.tgt.alive || e.amount <= 0) return;
        b.shield(u, e.tgt, 0.15 * e.amount, 10, { tag: 'passive' });
      });
    },
    battle: function (u, b) {
      // "Each ally within range": an area of 3 allies (random; she can be one).
      // CALIBRATED on Darko's Vortex statistics (2026-10-25, Felosia team: HP
      // damage taken 230k in game; the whole-team reading gave 74k).
      var pool = b.allies(u, true).slice();
      for (var k = pool.length - 1; k > 0; k--) { var j = Math.floor(b.rand() * (k + 1)); var tmp = pool[k]; pool[k] = pool[j]; pool[j] = tmp; }
      pool.slice(0, b.R.areaSize).forEach(function (a) {
        b.shield(u, a, { thp: 0.10, ench: 15.0 }, 10);
        b.apply(u, a, 'Defense Up I', 1, 5, { undispellable: u.insp >= 5 });
      });
    },
    ult: function (u, b) {
      b.allies(u, true).forEach(function (a) {
        b.shield(u, a, { thp: 0.12, ench: 29.0 }, 10);
        b.buff(u, a, 'Fearless Bulwark', 10, { dmgRed: 0.30 });
        b.apply(u, a, 'Control Immunity', 1, 10);
      });
    }
  });

  // Eurion: survives one fatal hit every 60s (5s Invincibility, stops attacking).
  K(20060, {
    init: function (u, b) {
      std(u, b);
      u.flags.undyingT = -999;
      b.on(u, 'fatal', function (f) {
        if (f.tgt !== u || b.t - u.flags.undyingT < 60) return;
        u.flags.undyingT = b.t; f.saved = true;
        u.sts = u.sts.filter(function (s) { return s.kind === 'buff'; });
        b.apply(u, u, 'Invincibility', 1, 5);
        b.apply(u, u, 'Received Healing Up II', 1, 5);
        u.castUntil = b.t + 5;
        // ASSUMED: 2 stacks of Recovery Over Time = 2 x 4% max HP per second.
        b.every(1, 5, function () { b.heal(u, u, { hp: 0.08 }, { tag: 'passive' }); }, u);
      });
      if (u.insp >= 2) b.on(u, 'second', function (e) { if (e.u === u && frac(b, u) < 0.6) b.heal(u, u, { hp: 0.01 }); });
    },
    battle: function (u, b) {
      b.area(u, b.target(u)).forEach(function (t) {
        t.shields = [];
        b.hit(u, t, { def: 3.0 }, { el: COLD, tag: 'battle', apply: [['Attack Penalty I', 0.75, 4, { skill: 'battle' }]] });
      });
    },
    ult: function (u, b) {
      // ASSUMED: Ally Protection = Eurion takes 30% of the damage protected allies take.
      b.allies(u, false).forEach(function (a) { b.apply(u, a, 'Ally Protection', 1, 10, { data: { by: u } }); });
      b.shield(u, u, { def: 6.0 }, 10);
      b.buff(u, u, 'Shield of Oath', 10, { dmgRed: 0.30 });
      b.apply(u, u, 'Defense Up I', 1, 10);
      if (!u.flags.protHook) {
        u.flags.protHook = true;
        b.on(u, 'beforeDamaged', function (c) {
          var p = b.has(c.tgt, 'Ally Protection');
          if (!p || !p.data || p.data.by !== u || c.tgt === u || !u.alive) return;
          var moved = c.amount * 0.3;
          c.amount -= moved;
          b.damage(u, moved, c.src, { tag: 'redirect' });
        });
      }
    }
  });

  // ============================================================ OTHER SUPPORT ==

  // Ergander: tank. Being hit has a 20% chance (35% with inspiration 2) to give
  // the attacker Attack Penalty II for 5s.
  K(21010, {
    init: function (u, b) {
      std(u, b);
      var p = u.insp >= 2 ? 0.35 : 0.2;
      b.on(u, 'damaged', function (e) {
        if (e.tgt !== u || !e.src || e.src.side === u.side || !b.chance(p)) return;
        b.apply(u, e.src, 'Attack Penalty II', 1, 5);
      });
      if (u.insp >= 5) b.on(u, 'debuffDuration', function (d) { if (d.tgt === u && S.parseStatus(d.name).kind === 'control') d.dur *= 0.5; });
    },
    battle: function (u, b) {
      b.area(u, b.target(u)).forEach(function (t) {
        b.hit(u, t, { atk: 2.0, hp: 0.07 }, { el: POI, tag: 'battle' });
        b.energy(t, -25);
      });
      b.heal(u, u, { hp: 0.2 }, { tag: 'battle' });
    },
    ult: function (u, b) {
      b.area(u, b.target(u)).forEach(function (t) {
        b.apply(u, t, 'Taunt', 1, 5, { skill: 'ult' });
        b.hit(u, t, { atk: 4.0, hp: 0.16 }, { el: POI, tag: 'ult' });
      });
      b.apply(u, u, 'Immortality', 1, 10);
    }
  });

  // Torrin: marks the first front-line ally (gains 20% of Torrin's max HP and
  // DEF); heals; ult gives Invisibility to all allies except the marked one.
  K(20690, {
    init: function (u, b) {
      std(u, b);
      b.on(u, 'battleStart', function () {
        var front = b.allies(u, false).filter(function (a) { return a.melee; })[0] || b.allies(u, false)[0];
        if (!front) return;
        u.flags.mark = front;
        front.s.hpF += 0.2 * b.maxHp(u); front.maxHp0 += 0.2 * b.maxHp(u); front.hp += 0.2 * b.maxHp(u);
        front.s.defF += 0.2 * b.def(u);
        b.apply(u, u, 'Invisibility', 1, 10);
      });
    },
    battle: function (u, b) {
      var low = b.lowestHp(b.allies(u, true));
      b.heal(u, low, { thp: 0.12, ench: 24.0 }, { tag: 'battle' });
      if (u.insp >= 2) b.dispel(low, 1, 'debuff');
      var m = u.flags.mark;
      if (m && m.alive) { b.heal(u, m, { thp: 0.06, ench: 12.0 }, { tag: 'battle' }); b.dispel(m, 1, 'debuff'); }
    },
    ult: function (u, b) {
      var m = u.flags.mark;
      b.allies(u, true).forEach(function (a) {
        if (a === m) b.apply(u, a, 'Debuff Immunity', 1, 10, { undispellable: u.insp >= 5 });
        else b.apply(u, a, 'Invisibility', 1, 10, { undispellable: u.insp >= 5 });
      });
      b.every(0.8, 4, function () {
        b.allies(u, true).forEach(function (a) { b.heal(u, a, { thp: 0.03, ench: 6.0 }, { tag: 'ult', bonus: a === m ? 0.25 : 0 }); });
      }, u);
    }
  });

  // Oggok: every heal dispels 1 debuff. Battle skill: a wave hitting 6 times,
  // starting on his target and bouncing each time to a random other unit
  // (enemy or ally). CALIBRATED: against one boss this gives ~1.8 hits and
  // ~4.2 heals, which matches Darko's in-game Temporal Vortex statistics
  // (2026-10-25: Oggok 7.8% of damage, 85% of healing); the old "alternating
  // 3 + 3" rule gave him too much damage and too little healing.
  K(21700, {
    init: function (u, b) {
      std(u, b);
      b.on(u, 'healed', function (e) {
        if (e.src !== u) return;
        b.dispel(e.tgt, 1 + (u.insp >= 2 && b.chance(0.5) ? 1 : 0), 'debuff');
      });
    },
    battle: function (u, b) {
      var cur = b.target(u);
      for (var i = 0; i < 6 && cur; i++) {
        if (cur.side !== u.side) b.hit(u, cur, { atk: 1.5, ench: 12.0 }, { el: POI, tag: 'battle', apply: [['Attack Penalty II', 0.85, 5, { skill: 'battle', ignoreRes: u.insp >= 5 }]] });
        else b.heal(u, cur, { atk: 1.5, ench: 12.0 }, { tag: 'battle' });
        var last = cur, pool = b.enemies(u).concat(b.allies(u, true)).filter(function (x) { return x !== last && x.alive; });
        cur = pool[Math.floor(b.rand() * pool.length)];
      }
    },
    ult: function (u, b) {
      b.allies(u, true).forEach(function (a) { b.apply(u, a, 'Immortality', 1, 5); });
      b.after(5, function () { b.allies(u, true).forEach(function (a) { b.heal(u, a, { atk: 4.0, ench: 30.0 }, { tag: 'ult' }); }); }, u);
    }
  });

  // Frurbath: hitting debuffed enemies may heal the lowest-HP ally (once per 1s).
  K(21670, {
    init: function (u, b) {
      std(u, b);
      u.flags.healT = -9;
      b.on(u, 'hit', function (e) {
        if (e.src !== u || b.t - u.flags.healT < 1) return;
        var n = b.countDebuffs(e.tgt);
        if (!n || !b.chance(0.3)) return;
        u.flags.healT = b.t;
        var low = b.lowestCurHp(b.allies(u, true));
        // ASSUMED: +20% healing per debuff on the target.
        b.heal(u, low, { def: 1.5 }, { tag: 'passive', bonus: 0.2 * (n - 1) });
        b.dispel(low, 1, 'debuff');
      });
    },
    battle: function (u, b) {
      b.every(1, 6, function () { b.allies(u, true).forEach(function (a) { b.heal(u, a, { def: 0.5 }, { tag: 'battle' }); }); }, u);
    },
    ult: function (u, b) {
      b.area(u, b.target(u)).forEach(function (t) { b.hit(u, t, { atk: 6.0 }, { el: POI, tag: 'ult', apply: [['Attack Penalty II', 0.75, 10, { skill: 'ult' }]] }); });
    }
  });

  // Vicuc: anyone who debuffs her gets Accuracy Penalty II for 5s.
  K(23190, {
    init: function (u, b) {
      std(u, b);
      b.on(u, 'debuffApplied', function (e) { if (e.tgt === u && e.src.side !== u.side) b.apply(u, e.src, 'Accuracy Penalty II', 1, 5); });
    },
    battle: function (u, b) {
      b.area(u, b.target(u)).forEach(function (t) { b.hit(u, t, { atk: 3.0 }, { el: POI, tag: 'battle', apply: [['Attack Penalty I', 0.75, 5, { skill: 'battle' }]] }); });
    },
    ult: function (u, b) {
      b.allies(u, true).forEach(function (a) {
        var n = b.dispel(a, 2, 'debuff');
        b.heal(u, a, { thp: 0.15 }, { tag: 'ult', bonus: 0.25 * n });
      });
    }
  });

  // ================================================================ POISON ==

  // Durango: opening strike on all enemies; crits may add Poison.
  K(20670, {
    init: function (u, b) {
      std(u, b);
      var p = 0.4 + (u.insp >= 2 ? 0.15 : 0);
      b.on(u, 'battleStart', function () {
        b.enemies(u).forEach(function (t) { b.hit(u, t, { atk: 1.5 }, { el: POI, tag: 'passive', apply: [['Poison', p, 15, { stacks: 3 }]] }); });
      });
      b.on(u, 'crit', function (e) {
        if (e.src !== u || ['basic', 'battle', 'ult'].indexOf(e.o.tag) < 0) return;
        if (b.chance(p)) b.apply(u, e.tgt, 'Poison', 1, 15, { stacks: 1, skill: 'passive' });
        if (e.o.tag === 'battle') b.energy(u, 5);
      });
    },
    battle: function (u, b) {
      for (var i = 0; i < 3; i++) { var t = b.target(u); if (t) b.hit(u, t, { atk: 1.0, ench: 5.0 }, { el: POI, tag: 'battle' }); }
    },
    ult: function (u, b) {
      // "Ignores 30% of the target's Defense upon a successful critical hit": a
      // flat 30% ignore on crits is folded in as an expected-value bonus.
      for (var i = 0; i < 3; i++) b.area(u, b.target(u)).forEach(function (t) {
        b.hit(u, t, { atk: 1.35, ench: 6.4 }, { el: POI, tag: 'ult', defIgnore: 0.3 * Math.min(1, b.stat(u, 'critRate')), apply: [['Poison', 1, 15, { stacks: 2, skill: 'ult' }]] });
      });
    }
  });

  // Twitch: Poison from other skills has a 20% chance to trigger a 30% ATK
  // Derivative hit plus 1 Poison stack.
  K(22010, {
    init: function (u, b) {
      std(u, b);
      if (u.insp >= 1) bonusIf(b, u, function (c) { return c.tgt.shields.length > 0; }, 0.2);
      if (u.insp >= 2) bonusIf(b, u, function (c) { return frac(b, c.tgt) < 0.5; }, 0.15);
      b.on(u, 'debuffApplied', function (e) {
        if (e.base !== 'Poison' || e.src.side !== u.side || e.skill === 'twitchP' || !b.chance(0.2)) return;
        b.hit(u, e.tgt, { atk: 0.3 }, { el: 'Derivative', tag: 'passive' });
        b.apply(u, e.tgt, 'Poison', 1, 15, { stacks: 1, skill: 'twitchP' });
      });
    },
    battle: function (u, b) {
      var arrows = Math.min(4, 1 + Math.floor(b.stat(u, 'ench') / 60));
      for (var i = 0; i < arrows; i++) {
        var t = b.target(u);
        if (t) b.hit(u, t, { atk: 0.8, ench: 9.0 }, { el: POI, tag: 'battle', apply: [['Poison', 0.75, 15, { stacks: 1, skill: 'battle' }]] });
      }
    },
    ult: function (u, b) {
      for (var i = 0; i < 3; i++) b.area(u, b.target(u)).forEach(function (t) {
        b.hit(u, t, { atk: 1.6, ench: 18.0 }, { el: POI, tag: 'ult', apply: [['Poison', 0.5, 15, { stacks: 2, skill: 'ult', ignoreRes: u.insp >= 5 }]] });
      });
    }
  });

  // Lothair: battle skill and ult add Derivative damage per Poison stack on the
  // target. ASSUMED reading: each stack adds min(1% target max HP, 40% ATK).
  K(20200, {
    init: function (u, b) { std(u, b); u.flags.pstack = 0; },
    extra: function (u, b, t) {
      var n = b.stacks(t, 'Poison');
      if (!n) return;
      var per = Math.min(0.01 * b.maxHp(t), 0.4 * b.atk(u)) * (1 + (u.insp >= 2 ? 0.01 * Math.min(10, u.flags.pstack++) : 0));
      b.hit(u, t, n * per, { el: 'Derivative', tag: 'passive' });
    },
    battle: function (u, b) {
      var en = b.enemies(u);
      var t = b.lowestCurHp(en);
      var self = this;
      var dbl = u.insp >= 5 && b.chance(0.4);
      b.area(u, t).forEach(function (e) {
        b.hit(u, e, { atk: 2.5 }, { el: POI, tag: 'battle', apply: [['Poison', 0.75, 15, { stacks: dbl ? 4 : 2, skill: 'battle', ignoreRes: u.insp >= 5 }]] });
        self.extra(u, b, e);
      });
    },
    ult: function (u, b) {
      var self = this;
      for (var i = 0; i < 3; i++) b.area(u, b.target(u)).forEach(function (e) {
        b.hit(u, e, { atk: 2.5, ench: 12.0 }, { el: POI, tag: 'ult' });
        self.extra(u, b, e);
      });
    }
  });
})(typeof window !== 'undefined' ? window : globalThis);
