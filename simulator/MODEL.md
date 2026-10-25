# DHSim combat model (v0.3)

DHSim is a time-step battle simulator for Dragonheir: Silent Gods. It plays the same fight many times (Monte Carlo) and compares heroes, teams, artifacts and stats by their simulated result, not by internet tier lists. This page says what every number in the model is based on, so a result can be judged by how much of it is known and how much is guessed.

**How to read results:** use them to compare options on equal terms (same level, same gear profile, same enemy). Do not read them as exact in-game damage. The two biggest unknowns are the DEF curve and real gear stats; a verdict that survives the sensitivity check (`DHSim.sensitivity`) does not depend on either.

## What is known exactly (official data)

- **Hero stats:** base stats, growth per level and star bonuses from the official tables that dragonheir.info loads from i.dmzgame.com (`heroes-2025.json`, `heroLevelBase.json`), using the formula of the official site's hero calculator. Test: `tests/kits.test.js` (Auster Lv60).
- **Skill numbers:** every multiplier, chance and duration in the 58 hand-written kits is read from the official skill text (max skill level).
- **Artifacts and sets:** stat values per level and effect texts from `equip-2025.json`.
- **Captain auras:** stat, value and which battles they apply to, from the official table.

## Sourced game rules

| Rule | Model | Source (date) | Confidence |
|---|---|---|---|
| Basic attacks | attacks per second = attack_frequency x (1 + Attack Speed) | dragonheir.info article 103 (2024-02-02); CN wiki 2023-09 | verified |
| Skill charging | battle skill and ultimate charge by time: 1 energy per second, no energy from hits | article 103; Reddit 2024-06-30 | verified / reported |
| Charge times | per hero (187 heroes): e.g. Auster ult 14 s first, then every 24 s; Hvitar 13/20 s; most battle skills 5 s first, then every 10 s. Max scroll upgrades. | CN GameKee wiki (2023-09); Vinyara/Thia 12/18 s from a 2025 report | reported (may have changed in the 2025 relaunch) |
| Skill Haste | recharge speed x (1 + 0.002 x haste): 100 haste turns 20 s into 16.67 s | article 103; in-game recharge screen quoted on Reddit (2023-12-27) | verified |
| Recharging Speed Penalty | recharge speed x 0.7 | CN wiki glossary 2023-09; Reddit 2024-06-30 | verified |
| "Ultimate Energy by X" | X% of the hero's bar (the English table drops the % sign) | CN skill texts | verified |
| Crit | hit x (1 + Crit Damage) with chance Crit Rate | community formula; tooltips | reported |
| Enlightenment | Derivative damage (poison ticks, "Derivative" hits) x (1 + Enlightenment/200); cannot crit; "[+X%Enlightenment]" in a skill = X% x Enlightenment | article 103; CN guide 2025-04 | verified |
| Accuracy vs Resistance | skill chance first, then a curve on ACC minus RES: -50 = 17%, -30 = 76%, 0 = 90%, +50 = 95%, +200 = 97% (never above 97%) | developer Q&A 2025-12-09 (dragonheir.info #1693); official S1 test table; CS reply 2023-10-19 | verified (negative side from S1) |
| Buff and debuff tiers | Defense Up 30/60%; Attack, Defense and Accuracy Penalty 25/50%; Attack Speed Up 25/50%; Crit Rate Up +20 points; Crit Damage Up +30%; Damage Reduction 30%; Healing Reduction 50% | official S1 status table (article 103) | verified for S1; the 2025 relaunch may have changed them |
| Frozen | cannot act, gains no energy, takes 30% less damage | article 103 | verified |
| Bosses | immune to control and execution | official boss pages (2025) | verified |
| Boss rhythm | one skill every 6 s on an 18 s cycle (Graves, Ancient Battlefield); energy drain only pushes the current 6 s step back | HellHades 2025-07-30; boss intel screens | reported |
| Support bond | 2 / 3 Support heroes: every ally gets a 30 s shield of 10% / 15% max HP at battle start | Steam overhaul preview 2025-05-12; CN official post | verified |
| No damage variance | identical hits deal identical damage | Reddit test 2023-05-30 | reported |

## Damage formula

```
raw     = sum(skill coefficient x stat)          (ATK, Enlightenment, max HP, DEF, target max HP)
damage  = raw x (1 + damage bonus) x (1 + target vulnerability) x (1 - target Damage Reduction, max 80%)
              x (1 + Crit Damage) if it crits (not for Derivative damage)
              x (1 + Enlightenment/200) for Derivative damage
              x 0.7 if the target is Frozen
              x defK / (DEF x (1 - DEF ignore) + defK)     unless True damage
```

The order of the bonus buckets and the DEF curve are **not published anywhere** (checked: 1,195 Steam posts, 654 dragonheir.info articles, 415 HellHades pages, CN/TW sources). `defK = 1200` is a placeholder; the sensitivity check runs every comparison again at 600 and 2400.

## Guesses (until measured in game)

- **DEF curve** (`defK`), damage bucket order, level difference effect.
- **Gear:** one stat profile per role (`GEAR_PROFILES` in sim.js: dps, poison, support, tank). Real gear numbers per slot are not served to the website. Entering a hero's real totals (`stats: {atk, hp, def, ...}`) replaces the profile.
- **Animation locks:** 0.8 s after a battle skill, 1.5 s after an ultimate.
- **Poison per stack:** 6.5% of the caster's ATK per second (derived from the S1 cap and a current hero text; range 4-10%).
- **Enemies:** no source anywhere publishes boss HP, ATK or DEF. The benches use a level-matched reference hero times multipliers: boss = 40x HP, 2.2x ATK; hard boss = 2.8x ATK; three waves = 900k HP in total at level 59. Sanity check: an old Goblin Lair difficulty 5 run by a level-60 team dealt 718,268 damage in 58 s (dragonheir.info statistics screen, 2024); the main team clears the waves bench in about 85 s.
- **Bonds other than Support** (Frost, Poison, Rally, Wild, Summon, Dauntless): their numbers are not published, so they are off.
- **Kit readings:** where a skill text is unclear, the kit says `ASSUMED:` in a comment (kits.js, kits/extra-ice.js, kits/extra-poison.js).

## All rules and their ranges

Every rule can be overridden per call (`rules: {defK: 900}`); `DHSim.sensitivity(a, b)` reruns a comparison at both ends of every range and says whether the winner ever flips.

| Rule | Value | Confidence | Range tested | Basis |
|---|---|---|---|---|
| dt | 0.05 | model | - | Simulation time step in seconds. |
| maxTime | 90 | assumed | - | Fight length cap (s) when the mode sets none. |
| ultMax | 100 | estimated | 100 to 100 | Ultimate energy bar. Skill texts move energy in steps up to 100 (Vinyara drains 100), so the bar is read as 100. |
| ultFull | 20 | reported | 18 to 24 | Full ultimate charge time (s) at 0 Skill Haste. Most heroes show 20 or 23 s in game (CN guide 2025-04-18, HellHades 2025-07-30). |
| ultFirst | 12 | reported | 9 to 18 | First ultimate ready at (s). In-game examples 10.9, 17 and 18 s. |
| energyRegen | auto | model | - | Override for energy per second; empty = ultMax / ultFull. |
| energyPerBasic | 0 | estimated | 0 to 4 | Ultimate energy per basic attack. The game shows fixed charge times, so energy is read as time-based only. |
| energyPerHitTaken | 0 | estimated | 0 to 1 | Ultimate energy per hit taken (same reasoning). |
| battleCd | 10 | reported | 8 to 14 | Battle skill recharge (s) when the kit gives none. In-game examples 10 and 12 s. |
| battleFirst | 5 | reported | 3 to 7 | First battle skill ready at (s). In-game examples 5 and 7 s. |
| heroTiming | true | reported | - | Use per-hero charge times from the CN wiki (2023-09, 187 heroes; Vinyara/Thia from a 2025 report). Off = the defaults above for everyone. |
| scrolls | "max" | assumed | - | Skill scroll upgrades: 'max' (matches the max-level skill numbers the kits use) or 'none' (unscrolled charge times, about 2-3 s slower). |
| castBattle | 0.8 | assumed | 0.5 to 1.2 | Animation lock after a battle skill (s). |
| castUlt | 1.5 | assumed | 1 to 2.5 | Animation lock after an ultimate (s). |
| basicMult | 1 | assumed | 0.8 to 1.2 | Basic attack = this x ATK. |
| attackFreqMeaning | "perSecond" | verified | - | attack_frequency = basic attacks per second (0.4 = one every 2.5 s, official wiki article 103). |
| hastePerPoint | 0.002 | verified | 0.0015 to 0.0025 | Recharge speed = 1 + Skill Haste x this (5 haste = +1%, official wiki article 103; a 2025 CN guide implies 0.0018). Applies to battle skill and ultimate. |
| defK | 1200 | assumed | 600 to 2400 | DEF mitigation = DEF / (DEF + defK). No source publishes the DEF formula; calibrate in game. |
| dmgRedCap | 0.8 | assumed | - | Cap on summed Damage Reduction. |
| accShift | 0 | verified | -15 to 15 | Debuff land chance by ACC minus RES: developer Q&A 2025-12-09 (0 to +50 = 90-95%, +200 = 97%) and the official S1 test (-30 = 76%, -50 = 16%). This shifts the curve in points. |
| landCap | 0.97 | reported | 0.95 to 1 | At least 3% of hostile effects are always resisted (CS reply 2023-10-19). |
| tierScale | 1 | verified | 0.75 to 1.25 | Buff/debuff tier values come from the official S1 table (Defense Up 30/60%, penalties 25/50%, Crit Rate Up 20%, Crit Damage Up 30%, Damage Reduction 30%). They may have changed after the 2025 relaunch; this scales them all. |
| flatTier | 50 | reported | - | Flat Accuracy/Resistance Up or Penalty per tier (CN tooltip: +50). |
| frozenDmgTaken | 0.3 | verified | - | Frozen units take 30% less damage (official S1 table). |
| frostAtkSpd | 0 | assumed | 0 to 0.2 | Frost slow on attack speed. No source states one, so off. |
| poisonPerStack | 0.065 | estimated | 0.04 to 0.1 | Poison: each stack deals this x caster ATK per second as Derivative damage (x Enlightenment bonus). Not published for the current game; S1 capped a 5 s tick at 30% ATK (6%/s) and a current hero text implies a 20% ATK cap per tick (about 6.7%/s at 3 s ticks). |
| poisonMaxStacks | 20 | assumed | - | Max Poison stacks per target. |
| burnPerStack | 0.1 | assumed | - | Burn per stack per second x caster ATK. |
| derivEnch | 200 | verified | - | Derivative damage (DoT) x (1 + Enlightenment / this) and cannot crit (official wiki article 103). |
| dotCanCrit | false | verified | - | Derivative damage cannot crit (official wiki article 103). |
| derivativeIgnoresDef | false | reported | - | Derivative damage is still reduced by enemy DEF and level (Reddit test 2023-05-30). |
| areaSize | 3 | assumed | 2 to 5 | Enemies hit by an "enemies within range" skill when more are alive. |
| bossControlMult | 0 | verified | 0 to 0.5 | Bosses are immune to control (official boss pages). Set above 0 to test partial control. |
| rechargePenalty | 0.7 | verified | - | Recharging Speed Penalty: recharge speed x 0.7 (official S1 table: -30%). |
| bonds | true | verified | - | School bonds with published numbers (Support: 30 s shield of 10%/15% max HP). Frost, Poison and other bond numbers are not published, so those bonds are not modelled. |
| poisonInterval | 3 | assumed | 3 to 5 | In-game seconds between Poison ticks. The engine ticks every 1s at the same damage rate; this sets Vicana's interval cut (x interval/(interval-2)) and the size of a Poison Explosion (one tick of every stack). |

## v0.3: survival (2026-10-25)

v0.3 adds the enemy side of the fight so results answer "do we live": the boss hits back on its real skill rhythm, heroes die, healing and shields matter, and every number comes from hundreds of fights with fresh dice.

| Rule / feature | Model | Source | Confidence |
|---|---|---|---|
| Season 1 bosses | Deadly Harpy (Grave of Venom), Blood Prince Xenos (Grave of Curse), Colossal Scavenger (Grave of Rot), Soul Devourer Gruentius (Ancient Battlefield), Dead Phoenix - Fyre (Heretical Ruins); `bosses-s1.js` | mechanics: dragonheir.info 836/841/846/851/855 (2025-09-10); rhythm: HellHades 2025-07-30 | mechanics verified, numbers assumed |
| Boss targeting | explicit per skill: front line (tank first, taunt wins), random, highest ATK, farthest (back line), all, area; listed in each preset's `skills` | boss pages above | reported |
| Boss numbers | HP 35-45x and ATK 2.2-2.6x a level-matched reference hero, skill multipliers 0.4-3.2x ATK, times `bossPower` | none published anywhere | assumed (range 0.75-1.4x) |
| Frost (Reborn) | stacks to 5; the 5th stack bursts for 3% of the target max HP as Cold damage (capped at `frostBurstCap` x ATK, 4 by default) and resets; Frost bond [2] freezes 5 s on the burst (bosses immune), [3] adds Cold | Steam overhaul preview 2025-05-12, CN beta 2025-01-21 | verified; the cap is assumed |
| Set pieces | Legendary: 2 pieces = stats, 3 = effect; Mythic: 1 piece = effect; Epic/Rare: 2 = stats | game config (gear-sets.json) | verified |
| 38 Beginner-pool sets | every effect coded in `items.js` from the config text (Imperial Executioner +16% on skill crits, Ancestral Protection 15% redirect, Monelisse's Teardrop, ...) | equip-2025.json | verified texts; how "redirect" and "+X% chance" stack is assumed |
| "+X% chance" artifacts | added to the skill chance (75% + 20% = 95%), then the ACC vs RES curve multiplies | not stated in game | assumed (`chanceAdd`) |
| Typed hero-screen totals | `stats: {..., totals: true}` replaces the model for those stats; set 2-piece stats and artifact main stats are NOT added again; set and artifact effects, captain aura, bonds and battle buffs still apply | the hero screen shows totals with gear | verified behaviour of the game UI |
| Max HP reduction | `u.maxHpCut` lowers max HP and the heal cap (Xenos) | boss page 855 | mechanics verified, size assumed |
| Healing Reduction / Prohibition | x0.5 / x0 healing received | S1 status table | verified |

**Survival outputs** (`result.survival`): win / loss / timeout split, team HP band per second (10th, 50th, 90th percentile of fights), heroes alive per second, first death, damage taken per second vs healing and shields per second. Per hero: death rate, median time of death, lowest HP, damage taken, debuffs tried / landed / resisted.

**Analyses** (`survival.js`, async): `breakingPoint` (boss strength where the team wins half its fights), `healerCheck` (every owned healer or shielder swapped in, and the team's own healers swapped out, at a stronger boss), `robustness` (win rate with each assumed rule at both ends of its range; reports when the verdict changes), `defense` (effective HP per hero).

**Replay**: `DHSim.replay(opts, seed)` reruns one fight with a trace: a frame every 0.2 s (HP, max HP, shield, energy, statuses per unit) and every event (damage, heal, shield, cast, debuff landed or resisted, death, boss skill name). `pickRun(result, 'typical' | 'worst' | 'best')` picks the seed.

**Calibration path for bosses**: after one real fight, compare the in-game Statistics screen (damage taken by the team, clear time) with the replay of the same team and set `bossPower` so damage taken per second matches.

## Files

| File | What it is |
|---|---|
| `sim.js` | engine: stats, battle loop, statuses, rules, Monte Carlo, compare, rank, optimise, sensitivity |
| `kits.js`, `kits/extra-ice.js`, `kits/extra-poison.js` | 58 hand-written hero kits from the official skill texts |
| `items.js` | coded artifact and set effects |
| `enemies.js` | enemy benches (dummy, five dummies, boss, hard boss, waves) |
| `bosses-s1.js` | Season 1 dungeon bosses with mechanics and per-skill targeting |
| `survival.js` | async survival analyses, account import |
| `ui/battle-ui.js` | survival simulator screen (DHBattleUI.mount), used by the demo page and the Companion |
| `demo/battle-sim.html` | standalone Battle Simulator page |
| `data/sim-data.js` | official data, built by `tools/build_data.py` |
| `research/` | sourced research: formulas, timing (per hero), bosses |
| `dist/dhsim.js` | one-file browser bundle (`tools/bundle.py`) |
| `demo/battle-lab.html` | Battle Lab page |
| `tools/report.js` | standard roster analysis, writes `results/report.md` |
| `tests/*.test.js` | 120 checks: kit numbers vs skill texts, sourced rules, survival acceptance tests (T2-T19) |

Run: `node tests/kits.test.js` (and the other test files), `node tools/report.js 30`, `python3 tools/bundle.py`.

## v0.4 (2026-10-25): stages, all S1 dungeons, skill levels, screenshots

Darko's asks D10-D14 (sim-review/REQUIREMENTS.md section E).

- **Dungeons as named in game**, all available on a Season 1 server: Grave of Venom / Curse / Rot (gear), Heretical Ruins / Ancient Battlefield (runes), Goblin Lair (EXP, Gold), Flame / Tempest / Frost Domain (Talent Stones; in-game also "Talent - Wildfire / Resplendence / Permafrost"), Temporal Vortex (daily score). The "Training boss" is no longer offered in the UI.
- **Stages instead of Easy/Hard.** Boss level per stage from official screenshots (Venom 8 = Lv100, Ruins 7 = Lv145, Battlefield 7 = Lv160, Goblin 9 = Lv100; research/bosses.md). [estimated] A team of level L meets "normal" strength at boss level L + 40; each 10 boss levels away multiplies boss HP and ATK by 1.12. Domain levels (40 + 15 x stage) and Vortex levels (40 + 20 x difficulty) are not published [guess]. `bossPower` stays as a separate "Boss estimate" correction in settings (-20% / estimate / +30% / +60%).
- **Goblin Lair** [sourced structure, estimated size]: 6 waves x 5 goblins, no boss; total HP about 60x a hero (legacy difficulty 5: 718k damage in 58 s at level 60); stars 3/2/1 at more than 50/25/0 s left; time limit 120 s [guess].
- **Talent Domains** [sourced mechanics, dragonheir.info 584/589-591]: each boss counters two elements (Flame: Fire, Poison; Tempest: Lightning, Radiance; Frost: Ice, Necrosis), [guess] -30% damage dealt and +30% taken. Tempest: every heal gives both sides +3% recharge (max 20 stacks) [guess size]; Ultimate self-damage and 5 hatchlings, +10% boss damage each. Frost: +4% Damage Reduction per debuff she lands (max 40%), area Stun 5 s. Flame: Burn, Ultimate grows with Burn stacks.
- **Temporal Vortex (S1 Sea King)** [sourced mechanics, dragonheir.info 570/586/1149/1597]: score fight, skill every 5 s, Call of Lightning on the highest-HP hero. [estimated] boss cannot die, damage x1.15 per 20 s cycle, 8 minute cap. Result = damage score and how long the team lasts.
- **Skill levels** (Battle and Ultimate 1-5; passives have no level). The skill texts in the data are level-1 texts: Garrika's official config text matches the level-1 tooltip (75% chance, which level 4 raises by 25 points; ayumilove 2023). Steps added on top [reported pattern, per hero in game]: Battle Lv2 +5% damage, Lv3 +10%, Lv4 +25% chance, Lv5 -3 s recharge; Ultimate Lv2 +10% damage, Lv3 +25% chance, Lv4 -3 s recharge, Lv5 +10% damage [guess]. Level 1 = the old behaviour. `SKILL_LV` in sim.js.
- **Screenshots** (UI): a hero screenshot is read by Claude through the host (artifact `sample` capability with images, the viewer's own account) and fills level, stars, stats, artifact, gear sets and skill levels. Paste (Ctrl+V), drop or choose files; several screenshots of the same hero merge. Fields it filled are outlined green for checking.
