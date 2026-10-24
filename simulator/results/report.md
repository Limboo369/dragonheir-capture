# DHSim report

Generated 2026-10-24T23:31:23.698Z, 30 fights per test, heroes at level 60 with the same gear profile per role.

## Main team on each bench

| Bench | DPS | Win % | Time to kill | HP left % | Damage shares |
|---|---|---|---|---|---|
| Single boss, damage in 60 s | 5682 | 0 | - | 100 | Lossenia 18.9%, Auster 30.7%, Hvitar 22.8%, Voresh 13.1%, Ergander 14.4% |
| Five targets, damage in 60 s | 15986 | 0 | - | 100 | Lossenia 20.3%, Auster 22.5%, Hvitar 34.5%, Voresh 9.7%, Ergander 13% |
| Boss that fights back (clear in 120 s) | 4143 | 46.7 | 104.9 | 29 | Lossenia 18.2%, Auster 28.1%, Hvitar 21.2%, Voresh 12%, Ergander 20.5% |
| Three waves (clear in 150 s) | 11703 | 100 | 71.6 | 83.3 | Lossenia 20.7%, Auster 23.9%, Hvitar 29.6%, Voresh 10.2%, Ergander 15.6% |

## Best replacement per slot

### Single boss, damage in 60 s

| Slot | Current (rank) | Top options (change vs current) |
|---|---|---|
| 1 | Lossenia (1/26) | Lossenia 0%, Lothair -8%, Twitch -8.7%, Durango -10.2%, Rowena* -12.5% |
| 2 | Auster (1/26) | Auster 0%, Twitch -5.1%, Lothair -5.9%, Durango -6.7%, Rowena* -7.7% |
| 3 | Hvitar (4/26) | Durango +1.5%, Twitch +1.5%, Lothair +1.1%, Hvitar 0%, Rowena* -1.2% |
| 4 | Voresh (12/26) | Lothair +12.6%, Twitch +12.3%, Durango +11.1%, Rowena* +9.1%, Hochadir +4.6% |
| 5 | Ergander (9/26) | Lothair +10.6%, Twitch +10.1%, Durango +9.4%, Rowena* +7.2%, Hochadir +3.2% |

### Five targets, damage in 60 s

| Slot | Current (rank) | Top options (change vs current) |
|---|---|---|
| 1 | Lossenia (1/26) | Lossenia 0%, Hochadir -2.8%, Lothair -14.4%, Twitch -19.7%, Rowena* -20.3% |
| 2 | Auster (2/26) | Hochadir +13.1%, Auster 0%, Lothair -2.2%, Twitch -5.9%, Durango -6.7% |
| 3 | Hvitar (1/26) | Hvitar 0%, Hochadir -1.1%, Lothair -14.2%, Twitch -18.2%, Durango -18.2% |
| 4 | Voresh (8/26) | Hochadir +24.8%, Lothair +10.9%, Twitch +6.9%, Durango +6.6%, Rowena* +6.2% |
| 5 | Ergander (6/26) | Hochadir +22.1%, Lothair +7.7%, Twitch +3.6%, Rowena* +3%, Durango +2.9% |

### Boss that fights back (clear in 120 s)

| Slot | Current (rank) | Top options (change vs current) |
|---|---|---|
| 1 | Lossenia (13/26) | Oggok +14.3%, Gardrus +14.2%, Vinyara +13.9%, Liko* +11%, Eurion +10.1% |
| 2 | Auster (23/26) | Rowena* +17.8%, Gardrus +17%, Vinyara +16.5%, Oggok +15.8%, Liko* +12.7% |
| 3 | Hvitar (25/26) | Oggok +22.8%, Gardrus +22.6%, Vinyara +20.4%, Liko* +19.6%, Eurion +17.7% |
| 4 | Voresh (11/26) | Oggok +30.5%, Vinyara +29.3%, Frurbath +26.6%, Vicuc +26%, Alphanarsy +25.5% |
| 5 | Ergander (7/26) | Oggok +29.4%, Vinyara +28.6%, Frurbath +26.2%, Alphanarsy +24.7%, Torrin +23.3% |

### Three waves (clear in 150 s)

| Slot | Current (rank) | Top options (change vs current) |
|---|---|---|
| 1 | Lossenia (1/26) | Lossenia 0%, Hochadir -2.9%, Lothair -3.2%, Twitch -4.7%, Durango -5% |
| 2 | Auster (1/26) | Auster 0%, Hochadir -0.2%, Lothair -0.6%, Twitch -0.7%, Durango -0.9% |
| 3 | Hvitar (1/26) | Hvitar 0%, Hochadir -1.2%, Lothair -2.4%, Twitch -2.8%, Durango -3.3% |
| 4 | Voresh (10/26) | Hochadir +4.1%, Twitch +3.1%, Lothair +3%, Rowena* +2.3%, Durango +1.4% |
| 5 | Ergander (9/26) | Hochadir +4.2%, Twitch +3%, Lothair +2.1%, Rowena* +1.8%, Durango +1% |

`*` = rough kit (damage parts only).

## Local-search optimum

- Single boss, damage in 60 s: Lossenia, Auster, Twitch, Lothair, Durango (swaps: Hvitar -> Twitch; Voresh -> Hvitar; Hvitar -> Durango; Durango -> Lothair; Ergander -> Hvitar; Hvitar -> Durango)
- Five targets, damage in 60 s: Lossenia, Hochadir, Hvitar, Durango, Lothair (swaps: Auster -> Hochadir; Voresh -> Auster; Ergander -> Durango; Durango -> Lothair; Auster -> Durango)
- Boss that fights back (clear in 120 s): Oggok, Auster, Twitch, Lothair, Durango (swaps: Lossenia -> Vinyara; Vinyara -> Oggok; Hvitar -> Twitch; Voresh -> Hvitar; Hvitar -> Lothair; Ergander -> Hvitar; Hvitar -> Durango)
- Three waves (clear in 150 s): Lossenia, Auster, Hvitar, Hochadir, Ergander (swaps: Voresh -> Hochadir)

## Captain (single boss, dungeon)

- Lossenia: 5682 DPS (active: Increases all allies' Attack by 24% in all battles.)
- Auster: 4913 DPS (inactive: In Fey Meander and Trial Breakthrough battles, increases all allies' Defense by 30%.)
- Hvitar: 4913 DPS (inactive: Increases all allies' Attack by 30% in Grand Gladiator Arena battles.)
- Voresh: 4913 DPS (inactive: no captain skill)
- Ergander: 4913 DPS (inactive: Increases all allies' Defense by 30% in Grand Gladiator Arena battles.)

## Artifacts (team score change vs no artifact)

- Auster@single: Ring of Winter +6%, Rift Hourglass +5.5%, Witch's Remains +3.5%, Misty Conch +3.2%, Eyeball of the Giant +2.2%, Manticore Statue +1.9%
- Auster@boss: Ring of Winter +12.4%, Rift Hourglass +6.2%, Witch's Remains +6.1%, Misty Conch +6.1%, Eyeball of the Giant +3.4%, Manticore Statue +3.1%
- Hvitar@single: Ring of Winter +6.1%, Rift Hourglass +2.8%, Misty Conch +2.7%, Eyeball of the Giant +1.9%, Manticore Statue +1.8%, Witch's Remains +1.7%
- Hvitar@boss: Ring of Winter +11.4%, Witch's Remains +4.8%, Misty Conch +4%, Manticore Statue +2.9%, Eyeball of the Giant +2.8%, Spiritual Incense Burner +2.2%
- Lossenia@single: Misty Conch +8.1%, Ring of Winter +4.3%, Rift Hourglass +2.1%, Lost Pearl in Desert +1.9%, Witch's Remains +1.7%, Spiritual Incense Burner +1.4%
- Lossenia@boss: Misty Conch +15.2%, Witch's Remains +8.9%, Ring of Winter +4.6%, Eyeball of the Giant +2.2%, Manticore Statue +1.7%, Arcana Cube +0.6%
- Voresh@single: Witch's Remains +3.3%, Ring of Winter +3.3%, Rift Hourglass +2.3%, Manticore Statue +1.1%, Eyeball of the Giant +1%, Misty Conch +0.4%
- Voresh@boss: Ring of Winter +11.5%, Rift Hourglass +9%, Spiritual Incense Burner +6.4%, Lost Pearl in Desert +5.6%, Witch's Remains +5.1%, Manticore Statue +4%
- Ergander@single: Ring of Winter +2.3%, Rift Hourglass +2.1%, Witch's Remains +1.9%, Eyeball of the Giant +1%, Manticore Statue +1%, Arcana Cube +0.3%
- Ergander@boss: Rift Hourglass +25.4%, Witch's Remains +6.1%, Ring of Winter +5.6%, Eyeball of the Giant +2.4%, Manticore Statue +1.9%, Spiritual Incense Burner +1.3%

## Stat priority (hero damage gain per step)

- Auster: haste +13.1%, atkF +9.8%, critRate +6.7%, atkP +5.8%, critDmg +4.8%, ench +0%, acc +0%
- Hvitar: atkF +9.5%, haste +9%, atkP +5.8%, critRate +5.1%, critDmg +4.3%, ench +0%, acc +0%
- Lossenia: haste +9%, atkF +7.7%, critRate +6.3%, critDmg +4.9%, atkP +3.9%, ench +0%, acc +0%

## Recommended mode teams

| Team | Bench | Win % | Time to kill | HP left % |
|---|---|---|---|---|
| Main (Vortex/AB) | boss | 46.7 | 104.9 | 29 |
| Grave: Hochadir for Hvitar | boss | 86.7 | 95.1 | 30.4 |
| Goblin Lair: Alphanarsy for Ergander | waves | 100 | 76.9 | 83.8 |
| Goblin Lair: main team | waves | 100 | 71.6 | 83.3 |
| Killer boss: Vinyara for Hvitar | boss | 100 | 93.5 | 95.4 |
| Poison team (when Twitch and Lothair arrive) | boss | 100 | 77.2 | 95.5 |

## Robustness of key verdicts

- Hvitar vs Hochadir (single boss): first option better by 6.1%; holds across every assumption range
- Hvitar vs Hochadir (boss clear): second option better by 7.6%; flips when energyRegen=2, energyRegen=6, energyPerBasic=4, energyPerBasic=12, energyPerHitTaken=0, battleFirst=0, castBattle=1.2, defK=600, bossControlMult=0
- Ergander vs Alphanarsy (waves): first option better by 2.3%; holds across every assumption range
- Hvitar: Rift Hourglass vs Eyeball of the Giant: first option better by 1.1%; flips when energyRegen=2, castBattle=1.2
