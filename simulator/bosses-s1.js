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
    var r = S.refStats(e.level || 60), f = e._sf || 1;
    return { hp: r.hp * (e.hpX || d.hpX) * f, atk: r.atk * (e.atkX == null ? d.atkX : e.atkX) * f, def: r.def * (e.defX || d.defX) };
  }

  // ---- stages (the number you pick in game)
  // Boss level per stage comes from official screenshots (research/bosses.md:
  // Venom 8 -> Lv100, Ruins 7 -> Lv145, Battlefield 7 -> Lv160, Goblin 9 ->
  // Lv100). The presets are tuned so a team of level L wins with HP to spare
  // against a boss of level L + 40 (Venom 8 at level 60 is normal day-4
  // content, dragonheir.info 570). Each 10 boss levels above or below that
  // multiplies boss HP and ATK by 1.12 (estimated: hero stat growth per 10
  // levels near level 100). Domain and Vortex levels are not published.
  var STAGES = {
    harpy: { label: 'Stage', min: 1, max: 15, lv: function (s) { return 20 + 10 * s; } },
    xenos: { label: 'Stage', min: 1, max: 15, lv: function (s) { return 20 + 10 * s; } },
    scavenger: { label: 'Stage', min: 1, max: 15, lv: function (s) { return 20 + 10 * s; } },
    fyre: { label: 'Stage', min: 1, max: 9, lv: function (s) { return 5 + 20 * s; } },
    gruentius: { label: 'Stage', min: 1, max: 10, lv: function (s) { return 20 + 20 * s; } },
    goblin: { label: 'Stage', min: 1, max: 12, lv: function (s) { return 10 + 10 * s; } },
    flameDomain: { label: 'Stage', min: 1, max: 9, lv: function (s) { return 40 + 15 * s; } },
    tempestDomain: { label: 'Stage', min: 1, max: 9, lv: function (s) { return 40 + 15 * s; } },
    frostDomain: { label: 'Stage', min: 1, max: 9, lv: function (s) { return 40 + 15 * s; } },
    vortex: { label: 'Difficulty', min: 1, max: 4, lv: function (s) { return 40 + 20 * s; } }
  };
  function stageFactor(id, e) {
    var st = STAGES[id];
    if (!st || e.stage == null) return 1;
    var lv = st.lv(Math.max(st.min, Math.min(st.max, +e.stage)));
    return Math.max(0.25, Math.min(5, Math.pow(1.12, (lv - ((e.level || 60) + 40)) / 10)));
  }
  // The stage a team of this level fights at "normal" strength.
  function normalStage(id, level) {
    var st = STAGES[id]; if (!st) return null;
    var best = st.min, gap = 1e9;
    for (var s = st.min; s <= st.max; s++) { var g = Math.abs(st.lv(s) - ((level || 60) + 40)); if (g < gap) { gap = g; best = s; } }
    return best;
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

  // ----------------------------------------------- Goblin Lair (EXP / Gold)
  // 6 waves of goblins, no boss, "they don't hit very hard" (dragonheir.info
  // 584/587, 2025-06-26). Legacy difficulty 5 at team level ~60: the team
  // dealt 718,268 damage in 58 s, so the whole lair is about 60x a hero's HP:
  // 6 waves x 5 goblins x 2x hero HP. Stars: 3 if more than 50 s left, 2 if
  // more than 25 s left. Time limit not published: 120 s (estimated).
  S.registerBoss('goblin', {
    name: 'Goblin waves', dungeon: 'Goblin Lair', conf: 'estimated', seconds: 120,
    stars: [[50, 3], [25, 2], [0, 1]],
    note: 'Structure from dragonheir.info 584/587 (2025-06-26): 6 waves, no boss, rewards by clear speed. Size from the legacy difficulty 5 statistics screen (718k damage in 58 s at level 60). Time limit 120 s is an estimate.',
    skills: [{ name: 'Goblin attacks', target: 'front', targetText: TARGET_TEXT.front, text: 'Weak hits, mostly on the front line.' }],
    mechanics: ['6 waves of 5 goblins, no boss.', 'Clear speed decides the stars: 3 stars with more than 50 s left.', 'Area damage heroes clear it fastest; a tank is optional.'],
    make: function (e) {
      var gob = scaled(e, { hpX: 2, atkX: 0.35, defX: 0.9 });
      var kit = { conf: 'preset', basic: function (u, b, t) { b.hit(u, t, { atk: 1.0 }, { tag: 'basic' }); } };
      var waves = [];
      for (var w = 0; w < 6; w++) {
        var list = [];
        for (var i = 0; i < 5; i++) list.push(S.enemyUnit('Goblin ' + (w + 1) + '-' + (i + 1), gob, { kit: kit, melee: i < 3, res: e.res || 0 }));
        waves.push(list);
      }
      return { waves: waves };
    }
  });

  // Talent dungeons: each boss counters two elements. "X heroes deal less
  // damage and take more damage" (dragonheir.info 584); the size is not
  // published: -30% dealt, +30% taken (estimated).
  var DOMAIN_PEN = 0.3;
  function counterElements(b, els, alsoHaste) {
    b.units.forEach(function (x) {
      if (x.side !== 'A' || !x.h || els.indexOf(x.h.el) < 0) return;
      x.s.dmgBonus = (x.s.dmgBonus || 0) - DOMAIN_PEN;
      x.s.vuln = (x.s.vuln || 0) + DOMAIN_PEN;
      x.flags.countered = true;
    });
  }

  // ---------------------------- Flame Domain (Talent - Wildfire): Searing Lord
  var FLAME = [
    skill('Searing Strike', 'front', 'Heavy hit with Burn on its target.', null),
    skill('Flame Wave', 'all', 'Hits every hero and puts Burn on them.', null),
    skill('Inferno', 'all', 'Ultimate: hits everyone, more for every Burn stack on the team.', null)
  ];
  S.registerBoss('flameDomain', {
    name: 'Searing Lord', dungeon: 'Flame Domain', altName: 'Talent - Wildfire', conf: 'estimated',
    note: 'Mechanics from dragonheir.info 584 and 589 (2025-06-26): counters Fire and Poison heroes, Burn from the first two skills, Ultimate scales with all Burn stacks. Numbers are estimates: 35x hero HP, 2.6x ATK, countered heroes -30% damage dealt and +30% taken.',
    skills: info(FLAME),
    mechanics: ['Fire and Poison heroes deal less and take more damage here.', 'Every Burn stack on your team makes the Ultimate bigger.', 'Counters: Debuff Immunity, cleanse, Defense Up.'],
    make: function (e) {
      var st = scaled(e, { hpX: 35, atkX: 2.6, defX: 1.2 });
      var kit = cycleKit({
        skills: function () {
          FLAME[0].fn = function (u, b) { var t = PICK.front(b, u); if (t) b.hit(u, t, { atk: 2.4 }, { tag: 'battle', apply: [['Burn', 0.9, 8, { stacks: 2 }]] }); };
          FLAME[1].fn = function (u, b) { b.enemies(u).forEach(function (x) { b.hit(u, x, { atk: 0.9 }, { tag: 'battle', apply: [['Burn', 0.8, 8]] }); }); };
          FLAME[2].fn = function (u, b) {
            var n = 0; b.enemies(u).forEach(function (x) { n += b.stacks(x, 'Burn'); });
            b.enemies(u).forEach(function (x) { b.hit(u, x, { atk: 1.0 + 0.12 * n }, { tag: 'ult' }); });
          };
          return FLAME;
        },
        init: function (u, b) { counterElements(b, ['Fire', 'Poison']); }
      });
      return { units: [boss('Searing Lord', st, e, kit)] };
    }
  });

  // ------------------------ Tempest Domain (Talent - Resplendence): Lord of Lightning
  var TEMPEST = [
    skill('Thunder Strike', 'front', 'Heavy hit on its target.', null),
    skill('Chain Lightning', 'random', 'Hits a random hero and jumps to 2 more.', null),
    skill('Brood of Storms', 'self', 'Ultimate: hurts itself, then 5 hatchlings land 3 s later. Each living hatchling gives the boss +10% damage (max +50%).', null)
  ];
  S.registerBoss('tempestDomain', {
    name: 'Lord of Lightning', dungeon: 'Tempest Domain', altName: 'Talent - Resplendence', conf: 'estimated',
    note: 'Mechanics from dragonheir.info 584 and 590 (2025-06-26): counters Lightning and Radiance heroes; every heal gives BOTH sides stacking skill acceleration; the Ultimate hurts the boss and drops 5 hatchlings, living hatchlings raise boss damage by 50%. Numbers are estimates: 35x hero HP, 2.5x ATK, +3% recharge per heal stack (max 20 stacks), self-damage 5% max HP.',
    skills: info(TEMPEST),
    mechanics: ['Lightning and Radiance heroes deal less and take more damage here.', 'Every heal speeds up skills on both sides: more healers = faster fight, but the boss attacks more often.', 'Kill the hatchlings fast: while they live the boss hits harder.'],
    make: function (e) {
      var st = scaled(e, { hpX: 35, atkX: 2.5, defX: 1.2 });
      var hatchSt = scaled(e, { hpX: 1.2, atkX: 0.5, defX: 0.8 });
      var hatchKit = { conf: 'preset', basic: function (u, b, t) { b.hit(u, t, { atk: 1.0 }, { tag: 'basic' }); }, init: function (w) { w.flags.hatch = true; } };
      function hatchlings(b) { return b.units.filter(function (x) { return x.side === 'B' && x.alive && x.flags.hatch; }); }
      var kit = cycleKit({
        skills: function () {
          TEMPEST[0].fn = function (u, b) { var t = PICK.front(b, u); if (t) b.hit(u, t, { atk: 2.6 }, { tag: 'battle', bonus: 0.1 * hatchlings(b).length }); };
          TEMPEST[1].fn = function (u, b) {
            var t = PICK.random(b, u); if (!t) return;
            b.area(u, t, 3).forEach(function (x) { b.hit(u, x, { atk: 1.3 }, { tag: 'battle', bonus: 0.1 * hatchlings(b).length }); });
          };
          TEMPEST[2].fn = function (u, b) {
            b.damage(u, 0.05 * b.maxHp(u), null, { tag: 'self' });
            b.after(3, function () { for (var i = 0; i < 5; i++) if (hatchlings(b).length < 5) summon(b, u, S.enemyUnit('Hatchling', hatchSt, { kit: hatchKit, melee: false })); }, u);
          };
          return TEMPEST;
        },
        init: function (u, b) {
          counterElements(b, ['Lightning', 'Radiance']);
          var stacks = 0;
          b.on(null, 'healed', function (d) {
            if (stacks >= 20 || d.amount <= 0 || d.o.tag === 'boss') return;
            stacks++;
            b.units.forEach(function (x) { x.s.rechargeUp = (x.s.rechargeUp || 0) + 0.03; });
          });
        }
      });
      return { units: [boss('Lord of Lightning', st, e, kit)] };
    }
  });

  // ------------------------- Frost Domain (Talent - Permafrost): Lady of Frostthorn
  var FROST = [
    skill('Frostbite', 'all', 'Attack Penalty on every hero (cleanse it or use Debuff Immunity).', null),
    skill('Ice Lance', 'front', 'Heavy hit on its target.', null),
    skill('Frozen Domain', 'all', 'Ultimate: hits everyone and Stuns them 5 s.', null)
  ];
  S.registerBoss('frostDomain', {
    name: 'Lady of Frostthorn', dungeon: 'Frost Domain', altName: 'Talent - Permafrost', conf: 'estimated',
    note: 'Mechanics from dragonheir.info 584 and 591 (2025-06-26): counters Ice and Necrosis heroes; gains Damage Reduction each time she lands a debuff; first skill lowers your attack; Ultimate is an area Stun for 5 s. Numbers are estimates: 35x hero HP, 2.5x ATK, +4% Damage Reduction per debuff landed (max 40%, lost when she is hit 10 times).',
    skills: info(FROST),
    mechanics: ['Ice and Necrosis heroes deal less and take more damage here.', 'Each debuff she lands gives her Damage Reduction; many fast hits strip it.', 'Ultimate stuns the whole team for 5 s: Control Immunity helps.'],
    make: function (e) {
      var st = scaled(e, { hpX: 35, atkX: 2.5, defX: 1.2 });
      var kit = cycleKit({
        skills: function () {
          FROST[0].fn = function (u, b) { b.enemies(u).forEach(function (x) { b.hit(u, x, { atk: 0.8 }, { tag: 'battle', apply: [['Attack Penalty II', 0.85, 10]] }); }); };
          FROST[1].fn = function (u, b) { var t = PICK.front(b, u); if (t) b.hit(u, t, { atk: 2.8 }, { tag: 'battle' }); };
          FROST[2].fn = function (u, b) { b.enemies(u).forEach(function (x) { b.hit(u, x, { atk: 1.2 }, { tag: 'ult', apply: [['Stunned', 0.75, 5]] }); }); };
          return FROST;
        },
        init: function (u, b) {
          counterElements(b, ['Ice', 'Necrosis']);
          var dr = 0, hits = 0;
          b.on(null, 'debuffApplied', function (d) { if (d.src === u && d.tgt.side === 'A' && dr < 0.4) { dr += 0.04; u.s.dmgRed = (u.s.dmgRed || 0) + 0.04; } });
          b.on(null, 'hit', function (d) {
            if (d.tgt !== u || dr <= 0 || ++hits < 10) return;
            hits = 0; u.s.dmgRed -= dr; dr = 0;
          });
        }
      });
      return { units: [boss('Lady of Frostthorn', st, e, kit)] };
    }
  });

  // ------------------------------------------- Temporal Vortex (S1): Sea King
  // Daily score boss: the score is the damage dealt before the team falls.
  // S1/Beginner boss Sea King: "Call of Lightning" hits the hero with the
  // highest HP and grows over the fight (dragonheir.info 570, 1149, 1597;
  // guides stack 60-70k HP on one hero to take it). Skill every 5 s (20 s
  // cycle, HellHades 2025-07-30). "Early boss attack damage is pretty low"
  // (dragonheir.info 586). Good teams survive about 8 minutes (1597).
  // CALIBRATED 2026-10-25 on Darko's in-game Statistics screen (Difficulty I,
  // 8:00, nobody died; Lv59 Auster/Hvitar/Hochadir/Oggok/Ergander, total
  // 5,533,656; damage taken 150-240k on EVERY hero, Oggok healing 695k):
  // boss DEF 0.6x, takes +30% damage, ATK 4.0x, Riptide 350% on all,
  // Call of Lightning 200%, basics and Tidal Slam on random heroes (taunt
  // wins), +4% damage per 20 s cycle. The sim now gives 5.53M with every
  // hero within 20% of the game. One fight only: re-check with more.
  var VORTEX = [
    skill('Tidal Slam', 'random', 'Hit on a random hero (the taunter while Taunt lasts).', null),
    skill('Call of Lightning', 'highestHp', 'Hits the hero with the HIGHEST HP; grows stronger every cycle.', null),
    skill('Riptide', 'all', 'Hits every hero: most of the damage in this fight.', null),
    skill('Call of Lightning', 'highestHp', 'Again on the highest-HP hero.', null)
  ];
  TARGET_TEXT.highestHp = 'Highest HP hero';
  S.registerBoss('vortex', {
    name: 'Sea King', dungeon: 'Temporal Vortex', conf: 'estimated', seconds: 480, score: true,
    note: 'Score boss: the result is total damage before the team falls or 8 minutes pass. Mechanics from dragonheir.info 570, 586, 1149, 1597: Call of Lightning on the highest-HP hero, damage low early and rising. Numbers calibrated on one real in-game fight (Difficulty I, Lv59 team, 5.53M): boss cannot die, hits spread over all heroes, Riptide is the main damage, +4% damage per 20 s cycle.',
    skills: info(VORTEX),
    mechanics: ['Score = damage dealt. The fight goes on until your team falls (or 8 minutes).', 'Call of Lightning always hits your highest-HP hero: give one tanky hero the most HP.', 'The boss gets stronger every 20 s.'],
    make: function (e) {
      var st = scaled(e, { hpX: 100000, atkX: 4.0, defX: 0.6 });
      function ramp(u, b) { return Math.pow(1.04, Math.floor(b.t / 20)) - 1; }
      function highestHp(b, u) { var best = null; b.targetable(u).forEach(function (x) { if (!best || b.maxHp(x) > b.maxHp(best)) best = x; }); return best; }
      var kit = cycleKit({
        step: 5,
        // Basic attacks spread over the team (CALIBRATED: in game every hero takes 16-26% of the damage).
        basic: function (u, b, t) { var x = b.has(u, 'Taunt') ? t : PICK.random(b, u); if (x) b.hit(u, x, { atk: 1.0 }, { tag: 'basic', bonus: ramp(u, b) }); },
        init: function (u) { u.flags.endless = true; u.s.vuln = (u.s.vuln || 0) + 0.3; },
        skills: function () {
          VORTEX[0].fn = function (u, b) { var t = b.has(u, 'Taunt') ? PICK.front(b, u) : PICK.random(b, u); if (t) b.hit(u, t, { atk: 1.8 }, { tag: 'battle', bonus: ramp(u, b) }); };
          VORTEX[1].fn = VORTEX[3].fn = function (u, b) { var t = highestHp(b, u); if (t) b.hit(u, t, { atk: 2.0 }, { tag: 'battle', bonus: ramp(u, b) }); };
          VORTEX[2].fn = function (u, b) { b.enemies(u).forEach(function (x) { b.hit(u, x, { atk: 3.5 }, { tag: 'ult', bonus: ramp(u, b) }); }); };
          return VORTEX;
        }
      });
      return { units: [boss('Sea King', st, e, kit)] };
    }
  });

  // Stages, S1 availability and what each dungeon drops, for every preset.
  var META = {
    harpy: { s1: true, farm: 'Weapons, helmets' }, xenos: { s1: true, farm: 'Armor' }, scavenger: { s1: true, farm: 'Gloves' },
    fyre: { s1: true, farm: 'Positive runes' }, gruentius: { s1: true, farm: 'Negative runes' },
    goblin: { s1: true, farm: 'EXP, Gold' }, flameDomain: { s1: true, farm: 'Talent Stones' }, tempestDomain: { s1: true, farm: 'Talent Stones' },
    frostDomain: { s1: true, farm: 'Talent Stones' }, vortex: { s1: true, farm: 'Daily score ranking' }
  };
  Object.keys(STAGES).forEach(function (id) {
    var p = S.bosses()[id]; if (!p) return;
    var make = p.make, st = STAGES[id];
    p.stages = { label: st.label, min: st.min, max: st.max, level: st.lv };
    p.s1 = META[id].s1; p.farm = META[id].farm;
    p.make = function (e, opts) {
      var c = {}; for (var k in e) c[k] = e[k];
      c._sf = stageFactor(id, e);
      return make(c, opts);
    };
  });
  S.stageFactor = stageFactor;
  S.normalStage = normalStage;

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
