/*
 * Season 1 dungeon bosses for DHSim, with their mechanics.
 *
 * Mechanics (what each skill does, who it targets, the 6 s skill rhythm) come
 * from the official boss pages on dragonheir.info (articles 836, 841, 846, 851,
 * 855; 2025-09-10) and HellHades (2025-07-30), summarised in
 * research/bosses.md. NUMBERS ARE NOT PUBLISHED ANYWHERE: HP, ATK, DEF and
 * every skill multiplier here are estimates on the same scale as the generic
 * boss (a level-matched reference hero x multipliers), scaled again by the
 * bossPower rule. Every preset lists its skills with the target rule, so the
 * UI can show who gets hit.
 *
 * enemy options: {preset, level, hpX, atkX, defX, res, acc, stage9}
 */
(function (root) {
  var S = root.DHSim || (typeof require !== 'undefined' ? require('./sim.js') : null);

  // ---- target rules (explicit per skill)
  var PICK = {
    // Front line first (melee heroes), the boss keeps its target until it dies; taunt wins.
    front: function (b, u) { return b.target(u); },
    random: function (b, u) { var e = b.targetable(u); return e[Math.floor(b.rand() * e.length)]; },
    highestAtk: function (b, u) { var e = b.targetable(u), best = null; e.forEach(function (x) { if (!best || b.atk(x) > b.atk(best)) best = x; }); return best; },
    // "Farthest from the boss": the back line (ranged heroes), random among them.
    farthest: function (b, u) {
      var e = b.targetable(u), back = e.filter(function (x) { return !x.melee; });
      var pool = back.length ? back : e;
      return pool[Math.floor(b.rand() * pool.length)];
    },
    lowestHp: function (b, u) { return b.lowestHp(b.targetable(u)); }
  };
  var TARGET_TEXT = { front: 'Front line (tank first)', random: 'Random hero', highestAtk: 'Highest ATK hero', farthest: 'Farthest hero (back line)', all: 'All heroes', area: 'Target + up to 2 nearby', self: 'Self', lowestHp: 'Lowest HP hero' };

  function scaled(e, d) {
    var r = S.refStats(e.level || 60);
    return { hp: r.hp * (e.hpX || d.hpX), atk: r.atk * (e.atkX == null ? d.atkX : e.atkX), def: r.def * (e.defX || d.defX) };
  }
  function boss(name, st, e, kit) {
    return S.enemyUnit(name, st, { isBoss: true, controlImmune: true, kit: kit, res: e.res == null ? 30 : e.res, acc: e.acc == null ? 30 : e.acc });
  }
  // A cycle kit: one skill every `step` s through the list, driven by the
  // boss's energy bar (energy drain and Recharging Speed Penalty delay it).
  function cycleKit(o) {
    var step = o.step || 6;
    return {
      conf: 'preset', ultFull: step, ultFirst: step,
      basic: o.basic || function (u, b, t) { b.hit(u, t, { atk: 1.0 }, { tag: 'basic' }); },
      ult: function (u, b) {
        var list = o.skills(u, b);
        var i = u.flags.cyc = ((u.flags.cyc == null ? -1 : u.flags.cyc) + 1) % list.length;
        u.flags.lastSkill = list[i].name;
        b.tr('bs', { s: u.uid, n: list[i].name });
        list[i].fn(u, b);
      },
      init: o.init
    };
  }
  function summon(b, u, spec) {
    var w = b.addUnit('B', spec, spec.extra);
    if (w.kit.init) w.kit.init(w, b);
    b.tr('sp', { g: w.uid, s: u.uid, n: w.name });
    return w;
  }
  var idle = { conf: 'preset', basic: function () {} };
  function skill(name, target, text, fn) { return { name: name, target: target, text: text, fn: fn }; }
  function info(list) { return list.map(function (s) { return { name: s.name, target: s.target, targetText: TARGET_TEXT[s.target] || s.target, text: s.text }; }); }

  // ------------------------------------------------ Grave of Venom: Deadly Harpy
  var HARPY = [
    skill('Poisonous Fletching', 'area', 'Area hit, dispels 1 buff from each hero hit, summons up to 2 Wisps.', null),
    skill("Harpy's Breath", 'front', 'Chain of 4 heavy hits on one hero: the tank killer.', null),
    skill("Harpy's Wrath", 'all', 'Hits every hero and shields every enemy unit.', null)
  ];
  S.registerBoss('harpy', {
    name: 'Deadly Harpy', dungeon: 'Grave of Venom', conf: 'estimated',
    note: 'Mechanics from the official boss page (dragonheir.info 851, 2025-09-10). Numbers are estimates: 35x hero HP, 2.6x ATK; Wisps 2.5x HP.',
    skills: info(HARPY),
    mechanics: ['Single-target attacks may call the Wisps to assist (less likely the more debuffs they carry).', 'A dying Wisp deals True damage to the Harpy (2% of its max HP, estimated).', 'Counters: Attack Penalty, Damage Reduction, healing on the tank.'],
    make: function (e) {
      var st = scaled(e, { hpX: 35, atkX: 2.6, defX: 1.2 });
      var wispSt = scaled(e, { hpX: 2.5, atkX: 0.9, defX: 0.8 });
      var wispKit = { conf: 'preset', basic: function () {}, init: function (w, b) { w.flags.wisp = true; } };
      function wisp(i) { return S.enemyUnit('Wisp', wispSt, { kit: wispKit, melee: false, res: e.res == null ? 30 : e.res }); }
      function wisps(b) { return b.units.filter(function (x) { return x.side === 'B' && x.alive && x.flags.wisp; }); }
      var kit = cycleKit({
        basic: function (u, b, t) {
          b.hit(u, t, { atk: 1.0 }, { tag: 'basic' });
          // Shadow Poison: Wisps assist single-target attacks.
          wisps(b).forEach(function (w) {
            var p = Math.max(0, 0.6 - 0.15 * b.countDebuffs(w));
            if (t.alive && b.chance(p)) b.hit(w, t, { atk: 0.8 }, { tag: 'basic' });
          });
        },
        skills: function () {
          HARPY[0].fn = function (u, b) {
            var t = b.target(u); if (!t) return;
            b.area(u, t, 3).forEach(function (x) { b.dispel(x, 1, 'buff'); b.hit(u, x, { atk: 1.8 }, { tag: 'battle' }); });
            var n = Math.min(2, 4 - wisps(b).length);
            for (var i = 0; i < n; i++) summon(b, u, wisp(i));
          };
          HARPY[1].fn = function (u, b) {
            var t = PICK.front(b, u);
            for (var i = 0; i < 4 && t && t.alive; i++) b.hit(u, t, { atk: 1.3 }, { tag: 'battle' });
          };
          HARPY[2].fn = function (u, b) {
            b.enemies(u).forEach(function (x) { b.hit(u, x, { atk: 1.5 }, { tag: 'ult' }); });
            b.units.filter(function (x) { return x.side === 'B' && x.alive; }).forEach(function (x) { b.shield(u, x, x === u ? 0.04 * b.maxHp(u) : 0.3 * b.maxHp(x), 10, { tag: 'boss' }); });
          };
          return HARPY;
        },
        init: function (u, b) {
          b.on(null, 'death', function (d) { if (d.tgt.flags.wisp && u.alive) b.hit(d.tgt, u, 0.02 * b.maxHp(u), { trueDmg: true, noCrit: true, tag: 'wisp', quiet: true }); });
        }
      });
      return { units: [boss('Deadly Harpy', st, e, kit)] };
    }
  });

  // ------------------------------------------ Grave of Curse: Blood Prince Xenos
  var XENOS = [
    skill('Rage of Blood', 'self', 'Attack Up for 12 s.', null),
    skill('Vampiric Shield', 'front', 'Big hit on one hero; the damage becomes his shield.', null),
    skill('Punishment of Blood', 'all', 'Dispels 1 buff from each hero, then hits everyone (more on unbuffed heroes from stage 9).', null)
  ];
  S.registerBoss('xenos', {
    name: 'Blood Prince Xenos', dungeon: 'Grave of Curse', conf: 'estimated',
    note: 'Mechanics from the official boss page (dragonheir.info 855, 2025-09-10). Numbers are estimates: 40x hero HP, 2.6x ATK; lifesteal 15% and max HP cut 25% of HP damage (capped at 40%).',
    skills: info(XENOS),
    mechanics: ['Blood Gush: HP damage he deals heals him and lowers the hero\'s max HP (shields block it).', 'Lower max HP also lowers how much a hero can be healed.', 'Counters: shields, buffs (from stage 9), burst damage.'],
    make: function (e) {
      var st = scaled(e, { hpX: 40, atkX: 2.6, defX: 1.2 });
      var kit = cycleKit({
        skills: function () {
          XENOS[0].fn = function (u, b) { b.buff(u, u, 'Attack Up', 12, null, { value: 0.3 }); };
          XENOS[1].fn = function (u, b) {
            var t = PICK.front(b, u); if (!t) return;
            var r = b.hit(u, t, { atk: 3.2 }, { tag: 'battle' });
            if (r.amount > 0) b.shield(u, u, r.amount, 12, { tag: 'boss' });
          };
          XENOS[2].fn = function (u, b) {
            b.enemies(u).forEach(function (x) {
              b.dispel(x, 1, 'buff');
              var bare = !x.sts.some(function (s) { return s.kind === 'buff'; });
              b.hit(u, x, { atk: 1.5 }, { tag: 'ult', bonus: e.stage9 && bare ? 0.5 : 0 });
            });
          };
          return XENOS;
        },
        init: function (u, b) {
          b.on(u, 'hpLost', function (d) {
            if (d.src !== u || d.tgt.side === u.side) return;
            b.heal(u, u, 0.15 * d.amount, { tag: 'boss' });
            var t = d.tgt;
            t.maxHpCut = Math.min(0.4 * t.maxHp0, (t.maxHpCut || 0) + 0.25 * d.amount);
            t.hp = Math.min(t.hp, b.maxHp(t));
          });
        }
      });
      return { units: [boss('Blood Prince Xenos', st, e, kit)] };
    }
  });

  // ------------------------------------------- Grave of Rot: Colossal Scavenger
  var ROT = [
    skill('Putrid Breath', 'all', 'Hits every hero; Poison (more stacks with Corruption) and Recharging Speed Penalty.', null),
    skill('Rotting Assault', 'random', 'Puts 2 debuffs on a random hero, then area damage around them (more targets with Corruption).', null),
    skill('Greedy Hunt', 'front', 'Devours its target: damage every second and heals itself, more per Poison stack; ends when the boss takes enough damage.', null)
  ];
  S.registerBoss('scavenger', {
    name: 'Colossal Scavenger', dungeon: 'Grave of Rot', conf: 'estimated',
    note: 'Mechanics from the official boss page (dragonheir.info 836, 2025-09-10). Numbers are estimates: 45x hero HP (high sustain), 2.6x ATK before its permanent Attack Penalty.',
    skills: info(ROT),
    mechanics: ['Always under Attack Penalty (-25%).', 'Basic attacks may Poison.', 'Every debuff on it gives Corruption, which strengthens Putrid Breath and Rotting Assault.', 'Greedy Hunt ends early after the boss takes 6% of its max HP (estimated).'],
    make: function (e) {
      var st = scaled(e, { hpX: 45, atkX: 2.6, defX: 1.2 });
      var kit = cycleKit({
        basic: function (u, b, t) { b.hit(u, t, { atk: 1.0 }, { tag: 'basic', apply: [['Poison', 0.5, 8]] }); },
        skills: function () {
          ROT[0].fn = function (u, b) {
            var stacks = 2 + Math.floor((u.flags.corr || 0) / 6);
            b.enemies(u).forEach(function (x) { b.hit(u, x, { atk: 1.1 }, { tag: 'ult', apply: [['Poison', 0.8, 8, { stacks: stacks }], ['Recharging Speed Penalty', 0.6, 6]] }); });
          };
          ROT[1].fn = function (u, b) {
            var t = PICK.random(b, u); if (!t) return;
            b.apply(u, t, 'Defense Penalty I', 1, 8);
            b.apply(u, t, 'Healing Reduction', 1, 8);
            b.area(u, t, 2 + Math.floor((u.flags.corr || 0) / 8)).forEach(function (x) { b.hit(u, x, { atk: 1.6 }, { tag: 'battle' }); });
          };
          ROT[2].fn = function (u, b) {
            var t = PICK.front(b, u); if (!t) return;
            if (!b.apply(u, t, 'Devoured', 1, 6, { ignoreRes: true })) return;
            var start = u.rec.taken, hunt = { on: true };
            for (var i = 1; i <= 6; i++) b.after(i, function () {
              if (!hunt.on || !t.alive || !u.alive) return;
              if (u.rec.taken - start >= 0.06 * b.maxHp(u)) { hunt.on = false; b.remove(t, 'Devoured'); return; }
              b.hit(u, t, { atk: 0.5 }, { tag: 'battle' });
              b.heal(u, u, (0.005 + 0.001 * b.stacks(t, 'Poison')) * b.maxHp(u), { tag: 'boss' });
            }, u);
          };
          return ROT;
        },
        init: function (u, b) {
          u.s.atkP -= 0.25;
          u.flags.corr = 0;
          b.on(u, 'debuffApplied', function (d) { if (d.tgt === u) u.flags.corr = Math.min(30, u.flags.corr + 1); });
        }
      });
      return { units: [boss('Colossal Scavenger', st, e, kit)] };
    }
  });

  // -------------------------------- Ancient Battlefield: Soul Devourer Gruentius
  var GRU = [
    skill("Berserker's Wrath (Shield)", 'farthest', 'Stuns the farthest hero 4 s. If the stun misses, the boss Backfires: -30% damage dealt, +30% taken for 8 s.', null),
    skill('Devouring Shadows (Shield)', 'self', 'Switches to Sword Form and gains Attack Up.', null),
    skill("Berserker's Wrath (Sword)", 'highestAtk', 'Huge hit on the hero with the highest ATK.', null),
    skill('Devouring Shadows (Sword)', 'all', 'Hits everyone and dispels ALL their buffs; gains permanent damage per buff dispelled; back to Shield Form with Defense Up.', null)
  ];
  S.registerBoss('gruentius', {
    name: 'Soul Devourer Gruentius', dungeon: 'Ancient Battlefield', conf: 'estimated',
    note: 'Mechanics from the official boss page (dragonheir.info 841, 2025-09-10). Numbers are estimates: 40x hero HP, 2.2x ATK.',
    skills: info(GRU),
    mechanics: ['Shield Form: basic attacks hit every hero (small).', 'Sword Form: basic attacks are heavy single hits.', 'Resistance on the back line makes the stun miss, which weakens the boss.'],
    make: function (e) {
      var st = scaled(e, { hpX: 40, atkX: 2.2, defX: 1.2 });
      var kit = cycleKit({
        basic: function (u, b, t) {
          if (u.flags.sword) b.hit(u, t, { atk: 1.6 }, { tag: 'basic' });
          else b.enemies(u).forEach(function (x) { b.hit(u, x, { atk: 0.4 }, { tag: 'basic' }); });
        },
        skills: function () {
          GRU[0].fn = function (u, b) {
            var t = PICK.farthest(b, u); if (!t) return;
            if (!b.apply(u, t, 'Stunned', 1, 4)) b.buff(u, u, 'Backfire', 8, { dmgBonus: -0.3, vuln: 0.3 });
          };
          GRU[1].fn = function (u, b) { u.flags.sword = true; b.buff(u, u, 'Attack Up', 12, null, { value: 0.3 }); };
          GRU[2].fn = function (u, b) { var t = PICK.highestAtk(b, u); if (t) b.hit(u, t, { atk: 3.0 }, { tag: 'battle' }); };
          GRU[3].fn = function (u, b) {
            var n = 0;
            b.enemies(u).forEach(function (x) { n += b.dispel(x, 99, 'buff'); b.hit(u, x, { atk: 1.4 }, { tag: 'ult' }); });
            u.s.dmgBonus += 0.02 * n;
            u.flags.sword = false;
            b.buff(u, u, 'Defense Up II', 12);
          };
          return GRU;
        }
      });
      return { units: [boss('Soul Devourer Gruentius', st, e, kit)] };
    }
  });

  // --------------------------------------- Heretical Ruins: Dead Phoenix - Fyre
  var FYRE = [
    skill('Scorch', 'front', 'Single hit that splashes to every Burned hero.', null),
    skill('Nirvana', 'self', 'Hatches 2 eggs; while they live the Phoenix is Invisible and the eggs heal it.', null),
    skill('Fire of Dead Phoenix', 'all', 'Heavy hit on every hero and Burn on all.', null)
  ];
  S.registerBoss('fyre', {
    name: 'Dead Phoenix - Fyre', dungeon: 'Heretical Ruins', conf: 'estimated',
    note: 'Mechanics from the official boss page (dragonheir.info 846, 2025-09-10). Numbers are estimates: 35x hero HP, 2.2x ATK; eggs 2.5x hero HP, each heals 0.5% of the boss max HP per second; hatches at most every 36 s; Invisible up to 12 s.',
    skills: info(FYRE),
    mechanics: ['While eggs live the boss is Invisible: heroes must kill the eggs first.', 'Burn stacks on heroes make Scorch splash.', 'Counters: area damage for the eggs, cleanse for Burn.'],
    make: function (e) {
      var st = scaled(e, { hpX: 35, atkX: 2.2, defX: 1.2 });
      var eggSt = scaled(e, { hpX: 2.5, atkX: 0, defX: 1.0 });
      var eggKit = { conf: 'preset', basic: function () {}, init: function (w) { w.flags.egg = true; } };
      function eggs(b) { return b.units.filter(function (x) { return x.side === 'B' && x.alive && x.flags.egg; }); }
      var kit = cycleKit({
        skills: function () {
          FYRE[0].fn = function (u, b) {
            var t = PICK.front(b, u); if (!t) return;
            b.hit(u, t, { atk: 2.4 }, { tag: 'battle' });
            b.enemies(u).forEach(function (x) { if (x !== t && b.has(x, 'Burn')) b.hit(u, x, { atk: 0.8 }, { tag: 'battle' }); });
          };
          FYRE[1].fn = function (u, b) {
            // Hatches at most every 36 s (estimated); otherwise it uses Scorch.
            if (eggs(b).length || b.t - (u.flags.hatchT || -99) < 36) { FYRE[0].fn(u, b); return; }
            u.flags.hatchT = b.t;
            for (var i = 0; i < 2; i++) summon(b, u, S.enemyUnit('Phoenix Egg', eggSt, { kit: eggKit, melee: false }));
            b.apply(u, u, 'Invisibility', 1, 12);
          };
          FYRE[2].fn = function (u, b) { b.enemies(u).forEach(function (x) { b.hit(u, x, { atk: 1.5 }, { tag: 'ult', apply: [['Burn', 0.9, 8, { stacks: 2 }]] }); }); };
          return FYRE;
        },
        init: function (u, b) {
          b.on(u, 'second', function (s) {
            if (s.u !== u) return;
            var n = eggs(b).length;
            if (n) b.heal(u, u, 0.005 * n * b.maxHp(u), { tag: 'boss' });
            else if (b.has(u, 'Invisibility')) b.remove(u, 'Invisibility');
          });
        }
      });
      return { units: [boss('Dead Phoenix - Fyre', st, e, kit)] };
    }
  });

  // Generic boss gets its skill list too, for the UI.
  var gen = S.bosses().boss, hard = S.bosses().bossHard;
  var GEN = [
    { name: 'Area strike', target: 'area', targetText: TARGET_TEXT.area, text: 'Hits its target and up to 2 nearby heroes.' },
    { name: 'Triple strike', target: 'front', targetText: TARGET_TEXT.front, text: '3 heavy hits on its target.' },
    { name: 'Wave', target: 'all', targetText: TARGET_TEXT.all, text: 'Hits every hero.' }
  ];
  if (gen) gen.skills = GEN;
  if (hard) hard.skills = GEN;

  S.TARGET_TEXT = TARGET_TEXT;
})(typeof window !== 'undefined' ? window : globalThis);
