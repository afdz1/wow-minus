window.RACIALS = {
 "Horde": [
  { "race": "Orc", "classes": ["Warrior","Hunter","Mage","Rogue","Warlock","Shaman"], "abilities": [
    ["Blood Fury", "+10% Attack Power & Spell Power for 15 sec."],
    ["Shatter Curse", "Immune to Curses and Banes; reduced Magical damage taken for 8 sec."],
    ["Axe Specialization", "While wielding an axe, +1% spell and ability critical strike chance."],
    ["Hardiness", "Stun duration reduced by 20%."] ] },
  { "race": "Undead", "classes": ["Warrior","Mage","Rogue","Priest","Warlock","Paladin"], "abilities": [
    ["Will of the Forsaken", "Removes Charm, Fear and Sleep effects. (No longer an immunity.)"],
    ["Cannibalize", "Regenerate 35% Health and Mana from corpses."],
    ["Underwater Breathing", "Breathe underwater 300% longer."],
    ["Touch of the Grave", "Attacks sometimes drain health."] ] },
  { "race": "Tauren", "classes": ["Warrior","Hunter","Druid","Shaman"], "abilities": [
    ["War Stomp", "Stuns nearby enemies for 2 sec."],
    ["Cultivation", "Grow bonus herbs without Herbalism."],
    ["Plainsrunning", "Gain increased movement speed the longer you keep moving."],
    ["Endurance", "+5% total Health, +1% Hit Chance."] ] },
  { "race": "Troll", "classes": ["Warrior","Hunter","Mage","Rogue","Priest","Warlock","Shaman"], "abilities": [
    ["Berserking", "+10% attack and cast speed for 10 sec."],
    ["Rapid Regeneration", "Regenerate 50% max Health over time."],
    ["Beast Slaying", "+5% damage vs Beasts."],
    ["Regeneration", "10% of Health regen continues in combat."] ] },
  { "race": "Skyborne (Windshaper)", "classes": ["Warrior","Hunter","Rogue","Druid","Shaman"], "abilities": [
    ["Walk on Air", "Glide downward through the air for 10 seconds."],
    ["Skysight", "Receive an Elemental Blessing increasing run speed by 10%."],
    ["Wind Blessed", "Passive. 1% increased melee, ranged, and spellcasting Haste."],
    ["Elemental Insight", "Passive. Damage to Elementals increased by 5%."] ] }
 ],
 "Alliance": [
  { "race": "Human", "classes": ["Warrior","Hunter","Mage","Rogue","Priest","Warlock","Paladin"], "abilities": [
    ["Will to Survive", "Removes Stun effects."],
    ["Perception", "Detect stealth for 20 sec."],
    ["Sword Specialization", "While wielding a sword, +2% spell and ability critical strike chance."],
    ["The Human Spirit", "+5% Spirit."] ] },
  { "race": "Dwarf", "classes": ["Warrior","Hunter","Rogue","Priest","Paladin","Shaman"], "abilities": [
    ["Stoneform", "Immune to Bleeds, Poison and Disease; reduced Physical damage taken for 8 sec."],
    ["Find Treasure", "Track treasure chests."],
    ["Mace Specialization", "While wielding a mace, +1% spell and ability critical strike chance."],
    ["Big Game Hunter", "+5% damage vs Beasts."] ] },
  { "race": "Night Elf", "classes": ["Warrior","Hunter","Rogue","Priest","Druid"], "abilities": [
    ["Elune's Light", "+10% critical strike chance for 15 sec."],
    ["Shadowmeld", "Stealth while immobile."],
    ["Quickness", "+1% Dodge, +2% run speed."],
    ["Wisp Spirit", "+75% speed while dead."] ] },
  { "race": "Gnome", "classes": ["Warrior","Mage","Rogue","Priest","Warlock"], "abilities": [
    ["Escape Artist", "Briefly immune to Roots and Snares."],
    ["Eureka!", "Reduced cost and +10% damage/healing on your next 3 abilities."],
    ["Expansive Mind", "+5% Mana, Rage and Energy."],
    ["Engineering Specialization", "More reliable engineering devices."] ] },
  { "race": "Skyborne (High Order)", "classes": ["Warrior","Hunter","Mage","Rogue","Druid"], "abilities": [
    ["Walk on Air", "Glide downward through the air for 10 seconds."],
    ["Read Ley Line", "Activate a ley line to gain 100% increased Health and Mana regeneration."],
    ["Wind Blessed", "Passive. 1% increased melee, ranged, and spellcasting Haste."],
    ["Elemental Insight", "Passive. Damage to Elementals increased by 5%."] ] }
 ]
};

// Class-specific racial spells seen in the BlizzCon 2026 demo. Partial: only what has been observed or reported so far.
window.CLASS_RACIALS = {
 "Priest": {
  "note": "From the BlizzCon demo. Fear Ward is now baseline for every Priest. Troll and Night Elf spells have not been seen yet; tooltips are filled in as they surface.",
  "races": {
   "Undead": [["Dark Sacrifice", "Instant, 10 min cooldown. Cannibalize 720 of your own Health over 15 sec to gain 720 Mana. (Rank 2, level 38 values.)"]],
   "Dwarf": [["Chastise", "Holy damage plus a short root, as in TBC."], ["Desperate Prayer", "Instantly heals you, as in TBC."]],
   "Gnome": [["Confounding Flash", "Area crowd-control cooldown."], ["Contingency Plan", "Reported to work like Guardian Spirit: prevents a death and heals instead."]],
   "Human": [["Divine Grace", "Cooldown that removes Weakened Soul from the target and heals them."]],
   "Troll": [["Unknown", "Not yet seen in the demo."]],
   "Night Elf": [["Unknown", "Not yet seen in the demo."]]
  },
  "sources": "Warcraft Tavern, 12 Sep 2026; Dark Sacrifice tooltip from demo footage."
 }
};

// New baseline class abilities that the Forever talent tooltips reference and that do not exist in Classic.
// Inferred from tooltip text only; exact spell tooltips are not public yet (beta opens 17 Sep 2026).
window.CLASS_ABILITIES = {
 "Paladin": [["Holy Strike", "Melee strike; mentioned by Improved Holy Strike, Iron Creed and Sacred Arbiter."], ["Seal of Fury", "Tanking seal with an absorb shield; mentioned by Improved Seal of Fury and Twist of Light."]],
 "Priest": [["Shadow Word: Death", "Execute-style Shadow spell; mentioned by Early Demise."], ["Devouring Plague", "Appears to be a normal Shadow spell now rather than an Undead racial; mentioned by Devouring Contagion."]],
 "Mage": [["Frostfire Bolt", "Fire and Frost bolt; mentioned by Improved Fireball, Hot Streak, Missile Barrage and Incineration."]],
 "Warlock": [["Bane of Agony", "Curse of Agony renamed; mentioned by Improved Bane of Agony, Amplify Curse and Pandemic."], ["Bane of Doom", "Curse of Doom renamed; mentioned by Pandemic."], ["Incubus", "Male counterpart to the Succubus; mentioned by Fel Vitality, Fel Domination, Demonic Sacrifice and Improved Sayaad."]],
 "Shaman": [["Fire Nova", "Now a spell with a cooldown rather than a totem; mentioned by Improved Fire Nova and Call of Flame."]]
};
