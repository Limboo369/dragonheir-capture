# Dragonheir: Silent Gods: combat formulas for the battle simulator

Research date: 2026-10-24. The machine-readable version is `formulas.json` in this folder. Its generator script is `.build_formulas.py`; run it with `python3 -I .build_formulas.py formulas.json`.

**Confidence levels**
- **verified**: official text (game data, official wiki at dragonheir.info, customer service, or a developer Q&A), or two independent sources that agree.
- **reported**: a single community source.
- **estimated**: derived by us; the derivation is given.
- **NOT FOUND**: searched for, with nothing published.

**Which game version the numbers come from.** Many official numbers come from wiki article 103, which dates from Season 1 (late 2023). The game was relaunched as "Reborn" in mid-2025, with a combat rework: school bonds, a shared Soul Level, and talents. Entries tagged `era: S1-2023` may have changed since then.

**What this adds to the knowledge base.** This file extends `knowledge/sections/combat-math.md`. It settles several of that file's open hypotheses:
- H-SH: the Skill Haste curve is known.
- H-AS: what `attack_frequency` means is known.
- Enlightenment: the formula is confirmed.
- T6: the buff tier values are known.

It also corrects one guess in KB §13: Defense Penalty II is **−50 %**, not −30 %.

---

## 1. Damage

| Item | Value | Conf. | Source (date) |
|---|---|---|---|
| Skill multiplier | `[+300%Attack]` = 3.00 × ATK. Other scaling stats appear as `[+X%Max HP]`, `[+X%Defense]` and `[+X%Enlightenment]`. One skill can sum several terms, e.g. `[+135%Attack][+640%Enlightenment]`. | verified | `raw-official/heroes-2025.json` (official data) |
| Damage variance | **None.** "Damage was consistent and predictable on every hit." | reported | https://www.reddit.com/r/Dragonheir_SilentGods/comments/13vzu0l/ (2023-05-30) |
| Critical hit | A crit multiplies the hit by (1 + CritDamage). Expected damage = base × (1 + min(CR, 1) × CD). Base `crit_bonus` = 0.5 (+50 %). Base `crit_chance` is set per hero, often 0.1. | verified (base values) / reported (formula) | heroes-2025.json; https://www.reddit.com/r/Dragonheir_SilentGods/comments/18fhasz/ (2023-12-11) |
| Derivative Damage cannot crit | Official: "Derivative Damage cannot be Crit Damage". | verified | https://www.dragonheir.info/article/103 (2024-02-02; S1) |
| Derivative Damage is not True Damage | Derivative Damage still falls with enemy level and defense. | reported | Reddit 13vzu0l (2023-05-30) |
| True Damage | Ignores DEF. Not affected by ordinary damage increase or reduction. **Can crit**, and Crit Damage applies. Some hero bonuses exclude it ("excluding True Damage"). | verified | https://www.dragonheir.info/article/1747 (2025-12-15) |
| Elements | Each hit carries the hero's element. **No per-element resistance stat exists.** The Resistance stat only affects whether debuffs land. Element matters only through specific modifiers (boss effects, bonds, Elemental Affinity). | reported | https://www.reddit.com/r/Dragonheir_SilentGods/comments/191ihvz/ (2024-01-08) |
| Elemental Affinity, column 5 | +15 % elemental damage. How it stacks with other bonuses is unknown. | reported | https://www.reddit.com/r/Dragonheir_SilentGods/comments/1htpdgf/ (2025-01-04) |
| Damage Reduction buff | −30 % damage taken. | verified | article 103 (2024-02-02; S1) |
| Frozen | −30 % damage taken while frozen. | verified | article 103 (S1) |
| Level difference | A higher enemy level lowers damage. The size of the effect is **NOT FOUND**. | reported | Reddit 13vzu0l (2023-05-30) |
| PvP | Ultimate Energy Reduction effects are 50 % weaker in Grand Gladiator Arena. No other PvP damage modifier is published. | verified | https://www.dragonheir.info/article/46 (2023-10-18) |
| Damage buckets | **NOT FOUND.** See the simulator assumption below. | — | — |

**Simulator model (an assumption, not a published formula).** The pieces below are known. How they are composed (additive or multiplicative) is not:

```
hit = Σ(coef_i × stat_i)                       # skill text: ATK, MaxHP, DEF, Enlightenment terms
    × (1 + Σ DamageBonus)                      # assumed additive within the bucket
    × (1 + Σ ElementalBonus)                   # assumed a separate bucket
    × critFactor                               # 1 + CD on a crit; never for Derivative Damage
    × (1 + Enl/200)                            # Derivative Damage only (verified)
    × Π(1 − DR_j)                              # Damage Reduction 30 %, Frozen 30 % (assumed multiplicative)
    × defFactor(DEF_eff, K)                    # formula unknown; omitted for True Damage
    × levelFactor                              # unknown
```

Treat `K`, `levelFactor` and the bucket layout as parameters to calibrate. Use the knowledge-base tests T4 (DEF) and T5 (buckets).

## 2. Defense

| Item | Value | Conf. | Source (date) |
|---|---|---|---|
| DEF → mitigation formula and constant K | **NOT FOUND.** The in-game tooltip says only "the higher the defense, the higher the damage reduction". Bahamut thread snA=509 "防禦減傷公式" (2023-09-25) asks for the formula and has no answer. Searches in EN (Reddit, HellHades, official wiki), TW (Bahamut), CN (TapTap, GameKee, Bilibili, NGA) and JP/KR found nothing. | — | https://forum.gamer.com.tw/C.php?bsn=77662&snA=509 (2023-09-25) |
| Defense ignore | Skills say "Ignores X % of the target's Defense", e.g. "Ignores 30% of the target's Defense". Read as effective DEF = DEF × (1 − ignore). | verified (text) / estimated (math) | `raw-official/equip-2025.json`, `heroes-2025.json` |
| DEF ignore per Poison stack | "the target's 1% Defense is ignored for every stack of Poison". This is a hero passive. | verified | heroes-2025.json [259] |
| How Defense Penalty, ignore and penetration combine | NOT FOUND. Our assumption: DEF × (1 − DefPenalty) × (1 − ignore). | estimated | — |
| Defense Up I / II | +30 % / +60 % DEF. | verified | article 103 (S1) together with GameKee CN tooltips (2023-09/10) |
| Defense Penalty I / II | −25 % / −50 % DEF. | verified | same as above |

## 3. Accuracy vs Resistance (debuff landing)

**Order of checks** (verified, article 103). First the skill's own chance is rolled, e.g. "75% chance to inflict". If it succeeds, Accuracy is rolled against Resistance. Cleansing an ally never checks ACC/RES. Removing an enemy's buffs or shields does check. Effects that say "ignores Resistance" or "cannot be resisted" skip the second roll.

**Official in-game test.** Source: https://www.dragonheir.info/article/103 (2024-02-02, S1). Each cell is 25 trials, so expect about ±10 % noise.

| D = ACC − RES | ≤ −100 | −70 | −50 | −30 | 0 | +20 | +50 |
|---|---|---|---|---|---|---|---|
| land rate | 0 % | ~10 % | ~16 % | ~76 % | ~92 % | ~94 % | ~98 % |

**Taiwan customer-service reply** (2023-10-19), quoted in https://forum.gamer.com.tw/C.php?bsn=77662&snA=1152 (2023-10-22):
- D = +20 lands 95 % of the time.
- D = −40 lands 50 %.
- D = −100 lands 5 %.
- Resistance always has at least a 3 % chance to resist.

These three points lie exactly on the line p = 0.80 + 0.0075·D, capped at 0.97. That line is our fit, so it counts as *estimated*.

**Developer Q&A**, https://www.dragonheir.info/article/1693 (2025-12-09, Reborn), verified:
- At D ≥ 200, the failure rate approaches 3 %.
- At D between 0 and 50, the failure rate is about 5–10 %.
- This will not change in the short term.

**Other official guidance:**
- Recommended Accuracy is the enemy's Resistance + 20 (official dungeon tables, article 103).
- The in-game Resistance tooltip says the chance to resist rises sharply once Resistance exceeds the enemy's Accuracy by 80. Sources: Bahamut snA=1736 (2024-01-21) and https://dragonheir.fandom.com/wiki/Stats (2024-05-07).

**Recommended simulator curve (estimated).** It blends the three sources above. p_land = skillChance × S(D), with S(D) linear between these points:

| D | ≤−100 | −70 | −50 | −40 | −30 | 0 | +20 | +50 | +100 | ≥+200 |
|---|---|---|---|---|---|---|---|---|---|---|
| S | 0.02 | 0.10 | 0.18 | 0.50 | 0.72 | 0.90 | 0.93 | 0.95 | 0.96 | 0.97 |

The −50 to −30 range is the least certain: the official test drops more steeply there than the customer-service points. Some artifacts, such as Moonlit Harp, add +X % to the skill's own chance, not to Accuracy (Bahamut snA=1152, reported).

## 4. Enlightenment

- **Derivative Damage × (1 + Enlightenment / 200)**, so 40 Enlightenment gives +20 %. Verified, two sources:
  - official, https://www.dragonheir.info/article/103 (2024-02-02);
  - an independent Reddit test (8 Enlightenment gave +4 %, damage 169 → 176), https://www.reddit.com/r/Dragonheir_SilentGods/comments/13vzu0l/ (2023-05-30).
  - The KB's "0.5 %/pt" is the same thing.
- **`[+X%Enlightenment]` in a skill means X % × Enlightenment**, used as a scaling stat in the same way as ATK. It is mostly used for heals, shields and Derivative Damage. Verified: the tooltip text on https://dragonheir.fandom.com/wiki/Stats (2024-05-07), plus the skill texts in the official data.
- "All Thunderbolt damage output scales with Enlightenment." Official article https://www.dragonheir.info/article/825 (2025-09-10), verified.
- Gear values from article 103 (S1), verified:
  - Main stat on a helmet or positive rune at refine 8/12/16/20: Enlightenment 30/50/80/120; ACC/RES 24/40/64/96; Crit Rate and Crit Damage 9/17/27/40 %.
  - Substats start at 9–15 and grow by the same amount each upgrade.

## 5. Timing: Skill Haste, attack speed, energy

| Item | Value | Conf. | Source (date) |
|---|---|---|---|
| Skill Haste | Recharge rate = 1 + 0.002 × Haste (5 Haste = 1 %). Ultimate time = energy cost / rate, so with 100 Haste a 20-energy ultimate takes 20 / 1.2 = 16.67 s. Battle skill time = base cooldown / rate − flat scroll reduction. | verified | article 103 (2024-02-02) and https://forum.gamer.com.tw/C.php?bsn=77662&snA=1035 (2023-10-16; regression confirmed by customer service) |
| Base energy gain | 1 energy per second. | verified | article 103 |
| Recharging Speed Penalty | −30 % recharge rate. Reddit check: a 10 s penalty adds 3 s. | verified | article 103; https://www.reddit.com/r/Dragonheir_SilentGods/comments/1drwlzx/ (2024-06-30) |
| Recharging Speed Up | +5 %. | verified | article 103 (S1) |
| Attack interval | interval = 1 / (attack_frequency × (1 + AttackSpeed%)). Official example: a 2.5 s interval at +25 % becomes 2.0 s. | verified | article 103 |
| `attack_frequency` | Basic attacks per second. Checked against 105 heroes: the GameKee value "攻击间隔 X秒" always equals 1 / attack_frequency, with no mismatches. | estimated (cross-check) | heroes-2025.json together with GameKee (2023-09/10) |

## 6. Buff and debuff tier values

Sources: article 103 (2024-02-02; images 2023-10-31) and GameKee CN keyword tooltips (2023-09-21 to 2023-10-26). The two are independent, so the rows marked verified count as verified. All rows are **S1-era**.

| Buff | Value | Debuff | Value |
|---|---|---|---|
| Defense Up I / II | +30 % / +60 % | Defense Penalty I / II | −25 % / −50 % |
| Attack Speed Up I / II | +25 % / +50 % | Attack Penalty I / II | −25 % / −50 % |
| Accuracy Up I / II | +25 % / +50 % (percent of the stat) | Accuracy Penalty I / II | −25 % / −50 % |
| Crit Rate Up | +20 percentage points | Healing Reduction | −50 % |
| Crit Damage Up | +30 % | Healing Prohibition | −100 % |
| Damage Reduction | −30 % damage taken | Healing Reversal | 50 % of the healing becomes damage, capped at 100 % of the attacker's Max HP |
| Recharging Speed Up | +5 % | Recharging Speed Penalty | −30 % |
| Ally Protection | absorbs 50 % of the incoming damage | | |
| Resurrection at Death | revives at 30 % HP and keeps 75 % of Ultimate Energy | | |
| Attack Up | **no fixed tier**: each skill states its own % (15/20/25/30/40 % seen) | | |
| Accuracy Up / Resistance Up, flat variants | +50 points (reported, GameKee) | | |
| Enlightenment Up | +20 % (reported, GameKee) | | |
| generic "Damage Up" icon | +30 % (reported, GameKee); Reborn skills usually state their own % | | |

## 7. Status rules

Sources are article 103 (S1) and GameKee unless the row says otherwise.

| Status | Rule | Conf. |
|---|---|---|
| Stunned | Cannot act and gains no ultimate energy. | verified |
| Frozen | Cannot act, gains no energy, takes 30 % less damage. | verified |
| Fear | Cannot act, but still gains energy. | verified |
| Silenced | Basic attacks only; no battle skill or ultimate. Still gains energy. | verified |
| Taunt | Forced to basic-attack the taunter. Gains energy but cannot cast its ultimate. | verified |
| Charmed | Attacks its own allies. Gains energy, does not cast its ultimate. | verified |
| Knocked Up | Brief loss of action (the length of the animation). | verified |
| Blind | Basic attacks miss. | verified |
| Immortality | Cannot die, but can still be debuffed. | verified |
| Invincibility | Immune to all damage. | verified |
| Invisibility | Cannot be targeted by single-target skills; area attacks still hit. | verified |
| Debuff Immunity / Control Immunity | Immune to debuffs / immune to control effects. | verified |
| Dispel | Checks ACC/RES only when removing enemy buffs or shields. | verified |
| Shield | **Not a buff**: no buff icon, and buff-dispels do not remove it. Source: https://forum.gamer.com.tw/C.php?bsn=77662&snA=728 (2023-10-03). | reported |
| Hit Recovery | Heals when hit, scaled by DEF. No heal if a shield absorbed the hit. | verified |
| Recovery Over Time | Ticks once per second, scaled by the caster's Max HP. | verified |
| Poisoned (S1) | Every 5 s, deals 0.5 % of the target's Max HP as Poison Derivative Damage, capped at 30 % of the attacker's ATK per tick. Poison Explosion triggers all remaining ticks at once. | verified (S1) |
| Poison (Reborn) | Stacks; skills say "inflicting 2 stacks of Poison for 15.0s". Hero modifiers: +100 % damage per stack (capped at 40 % ATK per stack); "interval reduced by 2s"; 1 % DEF ignored per stack. **The base tick interval and tick damage are NOT FOUND** for Reborn. Source: heroes-2025.json and moqi-2026.json. | verified (texts) |
| Burning (S2) | Area damage every 6 s, up to 10 stacks. Source: https://www.dragonheir.info/article/206 (2024-02-02). The hero Paixton raises the cap to 20 (Bahamut snA=2406, 2026-02-03). | verified / reported |
| Ignite → Burn → Blast (Reborn) | Ignite is a percentage meter ("inflicts 20% Ignite"). A text says "100% Ignite ... converted into Burn", so we take 100 % as the conversion point (estimated). Blast consumes Burn stacks ("Blast for half of their Burn stacks", rounded down). Modifiers: +4 % damage per Burn stack; 1 % Ignite per Burn stack. **Burn tick damage in Reborn is NOT FOUND.** | reported / estimated |
| Ice Crystal | Up to 5 stacks. Each lets the unit cast another battle skill right away (article 206). One hero adds +2 to the cap, making it 7, and gains 1 stack every 5 s. | verified |
| Electrocuted (Thunderbolt) | Every 3 s, hits the target plus up to 4 other enemies that are also Electrocuted. Thunderbolt triggers it once immediately (article 206). | verified |
| Frost (Reborn) | A debuff that stacks to 5. At 5 stacks it deals [+3 % Max HP] Cold damage, scaled by the Frost hero's ATK. With the Frost bond, 5 stacks freeze the target. Sources: https://store.steampowered.com/news/app/2203070/view/1799088287951195 (2025-05-12) and https://www.taptap.cn/moment/630842520921704794 (2025-01-21). **Whether Frost slows: NOT FOUND.** | verified |
| Wild roll (Reborn) | Roll a d6 on each skill cast: +5 % damage per pip, so +5 % to +30 % (mean +17.5 %). The S1 rule was a 30 % chance for the skill to deal 120 %. Source: TapTap 2025-01-21 and Steam 2025-05-12. | verified |
| Static | A hero passive, not a global status. Basic attack / battle skill / ultimate give 1 / 2 / 3 stacks. At 4 stacks, consumes 4 to deal [+100 % ATK] to the nearest enemy. Source: heroes-2025.json [0]. | verified |
| Corrosion | Battle and ultimate damage turn part of the damage, set by Corrosion Intensity, into Corrosion on the enemy. Once the target is "fully corroded", attacks deal full damage. Some skills consume Corrosion to deal True Damage. Source: article 1747 (2025-12-15). | verified |
| Bleed | **Not a status in the current game.** Neither the 2025/2026 hero nor the equipment texts contain it. | verified (absence) |

## 8. School bonds (Reborn) and captain aura

**Rule.** A bond activates when the team has 2 or more heroes of the same school. Tiers are [2] and [3]. Sources: https://hellhades.com/dragonheir-silent-gods-combat-update/ (2025-05-12) and article 1773. Verified.

| School | [2] | [3] | Source (date) | Conf. |
|---|---|---|---|---|
| Aura | 10 Aura Energy at battle start, +10 % Max HP | 20 Aura Energy, +15 % Max HP | https://www.dragonheir.info/article/1773 (2025-12-17) | verified |
| Shadow | When an ally's damage consumes Shadow Energy, it triggers an extra 3×3 area hit once | ... twice | https://www.dragonheir.info/article/1719 (2025-12-12) | verified |
| Corrosion | Corrosion Intensity +3 % | +5 % | https://www.dragonheir.info/article/1747 (2025-12-15) | verified |
| Wild | Dice recharge an Exclusive Skill; at 100 it gives allies Burst for 12 s. During Burst, dice roll +2 | During Burst, every die rolls the maximum | Steam Vol.3 (2025-05-12) + TapTap (2025-01-21) | verified |
| Frost | 5 stacks plus damage inflicts Cold/Frozen; Frozen lasts 5 s | Cold lasts 5 s, and 1 target is inflicted with Cold at battle start | Steam Vol.3 + TapTap | verified |
| Rally | 1 Rally stack at battle start, then again every 30 s | ... every 20 s | Steam Vol.3 (2025-05-12) | verified |
| Support | 30 s shield at battle start worth 10 % Max HP | 15 % Max HP | Steam Vol.3 + TapTap | verified |
| Summon | Summons a Darkflame Phoenix whose stats scale with Resonance Level | Summons a stronger Phoenix | Steam Vol.3 + TapTap | verified (stats NOT FOUND) |
| Dauntless | Basic attacks have a 40 % chance to make the Thundercloud attack too | 50 % | Steam Vol.3 + TapTap | verified (damage NOT FOUND) |
| Poison / Toxin | Poison Explosion has a 30 % chance to leave a poison pool | 60 % | Steam Vol.3 (2025-05-12) | verified (pool damage NOT FOUND) |
| Burn, Ice Blast, Thunderbolt (Reborn S2 schools) | **NOT FOUND** | **NOT FOUND** | articles 817 / 863 / 875 (2025-09-10 to 12) give only a qualitative description | reported |

Notes on the bonds:
- The Steam Vol.3 link is https://store.steampowered.com/news/app/2203070/view/1799088287951195.
- Shadow Energy: 10 per basic attack. Ultimate-energy modifiers do not affect it (article 1719).
- Rally keyword: a stackable buff, up to 3 stacks. All stacks are consumed when the carrier casts its ultimate, to strengthen that cast.
- The CN official TapTap post (2025-01-21, CN test build) describes some bonds differently from the EN card:
  - Poison: part of the poison damage is converted into healing.
  - Rally: cleanses debuffs and gives Control Immunity.
  - The EN card of 2025-05-12 is newer.

**Captain aura.** Only **one** captain aura is active per battle. If several deployed heroes have one, the player picks which. Source: https://www.dragonheir.info/article/39 (2023-10-18), verified, S1. Aura values are in each hero's aura text in the official data.

## 9. Could NOT be found (searched EN/TW/CN/JP; dates of search 2026-10-24)

1. **DEF → damage-mitigation formula and its constant K.** There is no official or community formula. Bahamut snA=509 (2023-09-25) asks and has no answer. Calibrate with KB test T4.
2. **Damage bucket structure.** Unknown whether Damage Bonus, Elemental bonus, Damage Up and Damage Reduction add together or multiply (KB T5).
3. **Level-difference curve.** Only the direction is known: a higher enemy level means less damage.
4. **The order in which Defense Penalty, DEF ignore and penetration apply.** Unknown; "penetration" as a separate stat was not found.
5. **Reborn-era tier values.** Only S1 (2023) values are confirmed. No post-2025 tooltip dump was found.
6. **Reborn Poison base tick interval and damage per stack; Reborn Burn tick damage; Ignite threshold.** The 100 % threshold is only inferred from wording.
7. **Bond numbers for Burn, Ice Blast and Thunderbolt**, and stats for the Phoenix, the Thundercloud and the Poison pool.
8. **Bleed** does not exist. **Frost slow / attack-speed effect** was not found.
9. **Crit Damage cap, Crit-hit Resistance value, Dodge mechanics, and a damage floor at very high DEF.**
10. **PvP damage modifiers** other than the Ultimate-Energy-Reduction rule (−50 % effect, 2023).
11. The official CN video "龙息观战台 | 命中抵抗讲解" (Bilibili BV1KnEEz4EbN, 2025-05-12), which explains Accuracy and Resistance, **could not be read** because of a captcha. It may hold a newer ACC/RES curve.
12. The official toolkit page at dragonheir.nvsgames.com/toolkit returned HTTP 502, and web.archive.org was blocked from here.

## 10. Calibration tests to run in game (they complement KB tests T1–T11)

- **T4 / DEF.** One non-crit `[+X%Attack]` hit on the same target at 3–4 DEF values: use Defense Up I and II (+30/+60 %) and Defense Penalty I and II (−25/−50 %). If 1/damage is linear in DEF, the curve is hyperbolic with K = intercept / slope.
- **T5 / buckets.** Two Damage Bonus buffs vs one Damage Bonus plus one damage-taken debuff.
- **T7 / ACC.** Focus on D = −50 to −30, the region where the sources disagree, with 50 or more casts per point.
- **Reborn tiers.** Read the in-game tooltips for Defense Up II, Attack Penalty II and Defense Penalty II.
