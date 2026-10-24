/*
 * Extra hand-written hero kits for DHSim: the Frost and Ice Support heroes not
 * in kits.js, plus the Necrosis / Fire / Radiance Epics the player owns.
 * Translated from the official skill texts (data/sim-data.json, the same as
 * heroes-2025.json). Anything the text leaves open is marked ASSUMED.
 *
 * Kit shape: {battleCd, init(u,b), basic(u,b,tgt), battle(u,b), ult(u,b)}.
 * Skill multipliers are the printed values, read as the hero's current max
 * skill level (ASSUMED, as in kits.js).
 *
 * Load after sim.js and kits.js (node-loader.js does; a browser page needs a
 * <script> tag after them). Tests: tests/extra-ice.test.js.
 */
(function (root) {
  var S = root.DHSim || (typeof require !== 'undefined' ? require('../sim.js') : null);
  var COLD = 'Cold', FIRE = 'Fire', NEC = 'Necrotic', RAD = 'Radiant', DER = 'Derivative';
  var P = S.Battle.prototype;

  // ------------------------------------------------ helpers (as in kits.js) --
  function K(id, kit) { kit.conf = kit.conf || 'hand'; S.registerKit(id, kit); }
  function frac(b, u) { return u.hp / b.maxHp(u); }
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

  // ------------------------------------------------------- local helpers --
  function area(b, u) { return b.area(u, b.target(u)); }
  function rnd(b, list) { return list[Math.floor(b.rand() * list.length)]; }
  // Newest shield object on a unit (b.shield returns only the amount).
  function lastShield(t) { return t.shields[t.shields.length - 1] || null; }
  function hasShield(b, t, sh) { return !!sh && t.alive && t.shields.indexOf(sh) >= 0 && sh.amt > 0.01 && sh.until > b.t; }
  // Self buff whose stat mods follow the battle state (stack counts).
  function setMods(b, u, name, mods, on) {
    var s = b.has(u, name);
    if (!on) { if (s) b.remove(u, name); return; }
    if (s) s.mods = mods;
    else b.buff(u, u, name, 1e6, mods, { undispellable: true });
  }
  function isFrostHero(a) { return a.h && a.h.sc === 'Frost'; }
  // Status called "Attack Up" with no % in the text: ASSUMED the engine's fallback tier I value per stack.
  function attackUp(b) { return b.tierValue('Attack Up', 1); }

  // Statuses the engine tables do not list as hostile (Blind, Charmed) are
  // landed here with the same rules as B.apply: immunity, resistance check,
  // duration hooks, boss control reduction.
  function hostile(b, src, tgt, name, kind, chance, dur, extra) {
    extra = extra || {};
    if (!tgt || !tgt.alive || tgt.side === src.side) return false;
    if (b.has(tgt, 'Debuff Immunity') || (kind === 'control' && (b.has(tgt, 'Control Immunity') || tgt.controlImmune))) return false;
    var R = b.R;
    if (!b.chance(b.landChance(src, tgt, chance, extra.skill, extra.ignoreRes))) return false;
    var d = { src: src, tgt: tgt, name: name, base: name, dur: dur };
    b.emit('debuffDuration', d);
    dur = d.dur;
    if (kind === 'control' && tgt.isBoss) dur *= R.bossControlMult;
    if (dur <= 0) return false;
    var ex = b.has(tgt, name), already = !!ex;
    if (ex) { ex.until = Math.max(ex.until, b.t + dur); ex.src = src; }
    else tgt.sts.push({ base: name, name: name, kind: kind, tier: 0, until: b.t + dur, src: src });
    var ev = { src: src, tgt: tgt, name: name, base: name, kind: kind, already: already, skill: extra.skill };
    b.emit('statusApplied', ev);
    b.emit('debuffApplied', ev);
    return true;
  }
  // ASSUMED: Blind = the unit's basic attacks miss (deal 0 damage) while it lasts.
  function blind(b, src, tgt, chance, dur, extra) {
    if (!b.iceBlindHook) {
      b.iceBlindHook = true;
      b.on(null, 'modifyDamage', function (c) { if (c.o.tag === 'basic' && b.has(c.src, 'Blind')) c.raw = 0; });
    }
    return hostile(b, src, tgt, 'Blind', 'debuff', chance, dur, extra);
  }
  // ASSUMED: Charmed = a control effect; the unit cannot act (attacking its own
  // allies is not modelled).
  function charm(b, src, tgt, chance, dur, extra) { return hostile(b, src, tgt, 'Charmed', 'control', chance, dur, extra); }
  if (!P.iceCharmWrapped) {
    P.iceCharmWrapped = true;
    var origControlled = P.controlled;
    P.controlled = function (u) { return origControlled.call(this, u) || !!this.has(u, 'Charmed'); };
  }
  // ASSUMED: one stack of Recovery Over Time heals 4% of the holder's max HP per
  // second (same reading as Eurion in kits.js); stacks add up.
  function rot(b, src, tgt, dur) {
    if (!tgt || !tgt.alive) return;
    b.apply(src, tgt, 'Recovery Over Time', 1, dur);
    b.every(1, dur, function () { if (b.has(tgt, 'Recovery Over Time')) b.heal(src, tgt, { thp: 0.04 }, { tag: 'passive' }); }, tgt);
  }
  // ASSUMED: Hit Recovery heals the holder by 3% of its max HP each time it takes
  // damage, at most once per 1s; the heal is credited to whoever granted it.
  function hitRecovery(b, src, tgt, dur) {
    if (!tgt || !tgt.alive) return;
    b.apply(src, tgt, 'Hit Recovery', 1, dur);
    if (b.iceHitRecHook) return;
    b.iceHitRecHook = true;
    b.on(null, 'damaged', function (e) {
      var t = e.tgt, s = b.has(t, 'Hit Recovery');
      if (!s || !t.alive || (t.flags.hitRecT != null && b.t - t.flags.hitRecT < 1)) return;
      t.flags.hitRecT = b.t;
      b.heal(s.src || t, t, { thp: 0.03 }, { tag: 'passive' });
    });
  }

  // ================================================================ FROST ==

  // Rowena: vs Frosted enemies ignores 20% DEF, +1% per 5% Crit Rate (ASSUMED:
  // the Crit Rate part is capped at +20%, so up to 40% in total, and only
  // counts against Frosted enemies like the first part).
  K(21290, {
    init: function (u, b) {
      std(u, b);
      b.on(u, 'modifyDamage', function (c) {
        if (c.src !== u || !b.has(c.tgt, 'Frost')) return;
        c.defIgnore += 0.2 + Math.min(0.2, 0.01 * Math.floor(b.stat(u, 'critRate') / 0.05 + 1e-9));
      });
    },
    battle: function (u, b) {
      var t = b.lowestCurHp(b.enemies(u));
      if (t) b.hit(u, t, { atk: 3.65 }, { el: COLD, tag: 'battle', apply: [['Frost', 0.5, 10, { skill: 'battle' }]] });
    },
    ult: function (u, b) {
      area(b, u).forEach(function (t) { b.hit(u, t, { atk: b.has(t, 'Frost') ? 8.0 : 5.6 }, { el: COLD, tag: 'ult' }); });
    }
  });

  // Rava: one stack of Attack Up per Frosted enemy on the field, max 3.
  K(21620, {
    echo: function (u, b) {
      var n = Math.min(3, b.enemies(u).filter(function (e) { return b.has(e, 'Frost'); }).length);
      setMods(b, u, 'Icy Echo', { atkP: n * attackUp(b) }, n > 0);
    },
    init: function (u, b) {
      std(u, b);
      var self = this;
      b.on(u, 'second', function (e) { if (e.u === u) self.echo(u, b); });
      b.on(u, 'statusApplied', function (e) { if (e.base === 'Frost' && e.tgt.side !== u.side) self.echo(u, b); });
    },
    basic: function (u, b, t) { this.echo(u, b); b.hit(u, t, { atk: b.R.basicMult }, { el: COLD, tag: 'basic' }); },
    battle: function (u, b) {
      // ASSUMED: "at most 3 Orbs" = one orb per enemy, up to 3 different random
      // enemies (one orb against a single target).
      var pool = b.enemies(u).slice(), self = this;
      for (var i = 0; i < 3 && pool.length; i++) {
        var t = pool.splice(Math.floor(b.rand() * pool.length), 1)[0];
        self.echo(u, b);
        b.hit(u, t, { atk: 2.6 }, { el: COLD, tag: 'battle', apply: [['Frost', 0.75, 5, { skill: 'battle' }]] });
      }
    },
    ult: function (u, b) {
      // Nexus: 10s, a pulse every 1.5s (6 pulses: 1.5s ... 9s), explosion at 10s.
      var center = b.target(u), self = this;
      var spot = function () { if (!center || !center.alive) center = b.target(u); return center; };
      for (var k = 1; k * 1.5 <= 10 + 1e-9; k++) {
        b.after(k * 1.5, function () {
          if (!spot()) return;
          self.echo(u, b);
          b.area(u, center).forEach(function (t) { b.hit(u, t, { atk: 0.5 }, { el: COLD, tag: 'ult', apply: [['Frost', 0.75, 10, { skill: 'ult' }]] }); });
        }, u);
      }
      b.after(10, function () {
        if (!spot()) return;
        self.echo(u, b);
        b.area(u, center).forEach(function (t) { b.hit(u, t, { atk: 3.6 }, { el: COLD, tag: 'ult' }); });
      }, u);
    }
  });

  // Olgan: Vow to Defend. ASSUMED: "for 10s after being cast" = for 10s after
  // each battle skill or ultimate cast (a new cast refreshes the window); pulses
  // hit enemies within range around his target once per second.
  K(21910, {
    init: function (u, b) {
      std(u, b);
      u.flags.vowUntil = -1;
      b.on(u, 'afterCast', function (e) { if (e.src === u) u.flags.vowUntil = b.t + 10; });
      b.on(u, 'second', function (e) {
        if (e.u !== u || b.t > u.flags.vowUntil + 1e-9) return;
        area(b, u).forEach(function (t) { b.hit(u, t, { atk: 0.2 }, { el: COLD, tag: 'passive', apply: [['Frost', 1, 5]] }); });
      });
    },
    battle: function (u, b) {
      var t = b.target(u);
      if (!t) return;
      var frosted = !!b.has(t, 'Frost');
      b.hit(u, t, { atk: 3.3 }, { el: COLD, tag: 'battle' });
      if (frosted || b.has(t, 'Frost')) b.apply(u, t, 'Frozen', 1, 5, { skill: 'battle' });
    },
    ult: function (u, b) {
      area(b, u).forEach(function (t) { b.hit(u, t, { atk: 5.5 }, { el: COLD, tag: 'ult' }); });
      // ASSUMED: "Frost allies" = allies of the Frost school, Olgan included.
      b.allies(u, true).filter(isFrostHero).forEach(function (a) { b.buff(u, a, 'Banishment ATK', 10, { atkP: 0.25 }); });
    }
  });

  // Dorkuraz: basic attacks prefer an enemy without Frost (ASSUMED: unless
  // taunted) and have a 60% chance of a 40% ATK Derivative hit plus Frost 5s.
  K(20240, {
    init: function (u, b) { std(u, b); },
    basic: function (u, b, t) {
      if (!b.has(u, 'Taunt') && b.has(t, 'Frost')) {
        var fresh = b.targetable(u).filter(function (e) { return !b.has(e, 'Frost'); })[0];
        if (fresh) t = fresh;
      }
      b.hit(u, t, { atk: b.R.basicMult }, { el: COLD, tag: 'basic' });
      if (b.chance(0.6)) b.hit(u, t, { atk: 0.4 }, { el: DER, tag: 'passive', apply: [['Frost', 1, 5]] });
    },
    battle: function (u, b) {
      area(b, u).forEach(function (t) { b.hit(u, t, { atk: 2.8 }, { el: COLD, tag: 'battle', apply: [['Frost', 0.75, 5, { skill: 'battle' }]] }); });
      b.energy(u, 25);
    },
    ult: function (u, b) {
      area(b, u).forEach(function (t) { b.hit(u, t, { atk: 4.8 }, { el: COLD, tag: 'ult' }); });
    }
  });

  // Vidimir: when a Frosted enemy dies, 25% Attack Up for 10s and +15 energy.
  // The engine clears statuses on death, so Frost is read at the killing hit.
  K(20250, {
    init: function (u, b) {
      std(u, b);
      b.on(u, 'beforeDamaged', function (c) { if (c.tgt.side !== u.side) c.tgt.flags.frostAtHit = !!b.has(c.tgt, 'Frost'); });
      b.on(u, 'death', function (e) {
        if (e.tgt.side === u.side || !e.tgt.flags.frostAtHit) return;
        b.buff(u, u, 'Icebreaker', 10, { atkP: 0.25 });
        b.energy(u, 15);
      });
    },
    battle: function (u, b) {
      area(b, u).forEach(function (t) { b.hit(u, t, { atk: 3.5 }, { el: COLD, tag: 'battle', apply: [['Frost', 0.75, 5, { skill: 'battle' }]] }); });
    },
    ult: function (u, b) {
      // ASSUMED: 5 hits in total; the ball never hits the same enemy twice in a
      // row (one hit against a single enemy); each hop picks a Frosted enemy when
      // there is one, else a random other enemy; the explosion is centred on the
      // struck enemy and hits it too.
      var last = null;
      for (var i = 0; i < 5; i++) {
        var pool = b.enemies(u).filter(function (e) { return e !== last; });
        if (!pool.length) break;
        var fr = pool.filter(function (e) { return b.has(e, 'Frost'); });
        var t = fr.length ? rnd(b, fr) : i === 0 ? b.target(u) : rnd(b, pool);
        if (!t) break;
        var frosted = !!b.has(t, 'Frost');
        b.hit(u, t, { atk: 2.6 }, { el: COLD, tag: 'ult' });
        if (frosted) {
          b.remove(t, 'Frost');
          b.area(u, t).forEach(function (e) { b.hit(u, e, { atk: 2.6 }, { el: COLD, tag: 'ult' }); });
        }
        last = t;
      }
    }
  });

  // Drizzt Do'Urden. Guenhwyvar is not added as a unit. ASSUMED: Guenhwyvar
  // uses Drizzt's stats ("his attributes" are not published) and makes a basic
  // attack (basicMult x ATK) on Drizzt's target each time Drizzt does,
  // credited to Drizzt as 'summon' damage.
  // Planar Ally: both always attack the same enemy here, so +1 stack per second
  // while Drizzt has a target (-1 when none), max 10, undispellable.
  // ASSUMED effect (the text gives none): +2% ATK per stack.
  var PLANAR_ATK = 0.02;
  K(22980, {
    init: function (u, b) {
      std(u, b);
      u.flags.planar = 0;
      u.flags.dualHits = 1;
      b.on(u, 'second', function (e) {
        if (e.u !== u) return;
        u.flags.planar = b.target(u) ? Math.min(10, u.flags.planar + 1) : Math.max(0, u.flags.planar - 1);
        setMods(b, u, 'Planar Ally', { atkP: PLANAR_ATK * u.flags.planar }, u.flags.planar > 0);
      });
      // Inspiration 2. ASSUMED: the excess is measured relative to the hero's own
      // max HP (+1% per full 15% that the target's max HP exceeds the hero's).
      if (u.insp >= 2) b.on(u, 'modifyDamage', function (c) {
        if (c.src !== u) return;
        var over = (b.maxHp(c.tgt) - b.maxHp(u)) / b.maxHp(u);
        if (over > 0) c.bonus += Math.min(0.12, 0.01 * Math.floor(over / 0.15 + 1e-9));
      });
    },
    basic: function (u, b, t) {
      b.hit(u, t, { atk: b.R.basicMult }, { el: COLD, tag: 'basic' });
      b.hit(u, t, { atk: b.R.basicMult }, { el: COLD, tag: 'summon' });
    },
    battle: function (u, b) {
      // ASSUMED: the first use hits once, each use adds a hit, max 3 hits.
      var n = u.flags.dualHits, list = area(b, u);
      for (var i = 0; i < n; i++) list.forEach(function (t) { b.hit(u, t, { atk: 0.75 }, { el: COLD, tag: 'battle', apply: [['Frost', 0.5, 10, { skill: 'battle' }]] }); });
      u.flags.dualHits = Math.min(3, n + 1);
    },
    ult: function (u, b) {
      // 3 hits by Drizzt + 3 by Guenhwyvar (ASSUMED: Drizzt's ATK; all tagged 'ult').
      var list = area(b, u);
      for (var i = 0; i < 6; i++) list.forEach(function (t) {
        if (!t.alive) return;
        b.hit(u, t, { atk: 1.1 }, { el: COLD, tag: 'ult', defIgnore: b.has(t, 'Frost') ? 0.15 : 0, bonus: Math.min(0.3, 0.6 * (1 - frac(b, t))) });
      });
    }
  });

  // Trolgar. The official 2025 text has every number blanked out. ASSUMED: the
  // numbers of the same skills in the official 2026 Moqi table
  // (raw-official/moqi-2026.json), whose numbers for the other heroes here match
  // the main game. Inspirations 1 and 2 are blank in every source: not modelled.
  // ASSUMED: the arena-only Arctic Axe variant (energy on hitting Frosted
  // enemies, number blank) is not modelled.
  K(21710, {
    init: function (u, b) {
      std(u, b);
      u.flags.frigid = 0;
      var pct = u.insp >= 5 ? 0.15 : 0.10;
      // First Frost on each enemy (from any ally): shield removed + 10% target max HP.
      b.on(u, 'statusApplied', function (e) {
        var t = e.tgt, key = 'trolgarFrost' + u.uid;
        if (e.base !== 'Frost' || t.side === u.side || !t.alive || t.flags[key]) return;
        t.flags[key] = true;
        t.shields = [];
        // ASSUMED: the 1,500% ATK cap printed with inspiration 5 also caps the base 10%.
        b.hit(u, t, Math.min(pct * b.maxHp(t), 15 * b.atk(u)), { el: COLD, tag: 'passive' });
      });
      // Frigid Force: +1 per enemy hit by a skill cast (ASSUMED: distinct enemies, no cap).
      b.on(u, 'cast', function (e) { if (e.src === u) u.flags.castHits = []; });
      b.on(u, 'hit', function (e) {
        if (e.src !== u || !u.flags.castHits || (e.o.tag !== 'battle' && e.o.tag !== 'ult')) return;
        if (u.flags.castHits.indexOf(e.tgt) < 0) u.flags.castHits.push(e.tgt);
      });
      b.on(u, 'afterCast', function (e) {
        if (e.src !== u || !u.flags.castHits) return;
        u.flags.frigid += u.flags.castHits.length;
        u.flags.castHits = null;
      });
    },
    basic: function (u, b, t) {
      if (u.flags.frigid > 0) {
        // Tornado Slash. ASSUMED: its Frost lasts 5s (no duration printed).
        u.flags.frigid--;
        b.area(u, t).forEach(function (e) { b.hit(u, e, { atk: 2.0 }, { el: COLD, tag: 'basic', apply: [['Frost', 1, 5]] }); });
      } else b.hit(u, t, { atk: b.R.basicMult }, { el: COLD, tag: 'basic' });
    },
    battle: function (u, b) {
      var t = b.lowestCurHp(b.enemies(u));
      if (t) b.hit(u, t, { atk: 4.0 }, { el: COLD, tag: 'battle', apply: [['Frost', 1, 10, { skill: 'battle' }]] });
    },
    ult: function (u, b) {
      b.allies(u, true).filter(isFrostHero).forEach(function (a) { b.buff(u, a, "Winter's Vengeance ATK", 10, { atkP: 0.2 }); });
      // ASSUMED: Frost does not stack in the engine, so "1 / 2 stacks of Frost"
      // land as one Frost; the second strike hits the same enemies.
      var list = area(b, u);
      list.forEach(function (t) { b.hit(u, t, { atk: 3.2 }, { el: COLD, tag: 'ult', apply: [['Frost', 1, 10, { skill: 'ult' }]] }); });
      list.forEach(function (t) { b.hit(u, t, { atk: 3.2 }, { el: COLD, tag: 'ult', apply: [['Frost', 1, 10, { skill: 'ult' }]] }); });
    }
  });

  // ============================================================ ICE SUPPORT ==

  // Lucien: Oath of Dawn shield (8% of his max HP, 10s) on every ally at the
  // start. While it holds: Control Immunity (controls are removed as they land)
  // and no Ultimate Energy reduction from enemies.
  if (!P.iceEnergyWrapped) {
    P.iceEnergyWrapped = true;
    var origEnergy = P.energy;
    P.energy = function (u, v) {
      if (v < 0 && u.flags && hasShield(this, u, u.flags.oathShield)) return;
      return origEnergy.call(this, u, v);
    };
  }
  K(20990, {
    init: function (u, b) {
      std(u, b);
      if (u.insp >= 2) u.s.shieldP = (u.s.shieldP || 0) + 0.15;
      b.on(u, 'battleStart', function () {
        b.allies(u, true).forEach(function (a) {
          b.shield(u, a, { hp: 0.08 }, 10, { tag: 'passive' });
          a.flags.oathShield = lastShield(a);
        });
      });
      b.on(null, 'statusApplied', function (e) {
        if (e.kind !== 'control' || e.tgt.side !== u.side || !hasShield(b, e.tgt, e.tgt.flags.oathShield)) return;
        b.remove(e.tgt, e.base);
      });
    },
    battle: function (u, b) {
      var en = b.enemies(u);
      if (!en.length) return;
      var t = en.slice().sort(function (x, y) { return y.energy - x.energy; })[0];
      b.hit(u, t, { atk: 3.0, hp: 0.07 }, { el: COLD, tag: 'battle', apply: [['Frozen', 0.75, 3, { skill: 'battle', ignoreRes: u.insp >= 5 }]] });
    },
    ult: function (u, b) {
      area(b, u).forEach(function (t) { b.hit(u, t, { atk: 5.0, hp: 0.11 }, { el: COLD, tag: 'ult', apply: [['Recharging Speed Penalty', 0.75, 10, { skill: 'ult' }]] }); });
    }
  });

  // Elecebre: at the start Resistance rises to her Accuracy, then 150% ATK to
  // all enemies with a 50% chance of Blind 5s.
  K(22330, {
    init: function (u, b) {
      std(u, b);
      b.on(u, 'battleStart', function () {
        var acc = b.stat(u, 'acc'), res = b.stat(u, 'res');
        if (acc > res) u.s.res += acc - res;
        b.enemies(u).forEach(function (t) {
          b.hit(u, t, { atk: 1.5 }, { el: COLD, tag: 'passive' });
          blind(b, u, t, 0.5, 5);
        });
        // Inspiration 1. ASSUMED: only the Blind repeats every 15s, not the damage.
        if (u.insp >= 1) b.every(15, b.maxTime || 600, function () { b.enemies(u).forEach(function (t) { blind(b, u, t, 0.5, 5); }); }, u);
      });
      // Inspiration 5. ASSUMED: -30 points of the attacker's crit chance against
      // an ally holding her battle-skill shield.
      if (u.insp >= 5) b.on(null, 'modifyDamage', function (c) {
        var s = b.has(c.tgt, "Nature's Blessing");
        if (s && s.data && s.data.critCut) c.critRate -= 0.3;
      });
    },
    battle: function (u, b) {
      // ASSUMED: the shield goes to the ally with the lowest HP%.
      var a = b.lowestHp(b.allies(u, true));
      if (!a) return;
      b.shield(u, a, { hp: 0.3 }, 10);
      var sh = lastShield(a), name = "Nature's Blessing";
      if (!b.buff(u, a, name, 10, {})) return;
      var st = b.has(a, name);
      st.mods = { res: (u.insp >= 3 ? 0.5 : 0.3) * b.stat(u, 'res') };
      st.data = { sh: sh, critCut: u.insp >= 5 };
      // The Resistance bonus lasts while the shield does.
      b.every(0.5, 10, function () {
        var cur = b.has(a, name);
        if (cur && cur.data && cur.data.sh === sh && !hasShield(b, a, sh)) b.remove(a, name);
      }, a);
    },
    ult: function (u, b) {
      // Inspiration 2. ASSUMED: +15 percentage points on both chances.
      var up = u.insp >= 2 ? 0.15 : 0;
      b.allies(u, true).forEach(function (a) { rot(b, u, a, 10); b.apply(u, a, 'Defense Up II', 1, 10); });
      b.enemies(u).forEach(function (t) {
        charm(b, u, t, 0.5 + up, 5, { skill: 'ult' });
        // ASSUMED: the energy cut is a plain chance roll, not a debuff (no Resistance check).
        if (b.chance(0.75 + up)) b.energy(t, -50);
      });
    }
  });

  // Lethander: when an enemy dies he gains its remaining Ultimate Energy.
  K(21080, {
    init: function (u, b) {
      std(u, b);
      b.on(u, 'death', function (e) { if (e.tgt.side !== u.side && e.tgt.energy > 0) b.energy(u, e.tgt.energy); });
    },
    battle: function (u, b) {
      var t = b.target(u);
      if (t) b.hit(u, t, { atk: 4.3 }, { el: COLD, tag: 'battle', apply: [['Frozen', 0.3, 5, { skill: 'battle' }]] });
    },
    ult: function (u, b) {
      // ASSUMED: the two debuffs roll separately.
      area(b, u).forEach(function (t) {
        b.hit(u, t, { atk: 7.2 }, { el: COLD, tag: 'ult', apply: [['Recharging Speed Penalty', 0.75, 10, { skill: 'ult' }], ['Accuracy Penalty I', 0.75, 10, { skill: 'ult' }]] });
      });
    }
  });

  // Elvis: his damage has a 50% chance of Recharging Speed Penalty 5s.
  K(23160, {
    init: function (u, b) {
      std(u, b);
      u.flags.armorUntil = -1;
      u.flags.armorT = -9;
      b.on(u, 'hit', function (e) {
        if (e.src !== u || e.amount <= 0 || e.tgt.side === u.side || !e.tgt.alive) return;
        b.apply(u, e.tgt, 'Recharging Speed Penalty', 0.5, 5);
      });
      // Devout Frost Armor: while it lasts, taking damage (ASSUMED: also damage a
      // shield absorbs) deals 75% DEF to enemies within range, once per 1s.
      b.on(u, 'damaged', function (e) {
        if (e.tgt !== u || b.t > u.flags.armorUntil + 1e-9 || b.t - u.flags.armorT < 1 - 1e-9) return;
        u.flags.armorT = b.t;
        area(b, u).forEach(function (t) { b.hit(u, t, { def: 0.75 }, { el: COLD, tag: 'ult' }); });
      });
    },
    battle: function (u, b) {
      // Shield 375% DEF for 5s; when it breaks or expires it deals 260% DEF to
      // enemies within range (ASSUMED: no blast if Elvis dies first).
      b.shield(u, u, { def: 3.75 }, 5);
      var sh = lastShield(u), done = false;
      b.every(0.25, 5 * (1 + b.stat(u, 'shieldDur')) + 0.5, function () {
        if (done || hasShield(b, u, sh)) return;
        done = true;
        area(b, u).forEach(function (t) { b.hit(u, t, { def: 2.6 }, { el: COLD, tag: 'battle' }); });
      }, u);
    },
    ult: function (u, b) {
      b.apply(u, u, 'Defense Up II', 1, 10);
      u.flags.armorUntil = b.t + 10;
    }
  });

  // Soveliss: an enemy that gains Invisibility is shot (200% ATK), loses it and
  // gets Attack Penalty II 5s; once per target per 10s.
  K(21000, {
    init: function (u, b) {
      std(u, b);
      b.on(u, 'statusApplied', function (e) {
        var t = e.tgt, key = 'sovelissT' + u.uid;
        if (e.base !== 'Invisibility' || t.side === u.side || !t.alive) return;
        if (t.flags[key] != null && b.t - t.flags[key] < 10) return;
        t.flags[key] = b.t;
        b.remove(t, 'Invisibility');
        b.hit(u, t, { atk: 2.0 }, { el: COLD, tag: 'passive', apply: [['Attack Penalty II', 1, 5]] });
      });
    },
    battle: function (u, b) {
      // ASSUMED: heals the ally with the lowest HP%.
      var a = b.lowestHp(b.allies(u, true));
      if (!a) return;
      b.heal(u, a, { thp: 0.1 }, { tag: 'battle' });
      hitRecovery(b, u, a, 5);
    },
    ult: function (u, b) {
      // ASSUMED: both rounds land at once on the same enemies; the energy cut is
      // a plain 50% roll per enemy per round (no Resistance check).
      var list = area(b, u);
      for (var r = 0; r < 2; r++) list.forEach(function (t) {
        if (!t.alive) return;
        b.hit(u, t, { atk: 3.2 }, { el: COLD, tag: 'ult' });
        if (t.alive && b.chance(0.5)) b.energy(t, -30);
      });
    }
  });

  // Dallbam: the first fatal hit is survived with Invincibility 5s and
  // Recovery Over Time 5s.
  K(21420, {
    init: function (u, b) {
      std(u, b);
      u.flags.crystal = false;
      b.on(u, 'fatal', function (f) {
        if (f.tgt !== u || u.flags.crystal) return;
        u.flags.crystal = true;
        f.saved = true;
        b.apply(u, u, 'Invincibility', 1, 5);
        rot(b, u, u, 5);
      });
    },
    battle: function (u, b) {
      b.shield(u, u, { hp: 0.15 }, 10);
      b.apply(u, u, 'Defense Up II', 1, 5);
    },
    ult: function (u, b) {
      b.enemies(u).forEach(function (t) {
        b.hit(u, t, { def: 5.2 }, { el: COLD, tag: 'ult' });
        blind(b, u, t, 0.5, 5, { skill: 'ult' });
      });
    }
  });

  // ====================================== OWNED EPICS: FIRE / NECROSIS / RADIANCE ==

  // Brody: when an enemy gains a shield he gains 50% of it (max 80% of his max
  // HP), once per 0.5s. ASSUMED: the copied shield lasts 10s.
  K(20360, {
    init: function (u, b) {
      std(u, b);
      u.flags.raidT = -9;
      b.on(u, 'shielded', function (e) {
        if (e.tgt.side === u.side || e.amount <= 0 || b.t - u.flags.raidT < 0.5 - 1e-9) return;
        u.flags.raidT = b.t;
        b.shield(u, u, Math.min(0.5 * e.amount, 0.8 * b.maxHp(u)), 10, { tag: 'passive' });
      });
    },
    battle: function (u, b) {
      area(b, u).forEach(function (t) { b.hit(u, t, { def: 3.3 }, { el: FIRE, tag: 'battle', apply: [['Attack Penalty II', 0.5, 5, { skill: 'battle' }]] }); });
    },
    ult: function (u, b) {
      area(b, u).forEach(function (t) { t.shields = []; b.hit(u, t, { def: 6.0 }, { el: FIRE, tag: 'ult' }); });
      b.apply(u, u, 'Defense Up I', 1, 6);
    }
  });

  // Liko: Accuracy Up while she has no other buff, else Resistance Up.
  // ASSUMED: untiered "Accuracy Up" / "Resistance Up" = tier I (RULES.flatTier
  // points), re-checked every second and whenever she gains a buff; her own
  // Bloodline buff is left out of that check (or it would flip every second).
  K(23260, {
    bloodline: function (u, b) {
      var other = u.sts.some(function (s) { return s.kind === 'buff' && s.base.indexOf('Bloodline ') !== 0; });
      setMods(b, u, 'Bloodline Accuracy Up', { acc: b.R.flatTier }, !other);
      setMods(b, u, 'Bloodline Resistance Up', { res: b.R.flatTier }, other);
    },
    init: function (u, b) {
      std(u, b);
      var self = this;
      b.on(u, 'battleStart', function () { self.bloodline(u, b); });
      b.on(u, 'second', function (e) { if (e.u === u) self.bloodline(u, b); });
      b.on(u, 'statusApplied', function (e) { if (e.tgt === u && e.kind === 'buff' && e.base.indexOf('Bloodline ') !== 0) self.bloodline(u, b); });
    },
    battle: function (u, b) {
      var a = b.lowestCurHp(b.allies(u, true));
      if (!a) return;
      b.heal(u, a, { thp: 0.2 }, { tag: 'battle' });
      b.apply(u, a, 'Defense Up II', 1, 5);
    },
    ult: function (u, b) {
      // ASSUMED: her Bloodline buff counts as "any buffs" here, so the dispel
      // nearly always happens.
      var buffed = u.sts.some(function (s) { return s.kind === 'buff'; });
      area(b, u).forEach(function (t) {
        b.hit(u, t, { atk: 7.8 }, { el: FIRE, tag: 'ult', apply: [['Buff Prohibition', 1, 10, { skill: 'ult' }]] });
        if (buffed && t.alive) b.dispel(t, 1, 'buff');
      });
    }
  });

  // Irma: 30% chance of +3 energy when hit, once per 5s (ASSUMED: the 5s
  // lockout starts only when the roll succeeds).
  K(23120, {
    init: function (u, b) {
      std(u, b);
      u.flags.sentinelT = -99;
      b.on(u, 'damaged', function (e) {
        if (e.tgt !== u || b.t - u.flags.sentinelT < 5 || !b.chance(0.3)) return;
        u.flags.sentinelT = b.t;
        b.energy(u, 3);
      });
    },
    battle: function (u, b) {
      var t = b.target(u);
      if (t) b.hit(u, t, { def: 3.55 }, { el: NEC, tag: 'battle' });
      hitRecovery(b, u, u, 5);
    },
    ult: function (u, b) {
      area(b, u).forEach(function (t) { b.hit(u, t, { def: 7.4 }, { el: NEC, tag: 'ult' }); });
      // ASSUMED: "allies within range" = the whole team.
      b.allies(u, true).forEach(function (a) {
        b.apply(u, a, 'Control Immunity', 1, 10);
        b.buff(u, a, 'Serene Domain', 10, { dmgRed: 0.30 });
      });
    }
  });

  // Thia: Invisibility 5s after one hit above 10% of her max HP (once per 10s);
  // allies under Invisibility take 15% less damage while she lives.
  K(21050, {
    init: function (u, b) {
      std(u, b);
      u.flags.stealthT = -99;
      b.on(u, 'damaged', function (e) {
        if (e.tgt !== u || e.amount <= 0.1 * b.maxHp(u) || b.t - u.flags.stealthT < 10) return;
        u.flags.stealthT = b.t;
        b.apply(u, u, 'Invisibility', 1, 5);
      });
      b.on(u, 'beforeDamaged', function (c) { if (c.tgt.side === u.side && b.has(c.tgt, 'Invisibility')) c.amount *= 0.85; });
    },
    battle: function (u, b) {
      var allies = b.allies(u, true), list = [b.lowestCurHp(allies)];
      allies.forEach(function (a) { if (b.has(a, 'Invisibility') && list.indexOf(a) < 0) list.push(a); });
      list.forEach(function (a) { if (a) b.heal(u, a, { atk: 2.0, ench: 20.0 }, { tag: 'battle' }); });
    },
    ult: function (u, b) {
      b.allies(u, true).filter(function (a) { return !a.melee; }).forEach(function (a) {
        b.apply(u, a, 'Invisibility', 1, 10);
        b.apply(u, a, 'Debuff Immunity', 1, 10);
      });
      // ASSUMED: the damage (no target named) hits the enemies within range.
      area(b, u).forEach(function (t) { b.hit(u, t, { atk: 8.5 }, { el: NEC, tag: 'ult', apply: [['Healing Prohibition', 0.75, 10, { skill: 'ult' }]] }); });
    }
  });

  // Martina: Rally stacks. ASSUMED: kept as a counter on her (no cap stated);
  // the ult consumes all of them and its effects stack in order up to 3.
  K(20170, {
    gainRally: function (u, b, n) {
      u.flags.rally += n;
      if (b.t - u.flags.rallyT >= 0.5 - 1e-9) { u.flags.rallyT = b.t; b.energy(u, 10); }
    },
    init: function (u, b) { std(u, b); u.flags.rally = 0; u.flags.rallyT = -9; },
    battle: function (u, b) {
      var list = area(b, u), many = list.length >= 2;
      list.forEach(function (t) { b.hit(u, t, { atk: 3.1 }, { el: RAD, tag: 'battle', critRate: many ? 1 : 0 }); });
      if (many) this.gainRally(u, b, 1);
    },
    ult: function (u, b) {
      var n = Math.min(3, u.flags.rally);
      u.flags.rally = 0;
      area(b, u).forEach(function (t) {
        b.hit(u, t, { atk: 6.2 }, { el: RAD, tag: 'ult', bonus: n >= 1 ? 0.2 : 0, critRate: n >= 2 ? 1 : 0, defIgnore: n >= 3 ? 0.2 : 0 });
      });
    }
  });

  // Zadok: Soul Lantern (max 20). ASSUMED: the text gives Soul Lantern no
  // effect, so stacks are only counted; undead summons are not modelled, so the
  // passive's +5 energy on a summon's death never triggers.
  K(20220, {
    init: function (u, b) { std(u, b); u.flags.soul = 0; },
    battle: function (u, b) {
      var t = b.target(u);
      if (t) b.hit(u, t, { atk: 3.0 }, { el: NEC, tag: 'battle' });
      u.flags.soul = Math.min(20, u.flags.soul + 2);
    },
    ult: function (u, b) {
      // ASSUMED: each of the 3 waves hits the enemies within range along its line.
      var list = area(b, u);
      for (var i = 0; i < 3; i++) list.forEach(function (t) { b.hit(u, t, { atk: 2.35 }, { el: NEC, tag: 'ult' }); });
    }
  });

  // ----------------------------------------------------- exports for tests --
  S.iceKitHelpers = { hostile: hostile, blind: blind, charm: charm, rot: rot, hitRecovery: hitRecovery };
})(typeof window !== 'undefined' ? window : globalThis);
