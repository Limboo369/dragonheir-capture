# Dragonheir PvE enemies: what is known (for the battle simulator)

Researched 2026-10-24. Machine-readable version: `bosses.json` (same folder).

**Short answer:** no source anywhere publishes boss **HP, ATK or DEF**: not the official wiki, HellHades, Reddit, Chinese, Japanese or Korean sites, and not YouTube titles. What *is* published, mostly in official in-game screenshots, is listed below:

- boss **level** per difficulty (a few data points)
- **Recommended Accuracy / Resistance**
- the **enemy Resistance per difficulty** table (legacy)
- the **Accuracy vs Resistance hit-chance curve**
- boss **skill timelines**
- full **% numbers for two Continental Challenge bosses**
- every boss's **mechanics**

HP/ATK/DEF have to be calibrated from the player's own fights. The plan for that is at the end.

**Version warning.** Dragonheir relaunched as **Reborn** in mid-2025. Articles from 2023-10 to 2024-08 describe the **legacy** game, where graves ran difficulty 1-9 and some boss kits were different. Reborn graves go to difficulty 15-20. Each item below is tagged *reborn* or *legacy*.

Confidence labels:
- **verified**: official source or two independent sources
- **reported**: one community source
- **estimated**: derived by us, with the reasoning given

---

## 1. Global rules (apply to every mode)

### Accuracy vs Resistance (verified, legacy, still used in Reborn)
Source: https://www.dragonheir.info/article/103 (2024-02-02; tables dated 2023-10-31)

The chance to land a debuff, a control effect or a dispel depends on **attacker Accuracy minus target Resistance**:

| Acc − Res | ≤ −100 | −70 | −50 | −30 | 0 | +20 (recommended) | +50 |
|---|---|---|---|---|---|---|---|
| avg. success | 0% | 10% | 16% | 76% | 92% | 94% | 98% |

- The skill's own chance is rolled first. Dispelling your own allies ignores Accuracy and Resistance.
- Raw samples (25 trials each) are in the JSON.

### Enemy Resistance per difficulty (verified, **legacy**)
Source: https://www.dragonheir.info/article/103 (2024-02-02), image "Dungeon Monster Statistics"

| Difficulty | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|
| Graves/Ruins enemy Res | 10 | 10 | 30 | 50 | 80 | 80 | 150 | 150 | 200 |
| Recommended Acc | 30 | 30 | 50 | 70 | 100 | 100 | 170 | 170 | 220 |
| Elemental Domains Res (1-5) | 10 | 10 | 30 | 75 | 120 | | | | |
| Weekly/Reunion Res (1-4) | 30 | 80 | 200 | 250 | | | | | |

- Corroboration: S2 Venom guide https://www.dragonheir.info/article/236 (2024-02-02) says difficulty 9 enemies have 200 Resistance and you need 220 Accuracy.
- The Reborn table is different. A Reborn Harpy intel screen shows level 110 with Recommended Accuracy 100 (https://www.dragonheir.info/article/584, 2025-06-26).

### Energy, haste and stat rules (verified)
Source: https://www.dragonheir.info/article/103 (2024-02-02)

- Everyone gains 1 Energy per second.
- 5 Skill Haste = +1% recharge speed. Example: a 20 s skill with 100 Haste recharges in 16.67 s.
- Attack Speed: +25% turns a 2.5 s attack interval into 2.0 s.
- Enlightenment/200 = Derivative Damage bonus. Derivative Damage cannot crit.

### Enemy AI (verified)
Source: https://www.dragonheir.info/article/39 (2023-10-18)

- In PvE, enemies cast their ultimate as soon as it is charged.
- The board is usually 5×8.

### Boss flags (verified)
Sources: official wiki JSON `equip-2025.json` / `heroes-2025.json` in `knowledge/raw-official/`, and https://www.dragonheir.info/article/584

- Bosses are immune to Execution.
- Max-HP-reduction effects do not work on bosses.
- Nearly all bosses have Control Immunity.

---

## 2. Gear dungeons (Graves) and Rune dungeons (Ruins / Battlefield)

Difficulty bands (Reborn, verified, https://www.dragonheir.info/article/585, 2025-06-26):
- **Graves:** 1-8, 9-14, 15+
- **Heretical Ruins:** 1-6, 7-9
- **Ancient Battlefield:** up to 10+

YouTube titles show Venom 15 and Venom 20 exist (2025-2026).

Boss levels seen in official screenshots (Reborn, verified, https://www.dragonheir.info/article/584, 2025-06-26, unless noted):

| Dungeon | Boss | Difficulty → Level |
|---|---|---|
| Grave of Venom (weapons, helmets) | Deadly Harpy | 8 → **Lv100** (15 stamina), 9 → **Lv100**; intel screen "110" with Rec. Acc **100** and skill ticks at **6/12/18 s**; Challenge Mode (S2+) → **Lv300** with 4 Lv300 Wisps (article 1119, 2025-10-10) |
| Grave of Curse (armor) | Blood Prince Xenos | 9 → **Lv100** |
| Grave of Rot (gloves) | Colossal Scavenger | 9 → **Lv100**; high difficulty screenshot **Lv300** (article 836, 2025-09-10) |
| Heretical Ruins (positive runes) | Dead Phoenix - Fyre | 7 → **Lv145** |
| Ancient Battlefield (negative runes) | Soul Devourer Gruentius | 7 → **Lv160** |

HP / ATK / DEF / time limit: **not found** for any of these.

**Legacy difficulty 9 (2024), verified:** all five bosses were **Lv170**. This comes from the battle-screen labels in the official S2 lineup articles 236, 239, 243, 251 and 252 (all 2024-02-02). Venom also had 4 "Lv170 Flame of Element - Poison" wisps, and the Ruins had Corrupted Phoenix Eggs.

### Legacy battle statistics (real numbers from official screenshots)
Each official lineup guide ends with an end-of-battle **Statistics** screen showing damage dealt, damage taken and healing per hero.
- The numbers themselves are **verified**, because they are read straight off the screenshots.
- As a stand-in for enemy HP they are only **estimated**. "Damage dealt" includes damage to adds and shields and to HP the boss healed back, so it is an upper bound, not the boss's HP.
- These are legacy fights against Lv170 bosses. Use them only as an order-of-magnitude sanity check, not as S1 Reborn values.

| Mode, diff (article, date) | Hero lv | Clear time | Team damage dealt | Damage taken | Healing | Team DPS | Enemy DPS on team |
|---|---|---|---|---|---|---|---|
| Grave of Rot 9 (243, 2024-02-02) | 91 | 3:26 (best 2:37) | 3,832,362 | 1,239,367 | 1,493,846 | 18,604/s | 6,016/s |
| Heretical Ruins 9 (251, 2024-02-02) | 91 | 2:39 | 5,886,275 | 1,298,251 | 1,414,704 | 37,021/s | 8,165/s |
| Ancient Battlefield 9 (252, 2024-02-02) | 100 | 4:35 | 4,335,608 | 3,095,967 | 4,514,497 | 15,766/s | 11,258/s |
| Ancient Battlefield 9 (360, 2024-05-17) | 100 (one 91) | 2:45 | 4,787,640 | 2,100,396 | 2,100,395 | 29,016/s | 12,730/s |
| Heretical Ruins 9 (362, 2024-05-17) | 91 | 2:16 (best 2:10) | 5,414,709 | 980,308 | 1,127,988 | 39,814/s | 7,208/s |
| Goblin Lair 5 (208, 2024-02-02) | ~60 | 0:58 (best 0:41) | 718,268 | tank took 22,574 | n/a | 12,384/s | n/a |

The per-hero numbers are in `bosses.json` → `legacyBattleStatistics`. Article URLs follow the pattern https://www.dragonheir.info/article/<id>.

### Legacy S3 boss tables (verified, legacy; may differ in Reborn)
- **Ancient Battlefield** (article 360, 2024-05-17):
  - Turns **80%** of its basic-attack damage into a shield.
  - Ultimate (energy) Down effects work at only **half** strength on it.
  - Gains a stackable damage mitigation for every **35%** of HP it is missing.
- **Heretical Ruins** (article 362, 2024-05-17): there are **2** eggs. If all nestlings are alive when the boss tries to resurrect them, the boss gains damage reduction.
- **Grave of Venom** (article 364, 2024-05-20): if a target has fewer than **2** debuffs, the boss hits random enemies **3** times with high single-target damage. **4** wisps assist it.
- **Grave of Rot** (article 367, 2024-05-20):
  - Reduces Max HP.
  - Deals more damage for each debuff on the target.
  - Inflicts Healing Prohibition.
- **Grave of Curse** (article 369, 2024-05-21): while buffed, the boss ignores Immortality and Invincibility. It removes shields before dealing damage.

### Grave of Venom: Deadly Harpy
Source: https://www.dragonheir.info/article/851 (2025-09-10), verified. HellHades copies it: https://hellhades.com/grave-of-venom-guide/ (2025-08-31).

**Skills**
- **Shadow Poison (passive):**
  - When the boss uses a single-target attack, it may buff the Wisps and make them assist.
  - The chance drops as the Wisps carry more debuffs.
  - A dying Wisp damages the boss. Article 584 calls this "massive True Damage".
- **Poisonous Fletching:** AoE damage, dispels 1 buff, summons up to 2 Wisps.
- **Harpy's Wrath:** global damage, and shields every boss-side unit. Shield dispel matters from difficulty 9.
- **Harpy's Breath:** a chain of high single-target hits. This is the tank killer.

**What kills teams:** Breath plus assisting Wisps on the tank.

**Counters:** Attack Penalty, Damage Reduction, Hit Recovery.

**Challenge Mode affixes (S2+ only, verified, article 1119, 2025-10-10):**
- Breath also applies a 50% DEF Penalty for 20 s.
- A dying Wisp spreads its debuffs 4 times.
- Wisps take 75% less damage while the boss is shielded.
- Wisps get +40% ATK and +40% DEF.
- Fletching deals +50% damage.

**Legacy difficulty 9 targets (articles 236, 364, 424; 2024):**
- Tank HP above 70-80k and DEF above 2.0-3.0k.
- Average hero HP above 35k.
- Accuracy 220.
- Team level 90.

### Grave of Curse: Blood Prince Xenos
Source: https://www.dragonheir.info/article/855 (2025-09-10), verified.

**Skills**
- **Blood Gush (passive):** when he deals HP damage, he steals HP and **reduces the target's Max HP**. Shields block it.
- **Rage of Blood:** gives himself a damage buff.
- **Vampiric Shield:** a big single-target hit; the damage dealt becomes his shield.
- **Punishment of Blood:** dispels 1 buff from each hero, then hits everyone. From **difficulty 9** it deals much more damage to unbuffed heroes.

**Timing:** in the legacy version all three skills finish within 18 s (article 369, 2024-05-21).

**Speed reference (reported):** an endgame team farms difficulty 14 in about 21 s (https://hellhades.com/speed-farming-teams-for-stage-14-challenge-2/, 2025-09-25).

### Grave of Rot: Colossal Scavenger
Source: https://www.dragonheir.info/article/836 (2025-09-10), verified.

**Skills**
- **Source of Filth (passive):**
  - Basic attacks may Poison.
  - The boss is always under Attack Penalty.
  - Every debuff gives it Corruption stacks.
- **Putrid Breath:** global hit, Poison plus Recharge Speed Penalty. Poison stacks scale with Corruption.
- **Rotting Assault:** puts 2 of its debuffs on a random hero, then deals AoE around that hero. The number of targets grows with Corruption.
- **Greedy Hunt:** devours the current target. Deals damage over time and heals the boss; more Poison on the target means more healing. It ends once the boss takes a certain amount of damage.

**Difficulty 15+:** the boss is under an undispellable Attack Penalty (official wording).

**Overall:** high HP and high sustain, so the risk is running out of time.

**Speed reference (reported):** difficulty 14 takes 35-40 s for an endgame team (HellHades, 2025-09-25).

### Heretical Ruins: Dead Phoenix - Fyre
Source: https://www.dragonheir.info/article/846 (2025-09-10), verified.

**Skills**
- **Scorch:** single-target hit that splashes to every Burned hero.
- **Nirvana:**
  - When the eggs are reborn, the boss turns Invisible.
  - The eggs heal the boss and give it a Total Damage Bonus.
  - Living minions heal the boss over time (article 585).
- **Fire of Dead Phoenix:** heavy damage to all heroes, plus Burn on all.

**Challenge Mode note:** the boss takes reduced damage while Nestlings are alive (article 1122, 2025-10-10).

### Ancient Battlefield: Soul Devourer Gruentius
Source: https://www.dragonheir.info/article/841 (2025-09-10), verified.

**Forms (passive):**
- **Shield Form:** basic attacks are global AoE.
- **Sword Form:** basic attacks are heavy single-target hits.

**Skills**
- **Berserker's Wrath (Shield Form):** stuns the hero **farthest** from the boss. If the stun fails or is dispelled, the boss goes into **Backfire**: it deals less damage and takes more.
- **Devouring Shadows (Shield Form):** switches to Sword Form and gains Attack Up.
- **Berserker's Wrath (Sword Form):** big hit on the hero with the highest ATK.
- **Devouring Shadows (Sword Form):**
  - Hits everyone and dispels **all** their buffs.
  - Gains a permanent, undispellable damage bonus for each buff dispelled.
  - Switches back to Shield Form with DEF Up.

---

## 3. Goblin Lair
Sources: https://www.dragonheir.info/article/587 (2025-06-26) and https://www.dragonheir.info/article/584 (2025-06-26), verified.

**Structure**
- **12 stages**, in bands 1-6, 7-9 and 10-12.
- **6 waves** of goblin minions and no boss. They "don't hit very hard".
- Stages 1-6 have low ATK and HP.

**Stars (difficulty 9 screenshot, enemies Lv100):**
- 3 stars: more than 50 s left
- 2 stars: more than 25 s left
- 1 star: more than 0 s left

The next stage unlocks after claiming the 3-star reward.

**Other rules**
- Rewards depend on clear speed.
- From Resonance Lv100 the dungeon drops gold only.
- Reported: new accounts cannot pass stage 6 in their first 5 days (https://hellhades.com/dragonheir-ultimate-beginner-guide/, 2025-07-28).

**Legacy reference points (verified):**
- **Difficulty 5, article 208 (2024-02-02):** a team of about level 60 got max stars, clearing in **58 s** (best 41 s).
  - Total damage dealt was **718,268**: 136,471 + 74,129 + 180,829 + 263,486 + 63,353.
  - The tank took 22,574 damage.
  - Damage dealt is an *estimated* upper bound for the whole lair's enemy HP at legacy difficulty 5.
- **Difficulty 5 (S4), article 422 (2024-07-09):**
  - Team level about 80.
  - Tank HP above 25k and DEF above 800.
  - Accuracy 70.

**Not found:** the total time limit (it must be over 50 s) and enemy stats.

## 4. Fey Meander / Fey Corridor
Source: https://www.dragonheir.info/article/805 (2025-09-09), verified.

**Reborn**
- About 300 floors (reported, community guide https://www.dragonheir.info/article/1162, 2025-10-13).
- Most floors are **enemy hero teams** that chain their ultimates.
- Boss floors:
  - The boss keeps applying Poison and gains a damage buff whenever it succeeds.
  - Its 2nd skill stuns.
- Each floor has an Accuracy requirement (reported, 1162).

**Legacy**
- Bosses above floor 140 have **250 Resistance**; floor 180 needs **270 Accuracy**.
- Bosses appear on floors 5, 10, 40, 70, 100, 130 and 160.
- Sources: https://www.dragonheir.info/article/402 (2024-06-14) and https://www.dragonheir.info/article/201 (2024-02-02).

**Reborn S3:** all heroes Resistance above 180; a Stand United holder above 350; debuffers above 250 Accuracy (https://www.dragonheir.info/article/1622, 2025-12-02).

## 5. Trial Breakthrough
Source: https://www.dragonheir.info/article/771 (2025-09-08), verified.

- Breakthrough Trials happen at Lv30 and Lv50.
- After one failure, the next attempt gives 3 buffs.
- Healer-heavy teams are recommended.

**Nothing else was found:** no enemy names, levels or stats.

## 6. Continental Challenge: Imperial Shadow Recast (S1 beginner season)

### Rules (verified)
Sources: https://www.dragonheir.info/article/777 (2025-09-08) and https://hellhades.com/easiest-continental-bosses-for-week-1-dragonheir-silent-gods/ (2025-08-13)

- Starts on server day 22.
- 3 rounds of 1 week each, with 6 bosses.
- Each boss can be fought once per round, and each hero can be used once per round.
- Attempts: 2 in round 1, then 4, then 6.

**Rating per fight (damage dealt):**

| Rating | S | A+ | A | B | C |
|---|---|---|---|---|---|
| Damage at least | 22,000,000 | 11,000,000 | 7,000,000 | 3,500,000 | 200,000 |

**Fight length:** not stated for Recast. Legacy Continental Challenges were **5 minutes** (reported, https://www.dragonheir.info/article/253, 2024-02-02). Use 300 s as the default.

### Shared boss traits (verified)
Source: in-game Boss Info screenshots in https://www.dragonheir.info/article/603 and https://www.dragonheir.info/article/602 (both 2025-06-27). Bosses are **Lv240**.

- **Control Immunity.**
- **Damage Falloff:** after **200,000,000** total damage in one battle, all further damage is reduced by **90%**.
- **Total Damage Bonus:** after each ultimate the boss gains a stack of **+200% damage dealt**. It cannot be blocked or dispelled and lasts until the end of the fight.

These traits were seen on the Khrysos and Vasska screens. Assuming they apply to all 6 bosses is our estimate.

**Damage references (reported, HellHades, endgame relaunch accounts, 2025-08-13):** Thelendor about 212M (230M+ at the top), Vasska 237M, Vinyara 250-290M. All of these are already inside the falloff.

### The six bosses

| Boss | Stage traits / mechanics (numbers) | Source |
|---|---|---|
| **Thelendor** | Your summon with the highest ATK deals **+240%** damage; your heals and shields are **+50%**. Lunar Arrival hits everything within **2 tiles**. Skills target at random. | article 777 screenshot (2025-09-08), https://www.dragonheir.info/article/2760 (2026-05-07) |
| **Vasska** | Rec. Acc **260** and Rec. Res **260**. Each hit of your ultimate makes that hero's next ultimate deal **+10%**. Under Healing Reduction or Reversal the boss deals **−30%**. Skills fire at **6/12/18 s**:<br>• **Restless Soul** (6.0 s): 2 Spirits for 6 s; boss and Spirits get **+40% ATK** and Attack Speed Up II for 6 s.<br>• **Death Reaping** (6.0 s): Necrotic damage to all; 1 Spirit per hero hit, lasting **24 s**, up to **5**.<br>Damage to its summons counts toward your score. | article 602 screenshots (2025-06-27); zh-TW https://www.dragonheir.info/article/2748 (2026-05-06) |
| **Twitch** | Inflicts Toxin on several heroes; his damage grows with the number of Toxin stacks. Resisting or dispelling debuffs gives your team a stacking damage bonus. AoE schools are favoured. | article 2760 |
| **Vinyara** | Casts a skill every **9 s**. If her shield is not broken quickly she becomes undispellably **Invincible**. Reported: she also gains DEF and Damage Reduction. Ice Blast is favoured. | article 2760; HellHades 2025-08-13 |
| **Khrysos** | Rec. Acc **260**. Your basic attacks deal **+100% ATK** extra non-crit Physical damage. Breaking his shield gives that hero **+50% ATK for 10 s**. Skills fire at **9/18 s**:<br>• **Holy Fire Smite** (9.0 s): 3 Fire hits on random heroes, each **100%** dispels 1 buff; boss gains **20 shield layers for 10 s**.<br>• **Lunar Retribution** (9.0 s): Fire damage to all plus Attack Speed Penalty II for **20 s**; boss gains **40 layers for 20 s**.<br>Each hit removes one shield layer. | article 603 screenshots (2025-06-27) |
| **Tamar** | Takes more damage per debuff stack on her. Dispels buffs and spams debuffs and control on several heroes. About **180 Res** makes heroes largely immune; a Stand United support needs **>400 Res**. | article 2760, https://www.dragonheir.info/article/2711 (2026-04-29) |

Older reference (legacy Lunar Halo CC, https://www.dragonheir.info/article/254, 2024-02-02): bosses were Lv240 with **260 Resistance**, took +100% damage from their weak element, and gained +200% damage after their ultimate.

## 7. Grand Gladiator Arena
PvP: the enemies are player defense teams, so there is no PvE preset. Source: https://www.dragonheir.info/article/46 (2023-10-18).

## 8. Power (combat rating)

- The game shows a Power number for each hero (the capture tool reads it), but **no formula is published anywhere**.
- Official dungeon screens show **enemy Level and Recommended Accuracy/Resistance**, not a recommended Power.
- Level guidance found:
  - Legacy graves at difficulty 9 needed a level-90 team.
  - Continental Challenge screenshots show Lv100 heroes against Lv240 bosses.
  - A YouTube title (OddOneGaming, S8) reports Grave of Venom 20 cleared by a level-79 team (reported).
- `knowledge/raw-official/heroLevelBase.json` has the hero per-level HP/ATK/DEF growth bases. Whether monsters use the same curve is unknown.

---

## Calibration plan (to replace the missing HP/ATK/DEF)

1. **Boss HP:** read the damage-dealt total on a kill. For the Continental Challenge, the score is damage dealt.
2. **Boss ATK:** take one boss hit on a hero with known HP/DEF (from battle stats), then solve the sim's damage formula.
3. **Boss DEF:** compare the same hero/skill on the boss with and without a DEF Penalty.
4. **Level scaling:** fit a curve through the measured bosses. Known levels: Lv100 (grave difficulty 8-9, Goblin difficulty 9), Lv110, Lv145 (Ruins difficulty 7), Lv160 (Battlefield difficulty 7), Lv240 (Continental Challenge), Lv300 (Challenge Mode / high Rot). Legacy difficulty 9 bosses were Lv170.
5. **Sanity check:** legacy difficulty 9 (Lv170) clears needed about **3.8M-5.9M** total team damage in 2:10-4:35, and the team took about 1.0M-3.1M damage (see "Legacy battle statistics"). A sim tuned to legacy-like stats should land in that range.

## Could NOT be found
- Boss and enemy **HP, ATK, DEF** for every mode and difficulty.
- The **Reborn** enemy Resistance per difficulty (only the legacy 1-9 table exists).
- **Time limits** for Graves, Ruins, Battlefield, Goblin Lair, Fey Meander and Breakthrough Trials. Only legacy Continental Challenge (5 min) and legacy Pillar of Dark (5 min per stage) are known.
- Monster **level** for most Reborn difficulties. Known: graves difficulty 8-9 = Lv100, Ruins difficulty 7 = Lv145, Battlefield difficulty 7 = Lv160, legacy difficulty 9 = Lv170.
- S1 Reborn battle-statistics screens (damage dealt and taken). Only the legacy 2024 screens above were found.
- Whether bosses can **crit** (no source mentions it).
- **Power formula** and power-to-stage recommendations.
- Breakthrough Trial enemies.
- Skill % coefficients for the grave, ruins and battlefield bosses (only the Continental Challenge Vasska and Khrysos tooltips exist).
- Exact wave counts in graves and ruins. In legacy S4 Venom the boss came in wave 3.

**Access problems:** Reddit search needs a login and returned nothing; GameWith Dragonheir is closed; wikiwiki.jp and namu.wiki return 403; YouTube watch pages and transcripts were rate-limited; GitHub search is blocked in this environment.
