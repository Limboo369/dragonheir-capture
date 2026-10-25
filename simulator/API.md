# DHSim API (v0.3)

One file for the browser: `dist/dhsim.js` (about 770 KB, no dependencies, no build step at runtime). 58 heroes have hand-written kits; every other hero gets an auto kit read from its skill text.
It defines `window.DHSim` with the official data already loaded.
In Node: `const S = require('./node-loader.js')`.

## Hero spec

```js
{ hero: 'Auster' | 21030,          // name or dragonheir.info id
  level: 60,                       // default 60; stars default to the level cap rule (30/50/70/90)
  stars: 3, insp: 0,               // inspirations unlocked (0-5)
  gear: 'dps' | 'poison' | 'support' | 'tank' | 'none' | {atkF, atkP, hpF, hpP, defF, defP, critRate, critDmg, acc, res, ench, haste},
  artifact: { name: 'Ring of Winter', level: 20, tier: 0 },   // tier 0-5 = effect upgrade step
  sets: ['Thornvine Entanglement', {name: 'Calcined Ruin', pieces: 2}],
  stats: { atk, hp, def, critRate, critDmg, acc, res, ench, haste } // measured in-game totals; overrides the model
}
```

`critRate` and `critDmg` are fractions (0.25 = 25%). `acc`, `res`, `ench`, `haste` are points.

## Calls

| Call | Returns |
|---|---|
| `DHSim.simulate({team, enemy, mode, seconds, runs, seed, rules, captain, timelineStep, log})` | `{runs, winRate, ttk, dps, teamHpLeft, clear, perHero[], captain, enemy, timeline, confidence, notes}` |
| `DHSim.compare(a, b, {objective, runs})` | `{a, b, delta, deltaPct, better}` (same random seeds for both) |
| `DHSim.rankCandidates(opts, slot, poolIds, {objective, runs})` | list sorted best first: `{hero, name, score, dps, winRate, ttk, teamHpLeft, kit}` |
| `DHSim.rankVariants(opts, slot, [{label, patch}], {objective})` | artifact / set / gear options for one hero, best first |
| `DHSim.optimizeTeam(opts, rosterIds, {objective, fixed, runs})` | `{team, specs, score, steps, result}` by one-swap local search |
| `DHSim.statWeights(opts, slot, {steps})` | damage gain per stat step (ATK%, crit, crit dmg, Enlightenment, haste, flat ATK, accuracy) |
| `DHSim.sensitivity(a, b, {objective})` | re-runs a comparison across every assumed rule range; `robust: true` if the winner never flips |
| `DHSim.buildStats(spec)` / `DHSim.nakedStats(hero, level, stars)` | stat sheets |

- `enemy`: `{preset: 'dummy' | 'dummy5' | 'boss' | 'bossHard' | 'waves', level, hpX, atkX, defX, res}` or `{team: [specs]}` for team vs team (arena).
- `mode`: decides which captain auras apply: `'arena'`, `'grave_of_venom'` (any `grave`/`goblin`/`ruins`/`battlefield` = dungeon), `'fey_meander'`, `'trial'`, anything else = only "all battles" auras.
- `captain`: team index of the captain (default 0).
- `objective`: `'dps'` (default), `'clear'` (win fast, else progress), `'ttk'`, `'win'`, `'survival'`.
- `perHero[]`: `{slot, heroId, name, kit ('hand'|'auto'), damage, share, by: {basic, battle, ult, passive, dot, artifact, set}, healing, shielding, taken, deathRate, ults, battles, basics}`.

## Confidence

Every result has `confidence`: `level` ('medium' when all heroes have hand-written kits, 'low' if any use the auto kit), `assumedRules`, `autoKits`.
Rules live in `DHSim.RULE_INFO` (value, `conf`: verified / reported / estimated / assumed, note with source, plausible range). Override per call with `rules: {defK: 900, scrolls: 'none'}`.
Hero stats, skill numbers, artifacts and sets come from the official tables; charge times per hero, Skill Haste, Accuracy vs Resistance and status values from sourced rules; the DEF curve, gear profiles, animation locks and enemy stats are assumptions. See MODEL.md for every source, and CALIBRATION.md for the in-game tests that replace the guesses.

Useful battle helpers for kits: `b.landChance(src, tgt, chance, skill, noRes)`, `b.tierValue('Defense Up', 2)`, `b.rechargeRate(u)`, `b.ultFull(u)`, `b.timing(u, 'uc')`.

## v0.3 survival API

| Call | Returns |
|---|---|
| `DHSim.simulate(opts).survival` | `{win, loss, timeout, anyDeath, firstDeath, wipeAt, band: [[p10,p50,p90] per s], alive: [per s], incomingDps, healPs, absorbPs, sustain, runs: [{seed, result, t, hpLeft, deaths}]}` |
| `perHero[i]` (new fields) | `maxHp, minHp {p10,p50,...}, deathTime {p50,...}, absorbed, debuffTries, debuffLanded, landRate, resisted, takenBy` |
| `DHSim.replay(opts, seed, step)` | `{seed, result, t, units: [{uid, side, name, heroId, isBoss, maxHp}], frames: [{t, u: [[uid, hp, maxHp, shield, energy, alive, statuses]]}], events: [{t, k, s, g, a, ...}]}`; event kinds: d damage, h heal, s shield, u ult, k battle skill, b status applied, m resisted, x death, bs boss skill, sp summon |
| `DHSim.pickRun(result, 'typical'\|'worst'\|'best')` | one entry of `survival.runs` |
| `DHSim.runBatch(opts, from, n)` / `DHSim.summarize(battles, opts)` | building blocks for chunked runs |
| `await DHSim.survival.run(opts, {runs, onProgress})` | same as `simulate`, yields between batches |
| `await DHSim.survival.breakingPoint(opts, {runs})` | `{power, margin, capped?}` |
| `await DHSim.survival.healerCheck(opts, pool, {stress, runs})` | `{stress, current, add: [...], without: [...], verdict: 'yes'\|'maybe'\|'no'\|'none'}` |
| `await DHSim.survival.robustness(opts, {runs, keys})` | `{base, rows: [{rule, value, win, hpLeft, deaths}], min, max, robust, verdict, worst}` |
| `DHSim.survival.defense(result, opts)` | per hero `{hp, def, res, ehp, dmgCut, takenShare, aloneSeconds}` |
| `DHSim.survival.fromAccount(json)` | `{heroId: spec}` from a "dragonheir-account" export (typed totals, sets by piece count, artifact) |

New enemy presets: `harpy`, `xenos`, `scavenger`, `gruentius`, `fyre` (each with `skills` and `mechanics` for display); option `stage9` for Xenos. New rules: `bossPower`, `frostStacks`, `frostBurst`, `frostBurstCap`, `chanceAdd`. Spec `stats.totals: true` = typed hero-screen totals (no double counting).

UI: `DHBattleUI.mount(el, host)` from `ui/battle-ui.js`; host `{load(key), save(key, value), pics, owned, defaultTeam, defaultArtifacts}`; it stores its setup under key `sim/loadout`.
