/* DHSim bundle: official Dragonheir data + battle simulator. Built by tools/bundle.py. */
(function(r){r.DHSIM_DATA={"version":"2026-10-24","source":"Official tables loaded by dragonheir.info from i.dmzgame.com (heroes-2025, equip-2025, heroLevelBase); skill charge times from the CN GameKee wiki (2023-09) and later reports","levelMult":[0.0,1.14,1.14,1.14,1.14,1.14,1.14,1.14,1.14,1.14,1.14,1.14,1.14,1.14,1.14,1.14,1.14,1.14,1.14,1.14,1.14,1.14,1.14,1.14,1.14,1.14,1.14,1.14,1.14,1.14,1.14,1.14,1.15,1.16,1.18,1.2,1.22,1.24,1.25,1.27,1.29,1.31,1.33,1.35,1.37,1.39,1.41,1.43,1.46,1.48,1.72,1.72,1.75,1.77,1.8,1.83,1.85,1.88,1.91,1.94,1.97,2.0,2.03,2.06,2.09,2.12,2.15,2.18,2.22,2.25,2.62,2.62,2.66,2.7,2.74,2.78,2.82,2.86,2.91,2.95,2.99,3.04,3.08,3.13,3.18,3.22,3.27,3.32,3.37,3.42,5.58,5.58,5.97,6.37,6.8,7.26,7.74,8.24,8.78,9.67,0.0],"starUp":[{"maxLv":30,"hp":8.51,"atk":8.51,"def":8.51,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},{"maxLv":50,"hp":12.97,"atk":12.97,"def":12.97,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},{"maxLv":70,"hp":19.74,"atk":19.74,"def":19.74,"critRate":1.0,"critDmg":1.0,"acc":1.0,"res":1.0,"ench":1.0,"haste":1.0,"atkSpd":1.0},{"maxLv":90,"hp":28.45,"atk":28.45,"def":28.45,"critRate":1.0,"critDmg":1.0,"acc":1.0,"res":1.0,"ench":1.0,"haste":1.0,"atkSpd":1.0},{"maxLv":100,"hp":0.0,"atk":0.0,"def":0.0,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0}],"heroes":{"21230":{"id":21230,"n":"Tallyn","r":"Legendary","el":"Lightning","sc":"Support","cl":"Guard","race":"Dwarf","melee":true,"af":0.38,"season":"s9","b":{"hp":2593.6,"atk":85.8,"def":78.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":129.68,"atk":4.29,"def":3.9,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"When taking damage equal to 20% of the hero's Max HP, has a 50% chance of dispelling 1 debuff on the hero. This skill only takes effect once during a period."},{"t":"After each successful passive skill trigger, the stacks of Static consumed increase by only 1."},{"t":"Accuracy +60","stats":{"acc":60.0}},{"t":"HP% +30%","stats":{"hpPct":0.3}},{"t":"Each time Gatekeeper deals damage, it also reduces the hit target's Ultimate Energy by 5%."}],"sk":{"p":{"n":"Battle-Hardened","auto":{"parts":[{"kind":"other","coef":{"atk":1.0},"el":null},{"kind":"shield","coef":{"atk":3.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Thunder Axe Slam","auto":{"parts":[{"kind":"other","coef":{"atk":3.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Last Stand","auto":{"parts":[{"kind":"other","coef":{"atk":3.0},"el":null},{"kind":"shield","coef":{"thp":0.25},"el":null}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":null,"cap":null},"23380":{"id":23380,"n":"Holfast","r":"Legendary","el":"Radiance","sc":"Aura","cl":"Sorcerer","race":"Rural Halfling","melee":false,"af":0.5,"season":"s9","b":{"hp":2012.0,"atk":93.0,"def":78.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":100.6,"atk":4.65,"def":3.9,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Damage dealt to enemies with a shield is increased by 20%."},{"t":"Adds  to the random buffs granted by the battle skill, and additionally grants random buffs to 1 or 2 random allied Aura hero(es)."},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"During the ultimate skill's duration, each time the hero deals Max HP-based damage to an enemy, has a 100.0% chance to inflict 5% Radiance Vulnerability on the enemy, lasting 10.0s and stacking up to 4 times."}],"sk":{"p":{"n":"In-Class Roll Call","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Incorrect Answer","auto":{"parts":[{"kind":"other","coef":{"atk":1.5,"hp":0.1},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"All Failed","auto":{"parts":[{"kind":"other","coef":{"atk":1.0},"el":null},{"kind":"other","coef":{"hp":0.15},"el":null},{"kind":"other","coef":{"atk":2.0,"hp":0.2},"el":null}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":null},"23790":{"id":23790,"n":"Sia","r":"Legendary","el":"Necrosis","sc":"Support","cl":"Assassin","race":"Construct","melee":true,"af":0.5,"season":"s9","b":{"hp":2012.0,"atk":84.0,"def":86.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":100.6,"atk":4.2,"def":4.3,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"When the hero's Mercy is full, grants all allies Defense Up II for 15s."},{"t":"Mercy accumulation speed increases by 20%, and its cap increases by 20%."},{"t":"When the hero's Mercy is full, inflicts 15% Vulnerability on a random enemy unit for 10s."},{"t":"DEF% +30%","stats":{"defPct":0.3}},{"t":"Repentance effect enhanced: Each time damage is taken, increases by current Mercy percentage * 30% (based on Mercy when the skill was cast). When this status is resisted, dispelled, or removed, the bearer loses 35% Ultimate Energy."}],"sk":{"p":{"n":"Cangue of Memory","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Painbound","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Mask of Grief","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"all"}}},"tm":null,"cap":null},"24700":{"id":24700,"n":"Syonis","r":"Legendary","el":"Necrosis","sc":"Shadow","cl":"Warlock","race":"Construct","melee":false,"af":0.5,"season":"s9","b":{"hp":2188.0,"atk":96.0,"def":88.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":109.4,"atk":4.8,"def":4.4,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Heals the hero by [+8%Max HP] after killing an enemy."},{"t":"Enhances the ultimate skill. When the hero gains Energy Drain Zone, dispels all debuffs and control effects from the hero. While the hero has Energy Drain Zone, damage dealt ignores Immortality."},{"t":"Enlightenment +60","stats":{"ench":60.0}},{"t":"Enlightenment +60","stats":{"ench":60.0}},{"t":"Passive skill enhancement: while on the field, reduces all enemy units' Defense by [own current Enlightenment * 0.1%] (up to 60%). Enemies are no longer affected by Defense Penalty effects."}],"sk":{"p":{"n":"Forbidden Codex","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"area"}},"b":{"n":"Material Collection","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.6},"el":"Derivative"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Insight Siphon","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.0},"el":"Derivative"}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":null,"cap":null},"23580":{"id":23580,"n":"Celestine","r":"Legendary","el":"Ice","sc":"Support","cl":"Warlock","race":"The Unstill","melee":true,"af":0.5,"season":"s9","b":{"hp":2296.0,"atk":82.0,"def":84.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":114.8,"atk":4.1,"def":4.2,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"The battle skill's range is increased to a 5x5 diamond area."},{"t":"The random permanent buffs granted by the passive skill additionally include 5% Damage Bonus and 5% Damage Reduction, which can stack up to 3 times. When the passive skill grants buffs, it will not grant buffs that are already at maximum stacks."},{"t":"The ultimate skill additionally inflicts Taunt on all enemies for 5s, ignoring Resistance. While the hero has Atonement, taking fatal damage grants immunity to the fatal damage once and immediately ends the Atonement state."},{"t":"HP% +30%","stats":{"hpPct":0.3}},{"t":"Enhances the ultimate skill effect. All allies convert Max HP along with the hero, and the conversion cap for allies increases to 35%."}],"sk":{"p":{"n":"Hymn","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Words of Judgment","auto":{"parts":[{"kind":"other","coef":{"hp":0.1},"el":null},{"kind":"other","coef":{"hp":0.1},"el":null},{"kind":"other","coef":{"atk":1.2},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Absolution Hymn","auto":{"parts":[{"kind":"shield","coef":{"hp":0.3},"el":null}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":null,"cap":null},"24330":{"id":24330,"n":"Fyrenzur","r":"Legendary","el":"Fire","sc":"Support","cl":"Scholar","race":"The Unstill","melee":false,"af":0.5,"season":"s9","b":{"hp":1712.0,"atk":101.6,"def":68.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":85.6,"atk":5.08,"def":3.43,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Reduces the hero's damage taken by 20% when under Control."},{"t":"When the passive skill triggers healing, it also grants healing to the ally who successfully dodged."},{"t":"Accuracy +60","stats":{"acc":60.0}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"For every 60s the hero survives on the field, all allies' Dodge Rate increases by 5%, up to 15%."}],"sk":{"p":{"n":"Coordinated Pursuit","auto":{"parts":[{"kind":"heal","coef":{"atk":1.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Crimsonfire Healing","auto":{"parts":[{"kind":"other","coef":{"atk":4.0},"el":null}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Fire Spirit Pact","auto":{"parts":[{"kind":"other","coef":{"atk":5.0},"el":null}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":null,"cap":null},"23410":{"id":23410,"n":"Longbeau","r":"Legendary","el":"Ice","sc":"Support","cl":"Sorcerer","race":"Ratfolk","melee":false,"af":0.5,"season":"s9","b":{"hp":1892.0,"atk":88.0,"def":86.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":94.6,"atk":4.4,"def":4.3,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"The hero takes 20% less crit damage."},{"t":"The passive skill has a 30% chance to directly add 2 stacks of White Rat when a debuff or control effect is inflicted on the hero."},{"t":"Accuracy +50","stats":{"acc":50.0}},{"t":"HP% +30%","stats":{"hpPct":0.3}},{"t":"The ultimate skill's chance to inflict Black Rat increases to 100%, and Black Rat increases the Resistance Penalty effect by 30%."}],"sk":{"p":{"n":"Mice on the Move","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Rat's Pick","auto":{"parts":[{"kind":"other","coef":{"atk":3.0},"el":null}],"hits":1,"ticks":null,"tgt":"all"}},"u":{"n":"Rodent's Reign","auto":{"parts":[{"kind":"other","coef":{"atk":5.0},"el":null},{"kind":"shield","coef":{"hp":0.2},"el":null}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":null,"cap":null},"26000":{"id":26000,"n":"Rhyviel","r":"Legendary","el":"Poison","sc":"Corrosion","cl":"Fighter","race":"Deep Elf","melee":true,"af":0.5,"season":"s9","b":{"hp":1993.0,"atk":99.0,"def":83.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":99.65,"atk":4.95,"def":4.18,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Heals the hero by [+8%Max HP] after killing an enemy."},{"t":"The passive skill has a 100% chance to inflict Rending Bite. When Corrosion School allies deal damage to units with Rending Bite, their damage is increased by an additional 5% (excluding True Damage)."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"The additional True Damage from the ultimate skill increases to [20% of current Corrosion] True Damage."}],"sk":{"p":{"n":"Venomous Sting","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Scythe Predation","auto":{"parts":[{"kind":"other","coef":{"atk":1.5},"el":null}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Bone-Gnawer Hound","auto":{"parts":[{"kind":"other","coef":{"atk":5.0},"el":null}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":null},"22901":{"id":22901,"n":"Amalfriede","r":"Legendary","el":"Poison","sc":"Support","cl":"Sorcerer","race":"Werewolf","melee":false,"af":0.5,"season":"s9","b":{"hp":2188.0,"atk":90.0,"def":72.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":109.4,"atk":4.5,"def":3.6,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Reduces the hero's damage taken by 20% when under Control."},{"t":"Recharges the hero's Ultimate Energy by 15.0 when taking damage over 20% of the hero's max HP. Takes effect once every 20.0s."},{"t":"HP% +30%","stats":{"hpPct":0.3}},{"t":"Accuracy +60","stats":{"acc":60.0}},{"t":"The duration of all statuses applied by the passive skill increases to 10s."}],"sk":{"p":{"n":"Malign Curseflow","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Silencing Spell","auto":{"parts":[{"kind":"other","coef":{"atk":1.0},"el":null},{"kind":"shield","coef":{"atk":3.0},"el":null}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Voodoo Ritual","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.5},"el":null}],"hits":5,"ticks":null,"tgt":"single"}}},"tm":null,"cap":null},"27010":{"id":27010,"n":"Child of Chaos","r":"Legendary","el":"Necrosis","sc":"Support","cl":"Warrior","race":"Human","melee":true,"af":0.5,"season":"s8","b":{"hp":2322.0,"atk":100.0,"def":85.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":116.1,"atk":5.0,"def":4.25,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"When casting the battle skill, grants all allies a random buff: Defense Up II, 20% Attack Up, or Dodge Up II, for 10.0s.\\nWhen casting the ultimate skill, has a 100.0% chance to inflict a random debuff on all enemies: Defense Penalty II, Recharging Speed Penalty, or Accuracy Penalty II, for 10.0s."},{"t":"The passive skill's interval shortens to 4s, and healing increases to [+20%Target's Max HP] per trigger."},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"For each buff an allied hero has, their damage taken is reduced by 5% (up to 20%).\nFor each debuff an enemy has, their damage taken is increased by 5% (up to 20%)."}],"sk":{"p":{"n":"Form Unbound","auto":{"parts":[{"kind":"heal","coef":{"thp":0.1},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Edict Unfettered","auto":{"parts":[{"kind":"other","coef":{"atk":4.0},"el":"Necrotic"}],"hits":1,"ticks":null,"tgt":"all"}},"u":{"n":"Shackles Unyielding","auto":{"parts":[{"kind":"other","coef":{"atk":5.0},"el":"Necrotic"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":null},"23940":{"id":23940,"n":"Ernesto","r":"Legendary","el":"Ice","sc":"Ice Blast","cl":"Guard","race":"Human","melee":false,"af":0.5,"season":"s8","b":{"hp":1822.0,"atk":104.0,"def":69.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":91.1,"atk":5.2,"def":3.48,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Heals the hero by [+8%Max HP] after killing an enemy."},{"t":"The battle skill inflicts an additional 15% Cold Vulnerability on hit targets for 10s."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Each time the hero gains 1 stack of Ice Crystal via the passive skill, grants all allies 4% Crit Rate & Crit Damage Up, up to 15 stacks."}],"sk":{"p":{"n":"Patient Angler","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Reckless All-In","auto":{"parts":[{"kind":"other","coef":{"atk":2.8},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"No Escape","auto":{"parts":[{"kind":"heal","coef":{"atk":9.0},"el":null},{"kind":"shield","coef":{"thp":0.25},"el":null}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":null,"cap":null},"22480":{"id":22480,"n":"Urgoula","r":"Legendary","el":"Poison","sc":"Support","cl":"Warrior","race":"Orc","melee":true,"af":0.5,"season":"s8","b":{"hp":2126.0,"atk":84.0,"def":75.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":106.3,"atk":4.2,"def":3.75,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"When taking damage equal to 20% of the hero's Max HP, has a 50% chance of dispelling 1 debuff on the hero. This skill only takes effect once during a period."},{"t":"Passive Skill: When a control effect is successfully inflicted on an allied unit, the HP cost is reduced to 10% of the hero's own Max HP."},{"t":"HP% +30%","stats":{"hpPct":0.3}},{"t":"DEF% +30%","stats":{"defPct":0.3}},{"t":"Passive Skill: If the hero's HP falls below 60% of Max HP, the duration of Bloodboil is extended to 10s."}],"sk":{"p":{"n":"Vengeful Intent","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Greatsword Slam","auto":{"parts":[{"kind":"other","coef":{"atk":3.5},"el":null}],"hits":1,"ticks":null,"tgt":"all"}},"u":{"n":"Wrath of Serpent","auto":{"parts":[{"kind":"shield","coef":{"hp":0.4},"el":null},{"kind":"other","coef":{"atk":7.5},"el":null}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":null,"cap":null},"23470":{"id":23470,"n":"Kushuhaar","r":"Legendary","el":"Fire","sc":"Support","cl":"Guard","race":"Birdfolk","melee":true,"af":0.5,"season":"s8","b":{"hp":2827.0,"atk":72.0,"def":64.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":141.35,"atk":3.6,"def":3.24,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":24.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"The range for acquiring Battle Soul is expanded. All allied units positioned behind the hero can now receive it."},{"t":"The number of targets healed by the battle skill increases to 5."},{"t":"During Divine Retribution, Kushuhaar does not perform additional attacks when allies use basic attacks. When allies deal damage through their passive skill, battle skill, or ultimate skill, there is a 30% chance the mark is not consumed."},{"t":"DEF% +30%","stats":{"defPct":0.3}},{"t":"The additional damage from consuming Divine Retribution increases to 60%."}],"sk":{"p":{"n":"Simmer Down","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Elder's Valor","auto":{"parts":[{"kind":"other","coef":{"atk":3.0},"el":null},{"kind":"other","coef":{"hp":0.15},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Ancestral Aegis","auto":{"parts":[{"kind":"shield","coef":{"hp":0.25},"el":null}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":null,"cap":null},"24630":{"id":24630,"n":"Selva","r":"Legendary","el":"Lightning","sc":"Support","cl":"Warrior","race":"Deepsea Merfolk","melee":true,"af":0.5,"season":"s8","b":{"hp":2237.0,"atk":78.0,"def":86.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":111.85,"atk":3.9,"def":4.33,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"The chance to inflict Imbalance after dealing damage increases to 100%."},{"t":"Enemies under Imbalance take 10% more damage."},{"t":"The battle skill's arcane array changes to a 5×5 rectangular area."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"The battle skill's Damage Reduction steal cap increases to 50%."}],"sk":{"p":{"n":"Deepsea Sovereign","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Thorned Maelstrom","auto":{"parts":[{"kind":"dmg","coef":{"def":0.5},"el":null}],"hits":5,"ticks":null,"tgt":"all"}},"u":{"n":"Fin Severer","auto":{"parts":[{"kind":"other","coef":{"def":3.0},"el":null},{"kind":"shield","coef":{"def":4.0},"el":null},{"kind":"other","coef":{"thp":0.01},"el":null},{"kind":"other","coef":{"def":2.0},"el":null}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":null},"23900":{"id":23900,"n":"Solmo","r":"Legendary","el":"Radiance","sc":"Support","cl":"Planeswalker","race":"Minotaur","melee":false,"af":0.4,"season":"s8","b":{"hp":2073.6,"atk":69.2,"def":82.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":103.68,"atk":3.46,"def":4.12,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Reduces the hero's damage taken by 20% when under Control."},{"t":"The stack cap of Tempered increases to 15."},{"t":"HP% +30%","stats":{"hpPct":0.3}},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"The shields the hero grants gain a bonus based on the hero's current Tempered stack count, with each stack granting 3% additional shield value."}],"sk":{"p":{"n":"Way of Austerity","auto":{"parts":[{"kind":"shield","coef":{"thp":0.1},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Favor of Sands","auto":{"parts":[{"kind":"shield","coef":{"thp":0.1,"ench":20.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Vigil of Radiance","auto":{"parts":[{"kind":"shield","coef":{"thp":0.06,"ench":3.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":null,"cap":null},"24400":{"id":24400,"n":"Vyressa","r":"Legendary","el":"Fire","sc":"Burn","cl":"Sorcerer","race":"Werewolf","melee":false,"af":0.5,"season":"s8","b":{"hp":1822.0,"atk":106.6,"def":75.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":91.1,"atk":5.33,"def":3.75,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Heals the hero by [+8%Max HP] after killing an enemy."},{"t":"The ultimate skill's infliction of Total Immolation ignores Resistance. The number of Hex Flame stacks consumed per basic attack is reduced to 15."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Hex Flame permanently provides the Attack bonus at maximum stacks."}],"sk":{"p":{"n":"Hex: Moonbound Fire","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Shackle: Merciless Flay","auto":{"parts":[{"kind":"other","coef":{"atk":1.5},"el":null},{"kind":"other","coef":{"atk":1.5},"el":null}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Rite: Sanguine Flame","auto":{"parts":[{"kind":"other","coef":{"atk":1.0},"el":null},{"kind":"other","coef":{"atk":4.5},"el":null},{"kind":"other","coef":{"atk":2.5},"el":null}],"hits":5,"ticks":null,"tgt":"all"}}},"tm":null,"cap":null},"23100":{"id":23100,"n":"Munch","r":"Legendary","el":"Fire","sc":"Support","cl":"Gunslinger","race":"Dwarf","melee":false,"af":0.5,"season":"s8","b":{"hp":1646.0,"atk":90.0,"def":72.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":82.3,"atk":4.5,"def":3.6,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"The hero takes 20% less crit damage."},{"t":"When inflicting a debuff, there is a 70% chance of extending its duration by 30%."},{"t":"Enlightenment +50","stats":{"ench":50.0}},{"t":"HP% +30%","stats":{"hpPct":0.3}},{"t":"Damage dealt to units with a shield increases by 50%."}],"sk":{"p":{"n":"Long-Range Cannon","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Ammo Drop","auto":{"parts":[{"kind":"other","coef":{"atk":3.0},"el":null}],"hits":1,"ticks":null,"tgt":"all"}},"u":{"n":"Full Bombardment","auto":{"parts":[{"kind":"other","coef":{"atk":6.0},"el":null}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":null,"cap":null},"24260":{"id":24260,"n":"Viliana","r":"Legendary","el":"Necrosis","sc":"Support","cl":"Warlock","race":"Deep Elf","melee":false,"af":0.5,"season":"s8","b":{"hp":1822.0,"atk":93.0,"def":82.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":91.1,"atk":4.65,"def":4.1,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Reduces the hero's damage taken by 20% when under Control."},{"t":"Passive Skill: When an allied unit on the field dies, grants a shield to the 2 nearest allied heroes."},{"t":"HP% +30%","stats":{"hpPct":0.3}},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"The number of debuffs dispelled by the ultimate skill increases to 3."}],"sk":{"p":{"n":"Zealous Devotee","auto":{"parts":[{"kind":"shield","coef":{"hp":0.01},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Interdict of Muteness","auto":{"parts":[{"kind":"other","coef":{"atk":1.0},"el":"Necrotic"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Spider Mother's Blessing","auto":{"parts":[{"kind":"shield","coef":{"thp":0.3},"el":null}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":null,"cap":null},"23400":{"id":23400,"n":"Tariz","r":"Legendary","el":"Lightning","sc":"Thunderbolt","cl":"Fighter","race":"Birdfolk","melee":true,"af":0.5,"season":"s8","b":{"hp":2210.0,"atk":98.0,"def":78.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":110.5,"atk":4.9,"def":3.9,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Reduces the hero's damage taken by 20% when under Control."},{"t":"While the ultimate skill's storm is active, there is a 25% chance every 2s to trigger a Lightning Chain."},{"t":"Enlightenment +60","stats":{"ench":60.0}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"The number of Electricity stacks required for the passive skill to fire an additional Lightning Chain is reduced to 40.\\nWhen the passive skill deals damage, also has a 100.0% chance to inflict 20% Lightning Vulnerability on the target for 10.0s."}],"sk":{"p":{"n":"Thunderblade Buildup","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"High Aerial Hunt","auto":{"parts":[{"kind":"other","coef":{"atk":3.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Storm of Murders","auto":{"parts":[{"kind":"other","coef":{"atk":2.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":null,"cap":null},"24380":{"id":24380,"n":"Larclys","r":"Legendary","el":"Necrosis","sc":"Summon","cl":"Warlock","race":"Fey","melee":true,"af":0.5,"season":"s7","b":{"hp":2322.0,"atk":100.0,"def":85.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":116.1,"atk":5.0,"def":4.25,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"The hero takes 20% less crit damage."},{"t":"The ultimate skill now applies a shield to all allies."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"The battle skill directly summons 5 Specters.\nEach stack of Damage Intensification inflicted by a Specter increases the target's damage taken by 2.5%, and the stack cap is raised to 30."}],"sk":{"p":{"n":"Eventide Buzz","auto":{"parts":[{"kind":"other","coef":{"atk":1.0},"el":"Necrotic"},{"kind":"shield","coef":{"atk":5.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Nightswamp's Devour","auto":{"parts":[{"kind":"other","coef":{"atk":1.5},"el":"Necrotic"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Shadow Pounce","auto":{"parts":[{"kind":"other","coef":{"atk":10.0},"el":"Necrotic"},{"kind":"shield","coef":{"atk":10.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":null,"cap":null},"23600":{"id":23600,"n":"Anselmo","r":"Legendary","el":"Ice","sc":"Support","cl":"Marksman","race":"Birdfolk","melee":false,"af":0.5,"season":"s7","b":{"hp":1928.0,"atk":78.0,"def":78.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":96.4,"atk":3.9,"def":3.94,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Enemies hit by the battle skill are additionally inflicted with Attack Penalty II for 10s."},{"t":"When the hero's HP falls below 70%, immediately restores [+30%Max HP] HP. This effect has a 20.0s cooldown."},{"t":"For every 2 stacks of Hawkeye gained, 3 Frost Quills are obtained, with a 10s cooldown."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"The maximum stack cap for Hawkeye is raised to 35."}],"sk":{"p":{"n":"Frosted Firmament","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Star Shift","auto":{"parts":[{"kind":"other","coef":{"atk":4.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Glacial Volley","auto":{"parts":[{"kind":"other","coef":{"atk":3.0},"el":null},{"kind":"other","coef":{"atk":2.0},"el":null}],"hits":2,"ticks":null,"tgt":"all"}}},"tm":null,"cap":null},"21790":{"id":21790,"n":"Lizkar","r":"Legendary","el":"Fire","sc":"Support","cl":"Priest","race":"Lizardfolk","melee":false,"af":0.38,"season":"s7","b":{"hp":1989.0,"atk":86.2,"def":72.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":99.45,"atk":4.31,"def":3.61,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Reduces the hero's damage taken by 20% when under Control."},{"t":"If the applied Energy Prohibition expires without being manually dispelled, it ignores Resistance and reduces the target's Ultimate Energy by 30%."},{"t":"Accuracy +50","stats":{"acc":50.0}},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"Energy Prohibition effect is enhanced; the target can no longer naturally recover Ultimate Energy or Battle Skill Energy."}],"sk":{"p":{"n":"Oracle's Decree","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Priestly Majesty","auto":{"parts":[{"kind":"other","coef":{"atk":3.2},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Quetzalcoatl's Judgment","auto":{"parts":[{"kind":"other","coef":{"atk":6.0},"el":null}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":null},"23570":{"id":23570,"n":"Rena","r":"Legendary","el":"Radiance","sc":"Support","cl":"Warrior","race":"Construct","melee":true,"af":0.5,"season":"s7","b":{"hp":2650.0,"atk":86.0,"def":70.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":132.5,"atk":4.3,"def":3.5,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"The battle skill's buff application chance is increased to 100%."},{"t":"When granting a buff, there is a 70% chance of extending its duration by 30%."},{"t":"Allied heroes gain a 15% Max HP increase."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"Rena's Arcane Light effects on Energy gain rate are increased to 20%, and they also affect battle skill recharge."}],"sk":{"p":{"n":"Arcane Light","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Sacred Blade Dance","auto":{"parts":[{"kind":"other","coef":{"def":1.0},"el":null},{"kind":"heal","coef":{"def":1.0},"el":null}],"hits":5,"ticks":null,"tgt":"single"}},"u":{"n":"Supreme Domain","auto":{"parts":[{"kind":"heal","coef":{"def":6.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":null,"cap":null},"24340":{"id":24340,"n":"Serpentemis","r":"Legendary","el":"Poison","sc":"Toxin","cl":"Sorcerer","race":"The Unstill","melee":false,"af":0.55,"season":"s7","b":{"hp":1943.0,"atk":106.0,"def":81.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":97.15,"atk":5.3,"def":4.06,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Heals the hero by [+8%Max HP] after killing an enemy."},{"t":"When Serpent Venom triggers the Toxin mechanic, it is counted as additional Toxin stacks."},{"t":"Enlightenment +60","stats":{"ench":60.0}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Passive skill's base Enlightenment gain is increased to 5. When an ally's Enlightenment reaches its cap, they gain 20% Derivative Damage Bonus."}],"sk":{"p":{"n":"Bone-Seeping Poison","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.2},"el":"Derivative"}],"hits":1,"ticks":null,"tgt":"all"}},"b":{"n":"Fanged Bite","auto":{"parts":[{"kind":"other","coef":{"atk":2.4,"ench":12.0},"el":null}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Soul-Tainting Tide","auto":{"parts":[{"kind":"dmg","coef":{"atk":8.0},"el":"Derivative"}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":null,"cap":null},"23980":{"id":23980,"n":"Monelisse","r":"Legendary","el":"Radiance","sc":"Rally","cl":"Planeswalker","race":"Sheen Elf","melee":false,"af":0.5,"season":"s7","b":{"hp":1822.0,"atk":102.6,"def":75.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":91.1,"atk":5.13,"def":3.75,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Heals the hero by [+8%Max HP] after killing an enemy."},{"t":"The passive skill triggers once allies have cumulatively gained 3 stacks of Rally."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"After using an ultimate skill, shares the hero's Damage Reduction effect with all Rally allies for 10s."}],"sk":{"p":{"n":"Moonlight Shower","auto":{"parts":[{"kind":"other","coef":{"atk":3.0},"el":null}],"hits":1,"ticks":null,"tgt":"all"}},"b":{"n":"Lunar Chant","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Purifying Moonwave","auto":{"parts":[{"kind":"other","coef":{"atk":4.0},"el":null},{"kind":"other","coef":{"atk":2.0},"el":null},{"kind":"other","coef":{"atk":4.0},"el":null}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":null,"cap":null},"22400":{"id":22400,"n":"Derrell","r":"Legendary","el":"Ice","sc":"Support","cl":"Warrior","race":"Human","melee":true,"af":0.5,"season":"s7","b":{"hp":2126.0,"atk":84.0,"def":75.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":106.3,"atk":4.2,"def":3.75,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Reduces the hero's damage taken by 20% when under Control."},{"t":"When the hero's HP is below 60%, heals the hero by [+1%Max HP] per second."},{"t":"DEF% +30%","stats":{"defPct":0.3}},{"t":"HP% +30%","stats":{"hpPct":0.3}},{"t":"Has a 35% chance to get immune to the Control to be inflicted."}],"sk":{"p":{"n":"Edict of End","auto":{"parts":[{"kind":"heal","coef":{"hp":0.1},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Frozen Prison","auto":{"parts":[{"kind":"other","coef":{"atk":1.5},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Avalanche Annihilation","auto":{"parts":[{"kind":"other","coef":{"atk":3.0},"el":null},{"kind":"heal","coef":{"def":2.5},"el":null}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":null,"cap":null},"24030":{"id":24030,"n":"Elip","r":"Legendary","el":"Lightning","sc":"Support","cl":"Marksman","race":"Fey","melee":false,"af":0.5,"season":"s7","b":{"hp":1822.0,"atk":93.0,"def":81.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":91.1,"atk":4.65,"def":4.05,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Reduces the hero's damage taken by 20% when under Control."},{"t":"Passive: Each tile the hero moves now both heals an ally and deals damage to an enemy."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"Accuracy +50","stats":{"acc":50.0}},{"t":"When inflicting , additionally drains 10% Ultimate Energy."}],"sk":{"p":{"n":"Swift as the Wind","auto":{"parts":[{"kind":"heal","coef":{"atk":1.0},"el":null},{"kind":"heal","coef":{"atk":1.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Antelope Flash","auto":{"parts":[{"kind":"other","coef":{"atk":3.0},"el":null}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Shining Beacon","auto":{"parts":[{"kind":"other","coef":{"atk":5.0},"el":null}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":null},"23110":{"id":23110,"n":"Alarick","r":"Legendary","el":"Ice","sc":"Support","cl":"Planeswalker","race":"Human","melee":false,"af":0.5,"season":"s7","b":{"hp":1646.0,"atk":90.0,"def":72.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":82.3,"atk":4.5,"def":3.6,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"The hero takes 20% less crit damage."},{"t":"The battle skill's targeting count is increased to 3."},{"t":"Accuracy +50","stats":{"acc":50.0}},{"t":"HP% +30%","stats":{"hpPct":0.3}},{"t":"The Ultimate Energy steal effect applied by Frozen is increased to 3%, and the White Owl's healing every 5s is increased to [50% Attack]."}],"sk":{"p":{"n":"White Owl Companion","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Thou Shalt Be Silent","auto":{"parts":[{"kind":"other","coef":{"atk":2.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Return to Frozen Soil","auto":{"parts":[{"kind":"other","coef":{"atk":4.0},"el":null}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":null,"cap":null},"23800":{"id":23800,"n":"Thorgos","r":"Legendary","el":"Fire","sc":"Wild","cl":"Sorcerer","race":"Elemental Lord","melee":true,"af":0.55,"season":"s6","b":{"hp":2288.0,"atk":96.8,"def":84.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":114.4,"atk":4.84,"def":4.2,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Heals the hero by [+8%Max HP] after killing an enemy."},{"t":"The damage area of the battle skill is expanded to a 5×5 rectangle and changes to triggering 2 Tornado Slashes. If the roll result is ≥ 4, deal an additional 2 Tornado Slashes."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"The maximum dice value of all skills is increased by 3."}],"sk":{"p":{"n":"Blazing Reignition","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Pyre of Bones","auto":{"parts":[{"kind":"other","coef":{"atk":3.2},"el":null}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Strife Unleashed","auto":{"parts":[{"kind":"other","coef":{"atk":6.0},"el":null}],"hits":3,"ticks":null,"tgt":"single"}}},"tm":null,"cap":null},"22420":{"id":22420,"n":"Perseus","r":"Legendary","el":"Necrosis","sc":"Support","cl":"Warrior","race":"The Corrupted","melee":true,"af":0.55,"season":"s6","b":{"hp":2433.8,"atk":75.8,"def":75.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":121.69,"atk":3.79,"def":3.75,"critRate":0.0,"critDmg":0.0,"acc":12.0,"res":12.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"The hero takes 20% less crit damage."},{"t":"Upon being hit by an enemy, reduces the hero's damage taken from that enemy by 1%, up to 15 stacks."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"HP% +30%","stats":{"hpPct":0.3}},{"t":"When an enemy's Fallen Poison reaches maximum stacks or the target dies, gains 20% Ultimate Energy and inflicts Fear on all enemies."}],"sk":{"p":{"n":"Venomous Tentacle","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Devastation","auto":{"parts":[{"kind":"other","coef":{"atk":1.0},"el":"Necrotic"}],"hits":4,"ticks":null,"tgt":"single"}},"u":{"n":"Predation","auto":{"parts":[{"kind":"other","coef":{"atk":0.7},"el":"Necrotic"},{"kind":"heal","coef":{"hp":0.3},"el":null}],"hits":12,"ticks":null,"tgt":"single"}}},"tm":null,"cap":{"t":"Increases all allies' Max HP by 24% in all battles.","mode":"all"}},"22890":{"id":22890,"n":"Ethyreis","r":"Legendary","el":"Necrosis","sc":"Support","cl":"Priest","race":"Werewolf","melee":false,"af":0.5,"season":"s6","b":{"hp":2188.0,"atk":90.0,"def":72.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":109.4,"atk":4.5,"def":3.6,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Battle skill also applies  to allies for s."},{"t":"The  applied by the ultimate skill is replaced with , and the delay ratio is increased to 60%."},{"t":"The battle skill heals all allies."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"Passive skill enhancement: when an ally receives healing, a portion is converted into Attack, granting up to 50% base Attack."}],"sk":{"p":{"n":"Moonlit Prayer","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Circle of the Pack","auto":{"parts":[{"kind":"heal","coef":{"thp":0.15,"ench":20.0},"el":null}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Abyssal Arcanum","auto":{"parts":[{"kind":"dmg","coef":{"atk":7.0},"el":"Necrotic"},{"kind":"heal","coef":{"thp":0.1},"el":null},{"kind":"other","coef":{"hp":1.0,"ench":100.0},"el":null}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":null,"cap":null},"21640":{"id":21640,"n":"Stegamoffyn","r":"Legendary","el":"Poison","sc":"Support","cl":"Marksman","race":"Wood Elf","melee":false,"af":0.4,"season":"s6","b":{"hp":1663.6,"atk":85.0,"def":76.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":83.18,"atk":4.25,"def":3.8,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"The hero takes 20% less crit damage."},{"t":"Reduces the passive effect interval by 1.0s."},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Accuracy +50","stats":{"acc":50.0}},{"t":"The number of random targets selected by the battle skill increases to 5."}],"sk":{"p":{"n":"Demon in the Woods","auto":{"parts":[{"kind":"heal","coef":{"atk":1.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Soulseeker Arrow","auto":{"parts":[{"kind":"other","coef":{"atk":2.4},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Cursed Domain","auto":{"parts":[{"kind":"other","coef":{"atk":1.5},"el":null},{"kind":"other","coef":{"atk":1.5},"el":null}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":null,"cap":{"t":"Increases all allies' Attack by 24% in all battles.","mode":"all"}},"23050":{"id":23050,"n":"Kurvida","r":"Legendary","el":"Lightning","sc":"Dauntless","cl":"Warrior","race":"Chaotic Evil","melee":true,"af":0.55,"season":"s6","b":{"hp":2322.0,"atk":102.0,"def":78.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":116.1,"atk":5.1,"def":3.9,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Heals the hero by [+8%Max HP] after killing an enemy."},{"t":"The number of Darkfeather applied by the ultimate skill is increased to 3."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":" has a 100% chance to trigger an additional 1 time."}],"sk":{"p":{"n":"Kiss of the Night","auto":{"parts":[{"kind":"other","coef":{"atk":1.8},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Phantom Deceit","auto":{"parts":[{"kind":"other","coef":{"atk":1.8},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Feast of Pain","auto":{"parts":[{"kind":"other","coef":{"atk":2.0},"el":null}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":null,"cap":null},"23670":{"id":23670,"n":"Blah Blah","r":"Legendary","el":"Poison","sc":"Support","cl":"Rogue","race":"Construct","melee":false,"af":0.5,"season":"s6","b":{"hp":1620.0,"atk":94.0,"def":78.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":81.0,"atk":4.7,"def":3.94,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"The hero can gain all 3 types of Auras, and the stack limit of all Auras is increased by 1."},{"t":"When the battle skill heals, there is a  chance to apply  for s."},{"t":"All Aura effects are increased by 50%"},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"The ultimate skill can trigger the performance effects of all Auras simultaneously."}],"sk":{"p":{"n":"Concerto Module","auto":{"parts":[],"hits":3,"ticks":null,"tgt":"single"}},"b":{"n":"Custom Performance","auto":{"parts":[{"kind":"heal","coef":{"thp":0.1,"ench":15.0},"el":null}],"hits":1,"ticks":null,"tgt":"all"}},"u":{"n":"Full-Arena Surround","auto":{"parts":[{"kind":"other","coef":{"atk":3.0},"el":null},{"kind":"shield","coef":{"hp":0.25},"el":null},{"kind":"other","coef":{"atk":3.0},"el":null},{"kind":"heal","coef":{"atk":3.0},"el":null},{"kind":"other","coef":{"atk":3.0},"el":null}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":null,"cap":null},"24490":{"id":24490,"n":"Aethereal","r":"Legendary","el":"Ice","sc":"Frost","cl":"Guard","race":"Elemental Lord","melee":true,"af":0.55,"season":"s6","b":{"hp":1943.0,"atk":106.0,"def":81.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":97.15,"atk":5.3,"def":4.06,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Damage dealt to enemies with a shield is increased by 20%."},{"t":"Each segment of the ultimate skill deals progressively increased damage equal to [20% ATK][+120%Attack]Derivative, and each hit applies 3 stacks of Bone-Chilling Frost."},{"t":"Enlightenment +60","stats":{"ench":60.0}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"The chance for the passive skill to apply  is increased to 100%. When Aethereal is deployed, allied Frost damage is increased to [+5% Max HP] Cold Damage, and the cap on Attack-scaling damage is increased."}],"sk":{"p":{"n":"Glacial Calamity","auto":{"parts":[{"kind":"other","coef":{"atk":1.0},"el":null}],"hits":1,"ticks":null,"tgt":"area"}},"b":{"n":"Chillblade Edge","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.4},"el":"Derivative"},{"kind":"dmg","coef":{"atk":2.4},"el":"Derivative"},{"kind":"dmg","coef":{"atk":2.4},"el":"Derivative"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Icethorn Ambush","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.2},"el":"Derivative"}],"hits":10,"ticks":null,"tgt":"all"}}},"tm":null,"cap":null},"22700":{"id":22700,"n":"Alarys","r":"Legendary","el":"Lightning","sc":"Support","cl":"Warrior","race":"Human","melee":true,"af":0.5,"season":"s6","b":{"hp":1966.0,"atk":72.0,"def":77.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":98.3,"atk":3.6,"def":3.85,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"When taking damage equal to 20% of the hero's Max HP, has a 50% chance of dispelling 1 debuff on the hero. This skill only takes effect once during a period."},{"t":"The hero grants 15% more shield."},{"t":"Accuracy +50","stats":{"acc":50.0}},{"t":"HP% +30%","stats":{"hpPct":0.3}},{"t":"Ignores 35% of the target's Resistance."}],"sk":{"p":{"n":"Gladiatorial Technique","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Intimidating Slash","auto":{"parts":[{"kind":"other","coef":{"atk":2.5},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Will to Survive","auto":{"parts":[{"kind":"other","coef":{"atk":6.0},"el":null},{"kind":"shield","coef":{"hp":0.2},"el":null},{"kind":"heal","coef":{"hp":0.05},"el":null}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":null,"cap":null},"23820":{"id":23820,"n":"Anneliesis","r":"Legendary","el":"Radiance","sc":"Aura","cl":"Guard","race":"Elemental Lord","melee":true,"af":0.5,"season":"s6","b":{"hp":2168.0,"atk":96.0,"def":93.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":108.4,"atk":4.8,"def":4.65,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":12.0,"ench":10.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"When the battle skill grants a Shield to an ally, deals [+100%Attack]radiant damage to enemies within a 3×3 area around that ally. If the ally has a Shield, additionally deals [100% Shield] Radiant Damage to enemies in the area."},{"t":"When allied heroes have a Shield, damage dealt is increased by 10%."},{"t":"At the start of battle, all heroes gain 10% Max HP and 10% Damage Bonus."},{"t":"HP% +30%","stats":{"hpPct":0.3}},{"t":"When casting the ultimate skill, grants  to all allies, which is removed when the ultimate skill's effect ends. Also deals an additional [+150%Attack][+10%Max HP]radiant damage."}],"sk":{"p":{"n":"Radiant Descent","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Holylight Protection","auto":{"parts":[{"kind":"shield","coef":{"thp":0.1},"el":null},{"kind":"dmg","coef":{"atk":1.0},"el":null},{"kind":"other","coef":{"hp":0.05},"el":null}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Light of Judgment","auto":{"parts":[{"kind":"other","coef":{"atk":1.5,"hp":0.1},"el":null},{"kind":"heal","coef":{"thp":0.05},"el":null}],"hits":2,"ticks":null,"tgt":"all"}}},"tm":null,"cap":null},"23610":{"id":23610,"n":"Suwalah","r":"Legendary","el":"Radiance","sc":"Support","cl":"Priest","race":"Birdfolk","melee":false,"af":0.4,"season":"s6","b":{"hp":1777.0,"atk":82.0,"def":74.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":88.85,"atk":4.1,"def":3.7,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"The hero takes 20% less crit damage."},{"t":"The Ultimate Skill affects all allied units."},{"t":"HP% +30%","stats":{"hpPct":0.3}},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"Resurrection time is reduced to 12s."}],"sk":{"p":{"n":"Undying Melody","auto":{"parts":[{"kind":"heal","coef":{"hp":0.3},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Supreme Chant","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Flawless Wings","auto":{"parts":[{"kind":"shield","coef":{"hp":0.5},"el":null}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":null},"20620":{"id":20620,"n":"Maashtur","r":"Legendary","el":"Lightning","sc":"Support","cl":"Guard","race":"Tigerfolk","melee":true,"af":0.5,"season":"s5","b":{"hp":2826.4,"atk":75.0,"def":61.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":141.32,"atk":3.75,"def":3.09,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":24.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"When any target on the battlefield loses a buff or shield, the passive skill heals all allies."},{"t":"Battle skill will inflict Stunned on the target regardless the 50% Ultimate Energy prerequisite."},{"t":"The damage dealt by the hero and allies marked with Great River's Favor is increased by 15%, and damage taken is reduced by 15%."},{"t":"Increases the duration of debuffs inflicted by the ultimate skill by 30%."},{"t":"The ultimate skill inflicts debuffs on all enemies."}],"sk":{"p":{"n":"Majesty","auto":{"parts":[{"kind":"heal","coef":{"hp":0.1},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"River God's Verdict","auto":{"parts":[{"kind":"other","coef":{"atk":2.4,"hp":0.08},"el":null},{"kind":"shield","coef":{"hp":0.05},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Edge's Regards","auto":{"parts":[{"kind":"other","coef":{"atk":2.0,"hp":0.04},"el":null}],"hits":3,"ticks":null,"tgt":"single"}}},"tm":null,"cap":{"t":"Increases all allies' Max HP by 30% in Grand Gladiator Arena.","mode":"arena"}},"22440":{"id":22440,"n":"Seyir","r":"Legendary","el":"Necrosis","sc":"Shadow","cl":"Fighter","race":"Deep Elf","melee":true,"af":0.5,"season":"s5","b":{"hp":2100.0,"atk":95.0,"def":75.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":105.0,"atk":4.75,"def":3.75,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Heals the hero by [+8%Max HP] after killing an enemy."},{"t":"When dealing damage to an enemy, for every 15% of the target's Max HP over that of the hero, the damage dealt will increase by 1%, up to 12%."},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Enlightenment +60","stats":{"ench":60.0}},{"t":"Ignores 15% of the target's Defense."}],"sk":{"p":{"n":"Mastermind","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Weakness Break","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.0},"el":"Derivative"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Strategist","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.0},"el":"Derivative"}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":null,"cap":null},"22450":{"id":22450,"n":"Ivira","r":"Legendary","el":"Ice","sc":"Support","cl":"Rogue","race":"Deep Elf","melee":true,"af":0.55,"season":"s5","b":{"hp":2339.6,"atk":96.0,"def":74.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":116.98,"atk":4.8,"def":3.7,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"The hero takes 20% less crit damage."},{"t":"When dealing damage to enemies with less than 50% HP, the hero gains 15% Damage Bonus."},{"t":"Enlightenment +60","stats":{"ench":60.0}},{"t":"Accuracy +50","stats":{"acc":50.0}},{"t":"While the hero is on the field, blocks resurrection for all enemies. (Can trigger up to 1 time)"}],"sk":{"p":{"n":"First Impression","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Another Drink","auto":{"parts":[{"kind":"other","coef":{"atk":3.0,"ench":12.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Stay Awhile","auto":{"parts":[{"kind":"other","coef":{"atk":5.0,"ench":24.0},"el":null}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":{"t":"Increases all allies' Attack by 30% in Grand Gladiator Arena battles.","mode":"arena"}},"23060":{"id":23060,"n":"Scaarr","r":"Legendary","el":"Fire","sc":"Support","cl":"Warrior","race":"Troll","melee":true,"af":0.5,"season":"s5","b":{"hp":2380.0,"atk":88.0,"def":82.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":119.0,"atk":4.4,"def":4.1,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"When Scaarr's passive skill grants a buff to himself, there is also a(n)  chance to inflict Attack Penalty II on a random enemy for 20s."},{"t":"The hero's battle skill grants 20% Attack Up to all allies and shares the buff status, additionally granting 20% Attack Up to allies."},{"t":"HP% +30%","stats":{"hpPct":0.3}},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"Buffs applied by the ultimate skill become 25% Damage Up and 25% Damage Reduction, and cannot be dispelled."}],"sk":{"p":{"n":"Vitality Extraction","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Fight Together","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Flame Hammer","auto":{"parts":[{"kind":"other","coef":{"def":4.5},"el":null}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":null,"cap":null},"24680":{"id":24680,"n":"Pardis","r":"Legendary","el":"Poison","sc":"Corrosion","cl":"Priest","race":"Satyresque","melee":true,"af":0.5,"season":"s5","b":{"hp":2168.0,"atk":93.6,"def":70.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":108.4,"atk":4.68,"def":3.5,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"The hero takes 20% less crit damage."},{"t":"The hero gains 15% Damage Bonus when their HP is higher than 85%."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Ignores the target's Resistance when inflicting debuffs or control effects on them with ultimate skill."}],"sk":{"p":{"n":"Let's Drink All Night","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Drink to Your Heart's Content","auto":{"parts":[{"kind":"other","coef":{"atk":3.6},"el":null}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Light Up the Night","auto":{"parts":[{"kind":"other","coef":{"atk":0.8},"el":null},{"kind":"heal","coef":{"atk":1.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":null,"cap":{"t":"Increases all allies' Attack by 24% in all battles.","mode":"all"}},"22130":{"id":22130,"n":"Shahla","r":"Legendary","el":"Radiance","sc":"Aura","cl":"Scholar","race":"Tigerfolk","melee":false,"af":0.5,"season":"s5","b":{"hp":1611.4,"atk":89.6,"def":74.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":80.57,"atk":4.48,"def":3.7,"critRate":0.1,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Damage dealt to enemies with a shield is increased by 20%."},{"t":"The hero gains 15% Damage Bonus when their HP is higher than 85%."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Ignores 15% of the target's Defense."}],"sk":{"p":{"n":"Soothing Fragrance","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Boding of Evil","auto":{"parts":[{"kind":"other","coef":{"atk":3.0,"hp":0.1},"el":null}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Echoing Prophecy","auto":{"parts":[{"kind":"other","coef":{"atk":3.0,"hp":0.1},"el":null}],"hits":4,"ticks":null,"tgt":"single"}}},"tm":null,"cap":{"t":"Increases all allies' Attack by 24% in all battles.","mode":"all"}},"22780":{"id":22780,"n":"Fathomdown","r":"Legendary","el":"Lightning","sc":"Support","cl":"Warrior","race":"Merfolk","melee":true,"af":0.55,"season":"s5","b":{"hp":2264.0,"atk":84.4,"def":70.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":113.2,"atk":4.22,"def":3.52,"critRate":0.0,"critDmg":0.0,"acc":24.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"When taking damage equal to 20% of the hero's Max HP, has a 50% chance of dispelling 1 debuff on the hero. This skill only takes effect once during a period."},{"t":"When the hero's HP is below 60%, heals the hero by [+1%Max HP] per second."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"Accuracy +50","stats":{"acc":50.0}},{"t":"When the ultimate skill hits, enemies with less than 50% Ultimate Energy will also have their Ultimate Energy reduced. Ultimate Energy reduction is increased to 15%."}],"sk":{"p":{"n":"Unshakable","auto":{"parts":[{"kind":"heal","coef":{"hp":0.05},"el":null},{"kind":"heal","coef":{"hp":0.3},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Raging Thunder","auto":{"parts":[{"kind":"other","coef":{"atk":3.6},"el":null}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Thunderbolt","auto":{"parts":[{"kind":"other","coef":{"atk":1.5},"el":null}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":{"t":"Increases all allies' Attack by 30% in dungeon battles.","mode":"dungeon"}},"24420":{"id":24420,"n":"Rashaad","r":"Legendary","el":"Fire","sc":"Support","cl":"Priest","race":"Tigerfolk","melee":true,"af":0.5,"season":"s5","b":{"hp":2137.0,"atk":98.0,"def":69.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":106.85,"atk":4.9,"def":3.45,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Damage dealt to enemies with a shield is increased by 20%."},{"t":"The hero grants 15% more shield."},{"t":"Accuracy +50","stats":{"acc":50.0}},{"t":"HP% +30%","stats":{"hpPct":0.3}},{"t":"When casting a battle skill, grants a [+50%Attack] shield to the hero and a random ally."}],"sk":{"p":{"n":"Steadfast Heart","auto":{"parts":[{"kind":"heal","coef":{"atk":0.5},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Sound of Judgment","auto":{"parts":[{"kind":"other","coef":{"atk":1.3},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Gavel of Justice","auto":{"parts":[{"kind":"other","coef":{"atk":7.5},"el":null},{"kind":"heal","coef":{"atk":2.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":null,"cap":null},"24560":{"id":24560,"n":"Szecedith","r":"Legendary","el":"Poison","sc":"Corrosion","cl":"Rogue","race":"Dragon","melee":true,"af":0.5,"season":"s5","b":{"hp":2314.0,"atk":104.0,"def":82.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":115.7,"atk":5.2,"def":4.1,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Damage dealt to enemies with a shield is increased by 20%."},{"t":"When an attack consumes Corruption, damage increases to [+600%Attack]real damage, and the refresh interval of Corruption is reduced to 8s."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"The ultimate skill summons 4 Dragon Scales to attack enemies. The Mire Toxin effect can stack up to 3 times."}],"sk":{"p":{"n":"Greetings from the Festering Mire","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"No One Survives","auto":{"parts":[{"kind":"other","coef":{"atk":3.4},"el":null},{"kind":"other","coef":{"atk":3.4},"el":null},{"kind":"other","coef":{"atk":3.0},"el":null}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Endless Hate","auto":{"parts":[{"kind":"other","coef":{"atk":3.0},"el":null},{"kind":"other","coef":{"atk":1.6},"el":null}],"hits":3,"ticks":null,"tgt":"area"}}},"tm":null,"cap":{"t":"Increases all allies' Attack by 24% in all battles.","mode":"all"}},"22880":{"id":22880,"n":"Saverio","r":"Legendary","el":"Necrosis","sc":"Shadow","cl":"Warrior","race":"Werewolf","melee":true,"af":0.5,"season":"s5","b":{"hp":2400.0,"atk":100.0,"def":80.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":120.0,"atk":5.0,"def":4.0,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Heals the hero by [+8%Max HP] after killing an enemy."},{"t":"When the battle starts and the battle skill is cast, the battle skill cooldown is reduced by 20%.\nThe battle skill grants  to the hero fors."},{"t":"Each time the ultimate skill is landed, inflicts 3 stacks of Bloodmoon Power on all enemies."},{"t":"Enlightenment +60","stats":{"ench":60.0}},{"t":"The additional damage granted by each stack of Bloodmoon Power is increased to 250% Attack."}],"sk":{"p":{"n":"Parting the Clouds","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"all"}},"b":{"n":"Moon's Shadow","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.6},"el":"Derivative"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Raging Bloodmoon","auto":{"parts":[{"kind":"dmg","coef":{"atk":4.5},"el":"Derivative"},{"kind":"dmg","coef":{"atk":4.5},"el":"Derivative"}],"hits":5,"ticks":null,"tgt":"area"}}},"tm":null,"cap":{"t":"Increases all allies' Enlightenment by 48.0 in all battles.","mode":"all"}},"24580":{"id":24580,"n":"Caroux","r":"Legendary","el":"Radiance","sc":"Support","cl":"Bard","race":"Gnome","melee":false,"af":0.4,"season":"s5","b":{"hp":1667.0,"atk":85.0,"def":69.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":83.35,"atk":4.25,"def":3.45,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Reduces the hero's damage taken by 20% when under Control."},{"t":"Upon being hit by an enemy, reduces the hero's damage taken from that enemy by 1%, up to 15 stacks."},{"t":"Accuracy +50","stats":{"acc":50.0}},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"Has a 35% chance to get immune to the Control to be inflicted."}],"sk":{"p":{"n":"The Clamor of Gears","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Frequency Tuning","auto":{"parts":[{"kind":"other","coef":{"atk":3.0},"el":null}],"hits":1,"ticks":null,"tgt":"all"}},"u":{"n":"Let's Rock","auto":{"parts":[{"kind":"shield","coef":{"hp":0.2},"el":null},{"kind":"other","coef":{"atk":6.0},"el":null}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":null,"cap":null},"23090":{"id":23090,"n":"Talethia","r":"Legendary","el":"Radiance","sc":"Aura","cl":"Marksman","race":"Dragon","melee":false,"af":0.5,"season":"s5","b":{"hp":1841.4,"atk":96.0,"def":74.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":92.07,"atk":4.8,"def":3.72,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Heals the hero by [+8%Max HP] after killing an enemy."},{"t":"During the ultimate skill enhancement period, when Condensation is triggered, fires 1 additional Dazzling Crystal Arrow at a random target without cost."},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"For every 8 stacks of Condensation accumulated, fires a Focused Arrow."}],"sk":{"p":{"n":"Crystal Light Flow","auto":{"parts":[{"kind":"other","coef":{"atk":1.0},"el":null},{"kind":"other","coef":{"atk":2.0,"hp":0.2},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Brilliant Arrow","auto":{"parts":[{"kind":"other","coef":{"atk":3.0,"hp":0.15},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Daybreak","auto":{"parts":[{"kind":"other","coef":{"atk":3.0,"hp":0.15},"el":null}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":null,"cap":null},"22460":{"id":22460,"n":"Majtan","r":"Legendary","el":"Fire","sc":"Burn","cl":"Warrior","race":"Tigerfolk","melee":true,"af":0.5,"season":"s4","b":{"hp":2333.0,"atk":91.6,"def":74.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":116.65,"atk":4.58,"def":3.7,"critRate":0.05,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.05},"insp":[{"t":"The hero takes 20% less crit damage."},{"t":"The hero gains 15% Damage Bonus when their HP is higher than 85%."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Ignores 15% of the target's Defense."}],"sk":{"p":{"n":"Fire in Stone","auto":{"parts":[{"kind":"other","coef":{"atk":1.0},"el":null}],"hits":2,"ticks":null,"tgt":"all"}},"b":{"n":"Visage in Ember","auto":{"parts":[{"kind":"other","coef":{"hp":0.2},"el":null},{"kind":"other","coef":{"atk":4.5},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Blossom in Sand","auto":{"parts":[{"kind":"other","coef":{"atk":7.2},"el":null}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":{"t":"Increases all allies' Attack by 30% in Grand Gladiator Arena battles.","mode":"arena"}},"21370":{"id":21370,"n":"Halramar","r":"Legendary","el":"Poison","sc":"Support","cl":"Priest","race":"Tigerfolk","melee":false,"af":0.55,"season":"s4","b":{"hp":1673.0,"atk":86.6,"def":76.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":83.65,"atk":4.33,"def":3.81,"critRate":0.0,"critDmg":0.0,"acc":12.0,"res":12.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"The hero takes 20% less crit damage."},{"t":"Upon being hit by an enemy, reduces the hero's damage taken from that enemy by 1%, up to 15 stacks."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"Resistance +50","stats":{"res":50.0}},{"t":"Summons 2 Dark Clouds. When performing a basic attack, the second Dark Cloud attacks another random target."}],"sk":{"p":{"n":"Lingering Overcast","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Gazing Overcast","auto":{"parts":[{"kind":"other","coef":{"atk":3.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Darkmane's Regards","auto":{"parts":[{"kind":"other","coef":{"atk":7.0},"el":null}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":null,"cap":{"t":"Increases all allies' Resistance by 40.0 in all battles.","mode":"all"}},"21960":{"id":21960,"n":"Phaessa","r":"Legendary","el":"Radiance","sc":"Support","cl":"Priest","race":"Blazeland Lizardfolk","melee":false,"af":0.5,"season":"s4","b":{"hp":1756.6,"atk":80.8,"def":76.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":87.83,"atk":4.04,"def":3.84,"critRate":0.0,"critDmg":0.0,"acc":12.0,"res":12.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"When an ally dies, heals the hero by [+15%Max HP]."},{"t":"The ultimate skill ignores 20% of the target's Resistance."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"Accuracy +50","stats":{"acc":50.0}},{"t":"The battle skill can apply to 4 target(s)."}],"sk":{"p":{"n":"Cataclysm","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"all"}},"b":{"n":"Golden Prayer","auto":{"parts":[{"kind":"heal","coef":{"thp":0.1,"ench":10.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Sunfire's Glare","auto":{"parts":[{"kind":"other","coef":{"atk":7.2},"el":null}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":null,"cap":{"t":"Increases all allies' Accuracy by 40.0 in all battles.","mode":"all"}},"22370":{"id":22370,"n":"Orfenna","r":"Legendary","el":"Lightning","sc":"Thunderbolt","cl":"Marksman","race":"Aerial Dwarf","melee":false,"af":0.55,"season":"s4","b":{"hp":1576.0,"atk":89.0,"def":73.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":78.8,"atk":4.45,"def":3.65,"critRate":0.0,"critDmg":0.0,"acc":12.0,"res":0.0,"ench":10.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Damage dealt to enemies with a shield is increased by 20%."},{"t":"The hero gains 15% Damage Bonus when their HP is higher than 85%."},{"t":"Accuracy +50","stats":{"acc":50.0}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Ignores 35% of the target's Resistance."}],"sk":{"p":{"n":"Galvanic Contact","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Power Experience","auto":{"parts":[{"kind":"other","coef":{"atk":1.75},"el":null}],"hits":3,"ticks":null,"tgt":"single"}},"u":{"n":"Hyper Overdrive","auto":{"parts":[{"kind":"other","coef":{"atk":3.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":null,"cap":{"t":"Increases all allies' Enlightenment by 48.0 in all battles.","mode":"all"}},"24290":{"id":24290,"n":"Irmoush","r":"Legendary","el":"Lightning","sc":"Support","cl":"Warrior","race":"Undead","melee":false,"af":0.5,"season":"s4","b":{"hp":2392.8,"atk":85.8,"def":82.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":119.64,"atk":4.29,"def":4.1,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":12.0,"ench":10.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Reduces the hero's damage taken by 20% when under Control."},{"t":"Increases the duration of buffs granted with the battle skill by s."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"Accuracy +50","stats":{"acc":50.0}},{"t":"In melee form, reduces all damage taken by 25%."}],"sk":{"p":{"n":"Bow of Sundering","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Indomitable","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Thundersurge Cleave","auto":{"parts":[{"kind":"other","coef":{"atk":7.5},"el":null},{"kind":"heal","coef":{"def":1.0},"el":null}],"hits":2,"ticks":null,"tgt":"all"}}},"tm":null,"cap":{"t":"Increases all allies' HP by 30% in Grand Gladiator Arena.","mode":"arena"}},"22470":{"id":22470,"n":"Astaion","r":"Legendary","el":"Necrosis","sc":"Support","cl":"Warrior","race":"Blazeland Lizardfolk","melee":false,"af":0.55,"season":"s4","b":{"hp":1664.8,"atk":84.6,"def":77.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":83.24,"atk":4.23,"def":3.88,"critRate":0.0,"critDmg":0.0,"acc":12.0,"res":12.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Reduces the hero's damage taken by 20% when under Control."},{"t":"Recharges the hero's Ultimate Energy by 15.0 when taking damage over 20% of the hero's max HP. Takes effect once every 20.0s."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"Accuracy +50","stats":{"acc":50.0}},{"t":"The range of the ultimate skill's domain becomes a 5x5 rectangle."}],"sk":{"p":{"n":"Sun Pursuer","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Sun Shader","auto":{"parts":[{"kind":"other","coef":{"atk":3.0},"el":"Necrotic"}],"hits":1,"ticks":null,"tgt":"all"}},"u":{"n":"Sun Eclipser","auto":{"parts":[{"kind":"other","coef":{"atk":0.6},"el":"Necrotic"},{"kind":"heal","coef":{"hp":0.02},"el":null}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":{"t":"Increases all allies' Defense by 30% in Grand Gladiator Arena battles.","mode":"arena"}},"22710":{"id":22710,"n":"Yfeir","r":"Legendary","el":"Radiance","sc":"Support","cl":"Warrior","race":"Wood Elf","melee":true,"af":0.5,"season":"s4","b":{"hp":2396.0,"atk":93.0,"def":82.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":119.8,"atk":4.65,"def":4.1,"critRate":0.0,"critDmg":0.0,"acc":24.0,"res":0.0,"ench":10.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"For each clone summoned by the hero on the battlefield, the hero's damage taken is reduced by 4%."},{"t":"When the hero or their clones become Invisible, the ally with the lowest HP on the field also becomes Invisible for 3s. (The effect does not trigger if only the hero and clones are on the field.)"},{"t":"Duration of buffs and debuffs inflicted by Ultimate Skill is increased by 30%."},{"t":"HP% +30%","stats":{"hpPct":0.3}},{"t":"Clones inherit 60% of the hero's attributes."}],"sk":{"p":{"n":"See Me Not","auto":{"parts":[],"hits":15,"ticks":null,"tgt":"single"}},"b":{"n":"Omnipresent Me","auto":{"parts":[{"kind":"other","coef":{"atk":4.0},"el":null}],"hits":1,"ticks":null,"tgt":"all"}},"u":{"n":"Witness True Power!","auto":{"parts":[{"kind":"other","coef":{"atk":8.0},"el":null}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":{"t":"Increases all allies' Crit Damage by 30% in Grand Gladiator Arena battles.","mode":"arena"}},"23390":{"id":23390,"n":"Fredegonda","r":"Legendary","el":"Ice","sc":"Ice Blast","cl":"Planeswalker","race":"Birdfolk","melee":false,"af":0.5,"season":"s4","b":{"hp":1667.0,"atk":104.0,"def":69.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":83.35,"atk":5.2,"def":3.45,"critRate":0.02,"critDmg":0.0,"acc":12.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"When an ally dies, heals the hero by [+15%Max HP]."},{"t":"The Crit Rate and Crit Damage bonus from Howling Blizzard is increased to 50%."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"（已发包）Howling Blizzard额外附加35%战技释放速度增加。"}],"sk":{"p":{"n":"Flash Storm","auto":{"parts":[{"kind":"other","coef":{"atk":4.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Rampant Icicles","auto":{"parts":[{"kind":"other","coef":{"atk":4.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Howling Snowstorm","auto":{"parts":[{"kind":"other","coef":{"atk":7.2},"el":null}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":null,"cap":{"t":"Increases all allies' Crit Damage by 24% in all battles.","mode":"all"}},"23780":{"id":23780,"n":"Alaura","r":"Legendary","el":"Lightning","sc":"Thunderbolt","cl":"Bard","race":"Fey","melee":false,"af":0.55,"season":"s4","b":{"hp":1688.0,"atk":100.6,"def":84.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":84.4,"atk":5.03,"def":4.2,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":12.0,"ench":10.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Heals the hero by [+8%Max HP] after killing an enemy."},{"t":"Variations increases the chain count of Lightning Chains by 1."},{"t":"Enlightenment +60","stats":{"ench":60.0}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Increases the max stack count of Oscillation to 8 stacks."}],"sk":{"p":{"n":"Leaping Notes","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Dual Melody","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Summer Night's Ode","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.0},"el":"Derivative"},{"kind":"dmg","coef":{"atk":0.5},"el":"Derivative"}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":null,"cap":{"t":"Increases all allies' Attack by 24% in all battles.","mode":"all"}},"22490":{"id":22490,"n":"Miro","r":"Legendary","el":"Ice","sc":"Ice Blast","cl":"Guard","race":"Rural Halfling","melee":true,"af":0.55,"season":"s4","b":{"hp":2367.8,"atk":87.4,"def":82.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":118.39,"atk":4.37,"def":4.1,"critRate":0.05,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Heals the hero by [+8%Max HP] after killing an enemy."},{"t":"The hero gains 15% Damage Bonus when their HP is higher than 85%."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Has a 35% chance to get immune to the Control to be inflicted."}],"sk":{"p":{"n":"Guidance of Treasure Map","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Treasure! Mark It!","auto":{"parts":[{"kind":"other","coef":{"atk":4.5},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Treasure! Mine It!","auto":{"parts":[{"kind":"other","coef":{"atk":9.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":null,"cap":null},"20350":{"id":20350,"n":"Gaiolere","r":"Legendary","el":"Necrosis","sc":"Summon","cl":"Summoner","race":"Undead","melee":false,"af":0.4,"season":"s4","b":{"hp":1713.4,"atk":90.0,"def":73.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":85.67,"atk":4.5,"def":3.65,"critRate":0.025,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":10.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"When an ally dies, heals the hero by [+15%Max HP]."},{"t":"When granting a buff, there is a 70% chance of extending its duration by 30%."},{"t":"Enlightenment +60","stats":{"ench":60.0}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Buffs granted with the ultimate skill cannot be dispelled."}],"sk":{"p":{"n":"Darkness Bestowal","auto":{"parts":[{"kind":"dmg","coef":{"atk":0.4},"el":"Derivative"}],"hits":7,"ticks":null,"tgt":"single"}},"b":{"n":"Undead Thrall","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Double Taboo","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":3.0,"bc":8.0,"uf":13.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":22.0,"ucB":26.0,"src":"2023-09-22"},"cap":null},"22680":{"id":22680,"n":"Calavera","r":"Legendary","el":"Poison","sc":"Support","cl":"Deathbringer","race":"Undead","melee":true,"af":0.55,"season":"s4","b":{"hp":2334.2,"atk":80.0,"def":74.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":116.71,"atk":4.0,"def":3.7,"critRate":0.0,"critDmg":0.0,"acc":12.0,"res":12.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"When taking damage equal to 20% of the hero's Max HP, has a 50% chance of dispelling 1 debuff on the hero. This skill only takes effect once during a period."},{"t":"When healing an ally with less than 50% HP, grants 1 stack of Recovery Over Time for 8.0s. This skill only takes effect once during a period."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"HP% +30%","stats":{"hpPct":0.3}},{"t":"Has a 35% chance to get immune to the Control to be inflicted."}],"sk":{"p":{"n":"Mystery of Love","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Pas de Deux","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Love Versus Hatred","auto":{"parts":[{"kind":"heal","coef":{"def":4.0},"el":null},{"kind":"other","coef":{"atk":4.0},"el":null}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":null,"cap":null},"20820":{"id":20820,"n":"Paixton","r":"Legendary","el":"Fire","sc":"Burn","cl":"Warrior","race":"Human","melee":true,"af":0.4,"season":"s4","b":{"hp":2320.4,"atk":102.8,"def":78.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":116.02,"atk":5.14,"def":3.9,"critRate":0.0,"critDmg":0.0,"acc":12.0,"res":0.0,"ench":10.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Damage dealt to enemies with a shield is increased by 20%."},{"t":"Seared grants 25% Attack Up. Molten Armor grants 25% Defense Penetration."},{"t":"Enlightenment +60","stats":{"ench":60.0}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"The ultimate skill delivers 1 additional hit."}],"sk":{"p":{"n":"War Fanatic","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Burning to Ashes","auto":{"parts":[{"kind":"other","coef":{"atk":3.0,"ench":30.0},"el":null}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Demon Flame","auto":{"parts":[{"kind":"other","coef":{"atk":1.0},"el":null},{"kind":"dmg","coef":{"atk":1.8},"el":"Derivative"}],"hits":3,"ticks":null,"tgt":"all"}}},"tm":null,"cap":{"t":"In Fey Meander and Trial Breakthrough battles, increases all allies' Enlightenment by 60.0.","mode":"fey_trial"}},"23000":{"id":23000,"n":"Feenja","r":"Legendary","el":"Ice","sc":"Support","cl":"Wizard","race":"Undead","melee":false,"af":0.5,"season":"s3","b":{"hp":1770.8,"atk":88.0,"def":76.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":88.54,"atk":4.4,"def":3.84,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":20.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"The hero takes  less crit damage."},{"t":"When the hero's HP is below , heals the hero by  per second."},{"t":"Enlightenment +60","stats":{"ench":60.0}},{"t":"HP% +30%","stats":{"hpPct":0.3}},{"t":"The battle skill additionally grants  to two other allies for 5s."}],"sk":{"p":{"n":"Bride's Last Wish","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Manner of Hospitality","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Mourning Matrimony","auto":{"parts":[],"hits":2,"ticks":null,"tgt":"area"}}},"tm":null,"cap":{"t":"Increases all allies' Enlightenment by  in all battles.","mode":"all"}},"22030":{"id":22030,"n":"Whisk","r":"Legendary","el":"Poison","sc":"Corrosion","cl":"Scourge","race":"Ratfolk","melee":true,"af":0.5,"season":"s3","b":{"hp":2175.0,"atk":86.0,"def":78.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":108.75,"atk":4.3,"def":3.9,"critRate":0.025,"critDmg":0.05,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"The hero takes  less crit damage."},{"t":"The hero gains  Damage Bonus when their HP is higher than ."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Increases the ultimate skill's initial energy by ."}],"sk":{"p":{"n":"Boneface","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Execution","auto":{"parts":[],"hits":3,"ticks":null,"tgt":"single"}},"u":{"n":"Massacre","auto":{"parts":[],"hits":7,"ticks":null,"tgt":"area"}}},"tm":null,"cap":null},"21070":{"id":21070,"n":"Aspalta","r":"Legendary","el":"Necrosis","sc":"Shadow","cl":"Scourge","race":"Deep Elf","melee":true,"af":0.55,"season":"s3","b":{"hp":2261.8,"atk":85.4,"def":67.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":113.09,"atk":4.27,"def":3.39,"critRate":0.0,"critDmg":0.1,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Heals the hero by  after killing an enemy."},{"t":"The hero gains  Damage Bonus when their HP is higher than ."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Ignores  of the target's Defense."}],"sk":{"p":{"n":"Resentment","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Deathbringer","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"all"}},"u":{"n":"Frontal Assault","auto":{"parts":[],"hits":3,"ticks":null,"tgt":"area"}}},"tm":null,"cap":{"t":"Increases all allies' Attack by  in all battles.","mode":"all"}},"21400":{"id":21400,"n":"Chorak","r":"Legendary","el":"Fire","sc":"Wild","cl":"Rogue","race":"Goblin","melee":false,"af":0.55,"season":"s3","b":{"hp":1816.0,"atk":101.8,"def":82.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":90.8,"atk":5.09,"def":4.14,"critRate":0.0,"critDmg":0.0,"acc":9.0,"res":9.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"The hero takes  less crit damage."},{"t":" granted by the hero can stack up to 2 times."},{"t":"Enlightenment +60","stats":{"ench":60.0}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"The ultimate skill can deal  extra instance(s) of damage."}],"sk":{"p":{"n":"Enter the Tyrant","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Ring of Deathfire","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"All Burn Down","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}}},"tm":null,"cap":null},"22280":{"id":22280,"n":"Ozul","r":"Legendary","el":"Necrosis","sc":"Shadow","cl":"Warlock","race":"Human","melee":false,"af":0.4,"season":"s3","b":{"hp":1811.6,"atk":106.0,"def":79.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":90.58,"atk":5.3,"def":3.96,"critRate":0.025,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.05},"insp":[{"t":"Damage dealt to enemies with a shield is increased by ."},{"t":"While in Demon Form, Ozul ignores  of the enemy's Defense."},{"t":"Enlightenment +60","stats":{"ench":60.0}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Gains  stack(s) of  at the start of battle, and increases the max stacks of  to 8."}],"sk":{"p":{"n":"Lord of Shadow","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Nightmare Corrosion","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Prince of Evil Domain","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":{"t":"Increases all allies' Attack by  in Grand Gladiator Arena battles.","mode":"arena"}},"22990":{"id":22990,"n":"Theodemer","r":"Legendary","el":"Ice","sc":"Support","cl":"Warrior","race":"Undead","melee":true,"af":0.5,"season":"s3","b":{"hp":2299.8,"atk":81.4,"def":86.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":114.99,"atk":4.07,"def":4.33,"critRate":0.0,"critDmg":0.0,"acc":18.0,"res":0.0,"ench":8.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Reduces the hero's damage taken by  when under Control."},{"t":"When the hero's HP is below , heals the hero by  per second."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"HP% +30%","stats":{"hpPct":0.3}},{"t":"When inflicted with Control, reduces its duration by ."}],"sk":{"p":{"n":"Necrotic Tenacity","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"all"}},"b":{"n":"Fallen Kingdom Swordplay","auto":{"parts":[],"hits":3,"ticks":null,"tgt":"single"}},"u":{"n":"Spite of the Wronged Dead","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"all"}}},"tm":null,"cap":{"t":"Increases all allies' Defense by  in Grand Gladiator Arena battles.","mode":"arena"}},"21100":{"id":21100,"n":"Sacredeia","r":"Legendary","el":"Poison","sc":"Corrosion","cl":"Wizard","race":"Deep Elf","melee":false,"af":0.4,"season":"s3","b":{"hp":1596.2,"atk":92.0,"def":73.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":79.81,"atk":4.6,"def":3.69,"critRate":0.05,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Reduces the hero's damage taken by  when under Control."},{"t":"When dealing damage to an enemy, for every  of the target's Max HP over that of the hero, the damage dealt will increase by , up to ."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Ignores  of the target's Defense."}],"sk":{"p":{"n":"Source of Corrosion","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Swarm of Rampage","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"all"}},"u":{"n":"Grip of Venom","auto":{"parts":[],"hits":2,"ticks":null,"tgt":"area"}}},"tm":null,"cap":{"t":"Increases all allies' Attack by  in dungeon battles.","mode":"dungeon"}},"21710":{"id":21710,"n":"Trolgar","r":"Legendary","el":"Ice","sc":"Frost","cl":"Barbarian","race":"Frost Troll","melee":true,"af":0.4,"season":"s3","b":{"hp":2276.4,"atk":95.4,"def":73.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":113.82,"atk":4.77,"def":3.67,"critRate":0.0,"critDmg":0.1,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Heals the hero by  after killing an enemy."},{"t":"When inflicting , ignores  of the target's Resistance."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Increases passive skill damage to 15% Max HP (up to 1,500% of the hero's Attack)."}],"sk":{"p":{"n":"Body of Chill","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"all"}},"b":{"n":"Arctic Axe","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Winter's Vengeance","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":13.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":19.0,"ucB":23.0,"src":"2023-09-22"},"cap":null},"21020":{"id":21020,"n":"Quaesitia","r":"Legendary","el":"Necrosis","sc":"Support","cl":"Warrior","race":"Deep Elf","melee":true,"af":0.55,"season":"s3","b":{"hp":2445.0,"atk":88.8,"def":76.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":122.25,"atk":4.44,"def":3.81,"critRate":0.0,"critDmg":0.0,"acc":12.0,"res":12.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Heals the hero by  after killing an enemy."},{"t":"The ultimate skill ignores  of the target's Resistance."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"HP% +30%","stats":{"hpPct":0.3}},{"t":"Each time Adaptive Defense is triggered, HP restoration increases to ."}],"sk":{"p":{"n":"Ironfist","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Oppression","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Deadly Slash","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"all"}}},"tm":null,"cap":{"t":"Increases all allies' Defense by  in Grand Gladiator Arena battles.","mode":"arena"}},"22800":{"id":22800,"n":"Aemonleyda","r":"Legendary","el":"Radiance","sc":"Aura","cl":"Ranger","race":"Merfolk","melee":true,"af":0.38,"season":"s3","b":{"hp":2302.0,"atk":96.8,"def":73.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":115.1,"atk":4.84,"def":3.69,"critRate":0.0,"critDmg":0.1,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Heals the hero by  after killing an enemy."},{"t":"While shielded, the hero deals  more damage."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"HP% +30%","stats":{"hpPct":0.3}},{"t":"The chance for Misty Sea Familiar to trigger Blaze is increased by . When Blaze is triggered this way, the Aura Energy enhancement is gained without consuming Aura Energy."}],"sk":{"p":{"n":"Misty Sea's Blessing","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Glitter of Gold","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Dazzling Kiss","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"all"}}},"tm":null,"cap":{"t":"Increases all allies' Crit Damage by  in all battles.","mode":"all"}},"20570":{"id":20570,"n":"Aladiah","r":"Legendary","el":"Ice","sc":"Support","cl":"Druid","race":"Iskalland Dwarf","melee":false,"af":0.4,"season":"s3","b":{"hp":1651.4,"atk":77.8,"def":75.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":82.57,"atk":3.89,"def":3.78,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":20.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Reduces the hero's damage taken by  when under Control."},{"t":"The hero grants  more shield."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"Accuracy +50","stats":{"acc":50.0}},{"t":"Increases the ultimate skill's initial energy by ."}],"sk":{"p":{"n":"Winter Thaw","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Melting Chant","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Snowstorm Embrace","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"all"}}},"tm":null,"cap":null},"22690":{"id":22690,"n":"Synarell","r":"Legendary","el":"Fire","sc":"Support","cl":"Arcane Warrior","race":"Sheen Elf","melee":false,"af":0.55,"season":"s3","b":{"hp":1608.0,"atk":91.0,"def":72.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":80.4,"atk":4.55,"def":3.6,"critRate":0.02,"critDmg":0.0,"acc":0.0,"res":9.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Reduces the hero's damage taken by  when under Control."},{"t":"When healing an ally with less than  HP, grants  stack of  for s. This skill only takes effect once during a period."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"The battle skill can grant an additional stack of  for 5s."}],"sk":{"p":{"n":"Dawn's Protection","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Flame of Exaltation","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Daylight Domain","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"all"}}},"tm":null,"cap":{"t":"In Fey Meander and Trial Breakthrough battles, increases all allies' Attack by .","mode":"fey_trial"}},"22250":{"id":22250,"n":"Daphne","r":"Legendary","el":"Necrosis","sc":"Shadow","cl":"Wizard","race":"Undead","melee":false,"af":0.4,"season":"s3","b":{"hp":1511.4,"atk":98.2,"def":72.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":75.57,"atk":4.91,"def":3.62,"critRate":0.0,"critDmg":0.1,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Damage dealt to enemies with a shield is increased by ."},{"t":"When dealing damage to enemies with less than  HP, the hero gains  Damage Bonus."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Ignores  of the target's Defense."}],"sk":{"p":{"n":"Soul Shiver","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Twining Dead Moon","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"all"}},"u":{"n":"Embrace of Wail","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":{"t":"Increases all allies' Attack by  in dungeon battles.","mode":"dungeon"}},"22790":{"id":22790,"n":"Lincos","r":"Legendary","el":"Radiance","sc":"Aura","cl":"Bard","race":"Merfolk","melee":false,"af":0.38,"season":"s3","b":{"hp":1649.2,"atk":89.2,"def":74.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":82.46,"atk":4.46,"def":3.7,"critRate":0.0,"critDmg":0.05,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Damage dealt to enemies with a shield is increased by ."},{"t":"The hero gains  Damage Bonus when their HP is higher than ."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"HP% +30%","stats":{"hpPct":0.3}},{"t":"Ignores  of the target's Defense."}],"sk":{"p":{"n":"Sonata Form","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Forte Variation","auto":{"parts":[],"hits":3,"ticks":null,"tgt":"area"}},"u":{"n":"Ode to the Misty Sea","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"all"}}},"tm":null,"cap":{"t":"In Fey Meander and Trial Breakthrough battles, increases all allies' Attack by .","mode":"fey_trial"}},"21310":{"id":21310,"n":"Stanguem","r":"Legendary","el":"Lightning","sc":"Support","cl":"Barbarian","race":"Ridge Halfling","melee":true,"af":0.4,"season":"s3","b":{"hp":2250.0,"atk":76.4,"def":81.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":112.5,"atk":3.82,"def":4.09,"critRate":0.0,"critDmg":0.0,"acc":9.0,"res":9.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"When taking damage equal to  of the hero's Max HP, has a  chance of dispelling  debuff on the hero. This skill only takes effect once during a period."},{"t":"The hero grants  more shield."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"HP% +30%","stats":{"hpPct":0.3}},{"t":"Ignores  of the target's Resistance."}],"sk":{"p":{"n":"Thunderstorm Incoming","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Absolute Alert","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Breeze of Nature","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}}},"tm":null,"cap":{"t":"Increases all allies' Resistance by  in Grand Gladiator Arena battles.","mode":"arena"}},"22050":{"id":22050,"n":"Rook","r":"Legendary","el":"Poison","sc":"Corrosion","cl":"Summoner","race":"Ratfolk","melee":false,"af":0.4,"season":"s3","b":{"hp":1633.0,"atk":106.4,"def":73.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":81.65,"atk":5.32,"def":3.69,"critRate":0.025,"critDmg":0.05,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"The hero takes  less crit damage."},{"t":"Each time the hero's ultimate skill is cast, increases the skill's True Damage dealt by , up to  stacks."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Enhanced Black Death: The follow-up attack count increases by  for each cast of the ultimate skill, up to a boost of ."}],"sk":{"p":{"n":"Double Face","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Indiscriminate Assault","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Black Death","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":{"t":"Increases all allies' Attack by  in all battles.","mode":"all"}},"23680":{"id":23680,"n":"Guinavivre","r":"Legendary","el":"Lightning","sc":"Dauntless","cl":"Scourge","race":"Construct","melee":true,"af":0.55,"season":"s3","b":{"hp":2022.0,"atk":105.6,"def":80.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":101.1,"atk":5.28,"def":4.0,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":12.0,"ench":10.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Heals the hero by  after killing an enemy."},{"t":"After casting an ultimate skill, the hero can trigger the 5-hit combo  times before reverting to the 3-hit combo."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Enhanced Whirling Shadow: Increases the chance for enemies marked by the battle skill to take damage to ."}],"sk":{"p":{"n":"Intersecting Blades","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Whirling Shadow","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Deadly Ballet","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}}},"tm":null,"cap":{"t":"Increases all allies' Attack by  in all battles.","mode":"all"}},"21410":{"id":21410,"n":"Victor","r":"Legendary","el":"Fire","sc":"Support","cl":"Warrior","race":"Gnome","melee":true,"af":0.38,"season":"s3","b":{"hp":2320.8,"atk":86.6,"def":70.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":116.04,"atk":4.33,"def":3.53,"critRate":0.0,"critDmg":0.0,"acc":24.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Reduces the hero's damage taken by  when under Control."},{"t":"When the hero's HP is below , heals the hero by  per second."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"Accuracy +50","stats":{"acc":50.0}},{"t":"When inflicted with Control, reduces its duration by ."}],"sk":{"p":{"n":"Deeper Investigation","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Pinpoint Positioning","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Power Overload","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"all"}}},"tm":null,"cap":{"t":"Increases all allies' Accuracy by  in all battles.","mode":"all"}},"21500":{"id":21500,"n":"Diantha","r":"Legendary","el":"Radiance","sc":"Aura","cl":"Sorcerer","race":"Nymph","melee":false,"af":0.38,"season":"s3","b":{"hp":1867.6,"atk":93.6,"def":75.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":93.38,"atk":4.68,"def":3.76,"critRate":0.05,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Reduces the hero's damage taken by  when under Control."},{"t":"The hero gains  Damage Bonus when their HP is higher than ."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"HP% +30%","stats":{"hpPct":0.3}},{"t":"Ignores  of the target's Defense."}],"sk":{"p":{"n":"Fall with Wind","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Caution of the Forest","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Blooming Flowers","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":{"t":"Increases all allies' Attack by  in all battles.","mode":"all"}},"20930":{"id":20930,"n":"Ardreth","r":"Legendary","el":"Radiance","sc":"Support","cl":"Paladin","race":"Sheen Elf","melee":true,"af":0.5,"season":"s2","b":{"hp":2331.8,"atk":84.6,"def":85.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":116.59,"atk":4.23,"def":4.28,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":24.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Reduces the hero's damage taken by 20% when under Control."},{"t":"Upon being hit by an enemy, reduces the hero's damage taken from that enemy by 1%, up to 15 stacks."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"DEF% +30%","stats":{"defPct":0.3}},{"t":"Has a 35% chance to get immune to the Control to be inflicted."}],"sk":{"p":{"n":"Divine Blessing","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Moonlight Prayer","auto":{"parts":[{"kind":"heal","coef":{"def":2.8},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Sanctuary's Blessing","auto":{"parts":[{"kind":"dmg","coef":{"def":3.0},"el":"Radiant"},{"kind":"heal","coef":{"def":1.8},"el":null}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":null,"cap":{"t":"Increases all allies' Defense by 24% in all battles.","mode":"all"}},"22340":{"id":22340,"n":"Durem","r":"Legendary","el":"Fire","sc":"Burn","cl":"Gunslinger","race":"Aerial Dwarf","melee":false,"af":0.55,"season":"s2","b":{"hp":1693.4,"atk":97.4,"def":77.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":84.67,"atk":4.87,"def":3.87,"critRate":0.0,"critDmg":0.1,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Damage dealt to enemies with a shield is increased by 20%."},{"t":"The hero gains 15% Damage Bonus when their HP is higher than 85%."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Ignores 15% of the target's Defense."}],"sk":{"p":{"n":"Global Oversight","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.5},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Free Blaze","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.6},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Red Horizon","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.5},"el":"Fire"}],"hits":3,"ticks":null,"tgt":"area"}}},"tm":null,"cap":null},"21250":{"id":21250,"n":"Malak","r":"Legendary","el":"Poison","sc":"Support","cl":"Warrior","race":"Valley Minotaur","melee":true,"af":0.5,"season":"s2","b":{"hp":2382.6,"atk":86.6,"def":73.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":119.13,"atk":4.33,"def":3.68,"critRate":0.0,"critDmg":0.0,"acc":12.0,"res":12.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Reduces the hero's damage taken by 20% when under Control."},{"t":"When the hero's HP is below 60%, heals the hero by [+1%Max HP] per second."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"DEF% +30%","stats":{"defPct":0.3}},{"t":"When inflicted with Control, reduces its duration by 50%."}],"sk":{"p":{"n":"Confined","auto":{"parts":[{"kind":"heal","coef":{"hp":0.1},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Eternal Existence","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.4,"hp":0.06},"el":"Poison"},{"kind":"heal","coef":{"hp":0.12},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Bone Gnawing Prison","auto":{"parts":[{"kind":"dmg","coef":{"atk":4.2,"hp":0.14},"el":"Poison"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":{"t":"Increases all allies' Defense by 30% in Grand Gladiator Arena battles.","mode":"arena"}},"24300":{"id":24300,"n":"Naro","r":"Legendary","el":"Fire","sc":"Support","cl":"Warrior","race":"Human","melee":true,"af":0.5,"season":"s2","b":{"hp":2288.0,"atk":80.0,"def":78.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":114.4,"atk":4.0,"def":3.9,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Reduces the hero's damage taken by 20% when under Control."},{"t":"Upon being hit by an enemy, reduces the hero's damage taken from that enemy by 1%, up to 15 stacks."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"HP% +30%","stats":{"hpPct":0.3}},{"t":"Ignores the target's Resistance when inflicting debuffs or control effects on them with ultimate skill."}],"sk":{"p":{"n":"Aether Shade","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Vital Blaze","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.2},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Crimson Pulse","auto":{"parts":[{"kind":"dmg","coef":{"atk":5.2},"el":"Fire"},{"kind":"heal","coef":{"thp":0.25},"el":null}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":null,"cap":null},"21480":{"id":21480,"n":"Nissa","r":"Legendary","el":"Lightning","sc":"Thunderbolt","cl":"Summoner","race":"Deep Gnome","melee":false,"af":0.55,"season":"s2","b":{"hp":1587.8,"atk":90.0,"def":77.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":79.39,"atk":4.5,"def":3.86,"critRate":0.0,"critDmg":0.0,"acc":12.0,"res":0.0,"ench":10.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"The hero takes 20% less crit damage."},{"t":"The hero gains 15% Damage Bonus when their HP is higher than 85%."},{"t":"Enlightenment +60","stats":{"ench":60.0}},{"t":"Accuracy +50","stats":{"acc":50.0}},{"t":"Increases the ultimate skill's initial energy by 5."}],"sk":{"p":{"n":"Lightning Mark","auto":{"parts":[],"hits":2,"ticks":null,"tgt":"single"}},"b":{"n":"Thunderous Crossbow","auto":{"parts":[{"kind":"dmg","coef":{"atk":4.5},"el":"Lightning"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Chain Lightning","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.0},"el":"Lightning"}],"hits":2,"ticks":null,"tgt":"all"}}},"tm":null,"cap":{"t":"In Fey Meander and Trial Breakthrough battles, increases all allies' Attack by 30%.","mode":"fey_trial"}},"23480":{"id":23480,"n":"Bernade","r":"Legendary","el":"Necrosis","sc":"Summon","cl":"Summoner","race":"Half-orc","melee":false,"af":0.4,"season":"s2","b":{"hp":2392.8,"atk":85.8,"def":82.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":119.64,"atk":4.29,"def":4.1,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":12.0,"ench":10.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"When an ally dies, heals the hero by [+15%Max HP]."},{"t":"The battle skill summons 2 Bear Spirits to attack."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Increases the duration of the ultimate skill by 2.0s."}],"sk":{"p":{"n":"Beast Lord","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Predation","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.0},"el":"Necrotic"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Entrancing","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.0},"el":"Necrotic"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":{"t":"Increases all allies' HP by 30% in battles of Fey Meander and Trial Breakthrough.","mode":"fey_trial"}},"21120":{"id":21120,"n":"Beldelle","r":"Legendary","el":"Ice","sc":"Ice Blast","cl":"Warrior","race":"Dwarf","melee":true,"af":0.5,"season":"s2","b":{"hp":2366.0,"atk":108.6,"def":84.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":118.3,"atk":5.43,"def":4.2,"critRate":0.05,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Damage dealt to enemies with a shield is increased by 20%."},{"t":"Each time the battle skill is cast, increases the damage dealt by 2%. This effect stacks up to 10 times."},{"t":"Crit Rate +20%","stats":{"critRate":0.2}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"The conversion rate of Crit Damage from this passive skill is increased to 360%."}],"sk":{"p":{"n":"Frost's Favor","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Runaway Storm","auto":{"parts":[{"kind":"dmg","coef":{"atk":4.2},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Frost Crystallization","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.0},"el":"Cold"}],"hits":3,"ticks":null,"tgt":"single"}}},"tm":null,"cap":{"t":"Increases all allies' Attack by 24% in all battles.","mode":"all"}},"21520":{"id":21520,"n":"Perkunte","r":"Legendary","el":"Lightning","sc":"Thunderbolt","cl":"Master of Lineage","race":"Dragon","melee":false,"af":0.4,"season":"s2","b":{"hp":1720.0,"atk":106.4,"def":77.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":86.0,"atk":5.32,"def":3.89,"critRate":0.05,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Heals the hero by [+8%Max HP] after killing an enemy."},{"t":"Increases the damage of the passive skill [Lightning Bolt] by 30%."},{"t":"Enlightenment +60","stats":{"ench":60.0}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"The ultimate skill's second attack triggers 1 additional Lightning Chain."}],"sk":{"p":{"n":"Bronze Gaze","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.5},"el":"Derivative"}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Thunderous Rapids","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.0,"ench":30.0},"el":"Lightning"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Lawful Retribution","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.4,"ench":24.0},"el":"Lightning"}],"hits":2,"ticks":null,"tgt":"all"}}},"tm":null,"cap":{"t":"Increases all allies' Attack by 30% in Grand Gladiator Arena battles.","mode":"arena"}},"21760":{"id":21760,"n":"Aschetius","r":"Legendary","el":"Fire","sc":"Burn","cl":"Master of Lineage","race":"Dragon","melee":true,"af":0.5,"season":"s2","b":{"hp":2383.0,"atk":106.8,"def":84.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":119.15,"atk":5.34,"def":4.2,"critRate":0.025,"critDmg":0.05,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Heals the hero by [+8%Max HP] after killing an enemy."},{"t":"For each enemy on the field, the hero deals 4% more damage. This effect stacks up to 5 times."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"When casting an ultimate skill, every stack of Burn removed will increase the hero's Attack by 2%, up to 20 times. This bonus applies to the current ultimate skill, until the next ultimate is cast."}],"sk":{"p":{"n":"Fire Control","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Wrath of Lava","auto":{"parts":[{"kind":"dmg","coef":{"atk":4.0},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Pyrokinesis","auto":{"parts":[{"kind":"dmg","coef":{"atk":4.0},"el":"Fire"},{"kind":"dmg","coef":{"atk":1.0},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":null,"cap":{"t":"Increases all allies' Attack by 24% in all battles.","mode":"all"}},"21270":{"id":21270,"n":"Rose","r":"Legendary","el":"Radiance","sc":"Support","cl":"Wizard","race":"Rural Halfling","melee":false,"af":0.5,"season":"s2","b":{"hp":1907.8,"atk":92.6,"def":75.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":95.39,"atk":4.63,"def":3.75,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":20.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"When taking damage equal to 20% of the hero's Max HP, has a 50% chance of dispelling 1 debuff on the hero. This skill only takes effect once during a period."},{"t":"When granting a buff, there is a 70% chance of extending its duration by 30%."},{"t":"Enlightenment +60","stats":{"ench":60.0}},{"t":"HP% +30%","stats":{"hpPct":0.3}},{"t":"Buffs granted with the battle skill cannot be dispelled."}],"sk":{"p":{"n":"Tireless","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Sin of Ignorance","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.5,"ench":24.0},"el":"Radiant"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Purged by Knowledge","auto":{"parts":[{"kind":"dmg","coef":{"atk":0.8,"ench":8.0},"el":"Radiant"},{"kind":"other","coef":{"thp":0.04,"ench":6.0},"el":null}],"hits":4,"ticks":null,"tgt":"single"}}},"tm":null,"cap":null},"22410":{"id":22410,"n":"Gladys","r":"Legendary","el":"Radiance","sc":"Rally","cl":"Wizard","race":"Human","melee":false,"af":0.55,"season":"s2","b":{"hp":2433.8,"atk":94.0,"def":75.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":121.69,"atk":4.7,"def":3.75,"critRate":0.0,"critDmg":0.0,"acc":12.0,"res":12.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"The hero takes 20% less crit damage."},{"t":"The hero's Rally cannot be dispelled."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"HP% +30%","stats":{"hpPct":0.3}},{"t":"The ultimate skill can fire two Light Orbs at each target."}],"sk":{"p":{"n":"Unwavering Support","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Journeying Together","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Dawn's Revelation","auto":{"parts":[{"kind":"dmg","coef":{"atk":5.0},"el":"Radiant"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":{"t":"Increases all allies' Attack by 24% in all battles.","mode":"all"}},"21200":{"id":21200,"n":"Zhorak","r":"Legendary","el":"Ice","sc":"Ice Blast","cl":"Shaman","race":"Orc","melee":false,"af":0.5,"season":"s2","b":{"hp":1509.2,"atk":94.0,"def":69.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":75.46,"atk":4.7,"def":3.46,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":20.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Heals the hero by [+8%Max HP] after killing an enemy."},{"t":"The hero gains 15% Damage Bonus when their HP is higher than 85%."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Increases the ultimate skill's initial energy by 5."}],"sk":{"p":{"n":"Shared Faith","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.5},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Ominous Retribution","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.6},"el":"Cold"},{"kind":"dmg","coef":{"atk":3.6},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Deadly Verdict","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}}},"tm":null,"cap":null},"21780":{"id":21780,"n":"Shai'nachtan","r":"Legendary","el":"Lightning","sc":"Thunderbolt","cl":"Warrior","race":"The Unstill","melee":true,"af":0.38,"season":"s2","b":{"hp":2348.6,"atk":96.6,"def":75.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":117.43,"atk":4.83,"def":3.79,"critRate":0.0,"critDmg":0.0,"acc":12.0,"res":0.0,"ench":10.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Heals the hero by [+8%Max HP] after killing an enemy."},{"t":"The hero gains 15% Damage Bonus when their HP is higher than 85%."},{"t":"Enlightenment +60","stats":{"ench":60.0}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Ignores 15% of the target's Defense."}],"sk":{"p":{"n":"Chasing Peril","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Shared Misfortune","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.0,"ench":24.0},"el":"Lightning"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Embracing Calamity","auto":{"parts":[{"kind":"dmg","coef":{"atk":5.0,"ench":50.0},"el":"Lightning"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":{"t":"Increases all allies' Enlightenment by 48.0 in all battles.","mode":"all"}},"20230":{"id":20230,"n":"Karf","r":"Legendary","el":"Fire","sc":"Burn","cl":"Gunslinger","race":"Human","melee":false,"af":0.55,"season":"s2","b":{"hp":1704.0,"atk":94.6,"def":76.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":85.2,"atk":4.73,"def":3.84,"critRate":0.0,"critDmg":0.0,"acc":12.0,"res":0.0,"ench":10.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"The hero takes 20% less crit damage."},{"t":"The hero gains 15% Damage Bonus when their HP is higher than 85%."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"Accuracy +50","stats":{"acc":50.0}},{"t":"Ignores 35% of the target's Resistance."}],"sk":{"p":{"n":"Fish in Troubled Waters","auto":{"parts":[{"kind":"dmg","coef":{"atk":0.6},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Marine Gunslinger","auto":{"parts":[{"kind":"dmg","coef":{"atk":0.6},"el":"Fire"}],"hits":6,"ticks":null,"tgt":"single"}},"u":{"n":"O Captain! My Captain!","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.0},"el":"Fire"}],"hits":4,"ticks":null,"tgt":"all"}}},"tm":null,"cap":null},"22810":{"id":22810,"n":"Shinnah","r":"Legendary","el":"Ice","sc":"Ice Blast","cl":"Shaman","race":"Merfolk","melee":false,"af":0.55,"season":"s2","b":{"hp":1667.4,"atk":92.2,"def":76.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":83.37,"atk":4.61,"def":3.81,"critRate":0.025,"critDmg":0.05,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"The hero takes 20% less crit damage."},{"t":"Each time the hero's ultimate skill is cast, increases its damage dealt by 3%, up to 5 stacks."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Ignores 15% of the target's Defense."}],"sk":{"p":{"n":"Dirge","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Frost Whisper","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.0},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Glacial Descent","auto":{"parts":[{"kind":"dmg","coef":{"atk":0.8},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":null,"cap":{"t":"In Fey Meander and Trial Breakthrough battles, increases all allies' Attack by 30%.","mode":"fey_trial"}},"21730":{"id":21730,"n":"Dalk","r":"Legendary","el":"Necrosis","sc":"Support","cl":"Ranger","race":"Forest Troll","melee":false,"af":0.5,"season":"s2","b":{"hp":1617.2,"atk":89.4,"def":78.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":80.86,"atk":4.47,"def":3.94,"critRate":0.0,"critDmg":0.0,"acc":12.0,"res":12.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"The hero takes 20% less crit damage."},{"t":"When the hero's HP is below 60%, heals the hero by [+1%Max HP] per second."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"Accuracy +50","stats":{"acc":50.0}},{"t":"Increases the ultimate skill's initial energy by 5."}],"sk":{"p":{"n":"Rotten and Stinking","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.2},"el":"Necrotic"}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Rotten Affliction","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.5},"el":"Necrotic"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Shadowy Devouring","auto":{"parts":[{"kind":"dmg","coef":{"atk":8.19},"el":"Necrotic"}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":null,"cap":{"t":"Increases all allies' Accuracy by 50.0 in Grand Gladiator Arena battles.","mode":"arena"}},"22430":{"id":22430,"n":"Sleight","r":"Legendary","el":"Poison","sc":"Poison","cl":"Wizard","race":"Ratfolk","melee":false,"af":0.4,"season":"s2","b":{"hp":2073.6,"atk":101.0,"def":82.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":103.68,"atk":5.05,"def":4.12,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":24.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Damage dealt to enemies with a shield is increased by 20%."},{"t":"For each enemy on the field, the hero deals 4% more damage. This effect stacks up to 5 times."},{"t":"Enlightenment +60","stats":{"ench":60.0}},{"t":"Accuracy +50","stats":{"acc":50.0}},{"t":"Increases Potent Medicine stack limit to 10."}],"sk":{"p":{"n":"Press the Advantage","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"all"}},"b":{"n":"Sustained Offensive","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.0,"ench":10.0},"el":"Poison"}],"hits":4,"ticks":null,"tgt":"single"}},"u":{"n":"Misdirection","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.4,"ench":24.0},"el":"Poison"}],"hits":3,"ticks":null,"tgt":"area"}}},"tm":null,"cap":null},"22180":{"id":22180,"n":"Irzillas","r":"Legendary","el":"Necrosis","sc":"Summon","cl":"Warrior","race":"Undead","melee":true,"af":0.38,"season":"s1","b":{"hp":2511.6,"atk":94.0,"def":67.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":125.58,"atk":4.7,"def":3.39,"critRate":0.05,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"When taking damage equal to 20% of the hero's Max HP, has a 50% chance of dispelling 1 debuff on the hero. This skill only takes effect once during a period."},{"t":"When dealing damage to enemies with less than 50% HP, the hero gains 15% Damage Bonus."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Buffs granted with the ultimate skill cannot be dispelled."}],"sk":{"p":{"n":"False King's Forces","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Usurper's Axe","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.29},"el":"Necrotic"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Throne of Lament","auto":{"parts":[{"kind":"dmg","coef":{"atk":6.0},"el":"Necrotic"}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":12.0,"ucB":20.0,"src":"2023-09-22"},"cap":{"t":"Increases all allies' Attack by 24% in all battles.","mode":"all"}},"21170":{"id":21170,"n":"Rhash","r":"Legendary","el":"Fire","sc":"Wild","cl":"Sorcerer","race":"Orc","melee":false,"af":0.55,"season":"s1","b":{"hp":1710.0,"atk":98.0,"def":76.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":85.5,"atk":4.9,"def":3.84,"critRate":0.0,"critDmg":0.1,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Damage dealt to enemies with a shield is increased by 20%."},{"t":"When dealing damage to enemies with less than 50% HP, the hero gains 15% Damage Bonus."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Ignores 15% of the target's Defense."}],"sk":{"p":{"n":"Scorching Darkfire","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Molten Reflexes","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.0},"el":"Fire"},{"kind":"dmg","coef":{"atk":3.0},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Inferno Gale","auto":{"parts":[{"kind":"dmg","coef":{"atk":8.0},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-22"},"cap":null},"20770":{"id":20770,"n":"Vinyara","r":"Legendary","el":"Ice","sc":"Support","cl":"Wizard","race":"The Unstill","melee":false,"af":0.4,"season":"s1","b":{"hp":1644.4,"atk":94.0,"def":78.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":82.22,"atk":4.7,"def":3.9,"critRate":0.0,"critDmg":0.0,"acc":12.0,"res":12.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"The hero takes 20% less crit damage."},{"t":"When inflicting a debuff, there is a 70% chance of extending its duration by 30%."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"Accuracy +50","stats":{"acc":50.0}},{"t":"Ignores 35% of the target's Resistance."}],"sk":{"p":{"n":"Icy Thorn","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Withering Armor","auto":{"parts":[{"kind":"shield","coef":{"atk":4.5,"hp":0.1},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Frozen Spike","auto":{"parts":[{"kind":"dmg","coef":{"atk":9.0},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12,"uc":18,"bfB":7.0,"bcB":12.0,"ufB":15.0,"ucB":19.0,"src":"reddit comment 2025-08-08: Vinyara/Thia ~12/18 s fully scrolled"},"cap":{"t":"Increases all allies' Accuracy by 40.0 in all battles.","mode":"all"}},"20670":{"id":20670,"n":"Durango","r":"Legendary","el":"Poison","sc":"Poison","cl":"Monk","race":"Human","melee":true,"af":0.5,"season":"s1","b":{"hp":2292.6,"atk":92.4,"def":69.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":114.63,"atk":4.62,"def":3.49,"critRate":0.025,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":10.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Reduces the hero's damage taken by 20% when under Control."},{"t":"Increases the chance of the passive skill effect by 15%."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"Accuracy +50","stats":{"acc":50.0}},{"t":"Ignores 35% of the target's Resistance."}],"sk":{"p":{"n":"Secret Keeper","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.5},"el":"Poison"}],"hits":1,"ticks":null,"tgt":"all"}},"b":{"n":"Blink Attack","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.0,"ench":5.0},"el":"Poison"}],"hits":3,"ticks":null,"tgt":"single"}},"u":{"n":"Exterminating Attack","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.35,"ench":6.4},"el":"Poison"}],"hits":3,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-22"},"cap":{"t":"Increases all allies' Accuracy by 40.0 in all battles.","mode":"all"}},"21450":{"id":21450,"n":"Journ","r":"Legendary","el":"Fire","sc":"Support","cl":"Wizard","race":"Deep Gnome","melee":false,"af":0.5,"season":"s1","b":{"hp":1586.8,"atk":89.4,"def":78.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":79.34,"atk":4.47,"def":3.94,"critRate":0.0,"critDmg":0.0,"acc":24.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Damage dealt to enemies with a shield is increased by 20%."},{"t":"Upon being hit by an enemy, reduces the hero's damage taken from that enemy by 1%, up to 15 stacks."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"Accuracy +50","stats":{"acc":50.0}},{"t":"Ignores 35% of the target's Resistance."}],"sk":{"p":{"n":"Seeker of Truth","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"area"}},"b":{"n":"Flamethrower","auto":{"parts":[{"kind":"dmg","coef":{"atk":0.5,"hp":0.02},"el":"Fire"},{"kind":"dmg","coef":{"atk":0.2,"hp":0.0},"el":"Fire"}],"hits":5,"ticks":null,"tgt":"area"}},"u":{"n":"Unique Bomb","auto":{"parts":[{"kind":"dmg","coef":{"atk":5.0,"hp":0.1},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-22"},"cap":null},"20410":{"id":20410,"n":"Flora","r":"Legendary","el":"Fire","sc":"Wild","cl":"Warlock","race":"Human","melee":false,"af":0.4,"season":"s1","b":{"hp":1579.2,"atk":111.6,"def":79.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":78.96,"atk":5.58,"def":3.99,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":20.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Damage dealt to enemies with a shield is increased by 20%."},{"t":"Each time the hero's ultimate skill is cast, increases its damage dealt by 3%, up to 5 stacks."},{"t":"Enlightenment +60","stats":{"ench":60.0}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Gains 10 stacks of Insight as the battle starts, 40 stacks at most."}],"sk":{"p":{"n":"Pact Servant","auto":{"parts":[{"kind":"dmg","coef":{"atk":0.25},"el":"Derivative"}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Flaming Sphere","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.0},"el":"Derivative"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Pillar of Secret Flame","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.0},"el":"Derivative"},{"kind":"dmg","coef":{"atk":1.25},"el":"Derivative"},{"kind":"dmg","coef":{"atk":9.0},"el":"Derivative"}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":11.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":17.0,"ucB":23.0,"src":"2023-09-22"},"cap":{"t":"Increases all allies' Attack by 24% in all battles.","mode":"all"}},"22040":{"id":22040,"n":"Zeffi","r":"Legendary","el":"Lightning","sc":"Support","cl":"Shaman","race":"Ratfolk","melee":false,"af":0.4,"season":"s1","b":{"hp":1753.6,"atk":84.8,"def":79.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":87.68,"atk":4.24,"def":3.99,"critRate":0.0,"critDmg":0.0,"acc":24.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"The hero takes 20% less crit damage."},{"t":"Increases the chance of the battle skill effect by 25%."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"HP% +30%","stats":{"hpPct":0.3}},{"t":"Increases the ultimate skill's initial energy by 5."}],"sk":{"p":{"n":"Profound Balance","auto":{"parts":[{"kind":"shield","coef":{"atk":2.0,"ench":20.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Totem of Purification","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.0,"ench":9.0},"el":"Lightning"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Bless the Believer","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":7.0,"bc":12.0,"uf":12.0,"uc":20.0,"bfB":9.0,"bcB":14.0,"ufB":15.0,"ucB":23.0,"src":"2023-09-22"},"cap":{"t":"Increases all allies' Defense by 30% in dungeon battles.","mode":"dungeon"}},"20990":{"id":20990,"n":"Lucien","r":"Legendary","el":"Ice","sc":"Support","cl":"Arcane Warrior","race":"Sheen Elf","melee":true,"af":0.4,"season":"s1","b":{"hp":2243.0,"atk":82.2,"def":68.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":112.15,"atk":4.11,"def":3.4,"critRate":0.0,"critDmg":0.0,"acc":12.0,"res":12.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"The hero takes 20% less crit damage."},{"t":"The hero grants 15% more shield."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"HP% +30%","stats":{"hpPct":0.3}},{"t":"Ignores the target's Resistance when inflicting debuffs or control effects on them with battle skill."}],"sk":{"p":{"n":"Oath of Dawn","auto":{"parts":[{"kind":"shield","coef":{"hp":0.08},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Silverwing Charge","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.0,"hp":0.07},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Frostdoom","auto":{"parts":[{"kind":"dmg","coef":{"atk":5.0,"hp":0.11},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":3.0,"bc":8.0,"uf":9.0,"uc":16.0,"bfB":5.0,"bcB":10.0,"ufB":15.0,"ucB":19.0,"src":"2023-09-22"},"cap":{"t":"Increases all allies' Max HP by 30% in Grand Gladiator Arena.","mode":"arena"}},"23020":{"id":23020,"n":"Divine Ascetic","r":"Legendary","el":"Lightning","sc":"Dauntless","cl":"Monk","race":"Monkeyfolk","melee":true,"af":0.5,"season":"s1","b":{"hp":2320.6,"atk":95.2,"def":80.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":116.03,"atk":4.76,"def":4.0,"critRate":0.0,"critDmg":0.1,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Heals the hero by [+8%Max HP] after killing an enemy."},{"t":"Each stack of  increases ultimate skill damage by 1%."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Increases  stack limit to 40."}],"sk":{"p":{"n":"Unsevered","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Kui's Pursuit","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.5},"el":"Lightning"}],"hits":4,"ticks":null,"tgt":"single"}},"u":{"n":"Thunderous Might","auto":{"parts":[{"kind":"dmg","coef":{"atk":7.0},"el":"Lightning"}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":null,"cap":{"t":"Increases all allies' Attack by 24% in all battles.","mode":"all"}},"20590":{"id":20590,"n":"Utior","r":"Legendary","el":"Necrosis","sc":"Support","cl":"Wizard","race":"Human","melee":false,"af":0.4,"season":"s1","b":{"hp":1904.6,"atk":87.8,"def":78.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":95.23,"atk":4.39,"def":3.91,"critRate":0.0,"critDmg":0.0,"acc":12.0,"res":12.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"When an ally dies, heals the hero by [+15%Max HP]."},{"t":"When the hero's HP is below 60%, heals the hero by [+1%Max HP] per second."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"Accuracy +50","stats":{"acc":50.0}},{"t":"Increases the ultimate skill's initial energy by 5."}],"sk":{"p":{"n":"For My Purpose","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Cavern's Curse","auto":{"parts":[{"kind":"dmg","coef":{"atk":4.2},"el":"Necrotic"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Scion of Evil God","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":15.0,"ucB":23.0,"src":"2023-09-22"},"cap":{"t":"Increases all allies' Defense by 24% in all battles.","mode":"all"}},"20920":{"id":20920,"n":"Lossenia","r":"Legendary","el":"Ice","sc":"Frost","cl":"Wizard","race":"Sheen Elf","melee":false,"af":0.4,"season":"s1","b":{"hp":1701.2,"atk":96.6,"def":78.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":85.06,"atk":4.83,"def":3.94,"critRate":0.025,"critDmg":0.0,"acc":12.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"The hero takes 20% less crit damage."},{"t":"The hero gains 15% Damage Bonus when their HP is higher than 85%."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Ignores 15% of the target's Defense."}],"sk":{"p":{"n":"Cryomancy","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.0},"el":"Cold"}],"hits":2,"ticks":null,"tgt":"area"}},"b":{"n":"Snowfall Blessing","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.0},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Call of Blizzard","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.5},"el":"Cold"}],"hits":1,"ticks":5,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-22"},"cap":{"t":"Increases all allies' Attack by 24% in all battles.","mode":"all"}},"20160":{"id":20160,"n":"Ivellios","r":"Legendary","el":"Lightning","sc":"Dauntless","cl":"Druid","race":"Wood Elf","melee":false,"af":0.55,"season":"s1","b":{"hp":1673.0,"atk":95.8,"def":77.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":83.65,"atk":4.79,"def":3.85,"critRate":0.025,"critDmg":0.05,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Damage dealt to enemies with a shield is increased by 20%."},{"t":"Increases the chance of the passive skill effect by 5%."},{"t":"Enlightenment +60","stats":{"ench":60.0}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Increases the duration of buffs granted with the battle skill by 30%."}],"sk":{"p":{"n":"Priest's Splendor","auto":{"parts":[{"kind":"dmg","coef":{"atk":0.6},"el":"Derivative"}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Prayer of the Ancient","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.0},"el":"Lightning"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Wrath of the Ancient","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.0},"el":"Derivative"}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":15.0,"ucB":23.0,"src":"2023-09-22"},"cap":null},"20200":{"id":20200,"n":"Lothair","r":"Legendary","el":"Poison","sc":"Poison","cl":"Scourge","race":"Human","melee":true,"af":0.5,"season":"s1","b":{"hp":2354.4,"atk":99.0,"def":67.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":117.72,"atk":4.95,"def":3.38,"critRate":0.0,"critDmg":0.0,"acc":12.0,"res":0.0,"ench":10.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Heals the hero by [+8%Max HP] after killing an enemy."},{"t":"Each time the hero's passive skill takes effect, increases the passive skill's damage dealt by 1%, up to 10 stacks."},{"t":"Enlightenment +60","stats":{"ench":60.0}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Ignores the enemy's Resistance when inflicting debuffs with the battle skill, with a 40% chance of taking effect on the target twice."}],"sk":{"p":{"n":"Poisonous Intention","auto":{"parts":[{"kind":"dmg","coef":{"thp":0.0},"el":"Derivative"}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Pervading Darkness","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.5},"el":"Poison"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Stroke of Midnight","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.5,"ench":12.0},"el":"Poison"},{"kind":"dmg","coef":{"atk":2.5,"ench":12.0},"el":"Poison"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":13.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":19.0,"ucB":23.0,"src":"2023-09-22"},"cap":{"t":"Increases all allies' Enlightenment by 48.0 in all battles.","mode":"all"}},"21390":{"id":21390,"n":"Felosia","r":"Legendary","el":"Ice","sc":"Support","cl":"Druid","race":"Wood Elf","melee":false,"af":0.4,"season":"s1","b":{"hp":1630.0,"atk":80.4,"def":74.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":81.5,"atk":4.02,"def":3.72,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":20.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"When taking damage equal to 20% of the hero's Max HP, has a 50% chance of dispelling 1 debuff on the hero. This skill only takes effect once during a period."},{"t":"The hero grants 15% more shield."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"HP% +30%","stats":{"hpPct":0.3}},{"t":"Buffs granted with the battle skill cannot be dispelled."}],"sk":{"p":{"n":"Merciful Cure","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Guarding Fence","auto":{"parts":[{"kind":"shield","coef":{"thp":0.1,"ench":15.0},"el":null}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Fearless Bulwark","auto":{"parts":[{"kind":"shield","coef":{"thp":0.12,"ench":29.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":11.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":17.0,"ucB":23.0,"src":"2023-09-22"},"cap":null},"20730":{"id":20730,"n":"Alton","r":"Legendary","el":"Radiance","sc":"Rally","cl":"Bard","race":"Rural Halfling","melee":false,"af":0.4,"season":"s1","b":{"hp":1680.4,"atk":94.6,"def":77.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":84.02,"atk":4.73,"def":3.86,"critRate":0.05,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Damage dealt to enemies with a shield is increased by 20%."},{"t":"The hero gains 15% Damage Bonus when their HP is higher than 85%."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Increases the ultimate skill's initial energy by 5."}],"sk":{"p":{"n":"Pull Heartstrings","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Deadly Chord","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.0},"el":"Radiant"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Entrancing Melody","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.0},"el":"Radiant"},{"kind":"dmg","coef":{"atk":1.2},"el":"Radiant"}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-22"},"cap":{"t":"Increases all allies' Crit Damage by 24% in all battles.","mode":"all"}},"23080":{"id":23080,"n":"Ladehlia","r":"Legendary","el":"Necrosis","sc":"Summon","cl":"Warlock","race":"Sheen Elf","melee":false,"af":0.4,"season":"s1","b":{"hp":1841.4,"atk":89.8,"def":74.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":92.07,"atk":4.49,"def":3.72,"critRate":0.05,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"At battle start, Ladehlia gains 10 stack(s) of Satisfied."},{"t":"The hero gains 15% Damage Bonus when their HP is higher than 85%."},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"When any enemy's HP drops to 50% in battle, the hero casts Blood-Consuming Shadow on them, triggering once per battle."}],"sk":{"p":{"n":"Shadows of Night","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"all"}},"b":{"n":"Blood-Consuming Shadow","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.0},"el":"Necrotic"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Dark Pact","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.6},"el":"Necrotic"},{"kind":"dmg","coef":{"atk":3.6},"el":"Necrotic"},{"kind":"dmg","coef":{"atk":1.4},"el":"Necrotic"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":null},"20290":{"id":20290,"n":"Jathalea","r":"Legendary","el":"Poison","sc":"Poison","cl":"Druid","race":"Wood Elf","melee":false,"af":0.4,"season":"s1","b":{"hp":1690.0,"atk":93.6,"def":77.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":84.5,"atk":4.68,"def":3.88,"critRate":0.0,"critDmg":0.0,"acc":24.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Damage dealt to enemies with a shield is increased by 20%."},{"t":"The hero gains 15% Damage Bonus when their HP is higher than 85%."},{"t":"Enlightenment +60","stats":{"ench":60.0}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Ignores 15% of the target's Defense."}],"sk":{"p":{"n":"Cherished Wish","auto":{"parts":[{"kind":"dmg","coef":{"thp":0.06},"el":"Derivative"}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Headstrong","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.0},"el":"Poison"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Determination","auto":{"parts":[{"kind":"dmg","coef":{"atk":7.0},"el":"Poison"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":13.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":19.0,"ucB":23.0,"src":"2023-09-22"},"cap":null},"20690":{"id":20690,"n":"Torrin","r":"Legendary","el":"Necrosis","sc":"Support","cl":"Wizard","race":"The Unstill","melee":false,"af":0.4,"season":"s1","b":{"hp":1979.8,"atk":74.0,"def":86.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":98.99,"atk":3.7,"def":4.33,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":24.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"The hero takes 20% less crit damage."},{"t":"Each healing granted by the battle skill additionally dispels 1 debuffs from target allies."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"HP% +30%","stats":{"hpPct":0.3}},{"t":"Buffs granted with the ultimate skill cannot be dispelled."}],"sk":{"p":{"n":"Shadow Protection","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Chaotic Prayer","auto":{"parts":[{"kind":"heal","coef":{"thp":0.12,"ench":24.0},"el":null},{"kind":"heal","coef":{"thp":0.06,"ench":12.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Underworld Cloak","auto":{"parts":[{"kind":"heal","coef":{"thp":0.03,"ench":6.0},"el":null}],"hits":1,"ticks":5,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-22"},"cap":{"t":"Increases all allies' Resistance by 40.0 in all battles.","mode":"all"}},"20000":{"id":20000,"n":"Gillian","r":"Legendary","el":"Radiance","sc":"Support","cl":"Cleric","race":"Human","melee":false,"af":0.4,"season":"s1","b":{"hp":2073.6,"atk":69.2,"def":82.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":103.68,"atk":3.46,"def":4.12,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":24.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"When taking damage equal to 20% of the hero's Max HP, has a 50% chance of dispelling 1 debuff on the hero. This skill only takes effect once during a period."},{"t":"When granting a buff, there is a 70% chance of extending its duration by 30%."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"Resistance +50","stats":{"res":50.0}},{"t":"When inflicted with Control, reduces its duration by 50%."}],"sk":{"p":{"n":"Spare the Dying","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Divine Favor Bestowal","auto":{"parts":[{"kind":"heal","coef":{"thp":0.1,"ench":18.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Luminous Domain","auto":{"parts":[{"kind":"heal","coef":{"thp":0.15,"ench":35.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-22"},"cap":null},"20060":{"id":20060,"n":"Eurion","r":"Legendary","el":"Ice","sc":"Support","cl":"Warrior","race":"Human","melee":true,"af":0.5,"season":"s1","b":{"hp":2422.2,"atk":81.8,"def":83.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":121.11,"atk":4.09,"def":4.19,"critRate":0.0,"critDmg":0.0,"acc":12.0,"res":12.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"When taking damage equal to 20% of the hero's Max HP, has a 50% chance of dispelling 1 debuff on the hero. This skill only takes effect once during a period."},{"t":"When the hero's HP is below 60%, heals the hero by [+1%Max HP] per second."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"DEF% +30%","stats":{"defPct":0.3}},{"t":"Has a 35% chance to get immune to the Control to be inflicted."}],"sk":{"p":{"n":"Undying Glory","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Ever-victorious","auto":{"parts":[{"kind":"dmg","coef":{"def":3.0},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Shield of Oath","auto":{"parts":[{"kind":"shield","coef":{"def":6.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":15.0,"ucB":23.0,"src":"2023-09-22"},"cap":null},"22010":{"id":22010,"n":"Twitch","r":"Legendary","el":"Poison","sc":"Poison","cl":"Scourge","race":"Ratfolk","melee":false,"af":0.5,"season":"s1","b":{"hp":1605.6,"atk":103.2,"def":77.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":80.28,"atk":5.16,"def":3.89,"critRate":0.025,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":10.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Damage dealt to enemies with a shield is increased by 20%."},{"t":"When dealing damage to enemies with less than 50% HP, the hero gains 15% Damage Bonus."},{"t":"Enlightenment +60","stats":{"ench":60.0}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Ignores the target's Resistance when inflicting debuffs or control effects on them with ultimate skill."}],"sk":{"p":{"n":"Sneak Shots","auto":{"parts":[{"kind":"dmg","coef":{"atk":0.3},"el":"Derivative"}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Venomous Shots","auto":{"parts":[{"kind":"dmg","coef":{"atk":0.8,"ench":9.0},"el":"Poison"}],"hits":4,"ticks":null,"tgt":"single"}},"u":{"n":"Lethal Arrowstorm","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.6,"ench":18.0},"el":"Poison"}],"hits":3,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-22"},"cap":{"t":"In Fey Meander and Trial Breakthrough battles, increases all allies' Attack by 30%.","mode":"fey_trial"}},"20120":{"id":20120,"n":"Hvitar","r":"Legendary","el":"Ice","sc":"Frost","cl":"Master of Lineage","race":"Dragon","melee":false,"af":0.4,"season":"s1","b":{"hp":1588.0,"atk":103.8,"def":78.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":79.4,"atk":5.19,"def":3.93,"critRate":0.0,"critDmg":0.1,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Heals the hero by [+8%Max HP] after killing an enemy."},{"t":"For each enemy on the field, the hero deals 4% more damage. This effect stacks up to 5 times."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"The ultimate skill increases the count of enemies inflicted with Frost by 2 additionally."}],"sk":{"p":{"n":"Frigid Deadland","auto":{"parts":[{"kind":"dmg","coef":{"atk":0.22},"el":"Derivative"},{"kind":"dmg","coef":{"atk":6.0},"el":"Derivative"}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Ice Storm","auto":{"parts":[{"kind":"dmg","coef":{"atk":4.0},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Breath of Frost","auto":{"parts":[{"kind":"dmg","coef":{"atk":6.4},"el":"Cold"},{"kind":"dmg","coef":{"atk":3.6},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":{"bf":5.0,"bc":10.0,"uf":13.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":19.0,"ucB":23.0,"src":"2023-09-22"},"cap":{"t":"Increases all allies' Attack by 30% in Grand Gladiator Arena battles.","mode":"arena"}},"20970":{"id":20970,"n":"Mithrasea","r":"Legendary","el":"Radiance","sc":"Support","cl":"Cleric","race":"Sheen Elf","melee":false,"af":0.4,"season":"s1","b":{"hp":1954.4,"atk":84.8,"def":78.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":97.72,"atk":4.24,"def":3.92,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":24.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Extends the battle skill's range to the entire battlefield, with a 50% chance of inflicting 1 additional stack of Recovery Over Time for 5.0s."},{"t":"When granting a buff, there is a 70% chance of extending its duration by 30%."},{"t":"Allies resurrected by the ultimate skill recover 100% of their Max HP"},{"t":"HP% +30%","stats":{"hpPct":0.3}},{"t":"Increase the available trigger count of the passive skill by 1."}],"sk":{"p":{"n":"Blessings of the Stars","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Everlasting Glory","auto":{"parts":[{"kind":"heal","coef":{"hp":0.08,"ench":24.0},"el":null}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Omnisage's Grace","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":7.0,"bc":12.0,"uf":14.0,"uc":24.0,"bfB":9.0,"bcB":14.0,"ufB":20.0,"ucB":27.0,"src":"2023-09-22"},"cap":{"t":"Increases all allies' HP by 24% in all battles.","mode":"all"}},"23370":{"id":23370,"n":"Bigby","r":"Legendary","el":"Radiance","sc":"Support","cl":"Wizard","race":"Gnome","melee":false,"af":0.55,"season":"s1","b":{"hp":1778.6,"atk":87.6,"def":76.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":88.93,"atk":4.38,"def":3.83,"critRate":0.0,"critDmg":0.0,"acc":24.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"The hero takes 20% less crit damage."},{"t":"When the hero's HP is below 60%, heals the hero by [+1%Max HP] per second."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Reduces the battle skill's initial recharge time by 3s."}],"sk":{"p":{"n":"Bigby's Forceful Hand","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Bigby's Interposing Hand","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Bigby's Clenched Fist","auto":{"parts":[{"kind":"dmg","coef":{"atk":6.2},"el":"Radiant"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":null},"21460":{"id":21460,"n":"Donella","r":"Legendary","el":"Radiance","sc":"Support","cl":"Summoner","race":"Gnome","melee":true,"af":0.5,"season":"s1","b":{"hp":2345.2,"atk":92.6,"def":75.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":117.26,"atk":4.63,"def":3.75,"critRate":0.0,"critDmg":0.0,"acc":24.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"When taking damage equal to 20% of the hero's Max HP, has a 50% chance of dispelling 1 debuff on the hero. This skill only takes effect once during a period."},{"t":"When inflicting a debuff, there is a 70% chance of extending its duration by 30%."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"Accuracy +50","stats":{"acc":50.0}},{"t":"Ignores 35% of the target's Resistance."}],"sk":{"p":{"n":"Attractive Friend","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.0},"el":"Radiant"}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Blissful Vertigo","auto":{"parts":[{"kind":"dmg","coef":{"atk":4.0},"el":"Radiant"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Perfect Match","auto":{"parts":[{"kind":"dmg","coef":{"atk":7.0},"el":"Radiant"}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":null,"cap":{"t":"Increases all allies' Accuracy by 40.0 in all battles.","mode":"all"}},"21880":{"id":21880,"n":"Bionphray","r":"Legendary","el":"Lightning","sc":"Support","cl":"Warrior","race":"Valley Minotaur","melee":true,"af":0.38,"season":"s1","b":{"hp":2461.2,"atk":88.6,"def":83.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":123.06,"atk":4.43,"def":4.17,"critRate":0.0,"critDmg":0.0,"acc":12.0,"res":12.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"When taking damage equal to 20% of the hero's Max HP, has a 50% chance of dispelling 1 debuff on the hero. This skill only takes effect once during a period."},{"t":"Upon being hit by an enemy, reduces the hero's damage taken from that enemy by 1%, up to 15 stacks."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"Accuracy +50","stats":{"acc":50.0}},{"t":"Increases the ultimate skill's initial energy by 5."}],"sk":{"p":{"n":"Blood Rage","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.5},"el":"Derivative"},{"kind":"shield","coef":{"hp":0.1},"el":null}],"hits":1,"ticks":null,"tgt":"area"}},"b":{"n":"Weights of Wrath","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.3},"el":"Lightning"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Lightning Current","auto":{"parts":[{"kind":"dmg","coef":{"atk":5.2},"el":"Lightning"},{"kind":"dmg","coef":{"atk":1.0},"el":"Lightning"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":7.0,"bc":12.0,"uf":12.0,"uc":20.0,"bfB":9.0,"bcB":14.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-22"},"cap":null},"20740":{"id":20740,"n":"Nastjenka","r":"Legendary","el":"Lightning","sc":"Dauntless","cl":"Scourge","race":"Human","melee":true,"af":0.5,"season":"s1","b":{"hp":2388.8,"atk":98.0,"def":77.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":119.44,"atk":4.9,"def":3.88,"critRate":0.0,"critDmg":0.1,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Heals the hero by [+8%Max HP] after killing an enemy."},{"t":"Each time the hero's ultimate skill is cast, increases its damage dealt by 3%, up to 5 stacks."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"The passive skill stack cap is increased to 20 stacks, with each stack of Black Stork's Feather granting the hero an extra 2% Crit Damage."}],"sk":{"p":{"n":"Black Plume","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Talon","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.0},"el":"Lightning"}],"hits":3,"ticks":null,"tgt":"single"}},"u":{"n":"Wild Beak","auto":{"parts":[{"kind":"dmg","coef":{"atk":7.2},"el":"Lightning"},{"kind":"dmg","coef":{"atk":1.25},"el":"Lightning"}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bc":10.0,"uf":11.0,"uc":20.0,"bfB":2.0,"bcB":12.0,"ufB":17.0,"ucB":23.0,"src":"2023-09-22"},"cap":{"t":"Increases all allies' Attack by 24% in all battles.","mode":"all"}},"21870":{"id":21870,"n":"Reytah","r":"Legendary","el":"Poison","sc":"Support","cl":"Shaman","race":"Swamp Lizardfolk","melee":false,"af":0.38,"season":"s1","b":{"hp":1573.6,"atk":91.2,"def":77.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":78.68,"atk":4.56,"def":3.89,"critRate":0.0,"critDmg":0.0,"acc":24.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"When present, all enemies deal 10% less damage."},{"t":"Upon being hit by an enemy, reduces the hero's damage taken from that enemy by 1%, up to 15 stacks."},{"t":"The ultimate skill increases the duration of the enemy's debuff by an additional 2s."},{"t":"Accuracy +50","stats":{"acc":50.0}},{"t":"The debuff inflicted by the hero has a 50% chance of becoming undispellable."}],"sk":{"p":{"n":"Sweet Dread","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"all"}},"b":{"n":"Wailing Echo","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.5},"el":"Poison"},{"kind":"dmg","coef":{"atk":2.5},"el":"Poison"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Queen's Retribution","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"all"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":26.0,"src":"2023-09-22"},"cap":{"t":"In Fey Meander and Trial Breakthrough battles, increases all allies' Max HP by 30%.","mode":"fey_trial"}},"21010":{"id":21010,"n":"Ergander","r":"Legendary","el":"Poison","sc":"Support","cl":"Warrior","race":"Deep Elf","melee":true,"af":0.38,"season":"s1","b":{"hp":2593.6,"atk":85.8,"def":78.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":129.68,"atk":4.29,"def":3.9,"critRate":0.0,"critDmg":0.0,"acc":24.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Reduces the hero's damage taken by 20% when under Control."},{"t":"Increases the chance of the passive skill effect by 15%."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"Accuracy +50","stats":{"acc":50.0}},{"t":"When inflicted with Control, reduces its duration by 50%."}],"sk":{"p":{"n":"Eye for an Eye","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Avenging Slash","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.0,"hp":0.07},"el":"Poison"},{"kind":"heal","coef":{"hp":0.2},"el":null}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Desperate Beast","auto":{"parts":[{"kind":"dmg","coef":{"atk":4.0,"hp":0.16},"el":"Poison"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-22"},"cap":{"t":"Increases all allies' Defense by 30% in Grand Gladiator Arena battles.","mode":"arena"}},"21740":{"id":21740,"n":"Ripekas","r":"Legendary","el":"Necrosis","sc":"Support","cl":"Scourge","race":"The Unstill","melee":true,"af":0.5,"season":"s1","b":{"hp":2422.4,"atk":97.4,"def":85.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":121.12,"atk":4.87,"def":4.25,"critRate":0.025,"critDmg":0.0,"acc":12.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"When taking damage equal to 20% of the hero's Max HP, has a 50% chance of dispelling 1 debuff on the hero. This skill only takes effect once during a period."},{"t":"Upon being hit by an enemy, reduces the hero's damage taken from that enemy by 1%, up to 15 stacks."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"Accuracy +50","stats":{"acc":50.0}},{"t":"When inflicted with Control, reduces its duration by 50%."}],"sk":{"p":{"n":"Double Advantage","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Double Quake","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.2,"def":1.5},"el":"Necrotic"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Ghost Mischief","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.0,"def":1.0},"el":"Necrotic"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-22"},"cap":null},"21770":{"id":21770,"n":"Lelwanis","r":"Legendary","el":"Necrosis","sc":"Summon","cl":"Master of Lineage","race":"Dragon","melee":true,"af":0.5,"season":"s1","b":{"hp":2318.2,"atk":93.6,"def":71.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":115.91,"atk":4.68,"def":3.55,"critRate":0.05,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Heals the hero by [+8%Max HP] after killing an enemy."},{"t":"For each enemy on the field, the hero deals 4% more damage. This effect stacks up to 5 times."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Increases the battle skill's recharge speed by 30%, and also recharges the hero's Ultimate Energy by 15.0 after casting the battle skill."}],"sk":{"p":{"n":"Dragon God's Lineage","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Lady of Dark Ruins","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.0},"el":"Necrotic"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Dragon of Death","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.0},"el":"Necrotic"}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":{"bf":7.0,"bc":12.0,"uf":13.0,"uc":20.0,"bfB":9.0,"bcB":14.0,"ufB":19.0,"ucB":23.0,"src":"2023-09-22"},"cap":{"t":"Increases all allies' Crit Damage by 30% in Grand Gladiator Arena battles.","mode":"arena"}},"20400":{"id":20400,"n":"Errich","r":"Legendary","el":"Fire","sc":"Wild","cl":"Druid","race":"Ridge Halfling","melee":false,"af":0.4,"season":"s1","b":{"hp":1641.6,"atk":95.8,"def":76.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":82.08,"atk":4.79,"def":3.8,"critRate":0.05,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Heals the hero by [+8%Max HP] after killing an enemy."},{"t":"When dealing damage to enemies with less than 50% HP, the hero gains 15% Damage Bonus."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Ignores 15% of the target's Defense."}],"sk":{"p":{"n":"Fortune Sense","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Pillar of Flame","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.0},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Meteorite Rain","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.6},"el":"Fire"},{"kind":"dmg","coef":{"atk":2.0},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-22"},"cap":null},"24780":{"id":24780,"n":"Sintrellia","r":"Legendary","el":"Necrosis","sc":"Summon","cl":"Summoner","race":"Undead","melee":false,"af":0.4,"season":"s1","b":{"hp":1770.6,"atk":89.8,"def":72.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":88.53,"atk":4.49,"def":3.64,"critRate":0.0,"critDmg":0.1,"acc":0.0,"res":0.0,"ench":20.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Increases duration of Banshee's Curse inflicted by battle skills to 10s."},{"t":"Heals the hero by [+8%Max HP] after killing an enemy."},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"After casting ultimate skill, clone unit and original unit gain doubled Banshee's Curse damage boost when attacking cursed enemies."}],"sk":{"p":{"n":"Game of Fatuity","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Twist of Fate","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.8},"el":"Necrotic"}],"hits":3,"ticks":null,"tgt":"single"}},"u":{"n":"Echo of Destiny","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}}},"tm":null,"cap":{"t":"Increases all allies' Attack by 24% in all battles.","mode":"all"}},"22300":{"id":22300,"n":"Premtsa","r":"Legendary","el":"Necrosis","sc":"Summon","cl":"Wizard","race":"The Unstill","melee":false,"af":0.4,"season":"s1","b":{"hp":1688.2,"atk":94.6,"def":78.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":84.41,"atk":4.73,"def":3.91,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":20.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"When an ally dies, heals the hero by [+15%Max HP]."},{"t":"When dealing damage to enemies with less than 50% HP, the hero gains 15% Damage Bonus."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Ignores 15% of the target's Defense."}],"sk":{"p":{"n":"Tireless Devotion","auto":{"parts":[{"kind":"dmg","coef":{"atk":0.6},"el":"Derivative"}],"hits":7,"ticks":null,"tgt":"single"}},"b":{"n":"Undead Puppet","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.4},"el":"Necrotic"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Myriad Descendants","auto":{"parts":[{"kind":"dmg","coef":{"atk":5.2},"el":"Necrotic"}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":{"bf":7.0,"bc":12.0,"uf":12.0,"uc":20.0,"bfB":9.0,"bcB":14.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-22"},"cap":{"t":"Increases all allies' Attack by 30% in dungeon battles.","mode":"dungeon"}},"23360":{"id":23360,"n":"Elminster Aumar","r":"Legendary","el":"Fire","sc":"Support","cl":"Wizard","race":"Human","melee":false,"af":0.55,"season":"s1","b":{"hp":1961.2,"atk":76.6,"def":78.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":98.06,"atk":3.83,"def":3.9,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":20.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"The hero takes 20% less crit damage."},{"t":"When the hero's HP is below 60%, heals the hero by [+1%Max HP] per second."},{"t":"Enlightenment +60","stats":{"ench":60.0}},{"t":"HP% +30%","stats":{"hpPct":0.3}},{"t":"Ignores 35% of the target's Resistance."}],"sk":{"p":{"n":"Mystra's Shelter","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Radiant Shield","auto":{"parts":[{"kind":"shield","coef":{"thp":0.12,"ench":30.0},"el":null}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Silver Fire","auto":{"parts":[{"kind":"dmg","coef":{"atk":7.1,"ench":50.0},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":{"t":"Increases all allies' Enlightenment by 48.0 in all battles.","mode":"all"}},"21030":{"id":21030,"n":"Auster","r":"Legendary","el":"Ice","sc":"Frost","cl":"Ranger","race":"Deep Elf","melee":false,"af":0.55,"season":"s1","b":{"hp":1572.0,"atk":99.8,"def":76.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":78.6,"atk":4.99,"def":3.8,"critRate":0.0,"critDmg":0.1,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"The hero takes 20% less crit damage."},{"t":"When dealing damage to enemies with less than 50% HP, the hero gains 15% Damage Bonus."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"Accuracy +50","stats":{"acc":50.0}},{"t":"Ignores 15% of the target's Defense."}],"sk":{"p":{"n":"Double Shot","auto":{"parts":[{"kind":"dmg","coef":{"atk":0.55},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Toxophilite","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.2},"el":"Cold"}],"hits":3,"ticks":null,"tgt":"single"}},"u":{"n":"Bone Chill","auto":{"parts":[{"kind":"dmg","coef":{"atk":5.2},"el":"Cold"},{"kind":"dmg","coef":{"atk":1.1},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":{"bf":5.0,"bc":10.0,"uf":14.0,"uc":24.0,"bfB":7.0,"bcB":12.0,"ufB":20.0,"ucB":27.0,"src":"2023-09-22"},"cap":{"t":"In Fey Meander and Trial Breakthrough battles, increases all allies' Defense by 30%.","mode":"fey_trial"}},"22060":{"id":22060,"n":"Sagomir","r":"Legendary","el":"Radiance","sc":"Support","cl":"Warrior","race":"Horsefolk","melee":true,"af":0.38,"season":"s1","b":{"hp":2609.0,"atk":87.8,"def":75.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":130.45,"atk":4.39,"def":3.77,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":24.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"When taking damage equal to 20% of the hero's Max HP, has a 50% chance of dispelling 1 debuff on the hero. This skill only takes effect once during a period."},{"t":"When the hero's HP is below 60%, heals the hero by [+1%Max HP] per second."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"Resistance +50","stats":{"res":50.0}},{"t":"When inflicted with Control, reduces its duration by 50%."}],"sk":{"p":{"n":"Brave and Hungry","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Take the Lead","auto":{"parts":[{"kind":"dmg","coef":{"hp":0.06,"atk":2.5},"el":"Radiant"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Pure Horsepower","auto":{"parts":[{"kind":"dmg","coef":{"atk":4.0,"hp":0.0},"el":"Radiant"},{"kind":"dmg","coef":{"hp":0.1,"atk":2.0},"el":"Radiant"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-22"},"cap":{"t":"Increases all allies' Defense by 30% in Grand Gladiator Arena battles.","mode":"arena"}},"20300":{"id":20300,"n":"Lorentheel","r":"Legendary","el":"Radiance","sc":"Rally","cl":"Druid","race":"Wood Elf","melee":false,"af":0.4,"season":"s1","b":{"hp":1589.6,"atk":99.8,"def":81.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":79.48,"atk":4.99,"def":4.05,"critRate":0.05,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Heals the hero by [+8%Max HP] after killing an enemy."},{"t":"When dealing damage to enemies with less than 50% HP, the hero gains 15% Damage Bonus."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Increases the duration of buffs granted with the ultimate skill by 30%."}],"sk":{"p":{"n":"Guidance of the Golden Deer","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Forest Wind Assault","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.6},"el":"Radiant"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Residual Light of the Shard","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":21.0,"ucB":26.0,"src":"2023-09-22"},"cap":{"t":"Increases all allies' Crit Damage by 24% in all battles.","mode":"all"}},"20830":{"id":20830,"n":"Tamar","r":"Legendary","el":"Lightning","sc":"Support","cl":"Wizard","race":"Human","melee":false,"af":0.4,"season":"s1","b":{"hp":1766.0,"atk":87.2,"def":72.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":88.3,"atk":4.36,"def":3.61,"critRate":0.025,"critDmg":0.0,"acc":12.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"The hero takes 20% less crit damage."},{"t":"Increases the chance of the passive skill effect by 15%."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"Accuracy +50","stats":{"acc":50.0}},{"t":"Ignores 35% of the target's Resistance."}],"sk":{"p":{"n":"Might of the Matriarch","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.0},"el":"Derivative"}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Thunder War Song","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.0},"el":"Lightning"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Tempest Surge","auto":{"parts":[{"kind":"dmg","coef":{"atk":7.0},"el":"Lightning"}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":{"bf":7.0,"bc":12.0,"uf":12.0,"uc":20.0,"bfB":9.0,"bcB":14.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-22"},"cap":{"t":"Increases all allies' Accuracy by 50.0 in Grand Gladiator Arena battles.","mode":"arena"}},"20630":{"id":20630,"n":"Vicana","r":"Legendary","el":"Poison","sc":"Poison","cl":"Ranger","race":"Human","melee":false,"af":0.55,"season":"s1","b":{"hp":2332.0,"atk":93.6,"def":73.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":116.6,"atk":4.68,"def":3.67,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":20.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Heals the hero by [+8%Max HP] after killing an enemy."},{"t":"When dealing damage to an enemy, for every 15% of the target's Max HP over that of the hero, the damage dealt will increase by 1%, up to 12%."},{"t":"Enlightenment +60","stats":{"ench":60.0}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Ignores the target's Resistance when inflicting debuffs or control effects on them with battle skill."}],"sk":{"p":{"n":"Prey Selection","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Triple Shot","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.5},"el":"Poison"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Deadly Toxinbolt","auto":{"parts":[{"kind":"dmg","coef":{"atk":5.0},"el":"Poison"},{"kind":"dmg","coef":{"atk":1.05},"el":"Derivative"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-22"},"cap":null},"20810":{"id":20810,"n":"Felicity","r":"Legendary","el":"Fire","sc":"Wild","cl":"Sorcerer","race":"Human","melee":false,"af":0.4,"season":"s1","b":{"hp":1696.4,"atk":94.2,"def":76.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":84.82,"atk":4.71,"def":3.83,"critRate":0.025,"critDmg":0.05,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Heals the hero by [+8%Max HP] after killing an enemy."},{"t":"When dealing damage to an enemy, for every 15% of the target's Max HP over that of the hero, the damage dealt will increase by 1%, up to 12%."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Deals same damage to other enemies 1 tile around the target."}],"sk":{"p":{"n":"Burning Blood","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Incineration","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.4},"el":"Fire"}],"hits":3,"ticks":null,"tgt":"single"}},"u":{"n":"Fiery Feather","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.5},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-22"},"cap":{"t":"Increases all allies' Crit Damage by 24% in all battles.","mode":"all"}},"24770":{"id":24770,"n":"Alphanarsy","r":"Legendary","el":"Ice","sc":"Support","cl":"Warrior","race":"Deep Elf","melee":true,"af":0.4,"season":"s1","b":{"hp":2392.8,"atk":85.8,"def":76.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":119.64,"atk":4.29,"def":3.81,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":12.0,"ench":10.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Reduces the hero's damage taken by 20% when under Control."},{"t":"Gains 2 stack(s) of  for each target hit by battle skill."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"HP% +30%","stats":{"hpPct":0.3}},{"t":"Has a 35% chance to get immune to the Control to be inflicted."}],"sk":{"p":{"n":"Ironfrost Rust Armor","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Lone Star Frostblade","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.0,"ench":10.0},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"all"}},"u":{"n":"Desperate Tide","auto":{"parts":[{"kind":"shield","coef":{"hp":0.15,"ench":36.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":null,"cap":{"t":"Increases all allies' HP by 30% in battles of Fey Meander and Trial Breakthrough.","mode":"fey_trial"}},"21320":{"id":21320,"n":"Talwer","r":"Legendary","el":"Poison","sc":"Support","cl":"Scourge","race":"Goblin","melee":true,"af":0.5,"season":"s1","b":{"hp":2453.0,"atk":82.4,"def":71.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":122.65,"atk":4.12,"def":3.57,"critRate":0.0,"critDmg":0.0,"acc":12.0,"res":0.0,"ench":10.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"When an ally dies, heals the hero by [+15%Max HP]."},{"t":"When inflicting a debuff, there is a 70% chance of extending its duration by 30%."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"Accuracy +50","stats":{"acc":50.0}},{"t":"Reduces the battle skill's initial recharge time by 3s."}],"sk":{"p":{"n":"Hunter's Mark","auto":{"parts":[],"hits":10,"ticks":null,"tgt":"single"}},"b":{"n":"Snicker Mushroom","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.5,"ench":9.0},"el":"Derivative"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Spore Storm","auto":{"parts":[{"kind":"dmg","coef":{"atk":0.8,"ench":6.0},"el":"Derivative"}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-22"},"cap":{"t":"Increases all allies' Accuracy by 50.0 in Grand Gladiator Arena battles.","mode":"arena"}},"21700":{"id":21700,"n":"Oggok","r":"Legendary","el":"Poison","sc":"Support","cl":"Shaman","race":"Forest Troll","melee":false,"af":0.4,"season":"s1","b":{"hp":1829.0,"atk":87.8,"def":77.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":91.45,"atk":4.39,"def":3.85,"critRate":0.0,"critDmg":0.0,"acc":24.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Reduces the hero's damage taken by 20% when under Control."},{"t":"The passive skill has a 50% chance of dispelling 1 extra debuff."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Ignores the target's Resistance when inflicting debuffs or control effects on them with battle skill."}],"sk":{"p":{"n":"Witchcraft Therapy","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Hidden Trajectory","auto":{"parts":[{"kind":"heal","coef":{"atk":1.5,"ench":12.0},"el":null},{"kind":"dmg","coef":{"atk":1.5,"ench":12.0},"el":"Poison"}],"hits":6,"ticks":null,"tgt":"area"}},"u":{"n":"Specialized Area","auto":{"parts":[{"kind":"heal","coef":{"atk":4.0,"ench":30.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-22"},"cap":{"t":"Increases all allies' Resistance by 40.0 in all battles.","mode":"all"}},"21150":{"id":21150,"n":"Huldork","r":"Legendary","el":"Fire","sc":"Support","cl":"Gunslinger","race":"Dwarf","melee":false,"af":0.55,"season":"s1","b":{"hp":1759.8,"atk":93.6,"def":78.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":87.99,"atk":4.68,"def":3.9,"critRate":0.025,"critDmg":0.0,"acc":12.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"The hero takes 20% less crit damage."},{"t":"When inflicting a debuff, there is a 70% chance of extending its duration by 30%."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"Accuracy +50","stats":{"acc":50.0}},{"t":"Increases the ultimate skill's initial energy by 5."}],"sk":{"p":{"n":"Sharpshooter","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Hawk-eye Shot","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.8},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Break Siege","auto":{"parts":[{"kind":"dmg","coef":{"atk":6.5},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-22"},"cap":null},"20190":{"id":20190,"n":"Garrika","r":"Legendary","el":"Fire","sc":"Support","cl":"Knight","race":"Human","melee":true,"af":0.5,"season":"s1","b":{"hp":2536.0,"atk":86.2,"def":72.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":126.8,"atk":4.31,"def":3.64,"critRate":0.0,"critDmg":0.0,"acc":24.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"The hero takes 20% less crit damage."},{"t":"Recharges the hero's Ultimate Energy by 15.0 when taking damage over 20% of the hero's max HP. Takes effect once every 20.0s."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"Accuracy +50","stats":{"acc":50.0}},{"t":"Ignores 35% of the target's Resistance."}],"sk":{"p":{"n":"War God's Gift","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Searing Smite","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.2},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Commander's Toss","auto":{"parts":[{"kind":"dmg","coef":{"atk":6.4},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":9.0,"uc":16.0,"bfB":7.0,"bcB":12.0,"ufB":15.0,"ucB":19.0,"src":"2023-09-22"},"cap":{"t":"Increases all allies' Accuracy by 50.0 in Grand Gladiator Arena battles.","mode":"arena"}},"22980":{"id":22980,"n":"Drizzt Do'Urden","r":"Legendary","el":"Ice","sc":"Frost","cl":"Ranger","race":"Drow","melee":true,"af":0.55,"season":"s1","b":{"hp":2101.0,"atk":93.0,"def":73.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":105.05,"atk":4.65,"def":3.66,"critRate":0.05,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"The hero takes 20% less crit damage."},{"t":"When dealing damage to an enemy, for every 15% of the target's Max HP over that of the hero, the damage dealt will increase by 1%, up to 12%."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Ignores 15% of the target's Defense."}],"sk":{"p":{"n":"Planar Ally","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Dual Wielder","auto":{"parts":[{"kind":"dmg","coef":{"atk":0.75},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Dance of the Wild","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.1},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":{"t":"Increases all allies' Crit Damage by 24% in all battles.","mode":"all"}},"20450":{"id":20450,"n":"Khrysos","r":"Legendary","el":"Fire","sc":"Support","cl":"Shaman","race":"Blazeland Lizardfolk","melee":true,"af":0.5,"season":"s1","b":{"hp":2530.0,"atk":84.2,"def":80.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":126.5,"atk":4.21,"def":4.02,"critRate":0.0,"critDmg":0.0,"acc":24.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"The hero gains a [+15%Max HP] shield when casting the battle skill."},{"t":"When the hero's HP is below 60%, heals the hero by [+1%Max HP] per second."},{"t":"The hero grants 30% more shield."},{"t":"Accuracy +50","stats":{"acc":50.0}},{"t":"The shield conversion rate of the passive skill to healing is increased to 75%."}],"sk":{"p":{"n":"Sunfire Blessing","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Holy Fire Smite","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.0},"el":"Fire"},{"kind":"shield","coef":{"thp":0.15},"el":null}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Might of Gold","auto":{"parts":[{"kind":"dmg","coef":{"atk":5.0,"hp":0.1},"el":"Fire"},{"kind":"shield","coef":{"thp":0.25},"el":null}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-22"},"cap":{"t":"In Fey Meander and Trial Breakthrough battles, increases all allies' Defense by 30%.","mode":"fey_trial"}},"20320":{"id":20320,"n":"Huberg","r":"Legendary","el":"Radiance","sc":"Rally","cl":"Cleric","race":"Dwarf","melee":false,"af":0.4,"season":"s1","b":{"hp":1615.8,"atk":95.8,"def":78.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":80.79,"atk":4.79,"def":3.9,"critRate":0.05,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Heals the hero by [+8%Max HP] after killing an enemy."},{"t":"Increases the chance of the battle skill effect by 15%."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Ignores 15% of the target's Defense."}],"sk":{"p":{"n":"Leader's Prestige","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Watcher's Smite","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.2},"el":"Radiant"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Warrior's Holy Light","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.0},"el":"Radiant"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":13.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":19.0,"ucB":23.0,"src":"2023-09-22"},"cap":{"t":"In Fey Meander and Trial Breakthrough battles, increases all allies' Attack by 30%.","mode":"fey_trial"}},"20890":{"id":20890,"n":"Tharivol","r":"Legendary","el":"Lightning","sc":"Dauntless","cl":"Ranger","race":"Sheen Elf","melee":false,"af":0.55,"season":"s1","b":{"hp":1693.0,"atk":86.4,"def":74.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":84.65,"atk":4.32,"def":3.72,"critRate":0.025,"critDmg":0.05,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Damage dealt to enemies with a shield is increased by 20%."},{"t":"The hero gains 15% Damage Bonus when their HP is higher than 85%."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"The hero gains 9% Damage Bonus permanently when an enemy dies. This effect stacks up to 3 times."}],"sk":{"p":{"n":"Pursuit Hunting","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Certain Shot","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.0},"el":"Lightning"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Marksmanship","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.2},"el":"Lightning"},{"kind":"dmg","coef":{"atk":0.8},"el":"Lightning"}],"hits":3,"ticks":null,"tgt":"single"}}},"tm":null,"cap":null},"23011":{"id":23011,"n":"The Dark Lady","r":"Legendary","el":"Necrosis","sc":"Support","cl":"Master of Lineage","race":"Dragon God","melee":false,"af":0.5,"season":"s1","b":{"hp":2320.6,"atk":95.2,"def":80.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":116.03,"atk":4.76,"def":4.0,"critRate":0.0,"critDmg":0.1,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"The battle skill can inflict Healing Prohibition on enemies."},{"t":"Increases the chance for the ultimate skill to dispel enemy buffs."},{"t":"The number of random targets selected by the battle skill increases to 5."},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Increases the cap for attributes gained via passive skills to 35%, and increases the HP restoration cap to the target's 15%."}],"sk":{"p":{"n":"Mother of All Things","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Dragon God's Retribution","auto":{"parts":[],"hits":2,"ticks":null,"tgt":"single"}},"u":{"n":"Absolute Rule","auto":{"parts":[],"hits":2,"ticks":null,"tgt":"single"}}},"tm":null,"cap":{"t":"Increases all allies' HP by 30% in battles of Fey Meander and Trial Breakthrough.","mode":"all"}},"22220":{"id":22220,"n":"Berengar","r":"Legendary","el":"Necrosis","sc":"Support","cl":"Death Knight","race":"Undead","melee":true,"af":0.5,"season":"s1","b":{"hp":2814.0,"atk":94.6,"def":78.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":140.7,"atk":4.73,"def":3.9,"critRate":0.0,"critDmg":0.0,"acc":12.0,"res":12.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Allies in Chaos will be healed for 25% of their Max HP when the Chaos effect ends."},{"t":"Upon being hit by an enemy, reduces the hero's damage taken from that enemy by 1%, up to 15 stacks."},{"t":"The healing from Evil Aura is increased by 25%."},{"t":"HP% +30%","stats":{"hpPct":0.3}},{"t":"The duration of Chaos effect on all enemies is extended by 15s."}],"sk":{"p":{"n":"Evil Domain","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Horrendous Slash","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.0},"el":"Necrotic"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Hellfire Balls","auto":{"parts":[{"kind":"dmg","coef":{"atk":5.0,"hp":0.15},"el":"Necrotic"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":7.0,"bc":12.0,"uf":12.0,"uc":20.0,"bfB":9.0,"bcB":14.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-22"},"cap":{"t":"In Fey Meander and Trial Breakthrough battles, increases all allies' Max HP by 30%.","mode":"fey_trial"}},"20110":{"id":20110,"n":"Philto","r":"Legendary","el":"Radiance","sc":"Rally","cl":"Gunslinger","race":"Human","melee":false,"af":0.55,"season":"s1","b":{"hp":1582.2,"atk":104.4,"def":69.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":79.11,"atk":5.22,"def":3.47,"critRate":0.05,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Heals the hero by [+8%Max HP] after killing an enemy."},{"t":"When dealing damage to enemies with less than 50% HP, the hero gains 15% Damage Bonus."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Ignores 15% of the target's Defense."}],"sk":{"p":{"n":"Unintentional Combustion","auto":{"parts":[{"kind":"dmg","coef":{"atk":0.3},"el":"Radiant"}],"hits":1,"ticks":null,"tgt":"area"}},"b":{"n":"Barrage Flurries","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.2},"el":"Radiant"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Heatwave","auto":{"parts":[{"kind":"dmg","coef":{"atk":5.5},"el":"Radiant"},{"kind":"dmg","coef":{"atk":5.5},"el":"Radiant"},{"kind":"dmg","coef":{"atk":5.5},"el":"Radiant"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":13.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":19.0,"ucB":23.0,"src":"2023-09-22"},"cap":null},"20430":{"id":20430,"n":"Grishnaar","r":"Legendary","el":"Lightning","sc":"Support","cl":"Warrior","race":"Orc","melee":true,"af":0.38,"season":"s1","b":{"hp":2417.0,"atk":80.0,"def":87.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":120.85,"atk":4.0,"def":4.39,"critRate":0.0,"critDmg":0.0,"acc":12.0,"res":12.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"The amount of shield granted by the hero's battle skill is now based on the hero's HP, changing the shield to [+15%Max HP] shield."},{"t":"The hero grants 15% more shield."},{"t":"The Damage Reduction from the passive skill increases to 35%."},{"t":"DEF% +30%","stats":{"defPct":0.3}},{"t":"The hero's battle skill takes effect on an extra ally with the lowest HP."}],"sk":{"p":{"n":"Reflection","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"War Devotee","auto":{"parts":[{"kind":"shield","coef":{"thp":0.15},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Frenzy Massacre","auto":{"parts":[{"kind":"dmg","coef":{"def":5.5},"el":"Lightning"}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-22"},"cap":{"t":"Increases all allies' Defense by 30% in Grand Gladiator Arena battles.","mode":"arena"}},"21560":{"id":21560,"n":"Sutha","r":"Legendary","el":"Lightning","sc":"Dauntless","cl":"Warrior","race":"The Unstill","melee":true,"af":0.5,"season":"s1","b":{"hp":2452.6,"atk":95.2,"def":63.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":122.63,"atk":4.76,"def":3.17,"critRate":0.0,"critDmg":0.1,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Damage dealt to enemies with a shield is increased by 20%."},{"t":"The hero gains 15% Damage Bonus when their HP is higher than 85%."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Ignores 15% of the target's Defense."}],"sk":{"p":{"n":"Phantom Slash","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.0},"el":"Lightning"}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Piercing Slash","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.0},"el":"Lightning"}],"hits":2,"ticks":null,"tgt":"single"}},"u":{"n":"Mighty Mutilation","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.8},"el":"Lightning"}],"hits":5,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-22"},"cap":{"t":"Increases all allies' Attack Speed by 30% in dungeon battles.","mode":"dungeon"}},"20420":{"id":20420,"n":"Acilia","r":"Legendary","el":"Radiance","sc":"Support","cl":"Paladin","race":"Human","melee":true,"af":0.38,"season":"s1","b":{"hp":2615.0,"atk":77.0,"def":75.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":130.75,"atk":3.85,"def":3.76,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":24.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Reduces the hero's damage taken by 20% when under Control."},{"t":"When healing an ally with less than 50% HP, grants 1 stack of Recovery Over Time for 8.0s. This skill only takes effect once during a period."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"Resistance +50","stats":{"res":50.0}},{"t":"Has a 35% chance to get immune to the Control to be inflicted."}],"sk":{"p":{"n":"Divine Favor","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Glory of Platinum","auto":{"parts":[{"kind":"heal","coef":{"thp":0.1,"ench":12.0},"el":null}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Holy Light Descension","auto":{"parts":[{"kind":"heal","coef":{"thp":0.01,"ench":4.0},"el":null}],"hits":1,"ticks":10,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-22"},"cap":{"t":"Increases all allies' Resistance by 50.0 in Grand Gladiator Arena battles.","mode":"arena"}},"20660":{"id":20660,"n":"Garett","r":"Legendary","el":"Lightning","sc":"Dauntless","cl":"Warrior","race":"Human","melee":true,"af":0.5,"season":"s1","b":{"hp":2464.6,"atk":85.4,"def":73.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":123.23,"atk":4.27,"def":3.65,"critRate":0.025,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.05},"insp":[{"t":"Heals the hero by [+8%Max HP] after killing an enemy."},{"t":"When dealing damage to enemies with less than 50% HP, the hero gains 15% Damage Bonus."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Ignores 15% of the target's Defense."}],"sk":{"p":{"n":"Sobering Pain","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Bloodthirsty Lance","auto":{"parts":[{"kind":"other","coef":{"chp":0.02,"atk":0.0},"el":null},{"kind":"dmg","coef":{"atk":1.0,"chp":0.02},"el":"Lightning"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Brutal Thrust","auto":{"parts":[{"kind":"other","coef":{"chp":0.07},"el":null},{"kind":"dmg","coef":{"atk":1.14},"el":"Lightning"}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-22","stale":1},"cap":{"t":"Increases all allies' Crit Damage by 24% in all battles.","mode":"all"}},"20840":{"id":20840,"n":"Thelendor","r":"Legendary","el":"Radiance","sc":"Rally","cl":"Arcane Warrior","race":"Sheen Elf","melee":true,"af":0.38,"season":"s1","b":{"hp":2144.0,"atk":106.2,"def":67.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":107.2,"atk":5.31,"def":3.36,"critRate":0.05,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Heals the hero by [+8%Max HP] after killing an enemy."},{"t":"Each time the hero's ultimate skill is cast, increases its damage dealt by 3%, up to 5 stacks."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"The ultimate skill gains an extra permanent effect: summons a moonlight beam every 3s to strike 3 enemies at most; the particular moonlight beam is guaranteed to trigger the passive skill for 3 stacks of Defense Penetration."}],"sk":{"p":{"n":"General under the Moon","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Lunar Arrival","auto":{"parts":[{"kind":"dmg","coef":{"atk":4.5},"el":"Radiant"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Lunar Retribution","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.2},"el":"Radiant"}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":{"bf":5.0,"bc":10.0,"uf":13.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":19.0,"ucB":23.0,"src":"2023-09-22"},"cap":{"t":"Increases all allies' Attack by 30% in dungeon battles.","mode":"dungeon"}},"22330":{"id":22330,"n":"Elecebre","r":"Legendary","el":"Ice","sc":"Support","cl":"Sorcerer","race":"Nymph","melee":false,"af":0.4,"season":"s1","b":{"hp":2142.2,"atk":76.0,"def":84.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":107.11,"atk":3.8,"def":4.23,"critRate":0.0,"critDmg":0.0,"acc":24.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"The Blind inflicted with the passive skill will trigger every 15s in addition to once at the start of the combat."},{"t":"Increases the chance of the ultimate skill effect by 15%."},{"t":"The percentage of Resistance granted via the battle skill's shield is increased to 50%."},{"t":"Accuracy +50","stats":{"acc":50.0}},{"t":"Shield granted with the battle skill reduces the chance of an ally taking enemy critical hits by 30%."}],"sk":{"p":{"n":"Blinding Beauty","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.5},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"all"}},"b":{"n":"Nature's Blessing","auto":{"parts":[{"kind":"shield","coef":{"hp":0.3},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Siren Song","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"all"}}},"tm":{"bf":3.0,"bc":8.0,"uf":12.0,"uc":20.0,"bfB":5.0,"bcB":10.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-22"},"cap":{"t":"Increases all allies' Max HP by 24% in all battles.","mode":"all"}},"22310":{"id":22310,"n":"Ghul'ende","r":"Legendary","el":"Necrosis","sc":"Support","cl":"Sorcerer","race":"Fallen Soul","melee":false,"af":0.4,"season":"s1","b":{"hp":1565.6,"atk":90.8,"def":72.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":78.28,"atk":4.54,"def":3.61,"critRate":0.025,"critDmg":0.0,"acc":12.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Reduces the hero's damage taken by 20% when under Control."},{"t":"Upon being hit by an enemy, reduces the hero's damage taken from that enemy by 1%, up to 15 stacks."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Ignores 15% of the target's Defense."}],"sk":{"p":{"n":"Disorder","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Siphon","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.5},"el":"Necrotic"},{"kind":"heal","coef":{"atk":1.5},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Start Over","auto":{"parts":[{"kind":"dmg","coef":{"atk":7.2},"el":"Necrotic"},{"kind":"heal","coef":{"thp":0.1},"el":null},{"kind":"heal","coef":{"thp":0.04},"el":null}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":{"bf":5.0,"bc":10.0,"uf":14.0,"uc":24.0,"bfB":7.0,"bcB":12.0,"ufB":20.0,"ucB":27.0,"src":"2023-09-22"},"cap":{"t":"Increases all allies' Accuracy by 50.0 in Grand Gladiator Arena battles.","mode":"arena"}},"21970":{"id":21970,"n":"Caspar","r":"Legendary","el":"Fire","sc":"Wild","cl":"Sorcerer","race":"Human","melee":false,"af":0.5,"season":"s1","b":{"hp":1590.0,"atk":91.6,"def":76.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":79.5,"atk":4.58,"def":3.84,"critRate":0.05,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Damage dealt to enemies with a shield is increased by 20%."},{"t":"The hero gains 15% Damage Bonus when their HP is higher than 85%."},{"t":"Crit Rate +10%,Crit Damage +20%","stats":{"critRate":0.1,"critDmg":0.2}},{"t":"ATK% +30%","stats":{"atkPct":0.3}},{"t":"Ignores 15% of the target's Defense."}],"sk":{"p":{"n":"Real Performer","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Lucky Audience","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.0},"el":"Fire"}],"hits":3,"ticks":null,"tgt":"single"}},"u":{"n":"Grand Entrance","auto":{"parts":[{"kind":"dmg","coef":{"atk":6.0},"el":"Fire"},{"kind":"dmg","coef":{"atk":1.2},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-22"},"cap":{"t":"Increases all allies' Attack by 24% in all battles.","mode":"all"}},"22230":{"id":22230,"n":"Hochadir","r":"Legendary","el":"Ice","sc":"Frost","cl":"Death Knight","race":"Undead","melee":true,"af":0.5,"season":"s1","b":{"hp":2184.4,"atk":89.6,"def":71.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":109.22,"atk":4.48,"def":3.59,"critRate":0.025,"critDmg":0.05,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":"Reduces the hero's damage taken by 20% when under Control."},{"t":"When inflicting a debuff, there is a 70% chance of extending its duration by 30%."},{"t":"Skill Haste +30","stats":{"haste":30.0}},{"t":"Accuracy +50","stats":{"acc":50.0}},{"t":"Buffs granted with the battle skill cannot be dispelled."}],"sk":{"p":{"n":"Frostbite","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Frostfall","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.6},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Frost Reign","auto":{"parts":[{"kind":"dmg","coef":{"atk":5.0},"el":"Cold"},{"kind":"dmg","coef":{"atk":5.0},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":{"bf":5.0,"bc":10.0,"uf":9.0,"uc":16.0,"bfB":7.0,"bcB":12.0,"ufB":15.0,"ucB":19.0,"src":"2023-09-22"},"cap":null},"22620":{"id":22620,"n":"Mog","r":"Epic","el":"Ice","sc":"Support","cl":"Warrior","race":"Orc","melee":true,"af":0.4,"season":"s8","b":{"hp":2190.4,"atk":78.4,"def":61.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":109.52,"atk":3.92,"def":3.08,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"For the Tribe","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Frostaxe Smash","auto":{"parts":[{"kind":"other","coef":{"def":2.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Deep Freeze","auto":{"parts":[{"kind":"other","coef":{"def":5.5},"el":null}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":null,"cap":null},"22570":{"id":22570,"n":"Gotton","r":"Epic","el":"Necrosis","sc":"Support","cl":"Rogue","race":"Goblin","melee":true,"af":0.55,"season":"s7","b":{"hp":1522.0,"atk":80.4,"def":67.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":76.1,"atk":4.02,"def":3.39,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Can't Touch Me!","auto":{"parts":[{"kind":"shield","coef":{"hp":0.2},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Got You!","auto":{"parts":[{"kind":"other","coef":{"atk":3.0},"el":"Necrotic"}],"hits":2,"ticks":null,"tgt":"single"}},"u":{"n":"A Share for Everyone!","auto":{"parts":[{"kind":"other","coef":{"atk":1.5},"el":"Necrotic"}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":null,"cap":null},"21610":{"id":21610,"n":"Fihrah","r":"Epic","el":"Fire","sc":"Support","cl":"Marksman","race":"Orc","melee":false,"af":0.55,"season":"s6","b":{"hp":1595.2,"atk":79.0,"def":70.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":79.76,"atk":3.95,"def":3.54,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":18.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Armor-clad","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"All In","auto":{"parts":[{"kind":"other","coef":{"atk":3.5},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Wildfire","auto":{"parts":[{"kind":"other","coef":{"atk":6.5},"el":null}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":15.0,"ucB":23.0,"src":"2023-09-21"},"cap":{"t":"Increases all allies' Resistance by 30.0 in all battles.","mode":"all"}},"22840":{"id":22840,"n":"Baelvernal","r":"Epic","el":"Necrosis","sc":"Support","cl":"Sorcerer","race":"Merfolk","melee":false,"af":0.55,"season":"s4","b":{"hp":1523.8,"atk":85.6,"def":67.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":76.19,"atk":4.28,"def":3.38,"critRate":0.0,"critDmg":0.0,"acc":18.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Smoke and Mirrors","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Woozy Dizzy","auto":{"parts":[{"kind":"other","coef":{"atk":1.6},"el":"Necrotic"}],"hits":6,"ticks":null,"tgt":"single"}},"u":{"n":"Come On Strong","auto":{"parts":[{"kind":"other","coef":{"atk":2.2},"el":"Necrotic"}],"hits":3,"ticks":null,"tgt":"area"}}},"tm":null,"cap":null},"22540":{"id":22540,"n":"Tarulla","r":"Epic","el":"Radiance","sc":"Support","cl":"Deathbringer","race":"Tigerfolk","melee":true,"af":0.5,"season":"s4","b":{"hp":2242.4,"atk":74.0,"def":63.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":112.12,"atk":3.7,"def":3.15,"critRate":0.0,"critDmg":0.0,"acc":9.0,"res":9.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Another Mug","auto":{"parts":[{"kind":"other","coef":{"thp":0.1,"ench":12.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Fluttering Peplum","auto":{"parts":[{"kind":"other","coef":{"atk":3.2},"el":null}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Elegant Steps","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}}},"tm":null,"cap":null},"20150":{"id":20150,"n":"Araces","r":"Epic","el":"Fire","sc":"Burn","cl":"Warrior","race":"Blazeland Lizardfolk","melee":true,"af":0.5,"season":"s4","b":{"hp":2033.8,"atk":85.6,"def":63.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":101.69,"atk":4.28,"def":3.17,"critRate":0.02,"critDmg":0.04,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Last Lineage","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Fire Shell","auto":{"parts":[{"kind":"shield","coef":{"atk":2.5},"el":null},{"kind":"other","coef":{"atk":0.6},"el":null}],"hits":1,"ticks":5,"tgt":"single"}},"u":{"n":"Flame Domain","auto":{"parts":[{"kind":"other","coef":{"atk":4.75},"el":null},{"kind":"other","coef":{"atk":2.2},"el":null}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":{"t":"Increases all allies' Crit Damage by 18% in all battles.","mode":"all"}},"21850":{"id":21850,"n":"Kyrza","r":"Epic","el":"Necrosis","sc":"Support","cl":"Deathbringer","race":"Swamp Lizardfolk","melee":true,"af":0.5,"season":"s4","b":{"hp":2138.6,"atk":77.6,"def":65.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":106.93,"atk":3.88,"def":3.29,"critRate":0.0,"critDmg":0.0,"acc":18.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Turn the Tides","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Violent Breakthrough","auto":{"parts":[{"kind":"other","coef":{"atk":3.1},"el":"Necrotic"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Greedy Plunder","auto":{"parts":[{"kind":"other","coef":{"atk":3.0},"el":"Necrotic"}],"hits":3,"ticks":null,"tgt":"single"}}},"tm":null,"cap":null},"21440":{"id":21440,"n":"Seidic","r":"Epic","el":"Ice","sc":"Ice Blast","cl":"Marksman","race":"Gnome","melee":false,"af":0.5,"season":"s4","b":{"hp":1548.4,"atk":84.6,"def":66.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":77.42,"atk":4.23,"def":3.32,"critRate":0.02,"critDmg":0.04,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Energy Canister","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Magic Crystal Arrow","auto":{"parts":[{"kind":"dmg","coef":{"atk":0.5},"el":null}],"hits":3,"ticks":null,"tgt":"single"}},"u":{"n":"Mineral Survey","auto":{"parts":[{"kind":"other","coef":{"atk":7.2},"el":null}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":null},"22120":{"id":22120,"n":"Trissa","r":"Epic","el":"Poison","sc":"Corrosion","cl":"Warrior","race":"Tigerfolk","melee":true,"af":0.5,"season":"s4","b":{"hp":2199.0,"atk":83.0,"def":66.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":109.95,"atk":4.15,"def":3.3,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Poison Amplification","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Agile Moves","auto":{"parts":[{"kind":"other","coef":{"atk":4.0},"el":null}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Poisoned Dual Blades","auto":{"parts":[{"kind":"other","coef":{"atk":5.0},"el":null},{"kind":"other","coef":{"atk":1.5},"el":null}],"hits":2,"ticks":null,"tgt":"area"}}},"tm":null,"cap":null},"22140":{"id":22140,"n":"Ashqar","r":"Epic","el":"Fire","sc":"Support","cl":"Warrior","race":"Tigerfolk","melee":true,"af":0.38,"season":"s4","b":{"hp":2249.6,"atk":77.2,"def":62.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":112.48,"atk":3.86,"def":3.14,"critRate":0.0,"critDmg":0.0,"acc":9.0,"res":9.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Tiger Roar","auto":{"parts":[{"kind":"heal","coef":{"hp":0.15},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Searing Heat","auto":{"parts":[{"kind":"other","coef":{"atk":3.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Intrepid Charge","auto":{"parts":[{"kind":"other","coef":{"atk":6.0,"hp":0.1},"el":null}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":{"t":"Increases all allies' Attack by 18% in all battles.","mode":"all"}},"22850":{"id":22850,"n":"Pearl","r":"Epic","el":"Poison","sc":"Support","cl":"Sorcerer","race":"Merfolk","melee":false,"af":0.55,"season":"s4","b":{"hp":1542.0,"atk":79.2,"def":70.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":77.1,"atk":3.96,"def":3.52,"critRate":0.0,"critDmg":0.0,"acc":18.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Lucubration","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Neurotoxin","auto":{"parts":[{"kind":"other","coef":{"atk":4.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Seaweed Extract","auto":{"parts":[{"kind":"other","coef":{"atk":7.15},"el":null}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":null},"21340":{"id":21340,"n":"Mera","r":"Epic","el":"Necrosis","sc":"Summon","cl":"Summoner","race":"Sheen Elf","melee":false,"af":0.55,"season":"s4","b":{"hp":2132.4,"atk":79.2,"def":64.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":106.62,"atk":3.96,"def":3.24,"critRate":0.04,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Phantom Evocation","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Shadow Onslaught","auto":{"parts":[{"kind":"other","coef":{"atk":3.6},"el":"Necrotic"},{"kind":"other","coef":{"atk":3.6},"el":"Necrotic"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Moonlit Howl","auto":{"parts":[{"kind":"other","coef":{"atk":3.5},"el":"Necrotic"},{"kind":"other","coef":{"atk":3.5},"el":"Necrotic"}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":null,"cap":{"t":"Increases all allies' Attack by 18% in all battles.","mode":"all"}},"22520":{"id":22520,"n":"Dielke","r":"Epic","el":"Radiance","sc":"Rally","cl":"Marksman","race":"Ridge Halfling","melee":false,"af":0.55,"season":"s4","b":{"hp":1575.6,"atk":86.6,"def":72.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":78.78,"atk":4.33,"def":3.62,"critRate":0.0,"critDmg":0.08,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Marksman","auto":{"parts":[{"kind":"other","coef":{"atk":0.0},"el":null}],"hits":1,"ticks":null,"tgt":"area"}},"b":{"n":"Arrow's Gleam","auto":{"parts":[{"kind":"other","coef":{"atk":3.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Hawkeye Hunt","auto":{"parts":[{"kind":"other","coef":{"atk":1.5},"el":null}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":null,"cap":null},"10002":{"id":10002,"n":"Child of Chaos","r":"Epic","el":"Necrosis","sc":"Support","cl":null,"race":null,"melee":false,"af":0.4,"season":"s4","b":{"hp":27500.0,"atk":2500.0,"def":131.2,"critRate":0.0,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":0.0,"atk":0.0,"def":0.0,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"u":{"n":"Blade Tempest","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}}},"tm":null,"cap":null},"22550":{"id":22550,"n":"Giacosa","r":"Epic","el":"Necrosis","sc":"Shadow","cl":"Warlock","race":"Lizardfolk","melee":true,"af":0.5,"season":"s4","b":{"hp":2100.0,"atk":85.0,"def":68.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":105.0,"atk":4.25,"def":3.4,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"The Show Begins","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Miracle Moment","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.0},"el":"Derivative"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Perfect Finale","auto":{"parts":[{"kind":"dmg","coef":{"atk":4.5},"el":"Derivative"}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":null,"cap":null},"21900":{"id":21900,"n":"Pargu","r":"Epic","el":"Ice","sc":"Support","cl":"Priest","race":"Valley Minotaur","melee":false,"af":0.4,"season":"s4","b":{"hp":1655.2,"atk":79.0,"def":70.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":82.76,"atk":3.95,"def":3.5,"critRate":0.0,"critDmg":0.0,"acc":18.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Aura Suppression","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Frozen Roar","auto":{"parts":[{"kind":"other","coef":{"atk":4.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Crippled Morale","auto":{"parts":[{"kind":"other","coef":{"atk":3.0},"el":null}],"hits":3,"ticks":null,"tgt":"single"}}},"tm":{"uf":12.0,"uc":20.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21"},"cap":null},"22160":{"id":22160,"n":"Cervinia","r":"Epic","el":"Lightning","sc":"Support","cl":"Deathbringer","race":"Deep Elf","melee":true,"af":0.38,"season":"s4","b":{"hp":2249.6,"atk":77.2,"def":62.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":112.48,"atk":3.86,"def":3.14,"critRate":0.0,"critDmg":0.0,"acc":9.0,"res":9.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Shadowmeld","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Shadow Leap","auto":{"parts":[{"kind":"other","coef":{"atk":3.0},"el":null}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Shadow's Pursuit","auto":{"parts":[{"kind":"other","coef":{"atk":2.0},"el":null}],"hits":3,"ticks":null,"tgt":"area"}}},"tm":null,"cap":null},"22100":{"id":22100,"n":"Balsaazer","r":"Epic","el":"Lightning","sc":"Thunderbolt","cl":"Fighter","race":"Tigerfolk","melee":true,"af":0.55,"season":"s4","b":{"hp":1666.0,"atk":82.0,"def":69.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":83.3,"atk":4.1,"def":3.45,"critRate":0.04,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Chain Reaction","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"all"}},"b":{"n":"Glory of the Guard","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Impious Punishment","auto":{"parts":[{"kind":"other","coef":{"atk":7.0},"el":null}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":{"t":"Increases all allies' Crit Damage by 18% in all battles.","mode":"all"}},"21530":{"id":21530,"n":"Deeno","r":"Epic","el":"Poison","sc":"Toxin","cl":"Marksman","race":"Gnome","melee":false,"af":0.55,"season":"s4","b":{"hp":1508.0,"atk":84.8,"def":71.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":75.4,"atk":4.24,"def":3.56,"critRate":0.0,"critDmg":0.0,"acc":18.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Poisoned Arrow","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Arrow Chain","auto":{"parts":[{"kind":"other","coef":{"atk":1.2},"el":null}],"hits":3,"ticks":null,"tgt":"single"}},"u":{"n":"One by One","auto":{"parts":[{"kind":"other","coef":{"atk":5.0},"el":null},{"kind":"dmg","coef":{"atk":0.2},"el":"Derivative"}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":null,"cap":{"t":"Increases all allies' Enlightenment by 36.0 in all battles.","mode":"all"}},"21350":{"id":21350,"n":"Ghellid","r":"Epic","el":"Poison","sc":"Support","cl":"Rogue","race":"Goblin","melee":true,"af":0.55,"season":"s4","b":{"hp":2115.8,"atk":75.6,"def":69.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":105.79,"atk":3.78,"def":3.45,"critRate":0.0,"critDmg":0.0,"acc":9.0,"res":9.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Special Poisonous Herb","auto":{"parts":[{"kind":"other","coef":{"atk":0.5},"el":null}],"hits":1,"ticks":null,"tgt":"area"}},"b":{"n":"Dizzy Spell","auto":{"parts":[{"kind":"other","coef":{"atk":4.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Seeing Stars","auto":{"parts":[{"kind":"other","coef":{"atk":7.2},"el":null}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":{"t":"Increases Accuracy for all allies by 40.0 in Fey Meander and Trial Breakthrough battles.","mode":"fey_trial"}},"22720":{"id":22720,"n":"Thalorian","r":"Epic","el":"Lightning","sc":"Dauntless","cl":"Warrior","race":"Wood Elf","melee":true,"af":0.5,"season":"s4","b":{"hp":2140.8,"atk":79.6,"def":77.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":107.04,"atk":3.98,"def":3.89,"critRate":0.04,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Dual Wielding","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Lightning Speed","auto":{"parts":[{"kind":"other","coef":{"atk":2.2},"el":null}],"hits":2,"ticks":null,"tgt":"single"}},"u":{"n":"Thunderbolt Followup","auto":{"parts":[{"kind":"other","coef":{"atk":2.1},"el":null}],"hits":4,"ticks":null,"tgt":"single"}}},"tm":null,"cap":{"t":"In Fey Meander and Trial Breakthrough battles, increases all allies' Attack by 24%.","mode":"fey_trial"}},"22580":{"id":22580,"n":"Nitchik","r":"Epic","el":"Radiance","sc":"Aura","cl":"Marksman","race":"Ratfolk","melee":false,"af":0.4,"season":"s4","b":{"hp":1841.4,"atk":89.8,"def":74.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":92.07,"atk":4.49,"def":3.72,"critRate":0.05,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Sycophantic Rat","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Model Rat","auto":{"parts":[{"kind":"other","coef":{"atk":1.5,"hp":0.1},"el":null}],"hits":1,"ticks":null,"tgt":"all"}},"u":{"n":"Cover the Rear!","auto":{"parts":[{"kind":"other","coef":{"atk":2.5,"hp":0.15},"el":null}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":null},"23550":{"id":23550,"n":"Bargarn","r":"Epic","el":"Radiance","sc":"Support","cl":"Guard","race":"Dwarf","melee":true,"af":0.5,"season":"s4","b":{"hp":1917.0,"atk":78.0,"def":69.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":95.85,"atk":3.9,"def":3.45,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Unyielding Sincerity","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"area"}},"b":{"n":"Shadowforged Light","auto":{"parts":[{"kind":"other","coef":{"atk":3.0},"el":null}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"King of the Forge","auto":{"parts":[{"kind":"other","coef":{"atk":5.0},"el":null}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":null,"cap":null},"22920":{"id":22920,"n":"Varathas","r":"Epic","el":"Fire","sc":"Burn","cl":"Warrior","race":"Werewolf","melee":true,"af":0.55,"season":"s4","b":{"hp":1851.2,"atk":79.4,"def":64.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":92.56,"atk":3.97,"def":3.22,"critRate":0.04,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Fiery Smoke","auto":{"parts":[{"kind":"other","coef":{"atk":2.0},"el":null}],"hits":1,"ticks":null,"tgt":"area"}},"b":{"n":"Loyal Claw","auto":{"parts":[{"kind":"other","coef":{"atk":2.4},"el":null}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Focused Strike","auto":{"parts":[{"kind":"other","coef":{"atk":7.0},"el":null}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":null},"23510":{"id":23510,"n":"Molothorn","r":"Epic","el":"Ice","sc":"Support","cl":"Rogue","race":"Deep Elf","melee":false,"af":0.55,"season":"s4","b":{"hp":1509.4,"atk":78.0,"def":69.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":75.47,"atk":3.9,"def":3.47,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":16.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Clever Ploy","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Leader Hunt","auto":{"parts":[{"kind":"other","coef":{"atk":3.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Temporary Alliance","auto":{"parts":[{"kind":"other","coef":{"atk":7.0},"el":null},{"kind":"shield","coef":{"thp":0.1},"el":null}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":null,"cap":{"t":"Increases all allies' Attack by 24% in all battles.","mode":"all"}},"21830":{"id":21830,"n":"Dargo","r":"Epic","el":"Poison","sc":"Corrosion","cl":"Shaman","race":"Swamp Lizardfolk","melee":false,"af":0.38,"season":"s3","b":{"hp":1528.6,"atk":85.4,"def":69.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":76.43,"atk":4.27,"def":3.46,"critRate":0.04,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Silent Affliction","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Exotic Venom","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Medicine Test","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}}},"tm":null,"cap":{"t":"In Fey Meander and Trial Breakthrough battles, increases all allies' Attack by .","mode":"fey_trial"}},"21990":{"id":21990,"n":"Chitter","r":"Epic","el":"Necrosis","sc":"Shadow","cl":"Scourge","race":"Ratfolk","melee":true,"af":0.5,"season":"s3","b":{"hp":2160.2,"atk":79.2,"def":62.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":108.01,"atk":3.96,"def":3.13,"critRate":0.04,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Heart of Treachery","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Nickel and Dime","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Merciless","auto":{"parts":[],"hits":3,"ticks":null,"tgt":"area"}}},"tm":null,"cap":{"t":"Increases all allies' Enlightenment by  in all battles.","mode":"all"}},"22260":{"id":22260,"n":"Taldie","r":"Epic","el":"Necrosis","sc":"Shadow","cl":"Wizard","race":"The Unstill","melee":false,"af":0.4,"season":"s3","b":{"hp":1522.4,"atk":83.4,"def":69.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":76.12,"atk":4.17,"def":3.48,"critRate":0.02,"critDmg":0.04,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Ally of Darkness","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Envoy of Nightfall","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Tide of Shadow","auto":{"parts":[],"hits":3,"ticks":null,"tgt":"area"}}},"tm":null,"cap":{"t":"Increases all allies' Defense by  in Grand Gladiator Arena battles.","mode":"arena"}},"20880":{"id":20880,"n":"Narzilla","r":"Epic","el":"Radiance","sc":"Aura","cl":"Ranger","race":"Sheen Elf","melee":false,"af":0.38,"season":"s3","b":{"hp":1524.2,"atk":81.4,"def":69.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":76.21,"atk":4.07,"def":3.48,"critRate":0.04,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Sing Your Heart Out","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Lightbreaker Arrow","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Archery Show","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}}},"tm":null,"cap":{"t":"Increases all allies' Attack by  in all battles.","mode":"all"}},"21590":{"id":21590,"n":"Gragrir","r":"Epic","el":"Poison","sc":"Corrosion","cl":"Warrior","race":"Orc","melee":true,"af":0.38,"season":"s3","b":{"hp":2131.6,"atk":76.6,"def":62.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":106.58,"atk":3.83,"def":3.13,"critRate":0.0,"critDmg":0.08,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Crazy Bravery","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Affliction Slash","auto":{"parts":[],"hits":2,"ticks":null,"tgt":"single"}},"u":{"n":"Eradication","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":null},"22820":{"id":22820,"n":"Theohein","r":"Epic","el":"Radiance","sc":"Aura","cl":"Demolitionist","race":"Gnome","melee":false,"af":0.55,"season":"s3","b":{"hp":1528.4,"atk":83.0,"def":69.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":76.42,"atk":4.15,"def":3.49,"critRate":0.02,"critDmg":0.04,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"High Purity Extraction","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Small-scale Testing","auto":{"parts":[],"hits":3,"ticks":null,"tgt":"area"}},"u":{"n":"Formal Bombing","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":{"t":"Increases all allies' Attack by  in Grand Gladiator Arena battles.","mode":"arena"}},"21360":{"id":21360,"n":"Tatoth","r":"Epic","el":"Necrosis","sc":"Shadow","cl":"Scourge","race":"Goblin","melee":false,"af":0.55,"season":"s3","b":{"hp":1465.6,"atk":85.6,"def":67.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":73.28,"atk":4.28,"def":3.39,"critRate":0.02,"critDmg":0.04,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Malicious Joy","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"all"}},"b":{"n":"Bouncing Bomb","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Spikeball Mayhem","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":{"t":"In Fey Meander and Trial Breakthrough battles, increases all allies' Attack by .","mode":"fey_trial"}},"21190":{"id":21190,"n":"Careth","r":"Epic","el":"Radiance","sc":"Aura","cl":"Wizard","race":"Dwarf","melee":false,"af":0.55,"season":"s3","b":{"hp":1486.6,"atk":84.2,"def":66.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":74.33,"atk":4.21,"def":3.31,"critRate":0.02,"critDmg":0.05,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Mark of Courage","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Fearless","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Ancestral Power","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":{"t":"Increases Crit Damage for all allies by  in Fey Meander and Trial Breakthrough battles.","mode":"fey_trial"}},"21510":{"id":21510,"n":"Gegnu","r":"Epic","el":"Poison","sc":"Corrosion","cl":"Warrior","race":"Deep Gnome","melee":true,"af":0.5,"season":"s3","b":{"hp":2128.2,"atk":77.4,"def":69.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":106.41,"atk":3.87,"def":3.46,"critRate":0.04,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Fatal Curse","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"area"}},"b":{"n":"Spike Trap","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Battering Ram","auto":{"parts":[],"hits":3,"ticks":null,"tgt":"area"}}},"tm":null,"cap":null},"20910":{"id":20910,"n":"Nessa","r":"Epic","el":"Radiance","sc":"Support","cl":"Arcane Warrior","race":"Sheen Elf","melee":true,"af":0.5,"season":"s3","b":{"hp":2129.8,"atk":84.2,"def":65.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":106.49,"atk":4.21,"def":3.27,"critRate":0.0,"critDmg":0.0,"acc":18.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Leverage","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Twilight Strike","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Glaring Steps","auto":{"parts":[],"hits":2,"ticks":null,"tgt":"single"}}},"tm":{"bf":7.0,"bc":12.0,"uf":12.0,"uc":20.0,"bfB":9.0,"bcB":14.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21"},"cap":{"t":"Increases all allies' Attack by  in all battles.","mode":"all"}},"22590":{"id":22590,"n":"Vex","r":"Epic","el":"Lightning","sc":"Thunderbolt","cl":"Scourge","race":"Ratfolk","melee":true,"af":0.5,"season":"s2","b":{"hp":2062.4,"atk":82.2,"def":62.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":103.12,"atk":4.11,"def":3.13,"critRate":0.02,"critDmg":0.0,"acc":9.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Nimble Steps","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Illusion Trap","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.1},"el":"Lightning"}],"hits":2,"ticks":null,"tgt":"single"}},"u":{"n":"Traceless Rat","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.9},"el":"Lightning"}],"hits":3,"ticks":null,"tgt":"single"}}},"tm":null,"cap":{"t":"Increases all allies' Accuracy by 30.0 in all battles.","mode":"all"}},"21280":{"id":21280,"n":"Lyle","r":"Epic","el":"Fire","sc":"Burn","cl":"Wizard","race":"Ridge Halfling","melee":false,"af":0.4,"season":"s2","b":{"hp":1569.0,"atk":83.2,"def":69.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":78.45,"atk":4.16,"def":3.48,"critRate":0.04,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Fire Frenzy","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"all"}},"b":{"n":"Screaming Fire Spirit","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.0},"el":"Fire"}],"hits":5,"ticks":null,"tgt":"area"}},"u":{"n":"Fire Booster","auto":{"parts":[{"kind":"dmg","coef":{"atk":5.5},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":{"t":"Increases all allies' Accuracy by 30.0 in all battles.","mode":"all"}},"21180":{"id":21180,"n":"Gerthin","r":"Epic","el":"Ice","sc":"Ice Blast","cl":"Warrior","race":"Dwarf","melee":true,"af":0.5,"season":"s2","b":{"hp":2145.4,"atk":85.4,"def":64.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":107.27,"atk":4.27,"def":3.21,"critRate":0.04,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Crystal Trigger","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Heart of Frost","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.9},"el":"Cold"}],"hits":2,"ticks":null,"tgt":"single"}},"u":{"n":"Frozen Moment","auto":{"parts":[{"kind":"dmg","coef":{"atk":7.8},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":null,"cap":{"t":"Increases all allies' Attack by 24% in dungeon battles.","mode":"dungeon"}},"22080":{"id":22080,"n":"Nadja","r":"Epic","el":"Ice","sc":"Ice Blast","cl":"Monk","race":"Tigerfolk","melee":false,"af":0.55,"season":"s2","b":{"hp":1563.6,"atk":87.6,"def":69.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":78.18,"atk":4.38,"def":3.45,"critRate":0.04,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Ice Outburst","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Piercing Icelance","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.75},"el":"Cold"},{"kind":"dmg","coef":{"thp":0.04},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Ice Volley","auto":{"parts":[{"kind":"dmg","coef":{"atk":6.0},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":null,"cap":{"t":"Increases all allies' Crit Damage by 18% in all battles.","mode":"all"}},"23270":{"id":23270,"n":"Volthug","r":"Epic","el":"Lightning","sc":"Support","cl":"Warrior","race":"Orc","melee":true,"af":0.55,"season":"s2","b":{"hp":1999.0,"atk":78.8,"def":61.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":99.95,"atk":3.94,"def":3.07,"critRate":0.0,"critDmg":0.0,"acc":18.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Lone Wanderer","auto":{"parts":[],"hits":10,"ticks":null,"tgt":"single"}},"b":{"n":"Indomitable Will","auto":{"parts":[{"kind":"dmg","coef":{"def":3.0},"el":"Lightning"},{"kind":"shield","coef":{"hp":0.15},"el":null}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Who Dares Stop Me","auto":{"parts":[{"kind":"dmg","coef":{"def":2.5},"el":"Lightning"}],"hits":3,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21"},"cap":{"t":"In Fey Meander and Trial Breakthrough battles, increases all allies' Resistance by 40.0.","mode":"fey_trial"}},"21540":{"id":21540,"n":"Manda","r":"Epic","el":"Lightning","sc":"Thunderbolt","cl":"Summoner","race":"Gnome","melee":false,"af":0.4,"season":"s2","b":{"hp":1529.2,"atk":80.2,"def":69.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":76.46,"atk":4.01,"def":3.48,"critRate":0.02,"critDmg":0.04,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Flanking Maneuver","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Crystal Cannon","auto":{"parts":[{"kind":"heal","coef":{"thp":0.5},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Overclock","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}}},"tm":null,"cap":null},"22380":{"id":22380,"n":"Eirnin","r":"Epic","el":"Fire","sc":"Burn","cl":"Gunslinger","race":"Aerial Dwarf","melee":false,"af":0.55,"season":"s2","b":{"hp":1548.0,"atk":81.6,"def":69.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":77.4,"atk":4.08,"def":3.46,"critRate":0.04,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Forward Planning","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Surprise Raid","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.65},"el":"Fire"}],"hits":4,"ticks":null,"tgt":"area"}},"u":{"n":"Forceful Raid","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.0},"el":"Fire"},{"kind":"dmg","coef":{"atk":1.25},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":null},"20850":{"id":20850,"n":"Hirvolm","r":"Epic","el":"Lightning","sc":"Thunderbolt","cl":"Arcane Warrior","race":"Sheen Elf","melee":true,"af":0.5,"season":"s2","b":{"hp":2131.4,"atk":83.0,"def":62.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":106.57,"atk":4.15,"def":3.13,"critRate":0.0,"critDmg":0.0,"acc":12.0,"res":0.0,"ench":10.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Electric Induction","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Lightning Impact","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.2},"el":"Lightning"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Thundrous Moment","auto":{"parts":[{"kind":"dmg","coef":{"atk":4.0},"el":"Lightning"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":null},"20020":{"id":20020,"n":"Zraacs","r":"Epic","el":"Fire","sc":"Burn","cl":"Demolitionist","race":"Goblin","melee":false,"af":0.55,"season":"s2","b":{"hp":1551.6,"atk":79.6,"def":69.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":77.58,"atk":3.98,"def":3.45,"critRate":0.0,"critDmg":0.0,"acc":18.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Joy of the Torturer","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Arcane Grenade","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.2},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Mystical Turret","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":null},"22110":{"id":22110,"n":"Bleddyn","r":"Epic","el":"Ice","sc":"Ice Blast","cl":"Ranger","race":"Human","melee":false,"af":0.5,"season":"s2","b":{"hp":1521.2,"atk":82.0,"def":68.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":76.06,"atk":4.1,"def":3.4,"critRate":0.02,"critDmg":0.04,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Ranger Spirit","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Tundra Archery","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.9},"el":"Cold"}],"hits":2,"ticks":null,"tgt":"single"}},"u":{"n":"Winter Hunter","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.6},"el":"Cold"}],"hits":3,"ticks":null,"tgt":"single"}}},"tm":null,"cap":{"t":"Increases all allies' Max HP by 18% in all battles.","mode":"all"}},"21290":{"id":21290,"n":"Rowena","r":"Epic","el":"Ice","sc":"Frost","cl":"Ranger","race":"Ridge Halfling","melee":false,"af":0.4,"season":"s1","b":{"hp":1509.6,"atk":87.4,"def":69.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":75.48,"atk":4.37,"def":3.45,"critRate":0.02,"critDmg":0.04,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Piercing Cold","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Frost Reaping","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.65},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Reaping Frostbolts","auto":{"parts":[{"kind":"dmg","coef":{"atk":5.6},"el":"Cold"},{"kind":"dmg","coef":{"atk":8.0},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21"},"cap":null},"23280":{"id":23280,"n":"Nathaniel","r":"Epic","el":"Lightning","sc":"Support","cl":"Wizard","race":"Human","melee":false,"af":0.55,"season":"s1","b":{"hp":1509.4,"atk":78.0,"def":69.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":75.47,"atk":3.9,"def":3.47,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":16.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Slumber's Breath","auto":{"parts":[{"kind":"heal","coef":{"hp":0.05},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Guiding Light","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Dawning Light","auto":{"parts":[{"kind":"dmg","coef":{"atk":5.5},"el":"Lightning"},{"kind":"shield","coef":{"thp":0.1,"ench":18.0},"el":null}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21"},"cap":{"t":"Increases all allies' Max HP by 18% in all battles.","mode":"all"}},"21620":{"id":21620,"n":"Rava","r":"Epic","el":"Ice","sc":"Frost","cl":"Shaman","race":"Orc","melee":false,"af":0.4,"season":"s1","b":{"hp":1511.8,"atk":80.2,"def":69.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":75.59,"atk":4.01,"def":3.46,"critRate":0.02,"critDmg":0.0,"acc":9.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Icy Echo","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"all"}},"b":{"n":"Permeating Coldness","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.6},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Chill Formation","auto":{"parts":[{"kind":"dmg","coef":{"atk":0.5},"el":"Cold"},{"kind":"dmg","coef":{"atk":3.6},"el":"Cold"}],"hits":1,"ticks":7,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21"},"cap":{"t":"Increases all allies' Crit Damage by 18% in all battles.","mode":"all"}},"20360":{"id":20360,"n":"Brody","r":"Epic","el":"Fire","sc":"Support","cl":"Rogue","race":"Human","melee":true,"af":0.5,"season":"s1","b":{"hp":2358.6,"atk":78.0,"def":66.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":117.93,"atk":3.9,"def":3.34,"critRate":0.0,"critDmg":0.0,"acc":9.0,"res":9.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Raider's Protection","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Raider's Scimitar","auto":{"parts":[{"kind":"dmg","coef":{"def":3.3},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Raider's Fury","auto":{"parts":[{"kind":"dmg","coef":{"def":6.0},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"uf":12.0,"uc":20.0,"bfB":7.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21"},"cap":null},"21580":{"id":21580,"n":"Naguk","r":"Epic","el":"Lightning","sc":"Support","cl":"Warrior","race":"Orc","melee":true,"af":0.38,"season":"s1","b":{"hp":2115.4,"atk":80.0,"def":63.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":105.77,"atk":4.0,"def":3.18,"critRate":0.0,"critDmg":0.0,"acc":9.0,"res":9.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Lightning Ground","auto":{"parts":[{"kind":"dmg","coef":{"atk":0.32},"el":"Lightning"}],"hits":10,"ticks":null,"tgt":"area"}},"b":{"n":"Lightning Blessing","auto":{"parts":[{"kind":"shield","coef":{"hp":0.1},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Rolling Thunder","auto":{"parts":[{"kind":"dmg","coef":{"atk":5.2},"el":"Lightning"}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21"},"cap":null},"21050":{"id":21050,"n":"Thia","r":"Epic","el":"Necrosis","sc":"Support","cl":"Ranger","race":"Deep Elf","melee":false,"af":0.55,"season":"s1","b":{"hp":1670.6,"atk":80.8,"def":72.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":83.53,"atk":4.04,"def":3.61,"critRate":0.0,"critDmg":0.0,"acc":18.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Stealth Instinct","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Protection of Darkness","auto":{"parts":[{"kind":"other","coef":{"atk":2.0,"ench":20.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Deadly Accuracy","auto":{"parts":[{"kind":"dmg","coef":{"atk":8.5},"el":"Necrotic"}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":12.0,"uf":12,"uc":18,"bfB":5.0,"bcB":12.0,"ufB":15.0,"ucB":19.0,"src":"reddit comment 2025-08-08: Vinyara/Thia ~12/18 s fully scrolled"},"cap":{"t":"Increases all allies' Accuracy by 40.0 in dungeon battles.","mode":"dungeon"}},"23210":{"id":23210,"n":"Catherine","r":"Epic","el":"Radiance","sc":"Support","cl":"Wizard","race":"Human","melee":false,"af":0.55,"season":"s1","b":{"hp":1521.2,"atk":71.8,"def":69.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":76.06,"atk":3.59,"def":3.45,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":16.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Glory's Blessing","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Aegis of Perseverance","auto":{"parts":[{"kind":"heal","coef":{"thp":0.15,"ench":25.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Unfading Radiance","auto":{"parts":[{"kind":"heal","coef":{"thp":0.15,"ench":25.0},"el":null}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21"},"cap":null},"20130":{"id":20130,"n":"Horace","r":"Epic","el":"Poison","sc":"Poison","cl":"Gunslinger","race":"Human","melee":false,"af":0.55,"season":"s1","b":{"hp":1575.6,"atk":86.6,"def":72.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":78.78,"atk":4.33,"def":3.62,"critRate":0.0,"critDmg":0.08,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Twist the Knife","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Poison Bomb","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.4},"el":"Poison"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Bullet Storm","auto":{"parts":[{"kind":"dmg","coef":{"atk":6.0},"el":"Poison"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21"},"cap":{"t":"Increases all allies' Enlightenment by 36.0 in all battles.","mode":"all"}},"23250":{"id":23250,"n":"Adolphus","r":"Epic","el":"Fire","sc":"Support","cl":"Wizard","race":"Deep Elf","melee":false,"af":0.55,"season":"s1","b":{"hp":1547.8,"atk":75.2,"def":68.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":77.39,"atk":3.76,"def":3.42,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":16.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Life Transfusion","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Aura of Protection","auto":{"parts":[{"kind":"shield","coef":{"thp":0.1,"ench":28.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Fiery Wall","auto":{"parts":[{"kind":"dmg","coef":{"atk":4.5,"ench":32.0},"el":"Fire"},{"kind":"shield","coef":{"thp":0.15,"ench":31.5},"el":null}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21"},"cap":null},"21000":{"id":21000,"n":"Soveliss","r":"Epic","el":"Ice","sc":"Support","cl":"Ranger","race":"Wood Elf","melee":false,"af":0.55,"season":"s1","b":{"hp":1647.4,"atk":78.4,"def":69.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":82.37,"atk":3.92,"def":3.45,"critRate":0.0,"critDmg":0.0,"acc":9.0,"res":9.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Investigation","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.0},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Driftwood as Home","auto":{"parts":[{"kind":"heal","coef":{"thp":0.1},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Protective Isolation","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.2},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":7.0,"uf":9.0,"uc":20.0,"bfB":9.0,"ufB":15.0,"ucB":23.0,"src":"2023-09-21"},"cap":{"t":"Increases all allies' Accuracy by 30.0 in all battles.","mode":"all"}},"20280":{"id":20280,"n":"Eli","r":"Epic","el":"Poison","sc":"Poison","cl":"Ranger","race":"Human","melee":false,"af":0.55,"season":"s1","b":{"hp":1608.6,"atk":86.4,"def":63.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":80.43,"atk":4.32,"def":3.16,"critRate":0.02,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":8.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"No Loose Ends","auto":{"parts":[{"kind":"dmg","coef":{"atk":0.4},"el":"Derivative"}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Poisonous Arrow","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.2},"el":"Poison"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Hail of Arrows","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.65},"el":"Poison"}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":3.0,"bc":8.0,"uf":13.0,"uc":20.0,"bfB":5.0,"bcB":10.0,"ufB":19.0,"ucB":23.0,"src":"2023-09-25"},"cap":{"t":"Increases all allies' Attack by 18% in all battles.","mode":"all"}},"20220":{"id":20220,"n":"Zadok","r":"Epic","el":"Necrosis","sc":"Summon","cl":"Summoner","race":"Undead","melee":false,"af":0.4,"season":"s1","b":{"hp":1407.8,"atk":87.6,"def":64.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":70.39,"atk":4.38,"def":3.24,"critRate":0.0,"critDmg":0.08,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Deep-Rooted Hatred","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Undead Companions","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.0},"el":"Necrotic"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Moment of Revenge","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.35},"el":"Necrotic"}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21"},"cap":null},"20640":{"id":20640,"n":"Iola","r":"Epic","el":"Lightning","sc":"Support","cl":"Wizard","race":"Human","melee":false,"af":0.4,"season":"s1","b":{"hp":1513.6,"atk":86.2,"def":67.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":75.68,"atk":4.31,"def":3.35,"critRate":0.0,"critDmg":0.0,"acc":18.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Mistakes Denied","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Flaws Denounced","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.0},"el":"Lightning"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Resounding Truth","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.29},"el":"Lightning"}],"hits":3,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21"},"cap":{"t":"Increases all allies' Attack by 18% in all battles.","mode":"all"}},"21950":{"id":21950,"n":"Caraman","r":"Epic","el":"Fire","sc":"Wild","cl":"Sorcerer","race":"Undead","melee":true,"af":0.4,"season":"s1","b":{"hp":2030.4,"atk":83.4,"def":67.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":101.52,"atk":4.17,"def":3.35,"critRate":0.0,"critDmg":0.08,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Searing Godspeed","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Blazing Kill","auto":{"parts":[{"kind":"dmg","coef":{"atk":4.2},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Firestorm's Fury","auto":{"parts":[{"kind":"dmg","coef":{"atk":7.5},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":3.0,"bc":8.0,"uf":12.0,"uc":20.0,"bfB":5.0,"bcB":10.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21"},"cap":{"t":"Increases all allies' Crit Damage by 24% in Grand Gladiator Arena battles.","mode":"arena"}},"23170":{"id":23170,"n":"Gareth","r":"Epic","el":"Poison","sc":"Support","cl":"Knight","race":"Human","melee":true,"af":0.55,"season":"s1","b":{"hp":2138.2,"atk":74.2,"def":64.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":106.91,"atk":3.71,"def":3.24,"critRate":0.0,"critDmg":0.0,"acc":9.0,"res":9.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Frontier Resilience","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Steady as He Goes","auto":{"parts":[{"kind":"dmg","coef":{"def":3.4},"el":"Poison"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Desolate Slash","auto":{"parts":[{"kind":"dmg","coef":{"atk":6.2},"el":"Poison"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21"},"cap":null},"21160":{"id":21160,"n":"Gardrus","r":"Epic","el":"Ice","sc":"Support","cl":"Ranger","race":"Dwarf","melee":false,"af":0.55,"season":"s1","b":{"hp":1585.8,"atk":79.4,"def":70.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":79.29,"atk":3.97,"def":3.54,"critRate":0.02,"critDmg":0.0,"acc":9.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Powerful Lineage","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Take Aim","auto":{"parts":[{"kind":"dmg","coef":{"atk":4.0},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Mighty Arrow","auto":{"parts":[{"kind":"dmg","coef":{"atk":6.2},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21"},"cap":{"t":"Increases all allies' Resistance by 30.0 in all battles.","mode":"all"}},"20470":{"id":20470,"n":"Kamari","r":"Epic","el":"Radiance","sc":"Support","cl":"Paladin","race":"Human","melee":true,"af":0.5,"season":"s1","b":{"hp":2325.8,"atk":78.4,"def":72.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":116.29,"atk":3.92,"def":3.62,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":18.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Embattle","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"area"}},"b":{"n":"True Courage","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.0,"hp":0.08},"el":"Radiant"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Mercy of Holy Light","auto":{"parts":[{"kind":"heal","coef":{"thp":0.4},"el":null}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":3.0,"bc":8.0,"uf":14.0,"uc":24.0,"bfB":5.0,"bcB":10.0,"ufB":20.0,"ucB":27.0,"src":"2023-09-21"},"cap":null},"21690":{"id":21690,"n":"Isitarian","r":"Epic","el":"Necrosis","sc":"Summon","cl":"Cleric","race":"Human","melee":false,"af":0.4,"season":"s1","b":{"hp":1534.6,"atk":85.0,"def":70.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":76.73,"atk":4.25,"def":3.5,"critRate":0.04,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Constant Shadow","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Evil Flame's Call","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.2},"el":"Necrotic"},{"kind":"dmg","coef":{"atk":1.2},"el":"Necrotic"}],"hits":3,"ticks":null,"tgt":"single"}},"u":{"n":"Ancient Dragon Spell","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21"},"cap":{"t":"Increases all allies' Attack by 18% in all battles.","mode":"all"}},"20700":{"id":20700,"n":"Dane","r":"Epic","el":"Fire","sc":"Support","cl":"Warlock","race":"Human","melee":false,"af":0.4,"season":"s1","b":{"hp":1602.8,"atk":84.2,"def":64.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":80.14,"atk":4.21,"def":3.22,"critRate":0.0,"critDmg":0.0,"acc":18.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"At Your Weakest","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Firebath","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.0},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Yours? Mine!","auto":{"parts":[{"kind":"dmg","coef":{"atk":6.5},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"bfB":7.0,"bcB":12.0,"src":"2023-09-21"},"cap":{"t":"In Fey Meander and Trial Breakthrough battles, increases all allies' Attack by 24%.","mode":"fey_trial"}},"23140":{"id":23140,"n":"Gladros","r":"Epic","el":"Necrosis","sc":"Support","cl":"Warrior","race":"Blazeland Lizardfolk","melee":false,"af":0.55,"season":"s1","b":{"hp":1499.8,"atk":88.2,"def":67.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":74.99,"atk":4.41,"def":3.38,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":18.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Shadow Companion","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Sneaky Hand","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.0},"el":"Necrotic"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Encircling Guard","auto":{"parts":[{"kind":"shield","coef":{"atk":3.0,"hp":0.04},"el":null}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21"},"cap":{"t":"Increases all allies' Resistance by 40.0 in Grand Gladiator Arena battles.","mode":"arena"}},"21930":{"id":21930,"n":"Joyce","r":"Epic","el":"Necrosis","sc":"Summon","cl":"Sorcerer","race":"Human","melee":false,"af":0.4,"season":"s1","b":{"hp":1530.2,"atk":86.8,"def":69.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":76.51,"atk":4.34,"def":3.48,"critRate":0.0,"critDmg":0.08,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Soul Linkage","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Mimicry Performance","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.1},"el":"Necrotic"},{"kind":"dmg","coef":{"atk":2.1},"el":"Necrotic"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Reprise","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":9.0,"uc":16.0,"bfB":7.0,"bcB":12.0,"ufB":15.0,"ucB":19.0,"src":"2023-09-21"},"cap":{"t":"Increases all allies' Crit Damage by 24% in dungeon battles.","mode":"dungeon"}},"21080":{"id":21080,"n":"Lethander","r":"Epic","el":"Ice","sc":"Support","cl":"Wizard","race":"Deep Elf","melee":false,"af":0.55,"season":"s1","b":{"hp":1480.2,"atk":81.6,"def":66.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":74.01,"atk":4.08,"def":3.31,"critRate":0.02,"critDmg":0.0,"acc":9.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Vigilant Gaze","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Frosty Beams","auto":{"parts":[{"kind":"dmg","coef":{"atk":4.3},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Shattering Ice Blast","auto":{"parts":[{"kind":"dmg","coef":{"atk":7.2},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21"},"cap":null},"20600":{"id":20600,"n":"Questa","r":"Epic","el":"Necrosis","sc":"Support","cl":"Scourge","race":"Human","melee":true,"af":0.5,"season":"s1","b":{"hp":2164.8,"atk":89.6,"def":78.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":108.24,"atk":4.48,"def":3.92,"critRate":0.02,"critDmg":0.0,"acc":9.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Bloodthirst","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Tormentation","auto":{"parts":[{"kind":"dmg","coef":{"atk":4.2},"el":"Necrotic"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Marrow Devouring","auto":{"parts":[{"kind":"dmg","coef":{"atk":9.5},"el":"Necrotic"},{"kind":"heal","coef":{"atk":4.75},"el":null}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"uf":12.0,"uc":20.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21"},"cap":{"t":"Increases all allies' Attack by 24% in Grand Gladiator Arena battles.","mode":"arena"}},"22290":{"id":22290,"n":"Voresh","r":"Epic","el":"Ice","sc":"Support","cl":"Wizard","race":"The Unstill","melee":false,"af":0.5,"season":"s1","b":{"hp":1594.4,"atk":81.2,"def":70.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":79.72,"atk":4.06,"def":3.52,"critRate":0.0,"critDmg":0.0,"acc":9.0,"res":9.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Breath of Ice","auto":{"parts":[{"kind":"heal","coef":{"atk":0.7},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Glacial Blow","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.2},"el":"Cold"}],"hits":3,"ticks":null,"tgt":"single"}},"u":{"n":"Glacial Curse","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.8},"el":"Cold"}],"hits":3,"ticks":null,"tgt":"all"}}},"tm":{"uf":12.0,"uc":20.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21","stale":1},"cap":null},"23240":{"id":23240,"n":"Isolde","r":"Epic","el":"Fire","sc":"Support","cl":"Warrior","race":"Human","melee":true,"af":0.55,"season":"s1","b":{"hp":2118.6,"atk":73.6,"def":64.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":105.93,"atk":3.68,"def":3.23,"critRate":0.0,"critDmg":0.0,"acc":9.0,"res":9.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Comrades in Arms","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Pursue Vengeance","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.0,"hp":0.08},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Flame Guardian","auto":{"parts":[{"kind":"dmg","coef":{"atk":4.0,"hp":0.09},"el":"Fire"},{"kind":"shield","coef":{"hp":0.14},"el":null}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21"},"cap":{"t":"Increases all allies' Defense by 18% in all battles.","mode":"all"}},"21670":{"id":21670,"n":"Frurbath","r":"Epic","el":"Poison","sc":"Support","cl":"Shaman","race":"Forest Troll","melee":true,"af":0.5,"season":"s1","b":{"hp":2323.8,"atk":72.2,"def":79.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":116.19,"atk":3.61,"def":3.95,"critRate":0.0,"critDmg":0.0,"acc":18.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Torment and Delight","auto":{"parts":[{"kind":"heal","coef":{"def":1.5},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Voodoo Therapy","auto":{"parts":[{"kind":"heal","coef":{"def":0.5},"el":null}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Voodoo Conjuration","auto":{"parts":[{"kind":"dmg","coef":{"atk":6.0},"el":"Poison"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"uf":12.0,"uc":20.0,"bfB":7.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21"},"cap":{"t":"Increases all allies' Defense by 24% in dungeon battles.","mode":"dungeon"}},"20210":{"id":20210,"n":"Garius","r":"Epic","el":"Radiance","sc":"Support","cl":"Warlock","race":"Human","melee":true,"af":0.5,"season":"s1","b":{"hp":2176.6,"atk":76.4,"def":68.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":108.83,"atk":3.82,"def":3.4,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":18.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Rugged Tenacity","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Selfish Gains","auto":{"parts":[{"kind":"dmg","coef":{"def":4.0},"el":"Radiant"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Hold Your Horses","auto":{"parts":[{"kind":"heal","coef":{"def":5.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21"},"cap":{"t":"Increases all allies' Defense by 18% in all battles.","mode":"all"}},"23120":{"id":23120,"n":"Irma","r":"Epic","el":"Necrosis","sc":"Support","cl":"Warrior","race":"Ridge Halfling","melee":true,"af":0.55,"season":"s1","b":{"hp":2111.6,"atk":76.0,"def":70.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":105.58,"atk":3.8,"def":3.5,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":18.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Night Sentinel","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Heart of Guardian","auto":{"parts":[{"kind":"dmg","coef":{"def":3.55},"el":"Necrotic"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Serene Domain","auto":{"parts":[{"kind":"dmg","coef":{"def":7.4},"el":"Necrotic"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":3.0,"bc":8.0,"uf":12.0,"uc":20.0,"bfB":5.0,"bcB":10.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21"},"cap":null},"20750":{"id":20750,"n":"Eches","r":"Epic","el":"Poison","sc":"Support","cl":"Scourge","race":"Human","melee":true,"af":0.5,"season":"s1","b":{"hp":2256.0,"atk":81.8,"def":68.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":112.8,"atk":4.09,"def":3.44,"critRate":0.0,"critDmg":0.0,"acc":18.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Agonizing Poison","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Blade Cyclone","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.8},"el":"Poison"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Bewitching Dance","auto":{"parts":[{"kind":"dmg","coef":{"atk":5.5},"el":"Poison"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":15.0,"ucB":23.0,"src":"2023-09-21"},"cap":null},"23190":{"id":23190,"n":"Vicuc","r":"Epic","el":"Poison","sc":"Support","cl":"Druid","race":"Wood Elf","melee":false,"af":0.55,"season":"s1","b":{"hp":1412.4,"atk":80.2,"def":64.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":70.62,"atk":4.01,"def":3.24,"critRate":0.0,"critDmg":0.0,"acc":18.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Mark of the Forest","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Valor of the Forest","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.0},"el":"Poison"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Blessing of the Forest","auto":{"parts":[{"kind":"heal","coef":{"thp":0.15},"el":null}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21"},"cap":null},"23130":{"id":23130,"n":"Estella","r":"Epic","el":"Necrosis","sc":"Support","cl":"Wizard","race":"Human","melee":false,"af":0.55,"season":"s1","b":{"hp":1517.8,"atk":75.0,"def":69.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":75.89,"atk":3.75,"def":3.46,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":9.0,"ench":8.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Flickering Candlelight","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Aid Mark","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Defense Domain","auto":{"parts":[{"kind":"heal","coef":{"hp":0.01,"ench":5.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":9.0,"bcB":14.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21"},"cap":{"t":"In Fey Meander and Trial Breakthrough battles, increases all allies' Max HP by 24%.","mode":"fey_trial"}},"22320":{"id":22320,"n":"Zhar'loth","r":"Epic","el":"Necrosis","sc":"Support","cl":"Sorcerer","race":"Fallen Soul","melee":false,"af":0.4,"season":"s1","b":{"hp":1524.2,"atk":86.6,"def":69.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":76.21,"atk":4.33,"def":3.48,"critRate":0.0,"critDmg":0.0,"acc":18.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Corrupting Order","auto":{"parts":[{"kind":"heal","coef":{"atk":3.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Shadow of Chaos","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.8},"el":"Necrotic"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Abysmal Dread","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.62},"el":"Necrotic"},{"kind":"heal","coef":{"atk":0.3},"el":null}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":{"bf":5.0,"uf":12.0,"uc":20.0,"bfB":7.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21"},"cap":{"t":"Increases all allies' Attack by 18% in all battles.","mode":"all"}},"22270":{"id":22270,"n":"Vasska","r":"Epic","el":"Necrosis","sc":"Summon","cl":"Scourge","race":"The Unstill","melee":true,"af":0.4,"season":"s1","b":{"hp":2163.8,"atk":83.4,"def":65.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":108.19,"atk":4.17,"def":3.25,"critRate":0.02,"critDmg":0.0,"acc":0.0,"res":8.0,"ench":0.0,"haste":0.0,"atkSpd":0.04},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Bloodthirsty Scythe","auto":{"parts":[{"kind":"heal","coef":{"atk":1.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Restless Soul","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Death Reaping","auto":{"parts":[{"kind":"dmg","coef":{"atk":7.3},"el":"Necrotic"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-25","stale":1},"cap":{"t":"Increases all allies' Attack by 24% in Grand Gladiator Arena battles.","mode":"arena"}},"20440":{"id":20440,"n":"Lydia","r":"Epic","el":"Lightning","sc":"Support","cl":"Warrior","race":"Rural Halfling","melee":true,"af":0.38,"season":"s1","b":{"hp":2523.8,"atk":81.4,"def":79.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":126.19,"atk":4.07,"def":3.97,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":18.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Faith in Kinship","auto":{"parts":[{"kind":"shield","coef":{"hp":0.2},"el":null},{"kind":"shield","coef":{"hp":0.1},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Relentless Heart","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"United Defense","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":7.0,"bc":12.0,"uf":12.0,"uc":20.0,"bfB":11.0,"bcB":16.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21"},"cap":null},"21300":{"id":21300,"n":"Corrin","r":"Epic","el":"Poison","sc":"Poison","cl":"Wizard","race":"Ridge Halfling","melee":false,"af":0.4,"season":"s1","b":{"hp":1563.2,"atk":87.6,"def":72.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":78.16,"atk":4.38,"def":3.61,"critRate":0.0,"critDmg":0.0,"acc":9.0,"res":0.0,"ench":8.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Outlander's Curse","auto":{"parts":[{"kind":"dmg","coef":{"atk":0.8,"ench":4.8},"el":"Poison"}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Outlander's Bad Luck","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.0},"el":"Poison"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Outlander's Bane","auto":{"parts":[{"kind":"dmg","coef":{"atk":4.0,"ench":9.0},"el":"Poison"}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21"},"cap":{"t":"In Fey Meander and Trial Breakthrough battles, increases all allies' Enlightenment by 48.0.","mode":"fey_trial"}},"23200":{"id":23200,"n":"Theodore","r":"Epic","el":"Poison","sc":"Support","cl":"Ranger","race":"Dwarf","melee":false,"af":0.55,"season":"s1","b":{"hp":1566.8,"atk":80.0,"def":70.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":78.34,"atk":4.0,"def":3.51,"critRate":0.0,"critDmg":0.0,"acc":18.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Veer with the Wind","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Money Talks","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.1},"el":"Poison"}],"hits":2,"ticks":null,"tgt":"single"}},"u":{"n":"Never Miss","auto":{"parts":[{"kind":"dmg","coef":{"atk":7.6},"el":"Poison"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":24.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":27.0,"src":"2023-09-21"},"cap":{"t":"Increases all allies' Accuracy by 40.0 in dungeon battles.","mode":"dungeon"}},"23160":{"id":23160,"n":"Elvis","r":"Epic","el":"Ice","sc":"Support","cl":"Warrior","race":"Undead","melee":true,"af":0.55,"season":"s1","b":{"hp":1993.0,"atk":74.0,"def":74.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":99.65,"atk":3.7,"def":3.71,"critRate":0.0,"critDmg":0.0,"acc":9.0,"res":9.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Warrior Spirit","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Stalwart Shield","auto":{"parts":[{"kind":"shield","coef":{"def":3.75},"el":null},{"kind":"dmg","coef":{"def":2.6},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Devout Frost Armor","auto":{"parts":[{"kind":"dmg","coef":{"def":0.75},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21"},"cap":{"t":"In Fey Meander and Trial Breakthrough battles, increases all allies' Defense by 24%.","mode":"fey_trial"}},"20540":{"id":20540,"n":"Clovis","r":"Epic","el":"Radiance","sc":"Support","cl":"Knight","race":"Human","melee":true,"af":0.5,"season":"s1","b":{"hp":2247.8,"atk":74.0,"def":74.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":112.39,"atk":3.7,"def":3.74,"critRate":0.0,"critDmg":0.0,"acc":9.0,"res":9.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Persistence","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"all"}},"b":{"n":"Knight Duel","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Valiant Charge","auto":{"parts":[{"kind":"dmg","coef":{"def":7.5},"el":"Radiant"},{"kind":"dmg","coef":{"atk":1.0},"el":"Radiant"}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21"},"cap":{"t":"Increases all allies' Defense by 18% in all battles.","mode":"all"}},"21550":{"id":21550,"n":"Gerana","r":"Rare","el":"Lightning","sc":"Support","cl":"Wizard","race":"Gnome","melee":false,"af":0.4,"season":"s1","b":{"hp":1545.6,"atk":76.8,"def":64.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":77.28,"atk":3.84,"def":3.23,"critRate":0.0,"critDmg":0.0,"acc":18.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Electrostatic Touch","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Weak Electric Field","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.6},"el":"Lightning"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Deflecting Force","auto":{"parts":[{"kind":"shield","coef":{"hp":0.12},"el":null}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-25"},"cap":{"t":"Increases all allies' Defense by 18% in dungeon battles.","mode":"dungeon"}},"22210":{"id":22210,"n":"Vojeh","r":"Rare","el":"Ice","sc":"Frost","cl":"Wizard","race":"Undead","melee":false,"af":0.4,"season":"s1","b":{"hp":1931.4,"atk":75.0,"def":56.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":96.57,"atk":3.75,"def":2.8,"critRate":0.02,"critDmg":0.04,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Strength Absorption","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Perfected Skill","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.8},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Spreading Cold","auto":{"parts":[{"kind":"dmg","coef":{"atk":6.8},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-25"},"cap":null},"10000":{"id":10000,"n":"Traveler","r":"Special","el":"Fire","sc":"Support","cl":"","race":"","melee":false,"af":0.45,"season":"s1","b":{"hp":1657.0,"atk":74.0,"def":69.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":82.85,"atk":3.7,"def":3.47,"critRate":0.02,"critDmg":0.0,"acc":12.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Morale Up","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Holy Fire Smite","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.25},"el":"Fire"}],"hits":3,"ticks":null,"tgt":"single"}},"u":{"n":"Fireball","auto":{"parts":[{"kind":"dmg","coef":{"atk":5.0},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":null,"cap":null},"21910":{"id":21910,"n":"Olgan","r":"Epic","el":"Ice","sc":"Frost","cl":"Warrior","race":"Valley Minotaur","melee":true,"af":0.4,"season":"s1","b":{"hp":2190.4,"atk":78.4,"def":61.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":109.52,"atk":3.92,"def":3.08,"critRate":0.02,"critDmg":0.0,"acc":9.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Vow to Defend","auto":{"parts":[{"kind":"dmg","coef":{"atk":0.2},"el":"Cold"}],"hits":1,"ticks":5,"tgt":"single"}},"b":{"n":"Intruders Die","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.3},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Banishment","auto":{"parts":[{"kind":"dmg","coef":{"atk":5.5},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21"},"cap":{"t":"Increases all allies' Accuracy by 30.0 in all battles.","mode":"all"}},"23290":{"id":23290,"n":"Shook","r":"Epic","el":"Lightning","sc":"Support","cl":"Rogue","race":"Ratfolk","melee":false,"af":0.55,"season":"s1","b":{"hp":1492.4,"atk":78.4,"def":67.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":74.62,"atk":3.92,"def":3.35,"critRate":0.0,"critDmg":0.0,"acc":9.0,"res":9.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"At Your Service","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Hit Where It Counts","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.5},"el":"Lightning"}],"hits":3,"ticks":null,"tgt":"single"}},"u":{"n":"Rest Assured","auto":{"parts":[{"kind":"dmg","coef":{"atk":6.75},"el":"Lightning"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":7.0,"uf":12.0,"uc":20.0,"bfB":9.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21"},"cap":{"t":"Increases all allies' Accuracy by 30.0 in all battles.","mode":"all"}},"21420":{"id":21420,"n":"Dallbam","r":"Epic","el":"Ice","sc":"Support","cl":"Warrior","race":"Deep Gnome","melee":true,"af":0.5,"season":"s1","b":{"hp":2307.6,"atk":77.0,"def":67.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":115.38,"atk":3.85,"def":3.37,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":18.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Blessing of the Curse","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Rewards of Digging","auto":{"parts":[{"kind":"shield","coef":{"hp":0.15},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"My Precious!","auto":{"parts":[{"kind":"dmg","coef":{"def":5.2},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":{"bf":5.0,"uf":12.0,"uc":20.0,"bfB":7.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21"},"cap":{"t":"Increases all allies' Resistance by 40.0 in Grand Gladiator Arena battles.","mode":"arena"}},"20170":{"id":20170,"n":"Martina","r":"Epic","el":"Radiance","sc":"Rally","cl":"Knight","race":"Human","melee":true,"af":0.5,"season":"s1","b":{"hp":2046.8,"atk":84.2,"def":57.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":102.34,"atk":4.21,"def":2.89,"critRate":0.0,"critDmg":0.08,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Cheerful Inspiration","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Sunburst Attack","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.1},"el":"Radiant"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Divine Slash","auto":{"parts":[{"kind":"dmg","coef":{"atk":6.2},"el":"Radiant"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":13.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":19.0,"ucB":23.0,"src":"2023-09-21"},"cap":null},"20240":{"id":20240,"n":"Dorkuraz","r":"Epic","el":"Ice","sc":"Frost","cl":"Shaman","race":"Frost Troll","melee":false,"af":0.4,"season":"s1","b":{"hp":1433.4,"atk":91.6,"def":68.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":71.67,"atk":4.58,"def":3.43,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.08},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Snow Mountain Descent","auto":{"parts":[{"kind":"dmg","coef":{"atk":0.4},"el":"Derivative"}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Snow Shadow","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.8},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Iceball Assault","auto":{"parts":[{"kind":"dmg","coef":{"atk":4.8},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"uf":12.0,"uc":20.0,"bfB":7.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21","stale":1},"cap":null},"20940":{"id":20940,"n":"Tathlyn","r":"Epic","el":"Radiance","sc":"Rally","cl":"Ranger","race":"Sheen Elf","melee":false,"af":0.5,"season":"s1","b":{"hp":1588.4,"atk":79.0,"def":70.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":79.42,"atk":3.95,"def":3.54,"critRate":0.02,"critDmg":0.0,"acc":0.0,"res":9.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Sage's View","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Arrow of Dusk","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.2},"el":"Radiant"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Moonlight Rain","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.5},"el":"Radiant"}],"hits":3,"ticks":null,"tgt":"area"}}},"tm":{"bf":7.0,"bc":12.0,"uf":12.0,"uc":20.0,"bfB":9.0,"bcB":14.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21"},"cap":{"t":"Increases all allies' Crit Damage by 24% in Grand Gladiator Arena battles.","mode":"arena"}},"20070":{"id":20070,"n":"Hegio","r":"Epic","el":"Radiance","sc":"Rally","cl":"Knight","race":"Human","melee":true,"af":0.5,"season":"s1","b":{"hp":2100.0,"atk":83.2,"def":62.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":105.0,"atk":4.16,"def":3.14,"critRate":0.02,"critDmg":0.04,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Knight Spirit","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Royal Swordsmanship","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.0},"el":"Radiant"}],"hits":2,"ticks":null,"tgt":"single"}},"u":{"n":"Revolving Sword Dance","auto":{"parts":[{"kind":"dmg","coef":{"atk":5.0},"el":"Radiant"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21"},"cap":null},"23180":{"id":23180,"n":"Garian","r":"Epic","el":"Poison","sc":"Support","cl":"Wizard","race":"Human","melee":false,"af":0.55,"season":"s1","b":{"hp":1517.4,"atk":77.4,"def":67.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":75.87,"atk":3.87,"def":3.39,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":16.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Duty Calls","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Helping Hand","auto":{"parts":[{"kind":"heal","coef":{"thp":0.15,"ench":20.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"United We Stand","auto":{"parts":[{"kind":"heal","coef":{"thp":0.01,"ench":3.5},"el":null}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21"},"cap":{"t":"In Fey Meander and Trial Breakthrough battles, increases all allies' Max HP by 24%.","mode":"fey_trial"}},"22350":{"id":22350,"n":"Nimbus","r":"Epic","el":"Lightning","sc":"Dauntless","cl":"Gunslinger","race":"Aerial Dwarf","melee":false,"af":0.55,"season":"s1","b":{"hp":1568.0,"atk":82.4,"def":66.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":78.4,"atk":4.12,"def":3.31,"critRate":0.025,"critDmg":0.05,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.08},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Gust of Speed","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Rolling Thunderclap","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.2},"el":"Lightning"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Thunderous Pursuit","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.0},"el":"Lightning"}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-22","stale":1},"cap":{"t":"Increases all allies' Attack by 24% in dungeon battles.","mode":"dungeon"}},"23150":{"id":23150,"n":"Deverick","r":"Epic","el":"Necrosis","sc":"Support","cl":"Wizard","race":"Valley Minotaur","melee":false,"af":0.55,"season":"s1","b":{"hp":1523.0,"atk":83.0,"def":69.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":76.15,"atk":4.15,"def":3.46,"critRate":0.0,"critDmg":0.0,"acc":18.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Buried Radiance","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Leave None Alive","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.2},"el":"Necrotic"}],"hits":3,"ticks":null,"tgt":"single"}},"u":{"n":"Dead End","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.5},"el":"Necrotic"}],"hits":3,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21"},"cap":{"t":"Increases all allies' Accuracy by 30.0 in all battles.","mode":"all"}},"21490":{"id":21490,"n":"Follie","r":"Epic","el":"Fire","sc":"Wild","cl":"Wizard","race":"Deep Gnome","melee":false,"af":0.55,"season":"s1","b":{"hp":1542.8,"atk":81.0,"def":64.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":77.14,"atk":4.05,"def":3.24,"critRate":0.02,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.04},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Stroke of Luck","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Measured Force","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Risky Experiment","auto":{"parts":[{"kind":"dmg","coef":{"atk":4.2},"el":"Fire"}],"hits":3,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":9.0,"bcB":14.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21","stale":1},"cap":{"t":"Increases all allies' Crit Damage by 18% in all battles.","mode":"all"}},"21210":{"id":21210,"n":"Gitouna","r":"Epic","el":"Radiance","sc":"Rally","cl":"Warrior","race":"Dwarf","melee":true,"af":0.5,"season":"s1","b":{"hp":2017.4,"atk":76.6,"def":60.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":100.87,"atk":3.83,"def":3.03,"critRate":0.0,"critDmg":0.08,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Speed Surge","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.0},"el":"Radiant"}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Blade Echo","auto":{"parts":[{"kind":"dmg","coef":{"atk":0.68},"el":"Radiant"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Golden Brilliance","auto":{"parts":[{"kind":"dmg","coef":{"atk":6.0},"el":"Radiant"},{"kind":"dmg","coef":{"atk":1.2},"el":null},{"kind":"dmg","coef":{"atk":1.2},"el":null}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21"},"cap":{"t":"Increases all allies' Crit Damage by 18% in all battles.","mode":"all"}},"22020":{"id":22020,"n":"Shink","r":"Epic","el":"Poison","sc":"Poison","cl":"Rogue","race":"Ratfolk","melee":true,"af":0.5,"season":"s1","b":{"hp":2090.6,"atk":80.8,"def":62.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":104.53,"atk":4.04,"def":3.13,"critRate":0.02,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":8.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"One More Round","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Bestow Revelry","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.05},"el":"Poison"}],"hits":5,"ticks":null,"tgt":"area"}},"u":{"n":"Rulebreaker's Bane","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.05},"el":"Poison"}],"hits":5,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21"},"cap":null},"20980":{"id":20980,"n":"Kailes","r":"Epic","el":"Radiance","sc":"Rally","cl":"Wizard","race":"Sheen Elf","melee":false,"af":0.4,"season":"s1","b":{"hp":1632.8,"atk":83.2,"def":65.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":81.64,"atk":4.16,"def":3.29,"critRate":0.02,"critDmg":0.04,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Energy Surge","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.75},"el":"Radiant"}],"hits":1,"ticks":null,"tgt":"area"}},"b":{"n":"Synergy","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Gleaming Lens","auto":{"parts":[{"kind":"dmg","coef":{"atk":6.0},"el":"Radiant"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":null},"23220":{"id":23220,"n":"Duling","r":"Epic","el":"Radiance","sc":"Support","cl":"Warrior","race":"Dwarf","melee":true,"af":0.55,"season":"s1","b":{"hp":2068.0,"atk":74.8,"def":74.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":103.4,"atk":3.74,"def":3.72,"critRate":0.0,"critDmg":0.0,"acc":9.0,"res":9.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Heart of Stone","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Drunken Brawl","auto":{"parts":[{"kind":"dmg","coef":{"def":3.0},"el":"Radiant"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Honey Whiskey","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21"},"cap":{"t":"Increases all allies' Defense by 24% in Grand Gladiator Arena battles.","mode":"arena"}},"21130":{"id":21130,"n":"Thurnus","r":"Epic","el":"Lightning","sc":"Dauntless","cl":"Warrior","race":"Dwarf","melee":true,"af":0.5,"season":"s1","b":{"hp":2159.8,"atk":82.4,"def":62.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":107.99,"atk":4.12,"def":3.13,"critRate":0.0,"critDmg":0.08,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Togetherness","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Thunderous Gale","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.0},"el":"Lightning"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Thunder's Mark","auto":{"parts":[{"kind":"dmg","coef":{"atk":4.68},"el":"Lightning"},{"kind":"dmg","coef":{"atk":0.52},"el":"Lightning"}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21"},"cap":{"t":"Increases all allies' Attack by 24% in dungeon battles.","mode":"dungeon"}},"21820":{"id":21820,"n":"Ihuicatl","r":"Epic","el":"Lightning","sc":"Support","cl":"Wizard","race":"Blazeland Lizardfolk","melee":false,"af":0.4,"season":"s1","b":{"hp":1581.2,"atk":79.8,"def":72.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":79.06,"atk":3.99,"def":3.6,"critRate":0.0,"critDmg":0.0,"acc":9.0,"res":0.0,"ench":10.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Little Trickery","auto":{"parts":[{"kind":"shield","coef":{"thp":0.1,"ench":13.5},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Touch of Retribution","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.0},"el":"Lightning"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Not Yet Over","auto":{"parts":[{"kind":"heal","coef":{"thp":0.1,"ench":22.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"uf":12.0,"uc":20.0,"bfB":7.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21"},"cap":{"t":"Increases all allies' Defense by 18% in all battles.","mode":"all"}},"21680":{"id":21680,"n":"Sifris","r":"Epic","el":"Poison","sc":"Support","cl":"Cleric","race":"Human","melee":false,"af":0.4,"season":"s1","b":{"hp":1679.0,"atk":73.2,"def":73.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":83.95,"atk":3.66,"def":3.69,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":18.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Dragon Queen Blessing","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Self Devotion","auto":{"parts":[{"kind":"heal","coef":{"hp":0.2},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Cult Frenzy","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":14.0,"uc":24.0,"bfB":7.0,"bcB":12.0,"ufB":20.0,"ucB":27.0,"src":"2023-09-21"},"cap":null},"21800":{"id":21800,"n":"Tonalnan","r":"Epic","el":"Fire","sc":"Wild","cl":"Sorcerer","race":"Blazeland Lizardfolk","melee":true,"af":0.5,"season":"s1","b":{"hp":2101.0,"atk":88.6,"def":61.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":105.05,"atk":4.43,"def":3.09,"critRate":0.04,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Flaming Lineage","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Vigilant Guard","auto":{"parts":[{"kind":"dmg","coef":{"atk":0.9},"el":"Fire"}],"hits":3,"ticks":null,"tgt":"single"}},"u":{"n":"Mad Blade of Flames","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.6},"el":"Fire"}],"hits":5,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21"},"cap":null},"20140":{"id":20140,"n":"Horrus","r":"Epic","el":"Fire","sc":"Support","cl":"Warrior","race":"Dwarf","melee":true,"af":0.5,"season":"s1","b":{"hp":2249.0,"atk":72.0,"def":81.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":112.45,"atk":3.6,"def":4.07,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":18.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Indomitable","auto":{"parts":[{"kind":"shield","coef":{"hp":0.1},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Hammer of Fortitude","auto":{"parts":[{"kind":"dmg","coef":{"def":3.6},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Guardian Shield","auto":{"parts":[{"kind":"dmg","coef":{"def":6.0},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"uf":9.0,"uc":16.0,"bfB":7.0,"ufB":15.0,"ucB":19.0,"src":"2023-09-21"},"cap":{"t":"Increases all allies' Max HP by 18% in all battles.","mode":"all"}},"23230":{"id":23230,"n":"Gumm","r":"Epic","el":"Radiance","sc":"Support","cl":"Shaman","race":"Forest Troll","melee":false,"af":0.55,"season":"s1","b":{"hp":1471.8,"atk":80.6,"def":67.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":73.59,"atk":4.03,"def":3.37,"critRate":0.0,"critDmg":0.0,"acc":9.0,"res":9.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Ancestor's Blessing","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Shroud of Holylight","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.2},"el":"Radiant"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Might of Mountains","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.29},"el":"Radiant"}],"hits":3,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":15.0,"ucB":23.0,"src":"2023-09-21"},"cap":{"t":"Increases all allies' Resistance by 30.0 in all battles.","mode":"all"}},"21260":{"id":21260,"n":"Alfie","r":"Epic","el":"Fire","sc":"Wild","cl":"Wizard","race":"Rural Halfling","melee":false,"af":0.4,"season":"s1","b":{"hp":1570.2,"atk":83.0,"def":65.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":78.51,"atk":4.15,"def":3.28,"critRate":0.04,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Slow Simmer","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Focused Broiling","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.0},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Stoking the Flames","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":9.0,"uc":16.0,"bfB":7.0,"bcB":12.0,"ufB":15.0,"ucB":19.0,"src":"2023-09-21"},"cap":{"t":"Increases all allies' Attack by 24% in dungeon battles.","mode":"dungeon"}},"20950":{"id":20950,"n":"Alvis","r":"Epic","el":"Radiance","sc":"Rally","cl":"Cleric","race":"Sheen Elf","melee":false,"af":0.4,"season":"s1","b":{"hp":1534.6,"atk":80.8,"def":73.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":76.73,"atk":4.04,"def":3.67,"critRate":0.0,"critDmg":0.08,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Heart of Arrogance","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Incitement","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.0},"el":"Radiant"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Targeted Inspiration","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21"},"cap":{"t":"Increases all allies' Attack by 18% in all battles.","mode":"all"}},"20030":{"id":20030,"n":"Shagrol","r":"Epic","el":"Lightning","sc":"Dauntless","cl":"Warrior","race":"Orc","melee":true,"af":0.5,"season":"s1","b":{"hp":2154.4,"atk":88.6,"def":59.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":107.72,"atk":4.43,"def":2.98,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.08},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Wrath of the Ancestors","auto":{"parts":[],"hits":2,"ticks":null,"tgt":"single"}},"b":{"n":"Terror Fall","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.8},"el":"Lightning"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Destructive Flurry","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.6},"el":"Lightning"}],"hits":5,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":15.0,"ucB":23.0,"src":"2023-09-21","stale":1},"cap":{"t":"Increases all allies' Attack Speed by 18% in all battles.","mode":"all"}},"20080":{"id":20080,"n":"Vani","r":"Epic","el":"Lightning","sc":"Dauntless","cl":"Sorcerer","race":"Rural Halfling","melee":false,"af":0.4,"season":"s1","b":{"hp":1676.0,"atk":88.0,"def":69.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":83.8,"atk":4.4,"def":3.49,"critRate":0.04,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Pursuit","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Thunder Blast","auto":{"parts":[{"kind":"dmg","coef":{"atk":4.5},"el":"Lightning"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Haste","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-25"},"cap":null},"20250":{"id":20250,"n":"Vidimir","r":"Epic","el":"Ice","sc":"Frost","cl":"Wizard","race":"Human","melee":false,"af":0.4,"season":"s1","b":{"hp":1495.0,"atk":84.0,"def":63.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":74.75,"atk":4.2,"def":3.16,"critRate":0.0,"critDmg":0.08,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Icebreaker","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Icicle","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.5},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Ice Nova","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.6},"el":"Cold"},{"kind":"dmg","coef":{"atk":2.6},"el":"Cold"}],"hits":5,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"uf":13.0,"uc":20.0,"bfB":7.0,"ufB":19.0,"ucB":23.0,"src":"2023-09-21"},"cap":{"t":"Increases all allies' Attack by 18% in all battles.","mode":"all"}},"20040":{"id":20040,"n":"Schaltar","r":"Epic","el":"Lightning","sc":"Dauntless","cl":"Cleric","race":"Valley Minotaur","melee":true,"af":0.5,"season":"s1","b":{"hp":2123.0,"atk":80.0,"def":62.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":106.15,"atk":4.0,"def":3.11,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":16.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Brutality","auto":{"parts":[{"kind":"dmg","coef":{"atk":0.75},"el":"Derivative"}],"hits":4,"ticks":null,"tgt":"single"}},"b":{"n":"Lightning Shield","auto":{"parts":[{"kind":"dmg","coef":{"atk":0.55},"el":"Derivative"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Blessings of Thunder","auto":{"parts":[{"kind":"dmg","coef":{"atk":0.95},"el":"Derivative"}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":11.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":17.0,"ucB":23.0,"src":"2023-09-21"},"cap":null},"23260":{"id":23260,"n":"Liko","r":"Epic","el":"Fire","sc":"Support","cl":"Sorcerer","race":"Human","melee":false,"af":0.55,"season":"s1","b":{"hp":1485.2,"atk":76.8,"def":68.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":74.26,"atk":3.84,"def":3.43,"critRate":0.0,"critDmg":0.0,"acc":9.0,"res":9.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Element Bloodline","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Fire's Kiss","auto":{"parts":[{"kind":"heal","coef":{"thp":0.2},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Smoldering Breath","auto":{"parts":[{"kind":"dmg","coef":{"atk":7.8},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-21"},"cap":{"t":"Increases all allies' Accuracy by 40.0 in Grand Gladiator Arena battles.","mode":"arena"}},"22640":{"id":22640,"n":"Bronagh","r":"Rare","el":"Poison","sc":"Toxin","cl":"Rogue","race":"Ratfolk","melee":true,"af":0.55,"season":"s4","b":{"hp":1937.2,"atk":73.8,"def":57.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":96.86,"atk":3.69,"def":2.88,"critRate":0.0,"critDmg":0.0,"acc":18.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Pilferage","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Master Thief","auto":{"parts":[{"kind":"other","coef":{"atk":1.2},"el":null}],"hits":2,"ticks":null,"tgt":"single"}},"u":{"n":"Robbery","auto":{"parts":[{"kind":"other","coef":{"atk":1.5},"el":null}],"hits":5,"ticks":null,"tgt":"single"}}},"tm":null,"cap":null},"22770":{"id":22770,"n":"Ylindra","r":"Rare","el":"Necrosis","sc":"Support","cl":"Deathbringer","race":"Undead","melee":true,"af":0.55,"season":"s4","b":{"hp":1979.6,"atk":72.6,"def":58.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":98.98,"atk":3.63,"def":2.9,"critRate":0.0,"critDmg":0.0,"acc":18.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Unfulfilled Wish","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Life and Death","auto":{"parts":[{"kind":"other","coef":{"atk":2.0},"el":"Necrotic"},{"kind":"heal","coef":{"atk":3.5},"el":null}],"hits":2,"ticks":null,"tgt":"single"}},"u":{"n":"Underworldly Curse","auto":{"parts":[{"kind":"other","coef":{"atk":2.5},"el":"Necrotic"}],"hits":3,"ticks":null,"tgt":"single"}}},"tm":null,"cap":null},"22660":{"id":22660,"n":"Alistair","r":"Rare","el":"Fire","sc":"Support","cl":"Warrior","race":"Blazeland Lizardfolk","melee":true,"af":0.55,"season":"s4","b":{"hp":1961.0,"atk":71.4,"def":57.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":98.05,"atk":3.57,"def":2.88,"critRate":0.0,"critDmg":0.0,"acc":18.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Practice Makes Perfect","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Insatiable Curiosity","auto":{"parts":[{"kind":"other","coef":{"atk":2.2},"el":null}],"hits":2,"ticks":null,"tgt":"single"}},"u":{"n":"Latecomer Starts Early","auto":{"parts":[{"kind":"other","coef":{"atk":7.2},"el":null}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":null},"21860":{"id":21860,"n":"Sabrina","r":"Rare","el":"Poison","sc":"Corrosion","cl":"Wizard","race":"Swamp Lizardfolk","melee":false,"af":0.5,"season":"s3","b":{"hp":1405.6,"atk":73.2,"def":63.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":70.28,"atk":3.66,"def":3.16,"critRate":0.02,"critDmg":0.04,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Fully Recorded","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Territorial Surveillance","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Code of Authority","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":{"t":"Increases all allies' Attack by  in Grand Gladiator Arena battles.","mode":"arena"}},"21570":{"id":21570,"n":"Rasran","r":"Rare","el":"Poison","sc":"Corrosion","cl":"Barbarian","race":"Orc","melee":true,"af":0.38,"season":"s3","b":{"hp":1943.0,"atk":74.0,"def":54.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":97.15,"atk":3.7,"def":2.73,"critRate":0.0,"critDmg":0.08,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Bloody Fangs","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Bloodthirst","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Chronic Mortality","auto":{"parts":[],"hits":3,"ticks":null,"tgt":"area"}}},"tm":null,"cap":{"t":"Increases all allies' Crit Damage by  in all battles.","mode":"all"}},"22860":{"id":22860,"n":"Cykkol","r":"Rare","el":"Radiance","sc":"Aura","cl":"Warrior","race":"Merfolk","melee":true,"af":0.38,"season":"s3","b":{"hp":1992.6,"atk":73.6,"def":56.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":99.63,"atk":3.68,"def":2.84,"critRate":0.04,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Brave the Billows","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Vortex Slash","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Tsunami Strike","auto":{"parts":[],"hits":2,"ticks":null,"tgt":"area"}}},"tm":null,"cap":{"t":"Increases all allies' Attack by  in dungeon battles.","mode":"dungeon"}},"21090":{"id":21090,"n":"Cifla","r":"Rare","el":"Necrosis","sc":"Shadow","cl":"Scourge","race":"Deep Elf","melee":true,"af":0.5,"season":"s3","b":{"hp":1958.4,"atk":78.2,"def":55.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":97.92,"atk":3.91,"def":2.75,"critRate":0.04,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Timed Strike","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Energy Draining Sword","auto":{"parts":[],"hits":2,"ticks":null,"tgt":"single"}},"u":{"n":"Shadow Explosion","auto":{"parts":[],"hits":3,"ticks":null,"tgt":"area"}}},"tm":null,"cap":null},"21600":{"id":21600,"n":"Aryasso","r":"Rare","el":"Lightning","sc":"Thunderbolt","cl":"Warrior","race":"Orc","melee":true,"af":0.55,"season":"s2","b":{"hp":1990.2,"atk":74.8,"def":55.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":99.51,"atk":3.74,"def":2.76,"critRate":0.02,"critDmg":0.0,"acc":9.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Side by Side","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"all"}},"b":{"n":"Hammer of Thunder","auto":{"parts":[{"kind":"dmg","coef":{"atk":4.0},"el":"Lightning"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Supreme Lightning","auto":{"parts":[{"kind":"dmg","coef":{"atk":6.6},"el":"Lightning"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":null},"20010":{"id":20010,"n":"Beags","r":"Rare","el":"Fire","sc":"Burn","cl":"Demolitionist","race":"Goblin","melee":false,"af":0.55,"season":"s2","b":{"hp":1409.4,"atk":73.8,"def":63.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":70.47,"atk":3.69,"def":3.15,"critRate":0.0,"critDmg":0.0,"acc":18.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Light Them Up","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Beags' Incendiary","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.0},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Blasting Potion","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.3},"el":"Fire"}],"hits":5,"ticks":null,"tgt":"area"}}},"tm":null,"cap":null},"22150":{"id":22150,"n":"Nord","r":"Rare","el":"Ice","sc":"Ice Blast","cl":"Warrior","race":"Human","melee":true,"af":0.5,"season":"s2","b":{"hp":1988.8,"atk":73.0,"def":58.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":99.44,"atk":3.65,"def":2.91,"critRate":0.02,"critDmg":0.04,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Glacial Support","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Frosty Slash","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.1},"el":"Cold"}],"hits":2,"ticks":null,"tgt":"single"}},"u":{"n":"Raging Hailstorm","auto":{"parts":[{"kind":"dmg","coef":{"atk":7.0},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":null},"21430":{"id":21430,"n":"Haldy","r":"Rare","el":"Lightning","sc":"Thunderbolt","cl":"Warrior","race":"Gnome","melee":true,"af":0.55,"season":"s2","b":{"hp":2000.2,"atk":74.0,"def":59.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":100.01,"atk":3.7,"def":2.99,"critRate":0.0,"critDmg":0.0,"acc":9.0,"res":0.0,"ench":8.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Unite as One","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Lightning Hammer","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.0},"el":"Lightning"}],"hits":2,"ticks":null,"tgt":"single"}},"u":{"n":"Thunderbolt Resonance","auto":{"parts":[{"kind":"dmg","coef":{"atk":4.0,"ench":30.0},"el":"Lightning"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":null},"22870":{"id":22870,"n":"Roberta","r":"Rare","el":"Ice","sc":"Ice Blast","cl":"Wizard","race":"Merfolk","melee":false,"af":0.55,"season":"s2","b":{"hp":1451.2,"atk":79.4,"def":64.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":72.56,"atk":3.97,"def":3.22,"critRate":0.04,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Echo of Frost","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Arcane Piercer","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.5},"el":"Cold"},{"kind":"dmg","coef":{"atk":1.8},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Freezing Wave","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.5},"el":"Cold"}],"hits":3,"ticks":null,"tgt":"area"}}},"tm":null,"cap":null},"21920":{"id":21920,"n":"Percival","r":"Rare","el":"Fire","sc":"Burn","cl":"Wizard","race":"The Unstill","melee":false,"af":0.5,"season":"s2","b":{"hp":1438.4,"atk":73.6,"def":64.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":71.92,"atk":3.68,"def":3.23,"critRate":0.0,"critDmg":0.0,"acc":18.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Searing Brand","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Dance of Flames","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.35},"el":"Fire"}],"hits":3,"ticks":null,"tgt":"single"}},"u":{"n":"Skyfire","auto":{"parts":[{"kind":"dmg","coef":{"atk":6.5},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":{"t":"In Fey Meander and Trial Breakthrough battles, increases all allies' Attack by 18%.","mode":"fey_trial"}},"21720":{"id":21720,"n":"Gulal","r":"Rare","el":"Ice","sc":"Support","cl":"Ranger","race":"Frost Troll","melee":false,"af":0.4,"season":"s1","b":{"hp":1418.0,"atk":79.4,"def":64.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":70.9,"atk":3.97,"def":3.22,"critRate":0.04,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Spirit Summoning","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Shared Animosity","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.8},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Snow Mountain Hunter","auto":{"parts":[{"kind":"dmg","coef":{"atk":6.5},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":5.0,"bcB":10.0,"ufB":15.0,"ucB":23.0,"src":"2023-09-25"},"cap":null},"20270":{"id":20270,"n":"Dench","r":"Rare","el":"Poison","sc":"Poison","cl":"Wizard","race":"Orc","melee":false,"af":0.4,"season":"s1","b":{"hp":1415.8,"atk":72.8,"def":64.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":70.79,"atk":3.64,"def":3.21,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":16.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Malice","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.4},"el":"Derivative"}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Poison Blast","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.4},"el":"Poison"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Poison Mist","auto":{"parts":[{"kind":"dmg","coef":{"atk":0.8,"ench":4.0},"el":"Derivative"}],"hits":1,"ticks":19,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-25"},"cap":null},"22000":{"id":22000,"n":"Zadie","r":"Rare","el":"Fire","sc":"Support","cl":"Rogue","race":"Ratfolk","melee":true,"af":0.5,"season":"s1","b":{"hp":2028.0,"atk":74.4,"def":56.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":101.4,"atk":3.72,"def":2.83,"critRate":0.0,"critDmg":0.0,"acc":18.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Defiance","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Rupturing Flames","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.3},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Claw Suppression","auto":{"parts":[{"kind":"dmg","coef":{"atk":8.3},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":9.0,"uc":16.0,"bfB":7.0,"bcB":12.0,"ufB":15.0,"ucB":19.0,"src":"2023-09-25"},"cap":null},"20550":{"id":20550,"n":"Mulier","r":"Rare","el":"Radiance","sc":"Rally","cl":"Knight","race":"Human","melee":true,"af":0.5,"season":"s1","b":{"hp":1944.8,"atk":74.6,"def":57.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":97.24,"atk":3.73,"def":2.89,"critRate":0.02,"critDmg":0.04,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Strong Morale","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Wrath","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.0},"el":"Radiant"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Ring of Faith","auto":{"parts":[{"kind":"dmg","coef":{"atk":5.0},"el":"Radiant"},{"kind":"dmg","coef":{"atk":2.0},"el":"Radiant"},{"kind":"dmg","coef":{"atk":2.0},"el":"Radiant"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":13.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":19.0,"ucB":23.0,"src":"2023-09-25"},"cap":null},"23320":{"id":23320,"n":"Altin","r":"Rare","el":"Poison","sc":"Support","cl":"Warrior","race":"Wood Elf","melee":true,"af":0.55,"season":"s1","b":{"hp":2000.4,"atk":73.0,"def":64.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":100.02,"atk":3.65,"def":3.24,"critRate":0.0,"critDmg":0.0,"acc":9.0,"res":9.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"By My Oath!","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Victory Is Mine!","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Behold My Might!","auto":{"parts":[{"kind":"dmg","coef":{"atk":6.0},"el":"Poison"}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":9.0,"bcB":14.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-25"},"cap":null},"22390":{"id":22390,"n":"Altair","r":"Rare","el":"Lightning","sc":"Dauntless","cl":"Ranger","race":"Aerial Dwarf","melee":false,"af":0.55,"season":"s1","b":{"hp":1446.2,"atk":79.4,"def":65.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":72.31,"atk":3.97,"def":3.27,"critRate":0.04,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Lightning Ambush","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Enhanced Shots","auto":{"parts":[{"kind":"dmg","coef":{"atk":0.8},"el":"Lightning"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Lightning Blast","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.0},"el":"Lightning"}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-25"},"cap":{"t":"Increases all allies' Attack Speed by 18% in dungeon battles.","mode":"dungeon"}},"20680":{"id":20680,"n":"Arlow","r":"Rare","el":"Radiance","sc":"Rally","cl":"Rogue","race":"Human","melee":true,"af":0.5,"season":"s1","b":{"hp":1887.6,"atk":76.2,"def":58.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":94.38,"atk":3.81,"def":2.94,"critRate":0.02,"critDmg":0.04,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Radiant Splash","auto":{"parts":[{"kind":"dmg","coef":{"atk":0.5},"el":"Radiant"}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Keen Edge","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.8},"el":"Radiant"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Rupturing Light","auto":{"parts":[{"kind":"dmg","coef":{"atk":6.7},"el":"Radiant"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":13.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":19.0,"ucB":23.0,"src":"2023-09-25"},"cap":{"t":"Increases all allies' Attack by 12% in all battles.","mode":"all"}},"21380":{"id":21380,"n":"Bronwyn","r":"Rare","el":"Fire","sc":"Wild","cl":"Wizard","race":"Rural Halfling","melee":false,"af":0.4,"season":"s1","b":{"hp":1509.6,"atk":81.2,"def":64.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":75.48,"atk":4.06,"def":3.22,"critRate":0.02,"critDmg":0.04,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Wrathful Admonishment","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.5},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Flaming Retribution","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.6},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Raging Wildfire","auto":{"parts":[{"kind":"dmg","coef":{"atk":7.5},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-25"},"cap":null},"20650":{"id":20650,"n":"Sigrid","r":"Rare","el":"Poison","sc":"Support","cl":"Warrior","race":"Human","melee":false,"af":0.5,"season":"s1","b":{"hp":1465.0,"atk":81.2,"def":66.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":73.25,"atk":4.06,"def":3.34,"critRate":0.0,"critDmg":0.0,"acc":18.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Hastened Demise","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Venom Arrow","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.1},"el":"Poison"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Venomous Blast","auto":{"parts":[{"kind":"dmg","coef":{"atk":7.6},"el":"Poison"}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-25"},"cap":{"t":"Increases all allies' Accuracy by 20.0 in all battles.","mode":"all"}},"21240":{"id":21240,"n":"Dain","r":"Rare","el":"Radiance","sc":"Support","cl":"Warrior","race":"Dwarf","melee":true,"af":0.5,"season":"s1","b":{"hp":2050.8,"atk":70.4,"def":74.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":102.54,"atk":3.52,"def":3.7,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":18.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Shared Glory","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Quelling Hammer","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.75},"el":"Radiant"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Stand United","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":15.0,"ucB":23.0,"src":"2023-09-25"},"cap":{"t":"Increases all allies' Defense by 18% in dungeon battles.","mode":"dungeon"}},"21140":{"id":21140,"n":"Berrik","r":"Rare","el":"Radiance","sc":"Support","cl":"Warrior","race":"Dwarf","melee":true,"af":0.5,"season":"s1","b":{"hp":2127.8,"atk":75.6,"def":78.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":106.39,"atk":3.78,"def":3.94,"critRate":0.0,"critDmg":0.0,"acc":9.0,"res":9.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Sturdiness","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Mighty Hammer Strike","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.0,"def":2.0},"el":"Radiant"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Clan Protection","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-25"},"cap":{"t":"Increases all allies' Max HP by 18% in dungeon battles.","mode":"dungeon"}},"21840":{"id":21840,"n":"Yagnatz","r":"Rare","el":"Lightning","sc":"Dauntless","cl":"Ranger","race":"Swamp Lizardfolk","melee":false,"af":0.55,"season":"s1","b":{"hp":1414.4,"atk":79.8,"def":64.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":70.72,"atk":3.99,"def":3.21,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.08},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Mutant Thrust","auto":{"parts":[{"kind":"dmg","coef":{"atk":0.5},"el":"Lightning"}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Intimidation","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.0},"el":"Lightning"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Frenzied Slayer","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.8},"el":"Lightning"}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":3.0,"bc":8.0,"uf":9.0,"uc":16.0,"bfB":5.0,"bcB":10.0,"ufB":15.0,"ucB":19.0,"src":"2023-09-25","stale":1},"cap":null},"20260":{"id":20260,"n":"Enna","r":"Rare","el":"Lightning","sc":"Support","cl":"Druid","race":"Wood Elf","melee":false,"af":0.4,"season":"s1","b":{"hp":1452.0,"atk":63.4,"def":68.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":72.6,"atk":3.17,"def":3.42,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":18.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Tree's Protection","auto":{"parts":[{"kind":"heal","coef":{"hp":0.15},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Leaf's Aid","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Flower's Solace","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-25"},"cap":null},"23350":{"id":23350,"n":"Sallyanne","r":"Rare","el":"Lightning","sc":"Support","cl":"Warrior","race":"Human","melee":true,"af":0.55,"season":"s1","b":{"hp":1987.8,"atk":70.6,"def":67.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":99.39,"atk":3.53,"def":3.39,"critRate":0.0,"critDmg":0.0,"acc":18.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Tenacity","auto":{"parts":[{"kind":"shield","coef":{"hp":0.5},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Silent Guard","auto":{"parts":[{"kind":"shield","coef":{"hp":0.2},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Mind Your Manners","auto":{"parts":[{"kind":"dmg","coef":{"atk":7.4},"el":"Lightning"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-25"},"cap":{"t":"Increases all allies' Max HP by 18% in dungeon battles.","mode":"dungeon"}},"20100":{"id":20100,"n":"Hector","r":"Rare","el":"Ice","sc":"Support","cl":"Warrior","race":"Human","melee":true,"af":0.5,"season":"s1","b":{"hp":1837.2,"atk":77.2,"def":56.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":91.86,"atk":3.86,"def":2.83,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Fighting Spirit","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Impaling Attack","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.0},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Cleave","auto":{"parts":[{"kind":"dmg","coef":{"atk":6.0},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":3.0,"bc":8.0,"uf":12.0,"uc":20.0,"bfB":3.0,"bcB":8.0,"ufB":12.0,"ucB":20.0,"src":"2023-09-25"},"cap":{"t":"Increases all allies' Attack Speed by 12% in all battles.","mode":"all"}},"20050":{"id":20050,"n":"Forbrit","r":"Rare","el":"Ice","sc":"Support","cl":"Warrior","race":"Dwarf","melee":true,"af":0.38,"season":"s1","b":{"hp":2128.8,"atk":74.2,"def":74.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":106.44,"atk":3.71,"def":3.72,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":18.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Rugged Tenacity","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Rampage","auto":{"parts":[{"kind":"dmg","coef":{"atk":4.0},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Blunt Strike","auto":{"parts":[{"kind":"dmg","coef":{"atk":7.0},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":3.0,"bc":8.0,"uf":12.0,"uc":20.0,"bfB":5.0,"bcB":10.0,"ufB":15.0,"ucB":23.0,"src":"2023-09-25"},"cap":{"t":"Increases all allies' HP by 12% in all battles.","mode":"all"}},"20180":{"id":20180,"n":"Usha","r":"Rare","el":"Ice","sc":"Frost","cl":"Knight","race":"Human","melee":true,"af":0.5,"season":"s1","b":{"hp":1846.8,"atk":80.0,"def":58.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":92.34,"atk":4.0,"def":2.92,"critRate":0.02,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.04},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Freezing Over","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Glacial Stronghold","auto":{"parts":[{"kind":"shield","coef":{"atk":3.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Icebreaker Slash","auto":{"parts":[{"kind":"dmg","coef":{"atk":4.0},"el":"Cold"}],"hits":2,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":13.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":19.0,"ucB":23.0,"src":"2023-09-25","stale":1},"cap":{"t":"Increases all allies' Max HP by 18% in dungeon battles.","mode":"dungeon"}},"23300":{"id":23300,"n":"Uloar","r":"Rare","el":"Necrosis","sc":"Support","cl":"Druid","race":"Wood Elf","melee":false,"af":0.55,"season":"s1","b":{"hp":1453.6,"atk":81.2,"def":65.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":72.68,"atk":4.06,"def":3.26,"critRate":0.02,"critDmg":0.0,"acc":9.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Life Conservation","auto":{"parts":[{"kind":"heal","coef":{"atk":2.2},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Shadow Eclipse","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.0},"el":"Necrotic"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Creeping Shadows","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.0},"el":"Necrotic"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"uf":12.0,"uc":20.0,"bfB":7.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-25"},"cap":{"t":"Increases all allies' Accuracy by 20.0 in all battles.","mode":"all"}},"20560":{"id":20560,"n":"Urzog","r":"Rare","el":"Ice","sc":"Frost","cl":"Barbarian","race":"Orc","melee":true,"af":0.5,"season":"s1","b":{"hp":1933.4,"atk":76.6,"def":57.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":96.67,"atk":3.83,"def":2.85,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Killing Intent","auto":{"parts":[{"kind":"dmg","coef":{"atk":0.2},"el":"Derivative"}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Battle Cry","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Raging Plunder","auto":{"parts":[{"kind":"dmg","coef":{"atk":6.7},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":3.0,"bc":8.0,"uf":12.0,"uc":20.0,"bfB":3.0,"bcB":8.0,"ufB":12.0,"ucB":20.0,"src":"2023-09-25"},"cap":{"t":"Increases all allies' Max HP by 12% in all battles.","mode":"all"}},"20780":{"id":20780,"n":"Heksandra","r":"Rare","el":"Poison","sc":"Support","cl":"Wizard","race":"Human","melee":false,"af":0.4,"season":"s1","b":{"hp":1611.0,"atk":74.0,"def":73.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":80.55,"atk":3.7,"def":3.66,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":18.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Whisper of Protection","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Whispered Blessing","auto":{"parts":[{"kind":"heal","coef":{"atk":1.5,"ench":15.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Silent Prayer","auto":{"parts":[{"kind":"heal","coef":{"thp":0.2},"el":null}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":5.0,"bcB":10.0,"ufB":12.0,"ucB":20.0,"src":"2023-09-25"},"cap":{"t":"Increases all allies' Enlightenment by 24.0 in all battles.","mode":"all"}},"20370":{"id":20370,"n":"Awstin","r":"Rare","el":"Radiance","sc":"Support","cl":"Ranger","race":"Human","melee":false,"af":0.55,"season":"s1","b":{"hp":1456.6,"atk":75.6,"def":65.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":72.83,"atk":3.78,"def":3.28,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":16.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Perfect Timing","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Chain Arrows","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.2},"el":"Radiant"}],"hits":3,"ticks":null,"tgt":"single"}},"u":{"n":"Stun Arrows","auto":{"parts":[{"kind":"dmg","coef":{"atk":8.0},"el":"Radiant"}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":15.0,"ucB":23.0,"src":"2023-09-25"},"cap":null},"20460":{"id":20460,"n":"Jijel","r":"Rare","el":"Poison","sc":"Support","cl":"Scourge","race":"Forest Troll","melee":false,"af":0.55,"season":"s1","b":{"hp":1518.2,"atk":80.4,"def":66.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":75.91,"atk":4.02,"def":3.33,"critRate":0.0,"critDmg":0.0,"acc":18.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Precise Defense","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Rough Stab","auto":{"parts":[{"kind":"dmg","coef":{"atk":4.09},"el":"Poison"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Spear of Venom","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.0},"el":"Poison"}],"hits":3,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"uf":12.0,"uc":20.0,"bfB":7.0,"ufB":15.0,"ucB":20.0,"src":"2023-09-25"},"cap":null},"21330":{"id":21330,"n":"Fizzle","r":"Rare","el":"Lightning","sc":"Support","cl":"Demolitionist","race":"Goblin","melee":false,"af":0.55,"season":"s1","b":{"hp":1447.4,"atk":75.4,"def":66.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":72.37,"atk":3.77,"def":3.34,"critRate":0.0,"critDmg":0.0,"acc":9.0,"res":9.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Electric Shield","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Tingly Strike","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.5,"def":2.5},"el":"Lightning"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Electrical Charge","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.0,"def":5.0},"el":"Lightning"}],"hits":3,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-25"},"cap":null},"20900":{"id":20900,"n":"Caledo","r":"Rare","el":"Radiance","sc":"Support","cl":"Warrior","race":"Sheen Elf","melee":true,"af":0.5,"season":"s1","b":{"hp":2042.0,"atk":70.4,"def":69.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":102.1,"atk":3.52,"def":3.45,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":16.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Guardian Heart","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Support","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Crescent Luster","auto":{"parts":[{"kind":"heal","coef":{"thp":0.1,"ench":22.0},"el":null}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":3.0,"bc":8.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-25"},"cap":{"t":"Increases all allies' Max HP by 12% in all battles.","mode":"all"}},"21980":{"id":21980,"n":"Zethos","r":"Rare","el":"Ice","sc":"Frost","cl":"Warrior","race":"Valley Minotaur","melee":false,"af":0.5,"season":"s1","b":{"hp":1421.4,"atk":80.4,"def":63.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":71.07,"atk":4.02,"def":3.19,"critRate":0.04,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Lonely Heart","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Solitary Patrol","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.5},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Explosive Resolve","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.5},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-25"},"cap":{"t":"Increases all allies' Max HP by 18% in dungeon battles.","mode":"dungeon"}},"20610":{"id":20610,"n":"Livia","r":"Rare","el":"Fire","sc":"Support","cl":"Warrior","race":"Human","melee":true,"af":0.38,"season":"s1","b":{"hp":2297.0,"atk":80.0,"def":56.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":114.85,"atk":4.0,"def":2.83,"critRate":0.0,"critDmg":0.0,"acc":18.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Tactical Defense","auto":{"parts":[{"kind":"shield","coef":{"thp":0.2},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Breaking Free","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.9},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Clearing the Path","auto":{"parts":[{"kind":"dmg","coef":{"atk":4.0,"hp":0.1},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-25"},"cap":null},"20960":{"id":20960,"n":"Quarion","r":"Rare","el":"Radiance","sc":"Support","cl":"Wizard","race":"Sheen Elf","melee":false,"af":0.4,"season":"s1","b":{"hp":1522.8,"atk":65.4,"def":65.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":76.14,"atk":3.27,"def":3.28,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":18.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Beneficence","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Moon Crown","auto":{"parts":[{"kind":"shield","coef":{"thp":0.1},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Crescent Protection","auto":{"parts":[{"kind":"heal","coef":{"thp":0.15},"el":null}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"uf":9.0,"uc":16.0,"bfB":7.0,"ufB":15.0,"ucB":19.0,"src":"2023-09-25"},"cap":null},"21110":{"id":21110,"n":"Noteera","r":"Rare","el":"Poison","sc":"Poison","cl":"Scourge","race":"Deep Elf","melee":true,"af":0.5,"season":"s1","b":{"hp":1983.4,"atk":74.6,"def":63.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":99.17,"atk":3.73,"def":3.19,"critRate":0.04,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Assassinator Technique","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Shadow Poison Dart","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Abyssal Thrust","auto":{"parts":[{"kind":"dmg","coef":{"atk":0.6},"el":"Poison"},{"kind":"dmg","coef":{"atk":2.4},"el":"Poison"}],"hits":4,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":14.0,"uc":20.0,"bfB":5.0,"bcB":10.0,"ufB":17.0,"ucB":23.0,"src":"2023-09-25"},"cap":null},"20500":{"id":20500,"n":"Immeral","r":"Rare","el":"Lightning","sc":"Dauntless","cl":"Ranger","race":"Wood Elf","melee":true,"af":0.5,"season":"s1","b":{"hp":1963.0,"atk":75.0,"def":56.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":98.15,"atk":3.75,"def":2.8,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.08},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Natural Instinct","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Nature's Gift","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Agile Leap","auto":{"parts":[{"kind":"dmg","coef":{"atk":7.5},"el":"Lightning"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":7.0,"bc":12.0,"uf":12.0,"uc":20.0,"bfB":9.0,"bcB":14.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-25","stale":1},"cap":{"t":"Increases all allies' Max HP by 12% in all battles.","mode":"all"}},"23330":{"id":23330,"n":"Letalis","r":"Rare","el":"Poison","sc":"Support","cl":"Wizard","race":"The Unstill","melee":false,"af":0.55,"season":"s1","b":{"hp":1961.8,"atk":77.4,"def":61.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":98.09,"atk":3.87,"def":3.06,"critRate":0.0,"critDmg":0.0,"acc":18.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Trembling Voice","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Ringing Doom","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.5},"el":"Poison"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Reaping Rhapsody","auto":{"parts":[{"kind":"dmg","coef":{"atk":7.2},"el":"Poison"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-25"},"cap":{"t":"Increases all allies' Attack by 18% in dungeon battles.","mode":"dungeon"}},"22360":{"id":22360,"n":"Gloin","r":"Rare","el":"Fire","sc":"Support","cl":"Gunslinger","race":"Aerial Dwarf","melee":false,"af":0.55,"season":"s1","b":{"hp":1471.2,"atk":76.2,"def":66.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":73.56,"atk":3.81,"def":3.31,"critRate":0.0,"critDmg":0.0,"acc":9.0,"res":9.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Aerial Support","auto":{"parts":[{"kind":"shield","coef":{"hp":0.1},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Precise Strike","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.15},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Purifying Fire","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.4},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"uf":12.0,"uc":20.0,"bfB":7.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-25"},"cap":null},"20710":{"id":20710,"n":"Wilt","r":"Rare","el":"Ice","sc":"Frost","cl":"Wizard","race":"Human","melee":false,"af":0.4,"season":"s1","b":{"hp":1413.0,"atk":79.4,"def":63.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":70.65,"atk":3.97,"def":3.19,"critRate":0.02,"critDmg":0.0,"acc":9.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Frost Cantrips","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Icy Shot","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.0},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Freezing Wind","auto":{"parts":[{"kind":"dmg","coef":{"atk":5.5},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-25"},"cap":null},"20390":{"id":20390,"n":"Nedda","r":"Rare","el":"Fire","sc":"Wild","cl":"Sorcerer","race":"Ridge Halfling","melee":false,"af":0.5,"season":"s1","b":{"hp":1362.4,"atk":85.0,"def":64.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":68.12,"atk":4.25,"def":3.22,"critRate":0.04,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Wild Swing","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Fireball","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.5},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Sunburst","auto":{"parts":[{"kind":"dmg","coef":{"atk":8.0},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":9.0,"uc":16.0,"bfB":7.0,"bcB":12.0,"ufB":15.0,"ucB":19.0,"src":"2023-09-25"},"cap":{"t":"Increases all allies' Attack by 18% in dungeon battles.","mode":"dungeon"}},"20480":{"id":20480,"n":"Irina","r":"Rare","el":"Lightning","sc":"Support","cl":"Wizard","race":"Human","melee":false,"af":0.4,"season":"s1","b":{"hp":1459.8,"atk":81.4,"def":60.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":72.99,"atk":4.07,"def":3.02,"critRate":0.0,"critDmg":0.0,"acc":18.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Heart of Protector","auto":{"parts":[{"kind":"shield","coef":{"thp":0.1},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Lightning Chain","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.6},"el":"Lightning"}],"hits":3,"ticks":null,"tgt":"single"}},"u":{"n":"Lightning Storm","auto":{"parts":[{"kind":"dmg","coef":{"atk":7.1},"el":"Lightning"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":3.0,"bc":8.0,"uf":12.0,"uc":20.0,"bfB":5.0,"bcB":10.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-25"},"cap":null},"21040":{"id":21040,"n":"Tioh","r":"Rare","el":"Necrosis","sc":"Summon","cl":"Warrior","race":"Deep Elf","melee":true,"af":0.5,"season":"s1","b":{"hp":1864.8,"atk":76.0,"def":56.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":93.24,"atk":3.8,"def":2.8,"critRate":0.02,"critDmg":0.04,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Mourning","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Death and Decay","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.0},"el":"Necrotic"}],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Sacrifice","auto":{"parts":[{"kind":"dmg","coef":{"atk":5.5},"el":"Necrotic"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":13.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":19.0,"ucB":23.0,"src":"2023-09-25"},"cap":{"t":"Increases all allies' Attack by 12% in all battles.","mode":"all"}},"20790":{"id":20790,"n":"Meggan","r":"Rare","el":"Necrosis","sc":"Support","cl":"Wizard","race":"Human","melee":false,"af":0.4,"season":"s1","b":{"hp":1523.6,"atk":72.2,"def":68.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":76.18,"atk":3.61,"def":3.42,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":18.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Sanctuary","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Brisk Pace","auto":{"parts":[{"kind":"heal","coef":{"thp":0.1},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Shield of Darkness","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":3.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":3.0,"bcB":10.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-25"},"cap":null},"21220":{"id":21220,"n":"Dora","r":"Rare","el":"Lightning","sc":"Support","cl":"Ranger","race":"Dwarf","melee":false,"af":0.55,"season":"s1","b":{"hp":1473.4,"atk":74.8,"def":66.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":73.67,"atk":3.74,"def":3.3,"critRate":0.0,"critDmg":0.0,"acc":18.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Fine Tune","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Slowed Pace","auto":{"parts":[{"kind":"dmg","coef":{"atk":4.0},"el":"Lightning"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Focus On Work","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":3.0,"bc":8.0,"uf":9.0,"uc":16.0,"bfB":5.0,"bcB":10.0,"ufB":15.0,"ucB":19.0,"src":"2023-09-25"},"cap":null},"21060":{"id":21060,"n":"Adrie","r":"Rare","el":"Necrosis","sc":"Support","cl":"Ranger","race":"Deep Elf","melee":false,"af":0.55,"season":"s1","b":{"hp":1501.2,"atk":74.6,"def":65.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":75.06,"atk":3.73,"def":3.26,"critRate":0.0,"critDmg":0.0,"acc":18.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Disguise","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Obstacle","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.6},"el":"Necrotic"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Ambush","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.8},"el":"Necrotic"}],"hits":3,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-25"},"cap":null},"20760":{"id":20760,"n":"Thea","r":"Rare","el":"Fire","sc":"Wild","cl":"Rogue","race":"Human","melee":true,"af":0.5,"season":"s1","b":{"hp":1968.6,"atk":80.4,"def":57.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":98.43,"atk":4.02,"def":2.86,"critRate":0.0,"critDmg":0.08,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Wild Resonance","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Sprint Strike","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.5},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Chain Slash","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.8},"el":"Fire"}],"hits":3,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-25"},"cap":null},"20870":{"id":20870,"n":"Evania","r":"Rare","el":"Radiance","sc":"Rally","cl":"Warrior","race":"Sheen Elf","melee":true,"af":0.55,"season":"s1","b":{"hp":1949.0,"atk":77.2,"def":62.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":97.45,"atk":3.86,"def":3.13,"critRate":0.02,"critDmg":0.04,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Radiant Sunshine","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Standard Swordsmanship","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.8},"el":"Radiant"}],"hits":2,"ticks":null,"tgt":"single"}},"u":{"n":"Crescent Slash","auto":{"parts":[{"kind":"dmg","coef":{"atk":6.0},"el":"Radiant"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-25"},"cap":null},"20340":{"id":20340,"n":"Korth","r":"Rare","el":"Necrosis","sc":"Summon","cl":"Summoner","race":"Undead","melee":false,"af":0.4,"season":"s1","b":{"hp":1402.6,"atk":80.4,"def":62.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":70.13,"atk":4.02,"def":3.12,"critRate":0.04,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Shadow Enhanced","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Shadow Servant","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Shadow Inspired","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":26.0,"src":"2023-09-25"},"cap":null},"21660":{"id":21660,"n":"Dubok","r":"Rare","el":"Fire","sc":"Support","cl":"Shaman","race":"Orc","melee":false,"af":0.4,"season":"s1","b":{"hp":1535.2,"atk":73.2,"def":74.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":76.76,"atk":3.66,"def":3.71,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":18.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Rushed Rescue","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Blinding Flare","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.0},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Warming Fire","auto":{"parts":[{"kind":"shield","coef":{"hp":0.15},"el":null}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-25"},"cap":{"t":"Increases all allies' Defense by 12% in all battles.","mode":"all"}},"20090":{"id":20090,"n":"Lorarii","r":"Rare","el":"Poison","sc":"Poison","cl":"Knight","race":"Human","melee":true,"af":0.5,"season":"s1","b":{"hp":1931.4,"atk":75.0,"def":57.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":96.57,"atk":3.75,"def":2.89,"critRate":0.02,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":8.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Swoop In","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Poisoned Pike","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.5},"el":"Poison"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Banishing Smite","auto":{"parts":[{"kind":"dmg","coef":{"atk":6.0},"el":"Poison"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-25"},"cap":null},"20510":{"id":20510,"n":"Vethak","r":"Rare","el":"Poison","sc":"Poison","cl":"Warrior","race":"Blazeland Lizardfolk","melee":true,"af":0.38,"season":"s1","b":{"hp":1850.6,"atk":81.6,"def":60.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":92.53,"atk":4.08,"def":3.03,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Swoop In","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Pierce","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.0},"el":"Poison"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Fierce Attack","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.0},"el":"Poison"}],"hits":3,"ticks":null,"tgt":"area"}}},"tm":{"bf":3.0,"bc":8.0,"uf":12.0,"uc":20.0,"bfB":3.0,"bcB":8.0,"ufB":12.0,"ucB":20.0,"src":"2023-09-25"},"cap":{"t":"Increases all allies' Max HP by 12% in all battles.","mode":"all"}},"21810":{"id":21810,"n":"Eleuia","r":"Rare","el":"Necrosis","sc":"Summon","cl":"Barbarian","race":"Blazeland Lizardfolk","melee":false,"af":0.4,"season":"s1","b":{"hp":1437.2,"atk":80.6,"def":67.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":71.86,"atk":4.03,"def":3.39,"critRate":0.04,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"To Work!","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"No Delay!","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.3},"el":"Necrotic"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"No Rest for the Undead","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"uf":12.0,"uc":20.0,"bfB":7.0,"ufB":15.0,"ucB":23.0,"src":"2023-09-25"},"cap":{"t":"Increases all allies' Attack Speed by 12% in all battles.","mode":"all"}},"21630":{"id":21630,"n":"Gusni","r":"Rare","el":"Ice","sc":"Support","cl":"Warrior","race":"Orc","melee":false,"af":0.4,"season":"s1","b":{"hp":1445.2,"atk":76.6,"def":67.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":72.26,"atk":3.83,"def":3.39,"critRate":0.0,"critDmg":0.0,"acc":9.0,"res":9.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Unforgivable","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Protection of Orc","auto":{"parts":[{"kind":"shield","coef":{"thp":0.1,"ench":20.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Grudge of Orc","auto":{"parts":[{"kind":"dmg","coef":{"atk":5.0,"ench":30.0},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-25"},"cap":{"t":"Increases all allies' HP by 12% in all battles.","mode":"all"}},"23310":{"id":23310,"n":"Edgar","r":"Rare","el":"Necrosis","sc":"Support","cl":"Ranger","race":"Human","melee":true,"af":0.55,"season":"s1","b":{"hp":1992.8,"atk":70.8,"def":71.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":99.64,"atk":3.54,"def":3.55,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":18.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Live in Shadows","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Iron Guise","auto":{"parts":[{"kind":"shield","coef":{"hp":0.15},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Hatred","auto":{"parts":[{"kind":"dmg","coef":{"atk":5.0,"hp":0.1},"el":"Necrotic"},{"kind":"shield","coef":{"hp":0.25},"el":null}],"hits":1,"ticks":null,"tgt":"all"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-25"},"cap":{"t":"Increases all allies' Max HP by 12% in all battles.","mode":"all"}},"21470":{"id":21470,"n":"Rephe","r":"Rare","el":"Ice","sc":"Support","cl":"Warrior","race":"Deep Gnome","melee":true,"af":0.5,"season":"s1","b":{"hp":2245.8,"atk":73.6,"def":60.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":112.29,"atk":3.68,"def":3.04,"critRate":0.0,"critDmg":0.0,"acc":18.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Secondary Damage","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Cold Iron Hammer","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.8},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Frozen Bomb","auto":{"parts":[{"kind":"dmg","coef":{"atk":7.0},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":15.0,"ucB":23.0,"src":"2023-09-25"},"cap":null},"23340":{"id":23340,"n":"Yamyra","r":"Rare","el":"Fire","sc":"Support","cl":"Warrior","race":"Rural Halfling","melee":true,"af":0.55,"season":"s1","b":{"hp":1989.0,"atk":68.8,"def":64.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":99.45,"atk":3.44,"def":3.23,"critRate":0.0,"critDmg":0.0,"acc":18.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Empty Rhetoric","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Nullified Harm","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Unruly Flame","auto":{"parts":[{"kind":"dmg","coef":{"atk":8.0},"el":"Fire"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":3.0,"bc":8.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-25"},"cap":{"t":"Increases all allies' Defense by 12% in all battles.","mode":"all"}},"22190":{"id":22190,"n":"Fitz","r":"Rare","el":"Necrosis","sc":"Support","cl":"Warrior","race":"Undead","melee":true,"af":0.5,"season":"s1","b":{"hp":2244.8,"atk":73.2,"def":62.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":112.24,"atk":3.66,"def":3.11,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":24.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Masochist","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Optimism","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Glutton for Punishment","auto":{"parts":[{"kind":"other","coef":{"hp":0.1},"el":null}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":3.0,"bc":8.0,"uf":12.0,"uc":20.0,"bfB":5.0,"bcB":10.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-25"},"cap":null},"20310":{"id":20310,"n":"Wellby","r":"Rare","el":"Radiance","sc":"Rally","cl":"Wizard","race":"Rural Halfling","melee":false,"af":0.4,"season":"s1","b":{"hp":1341.8,"atk":86.0,"def":66.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":67.09,"atk":4.3,"def":3.31,"critRate":0.04,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Harmony Brings Wealth","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Pay Up Now","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.0},"el":"Radiant"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Fair or Foul","auto":{"parts":[{"kind":"dmg","coef":{"atk":6.6},"el":"Radiant"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":13.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":19.0,"ucB":23.0,"src":"2023-09-25"},"cap":null},"21890":{"id":21890,"n":"Tauricen","r":"Rare","el":"Lightning","sc":"Dauntless","cl":"Warrior","race":"Valley Minotaur","melee":true,"af":0.4,"season":"s1","b":{"hp":1910.4,"atk":77.6,"def":54.4,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":95.52,"atk":3.88,"def":2.72,"critRate":0.04,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Raging Fury","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Wrathful Slash","auto":{"parts":[{"kind":"dmg","coef":{"atk":2.0},"el":"Lightning"}],"hits":2,"ticks":null,"tgt":"single"}},"u":{"n":"Impetuous Whirlwind","auto":{"parts":[{"kind":"dmg","coef":{"atk":6.95},"el":"Lightning"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":null,"cap":{"t":"Increases all allies' Max HP by 12% in all battles.","mode":"all"}},"21750":{"id":21750,"n":"Loris","r":"Rare","el":"Ice","sc":"Support","cl":"Warrior","race":"Human","melee":true,"af":0.5,"season":"s1","b":{"hp":2056.0,"atk":67.2,"def":66.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":102.8,"atk":3.36,"def":3.34,"critRate":0.0,"critDmg":0.0,"acc":9.0,"res":9.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Dragon's Ice Pick","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Dragon Scale Mail","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.0,"def":1.5},"el":"Cold"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Faith's Pilgrim","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"bc":10.0,"uf":12.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-25"},"cap":null},"20860":{"id":20860,"n":"Broll","r":"Rare","el":"Radiance","sc":"Rally","cl":"Warrior","race":"Sheen Elf","melee":true,"af":0.5,"season":"s1","b":{"hp":1927.6,"atk":75.2,"def":56.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":96.38,"atk":3.76,"def":2.81,"critRate":0.0,"critDmg":0.08,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Call of the Open Sea","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Shatter Strike","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.5},"el":"Radiant"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Boarding Action","auto":{"parts":[{"kind":"dmg","coef":{"atk":6.0},"el":"Radiant"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":10.0,"uf":13.0,"uc":20.0,"bfB":7.0,"bcB":12.0,"ufB":19.0,"ucB":23.0,"src":"2023-09-25"},"cap":{"t":"Increases all allies' Crit Damage by 12% in all battles.","mode":"all"}},"20580":{"id":20580,"n":"Grover","r":"Rare","el":"Lightning","sc":"Support","cl":"Rogue","race":"Human","melee":true,"af":0.4,"season":"s1","b":{"hp":1961.2,"atk":79.0,"def":60.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":98.06,"atk":3.95,"def":3.01,"critRate":0.0,"critDmg":0.0,"acc":18.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Hide and Seek","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Cunning Swordplay","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.35},"el":"Lightning"}],"hits":2,"ticks":null,"tgt":"single"}},"u":{"n":"Thieving Techniques","auto":{"parts":[{"kind":"dmg","coef":{"atk":3.7},"el":"Lightning"}],"hits":2,"ticks":null,"tgt":"single"}}},"tm":{"bf":5.0,"uf":9.0,"uc":16.0,"bfB":7.0,"ufB":15.0,"ucB":19.0,"src":"2023-09-25"},"cap":{"t":"Increases all allies' Accuracy by 20.0 in all battles.","mode":"all"}},"21940":{"id":21940,"n":"Haug","r":"Rare","el":"Lightning","sc":"Dauntless","cl":"Warrior","race":"Valley Minotaur","melee":false,"af":0.4,"season":"s1","b":{"hp":1465.8,"atk":79.0,"def":65.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":73.29,"atk":3.95,"def":3.25,"critRate":0.04,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Relentless Onslaught","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Lightning Arrow","auto":{"parts":[{"kind":"dmg","coef":{"atk":1.85},"el":"Lightning"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Piercing Spear","auto":{"parts":[{"kind":"dmg","coef":{"atk":6.8},"el":"Lightning"},{"kind":"dmg","coef":{"atk":0.4},"el":"Lightning"}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":3.0,"bc":8.0,"uf":12.0,"uc":20.0,"bfB":5.0,"bcB":10.0,"ufB":18.0,"ucB":23.0,"src":"2023-09-25"},"cap":{"t":"Increases all allies' Attack Speed by 18% in dungeon battles.","mode":"dungeon"}},"20720":{"id":20720,"n":"Cato","r":"Common","el":"Radiance","sc":"Support","cl":"Wizard","race":"Human","melee":false,"af":0.4,"season":"s4","b":{"hp":1423.6,"atk":69.2,"def":59.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":71.18,"atk":3.46,"def":2.98,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Secondary Protection","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Light Orb","auto":{"parts":[{"kind":"other","coef":{"atk":3.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Circle of Protection","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":3.0,"bc":8.0,"uf":12.0,"uc":20.0,"bfB":3.0,"bcB":8.0,"ufB":12.0,"ucB":20.0,"src":"2023-09-25"},"cap":null},"22200":{"id":22200,"n":"Olaf","r":"Common","el":"Necrosis","sc":"Support","cl":"Warrior","race":"Undead","melee":true,"af":0.5,"season":"s4","b":{"hp":1953.4,"atk":64.4,"def":57.8,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":97.67,"atk":3.22,"def":2.89,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Unholy Weapon","auto":{"parts":[{"kind":"other","coef":{"atk":0.15},"el":"Necrotic"}],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Void Swing","auto":{"parts":[{"kind":"other","coef":{"atk":3.0},"el":"Necrotic"}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Skeleton Spin","auto":{"parts":[{"kind":"other","coef":{"atk":3.5},"el":"Necrotic"}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":3.0,"bc":8.0,"uf":12.0,"uc":20.0,"bfB":3.0,"bcB":8.0,"ufB":12.0,"ucB":20.0,"src":"2023-09-25"},"cap":null},"20520":{"id":20520,"n":"Vekuzz","r":"Common","el":"Poison","sc":"Support","cl":"Warrior","race":"Forest Troll","melee":true,"af":0.5,"season":"s4","b":{"hp":2003.6,"atk":66.2,"def":53.6,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":100.18,"atk":3.31,"def":2.68,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Battle Frenzy","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Self-Healing","auto":{"parts":[{"kind":"heal","coef":{"atk":1.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Flying Axe","auto":{"parts":[{"kind":"other","coef":{"atk":6.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":3.0,"bc":8.0,"uf":12.0,"uc":20.0,"bfB":3.0,"bcB":8.0,"ufB":12.0,"ucB":20.0,"src":"2023-09-25"},"cap":null},"20490":{"id":20490,"n":"Sailla","r":"Common","el":"Lightning","sc":"Support","cl":"Ranger","race":"Wood Elf","melee":true,"af":0.5,"season":"s4","b":{"hp":2004.6,"atk":65.4,"def":54.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":100.23,"atk":3.27,"def":2.71,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Instinct","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Nature's Gift","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Precise Assault","auto":{"parts":[{"kind":"other","coef":{"atk":6.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":3.0,"bc":8.0,"uf":12.0,"uc":20.0,"bfB":3.0,"bcB":8.0,"ufB":12.0,"ucB":20.0,"src":"2023-09-25"},"cap":null},"20530":{"id":20530,"n":"Dollaad","r":"Common","el":"Poison","sc":"Support","cl":"Warrior","race":"Goblin","melee":true,"af":0.5,"season":"s4","b":{"hp":1984.2,"atk":64.8,"def":54.2,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":99.21,"atk":3.24,"def":2.71,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Overestimated Force","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Unity","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"area"}},"u":{"n":"Poison Vial","auto":{"parts":[{"kind":"other","coef":{"atk":7.0},"el":null}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":3.0,"bc":8.0,"uf":12.0,"uc":20.0,"bfB":3.0,"bcB":8.0,"ufB":12.0,"ucB":20.0,"src":"2023-09-25"},"cap":null},"20800":{"id":20800,"n":"Merideth","r":"Common","el":"Radiance","sc":"Support","cl":"Sorcerer","race":"Human","melee":false,"af":0.4,"season":"s4","b":{"hp":1406.6,"atk":68.2,"def":61.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":70.33,"atk":3.41,"def":3.05,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Prayer of Life","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Healing Words","auto":{"parts":[{"kind":"heal","coef":{"thp":0.2},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Circle of Healing","auto":{"parts":[{"kind":"heal","coef":{"thp":0.25},"el":null}],"hits":1,"ticks":null,"tgt":"area"}}},"tm":{"bf":5.0,"bc":12.0,"uf":14.0,"uc":24.0,"bfB":5.0,"bcB":12.0,"ufB":14.0,"ucB":24.0,"src":"2023-09-25"},"cap":null},"20380":{"id":20380,"n":"Dillon","r":"Common","el":"Lightning","sc":"Support","cl":"Ranger","race":"Human","melee":false,"af":0.55,"season":"s4","b":{"hp":1424.4,"atk":69.2,"def":61.0,"critRate":0.1,"critDmg":0.5,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"g":{"hp":71.22,"atk":3.46,"def":3.05,"critRate":0.0,"critDmg":0.0,"acc":0.0,"res":0.0,"ench":0.0,"haste":0.0,"atkSpd":0.0},"insp":[{"t":""},{"t":""},{"t":""},{"t":""},{"t":""}],"sk":{"p":{"n":"Relentlessness","auto":{"parts":[],"hits":1,"ticks":null,"tgt":"single"}},"b":{"n":"Precise Shot","auto":{"parts":[{"kind":"other","coef":{"atk":3.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}},"u":{"n":"Blinding Arrow","auto":{"parts":[{"kind":"other","coef":{"atk":6.0},"el":null}],"hits":1,"ticks":null,"tgt":"single"}}},"tm":{"bf":3.0,"bc":8.0,"uf":10.0,"uc":16.0,"bfB":3.0,"bcB":8.0,"ufB":10.0,"ucB":16.0,"src":"2023-09-25"},"cap":null}},"artifacts":{"8000217":{"id":8000217,"n":"Death-Knell Horn","r":"Mythic","season":"s9","stats":[["hpPct",[0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.04,0.05,0.05,0.05,0.05]],["ench",[2.0,2.0,2.0,2.0,2.0,4.0,4.0,4.0,4.0,4.0,6.0,6.0,6.0,8.0,8.0,8.0,10.0,10.0,10.0,10.0]]],"spell":"Tough Love","tiers":["When any ally gains an Aura, all allies receive [2000% Enlightenment][10% of the target's Max HP]healing. This has a 20.0s cooldown (tasks can still be completed to trigger this after Auras reach maximum stacks).\\nAll allies except the hero can each gain 2 Auras (these can be the same Auras). After gaining 2 Auras, completing a task again grants 7% increased damage dealt.","When any ally gains an Aura, all allies receive [2200% Enlightenment][11% of the target's Max HP]healing. This has a 20.0s cooldown (tasks can still be completed to trigger this after Auras reach maximum stacks).\\nAll allies except the hero can each gain 2 Auras (these can be the same Auras). After gaining 2 Auras, completing a task again grants 10% increased damage dealt.","When any ally gains an Aura, all allies receive [2400% Enlightenment][12% of the target's Max HP]healing. This has a 20.0s cooldown (tasks can still be completed to trigger this after Auras reach maximum stacks).\\nAll allies except the hero can each gain 2 Auras (these can be the same Auras). After gaining 2 Auras, completing a task again grants 12% increased damage dealt.","When any ally gains an Aura, all allies receive [2600% Enlightenment][13% of the target's Max HP]healing. This has a 20.0s cooldown (tasks can still be completed to trigger this after Auras reach maximum stacks).\\nAll allies except the hero can each gain 2 Auras (these can be the same Auras). After gaining 2 Auras, completing a task again grants 15% increased damage dealt.","When any ally gains an Aura, all allies receive [2800% Enlightenment][14% of the target's Max HP]healing. This has a 20.0s cooldown (tasks can still be completed to trigger this after Auras reach maximum stacks).\\nAll allies except the hero can each gain 2 Auras (these can be the same Auras). After gaining 2 Auras, completing a task again grants 17% increased damage dealt.","When any ally gains an Aura, all allies receive [3000% Enlightenment][15% of the target's Max HP]healing. This has a 20.0s cooldown (tasks can still be completed to trigger this after Auras reach maximum stacks).\\nAll allies except the hero can each gain 2 Auras (these can be the same Auras). After gaining 2 Auras, completing a task again grants 20% increased damage dealt."]},"8000216":{"id":8000216,"n":"Moonlit Gemstone Necklace","r":"Mythic","season":"s9","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["atkPct",[0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.04,0.05,0.05,0.05,0.05]]],"spell":"Torrential Radiance","tiers":["Each stack of Rally Monelisse has increases the damage she deals by 7%. Every time Rally gained or consumed through battle skills and ultimate skills reaches 5 stack(s), permanently increases Attack by 3%, up to 4 stacks.","Each stack of Rally Monelisse has increases the damage she deals by 10%. Every time Rally gained or consumed through battle skills and ultimate skills reaches 5 stack(s), permanently increases Attack by 5%, up to 4 stacks.","Each stack of Rally Monelisse has increases the damage she deals by 12%. Every time Rally gained or consumed through battle skills and ultimate skills reaches 5 stack(s), permanently increases Attack by 7%, up to 4 stacks.","Each stack of Rally Monelisse has increases the damage she deals by 15%. Every time Rally gained or consumed through battle skills and ultimate skills reaches 5 stack(s), permanently increases Attack by 10%, up to 4 stacks.","Each stack of Rally Monelisse has increases the damage she deals by 17%. Every time Rally gained or consumed through battle skills and ultimate skills reaches 5 stack(s), permanently increases Attack by 12%, up to 4 stacks.","Each stack of Rally Monelisse has increases the damage she deals by 20%. Every time Rally gained or consumed through battle skills and ultimate skills reaches 5 stack(s), permanently increases Attack by 15%, up to 4 stacks."]},"8000215":{"id":8000215,"n":"Duskmire Crystalwing","r":"Mythic","season":"s9","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["atkPct",[0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.04,0.05,0.05,0.05,0.05]]],"spell":"Shadow's Return","tiers":["When a Specter vanishes, the damage dealt to the target increases to Damage Intensification stacks *[165% Attack] Necrotic Damage. At the same time, directly gains a [+500%Attack] shield for 5.0s.","When a Specter vanishes, the damage dealt to the target increases to Damage Intensification stacks *[180% Attack] Necrotic Damage. At the same time, directly gains a [+500%Attack] shield for 5.0s.","When a Specter vanishes, the damage dealt to the target increases to Damage Intensification stacks *[195% Attack] Necrotic Damage. At the same time, directly gains a [+500%Attack] shield for 5.0s.","When a Specter vanishes, the damage dealt to the target increases to Damage Intensification stacks *[210% Attack] Necrotic Damage. At the same time, directly gains a [+500%Attack] shield for 5.0s.","When a Specter vanishes, the damage dealt to the target increases to Damage Intensification stacks *[225% Attack] Necrotic Damage. At the same time, directly gains a [+500%Attack] shield for 5.0s.","When a Specter vanishes, the damage dealt to the target increases to Damage Intensification stacks *[240% Attack] Necrotic Damage. At the same time, directly gains a [+500%Attack] shield for 5.0s."]},"8000214":{"id":8000214,"n":"Wings of Resentment","r":"Mythic","season":"s9","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["critDmg",[0.01,0.01,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.05,0.05,0.05,0.05,0.06,0.07,0.07,0.07]]],"spell":"Growing Hatred","tiers":["The Mire Toxin effect is enhanced. When Corrosion is inflicted on a Mire Toxin bearer, the effect increases to 20%.\\nEach time the hero consumes Corruption to deal True Damage to an enemy affected by Mire Toxin, the hero's Attack increases by 1%, up to 8 stacks.","The Mire Toxin effect is enhanced. When Corrosion is inflicted on a Mire Toxin bearer, the effect increases to 21%.\\nEach time the hero consumes Corruption to deal True Damage to an enemy affected by Mire Toxin, the hero's Attack increases by 1%, up to 8 stacks.","The Mire Toxin effect is enhanced. When Corrosion is inflicted on a Mire Toxin bearer, the effect increases to 22%.\\nEach time the hero consumes Corruption to deal True Damage to an enemy affected by Mire Toxin, the hero's Attack increases by 2%, up to 8 stacks.","The Mire Toxin effect is enhanced. When Corrosion is inflicted on a Mire Toxin bearer, the effect increases to 23%.\\nEach time the hero consumes Corruption to deal True Damage to an enemy affected by Mire Toxin, the hero's Attack increases by 2%, up to 8 stacks.","The Mire Toxin effect is enhanced. When Corrosion is inflicted on a Mire Toxin bearer, the effect increases to 24%.\\nEach time the hero consumes Corruption to deal True Damage to an enemy affected by Mire Toxin, the hero's Attack increases by 3%, up to 8 stacks.","The Mire Toxin effect is enhanced. When Corrosion is inflicted on a Mire Toxin bearer, the effect increases to 25%.\\nEach time the hero consumes Corruption to deal True Damage to an enemy affected by Mire Toxin, the hero's Attack increases by 3%, up to 8 stacks."]},"8000213":{"id":8000213,"n":"Dragonbone Catalyst","r":"Mythic","season":"s8","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["hpPct",[0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.04,0.05,0.05,0.05,0.05]]],"spell":"Chaos Dominion","tiers":["While the Child of Chaos is on the field, all allies sharing his element gain 10% Damage Bonus, while allies of a different element gain 10% Damage Reduction.","While the Child of Chaos is on the field, all allies sharing his element gain 14% Damage Bonus, while allies of a different element gain 14% Damage Reduction.","While the Child of Chaos is on the field, all allies sharing his element gain 18% Damage Bonus, while allies of a different element gain 18% Damage Reduction.","While the Child of Chaos is on the field, all allies sharing his element gain 22% Damage Bonus, while allies of a different element gain 22% Damage Reduction.","While the Child of Chaos is on the field, all allies sharing his element gain 26% Damage Bonus, while allies of a different element gain 26% Damage Reduction.","While the Child of Chaos is on the field, all allies sharing his element gain 30% Damage Bonus, while allies of a different element gain 30% Damage Reduction."]},"8000196":{"id":8000196,"n":"Scepter of Sunflare","r":"Mythic","season":"s1","stats":[["hpPct",[0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.04,0.05,0.05,0.05,0.05]],["acc",[2.0,2.0,2.0,2.0,2.0,2.0,3.0,3.0,4.0,4.0,4.0,4.0,6.0,6.0,6.0,6.0,8.0,8.0,8.0,8.0]]],"spell":"Blazing Aegis","tiers":["At the start of battle, Khrysos increases his Max HP by 5%. The shields he grants are boosted by a percentage of his Max HP. For every 50 Accuracy, the shields granted by his skills are amplified by 1%.","At the start of battle, Khrysos increases his Max HP by 6%. The shields he grants are boosted by a percentage of his Max HP. For every 50 Accuracy, the shields granted by his skills are amplified by 1%.","At the start of battle, Khrysos increases his Max HP by 7%. The shields he grants are boosted by a percentage of his Max HP. For every 50 Accuracy, the shields granted by his skills are amplified by 1%.","At the start of battle, Khrysos increases his Max HP by 8%. The shields he grants are boosted by a percentage of his Max HP. For every 50 Accuracy, the shields granted by his skills are amplified by 1%.","At the start of battle, Khrysos increases his Max HP by 9%. The shields he grants are boosted by a percentage of his Max HP. For every 50 Accuracy, the shields granted by his skills are amplified by 1%.","At the start of battle, Khrysos increases his Max HP by 10%. The shields he grants are boosted by a percentage of his Max HP. For every 50 Accuracy, the shields granted by his skills are amplified by 2%."]},"8000195":{"id":8000195,"n":"Beguiling Circlet","r":"Mythic","season":"s1","stats":[["haste",[1.0,1.0,1.0,1.0,1.0,2.0,2.0,2.0,2.0,2.0,3.0,3.0,3.0,4.0,4.0,4.0,5.0,5.0,5.0,5.0]],["acc",[2.0,2.0,2.0,2.0,2.0,2.0,3.0,3.0,4.0,4.0,4.0,4.0,6.0,6.0,6.0,6.0,8.0,8.0,8.0,8.0]]],"spell":"Beguiling Circlet","tiers":["When Elecebre successfully inflicts control effects with her skills, there is a 30% chance for 2 allies with the lowest Current HP to gain 1 stack of Aegis. If this effect enables any hero to have more than 3 stacks of Aegis, grants 20% Damage Reduction to them for 10.0s.\nAegis: When taking damage, consumes 1 stack to reduce the damage taken by 70%, up to 10 stacks.","When Elecebre successfully inflicts control effects with her skills, there is a 40% chance for 2 allies with the lowest Current HP to gain 1 stack of Aegis. If this effect enables any hero to have more than 3 stacks of Aegis, grants 20% Damage Reduction to them for 10.0s.\nAegis: When taking damage, consumes 1 stack to reduce the damage taken by 70%, up to 10 stacks.","When Elecebre successfully inflicts control effects with her skills, there is a 50% chance for 2 allies with the lowest Current HP to gain 1 stack of Aegis. If this effect enables any hero to have more than 3 stacks of Aegis, grants 20% Damage Reduction to them for 10.0s.\nAegis: When taking damage, consumes 1 stack to reduce the damage taken by 70%, up to 10 stacks.","When Elecebre successfully inflicts control effects with her skills, there is a 60% chance for 2 allies with the lowest Current HP to gain 1 stack of Aegis. If this effect enables any hero to have more than 3 stacks of Aegis, grants 20% Damage Reduction to them for 10.0s.\nAegis: When taking damage, consumes 1 stack to reduce the damage taken by 70%, up to 10 stacks.","When Elecebre successfully inflicts control effects with her skills, there is a 70% chance for 2 allies with the lowest Current HP to gain 1 stack of Aegis. If this effect enables any hero to have more than 3 stacks of Aegis, grants 20% Damage Reduction to them for 10.0s.\nAegis: When taking damage, consumes 1 stack to reduce the damage taken by 70%, up to 10 stacks.","When Elecebre successfully inflicts control effects with her skills, there is a 80% chance for 2 allies with the lowest Current HP to gain 1 stack of Aegis. If this effect enables any hero to have more than 3 stacks of Aegis, grants 20% Damage Reduction to them for 10.0s.\nAegis: When taking damage, consumes 1 stack to reduce the damage taken by 70%, up to 10 stacks."]},"8000193":{"id":8000193,"n":"Diviner's Compass","r":"Mythic","season":"s1","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["critDmg",[0.01,0.01,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.05,0.05,0.05,0.05,0.06,0.07,0.07,0.07]]],"spell":"Mind Reading","tiers":["Each time allies consume the mark granted by Gladys, they gain 1 stack(s) of Secret of Heavens permanently. When Gladys grants Rally to an ally, they gain 5 stack(s) of Secret of Heavens.\nSecret of Heavens: Each stack increases the wearer's Crit Damage by 1%, up to 100 stacks.","Each time allies consume the mark granted by Gladys, they gain 1 stack(s) of Secret of Heavens permanently. When Gladys grants Rally to an ally, they gain 5 stack(s) of Secret of Heavens.\nSecret of Heavens: Each stack increases the wearer's Crit Damage by 1%, up to 120 stacks.","Each time allies consume the mark granted by Gladys, they gain 1 stack(s) of Secret of Heavens permanently. When Gladys grants Rally to an ally, they gain 5 stack(s) of Secret of Heavens.\nSecret of Heavens: Each stack increases the wearer's Crit Damage by 1%, up to 140 stacks.","Each time allies consume the mark granted by Gladys, they gain 1 stack(s) of Secret of Heavens permanently. When Gladys grants Rally to an ally, they gain 5 stack(s) of Secret of Heavens.\nSecret of Heavens: Each stack increases the wearer's Crit Damage by 1%, up to 160 stacks.","Each time allies consume the mark granted by Gladys, they gain 1 stack(s) of Secret of Heavens permanently. When Gladys grants Rally to an ally, they gain 5 stack(s) of Secret of Heavens.\nSecret of Heavens: Each stack increases the wearer's Crit Damage by 1%, up to 180 stacks.","Each time allies consume the mark granted by Gladys, they gain 1 stack(s) of Secret of Heavens permanently. When Gladys grants Rally to an ally, they gain 5 stack(s) of Secret of Heavens.\nSecret of Heavens: Each stack increases the wearer's Crit Damage by 1%, up to 200 stacks."]},"8000209":{"id":8000209,"n":"Shell of Gilded Doom","r":"Mythic","season":"s1","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["ench",[2.0,2.0,2.0,2.0,2.0,4.0,4.0,4.0,4.0,4.0,6.0,6.0,6.0,8.0,8.0,8.0,10.0,10.0,10.0,10.0]]],"spell":"Horn of Fortune","tiers":["Each time the Potent Medicine state deals damage to an enemy, it has a 100% chance to ignore Resistance and apply 2 stacks of Toxin. For enemies inflicted with Potent Medicine, each Potent Medicine increases Poison Derivative Damage taken by 0%, up to 50%.","Each time the Potent Medicine state deals damage to an enemy, it has a 100% chance to ignore Resistance and apply 2 stacks of Toxin. For enemies inflicted with Potent Medicine, each Potent Medicine increases Poison Derivative Damage taken by 1%, up to 50%.","Each time the Potent Medicine state deals damage to an enemy, it has a 100% chance to ignore Resistance and apply 2 stacks of Toxin. For enemies inflicted with Potent Medicine, each Potent Medicine increases Poison Derivative Damage taken by 1%, up to 50%.","Each time the Potent Medicine state deals damage to an enemy, it has a 100% chance to ignore Resistance and apply 2 stacks of Toxin. For enemies inflicted with Potent Medicine, each Potent Medicine increases Poison Derivative Damage taken by 2%, up to 50%.","Each time the Potent Medicine state deals damage to an enemy, it has a 100% chance to ignore Resistance and apply 2 stacks of Toxin. For enemies inflicted with Potent Medicine, each Potent Medicine increases Poison Derivative Damage taken by 2%, up to 50%.","Each time the Potent Medicine state deals damage to an enemy, it has a 100% chance to ignore Resistance and apply 2 stacks of Toxin. For enemies inflicted with Potent Medicine, each Potent Medicine increases Poison Derivative Damage taken by 3%, up to 50%."]},"8000208":{"id":8000208,"n":"Beastwhisper Skull","r":"Mythic","season":"s1","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["atkPct",[0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.04,0.05,0.05,0.05,0.05]]],"spell":"Hellfire Ignition","tiers":["While the summoned unit belonging to a Summoner School hero is present on the field, the hero's damage taken is reduced by 10%. Each time any summoned unit deals damage, additional damage equal to 50% of Bernade's Attack is also dealt.","While the summoned unit belonging to a Summoner School hero is present on the field, the hero's damage taken is reduced by 15%. Each time any summoned unit deals damage, additional damage equal to 55% of Bernade's Attack is also dealt.","While the summoned unit belonging to a Summoner School hero is present on the field, the hero's damage taken is reduced by 20%. Each time any summoned unit deals damage, additional damage equal to 60% of Bernade's Attack is also dealt.","While the summoned unit belonging to a Summoner School hero is present on the field, the hero's damage taken is reduced by 25%. Each time any summoned unit deals damage, additional damage equal to 65% of Bernade's Attack is also dealt.","While the summoned unit belonging to a Summoner School hero is present on the field, the hero's damage taken is reduced by 30%. Each time any summoned unit deals damage, additional damage equal to 70% of Bernade's Attack is also dealt.","While the summoned unit belonging to a Summoner School hero is present on the field, the hero's damage taken is reduced by 35%. Each time any summoned unit deals damage, additional damage equal to 75% of Bernade's Attack is also dealt."]},"8000207":{"id":8000207,"n":"Feather of Frostfall","r":"Mythic","season":"s1","stats":[["critRate",[0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.03,0.04]],["critDmg",[0.01,0.01,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.05,0.05,0.05,0.05,0.06,0.07,0.07,0.07]]],"spell":"Ice Feather's Stillness","tiers":["While Fredegonda is on the field, Ice Crystal heroes gain a Damage Bonus equal to their own Ice Crystal count * 1% and a Damage Reduction equal to their own Ice Crystal count * 0%.","While Fredegonda is on the field, Ice Crystal heroes gain a Damage Bonus equal to their own Ice Crystal count * 2% and a Damage Reduction equal to their own Ice Crystal count * 1%.","While Fredegonda is on the field, Ice Crystal heroes gain a Damage Bonus equal to their own Ice Crystal count * 3% and a Damage Reduction equal to their own Ice Crystal count * 1%.","While Fredegonda is on the field, Ice Crystal heroes gain a Damage Bonus equal to their own Ice Crystal count * 4% and a Damage Reduction equal to their own Ice Crystal count * 2%.","While Fredegonda is on the field, Ice Crystal heroes gain a Damage Bonus equal to their own Ice Crystal count * 4% and a Damage Reduction equal to their own Ice Crystal count * 2%.","While Fredegonda is on the field, Ice Crystal heroes gain a Damage Bonus equal to their own Ice Crystal count * 5% and a Damage Reduction equal to their own Ice Crystal count * 3%."]},"8000206":{"id":8000206,"n":"Fetterbreaker","r":"Mythic","season":"s1","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["ench",[2.0,2.0,2.0,2.0,2.0,4.0,4.0,4.0,4.0,4.0,6.0,6.0,6.0,8.0,8.0,8.0,10.0,10.0,10.0,10.0]]],"spell":"Everburning Karma","tiers":["Each time an ally triggers Blast or dispels Burn, Paixton deals an additional hit of 80% Fire Enlightenment Damage.","Each time an ally triggers Blast or dispels Burn, Paixton deals an additional hit of 100% Fire Enlightenment Damage.","Each time an ally triggers Blast or dispels Burn, Paixton deals an additional hit of 120% Fire Enlightenment Damage.","Each time an ally triggers Blast or dispels Burn, Paixton deals an additional hit of 160% Fire Enlightenment Damage.","Each time an ally triggers Blast or dispels Burn, Paixton deals an additional hit of 200% Fire Enlightenment Damage.","Each time an ally triggers Blast or dispels Burn, Paixton deals an additional hit of 240% Fire Enlightenment Damage."]},"8000200":{"id":8000200,"n":"Helmet of Severed Souls","r":"Mythic","season":"s1","stats":[["def",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["hpPct",[0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.04,0.05,0.05,0.05,0.05]]],"spell":"Whisper of the Dead","tiers":["The healing Berengar receives from Evil Aura is increased by 50%. When this effect expires, allies under Chaos gain a shield equal to 20% of Berengar's Max HP. When Berengar reaches full HP through Evil Aura, the Chaos state on allies is immediately dispelled.","The healing Berengar receives from Evil Aura is increased by 60%. When this effect expires, allies under Chaos gain a shield equal to 24% of Berengar's Max HP. When Berengar reaches full HP through Evil Aura, the Chaos state on allies is immediately dispelled.","The healing Berengar receives from Evil Aura is increased by 70%. When this effect expires, allies under Chaos gain a shield equal to 28% of Berengar's Max HP. When Berengar reaches full HP through Evil Aura, the Chaos state on allies is immediately dispelled.","The healing Berengar receives from Evil Aura is increased by 80%. When this effect expires, allies under Chaos gain a shield equal to 32% of Berengar's Max HP. When Berengar reaches full HP through Evil Aura, the Chaos state on allies is immediately dispelled.","The healing Berengar receives from Evil Aura is increased by 90%. When this effect expires, allies under Chaos gain a shield equal to 36% of Berengar's Max HP. When Berengar reaches full HP through Evil Aura, the Chaos state on allies is immediately dispelled.","The healing Berengar receives from Evil Aura is increased by 100%. When this effect expires, allies under Chaos gain a shield equal to 40% of Berengar's Max HP. When Berengar reaches full HP through Evil Aura, the Chaos state on allies is immediately dispelled."]},"8000199":{"id":8000199,"n":"Stellar Orb","r":"Mythic","season":"s1","stats":[["def",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["hpPct",[0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.04,0.05,0.05,0.05,0.05]]],"spell":"Falling Star","tiers":["Mithrasea's damage taken is reduced by 10%. After the battle begins, she performs Stellar Sense every 30s. If any allies have fallen, the first fallen ally is resurrected.","Mithrasea's damage taken is reduced by 12%. After the battle begins, she performs Stellar Sense every 28s. If any allies have fallen, the first fallen ally is resurrected.","Mithrasea's damage taken is reduced by 14%. After the battle begins, she performs Stellar Sense every 26s. If any allies have fallen, the first fallen ally is resurrected.","Mithrasea's damage taken is reduced by 16%. After the battle begins, she performs Stellar Sense every 24s. If any allies have fallen, the first fallen ally is resurrected.","Mithrasea's damage taken is reduced by 18%. After the battle begins, she performs Stellar Sense every 22s. If any allies have fallen, the first fallen ally is resurrected.","Mithrasea's damage taken is reduced by 20%. After the battle begins, she performs Stellar Sense every 20s. If any allies have fallen, the first fallen ally is resurrected."]},"8000197":{"id":8000197,"n":"Bloodfang Axe","r":"Mythic","season":"s1","stats":[["hpPct",[0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.04,0.05,0.05,0.05,0.05]],["res",[2.0,2.0,2.0,2.0,2.0,4.0,4.0,4.0,4.0,4.0,6.0,6.0,6.0,8.0,8.0,8.0,10.0,10.0,10.0,10.0]]],"spell":"Bloodfang Punishment","tiers":["When Grishnaar takes damage, there is a(n) 100% chance to deal [+50% Defense] Lightning Damage to the damage source. At the same time, the damage dealt by the source is reduced by 1%, lasting 10.0s, up to 5 stacks. This skill effect cannot be triggered by damage-sharing effects other than Ally Protection.","When Grishnaar takes damage, there is a(n) 100% chance to deal [+60% Defense] Lightning Damage to the damage source. At the same time, the damage dealt by the source is reduced by 1.5%, lasting 10.0s, up to 5 stacks. This skill effect cannot be triggered by damage-sharing effects other than Ally Protection.","When Grishnaar takes damage, there is a(n) 100% chance to deal [+70% Defense] Lightning Damage to the damage source. At the same time, the damage dealt by the source is reduced by 2%, lasting 10.0s, up to 5 stacks. This skill effect cannot be triggered by damage-sharing effects other than Ally Protection.","When Grishnaar takes damage, there is a(n) 100% chance to deal [+80% Defense] Lightning Damage to the damage source. At the same time, the damage dealt by the source is reduced by 3%, lasting 10.0s, up to 5 stacks. This skill effect cannot be triggered by damage-sharing effects other than Ally Protection.","When Grishnaar takes damage, there is a(n) 100% chance to deal [+90% Defense] Lightning Damage to the damage source. At the same time, the damage dealt by the source is reduced by 4%, lasting 10.0s, up to 5 stacks. This skill effect cannot be triggered by damage-sharing effects other than Ally Protection.","When Grishnaar takes damage, there is a(n) 100% chance to deal [+100% Defense] Lightning Damage to the damage source. At the same time, the damage dealt by the source is reduced by 5%, lasting 10.0s, up to 5 stacks. This skill effect cannot be triggered by damage-sharing effects other than Ally Protection."]},"8000201":{"id":8000201,"n":"Angelic Alliance","r":"Mythic","season":"s1","stats":[["hp",[180.0,180.0,180.0,180.0,180.0,180.0,180.0,180.0,340.0,340.0,340.0,340.0,500.0,500.0,500.0,500.0,660.0,660.0,660.0,660.0]],["acc",[2.0,2.0,2.0,2.0,2.0,2.0,3.0,3.0,4.0,4.0,4.0,4.0,6.0,6.0,6.0,6.0,8.0,8.0,8.0,8.0]]],"spell":"Sacred Prayer","tiers":["When the wearer's faction activates a 3-hero/5-hero Elemental Affinity, all allies deal increased damage by 5%/10%, and take reduced damage by 5%/10%. Allies of the same element as the wearer gain an additional bonus of 25%.","When the wearer's faction activates a 3-hero/5-hero Elemental Affinity, all allies deal increased damage by 5%/10%, and take reduced damage by 5%/10%. Allies of the same element as the wearer gain an additional bonus of 30%.","When the wearer's faction activates a 3-hero/5-hero Elemental Affinity, all allies deal increased damage by 5%/10%, and take reduced damage by 5%/10%. Allies of the same element as the wearer gain an additional bonus of 35%.","When the wearer's faction activates a 3-hero/5-hero Elemental Affinity, all allies deal increased damage by 5%/10%, and take reduced damage by 5%/10%. Allies of the same element as the wearer gain an additional bonus of 40%.","When the wearer's faction activates a 3-hero/5-hero Elemental Affinity, all allies deal increased damage by 5%/10%, and take reduced damage by 5%/10%. Allies of the same element as the wearer gain an additional bonus of 45%.","When the wearer's faction activates a 3-hero/5-hero Elemental Affinity, all allies deal increased damage by 5%/10%, and take reduced damage by 5%/10%. Allies of the same element as the wearer gain an additional bonus of 50%."]},"8000211":{"id":8000211,"n":"Stellar Orbit Talisman","r":"Mythic","season":"s8","stats":[["hp",[180.0,180.0,180.0,180.0,180.0,180.0,180.0,180.0,340.0,340.0,340.0,340.0,500.0,500.0,500.0,500.0,660.0,660.0,660.0,660.0]],["acc",[2.0,2.0,2.0,2.0,2.0,2.0,3.0,3.0,4.0,4.0,4.0,4.0,6.0,6.0,6.0,6.0,8.0,8.0,8.0,8.0]]],"spell":"Reversal of Destiny","tiers":["The first time the wearer's HP falls below 50%, they gain 30% Damage Reduction and restore 3% of their Max HP every 1s for 10.0s.","The first time the wearer's HP falls below 50%, they gain 35% Damage Reduction and restore 3% of their Max HP every 1s for 10.0s.","The first time the wearer's HP falls below 50%, they gain 40% Damage Reduction and restore 3% of their Max HP every 1s for 10.0s.","The first time the wearer's HP falls below 50%, they gain 45% Damage Reduction and restore 3% of their Max HP every 1s for 10.0s.","The first time the wearer's HP falls below 50%, they gain 50% Damage Reduction and restore 3% of their Max HP every 1s for 10.0s.","The first time the wearer's HP falls below 50%, they gain 55% Damage Reduction and restore 3% of their Max HP every 1s for 10.0s."]},"8000210":{"id":8000210,"n":"Void Embryo Sac","r":"Mythic","season":"s8","stats":[["def",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["hpPct",[0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.04,0.05,0.05,0.05,0.05]]],"spell":"Womb's Embrace","tiers":["When a shield granted by the wearer is broken, the shield-bearer is healed for 5% of the damage that broke the shield. This has a 10.0s cooldown. At the start of battle, grants all allies an undispellable, unstealable [+10%Max HP] shield.","When a shield granted by the wearer is broken, the shield-bearer is healed for 10% of the damage that broke the shield. This has a 10.0s cooldown. At the start of battle, grants all allies an undispellable, unstealable [+10%Max HP] shield.","When a shield granted by the wearer is broken, the shield-bearer is healed for 15% of the damage that broke the shield. This has a 10.0s cooldown. At the start of battle, grants all allies an undispellable, unstealable [+10%Max HP] shield.","When a shield granted by the wearer is broken, the shield-bearer is healed for 20% of the damage that broke the shield. This has a 10.0s cooldown. At the start of battle, grants all allies an undispellable, unstealable [+10%Max HP] shield.","When a shield granted by the wearer is broken, the shield-bearer is healed for 25% of the damage that broke the shield. This has a 10.0s cooldown. At the start of battle, grants all allies an undispellable, unstealable [+10%Max HP] shield.","When a shield granted by the wearer is broken, the shield-bearer is healed for 30% of the damage that broke the shield. This has a 10.0s cooldown. At the start of battle, grants all allies an undispellable, unstealable [+10%Max HP] shield."]},"8000212":{"id":8000212,"n":"Bloodmoon Thorncrown Shard","r":"Mythic","season":"s8","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["ench",[2.0,2.0,2.0,2.0,2.0,4.0,4.0,4.0,4.0,4.0,6.0,6.0,6.0,8.0,8.0,8.0,10.0,10.0,10.0,10.0]]],"spell":"Thornbound Bloodlust","tiers":["While Saverio is on the field, triggering Bloodmoon Power has a 50% chance to not be consumed, and the hero gains 10% Damage Bonus for every 10s he survives, up to 50%.","While Saverio is on the field, triggering Bloodmoon Power has a 50% chance to not be consumed, and the hero gains 12% Damage Bonus for every 10s he survives, up to 60%.","While Saverio is on the field, triggering Bloodmoon Power has a 50% chance to not be consumed, and the hero gains 14% Damage Bonus for every 10s he survives, up to 70%.","While Saverio is on the field, triggering Bloodmoon Power has a 50% chance to not be consumed, and the hero gains 16% Damage Bonus for every 10s he survives, up to 80%.","While Saverio is on the field, triggering Bloodmoon Power has a 50% chance to not be consumed, and the hero gains 18% Damage Bonus for every 10s he survives, up to 90%.","While Saverio is on the field, triggering Bloodmoon Power has a 50% chance to not be consumed, and the hero gains 20% Damage Bonus for every 10s he survives, up to 100%."]},"8000198":{"id":8000198,"n":"Miasma Staff","r":"Mythic","season":"s8","stats":[["hp",[180.0,180.0,180.0,180.0,180.0,180.0,180.0,180.0,340.0,340.0,340.0,340.0,500.0,500.0,500.0,500.0,660.0,660.0,660.0,660.0]],["acc",[2.0,2.0,2.0,2.0,2.0,2.0,3.0,3.0,4.0,4.0,4.0,4.0,6.0,6.0,6.0,6.0,8.0,8.0,8.0,8.0]]],"spell":"Miasma Spell","tiers":["When Reytah's ultimate skill extends 3 or more debuffs on a target in a single cast, inflicts Defense Penalty II on the target for 12.0s and grants allied units 5% Damage Bonus for 12.0s.","When Reytah's ultimate skill extends 3 or more debuffs on a target in a single cast, inflicts Defense Penalty II on the target for 12.0s and grants allied units 7% Damage Bonus for 12.0s.","When Reytah's ultimate skill extends 3 or more debuffs on a target in a single cast, inflicts Defense Penalty II on the target for 12.0s and grants allied units 10% Damage Bonus for 12.0s.","When Reytah's ultimate skill extends 3 or more debuffs on a target in a single cast, inflicts Defense Penalty II on the target for 12.0s and grants allied units 12% Damage Bonus for 12.0s.","When Reytah's ultimate skill extends 3 or more debuffs on a target in a single cast, inflicts Defense Penalty II on the target for 12.0s and grants allied units 15% Damage Bonus for 12.0s.","When Reytah's ultimate skill extends 3 or more debuffs on a target in a single cast, inflicts Defense Penalty II on the target for 12.0s and grants allied units 18% Damage Bonus for 12.0s."]},"8000184":{"id":8000184,"n":"Primordial Explosion","r":"Mythic","season":"s7","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["critDmg",[0.01,0.01,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.05,0.05,0.05,0.05,0.06,0.07,0.07,0.07]]],"spell":"Inventor's Code","tiers":["When the wearer's damage reduces any enemy's HP below 50%, deals bonus damage equal to 150% of the wearer's Attack to that enemy. This can only trigger once every 20.0s per enemy.","When the wearer's damage reduces any enemy's HP below 50%, deals bonus damage equal to 200% of the wearer's Attack to that enemy. This can only trigger once every 20.0s per enemy.","When the wearer's damage reduces any enemy's HP below 50%, deals bonus damage equal to 250% of the wearer's Attack to that enemy. This can only trigger once every 20.0s per enemy.","When the wearer's damage reduces any enemy's HP below 50%, deals bonus damage equal to 300% of the wearer's Attack to that enemy. This can only trigger once every 20.0s per enemy.","When the wearer's damage reduces any enemy's HP below 50%, deals bonus damage equal to 350% of the wearer's Attack to that enemy. This can only trigger once every 20.0s per enemy.","When the wearer's damage reduces any enemy's HP below 50%, deals bonus damage equal to 400% of the wearer's Attack to that enemy. This can only trigger once every 20.0s per enemy."]},"8000173":{"id":8000173,"n":"Punisher's Whip","r":"Mythic","season":"s7","stats":[["acc",[2.0,2.0,2.0,2.0,2.0,2.0,3.0,3.0,4.0,4.0,4.0,4.0,6.0,6.0,6.0,6.0,8.0,8.0,8.0,8.0]],["haste",[1.0,1.0,1.0,1.0,1.0,2.0,2.0,2.0,2.0,2.0,3.0,3.0,3.0,4.0,4.0,4.0,5.0,5.0,5.0,5.0]]],"spell":"Fleshing Whip","tiers":["When the wearer deals damage to an enemy via the ultimate skill, there is a 25% chance to reduce the target's Ultimate Energy by 10.0 and apply Recharging Speed Penalty for 5.0s. This can only trigger once every 10.0s per enemy.","When the wearer deals damage to an enemy via the ultimate skill, there is a 30% chance to reduce the target's Ultimate Energy by 10.0 and apply Recharging Speed Penalty for 5.0s. This can only trigger once every 10.0s per enemy.","When the wearer deals damage to an enemy via the ultimate skill, there is a 35% chance to reduce the target's Ultimate Energy by 10.0 and apply Recharging Speed Penalty for 5.0s. This can only trigger once every 10.0s per enemy.","When the wearer deals damage to an enemy via the ultimate skill, there is a 40% chance to reduce the target's Ultimate Energy by 10.0 and apply Recharging Speed Penalty for 5.0s. This can only trigger once every 10.0s per enemy.","When the wearer deals damage to an enemy via the ultimate skill, there is a 45% chance to reduce the target's Ultimate Energy by 10.0 and apply Recharging Speed Penalty for 5.0s. This can only trigger once every 10.0s per enemy.","When the wearer deals damage to an enemy via the ultimate skill, there is a 50% chance to reduce the target's Ultimate Energy by 10.0 and apply Recharging Speed Penalty for 5.0s. This can only trigger once every 10.0s per enemy."]},"8000107":{"id":8000107,"n":"Arachnid Matriarch's Needles","r":"Mythic","season":"s7","stats":[["acc",[2.0,2.0,2.0,2.0,2.0,2.0,3.0,3.0,4.0,4.0,4.0,4.0,6.0,6.0,6.0,6.0,8.0,8.0,8.0,8.0]],["hpPct",[0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.04,0.05,0.05,0.05,0.05]]],"spell":"Arachnid Matriarch's Blessing","tiers":["When the wearer applies a buff, debuff, or control effect, there is a 100% chance to extend its duration by 10%.","When the wearer applies a buff, debuff, or control effect, there is a 100% chance to extend its duration by 12%.","When the wearer applies a buff, debuff, or control effect, there is a 100% chance to extend its duration by 14%.","When the wearer applies a buff, debuff, or control effect, there is a 100% chance to extend its duration by 16%.","When the wearer applies a buff, debuff, or control effect, there is a 100% chance to extend its duration by 18%.","When the wearer applies a buff, debuff, or control effect, there is a 100% chance to extend its duration by 20%."]},"8000105":{"id":8000105,"n":"God of War's Blessed Belt","r":"Mythic","season":"s7","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["atkPct",[0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.04,0.05,0.05,0.05,0.05]]],"spell":"God of War's Inspiration","tiers":["For each unique buff, debuff, or control effect currently active on the wearer, the wearer's damage dealt increases by 1.5% and damage taken decreases by 1.5%, up to 10 times.","For each unique buff, debuff, or control effect currently active on the wearer, the wearer's damage dealt increases by 1.8% and damage taken decreases by 1.8%, up to 10 times.","For each unique buff, debuff, or control effect currently active on the wearer, the wearer's damage dealt increases by 2.1% and damage taken decreases by 2.1%, up to 10 times.","For each unique buff, debuff, or control effect currently active on the wearer, the wearer's damage dealt increases by 2.4% and damage taken decreases by 2.4%, up to 10 times.","For each unique buff, debuff, or control effect currently active on the wearer, the wearer's damage dealt increases by 2.7% and damage taken decreases by 2.7%, up to 10 times.","For each unique buff, debuff, or control effect currently active on the wearer, the wearer's damage dealt increases by 3% and damage taken decreases by 3%, up to 10 times."]},"8000128":{"id":8000128,"n":"Iron Maiden of Blackened Visage","r":"Mythic","season":"s6","stats":[["hp",[180.0,180.0,180.0,180.0,180.0,180.0,180.0,180.0,340.0,340.0,340.0,340.0,500.0,500.0,500.0,500.0,660.0,660.0,660.0,660.0]],["acc",[2.0,2.0,2.0,2.0,2.0,2.0,3.0,3.0,4.0,4.0,4.0,4.0,6.0,6.0,6.0,6.0,8.0,8.0,8.0,8.0]]],"spell":"Shield of the Condemned","tiers":["The wearer gains a [+20%Max HP] shield every 30s that lasts for 10.0s. When the shield is destroyed, the wearer locks on the 1 enemy unit(s) with the most damage dealt to the shield, inflicting them with Attack Penalty II for 10.0s.\nThe shield takes effect immediately as the battle starts.","The wearer gains a [+20%Max HP] shield every 28s that lasts for 10.0s. When the shield is destroyed, the wearer locks on the 1 enemy unit(s) with the most damage dealt to the shield, inflicting them with Attack Penalty II for 10.0s.\nThe shield takes effect immediately as the battle starts.","The wearer gains a [+20%Max HP] shield every 26s that lasts for 10.0s. When the shield is destroyed, the wearer locks on the 1 enemy unit(s) with the most damage dealt to the shield, inflicting them with Attack Penalty II for 10.0s.\nThe shield takes effect immediately as the battle starts.","The wearer gains a [+20%Max HP] shield every 24s that lasts for 10.0s. When the shield is destroyed, the wearer locks on the 2 enemy unit(s) with the most damage dealt to the shield, inflicting them with Attack Penalty II for 10.0s.\nThe shield takes effect immediately as the battle starts.","The wearer gains a [+20%Max HP] shield every 22s that lasts for 10.0s. When the shield is destroyed, the wearer locks on the 2 enemy unit(s) with the most damage dealt to the shield, inflicting them with Attack Penalty II for 10.0s.\nThe shield takes effect immediately as the battle starts.","The wearer gains a [+20%Max HP] shield every 20s that lasts for 10.0s. When the shield is destroyed, the wearer locks on the 2 enemy unit(s) with the most damage dealt to the shield, inflicting them with Attack Penalty II for 10.0s.\nThe shield takes effect immediately as the battle starts."]},"8000122":{"id":8000122,"n":"Abyss-Binder's Torc","r":"Mythic","season":"s6","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["critRate",[0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.03,0.04]]],"spell":"Unholy Instinct","tiers":["For each enemy within 1 tile of the wearer, gains a 5% Damage Bonus, up to 3 stacks. If there are 2 or more enemies within 1 tile of the wearer, gains a 15% Damage Reduction.","For each enemy within 1 tile of the wearer, gains a 6% Damage Bonus, up to 3 stacks. If there are 2 or more enemies within 1 tile of the wearer, gains a 15% Damage Reduction.","For each enemy within 1 tile of the wearer, gains a 7% Damage Bonus, up to 3 stacks. If there are 2 or more enemies within 1 tile of the wearer, gains a 15% Damage Reduction.","For each enemy within 1 tile of the wearer, gains a 8% Damage Bonus, up to 3 stacks. If there are 2 or more enemies within 1 tile of the wearer, gains a 15% Damage Reduction.","For each enemy within 1 tile of the wearer, gains a 10% Damage Bonus, up to 3 stacks. If there are 2 or more enemies within 1 tile of the wearer, gains a 15% Damage Reduction.","For each enemy within 1 tile of the wearer, gains a 12% Damage Bonus, up to 3 stacks. If there are 2 or more enemies within 1 tile of the wearer, gains a 15% Damage Reduction."]},"8000108":{"id":8000108,"n":"Supreme Platinum Amulet","r":"Mythic","season":"s6","stats":[["def",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["hpPct",[0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.04,0.05,0.05,0.05,0.05]]],"spell":"Devotion Aura","tiers":["At the start of the battle, the wearer gains Debuff Immunity and Control Immunity for 5.0s.","At the start of the battle, the wearer gains Debuff Immunity and Control Immunity for 6.0s.","At the start of the battle, the wearer gains Debuff Immunity and Control Immunity for 7.0s.","At the start of the battle, the wearer gains Debuff Immunity and Control Immunity for 8.0s.","At the start of the battle, the wearer gains Debuff Immunity and Control Immunity for 9.0s.","At the start of the battle, the wearer gains Debuff Immunity and Control Immunity for 10.0s."]},"8000125":{"id":8000125,"n":"Parasol of Paradise","r":"Mythic","season":"s6","stats":[["def",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["hpPct",[0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.04,0.05,0.05,0.05,0.05]]],"spell":"Bestow Bliss","tiers":["When the wearer takes damage, healing equal to 10% of the damage taken is triggered and distributed evenly to allies around the hero.","When the wearer takes damage, healing equal to 12% of the damage taken is triggered and distributed evenly to allies around the hero.","When the wearer takes damage, healing equal to 15% of the damage taken is triggered and distributed evenly to allies around the hero.","When the wearer takes damage, healing equal to 18% of the damage taken is triggered and distributed evenly to allies around the hero.","When the wearer takes damage, healing equal to 20% of the damage taken is triggered and distributed evenly to allies around the hero.","When the wearer takes damage, healing equal to 25% of the damage taken is triggered and distributed evenly to allies around the hero."]},"8000126":{"id":8000126,"n":"Neptune Pearl","r":"Mythic","season":"s6","stats":[["def",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["res",[2.0,2.0,2.0,2.0,2.0,4.0,4.0,4.0,4.0,4.0,6.0,6.0,6.0,8.0,8.0,8.0,10.0,10.0,10.0,10.0]]],"spell":"Neptune Blessing","tiers":["When inflicted with Ultimate Down, the wearer becomes immune to it and gains 5.0 Ultimate Energy. This effect triggers once every 15.0s.","When inflicted with Ultimate Down, the wearer becomes immune to it and gains 7.000000000000001 Ultimate Energy. This effect triggers once every 15.0s.","When inflicted with Ultimate Down, the wearer becomes immune to it and gains 9.0 Ultimate Energy. This effect triggers once every 15.0s.","When inflicted with Ultimate Down, the wearer becomes immune to it and gains 11.0 Ultimate Energy. This effect triggers once every 15.0s.","When inflicted with Ultimate Down, the wearer becomes immune to it and gains 13.0 Ultimate Energy. This effect triggers once every 15.0s.","When inflicted with Ultimate Down, the wearer becomes immune to it and gains 15.0 Ultimate Energy. This effect triggers once every 15.0s."]},"8000171":{"id":8000171,"n":"Poison of Swamp","r":"Mythic","season":"s6","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["critDmg",[0.01,0.01,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.05,0.05,0.05,0.05,0.06,0.07,0.07,0.07]]],"spell":"All in One","tiers":["When the wearer receives healing, gains 2% Damage Up and 1% Damage Reduction for 10.0s. This effect can stack up to 10 times.","When the wearer receives healing, gains 2% Damage Up and 1% Damage Reduction for 10.0s. This effect can stack up to 10 times.","When the wearer receives healing, gains 2% Damage Up and 1% Damage Reduction for 10.0s. This effect can stack up to 10 times.","When the wearer receives healing, gains 3% Damage Up and 1% Damage Reduction for 10.0s. This effect can stack up to 10 times.","When the wearer receives healing, gains 3% Damage Up and 1% Damage Reduction for 10.0s. This effect can stack up to 10 times.","When the wearer receives healing, gains 4% Damage Up and 2% Damage Reduction for 10.0s. This effect can stack up to 10 times."]},"8000170":{"id":8000170,"n":"Golden Alarm","r":"Mythic","season":"s6","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["critRate",[0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.03,0.04]]],"spell":"Forewarning Oracle","tiers":["When the wearer is under buffs/shields, gains 7% Damage Up for each. When under debuffs/control effects, gains 7% Damage Reduction for each.","When the wearer is under buffs/shields, gains 9% Damage Up for each. When under debuffs/control effects, gains 9% Damage Reduction for each.","When the wearer is under buffs/shields, gains 10% Damage Up for each. When under debuffs/control effects, gains 10% Damage Reduction for each.","When the wearer is under buffs/shields, gains 12% Damage Up for each. When under debuffs/control effects, gains 12% Damage Reduction for each.","When the wearer is under buffs/shields, gains 13% Damage Up for each. When under debuffs/control effects, gains 13% Damage Reduction for each.","When the wearer is under buffs/shields, gains 15% Damage Up for each. When under debuffs/control effects, gains 15% Damage Reduction for each."]},"8000124":{"id":8000124,"n":"Blessed Camel Bells","r":"Mythic","season":"s6","stats":[["hp",[180.0,180.0,180.0,180.0,180.0,180.0,180.0,180.0,340.0,340.0,340.0,340.0,500.0,500.0,500.0,500.0,660.0,660.0,660.0,660.0]],["ench",[2.0,2.0,2.0,2.0,2.0,4.0,4.0,4.0,4.0,4.0,6.0,6.0,6.0,8.0,8.0,8.0,10.0,10.0,10.0,10.0]]],"spell":"Seed of Longevity","tiers":["When the wearer performs healing, converts 25% of overhealing into a Seed applied to the target. The Seed provides Healing Over Time to the target for 5s. Targets affected by the Seed take 5% reduced damage.","When the wearer performs healing, converts 30% of overhealing into a Seed applied to the target. The Seed provides Healing Over Time to the target for 5s. Targets affected by the Seed take 6% reduced damage.","When the wearer performs healing, converts 35% of overhealing into a Seed applied to the target. The Seed provides Healing Over Time to the target for 5s. Targets affected by the Seed take 8% reduced damage.","When the wearer performs healing, converts 40% of overhealing into a Seed applied to the target. The Seed provides Healing Over Time to the target for 5s. Targets affected by the Seed take 10% reduced damage.","When the wearer performs healing, converts 45% of overhealing into a Seed applied to the target. The Seed provides Healing Over Time to the target for 5s. Targets affected by the Seed take 12% reduced damage.","When the wearer performs healing, converts 50% of overhealing into a Seed applied to the target. The Seed provides Healing Over Time to the target for 5s. Targets affected by the Seed take 15% reduced damage."]},"8000104":{"id":8000104,"n":"Dark Corpse Puppet","r":"Mythic","season":"s6","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["atkPct",[0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.04,0.05,0.05,0.05,0.05]]],"spell":"Scapegoat","tiers":["When the wearer defeats any enemy, recovers 15% of their Max HP and gains 10.0 Ultimate Energy. This effect can only trigger once every 3.0s.","When the wearer defeats any enemy, recovers 20% of their Max HP and gains 12.0 Ultimate Energy. This effect can only trigger once every 3.0s.","When the wearer defeats any enemy, recovers 25% of their Max HP and gains 14.000000000000002 Ultimate Energy. This effect can only trigger once every 3.0s.","When the wearer defeats any enemy, recovers 30% of their Max HP and gains 16.0 Ultimate Energy. This effect can only trigger once every 3.0s.","When the wearer defeats any enemy, recovers 35% of their Max HP and gains 18.0 Ultimate Energy. This effect can only trigger once every 3.0s.","When the wearer defeats any enemy, recovers 40% of their Max HP and gains 20.0 Ultimate Energy. This effect can only trigger once every 3.0s."]},"8000100":{"id":8000100,"n":"Orb of the Dragon God","r":"Mythic","season":"s6","stats":[["def",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["acc",[2.0,2.0,2.0,2.0,2.0,2.0,3.0,3.0,4.0,4.0,4.0,4.0,6.0,6.0,6.0,6.0,8.0,8.0,8.0,8.0]]],"spell":"Dragon God's Power","tiers":["If all allied heroes are of the same element, they gain 7% Damage Up and 5% increased shield received at the start of battle.","If all allied heroes are of the same element, they gain 9% Damage Up and 6% increased shield received at the start of battle.","If all allied heroes are of the same element, they gain 10% Damage Up and 7% increased shield received at the start of battle.","If all allied heroes are of the same element, they gain 12% Damage Up and 8% increased shield received at the start of battle.","If all allied heroes are of the same element, they gain 13% Damage Up and 9% increased shield received at the start of battle.","If all allied heroes are of the same element, they gain 15% Damage Up and 10% increased shield received at the start of battle."]},"8000178":{"id":8000178,"n":"Chest of Radiance","r":"Mythic","season":"s4","stats":[["def",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["hpPct",[0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.04,0.05,0.05,0.05,0.05]]],"spell":"Chest of Radiance","tiers":["At the start of battle, for each ally with an active Elemental Affinity, increases Attack and Defense by 1% for all allies with an active Elemental Affinity.","At the start of battle, for each ally with an active Elemental Affinity, increases Attack and Defense by 1% for all allies with an active Elemental Affinity.","At the start of battle, for each ally with an active Elemental Affinity, increases Attack and Defense by 1% for all allies with an active Elemental Affinity.","At the start of battle, for each ally with an active Elemental Affinity, increases Attack and Defense by 1% for all allies with an active Elemental Affinity.","At the start of battle, for each ally with an active Elemental Affinity, increases Attack and Defense by 1% for all allies with an active Elemental Affinity.","At the start of battle, for each ally with an active Elemental Affinity, increases Attack and Defense by 2% for all allies with an active Elemental Affinity."]},"8000177":{"id":8000177,"n":"Bottle of Luminance","r":"Mythic","season":"s4","stats":[["hp",[180.0,180.0,180.0,180.0,180.0,180.0,180.0,180.0,340.0,340.0,340.0,340.0,500.0,500.0,500.0,500.0,660.0,660.0,660.0,660.0]],["ench",[2.0,2.0,2.0,2.0,2.0,4.0,4.0,4.0,4.0,4.0,6.0,6.0,6.0,8.0,8.0,8.0,10.0,10.0,10.0,10.0]]],"spell":"Bottle of Luminance","tiers":["When an ally's HP drops below 40%,\nheals them for [+5%Max HP][+500%Enlightenment]. This effect can trigger once every 15.0s.","When an ally's HP drops below 40%,\nheals them for [+6%Max HP][+600%Enlightenment]. This effect can trigger once every 15.0s.","When an ally's HP drops below 40%,\nheals them for [+7%Max HP][+700%Enlightenment]. This effect can trigger once every 15.0s.","When an ally's HP drops below 40%,\nheals them for [+8%Max HP][+800%Enlightenment]. This effect can trigger once every 15.0s.","When an ally's HP drops below 40%,\nheals them for [+9%Max HP][+900%Enlightenment]. This effect can trigger once every 15.0s.","When an ally's HP drops below 40%,\nheals them for [+10%Max HP][+1000%Enlightenment]. This effect can trigger once every 15.0s."]},"8000176":{"id":8000176,"n":"Curse of Silence","r":"Mythic","season":"s4","stats":[["hp",[180.0,180.0,180.0,180.0,180.0,180.0,180.0,180.0,340.0,340.0,340.0,340.0,500.0,500.0,500.0,500.0,660.0,660.0,660.0,660.0]],["haste",[1.0,1.0,1.0,1.0,1.0,2.0,2.0,2.0,2.0,2.0,3.0,3.0,3.0,4.0,4.0,4.0,5.0,5.0,5.0,5.0]]],"spell":"Curse of Silence","tiers":["At the start of battle, grants all allies 2 stack(s) of Precept. Each time an ultimate skill is cast, grants all allies 1 stack of Precept.\nPrecept: Each stack increases Resistance by 15.0. Dispels 1 stack each time an effect is successfully resisted. Up to 8 stacks.","At the start of battle, grants all allies 2 stack(s) of Precept. Each time an ultimate skill is cast, grants all allies 1 stack of Precept.\nPrecept: Each stack increases Resistance by 15.0. Dispels 1 stack each time an effect is successfully resisted. Up to 8 stacks.","At the start of battle, grants all allies 3 stack(s) of Precept. Each time an ultimate skill is cast, grants all allies 1 stack of Precept.\nPrecept: Each stack increases Resistance by 15.0. Dispels 1 stack each time an effect is successfully resisted. Up to 8 stacks.","At the start of battle, grants all allies 3 stack(s) of Precept. Each time an ultimate skill is cast, grants all allies 1 stack of Precept.\nPrecept: Each stack increases Resistance by 15.0. Dispels 1 stack each time an effect is successfully resisted. Up to 8 stacks.","At the start of battle, grants all allies 4 stack(s) of Precept. Each time an ultimate skill is cast, grants all allies 1 stack of Precept.\nPrecept: Each stack increases Resistance by 15.0. Dispels 1 stack each time an effect is successfully resisted. Up to 8 stacks.","At the start of battle, grants all allies 5 stack(s) of Precept. Each time an ultimate skill is cast, grants all allies 1 stack of Precept.\nPrecept: Each stack increases Resistance by 15.0. Dispels 1 stack each time an effect is successfully resisted. Up to 8 stacks."]},"8000174":{"id":8000174,"n":"Lost Pearl in Desert","r":"Mythic","season":"s4","stats":[["def",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["res",[2.0,2.0,2.0,2.0,2.0,4.0,4.0,4.0,4.0,4.0,6.0,6.0,6.0,8.0,8.0,8.0,10.0,10.0,10.0,10.0]]],"spell":"Lost Pearl in Desert","tiers":["After each ultimate skill cast, the wearer restores 15% of Ultimate Energy.\nThe amount of Ultimate Energy restored is reduced by 5% each time this effect triggers, down to a minimum of 5%.","After each ultimate skill cast, the wearer restores 17% of Ultimate Energy.\nThe amount of Ultimate Energy restored is reduced by 5% each time this effect triggers, down to a minimum of 5%.","After each ultimate skill cast, the wearer restores 19% of Ultimate Energy.\nThe amount of Ultimate Energy restored is reduced by 5% each time this effect triggers, down to a minimum of 5%.","After each ultimate skill cast, the wearer restores 21% of Ultimate Energy.\nThe amount of Ultimate Energy restored is reduced by 5% each time this effect triggers, down to a minimum of 5%.","After each ultimate skill cast, the wearer restores 23% of Ultimate Energy.\nThe amount of Ultimate Energy restored is reduced by 5% each time this effect triggers, down to a minimum of 5%.","After each ultimate skill cast, the wearer restores 25% of Ultimate Energy.\nThe amount of Ultimate Energy restored is reduced by 5% each time this effect triggers, down to a minimum of 5%."]},"8000172":{"id":8000172,"n":"Pact with Devil","r":"Mythic","season":"s4","stats":[["hp",[180.0,180.0,180.0,180.0,180.0,180.0,180.0,180.0,340.0,340.0,340.0,340.0,500.0,500.0,500.0,500.0,660.0,660.0,660.0,660.0]],["acc",[2.0,2.0,2.0,2.0,2.0,2.0,3.0,3.0,4.0,4.0,4.0,4.0,6.0,6.0,6.0,6.0,8.0,8.0,8.0,8.0]]],"spell":"Pact with Devil","tiers":["The No.6 time the wearer casts an ultimate skill, enemies affected (damaged or debuffed) by it have their healing received reduced by 50% for 10.0s.","The No.5 time the wearer casts an ultimate skill, enemies affected (damaged or debuffed) by it have their healing received reduced by 50% for 10.0s.","The No.5 time the wearer casts an ultimate skill, enemies affected (damaged or debuffed) by it have their healing received reduced by 50% for 10.0s.","The No.4 time the wearer casts an ultimate skill, enemies affected (damaged or debuffed) by it have their healing received reduced by 50% for 10.0s.","The No.3 time the wearer casts an ultimate skill, enemies affected (damaged or debuffed) by it have their healing received reduced by 50% for 10.0s.","The No.2 time the wearer casts an ultimate skill, enemies affected (damaged or debuffed) by it have their healing received reduced by 50% for 10.0s."]},"8000169":{"id":8000169,"n":"Misty Conch","r":"Mythic","season":"s4","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["acc",[2.0,2.0,2.0,2.0,2.0,2.0,3.0,3.0,4.0,4.0,4.0,4.0,6.0,6.0,6.0,6.0,8.0,8.0,8.0,8.0]]],"spell":"Misty Conch","tiers":["When the wearer inflicts a debuff with a battle skill or ultimate skill, if the target is already affected by that debuff, the wearer also inflicts Defense Penalty II for 3.0s.","When the wearer inflicts a debuff with a battle skill or ultimate skill, if the target is already affected by that debuff, the wearer also inflicts Defense Penalty II for 3.5s.","When the wearer inflicts a debuff with a battle skill or ultimate skill, if the target is already affected by that debuff, the wearer also inflicts Defense Penalty II for 4.0s.","When the wearer inflicts a debuff with a battle skill or ultimate skill, if the target is already affected by that debuff, the wearer also inflicts Defense Penalty II for 4.5s.","When the wearer inflicts a debuff with a battle skill or ultimate skill, if the target is already affected by that debuff, the wearer also inflicts Defense Penalty II for 5.0s.","When the wearer inflicts a debuff with a battle skill or ultimate skill, if the target is already affected by that debuff, the wearer also inflicts Defense Penalty II for 6.0s."]},"8000194":{"id":8000194,"n":"Swerving Shears","r":"Mythic","season":"s3","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["critRate",[0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.03,0.04]]],"spell":"Dance of Blades","tiers":["Guinavivre's basic attack inflicts an additional stack of  for s.\n: When taking Lightning Damage that triggers a critical hit, the damage is increased by , up to  stacks.","Guinavivre's basic attack inflicts an additional stack of  for s.\n: When taking Lightning Damage that triggers a critical hit, the damage is increased by , up to  stacks.","Guinavivre's basic attack inflicts an additional stack of  for s.\n: When taking Lightning Damage that triggers a critical hit, the damage is increased by , up to  stacks.","Guinavivre's basic attack inflicts an additional stack of  for s.\n: When taking Lightning Damage that triggers a critical hit, the damage is increased by , up to  stacks.","Guinavivre's basic attack inflicts an additional stack of  for s.\n: When taking Lightning Damage that triggers a critical hit, the damage is increased by , up to  stacks.","Guinavivre's basic attack inflicts an additional stack of  for s.\n: When taking Lightning Damage that triggers a critical hit, the damage is increased by , up to  stacks."]},"8000165":{"id":8000165,"n":"Gory Injector","r":"Mythic","season":"s3","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["ench",[2.0,2.0,2.0,2.0,2.0,4.0,4.0,4.0,4.0,4.0,6.0,6.0,6.0,8.0,8.0,8.0,10.0,10.0,10.0,10.0]]],"spell":"Bloodthirsty Heart","tiers":["Each time the wearer deals Derivative Damage, their Enlightenment increases by  for s, up to  stacks.","Each time the wearer deals Derivative Damage, their Enlightenment increases by  for s, up to  stacks.","Each time the wearer deals Derivative Damage, their Enlightenment increases by  for s, up to  stacks.","Each time the wearer deals Derivative Damage, their Enlightenment increases by  for s, up to  stacks.","Each time the wearer deals Derivative Damage, their Enlightenment increases by  for s, up to  stacks.","Each time the wearer deals Derivative Damage, their Enlightenment increases by  for s, up to  stacks."]},"8000164":{"id":8000164,"n":"Holy Acorn","r":"Mythic","season":"s3","stats":[["def",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["haste",[1.0,1.0,1.0,1.0,1.0,2.0,2.0,2.0,2.0,2.0,3.0,3.0,3.0,4.0,4.0,4.0,5.0,5.0,5.0,5.0]]],"spell":"Forest Blessings","tiers":["The first  ultimate skill(s) the wearer casts in each battle grant all ally heroes  stack(s) of Aegis for s.\nAegis: When taking damage, consumes 1 stack to reduce the damage taken by .","The first  ultimate skill(s) the wearer casts in each battle grant all ally heroes  stack(s) of Aegis for s.\nAegis: When taking damage, consumes 1 stack to reduce the damage taken by .","The first  ultimate skill(s) the wearer casts in each battle grant all ally heroes  stack(s) of Aegis for s.\nAegis: When taking damage, consumes 1 stack to reduce the damage taken by .","The first  ultimate skill(s) the wearer casts in each battle grant all ally heroes  stack(s) of Aegis for s.\nAegis: When taking damage, consumes 1 stack to reduce the damage taken by .","The first  ultimate skill(s) the wearer casts in each battle grant all ally heroes  stack(s) of Aegis for s.\nAegis: When taking damage, consumes 1 stack to reduce the damage taken by .","The first  ultimate skill(s) the wearer casts in each battle grant all ally heroes  stack(s) of Aegis for s.\nAegis: When taking damage, consumes 1 stack to reduce the damage taken by ."]},"8000163":{"id":8000163,"n":"Ghost Captain's Hook","r":"Mythic","season":"s3","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["critRate",[0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.03,0.04]]],"spell":"Wrath of Stump","tiers":["Active in the Grand Gladiator Arena only: When damaging a debuffed enemy, the wearer heals the ally with the lowest Current HP for  of the damage dealt. (This healing cannot exceed  of the ally's Max HP.)","Active in the Grand Gladiator Arena only: When damaging a debuffed enemy, the wearer heals the ally with the lowest Current HP for  of the damage dealt. (This healing cannot exceed  of the ally's Max HP.)","Active in the Grand Gladiator Arena only: When damaging a debuffed enemy, the wearer heals the ally with the lowest Current HP for  of the damage dealt. (This healing cannot exceed  of the ally's Max HP.)","Active in the Grand Gladiator Arena only: When damaging a debuffed enemy, the wearer heals the ally with the lowest Current HP for  of the damage dealt. (This healing cannot exceed  of the ally's Max HP.)","Active in the Grand Gladiator Arena only: When damaging a debuffed enemy, the wearer heals the ally with the lowest Current HP for  of the damage dealt. (This healing cannot exceed  of the ally's Max HP.)","Active in the Grand Gladiator Arena only: When damaging a debuffed enemy, the wearer heals the ally with the lowest Current HP for  of the damage dealt. (This healing cannot exceed  of the ally's Max HP.)"]},"8000162":{"id":8000162,"n":"Golden Antlers","r":"Mythic","season":"s3","stats":[["hp",[180.0,180.0,180.0,180.0,180.0,180.0,180.0,180.0,340.0,340.0,340.0,340.0,500.0,500.0,500.0,500.0,660.0,660.0,660.0,660.0]],["acc",[2.0,2.0,2.0,2.0,2.0,2.0,3.0,3.0,4.0,4.0,4.0,4.0,6.0,6.0,6.0,6.0,8.0,8.0,8.0,8.0]]],"spell":"Will of Stag","tiers":["Every s after the battle starts, randomly marks 1 enemy and 1 ally. Marked enemies permanently take  increased damage, and marked allies permanently receive  increased healing.","Every s after the battle starts, randomly marks 1 enemy and 1 ally. Marked enemies permanently take  increased damage, and marked allies permanently receive  increased healing.","Every s after the battle starts, randomly marks 1 enemy and 1 ally. Marked enemies permanently take  increased damage, and marked allies permanently receive  increased healing.","Every s after the battle starts, randomly marks 1 enemy and 1 ally. Marked enemies permanently take  increased damage, and marked allies permanently receive  increased healing.","Every s after the battle starts, randomly marks 1 enemy and 1 ally. Marked enemies permanently take  increased damage, and marked allies permanently receive  increased healing.","Every s after the battle starts, randomly marks 1 enemy and 1 ally. Marked enemies permanently take  increased damage, and marked allies permanently receive  increased healing."]},"8000161":{"id":8000161,"n":"Ascendant's Key","r":"Mythic","season":"s3","stats":[["hp",[180.0,180.0,180.0,180.0,180.0,180.0,180.0,180.0,340.0,340.0,340.0,340.0,500.0,500.0,500.0,500.0,660.0,660.0,660.0,660.0]],["defPct",[0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.04,0.05,0.05,0.05,0.05]]],"spell":"Celestial Revelation","tiers":["At the beginning of the battle, increases all allies' damage dealt by  for s.","At the beginning of the battle, increases all allies' damage dealt by  for s.","At the beginning of the battle, increases all allies' damage dealt by  for s.","At the beginning of the battle, increases all allies' damage dealt by  for s.","At the beginning of the battle, increases all allies' damage dealt by  for s.","At the beginning of the battle, increases all allies' damage dealt by  for s."]},"8000160":{"id":8000160,"n":"Dreamland Globe","r":"Mythic","season":"s3","stats":[["hp",[180.0,180.0,180.0,180.0,180.0,180.0,180.0,180.0,340.0,340.0,340.0,340.0,500.0,500.0,500.0,500.0,660.0,660.0,660.0,660.0]],["hpPct",[0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.04,0.05,0.05,0.05,0.05]]],"spell":"Dreamland Blessings","tiers":["The wearer gains  for s if their HP is below  and they are not under the effect of  applied by this Artifact when taking damage. Also, the wearer takes  less AOE damage.","The wearer gains  for s if their HP is below  and they are not under the effect of  applied by this Artifact when taking damage. Also, the wearer takes  less AOE damage.","The wearer gains  for s if their HP is below  and they are not under the effect of  applied by this Artifact when taking damage. Also, the wearer takes  less AOE damage.","The wearer gains  for s if their HP is below  and they are not under the effect of  applied by this Artifact when taking damage. Also, the wearer takes  less AOE damage.","The wearer gains  for s if their HP is below  and they are not under the effect of  applied by this Artifact when taking damage. Also, the wearer takes  less AOE damage.","The wearer gains  for s if their HP is below  and they are not under the effect of  applied by this Artifact when taking damage. Also, the wearer takes  less AOE damage."]},"8000159":{"id":8000159,"n":"Shadow Spawn","r":"Mythic","season":"s3","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["critRate",[0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.03,0.04]]],"spell":"Shadow Overlord","tiers":["Upon gaining Shadow Energy, the wearer gains an additional Attack Up for s equal to  of the Shadow Energy gained.","Upon gaining Shadow Energy, the wearer gains an additional Attack Up for s equal to  of the Shadow Energy gained.","Upon gaining Shadow Energy, the wearer gains an additional Attack Up for s equal to  of the Shadow Energy gained.","Upon gaining Shadow Energy, the wearer gains an additional Attack Up for s equal to  of the Shadow Energy gained.","Upon gaining Shadow Energy, the wearer gains an additional Attack Up for s equal to  of the Shadow Energy gained.","Upon gaining Shadow Energy, the wearer gains an additional Attack Up for s equal to  of the Shadow Energy gained."]},"8000158":{"id":8000158,"n":"Envoy's Wings","r":"Mythic","season":"s3","stats":[["hp",[180.0,180.0,180.0,180.0,180.0,180.0,180.0,180.0,340.0,340.0,340.0,340.0,500.0,500.0,500.0,500.0,660.0,660.0,660.0,660.0]],["critRate",[0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.03,0.04]]],"spell":"Nimbus Blessings","tiers":["When the wearer consumes Aura Energy, their Max HP is increased. For every  Aura Energy consumed, they gain 1 stack of  Max HP Up, up to 30 stacks.","When the wearer consumes Aura Energy, their Max HP is increased. For every  Aura Energy consumed, they gain 1 stack of  Max HP Up, up to 30 stacks.","When the wearer consumes Aura Energy, their Max HP is increased. For every  Aura Energy consumed, they gain 1 stack of  Max HP Up, up to 30 stacks.","When the wearer consumes Aura Energy, their Max HP is increased. For every  Aura Energy consumed, they gain 1 stack of  Max HP Up, up to 30 stacks.","When the wearer consumes Aura Energy, their Max HP is increased. For every  Aura Energy consumed, they gain 1 stack of  Max HP Up, up to 30 stacks.","When the wearer consumes Aura Energy, their Max HP is increased. For every  Aura Energy consumed, they gain 1 stack of  Max HP Up, up to 30 stacks."]},"8000157":{"id":8000157,"n":"Swamp Toadstool","r":"Mythic","season":"s3","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["atkPct",[0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.04,0.05,0.05,0.05,0.05]]],"spell":"Ulcerative Stench","tiers":["Increases the effect of  inflicted by the wearer by  and Poison Damage dealt by .","Increases the effect of  inflicted by the wearer by  and Poison Damage dealt by .","Increases the effect of  inflicted by the wearer by  and Poison Damage dealt by .","Increases the effect of  inflicted by the wearer by  and Poison Damage dealt by .","Increases the effect of  inflicted by the wearer by  and Poison Damage dealt by .","Increases the effect of  inflicted by the wearer by  and Poison Damage dealt by ."]},"8000156":{"id":8000156,"n":"Silver Pearl Casket","r":"Mythic","season":"s3","stats":[["hp",[180.0,180.0,180.0,180.0,180.0,180.0,180.0,180.0,340.0,340.0,340.0,340.0,500.0,500.0,500.0,500.0,660.0,660.0,660.0,660.0]],["critDmg",[0.01,0.01,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.05,0.05,0.05,0.05,0.06,0.07,0.07,0.07]]],"spell":"Daughter of the Sea","tiers":["Aemonleyda takes  less damage from single-target attacks, and her damage based on Max HP is increased by an additional .","Aemonleyda takes  less damage from single-target attacks, and her damage based on Max HP is increased by an additional .","Aemonleyda takes  less damage from single-target attacks, and her damage based on Max HP is increased by an additional .","Aemonleyda takes  less damage from single-target attacks, and her damage based on Max HP is increased by an additional .","Aemonleyda takes  less damage from single-target attacks, and her damage based on Max HP is increased by an additional .","Aemonleyda takes  less damage from single-target attacks, and her damage based on Max HP is increased by an additional ."]},"8000155":{"id":8000155,"n":"Nightmare Orb","r":"Mythic","season":"s3","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["ench",[2.0,2.0,2.0,2.0,2.0,4.0,4.0,4.0,4.0,4.0,6.0,6.0,6.0,8.0,8.0,8.0,10.0,10.0,10.0,10.0]]],"spell":"Eye of Nightmare","tiers":["Enters Demon form, gaining  for s. While in Demon form, Ozul's basic attacks deal an additional  damage.","Enters Demon form, gaining  for s. While in Demon form, Ozul's basic attacks deal an additional  damage.","Enters Demon form, gaining  for s. While in Demon form, Ozul's basic attacks deal an additional  damage.","Enters Demon form, gaining  for s. While in Demon form, Ozul's basic attacks deal an additional  damage.","Enters Demon form, gaining  for s. While in Demon form, Ozul's basic attacks deal an additional  damage.","Enters Demon form, gaining  for s. While in Demon form, Ozul's basic attacks deal an additional  damage."]},"8000154":{"id":8000154,"n":"Rat Tamer","r":"Mythic","season":"s3","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["critDmg",[0.01,0.01,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.05,0.05,0.05,0.05,0.06,0.07,0.07,0.07]]],"spell":"Father of Rats","tiers":["When Rook casts a skill to deal True Damage, this damage is increased by .","When Rook casts a skill to deal True Damage, this damage is increased by .","When Rook casts a skill to deal True Damage, this damage is increased by .","When Rook casts a skill to deal True Damage, this damage is increased by .","When Rook casts a skill to deal True Damage, this damage is increased by .","When Rook casts a skill to deal True Damage, this damage is increased by ."]},"8000192":{"id":8000192,"n":"Lotus Grace","r":"Mythic","season":"s2","stats":[["hp",[180.0,180.0,180.0,180.0,180.0,180.0,180.0,180.0,340.0,340.0,340.0,340.0,500.0,500.0,500.0,500.0,660.0,660.0,660.0,660.0]],["acc",[2.0,2.0,2.0,2.0,2.0,2.0,3.0,3.0,4.0,4.0,4.0,4.0,6.0,6.0,6.0,6.0,8.0,8.0,8.0,8.0]]],"spell":"Lotus Blossom Sutra","tiers":["When equipped by Naro, grants the following effects: Dealing damage to an enemy with Empyrean Treads refreshes their Empyrean Treads duration. For each enemy hit by the battle skill movement, the hero receives [+5%Max HP] healing. This can trigger 3 time(s) per spellcasting.","When equipped by Naro, grants the following effects: Dealing damage to an enemy with Empyrean Treads refreshes their Empyrean Treads duration. For each enemy hit by the battle skill movement, the hero receives [+6%Max HP] healing. This can trigger 3 time(s) per spellcasting.","When equipped by Naro, grants the following effects: Dealing damage to an enemy with Empyrean Treads refreshes their Empyrean Treads duration. For each enemy hit by the battle skill movement, the hero receives [+7%Max HP] healing. This can trigger 3 time(s) per spellcasting.","When equipped by Naro, grants the following effects: Dealing damage to an enemy with Empyrean Treads refreshes their Empyrean Treads duration. For each enemy hit by the battle skill movement, the hero receives [+8%Max HP] healing. This can trigger 3 time(s) per spellcasting.","When equipped by Naro, grants the following effects: Dealing damage to an enemy with Empyrean Treads refreshes their Empyrean Treads duration. For each enemy hit by the battle skill movement, the hero receives [+9%Max HP] healing. This can trigger 3 time(s) per spellcasting.","When equipped by Naro, grants the following effects: Dealing damage to an enemy with Empyrean Treads refreshes their Empyrean Treads duration. For each enemy hit by the battle skill movement, the hero receives [+10%Max HP] healing. This can trigger 3 time(s) per spellcasting."]},"8000150":{"id":8000150,"n":"Everlasting Diamond","r":"Mythic","season":"s2","stats":[["hp",[180.0,180.0,180.0,180.0,180.0,180.0,180.0,180.0,340.0,340.0,340.0,340.0,500.0,500.0,500.0,500.0,660.0,660.0,660.0,660.0]],["ench",[2.0,2.0,2.0,2.0,2.0,4.0,4.0,4.0,4.0,4.0,6.0,6.0,6.0,8.0,8.0,8.0,10.0,10.0,10.0,10.0]]],"spell":"Gift of the Upper Planes","tiers":["The wearer's healing increases by 15%.","The wearer's healing increases by 18%.","The wearer's healing increases by 21%.","The wearer's healing increases by 24%.","The wearer's healing increases by 27%.","The wearer's healing increases by 30%."]},"8000149":{"id":8000149,"n":"Ravatrix's Roots","r":"Mythic","season":"s2","stats":[["hp",[180.0,180.0,180.0,180.0,180.0,180.0,180.0,180.0,340.0,340.0,340.0,340.0,500.0,500.0,500.0,500.0,660.0,660.0,660.0,660.0]],["defPct",[0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.04,0.05,0.05,0.05,0.05]]],"spell":"Fey Queen's Embrace","tiers":["The wearer's HP increases by 5%, and Defense by 5%. This effect doubles for non-Legendary Heroes.","The wearer's HP increases by 7%, and Defense by 7%. This effect doubles for non-Legendary Heroes.","The wearer's HP increases by 9%, and Defense by 9%. This effect doubles for non-Legendary Heroes.","The wearer's HP increases by 11%, and Defense by 11%. This effect doubles for non-Legendary Heroes.","The wearer's HP increases by 13%, and Defense by 13%. This effect doubles for non-Legendary Heroes.","The wearer's HP increases by 15%, and Defense by 15%. This effect doubles for non-Legendary Heroes."]},"8000148":{"id":8000148,"n":"Malicious Manacle","r":"Mythic","season":"s2","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["critDmg",[0.01,0.01,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.05,0.05,0.05,0.05,0.06,0.07,0.07,0.07]]],"spell":"Wrath of the Ancient Blood","tiers":["Aschetius gains 20% Crit Rate, and the damage bonus from using Pyrokinesis to dispel Burn increases to 150%.","Aschetius gains 20% Crit Rate, and the damage bonus from using Pyrokinesis to dispel Burn increases to 170%.","Aschetius gains 20% Crit Rate, and the damage bonus from using Pyrokinesis to dispel Burn increases to 190%.","Aschetius gains 20% Crit Rate, and the damage bonus from using Pyrokinesis to dispel Burn increases to 210%.","Aschetius gains 20% Crit Rate, and the damage bonus from using Pyrokinesis to dispel Burn increases to 229%.","Aschetius gains 20% Crit Rate, and the damage bonus from using Pyrokinesis to dispel Burn increases to 250%."]},"8000147":{"id":8000147,"n":"Crown of Order","r":"Mythic","season":"s2","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["ench",[2.0,2.0,2.0,2.0,2.0,4.0,4.0,4.0,4.0,4.0,6.0,6.0,6.0,8.0,8.0,8.0,10.0,10.0,10.0,10.0]]],"spell":"Thunder's Might","tiers":["Perkunte's Lightning Chain and Lightning Bolt ignore the target's 20% Defense. When there are fewer than 5 enemies on the field, the damage dealt by Lightning Bolt is increased by 20% for each enemy fewer than 5.","Perkunte's Lightning Chain and Lightning Bolt ignore the target's 24% Defense. When there are fewer than 5 enemies on the field, the damage dealt by Lightning Bolt is increased by 25% for each enemy fewer than 5.","Perkunte's Lightning Chain and Lightning Bolt ignore the target's 28% Defense. When there are fewer than 5 enemies on the field, the damage dealt by Lightning Bolt is increased by 30% for each enemy fewer than 5.","Perkunte's Lightning Chain and Lightning Bolt ignore the target's 32% Defense. When there are fewer than 5 enemies on the field, the damage dealt by Lightning Bolt is increased by 35% for each enemy fewer than 5.","Perkunte's Lightning Chain and Lightning Bolt ignore the target's 36% Defense. When there are fewer than 5 enemies on the field, the damage dealt by Lightning Bolt is increased by 40% for each enemy fewer than 5.","Perkunte's Lightning Chain and Lightning Bolt ignore the target's 40% Defense. When there are fewer than 5 enemies on the field, the damage dealt by Lightning Bolt is increased by 50% for each enemy fewer than 5."]},"8000146":{"id":8000146,"n":"Helm of the Frostbeards","r":"Mythic","season":"s2","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["critRate",[0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.03,0.04]]],"spell":"Iskalland's Blessing","tiers":["Beldelle deals 15% more Runaway Storm damage, while increases the percentage of Crit Damage converted into Mortal Wound by 15% for Frost's Favor.","Beldelle deals 20% more Runaway Storm damage, while increases the percentage of Crit Damage converted into Mortal Wound by 20% for Frost's Favor.","Beldelle deals 30% more Runaway Storm damage, while increases the percentage of Crit Damage converted into Mortal Wound by 30% for Frost's Favor.","Beldelle deals 40% more Runaway Storm damage, while increases the percentage of Crit Damage converted into Mortal Wound by 40% for Frost's Favor.","Beldelle deals 50% more Runaway Storm damage, while increases the percentage of Crit Damage converted into Mortal Wound by 50% for Frost's Favor.","Beldelle deals 60% more Runaway Storm damage, while increases the percentage of Crit Damage converted into Mortal Wound by 60% for Frost's Favor."]},"8000145":{"id":8000145,"n":"Tempest War Drum","r":"Mythic","season":"s2","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["atkPct",[0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.04,0.05,0.05,0.05,0.05]]],"spell":"Thunderclap","tiers":["The wearer deals 10% more Lightning Chain damage, with each enemy under Electrocuted on the field further increasing the Lightning Chain damage by 2%.","The wearer deals 12% more Lightning Chain damage, with each enemy under Electrocuted on the field further increasing the Lightning Chain damage by 2%.","The wearer deals 14% more Lightning Chain damage, with each enemy under Electrocuted on the field further increasing the Lightning Chain damage by 3%.","The wearer deals 16% more Lightning Chain damage, with each enemy under Electrocuted on the field further increasing the Lightning Chain damage by 3%.","The wearer deals 18% more Lightning Chain damage, with each enemy under Electrocuted on the field further increasing the Lightning Chain damage by 4%.","The wearer deals 20% more Lightning Chain damage, with each enemy under Electrocuted on the field further increasing the Lightning Chain damage by 4%."]},"8000144":{"id":8000144,"n":"Oil of Skyfire","r":"Mythic","season":"s2","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["atkPct",[0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.04,0.05,0.05,0.05,0.05]]],"spell":"Reign of Skyfire","tiers":["The wearer's damage dealt to enemies inflicted with Burn is increased by 2% for each stack of Burn they possess.","The wearer's damage dealt to enemies inflicted with Burn is increased by 2% for each stack of Burn they possess.","The wearer's damage dealt to enemies inflicted with Burn is increased by 2% for each stack of Burn they possess.","The wearer's damage dealt to enemies inflicted with Burn is increased by 3% for each stack of Burn they possess.","The wearer's damage dealt to enemies inflicted with Burn is increased by 3% for each stack of Burn they possess.","The wearer's damage dealt to enemies inflicted with Burn is increased by 4% for each stack of Burn they possess."]},"8000143":{"id":8000143,"n":"Blooms of Preena","r":"Mythic","season":"s2","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["atkPct",[0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.04,0.05,0.05,0.05,0.05]]],"spell":"Mourning of the Snow Witch","tiers":["When the wearer consumes Ice Crystals, their next battle skill deals extra 15% damage.","When the wearer consumes Ice Crystals, their next battle skill deals extra 17% damage.","When the wearer consumes Ice Crystals, their next battle skill deals extra 19% damage.","When the wearer consumes Ice Crystals, their next battle skill deals extra 21% damage.","When the wearer consumes Ice Crystals, their next battle skill deals extra 23% damage.","When the wearer consumes Ice Crystals, their next battle skill deals extra 25% damage."]},"8000142":{"id":8000142,"n":"Titan Rib","r":"Mythic","season":"s2","stats":[["hp",[180.0,180.0,180.0,180.0,180.0,180.0,180.0,180.0,340.0,340.0,340.0,340.0,500.0,500.0,500.0,500.0,660.0,660.0,660.0,660.0]],["res",[2.0,2.0,2.0,2.0,2.0,4.0,4.0,4.0,4.0,4.0,6.0,6.0,6.0,8.0,8.0,8.0,10.0,10.0,10.0,10.0]]],"spell":"Mighty Twilight","tiers":["Upon resisting a negative effect, the wearer increases all allies' damage by 7% for 10s.","Upon resisting a negative effect, the wearer increases all allies' damage by 9% for 10s.","Upon resisting a negative effect, the wearer increases all allies' damage by 10% for 10s.","Upon resisting a negative effect, the wearer increases all allies' damage by 12% for 10s.","Upon resisting a negative effect, the wearer increases all allies' damage by 13% for 10s.","Upon resisting a negative effect, the wearer increases all allies' damage by 15% for 10s."]},"8000141":{"id":8000141,"n":"Nutaur's Shears","r":"Mythic","season":"s2","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["atkPct",[0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.04,0.05,0.05,0.05,0.05]]],"spell":"Life Clipping","tiers":["The wearer's damage reduces the target's Max HP by 10% of that damage. The Max HP reduction can be up to 50% for any target. This effect cannot trigger on bosses.","The wearer's damage reduces the target's Max HP by 12% of that damage. The Max HP reduction can be up to 50% for any target. This effect cannot trigger on bosses.","The wearer's damage reduces the target's Max HP by 14% of that damage. The Max HP reduction can be up to 50% for any target. This effect cannot trigger on bosses.","The wearer's damage reduces the target's Max HP by 16% of that damage. The Max HP reduction can be up to 50% for any target. This effect cannot trigger on bosses.","The wearer's damage reduces the target's Max HP by 18% of that damage. The Max HP reduction can be up to 50% for any target. This effect cannot trigger on bosses.","The wearer's damage reduces the target's Max HP by 20% of that damage. The Max HP reduction can be up to 50% for any target. This effect cannot trigger on bosses."]},"8000140":{"id":8000140,"n":"Kulkulcante's Bindings","r":"Mythic","season":"s2","stats":[["hp",[180.0,180.0,180.0,180.0,180.0,180.0,180.0,180.0,340.0,340.0,340.0,340.0,500.0,500.0,500.0,500.0,660.0,660.0,660.0,660.0]],["acc",[2.0,2.0,2.0,2.0,2.0,2.0,3.0,3.0,4.0,4.0,4.0,4.0,6.0,6.0,6.0,6.0,8.0,8.0,8.0,8.0]]],"spell":"Swamp Nightmare","tiers":["As the battle starts, the wearer has a 100.0% chance of inflicting Attack Penalty II on the enemy with the highest Attack for 10.0s. If the target's Attack exceeds twice the wearer's, this debuff cannot be dispelled for its duration.","As the battle starts, the wearer has a 100.0% chance of inflicting Attack Penalty II on the enemy with the highest Attack for 12.0s. If the target's Attack exceeds twice the wearer's, this debuff cannot be dispelled for its duration.","As the battle starts, the wearer has a 100.0% chance of inflicting Attack Penalty II on the enemy with the highest Attack for 14.0s. If the target's Attack exceeds twice the wearer's, this debuff cannot be dispelled for its duration.","As the battle starts, the wearer has a 100.0% chance of inflicting Attack Penalty II on the enemy with the highest Attack for 16.0s. If the target's Attack exceeds twice the wearer's, this debuff cannot be dispelled for its duration.","As the battle starts, the wearer has a 100.0% chance of inflicting Attack Penalty II on the enemy with the highest Attack for 18.0s. If the target's Attack exceeds twice the wearer's, this debuff cannot be dispelled for its duration.","As the battle starts, the wearer has a 100.0% chance of inflicting Attack Penalty II on the enemy with the highest Attack for 20.0s. If the target's Attack exceeds twice the wearer's, this debuff cannot be dispelled for its duration."]},"8000139":{"id":8000139,"n":"Aurora Telescope","r":"Mythic","season":"s2","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["atkPct",[0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.04,0.05,0.05,0.05,0.05]]],"spell":"Vulnerability Assessment","tiers":["The wearer deals more damage based on the Defense gap between them and the enemy. If the target's Defense reaches 200% of the wearer's, the bonus damage caps at 20%.","The wearer deals more damage based on the Defense gap between them and the enemy. If the target's Defense reaches 200% of the wearer's, the bonus damage caps at 24%.","The wearer deals more damage based on the Defense gap between them and the enemy. If the target's Defense reaches 200% of the wearer's, the bonus damage caps at 28%.","The wearer deals more damage based on the Defense gap between them and the enemy. If the target's Defense reaches 200% of the wearer's, the bonus damage caps at 32%.","The wearer deals more damage based on the Defense gap between them and the enemy. If the target's Defense reaches 200% of the wearer's, the bonus damage caps at 36%.","The wearer deals more damage based on the Defense gap between them and the enemy. If the target's Defense reaches 200% of the wearer's, the bonus damage caps at 40%."]},"8000191":{"id":8000191,"n":"Supreme Crown","r":"Mythic","season":"s1","stats":[["hp",[180.0,180.0,180.0,180.0,180.0,180.0,180.0,180.0,340.0,340.0,340.0,340.0,500.0,500.0,500.0,500.0,660.0,660.0,660.0,660.0]],["acc",[2.0,2.0,2.0,2.0,2.0,2.0,3.0,3.0,4.0,4.0,4.0,4.0,6.0,6.0,6.0,6.0,8.0,8.0,8.0,8.0]]],"spell":"Order of Darkness","tiers":["Enemies affected by debuffs continuously lose HP. For each debuff stack they possess, they take Necrotic Damage equal to [+100% Attack] from the Dark Lady every 2s.","Enemies affected by debuffs continuously lose HP. For each debuff stack they possess, they take Necrotic Damage equal to [+120% Attack] from the Dark Lady every 2s.","Enemies affected by debuffs continuously lose HP. For each debuff stack they possess, they take Necrotic Damage equal to [+140% Attack] from the Dark Lady every 2s.","Enemies affected by debuffs continuously lose HP. For each debuff stack they possess, they take Necrotic Damage equal to [+160% Attack] from the Dark Lady every 2s.","Enemies affected by debuffs continuously lose HP. For each debuff stack they possess, they take Necrotic Damage equal to [+180% Attack] from the Dark Lady every 2s.","Enemies affected by debuffs continuously lose HP. For each debuff stack they possess, they take Necrotic Damage equal to [+200% Attack] from the Dark Lady every 2s."]},"8000190":{"id":8000190,"n":"Kui Crown","r":"Mythic","season":"s1","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["critRate",[0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.03,0.04]]],"spell":"Unyielding Obsession","tiers":["When equipped by Divine Ascetic: At the start of battle, he gains 10 stacks of Obsession. When the Obsession reaches max stacks, his damage is increased by 15%.","When equipped by Divine Ascetic: At the start of battle, he gains 10 stacks of Obsession. When the Obsession reaches max stacks, his damage is increased by 18%.","When equipped by Divine Ascetic: At the start of battle, he gains 10 stacks of Obsession. When the Obsession reaches max stacks, his damage is increased by 21%.","When equipped by Divine Ascetic: At the start of battle, he gains 10 stacks of Obsession. When the Obsession reaches max stacks, his damage is increased by 24%.","When equipped by Divine Ascetic: At the start of battle, he gains 10 stacks of Obsession. When the Obsession reaches max stacks, his damage is increased by 27%.","When equipped by Divine Ascetic: At the start of battle, he gains 10 stacks of Obsession. When the Obsession reaches max stacks, his damage is increased by 30%."]},"8000189":{"id":8000189,"n":"Guenhwyvar's Onyx Figurine","r":"Mythic","season":"s1","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["atkPct",[0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.04,0.05,0.05,0.05,0.05]]],"spell":"Brave Companion","tiers":["Each time Guenhwyvar deals damage, reduces the target's Defense by 2.5% in 10s, 2 stacks at most.","Each time Guenhwyvar deals damage, reduces the target's Defense by 2.5% in 10s, 2 stacks at most.","Each time Guenhwyvar deals damage, reduces the target's Defense by 2.5% in 10s, 3 stacks at most.","Each time Guenhwyvar deals damage, reduces the target's Defense by 2.5% in 10s, 3 stacks at most.","Each time Guenhwyvar deals damage, reduces the target's Defense by 2.5% in 10s, 4 stacks at most.","Each time Guenhwyvar deals damage, reduces the target's Defense by 2.5% in 10s, 4 stacks at most."]},"8000188":{"id":8000188,"n":"Prismatic Cloak","r":"Mythic","season":"s1","stats":[["hp",[180.0,180.0,180.0,180.0,180.0,180.0,180.0,180.0,340.0,340.0,340.0,340.0,500.0,500.0,500.0,500.0,660.0,660.0,660.0,660.0]],["res",[2.0,2.0,2.0,2.0,2.0,4.0,4.0,4.0,4.0,4.0,6.0,6.0,6.0,8.0,8.0,8.0,10.0,10.0,10.0,10.0]]],"spell":"Deep Sea's Last Wish","tiers":["When the wearer successfully resists a negative effect, has a 25% chance of reflecting it to its source, ignoring the enemy's Resistance.","When the wearer successfully resists a negative effect, has a 30% chance of reflecting it to its source, ignoring the enemy's Resistance.","When the wearer successfully resists a negative effect, has a 35% chance of reflecting it to its source, ignoring the enemy's Resistance.","When the wearer successfully resists a negative effect, has a 40% chance of reflecting it to its source, ignoring the enemy's Resistance.","When the wearer successfully resists a negative effect, has a 45% chance of reflecting it to its source, ignoring the enemy's Resistance.","When the wearer successfully resists a negative effect, has a 50% chance of reflecting it to its source, ignoring the enemy's Resistance."]},"8000186":{"id":8000186,"n":"Polaris Planetarium","r":"Mythic","season":"s1","stats":[["hp",[180.0,180.0,180.0,180.0,180.0,180.0,180.0,180.0,340.0,340.0,340.0,340.0,500.0,500.0,500.0,500.0,660.0,660.0,660.0,660.0]],["atkPct",[0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.04,0.05,0.05,0.05,0.05]]],"spell":"Bright as Stars","tiers":["When the wearer is affected by control effects, gains 1 stack(s) of Sanctuary for 10.0s.\nSanctuary: When taking damage, consumes 1 stack to reduce that instance of damage by 70%.","When the wearer is affected by control effects, gains 1 stack(s) of Sanctuary for 10.0s.\nSanctuary: When taking damage, consumes 1 stack to reduce that instance of damage by 70%.","When the wearer is affected by control effects, gains 2 stack(s) of Sanctuary for 10.0s.\nSanctuary: When taking damage, consumes 1 stack to reduce that instance of damage by 70%.","When the wearer is affected by control effects, gains 2 stack(s) of Sanctuary for 10.0s.\nSanctuary: When taking damage, consumes 1 stack to reduce that instance of damage by 70%.","When the wearer is affected by control effects, gains 3 stack(s) of Sanctuary for 10.0s.\nSanctuary: When taking damage, consumes 1 stack to reduce that instance of damage by 70%.","When the wearer is affected by control effects, gains 3 stack(s) of Sanctuary for 10.0s.\nSanctuary: When taking damage, consumes 1 stack to reduce that instance of damage by 70%."]},"8000185":{"id":8000185,"n":"Whisper of the Consumer","r":"Mythic","season":"s1","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["critDmg",[0.01,0.01,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.05,0.05,0.05,0.05,0.06,0.07,0.07,0.07]]],"spell":"Whispering Curse","tiers":["The wearer's ultimate skill deals additional [+5%Target's Max HP]True Damage (not exceeding 200% Attack).\nIf the target's HP is below 5%, executes them.","The wearer's ultimate skill deals additional [+5%Target's Max HP]True Damage (not exceeding 200% Attack).\nIf the target's HP is below 6%, executes them.","The wearer's ultimate skill deals additional [+5%Target's Max HP]True Damage (not exceeding 200% Attack).\nIf the target's HP is below 7%, executes them.","The wearer's ultimate skill deals additional [+5%Target's Max HP]True Damage (not exceeding 200% Attack).\nIf the target's HP is below 8%, executes them.","The wearer's ultimate skill deals additional [+5%Target's Max HP]True Damage (not exceeding 200% Attack).\nIf the target's HP is below 9%, executes them.","The wearer's ultimate skill deals additional [+5%Target's Max HP]True Damage (not exceeding 200% Attack).\nIf the target's HP is below 10%, executes them."]},"8000183":{"id":8000183,"n":"Weird Whistle","r":"Mythic","season":"s1","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["atkPct",[0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.04,0.05,0.05,0.05,0.05]]],"spell":"Eerie Buzz","tiers":["The wearer's damage inflicts a 5s Curse to enemies. If an enemy dies while cursed, creates an explosion dealing [+75% Attack] True Damage to surrounding enemies.","The wearer's damage inflicts a 5s Curse to enemies. If an enemy dies while cursed, creates an explosion dealing [+90% Attack] True Damage to surrounding enemies.","The wearer's damage inflicts a 5s Curse to enemies. If an enemy dies while cursed, creates an explosion dealing [+105% Attack] True Damage to surrounding enemies.","The wearer's damage inflicts a 5s Curse to enemies. If an enemy dies while cursed, creates an explosion dealing [+120% Attack] True Damage to surrounding enemies.","The wearer's damage inflicts a 5s Curse to enemies. If an enemy dies while cursed, creates an explosion dealing [+135% Attack] True Damage to surrounding enemies.","The wearer's damage inflicts a 5s Curse to enemies. If an enemy dies while cursed, creates an explosion dealing [+150% Attack] True Damage to surrounding enemies."]},"8000182":{"id":8000182,"n":"Darkthorn Claw","r":"Mythic","season":"s1","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["critRate",[0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.03,0.04]]],"spell":"Heart-Piercing Pain","tiers":["The wearer's attacks ignore shields on enemies.","The wearer's attacks ignore shields on enemies.","The wearer's attacks ignore shields on enemies.","The wearer's attacks ignore shields on enemies.","The wearer's attacks ignore shields on enemies.","The wearer's attacks ignore shields on enemies."]},"8000168":{"id":8000168,"n":"Bigby's Gauntlet","r":"Mythic","season":"s1","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["atkPct",[0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.04,0.05,0.05,0.05,0.05]]],"spell":"Easy Catch","tiers":["The wearer deals 10% increased damage to enemies without buffs. If the targets are inflicted with Control, the wearer deals 20% increased damage instead.","The wearer deals 12% increased damage to enemies without buffs. If the targets are inflicted with Control, the wearer deals 24% increased damage instead.","The wearer deals 14% increased damage to enemies without buffs. If the targets are inflicted with Control, the wearer deals 28% increased damage instead.","The wearer deals 16% increased damage to enemies without buffs. If the targets are inflicted with Control, the wearer deals 32% increased damage instead.","The wearer deals 18% increased damage to enemies without buffs. If the targets are inflicted with Control, the wearer deals 36% increased damage instead.","The wearer deals 20% increased damage to enemies without buffs. If the targets are inflicted with Control, the wearer deals 40% increased damage instead."]},"8000153":{"id":8000153,"n":"A Guide to Magic by Elminster","r":"Mythic","season":"s1","stats":[["hp",[180.0,180.0,180.0,180.0,180.0,180.0,180.0,180.0,340.0,340.0,340.0,340.0,500.0,500.0,500.0,500.0,660.0,660.0,660.0,660.0]],["ench",[2.0,2.0,2.0,2.0,2.0,4.0,4.0,4.0,4.0,4.0,6.0,6.0,6.0,8.0,8.0,8.0,10.0,10.0,10.0,10.0]]],"spell":"A Guide to Magic by Elminster","tiers":["The shield effect granted by the wearer is increased by 10%, and its duration is extended by 30%.","The shield effect granted by the wearer is increased by 13%, and its duration is extended by 30%.","The shield effect granted by the wearer is increased by 16%, and its duration is extended by 30%.","The shield effect granted by the wearer is increased by 19%, and its duration is extended by 30%.","The shield effect granted by the wearer is increased by 22%, and its duration is extended by 30%.","The shield effect granted by the wearer is increased by 25%, and its duration is extended by 30%."]},"8000130":{"id":8000130,"n":"Hero's Trophy","r":"Mythic","season":"s1","stats":[["hp",[180.0,180.0,180.0,180.0,180.0,180.0,180.0,180.0,340.0,340.0,340.0,340.0,500.0,500.0,500.0,500.0,660.0,660.0,660.0,660.0]],["atkPct",[0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.04,0.05,0.05,0.05,0.05]]],"spell":"Badge of Courage","tiers":["The wearer gains the following effects every 20s: for the first 10s, the wearer gains 1 stack of 3% Attack Up per second; for the next 10s, the wearer loses 1 stack of that Attack Up per second.","The wearer gains the following effects every 20s: for the first 10s, the wearer gains 1 stack of 3% Attack Up per second; for the next 10s, the wearer loses 1 stack of that Attack Up per second.","The wearer gains the following effects every 20s: for the first 10s, the wearer gains 1 stack of 4% Attack Up per second; for the next 10s, the wearer loses 1 stack of that Attack Up per second.","The wearer gains the following effects every 20s: for the first 10s, the wearer gains 1 stack of 4% Attack Up per second; for the next 10s, the wearer loses 1 stack of that Attack Up per second.","The wearer gains the following effects every 20s: for the first 10s, the wearer gains 1 stack of 5% Attack Up per second; for the next 10s, the wearer loses 1 stack of that Attack Up per second.","The wearer gains the following effects every 20s: for the first 10s, the wearer gains 1 stack of 6% Attack Up per second; for the next 10s, the wearer loses 1 stack of that Attack Up per second."]},"8000129":{"id":8000129,"n":"Giant Turtle Offspring's Shell","r":"Mythic","season":"s1","stats":[["def",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["hpPct",[0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.04,0.05,0.05,0.05,0.05]]],"spell":"Turtle Guardian","tiers":["As the battle starts, a [10% Max HP] shield that lasts for 15.0s is granted to each ally.","As the battle starts, a [11% Max HP] shield that lasts for 15.0s is granted to each ally.","As the battle starts, a [12% Max HP] shield that lasts for 15.0s is granted to each ally.","As the battle starts, a [13% Max HP] shield that lasts for 15.0s is granted to each ally.","As the battle starts, a [14% Max HP] shield that lasts for 15.0s is granted to each ally.","As the battle starts, a [15% Max HP] shield that lasts for 15.0s is granted to each ally."]},"8000127":{"id":8000127,"n":"Aurelium Vest","r":"Mythic","season":"s1","stats":[["hp",[180.0,180.0,180.0,180.0,180.0,180.0,180.0,180.0,340.0,340.0,340.0,340.0,500.0,500.0,500.0,500.0,660.0,660.0,660.0,660.0]],["defPct",[0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.04,0.05,0.05,0.05,0.05]]],"spell":"Aurelium Power","tiers":["Shield granted by the wearer to an ally also reduces the damage done to the ally by 10%.","Shield granted by the wearer to an ally also reduces the damage done to the ally by 11%.","Shield granted by the wearer to an ally also reduces the damage done to the ally by 13%.","Shield granted by the wearer to an ally also reduces the damage done to the ally by 14%.","Shield granted by the wearer to an ally also reduces the damage done to the ally by 16%.","Shield granted by the wearer to an ally also reduces the damage done to the ally by 17%."]},"8000123":{"id":8000123,"n":"Queen's Fan","r":"Mythic","season":"s1","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["atkPct",[0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.04,0.05,0.05,0.05,0.05]]],"spell":"Queen's Legacy","tiers":["Derivative Damage dealt by the wearer gains a Damage Bonus based on the distance between the wearer and the enemy, increasing by 3% per tile, with the Damage Bonus capped at 5 tiles.","Derivative Damage dealt by the wearer gains a Damage Bonus based on the distance between the wearer and the enemy, increasing by 3% per tile, with the Damage Bonus capped at 5 tiles.","Derivative Damage dealt by the wearer gains a Damage Bonus based on the distance between the wearer and the enemy, increasing by 4% per tile, with the Damage Bonus capped at 5 tiles.","Derivative Damage dealt by the wearer gains a Damage Bonus based on the distance between the wearer and the enemy, increasing by 5% per tile, with the Damage Bonus capped at 5 tiles.","Derivative Damage dealt by the wearer gains a Damage Bonus based on the distance between the wearer and the enemy, increasing by 6% per tile, with the Damage Bonus capped at 5 tiles.","Derivative Damage dealt by the wearer gains a Damage Bonus based on the distance between the wearer and the enemy, increasing by 7% per tile, with the Damage Bonus capped at 5 tiles."]},"8000121":{"id":8000121,"n":"Lantern of the Dead","r":"Mythic","season":"s1","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["ench",[2.0,2.0,2.0,2.0,2.0,4.0,4.0,4.0,4.0,4.0,6.0,6.0,6.0,8.0,8.0,8.0,10.0,10.0,10.0,10.0]]],"spell":"Spite of the Dead","tiers":["When an undead creature summoned by the wearer dies, the summoned unit deals [50% Attack][+50%Attack]Necrotic Damage to nearby enemies.","When an undead creature summoned by the wearer dies, the summoned unit deals [55% Attack][+55%Attack]Necrotic Damage to nearby enemies.","When an undead creature summoned by the wearer dies, the summoned unit deals [60% Attack][+60%Attack]Necrotic Damage to nearby enemies.","When an undead creature summoned by the wearer dies, the summoned unit deals [65% Attack][+65%Attack]Necrotic Damage to nearby enemies.","When an undead creature summoned by the wearer dies, the summoned unit deals [70% Attack][+70%Attack]Necrotic Damage to nearby enemies.","When an undead creature summoned by the wearer dies, the summoned unit deals [75% Attack][+75%Attack]Necrotic Damage to nearby enemies."]},"8000120":{"id":8000120,"n":"Hysteria Pan Flute","r":"Mythic","season":"s1","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["critDmg",[0.01,0.01,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.05,0.05,0.05,0.05,0.06,0.07,0.07,0.07]]],"spell":"Rhapsodist Dance","tiers":["After consuming Rally by casting a skill, the wearer's damage is increased by 5% for 15.0s. The effect is capped at 3 stacks, and each stack has a separate duration that cannot be reset.","After consuming Rally by casting a skill, the wearer's damage is increased by 6% for 15.0s. The effect is capped at 3 stacks, and each stack has a separate duration that cannot be reset.","After consuming Rally by casting a skill, the wearer's damage is increased by 7% for 15.0s. The effect is capped at 3 stacks, and each stack has a separate duration that cannot be reset.","After consuming Rally by casting a skill, the wearer's damage is increased by 8% for 15.0s. The effect is capped at 3 stacks, and each stack has a separate duration that cannot be reset.","After consuming Rally by casting a skill, the wearer's damage is increased by 9% for 15.0s. The effect is capped at 3 stacks, and each stack has a separate duration that cannot be reset.","After consuming Rally by casting a skill, the wearer's damage is increased by 10% for 15.0s. The effect is capped at 3 stacks, and each stack has a separate duration that cannot be reset."]},"8000119":{"id":8000119,"n":"Ri'kir Boomerang","r":"Mythic","season":"s1","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["ench",[2.0,2.0,2.0,2.0,2.0,4.0,4.0,4.0,4.0,4.0,6.0,6.0,6.0,8.0,8.0,8.0,10.0,10.0,10.0,10.0]]],"spell":"Curse of the Remnant","tiers":["When the wearer successfully inflicts Poison on an enemy, there is a 60% chance of triggering a Poison Explosion. It takes effect on the same target once every 9.0s at most.","When the wearer successfully inflicts Poison on an enemy, there is a 60% chance of triggering a Poison Explosion. It takes effect on the same target once every 8.5s at most.","When the wearer successfully inflicts Poison on an enemy, there is a 60% chance of triggering a Poison Explosion. It takes effect on the same target once every 8.0s at most.","When the wearer successfully inflicts Poison on an enemy, there is a 60% chance of triggering a Poison Explosion. It takes effect on the same target once every 7.5s at most.","When the wearer successfully inflicts Poison on an enemy, there is a 60% chance of triggering a Poison Explosion. It takes effect on the same target once every 7.0s at most.","When the wearer successfully inflicts Poison on an enemy, there is a 60% chance of triggering a Poison Explosion. It takes effect on the same target once every 6.0s at most."]},"8000118":{"id":8000118,"n":"The Great River Lamp","r":"Mythic","season":"s1","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["critDmg",[0.01,0.01,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.05,0.05,0.05,0.05,0.06,0.07,0.07,0.07]]],"spell":"Lamplighter's Blessing","tiers":["The wearer's damage is increased by 1% for 15.0s after casting the ultimate skill, during which time 1 extra stack of this effect is granted upon each of the wearer's basic attack, capped at 10 stacks.","The wearer's damage is increased by 1% for 15.0s after casting the ultimate skill, during which time 1 extra stack of this effect is granted upon each of the wearer's basic attack, capped at 10 stacks.","The wearer's damage is increased by 2% for 15.0s after casting the ultimate skill, during which time 1 extra stack of this effect is granted upon each of the wearer's basic attack, capped at 10 stacks.","The wearer's damage is increased by 2% for 15.0s after casting the ultimate skill, during which time 1 extra stack of this effect is granted upon each of the wearer's basic attack, capped at 10 stacks.","The wearer's damage is increased by 2% for 15.0s after casting the ultimate skill, during which time 1 extra stack of this effect is granted upon each of the wearer's basic attack, capped at 10 stacks.","The wearer's damage is increased by 3% for 15.0s after casting the ultimate skill, during which time 1 extra stack of this effect is granted upon each of the wearer's basic attack, capped at 10 stacks."]},"8000117":{"id":8000117,"n":"Mark of the Ice Calamity","r":"Mythic","season":"s1","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["acc",[2.0,2.0,2.0,2.0,2.0,2.0,3.0,3.0,4.0,4.0,4.0,4.0,6.0,6.0,6.0,6.0,8.0,8.0,8.0,8.0]]],"spell":"Frigid Mark","tiers":["The Frost inflicted by the wearer has a 50% chance to be undispellable. After the wearer successfully inflicts Frost on the enemy, the Cold Damage dealt will be increased by 1% for 10.0s, up to 5 stacks. Each stack has a separate duration that can't be refreshed.","The Frost inflicted by the wearer has a 50% chance to be undispellable. After the wearer successfully inflicts Frost on the enemy, the Cold Damage dealt will be increased by 1% for 10.0s, up to 5 stacks. Each stack has a separate duration that can't be refreshed.","The Frost inflicted by the wearer has a 50% chance to be undispellable. After the wearer successfully inflicts Frost on the enemy, the Cold Damage dealt will be increased by 2% for 10.0s, up to 5 stacks. Each stack has a separate duration that can't be refreshed.","The Frost inflicted by the wearer has a 50% chance to be undispellable. After the wearer successfully inflicts Frost on the enemy, the Cold Damage dealt will be increased by 2% for 10.0s, up to 5 stacks. Each stack has a separate duration that can't be refreshed.","The Frost inflicted by the wearer has a 50% chance to be undispellable. After the wearer successfully inflicts Frost on the enemy, the Cold Damage dealt will be increased by 2% for 10.0s, up to 5 stacks. Each stack has a separate duration that can't be refreshed.","The Frost inflicted by the wearer has a 50% chance to be undispellable. After the wearer successfully inflicts Frost on the enemy, the Cold Damage dealt will be increased by 3% for 10.0s, up to 5 stacks. Each stack has a separate duration that can't be refreshed."]},"8000116":{"id":8000116,"n":"Flametongue","r":"Mythic","season":"s1","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["critRate",[0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.03,0.04]]],"spell":"Uncanny Tongue","tiers":["When an ally's Wild dice roll is ≥5, the wearer gains 3% Damage Bonus for 10.0s, up to 5 stacks.","When an ally's Wild dice roll is ≥5, the wearer gains 3% Damage Bonus for 10.0s, up to 5 stacks.","When an ally's Wild dice roll is ≥5, the wearer gains 4% Damage Bonus for 10.0s, up to 5 stacks.","When an ally's Wild dice roll is ≥5, the wearer gains 5% Damage Bonus for 10.0s, up to 5 stacks.","When an ally's Wild dice roll is ≥5, the wearer gains 6% Damage Bonus for 10.0s, up to 5 stacks.","When an ally's Wild dice roll is ≥5, the wearer gains 7% Damage Bonus for 10.0s, up to 5 stacks."]},"8000115":{"id":8000115,"n":"Black Blood Scale","r":"Mythic","season":"s1","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["critDmg",[0.01,0.01,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.05,0.05,0.05,0.05,0.06,0.07,0.07,0.07]]],"spell":"Lure of the Dead","tiers":["Lelwanis's Lady of Dark Ruins has a 100% chance to summon 2 corpses. For every 10 stacks of Dragon Blood, Lelwanis gains 5% Defense Penetration and increases the damage of Dragon of Death by 5%.","Lelwanis's Lady of Dark Ruins has a 100% chance to summon 2 corpses. For every 10 stacks of Dragon Blood, Lelwanis gains 6% Defense Penetration and increases the damage of Dragon of Death by 6%.","Lelwanis's Lady of Dark Ruins has a 100% chance to summon 2 corpses. For every 10 stacks of Dragon Blood, Lelwanis gains 7% Defense Penetration and increases the damage of Dragon of Death by 7%.","Lelwanis's Lady of Dark Ruins has a 100% chance to summon 2 corpses. For every 10 stacks of Dragon Blood, Lelwanis gains 8% Defense Penetration and increases the damage of Dragon of Death by 8%.","Lelwanis's Lady of Dark Ruins has a 100% chance to summon 2 corpses. For every 10 stacks of Dragon Blood, Lelwanis gains 9% Defense Penetration and increases the damage of Dragon of Death by 9%.","Lelwanis's Lady of Dark Ruins has a 100% chance to summon 2 corpses. For every 10 stacks of Dragon Blood, Lelwanis gains 10% Defense Penetration and increases the damage of Dragon of Death by 10%."]},"8000114":{"id":8000114,"n":"Arbiter's Pendant","r":"Mythic","season":"s1","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["critRate",[0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.03,0.04]]],"spell":"Arbiter's Will","tiers":["When Nastjenka triggers a critical hit with a feather shot from Wild Beak, the follow-up damage from this particular feather will increase by 50%.","When Nastjenka triggers a critical hit with a feather shot from Wild Beak, the follow-up damage from this particular feather will increase by 70%.","When Nastjenka triggers a critical hit with a feather shot from Wild Beak, the follow-up damage from this particular feather will increase by 90%.","When Nastjenka triggers a critical hit with a feather shot from Wild Beak, the follow-up damage from this particular feather will increase by 110%.","When Nastjenka triggers a critical hit with a feather shot from Wild Beak, the follow-up damage from this particular feather will increase by 130%.","When Nastjenka triggers a critical hit with a feather shot from Wild Beak, the follow-up damage from this particular feather will increase by 150%."]},"8000113":{"id":8000113,"n":"Esoteric Pearl Necklace","r":"Mythic","season":"s1","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["atkPct",[0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.04,0.05,0.05,0.05,0.05]]],"spell":"Scarlet Charm","tiers":["When the Vortex created by Flora through Pillar of Secret Flame explodes, each stack of energy increases the burst damage by 3%, up to 20 stacks.","When the Vortex created by Flora through Pillar of Secret Flame explodes, each stack of energy increases the burst damage by 4%, up to 20 stacks.","When the Vortex created by Flora through Pillar of Secret Flame explodes, each stack of energy increases the burst damage by 5%, up to 20 stacks.","When the Vortex created by Flora through Pillar of Secret Flame explodes, each stack of energy increases the burst damage by 6%, up to 20 stacks.","When the Vortex created by Flora through Pillar of Secret Flame explodes, each stack of energy increases the burst damage by 7%, up to 20 stacks.","When the Vortex created by Flora through Pillar of Secret Flame explodes, each stack of energy increases the burst damage by 8%, up to 20 stacks."]},"8000112":{"id":8000112,"n":"Monelisse-Blessed Scabbard","r":"Mythic","season":"s1","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["critDmg",[0.01,0.01,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.05,0.05,0.05,0.05,0.06,0.07,0.07,0.07]]],"spell":"Lord's Demeanor","tiers":["When Thelendor's Lunar Arrival triggers a critical hit, he gains 1 stack of Rally. Lunar Retribution unleashes a rain of moonlight with duration extended by 1.5s, and the maximum number of moonlight beams channeled at a single target increased by 1.","When Thelendor's Lunar Arrival triggers a critical hit, he gains 1 stack of Rally. Lunar Retribution unleashes a rain of moonlight with duration extended by 1.8s, and the maximum number of moonlight beams channeled at a single target increased by 2.","When Thelendor's Lunar Arrival triggers a critical hit, he gains 1 stack of Rally. Lunar Retribution unleashes a rain of moonlight with duration extended by 2.1s, and the maximum number of moonlight beams channeled at a single target increased by 3.","When Thelendor's Lunar Arrival triggers a critical hit, he gains 1 stack of Rally. Lunar Retribution unleashes a rain of moonlight with duration extended by 2.4s, and the maximum number of moonlight beams channeled at a single target increased by 4.","When Thelendor's Lunar Arrival triggers a critical hit, he gains 1 stack of Rally. Lunar Retribution unleashes a rain of moonlight with duration extended by 2.7s, and the maximum number of moonlight beams channeled at a single target increased by 5.","When Thelendor's Lunar Arrival triggers a critical hit, he gains 1 stack of Rally. Lunar Retribution unleashes a rain of moonlight with duration extended by 3s, and the maximum number of moonlight beams channeled at a single target increased by 6."]},"8000111":{"id":8000111,"n":"Nightfall Pallium","r":"Mythic","season":"s1","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["ench",[2.0,2.0,2.0,2.0,2.0,4.0,4.0,4.0,4.0,4.0,6.0,6.0,6.0,8.0,8.0,8.0,10.0,10.0,10.0,10.0]]],"spell":"Poisonous Shadow","tiers":["Increases Lothair's damage dealt with Poisonous Intention by 10%, with a 15% chance of dealing double damage.","Increases Lothair's damage dealt with Poisonous Intention by 12%, with a 18% chance of dealing double damage.","Increases Lothair's damage dealt with Poisonous Intention by 14%, with a 21% chance of dealing double damage.","Increases Lothair's damage dealt with Poisonous Intention by 16%, with a 24% chance of dealing double damage.","Increases Lothair's damage dealt with Poisonous Intention by 18%, with a 27% chance of dealing double damage.","Increases Lothair's damage dealt with Poisonous Intention by 20%, with a 30% chance of dealing double damage."]},"8000110":{"id":8000110,"n":"Eternal Snow Crystal","r":"Mythic","season":"s1","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["critRate",[0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.03,0.04]]],"spell":"Eternal Snow Crystal","tiers":["While Icewind is in effect, any enemy with HP below 15% will be executed by Hvitar. Her Breath of Frost receives enhancement in Damage Bonus: Each enemy inflicted with Frost on the battlefield increases the damage by 20%.","While Icewind is in effect, any enemy with HP below 17% will be executed by Hvitar. Her Breath of Frost receives enhancement in Damage Bonus: Each enemy inflicted with Frost on the battlefield increases the damage by 21%.","While Icewind is in effect, any enemy with HP below 19% will be executed by Hvitar. Her Breath of Frost receives enhancement in Damage Bonus: Each enemy inflicted with Frost on the battlefield increases the damage by 22%.","While Icewind is in effect, any enemy with HP below 21% will be executed by Hvitar. Her Breath of Frost receives enhancement in Damage Bonus: Each enemy inflicted with Frost on the battlefield increases the damage by 23%.","While Icewind is in effect, any enemy with HP below 23% will be executed by Hvitar. Her Breath of Frost receives enhancement in Damage Bonus: Each enemy inflicted with Frost on the battlefield increases the damage by 24%.","While Icewind is in effect, any enemy with HP below 25% will be executed by Hvitar. Her Breath of Frost receives enhancement in Damage Bonus: Each enemy inflicted with Frost on the battlefield increases the damage by 25%."]},"8000109":{"id":8000109,"n":"Witch's Remains","r":"Mythic","season":"s1","stats":[["hp",[180.0,180.0,180.0,180.0,180.0,180.0,180.0,180.0,340.0,340.0,340.0,340.0,500.0,500.0,500.0,500.0,660.0,660.0,660.0,660.0]],["acc",[2.0,2.0,2.0,2.0,2.0,2.0,3.0,3.0,4.0,4.0,4.0,4.0,6.0,6.0,6.0,6.0,8.0,8.0,8.0,8.0]]],"spell":"Witch's Bizarre Blessing","tiers":["When the wearer uses ultimate skill to deal damage to the enemy, there's a 35.0% chance of inflicting Defense Penalty II on the target for 10.0s.\nDerivative Damage won't trigger this effect, and Defense Penalty II can only be inflicted once per target by a single cast of ultimate skill.","When the wearer uses ultimate skill to deal damage to the enemy, there's a 40.0% chance of inflicting Defense Penalty II on the target for 10.0s.\nDerivative Damage won't trigger this effect, and Defense Penalty II can only be inflicted once per target by a single cast of ultimate skill.","When the wearer uses ultimate skill to deal damage to the enemy, there's a 45.0% chance of inflicting Defense Penalty II on the target for 10.0s.\nDerivative Damage won't trigger this effect, and Defense Penalty II can only be inflicted once per target by a single cast of ultimate skill.","When the wearer uses ultimate skill to deal damage to the enemy, there's a 50.0% chance of inflicting Defense Penalty II on the target for 10.0s.\nDerivative Damage won't trigger this effect, and Defense Penalty II can only be inflicted once per target by a single cast of ultimate skill.","When the wearer uses ultimate skill to deal damage to the enemy, there's a 55.00000000000001% chance of inflicting Defense Penalty II on the target for 10.0s.\nDerivative Damage won't trigger this effect, and Defense Penalty II can only be inflicted once per target by a single cast of ultimate skill.","When the wearer uses ultimate skill to deal damage to the enemy, there's a 60.0% chance of inflicting Defense Penalty II on the target for 10.0s.\nDerivative Damage won't trigger this effect, and Defense Penalty II can only be inflicted once per target by a single cast of ultimate skill."]},"8000106":{"id":8000106,"n":"Dawn Pipe Organ","r":"Mythic","season":"s1","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["atkPct",[0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.04,0.05,0.05,0.05,0.05]]],"spell":"Opus of Dawn","tiers":["Ranged heroes in the team gain 5% of the wearer's Attack.","Ranged heroes in the team gain 6% of the wearer's Attack.","Ranged heroes in the team gain 7% of the wearer's Attack.","Ranged heroes in the team gain 8% of the wearer's Attack.","Ranged heroes in the team gain 9% of the wearer's Attack.","Ranged heroes in the team gain 10% of the wearer's Attack."]},"8000103":{"id":8000103,"n":"Drugo's Blast Jar","r":"Mythic","season":"s1","stats":[["hp",[180.0,180.0,180.0,180.0,180.0,180.0,180.0,180.0,340.0,340.0,340.0,340.0,500.0,500.0,500.0,500.0,660.0,660.0,660.0,660.0]],["defPct",[0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.04,0.05,0.05,0.05,0.05]]],"spell":"Mad Demolitionist","tiers":["When the wearer takes damage, it has a 30% chance of creating an energy blast, dealing [+200%Defense]Fire Damage to surrounding enemies and reducing their damage dealt by 15% for 5.0s. The energy blast can only be triggered once every 4.0s.","When the wearer takes damage, it has a 30% chance of creating an energy blast, dealing [+200%Defense]Fire Damage to surrounding enemies and reducing their damage dealt by 15% for 5.0s. The energy blast can only be triggered once every 3.6s.","When the wearer takes damage, it has a 30% chance of creating an energy blast, dealing [+200%Defense]Fire Damage to surrounding enemies and reducing their damage dealt by 15% for 5.0s. The energy blast can only be triggered once every 3.2s.","When the wearer takes damage, it has a 30% chance of creating an energy blast, dealing [+200%Defense]Fire Damage to surrounding enemies and reducing their damage dealt by 15% for 5.0s. The energy blast can only be triggered once every 2.8s.","When the wearer takes damage, it has a 30% chance of creating an energy blast, dealing [+200%Defense]Fire Damage to surrounding enemies and reducing their damage dealt by 15% for 5.0s. The energy blast can only be triggered once every 2.4s.","When the wearer takes damage, it has a 30% chance of creating an energy blast, dealing [+200%Defense]Fire Damage to surrounding enemies and reducing their damage dealt by 15% for 5.0s. The energy blast can only be triggered once every 2.0s."]},"8000102":{"id":8000102,"n":"Gatekeeper's Staff","r":"Mythic","season":"s1","stats":[["def",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["haste",[1.0,1.0,1.0,1.0,1.0,2.0,2.0,2.0,2.0,2.0,3.0,3.0,3.0,4.0,4.0,4.0,5.0,5.0,5.0,5.0]]],"spell":"Benevolent Blessing","tiers":["50% of the overheal from the wearer will be equally converted into a shield.","60% of the overheal from the wearer will be equally converted into a shield.","70% of the overheal from the wearer will be equally converted into a shield.","80% of the overheal from the wearer will be equally converted into a shield.","90% of the overheal from the wearer will be equally converted into a shield.","100% of the overheal from the wearer will be equally converted into a shield."]},"8000101":{"id":8000101,"n":"Solar King's Horn","r":"Mythic","season":"s1","stats":[["def",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["hpPct",[0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.04,0.05,0.05,0.05,0.05]]],"spell":"Spirit of the Ancient Battlefield","tiers":["When the wearer heals an ally, increases the ally's damage by 2% for 10.0s, up to 3 stacks.","When the wearer heals an ally, increases the ally's damage by 3% for 10.0s, up to 3 stacks.","When the wearer heals an ally, increases the ally's damage by 3% for 10.0s, up to 3 stacks.","When the wearer heals an ally, increases the ally's damage by 4% for 10.0s, up to 3 stacks.","When the wearer heals an ally, increases the ally's damage by 4% for 10.0s, up to 3 stacks.","When the wearer heals an ally, increases the ally's damage by 5% for 10.0s, up to 3 stacks."]},"8000099":{"id":8000099,"n":"Lucky Playing Cards","r":"Mythic","season":"s1","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["atkPct",[0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.04,0.05,0.05,0.05,0.05]]],"spell":"The Chosen One","tiers":["In each battle, the wearer's first 1 ultimate skill casting(s) will trigger guaranteed crit effects.","In each battle, the wearer's first 1 ultimate skill casting(s) will trigger guaranteed crit effects.","In each battle, the wearer's first 1 ultimate skill casting(s) will trigger guaranteed crit effects.","In each battle, the wearer's first 1 ultimate skill casting(s) will trigger guaranteed crit effects.","In each battle, the wearer's first 1 ultimate skill casting(s) will trigger guaranteed crit effects.","In each battle, the wearer's first 2 ultimate skill casting(s) will trigger guaranteed crit effects."]},"8000098":{"id":8000098,"n":"Rift Hourglass","r":"Mythic","season":"s1","stats":[["hp",[180.0,180.0,180.0,180.0,180.0,180.0,180.0,180.0,340.0,340.0,340.0,340.0,500.0,500.0,500.0,500.0,660.0,660.0,660.0,660.0]],["acc",[2.0,2.0,2.0,2.0,2.0,2.0,3.0,3.0,4.0,4.0,4.0,4.0,6.0,6.0,6.0,6.0,8.0,8.0,8.0,8.0]]],"spell":"Time Leaper","tiers":["The wearer gains 50.0 extra Skill Haste.","The wearer gains 60.0 extra Skill Haste.","The wearer gains 70.0 extra Skill Haste.","The wearer gains 80.0 extra Skill Haste.","The wearer gains 90.0 extra Skill Haste.","The wearer gains 100.0 extra Skill Haste."]},"8000097":{"id":8000097,"n":"Berserker Mask","r":"Mythic","season":"s1","stats":[["hp",[180.0,180.0,180.0,180.0,180.0,180.0,180.0,180.0,340.0,340.0,340.0,340.0,500.0,500.0,500.0,500.0,660.0,660.0,660.0,660.0]],["haste",[1.0,1.0,1.0,1.0,1.0,2.0,2.0,2.0,2.0,2.0,3.0,3.0,3.0,4.0,4.0,4.0,5.0,5.0,5.0,5.0]]],"spell":"Frenzied Militancy","tiers":["The initial recharge time of the wearer's battle skill is reduced by 1.5s.","The initial recharge time of the wearer's battle skill is reduced by 1.8s.","The initial recharge time of the wearer's battle skill is reduced by 2.1s.","The initial recharge time of the wearer's battle skill is reduced by 2.4s.","The initial recharge time of the wearer's battle skill is reduced by 2.7s.","The initial recharge time of the wearer's battle skill is reduced by 3s."]},"8000096":{"id":8000096,"n":"Statue of the Serpent Deity","r":"Mythic","season":"s1","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["ench",[2.0,2.0,2.0,2.0,2.0,4.0,4.0,4.0,4.0,4.0,6.0,6.0,6.0,8.0,8.0,8.0,10.0,10.0,10.0,10.0]]],"spell":"Heart of the Serpent","tiers":["When the wearer deals damage to the enemy, each stack of debuff on the enemy grants 0% Damage Bonus, up to 20 stacks.","When the wearer deals damage to the enemy, each stack of debuff on the enemy grants 0% Damage Bonus, up to 20 stacks.","When the wearer deals damage to the enemy, each stack of debuff on the enemy grants 0% Damage Bonus, up to 20 stacks.","When the wearer deals damage to the enemy, each stack of debuff on the enemy grants 1% Damage Bonus, up to 20 stacks.","When the wearer deals damage to the enemy, each stack of debuff on the enemy grants 1% Damage Bonus, up to 20 stacks.","When the wearer deals damage to the enemy, each stack of debuff on the enemy grants 1% Damage Bonus, up to 20 stacks."]},"8000095":{"id":8000095,"n":"Great Demon's Skull","r":"Mythic","season":"s1","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["critRate",[0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.03,0.04]]],"spell":"Demonic Grudge","tiers":["When an ally summons an undead creature, Necrotic Damage dealt by the wearer will increase by 3% for 10.0s, up to 6 stacks. Each stack has a separate duration that cannot be reset.","When an ally summons an undead creature, Necrotic Damage dealt by the wearer will increase by 3% for 10.0s, up to 6 stacks. Each stack has a separate duration that cannot be reset.","When an ally summons an undead creature, Necrotic Damage dealt by the wearer will increase by 3% for 10.0s, up to 6 stacks. Each stack has a separate duration that cannot be reset.","When an ally summons an undead creature, Necrotic Damage dealt by the wearer will increase by 4% for 10.0s, up to 6 stacks. Each stack has a separate duration that cannot be reset.","When an ally summons an undead creature, Necrotic Damage dealt by the wearer will increase by 4% for 10.0s, up to 6 stacks. Each stack has a separate duration that cannot be reset.","When an ally summons an undead creature, Necrotic Damage dealt by the wearer will increase by 5% for 10.0s, up to 6 stacks. Each stack has a separate duration that cannot be reset."]},"8000094":{"id":8000094,"n":"Flute of \"The King\"","r":"Mythic","season":"s1","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["critRate",[0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.03,0.04]]],"spell":"The Commander's Rally","tiers":["This ultimate skill gains 15% Damage Bonus each time the wearer successfully casts Rally.","This ultimate skill gains 17% Damage Bonus each time the wearer successfully casts Rally.","This ultimate skill gains 19% Damage Bonus each time the wearer successfully casts Rally.","This ultimate skill gains 21% Damage Bonus each time the wearer successfully casts Rally.","This ultimate skill gains 23% Damage Bonus each time the wearer successfully casts Rally.","This ultimate skill gains 25% Damage Bonus each time the wearer successfully casts Rally."]},"8000093":{"id":8000093,"n":"Thunder Deity's Spear","r":"Mythic","season":"s1","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["critDmg",[0.01,0.01,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.05,0.05,0.05,0.05,0.06,0.07,0.07,0.07]]],"spell":"Fleeting Lightning","tiers":["When the wearer launches a basic attack, it has a 60% chance of triggering a 2-attack combo. This effect can only be triggered once every 7.0s.","When the wearer launches a basic attack, it has a 60% chance of triggering a 2-attack combo. This effect can only be triggered once every 6.0s.","When the wearer launches a basic attack, it has a 60% chance of triggering a 2-attack combo. This effect can only be triggered once every 5.0s.","When the wearer launches a basic attack, it has a 60% chance of triggering a 2-attack combo. This effect can only be triggered once every 4.0s.","When the wearer launches a basic attack, it has a 60% chance of triggering a 2-attack combo. This effect can only be triggered once every 3.0s.","When the wearer launches a basic attack, it has a 60% chance of triggering a 2-attack combo. This effect can only be triggered once every 2.0s."]},"8000092":{"id":8000092,"n":"Ring of Winter","r":"Mythic","season":"s1","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["critRate",[0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.03,0.04]]],"spell":"The Arctic's Arrival","tiers":["When the wearer deals damage to an enemy under Frost, there's a 30% chance of creating an ice storm at their position, inflicting [+300%Attack]Cold Damage on enemies within range. The ice storm can only be triggered once every 9.0s.","When the wearer deals damage to an enemy under Frost, there's a 30% chance of creating an ice storm at their position, inflicting [+300%Attack]Cold Damage on enemies within range. The ice storm can only be triggered once every 8.0s.","When the wearer deals damage to an enemy under Frost, there's a 30% chance of creating an ice storm at their position, inflicting [+300%Attack]Cold Damage on enemies within range. The ice storm can only be triggered once every 7.0s.","When the wearer deals damage to an enemy under Frost, there's a 30% chance of creating an ice storm at their position, inflicting [+300%Attack]Cold Damage on enemies within range. The ice storm can only be triggered once every 6.0s.","When the wearer deals damage to an enemy under Frost, there's a 30% chance of creating an ice storm at their position, inflicting [+300%Attack]Cold Damage on enemies within range. The ice storm can only be triggered once every 5.0s.","When the wearer deals damage to an enemy under Frost, there's a 30% chance of creating an ice storm at their position, inflicting [+300%Attack]Cold Damage on enemies within range. The ice storm can only be triggered once every 4.0s."]},"8000091":{"id":8000091,"n":"Ring of the Scarlet Sorcerer","r":"Mythic","season":"s1","stats":[["atk",[10.0,10.0,10.0,10.0,10.0,10.0,10.0,10.0,15.0,15.0,15.0,15.0,20.0,20.0,20.0,20.0,25.0,25.0,25.0,25.0]],["critDmg",[0.01,0.01,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.04,0.04,0.05,0.05,0.05,0.05,0.06,0.07,0.07,0.07]]],"spell":"Scarlet Dance","tiers":["When the wearer's Wild skill dice roll ≥ 5, the current instance of skill gains a 10% Damage Bonus.","When the wearer's Wild skill dice roll ≥ 5, the current instance of skill gains a 14% Damage Bonus.","When the wearer's Wild skill dice roll ≥ 5, the current instance of skill gains a 18% Damage Bonus.","When the wearer's Wild skill dice roll ≥ 5, the current instance of skill gains a 22% Damage Bonus.","When the wearer's Wild skill dice roll ≥ 5, the current instance of skill gains a 26% Damage Bonus.","When the wearer's Wild skill dice roll ≥ 5, the current instance of skill gains a 30% Damage Bonus."]},"8000187":{"id":8000187,"n":"Pocket of Seduction","r":"Legendary","season":"s1","stats":[["hp",[135.0,135.0,135.0,135.0,135.0,135.0,135.0,135.0,255.0,255.0,255.0,255.0,375.0,375.0,375.0,375.0,495.0,495.0,495.0,495.0]],["defPct",[0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.03,0.04,0.04,0.04]]],"spell":"Demon's Bargain","tiers":["For each debuff the wearer has, reduces damage taken by 5%, up to 2 stacks.","For each debuff the wearer has, reduces damage taken by 5%, up to 2 stacks.","For each debuff the wearer has, reduces damage taken by 5%, up to 4 stacks.","For each debuff the wearer has, reduces damage taken by 5%, up to 4 stacks.","For each debuff the wearer has, reduces damage taken by 5%, up to 6 stacks.","For each debuff the wearer has, reduces damage taken by 5%, up to 6 stacks."]},"8000181":{"id":8000181,"n":"Scarlet Chess","r":"Legendary","season":"s1","stats":[["atk",[8.0,8.0,8.0,8.0,8.0,8.0,8.0,11.0,11.0,11.0,11.0,14.0,14.0,14.0,14.0,14.0,17.0,17.0,17.0,17.0]],["atkPct",[0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.03,0.04,0.04,0.04]]],"spell":"Blood Sacrifice Ritual","tiers":["The wearer's summoned units deal 10% increased damage.","The wearer's summoned units deal 12% increased damage.","The wearer's summoned units deal 14% increased damage.","The wearer's summoned units deal 16% increased damage.","The wearer's summoned units deal 18% increased damage.","The wearer's summoned units deal 20% increased damage."]},"8000135":{"id":8000135,"n":"Life Spindle","r":"Legendary","season":"s1","stats":[["def",[8.0,8.0,8.0,8.0,8.0,8.0,8.0,11.0,11.0,11.0,11.0,14.0,14.0,14.0,14.0,14.0,17.0,17.0,17.0,17.0]],["hpPct",[0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.03,0.04,0.04,0.04]]],"spell":"Weaving of Life","tiers":["When the wearer uses their battle skills to heal allies other than themself, they have a 50% chance to heal an additional ally with [7% of this ally's max HP]. This effect triggers once every 5.0s at most.","When the wearer uses their battle skills to heal allies other than themself, they have a 50% chance to heal an additional ally with [8% of this ally's max HP]. This effect triggers once every 5.0s at most.","When the wearer uses their battle skills to heal allies other than themself, they have a 50% chance to heal an additional ally with [9% of this ally's max HP]. This effect triggers once every 5.0s at most.","When the wearer uses their battle skills to heal allies other than themself, they have a 50% chance to heal an additional ally with [10% of this ally's max HP]. This effect triggers once every 5.0s at most.","When the wearer uses their battle skills to heal allies other than themself, they have a 50% chance to heal an additional ally with [11% of this ally's max HP]. This effect triggers once every 5.0s at most.","When the wearer uses their battle skills to heal allies other than themself, they have a 50% chance to heal an additional ally with [12% of this ally's max HP]. This effect triggers once every 5.0s at most."]},"8000134":{"id":8000134,"n":"Vile Ink","r":"Legendary","season":"s1","stats":[["atk",[8.0,8.0,8.0,8.0,8.0,8.0,8.0,11.0,11.0,11.0,11.0,14.0,14.0,14.0,14.0,14.0,17.0,17.0,17.0,17.0]],["atkPct",[0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.03,0.04,0.04,0.04]]],"spell":"Vomit Impulse","tiers":["The wearer's attacks cannot trigger critical hits, but deal 20% more Derivative Damage.","The wearer's attacks cannot trigger critical hits, but deal 23% more Derivative Damage.","The wearer's attacks cannot trigger critical hits, but deal 26% more Derivative Damage.","The wearer's attacks cannot trigger critical hits, but deal 28% more Derivative Damage.","The wearer's attacks cannot trigger critical hits, but deal 32% more Derivative Damage.","The wearer's attacks cannot trigger critical hits, but deal 35% more Derivative Damage."]},"8000133":{"id":8000133,"n":"Mask of the Lark","r":"Legendary","season":"s1","stats":[["hp",[135.0,135.0,135.0,135.0,135.0,135.0,135.0,135.0,255.0,255.0,255.0,255.0,375.0,375.0,375.0,375.0,495.0,495.0,495.0,495.0]],["defPct",[0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.03,0.04,0.04,0.04]]],"spell":"Protagonist Effect","tiers":["For each type of buff the wearer has, their damage taken is reduced by 2%, up to 5 stacks.","For each type of buff the wearer has, their damage taken is reduced by 2%, up to 5 stacks.","For each type of buff the wearer has, their damage taken is reduced by 2%, up to 5 stacks.","For each type of buff the wearer has, their damage taken is reduced by 2%, up to 5 stacks.","For each type of buff the wearer has, their damage taken is reduced by 2%, up to 5 stacks.","For each type of buff the wearer has, their damage taken is reduced by 3%, up to 5 stacks."]},"8000132":{"id":8000132,"n":"Effigy of Divine Ear","r":"Legendary","season":"s1","stats":[["def",[8.0,8.0,8.0,8.0,8.0,8.0,8.0,11.0,11.0,11.0,11.0,14.0,14.0,14.0,14.0,14.0,17.0,17.0,17.0,17.0]],["atkPct",[0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.03,0.04,0.04,0.04]]],"spell":"Revelation of Divine Ear","tiers":["The wearer gains 10.0 Ultimate Energy after killing an enemy. This effect can only be triggered once every 7.0s.","The wearer gains 10.0 Ultimate Energy after killing an enemy. This effect can only be triggered once every 6.0s.","The wearer gains 10.0 Ultimate Energy after killing an enemy. This effect can only be triggered once every 5.0s.","The wearer gains 10.0 Ultimate Energy after killing an enemy. This effect can only be triggered once every 4.0s.","The wearer gains 10.0 Ultimate Energy after killing an enemy. This effect can only be triggered once every 3.0s.","The wearer gains 10.0 Ultimate Energy after killing an enemy. This effect can only be triggered once every 2.0s."]},"8000131":{"id":8000131,"n":"Antinaya's Tiara","r":"Legendary","season":"s1","stats":[["def",[8.0,8.0,8.0,8.0,8.0,8.0,8.0,11.0,11.0,11.0,11.0,14.0,14.0,14.0,14.0,14.0,17.0,17.0,17.0,17.0]],["ench",[2.0,2.0,2.0,2.0,2.0,2.0,2.0,2.0,4.0,4.0,4.0,4.0,5.0,5.0,6.0,6.0,7.0,7.0,8.0,8.0]]],"spell":"Merfolk Protection","tiers":["The wearer grants 10% more Shield.","The wearer grants 11% more Shield.","The wearer grants 12% more Shield.","The wearer grants 13% more Shield.","The wearer grants 14% more Shield.","The wearer grants 15% more Shield."]},"8000090":{"id":8000090,"n":"Crown of the Unclean","r":"Legendary","season":"s1","stats":[["def",[8.0,8.0,8.0,8.0,8.0,8.0,8.0,11.0,11.0,11.0,11.0,14.0,14.0,14.0,14.0,14.0,17.0,17.0,17.0,17.0]],["acc",[2.0,2.0,2.0,2.0,2.0,2.0,2.0,2.0,3.0,3.0,3.0,3.0,4.0,4.0,5.0,5.0,5.0,5.0,6.0,6.0]]],"spell":"Curse of the Dead King","tiers":["When the wearer uses ultimate skill to deal damage to the enemies, it has a 50.0% chance of inflicting Defense Penalty I on one of the targets for 10.0s.\nDerivative Damage won't trigger this effect.","When the wearer uses ultimate skill to deal damage to the enemies, it has a 55.00000000000001% chance of inflicting Defense Penalty I on one of the targets for 10.0s.\nDerivative Damage won't trigger this effect.","When the wearer uses ultimate skill to deal damage to the enemies, it has a 60.0% chance of inflicting Defense Penalty I on one of the targets for 10.0s.\nDerivative Damage won't trigger this effect.","When the wearer uses ultimate skill to deal damage to the enemies, it has a 65.0% chance of inflicting Defense Penalty I on one of the targets for 10.0s.\nDerivative Damage won't trigger this effect.","When the wearer uses ultimate skill to deal damage to the enemies, it has a 70.0% chance of inflicting Defense Penalty I on one of the targets for 10.0s.\nDerivative Damage won't trigger this effect.","When the wearer uses ultimate skill to deal damage to the enemies, it has a 75.0% chance of inflicting Defense Penalty I on one of the targets for 10.0s.\nDerivative Damage won't trigger this effect."]},"8000089":{"id":8000089,"n":"Platinum Knight Shield","r":"Legendary","season":"s1","stats":[["def",[8.0,8.0,8.0,8.0,8.0,8.0,8.0,11.0,11.0,11.0,11.0,14.0,14.0,14.0,14.0,14.0,17.0,17.0,17.0,17.0]],["hpPct",[0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.03,0.04,0.04,0.04]]],"spell":"Knight Will","tiers":["Reduces the wearer's AOE Damage taken by 10%.","Reduces the wearer's AOE Damage taken by 12%.","Reduces the wearer's AOE Damage taken by 14%.","Reduces the wearer's AOE Damage taken by 16%.","Reduces the wearer's AOE Damage taken by 18%.","Reduces the wearer's AOE Damage taken by 20%."]},"8000088":{"id":8000088,"n":"Scarab Amulet","r":"Legendary","season":"s1","stats":[["hp",[135.0,135.0,135.0,135.0,135.0,135.0,135.0,135.0,255.0,255.0,255.0,255.0,375.0,375.0,375.0,375.0,495.0,495.0,495.0,495.0]],["defPct",[0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.03,0.04,0.04,0.04]]],"spell":"Guardian's Blessing","tiers":["The wearer gains a [250% Defense] shield for 10.0s when their HP is below 30%. This effect can only be triggered once every 45.0s.","The wearer gains a [300% Defense] shield for 10.0s when their HP is below 30%. This effect can only be triggered once every 45.0s.","The wearer gains a [350% Defense] shield for 10.0s when their HP is below 30%. This effect can only be triggered once every 45.0s.","The wearer gains a [400% Defense] shield for 10.0s when their HP is below 30%. This effect can only be triggered once every 45.0s.","The wearer gains a [450% Defense] shield for 10.0s when their HP is below 30%. This effect can only be triggered once every 45.0s.","The wearer gains a [500% Defense] shield for 10.0s when their HP is below 30%. This effect can only be triggered once every 45.0s."]},"8000087":{"id":8000087,"n":"Mirror of the Living","r":"Legendary","season":"s1","stats":[["def",[8.0,8.0,8.0,8.0,8.0,8.0,8.0,11.0,11.0,11.0,11.0,14.0,14.0,14.0,14.0,14.0,17.0,17.0,17.0,17.0]],["hpPct",[0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.03,0.04,0.04,0.04]]],"spell":"Compassion's Gift","tiers":["When the wearer heals allies with HP below 15%, the amount of healing is increased by 30%.","When the wearer heals allies with HP below 20%, the amount of healing is increased by 30%.","When the wearer heals allies with HP below 25%, the amount of healing is increased by 30%.","When the wearer heals allies with HP below 30%, the amount of healing is increased by 30%.","When the wearer heals allies with HP below 35%, the amount of healing is increased by 30%.","When the wearer heals allies with HP below 40%, the amount of healing is increased by 30%."]},"8000086":{"id":8000086,"n":"Spiritual Incense Burner","r":"Legendary","season":"s1","stats":[["hp",[135.0,135.0,135.0,135.0,135.0,135.0,135.0,135.0,255.0,255.0,255.0,255.0,375.0,375.0,375.0,375.0,495.0,495.0,495.0,495.0]],["acc",[2.0,2.0,2.0,2.0,2.0,2.0,2.0,2.0,3.0,3.0,3.0,3.0,4.0,4.0,5.0,5.0,5.0,5.0,6.0,6.0]]],"spell":"Divine Mist","tiers":["Increases the wearer's Ultimate Energy by 5% after unleashing ultimate skill.","Increases the wearer's Ultimate Energy by 6% after unleashing ultimate skill.","Increases the wearer's Ultimate Energy by 7% after unleashing ultimate skill.","Increases the wearer's Ultimate Energy by 8% after unleashing ultimate skill.","Increases the wearer's Ultimate Energy by 9% after unleashing ultimate skill.","Increases the wearer's Ultimate Energy by 10% after unleashing ultimate skill."]},"8000085":{"id":8000085,"n":"Ancestor's Candle","r":"Legendary","season":"s1","stats":[["hp",[135.0,135.0,135.0,135.0,135.0,135.0,135.0,135.0,255.0,255.0,255.0,255.0,375.0,375.0,375.0,375.0,495.0,495.0,495.0,495.0]],["res",[2.0,2.0,2.0,2.0,2.0,2.0,2.0,2.0,4.0,4.0,4.0,4.0,5.0,5.0,6.0,6.0,7.0,7.0,8.0,8.0]]],"spell":"Ancestor's Glory","tiers":["After the wearer launches a battle skill, the recharge time will reduce by 5%.","After the wearer launches a battle skill, the recharge time will reduce by 6%.","After the wearer launches a battle skill, the recharge time will reduce by 7%.","After the wearer launches a battle skill, the recharge time will reduce by 8%.","After the wearer launches a battle skill, the recharge time will reduce by 9%.","After the wearer launches a battle skill, the recharge time will reduce by 10%."]},"8000084":{"id":8000084,"n":"Wine of Dragon Blood","r":"Legendary","season":"s1","stats":[["atk",[8.0,8.0,8.0,8.0,8.0,8.0,8.0,11.0,11.0,11.0,11.0,14.0,14.0,14.0,14.0,14.0,17.0,17.0,17.0,17.0]],["atkSpd",[0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.03,0.04,0.04,0.04]]],"spell":"Power of Dragon Blood","tiers":["When the wearer launches an ultimate skill, has a 50.0% chance of obtaining 20% extra Crit Rate for 10.0s. This effect can only be triggered once every 15.0s.","When the wearer launches an ultimate skill, has a 60.0% chance of obtaining 20% extra Crit Rate for 10.0s. This effect can only be triggered once every 15.0s.","When the wearer launches an ultimate skill, has a 70.0% chance of obtaining 20% extra Crit Rate for 10.0s. This effect can only be triggered once every 15.0s.","When the wearer launches an ultimate skill, has a 80.0% chance of obtaining 20% extra Crit Rate for 10.0s. This effect can only be triggered once every 15.0s.","When the wearer launches an ultimate skill, has a 90.0% chance of obtaining 20% extra Crit Rate for 10.0s. This effect can only be triggered once every 15.0s.","When the wearer launches an ultimate skill, has a 100.0% chance of obtaining 20% extra Crit Rate for 10.0s. This effect can only be triggered once every 15.0s."]},"8000083":{"id":8000083,"n":"Arcana Cube","r":"Legendary","season":"s1","stats":[["atk",[8.0,8.0,8.0,8.0,8.0,8.0,8.0,11.0,11.0,11.0,11.0,14.0,14.0,14.0,14.0,14.0,17.0,17.0,17.0,17.0]],["hpPct",[0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.03,0.04,0.04,0.04]]],"spell":"Moment of Enlightenment","tiers":["When the wearer launches a battle skill, they have a 35.0% chance of gaining 75.0 extra Enlightenment for 10.0s.","When the wearer launches a battle skill, they have a 40.0% chance of gaining 75.0 extra Enlightenment for 10.0s.","When the wearer launches a battle skill, they have a 45.0% chance of gaining 75.0 extra Enlightenment for 10.0s.","When the wearer launches a battle skill, they have a 50.0% chance of gaining 75.0 extra Enlightenment for 10.0s.","When the wearer launches a battle skill, they have a 55.00000000000001% chance of gaining 75.0 extra Enlightenment for 10.0s.","When the wearer launches a battle skill, they have a 60.0% chance of gaining 75.0 extra Enlightenment for 10.0s."]},"8000082":{"id":8000082,"n":"Silverstar Horseshoe","r":"Legendary","season":"s1","stats":[["atk",[8.0,8.0,8.0,8.0,8.0,8.0,8.0,11.0,11.0,11.0,11.0,14.0,14.0,14.0,14.0,14.0,17.0,17.0,17.0,17.0]],["critDmg",[0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.04,0.04,0.04,0.04,0.05,0.05,0.05,0.05]]],"spell":"Shooting Star","tiers":["When the wearer launches a basic attack, has a 20.0% chance of gaining 25% extra Attack Speed for 10.0s. This effect can only be triggered once every 10.0s.","When the wearer launches a basic attack, has a 20.0% chance of gaining 30% extra Attack Speed for 10.0s. This effect can only be triggered once every 10.0s.","When the wearer launches a basic attack, has a 20.0% chance of gaining 35% extra Attack Speed for 10.0s. This effect can only be triggered once every 10.0s.","When the wearer launches a basic attack, has a 20.0% chance of gaining 40% extra Attack Speed for 10.0s. This effect can only be triggered once every 10.0s.","When the wearer launches a basic attack, has a 20.0% chance of gaining 45% extra Attack Speed for 10.0s. This effect can only be triggered once every 10.0s.","When the wearer launches a basic attack, has a 20.0% chance of gaining 50% extra Attack Speed for 10.0s. This effect can only be triggered once every 10.0s."]},"8000081":{"id":8000081,"n":"Blood Prince's Bracelet","r":"Legendary","season":"s1","stats":[["atk",[8.0,8.0,8.0,8.0,8.0,8.0,8.0,11.0,11.0,11.0,11.0,14.0,14.0,14.0,14.0,14.0,17.0,17.0,17.0,17.0]],["hpPct",[0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.03,0.04,0.04,0.04]]],"spell":"Blood Feast","tiers":["Heals the wearer by [350% Attack] after killing an enemy.","Heals the wearer by [400% Attack] after killing an enemy.","Heals the wearer by [450% Attack] after killing an enemy.","Heals the wearer by [500% Attack] after killing an enemy.","Heals the wearer by [550% Attack] after killing an enemy.","Heals the wearer by [600% Attack] after killing an enemy."]},"8000080":{"id":8000080,"n":"Phoenix Feather","r":"Legendary","season":"s1","stats":[["atk",[8.0,8.0,8.0,8.0,8.0,8.0,8.0,11.0,11.0,11.0,11.0,14.0,14.0,14.0,14.0,14.0,17.0,17.0,17.0,17.0]],["defPct",[0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.03,0.04,0.04,0.04]]],"spell":"Rebirth Will","tiers":["The wearer gains 20% extra Attack for 10.0s when their HP is below 50%. This effect can only be triggered once every 20.0s.","The wearer gains 24% extra Attack for 10.0s when their HP is below 50%. This effect can only be triggered once every 20.0s.","The wearer gains 28% extra Attack for 10.0s when their HP is below 50%. This effect can only be triggered once every 20.0s.","The wearer gains 32% extra Attack for 10.0s when their HP is below 50%. This effect can only be triggered once every 20.0s.","The wearer gains 36% extra Attack for 10.0s when their HP is below 50%. This effect can only be triggered once every 20.0s.","The wearer gains 40% extra Attack for 10.0s when their HP is below 50%. This effect can only be triggered once every 20.0s."]},"8000079":{"id":8000079,"n":"Arcane Music Box","r":"Legendary","season":"s1","stats":[["atk",[8.0,8.0,8.0,8.0,8.0,8.0,8.0,11.0,11.0,11.0,11.0,14.0,14.0,14.0,14.0,14.0,17.0,17.0,17.0,17.0]],["critRate",[0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.03,0.03]]],"spell":"Ode to Joy","tiers":["The wearer gains 10% Damage Bonus when they have a shield.","The wearer gains 12% Damage Bonus when they have a shield.","The wearer gains 14% Damage Bonus when they have a shield.","The wearer gains 16% Damage Bonus when they have a shield.","The wearer gains 18% Damage Bonus when they have a shield.","The wearer gains 20% Damage Bonus when they have a shield."]},"8000078":{"id":8000078,"n":"Eyeball of the Giant","r":"Legendary","season":"s1","stats":[["atk",[8.0,8.0,8.0,8.0,8.0,8.0,8.0,11.0,11.0,11.0,11.0,14.0,14.0,14.0,14.0,14.0,17.0,17.0,17.0,17.0]],["atkPct",[0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.03,0.04,0.04,0.04]]],"spell":"Wrath of the Giants","tiers":["The wearer's ultimate skill gains 10% Damage Bonus.","The wearer's ultimate skill gains 12% Damage Bonus.","The wearer's ultimate skill gains 14% Damage Bonus.","The wearer's ultimate skill gains 16% Damage Bonus.","The wearer's ultimate skill gains 18% Damage Bonus.","The wearer's ultimate skill gains 20% Damage Bonus."]},"8000077":{"id":8000077,"n":"Harpy's Nail","r":"Legendary","season":"s1","stats":[["atk",[8.0,8.0,8.0,8.0,8.0,8.0,8.0,11.0,11.0,11.0,11.0,14.0,14.0,14.0,14.0,14.0,17.0,17.0,17.0,17.0]],["atkPct",[0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.03,0.04,0.04,0.04]]],"spell":"Harpy's Song","tiers":["The wearer's passive skill gains 10% Damage Bonus.","The wearer's passive skill gains 12% Damage Bonus.","The wearer's passive skill gains 14% Damage Bonus.","The wearer's passive skill gains 16% Damage Bonus.","The wearer's passive skill gains 18% Damage Bonus.","The wearer's passive skill gains 20% Damage Bonus."]},"8000076":{"id":8000076,"n":"Manticore Statue","r":"Legendary","season":"s1","stats":[["atk",[8.0,8.0,8.0,8.0,8.0,8.0,8.0,11.0,11.0,11.0,11.0,14.0,14.0,14.0,14.0,14.0,17.0,17.0,17.0,17.0]],["atkPct",[0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03,0.03,0.04,0.04,0.04]]],"spell":"Manticore's Roar","tiers":["The wearer's battle skill gains 10% Damage Bonus.","The wearer's battle skill gains 12% Damage Bonus.","The wearer's battle skill gains 14% Damage Bonus.","The wearer's battle skill gains 16% Damage Bonus.","The wearer's battle skill gains 18% Damage Bonus.","The wearer's battle skill gains 20% Damage Bonus."]},"8000075":{"id":8000075,"n":"Illuya's Fang","r":"Legendary","season":"s1","stats":[["hp",[135.0,135.0,135.0,135.0,135.0,135.0,135.0,135.0,255.0,255.0,255.0,255.0,375.0,375.0,375.0,375.0,495.0,495.0,495.0,495.0]],["acc",[2.0,2.0,2.0,2.0,2.0,2.0,2.0,2.0,3.0,3.0,3.0,3.0,4.0,4.0,5.0,5.0,5.0,5.0,6.0,6.0]]],"spell":"Poisonous Miasma","tiers":["Increases the wearer's chance of granting or inflicting status with their skills by 10%.","Increases the wearer's chance of granting or inflicting status with their skills by 12%.","Increases the wearer's chance of granting or inflicting status with their skills by 14%.","Increases the wearer's chance of granting or inflicting status with their skills by 16%.","Increases the wearer's chance of granting or inflicting status with their skills by 18%.","Increases the wearer's chance of granting or inflicting status with their skills by 20%."]},"8000074":{"id":8000074,"n":"Orb of Oblivion","r":"Legendary","season":"s1","stats":[["hp",[135.0,135.0,135.0,135.0,135.0,135.0,135.0,135.0,255.0,255.0,255.0,255.0,375.0,375.0,375.0,375.0,495.0,495.0,495.0,495.0]],["acc",[2.0,2.0,2.0,2.0,2.0,2.0,2.0,2.0,3.0,3.0,3.0,3.0,4.0,4.0,5.0,5.0,5.0,5.0,6.0,6.0]]],"spell":"Necrotic Domain","tiers":["Increases the wearer's chance of granting or inflicting status with their skills by 10%.","Increases the wearer's chance of granting or inflicting status with their skills by 12%.","Increases the wearer's chance of granting or inflicting status with their skills by 14%.","Increases the wearer's chance of granting or inflicting status with their skills by 16%.","Increases the wearer's chance of granting or inflicting status with their skills by 18%.","Increases the wearer's chance of granting or inflicting status with their skills by 20%."]},"8000073":{"id":8000073,"n":"Arinna's Light","r":"Legendary","season":"s1","stats":[["hp",[135.0,135.0,135.0,135.0,135.0,135.0,135.0,135.0,255.0,255.0,255.0,255.0,375.0,375.0,375.0,375.0,495.0,495.0,495.0,495.0]],["acc",[2.0,2.0,2.0,2.0,2.0,2.0,2.0,2.0,3.0,3.0,3.0,3.0,4.0,4.0,5.0,5.0,5.0,5.0,6.0,6.0]]],"spell":"Starlight","tiers":["Increases the wearer's chance of granting or inflicting status with their skills by 10%.","Increases the wearer's chance of granting or inflicting status with their skills by 12%.","Increases the wearer's chance of granting or inflicting status with their skills by 14%.","Increases the wearer's chance of granting or inflicting status with their skills by 16%.","Increases the wearer's chance of granting or inflicting status with their skills by 18%.","Increases the wearer's chance of granting or inflicting status with their skills by 20%."]},"8000072":{"id":8000072,"n":"Air Globe","r":"Legendary","season":"s1","stats":[["hp",[135.0,135.0,135.0,135.0,135.0,135.0,135.0,135.0,255.0,255.0,255.0,255.0,375.0,375.0,375.0,375.0,495.0,495.0,495.0,495.0]],["acc",[2.0,2.0,2.0,2.0,2.0,2.0,2.0,2.0,3.0,3.0,3.0,3.0,4.0,4.0,5.0,5.0,5.0,5.0,6.0,6.0]]],"spell":"Thunder Blast","tiers":["Increases the wearer's chance of granting or inflicting status with their skills by 10%.","Increases the wearer's chance of granting or inflicting status with their skills by 12%.","Increases the wearer's chance of granting or inflicting status with their skills by 14%.","Increases the wearer's chance of granting or inflicting status with their skills by 16%.","Increases the wearer's chance of granting or inflicting status with their skills by 18%.","Increases the wearer's chance of granting or inflicting status with their skills by 20%."]},"8000071":{"id":8000071,"n":"Frost Globe","r":"Legendary","season":"s1","stats":[["hp",[135.0,135.0,135.0,135.0,135.0,135.0,135.0,135.0,255.0,255.0,255.0,255.0,375.0,375.0,375.0,375.0,495.0,495.0,495.0,495.0]],["acc",[2.0,2.0,2.0,2.0,2.0,2.0,2.0,2.0,3.0,3.0,3.0,3.0,4.0,4.0,5.0,5.0,5.0,5.0,6.0,6.0]]],"spell":"Glacier","tiers":["Increases the wearer's chance of granting or inflicting status with their skills by 10%.","Increases the wearer's chance of granting or inflicting status with their skills by 12%.","Increases the wearer's chance of granting or inflicting status with their skills by 14%.","Increases the wearer's chance of granting or inflicting status with their skills by 16%.","Increases the wearer's chance of granting or inflicting status with their skills by 18%.","Increases the wearer's chance of granting or inflicting status with their skills by 20%."]},"8000070":{"id":8000070,"n":"Flame Globe","r":"Legendary","season":"s1","stats":[["hp",[135.0,135.0,135.0,135.0,135.0,135.0,135.0,135.0,255.0,255.0,255.0,255.0,375.0,375.0,375.0,375.0,495.0,495.0,495.0,495.0]],["acc",[2.0,2.0,2.0,2.0,2.0,2.0,2.0,2.0,3.0,3.0,3.0,3.0,4.0,4.0,5.0,5.0,5.0,5.0,6.0,6.0]]],"spell":"Burn the City","tiers":["Increases the wearer's chance of granting or inflicting status with their skills by 10%.","Increases the wearer's chance of granting or inflicting status with their skills by 12%.","Increases the wearer's chance of granting or inflicting status with their skills by 14%.","Increases the wearer's chance of granting or inflicting status with their skills by 16%.","Increases the wearer's chance of granting or inflicting status with their skills by 18%.","Increases the wearer's chance of granting or inflicting status with their skills by 20%."]},"8000138":{"id":8000138,"n":"Ivaran's Arrow","r":"Epic","season":"s1","stats":[["def",[6.0,6.0,6.0,6.0,6.0,6.0,6.0,6.0,9.0,9.0,9.0,9.0,11.0,11.0,12.0,12.0,14.0,14.0,14.0,14.0]],["acc",[1.0,1.0,1.0,1.0,2.0,2.0,2.0,2.0,2.0,2.0,2.0,3.0,3.0,3.0,4.0,4.0,4.0,4.0,5.0,5.0]]],"spell":"Hunters' Craft","tiers":["Increases the wearer's chance of granting or inflicting effects with battle skill by 7%.","Increases the wearer's chance of granting or inflicting effects with battle skill by 9%.","Increases the wearer's chance of granting or inflicting effects with battle skill by 10%.","Increases the wearer's chance of granting or inflicting effects with battle skill by 12%.","Increases the wearer's chance of granting or inflicting effects with battle skill by 13%.","Increases the wearer's chance of granting or inflicting effects with battle skill by 15%."]},"8000137":{"id":8000137,"n":"Horn of the Labyrinth Lord","r":"Epic","season":"s1","stats":[["atk",[6.0,6.0,6.0,6.0,6.0,6.0,6.0,6.0,9.0,9.0,9.0,9.0,11.0,11.0,12.0,12.0,14.0,14.0,14.0,14.0]],["atkSpd",[0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03]]],"spell":"Berserker's Nature","tiers":["When the wearer launches a basic attack, an extra 3% Attack Up is gained for 3.0s. The effect stacks up to 5 times.","When the wearer launches a basic attack, an extra 3% Attack Up is gained for 3.0s. The effect stacks up to 6 times.","When the wearer launches a basic attack, an extra 3% Attack Up is gained for 3.0s. The effect stacks up to 7 times.","When the wearer launches a basic attack, an extra 3% Attack Up is gained for 3.0s. The effect stacks up to 8 times.","When the wearer launches a basic attack, an extra 3% Attack Up is gained for 3.0s. The effect stacks up to 9 times.","When the wearer launches a basic attack, an extra 3% Attack Up is gained for 3.0s. The effect stacks up to 10 times."]},"8000136":{"id":8000136,"n":"Great Traveler's Headband","r":"Epic","season":"s1","stats":[["def",[6.0,6.0,6.0,6.0,6.0,6.0,6.0,6.0,9.0,9.0,9.0,9.0,11.0,11.0,12.0,12.0,14.0,14.0,14.0,14.0]],["hpPct",[0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03]]],"spell":"Cheerful Spirit","tiers":["Reduces the wearer's damage taken by 15% when under Control.","Reduces the wearer's damage taken by 17% when under Control.","Reduces the wearer's damage taken by 19% when under Control.","Reduces the wearer's damage taken by 21% when under Control.","Reduces the wearer's damage taken by 23% when under Control.","Reduces the wearer's damage taken by 25% when under Control."]},"8000069":{"id":8000069,"n":"Banner of Oath","r":"Epic","season":"s1","stats":[["def",[6.0,6.0,6.0,6.0,6.0,6.0,6.0,6.0,9.0,9.0,9.0,9.0,11.0,11.0,12.0,12.0,14.0,14.0,14.0,14.0]],["hpPct",[0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03]]],"spell":"Coalition","tiers":["The wearer obtains 15% extra Defense when any ally is nearby.","The wearer obtains 17% extra Defense when any ally is nearby.","The wearer obtains 19% extra Defense when any ally is nearby.","The wearer obtains 21% extra Defense when any ally is nearby.","The wearer obtains 23% extra Defense when any ally is nearby.","The wearer obtains 25% extra Defense when any ally is nearby."]},"8000068":{"id":8000068,"n":"Troll's Heart","r":"Epic","season":"s1","stats":[["def",[6.0,6.0,6.0,6.0,6.0,6.0,6.0,6.0,9.0,9.0,9.0,9.0,11.0,11.0,12.0,12.0,14.0,14.0,14.0,14.0]],["res",[2.0,2.0,2.0,2.0,2.0,2.0,2.0,2.0,3.0,3.0,3.0,3.0,4.0,4.0,4.0,5.0,5.0,5.0,5.0,6.0]]],"spell":"Flesh and Blood","tiers":["The wearer obtains 10% extra HP.","The wearer obtains 12% extra HP.","The wearer obtains 14% extra HP.","The wearer obtains 16% extra HP.","The wearer obtains 18% extra HP.","The wearer obtains 20% extra HP."]},"8000067":{"id":8000067,"n":"Lunar Harp","r":"Epic","season":"s1","stats":[["hp",[105.0,105.0,105.0,105.0,105.0,105.0,105.0,105.0,200.0,200.0,200.0,200.0,290.0,290.0,290.0,290.0,385.0,385.0,385.0,385.0]],["acc",[1.0,1.0,1.0,1.0,2.0,2.0,2.0,2.0,2.0,2.0,2.0,3.0,3.0,3.0,4.0,4.0,4.0,4.0,5.0,5.0]]],"spell":"Hymn","tiers":["Increases the wearer's success rate of inflicting buffs or debuffs using ultimate skill by 7%.","Increases the wearer's success rate of inflicting buffs or debuffs using ultimate skill by 9%.","Increases the wearer's success rate of inflicting buffs or debuffs using ultimate skill by 10%.","Increases the wearer's success rate of inflicting buffs or debuffs using ultimate skill by 12%.","Increases the wearer's success rate of inflicting buffs or debuffs using ultimate skill by 13%.","Increases the wearer's success rate of inflicting buffs or debuffs using ultimate skill by 15%."]},"8000066":{"id":8000066,"n":"Volcanic Disc","r":"Epic","season":"s1","stats":[["hp",[105.0,105.0,105.0,105.0,105.0,105.0,105.0,105.0,200.0,200.0,200.0,200.0,290.0,290.0,290.0,290.0,385.0,385.0,385.0,385.0]],["atkPct",[0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03]]],"spell":"Shaman","tiers":["The wearer's ultimate skill gains 10% Damage Bonus.","The wearer's ultimate skill gains 11% Damage Bonus.","The wearer's ultimate skill gains 12% Damage Bonus.","The wearer's ultimate skill gains 13% Damage Bonus.","The wearer's ultimate skill gains 14% Damage Bonus.","The wearer's ultimate skill gains 15% Damage Bonus."]},"8000065":{"id":8000065,"n":"Dancing Gyro","r":"Epic","season":"s1","stats":[["def",[6.0,6.0,6.0,6.0,6.0,6.0,6.0,6.0,9.0,9.0,9.0,9.0,11.0,11.0,12.0,12.0,14.0,14.0,14.0,14.0]],["atkPct",[0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03]]],"spell":"Whirling","tiers":["The wearer obtains 15% extra Attack Speed.","The wearer obtains 17% extra Attack Speed.","The wearer obtains 19% extra Attack Speed.","The wearer obtains 21% extra Attack Speed.","The wearer obtains 23% extra Attack Speed.","The wearer obtains 25% extra Attack Speed."]},"8000064":{"id":8000064,"n":"Luminary Order Gospel","r":"Epic","season":"s1","stats":[["def",[6.0,6.0,6.0,6.0,6.0,6.0,6.0,6.0,9.0,9.0,9.0,9.0,11.0,11.0,12.0,12.0,14.0,14.0,14.0,14.0]],["hpPct",[0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03]]],"spell":"Grace","tiers":["Healing from the wearer increases by 10%.","Healing from the wearer increases by 11%.","Healing from the wearer increases by 12%.","Healing from the wearer increases by 13%.","Healing from the wearer increases by 14%.","Healing from the wearer increases by 15%."]},"8000063":{"id":8000063,"n":"Stone Cloak","r":"Epic","season":"s1","stats":[["hp",[105.0,105.0,105.0,105.0,105.0,105.0,105.0,105.0,200.0,200.0,200.0,200.0,290.0,290.0,290.0,290.0,385.0,385.0,385.0,385.0]],["defPct",[0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03]]],"spell":"Hard Shell","tiers":["At the start of the battle, it grants the wearer a [10% Max HP] shield that lasts for 15.0s.","At the start of the battle, it grants the wearer a [11% Max HP] shield that lasts for 15.0s.","At the start of the battle, it grants the wearer a [12% Max HP] shield that lasts for 15.0s.","At the start of the battle, it grants the wearer a [13% Max HP] shield that lasts for 15.0s.","At the start of the battle, it grants the wearer a [14% Max HP] shield that lasts for 15.0s.","At the start of the battle, it grants the wearer a [15% Max HP] shield that lasts for 15.0s."]},"8000062":{"id":8000062,"n":"Meditator's Pipe","r":"Epic","season":"s1","stats":[["atk",[6.0,6.0,6.0,6.0,6.0,6.0,6.0,6.0,9.0,9.0,9.0,9.0,11.0,11.0,12.0,12.0,14.0,14.0,14.0,14.0]],["acc",[1.0,1.0,1.0,1.0,2.0,2.0,2.0,2.0,2.0,2.0,2.0,3.0,3.0,3.0,4.0,4.0,4.0,4.0,5.0,5.0]]],"spell":"Focus","tiers":["The wearer obtains 20.0 extra Enlightenment.","The wearer obtains 23.0 extra Enlightenment.","The wearer obtains 26.0 extra Enlightenment.","The wearer obtains 29.0 extra Enlightenment.","The wearer obtains 32.0 extra Enlightenment.","The wearer obtains 35.0 extra Enlightenment."]},"8000061":{"id":8000061,"n":"Elven Hunter's Quiver","r":"Epic","season":"s1","stats":[["atk",[6.0,6.0,6.0,6.0,6.0,6.0,6.0,6.0,9.0,9.0,9.0,9.0,11.0,11.0,12.0,12.0,14.0,14.0,14.0,14.0]],["atkPct",[0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03]]],"spell":"Pursuit Hunting","tiers":["When the wearer launches a basic attack, gains a 30% chance of dealing Derivative [+150%Attack]Lightning Damage equal to 150% Attack. This effect can only be triggered once every 6.0s.","When the wearer launches a basic attack, gains a 30% chance of dealing Derivative [+170%Attack]Lightning Damage equal to 170% Attack. This effect can only be triggered once every 6.0s.","When the wearer launches a basic attack, gains a 30% chance of dealing Derivative [+190%Attack]Lightning Damage equal to 190% Attack. This effect can only be triggered once every 6.0s.","When the wearer launches a basic attack, gains a 30% chance of dealing Derivative [+210%Attack]Lightning Damage equal to 210% Attack. This effect can only be triggered once every 6.0s.","When the wearer launches a basic attack, gains a 30% chance of dealing Derivative [+229%Attack]Lightning Damage equal to 229% Attack. This effect can only be triggered once every 6.0s.","When the wearer launches a basic attack, gains a 30% chance of dealing Derivative [+250%Attack]Lightning Damage equal to 250% Attack. This effect can only be triggered once every 6.0s."]},"8000060":{"id":8000060,"n":"Ancestor's Bone","r":"Epic","season":"s1","stats":[["atk",[6.0,6.0,6.0,6.0,6.0,6.0,6.0,6.0,9.0,9.0,9.0,9.0,11.0,11.0,12.0,12.0,14.0,14.0,14.0,14.0]],["hpPct",[0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.02,0.02,0.02,0.02,0.02,0.02,0.03,0.03,0.03,0.03]]],"spell":"Primordial","tiers":["The wearer obtains 15% extra Crit Damage.","The wearer obtains 17% extra Crit Damage.","The wearer obtains 19% extra Crit Damage.","The wearer obtains 21% extra Crit Damage.","The wearer obtains 23% extra Crit Damage.","The wearer obtains 25% extra Crit Damage."]}},"sets":{"Soul-Stilling Gale":{"n":"Soul-Stilling Gale","pieceSet":"Northern Gale","r":"Mythic","season":"s9","bonus2":{},"spell":"Every 20s, the wearer has a 100.0% chance to inflict Taunt on the enemy farthest from the wearer for 5.0s and reduce their Ultimate Energy by 10.0. The wearer first casts this skill 5s after the start of battle.","slots":["Helm","Gloves","Armor","Weapon"]},"Prophecy Bind":{"n":"Prophecy Bind","pieceSet":"Azure Prophecy","r":"Mythic","season":"s9","bonus2":{},"spell":"Each time the wearer inflicts a non-damage debuff, they gain 1 stack of Fate. When inflicting a non-damage debuff, the wearer consumes 2 stack(s) of Fate to increase the damage the target takes by 12% for 10.0s.","slots":["Helm","Gloves","Armor","Weapon"]},"Dragonflame Scorch":{"n":"Dragonflame Scorch","pieceSet":"Crimson Dragonflame","r":"Mythic","season":"s9","bonus2":{},"spell":"At the start of battle, inflicts Dragonflame on the enemy unit with the lowest HP. Each stack of Dragonflame increases the wearer's damage dealt to that unit by 8%. Dragonflame can stack up to 3 times. Multiple allied heroes equipped with this equipment can inflict multiple stacks of Dragonflame.","slots":["Helm","Gloves","Armor","Weapon"]},"Might of the Inferno":{"n":"Might of the Inferno","pieceSet":"Molten Hellshadow","r":"Mythic","season":"s9","bonus2":{},"spell":"At the start of battle, the wearer and allied units of the same school within 1 tile deal 10% more Derivative Damage. This effect stacks up to 2 times.","slots":["Helm","Gloves","Armor","Weapon"]},"Shadowbound Mark":{"n":"Shadowbound Mark","pieceSet":"Tenebrous Pursuit","r":"Mythic","season":"s8","bonus2":{},"spell":"Each time the wearer switches to a new target, or continuously attacks the same target for 15s, gains 20% Attack Up for 10.0s and the next basic attack deals additional . Melee heroes also quickly reposition to a range where they can perform a basic attack.","slots":["Gloves","Armor"]},"Moonlight's Grace":{"n":"Moonlight's Grace","pieceSet":"Crescent Invocation","r":"Mythic","season":"s8","bonus2":{},"spell":"After healing an allied target, increases their damage dealt by 8%. If the healing brings the target to full HP, grants an additional 8%.","slots":["Gloves","Armor"]},"Dragonblood Brand":{"n":"Dragonblood Brand","pieceSet":"Knight Order of Dragon Blood","r":"Mythic","season":"s8","bonus2":{},"spell":"Converts 4% of bonus HP into Attack, up to a maximum of 2,000 Attack.","slots":["Helm","Weapon"]},"Calcined Ruin":{"n":"Calcined Ruin","pieceSet":"Conflagration of Bones","r":"Mythic","season":"s8","bonus2":{},"spell":"After the ultimate skill deals damage, inflicts Bleeding on the target, dealing [5% target's Max HP] damage every 2s (capped at 100% of the caster's Attack) for 10s.","slots":["Gloves","Armor"]},"Moonlit Canticle":{"n":"Moonlit Canticle","pieceSet":"Bardic Inspiration","r":"Mythic","season":"s7","bonus2":{},"spell":"When the wearer fails to inflict a debuff or control effect, the hit chance is immediately recalculated once. (This effect can trigger at most once every 10.0s.)","slots":["Helm","Weapon"]},"Steam Sonata":{"n":"Steam Sonata","pieceSet":"Orchestral Harmony","r":"Mythic","season":"s7","bonus2":{},"spell":"Each time the wearer uses the ultimate skill, permanently gains 4.0 Skill Haste, stacking up to 10 times.","slots":["Gloves","Armor"]},"Converging Flames":{"n":"Converging Flames","pieceSet":"Raging Wildfire","r":"Mythic","season":"s7","bonus2":{},"spell":"At the start of battle, for each allied hero in the same row and column as the wearer, the wearer gains 40.0 Defense Penetration, up to 5 times.","slots":["Helm","Weapon"]},"Arcane Eye's Requiem":{"n":"Arcane Eye's Requiem","pieceSet":"Eye of the Arcane","r":"Mythic","season":"s7","bonus2":{},"spell":"For each allied hero of the same element as the wearer, the wearer gains 3% Elemental Damage Up. When 5 such allies are present, gains an additional 5%.","slots":["Gloves","Armor"]},"Ancient Oath":{"n":"Ancient Oath","pieceSet":"Ancient Echo","r":"Mythic","season":"s6","bonus2":{},"spell":"When the wearer takes damage, permanently increases Defense by 1%, up to 20 stacks. At max stacks, gains additional 5% Damage Reduction.","slots":["Gloves","Armor"]},"Celestial Decree":{"n":"Celestial Decree","pieceSet":"Celestial Ceremony","r":"Mythic","season":"s6","bonus2":{},"spell":"Heals the wearer for [+25%Max HP] at below 40% HP. This effect can trigger only once every 20.0s.","slots":["Helmet","Weapon"]},"Everlasting Candleflame":{"n":"Everlasting Candleflame","pieceSet":"Everburning Netherfire","r":"Mythic","season":"s6","bonus2":{},"spell":"At the start of battle, the wearer shares 15% of their Attack and 15% of their Defense with up to 2 adjacent allies in the same row.","slots":["Gloves","Armor"]},"Bone Resonance":{"n":"Bone Resonance","pieceSet":"Reverie of Carcass","r":"Mythic","season":"s6","bonus2":{},"spell":"If the wearer has the highest Accuracy among allied heroes at the start of battle, increase their Accuracy by 10% and share the increased amount with all other allied heroes.","slots":["Helm","Weapon"]},"Nocturnal Hunt":{"n":"Nocturnal Hunt","pieceSet":"Nocturnal Judgment","r":"Mythic","season":"s6","bonus2":{},"spell":"When the wearer's attack triggers a critical hit, increases damage dealt by 2% for 5.0s, up to 10 stacks.","slots":["Helmet","Weapon"]},"Whirling Edge":{"n":"Whirling Edge","pieceSet":"Vortex Illusion","r":"Mythic","season":"s6","bonus2":{},"spell":"Every 5s after the battle starts, permanently increases damage dealt by the wearer and allies within 1 tile by 1%, up to 12 stacks.","slots":["Gloves","Armor"]},"Curse of the Fallen":{"n":"Curse of the Fallen","pieceSet":"Realm of Fallen Souls","r":"Mythic","season":"s6","bonus2":{},"spell":"When the wearer deals damage, for each debuff on the target, that instance of damage is increased by 5%, up to a maximum of 5 debuffs counted.","slots":["Gloves","Armor"]},"Molten Reforging":{"n":"Molten Reforging","pieceSet":"Molten Surge","r":"Mythic","season":"s6","bonus2":{},"spell":"For every 1 point of Enlightenment the wearer has, increases their Defense by 1.5. If the wearer is a ranged hero, each point of Enlightenment additionally increases Attack by 1.5.","slots":["Helm","Weapon"]},"Whirling Doom":{"n":"Whirling Doom","pieceSet":"Arcane Whirling","r":"Mythic","season":"s4","bonus2":{},"spell":"Each time the wearer inflicts a debuff, the target takes 5% increased damage for 10.0s, up to 2 stacks.","slots":["Gloves","Armor"]},"Precision Study":{"n":"Precision Study","pieceSet":"Precision Construct","r":"Mythic","season":"s4","bonus2":{},"spell":"At the start of battle, increases the wearer's Enlightenment by 20%. Other allies within 1 tile of the wearer gain Damage Reduction equal to 0% of the wearer's Enlightenment.","slots":["Gloves","Armor"]},"Midsummer Glow":{"n":"Midsummer Glow","pieceSet":"Midsummer Night","r":"Mythic","season":"s4","bonus2":{},"spell":"At the start of battle, increases the wearer's Resistance by 20%. When an ally is about to be inflicted with a control effect, the wearer has a 35% chance of taking the ally's place as the target.","slots":["Gloves","Armor"]},"Curse of the Madblood":{"n":"Curse of the Madblood","pieceSet":"Bloodthorn Fury","r":"Mythic","season":"s4","bonus2":{},"spell":"When the wearer gains a buff, permanently gains 1 stack of Curse of the Madblood, up to 20 stacks.\nCurse of the Madblood: Increases Attack by 1%.","slots":["Gloves","Armor"]},"Darkfeather Gale":{"n":"Darkfeather Gale","pieceSet":"Necrotic Plume of the Vale","r":"Mythic","season":"s4","bonus2":{},"spell":"The wearer's attacks ignore 20% of the target's Defense.","slots":["Gloves","Armor"]},"Temporal Edge":{"n":"Temporal Edge","pieceSet":"Lord of Time","r":"Mythic","season":"s4","bonus2":{},"spell":"After the wearer casts an ultimate skill, the next ultimate skill cast by an ally within 3s will deal 20% increased damage.","slots":["Gloves","Armor"]},"Wyrm's Aegis":{"n":"Wyrm's Aegis","pieceSet":"Wyrmspin","r":"Mythic","season":"s3","bonus2":{},"spell":"Each buff on the wearer reduces damage taken by . Each debuff increases damage taken by . The final damage reduction from this effect cannot exceed .","slots":["Gloves","Armor"]},"Dune's Aegis":{"n":"Dune's Aegis","pieceSet":"Dune Haze","r":"Mythic","season":"s3","bonus2":{},"spell":"Reduces the effect of Ultimate Down on the wearer by . This effect is diminished if the wearer is under any debuffs or control effects, and is nullified under 2 or more.","slots":["Gloves","Armor"]},"Break Bonds":{"n":"Break Bonds","pieceSet":"Gloom Snare","r":"Mythic","season":"s3","bonus2":{},"spell":"When the wearer damages a hero with a different element, damage dealt is increased by . Otherwise, it is reduced by .","slots":["Helmet","Weapon"]},"Bloodmoon's Gaze":{"n":"Bloodmoon's Gaze","pieceSet":"Bloodmoon Shadow","r":"Mythic","season":"s3","bonus2":{},"spell":"Each allied unit on the field grants the wearer 3% Attack Up, up to  stacks.","slots":["Helmet","Weapon"]},"Gilded Oracle":{"n":"Gilded Oracle","pieceSet":"Gilded Wish","r":"Mythic","season":"s3","bonus2":{},"spell":"AOE damage dealt by the wearer is increased by .","slots":["Helmet","Weapon"]},"Prohibition Field":{"n":"Prohibition Field","pieceSet":"Abyssal Proscription","r":"Mythic","season":"s3","bonus2":{},"spell":"Increases damage dealt by the wearer's summoned units by . Each of the wearer's summoned units on the field increases the wearer's damage dealt by  (up to ).","slots":["Gloves","Armor"]},"Fight Poison with Poison":{"n":"Fight Poison with Poison","pieceSet":"Forest Canopy","r":"Mythic","season":"s2","bonus2":{},"spell":"When the wearer is inflicted with a negative effect, there is a 50.0% chance of inflicting Recharging Speed Penalty on the inflicter for 5.0s.","slots":["Gloves","Armor"]},"Devout Prayer":{"n":"Devout Prayer","pieceSet":"Wildsand Devotion","r":"Mythic","season":"s2","bonus2":{},"spell":"When the wearer grants a shield, the target deals 12% more damage for 10.0s.","slots":["Gloves","Armor"]},"Imperial Oath":{"n":"Imperial Oath","pieceSet":"Draconic Majesty","r":"Mythic","season":"s2","bonus2":{},"spell":"When the wearer successfully inflicts a control effect, if the target is already under a negative effect, reduces their Ultimate Energy by 10.0. Any target can only be affected once every 10.0s.","slots":["Helmet","Weapon"]},"Skyfire Sun":{"n":"Skyfire Sun","pieceSet":"Gilded Shimmer","r":"Mythic","season":"s2","bonus2":{},"spell":"The wearer deals 35% more damage through Poison, Blast, and Lightning Chain.","slots":["Helmet","Weapon"]},"Stone Breaker":{"n":"Stone Breaker","pieceSet":"Deep Exploration","r":"Mythic","season":"s2","bonus2":{},"spell":"When the wearer successfully inflicts a debuff, permanently increases the hero's Attack by 1%, up to 20 stacks.","slots":["Gloves","Armor"]},"Bloodshade Mark":{"n":"Bloodshade Mark","pieceSet":"Crimson Shadowhunt","r":"Mythic","season":"s2","bonus2":{},"spell":"At the start of battle, the wearer gains an Attack bonus equal to 20% of the Attack of the ally with the highest Attack (excluding the wearer).","slots":["Helmet","Weapon"]},"Sky Code Treaty":{"n":"Sky Code Treaty","pieceSet":"Skybound Alliance","r":"Mythic","season":"s1","bonus2":{},"spell":"When the wearer grants a shield, 1 debuff is also dispelled from the target. This effect can trigger once every 20.0s.","slots":["Helm","Weapon"]},"Impregnable":{"n":"Impregnable","pieceSet":"Supreme Blessing","r":"Mythic","season":"s1","bonus2":{},"spell":"The wearer's gained buffs have a 50% chance to be enhanced, making them undispellable.","slots":["Helm","Weapon"]},"Clean Sweep":{"n":"Clean Sweep","pieceSet":"Unclean Bloodline","r":"Mythic","season":"s1","bonus2":{},"spell":"When the wearer's ultimate skill recharge completes, dispels all negative effects from the hero.","slots":["Gloves","Armor"]},"Iron Bastion":{"n":"Iron Bastion","pieceSet":"Absolute Deterrence","r":"Mythic","season":"s1","bonus2":{},"spell":"When the wearer takes Crit Damage, has a 50.0% chance of reducing attacker's Crit Rate by 30% for 5.0s.","slots":["Gloves","Armor"]},"Monelisse's Teardrop":{"n":"Monelisse's Teardrop","pieceSet":"Lunar Radiance","r":"Mythic","season":"s1","bonus2":{},"spell":"When the wearer's HP drops to 0, gains Immortality for 3.0s and 15% Damage Reduction for 10.0s. This effect can trigger once every 120.0s.","slots":["Helm","Weapon"]},"Schadenfreude":{"n":"Schadenfreude","pieceSet":"Tunnel King's Legacy","r":"Mythic","season":"s1","bonus2":{},"spell":"Each time the wearer successfully inflicts a debuff, performs [+2% Max HP] self-healing.","slots":["Gloves","Armor"]},"Ancestral Guidance":{"n":"Ancestral Guidance","pieceSet":"Mountain Echo","r":"Mythic","season":"s1","bonus2":{},"spell":"The wearer gains 50% basic attack Lifesteal, gaining additional 50% Lifesteal when HP is below 25%.","slots":["Gloves","Armor"]},"Strike the Unprepared":{"n":"Strike the Unprepared","pieceSet":"Precise Carnage","r":"Mythic","season":"s1","bonus2":{},"spell":"The wearer deals 30% increased damage to enemies under Defense Penalty.","slots":["Gloves","Armor"]},"Magic Crystal Refinement":{"n":"Magic Crystal Refinement","pieceSet":"Energy Siphoner","r":"Mythic","season":"s1","bonus2":{},"spell":"The wearer gains additional Attack equal to 300% of current Accuracy.","slots":["Helm","Weapon"]},"Mark of Austerity":{"n":"Mark of Austerity","pieceSet":"Wolfthorn Snare","r":"Mythic","season":"s1","bonus2":{},"spell":"For every 10% Current HP the wearer loses, Attack Speed increases by 15%.","slots":["Gloves","Armor"]},"Imposing Presence":{"n":"Imposing Presence","pieceSet":"Emperor's Might","r":"Mythic","season":"s1","bonus2":{},"spell":"When the wearer is at 100% HP, damage dealt increases by 25%.","slots":["Gloves","Armor"]},"Death Record":{"n":"Death Record","pieceSet":"Enwinding Flesh","r":"Mythic","season":"s1","bonus2":{},"spell":"When the wearer deals Derivative Damage, marks the target to increase their Derivative Damage taken by 20% for 12.0s.","slots":["Gloves","Armor"]},"Fearless Challenge":{"n":"Fearless Challenge","pieceSet":"Violence Incarnate","r":"Mythic","season":"s1","bonus2":{},"spell":"The wearer deals 16% increased damage to enemies with Max HP higher than the hero by 50%.","slots":["Helm","Weapon"]},"Chaos Symbiosis":{"n":"Chaos Symbiosis","pieceSet":"Finality's Admonition","r":"Mythic","season":"s1","bonus2":{},"spell":"For each ally of the same School present, the wearer's Attack increases by 6%.","slots":["Helm","Weapon"]},"Holy Light Reflection":{"n":"Holy Light Reflection","pieceSet":"Luminary Order Blesser Cowl+","r":"Legendary","season":"s9","bonus2":{"hpPct":0.2,"res":60.0},"spell":"At the start of battle and every 20s thereafter, the wearer grants 1 stack of Reflect to all allies in the same row for 6.0s. Reflect: When a debuff is successfully inflicted, consumes 1 stack of Reflect to forcibly inflict 1 stack of the debuff back onto its source. If multiple debuffs are inflicted simultaneously, only one is reflected. Max 1 stack of Reflect. Reflected debuffs cannot be reflected again.","slots":["Luminary Order Blesser Cowl","Luminary Order Blesser Gloves","Luminary Order Blesser Tunic","Luminary Order Blesser Staff"]},"Verdant Crystal":{"n":"Verdant Crystal","pieceSet":"Verdant Breath Cowl+","r":"Legendary","season":"s9","bonus2":{"hpPct":0.2,"defPct":0.2},"spell":"At the start of battle, the wearer gains a [+30%Max HP] shield. After this shield is broken, it will be reapplied to the wearer after 20s.","slots":["Verdant Breath Cowl","Verdant Breath Gloves","Verdant Breath Tunic","Verdant Breath Staff"]},"Undying Faith":{"n":"Undying Faith","pieceSet":"Blazeland Followers' Helm+","r":"Legendary","season":"s9","bonus2":{"atkPct":0.2,"atkSpd":0.2},"spell":"For every 20 instance(s) of damage the wearer deals, they rotate between the following special statuses: 10% Attack Up and 30% Attack Speed Up, 60% Crit Damage Up, and 20% Damage Bonus. At the start of battle, the wearer gains the 10% Attack Up and 30% Attack Speed Up effect. After that, their status can only switch once every 15.0 seconds.","slots":["Blazeland Followers' Helm","Blazeland Followers' Gloves","Blazeland Followers' Armor","Blazeland Followers' Staff"]},"Starlight Echo":{"n":"Starlight Echo","pieceSet":"Astrologer Hat+","r":"Legendary","season":"s8","bonus2":{"haste":20.0,"ench":30.0},"spell":"When attacking, has a 30% chance to fire an additional orb at the current target, dealing  and inflicting Stunned. This effect triggers at most once every 10s, and the cooldown decreases by 1s for every 5 instances of damage dealt, down to a minimum of 2s.","slots":["Astrologer Hat","Astrologer Gloves","Astrologer Tunic","Astrologer Staff"]},"Forest's Ward":{"n":"Forest's Ward","pieceSet":"Woodland Solitary Hat+","r":"Legendary","season":"s8","bonus2":{"hpPct":0.2,"defPct":0.2},"spell":"Each time the hero takes damage, parries an amount equal to 100% of the hero's Defense.","slots":["Woodland Solitary Hat","Woodland Solitary Gloves","Woodland Solitary Tunic","Woodland Solitary Staff"]},"Slaughter's Edge":{"n":"Slaughter's Edge","pieceSet":"Abyssal Slayer Helmet+","r":"Legendary","season":"s8","bonus2":{"atkPct":0.2,"critRate":0.1},"spell":"After landing 3 critical hits, the wearer gains 10% Damage Up for 10.0s, up to 3 stacks, with each stack tracked independently.","slots":["Abyssal Slayer Helmet","Abyssal Slayer Gloves","Abyssal Slayer Armor","Abyssal Slayer Staff"]},"Cervidynus's Call":{"n":"Cervidynus's Call","pieceSet":"Deerfield Serenade Hood+","r":"Legendary","season":"s7","bonus2":{"hpPct":0.2,"acc":40.0},"spell":"Whenever the wearer inflicts a debuff or control effect, it additionally reduces the duration of all current buff effects on the target by 1s.","slots":["Deerfield Serenade Hood","Deerfield Serenade Gloves","Deerfield Serenade Robe","Deerfield Serenade Staff"]},"Sacred River's Revelation":{"n":"Sacred River's Revelation","pieceSet":"Great River Abbey Hood+","r":"Legendary","season":"s7","bonus2":{"hpPct":0.2,"defPct":0.2},"spell":"Whenever the wearer grants healing or a shield, increases the target's Damage Reduction by 1%, up to 10 times.","slots":["Great River Abbey Hood","Great River Abbey Gloves","Great River Abbey Robe","Great River Abbey Staff"]},"Forgesmoke Eruption":{"n":"Forgesmoke Eruption","pieceSet":"Forge Master's Helm+","r":"Legendary","season":"s7","bonus2":{"atkPct":0.2,"ench":30.0},"spell":"After battle begins, every 5s, the wearer gains 3% Derivative Damage Up, up to 10 times.","slots":["Forge Master's Helm","Forge Master's Gauntlets","Forge Master's Armor","Forge Master's Pipe"]},"Secrecy Order's Chant":{"n":"Secrecy Order's Chant","pieceSet":"Secrecy Order Hood+","r":"Legendary","season":"s6","bonus2":{"haste":20.0,"ench":30.0},"spell":"Allies under shields applied by the wearer have their Attack increased by 10%. If the ally is at full HP while the shield persists, they additionally gain 10% Damage Up.","slots":["Secrecy Order Hood","Secrecy Order Gloves","Secrecy Order Robe","Secrecy Order Staff"]},"Sylvan Refuge":{"n":"Sylvan Refuge","pieceSet":"Forest Shadow Hat+","r":"Legendary","season":"s6","bonus2":{"hpPct":0.2,"acc":40.0},"spell":"For every 20% HP the wearer loses, reduces damage taken by 20% for 10.0s, up to 4 stacks. This effect can trigger at most 6 times per battle.","slots":["Forest Shadow Hat","Forest Shadow Gloves","Forest Shadow Tunic","Forest Shadow Scepter"]},"Wildwood Vigil":{"n":"Wildwood Vigil","pieceSet":"Wildwood Guardian Helm+","r":"Legendary","season":"s6","bonus2":{"defPct":0.2,"acc":40.0},"spell":"When an allied hero other than the wearer takes damage exceeding 15% of their Max HP, the wearer loses 20% of current HP and nullifies that instance of damage. This effect can trigger only once per target every 20.0s and is unique within the team.","slots":["Wildwood Guardian Helm","Wildwood Guardian Gloves","Wildwood Guardian Armor","Wildwood Guardian Greataxe"]},"Redfeather Raid":{"n":"Redfeather Raid","pieceSet":"Redfeather Adventurer Helmet+","r":"Legendary","season":"s6","bonus2":{"atkPct":0.2,"haste":20.0},"spell":"The wearer gains 30 stack(s) of Assault at the start of battle and loses 1 stack(s) every 1s thereafter.\nAssault: Each stack provides 1% Attack, 1% Attack Speed, and 1% Crit Damage.","slots":["Redfeather Adventurer Helmet","Redfeather Adventurer Gloves","Redfeather Adventurer Armor","Redfeather Adventurer Longsword"]},"Thornvine Entanglement":{"n":"Thornvine Entanglement","pieceSet":"Thornvine Growth Helm+","r":"Legendary","season":"s6","bonus2":{"atkPct":0.2,"atkSpd":0.2},"spell":"When the wearer casts a battle skill or ultimate skill, gains 60% Attack Speed Up for 6.0s.","slots":["Thornvine Growth Helm","Thornvine Growth Gloves","Thornvine Growth Armor","Thornvine Growth Whip"]},"Wings of the Owlkin":{"n":"Wings of the Owlkin","pieceSet":"Verdant Owlcaster Hood+","r":"Legendary","season":"s4","bonus2":{"hpPct":0.2,"res":60.0},"spell":"For the first 30s of battle, the wearer takes 20% reduced elemental damage. At 30s, dispels 2 debuff(s) from each of the allies and grants them 2 stacks of Aegis.\nAegis: When taking damage, consumes 1 stack to reduce that damage by 70%.","slots":["Verdant Owlcaster Hood","Verdant Owlcaster Gloves","Verdant Owlcaster Light Armor","Verdant Owlcaster Staff"]},"Rage of the Wild Horns":{"n":"Rage of the Wild Horns","pieceSet":"Horned Berserker Helmet+","r":"Legendary","season":"s4","bonus2":{"atkPct":0.2,"critRate":0.1},"spell":"Every 10s after the battle starts, the wearer randomly gains one of the following effects: 4% Attack Up, 8% Crit Damage Up, or 4% Elemental Damage Up. Each effect can be obtained up to 3 times.","slots":["Horned Berserker Helmet","Horned Berserker Gloves","Horned Berserker Heavy Armor","Horned Berserker Hammer"]},"Dawn of the Snowpeak":{"n":"Dawn of the Snowpeak","pieceSet":"Snow Mountain Hunter Helmet+","r":"Legendary","season":"s3","bonus2":{"hpPct":0.2,"res":60.0},"spell":"For each type of buff the wearer has, increases the Attack of all allies by , up to  stacks.","slots":["Snow Mountain Hunter Helmet","Snow Mountain Hunter Gloves","Snow Mountain Hunter Armor","Snow Mountain Hunter Axe"]},"Gem's Inspiration":{"n":"Gem's Inspiration","pieceSet":"Gem Broker's Hood+","r":"Legendary","season":"s3","bonus2":{"haste":20.0,"ench":30.0},"spell":"When the wearer casts an ultimate skill, the ally with the highest Attack/Defense/HP (decided at the start of battle) gains a  bonus to that attribute. For every  Enlightenment the wearer has, this bonus increases by an additional , up to  stacks.","slots":["Gem Broker's Hood","Gem Broker's Gloves","Gem Broker's Light Armor","Gem Broker's Dagger"]},"Crow's Menace":{"n":"Crow's Menace","pieceSet":"Crow Hunter's Helmet+","r":"Legendary","season":"s3","bonus2":{"acc":40.0,"res":60.0},"spell":"On the first damage dealt by the wearer's ultimate skill, if the wearer's Defense is higher than the target's, there is a 100% chance of inflicting  Attack Penalty for s.","slots":["Crow Hunter's Helmet","Crow Hunter's Gloves","Crow Hunter's Light Armor","Crow Hunter's Bow"]},"Verdant Rebuke":{"n":"Verdant Rebuke","pieceSet":"Verdant Guardian Hood+","r":"Legendary","season":"s3","bonus2":{"hpPct":0.2,"defPct":0.2},"spell":"When the wearer casts a battle skill or ultimate skill, there is a  chance of inflicting  on the farthest enemy for s, during which the hero takes  less damage from this enemy.","slots":["Verdant Guardian Hood","Verdant Guardian Gloves","Verdant Guardian Light Armor","Verdant Guardian Staff"]},"Sunfire's Glow":{"n":"Sunfire's Glow","pieceSet":"Sunfire Helmet+","r":"Legendary","season":"s3","bonus2":{"atkPct":0.2,"haste":20.0},"spell":" of the HP damage dealt by the wearer is converted into their Max HP for s, up to a maximum increase of  Max HP. At the cap, the wearer's damage taken is reduced by .","slots":["Sunfire Helmet","Sunfire Gloves","Sunfire Light Armor","Sunfire Longsword"]},"Trailblazer's Advance":{"n":"Trailblazer's Advance","pieceSet":"Trailblazer Top Hat+","r":"Legendary","season":"s3","bonus2":{"atkPct":0.2,"atkSpd":0.2},"spell":"When the wearer deals direct damage, their Attack Speed is increased by  permanently, up to  stacks. At max stacks, the wearer's damage dealt is increased by .","slots":["Trailblazer Top Hat","Trailblazer Gloves","Trailblazer Light Armor","Trailblazer Flintlock"]},"Crescent Ward":{"n":"Crescent Ward","pieceSet":"Monelisse's Watch Hood+","r":"Legendary","season":"s2","bonus2":{"hpPct":0.2,"ench":30.0},"spell":"When casting a battle skill or ultimate skill, the wearer heals the ally with the lowest Current HP for [+5% HP][+1,000% Enlightenment]. This effect can only occur once every 8.0s.","slots":["Monelisse's Watch Hood","Monelisse's Watch Gloves","Monelisse's Watch Robe","Monelisse's Watch Staff"]},"Emissary's Whisper":{"n":"Emissary's Whisper","pieceSet":"Emissary Crown+","r":"Legendary","season":"s2","bonus2":{"acc":40.0,"haste":20.0},"spell":"When the wearer successfully inflicts a debuff, all allies deal 10% more damage for 10.0s.","slots":["Emissary Crown","Emissary Gloves","Emissary Robe","Emissary Staff"]},"Frost Taint":{"n":"Frost Taint","pieceSet":"Iceberg Guardian Helmet+","r":"Legendary","season":"s2","bonus2":{"acc":40.0,"res":60.0},"spell":"When taking damage, the wearer has a 50% chance of inflicting Frozen on the attacker for 3.0s.","slots":["Iceberg Guardian Helmet","Iceberg Guardian Gloves","Iceberg Guardian Armor","Iceberg Guardian Blade"]},"Hope of Oasis":{"n":"Hope of Oasis","pieceSet":"Oasis Guardian Kerchief+","r":"Legendary","season":"s2","bonus2":{"hpPct":0.2,"haste":20.0},"spell":"When the wearer's HP is above 70%, reduces damage taken by 20%.","slots":["Oasis Guardian Kerchief","Oasis Guardian Gloves","Oasis Guardian Light Armor","Oasis Guardian Cutlass"]},"Abyssal Curse":{"n":"Abyssal Curse","pieceSet":"Abyssal Shadow Hood+","r":"Legendary","season":"s2","bonus2":{"atkPct":0.2,"critDmg":0.2},"spell":"For every 10% HP the target loses, the wearer deals 5% increased damage to them, up to 35%.","slots":["Abyssal Shadow Hood","Abyssal Shadow Gloves","Abyssal Shadow Light Armor","Abyssal Shadow Dagger"]},"Inventor's Inspiration":{"n":"Inventor's Inspiration","pieceSet":"Inventor Top Hat+","r":"Legendary","season":"s2","bonus2":{"atkPct":0.2,"ench":30.0},"spell":"Increases Derivative Damage dealt by the wearer by 20%.","slots":["Inventor Top Hat","Inventor Gloves","Inventor Light Armor","Inventor Flintlock"]},"Forbidden Aegis":{"n":"Forbidden Aegis","pieceSet":"Darknight Guardian Helmet+","r":"Legendary","season":"s2","bonus2":{"atkPct":0.2,"critRate":0.1},"spell":"When casting a battle skill or ultimate skill, the wearer deals 6% more damage for 10.0s, up to 4 stacks.","slots":["Darknight Guardian Helmet","Darknight Guardian Gloves","Darknight Guardian Armor","Darknight Guardian Axe"]},"Brotherhood Spirit":{"n":"Brotherhood Spirit","pieceSet":"Three-Ears Emblem Hood+","r":"Legendary","season":"s1","bonus2":{"defPct":0.25},"spell":"When the wearer casts an ultimate skill, all allies' elemental damage dealt increases by 15% for 10.0s.","slots":["Three-Ears Emblem Hood","Three-Ears Emblem Gloves","Three-Ears Emblem Light Armor","Three-Ears Emblem Dagger"]},"Holy Hunter":{"n":"Holy Hunter","pieceSet":"Holy Hunter Helmet+","r":"Legendary","season":"s1","bonus2":{"acc":40.0,"haste":20.0},"spell":"When the wearer deals damage, has a 20% chance of inflicting Stunned to the target for 3.0s.","slots":["Holy Hunter Helmet","Holy Hunter Gloves","Holy Hunter Light Armor","Holy Hunter Longbow"]},"Puppeteer's Inspiration":{"n":"Puppeteer's Inspiration","pieceSet":"Puppeteer Headgear+","r":"Legendary","season":"s1","bonus2":{"acc":40.0,"res":60.0},"spell":"When the wearer casts an ultimate skill, allies of the same element gain 10% Ultimate Energy. Any target can only gain this effect once within 15.0s.","slots":["Puppeteer Headgear","Puppeteer Gloves","Puppeteer Light Armor","Puppeteer Hammer"]},"Tundra Tenacity":{"n":"Tundra Tenacity","pieceSet":"Tundra Guardian Helmet+","r":"Legendary","season":"s1","bonus2":{"hpPct":0.2,"acc":40.0},"spell":"The wearer gains 1.0 Ultimate Energy each time taking damage.","slots":["Tundra Guardian Helmet","Tundra Guardian Gloves","Tundra Guardian Heavy Armor","Tundra Guardian Battleaxe"]},"Ancestral Protection":{"n":"Ancestral Protection","pieceSet":"Ancestral Protection Hood+","r":"Legendary","season":"s1","bonus2":{"hpPct":0.2,"defPct":0.15},"spell":"Decreases the wearer's damage taken by 10%, while 15% of other allies' damage taken is transferred to the wearer.","slots":["Ancestral Protection Hood","Ancestral Protection Gloves","Ancestral Protection Robe","Ancestral Protection Staff"]},"Heart of the Gambler":{"n":"Heart of the Gambler","pieceSet":"Gambler Headgear+","r":"Legendary","season":"s1","bonus2":{"atkPct":0.2,"atkSpd":0.2},"spell":"When the wearer's attack triggers a critical hit, has a 35% chance of dealing additional [+130% Attack] Physical Damage.","slots":["Gambler Headgear","Gambler Gloves","Gambler Light Armor","Gambler Flintlock"]},"Cyril's Whisper":{"n":"Cyril's Whisper","pieceSet":"Cyril Helmet+","r":"Legendary","season":"s1","bonus2":{"atkPct":0.2,"haste":20.0},"spell":"For each negative effect the enemy carries, the wearer's attacks ignore 7% of their Defense, up to 3 stacks.","slots":["Cyril Helmet","Cyril Gloves","Cyril Light Armor","Cyril Rapier"]},"Imperial Executioner":{"n":"Imperial Executioner","pieceSet":"Executioner Helmet+","r":"Legendary","season":"s1","bonus2":{"atkPct":0.2,"critRate":0.1},"spell":"When the wearer's skill damage triggers a critical hit, that damage additionally increases by 16%.","slots":["Executioner Helmet","Executioner Gloves","Executioner Heavy Armor","Executioner Axe"]},"Power of Tides":{"n":"Power of Tides","pieceSet":"Intertidal Crown","r":"Legendary","season":"s1","bonus2":{"ench":30.0,"res":60.0},"spell":"When the wearer successfully resists enemy-inflicted effect, heals all allies for [+5% Max HP]. This effect can trigger once every 10.0s.","slots":["Intertidal Crown","Intertidal Gloves","Intertidal Light Armor","Intertidal Staff"]},"Revenge of the Fallen":{"n":"Revenge of the Fallen","pieceSet":"Undead Helmet","r":"Legendary","season":"s1","bonus2":{"hpPct":0.2,"res":60.0},"spell":"When the wearer takes damage, has a 50% chance of reflecting 20% of that damage back to source.","slots":["Undead Helmet","Undead Gloves","Undead Light Armor","Undead Rapier"]},"Radiance of the Blue Oak":{"n":"Radiance of the Blue Oak","pieceSet":"Radiance of the Blue Oak Hood","r":"Legendary","season":"s1","bonus2":{"defPct":0.2,"haste":20.0},"spell":"When HP drops to 25%, gains Recovery Over Time for 10s, healing [+80% Defense] per second. This effect can trigger once every 60.0s.","slots":["Radiance of the Blue Oak Hood","Radiance of the Blue Oak Gloves","Radiance of the Blue Oak Robe","Radiance of the Blue Oak Staff"]},"Platinum Knight Quality":{"n":"Platinum Knight Quality","pieceSet":"Platinum Knight Helmet","r":"Legendary","season":"s1","bonus2":{"atkPct":0.2,"ench":30.0},"spell":"For 12.0s after the wearer unleashes an ultimate skill, damage dealt increases by 30%.","slots":["Platinum Knight Helmet","Platinum Knight Gloves","Platinum Knight Chain Mail","Platinum Knight Rapier"]},"Rhapsodist's Calling":{"n":"Rhapsodist's Calling","pieceSet":"Rhapsodist Headgear","r":"Legendary","season":"s1","bonus2":{"atkPct":0.2,"acc":40.0},"spell":"When the wearer inflicts a debuff, damage dealt increases by 8% for the next 10.0s, up to 4 stacks.","slots":["Rhapsodist Headgear","Rhapsodist Gloves","Rhapsodist Light Armor","Rhapsodist Hammer"]},"Imperial Shadow's Cloak":{"n":"Imperial Shadow's Cloak","pieceSet":"Imperial Shadow's Cloak","r":"Legendary","season":"s1","bonus2":{},"spell":"","slots":["Imperial Shadow's Cloak"]},"Zmaragdis's Rage":{"n":"Zmaragdis's Rage","pieceSet":"Zmaragdis's Rage","r":"Epic","season":"s1","bonus2":{},"spell":"","slots":["Zmaragdis's Rage"]},"Deer Herder Helmet":{"n":"Deer Herder Helmet","pieceSet":"Deer Herder Helmet","r":"Epic","season":"s1","bonus2":{"acc":40.0,"res":60.0},"spell":"","slots":["Deer Herder Helmet"]},"Deer Herder Gloves":{"n":"Deer Herder Gloves","pieceSet":"Deer Herder Gloves","r":"Epic","season":"s1","bonus2":{"acc":40.0,"res":60.0},"spell":"","slots":["Deer Herder Gloves"]},"Deer Herder Light Armor":{"n":"Deer Herder Light Armor","pieceSet":"Deer Herder Light Armor","r":"Epic","season":"s1","bonus2":{"acc":40.0,"res":60.0},"spell":"","slots":["Deer Herder Light Armor"]},"Deer Herder Crossbow":{"n":"Deer Herder Crossbow","pieceSet":"Deer Herder Crossbow","r":"Epic","season":"s1","bonus2":{"acc":40.0,"res":60.0},"spell":"","slots":["Deer Herder Crossbow"]},"Swift Shadow Headgear":{"n":"Swift Shadow Headgear","pieceSet":"Swift Shadow Headgear","r":"Epic","season":"s1","bonus2":{"acc":40.0,"haste":20.0},"spell":"","slots":["Swift Shadow Headgear"]},"Swift Shadow Gloves":{"n":"Swift Shadow Gloves","pieceSet":"Swift Shadow Gloves","r":"Epic","season":"s1","bonus2":{"acc":40.0,"haste":20.0},"spell":"","slots":["Swift Shadow Gloves"]},"Swift Shadow Shrouded Armor":{"n":"Swift Shadow Shrouded Armor","pieceSet":"Swift Shadow Shrouded Armor","r":"Epic","season":"s1","bonus2":{"acc":40.0,"haste":20.0},"spell":"","slots":["Swift Shadow Shrouded Armor"]},"Swift Shadow Dagger":{"n":"Swift Shadow Dagger","pieceSet":"Swift Shadow Dagger","r":"Epic","season":"s1","bonus2":{"acc":40.0,"haste":20.0},"spell":"","slots":["Swift Shadow Dagger"]},"Blessing Hood":{"n":"Blessing Hood","pieceSet":"Blessing Hood","r":"Epic","season":"s1","bonus2":{"ench":30.0,"hp":1000.0},"spell":"","slots":["Blessing Hood"]},"Blessing Gloves":{"n":"Blessing Gloves","pieceSet":"Blessing Gloves","r":"Epic","season":"s1","bonus2":{"ench":30.0,"hp":1000.0},"spell":"","slots":["Blessing Gloves"]},"Blessing Robe":{"n":"Blessing Robe","pieceSet":"Blessing Robe","r":"Epic","season":"s1","bonus2":{"ench":30.0,"hp":1000.0},"spell":"","slots":["Blessing Robe"]},"Blessing Staff":{"n":"Blessing Staff","pieceSet":"Blessing Staff","r":"Epic","season":"s1","bonus2":{"ench":30.0,"hp":1000.0},"spell":"","slots":["Blessing Staff"]},"Granite Helmet":{"n":"Granite Helmet","pieceSet":"Granite Helmet","r":"Epic","season":"s1","bonus2":{"def":100.0,"hp":1000.0},"spell":"","slots":["Granite Helmet"]},"Granite Gloves":{"n":"Granite Gloves","pieceSet":"Granite Gloves","r":"Epic","season":"s1","bonus2":{"def":100.0,"hp":1000.0},"spell":"","slots":["Granite Gloves"]},"Granite Heavy Armor":{"n":"Granite Heavy Armor","pieceSet":"Granite Heavy Armor","r":"Epic","season":"s1","bonus2":{"def":100.0,"hp":1000.0},"spell":"","slots":["Granite Heavy Armor"]},"Granite Hammer":{"n":"Granite Hammer","pieceSet":"Granite Hammer","r":"Epic","season":"s1","bonus2":{"def":100.0,"hp":1000.0},"spell":"","slots":["Granite Hammer"]},"Goblin Helmet":{"n":"Goblin Helmet","pieceSet":"Goblin Helmet","r":"Epic","season":"s1","bonus2":{"atk":100.0,"haste":20.0},"spell":"","slots":["Goblin Helmet"]},"Goblin Gloves":{"n":"Goblin Gloves","pieceSet":"Goblin Gloves","r":"Epic","season":"s1","bonus2":{"atk":100.0,"haste":20.0},"spell":"","slots":["Goblin Gloves"]},"Goblin Chain Mail":{"n":"Goblin Chain Mail","pieceSet":"Goblin Chain Mail","r":"Epic","season":"s1","bonus2":{"atk":100.0,"haste":20.0},"spell":"","slots":["Goblin Chain Mail"]},"Goblin Cutlass":{"n":"Goblin Cutlass","pieceSet":"Goblin Cutlass","r":"Epic","season":"s1","bonus2":{"atk":100.0,"haste":20.0},"spell":"","slots":["Goblin Cutlass"]},"Predator Helmet":{"n":"Predator Helmet","pieceSet":"Predator Helmet","r":"Epic","season":"s1","bonus2":{"atk":100.0,"atkSpd":0.2},"spell":"","slots":["Predator Helmet"]},"Predator Gloves":{"n":"Predator Gloves","pieceSet":"Predator Gloves","r":"Epic","season":"s1","bonus2":{"atk":100.0,"atkSpd":0.2},"spell":"","slots":["Predator Gloves"]},"Predator Leather":{"n":"Predator Leather","pieceSet":"Predator Leather","r":"Epic","season":"s1","bonus2":{"atk":100.0,"atkSpd":0.2},"spell":"","slots":["Predator Leather"]},"Predator Halberd":{"n":"Predator Halberd","pieceSet":"Predator Halberd","r":"Epic","season":"s1","bonus2":{"atk":100.0,"atkSpd":0.2},"spell":"","slots":["Predator Halberd"]},"Assassin Headgear":{"n":"Assassin Headgear","pieceSet":"Assassin Headgear","r":"Epic","season":"s1","bonus2":{"atk":100.0,"ench":30.0},"spell":"","slots":["Assassin Headgear"]},"Assassin Gloves":{"n":"Assassin Gloves","pieceSet":"Assassin Gloves","r":"Epic","season":"s1","bonus2":{"atk":100.0,"ench":30.0},"spell":"","slots":["Assassin Gloves"]},"Assassin Shrouded Armor":{"n":"Assassin Shrouded Armor","pieceSet":"Assassin Shrouded Armor","r":"Epic","season":"s1","bonus2":{"atk":100.0,"ench":30.0},"spell":"","slots":["Assassin Shrouded Armor"]},"Assassin Dagger":{"n":"Assassin Dagger","pieceSet":"Assassin Dagger","r":"Epic","season":"s1","bonus2":{"atk":100.0,"ench":30.0},"spell":"","slots":["Assassin Dagger"]},"Barbarian Helmet":{"n":"Barbarian Helmet","pieceSet":"Barbarian Helmet","r":"Epic","season":"s1","bonus2":{"atk":100.0,"critRate":0.1},"spell":"","slots":["Barbarian Helmet"]},"Barbarian Gloves":{"n":"Barbarian Gloves","pieceSet":"Barbarian Gloves","r":"Epic","season":"s1","bonus2":{"atk":100.0,"critRate":0.1},"spell":"","slots":["Barbarian Gloves"]},"Barbarian Armor":{"n":"Barbarian Armor","pieceSet":"Barbarian Armor","r":"Epic","season":"s1","bonus2":{"atk":100.0,"critRate":0.1},"spell":"","slots":["Barbarian Armor"]},"Barbarian Battleaxe":{"n":"Barbarian Battleaxe","pieceSet":"Barbarian Battleaxe","r":"Epic","season":"s1","bonus2":{"atk":100.0,"critRate":0.1},"spell":"","slots":["Barbarian Battleaxe"]},"Never-withering Love":{"n":"Never-withering Love","pieceSet":"Never-withering Love","r":"Rare","season":"s1","bonus2":{},"spell":"","slots":["Never-withering Love"]},"Sylvan Fury's Claw":{"n":"Sylvan Fury's Claw","pieceSet":"Sylvan Fury's Claw","r":"Rare","season":"s1","bonus2":{},"spell":"","slots":["Sylvan Fury's Claw"]},"Chaotic Halo":{"n":"Chaotic Halo","pieceSet":"Chaotic Halo","r":"Rare","season":"s1","bonus2":{},"spell":"","slots":["Chaotic Halo"]},"Pale Scroll":{"n":"Pale Scroll","pieceSet":"Pale Scroll","r":"Rare","season":"s1","bonus2":{},"spell":"","slots":["Pale Scroll"]},"Inquisitor Helmet":{"n":"Inquisitor Helmet","pieceSet":"Inquisitor Helmet","r":"Rare","season":"s1","bonus2":{"acc":30.0,"res":30.0},"spell":"","slots":["Inquisitor Helmet"]},"Inquisitor Gloves":{"n":"Inquisitor Gloves","pieceSet":"Inquisitor Gloves","r":"Rare","season":"s1","bonus2":{"acc":30.0,"res":30.0},"spell":"","slots":["Inquisitor Gloves"]},"Inquisitor Light Armor":{"n":"Inquisitor Light Armor","pieceSet":"Inquisitor Light Armor","r":"Rare","season":"s1","bonus2":{"acc":30.0,"res":30.0},"spell":"","slots":["Inquisitor Light Armor"]},"Inquisitor Crossbow":{"n":"Inquisitor Crossbow","pieceSet":"Inquisitor Crossbow","r":"Rare","season":"s1","bonus2":{"acc":30.0,"res":30.0},"spell":"","slots":["Inquisitor Crossbow"]},"Guardian Helmet":{"n":"Guardian Helmet","pieceSet":"Guardian Helmet","r":"Rare","season":"s1","bonus2":{"def":50.0,"hp":500.0},"spell":"","slots":["Guardian Helmet"]},"Guardian Gloves":{"n":"Guardian Gloves","pieceSet":"Guardian Gloves","r":"Rare","season":"s1","bonus2":{"def":50.0,"hp":500.0},"spell":"","slots":["Guardian Gloves"]},"Guardian Heavy Armor":{"n":"Guardian Heavy Armor","pieceSet":"Guardian Heavy Armor","r":"Rare","season":"s1","bonus2":{"def":50.0,"hp":500.0},"spell":"","slots":["Guardian Heavy Armor"]},"Guardian Hammer":{"n":"Guardian Hammer","pieceSet":"Guardian Hammer","r":"Rare","season":"s1","bonus2":{"def":50.0,"hp":500.0},"spell":"","slots":["Guardian Hammer"]},"Rage Helmet":{"n":"Rage Helmet","pieceSet":"Rage Helmet","r":"Rare","season":"s1","bonus2":{"atk":50.0,"hp":500.0},"spell":"","slots":["Rage Helmet"]},"Rage Gloves":{"n":"Rage Gloves","pieceSet":"Rage Gloves","r":"Rare","season":"s1","bonus2":{"atk":50.0,"hp":500.0},"spell":"","slots":["Rage Gloves"]},"Rage Chain Mail":{"n":"Rage Chain Mail","pieceSet":"Rage Chain Mail","r":"Rare","season":"s1","bonus2":{"atk":50.0,"hp":500.0},"spell":"","slots":["Rage Chain Mail"]},"Rage Sword":{"n":"Rage Sword","pieceSet":"Rage Sword","r":"Rare","season":"s1","bonus2":{"atk":50.0,"hp":500.0},"spell":"","slots":["Rage Sword"]},"Helmet":{"n":"Helmet","pieceSet":"Helmet","r":"Common","season":"s1","bonus2":{},"spell":"","slots":["Helmet"]},"Gloves":{"n":"Gloves","pieceSet":"Gloves","r":"Common","season":"s1","bonus2":{},"spell":"","slots":["Gloves"]},"Plate Armor":{"n":"Plate Armor","pieceSet":"Plate Armor","r":"Common","season":"s1","bonus2":{},"spell":"","slots":["Plate Armor"]},"Longsword":{"n":"Longsword","pieceSet":"Longsword","r":"Common","season":"s1","bonus2":{},"spell":"","slots":["Longsword"]}}};})(typeof window!=="undefined"?window:globalThis);
/*
 * DHSim: a math battle simulator for Dragonheir: Silent Gods.
 *
 * Plain script, no build step. In a browser it defines window.DHSim; in Node it
 * is a CommonJS module. Hero data comes from sim-data.js (official tables) and
 * hero kits from kits.js; both register themselves with DHSim when loaded.
 *
 * Every constant the game does not publish lives in RULES, with a confidence
 * label in RULE_INFO, so results can be re-run under other assumptions
 * (DHSim.sensitivity) and recalibrated once in-game tests are done.
 */
(function (root, factory) {
  var api = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.DHSim = api;
})(typeof window !== 'undefined' ? window : globalThis, function () {
  'use strict';

  var VERSION = '0.4.0';

  // ---------------------------------------------------------------- rules --
  // conf: verified = official text or table; estimated = derived from data;
  // assumed = placeholder until a source or an in-game test pins it down.
  var RULE_INFO = {
    dt: { v: 0.05, conf: 'model', note: 'Simulation time step in seconds.' },
    maxTime: { v: 90, conf: 'assumed', note: 'Fight length cap (s) when the mode sets none.' },
    ultMax: { v: 100, conf: 'estimated', note: 'Ultimate energy bar. Skill texts move energy in steps up to 100 (Vinyara drains 100), so the bar is read as 100.', range: [100, 100] },
    ultFull: { v: 20, conf: 'reported', note: 'Full ultimate charge time (s) at 0 Skill Haste. Most heroes show 20 or 23 s in game (CN guide 2025-04-18, HellHades 2025-07-30).', range: [18, 24] },
    ultFirst: { v: 12, conf: 'reported', note: 'First ultimate ready at (s). In-game examples 10.9, 17 and 18 s.', range: [9, 18] },
    energyRegen: { v: null, conf: 'model', note: 'Override for energy per second; empty = ultMax / ultFull.' },
    energyPerBasic: { v: 0, conf: 'estimated', note: 'Ultimate energy per basic attack. The game shows fixed charge times, so energy is read as time-based only.', range: [0, 4] },
    energyPerHitTaken: { v: 0, conf: 'estimated', note: 'Ultimate energy per hit taken (same reasoning).', range: [0, 1] },
    battleCd: { v: 10, conf: 'reported', note: 'Battle skill recharge (s) when the kit gives none. In-game examples 10 and 12 s.', range: [8, 14] },
    battleFirst: { v: 5, conf: 'reported', note: 'First battle skill ready at (s). In-game examples 5 and 7 s.', range: [3, 7] },
    heroTiming: { v: true, conf: 'reported', note: 'Use per-hero charge times from the CN wiki (2023-09, 187 heroes; Vinyara/Thia from a 2025 report). Off = the defaults above for everyone.' },
    scrolls: { v: 'max', conf: 'assumed', note: "Skill scroll upgrades: 'max' (matches the max-level skill numbers the kits use) or 'none' (unscrolled charge times, about 2-3 s slower)." },
    castBattle: { v: 0.8, conf: 'assumed', note: 'Animation lock after a battle skill (s).', range: [0.5, 1.2] },
    castUlt: { v: 1.5, conf: 'assumed', note: 'Animation lock after an ultimate (s).', range: [1, 2.5] },
    basicMult: { v: 1.0, conf: 'assumed', note: 'Basic attack = this x ATK.', range: [0.8, 1.2] },
    attackFreqMeaning: { v: 'perSecond', conf: 'verified', note: 'attack_frequency = basic attacks per second (0.4 = one every 2.5 s, official wiki article 103).' },
    hastePerPoint: { v: 0.002, conf: 'verified', note: 'Recharge speed = 1 + Skill Haste x this (5 haste = +1%, official wiki article 103; a 2025 CN guide implies 0.0018). Applies to battle skill and ultimate.', range: [0.0015, 0.0025] },
    defK: { v: 1200, conf: 'assumed', note: 'DEF mitigation = DEF / (DEF + defK). No source publishes the DEF formula; calibrate in game.', range: [600, 2400] },
    dmgRedCap: { v: 0.8, conf: 'assumed', note: 'Cap on summed Damage Reduction.' },
    accShift: { v: 0, conf: 'verified', note: 'Debuff land chance by ACC minus RES: developer Q&A 2025-12-09 (0 to +50 = 90-95%, +200 = 97%) and the official S1 test (-30 = 76%, -50 = 16%). This shifts the curve in points.', range: [-15, 15] },
    landCap: { v: 0.97, conf: 'reported', note: 'At least 3% of hostile effects are always resisted (CS reply 2023-10-19).', range: [0.95, 1] },
    tierScale: { v: 1, conf: 'verified', note: 'Buff/debuff tier values come from the official S1 table (Defense Up 30/60%, penalties 25/50%, Crit Rate Up 20%, Crit Damage Up 30%, Damage Reduction 30%). They may have changed after the 2025 relaunch; this scales them all.', range: [0.75, 1.25] },
    flatTier: { v: 50, conf: 'reported', note: 'Flat Accuracy/Resistance Up or Penalty per tier (CN tooltip: +50).' },
    frozenDmgTaken: { v: 0.3, conf: 'verified', note: 'Frozen units take 30% less damage (official S1 table).' },
    frostAtkSpd: { v: 0, conf: 'assumed', note: 'Frost slow on attack speed. No source states one, so off.', range: [0, 0.2] },
    poisonPerStack: { v: 0.045, conf: 'calibrated', note: 'Poison: each stack deals this x caster ATK per second as Derivative damage (x Enlightenment bonus). Not published; S1 capped a 5 s tick at 30% ATK (6%/s). Lowered from 0.065 to 0.045 on Darko\'s Poison-team Temporal Vortex statistics (2026-10-25: game 3.76M; 0.065 gave 4.2M).', range: [0.04, 0.1] },
    poisonMaxStacks: { v: 20, conf: 'assumed', note: 'Max Poison stacks per target.' },
    burnPerStack: { v: 0.1, conf: 'assumed', note: 'Burn per stack per second x caster ATK.' },
    derivEnch: { v: 200, conf: 'verified', note: 'Derivative damage (DoT) x (1 + Enlightenment / this) and cannot crit (official wiki article 103).' },
    dotCanCrit: { v: false, conf: 'verified', note: 'Derivative damage cannot crit (official wiki article 103).' },
    derivativeIgnoresDef: { v: false, conf: 'reported', note: 'Derivative damage is still reduced by enemy DEF and level (Reddit test 2023-05-30).' },
    areaSize: { v: 3, conf: 'assumed', note: 'Enemies hit by an "enemies within range" skill when more are alive.', range: [2, 5] },
    bossControlMult: { v: 0, conf: 'verified', note: 'Bosses are immune to control (official boss pages). Set above 0 to test partial control.', range: [0, 0.5] },
    rechargePenalty: { v: 0.7, conf: 'verified', note: 'Recharging Speed Penalty: recharge speed x 0.7 (official S1 table: -30%).' },
    bonds: { v: true, conf: 'verified', note: 'School bonds with published numbers (Support: 30 s shield of 10%/15% max HP; Frost [2]: 5 Frost stacks freeze for 5 s, [3]: Cold 5 s and Cold on 1 enemy at start). Poison and other bond numbers are not published, so those bonds are not modelled.' },
    frostStacks: { v: 5, conf: 'verified', note: 'Reborn S1: Frost stacks up to 5; at 5 stacks it bursts for [+3% Max HP] Cold damage (Steam overhaul preview 2025-05-12, CN beta 2025-01-21). 0 = old single Frost.' },
    frostBurst: { v: 0.03, conf: 'verified', note: 'Frost 5-stack burst: share of the target max HP dealt as Cold damage by the hero who added the 5th stack.' },
    frostBurstCap: { v: 4, conf: 'assumed', note: 'Cap on the Frost burst in x ATK of that hero ("scaled with the Frost hero\'s attack"). The text does not say how; without a cap a boss with 40x hero HP would take a huge hit.', range: [2, 8] },
    bossPower: { v: 1, conf: 'assumed', note: 'Boss and enemy ATK multiplier. No source publishes boss ATK/HP/DEF; 1 = the bench tuned so a level-matched team wins a normal boss with HP to spare. Calibrate from one in-game Statistics screen (damage taken / time).', range: [0.75, 1.4] },
    chanceAdd: { v: true, conf: 'assumed', note: '"+X% chance of inflicting status" (Frost Globe, sets) is added to the skill chance (75% + 20% = 95%, capped at 100%), then the Accuracy vs Resistance curve multiplies. The game text does not say add or multiply.' }
  };
  // [ACC - RES, land chance], linear between points, 0 below, landCap above.
  // Above 0: developer Q&A 2025-12-09 (dragonheir.info #1693): 0..50 fails
  // 5-10%, +200 or more fails about 3%. Below 0: official S1 test table (wiki
  // article 103) and the CS reply of 2023-10-19 (-40 = 50%, -100 = 5%).
  var ACC_CURVE = [[-107, 0], [-100, 0.03], [-70, 0.10], [-50, 0.17], [-40, 0.5], [-30, 0.76], [0, 0.9], [50, 0.95], [200, 0.97]];
  function accCurve(diff, cap) {
    if (diff <= ACC_CURVE[0][0]) return 0;
    for (var i = 1; i < ACC_CURVE.length; i++) {
      var a = ACC_CURVE[i - 1], b = ACC_CURVE[i];
      if (diff <= b[0]) return Math.min(cap, a[1] + (b[1] - a[1]) * (diff - a[0]) / (b[0] - a[0]));
    }
    return cap;
  }
  function defaultRules() {
    var r = {};
    for (var k in RULE_INFO) r[k] = RULE_INFO[k].v;
    return r;
  }

  // ------------------------------------------------------------------ rng --
  function makeRng(seed) {
    var a = (seed >>> 0) || 1;
    return function () {
      a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function clamp(x, lo, hi) { return x < lo ? lo : x > hi ? hi : x; }

  // ----------------------------------------------------------------- data --
  var DATA = null;
  var KITS = {};
  var ARTIFACT_FX = {};
  var SET_FX = {};
  var BOSSES = {};

  function setData(d) { DATA = d; }
  function hero(id) {
    if (!DATA) throw new Error('DHSim: sim-data.js not loaded');
    var h = DATA.heroes[String(id)];
    if (!h) {
      var low = String(id).toLowerCase();
      for (var k in DATA.heroes) if (DATA.heroes[k].n.toLowerCase() === low) return DATA.heroes[k];
      throw new Error('DHSim: unknown hero ' + id);
    }
    return h;
  }
  function artifactByName(name) {
    if (!name) return null;
    if (DATA.artifacts[String(name)]) return DATA.artifacts[String(name)];
    var low = String(name).toLowerCase().replace(/['’]/g, '');
    for (var k in DATA.artifacts) {
      if (DATA.artifacts[k].n.toLowerCase().replace(/['’]/g, '') === low) return DATA.artifacts[k];
    }
    return null;
  }
  function setByName(name) {
    if (!name) return null;
    var low = String(name).toLowerCase().replace(/['’]/g, '');
    for (var k in DATA.sets) {
      var s = DATA.sets[k];
      if (s.n.toLowerCase().replace(/['’]/g, '') === low || s.pieceSet.toLowerCase().replace(/['’]/g, '') === low) return s;
    }
    return null;
  }

  // ---------------------------------------------------------------- stats --
  var STAT_NAMES = ['hp', 'atk', 'def', 'critRate', 'critDmg', 'acc', 'res', 'ench', 'haste', 'atkSpd'];
  function starsForLevel(level) { return level >= 90 ? 5 : level >= 70 ? 4 : level >= 50 ? 3 : level >= 30 ? 2 : 1; }

  // Naked hero stats at a level and star count, using the formula of the
  // official site's hero calculator (dragonheir.info chunk 5ff7c56.js).
  function nakedStats(h, level, stars) {
    level = clamp(level | 0 || 1, 1, 100);
    stars = stars || starsForLevel(level);
    var sumL = 0;
    for (var k = 1; k <= level - 1; k++) sumL += DATA.levelMult[k] || 0;
    var out = {};
    STAT_NAMES.forEach(function (s) { out[s] = h.b[s] || 0; });
    ['hp', 'atk', 'def'].forEach(function (s) { out[s] += (h.g[s] || 0) * sumL; });
    for (var i = 0; i < stars - 1 && i < DATA.starUp.length; i++) {
      ['hp', 'atk', 'def', 'critDmg', 'critRate', 'res', 'ench', 'acc'].forEach(function (s) {
        out[s] += (h.g[s] || 0) * (DATA.starUp[i][s] || 0);
      });
    }
    return out;
  }

  // A gear profile is a bag of summed stats; profiles are estimates.
  var GEAR_PROFILES = {
    none: {},
    // Rough mid-game S1 gear, used only so heroes are compared on equal terms.
    dps: { atkF: 80, atkP: 0.35, hpF: 1200, hpP: 0.1, defF: 60, defP: 0.1, critRate: 0.2, critDmg: 0.3, acc: 40, res: 20, ench: 20, haste: 0 },
    poison: { atkF: 80, atkP: 0.3, hpF: 1200, hpP: 0.1, defF: 60, defP: 0.1, critRate: 0.15, critDmg: 0.2, acc: 60, res: 20, ench: 80, haste: 0 },
    support: { atkF: 60, atkP: 0.2, hpF: 1500, hpP: 0.25, defF: 80, defP: 0.2, critRate: 0.05, critDmg: 0.1, acc: 60, res: 40, ench: 60, haste: 30 },
    tank: { atkF: 40, atkP: 0.1, hpF: 1800, hpP: 0.35, defF: 100, defP: 0.3, critRate: 0.05, critDmg: 0.1, acc: 60, res: 60, ench: 30, haste: 30 }
  };
  function defaultProfile(h) {
    if (h.sc === 'Support') return /Warrior|Guard|Death Knight/.test(h.cl || '') ? 'tank' : 'support';
    if (h.sc === 'Poison' || h.sc === 'Corrosion') return 'poison';
    return 'dps';
  }

  // Full static stats of one hero spec, before battle buffs.
  // spec: {hero, level, stars, insp, gear: profileName | {..}, artifact: {name, level, tier}, sets: [names], stats: {...override}}
  function buildStats(spec) {
    var h = hero(spec.hero);
    var lvl = spec.level || 60;
    var n = nakedStats(h, lvl, spec.stars);
    var g = typeof spec.gear === 'string' ? GEAR_PROFILES[spec.gear] : spec.gear;
    if (!g) g = GEAR_PROFILES[defaultProfile(h)];
    var s = {
      hpB: n.hp, atkB: n.atk, defB: n.def,
      hpF: g.hpF || 0, atkF: g.atkF || 0, defF: g.defF || 0,
      hpP: g.hpP || 0, atkP: g.atkP || 0, defP: g.defP || 0,
      critRate: n.critRate + (g.critRate || 0), critDmg: n.critDmg + (g.critDmg || 0),
      acc: n.acc + (g.acc || 0), res: n.res + (g.res || 0), ench: n.ench + (g.ench || 0),
      haste: n.haste + (g.haste || 0), atkSpd: n.atkSpd + (g.atkSpd || 0),
      dmgBonus: g.dmgBonus || 0, dmgRed: g.dmgRed || 0, healP: g.healP || 0, shieldP: g.shieldP || 0,
      statusChance: 0, defIgnore: 0, resIgnore: 0
    };
    var insp = spec.insp || 0;
    for (var i = 0; i < Math.min(insp, 5); i++) {
      var st = (h.insp[i] && h.insp[i].stats) || {};
      for (var k in st) addStat(s, k, st[k]);
    }
    applySkillLevels(s, spec.skills);
    var notes = [];
    if (spec.artifact) {
      var a = artifactByName(spec.artifact.name || spec.artifact);
      if (a) {
        var al = clamp((spec.artifact.level || 20) - 1, 0, 19);
        a.stats.forEach(function (p) { addStat(s, p[0], p[1][al]); });
      } else notes.push('unknown artifact ' + (spec.artifact.name || spec.artifact));
    }
    (spec.sets || []).forEach(function (sn) {
      var set = setByName(sn.name || sn);
      if (!set) { notes.push('unknown set ' + (sn.name || sn)); return; }
      if (setPieces(set, sn) >= 2) for (var k in set.bonus2) addStat(s, k, set.bonus2[k]);
    });
    if (spec.stats) {
      // Measured hero-screen totals replace the model for the typed stats only
      // (they already contain gear, set 2-piece stats and artifact main stats,
      // so nothing is added twice; untyped stats keep the model's gear). ATK,
      // HP and DEF keep the hero's base so battle % buffs and auras scale off
      // the base as in game; the rest of the typed total becomes flat bonus.
      var o = spec.stats;
      if (o.atk != null) { s.atkF = o.atk - s.atkB; s.atkP = 0; }
      if (o.hp != null) { s.hpF = o.hp - s.hpB; s.hpP = 0; }
      if (o.def != null) { s.defF = o.def - s.defB; s.defP = 0; }
      ['critRate', 'critDmg', 'acc', 'res', 'ench', 'haste', 'atkSpd'].forEach(function (k) { if (o[k] != null) s[k] = o[k]; });
    }
    return { s: s, h: h, notes: notes };
  }
  // Skill levels (Battle and Ultimate, 1-5; passives have no level). Skill
  // texts in the data are the level-1 text (Garrika's config text matches the
  // level-1 tooltip: 75% chance, which level 4 raises by 25). Each level adds
  // the step below on top. Per-hero paths differ in game; this is the common
  // pattern (tooltips: Garrika 2023 via ayumilove; Reborn tooltip 2025-05-12:
  // later levels add damage and cut recharge by 3 s). conf: reported pattern.
  var SKILL_LV = {
    max: 5,
    battle: [null, null, { dmg: 0.05 }, { dmg: 0.10 }, { chance: 0.25 }, { cd: 3 }],
    ult: [null, null, { dmg: 0.10 }, { chance: 0.25 }, { cd: 3 }, { dmg: 0.10 }]
  };
  function applySkillLevels(s, lv) {
    if (!lv) return;
    ['battle', 'ult'].forEach(function (slot) {
      var L = clamp(Math.round(+lv[slot] || 1), 1, SKILL_LV.max);
      for (var i = 2; i <= L; i++) {
        var st = SKILL_LV[slot][i];
        if (st.dmg) s['dmgBonus_' + slot] = (s['dmgBonus_' + slot] || 0) + st.dmg;
        if (st.chance) s['statusChance_' + slot] = (s['statusChance_' + slot] || 0) + st.chance;
        if (st.cd) s['cdCut_' + slot] = (s['cdCut_' + slot] || 0) + st.cd;
      }
    });
  }
  // Reborn gear: 4 slots; Legendary 2-piece stats + 3-piece effect, Mythic
  // 1-piece effect, Epic/Rare 2-piece stats (game config, gear-sets.json).
  function setPieces(set, sn) { return sn.pieces || (set.r === 'Mythic' ? 1 : set.r === 'Legendary' ? 3 : 2); }
  function setNeed(set) { return set.r === 'Mythic' ? 1 : 3; }
  function addStat(s, k, v) {
    switch (k) {
      case 'atk': s.atkF += v; break;
      case 'hp': s.hpF += v; break;
      case 'def': s.defF += v; break;
      case 'atkPct': s.atkP += v; break;
      case 'hpPct': s.hpP += v; break;
      case 'defPct': s.defP += v; break;
      default: s[k] = (s[k] || 0) + v;
    }
  }
  function finalStats(s) {
    return {
      atk: s.atkB * (1 + s.atkP) + s.atkF, hp: s.hpB * (1 + s.hpP) + s.hpF, def: s.defB * (1 + s.defP) + s.defF,
      critRate: s.critRate, critDmg: s.critDmg, acc: s.acc, res: s.res, ench: s.ench, haste: s.haste, atkSpd: s.atkSpd
    };
  }

  // ------------------------------------------------------------- statuses --
  // Names follow the game ("Defense Up II", "Attack Penalty II").
  // [stat, sign, kind, tier values I/II/III]; kind 'pct' adds the value,
  // 'pctStat' adds value x the unit's own base stat, 'flat' adds RULES.flatTier x tier.
  // Values from the official S1 status table (wiki article 103); 'Attack Up'
  // is always written with its own % in skill texts, 20% is only a fallback.
  var STAT_STATUS = {
    'Attack Up': ['atkP', 1, 'pct', [0.2, 0.4, 0.6]], 'Attack Penalty': ['atkP', -1, 'pct', [0.25, 0.5, 0.75]],
    'Defense Up': ['defP', 1, 'pct', [0.3, 0.6, 0.9]], 'Defense Penalty': ['defP', -1, 'pct', [0.25, 0.5, 0.75]],
    'Accuracy Up': ['acc', 1, 'pctStat', [0.25, 0.5, 0.75]], 'Accuracy Penalty': ['acc', -1, 'pctStat', [0.25, 0.5, 0.75]],
    'Resistance Up': ['res', 1, 'flat'], 'Resistance Penalty': ['res', -1, 'flat'],
    'Attack Speed Up': ['atkSpd', 1, 'pct', [0.25, 0.5, 0.75]], 'Attack Speed Penalty': ['atkSpd', -1, 'pct', [0.25, 0.5, 0.75]],
    'Crit Rate Up': ['critRate', 1, 'pct', [0.2, 0.2, 0.2]], 'Crit Damage Up': ['critDmg', 1, 'pct', [0.3, 0.3, 0.3]],
    'Enlightenment Up': ['ench', 1, 'pctStat', [0.2, 0.2, 0.2]],
    'Received Healing Up': ['healRecv', 1, 'pct', [0.3, 0.3, 0.3]], 'Healing Penalty': ['healRecv', -1, 'pct', [0.5, 0.5, 0.5]],
    'Healing Reduction': ['healRecv', -1, 'pct', [0.5, 0.5, 0.5]],
    'Damage Reduction': ['dmgRed', 1, 'pct', [0.3, 0.3, 0.3]]
  };
  // 1 = cannot act, 0 = control that still lets the unit act.
  var CONTROL = { 'Frozen': 1, 'Stunned': 1, 'Knocked Up': 1, 'Silenced': 0, 'Taunt': 0, 'Sleep': 1, 'Petrified': 1, 'Fear': 1, 'Charmed': 1, 'Devoured': 1 };
  // Controls during which the unit gains no ultimate energy (official S1 status table).
  var NO_ENERGY = { 'Frozen': 1, 'Stunned': 1, 'Knocked Up': 1, 'Sleep': 1, 'Petrified': 1, 'Devoured': 1 };
  var DEBUFF_OTHER = { 'Cold': 1, 'Frost': 1, 'Poison': 1, 'Burn': 1, 'Bleeding': 1, 'Buff Prohibition': 1, 'Recharging Speed Penalty': 1, 'Healing Prohibition': 1, 'Healing Reduction': 1, 'Vulnerable': 1, 'Static': 1, 'Blind': 1 };
  var STACKING = { 'Poison': 'poisonMaxStacks', 'Burn': 20, 'Bleeding': 10, 'Static': 10, 'Frost': 'frostStacks' };
  function parseStatus(name) {
    var m = /^(.*?)\s+(I{1,3})$/.exec(name);
    var base = m ? m[1] : name, tier = m ? m[2].length : 0;
    var kind = 'buff';
    if (CONTROL.hasOwnProperty(base)) kind = 'control';
    else if (DEBUFF_OTHER[base] || /Penalty|Prohibition/.test(base)) kind = 'debuff';
    return { base: base, tier: tier, kind: kind };
  }

  // --------------------------------------------------------------- battle --
  function Battle(cfg) {
    this.R = cfg.rules;
    this.rand = makeRng(cfg.seed || 1);
    this.t = 0;
    this.units = [];
    this.listeners = {};
    this.queue = [];
    this.log = cfg.log ? [] : null;
    this.mode = cfg.mode || 'pve';
    this.timeline = [];
    this.tlStep = cfg.timelineStep || 0;
    this.waves = cfg.waves || null;
    this.waveIdx = 0;
    this.result = null;
    this.uidSeq = 0;
    // Replay trace (one battle): frames every trace.step s plus an event list.
    this.trace = cfg.trace ? { step: cfg.trace.step || 0.2, frames: [], ev: [] } : null;
    // Team HP fraction and heroes alive, sampled every second (survival curves).
    this.curve = [];
  }
  var B = Battle.prototype;

  B.chance = function (p) { return p >= 1 || this.rand() < p; };
  B.tr = function (type, d) {
    if (!this.trace || this.trace.ev.length > 30000) return;
    d.t = Math.round(this.t * 100) / 100; d.k = type;
    this.trace.ev.push(d);
  };
  B.note = function (msg) { if (this.log && this.log.length < 4000) this.log.push(this.t.toFixed(2) + ' ' + msg); };

  B.on = function (owner, ev, fn) { (this.listeners[ev] = this.listeners[ev] || []).push({ owner: owner, fn: fn }); };
  B.emit = function (ev, p) {
    var L = this.listeners[ev];
    if (!L) return;
    for (var i = 0; i < L.length; i++) {
      var o = L[i].owner;
      if (o && !o.alive && !L[i].always) continue;
      L[i].fn(p);
    }
  };
  B.after = function (delay, fn, owner) { this.queue.push({ at: this.t + delay, fn: fn, owner: owner }); };
  B.every = function (period, duration, fn, owner, immediate) {
    var self = this, n = Math.round(duration / period);
    for (var i = immediate ? 0 : 1; i <= n; i++) self.after(i * period, fn, owner);
  };

  // ---- unit creation
  B.addUnit = function (side, spec, extra) {
    var built = spec.custom ? spec.custom : buildStats(spec);
    // Preset enemies: boss strength rule scales their ATK (fresh copy per battle).
    if (spec.custom && side === 'B' && this.R.bossPower !== 1) {
      built = { h: built.h, notes: built.notes, s: Object.assign({}, built.s, { atkB: built.s.atkB * this.R.bossPower }) };
    }
    var u = {
      uid: ++this.uidSeq, side: side, spec: spec, h: built.h, name: (built.h && built.h.n) || spec.name,
      heroId: built.h ? built.h.id : null, s: built.s, alive: true, isBoss: !!spec.isBoss,
      melee: built.h ? built.h.melee : !!spec.melee, sts: [], shields: [], flags: {}, energy: 0,
      cdBattle: this.R.battleFirst, basicT: 0.2 + 0.3 * this.rand(), castUntil: 0, insp: spec.insp || 0,
      rec: { dmg: 0, by: {}, heal: 0, shield: 0, taken: 0, takenHp: 0, absorbed: 0, deathAt: null, ults: 0, battles: 0, basics: 0, dTry: 0, dLand: 0, dResisted: 0, minHp: 1, takenBy: {} }
    };
    if (extra) for (var k in extra) u[k] = extra[k];
    var fs = finalStats(u.s);
    u.maxHp0 = fs.hp;
    u.hp = fs.hp;
    u.kit = spec.kit || KITS[u.heroId] || autoKit(u.h);
    u.notes = built.notes;
    // Energy is time-based: start so the first ultimate comes at ultFirst (0 haste).
    var full = this.ultFull(u), first = u.kit.ultFirst != null ? u.kit.ultFirst : this.timing(u, 'uf') || this.R.ultFirst;
    u.energy = this.R.ultMax * clamp(1 - first / full, 0, 1);
    var bf = u.kit.battleFirst != null ? u.kit.battleFirst : this.timing(u, 'bf');
    if (bf != null) u.cdBattle = bf;
    this.units.push(u);
    return u;
  };

  // ---- stat reads (static + status modifiers)
  B.mod = function (u, key) {
    var v = 0, R = this.R;
    for (var i = 0; i < u.sts.length; i++) {
      var st = u.sts[i];
      if (st.mods && st.mods[key] != null) v += st.mods[key] * (st.stacks ? st.stacks.length : 1);
      var ss = STAT_STATUS[st.base];
      if (ss && ss[0] === key) {
        var val = st.value != null ? st.value : this.tierValue(st.base, st.tier);
        if (ss[2] === 'pctStat' && st.value == null) val *= u.s[key] || 0;
        v += ss[1] * val;
      }
    }
    return v;
  };
  // Value of an untyped tier of a stat status (no % written in the text).
  B.tierValue = function (base, tier) {
    var ss = STAT_STATUS[base], t = clamp(tier || 1, 1, 3);
    if (!ss) return 0;
    if (ss[2] === 'flat') return this.R.flatTier * t;
    return ss[3][t - 1] * this.R.tierScale;
  };
  B.atk = function (u) { return Math.max(0, u.s.atkB * (1 + u.s.atkP + this.mod(u, 'atkP')) + u.s.atkF + this.mod(u, 'atkF')); };
  B.def = function (u) { return Math.max(0, u.s.defB * (1 + u.s.defP + this.mod(u, 'defP')) + u.s.defF + this.mod(u, 'defF')); };
  B.maxHp = function (u) { return Math.max(1, u.maxHp0 + this.mod(u, 'hpF') - (u.maxHpCut || 0)); };
  B.stat = function (u, k) { return (u.s[k] || 0) + this.mod(u, k); };
  B.has = function (u, base) {
    for (var i = 0; i < u.sts.length; i++) if (u.sts[i].base === base) return u.sts[i];
    return null;
  };
  B.stacks = function (u, base) { var s = this.has(u, base); return s ? (s.stacks ? s.stacks.length : 1) : 0; };
  B.controlled = function (u) {
    for (var i = 0; i < u.sts.length; i++) if (CONTROL[u.sts[i].base] === 1) return true;
    return false;
  };
  B.countDebuffs = function (u) {
    var n = 0;
    for (var i = 0; i < u.sts.length; i++) if (u.sts[i].kind !== 'buff') n++;
    return n;
  };

  // ---- targeting
  B.allies = function (u, includeSelf) {
    var self = this;
    return this.units.filter(function (x) { return x.side === u.side && x.alive && (includeSelf !== false || x !== u); });
  };
  B.enemies = function (u) {
    return this.units.filter(function (x) { return x.side !== u.side && x.alive; });
  };
  B.targetable = function (u) {
    var self = this;
    var e = this.enemies(u).filter(function (x) { return !self.has(x, 'Invisibility'); });
    return e.length ? e : this.enemies(u);
  };
  // Main target of u: taunter, else its current target if alive, else a new pick.
  B.target = function (u) {
    var taunt = this.has(u, 'Taunt');
    if (taunt && taunt.src && taunt.src.alive) return taunt.src;
    if (u.tgt && u.tgt.alive && !this.has(u.tgt, 'Invisibility')) return u.tgt;
    var e = this.targetable(u);
    if (!e.length) return null;
    var pick;
    if (u.side === 'B') {
      // Enemies go for the front line first.
      var front = e.filter(function (x) { return x.melee; });
      var pool = front.length ? front : e;
      pick = pool[Math.floor(this.rand() * pool.length)];
    } else {
      // Allies focus the boss, otherwise the first alive enemy.
      pick = e.filter(function (x) { return x.isBoss; })[0] || e[0];
    }
    u.tgt = pick;
    return pick;
  };
  B.area = function (u, center, n) {
    n = n || this.R.areaSize;
    var e = this.enemies(u);
    center = center || this.target(u);
    if (!center) return [];
    var rest = e.filter(function (x) { return x !== center; });
    for (var i = rest.length - 1; i > 0; i--) { var j = Math.floor(this.rand() * (i + 1)); var tmp = rest[i]; rest[i] = rest[j]; rest[j] = tmp; }
    return [center].concat(rest.slice(0, n - 1));
  };
  B.lowestHp = function (list) {
    var best = null;
    for (var i = 0; i < list.length; i++) if (!best || list[i].hp / this.maxHp(list[i]) < best.hp / this.maxHp(best)) best = list[i];
    return best;
  };
  B.lowestCurHp = function (list) {
    var best = null;
    for (var i = 0; i < list.length; i++) if (!best || list[i].hp < best.hp) best = list[i];
    return best;
  };

  // ---- scaling: coef keys atk, ench, hp (own max HP), def, thp (target max HP)
  B.scale = function (src, tgt, coef) {
    var v = 0;
    if (coef.atk) v += coef.atk * this.atk(src);
    if (coef.ench) v += coef.ench * this.stat(src, 'ench');
    if (coef.hp) v += coef.hp * this.maxHp(src);
    if (coef.def) v += coef.def * this.def(src);
    if (coef.thp && tgt) v += coef.thp * this.maxHp(tgt);
    if (coef.flat) v += coef.flat;
    return v;
  };

  // ---- damage
  // o: {el, tag, noCrit, trueDmg, defIgnore, bonus, apply: [[status, chance, dur, extra]], skill}
  B.hit = function (src, tgt, coef, o) {
    o = o || {};
    if (!tgt || !tgt.alive) return { amount: 0 };
    var R = this.R;
    var raw = typeof coef === 'number' ? coef : this.scale(src, tgt, coef);
    var ctx = { src: src, tgt: tgt, o: o, bonus: (o.bonus || 0) + this.stat(src, 'dmgBonus') + (o.tag === 'battle' || o.tag === 'ult' ? this.stat(src, 'dmgBonus_' + o.tag) : 0), defIgnore: (o.defIgnore || 0) + this.stat(src, 'defIgnore'),
      critRate: this.stat(src, 'critRate') + (o.critRate || 0), critDmg: this.stat(src, 'critDmg'), vuln: this.stat(tgt, 'vuln'), raw: raw, critExtra: 0 };
    this.emit('modifyDamage', ctx);
    if (this.has(tgt, 'Invincibility')) { this.emit('hit', { src: src, tgt: tgt, o: o, amount: 0, crit: false }); return { amount: 0 }; }
    var isDot = o.tag === 'dot' || o.el === 'Derivative' || o.derivative;
    var crit = !o.noCrit && (!isDot || R.dotCanCrit) && this.rand() < ctx.critRate;
    var m = (1 + ctx.bonus) * (1 + ctx.vuln) * (1 - clamp(this.stat(tgt, 'dmgRed'), 0, R.dmgRedCap));
    if (isDot && !o.trueDmg) m *= 1 + Math.max(0, this.stat(src, 'ench')) / R.derivEnch;
    if (this.has(tgt, 'Frozen')) m *= 1 - R.frozenDmgTaken;
    if (crit) m *= (1 + ctx.critDmg * (1 - this.stat(tgt, 'critDmgTakenRed'))) * (1 + ctx.critExtra);
    if (!o.trueDmg && !(o.el === 'Derivative' && R.derivativeIgnoresDef)) {
      var d = this.def(tgt) * (1 - clamp(ctx.defIgnore, 0, 1));
      m *= R.defK / (d + R.defK);
    }
    var amount = ctx.raw * m;
    var dealt = this.damage(tgt, amount, src, o);
    var tag = o.tag || 'skill';
    src.rec.dmg += dealt;
    src.rec.by[tag] = (src.rec.by[tag] || 0) + dealt;
    if (R.energyPerHitTaken && !this.noEnergy(tgt)) tgt.energy = Math.min(R.ultMax, tgt.energy + R.energyPerHitTaken * this.energyMult(tgt));
    var ev = { src: src, tgt: tgt, o: o, amount: dealt, crit: crit };
    if (this.trace && dealt > 0) this.tr('d', { s: src.uid, g: tgt.uid, a: Math.round(dealt), c: crit ? 1 : 0, g2: tag });
    if (!o.quiet) this.emit('hit', ev);
    if (crit && !o.quiet) this.emit('crit', ev);
    if (o.apply) for (var i = 0; i < o.apply.length; i++) {
      var a = o.apply[i];
      if (tgt.alive || a[0] === 'Poison') this.apply(src, tgt, a[0], a[1], a[2], a[3]);
    }
    return ev;
  };
  // Raw HP loss after shields and death checks; returns HP actually removed.
  B.damage = function (tgt, amount, src, o) {
    if (!tgt.alive || amount <= 0) return 0;
    var ctx = { tgt: tgt, src: src, amount: amount, o: o || {} };
    this.emit('beforeDamaged', ctx);
    amount = ctx.amount;
    for (var i = 0; i < tgt.shields.length && amount > 0; i++) {
      var sh = tgt.shields[i], take = Math.min(sh.amt, amount);
      sh.amt -= take; amount -= take; tgt.rec.absorbed += take;
      if (sh.src && sh.src.rec) sh.src.rec.shieldUsed = (sh.src.rec.shieldUsed || 0) + take; // the game books this as Healing
    }
    tgt.shields = tgt.shields.filter(function (x) { return x.amt > 0.01; });
    var floor = this.has(tgt, 'Immortality') ? 1 : 0;
    var before = tgt.hp;
    tgt.hp = Math.max(floor, tgt.hp - amount);
    if (tgt.hp <= 0) {
      var f = { tgt: tgt, src: src, saved: false };
      this.emit('fatal', f);
      if (f.saved) tgt.hp = Math.max(tgt.hp, 1);
    }
    var lost = before - tgt.hp;
    tgt.rec.taken += lost + (ctx.amount - amount);
    tgt.rec.takenHp += lost; // what the game's Statistics screen calls Damage Taken (shields excluded)
    if (src) { var sk = (o && o.tag) || 'skill'; tgt.rec.takenBy[sk] = (tgt.rec.takenBy[sk] || 0) + lost + (ctx.amount - amount); }
    var frac = tgt.hp / this.maxHp(tgt);
    if (frac < tgt.rec.minHp) tgt.rec.minHp = frac;
    ctx.hpLost = lost;
    if (tgt.hp <= 0) this.kill(tgt, src);
    else this.emit('damaged', { tgt: tgt, src: src, amount: lost, o: ctx.o });
    if (src && lost > 0) this.emit('hpLost', { tgt: tgt, src: src, amount: lost, o: ctx.o });
    return lost + (ctx.amount - amount);
  };
  B.kill = function (u, src) {
    if (!u.alive) return;
    u.alive = false; u.hp = 0; u.rec.deathAt = this.t;
    u.sts = []; u.shields = [];
    this.note(u.name + ' dies');
    this.tr('x', { g: u.uid, s: src ? src.uid : 0 });
    this.emit('death', { tgt: u, src: src });
    if (src) this.emit('kill', { src: src, tgt: u });
  };
  B.heal = function (src, tgt, coef, o) {
    o = o || {};
    if (!tgt || !tgt.alive || this.has(tgt, 'Healing Prohibition')) return 0;
    var amt = (typeof coef === 'number' ? coef : this.scale(src, tgt, coef)) * (1 + this.stat(src, 'healP') + (o.bonus || 0)) * (1 + this.stat(tgt, 'healRecv'));
    var ctx = { src: src, tgt: tgt, amount: amt, o: o };
    this.emit('modifyHeal', ctx);
    var mh = this.maxHp(tgt), eff = Math.min(ctx.amount, mh - tgt.hp);
    tgt.hp += eff;
    src.rec.heal += eff;
    if (this.trace && eff > 0.5) this.tr('h', { s: src.uid, g: tgt.uid, a: Math.round(eff) });
    this.emit('healed', { src: src, tgt: tgt, amount: eff, o: o });
    return eff;
  };
  B.shield = function (src, tgt, coef, dur, o) {
    o = o || {};
    if (!tgt || !tgt.alive) return 0;
    var amt = (typeof coef === 'number' ? coef : this.scale(src, tgt, coef)) * (1 + this.stat(src, 'shieldP') + (o.bonus || 0));
    dur = dur * (1 + this.stat(src, 'shieldDur'));
    var sh = { amt: amt, until: this.t + dur, src: src };
    tgt.shields.push(sh);
    src.rec.shield += amt;
    if (this.trace && amt > 0.5) this.tr('s', { s: src.uid, g: tgt.uid, a: Math.round(amt) });
    this.emit('shielded', { src: src, tgt: tgt, amount: amt, o: o });
    return amt;
  };
  // Recharge speed: Skill Haste, then Recharging Speed Penalty / Up statuses.
  B.energyMult = function (u) { return this.has(u, 'Recharging Speed Penalty') ? this.R.rechargePenalty : 1; };
  B.rechargeRate = function (u) {
    return (1 + Math.max(0, this.stat(u, 'haste')) * this.R.hastePerPoint) * this.energyMult(u) * (1 + this.stat(u, 'rechargeUp'));
  };
  B.noEnergy = function (u) {
    for (var i = 0; i < u.sts.length; i++) if (NO_ENERGY[u.sts[i].base]) return true;
    return false;
  };
  // Per-hero charge time: kit, then the hero timing table, then the default rule.
  B.timing = function (u, key) {
    var tm = this.R.heroTiming && u.h && u.h.tm;
    if (!tm) return null;
    var v = this.R.scrolls === 'none' ? tm[key + 'B'] : tm[key];
    return v == null ? tm[key] == null ? null : tm[key] : v;
  };
  B.ultFull = function (u) { return Math.max(4, ((u.kit && u.kit.ultFull) || this.timing(u, 'uc') || this.R.ultFull) - this.stat(u, 'cdCut_ult')); };
  // Final chance that a hostile status lands: skill chance (+ additive chance
  // bonuses, capped at 100%) x the ACC vs RES curve.
  B.landChance = function (src, tgt, chance, skill, noRes) {
    var c = Math.min(1, (chance == null ? 1 : chance) + this.stat(src, 'statusChance') + (skill ? this.stat(src, 'statusChance_' + skill) : 0));
    if (noRes) return c;
    var diff = this.stat(src, 'acc') - this.stat(tgt, 'res') * (1 - clamp(this.stat(src, 'resIgnore'), 0, 1));
    return c * accCurve(diff + this.R.accShift, this.R.landCap);
  };
  B.energy = function (u, v) { u.energy = clamp(u.energy + (v > 0 ? v * this.energyMult(u) : v), 0, this.R.ultMax); };

  // ---- statuses
  // extra: {value, stacks, ignoreRes, data, mods, skill, undispellable}
  B.apply = function (src, tgt, name, chance, dur, extra) {
    extra = extra || {};
    if (!tgt || !tgt.alive) return false;
    var p = parseStatus(name), R = this.R;
    var hostile = p.kind !== 'buff';
    if (hostile) {
      if (tgt.side === src.side) return false;
      if (this.has(tgt, 'Debuff Immunity') || (p.kind === 'control' && (this.has(tgt, 'Control Immunity') || tgt.controlImmune))) return false;
      src.rec.dTry++;
      if (!this.chance(this.landChance(src, tgt, chance, extra.skill, extra.ignoreRes))) {
        // A miss: either the skill's own chance failed or the target resisted.
        tgt.rec.dResisted++;
        this.tr('m', { s: src.uid, g: tgt.uid, n: name });
        this.emit('resisted', { src: src, tgt: tgt, name: name });
        return false;
      }
      src.rec.dLand++;
      var dctx = { src: src, tgt: tgt, name: name, base: p.base, dur: dur };
      this.emit('debuffDuration', dctx);
      dur = dctx.dur;
      if (p.kind === 'control' && tgt.isBoss) { dur *= R.bossControlMult; if (dur <= 0) return false; }
    } else {
      if (this.has(tgt, 'Buff Prohibition')) return false;
      if (chance != null && chance < 1 && !this.chance(Math.min(1, chance + this.stat(src, 'statusChance')))) return false;
    }
    if (dur <= 0) return false;
    var until = this.t + dur, ex = this.has(tgt, p.base);
    var maxStacks = STACKING[p.base];
    if (typeof maxStacks === 'string') maxStacks = R[maxStacks];
    var burst = false;
    var already = !!ex;
    if (maxStacks) {
      if (!ex) { ex = { base: p.base, name: p.base, kind: p.kind, tier: 0, stacks: [], src: src }; tgt.sts.push(ex); }
      var n = extra.stacks || 1;
      for (var i = 0; i < n; i++) {
        if (ex.stacks.length >= maxStacks) ex.stacks.shift();
        ex.stacks.push({ until: until, src: src, pow: extra.value != null ? extra.value : this.atk(src) });
        if (p.base === 'Frost' && ex.stacks.length >= maxStacks) { burst = true; break; }
      }
    } else if (ex && ex.tier >= p.tier) {
      ex.until = Math.max(ex.until, until);
      if (p.tier === ex.tier) ex.src = src;
    } else {
      if (ex) tgt.sts.splice(tgt.sts.indexOf(ex), 1);
      ex = { base: p.base, name: name, kind: p.kind, tier: p.tier, until: until, src: src, value: extra.value, mods: extra.mods, data: extra.data, undispellable: !!extra.undispellable };
      tgt.sts.push(ex);
    }
    var ev = { src: src, tgt: tgt, name: name, base: p.base, kind: p.kind, already: already, skill: extra.skill };
    if (this.trace && !extra.quiet) this.tr('b', { s: src.uid, g: tgt.uid, n: name, h: hostile ? 1 : 0 });
    this.emit('statusApplied', ev);
    if (hostile) this.emit('debuffApplied', ev);
    if (p.base === 'Taunt') tgt.tgt = src;
    if (burst) this.frostBurst(src, tgt, ex);
    return true;
  };
  // Reborn Frost: 5 stacks burst for [+3% Max HP] Cold damage (capped by the
  // hero's ATK, see frostBurstCap), then the stacks are used up. Frost bond
  // [2] freezes for 5 s on the burst, [3] adds Cold for 5 s.
  B.frostBurst = function (src, tgt, st) {
    var R = this.R;
    this.remove(tgt, 'Frost');
    var amt = Math.min(R.frostBurst * this.maxHp(tgt), R.frostBurstCap * this.atk(src));
    this.hit(src, tgt, amt, { el: 'Cold', tag: 'passive', noCrit: true, frostBurst: true });
    var bond = this.bondCount && this.bondCount[src.side] && this.bondCount[src.side].Frost || 0;
    if (R.bonds && bond >= 2 && tgt.alive) this.apply(src, tgt, 'Frozen', 1, 5, { quiet: false });
    if (R.bonds && bond >= 3 && tgt.alive) this.apply(src, tgt, 'Cold', 1, 5);
    this.emit('frostBurst', { src: src, tgt: tgt });
  };
  B.remove = function (u, base) { u.sts = u.sts.filter(function (s) { return s.base !== base; }); };
  B.dispel = function (u, n, kind) {
    // kind: 'buff' removes buffs, 'debuff' removes debuffs and controls.
    var removed = 0;
    for (var i = u.sts.length - 1; i >= 0 && removed < n; i--) {
      var s = u.sts[i], isBuff = s.kind === 'buff';
      if ((kind === 'buff') === isBuff && !s.undispellable) { u.sts.splice(i, 1); removed++; }
    }
    if (kind === 'buff' && removed < n && u.shields.length && n >= 99) u.shields = [];
    return removed;
  };
  B.buff = function (src, tgt, name, dur, mods, extra) {
    extra = extra || {};
    extra.mods = mods;
    return this.apply(src, tgt, name, 1, dur, extra);
  };

  // ---- time
  B.tickStatuses = function () {
    var t = this.t, R = this.R, self = this;
    this.units.forEach(function (u) {
      if (!u.alive) return;
      for (var i = u.sts.length - 1; i >= 0; i--) {
        var s = u.sts[i];
        if (s.stacks) {
          s.stacks = s.stacks.filter(function (x) { return x.until > t; });
          if (!s.stacks.length) u.sts.splice(i, 1);
        } else if (s.until <= t) u.sts.splice(i, 1);
      }
      if (u.shields.length) u.shields = u.shields.filter(function (x) { return x.until > t; });
    });
    // DoT ticks once per second.
    if (Math.abs(t - Math.round(t)) < R.dt / 2 && t > 0.01) {
      this.units.forEach(function (u) {
        if (!u.alive) return;
        var p = self.has(u, 'Poison');
        if (p && p.stacks.length) {
          var bySrc = new Map();
          p.stacks.forEach(function (x) { bySrc.set(x.src, (bySrc.get(x.src) || 0) + x.pow * R.poisonPerStack); });
          bySrc.forEach(function (amt, src) { if (u.alive) self.hit(src, u, amt, { el: 'Poison', tag: 'dot', dotOf: 'Poison' }); });
        }
        var bu = self.has(u, 'Burn');
        if (bu && bu.stacks.length) {
          var bs = new Map();
          bu.stacks.forEach(function (x) { bs.set(x.src, (bs.get(x.src) || 0) + x.pow * R.burnPerStack); });
          bs.forEach(function (amt, src) { if (u.alive) self.hit(src, u, amt, { el: 'Fire', tag: 'dot', dotOf: 'Burn' }); });
        }
        self.emit('second', { u: u });
      });
    }
  };

  B.basicInterval = function (u) {
    var af = (u.h && u.h.af) || u.af || 0.5;
    var spd = 1 + this.stat(u, 'atkSpd') - (this.has(u, 'Frost') ? this.R.frostAtkSpd : 0);
    return 1 / (af * Math.max(0.2, spd));
  };
  // Base recharge of the battle skill; the countdown runs at rechargeRate(u).
  B.battleCd = function (u) { return Math.max(2, ((u.kit && u.kit.battleCd) || this.timing(u, 'bc') || this.R.battleCd) - this.stat(u, 'cdCut_battle')); };

  B.act = function (u) {
    var R = this.R, k = u.kit;
    if (this.controlled(u) || this.t < u.castUntil) return;
    var silenced = this.has(u, 'Silenced');
    if (k.ult && !silenced && u.energy >= R.ultMax && (!k.ultReady || k.ultReady(u, this))) {
      u.energy = 0;
      u.rec.ults++;
      this.note(u.name + ' ult');
      this.tr('u', { s: u.uid });
      this.emit('cast', { src: u, slot: 'ult' });
      k.ult(u, this);
      this.emit('afterCast', { src: u, slot: 'ult' });
      u.castUntil = this.t + R.castUlt;
      return;
    }
    if (k.battle && !silenced && u.cdBattle <= 0) {
      u.cdBattle = this.battleCd(u);
      u.rec.battles++;
      this.tr('k', { s: u.uid });
      this.emit('cast', { src: u, slot: 'battle' });
      k.battle(u, this);
      this.emit('afterCast', { src: u, slot: 'battle' });
      u.castUntil = this.t + R.castBattle;
      return;
    }
    if (u.basicT <= 0) {
      var tgt = this.target(u);
      if (!tgt) return;
      u.basicT = this.basicInterval(u);
      u.rec.basics++;
      if (R.energyPerBasic) this.energy(u, R.energyPerBasic);
      if (k.basic) k.basic(u, this, tgt);
      else this.hit(u, tgt, { atk: R.basicMult }, { el: u.h ? u.h.el : null, tag: 'basic' });
      this.emit('basic', { src: u, tgt: tgt });
    }
  };

  B.sideAlive = function (side) {
    for (var i = 0; i < this.units.length; i++) if (this.units[i].side === side && this.units[i].alive) return true;
    return false;
  };

  B.run = function (maxTime) {
    var R = this.R, self = this;
    this.units.forEach(function (u) { if (u.kit.init) u.kit.init(u, self); });
    this.emit('battleStart', {});
    var nextTl = 0;
    while (this.t < maxTime - 1e-9) {
      this.t = Math.round((this.t + R.dt) * 1e6) / 1e6;
      var due = this.queue.filter(function (q) { return q.at <= self.t + 1e-9; });
      if (due.length) {
        this.queue = this.queue.filter(function (q) { return q.at > self.t + 1e-9; });
        due.sort(function (a, b) { return a.at - b.at; });
        due.forEach(function (q) { if (!q.owner || q.owner.alive) q.fn(); });
      }
      this.tickStatuses();
      for (var i = 0; i < this.units.length; i++) {
        var u = this.units[i];
        if (!u.alive) continue;
        var rate = this.rechargeRate(u);
        // Battle skill recharge does not run during cast animations (reported, Reddit 2024-04-13).
        if (this.t >= u.castUntil) u.cdBattle -= R.dt * rate;
        u.basicT -= R.dt;
        if (!this.noEnergy(u)) u.energy = Math.min(R.ultMax, u.energy + (R.energyRegen != null ? R.energyRegen : R.ultMax / this.ultFull(u)) * rate * R.dt);
        this.act(u);
      }
      if (this.t >= this.curve.length - 1e-9) this.curve.push(this.teamState());
      if (this.trace && this.t >= this.trace.frames.length * this.trace.step - 1e-9) this.trace.frames.push(this.frame());
      if (this.tlStep && this.t >= nextTl) {
        nextTl += this.tlStep;
        this.timeline.push(this.snapshot());
      }
      if (!this.sideAlive('B')) {
        if (this.waves && this.waveIdx < this.waves.length - 1) { this.spawnWave(++this.waveIdx); continue; }
        this.result = 'win'; break;
      }
      if (!this.sideAlive('A')) { this.result = 'loss'; break; }
    }
    if (!this.result) this.result = 'timeout';
    this.curve.push(this.teamState());
    if (this.trace) this.trace.frames.push(this.frame());
    return this;
  };
  B.spawnWave = function (idx) {
    var self = this, w = this.waves[idx];
    w.forEach(function (spec) { var u = self.addUnit('B', spec, spec.extra); if (u.kit.init) u.kit.init(u, self); });
    this.note('wave ' + (idx + 1));
  };
  // [team HP fraction (shields not counted), heroes alive] for side A.
  B.teamState = function () {
    var mh = 0, ch = 0, alive = 0;
    for (var i = 0; i < this.units.length; i++) {
      var u = this.units[i];
      if (u.side !== 'A') continue;
      mh += u.maxHp0; ch += Math.max(0, u.hp);
      if (u.alive) alive++;
    }
    return [mh ? ch / mh : 0, alive];
  };
  // Replay frame: per unit [uid, hp, maxHp, shield, energy 0-1, alive, statuses].
  B.frame = function () {
    var self = this, R = this.R;
    return { t: Math.round(this.t * 100) / 100, u: this.units.map(function (u) {
      var sh = 0; for (var i = 0; i < u.shields.length; i++) sh += u.shields[i].amt;
      var sts = u.alive ? u.sts.map(function (s) { return [s.name || s.base, s.kind === 'buff' ? 0 : s.kind === 'control' ? 2 : 1, s.stacks ? s.stacks.length : 0]; }) : [];
      return [u.uid, Math.round(Math.max(0, u.hp)), Math.round(self.maxHp(u)), Math.round(sh), Math.round(u.energy / R.ultMax * 100) / 100, u.alive ? 1 : 0, sts];
    }) };
  };
  B.snapshot = function () {
    var self = this;
    return { t: this.t, units: this.units.map(function (u) { return { uid: u.uid, hp: Math.round(u.hp), hpPct: u.alive ? u.hp / self.maxHp(u) : 0, dmg: Math.round(u.rec.dmg), energy: Math.round(u.energy) }; }) };
  };

  // ------------------------------------------------------------- auto kit --
  // Fallback for heroes without a hand-written kit: damage parts of each skill
  // read from the official text. Mark results "auto" (low confidence).
  function autoKit(h) {
    if (!h) return { conf: 'auto' };
    function skillFn(sk, tag) {
      if (!sk || !sk.auto) return null;
      var A = sk.auto, dmgParts = A.parts.filter(function (p) { return p.kind === 'dmg' && p.el !== 'Derivative'; });
      var heal = A.parts.filter(function (p) { return p.kind === 'heal'; })[0];
      var shield = A.parts.filter(function (p) { return p.kind === 'shield'; })[0];
      if (!dmgParts.length && !heal && !shield) return null;
      return function (u, b) {
        var reps = A.ticks || 1, hits = A.hits || 1;
        var fire = function () {
          var tgt = b.target(u); if (!tgt) return;
          var list = A.tgt === 'all' ? b.enemies(u) : A.tgt === 'area' ? b.area(u, tgt) : [tgt];
          dmgParts.forEach(function (p) {
            for (var i = 0; i < hits; i++) list.forEach(function (t) { b.hit(u, t, p.coef, { el: p.el, tag: tag }); });
          });
          if (heal) b.heal(u, b.lowestHp(b.allies(u)), heal.coef, { tag: tag });
          if (shield) b.allies(u).forEach(function (a) { b.shield(u, a, shield.coef, 10); });
        };
        if (reps > 1) b.every(1, reps, fire, u, true); else fire();
      };
    }
    return { conf: 'auto', battle: skillFn(h.sk.b, 'battle'), ult: skillFn(h.sk.u, 'ult') };
  }

  // -------------------------------------------------------------- captain --
  function captainFx(h) {
    if (!h || !h.cap || !h.cap.t) return null;
    var t = h.cap.t, m;
    var map = [[/Attack Speed by ([\d.]+)%/, 'atkSpd', 0.01], [/Attack by ([\d.]+)%/, 'atkP', 0.01], [/Defense by ([\d.]+)%/, 'defP', 0.01],
      [/HP by ([\d.]+)%/, 'hpP', 0.01], [/Accuracy by ([\d.]+)/, 'acc', 1], [/Resistance by ([\d.]+)/, 'res', 1],
      [/Enlightenment by ([\d.]+)/, 'ench', 1], [/Crit Rate by ([\d.]+)%/, 'critRate', 0.01], [/Crit Damage by ([\d.]+)%/, 'critDmg', 0.01]];
    for (var i = 0; i < map.length; i++) if ((m = map[i][0].exec(t))) return { stat: map[i][1], value: parseFloat(m[1]) * map[i][2], mode: h.cap.mode, text: t };
    return { stat: null, mode: h.cap.mode, text: t };
  }
  function captainApplies(cap, mode) {
    if (!cap || !cap.stat) return false;
    if (cap.mode === 'all') return true;
    if (cap.mode === 'arena') return mode === 'arena';
    if (cap.mode === 'dungeon') return /grave|goblin|dungeon|ruins|battlefield/.test(mode || '');
    if (cap.mode === 'fey_trial') return /fey|trial/.test(mode || '');
    return false;
  }

  // ---------------------------------------------------------------- bonds --
  // Bonds need 2+ heroes of one school: fx(b, schoolUnits, allUnits, count).
  // Only bonds with published numbers are coded (Steam overhaul preview
  // 2025-05-12 and the CN official post); Frost, Poison, Wild, Rally, Summon and
  // Dauntless bonds also need numbers that are not published.
  var BONDS = {};
  // Support: all allies get a 30 s shield of 10% [2] / 15% [3] of their max HP at battle start.
  // Frost: the 5-stack effects live in B.frostBurst; [3] also puts Cold on 1 enemy at start.
  BONDS.Frost = function (b, mine, all, n) {
    if (!b.R.bonds || n < 3) return;
    b.on(null, 'battleStart', function () {
      var e = b.enemies(mine[0]);
      if (e.length) b.apply(mine[0], e[0], 'Cold', 1, 5);
    });
  };
  BONDS.Support = function (b, mine, all, n) {
    if (!b.R.bonds) return;
    var pct = n >= 3 ? 0.15 : 0.1;
    b.on(null, 'battleStart', function () {
      all.forEach(function (u) { if (u.alive) b.shield(mine[0], u, pct * b.maxHp(u), 30, { tag: 'bond' }); });
    });
  };

  // ----------------------------------------------------------- the runner --
  function prepareSide(b, side, team, opts) {
    var units = team.map(function (spec, i) {
      var u = b.addUnit(side, spec);
      u.slot = i;
      return u;
    });
    // Captain: index opts.captain (default 0) on side A.
    var capIdx = side === 'A' ? (opts.captain == null ? 0 : opts.captain) : (opts.enemyCaptain == null ? 0 : opts.enemyCaptain);
    var capU = units[capIdx];
    if (capU && capU.h) {
      var cap = captainFx(capU.h);
      if (captainApplies(cap, opts.mode)) units.forEach(function (u) { addStat(u.s, cap.stat === 'atkP' ? 'atkPct' : cap.stat === 'defP' ? 'defPct' : cap.stat === 'hpP' ? 'hpPct' : cap.stat, cap.value); });
      b.captain = b.captain || {};
      b.captain[side] = { hero: capU.name, effect: cap ? cap.text : null, active: captainApplies(cap, opts.mode) };
    }
    units.forEach(function (u) { u.maxHp0 = finalStats(u.s).hp; u.hp = u.maxHp0; });
    // Bonds
    var schools = {};
    units.forEach(function (u) { if (u.h && u.h.sc) schools[u.h.sc] = (schools[u.h.sc] || 0) + 1; });
    b.bondCount = b.bondCount || {};
    b.bondCount[side] = schools;
    for (var sc in schools) if (schools[sc] >= 2 && BONDS[sc]) BONDS[sc](b, units.filter(function (u) { return u.h && u.h.sc === sc; }), units, schools[sc]);
    // Artifacts and sets with coded effects.
    units.forEach(function (u) {
      var sp = u.spec;
      if (sp.artifact) {
        var a = artifactByName(sp.artifact.name || sp.artifact);
        var fx = a && ARTIFACT_FX[a.n];
        u.artifact = a ? { name: a.n, coded: !!fx } : null;
        if (fx) fx(u, b, clamp(sp.artifact.tier == null ? 0 : sp.artifact.tier, 0, 5));
      }
      (sp.sets || []).forEach(function (sn) {
        var set = setByName(sn.name || sn);
        var fx = set && SET_FX[set.n];
        if (fx && setPieces(set, sn) >= setNeed(set)) fx(u, b);
      });
    });
    return units;
  }

  function enemySide(b, enemy, opts) {
    if (!enemy) enemy = { preset: 'dummy' };
    if (enemy.team) return prepareSide(b, 'B', enemy.team, { mode: opts.mode, enemyCaptain: enemy.captain });
    var preset = typeof enemy.preset === 'object' ? enemy.preset : BOSSES[enemy.preset || 'dummy'];
    if (!preset) throw new Error('DHSim: unknown enemy preset ' + enemy.preset);
    var made = preset.make(enemy, opts);
    if (made.waves) {
      b.waves = made.waves;
      b.waves[0].forEach(function (spec) { b.addUnit('B', spec, spec.extra); });
    } else made.units.forEach(function (spec) { b.addUnit('B', spec, spec.extra); });
    b.enemyInfo = { name: preset.name, conf: preset.conf, note: preset.note, skills: preset.skills || null, mechanics: preset.mechanics || null };
    return null;
  }

  function runOnce(opts, seed) {
    var R = defaultRules();
    if (opts.rules) for (var k in opts.rules) R[k] = opts.rules[k];
    var b = new Battle({ rules: R, seed: seed, log: opts.log, mode: opts.mode, timelineStep: opts.timelineStep, trace: opts.trace });
    var team = prepareSide(b, 'A', opts.team, opts);
    enemySide(b, opts.enemy, opts);
    var maxTime = opts.seconds || (opts.enemy && opts.enemy.seconds) || R.maxTime;
    b.maxTime = maxTime;
    b.seed = seed;
    b.run(maxTime);
    return b;
  }

  function summarize(battles, opts) {
    var n = battles.length, first = battles[0];
    var A = first.units.filter(function (u) { return u.side === 'A'; });
    var wins = 0, ttk = [], dps = [], hpLeft = [], deaths = 0, clear = [];
    var per = A.map(function (u) { return { slot: u.slot, heroId: u.heroId, name: u.name, kit: u.kit.conf || 'hand', damage: 0, by: {}, healing: 0, shielding: 0, shieldUsed: 0, taken: 0, takenHp: 0, deaths: 0, ults: 0, battles: 0, basics: 0,
      absorbed: 0, debuffTries: 0, debuffLanded: 0, resisted: 0, minHp: [], deathTimes: [], maxHp: Math.round(u.maxHp0), takenBy: {} }; });
    battles.forEach(function (b) {
      var aUnits = b.units.filter(function (u) { return u.side === 'A'; });
      var total = 0;
      aUnits.forEach(function (u, i) {
        var p = per[i];
        p.damage += u.rec.dmg; p.healing += u.rec.heal; p.shielding += u.rec.shield; p.shieldUsed += u.rec.shieldUsed || 0; p.taken += u.rec.taken; p.takenHp += u.rec.takenHp;
        p.ults += u.rec.ults; p.battles += u.rec.battles; p.basics += u.rec.basics;
        p.absorbed += u.rec.absorbed; p.debuffTries += u.rec.dTry; p.debuffLanded += u.rec.dLand; p.resisted += u.rec.dResisted;
        p.minHp.push(u.alive ? u.rec.minHp : 0);
        for (var k in u.rec.by) p.by[k] = (p.by[k] || 0) + u.rec.by[k];
        for (var k3 in u.rec.takenBy) p.takenBy[k3] = (p.takenBy[k3] || 0) + u.rec.takenBy[k3];
        if (!u.alive) { p.deaths++; deaths++; p.deathTimes.push(u.rec.deathAt); }
        total += u.rec.dmg;
      });
      if (b.result === 'win') { wins++; ttk.push(b.t); }
      var eh = 0, el = 0;
      b.units.forEach(function (u) { if (u.side === 'B' && u.maxHp0 < 1e11) { eh += u.maxHp0; el += u.maxHp0 - Math.max(0, u.hp); } });
      var progress = eh ? el / eh : 0;
      if (b.waves) progress = (b.waveIdx + progress) / b.waves.length;
      clear.push(b.result === 'win' ? 1 + (b.maxTime - b.t) / b.maxTime : progress);
      dps.push(total / Math.max(b.t, 1e-9));
      var mh = 0, ch = 0;
      aUnits.forEach(function (u) { mh += b.maxHp(u); ch += Math.max(0, u.hp); });
      hpLeft.push(ch / mh);
    });
    var totalDmg = per.reduce(function (s, p) { return s + p.damage; }, 0) || 1;
    per.forEach(function (p) {
      p.share = p.damage / totalDmg;
      p.damage /= n; p.healing /= n; p.shielding /= n; p.shieldUsed /= n; p.taken /= n; p.takenHp /= n; p.deathRate = p.deaths / n; delete p.deaths;
      p.ults /= n; p.battles /= n; p.basics /= n; p.absorbed /= n;
      for (var k in p.by) p.by[k] /= n;
      for (var k4 in p.takenBy) p.takenBy[k4] /= n;
      p.landRate = p.debuffTries ? p.debuffLanded / p.debuffTries : null;
      p.debuffTries /= n; p.debuffLanded /= n; p.resisted /= n;
      p.minHp = stats(p.minHp);
      p.deathTime = p.deathTimes.length ? stats(p.deathTimes) : null;
      delete p.deathTimes;
    });
    function stats(arr) {
      if (!arr.length) return null;
      var s = arr.slice().sort(function (a, b) { return a - b; });
      var mean = s.reduce(function (x, y) { return x + y; }, 0) / s.length;
      var sd = Math.sqrt(s.reduce(function (x, y) { return x + (y - mean) * (y - mean); }, 0) / s.length);
      return { mean: mean, sd: sd, p10: s[Math.floor(s.length * 0.1)], p50: s[Math.floor(s.length * 0.5)], p90: s[Math.min(s.length - 1, Math.floor(s.length * 0.9))] };
    }
    var used = {};
    var R = defaultRules();
    if (opts.rules) for (var k in opts.rules) R[k] = opts.rules[k];
    var assumed = [];
    for (var k2 in RULE_INFO) if (RULE_INFO[k2].conf === 'assumed') assumed.push(k2);
    var autoKits = per.filter(function (p) { return p.kit === 'auto'; }).map(function (p) { return p.name; });
    return {
      survival: survival(battles),
      runs: n, winRate: wins / n, ttk: stats(ttk), dps: stats(dps), teamHpLeft: stats(hpLeft), clear: stats(clear),
      perHero: per, captain: first.captain && first.captain.A, enemy: first.enemyInfo || null,
      timeline: opts.timelineStep ? first.timeline : undefined, log: opts.log ? first.log : undefined,
      confidence: {
        level: autoKits.length ? 'low' : 'medium',
        assumedRules: assumed, autoKits: autoKits,
        note: 'Hero stats and skill numbers are official data. Charge times, Skill Haste, Accuracy vs Resistance and status values come from sourced game rules (some from 2023-2024). The DEF curve, gear, cast times and boss stats are assumptions (see RULE_INFO). Use results to compare options, not as exact in-game numbers.'
      },
      notes: [].concat.apply([], first.units.map(function (u) { return u.notes || []; }))
    };
  }

  // Survival view across runs: outcome split, team HP band per second, heroes
  // alive per second, first death, incoming damage vs healing and shields.
  function survival(battles) {
    var n = battles.length, out = { win: 0, loss: 0, timeout: 0 }, len = 0;
    battles.forEach(function (b) { out[b.result]++; len = Math.max(len, b.curve.length); });
    var band = [], alive = [];
    for (var t = 0; t < len; t++) {
      var hp = [], al = 0, cnt = 0;
      battles.forEach(function (b) {
        // After a battle ends its last state carries on (a win keeps its HP, a wipe stays at 0).
        var c = b.curve[Math.min(t, b.curve.length - 1)];
        hp.push(c[0]); al += c[1]; cnt++;
      });
      hp.sort(function (a, b) { return a - b; });
      band.push([hp[Math.floor(cnt * 0.1)], hp[Math.floor(cnt * 0.5)], hp[Math.min(cnt - 1, Math.floor(cnt * 0.9))]]);
      alive.push(al / cnt);
    }
    var first = [], anyDeath = 0, taken = 0, healed = 0, absorbed = 0, secs = 0, wipeAt = [];
    battles.forEach(function (b) {
      var d = null;
      b.units.forEach(function (u) {
        if (u.side !== 'A') return;
        if (u.rec.deathAt != null && (d == null || u.rec.deathAt < d)) d = u.rec.deathAt;
        taken += u.rec.taken; absorbed += u.rec.absorbed;
        healed += u.rec.heal;
      });
      if (d != null) { anyDeath++; first.push(d); }
      if (b.result === 'loss') wipeAt.push(b.t);
      secs += b.t;
    });
    first.sort(function (a, b) { return a - b; });
    wipeAt.sort(function (a, b) { return a - b; });
    var runs = battles.map(function (b) {
      var A = b.units.filter(function (u) { return u.side === 'A'; });
      var hp = b.curve[b.curve.length - 1][0];
      return { seed: b.seed, result: b.result, t: Math.round(b.t * 10) / 10, hpLeft: hp, deaths: A.filter(function (u) { return !u.alive; }).length };
    });
    return {
      win: out.win / n, loss: out.loss / n, timeout: out.timeout / n,
      anyDeath: anyDeath / n, firstDeath: first.length ? first[Math.floor(first.length / 2)] : null,
      wipeAt: wipeAt.length ? wipeAt[Math.floor(wipeAt.length / 2)] : null,
      band: band, alive: alive,
      // Damage the enemy dealt to the team per second (before shields), and how much of it
      // healing plus shields covered.
      incomingDps: taken / Math.max(1e-9, secs), healPs: healed / Math.max(1e-9, secs), absorbPs: absorbed / Math.max(1e-9, secs),
      sustain: taken ? (healed + absorbed) / taken : null,
      runs: runs
    };
  }
  // Pick a representative run for the replay: 'typical' (most common outcome,
  // median time), 'worst' (a loss if any, else the lowest HP left), 'best'.
  function pickRun(res, which) {
    var runs = res.survival.runs.slice();
    if (which === 'worst') {
      runs.sort(function (a, b) { return (a.result === 'loss' ? 0 : 1) - (b.result === 'loss' ? 0 : 1) || a.hpLeft - b.hpLeft; });
      return runs[0];
    }
    if (which === 'best') {
      runs.sort(function (a, b) { return (b.result === 'win' ? 1 : 0) - (a.result === 'win' ? 1 : 0) || b.hpLeft - a.hpLeft || a.t - b.t; });
      return runs[0];
    }
    var cnt = {}; runs.forEach(function (r) { cnt[r.result] = (cnt[r.result] || 0) + 1; });
    var top = Object.keys(cnt).sort(function (a, b) { return cnt[b] - cnt[a]; })[0];
    var same = runs.filter(function (r) { return r.result === top; }).sort(function (a, b) { return a.t - b.t || a.hpLeft - b.hpLeft; });
    return same[Math.floor(same.length / 2)];
  }
  // Re-run one battle by seed with a full trace for the animated replay.
  function replay(opts, seed, step) {
    var b = runOnce(Object.assign({}, opts, { trace: { step: step || 0.2 } }), seed);
    return {
      seed: seed, result: b.result, t: b.t, maxTime: b.maxTime,
      units: b.units.map(function (u) {
        return { uid: u.uid, side: u.side, slot: u.slot, name: u.name, heroId: u.heroId, isBoss: u.isBoss, melee: !!u.melee, school: u.h ? u.h.sc : null, el: u.h ? u.h.el : null, maxHp: Math.round(u.maxHp0) };
      }),
      frames: b.trace.frames, events: b.trace.ev
    };
  }

  // ------------------------------------------------------------ public API --
  // opts: {team: [spec], enemy: {preset, ...} | {team: [spec]}, mode, seconds, runs, seed, rules, captain, timelineStep, log}
  function simulate(opts) {
    var runs = opts.runs || 100, seed = opts.seed || 12345, battles = [];
    for (var i = 0; i < runs; i++) battles.push(runOnce(opts, seed + i * 7919));
    return summarize(battles, opts);
  }
  function metric(res, objective) {
    switch (objective || 'dps') {
      case 'ttk': return res.ttk ? -res.ttk.mean : -1e9;
      case 'win': return res.winRate * 1000 + (res.dps ? res.dps.mean / 1e6 : 0);
      case 'survival': return res.teamHpLeft.mean;
      case 'clear': return res.clear.mean;
      default: return res.dps.mean;
    }
  }
  function compare(a, b, opts) {
    opts = opts || {};
    var base = { runs: opts.runs, seed: opts.seed || 777 };
    var ra = simulate(Object.assign({}, a, base)), rb = simulate(Object.assign({}, b, base));
    var ma = metric(ra, opts.objective), mb = metric(rb, opts.objective);
    return { a: ra, b: rb, objective: opts.objective || 'dps', delta: mb - ma, deltaPct: ma ? (mb - ma) / Math.abs(ma) : 0, better: mb > ma ? 'b' : 'a' };
  }
  // Try each candidate hero in team[slot]; candidate: heroId or full spec.
  function rankCandidates(opts, slot, pool, rk) {
    rk = rk || {};
    var out = pool.map(function (c) {
      var spec = typeof c === 'object' ? c : Object.assign({}, opts.team[slot], { hero: c, kit: undefined, artifact: rk.keepArtifact ? opts.team[slot].artifact : undefined, sets: rk.keepSets ? opts.team[slot].sets : undefined, stats: undefined, gear: undefined });
      var team = opts.team.slice();
      team[slot] = spec;
      var r = simulate(Object.assign({}, opts, { team: team, runs: rk.runs || opts.runs || 60, seed: rk.seed || 4242 }));
      return { hero: spec.hero, name: hero(spec.hero).n, score: metric(r, rk.objective), dps: r.dps.mean, winRate: r.winRate, ttk: r.ttk && r.ttk.mean, teamHpLeft: r.teamHpLeft.mean, kit: KITS[hero(spec.hero).id] ? 'hand' : 'auto', result: r };
    });
    out.sort(function (x, y) { return y.score - x.score; });
    return out;
  }
  // Marginal value of stat points for one hero (damage per unit of stat).
  function statWeights(opts, slot, sw) {
    sw = sw || {};
    var steps = sw.steps || { atkP: 0.1, critRate: 0.1, critDmg: 0.2, ench: 30, haste: 30, atkF: 100, acc: 30 };
    var runs = sw.runs || 120;
    var base = simulate(Object.assign({}, opts, { runs: runs, seed: 99 }));
    var who = base.perHero[slot];
    var res = {};
    Object.keys(steps).forEach(function (k) {
      var team = opts.team.slice();
      var spec = Object.assign({}, team[slot]);
      var built = buildStats(spec);
      var g = Object.assign({}, typeof spec.gear === 'string' ? GEAR_PROFILES[spec.gear] : spec.gear || GEAR_PROFILES[defaultProfile(built.h)]);
      g[k] = (g[k] || 0) + steps[k];
      spec.gear = g;
      team[slot] = spec;
      var r = simulate(Object.assign({}, opts, { team: team, runs: runs, seed: 99 }));
      res[k] = { step: steps[k], heroDmgPct: (r.perHero[slot].damage - who.damage) / Math.max(1, who.damage), teamDpsPct: (r.dps.mean - base.dps.mean) / base.dps.mean };
    });
    return { hero: who.name, base: base, weights: res };
  }
  // Re-run a comparison across the plausible range of every assumed rule and
  // report whether the winner changes.
  function sensitivity(a, b, opts) {
    opts = opts || {};
    var rows = [];
    var keys = opts.keys || Object.keys(RULE_INFO).filter(function (k) { return RULE_INFO[k].range && RULE_INFO[k].conf === 'assumed'; });
    var baseCmp = compare(a, b, opts);
    keys.forEach(function (k) {
      RULE_INFO[k].range.forEach(function (v) {
        var rules = {}; rules[k] = v;
        var c = compare(Object.assign({}, a, { rules: Object.assign({}, a.rules, rules) }), Object.assign({}, b, { rules: Object.assign({}, b.rules, rules) }), opts);
        rows.push({ rule: k, value: v, deltaPct: c.deltaPct, better: c.better });
      });
    });
    var flips = rows.filter(function (r) { return r.better !== baseCmp.better; });
    return { base: { deltaPct: baseCmp.deltaPct, better: baseCmp.better }, rows: rows, robust: flips.length === 0, flips: flips };
  }

  // Score spec variants for one slot, e.g. artifacts or sets:
  // variants = [{label, patch: {artifact: {...}}}]
  function rankVariants(opts, slot, variants, rk) {
    rk = rk || {};
    var out = variants.map(function (v) {
      var team = opts.team.slice();
      team[slot] = Object.assign({}, team[slot], v.patch);
      var r = simulate(Object.assign({}, opts, { team: team, runs: rk.runs || opts.runs || 80, seed: rk.seed || 5150 }));
      return { label: v.label, score: metric(r, rk.objective), heroDamage: r.perHero[slot].damage, dps: r.dps.mean, winRate: r.winRate, result: r };
    });
    out.sort(function (x, y) { return y.score - x.score; });
    return out;
  }
  // Local search over a roster: swap one slot at a time while the objective
  // improves. roster: list of hero specs (or ids). fixed: slots never changed.
  function optimizeTeam(opts, roster, ok) {
    ok = ok || {};
    var specOf = function (c) { return typeof c === 'object' ? c : { hero: c, level: (opts.team[0] && opts.team[0].level) || 60 }; };
    var team = opts.team.slice();
    var run = function (tm) { return simulate(Object.assign({}, opts, { team: tm, runs: ok.runs || 30, seed: ok.seed || 3131 })); };
    var best = run(team), bestScore = metric(best, ok.objective), steps = [];
    for (var round = 0; round < (ok.maxRounds || 4); round++) {
      var improved = false;
      for (var slot = 0; slot < team.length; slot++) {
        if (ok.fixed && ok.fixed.indexOf(slot) >= 0) continue;
        var inTeam = team.map(function (x) { return hero(x.hero).id; });
        roster.forEach(function (c) {
          var sp = specOf(c);
          if (inTeam.indexOf(hero(sp.hero).id) >= 0) return;
          var tm = team.slice(); tm[slot] = sp;
          var r = run(tm), sc = metric(r, ok.objective);
          if (sc > bestScore * (1 + (ok.minGain || 0.01))) {
            steps.push({ slot: slot, out: hero(team[slot].hero).n, in: hero(sp.hero).n, from: bestScore, to: sc });
            team = tm; best = r; bestScore = sc; improved = true;
            inTeam = team.map(function (x) { return hero(x.hero).id; });
          }
        });
      }
      if (!improved) break;
    }
    return { team: team.map(function (x) { return hero(x.hero).n; }), specs: team, score: bestScore, steps: steps, result: best };
  }

  function registerKit(id, kit) { KITS[id] = kit; }
  function registerArtifact(name, fx) { ARTIFACT_FX[name] = fx; }
  function registerSet(name, fx) { SET_FX[name] = fx; }
  function registerBond(school, fx) { BONDS[school] = fx; }
  function registerBoss(id, preset) { BOSSES[id] = preset; }

  return {
    VERSION: VERSION, RULE_INFO: RULE_INFO, defaultRules: defaultRules, GEAR_PROFILES: GEAR_PROFILES, SKILL_LV: SKILL_LV,
    setData: setData, data: function () { return DATA; }, hero: hero, nakedStats: nakedStats, buildStats: buildStats, finalStats: finalStats,
    starsForLevel: starsForLevel, captainFx: captainFx, artifactByName: artifactByName, setByName: setByName,
    registerKit: registerKit, registerArtifact: registerArtifact, registerSet: registerSet, registerBond: registerBond, registerBoss: registerBoss,
    kits: function () { return KITS; }, bosses: function () { return BOSSES; }, artifactsCoded: function () { return Object.keys(ARTIFACT_FX); }, setsCoded: function () { return Object.keys(SET_FX); },
    simulate: simulate, replay: replay, pickRun: pickRun, runBatch: function (opts, from, count) {
      var seed = opts.seed || 12345, out = [];
      for (var i = from; i < from + count; i++) out.push(runOnce(opts, seed + i * 7919));
      return out;
    }, summarize: summarize, compare: compare, rankCandidates: rankCandidates, rankVariants: rankVariants, optimizeTeam: optimizeTeam, statWeights: statWeights, sensitivity: sensitivity, metric: metric,
    runOnce: runOnce, Battle: Battle, parseStatus: parseStatus, autoKit: autoKit
  };
});

(function(r){r.DHSim.setData(r.DHSIM_DATA);})(typeof window!=="undefined"?window:globalThis);
/*
 * Hand-written hero kits for DHSim, translated from the official skill texts
 * (heroes-2025.json, dragonheir.info). Each kit says what the text says;
 * anything the text leaves open is marked ASSUMED in a comment.
 *
 * Kit shape: {battleCd, init(u,b), basic(u,b,tgt), battle(u,b), ult(u,b)}.
 * Skill multipliers are the values printed in the official text, which is
 * read here as the hero's current max skill level (ASSUMED).
 */
(function (root) {
  var S = root.DHSim || (typeof require !== 'undefined' ? require('./sim.js') : null);
  var COLD = 'Cold', POI = 'Poison';

  function K(id, kit) { kit.conf = kit.conf || 'hand'; S.registerKit(id, kit); }
  function frac(b, u) { return u.hp / b.maxHp(u); }
  function bonusIf(b, u, test, v) {
    b.on(u, 'modifyDamage', function (c) { if (c.src === u && test(c)) c.bonus += v; });
  }
  // "When inflicting a debuff, there is a 70% chance of extending its duration by 30%."
  function debuffExtender(b, u) {
    b.on(u, 'debuffDuration', function (d) { if (d.src === u && b.chance(0.7)) d.dur *= 1.3; });
  }
  function takesLessCrit(b, u, v) { u.s.critDmgTakenRed = (u.s.critDmgTakenRed || 0) + v; }
  function insp1Common(b, u, h) {
    // Shared inspiration 1 texts.
    var t = (h.insp[0] && h.insp[0].t) || '';
    if (/takes 20% less crit damage/.test(t)) takesLessCrit(b, u, 0.2);
    if (/damage taken by 20% when under Control/.test(t)) {
      b.on(u, 'beforeDamaged', function (c) { if (c.tgt === u && b.controlled(u)) c.amount *= 0.8; });
    }
  }
  function ignoreDef(u, v) { u.s.defIgnore = (u.s.defIgnore || 0) + v; }
  function ignoreRes(u, v) { u.s.resIgnore = (u.s.resIgnore || 0) + v; }
  function std(u, b) {
    // Inspirations every hand kit shares (1 and the generic % ones).
    if (u.insp >= 1) insp1Common(b, u, u.h);
    var t5 = (u.h.insp[4] && u.h.insp[4].t) || '';
    if (u.insp >= 5) {
      var m = /Ignores (\d+)% of the target's Defense/.exec(t5); if (m) ignoreDef(u, m[1] / 100);
      m = /Ignores (\d+)% of the target's Resistance/.exec(t5); if (m) ignoreRes(u, m[1] / 100);
    }
  }

  // ================================================================ FROST ==

  // Auster: arrows; each arrow shot with a basic or skill fires tracking
  // arrows at up to 2 Frosted enemies (55% ATK, Frost 5s, +2.5 energy each).
  K(21030, {
    init: function (u, b) {
      std(u, b);
      if (u.insp >= 2) bonusIf(b, u, function (c) { return frac(b, c.tgt) < 0.5; }, 0.15);
    },
    arrow: function (u, b) {
      var frosted = b.enemies(u).filter(function (e) { return b.has(e, 'Frost'); }).slice(0, 2);
      frosted.forEach(function (t) {
        var r = b.hit(u, t, { atk: 0.55 }, { el: COLD, tag: 'passive', apply: [['Frost', 1, 5]] });
        if (r.amount > 0) b.energy(u, 2.5);
      });
    },
    basic: function (u, b, t) {
      b.hit(u, t, { atk: b.R.basicMult }, { el: COLD, tag: 'basic' });
      this.arrow(u, b);
    },
    battle: function (u, b) {
      var t = b.target(u);
      for (var i = 0; i < 3; i++) {
        b.hit(u, t, { atk: 1.2 }, { el: COLD, tag: 'battle', defIgnore: b.chance(0.5) ? 1 : 0 });
        this.arrow(u, b);
      }
    },
    ult: function (u, b) {
      var list = b.area(u, b.target(u));
      list.forEach(function (t) { b.hit(u, t, { atk: 5.2 }, { el: COLD, tag: 'ult', apply: [['Frost', 1, 10, { skill: 'ult' }]] }); });
      list.forEach(function (t) { b.hit(u, t, { atk: 1.1 }, { el: COLD, tag: 'ult' }); });
      this.arrow(u, b);
    }
  });

  // Hvitar: Icewind weather (15s at start and on ult). Under Icewind, Frosted
  // enemies take 22% ATK Derivative over time (ASSUMED: per second); enemies
  // under 15% HP are executed, bosses take 600% ATK Derivative instead
  // (ASSUMED: once per Icewind window).
  K(20120, {
    init: function (u, b) {
      std(u, b);
      u.flags.icewind = 15;
      u.flags.bossExecUsed = -1;
      if (u.insp >= 2) b.on(u, 'modifyDamage', function (c) { if (c.src === u) c.bonus += 0.04 * Math.min(5, b.enemies(u).length); });
      b.on(u, 'second', function (e) {
        var t = e.u;
        if (t.side === u.side || b.t > u.flags.icewind || !b.has(t, 'Frost')) return;
        b.hit(u, t, { atk: 0.22 }, { el: 'Derivative', tag: 'passive' });
      });
      b.on(u, 'damaged', function (e) {
        var t = e.tgt;
        if (t.side === u.side || !t.alive || b.t > u.flags.icewind || !b.has(t, 'Frost')) return;
        // Bosses only take the 600% below 15% HP, as the text says. (A per-window
        // proc on the endless Vortex boss was tried on 2026-10-25 and dropped:
        // Darko's Hvitar-without-Frost-team fight showed it over-rated her.)
        if (t.hp / b.maxHp(t) >= 0.15) return;
        if (!t.isBoss) { b.kill(t, u); u.rec.executes = (u.rec.executes || 0) + 1; }
        else if (u.flags.bossExecUsed !== u.flags.icewind) {
          u.flags.bossExecUsed = u.flags.icewind;
          b.hit(u, t, { atk: 6.0 }, { el: 'Derivative', tag: 'passive' });
        }
      });
    },
    battle: function (u, b) {
      b.area(u, b.target(u)).forEach(function (t) { b.hit(u, t, { atk: 4.0 }, { el: COLD, tag: 'battle', apply: [['Frost', 0.75, 5, { skill: 'battle' }]] }); });
    },
    ult: function (u, b) {
      u.flags.icewind = b.t + 15;
      var en = b.enemies(u);
      var frosted = en.filter(function (e) { return b.has(e, 'Frost'); }).length + (u.insp >= 5 ? 2 : 0);
      var bonus = 0.15 * frosted;
      en.forEach(function (t) {
        b.hit(u, t, { atk: 6.4 }, { el: COLD, tag: 'ult', bonus: bonus });
        if (b.has(t, 'Frozen')) { b.remove(t, 'Frozen'); b.hit(u, t, { atk: 3.6 }, { el: COLD, tag: 'ult', bonus: bonus }); }
      });
    }
  });

  // Hochadir: allies' Frost lasts 5s longer while he lives.
  K(22230, {
    init: function (u, b) {
      std(u, b);
      b.on(u, 'debuffDuration', function (d) { if (d.base === 'Frost' && d.src.side === u.side) d.dur += 5; });
      if (u.insp >= 2) debuffExtender(b, u);
    },
    battle: function (u, b) {
      var frostAllies = b.allies(u, true).filter(function (a) { return a.h && a.h.sc === 'Frost'; });
      var best = frostAllies.sort(function (x, y) { return b.atk(y) - b.atk(x); })[0];
      if (best) b.buff(u, best, 'Frostfall ATK', 5, { atkP: 0.2 }, { undispellable: u.insp >= 5 });
      b.area(u, b.target(u)).forEach(function (t) { b.hit(u, t, { atk: 3.6 }, { el: COLD, tag: 'battle', apply: [['Frost', 0.75, 5, { skill: 'battle' }]] }); });
    },
    ult: function (u, b) {
      var en = b.enemies(u);
      en.forEach(function (t) { b.apply(u, t, 'Frost', 0.5, 10, { skill: 'ult' }); });
      en.filter(function (t) { return b.has(t, 'Frost'); }).forEach(function (c) {
        b.area(u, c).forEach(function (t) { b.hit(u, t, { atk: 5.0 }, { el: COLD, tag: 'ult' }); });
      });
      b.enemies(u).filter(function (t) { return b.has(t, 'Frozen'); }).forEach(function (c) {
        b.area(u, c).forEach(function (t) { b.hit(u, t, { atk: 5.0 }, { el: COLD, tag: 'ult' }); });
      });
    }
  });

  // Lossenia: basic attacks become a bouncing Iceball (up to 2 bounces,
  // prefers enemies without Frost; ASSUMED: no bounce back onto the same target).
  K(20920, {
    init: function (u, b) {
      std(u, b);
      if (u.insp >= 2) bonusIf(b, u, function () { return frac(b, u) > 0.85; }, 0.15);
    },
    basic: function (u, b, t) {
      var hitList = [t], pool = b.enemies(u).filter(function (e) { return e !== t; });
      pool.sort(function (x, y) { return (b.has(x, 'Frost') ? 1 : 0) - (b.has(y, 'Frost') ? 1 : 0); });
      hitList = hitList.concat(pool.slice(0, 2));
      hitList.forEach(function (e) { b.hit(u, e, { atk: 1.0 }, { el: COLD, tag: 'basic', apply: [['Frost', 0.75, 10]] }); });
    },
    battle: function (u, b) {
      // Marks the ally with the highest ATK (ASSUMED pick); the pulse uses
      // the marked ally's ATK (ASSUMED) and is credited to Lossenia.
      var ally = b.allies(u, true).sort(function (x, y) { return b.atk(y) - b.atk(x); })[0];
      b.every(1.5, 6, function () {
        if (!ally.alive) return;
        var t = b.target(ally) || b.target(u);
        if (!t) return;
        b.area(u, t).forEach(function (e) { b.hit(u, e, b.atk(ally), { el: COLD, tag: 'battle', apply: [['Frost', 1, 5, { skill: 'battle' }]] }); });
      }, u);
    },
    ult: function (u, b) {
      var center = b.target(u);
      b.every(1, 6, function () {
        if (!center || !center.alive) center = b.target(u);
        if (!center) return;
        b.area(u, center).forEach(function (e) { b.hit(u, e, { atk: 1.5 }, { el: COLD, tag: 'ult', apply: [['Frost', 1, 5, { skill: 'ult' }]] }); });
      }, u);
    }
  });

  // ============================================================ ICE SUPPORT ==

  // Voresh: heals the lowest-HP ally by 70% ATK whenever he deals damage
  // (once per action when several targets are hit).
  K(22290, {
    init: function (u, b) {
      std(u, b);
      b.on(u, 'hit', function (e) {
        if (e.src !== u || e.amount <= 0 || u.flags.healT === b.t) return;
        u.flags.healT = b.t;
        b.heal(u, b.lowestCurHp(b.allies(u, true)), { atk: 0.7 }, { tag: 'passive' });
      });
    },
    battle: function (u, b) {
      var t = b.target(u);
      for (var i = 0; i < 3; i++) {
        if (!t || !t.alive) t = b.target(u);
        if (!t) return;
        b.hit(u, t, { atk: 1.2 }, { el: COLD, tag: 'battle' });
        if (b.chance(0.3)) b.dispel(t, 1, 'buff');
      }
    },
    ult: function (u, b) {
      for (var i = 0; i < 3; i++) b.enemies(u).forEach(function (t) {
        b.hit(u, t, { atk: 1.8 }, { el: COLD, tag: 'ult', apply: i === 0 ? [['Buff Prohibition', 0.75, 10, { skill: 'ult' }]] : null });
      });
    }
  });

  // Gardrus: 25% chance to resist a debuff (+25 energy when he does).
  K(21160, {
    init: function (u, b) { std(u, b); },
    battle: function (u, b) {
      var t = b.target(u);
      b.hit(u, t, { atk: 4.0 }, { el: COLD, tag: 'battle', apply: [['Attack Penalty II', 0.75, 5, { skill: 'battle' }]] });
    },
    ult: function (u, b) {
      b.area(u, b.target(u)).forEach(function (t) {
        b.hit(u, t, { atk: 6.2 }, { el: COLD, tag: 'ult', apply: [['Knocked Up', 1, 1, { skill: 'ult' }], ['Stunned', 1, 3, { skill: 'ult' }], ['Recharging Speed Penalty', 1, 5, { skill: 'ult' }]] });
      });
    }
  });
  // The resist check runs before a debuff lands; attach it via a wrapper.
  (function () {
    var orig = S.Battle.prototype.apply;
    S.Battle.prototype.apply = function (src, tgt, name, chance, dur, extra) {
      if (tgt && tgt.heroId === 21160 && tgt.alive && src.side !== tgt.side && S.parseStatus(name).kind !== 'buff' && this.chance(0.25)) {
        this.energy(tgt, 25);
        return false;
      }
      return orig.call(this, src, tgt, name, chance, dur, extra);
    };
  })();

  // Vinyara: immune to Control (freezes the caster for 5s, once per 6s).
  K(20770, {
    init: function (u, b) {
      std(u, b);
      u.flags.icyT = -99;
      if (u.insp >= 2) debuffExtender(b, u);
      b.on(u, 'statusApplied', function (e) {
        if (e.tgt !== u || e.kind !== 'control') return;
        b.remove(u, e.base);
        if (b.t - u.flags.icyT >= 6) { u.flags.icyT = b.t; b.apply(u, e.src, 'Frozen', 1, 5); }
      });
    },
    battle: function (u, b) {
      var others = b.allies(u, false);
      var low = b.lowestCurHp(others);
      [u, low].forEach(function (a) {
        if (!a) return;
        b.shield(u, a, { atk: 4.5, hp: 0.1 }, 10);
        b.apply(u, a, 'Defense Up II', 1, 5);
      });
    },
    ult: function (u, b) {
      var t = b.target(u);
      if (!t) return;
      b.hit(u, t, { atk: 9.0 }, { el: COLD, tag: 'ult' });
      b.dispel(t, 99, 'buff');
      b.energy(t, -100);
      b.apply(u, t, 'Frozen', 1, 3, { skill: 'ult' });
      b.apply(u, t, 'Attack Penalty II', 1, 10, { skill: 'ult' });
    }
  });

  // Alphanarsy: Death's Blessing stacks (start 5, +1 every 10s, max 10, one
  // removed per damage taken). ASSUMED effect: 5% damage reduction per stack.
  K(24770, {
    init: function (u, b) {
      std(u, b);
      u.flags.db = 5;
      b.every(10, 600, function () { u.flags.db = Math.min(10, u.flags.db + 1); }, u);
      b.on(u, 'beforeDamaged', function (c) {
        if (c.tgt !== u || u.flags.db <= 0) return;
        c.amount *= 1 - 0.05 * u.flags.db;
        u.flags.db--;
      });
      // Parry: while holding her ult shield, each hit is reduced by 10% of her DEF.
      b.on(u, 'beforeDamaged', function (c) {
        if (c.tgt.side !== u.side || !c.tgt.flags.parryUntil || b.t > c.tgt.flags.parryUntil || !c.tgt.shields.length) return;
        c.amount = Math.max(0, c.amount - 0.1 * b.def(u));
      });
    },
    battle: function (u, b) {
      var list = b.area(u, b.target(u));
      list.forEach(function (t) { b.hit(u, t, { atk: 2.0, ench: 10.0 }, { el: COLD, tag: 'battle' }); });
      u.flags.db = Math.min(10, u.flags.db + list.length * (u.insp >= 2 ? 2 : 1));
      b.allies(u, true).forEach(function (a) { b.apply(u, a, 'Defense Up II', 1, 5); });
    },
    ult: function (u, b) {
      // ASSUMED: shield lasts 10s (text gives no duration).
      b.allies(u, true).forEach(function (a) { b.shield(u, a, { hp: 0.15, ench: 36.0 }, 10); a.flags.parryUntil = b.t + 10; });
    }
  });

  // Felosia: 15% of all damage allies take turns into a 10s shield.
  K(21390, {
    init: function (u, b) {
      std(u, b);
      if (u.insp >= 2) u.s.shieldP = (u.s.shieldP || 0) + 0.15;
      b.on(u, 'damaged', function (e) {
        if (e.tgt.side !== u.side || !e.tgt.alive || e.amount <= 0) return;
        b.shield(u, e.tgt, 0.15 * e.amount, 10, { tag: 'passive' });
      });
    },
    battle: function (u, b) {
      // "Each ally within range": an area of 3 allies (random; she can be one).
      // CALIBRATED on Darko's Vortex statistics (2026-10-25, Felosia team: HP
      // damage taken 230k in game; the whole-team reading gave 74k).
      var pool = b.allies(u, true).slice();
      for (var k = pool.length - 1; k > 0; k--) { var j = Math.floor(b.rand() * (k + 1)); var tmp = pool[k]; pool[k] = pool[j]; pool[j] = tmp; }
      pool.slice(0, b.R.areaSize).forEach(function (a) {
        b.shield(u, a, { thp: 0.10, ench: 15.0 }, 10);
        b.apply(u, a, 'Defense Up I', 1, 5, { undispellable: u.insp >= 5 });
      });
    },
    ult: function (u, b) {
      b.allies(u, true).forEach(function (a) {
        b.shield(u, a, { thp: 0.12, ench: 29.0 }, 10);
        b.buff(u, a, 'Fearless Bulwark', 10, { dmgRed: 0.30 });
        b.apply(u, a, 'Control Immunity', 1, 10);
      });
    }
  });

  // Eurion: survives one fatal hit every 60s (5s Invincibility, stops attacking).
  K(20060, {
    init: function (u, b) {
      std(u, b);
      u.flags.undyingT = -999;
      b.on(u, 'fatal', function (f) {
        if (f.tgt !== u || b.t - u.flags.undyingT < 60) return;
        u.flags.undyingT = b.t; f.saved = true;
        u.sts = u.sts.filter(function (s) { return s.kind === 'buff'; });
        b.apply(u, u, 'Invincibility', 1, 5);
        b.apply(u, u, 'Received Healing Up II', 1, 5);
        u.castUntil = b.t + 5;
        // ASSUMED: 2 stacks of Recovery Over Time = 2 x 4% max HP per second.
        b.every(1, 5, function () { b.heal(u, u, { hp: 0.08 }, { tag: 'passive' }); }, u);
      });
      if (u.insp >= 2) b.on(u, 'second', function (e) { if (e.u === u && frac(b, u) < 0.6) b.heal(u, u, { hp: 0.01 }); });
    },
    battle: function (u, b) {
      b.area(u, b.target(u)).forEach(function (t) {
        t.shields = [];
        b.hit(u, t, { def: 3.0 }, { el: COLD, tag: 'battle', apply: [['Attack Penalty I', 0.75, 4, { skill: 'battle' }]] });
      });
    },
    ult: function (u, b) {
      // ASSUMED: Ally Protection = Eurion takes 30% of the damage protected allies take.
      b.allies(u, false).forEach(function (a) { b.apply(u, a, 'Ally Protection', 1, 10, { data: { by: u } }); });
      b.shield(u, u, { def: 6.0 }, 10);
      b.buff(u, u, 'Shield of Oath', 10, { dmgRed: 0.30 });
      b.apply(u, u, 'Defense Up I', 1, 10);
      if (!u.flags.protHook) {
        u.flags.protHook = true;
        b.on(u, 'beforeDamaged', function (c) {
          var p = b.has(c.tgt, 'Ally Protection');
          if (!p || !p.data || p.data.by !== u || c.tgt === u || !u.alive) return;
          var moved = c.amount * 0.3;
          c.amount -= moved;
          b.damage(u, moved, c.src, { tag: 'redirect' });
        });
      }
    }
  });

  // ============================================================ OTHER SUPPORT ==

  // Ergander: tank. Being hit has a 20% chance (35% with inspiration 2) to give
  // the attacker Attack Penalty II for 5s.
  K(21010, {
    init: function (u, b) {
      std(u, b);
      var p = u.insp >= 2 ? 0.35 : 0.2;
      b.on(u, 'damaged', function (e) {
        if (e.tgt !== u || !e.src || e.src.side === u.side || !b.chance(p)) return;
        b.apply(u, e.src, 'Attack Penalty II', 1, 5);
      });
      if (u.insp >= 5) b.on(u, 'debuffDuration', function (d) { if (d.tgt === u && S.parseStatus(d.name).kind === 'control') d.dur *= 0.5; });
    },
    battle: function (u, b) {
      b.area(u, b.target(u)).forEach(function (t) {
        b.hit(u, t, { atk: 2.0, hp: 0.07 }, { el: POI, tag: 'battle' });
        b.energy(t, -25);
      });
      b.heal(u, u, { hp: 0.2 }, { tag: 'battle' });
    },
    ult: function (u, b) {
      b.area(u, b.target(u)).forEach(function (t) {
        b.apply(u, t, 'Taunt', 1, 5, { skill: 'ult' });
        b.hit(u, t, { atk: 4.0, hp: 0.16 }, { el: POI, tag: 'ult' });
      });
      b.apply(u, u, 'Immortality', 1, 10);
    }
  });

  // Torrin: marks the first front-line ally (gains 20% of Torrin's max HP and
  // DEF); heals; ult gives Invisibility to all allies except the marked one.
  K(20690, {
    init: function (u, b) {
      std(u, b);
      b.on(u, 'battleStart', function () {
        var front = b.allies(u, false).filter(function (a) { return a.melee; })[0] || b.allies(u, false)[0];
        if (!front) return;
        u.flags.mark = front;
        front.s.hpF += 0.2 * b.maxHp(u); front.maxHp0 += 0.2 * b.maxHp(u); front.hp += 0.2 * b.maxHp(u);
        front.s.defF += 0.2 * b.def(u);
        b.apply(u, u, 'Invisibility', 1, 10);
      });
    },
    battle: function (u, b) {
      var low = b.lowestHp(b.allies(u, true));
      b.heal(u, low, { thp: 0.12, ench: 24.0 }, { tag: 'battle' });
      if (u.insp >= 2) b.dispel(low, 1, 'debuff');
      var m = u.flags.mark;
      if (m && m.alive) { b.heal(u, m, { thp: 0.06, ench: 12.0 }, { tag: 'battle' }); b.dispel(m, 1, 'debuff'); }
    },
    ult: function (u, b) {
      var m = u.flags.mark;
      b.allies(u, true).forEach(function (a) {
        if (a === m) b.apply(u, a, 'Debuff Immunity', 1, 10, { undispellable: u.insp >= 5 });
        else b.apply(u, a, 'Invisibility', 1, 10, { undispellable: u.insp >= 5 });
      });
      b.every(0.8, 4, function () {
        b.allies(u, true).forEach(function (a) { b.heal(u, a, { thp: 0.03, ench: 6.0 }, { tag: 'ult', bonus: a === m ? 0.25 : 0 }); });
      }, u);
    }
  });

  // Oggok: every heal dispels 1 debuff. Battle skill: a wave hitting 6 times,
  // starting on his target and bouncing each time to a random other unit
  // (enemy or ally). CALIBRATED: against one boss this gives ~1.8 hits and
  // ~4.2 heals, which matches Darko's in-game Temporal Vortex statistics
  // (2026-10-25: Oggok 7.8% of damage, 85% of healing); the old "alternating
  // 3 + 3" rule gave him too much damage and too little healing.
  K(21700, {
    init: function (u, b) {
      std(u, b);
      b.on(u, 'healed', function (e) {
        if (e.src !== u) return;
        b.dispel(e.tgt, 1 + (u.insp >= 2 && b.chance(0.5) ? 1 : 0), 'debuff');
      });
    },
    battle: function (u, b) {
      var cur = b.target(u);
      for (var i = 0; i < 6 && cur; i++) {
        if (cur.side !== u.side) b.hit(u, cur, { atk: 1.5, ench: 12.0 }, { el: POI, tag: 'battle', apply: [['Attack Penalty II', 0.85, 5, { skill: 'battle', ignoreRes: u.insp >= 5 }]] });
        else b.heal(u, cur, { atk: 1.5, ench: 12.0 }, { tag: 'battle' });
        var last = cur, pool = b.enemies(u).concat(b.allies(u, true)).filter(function (x) { return x !== last && x.alive; });
        cur = pool[Math.floor(b.rand() * pool.length)];
      }
    },
    ult: function (u, b) {
      b.allies(u, true).forEach(function (a) { b.apply(u, a, 'Immortality', 1, 5); });
      b.after(5, function () { b.allies(u, true).forEach(function (a) { b.heal(u, a, { atk: 4.0, ench: 30.0 }, { tag: 'ult' }); }); }, u);
    }
  });

  // Frurbath: hitting debuffed enemies may heal the lowest-HP ally (once per 1s).
  K(21670, {
    init: function (u, b) {
      std(u, b);
      u.flags.healT = -9;
      b.on(u, 'hit', function (e) {
        if (e.src !== u || b.t - u.flags.healT < 1) return;
        var n = b.countDebuffs(e.tgt);
        if (!n || !b.chance(0.3)) return;
        u.flags.healT = b.t;
        var low = b.lowestCurHp(b.allies(u, true));
        // ASSUMED: +20% healing per debuff on the target.
        b.heal(u, low, { def: 1.5 }, { tag: 'passive', bonus: 0.2 * (n - 1) });
        b.dispel(low, 1, 'debuff');
      });
    },
    battle: function (u, b) {
      b.every(1, 6, function () { b.allies(u, true).forEach(function (a) { b.heal(u, a, { def: 0.5 }, { tag: 'battle' }); }); }, u);
    },
    ult: function (u, b) {
      b.area(u, b.target(u)).forEach(function (t) { b.hit(u, t, { atk: 6.0 }, { el: POI, tag: 'ult', apply: [['Attack Penalty II', 0.75, 10, { skill: 'ult' }]] }); });
    }
  });

  // Vicuc: anyone who debuffs her gets Accuracy Penalty II for 5s.
  K(23190, {
    init: function (u, b) {
      std(u, b);
      b.on(u, 'debuffApplied', function (e) { if (e.tgt === u && e.src.side !== u.side) b.apply(u, e.src, 'Accuracy Penalty II', 1, 5); });
    },
    battle: function (u, b) {
      b.area(u, b.target(u)).forEach(function (t) { b.hit(u, t, { atk: 3.0 }, { el: POI, tag: 'battle', apply: [['Attack Penalty I', 0.75, 5, { skill: 'battle' }]] }); });
    },
    ult: function (u, b) {
      b.allies(u, true).forEach(function (a) {
        var n = b.dispel(a, 2, 'debuff');
        b.heal(u, a, { thp: 0.15 }, { tag: 'ult', bonus: 0.25 * n });
      });
    }
  });

  // ================================================================ POISON ==

  // Durango: opening strike on all enemies; crits may add Poison.
  K(20670, {
    init: function (u, b) {
      std(u, b);
      var p = 0.4 + (u.insp >= 2 ? 0.15 : 0);
      b.on(u, 'battleStart', function () {
        b.enemies(u).forEach(function (t) { b.hit(u, t, { atk: 1.5 }, { el: POI, tag: 'passive', apply: [['Poison', p, 15, { stacks: 3 }]] }); });
      });
      b.on(u, 'crit', function (e) {
        if (e.src !== u || ['basic', 'battle', 'ult'].indexOf(e.o.tag) < 0) return;
        if (b.chance(p)) b.apply(u, e.tgt, 'Poison', 1, 15, { stacks: 1, skill: 'passive' });
        if (e.o.tag === 'battle') b.energy(u, 5);
      });
    },
    battle: function (u, b) {
      for (var i = 0; i < 3; i++) { var t = b.target(u); if (t) b.hit(u, t, { atk: 1.0, ench: 5.0 }, { el: POI, tag: 'battle' }); }
    },
    ult: function (u, b) {
      // "Ignores 30% of the target's Defense upon a successful critical hit": a
      // flat 30% ignore on crits is folded in as an expected-value bonus.
      for (var i = 0; i < 3; i++) b.area(u, b.target(u)).forEach(function (t) {
        b.hit(u, t, { atk: 1.35, ench: 6.4 }, { el: POI, tag: 'ult', defIgnore: 0.3 * Math.min(1, b.stat(u, 'critRate')), apply: [['Poison', 1, 15, { stacks: 2, skill: 'ult' }]] });
      });
    }
  });

  // Twitch: Poison from other skills has a 20% chance to trigger a 30% ATK
  // Derivative hit plus 1 Poison stack.
  K(22010, {
    init: function (u, b) {
      std(u, b);
      if (u.insp >= 1) bonusIf(b, u, function (c) { return c.tgt.shields.length > 0; }, 0.2);
      if (u.insp >= 2) bonusIf(b, u, function (c) { return frac(b, c.tgt) < 0.5; }, 0.15);
      b.on(u, 'debuffApplied', function (e) {
        if (e.base !== 'Poison' || e.src.side !== u.side || e.skill === 'twitchP' || !b.chance(0.2)) return;
        b.hit(u, e.tgt, { atk: 0.3 }, { el: 'Derivative', tag: 'passive' });
        b.apply(u, e.tgt, 'Poison', 1, 15, { stacks: 1, skill: 'twitchP' });
      });
    },
    battle: function (u, b) {
      var arrows = Math.min(4, 1 + Math.floor(b.stat(u, 'ench') / 60));
      for (var i = 0; i < arrows; i++) {
        var t = b.target(u);
        if (t) b.hit(u, t, { atk: 0.8, ench: 9.0 }, { el: POI, tag: 'battle', apply: [['Poison', 0.75, 15, { stacks: 1, skill: 'battle' }]] });
      }
    },
    ult: function (u, b) {
      for (var i = 0; i < 3; i++) b.area(u, b.target(u)).forEach(function (t) {
        b.hit(u, t, { atk: 1.6, ench: 18.0 }, { el: POI, tag: 'ult', apply: [['Poison', 0.5, 15, { stacks: 2, skill: 'ult', ignoreRes: u.insp >= 5 }]] });
      });
    }
  });

  // Lothair: battle skill and ult add Derivative damage per Poison stack on the
  // target. ASSUMED reading: each stack adds min(1% target max HP, 40% ATK).
  K(20200, {
    init: function (u, b) { std(u, b); u.flags.pstack = 0; },
    extra: function (u, b, t) {
      var n = b.stacks(t, 'Poison');
      if (!n) return;
      var per = Math.min(0.01 * b.maxHp(t), 0.4 * b.atk(u)) * (1 + (u.insp >= 2 ? 0.01 * Math.min(10, u.flags.pstack++) : 0));
      b.hit(u, t, n * per, { el: 'Derivative', tag: 'passive' });
    },
    battle: function (u, b) {
      var en = b.enemies(u);
      var t = b.lowestCurHp(en);
      var self = this;
      var dbl = u.insp >= 5 && b.chance(0.4);
      b.area(u, t).forEach(function (e) {
        b.hit(u, e, { atk: 2.5 }, { el: POI, tag: 'battle', apply: [['Poison', 0.75, 15, { stacks: dbl ? 4 : 2, skill: 'battle', ignoreRes: u.insp >= 5 }]] });
        self.extra(u, b, e);
      });
    },
    ult: function (u, b) {
      var self = this;
      for (var i = 0; i < 3; i++) b.area(u, b.target(u)).forEach(function (e) {
        b.hit(u, e, { atk: 2.5, ench: 12.0 }, { el: POI, tag: 'ult' });
        self.extra(u, b, e);
      });
    }
  });
})(typeof window !== 'undefined' ? window : globalThis);

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

/*
 * Extra hand-written kits for DHSim: the Poison school, Poison supports, and
 * the top S1 Legendaries of other schools a new player may pull.
 * Translated from the official skill texts (data/sim-data.json, same texts as
 * raw-official/heroes-2025.json). Anything the text leaves open is marked
 * ASSUMED in a comment. Multipliers are the printed values (read as the
 * hero's current max skill level, as in kits.js).
 *
 * Where heroes-2025.json also has an upgraded skill version (change_slot),
 * the base text is coded and the upgrade is noted in a comment.
 *
 * Kit shape: {battleCd, init(u,b), basic(u,b,tgt), battle(u,b), ult(u,b)}.
 */
(function (root) {
  var S = root.DHSim || (typeof require !== 'undefined' ? require('../sim.js') : null);
  var POI = 'Poison', DER = 'Derivative';
  // Use the engine's own statuses when it knows them; older engines get stand-ins.
  // ASSUMED (older engine only): "Healing Reduction" = Healing Penalty II.
  var HEAL_RED = S.parseStatus('Healing Reduction').kind !== 'buff' ? 'Healing Reduction' : 'Healing Penalty II';
  // ASSUMED: "Charmed" (target attacks its own side) only stops the target acting, as the engine has no attack-own-allies behaviour (Fear on older engines).
  var CHARM = S.parseStatus('Charmed').kind === 'control' ? 'Charmed' : 'Fear';

  // ASSUMED: in-game Poison ticks every 3s (the engine ticks every 1s at the same damage rate). Used by Vicana's -2s and by Poison Explosion.
  if (!S.RULE_INFO.poisonInterval) {
    S.RULE_INFO.poisonInterval = { v: 3, conf: 'assumed', note: 'In-game seconds between Poison ticks. The engine ticks every 1s at the same damage rate; this sets Vicana\'s interval cut (x interval/(interval-2)) and the size of a Poison Explosion (one tick of every stack).', range: [3, 5] };
  }

  // ---- helpers copied from kits.js
  function K(id, kit) { kit.conf = kit.conf || 'hand'; S.registerKit(id, kit); }
  function frac(b, u) { return u.hp / b.maxHp(u); }
  function bonusIf(b, u, test, v) {
    b.on(u, 'modifyDamage', function (c) { if (c.src === u && test(c)) c.bonus += v; });
  }
  // "When inflicting a debuff, there is a 70% chance of extending its duration by 30%."
  function debuffExtender(b, u) {
    b.on(u, 'debuffDuration', function (d) { if (d.src === u && b.chance(0.7)) d.dur *= 1.3; });
  }
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

  // ---- helpers for this file
  // A listener that keeps running after its owner dies (debuffs outlive their caster).
  function onAlways(b, u, ev, fn) { (b.listeners[ev] = b.listeners[ev] || []).push({ owner: u, fn: fn, always: true }); }
  function pick(b, list) { return list.length ? list[Math.floor(b.rand() * list.length)] : null; }
  function shuffled(b, list) {
    var a = list.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(b.rand() * (i + 1)); var x = a[i]; a[i] = a[j]; a[j] = x; }
    return a;
  }
  // Same land roll as Battle.apply for a hostile status (for statuses the
  // engine does not know, which are added by hand below).
  function lands(b, src, tgt, chance, skill, noRes) {
    if (!tgt || !tgt.alive || tgt.side === src.side || b.has(tgt, 'Debuff Immunity')) return false;
    if (b.landChance) return b.chance(b.landChance(src, tgt, chance, skill, noRes));
    var c = (chance == null ? 1 : chance) * (1 + b.stat(src, 'statusChance') + (skill ? b.stat(src, 'statusChance_' + skill) : 0));
    if (!noRes) {
      var gap = b.stat(tgt, 'res') * (1 - b.stat(src, 'resIgnore')) - b.stat(src, 'acc');
      c *= b.R.resScale / (b.R.resScale + Math.max(0, gap));
    }
    return b.chance(Math.min(1, c));
  }
  // Stacking debuff the engine does not know (Thorny Poison, Potent Medicine).
  // It sits in tgt.sts like Poison, so it counts as a debuff and can be dispelled.
  function addStacks(b, src, tgt, base, n, dur, cap, skill) {
    var dctx = { src: src, tgt: tgt, name: base, base: base, dur: dur };
    b.emit('debuffDuration', dctx);
    var st = b.has(tgt, base), already = !!st;
    if (!st) { st = { base: base, name: base, kind: 'debuff', tier: 0, stacks: [], src: src }; tgt.sts.push(st); }
    var added = [];
    for (var i = 0; i < n; i++) {
      if (cap && st.stacks.length >= cap) break;
      var s = { until: b.t + dctx.dur, src: src };
      st.stacks.push(s);
      added.push(s);
    }
    if (!st.stacks.length) tgt.sts.splice(tgt.sts.indexOf(st), 1);
    var ev = { src: src, tgt: tgt, name: base, base: base, kind: 'debuff', already: already, skill: skill };
    b.emit('statusApplied', ev);
    b.emit('debuffApplied', ev);
    return { st: st, added: added };
  }
  // Watches stacks once per second; calls end(entry, 'expired' | 'removed').
  // 'removed' = gone early while the holder lives (dispelled).
  function watchStacks(b, u, end) {
    u.flags.watch = [];
    onAlways(b, u, 'second', function (e) {
      var keep = [];
      u.flags.watch.forEach(function (w) {
        if (w.t !== e.u) { keep.push(w); return; }
        if (!w.t.alive) return;
        if (w.s.until <= b.t) end(w, 'expired');
        else if (w.t.sts.indexOf(w.st) < 0 || w.st.stacks.indexOf(w.s) < 0) end(w, 'removed');
        else keep.push(w);
      });
      u.flags.watch = keep;
    });
  }
  // ASSUMED: Poison Explosion = the target takes one in-game Poison tick of every Poison stack on it at once (poisonPerStack x poisonInterval x the stack's ATK), stacks are kept, credited to the hero who triggers it.
  // Tagged 'dot' (no crit, same engine bonuses as a Poison tick) but without dotOf, so Vicana's tick-rate factor does not apply to it.
  function poisonExplosion(b, u, t) {
    var p = b.has(t, 'Poison');
    if (!p || !p.stacks.length || !t.alive) return 0;
    var sum = 0, I = b.R.poisonInterval || 3;
    p.stacks.forEach(function (s) { sum += s.pow * b.R.poisonPerStack * I; });
    u.rec.explosions = (u.rec.explosions || 0) + 1;
    return b.hit(u, t, sum, { el: POI, tag: 'dot', noCrit: true, explosion: true }).amount;
  }
  // ASSUMED: spreading Poison copies every stack (same owner, same power) onto the new target as fresh 15s stacks, with a normal resistance roll.
  function spreadPoison(b, stacks, tgt) {
    var bySrc = new Map();
    stacks.forEach(function (s) { var g = bySrc.get(s.src) || { n: 0, pow: 0 }; g.n++; g.pow += s.pow; bySrc.set(s.src, g); });
    bySrc.forEach(function (g, src) { b.apply(src, tgt, 'Poison', 1, 15, { stacks: g.n, value: g.pow / g.n, skill: 'spread' }); });
  }
  // Snapshot debuffs and Poison when a unit takes a fatal hit (kill() clears
  // statuses before the 'death' event fires).
  function snapOnFatal(b, u) {
    b.on(u, 'fatal', function (f) {
      var t = f.tgt, p = b.has(t, 'Poison');
      t.flags.fatalT = b.t;
      t.flags.fatalDebuffs = b.countDebuffs(t);
      t.flags.fatalPoison = p ? p.stacks.slice() : [];
    });
  }
  function snap(b, t) { return t.flags.fatalT === b.t ? t : null; }
  // "Upon being hit by an enemy, reduces the hero's damage taken from that enemy by 1%, up to 15 stacks."
  function hitStackDR(b, u) {
    u.flags.hsdr = {};
    b.on(u, 'beforeDamaged', function (c) {
      if (c.tgt !== u || !c.src || c.src.side === u.side) return;
      var n = u.flags.hsdr[c.src.uid] || 0;
      c.amount *= 1 - 0.01 * n;
      u.flags.hsdr[c.src.uid] = Math.min(15, n + 1);
    });
  }
  function healOnKill(b, u, coef) {
    b.on(u, 'kill', function (e) { if (e.src === u) b.heal(u, u, coef, { tag: 'passive' }); });
  }
  // "Damage dealt to enemies with a shield is increased by 20%."
  function shieldBonus(b, u) { bonusIf(b, u, function (c) { return c.tgt.shields.length > 0; }, 0.2); }

  // =========================================================== POISON SCHOOL ==

  // Horace (Epic): each Poison stack on the target adds 1% Crit Rate to his hit.
  K(20130, {
    init: function (u, b) {
      std(u, b);
      b.on(u, 'modifyDamage', function (c) { if (c.src === u) c.critRate += 0.01 * b.stacks(c.tgt, 'Poison'); });
    },
    battle: function (u, b) {
      b.area(u, b.target(u)).forEach(function (t) {
        b.hit(u, t, { atk: 3.4 }, { el: POI, tag: 'battle', apply: [['Poison', 0.5, 15, { stacks: 3, skill: 'battle' }]] });
      });
    },
    ult: function (u, b) {
      b.area(u, b.target(u)).forEach(function (t) {
        var poisoned = b.stacks(t, 'Poison') > 0;
        b.hit(u, t, { atk: 6.0 }, { el: POI, tag: 'ult' });
        if (poisoned) poisonExplosion(b, u, t);
      });
    }
  });

  // Eli (Epic): extra 40% ATK Derivative on every hit against a Poisoned enemy.
  K(20280, {
    init: function (u, b) {
      std(u, b);
      u.flags.eliUntil = -1;
      // ASSUMED: the passive triggers on basic, battle and ultimate hits, not on Poison ticks or on its own Derivative hit.
      b.on(u, 'hit', function (e) {
        if (e.src !== u || ['basic', 'battle', 'ult'].indexOf(e.o.tag) < 0 || e.o.el === DER || !b.has(e.tgt, 'Poison')) return;
        b.hit(u, e.tgt, { atk: 0.4 }, { el: DER, tag: 'passive' });
      });
    },
    basic: function (u, b, t) {
      b.hit(u, t, { atk: b.R.basicMult }, { el: POI, tag: 'basic' });
      // ASSUMED: "each subsequent basic attack" = every basic attack during the 6s of Attack Speed Up I.
      if (b.t < u.flags.eliUntil) {
        var r = pick(b, b.enemies(u));
        if (r) {
          u.rec.eliBolts = (u.rec.eliBolts || 0) + 1;
          b.hit(u, r, { atk: 1.2 }, { el: POI, tag: 'battle', apply: [['Poison', 1, 15, { stacks: 1, skill: 'battle' }]] });
        }
      }
    },
    battle: function (u, b) {
      b.apply(u, u, 'Attack Speed Up I', 1, 6);
      u.flags.eliUntil = b.t + 6;
    },
    ult: function (u, b) {
      // "Shoots 3 waves of bolts in a designated direction" = 3 area hits.
      for (var i = 0; i < 3; i++) b.area(u, b.target(u)).forEach(function (t) { b.hit(u, t, { atk: 2.65 }, { el: POI, tag: 'ult' }); });
    }
  });

  // Corrin (Epic): when a Poisoned enemy dies its Poison spreads to nearby
  // enemies with an 80% ATK + 480% Enlightenment hit.
  K(21300, {
    init: function (u, b) {
      std(u, b);
      snapOnFatal(b, u);
      b.on(u, 'death', function (e) {
        var d = e.tgt;
        if (d.side === u.side || !snap(b, d) || !d.flags.fatalPoison.length) return;
        // ASSUMED: "nearby enemies" = up to areaSize - 1 other alive enemies.
        b.area(u, d).filter(function (x) { return x !== d; }).forEach(function (t) {
          spreadPoison(b, d.flags.fatalPoison, t);
          b.hit(u, t, { atk: 0.8, ench: 4.8 }, { el: POI, tag: 'passive' });
        });
      });
    },
    battle: function (u, b) {
      // "the nearest enemy" = the main target.
      for (var i = 0; i < 3; i++) {
        var t = b.target(u);
        if (t) b.hit(u, t, { atk: 1.0 }, { el: POI, tag: 'battle', apply: [['Poison', 0.75, 15, { stacks: 1, skill: 'battle' }]] });
      }
    },
    ult: function (u, b) {
      var t = b.target(u);
      if (!t) return;
      var p = b.has(t, 'Poison');
      // ASSUMED: "up to 30 stacks" caps how many stacks are refreshed (the engine cap is poisonMaxStacks, 20); it does not raise the cap.
      if (p) p.stacks.slice(-30).forEach(function (s) { s.until = b.t + 15; });
      poisonExplosion(b, u, t);
      var stacks = p ? p.stacks.slice() : [];
      // ASSUMED: the 400% ATK + 900% Enlightenment hit lands on the target and the nearby enemies the Poison spreads to.
      var list = b.area(u, t);
      list.forEach(function (e) { if (e !== t && stacks.length) spreadPoison(b, stacks, e); });
      list.forEach(function (e) { b.hit(u, e, { atk: 4.0, ench: 9.0 }, { el: POI, tag: 'ult' }); });
    }
  });

  // Shink (Epic): ignores 1% of the target's DEF per Poison stack on it.
  // Upgraded ult (change_slot): 75% Poison chance instead of 50%.
  K(22020, {
    init: function (u, b) {
      std(u, b);
      b.on(u, 'modifyDamage', function (c) { if (c.src === u) c.defIgnore += 0.01 * b.stacks(c.tgt, 'Poison'); });
    },
    battle: function (u, b) {
      // "Bounces between enemies up to 5 times": each hop goes to another enemy,
      // never the one just hit. CALIBRATED: against a lone boss the dagger hits
      // once (Darko's Temporal Vortex statistics, 2026-10-25: Shink 15.5% of
      // the team's damage; the old 5-hits-on-one-target reading gave 27%).
      var cur = b.target(u), last = null;
      for (var i = 0; i < 5 && cur; i++) {
        b.hit(u, cur, { atk: 1.05 }, { el: POI, tag: 'battle', apply: [['Poison', 0.75, 15, { stacks: 1, skill: 'battle' }]] });
        last = cur;
        var next = shuffled(b, b.enemies(u).filter(function (x) { return x !== last && x.alive; }));
        cur = next[0];
      }
    },
    ult: function (u, b) {
      var list = b.area(u, b.target(u));
      for (var i = 0; i < 5; i++) list.forEach(function (t) {
        b.hit(u, t, { atk: 1.05 }, { el: POI, tag: 'ult', apply: [['Poison', 0.5, 15, { stacks: 1, skill: 'ult' }]] });
      });
    }
  });

  // Vicana: allies' Poison ticks 2s sooner (engine: Poison damage rate x
  // interval/(interval-2)). Ult marks the main target for 10s; each Poison
  // inflicted on it sets off a 105% ATK Derivative blast on enemies in range.
  // Upgraded battle skill (change_slot): 75% Poison chance instead of 50%.
  K(20630, {
    init: function (u, b) {
      std(u, b);
      u.flags.markUntil = -1;
      b.on(u, 'modifyDamage', function (c) {
        if (c.o.dotOf !== 'Poison' || c.src.side !== u.side) return;
        var I = b.R.poisonInterval || 3;
        c.raw *= I / Math.max(1, I - 2);
      });
      b.on(u, 'debuffApplied', function (e) {
        var m = u.flags.mark;
        if (e.base !== 'Poison' || e.tgt !== m || b.t >= u.flags.markUntil || !m.alive) return;
        b.area(u, m).forEach(function (t) { b.hit(u, t, { atk: 1.05 }, { el: DER, tag: 'ult' }); });
      });
      if (u.insp >= 1) healOnKill(b, u, { hp: 0.08 });
      if (u.insp >= 2) {
        // ASSUMED: "every 15% of the target's Max HP over that of the hero" = each 15% by which the target's max HP exceeds the hero's (excess / hero max HP), +1% each, max 12%.
        b.on(u, 'modifyDamage', function (c) {
          if (c.src !== u) return;
          var over = (b.maxHp(c.tgt) - b.maxHp(u)) / b.maxHp(u);
          if (over > 0) c.bonus += Math.min(0.12, 0.01 * Math.floor(over / 0.15));
        });
      }
    },
    battle: function (u, b) {
      for (var i = 0; i < 3; i++) {
        var t = pick(b, b.enemies(u));
        if (t) b.hit(u, t, { atk: 1.5 }, { el: POI, tag: 'battle', apply: [['Poison', 0.5, 15, { stacks: 1, skill: 'battle', ignoreRes: u.insp >= 5 }]] });
      }
    },
    ult: function (u, b) {
      var t = b.target(u);
      if (!t) return;
      u.flags.mark = t;
      u.flags.markUntil = b.t + 10;
      b.area(u, t).forEach(function (e) { b.hit(u, e, { atk: 5.0 }, { el: POI, tag: 'ult' }); });
    }
  });

  // Jathalea: Thorny Poison punishes whoever dispels it.
  // Upgraded passive (change_slot): 10% Target's Max HP per stack instead of 6%.
  K(20290, {
    init: function (u, b) {
      std(u, b);
      if (u.insp >= 1) shieldBonus(b, u);
      if (u.insp >= 2) bonusIf(b, u, function () { return frac(b, u) > 0.85; }, 0.15);
      // ASSUMED: Thorny Poison has no effect of its own (none is stated) besides counting as a debuff and the dispel punishment; no stack cap is stated, so none is set.
      // ASSUMED: the dispeller cannot be identified in the engine, so the dispel damage hits the enemy that held the stacks (6% of its max HP per stack, capped at 100% of Jathalea's ATK per stack).
      watchStacks(b, u, function (w, kind) {
        if (kind !== 'removed') return;
        b.hit(u, w.t, Math.min(0.06 * b.maxHp(w.t), b.atk(u)), { el: DER, tag: 'passive' });
      });
    },
    thorny: function (u, b, t, chance, n, dur, skill) {
      if (!lands(b, u, t, chance, skill)) return;
      var r = addStacks(b, u, t, 'Thorny Poison', n, dur, 0, skill);
      r.added.forEach(function (s) { u.flags.watch.push({ t: t, st: r.st, s: s }); });
    },
    battle: function (u, b) {
      var t = b.target(u);
      if (!t) return;
      b.hit(u, t, { atk: 3.0 }, { el: POI, tag: 'battle', apply: [['Poison', 0.75, 15, { stacks: 1, skill: 'battle' }]] });
      this.thorny(u, b, t, 0.5, 1, 10, 'battle');
    },
    ult: function (u, b) {
      var self = this;
      b.area(u, b.target(u)).forEach(function (t) {
        b.hit(u, t, { atk: 7.0 }, { el: POI, tag: 'ult' });
        if (!t.alive) { t.flags.noRes = true; return; }
        self.thorny(u, b, t, 1, 3, 15, 'ult');
        // "20% Enlightenment Penalty": -20% of the target's Enlightenment.
        b.apply(u, t, 'Enlightenment Penalty', 1, 15, { mods: { ench: -0.2 * Math.max(0, t.s.ench) }, skill: 'ult' });
      });
    }
  });

  // Sleight: Potent Medicine stacks turn into Poison when they expire, are
  // dispelled or are resisted.
  K(22430, {
    init: function (u, b) {
      std(u, b);
      if (u.insp >= 1) shieldBonus(b, u);
      if (u.insp >= 2) b.on(u, 'modifyDamage', function (c) { if (c.src === u) c.bonus += 0.04 * Math.min(5, b.enemies(u).length); });
      // ASSUMED: the base Potent Medicine stack limit is 5 (inspiration 5 raises it to 10); stacks past the limit are ignored.
      u.flags.pmCap = u.insp >= 5 ? 10 : 5;
      // ASSUMED: Potent Medicine has no effect of its own while it lasts (none is stated) besides counting as a debuff.
      watchStacks(b, u, function (w) { b.apply(u, w.t, 'Poison', 1, 15, { stacks: 1, skill: 'passive' }); });
      var self = this;
      b.on(u, 'battleStart', function () { b.enemies(u).forEach(function (t) { self.pm(u, b, t, 3, 'passive'); }); });
    },
    pm: function (u, b, t, n, skill) {
      if (!t || !t.alive || n <= 0) return;
      if (!lands(b, u, t, 1, skill)) {
        for (var i = 0; i < n; i++) b.apply(u, t, 'Poison', 1, 15, { stacks: 1, skill: 'passive' });
        return;
      }
      var r = addStacks(b, u, t, 'Potent Medicine', n, 15, u.flags.pmCap, skill);
      r.added.forEach(function (s) { u.flags.watch.push({ t: t, st: r.st, s: s }); });
    },
    battle: function (u, b) {
      for (var i = 0; i < 4; i++) {
        var t = b.target(u);
        if (!t) return;
        b.hit(u, t, { atk: 1.0, ench: 10.0 }, { el: POI, tag: 'battle', apply: [['Poison', 0.75, 15, { stacks: 1, skill: 'battle' }]] });
        if (i === 3) this.pm(u, b, t, 1, 'battle');
      }
    },
    ult: function (u, b) {
      var self = this, list = b.area(u, b.target(u));
      for (var i = 0; i < 3; i++) list.forEach(function (t) {
        b.hit(u, t, { atk: 2.4, ench: 24.0 }, { el: POI, tag: 'ult', apply: [['Poison', 1, 15, { stacks: 1, skill: 'ult' }]] });
      });
      // ASSUMED: the "1 Potent Medicine per 5 Poison stacks" check runs once per target, after its 3 strikes.
      list.forEach(function (t) { self.pm(u, b, t, Math.floor(b.stacks(t, 'Poison') / 5), 'ult'); });
    }
  });

  // ========================================================= POISON SUPPORT ==

  // ASSUMED: a "Damage Debuff" (which Reytah's ult cannot extend) is a damage-over-time debuff.
  var DMG_DEBUFF = { 'Poison': 1, 'Burn': 1, 'Bleeding': 1, 'Static': 1, 'Thorny Poison': 1 };

  // Reytah: enemies deal 10% less damage, 8% less per debuff on them (max 3).
  K(21870, {
    init: function (u, b) {
      std(u, b);
      // ASSUMED: the reductions add up and multiply the enemy's damage (10% + 10% inspiration 1 + 8% x debuffs, up to 3).
      b.on(u, 'modifyDamage', function (c) {
        if (c.src.side === u.side) return;
        var red = 0.1 + (u.insp >= 1 ? 0.1 : 0) + 0.08 * Math.min(3, b.countDebuffs(c.src));
        c.raw *= 1 - red;
      });
      if (u.insp >= 2) hitStackDR(b, u);
      if (u.insp >= 5) b.on(u, 'statusApplied', function (e) {
        if (e.src !== u || e.kind === 'buff' || !b.chance(0.5)) return;
        var st = b.has(e.tgt, e.base);
        if (st) st.undispellable = true;
      });
    },
    battle: function (u, b) {
      var wave = function () {
        b.area(u, b.target(u)).forEach(function (t) { b.hit(u, t, { atk: 2.5 }, { el: POI, tag: 'battle', apply: [['Attack Penalty II', 0.75, 5, { skill: 'battle' }]] }); });
      };
      wave();
      // ASSUMED: "after a short pause" = 1s.
      b.after(1, wave, u);
    },
    ult: function (u, b) {
      b.allies(u, true).forEach(function (a) {
        b.dispel(a, 99, 'debuff');
        b.apply(u, a, 'Defense Up II', 1, 10);
      });
      var ext = 5 + (u.insp >= 3 ? 2 : 0);
      b.enemies(u).forEach(function (t) {
        t.sts.forEach(function (st) {
          if (st.kind === 'buff' || DMG_DEBUFF[st.base]) return;
          if (st.stacks) st.stacks.forEach(function (s) { s.until += ext; });
          else st.until += ext;
        });
        b.apply(u, t, 'Recharging Speed Penalty', 1, 5, { skill: 'ult' });
      });
    }
  });

  // ASSUMED: Talwer's transfer moves one random non-stacking debuff (with its remaining time) from a random debuffed enemy to another random enemy, with no resistance roll.
  function transferDebuff(b, u) {
    var en = b.enemies(u);
    if (en.length < 2) return;
    var movable = function (x) { return x.sts.filter(function (s) { return s.kind !== 'buff' && !s.stacks; }); };
    var d = pick(b, en.filter(function (x) { return movable(x).length > 0; }));
    if (!d) return;
    var st = pick(b, movable(d)), r = pick(b, en.filter(function (x) { return x !== d; }));
    d.sts.splice(d.sts.indexOf(st), 1);
    var ex = b.has(r, st.base);
    if (!ex) r.sts.push(st);
    else if (!ex.stacks) ex.until = Math.max(ex.until, st.until);
  }

  // Talwer: 2% Damage Reduction per debuff on enemies (max 10).
  K(21320, {
    init: function (u, b) {
      std(u, b);
      // ASSUMED: each debuff status counts once (10 Poison stacks = 1 debuff).
      b.on(u, 'beforeDamaged', function (c) {
        if (c.tgt !== u) return;
        var n = 0;
        b.enemies(u).forEach(function (e) { n += b.countDebuffs(e); });
        c.amount *= 1 - 0.02 * Math.min(10, n);
      });
      if (u.insp >= 1) b.on(u, 'death', function (e) { if (e.tgt.side === u.side && e.tgt !== u) b.heal(u, u, { hp: 0.15 }, { tag: 'passive' }); });
      if (u.insp >= 2) debuffExtender(b, u);
      if (u.insp >= 5) u.cdBattle -= 3;
    },
    battle: function (u, b) {
      var center = b.target(u);
      if (!center) return;
      // ASSUMED: the mushroom is not a unit: Talwer stands in as the Taunt source, and the mushroom dies (and explodes) when its 5s Taunt ends.
      b.area(u, center).forEach(function (t) { b.apply(u, t, 'Taunt', 1, 5, { skill: 'battle' }); });
      b.after(5, function () {
        var c = center.alive ? center : b.target(u);
        if (!c) return;
        b.area(u, c).forEach(function (t) {
          b.hit(u, t, { atk: 1.5, ench: 9.0 }, { el: DER, tag: 'battle', apply: [['Stunned', 1, 3, { skill: 'battle' }], [HEAL_RED, 1, 10, { skill: 'battle' }]] });
        });
      }, u);
    },
    ult: function (u, b) {
      var center = b.target(u);
      // 4s cloud, a hit every 0.8s = 5 hits.
      b.every(0.8, 4, function () {
        var c = center && center.alive ? center : b.target(u);
        if (!c) return;
        b.area(u, c).forEach(function (t) {
          b.hit(u, t, { atk: 0.8, ench: 6.0 }, { el: DER, tag: 'ult', apply: [['Accuracy Penalty II', 1, 10, { skill: 'ult' }], ['Attack Penalty II', 1, 10, { skill: 'ult' }]] });
          transferDebuff(b, u);
        });
      }, u);
    }
  });

  // Gareth (Epic): a hit for more than 10% of his current HP heals him for half of it.
  K(23170, {
    init: function (u, b) {
      std(u, b);
      // ASSUMED: "single-instance damage" = HP lost to one hit (after shields), compared with his HP just before it.
      b.on(u, 'damaged', function (e) {
        if (e.tgt !== u || e.amount <= 0.1 * (u.hp + e.amount)) return;
        b.heal(u, u, 0.5 * e.amount, { tag: 'passive' });
      });
      b.on(u, 'beforeDamaged', function (c) {
        if (c.tgt === u && c.src && c.src === u.flags.steadySrc && b.t < u.flags.steadyUntil) c.amount *= 0.7;
      });
    },
    battle: function (u, b) {
      b.apply(u, u, 'Defense Up II', 1, 5);
      var t = b.target(u);
      if (!t) return;
      b.hit(u, t, { def: 3.4 }, { el: POI, tag: 'battle' });
      u.flags.steadySrc = t;
      u.flags.steadyUntil = b.t + 5;
    },
    ult: function (u, b) {
      b.area(u, b.target(u)).forEach(function (t) { b.hit(u, t, { atk: 6.2 }, { el: POI, tag: 'ult', apply: [['Attack Penalty II', 0.75, 10, { skill: 'ult' }]] }); });
    }
  });

  // Eches (Epic): enemies he debuffs deal 10% less damage.
  // Upgraded battle skill (change_slot): Healing Prohibition for 8s instead of Healing Reduction for 5s.
  K(20750, {
    init: function (u, b) {
      std(u, b);
      // ASSUMED: the 10% damage cut lasts as long as the debuff that caused it (no duration is stated).
      b.on(u, 'debuffApplied', function (e) {
        if (e.src !== u || e.tgt.side === u.side) return;
        var st = b.has(e.tgt, e.base), until = b.t;
        if (st) until = st.stacks ? Math.max.apply(null, st.stacks.map(function (s) { return s.until; }).concat([b.t])) : st.until;
        e.tgt.flags.echesUntil = Math.max(e.tgt.flags.echesUntil || 0, until);
      });
      b.on(u, 'modifyDamage', function (c) { if (c.src.side !== u.side && c.src.flags.echesUntil > b.t) c.raw *= 0.9; });
    },
    battle: function (u, b) {
      b.area(u, b.target(u)).forEach(function (t) { b.hit(u, t, { atk: 2.8 }, { el: POI, tag: 'battle', apply: [[HEAL_RED, 0.75, 5, { skill: 'battle' }]] }); });
    },
    ult: function (u, b) {
      b.area(u, b.target(u)).forEach(function (t) {
        b.hit(u, t, { atk: 5.5 }, { el: POI, tag: 'ult', apply: [[CHARM, 0.35, 5, { skill: 'ult' }], ['Recharging Speed Penalty', 0.85, 10, { skill: 'ult' }]] });
      });
      b.allies(u, true).forEach(function (a) { b.dispel(a, 1, 'debuff'); });
    }
  });

  function highestAtk(b, list) {
    var best = null;
    list.forEach(function (x) { if (!best || b.atk(x) > b.atk(best)) best = x; });
    return best;
  }

  // Theodore (Epic): Control on an enemy gives +10 energy to the ally with the
  // highest ATK; Control on an ally takes 20 energy from the enemy with the
  // highest ATK. Each once per 3s.
  K(23200, {
    init: function (u, b) {
      std(u, b);
      u.flags.thE = -99; u.flags.thA = -99;
      b.on(u, 'statusApplied', function (e) {
        if (e.kind !== 'control') return;
        if (e.tgt.side !== u.side) {
          if (b.t - u.flags.thE < 3) return;
          u.flags.thE = b.t;
          var a = highestAtk(b, b.allies(u, true));
          if (a) b.energy(a, 10);
        } else {
          if (b.t - u.flags.thA < 3) return;
          u.flags.thA = b.t;
          var en = highestAtk(b, b.enemies(u));
          if (en) b.energy(en, -20);
        }
      });
    },
    battle: function (u, b) {
      for (var i = 0; i < 2; i++) {
        var t = b.target(u);
        if (t) b.hit(u, t, { atk: 2.1 }, { el: POI, tag: 'battle', apply: [['Recharging Speed Penalty', 0.75, 5, { skill: 'battle' }]] });
      }
    },
    ult: function (u, b) {
      b.area(u, b.target(u)).forEach(function (t) {
        b.hit(u, t, { atk: 7.6 }, { el: POI, tag: 'ult', apply: [['Stunned', 0.75, 5, { skill: 'ult' }], ['Attack Penalty II', 0.5, 10, { skill: 'ult' }]] });
      });
    }
  });

  // Garian (Epic): healer; charges faster while allies are low.
  K(23180, {
    init: function (u, b) {
      std(u, b);
      // ASSUMED: each Recharging Speed Boost stack is the mirror of Recharging Speed Penalty: +(1 - rechargePenalty) recharge speed (+30% with the 0.7 rule), re-counted every second; he counts himself as an ally.
      var base = u.s.rechargeUp || 0;
      b.on(u, 'second', function (e) {
        if (e.u !== u) return;
        var n = 0;
        b.allies(u, true).forEach(function (a) { var f = frac(b, a); if (f < 0.5) n++; if (f < 0.2) n++; });
        var per = 1 - (b.R.rechargePenalty != null ? b.R.rechargePenalty : 0.7);
        u.flags.rsBoost = n;
        if (b.rechargeRate) { u.s.rechargeUp = base + n * per; return; }
        // Older engine (no recharge-speed stat): add the extra second of regen directly.
        if (n) b.energy(u, n * per * (b.R.energyRegen != null ? b.R.energyRegen : b.R.ultMax / (b.R.ultFull || 20)));
      });
    },
    battle: function (u, b) {
      var low = b.lowestCurHp(b.allies(u, true));
      if (!low) return;
      b.heal(u, low, { thp: 0.15, ench: 20.0 }, { tag: 'battle' });
      b.apply(u, low, 'Debuff Immunity', 1, 5);
    },
    ult: function (u, b) {
      // ASSUMED: "allies within range" of the nexus = all allies. 8s, a heal every 1s = 8 heals.
      b.every(1, 8, function () {
        b.allies(u, true).forEach(function (a) { b.heal(u, a, { thp: 0.01, ench: 3.5 }, { tag: 'ult' }); });
      }, u);
    }
  });

  // Sifris (Epic): spends her own HP to heal and to resurrect allies.
  // Upgraded ult (change_slot): Defense Up II for 10s instead of Defense Up I for 6s.
  K(21680, {
    init: function (u, b) {
      std(u, b);
      u.flags.sfDone = false;
      u.flags.sfCheck = function () {
        if (u.flags.sfDone || !u.alive || frac(b, u) >= 0.3) return;
        u.flags.sfDone = true;
        b.apply(u, u, 'Resurrection at Death', 1, 10);
      };
      b.on(u, 'damaged', function (e) { if (e.tgt === u) u.flags.sfCheck(); });
      // ASSUMED: Resurrection at Death brings her back at 30% max HP (the figure her ultimate uses).
      b.on(u, 'fatal', function (f) {
        if (f.tgt !== u || !b.has(u, 'Resurrection at Death')) return;
        f.saved = true;
        b.remove(u, 'Resurrection at Death');
        b.after(0.01, function () { u.hp = Math.max(u.hp, 0.3 * b.maxHp(u)); }, u);
      });
    },
    payHp: function (u, b, pct) {
      var cost = pct * u.hp;
      u.hp -= cost;
      u.rec.taken += cost;
      u.flags.sfCheck();
    },
    battle: function (u, b) {
      this.payHp(u, b, 0.1);
      b.allies(u, false).forEach(function (a) { b.heal(u, a, { hp: 0.2 }, { tag: 'battle' }); });
    },
    ult: function (u, b) {
      this.payHp(u, b, 0.3);
      var dead = b.units.filter(function (x) { return x.side === u.side && !x.alive && x !== u && !x.flags.noRes; });
      shuffled(b, dead).slice(0, 2).forEach(function (x) {
        x.alive = true;
        x.hp = 0.3 * b.maxHp(x);
        x.energy = 0.75 * x.energy;
        x.rec.deathAt = null;
        x.castUntil = b.t; x.tgt = null; x.sts = []; x.shields = [];
        u.rec.revives = (u.rec.revives || 0) + 1;
        b.note(x.name + ' resurrected by ' + u.name);
      });
      b.allies(u, true).forEach(function (a) { b.apply(u, a, 'Defense Up I', 1, 6); });
    }
  });

  // Sigrid (Rare): +25 energy when a debuffed enemy dies.
  K(20650, {
    init: function (u, b) {
      std(u, b);
      snapOnFatal(b, u);
      b.on(u, 'death', function (e) { if (e.tgt.side !== u.side && snap(b, e.tgt) && e.tgt.flags.fatalDebuffs > 0) b.energy(u, 25); });
    },
    battle: function (u, b) {
      var t = b.target(u);
      if (!t) return;
      for (var i = 0; i < 2; i++) b.hit(u, t, { atk: 2.1 }, { el: POI, tag: 'battle' });
      // "This skill has a 75% chance": one roll per cast.
      b.apply(u, t, 'Healing Prohibition', 0.75, 5, { skill: 'battle' });
    },
    ult: function (u, b) {
      var t = b.target(u);
      if (!t) return;
      var list = [t].concat(b.enemies(u).filter(function (x) { return x !== t && b.countDebuffs(x) > 0; }));
      list.forEach(function (x) {
        b.hit(u, x, { atk: 7.6 }, { el: POI, tag: 'ult', apply: [['Healing Prohibition', 0.75, 10, { skill: 'ult' }], ['Attack Penalty II', 0.75, 10, { skill: 'ult' }]] });
      });
    }
  });

  // Heksandra (Rare): +30% healing on allies under 40% HP.
  K(20780, {
    init: function (u, b) {
      std(u, b);
      b.on(u, 'modifyHeal', function (c) { if (c.src === u && frac(b, c.tgt) < 0.4) c.amount *= 1.3; });
    },
    battle: function (u, b) {
      // ASSUMED: "an ally" = the ally with the lowest HP %.
      var low = b.lowestHp(b.allies(u, true));
      if (!low) return;
      b.heal(u, low, { atk: 1.5, ench: 15.0 }, { tag: 'battle' });
      b.dispel(low, 1, 'debuff');
    },
    ult: function (u, b) {
      // ASSUMED: "allies within range" = all allies.
      b.allies(u, true).forEach(function (a) { b.heal(u, a, { thp: 0.2 }, { tag: 'ult' }); });
    }
  });

  // ================================================ OTHER-SCHOOL LEGENDARIES ==

  // Khrysos: 50% of every shield he grants turns into healing as it is used up or vanishes.
  K(20450, {
    init: function (u, b) {
      std(u, b);
      var rate = u.insp >= 5 ? 0.75 : 0.5;
      if (u.insp >= 3) u.s.shieldP = (u.s.shieldP || 0) + 0.3;
      u.flags.kSh = [];
      b.on(u, 'shielded', function (e) {
        if (e.src !== u) return;
        var sh = e.tgt.shields[e.tgt.shields.length - 1];
        if (sh) u.flags.kSh.push({ t: e.tgt, sh: sh, last: sh.amt });
      });
      // ASSUMED: his shields are checked once per second, and the healing goes to the ally that held the shield.
      b.on(u, 'second', function (e) {
        if (e.u !== u) return;
        u.flags.kSh = u.flags.kSh.filter(function (w) {
          var present = w.t.alive && w.t.shields.indexOf(w.sh) >= 0;
          var used = present ? w.last - w.sh.amt : w.last;
          if (used > 0.01) b.heal(u, w.t, rate * used, { tag: 'passive' });
          w.last = w.sh.amt;
          return present;
        });
        if (u.insp >= 2 && frac(b, u) < 0.6) b.heal(u, u, { hp: 0.01 }, { tag: 'passive' });
      });
    },
    battle: function (u, b) {
      for (var i = 0; i < 3; i++) b.area(u, b.target(u)).forEach(function (t) {
        b.hit(u, t, { atk: 1.0 }, { el: 'Fire', tag: 'battle' });
        if (t.alive && b.chance(0.75)) b.dispel(t, 1, 'buff');
      });
      var low = b.lowestCurHp(b.allies(u, true));
      if (low) b.shield(u, low, { thp: 0.15 }, 5);
      // ASSUMED: the inspiration 1 self shield lasts 5s, like the battle skill shield.
      if (u.insp >= 1) b.shield(u, u, { hp: 0.15 }, 5);
    },
    ult: function (u, b) {
      b.enemies(u).forEach(function (t) {
        t.shields = [];
        b.hit(u, t, { atk: 5.0, hp: 0.1 }, { el: 'Fire', tag: 'ult', apply: [['Attack Penalty II', 0.75, 10, { skill: 'ult' }]] });
      });
      b.allies(u, true).forEach(function (a) { b.shield(u, a, { thp: 0.25 }, 10); });
    }
  });

  // Tamar: an enemy gaining a buff takes a 100% ATK Derivative strike (once per target per 5s).
  K(20830, {
    init: function (u, b) {
      std(u, b);
      // ASSUMED: inspiration 2's "+15%" is added to the 30% dispel chance (45%).
      var p = 0.3 + (u.insp >= 2 ? 0.15 : 0), key = 'tamarT' + u.uid;
      b.on(u, 'statusApplied', function (e) {
        var t = e.tgt;
        if (e.kind !== 'buff' || t.side === u.side || !t.alive) return;
        if (t.flags[key] != null && b.t - t.flags[key] < 5) return;
        t.flags[key] = b.t;
        b.hit(u, t, { atk: 1.0 }, { el: DER, tag: 'passive' });
        if (t.alive && b.chance(p)) b.dispel(t, 1, 'buff');
      });
    },
    battle: function (u, b) {
      b.area(u, b.target(u)).forEach(function (t) {
        b.hit(u, t, { atk: 3.0 }, { el: 'Lightning', tag: 'battle', apply: [['Attack Penalty II', 0.75, 5, { skill: 'battle' }]] });
        if (t.alive && b.chance(0.75)) b.dispel(t, 1, 'buff');
      });
    },
    ult: function (u, b) {
      b.enemies(u).forEach(function (t) {
        var noBuff = !t.sts.some(function (s) { return s.kind === 'buff'; });
        b.hit(u, t, { atk: 7.0 }, { el: 'Lightning', tag: 'ult', apply: [['Buff Prohibition', 0.75, 10, { skill: 'ult' }]] });
        if (noBuff) b.apply(u, t, 'Stunned', 0.75, 5, { skill: 'ult' });
      });
    }
  });

  // The Dark Lady: when any unit dies, allies split its ATK, DEF and HP.
  // ASSUMED: her texts print no multipliers: battle hits are 150% ATK each and ult hits 350% ATK each (their sums match the 300% / 700% of comparable S1 Legendary support skills).
  // ASSUMED: debuffs with no printed chance or duration land at 100%, for 5s (battle) and 10s (ult).
  K(23011, {
    init: function (u, b) {
      std(u, b);
      var cap = u.insp >= 5 ? 0.35 : 0.3, healCap = u.insp >= 5 ? 0.15 : 0.1;
      // ASSUMED: the 30% cap is taken from her stats at battle start.
      var base = { atk: b.atk(u), def: b.def(u), hp: b.maxHp(u) };
      b.on(u, 'death', function (e) {
        var d = e.tgt, allies = b.allies(u, true);
        if (d === u || !allies.length) return;
        var n = allies.length, share = { atk: b.atk(d) / n, def: b.def(d) / n, hp: b.maxHp(d) / n };
        allies.forEach(function (a) {
          var g = a.flags.dlGain || (a.flags.dlGain = { atk: 0, def: 0, hp: 0 });
          var da = Math.max(0, Math.min(share.atk, cap * base.atk - g.atk));
          var dd = Math.max(0, Math.min(share.def, cap * base.def - g.def));
          var dh = Math.max(0, Math.min(share.hp, cap * base.hp - g.hp));
          g.atk += da; g.def += dd; g.hp += dh;
          a.s.atkF += da; a.s.defF += dd;
          a.s.hpF += dh; a.maxHp0 += dh; a.hp += dh;
          b.heal(u, a, Math.min(0.1 * b.maxHp(d), healCap * b.maxHp(a)), { tag: 'passive' });
        });
      });
    },
    battle: function (u, b) {
      var targets = shuffled(b, b.enemies(u)).slice(0, u.insp >= 3 ? 5 : 3);
      var ap = [['Attack Penalty II', 1, 5, { skill: 'battle' }]];
      if (u.insp >= 1) ap.push(['Healing Prohibition', 1, 5, { skill: 'battle' }]);
      for (var i = 0; i < 2; i++) targets.forEach(function (t) { b.hit(u, t, { atk: 1.5 }, { el: 'Necrotic', tag: 'battle', apply: i === 0 ? ap : null }); });
    },
    ult: function (u, b) {
      // ASSUMED: one 75% dispel roll per enemy; inspiration 2 raises it to 100%.
      var pd = u.insp >= 2 ? 1 : 0.75;
      b.enemies(u).forEach(function (t) {
        if (b.chance(pd)) { b.dispel(t, 99, 'buff'); t.shields = []; }
      });
      for (var i = 0; i < 2; i++) b.enemies(u).forEach(function (t) {
        b.hit(u, t, { atk: 3.5 }, { el: 'Necrotic', tag: 'ult', apply: i === 0 ? [['Buff Prohibition', 1, 10, { skill: 'ult' }]] : null });
      });
    }
  });

  // Ghul'ende: skills on enemies under 50% HP may Charm them.
  K(22310, {
    init: function (u, b) {
      std(u, b);
      if (u.insp >= 2) hitStackDR(b, u);
    },
    // ASSUMED: a failed 50% roll also counts as failing to Charm, so it gives Accuracy Penalty II; Healing Reduction only comes with a won 50% roll.
    disorder: function (u, b, t) {
      if (!t || !t.alive || frac(b, t) >= 0.5) return;
      var won = b.chance(0.5);
      var charmed = won && b.apply(u, t, CHARM, 1, 5, { skill: 'passive' });
      if (won) b.apply(u, t, HEAL_RED, 1, 5, { skill: 'passive' });
      if (!charmed) b.apply(u, t, 'Accuracy Penalty II', 1, 5, { skill: 'passive' });
    },
    battle: function (u, b) {
      var t = b.target(u);
      if (!t) return;
      this.disorder(u, b, t);
      b.apply(u, t, 'Stunned', 1, 3, { skill: 'battle' });
      // 3s, a hit every 0.6s = 5 hits.
      b.every(0.6, 3, function () {
        if (!t.alive) return;
        b.hit(u, t, { atk: 1.5 }, { el: 'Necrotic', tag: 'battle' });
        var got = Math.min(3, t.energy);
        b.energy(t, -3);
        b.energy(u, got);
        b.heal(u, u, { atk: 1.5 }, { tag: 'battle' });
      }, u);
    },
    ult: function (u, b) {
      var self = this;
      b.enemies(u).forEach(function (t) {
        self.disorder(u, b, t);
        b.hit(u, t, { atk: 7.2 }, { el: 'Necrotic', tag: 'ult', apply: [['Attack Penalty II', 0.75, 10, { skill: 'ult' }]] });
      });
      b.allies(u, true).forEach(function (a) {
        var n = b.dispel(a, 99, 'debuff');
        b.heal(u, a, { thp: 0.10 + 0.04 * n }, { tag: 'ult' });
      });
    }
  });

  // Donella: her puppet bird strikes a random enemy every 8s.
  K(21460, {
    init: function (u, b) {
      std(u, b);
      // ASSUMED: the puppet bird is not a unit: its strike is a 200% ATK hit credited to Donella every 8s from battle start.
      b.every(8, 600, function () {
        var t = pick(b, b.enemies(u));
        if (t) b.hit(u, t, { atk: 2.0 }, { el: 'Radiant', tag: 'passive', apply: [['Healing Prohibition', 0.75, 5, { skill: 'passive' }]] });
      }, u);
      if (u.insp >= 1) {
        // ASSUMED: inspiration 1 triggers on one hit of at least 20% of her max HP, and "a period" is 10s.
        u.flags.donT = -99;
        b.on(u, 'damaged', function (e) {
          if (e.tgt !== u || e.amount < 0.2 * b.maxHp(u) || b.t - u.flags.donT < 10) return;
          u.flags.donT = b.t;
          if (b.chance(0.5)) b.dispel(u, 1, 'debuff');
        });
      }
      if (u.insp >= 2) debuffExtender(b, u);
    },
    battle: function (u, b) {
      // ASSUMED: "deal ... to enemies" (no range printed) = enemies within range.
      b.area(u, b.target(u)).forEach(function (t) { b.hit(u, t, { atk: 4.0 }, { el: 'Radiant', tag: 'battle', apply: [['Stunned', 1, 3, { skill: 'battle' }]] }); });
    },
    ult: function (u, b) {
      b.enemies(u).forEach(function (t) {
        b.hit(u, t, { atk: 7.0 }, { el: 'Radiant', tag: 'ult', apply: [['Accuracy Penalty II', 0.75, 10, { skill: 'ult' }], ['Attack Penalty II', 0.75, 10, { skill: 'ult' }]] });
      });
    }
  });

  // ---- end of kits ----
})(typeof window !== 'undefined' ? window : globalThis);

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

  // Names the game shows for each Season 1 set (set family, piece names,
  // older names), so a screenshot can be matched (knowledge/data/gear-sets.json).
  S.SET_ALIASES = {"Ancestral Guidance": ["Ancestor Spirit's Guidance", "Mountain Echo"], "Chaos Symbiosis": ["Finality's Admonition", "Symbiotic Chaos"], "Clean Sweep": ["Unclean Bloodline"], "Death Record": ["Enwinding Flesh", "Inheritance Record"], "Fearless Challenge": ["Violence Incarnate"], "Imposing Presence": ["Emperor's Might"], "Impregnable": ["Supreme Blessing"], "Iron Bastion": ["Absolute Deterrence"], "Magic Crystal Refinement": ["Energy Siphoner"], "Mark of Austerity": ["Mark of Asceticism", "Wolfthorn Snare"], "Monelisse's Teardrop": ["Lunar Radiance"], "Schadenfreude": ["Tunnel King's Legacy"], "Sky Code Treaty": ["Skybound Alliance"], "Strike the Unprepared": ["Precise Carnage", "Precise Carnage Gauntlets"], "Ancestral Protection": ["Ancestral Protection Gloves", "Ancestral Protection Gloves+", "Ancestral Protection Hood", "Ancestral Protection Hood+", "Ancestral Protection Robe", "Ancestral Protection Robe+", "Ancestral Protection Staff", "Ancestral Protection Staff+"], "Brotherhood Spirit": ["Three-Ears Emblem", "Three-Ears Emblem Dagger", "Three-Ears Emblem Dagger+", "Three-Ears Emblem Gloves", "Three-Ears Emblem Gloves+", "Three-Ears Emblem Hood", "Three-Ears Emblem Hood+", "Three-Ears Emblem Light Armor", "Three-Ears Emblem Light Armor+"], "Cyril's Whisper": ["Cyril", "Cyril Gloves", "Cyril Gloves+", "Cyril Helmet", "Cyril Helmet+", "Cyril Light Armor", "Cyril Light Armor+", "Cyril Rapier", "Cyril Rapier+"], "Heart of the Gambler": ["Gambler", "Gambler Flintlock", "Gambler Flintlock+", "Gambler Gloves", "Gambler Gloves+", "Gambler Headgear", "Gambler Headgear+", "Gambler Light Armor", "Gambler Light Armor+", "Ranger's Heart [INFERRED: dragonheir.info 565 text, Dauntless DPS set; ATK%+Attack Speed]"], "Holy Hunter": ["Holy Hunter Gloves", "Holy Hunter Gloves+", "Holy Hunter Helmet", "Holy Hunter Helmet+", "Holy Hunter Light Armor", "Holy Hunter Light Armor+", "Holy Hunter Longbow", "Holy Hunter Longbow+"], "Imperial Executioner": ["Executioner", "Executioner Axe", "Executioner Axe+", "Executioner Gloves", "Executioner Gloves+", "Executioner Heavy Armor", "Executioner Heavy Armor+", "Executioner Helmet", "Executioner Helmet+"], "Platinum Knight Quality": ["Platinum Knight", "Platinum Knight Chain Mail", "Platinum Knight Gloves", "Platinum Knight Helmet", "Platinum Knight Rapier", "Platinum Knight's Refinement"], "Power of Tides": ["Intertidal", "Intertidal Crown", "Intertidal Gloves", "Intertidal Light Armor", "Intertidal Staff"], "Puppeteer's Inspiration": ["Puppeteer", "Puppeteer Gloves", "Puppeteer Gloves+", "Puppeteer Hammer", "Puppeteer Hammer+", "Puppeteer Headgear", "Puppeteer Headgear+", "Puppeteer Light Armor", "Puppeteer Light Armor+"], "Radiance of the Blue Oak": ["Radiance of the Blue Oak Gloves", "Radiance of the Blue Oak Hood", "Radiance of the Blue Oak Robe", "Radiance of the Blue Oak Staff"], "Revenge of the Fallen": ["Undead", "Undead Gloves", "Undead Helmet", "Undead Light Armor", "Undead Rapier"], "Rhapsodist's Calling": ["Rhapsodist", "Rhapsodist Gloves", "Rhapsodist Hammer", "Rhapsodist Headgear", "Rhapsodist Light Armor", "Zealot's Mission [INFERRED: dragonheir.info 565 text names it for 'utility sub-DPS requiring Hit Rate'; only S1 Legendary set with ATK%+Accuracy]"], "Tundra Tenacity": ["Tundra Guardian", "Tundra Guardian Battleaxe", "Tundra Guardian Battleaxe+", "Tundra Guardian Gloves", "Tundra Guardian Gloves+", "Tundra Guardian Heavy Armor", "Tundra Guardian Heavy Armor+", "Tundra Guardian Helmet", "Tundra Guardian Helmet+"], "Assassin Technique": ["Assassin", "Assassin Dagger", "Assassin Gloves", "Assassin Headgear", "Assassin Shrouded Armor"], "Barbarian": ["Barbarian Armor", "Barbarian Battleaxe", "Barbarian Gloves", "Barbarian Helmet"], "Blessing": ["Blessing Gloves", "Blessing Hood", "Blessing Robe", "Blessing Staff"], "Goblin Brawler": ["Goblin", "Goblin Chain Mail", "Goblin Cutlass", "Goblin Gloves", "Goblin Helmet"], "Granite Will": ["Granite", "Granite Gloves", "Granite Hammer", "Granite Heavy Armor", "Granite Helmet"], "Heart of Deer Herder": ["Deer Herder", "Deer Herder Crossbow", "Deer Herder Gloves", "Deer Herder Helmet", "Deer Herder Light Armor"], "Predator": ["Predator Gloves", "Predator Halberd", "Predator Helmet", "Predator Leather"], "Swift Shadow": ["Swift Shadow Dagger", "Swift Shadow Gloves", "Swift Shadow Headgear", "Swift Shadow Shrouded Armor"], "Guardian": ["Guardian Gloves", "Guardian Hammer", "Guardian Heavy Armor", "Guardian Helmet"], "Inquisitor": ["Inquisitor Crossbow", "Inquisitor Gloves", "Inquisitor Helmet", "Inquisitor Light Armor"], "Rage": ["Rage Chain Mail", "Rage Gloves", "Rage Helmet", "Rage Sword"]};
})(typeof window !== 'undefined' ? window : globalThis);

/*
 * Enemy presets for DHSim. Boss numbers are not published, so every preset is
 * built from a reference unit: the average naked stats of all Legendary heroes
 * at the chosen level, times multipliers. Treat them as test benches, not as
 * copies of real bosses, until real stats are measured.
 *
 * enemy options: {preset, level, hpX, atkX, defX, res, seconds, count}
 */
(function (root) {
  var S = root.DHSim || (typeof require !== 'undefined' ? require('./sim.js') : null);

  function refStats(level) {
    var D = S.data(), n = 0, acc = { hp: 0, atk: 0, def: 0 };
    for (var k in D.heroes) {
      var h = D.heroes[k];
      if (h.r !== 'Legendary' || !h.b.hp) continue;
      var s = S.nakedStats(h, level);
      acc.hp += s.hp; acc.atk += s.atk; acc.def += s.def; n++;
    }
    return { hp: acc.hp / n, atk: acc.atk / n, def: acc.def / n };
  }
  function unitSpec(name, st, opt) {
    return {
      name: name, isBoss: !!opt.isBoss, melee: opt.melee !== false, kit: opt.kit,
      custom: {
        h: null, notes: [],
        s: { hpB: st.hp, atkB: st.atk, defB: st.def, hpF: 0, atkF: 0, defF: 0, hpP: 0, atkP: 0, defP: 0,
          critRate: opt.critRate == null ? 0.1 : opt.critRate, critDmg: 0.5, acc: opt.acc || 0, res: opt.res || 0,
          ench: 0, haste: 0, atkSpd: 0, dmgBonus: 0, dmgRed: opt.dmgRed || 0, healP: 0, shieldP: 0,
          statusChance: 0, defIgnore: 0, resIgnore: 0 }
      },
      extra: { af: opt.af || 0.5, controlImmune: !!opt.controlImmune }
    };
  }
  var idle = { conf: 'preset', basic: function () {} };
  // A generic dungeon boss. Real bosses run a fixed cycle: one skill every 6 s,
  // three skills per 18 s cycle (Graves, Ancient Battlefield; Temporal Vortex
  // 5 s / 20 s; HellHades 2025-07-30, official intel screens). The cycle runs on
  // the boss's energy bar, so energy drain and Recharging Speed Penalty delay it,
  // as in game. Skill sizes are guesses:
  //   1) area hit on up to 3 heroes, 2) chain of 3 heavy hits on its target
  //   (the "tank killer"), 3) a hit on every hero.
  function bossKit(o) {
    var step = o.step || 6;
    return {
      conf: 'preset', ultFull: step, ultFirst: step,
      basic: function (u, b, t) { b.hit(u, t, { atk: 1.0 }, { tag: 'basic' }); },
      ult: function (u, b) {
        var k = (u.flags.bossSkill = ((u.flags.bossSkill || 0) % 3) + 1), t = b.target(u);
        if (!t) return;
        if (k === 1) b.area(u, t, 3).forEach(function (x) { b.hit(u, x, { atk: o.skillMult || 2.0 }, { tag: 'battle' }); });
        else if (k === 2) for (var i = 0; i < 3; i++) b.hit(u, t, { atk: o.chainMult || 1.5 }, { tag: 'battle' });
        else b.enemies(u).forEach(function (x) { b.hit(u, x, { atk: o.ultMult || 2.5 }, { tag: 'ult' }); });
      },
      init: function (u, b) {
        if (o.enrageAt) b.after(o.enrageAt, function () { b.buff(u, u, 'Enrage', 999, { atkP: o.enrageAtk || 1.0 }); }, u);
      }
    };
  }
  function scaled(e, d) {
    var r = refStats(e.level || 60);
    return { hp: r.hp * (e.hpX || d.hpX), atk: r.atk * (e.atkX == null ? d.atkX : e.atkX), def: r.def * (e.defX || d.defX) };
  }

  S.registerBoss('dummy', {
    name: 'Training dummy', conf: 'model', note: 'One target with endless HP and no attacks; DEF of a level-matched hero x1.2. Measures pure single-target DPS.',
    make: function (e) {
      var st = scaled(e, { hpX: 1, atkX: 0, defX: 1.2 });
      st.hp = 1e12;
      return { units: [unitSpec('Training dummy', st, { isBoss: true, kit: idle, res: e.res || 0 })] };
    }
  });
  S.registerBoss('dummy5', {
    name: 'Five dummies', conf: 'model', note: 'Five endless targets; measures area damage.',
    make: function (e) {
      var st = scaled(e, { hpX: 1, atkX: 0, defX: 1.2 });
      st.hp = 1e12;
      var list = [];
      for (var i = 0; i < (e.count || 5); i++) list.push(unitSpec('Dummy ' + (i + 1), st, { kit: idle, res: e.res || 0 }));
      return { units: list };
    }
  });
  function makeBoss(d) {
    return function (e) {
      var st = scaled(e, d);
      return { units: [unitSpec(e.name || 'Boss', st, { isBoss: true, controlImmune: true, kit: bossKit(e), res: e.res == null ? 30 : e.res, acc: e.acc || 30 })] };
    };
  }
  S.registerBoss('boss', {
    name: 'Generic boss', conf: 'estimated', note: 'Single boss on an 18 s cycle (a skill every 6 s: area hit, 3-hit chain on its target, hit on all heroes), immune to control. 40x the HP of a level-matched hero and 2.2x its ATK, tuned so a level-matched team wins with HP to spare. No source publishes boss HP/ATK/DEF, so these are test-bench numbers.',
    make: makeBoss({ hpX: 40, atkX: 2.2, defX: 1.2 })
  });
  S.registerBoss('bossHard', {
    name: 'Hard boss', conf: 'estimated', note: 'The generic boss with 2.8x ATK: a level-matched team survives only some of the time, so healing, shields and damage cuts decide the fight.',
    make: makeBoss({ hpX: 40, atkX: 2.8, defX: 1.2 })
  });
  S.registerBoss('waves', {
    name: 'Three waves', conf: 'estimated', note: 'Three waves of five mobs (4x hero HP, 0.6x ATK), the last led by an elite (20x HP). Stand-in for Goblin Lair style stages.',
    make: function (e) {
      var mob = scaled(e, { hpX: 4, atkX: 0.6, defX: 1.0 });
      var elite = scaled(e, { hpX: 20, atkX: 1.5, defX: 1.2 });
      var mk = function (n, st, k) { var w = []; for (var i = 0; i < n; i++) w.push(unitSpec('Mob ' + (i + 1), st, { kit: k, res: e.res || 0 })); return w; };
      var mobKit = { conf: 'preset', basic: function (u, b, t) { b.hit(u, t, { atk: 1.0 }, { tag: 'basic' }); } };
      var w3 = mk(4, mob, mobKit);
      w3.unshift(unitSpec('Elite', elite, { isBoss: true, controlImmune: true, kit: bossKit({ skillMult: 1.6, chainMult: 1.2, ultMult: 2.0 }), res: 30 }));
      return { waves: [mk(5, mob, mobKit), mk(5, mob, mobKit), w3] };
    }
  });

  S.refStats = refStats;
  S.enemyUnit = unitSpec;
  S.bossKit = bossKit;
})(typeof window !== 'undefined' ? window : globalThis);

/*
 * Season 1 dungeon bosses for DHSim, with their mechanics.
 *
 * Mechanics (what each skill does, who it targets, the 6 s skill rhythm) come
 * from the official boss pages on dragonheir.info (articles 836, 841, 846, 851,
 * 855; 2025-09-10) and HellHades (2025-07-30), summarised in
 * research/bosses.md. NUMBERS ARE NOT PUBLISHED ANYWHERE: HP, ATK, DEF and
 * every skill multiplier here are estimates on the same scale as the generic
 * boss (a level-matched reference hero x multipliers), scaled again by the
 * bossPower rule. Every preset lists its skills with the target rule, so the
 * UI can show who gets hit.
 *
 * enemy options: {preset, level, hpX, atkX, defX, res, acc, stage9}
 */
(function (root) {
  var S = root.DHSim || (typeof require !== 'undefined' ? require('./sim.js') : null);

  // ---- target rules (explicit per skill)
  var PICK = {
    // Front line first (melee heroes), the boss keeps its target until it dies; taunt wins.
    front: function (b, u) { return b.target(u); },
    random: function (b, u) { var e = b.targetable(u); return e[Math.floor(b.rand() * e.length)]; },
    highestAtk: function (b, u) { var e = b.targetable(u), best = null; e.forEach(function (x) { if (!best || b.atk(x) > b.atk(best)) best = x; }); return best; },
    // "Farthest from the boss": the back line (ranged heroes), random among them.
    farthest: function (b, u) {
      var e = b.targetable(u), back = e.filter(function (x) { return !x.melee; });
      var pool = back.length ? back : e;
      return pool[Math.floor(b.rand() * pool.length)];
    },
    lowestHp: function (b, u) { return b.lowestHp(b.targetable(u)); }
  };
  var TARGET_TEXT = { front: 'Front line (tank first)', random: 'Random hero', highestAtk: 'Highest ATK hero', farthest: 'Farthest hero (back line)', all: 'All heroes', area: 'Target + up to 2 nearby', self: 'Self', lowestHp: 'Lowest HP hero' };

  function scaled(e, d) {
    var r = S.refStats(e.level || 60), f = e._sf || 1;
    return { hp: r.hp * (e.hpX || d.hpX) * f, atk: r.atk * (e.atkX == null ? d.atkX : e.atkX) * f, def: r.def * (e.defX || d.defX) };
  }

  // ---- stages (the number you pick in game)
  // Boss level per stage comes from official screenshots (research/bosses.md:
  // Venom 8 -> Lv100, Ruins 7 -> Lv145, Battlefield 7 -> Lv160, Goblin 9 ->
  // Lv100). The presets are tuned so a team of level L wins with HP to spare
  // against a boss of level L + 40 (Venom 8 at level 60 is normal day-4
  // content, dragonheir.info 570). Each 10 boss levels above or below that
  // multiplies boss HP and ATK by 1.12 (estimated: hero stat growth per 10
  // levels near level 100). Domain and Vortex levels are not published.
  var STAGES = {
    harpy: { label: 'Stage', min: 1, max: 15, lv: function (s) { return 20 + 10 * s; } },
    xenos: { label: 'Stage', min: 1, max: 15, lv: function (s) { return 20 + 10 * s; } },
    scavenger: { label: 'Stage', min: 1, max: 15, lv: function (s) { return 20 + 10 * s; } },
    fyre: { label: 'Stage', min: 1, max: 9, lv: function (s) { return 5 + 20 * s; } },
    gruentius: { label: 'Stage', min: 1, max: 10, lv: function (s) { return 20 + 20 * s; } },
    goblin: { label: 'Stage', min: 1, max: 12, lv: function (s) { return 10 + 10 * s; } },
    flameDomain: { label: 'Stage', min: 1, max: 9, lv: function (s) { return 40 + 15 * s; } },
    tempestDomain: { label: 'Stage', min: 1, max: 9, lv: function (s) { return 40 + 15 * s; } },
    frostDomain: { label: 'Stage', min: 1, max: 9, lv: function (s) { return 40 + 15 * s; } },
    vortex: { label: 'Difficulty', min: 1, max: 4, lv: function (s) { return 40 + 20 * s; } }
  };
  function stageFactor(id, e) {
    var st = STAGES[id];
    if (!st || e.stage == null) return 1;
    var lv = st.lv(Math.max(st.min, Math.min(st.max, +e.stage)));
    return Math.max(0.25, Math.min(5, Math.pow(1.12, (lv - ((e.level || 60) + 40)) / 10)));
  }
  // The stage a team of this level fights at "normal" strength.
  function normalStage(id, level) {
    var st = STAGES[id]; if (!st) return null;
    var best = st.min, gap = 1e9;
    for (var s = st.min; s <= st.max; s++) { var g = Math.abs(st.lv(s) - ((level || 60) + 40)); if (g < gap) { gap = g; best = s; } }
    return best;
  }
  function boss(name, st, e, kit) {
    return S.enemyUnit(name, st, { isBoss: true, controlImmune: true, kit: kit, res: e.res == null ? 30 : e.res, acc: e.acc == null ? 30 : e.acc });
  }
  // A cycle kit: one skill every `step` s through the list, driven by the
  // boss's energy bar (energy drain and Recharging Speed Penalty delay it).
  function cycleKit(o) {
    var step = o.step || 6;
    return {
      conf: 'preset', ultFull: step, ultFirst: step,
      basic: o.basic || function (u, b, t) { b.hit(u, t, { atk: 1.0 }, { tag: 'basic' }); },
      ult: function (u, b) {
        var list = o.skills(u, b);
        var i = u.flags.cyc = ((u.flags.cyc == null ? -1 : u.flags.cyc) + 1) % list.length;
        u.flags.lastSkill = list[i].name;
        b.tr('bs', { s: u.uid, n: list[i].name });
        list[i].fn(u, b);
      },
      init: o.init
    };
  }
  function summon(b, u, spec) {
    var w = b.addUnit('B', spec, spec.extra);
    if (w.kit.init) w.kit.init(w, b);
    b.tr('sp', { g: w.uid, s: u.uid, n: w.name });
    return w;
  }
  var idle = { conf: 'preset', basic: function () {} };
  function skill(name, target, text, fn) { return { name: name, target: target, text: text, fn: fn }; }
  function info(list) { return list.map(function (s) { return { name: s.name, target: s.target, targetText: TARGET_TEXT[s.target] || s.target, text: s.text }; }); }

  // ------------------------------------------------ Grave of Venom: Deadly Harpy
  var HARPY = [
    skill('Poisonous Fletching', 'area', 'Area hit, dispels 1 buff from each hero hit, summons up to 2 Wisps.', null),
    skill("Harpy's Breath", 'front', 'Chain of 4 heavy hits on one hero: the tank killer.', null),
    skill("Harpy's Wrath", 'all', 'Hits every hero and shields every enemy unit.', null)
  ];
  S.registerBoss('harpy', {
    name: 'Deadly Harpy', dungeon: 'Grave of Venom', conf: 'estimated',
    note: 'Mechanics from the official boss page (dragonheir.info 851, 2025-09-10). Numbers are estimates: 35x hero HP, 2.6x ATK; Wisps 2.5x HP.',
    skills: info(HARPY),
    mechanics: ['Single-target attacks may call the Wisps to assist (less likely the more debuffs they carry).', 'A dying Wisp deals True damage to the Harpy (2% of its max HP, estimated).', 'Counters: Attack Penalty, Damage Reduction, healing on the tank.'],
    make: function (e) {
      var st = scaled(e, { hpX: 35, atkX: 2.6, defX: 1.2 });
      var wispSt = scaled(e, { hpX: 2.5, atkX: 0.9, defX: 0.8 });
      var wispKit = { conf: 'preset', basic: function () {}, init: function (w, b) { w.flags.wisp = true; } };
      function wisp(i) { return S.enemyUnit('Wisp', wispSt, { kit: wispKit, melee: false, res: e.res == null ? 30 : e.res }); }
      function wisps(b) { return b.units.filter(function (x) { return x.side === 'B' && x.alive && x.flags.wisp; }); }
      var kit = cycleKit({
        basic: function (u, b, t) {
          b.hit(u, t, { atk: 1.0 }, { tag: 'basic' });
          // Shadow Poison: Wisps assist single-target attacks.
          wisps(b).forEach(function (w) {
            var p = Math.max(0, 0.6 - 0.15 * b.countDebuffs(w));
            if (t.alive && b.chance(p)) b.hit(w, t, { atk: 0.8 }, { tag: 'basic' });
          });
        },
        skills: function () {
          HARPY[0].fn = function (u, b) {
            var t = b.target(u); if (!t) return;
            b.area(u, t, 3).forEach(function (x) { b.dispel(x, 1, 'buff'); b.hit(u, x, { atk: 1.8 }, { tag: 'battle' }); });
            var n = Math.min(2, 4 - wisps(b).length);
            for (var i = 0; i < n; i++) summon(b, u, wisp(i));
          };
          HARPY[1].fn = function (u, b) {
            var t = PICK.front(b, u);
            for (var i = 0; i < 4 && t && t.alive; i++) b.hit(u, t, { atk: 1.3 }, { tag: 'battle' });
          };
          HARPY[2].fn = function (u, b) {
            b.enemies(u).forEach(function (x) { b.hit(u, x, { atk: 1.5 }, { tag: 'ult' }); });
            b.units.filter(function (x) { return x.side === 'B' && x.alive; }).forEach(function (x) { b.shield(u, x, x === u ? 0.04 * b.maxHp(u) : 0.3 * b.maxHp(x), 10, { tag: 'boss' }); });
          };
          return HARPY;
        },
        init: function (u, b) {
          b.on(null, 'death', function (d) { if (d.tgt.flags.wisp && u.alive) b.hit(d.tgt, u, 0.02 * b.maxHp(u), { trueDmg: true, noCrit: true, tag: 'wisp', quiet: true }); });
        }
      });
      return { units: [boss('Deadly Harpy', st, e, kit)] };
    }
  });

  // ------------------------------------------ Grave of Curse: Blood Prince Xenos
  var XENOS = [
    skill('Rage of Blood', 'self', 'Attack Up for 12 s.', null),
    skill('Vampiric Shield', 'front', 'Big hit on one hero; the damage becomes his shield.', null),
    skill('Punishment of Blood', 'all', 'Dispels 1 buff from each hero, then hits everyone (more on unbuffed heroes from stage 9).', null)
  ];
  S.registerBoss('xenos', {
    name: 'Blood Prince Xenos', dungeon: 'Grave of Curse', conf: 'estimated',
    note: 'Mechanics from the official boss page (dragonheir.info 855, 2025-09-10). Numbers are estimates: 40x hero HP, 2.6x ATK; lifesteal 15% and max HP cut 25% of HP damage (capped at 40%).',
    skills: info(XENOS),
    mechanics: ['Blood Gush: HP damage he deals heals him and lowers the hero\'s max HP (shields block it).', 'Lower max HP also lowers how much a hero can be healed.', 'Counters: shields, buffs (from stage 9), burst damage.'],
    make: function (e) {
      var st = scaled(e, { hpX: 40, atkX: 2.6, defX: 1.2 });
      var kit = cycleKit({
        skills: function () {
          XENOS[0].fn = function (u, b) { b.buff(u, u, 'Attack Up', 12, null, { value: 0.3 }); };
          XENOS[1].fn = function (u, b) {
            var t = PICK.front(b, u); if (!t) return;
            var r = b.hit(u, t, { atk: 3.2 }, { tag: 'battle' });
            if (r.amount > 0) b.shield(u, u, r.amount, 12, { tag: 'boss' });
          };
          XENOS[2].fn = function (u, b) {
            b.enemies(u).forEach(function (x) {
              b.dispel(x, 1, 'buff');
              var bare = !x.sts.some(function (s) { return s.kind === 'buff'; });
              b.hit(u, x, { atk: 1.5 }, { tag: 'ult', bonus: e.stage9 && bare ? 0.5 : 0 });
            });
          };
          return XENOS;
        },
        init: function (u, b) {
          b.on(u, 'hpLost', function (d) {
            if (d.src !== u || d.tgt.side === u.side) return;
            b.heal(u, u, 0.15 * d.amount, { tag: 'boss' });
            var t = d.tgt;
            t.maxHpCut = Math.min(0.4 * t.maxHp0, (t.maxHpCut || 0) + 0.25 * d.amount);
            t.hp = Math.min(t.hp, b.maxHp(t));
          });
        }
      });
      return { units: [boss('Blood Prince Xenos', st, e, kit)] };
    }
  });

  // ------------------------------------------- Grave of Rot: Colossal Scavenger
  var ROT = [
    skill('Putrid Breath', 'all', 'Hits every hero; Poison (more stacks with Corruption) and Recharging Speed Penalty.', null),
    skill('Rotting Assault', 'random', 'Puts 2 debuffs on a random hero, then area damage around them (more targets with Corruption).', null),
    skill('Greedy Hunt', 'front', 'Devours its target: damage every second and heals itself, more per Poison stack; ends when the boss takes enough damage.', null)
  ];
  S.registerBoss('scavenger', {
    name: 'Colossal Scavenger', dungeon: 'Grave of Rot', conf: 'estimated',
    note: 'Mechanics from the official boss page (dragonheir.info 836, 2025-09-10). Numbers are estimates: 45x hero HP (high sustain), 2.6x ATK before its permanent Attack Penalty.',
    skills: info(ROT),
    mechanics: ['Always under Attack Penalty (-25%).', 'Basic attacks may Poison.', 'Every debuff on it gives Corruption, which strengthens Putrid Breath and Rotting Assault.', 'Greedy Hunt ends early after the boss takes 6% of its max HP (estimated).'],
    make: function (e) {
      var st = scaled(e, { hpX: 45, atkX: 2.6, defX: 1.2 });
      var kit = cycleKit({
        basic: function (u, b, t) { b.hit(u, t, { atk: 1.0 }, { tag: 'basic', apply: [['Poison', 0.5, 8]] }); },
        skills: function () {
          ROT[0].fn = function (u, b) {
            var stacks = 2 + Math.floor((u.flags.corr || 0) / 6);
            b.enemies(u).forEach(function (x) { b.hit(u, x, { atk: 1.1 }, { tag: 'ult', apply: [['Poison', 0.8, 8, { stacks: stacks }], ['Recharging Speed Penalty', 0.6, 6]] }); });
          };
          ROT[1].fn = function (u, b) {
            var t = PICK.random(b, u); if (!t) return;
            b.apply(u, t, 'Defense Penalty I', 1, 8);
            b.apply(u, t, 'Healing Reduction', 1, 8);
            b.area(u, t, 2 + Math.floor((u.flags.corr || 0) / 8)).forEach(function (x) { b.hit(u, x, { atk: 1.6 }, { tag: 'battle' }); });
          };
          ROT[2].fn = function (u, b) {
            var t = PICK.front(b, u); if (!t) return;
            if (!b.apply(u, t, 'Devoured', 1, 6, { ignoreRes: true })) return;
            var start = u.rec.taken, hunt = { on: true };
            for (var i = 1; i <= 6; i++) b.after(i, function () {
              if (!hunt.on || !t.alive || !u.alive) return;
              if (u.rec.taken - start >= 0.06 * b.maxHp(u)) { hunt.on = false; b.remove(t, 'Devoured'); return; }
              b.hit(u, t, { atk: 0.5 }, { tag: 'battle' });
              b.heal(u, u, (0.005 + 0.001 * b.stacks(t, 'Poison')) * b.maxHp(u), { tag: 'boss' });
            }, u);
          };
          return ROT;
        },
        init: function (u, b) {
          u.s.atkP -= 0.25;
          u.flags.corr = 0;
          b.on(u, 'debuffApplied', function (d) { if (d.tgt === u) u.flags.corr = Math.min(30, u.flags.corr + 1); });
        }
      });
      return { units: [boss('Colossal Scavenger', st, e, kit)] };
    }
  });

  // -------------------------------- Ancient Battlefield: Soul Devourer Gruentius
  var GRU = [
    skill("Berserker's Wrath (Shield)", 'farthest', 'Stuns the farthest hero 4 s. If the stun misses, the boss Backfires: -30% damage dealt, +30% taken for 8 s.', null),
    skill('Devouring Shadows (Shield)', 'self', 'Switches to Sword Form and gains Attack Up.', null),
    skill("Berserker's Wrath (Sword)", 'highestAtk', 'Huge hit on the hero with the highest ATK.', null),
    skill('Devouring Shadows (Sword)', 'all', 'Hits everyone and dispels ALL their buffs; gains permanent damage per buff dispelled; back to Shield Form with Defense Up.', null)
  ];
  S.registerBoss('gruentius', {
    name: 'Soul Devourer Gruentius', dungeon: 'Ancient Battlefield', conf: 'estimated',
    note: 'Mechanics from the official boss page (dragonheir.info 841, 2025-09-10). Numbers are estimates: 40x hero HP, 2.2x ATK.',
    skills: info(GRU),
    mechanics: ['Shield Form: basic attacks hit every hero (small).', 'Sword Form: basic attacks are heavy single hits.', 'Resistance on the back line makes the stun miss, which weakens the boss.'],
    make: function (e) {
      var st = scaled(e, { hpX: 40, atkX: 2.2, defX: 1.2 });
      var kit = cycleKit({
        basic: function (u, b, t) {
          if (u.flags.sword) b.hit(u, t, { atk: 1.6 }, { tag: 'basic' });
          else b.enemies(u).forEach(function (x) { b.hit(u, x, { atk: 0.4 }, { tag: 'basic' }); });
        },
        skills: function () {
          GRU[0].fn = function (u, b) {
            var t = PICK.farthest(b, u); if (!t) return;
            if (!b.apply(u, t, 'Stunned', 1, 4)) b.buff(u, u, 'Backfire', 8, { dmgBonus: -0.3, vuln: 0.3 });
          };
          GRU[1].fn = function (u, b) { u.flags.sword = true; b.buff(u, u, 'Attack Up', 12, null, { value: 0.3 }); };
          GRU[2].fn = function (u, b) { var t = PICK.highestAtk(b, u); if (t) b.hit(u, t, { atk: 3.0 }, { tag: 'battle' }); };
          GRU[3].fn = function (u, b) {
            var n = 0;
            b.enemies(u).forEach(function (x) { n += b.dispel(x, 99, 'buff'); b.hit(u, x, { atk: 1.4 }, { tag: 'ult' }); });
            u.s.dmgBonus += 0.02 * n;
            u.flags.sword = false;
            b.buff(u, u, 'Defense Up II', 12);
          };
          return GRU;
        }
      });
      return { units: [boss('Soul Devourer Gruentius', st, e, kit)] };
    }
  });

  // --------------------------------------- Heretical Ruins: Dead Phoenix - Fyre
  var FYRE = [
    skill('Scorch', 'front', 'Single hit that splashes to every Burned hero.', null),
    skill('Nirvana', 'self', 'Hatches 2 eggs; while they live the Phoenix is Invisible and the eggs heal it.', null),
    skill('Fire of Dead Phoenix', 'all', 'Heavy hit on every hero and Burn on all.', null)
  ];
  S.registerBoss('fyre', {
    name: 'Dead Phoenix - Fyre', dungeon: 'Heretical Ruins', conf: 'estimated',
    note: 'Mechanics from the official boss page (dragonheir.info 846, 2025-09-10). Numbers are estimates: 35x hero HP, 2.2x ATK; eggs 2.5x hero HP, each heals 0.5% of the boss max HP per second; hatches at most every 36 s; Invisible up to 12 s.',
    skills: info(FYRE),
    mechanics: ['While eggs live the boss is Invisible: heroes must kill the eggs first.', 'Burn stacks on heroes make Scorch splash.', 'Counters: area damage for the eggs, cleanse for Burn.'],
    make: function (e) {
      var st = scaled(e, { hpX: 35, atkX: 2.2, defX: 1.2 });
      var eggSt = scaled(e, { hpX: 2.5, atkX: 0, defX: 1.0 });
      var eggKit = { conf: 'preset', basic: function () {}, init: function (w) { w.flags.egg = true; } };
      function eggs(b) { return b.units.filter(function (x) { return x.side === 'B' && x.alive && x.flags.egg; }); }
      var kit = cycleKit({
        skills: function () {
          FYRE[0].fn = function (u, b) {
            var t = PICK.front(b, u); if (!t) return;
            b.hit(u, t, { atk: 2.4 }, { tag: 'battle' });
            b.enemies(u).forEach(function (x) { if (x !== t && b.has(x, 'Burn')) b.hit(u, x, { atk: 0.8 }, { tag: 'battle' }); });
          };
          FYRE[1].fn = function (u, b) {
            // Hatches at most every 36 s (estimated); otherwise it uses Scorch.
            if (eggs(b).length || b.t - (u.flags.hatchT || -99) < 36) { FYRE[0].fn(u, b); return; }
            u.flags.hatchT = b.t;
            for (var i = 0; i < 2; i++) summon(b, u, S.enemyUnit('Phoenix Egg', eggSt, { kit: eggKit, melee: false }));
            b.apply(u, u, 'Invisibility', 1, 12);
          };
          FYRE[2].fn = function (u, b) { b.enemies(u).forEach(function (x) { b.hit(u, x, { atk: 1.5 }, { tag: 'ult', apply: [['Burn', 0.9, 8, { stacks: 2 }]] }); }); };
          return FYRE;
        },
        init: function (u, b) {
          b.on(u, 'second', function (s) {
            if (s.u !== u) return;
            var n = eggs(b).length;
            if (n) b.heal(u, u, 0.005 * n * b.maxHp(u), { tag: 'boss' });
            else if (b.has(u, 'Invisibility')) b.remove(u, 'Invisibility');
          });
        }
      });
      return { units: [boss('Dead Phoenix - Fyre', st, e, kit)] };
    }
  });

  // ----------------------------------------------- Goblin Lair (EXP / Gold)
  // 6 waves of goblins, no boss, "they don't hit very hard" (dragonheir.info
  // 584/587, 2025-06-26). Legacy difficulty 5 at team level ~60: the team
  // dealt 718,268 damage in 58 s, so the whole lair is about 60x a hero's HP:
  // 6 waves x 5 goblins x 2x hero HP. Stars: 3 if more than 50 s left, 2 if
  // more than 25 s left. Time limit not published: 120 s (estimated).
  S.registerBoss('goblin', {
    name: 'Goblin waves', dungeon: 'Goblin Lair', conf: 'estimated', seconds: 120,
    stars: [[50, 3], [25, 2], [0, 1]],
    note: 'Structure from dragonheir.info 584/587 (2025-06-26): 6 waves, no boss, rewards by clear speed. Size from the legacy difficulty 5 statistics screen (718k damage in 58 s at level 60). Time limit 120 s is an estimate.',
    skills: [{ name: 'Goblin attacks', target: 'front', targetText: TARGET_TEXT.front, text: 'Weak hits, mostly on the front line.' }],
    mechanics: ['6 waves of 5 goblins, no boss.', 'Clear speed decides the stars: 3 stars with more than 50 s left.', 'Area damage heroes clear it fastest; a tank is optional.'],
    make: function (e) {
      var gob = scaled(e, { hpX: 2, atkX: 0.35, defX: 0.9 });
      var kit = { conf: 'preset', basic: function (u, b, t) { b.hit(u, t, { atk: 1.0 }, { tag: 'basic' }); } };
      var waves = [];
      for (var w = 0; w < 6; w++) {
        var list = [];
        for (var i = 0; i < 5; i++) list.push(S.enemyUnit('Goblin ' + (w + 1) + '-' + (i + 1), gob, { kit: kit, melee: i < 3, res: e.res || 0 }));
        waves.push(list);
      }
      return { waves: waves };
    }
  });

  // Talent dungeons: each boss counters two elements. "X heroes deal less
  // damage and take more damage" (dragonheir.info 584); the size is not
  // published: -30% dealt, +30% taken (estimated).
  var DOMAIN_PEN = 0.3;
  function counterElements(b, els, alsoHaste) {
    b.units.forEach(function (x) {
      if (x.side !== 'A' || !x.h || els.indexOf(x.h.el) < 0) return;
      x.s.dmgBonus = (x.s.dmgBonus || 0) - DOMAIN_PEN;
      x.s.vuln = (x.s.vuln || 0) + DOMAIN_PEN;
      x.flags.countered = true;
    });
  }

  // ---------------------------- Flame Domain (Talent - Wildfire): Searing Lord
  var FLAME = [
    skill('Searing Strike', 'front', 'Heavy hit with Burn on its target.', null),
    skill('Flame Wave', 'all', 'Hits every hero and puts Burn on them.', null),
    skill('Inferno', 'all', 'Ultimate: hits everyone, more for every Burn stack on the team.', null)
  ];
  S.registerBoss('flameDomain', {
    name: 'Searing Lord', dungeon: 'Flame Domain', altName: 'Talent - Wildfire', conf: 'estimated',
    note: 'Mechanics from dragonheir.info 584 and 589 (2025-06-26): counters Fire and Poison heroes, Burn from the first two skills, Ultimate scales with all Burn stacks. Numbers are estimates: 35x hero HP, 2.6x ATK, countered heroes -30% damage dealt and +30% taken.',
    skills: info(FLAME),
    mechanics: ['Fire and Poison heroes deal less and take more damage here.', 'Every Burn stack on your team makes the Ultimate bigger.', 'Counters: Debuff Immunity, cleanse, Defense Up.'],
    make: function (e) {
      var st = scaled(e, { hpX: 35, atkX: 2.6, defX: 1.2 });
      var kit = cycleKit({
        skills: function () {
          FLAME[0].fn = function (u, b) { var t = PICK.front(b, u); if (t) b.hit(u, t, { atk: 2.4 }, { tag: 'battle', apply: [['Burn', 0.9, 8, { stacks: 2 }]] }); };
          FLAME[1].fn = function (u, b) { b.enemies(u).forEach(function (x) { b.hit(u, x, { atk: 0.9 }, { tag: 'battle', apply: [['Burn', 0.8, 8]] }); }); };
          FLAME[2].fn = function (u, b) {
            var n = 0; b.enemies(u).forEach(function (x) { n += b.stacks(x, 'Burn'); });
            b.enemies(u).forEach(function (x) { b.hit(u, x, { atk: 1.0 + 0.12 * n }, { tag: 'ult' }); });
          };
          return FLAME;
        },
        init: function (u, b) { counterElements(b, ['Fire', 'Poison']); }
      });
      return { units: [boss('Searing Lord', st, e, kit)] };
    }
  });

  // ------------------------ Tempest Domain (Talent - Resplendence): Lord of Lightning
  var TEMPEST = [
    skill('Thunder Strike', 'front', 'Heavy hit on its target.', null),
    skill('Chain Lightning', 'random', 'Hits a random hero and jumps to 2 more.', null),
    skill('Brood of Storms', 'self', 'Ultimate: hurts itself, then 5 hatchlings land 3 s later. Each living hatchling gives the boss +10% damage (max +50%).', null)
  ];
  S.registerBoss('tempestDomain', {
    name: 'Lord of Lightning', dungeon: 'Tempest Domain', altName: 'Talent - Resplendence', conf: 'estimated',
    note: 'Mechanics from dragonheir.info 584 and 590 (2025-06-26): counters Lightning and Radiance heroes; every heal gives BOTH sides stacking skill acceleration; the Ultimate hurts the boss and drops 5 hatchlings, living hatchlings raise boss damage by 50%. Numbers are estimates: 35x hero HP, 2.5x ATK, +3% recharge per heal stack (max 20 stacks), self-damage 5% max HP.',
    skills: info(TEMPEST),
    mechanics: ['Lightning and Radiance heroes deal less and take more damage here.', 'Every heal speeds up skills on both sides: more healers = faster fight, but the boss attacks more often.', 'Kill the hatchlings fast: while they live the boss hits harder.'],
    make: function (e) {
      var st = scaled(e, { hpX: 35, atkX: 2.5, defX: 1.2 });
      var hatchSt = scaled(e, { hpX: 1.2, atkX: 0.5, defX: 0.8 });
      var hatchKit = { conf: 'preset', basic: function (u, b, t) { b.hit(u, t, { atk: 1.0 }, { tag: 'basic' }); }, init: function (w) { w.flags.hatch = true; } };
      function hatchlings(b) { return b.units.filter(function (x) { return x.side === 'B' && x.alive && x.flags.hatch; }); }
      var kit = cycleKit({
        skills: function () {
          TEMPEST[0].fn = function (u, b) { var t = PICK.front(b, u); if (t) b.hit(u, t, { atk: 2.6 }, { tag: 'battle', bonus: 0.1 * hatchlings(b).length }); };
          TEMPEST[1].fn = function (u, b) {
            var t = PICK.random(b, u); if (!t) return;
            b.area(u, t, 3).forEach(function (x) { b.hit(u, x, { atk: 1.3 }, { tag: 'battle', bonus: 0.1 * hatchlings(b).length }); });
          };
          TEMPEST[2].fn = function (u, b) {
            b.damage(u, 0.05 * b.maxHp(u), null, { tag: 'self' });
            b.after(3, function () { for (var i = 0; i < 5; i++) if (hatchlings(b).length < 5) summon(b, u, S.enemyUnit('Hatchling', hatchSt, { kit: hatchKit, melee: false })); }, u);
          };
          return TEMPEST;
        },
        init: function (u, b) {
          counterElements(b, ['Lightning', 'Radiance']);
          var stacks = 0;
          b.on(null, 'healed', function (d) {
            if (stacks >= 20 || d.amount <= 0 || d.o.tag === 'boss') return;
            stacks++;
            b.units.forEach(function (x) { x.s.rechargeUp = (x.s.rechargeUp || 0) + 0.03; });
          });
        }
      });
      return { units: [boss('Lord of Lightning', st, e, kit)] };
    }
  });

  // ------------------------- Frost Domain (Talent - Permafrost): Lady of Frostthorn
  var FROST = [
    skill('Frostbite', 'all', 'Attack Penalty on every hero (cleanse it or use Debuff Immunity).', null),
    skill('Ice Lance', 'front', 'Heavy hit on its target.', null),
    skill('Frozen Domain', 'all', 'Ultimate: hits everyone and Stuns them 5 s.', null)
  ];
  S.registerBoss('frostDomain', {
    name: 'Lady of Frostthorn', dungeon: 'Frost Domain', altName: 'Talent - Permafrost', conf: 'estimated',
    note: 'Mechanics from dragonheir.info 584 and 591 (2025-06-26): counters Ice and Necrosis heroes; gains Damage Reduction each time she lands a debuff; first skill lowers your attack; Ultimate is an area Stun for 5 s. Numbers are estimates: 35x hero HP, 2.5x ATK, +4% Damage Reduction per debuff landed (max 40%, lost when she is hit 10 times).',
    skills: info(FROST),
    mechanics: ['Ice and Necrosis heroes deal less and take more damage here.', 'Each debuff she lands gives her Damage Reduction; many fast hits strip it.', 'Ultimate stuns the whole team for 5 s: Control Immunity helps.'],
    make: function (e) {
      var st = scaled(e, { hpX: 35, atkX: 2.5, defX: 1.2 });
      var kit = cycleKit({
        skills: function () {
          FROST[0].fn = function (u, b) { b.enemies(u).forEach(function (x) { b.hit(u, x, { atk: 0.8 }, { tag: 'battle', apply: [['Attack Penalty II', 0.85, 10]] }); }); };
          FROST[1].fn = function (u, b) { var t = PICK.front(b, u); if (t) b.hit(u, t, { atk: 2.8 }, { tag: 'battle' }); };
          FROST[2].fn = function (u, b) { b.enemies(u).forEach(function (x) { b.hit(u, x, { atk: 1.2 }, { tag: 'ult', apply: [['Stunned', 0.75, 5]] }); }); };
          return FROST;
        },
        init: function (u, b) {
          counterElements(b, ['Ice', 'Necrosis']);
          var dr = 0, hits = 0;
          b.on(null, 'debuffApplied', function (d) { if (d.src === u && d.tgt.side === 'A' && dr < 0.4) { dr += 0.04; u.s.dmgRed = (u.s.dmgRed || 0) + 0.04; } });
          b.on(null, 'hit', function (d) {
            if (d.tgt !== u || dr <= 0 || ++hits < 10) return;
            hits = 0; u.s.dmgRed -= dr; dr = 0;
          });
        }
      });
      return { units: [boss('Lady of Frostthorn', st, e, kit)] };
    }
  });

  // ------------------------------------------- Temporal Vortex (S1): Sea King
  // Daily score boss: the score is the damage dealt before the team falls.
  // S1/Beginner boss Sea King: "Call of Lightning" hits the hero with the
  // highest HP and grows over the fight (dragonheir.info 570, 1149, 1597;
  // guides stack 60-70k HP on one hero to take it). Skill every 5 s (20 s
  // cycle, HellHades 2025-07-30). "Early boss attack damage is pretty low"
  // (dragonheir.info 586). Good teams survive about 8 minutes (1597).
  // CALIBRATED 2026-10-25 on Darko's in-game Statistics screen (Difficulty I,
  // 8:00, nobody died; Lv59 Auster/Hvitar/Hochadir/Oggok/Ergander, total
  // 5,533,656; damage taken 150-240k on EVERY hero, Oggok healing 695k):
  // boss DEF 0.6x, takes +30% damage, ATK 4.0x, Riptide 350% on all,
  // Call of Lightning 200%, basics and Tidal Slam on random heroes (taunt
  // wins), +4% damage per 20 s cycle. The sim now gives 5.53M with every
  // hero within 20% of the game. One fight only: re-check with more.
  var VORTEX = [
    skill('Tidal Slam', 'random', 'Hit on a random hero (the taunter while Taunt lasts).', null),
    skill('Call of Lightning', 'highestHp', 'Hits the hero with the HIGHEST HP; grows stronger every cycle.', null),
    skill('Riptide', 'all', 'Hits every hero: most of the damage in this fight.', null),
    skill('Call of Lightning', 'highestHp', 'Again on the highest-HP hero.', null)
  ];
  TARGET_TEXT.highestHp = 'Highest HP hero';
  S.registerBoss('vortex', {
    name: 'Sea King', dungeon: 'Temporal Vortex', conf: 'estimated', seconds: 480, score: true,
    note: 'Score boss: the result is total damage before the team falls or 8 minutes pass. Mechanics from dragonheir.info 570, 586, 1149, 1597: Call of Lightning on the highest-HP hero, damage low early and rising. Numbers calibrated on one real in-game fight (Difficulty I, Lv59 team, 5.53M): boss cannot die, hits spread over all heroes, Riptide is the main damage, +4% damage per 20 s cycle.',
    skills: info(VORTEX),
    mechanics: ['Score = damage dealt. The fight goes on until your team falls (or 8 minutes).', 'Call of Lightning always hits your highest-HP hero: give one tanky hero the most HP.', 'The boss gets stronger every 20 s.'],
    make: function (e) {
      var st = scaled(e, { hpX: 100000, atkX: 4.0, defX: 0.6 });
      function ramp(u, b) { return Math.pow(1.04, Math.floor(b.t / 20)) - 1; }
      function highestHp(b, u) { var best = null; b.targetable(u).forEach(function (x) { if (!best || b.maxHp(x) > b.maxHp(best)) best = x; }); return best; }
      var kit = cycleKit({
        step: 5,
        // Basic attacks spread over the team (CALIBRATED: in game every hero takes 16-26% of the damage).
        basic: function (u, b, t) { var x = b.has(u, 'Taunt') ? t : PICK.random(b, u); if (x) b.hit(u, x, { atk: 1.0 }, { tag: 'basic', bonus: ramp(u, b) }); },
        init: function (u) { u.flags.endless = true; u.s.vuln = (u.s.vuln || 0) + 0.3; },
        skills: function () {
          VORTEX[0].fn = function (u, b) { var t = b.has(u, 'Taunt') ? PICK.front(b, u) : PICK.random(b, u); if (t) b.hit(u, t, { atk: 1.8 }, { tag: 'battle', bonus: ramp(u, b) }); };
          VORTEX[1].fn = VORTEX[3].fn = function (u, b) { var t = highestHp(b, u); if (t) b.hit(u, t, { atk: 2.0 }, { tag: 'battle', bonus: ramp(u, b) }); };
          VORTEX[2].fn = function (u, b) { b.enemies(u).forEach(function (x) { b.hit(u, x, { atk: 3.5 }, { tag: 'ult', bonus: ramp(u, b) }); }); };
          return VORTEX;
        }
      });
      return { units: [boss('Sea King', st, e, kit)] };
    }
  });

  // Stages, S1 availability and what each dungeon drops, for every preset.
  var META = {
    harpy: { s1: true, farm: 'Weapons, helmets' }, xenos: { s1: true, farm: 'Armor' }, scavenger: { s1: true, farm: 'Gloves' },
    fyre: { s1: true, farm: 'Positive runes' }, gruentius: { s1: true, farm: 'Negative runes' },
    goblin: { s1: true, farm: 'EXP, Gold' }, flameDomain: { s1: true, farm: 'Talent Stones' }, tempestDomain: { s1: true, farm: 'Talent Stones' },
    frostDomain: { s1: true, farm: 'Talent Stones' }, vortex: { s1: true, farm: 'Daily score ranking' }
  };
  Object.keys(STAGES).forEach(function (id) {
    var p = S.bosses()[id]; if (!p) return;
    var make = p.make, st = STAGES[id];
    p.stages = { label: st.label, min: st.min, max: st.max, level: st.lv };
    p.s1 = META[id].s1; p.farm = META[id].farm;
    p.make = function (e, opts) {
      var c = {}; for (var k in e) c[k] = e[k];
      c._sf = stageFactor(id, e);
      return make(c, opts);
    };
  });
  S.stageFactor = stageFactor;
  S.normalStage = normalStage;

  // Generic boss gets its skill list too, for the UI.
  var gen = S.bosses().boss, hard = S.bosses().bossHard;
  var GEN = [
    { name: 'Area strike', target: 'area', targetText: TARGET_TEXT.area, text: 'Hits its target and up to 2 nearby heroes.' },
    { name: 'Triple strike', target: 'front', targetText: TARGET_TEXT.front, text: '3 heavy hits on its target.' },
    { name: 'Wave', target: 'all', targetText: TARGET_TEXT.all, text: 'Hits every hero.' }
  ];
  if (gen) gen.skills = GEN;
  if (hard) hard.skills = GEN;

  S.TARGET_TEXT = TARGET_TEXT;
})(typeof window !== 'undefined' ? window : globalThis);

/*
 * Survival analysis for DHSim (v0.3): the questions "do we live, who dies and
 * when, how good is our defense, do we need a healer". Everything here is
 * async and yields between small batches, so a browser page stays smooth
 * while hundreds of fights run. Works the same in Node.
 *
 *   DHSim.survival.run(opts, {runs, onProgress})        -> simulate() result
 *   DHSim.survival.breakingPoint(opts, {runs})           -> boss strength the team still beats 50% of the time
 *   DHSim.survival.healerCheck(opts, pool, {runs})       -> team with and without healers, side by side
 *   DHSim.survival.robustness(opts, {runs})              -> win rate under every assumed-rule extreme
 *   DHSim.survival.defense(result, opts)                 -> effective HP per hero and seconds to fall alone
 *   DHSim.survival.fromAccount(json)                     -> loadout specs from a "dragonheir-account" export
 */
(function (root) {
  var S = root.DHSim || (typeof require !== 'undefined' ? require('./sim.js') : null);
  function tick() { return new Promise(function (r) { setTimeout(r, 0); }); }
  function withRules(opts, extra) { return Object.assign({}, opts, { rules: Object.assign({}, opts.rules || {}, extra) }); }
  function rule(opts, k) { var r = opts.rules || {}; return r[k] != null ? r[k] : S.RULE_INFO[k].v; }

  // Monte Carlo in batches. Same seeds as DHSim.simulate, so results match it exactly.
  async function run(opts, o) {
    o = o || {};
    var runs = o.runs || opts.runs || 200, batch = o.batch || 10, all = [];
    for (var i = 0; i < runs; i += batch) {
      all = all.concat(S.runBatch(opts, i, Math.min(batch, runs - i)));
      if (o.onProgress) o.onProgress(all.length / runs);
      if (o.cancel && o.cancel()) throw new Error('cancelled');
      await tick();
    }
    return S.summarize(all, opts);
  }

  // Raise or lower the boss strength rule until the team wins half the time.
  // Answers "how much stronger can this boss get before we lose?"
  async function breakingPoint(opts, o) {
    o = o || {};
    var runs = o.runs || 40, base = rule(opts, 'bossPower'), lo = o.lo || 0.3, hi = o.hi || 4, steps = o.steps || 7, done = 0;
    var cache = {};
    async function winAt(p) {
      if (cache[p] != null) return cache[p];
      var r = await run(withRules(opts, { bossPower: p }), { runs: runs, batch: 20, cancel: o.cancel });
      done++; if (o.onProgress) o.onProgress(done / (steps + 2));
      return (cache[p] = r.winRate);
    }
    var wLo = await winAt(lo), wHi = await winAt(hi);
    if (wLo < 0.5) return { power: lo, margin: lo / base, capped: 'low' };
    if (wHi >= 0.5) return { power: hi, margin: hi / base, capped: 'high' };
    for (var i = 0; i < steps; i++) {
      var mid = Math.round(Math.sqrt(lo * hi) * 1000) / 1000;
      if ((await winAt(mid)) >= 0.5) lo = mid; else hi = mid;
    }
    var p = Math.round((lo + hi) / 2 * 100) / 100;
    return { power: p, margin: p / base };
  }

  // Heroes in `pool` (names or ids) that heal or shield, tried in every slot.
  // The test runs at a harder boss than the current one (`stress`, default the
  // breaking point) so differences in survival show up.
  async function healerCheck(opts, pool, o) {
    o = o || {};
    var runs = o.runs || 60, stress = o.stress || rule(opts, 'bossPower');
    var sOpts = withRules(opts, { bossPower: stress });
    var inTeam = opts.team.map(function (sp) { return S.hero(sp.hero).id; });
    var base = await run(sOpts, { runs: runs, batch: 20 });
    var healers = (o.healers || pool).filter(function (n) { return inTeam.indexOf(S.hero(n).id) < 0 && isSustain(n); });
    // Healers go in for the 2 heroes that add the least (lowest damage share,
    // never the hero taking most hits or one that already heals or shields).
    var totalTaken = base.perHero.reduce(function (s, x) { return s + x.taken; }, 0) || 1;
    var tank = base.perHero.slice().sort(function (a, b) { return b.taken - a.taken; })[0];
    var slots = o.slots || base.perHero.filter(function (p) { return p !== tank && p.healing + p.shielding < 0.02 * totalTaken; })
      .sort(function (a, b) { return a.share - b.share; }).slice(0, 2).map(function (p) { return p.slot; });
    var jobs = [];
    healers.forEach(function (n) { slots.forEach(function (slot) { jobs.push({ hero: n, slot: slot }); }); });
    // Also: each sustain hero already in the team taken out for the best damage hero of the pool.
    var teamSustain = base.perHero.filter(function (p) { return p.healing + p.shielding > 0.02 * totalTaken; });
    var dps = (o.dps || pool).filter(function (n) { return inTeam.indexOf(S.hero(n).id) < 0 && !isSustain(n); }).slice(0, o.maxDps || 4);
    teamSustain.forEach(function (p) { dps.forEach(function (n) { jobs.push({ hero: n, slot: p.slot, without: p.name }); }); });
    var rows = [], done = 0;
    for (var j = 0; j < jobs.length; j++) {
      var jb = jobs[j], team = opts.team.slice();
      team[jb.slot] = { hero: jb.hero, level: opts.team[jb.slot].level || 60 };
      var r = await run(Object.assign({}, sOpts, { team: team }), { runs: runs, batch: 20, cancel: o.cancel });
      rows.push({ hero: S.hero(jb.hero).n, out: S.hero(opts.team[jb.slot].hero).n, slot: jb.slot, without: jb.without || null,
        win: r.winRate, hpLeft: r.teamHpLeft.mean, deaths: r.perHero.reduce(function (s, p) { return s + p.deathRate; }, 0), ttk: r.ttk ? r.ttk.p50 : null,
        healPs: r.survival.healPs, absorbPs: r.survival.absorbPs });
      done++; if (o.onProgress) o.onProgress(done / jobs.length);
    }
    function score(x) { return x.win * 1000 + x.hpLeft * 100 - x.deaths; }
    // Best slot per added healer; best replacement per removed healer.
    var best = {}, removed = {};
    rows.forEach(function (x) {
      var key = x.without ? 'w:' + x.without : 'h:' + x.hero, map = x.without ? removed : best;
      if (!map[key] || score(x) > score(map[key])) map[key] = x;
    });
    var cur = { win: base.winRate, hpLeft: base.teamHpLeft.mean, deaths: base.perHero.reduce(function (s, p) { return s + p.deathRate; }, 0), ttk: base.ttk ? base.ttk.p50 : null, healPs: base.survival.healPs, absorbPs: base.survival.absorbPs };
    var add = Object.keys(best).map(function (k) { return best[k]; }).sort(function (a, b) { return score(b) - score(a); });
    var drop = Object.keys(removed).map(function (k) { return removed[k]; }).sort(function (a, b) { return score(b) - score(a); });
    var top = add[0];
    var verdict = !top ? 'none' : top.win - cur.win > 0.1 ? 'yes' : top.win - cur.win > 0.03 ? 'maybe' : 'no';
    return { stress: stress, current: cur, add: add, without: drop, verdict: verdict };
  }
  // Does this hero heal or shield? Measured once in a reference fight.
  var SUSTAIN = {};
  function isSustain(n) {
    var id = S.hero(n).id;
    if (SUSTAIN[id] != null) return SUSTAIN[id];
    var team = ['Auster', 'Hvitar', 'Lossenia', 'Hochadir'].filter(function (x) { return S.hero(x).id !== id; }).slice(0, 4).map(function (x) { return { hero: x, level: 60 }; });
    team.push({ hero: id, level: 60 });
    var r = S.simulate({ team: team, enemy: { preset: 'boss', level: 60 }, seconds: 60, runs: 2, rules: { bonds: false } });
    var p = r.perHero[r.perHero.length - 1];
    return (SUSTAIN[id] = p.healing + p.shielding > 2000);
  }

  // Win rate when each assumed rule sits at the end of its range.
  async function robustness(opts, o) {
    o = o || {};
    var runs = o.runs || 60, keys = o.keys || ['bossPower', 'defK', 'frostBurstCap', 'castUlt'], rows = [], done = 0, total = 0;
    keys.forEach(function (k) { total += (S.RULE_INFO[k].range || []).length; });
    var base = await run(opts, { runs: runs, batch: 20 });
    for (var i = 0; i < keys.length; i++) {
      var k = keys[i], range = S.RULE_INFO[k].range || [];
      for (var j = 0; j < range.length; j++) {
        var v = range[j], ex = {}; ex[k] = k === 'bossPower' ? v * rule(opts, 'bossPower') : v;
        var r = await run(withRules(opts, ex), { runs: runs, batch: 20, cancel: o.cancel });
        rows.push({ rule: k, value: ex[k], win: r.winRate, hpLeft: r.teamHpLeft.mean, deaths: r.perHero.reduce(function (s, p) { return s + p.deathRate; }, 0) });
        done++; if (o.onProgress) o.onProgress(done / total);
      }
    }
    var wins = rows.map(function (x) { return x.win; }).concat([base.winRate]);
    var lo = Math.min.apply(null, wins), hi = Math.max.apply(null, wins);
    var label = function (w) { return w >= 0.9 ? 'safe' : w >= 0.5 ? 'risky' : 'losing'; };
    return { base: base.winRate, rows: rows, min: lo, max: hi, robust: label(lo) === label(hi), verdict: label(base.winRate), worst: label(lo) };
  }

  // Effective HP per hero (HP after DEF, before shields) and how long each one
  // would last if the boss focused only them at the measured incoming DPS.
  function defense(res, opts) {
    var defK = rule(opts, 'defK'), team = opts.team, out = [];
    var inc = res.survival.incomingDps || 0;
    res.perHero.forEach(function (p, i) {
      var st = S.finalStats(S.buildStats(team[i]).s);
      var ehp = st.hp * (st.def + defK) / defK;
      var share = res.perHero.reduce(function (s, x) { return s + x.taken; }, 0);
      out.push({ name: p.name, hp: Math.round(st.hp), def: Math.round(st.def), res: Math.round(st.res), ehp: Math.round(ehp), dmgCut: st.def / (st.def + defK),
        takenShare: share ? p.taken / share : 0, aloneSeconds: inc ? ehp / inc : null });
    });
    return out;
  }

  // ---- import: "dragonheir-account" export (capture tool v1, Companion v2)
  function num(v) { if (v == null) return null; var s = String(v).replace(/,/g, '').trim(); var m = /-?\d+(\.\d+)?/.exec(s); if (!m) return null; return /%$/.test(s) ? parseFloat(m[0]) / 100 : parseFloat(m[0]); }
  var STAT_KEYS = { 'atk': 'atk', 'attack': 'atk', 'hp': 'hp', 'def': 'def', 'defense': 'def', 'crit rate': 'critRate', 'crit damage': 'critDmg', 'crit dmg': 'critDmg', 'accuracy': 'acc', 'resistance': 'res', 'enlightenment': 'ench', 'skill haste': 'haste', 'attack speed': 'atkSpd' };
  function fromAccount(acc) {
    if (typeof acc === 'string') acc = JSON.parse(acc);
    if (!acc || acc.format !== 'dragonheir-account') throw new Error('Not a dragonheir-account export');
    var arts = {};
    (acc.artifacts || []).forEach(function (a) { if (a.equipped_on) arts[String(a.equipped_on).toLowerCase()] = a; });
    var out = {};
    (acc.heroes || []).forEach(function (h) {
      var id; try { id = S.hero(h.name).id; } catch (e) { return; }
      var spec = { hero: id, level: h.level || 60 };
      if (h.stars) spec.stars = h.stars;
      var st = {}, any = false;
      var list = Array.isArray(h.stats) ? h.stats : Object.keys(h.stats || {}).map(function (k) { return { stat: k, value: h.stats[k] }; });
      list.forEach(function (x) { var k = STAT_KEYS[String(x.stat).toLowerCase()]; var v = num(x.value); if (k && v != null) { st[k] = v; any = true; } });
      if (any) { st.totals = true; spec.stats = st; }
      var count = {};
      (h.gear || []).forEach(function (g) { if (g.set) count[g.set] = (count[g.set] || 0) + 1; });
      var sets = Object.keys(count).filter(function (n) { return S.setByName(n); }).map(function (n) { return { name: S.setByName(n).n, pieces: count[n] }; });
      if (sets.length) spec.sets = sets;
      var a = arts[String(h.name).toLowerCase()];
      if (a && S.artifactByName(a.name)) spec.artifact = { name: S.artifactByName(a.name).n, level: a.level || 20, tier: Math.max(0, Math.min(5, (a.stars || 1) - 1)) };
      out[id] = spec;
    });
    return out;
  }

  S.survival = { run: run, breakingPoint: breakingPoint, healerCheck: healerCheck, robustness: robustness, defense: defense, fromAccount: fromAccount, isSustain: isSustain };
})(typeof window !== 'undefined' ? window : globalThis);
