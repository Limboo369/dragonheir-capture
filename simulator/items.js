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
