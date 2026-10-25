/*
 * Artifact and gear-set effects for DHSim. Main stats of artifacts and the
 * 2-piece stat bonus of sets are applied generically from the official tables;
 * this file codes the special effects (spells). Numbers per artifact tier are
 * read from the official tier texts at run time, so they track the data.
 */
(function (root) {
  var S = root.DHSim || (typeof require !== 'undefined' ? require('./sim.js') : null);

  // Numbers in the effect text of an artifact at a tier (0-5).
  function nums(name, tier) {
    var a = S.artifactByName(name);
    if (!a || !a.tiers.length) return [];
    var t = a.tiers[Math.min(tier, a.tiers.length - 1)];
    return (t.match(/\d+(?:\.\d+)?/g) || []).map(Number);
  }
  function A(name, fx) { S.registerArtifact(name, fx); }
  function onCast(b, u, slot, fn) { b.on(u, 'cast', function (e) { if (e.src === u && e.slot === slot) fn(e); }); }
  function statusChance(u, key, v) { u.s[key] = (u.s[key] || 0) + v; }

  // ---- Frost and damage artifacts
  A('Ring of Winter', function (u, b, tier) {
    var n = nums('Ring of Winter', tier); // [30, 300, cooldown]
    var chance = n[0] / 100, mult = n[1] / 100, icd = n[2];
    u.flags.rowT = -99;
    b.on(u, 'hit', function (e) {
      if (e.src !== u || e.o.tag === 'artifact' || !b.has(e.tgt, 'Frost') || b.t - u.flags.rowT < icd || !b.chance(chance)) return;
      u.flags.rowT = b.t;
      b.area(u, e.tgt).forEach(function (t) { b.hit(u, t, { atk: mult }, { el: 'Cold', tag: 'artifact' }); });
    });
  });
  A("Witch's Remains", function (u, b, tier) {
    var p = nums("Witch's Remains", tier)[0] / 100;
    var castId = 0;
    onCast(b, u, 'ult', function () { castId++; });
    b.on(u, 'hit', function (e) {
      if (e.src !== u || e.o.tag !== 'ult' || e.o.el === 'Derivative' || e.amount <= 0) return;
      if (e.tgt.flags.witchCast === castId + ':' + u.uid) return;
      e.tgt.flags.witchCast = castId + ':' + u.uid;
      if (b.chance(p)) b.apply(u, e.tgt, 'Defense Penalty II', 1, 10, { skill: 'ult' });
    });
  });
  A('Eyeball of the Giant', function (u, b, tier) {
    var v = nums('Eyeball of the Giant', tier)[0] / 100;
    b.on(u, 'modifyDamage', function (c) { if (c.src === u && c.o.tag === 'ult') c.bonus += v; });
  });
  A('Manticore Statue', function (u, b, tier) {
    var v = nums('Manticore Statue', tier)[0] / 100;
    b.on(u, 'modifyDamage', function (c) { if (c.src === u && c.o.tag === 'battle') c.bonus += v; });
  });
  A('Misty Conch', function (u, b, tier) {
    var d = nums('Misty Conch', tier)[0];
    b.on(u, 'debuffApplied', function (e) {
      if (e.src !== u || !e.already || (e.skill !== 'battle' && e.skill !== 'ult') || e.base === 'Defense Penalty') return;
      b.apply(u, e.tgt, 'Defense Penalty II', 1, d, { skill: 'artifact' });
    });
  });

  // ---- status chance artifacts
  ['Frost Globe', "Illuya's Fang", 'Orb of Oblivion'].forEach(function (n) {
    A(n, function (u, b, tier) { statusChance(u, 'statusChance', nums(n, tier)[0] / 100); });
  });
  A("Ivaran's Arrow", function (u, b, tier) { statusChance(u, 'statusChance_battle', nums("Ivaran's Arrow", tier)[0] / 100); });
  A('Lunar Harp', function (u, b, tier) { statusChance(u, 'statusChance_ult', nums('Lunar Harp', tier)[0] / 100); });

  // ---- tempo artifacts
  A('Rift Hourglass', function (u, b, tier) { u.s.haste += nums('Rift Hourglass', tier)[0]; });
  A('Lost Pearl in Desert', function (u, b, tier) {
    var first = nums('Lost Pearl in Desert', tier)[0];
    var k = 0;
    b.on(u, 'afterCast', function (e) {
      if (e.src !== u || e.slot !== 'ult') return;
      var pct = Math.max(5, first - 5 * k++);
      b.energy(u, b.R.ultMax * pct / 100);
    });
  });
  A('Spiritual Incense Burner', function (u, b, tier) {
    var pct = nums('Spiritual Incense Burner', tier)[0];
    b.on(u, 'afterCast', function (e) { if (e.src === u && e.slot === 'ult') b.energy(u, b.R.ultMax * pct / 100); });
  });

  // ---- support artifacts
  A('A Guide to Magic by Elminster', function (u, b, tier) {
    var n = nums('A Guide to Magic by Elminster', tier);
    u.s.shieldP = (u.s.shieldP || 0) + n[0] / 100;
    u.s.shieldDur = (u.s.shieldDur || 0) + n[1] / 100;
  });
  A('Mirror of the Living', function (u, b, tier) {
    var n = nums('Mirror of the Living', tier);
    b.on(u, 'modifyHeal', function (c) { if (c.src === u && c.tgt.hp / b.maxHp(c.tgt) < n[0] / 100) c.amount *= 1 + n[1] / 100; });
  });
  A('Arcana Cube', function (u, b, tier) {
    var n = nums('Arcana Cube', tier);
    onCast(b, u, 'battle', function () { if (b.chance(n[0] / 100)) b.buff(u, u, 'Moment of Enlightenment', 10, { ench: n[1] }); });
  });
  A("Meditator's Pipe", function (u, b, tier) { u.s.ench += nums("Meditator's Pipe", tier)[0]; });

  // ---- gear sets (spell effects; 2-piece stats are applied from the table)
  function SET(name, fx) { S.registerSet(name, fx); }
  SET('Thornvine Entanglement', function (u, b) {
    b.on(u, 'cast', function (e) { if (e.src === u) b.buff(u, u, 'Thornvine Haste', 6, { atkSpd: 0.6 }); });
  });
  SET('Forgesmoke Eruption', function (u, b) {
    u.flags.forge = 0;
    b.every(5, 600, function () { u.flags.forge = Math.min(10, u.flags.forge + 1); }, u);
    b.on(u, 'modifyDamage', function (c) { if (c.src === u && c.o.el === 'Derivative') c.bonus += 0.03 * u.flags.forge; });
  });
  SET("Sacred River's Revelation", function (u, b) {
    function stack(e) {
      if (e.src !== u) return;
      var t = e.tgt;
      t.flags.srr = Math.min(10, (t.flags.srr || 0) + 1);
      t.s.dmgRed = (t.s.dmgRedBase == null ? (t.s.dmgRedBase = t.s.dmgRed || 0) : t.s.dmgRedBase) + 0.01 * t.flags.srr;
    }
    b.on(u, 'healed', stack);
    b.on(u, 'shielded', stack);
  });
  SET('Calcined Ruin', function (u, b) {
    b.on(u, 'hit', function (e) {
      if (e.src !== u || e.o.tag !== 'ult' || e.amount <= 0 || e.tgt.flags.bleedUntil > b.t) return;
      var t = e.tgt;
      t.flags.bleedUntil = b.t + 10;
      b.every(2, 10, function () {
        if (!t.alive) return;
        b.hit(u, t, Math.min(0.05 * b.maxHp(t), b.atk(u)), { el: 'Derivative', tag: 'set' });
      }, u);
    });
  });
  SET('Wildwood Vigil', function (u, b) {
    b.on(u, 'beforeDamaged', function (c) {
      var t = c.tgt;
      if (t === u || t.side !== u.side || !u.alive || c.amount <= 0.15 * b.maxHp(t)) return;
      if (t.flags.vigilT != null && b.t - t.flags.vigilT < 20) return;
      t.flags.vigilT = b.t;
      var cost = 0.2 * u.hp;
      c.amount = 0;
      u.hp -= cost;
      u.rec.taken += cost;
    });
  });
})(typeof window !== 'undefined' ? window : globalThis);

// ---- Season 1 (Beginner pool) gear sets. Effect texts from the game config
// (knowledge/data/gear-sets.json, equip-2025.json). Reborn rule: Legendary sets
// give stats at 2 pieces and the effect at 3; Mythic pieces carry their effect
// alone; Epic and Rare sets give stats at 2 pieces.
(function (root) {
  var S = root.DHSim || (typeof require !== 'undefined' ? require('./sim.js') : null);
  var D = S.data();
  // Epic / Rare sets are missing from the sim data (stats only).
  var STAT_SETS = {
    'Assassin Technique': ['Epic', { atk: 100, ench: 30 }], 'Barbarian': ['Epic', { atk: 100, critRate: 0.1 }],
    'Blessing': ['Epic', { ench: 30, hp: 1000 }], 'Goblin Brawler': ['Epic', { atk: 100, haste: 20 }],
    'Granite Will': ['Epic', { def: 100, hp: 1000 }], 'Heart of Deer Herder': ['Epic', { acc: 40, res: 60 }],
    'Predator': ['Epic', { atk: 100, atkSpd: 0.2 }], 'Swift Shadow': ['Epic', { acc: 40, haste: 20 }],
    'Guardian': ['Rare', { def: 50, hp: 500 }], 'Inquisitor': ['Rare', { acc: 30, res: 30 }], 'Rage': ['Rare', { atk: 50, hp: 500 }]
  };
  for (var n in STAT_SETS) if (!S.setByName(n)) D.sets['x:' + n] = { n: n, pieceSet: n, r: STAT_SETS[n][0], season: 's1', bonus2: STAT_SETS[n][1], spell: null };
  var BEGINNER = ['Ancestral Guidance', 'Ancestral Protection', 'Assassin Technique', 'Barbarian', 'Blessing', 'Brotherhood Spirit', 'Chaos Symbiosis', 'Clean Sweep', "Cyril's Whisper", 'Death Record', 'Fearless Challenge', 'Goblin Brawler', 'Granite Will', 'Guardian', 'Heart of Deer Herder', 'Heart of the Gambler', 'Holy Hunter', 'Imperial Executioner', 'Imposing Presence', 'Impregnable', 'Inquisitor', 'Iron Bastion', 'Magic Crystal Refinement', 'Mark of Austerity', "Monelisse's Teardrop", 'Platinum Knight Quality', 'Power of Tides', 'Predator', "Puppeteer's Inspiration", 'Radiance of the Blue Oak', 'Rage', 'Revenge of the Fallen', "Rhapsodist's Calling", 'Schadenfreude', 'Sky Code Treaty', 'Strike the Unprepared', 'Swift Shadow', 'Tundra Tenacity'];
  BEGINNER.forEach(function (n) { var s = S.setByName(n); if (s) s.beginner = true; });
  S.BEGINNER_SETS = BEGINNER;

  function SET(name, fx) { S.registerSet(name, fx); }
  function dmgMod(b, u, fn) { b.on(u, 'modifyDamage', function (c) { if (c.src === u) fn(c); }); }
  function isSkill(o) { return o.tag === 'battle' || o.tag === 'ult' || o.tag === 'passive'; }
  function isDot(o) { return o.tag === 'dot' || o.el === 'Derivative' || o.derivative; }

  // Legendary 3-piece effects
  SET('Imperial Executioner', function (u, b) { dmgMod(b, u, function (c) { if (isSkill(c.o) && !isDot(c.o)) c.critExtra += 0.16; }); });
  SET("Puppeteer's Inspiration", function (u, b) {
    b.on(u, 'cast', function (e) {
      if (e.src !== u || e.slot !== 'ult') return;
      b.allies(u, false).forEach(function (a) {
        if (!a.h || !u.h || a.h.el !== u.h.el || (a.flags.puppetT != null && b.t - a.flags.puppetT < 15)) return;
        a.flags.puppetT = b.t;
        b.energy(a, 0.1 * b.R.ultMax);
      });
    });
  });
  SET('Ancestral Protection', function (u, b) {
    u.s.dmgRed = (u.s.dmgRed || 0) + 0.1;
    b.on(u, 'beforeDamaged', function (c) {
      var t = c.tgt;
      if (t === u || t.side !== u.side || !u.alive || c.amount <= 0 || (c.o && c.o.redirect)) return;
      var moved = 0.15 * c.amount;
      c.amount -= moved;
      b.damage(u, moved * 0.9, c.src, { tag: 'redirect', redirect: true });
    });
  });
  SET('Holy Hunter', function (u, b) {
    b.on(u, 'hit', function (e) { if (e.src === u && e.amount > 0 && !isDot(e.o) && e.tgt.alive) b.apply(u, e.tgt, 'Stunned', 0.2, 3); });
  });
  SET('Platinum Knight Quality', function (u, b) {
    u.flags.pkUntil = -1;
    b.on(u, 'cast', function (e) { if (e.src === u && e.slot === 'ult') u.flags.pkUntil = b.t + 12; });
    dmgMod(b, u, function (c) { if (b.t <= u.flags.pkUntil) c.bonus += 0.3; });
  });
  SET('Brotherhood Spirit', function (u, b) {
    b.on(u, 'cast', function (e) {
      if (e.src !== u || e.slot !== 'ult') return;
      b.allies(u, true).forEach(function (a) { b.buff(u, a, 'Brotherhood', 10, { dmgBonus: 0.15 }); });
    });
  });
  SET("Cyril's Whisper", function (u, b) { dmgMod(b, u, function (c) { c.defIgnore += 0.07 * Math.min(3, b.countDebuffs(c.tgt)); }); });
  SET('Tundra Tenacity', function (u, b) { b.on(u, 'damaged', function (e) { if (e.tgt === u && e.amount > 0) b.energy(u, 1); }); });
  SET('Radiance of the Blue Oak', function (u, b) {
    u.flags.oakT = -999;
    b.on(u, 'damaged', function (e) {
      if (e.tgt !== u || u.hp > 0.25 * b.maxHp(u) || b.t - u.flags.oakT < 60) return;
      u.flags.oakT = b.t;
      b.every(1, 10, function () { b.heal(u, u, 0.8 * b.def(u), { tag: 'set' }); }, u);
    });
  });
  SET('Revenge of the Fallen', function (u, b) {
    b.on(u, 'damaged', function (e) {
      if (e.tgt !== u || !e.src || e.src.side === u.side || !e.src.alive || (e.o && e.o.reflect) || e.amount <= 0) return;
      if (b.chance(0.5)) b.hit(u, e.src, 0.2 * e.amount, { trueDmg: true, noCrit: true, tag: 'set', reflect: true, quiet: true });
    });
  });
  SET('Power of Tides', function (u, b) {
    u.flags.tideT = -999;
    b.on(u, 'resisted', function (e) {
      if (e.tgt !== u || b.t - u.flags.tideT < 10) return;
      u.flags.tideT = b.t;
      var amt = 0.05 * b.maxHp(u);
      b.allies(u, true).forEach(function (a) { b.heal(u, a, amt, { tag: 'set' }); });
    });
  });
  SET("Rhapsodist's Calling", function (u, b) {
    u.flags.rhap = [];
    b.on(u, 'debuffApplied', function (e) { if (e.src === u) { u.flags.rhap.push(b.t + 10); if (u.flags.rhap.length > 4) u.flags.rhap.shift(); } });
    dmgMod(b, u, function (c) { var n = u.flags.rhap.filter(function (x) { return x > b.t; }).length; c.bonus += 0.08 * n; });
  });
  SET('Heart of the Gambler', function (u, b) {
    b.on(u, 'crit', function (e) {
      if (e.src !== u || e.o.gambler || !e.tgt.alive) return;
      if (b.chance(0.35)) b.hit(u, e.tgt, { atk: 1.3 }, { el: 'Physical', tag: 'set', gambler: true, noCrit: true });
    });
  });

  // Mythic 1-piece effects
  SET('Strike the Unprepared', function (u, b) { dmgMod(b, u, function (c) { if (b.has(c.tgt, 'Defense Penalty')) c.bonus += 0.3; }); });
  SET('Imposing Presence', function (u, b) { dmgMod(b, u, function (c) { if (u.hp >= b.maxHp(u) - 0.5) c.bonus += 0.25; }); });
  SET("Monelisse's Teardrop", function (u, b) {
    u.flags.moneT = -999;
    b.on(u, 'fatal', function (f) {
      if (f.tgt !== u || f.saved || b.t - u.flags.moneT < 120) return;
      u.flags.moneT = b.t;
      f.saved = true;
      b.apply(u, u, 'Immortality', 1, 3);
      b.apply(u, u, 'Damage Reduction', 1, 10, { value: 0.15 });
    });
  });
  SET('Chaos Symbiosis', function (u, b) {
    b.on(null, 'battleStart', function () {
      var n = b.allies(u, false).filter(function (a) { return a.h && u.h && a.h.sc === u.h.sc; }).length;
      u.s.atkP += 0.06 * n;
    });
  });
  SET('Fearless Challenge', function (u, b) { dmgMod(b, u, function (c) { if (b.maxHp(c.tgt) >= 1.5 * b.maxHp(u)) c.bonus += 0.16; }); });
  SET('Death Record', function (u, b) {
    b.on(u, 'hit', function (e) { if (e.src === u && isDot(e.o) && e.tgt.alive) e.tgt.flags.deathRec = b.t + 12; });
    b.on(null, 'modifyDamage', function (c) { if (isDot(c.o) && c.tgt.flags.deathRec > b.t) c.vuln += 0.2 / Math.max(1, b.units.filter(function (x) { return x.alive && x.spec && x.spec.sets && x.spec.sets.some(function (s) { return (s.name || s) === 'Death Record'; }); }).length); });
  });
  SET('Schadenfreude', function (u, b) { b.on(u, 'debuffApplied', function (e) { if (e.src === u) b.heal(u, u, 0.02 * b.maxHp(u), { tag: 'set' }); }); });
  SET('Magic Crystal Refinement', function (u, b) { u.s.atkF += 3 * Math.max(0, u.s.acc); });
  SET('Ancestral Guidance', function (u, b) {
    b.on(u, 'hit', function (e) {
      if (e.src !== u || e.o.tag !== 'basic' || e.amount <= 0) return;
      b.heal(u, u, e.amount * (u.hp < 0.25 * b.maxHp(u) ? 1.0 : 0.5), { tag: 'set' });
    });
  });
  SET('Clean Sweep', function (u, b) {
    b.on(u, 'second', function (e) {
      if (e.u !== u) return;
      if (u.energy >= b.R.ultMax && !u.flags.sweep) { u.flags.sweep = true; b.dispel(u, 99, 'debuff'); }
      if (u.energy < b.R.ultMax) u.flags.sweep = false;
    });
  });
  SET('Iron Bastion', function (u, b) {
    b.on(u, 'crit', function (e) { if (e.tgt === u && e.src.side !== u.side) b.apply(u, e.src, 'Crit Rate Penalty', 0.5, 5, { mods: { critRate: -0.3 } }); });
  });
  SET('Impregnable', function (u, b) {
    b.on(u, 'statusApplied', function (e) {
      if (e.tgt !== u || e.kind !== 'buff' || !b.chance(0.5)) return;
      var st = b.has(u, e.base); if (st) st.undispellable = true;
    });
  });
  SET('Sky Code Treaty', function (u, b) {
    u.flags.skyT = -999;
    b.on(u, 'shielded', function (e) {
      if (e.src !== u || b.t - u.flags.skyT < 20) return;
      if (b.dispel(e.tgt, 1, 'debuff')) u.flags.skyT = b.t;
    });
  });
  SET('Mark of Austerity', function (u, b) {
    var st = null;
    function upd() {
      if (!u.alive) return;
      if (!st || u.sts.indexOf(st) < 0) { b.buff(u, u, 'Austerity', 9999, { atkSpd: 0 }, { undispellable: true }); st = b.has(u, 'Austerity'); }
      if (st) st.mods.atkSpd = 0.15 * Math.floor((1 - u.hp / b.maxHp(u)) * 10 + 1e-9);
    }
    b.on(null, 'battleStart', upd);
    b.on(u, 'damaged', function (e) { if (e.tgt === u) upd(); });
    b.on(u, 'healed', function (e) { if (e.tgt === u) upd(); });
  });
})(typeof window !== 'undefined' ? window : globalThis);
