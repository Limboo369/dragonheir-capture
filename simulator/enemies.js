/*
 * Enemy presets for DHSim. Boss numbers are not published, so every preset is
 * built from a reference unit: the average naked stats of all Legendary heroes
 * at the chosen level, times multipliers. Treat them as test benches, not as
 * copies of real bosses, until real stats are measured.
 *
 * enemy options: {preset, level, hpX, atkX, defX, res, seconds, count}
 */
(function (root) {
  var S = root.DHSim || (typeof require !== 'undefined' ? require('./sim.js') : null);

  function refStats(level) {
    var D = S.data(), n = 0, acc = { hp: 0, atk: 0, def: 0 };
    for (var k in D.heroes) {
      var h = D.heroes[k];
      if (h.r !== 'Legendary' || !h.b.hp) continue;
      var s = S.nakedStats(h, level);
      acc.hp += s.hp; acc.atk += s.atk; acc.def += s.def; n++;
    }
    return { hp: acc.hp / n, atk: acc.atk / n, def: acc.def / n };
  }
  function unitSpec(name, st, opt) {
    return {
      name: name, isBoss: !!opt.isBoss, melee: opt.melee !== false, kit: opt.kit,
      custom: {
        h: null, notes: [],
        s: { hpB: st.hp, atkB: st.atk, defB: st.def, hpF: 0, atkF: 0, defF: 0, hpP: 0, atkP: 0, defP: 0,
          critRate: opt.critRate == null ? 0.1 : opt.critRate, critDmg: 0.5, acc: opt.acc || 0, res: opt.res || 0,
          ench: 0, haste: 0, atkSpd: 0, dmgBonus: 0, dmgRed: opt.dmgRed || 0, healP: 0, shieldP: 0,
          statusChance: 0, defIgnore: 0, resIgnore: 0 }
      },
      extra: { af: opt.af || 0.5, controlImmune: !!opt.controlImmune }
    };
  }
  var idle = { conf: 'preset', basic: function () {} };
  // A generic dungeon boss. Real bosses run a fixed cycle: one skill every 6 s,
  // three skills per 18 s cycle (Graves, Ancient Battlefield; Temporal Vortex
  // 5 s / 20 s; HellHades 2025-07-30, official intel screens). The cycle runs on
  // the boss's energy bar, so energy drain and Recharging Speed Penalty delay it,
  // as in game. Skill sizes are guesses:
  //   1) area hit on up to 3 heroes, 2) chain of 3 heavy hits on its target
  //   (the "tank killer"), 3) a hit on every hero.
  function bossKit(o) {
    var step = o.step || 6;
    return {
      conf: 'preset', ultFull: step, ultFirst: step,
      basic: function (u, b, t) { b.hit(u, t, { atk: 1.0 }, { tag: 'basic' }); },
      ult: function (u, b) {
        var k = (u.flags.bossSkill = ((u.flags.bossSkill || 0) % 3) + 1), t = b.target(u);
        if (!t) return;
        if (k === 1) b.area(u, t, 3).forEach(function (x) { b.hit(u, x, { atk: o.skillMult || 2.0 }, { tag: 'battle' }); });
        else if (k === 2) for (var i = 0; i < 3; i++) b.hit(u, t, { atk: o.chainMult || 1.5 }, { tag: 'battle' });
        else b.enemies(u).forEach(function (x) { b.hit(u, x, { atk: o.ultMult || 2.5 }, { tag: 'ult' }); });
      },
      init: function (u, b) {
        if (o.enrageAt) b.after(o.enrageAt, function () { b.buff(u, u, 'Enrage', 999, { atkP: o.enrageAtk || 1.0 }); }, u);
      }
    };
  }
  function scaled(e, d) {
    var r = refStats(e.level || 60);
    return { hp: r.hp * (e.hpX || d.hpX), atk: r.atk * (e.atkX == null ? d.atkX : e.atkX), def: r.def * (e.defX || d.defX) };
  }

  S.registerBoss('dummy', {
    name: 'Training dummy', conf: 'model', note: 'One target with endless HP and no attacks; DEF of a level-matched hero x1.2. Measures pure single-target DPS.',
    make: function (e) {
      var st = scaled(e, { hpX: 1, atkX: 0, defX: 1.2 });
      st.hp = 1e12;
      return { units: [unitSpec('Training dummy', st, { isBoss: true, kit: idle, res: e.res || 0 })] };
    }
  });
  S.registerBoss('dummy5', {
    name: 'Five dummies', conf: 'model', note: 'Five endless targets; measures area damage.',
    make: function (e) {
      var st = scaled(e, { hpX: 1, atkX: 0, defX: 1.2 });
      st.hp = 1e12;
      var list = [];
      for (var i = 0; i < (e.count || 5); i++) list.push(unitSpec('Dummy ' + (i + 1), st, { kit: idle, res: e.res || 0 }));
      return { units: list };
    }
  });
  function makeBoss(d) {
    return function (e) {
      var st = scaled(e, d);
      return { units: [unitSpec(e.name || 'Boss', st, { isBoss: true, controlImmune: true, kit: bossKit(e), res: e.res == null ? 30 : e.res, acc: e.acc || 30 })] };
    };
  }
  S.registerBoss('boss', {
    name: 'Generic boss', conf: 'estimated', note: 'Single boss on an 18 s cycle (a skill every 6 s: area hit, 3-hit chain on its target, hit on all heroes), immune to control. 40x the HP of a level-matched hero and 2.2x its ATK, tuned so a level-matched team wins with HP to spare. No source publishes boss HP/ATK/DEF, so these are test-bench numbers.',
    make: makeBoss({ hpX: 40, atkX: 2.2, defX: 1.2 })
  });
  S.registerBoss('bossHard', {
    name: 'Hard boss', conf: 'estimated', note: 'The generic boss with 2.8x ATK: a level-matched team survives only some of the time, so healing, shields and damage cuts decide the fight.',
    make: makeBoss({ hpX: 40, atkX: 2.8, defX: 1.2 })
  });
  S.registerBoss('waves', {
    name: 'Three waves', conf: 'estimated', note: 'Three waves of five mobs (4x hero HP, 0.6x ATK), the last led by an elite (20x HP). Stand-in for Goblin Lair style stages.',
    make: function (e) {
      var mob = scaled(e, { hpX: 4, atkX: 0.6, defX: 1.0 });
      var elite = scaled(e, { hpX: 20, atkX: 1.5, defX: 1.2 });
      var mk = function (n, st, k) { var w = []; for (var i = 0; i < n; i++) w.push(unitSpec('Mob ' + (i + 1), st, { kit: k, res: e.res || 0 })); return w; };
      var mobKit = { conf: 'preset', basic: function (u, b, t) { b.hit(u, t, { atk: 1.0 }, { tag: 'basic' }); } };
      var w3 = mk(4, mob, mobKit);
      w3.unshift(unitSpec('Elite', elite, { isBoss: true, controlImmune: true, kit: bossKit({ skillMult: 1.6, chainMult: 1.2, ultMult: 2.0 }), res: 30 }));
      return { waves: [mk(5, mob, mobKit), mk(5, mob, mobKit), w3] };
    }
  });

  S.refStats = refStats;
  S.enemyUnit = unitSpec;
  S.bossKit = bossKit;
})(typeof window !== 'undefined' ? window : globalThis);
