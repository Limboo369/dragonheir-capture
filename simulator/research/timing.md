# Dragonheir: Silent Gods combat timing, research summary

Compiled 2026-10-24 for the battle simulator. Machine-readable file: `timing.json` (same folder). Source extracts: `sources/`. Build script: `scripts/build_timing.py`.

Confidence labels: **verified** = official text, or two independent sources agree. **reported** = one community source. **estimated** = derived by us.

## 1. Core model (how timing works)

### Basic attacks
- `attack_frequency` in the official tables is **basic attacks per second**. ATK Interval = 1 / attack_frequency (0.55 gives 1.82 s, 0.5 gives 2.00 s, 0.4 gives 2.50 s, 0.38 gives 2.63 s). **verified**
  - https://www.dragonheir.info/article/103 (2024-02-02): "if a Hero's default ATK Interval is 2.5 seconds, that Hero attacks 0.4 times per second".
  - GameKee CN wiki hero pages (2023-09-21/22), e.g. https://www.gamekee.com/dragon/600360.html: Auster "攻击间隔 1.82秒" (af 0.55), Sagomir 2.63 s (af 0.38). All 190 pages match 1/af.
- **Attack Speed**: attacks/s = attack_frequency x (1 + AttackSpeed%), interval = 1 / that. **verified**
  - Article 103 (2024-02-02): "+25% Attack Speed: 0.5 times per second, new ATK Interval is 2 seconds".
  - Reddit 2023-10-20, https://www.reddit.com/r/Dragonheir_SilentGods/comments/17bc8q4/ : "attack interval is 1.03s (94% attack speed increase)", which equals 2.0 / 1.94.
  - Attack Speed Up I = +25%, Attack Speed Up II = +50% (GameKee glossary, 2023-09). **reported**
  - Halramar and Philto cannot gain Attack Speed (official skill text in heroes-2025.json).

### Skill energy bars (battle skill and ultimate)
- Each active skill has an energy bar. Every hero recovers **1 energy per second**. A skill's Required Energy equals its recharge time in seconds at base speed: `recharge time = requiredEnergy / rechargeSpeed`. **verified**
  - Article 103 (2024-02-02): "a skill's default recharging time is 20 seconds, and it costs 20 Energy. By default, all Heroes gain 1 Energy per second."
  - GameKee pages (2023-09): "初始/消耗能量 8.0/20.0, 充能速度 1/秒, 初始充能时间 12.0秒, 完整充能时间 20.0秒".
  - Official 2025 text (Lizkar Inspiration 5) speaks of naturally recovering "Ultimate Energy or Battle Skill Energy"; Rena's passive changes "Energy through hero skills and natural recovery" by 10%.
- The ultimate starts each battle with **Initial Energy**. First cast = (required - initial) / speed, then every required/speed seconds. In-game this is shown as "Initial Charge Time" and "Complete Recharge Time".
- Battle skills also have an initial and a complete time (e.g. 5 s / 10 s). They cast automatically when charged.

### Skill Haste
- `rechargeSpeed = 1 + 0.002 x SkillHaste` (5 haste = +1% speed). `cd = baseCd / (1 + 0.002 x haste)`. It is NOT `base x (1 - x)`. It applies to battle skills and ultimates, initial and recast. **verified**
  - Article 103 (2024-02-02): "every 5 Skill Haste equals 1% recharging speed ... 100 haste: 1.2 Energy per second, 20/1.2 = 16.67".
  - Reddit, quoting the in-game recharge detail screen: 2023-12-27 https://www.reddit.com/r/Dragonheir_SilentGods/comments/18rztih/ ("BaseRechargeTime/(1+SkillHaste*0,002)"), 2024-01-10 .../193itgq/, 2024-02-14 .../1aqj8b8/.
- Caveats (**reported**):
  - The UI floors recharge speed to 2 decimals and rounds time up to 1 decimal (one tester, 2024-01-02 and 2024-02-14). In practice, going from 20 s to 18 s needs about 60-61 haste instead of the 56 the formula gives. A CN guide gives the same threshold: ">=61点技能急速" (http://www.rpset.com/news/6712.html, 2025-04-18).
  - Some players think the Rift Hourglass (+100 haste) gives slightly less than additive math predicts (reddit 18rztih 2024-01-02, 1aqj8b8 2024-02-14). This is unresolved.
  - The older "5.5 haste per 1%" rule (reddit 188fek6, 2023-12-01) is superseded.
  - HellHades' rough figures (20 haste is about 0.5 s and 40 haste about 1.4 s on a 20 s cooldown; https://hellhades.com/mastering-skill-timing-and-haste-in-dragonheir-silent-gods/, 2025-07-30) do not match the formula (0.8 s and 1.5 s). The formula is better sourced.

### Ultimate Energy amounts
- **Max energy = the hero's Required Energy.** It is not a universal 100. Typical values: **23 unupgraded, 20 at max scrolls**. Other values: 19 to 16, 27 to 24, 26 to 20, 20 to 20. **verified** (GameKee 2023-09 plus the reddit cross-checks below)
- **"X% Ultimate Energy" effects are X% of that hero's required energy.** The current English table drops the % sign ("reducing their Ultimate Energy by 25.0" means 25%). The CN text of the same skills has %: Ergander "减少其25%威能", Auster "增加自身2.5%威能". **verified**
  - Incense Burner +10% gives 2.0 s on a scrolled 20 s ult and 2.3 s on an unscrolled 23 s ult (reddit 188fek6 2023-12-01; 18rztih 2023-12-27). HellHades 2025-07-30: "10% ultimate energy after use = ~2s saved". CN guide 2025-04-18: "回复10%威能 ... 额外获取了2秒".
- **Starting energy**: typically 5 unupgraded and 8 at max scrolls, so the first ult comes at 18 s and 12 s at 0 haste. **verified**
  - Reddit 2023-10-21 https://www.reddit.com/r/Dragonheir_SilentGods/comments/17cpxsb/ (Nathaniel "Ultimate: 5/23").
  - Reddit 2023-10-12 .../175icoo/: "The standard setup ... is 12sec".
- **Energy per basic attack / per hit dealt / per hit taken: 0.** No generic mechanic exists; the bar fills by time. Extra energy comes only from specific skills, artifacts, sets and talents. **reported**
  - Reddit 2024-06-30 https://www.reddit.com/r/Dragonheir_SilentGods/comments/1drwlzx/ : "Required Energy is only modified by scrolls ... Anything else targets either Recharge Speed (Skill Haste, Recharge Speed Penalty) or adds/substracts Ultimate energy directly (several skills and artifacts)".
- **Speed modifiers**:
  - Recharging Speed Penalty: -30% recharge speed (GameKee glossary 2023-09; reddit 1drwlzx 2024-06-30: a 10 s penalty adds 3 s, so an 18 s boss cycle becomes 21 s). **verified**
  - Frozen: -20% (CN guide 2025-04-18 only). **reported**
  - Lelwanis Inspiration 5: +30% battle skill recharge speed (official text).
- **Bosses**: Ultimate Energy reduction only pushes a boss back to the start of its current skill segment. Vinyara's 100% reduction removes at most about 6 s of an 18 s 6+6+6 cycle (HellHades https://hellhades.com/dragonheir-silent-gods-frost-legendaries-reviewed/ 2023-10-06; reddit 1dyzyyb 2024-07-10; CN guide 2025-04-18). **verified**
- **Resurrection**: resurrected heroes keep 75% of their pre-death energy (official Kamari, Sifris and Mithrasea texts). **verified**
- **Items** (**reported**):
  - Spiritual Incense Burner: +10% after casting the ult.
  - Ancestor's Candle: about 10% of the battle timer (1 s on 10 s).
  - Puppeteer's Inspiration 3-piece: +10% Ultimate Energy to same-element allies, at most once per 15 s.
  - Sources: reddit 188fek6 2023-12-01, 1mo61yc 2025-08-12; dragonheir.info article 1326 (2025-10-30).

### Casting, auto-cast and the start of battle
- **Ultimates** (**verified**; HellHades combat system https://hellhades.com/dragonheir-silent-gods-combat-system/ 2023-11-08; reddit 1mo61yc 2025-08-12):
  - Player heroes cast manually by default. Auto mode casts as soon as the bar is full.
  - Saved teams can use a timing preset (initial time + recast interval). A preset earlier than the skill is ready waits until it is ready.
  - Enemies in PvE cast as soon as the ultimate is available.
  - `is_force_auto_cast_utr` is false or missing for all 351 heroes.
- **Battle skill cast time pauses its recharge**, so the real interval = complete time + animation. Example: Eurion is listed at 5/10 s but was observed at about 7 s for the first cast and about 12 s between casts. No per-skill animation durations are published. **reported** (reddit https://www.reddit.com/r/Dragonheir_SilentGods/comments/1c2smj6/ 2024-04-13)
- **Skills do start partly charged**: nothing is ready at 0 s. Battle skill: first cast at the initial time (usually 7 s, or 5 s at max scrolls). Ult: usually 18 s, or 12 s at max. Haste shortens initial times too (reddit 1bspude 2024-04-01). **verified** (HellHades hero development guide 2023-10-13, "the first recharge will be faster than the rest")
- **Animation lag**: effects land 0.5-1 s after the nominal time (HellHades 2025-07-30), and up to about 2 s for some boss skills (reddit 179ojj4 2023-10-17). No separate battle start delay was found. **reported**
- **Boss cycles** (HellHades 2025-07-30): Grave of Venom, Curse and Rot and Ancient Battlefield 18 s (6+6+6); Temporal Vortex 20 s; Heretical Ruins 24 s. **reported**

### Skill upgrades (scrolls)
- Battle skill "-2 s recharge" lowers both the initial and the complete time; a few heroes get it twice.
- Ultimate "Initial Energy +3" and "Required Energy -3".
- Most heroes therefore go from battle 7/12 s and ult 18/23 s to battle 5/10 s and ult 12/20 s.
- **verified**: GameKee upgrade rows (2023-09); reddit 188fek6 2023-12-01 ("base timer of 12 or 23 seconds ... adjusted 10 seconds or 20 seconds"); 1drwlzx 2024-06-30.

## 2. Per-hero timings

Source: the GameKee CN wiki, 190 hero pages created 2023-09-21/22 (https://www.gamekee.com/dragon/<pageId>.html). 187 were matched to official hero ids by name transliteration plus identical skill numbers; 3 could not be matched.

**Important**: the GameKee pages show the in-game gallery view, which uses max level and max skill level (HP about 26k, ATK about 1.6k). Several cross-checks show the printed timings are **fully upgraded** values:

| Hero | Source | Date | Matches |
|---|---|---|---|
| Nathaniel | reddit 17cpxsb | 2023-10-21 | unupgraded 7/12 and 5/23 |
| Eches | reddit 16yy1ir | 2023-12-23 | unupgraded 15 s / 23 s |
| Lothair | reddit 18yoo15 | 2024-01-05 | max 13 s initial, 20 s |
| Zeffi | HellHades | 2025-07-30 | 20 s |
| Corrin | reddit 18rztih | 2023-12 | 23 to 20 |
| Letalis | reddit 16yy1ir | 2023-12-23 | battle 5/10 |
| Eurion | reddit 1c2smj6 | 2024-04-13 | battle 5/10 at max |

`timing.json` gives both the max values (`battleInitial`, `battleCd`, `ultInitialEnergy`, `ultEnergyCost`, `ultInitial`, `ultCd`) and the derived unupgraded values (`*Base`). All values are at 0 haste.

### Priority heroes
| Hero (id) | Battle skill initial / recharge, max scrolls | same, unupgraded | Ult initial energy / required energy, max | Ult first cast / recharge, max | same, unupgraded | Confidence |
|---|---|---|---|---|---|---|
| Auster (21030) | 5.0 / 10.0 s | 7.0 / 12.0 s | 10.0 / 24.0 | 14.0 / 24.0 s | 20.0 / 27.0 s | reported |
| Hvitar (20120) | 5.0 / 10.0 s | 7.0 / 12.0 s | 7.0 / 20.0 | 13.0 / 20.0 s | 19.0 / 23.0 s | reported |
| Hochadir (22230) | 5.0 / 10.0 s | 7.0 / 12.0 s | 7.0 / 16.0 | 9.0 / 16.0 s | 15.0 / 19.0 s | reported |
| Lossenia (20920) | 5.0 / 10.0 s | 7.0 / 12.0 s | 8.0 / 20.0 | 12.0 / 20.0 s | 18.0 / 23.0 s | reported |
| Voresh (22290) | ? / ? s | ? / ? s | 8.0 / 20.0 | 12.0 / 20.0 s | 18.0 / 23.0 s | reported |
| Ergander (21010) | 5.0 / 10.0 s | 7.0 / 12.0 s | 8.0 / 20.0 | 12.0 / 20.0 s | 18.0 / 23.0 s | reported |
| Alphanarsy (24770) | not found | not found | not found | not found | not found | none |
| Vinyara (20770) | 5.0 / 10.0 s | 7.0 / 12.0 s | 7.0 / 16.0 | 9.0 / 16.0 s | 15.0 / 19.0 s | reported |
| Gardrus (21160) | 5.0 / 10.0 s | 7.0 / 12.0 s | 8.0 / 20.0 | 12.0 / 20.0 s | 18.0 / 23.0 s | reported |
| Torrin (20690) | 5.0 / 10.0 s | 7.0 / 12.0 s | 8.0 / 20.0 | 12.0 / 20.0 s | 18.0 / 23.0 s | reported |
| Durango (20670) | 5.0 / 10.0 s | 7.0 / 12.0 s | 8.0 / 20.0 | 12.0 / 20.0 s | 18.0 / 23.0 s | reported |
| Twitch (22010) | 5.0 / 10.0 s | 7.0 / 12.0 s | 8.0 / 20.0 | 12.0 / 20.0 s | 18.0 / 23.0 s | reported |
| Lothair (20200) | 5.0 / 10.0 s | 7.0 / 12.0 s | 7.0 / 20.0 | 13.0 / 20.0 s | 19.0 / 23.0 s | verified |
| Oggok (21700) | 5.0 / 10.0 s | 7.0 / 12.0 s | 8.0 / 20.0 | 12.0 / 20.0 s | 18.0 / 23.0 s | reported |
| Frurbath (21670) | 5.0 / ? s | 7.0 / ? s | 8.0 / 20.0 | 12.0 / 20.0 s | 18.0 / 23.0 s | reported |
| Vicuc (23190) | 5.0 / 10.0 s | 7.0 / 12.0 s | 8.0 / 20.0 | 12.0 / 20.0 s | 18.0 / 23.0 s | reported |
| Felosia (21390) | 5.0 / 10.0 s | 7.0 / 12.0 s | 9.0 / 20.0 | 11.0 / 20.0 s | 17.0 / 23.0 s | reported |
| Eurion (20060) | 5.0 / 10.0 s | 7.0 / 12.0 s | 8.0 / 20.0 | 12.0 / 20.0 s | 15.0 / 23.0 s | verified |

Notes on the priority heroes:
- **Lothair** and **Eurion** are verified. The others are reported: GameKee only, 2023 snapshot.
- **Voresh**: his GameKee page has no readable battle skill block. His attack interval also changed from 2.5 s (2023) to 2.0 s in the current table, so his kit was reworked.
- **Frurbath**: the page is missing his battle skill complete time.
- **Vinyara**: the 2023 values (max 9/16 s) agree with reddit 1aqj8b8 (2024-02-14, "16"). However, a reddit comment from 2025-08-08 (1mkp1dx) says Vinyara and Thia now sit at about 12/18 s when fully scrolled, and the CN guide (2025-04-18) has her first ult at 17 s. Her values probably changed in the 2025 relaunch.
- **Alphanarsy**: released after the 2023 snapshot. No timing was found anywhere.
- **Auster**: required energy is 24 (21 at max), not the usual 20.
- **Hochadir / Vinyara**: 16 at max.
- **Felosia**: initial energy 9.

### Bulk data
`timing.json` covers 188 heroes in total (187 matched plus Alphanarsy as null). Distribution at max scrolls:
- Battle skill complete time: 10 s for 124 heroes; 8 s, 12 s or 10 s with other bases for the rest; missing for 20.
- Ult: 12/20 s for 112 heroes; 13/20 s for 17; 9/16 s for 14; 14/24 s for 5; and a few others.
- 2025 hint: dragonheir.info article 603 (2025-06-26) says Acilia needs haste to get under 18.4 s, which is consistent with a 20 s ult still in 2025.

## 3. What could NOT be found
- **Current (2025 relaunch to S9, 2026) per-hero cooldowns.**
  - No site publishes them. The official tables served to dragonheir.info (heroes-2025.json and the other files we probed) have no cooldown or energy fields. The site's article API was checked too.
  - The 2025 relaunch changed kits: skill multipliers differ from 2023, some attack intervals changed (Voresh), and reddit 2025-08-08 reports some heroes now have shorter ults (Vinyara, Thia).
  - Treat every per-hero value as a 2023 baseline. Best way to refresh: read the in-game skill detail screen ("initial / complete recharge", plus the two-arrow toggle that shows Required Energy and Recharge Speed).
- **Heroes released after 2023-09** (Alphanarsy and all S2-S9 heroes, about 160 of 351): no published timings.
- **Cast/animation duration** of any skill or basic attack. There are anecdotes only: battle skills pause recharge during the cast, and effects lag 0.5-2 s.
- Whether ultimate energy keeps filling during the ultimate's own animation.
- Whether a battle skill waits for the current basic attack to finish, and whether the attack timer resets after a skill.
- The first basic attack time at battle start, and movement or approach time for melee heroes.
- Exact UI rounding rules (one tester) and the suspected Rift Hourglass under-performance.
- Bilibili, NGA and Baidu Tieba were not reachable or returned nothing useful (Tieba returns 403). The game's Chinese title is 《龙息：神寂》 (Tencent, CN launch 2025-03-19). Its CN terms are 战技 (battle skill), 威能技 (ultimate), 威能 (Ultimate Energy), 初始充能时间/完整充能时间, 技能急速 and 攻击间隔. Japanese and Korean wikis were not searched in depth. The official ja/ko hero tables exist (i.dmzgame.com/dragonheir/json/ja|ko/heroes-2025.json) but also have no timing fields.

## 4. Simulator recipe (estimated, built from the rules above)
- Energy model: `speed = (1 + 0.002*haste) * (1 - 0.30 if RechargingSpeedPenalty) * (1 - 0.20 if Frozen) * other buffs`. The ult bar starts at `initialEnergy` and fills by `speed` per second; cast when it reaches `requiredEnergy` (with auto or preset), then reset to 0 plus any refund. "+X% Ultimate Energy" adds `X/100 * requiredEnergy`.
- Battle skill: `t_first = battleInitial/speed`. After each cast: animation (unknown; use about 1-2 s as an estimate), then a new `battleCd/speed`.
- Basic attack: every `1/(attack_frequency*(1+atkSpeed))` seconds.
