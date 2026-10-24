# DHSim API (v0.1)

One file for the browser: `dist/dhsim.js` (about 650 KB, no dependencies, no build step at runtime).
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

- `enemy`: `{preset: 'dummy' | 'dummy5' | 'boss' | 'waves', level, hpX, atkX, defX, res}` or `{team: [specs]}` for team vs team (arena).
- `mode`: decides which captain auras apply: `'arena'`, `'grave_of_venom'` (any `grave`/`goblin`/`ruins`/`battlefield` = dungeon), `'fey_meander'`, `'trial'`, anything else = only "all battles" auras.
- `captain`: team index of the captain (default 0).
- `objective`: `'dps'` (default), `'clear'` (win fast, else progress), `'ttk'`, `'win'`, `'survival'`.
- `perHero[]`: `{slot, heroId, name, kit ('hand'|'auto'), damage, share, by: {basic, battle, ult, passive, dot, artifact, set}, healing, shielding, taken, deathRate, ults, battles, basics}`.

## Confidence

Every result has `confidence`: `level` ('medium' when all heroes have hand-written kits, 'low' if any use the auto kit), `assumedRules`, `autoKits`.
Rules live in `DHSim.RULE_INFO` (value, `conf`, note, plausible range). Override per call with `rules: {defK: 900, battleCd: 12}`.
Hero base stats, growth, skill multipliers, artifact and set numbers come from the official tables. Cooldowns, energy, DEF curve, buff tier values and status rules are assumptions until calibrated (see MODEL.md).
