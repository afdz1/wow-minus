import { OFFICIAL } from "./art";

const DUNGEON_SHOT = (file: string) => `/images/dungeons/${file}`;

export type Zone = {
  slug: string;
  name: string;
  levels: string;
  continent: string;
  image: string;
  video?: string;
  blurb: string;
};

export const ZONES: Zone[] = [
  {
    slug: "zephras-isle",
    name: "Zephras Isle",
    levels: "1–12",
    continent: "Skywall-inspired",
    image: OFFICIAL.skyborne,
    video: OFFICIAL.videos.zephras,
    blurb:
      "Once a secluded island oasis in the sky, Zephras Isle now welcomes the next generation of WoW’s newest race – the Skyborne – to protect this floating island and secure its future.",
  },
  {
    slug: "riverglades",
    name: "Riverglades",
    levels: "30–45",
    continent: "Eastern Kingdoms",
    image: OFFICIAL.features.expanses,
    video: OFFICIAL.videos.riverglades,
    blurb:
      "A sprawling landscape in the Eastern Kingdom which shifts from lush hillsides to ruined keeps of old. Frontier rivers, trade routes, a neutral goblin port, 150+ quests from the mid-30s to mid-40s.",
  },
  {
    slug: "mount-hyjal",
    name: "Mount Hyjal",
    levels: "55–60",
    continent: "Kalimdor",
    image: OFFICIAL.zones.ashenvale1,
    video: OFFICIAL.videos.hyjal,
    blurb:
      "Threats both old and new stalk the slopes of the mountain, eager to claim its power and destroy anyone daring enough to get in their way. Endgame leveling with reputations. Home of Hyjal Summit and a Barrow Deeps entrance.",
  },
  {
    slug: "shendralas",
    name: "Shen'dralas",
    levels: "40–50",
    continent: "Kalimdor",
    image: OFFICIAL.zones.mulgore,
    blurb:
      "A long-hidden mystery between Mulgore and Desolace, tied to the Shen’dralar, Eldre’Thalas, Dire Maul, and the centaur tribes of the region.",
  },
  {
    slug: "ashenvale",
    name: "Ashenvale",
    levels: "18–30",
    continent: "Kalimdor",
    image: OFFICIAL.zones.ashenvale2,
    video: OFFICIAL.videos.ashenvale2,
    blurb: "Updated lighting and moonlight through the trees. Classic zone with Forever visual upgrades.",
  },
  {
    slug: "darkshore",
    name: "Darkshore",
    levels: "10–20",
    continent: "Kalimdor",
    image: OFFICIAL.zones.darkshore,
    video: OFFICIAL.videos.darkshore,
    blurb: "Mist over the waters. One of the showcased lighting and environment upgrades.",
  },
  {
    slug: "the-barrens",
    name: "The Barrens",
    levels: "10–25",
    continent: "Kalimdor",
    image: OFFICIAL.zones.barrens,
    video: OFFICIAL.videos.barrens,
    blurb: "The iconic Horde leveling spine, restaged with Forever’s environmental pass.",
  },
  {
    slug: "mulgore",
    name: "Mulgore",
    levels: "1–10",
    continent: "Kalimdor",
    image: OFFICIAL.zones.mulgore,
    video: OFFICIAL.videos.mulgore,
    blurb: "Tauren starting plains with updated lighting and atmosphere.",
  },
  {
    slug: "dustwallow-marsh",
    name: "Dustwallow Marsh",
    levels: "35–45",
    continent: "Kalimdor",
    image: OFFICIAL.zones.dustwallow,
    video: OFFICIAL.videos.dustwallow,
    blurb: "Theramore’s wetlands under Forever’s fog, water, and lighting upgrades.",
  },
  {
    slug: "felwood",
    name: "Felwood",
    levels: "48–55",
    continent: "Kalimdor",
    image: OFFICIAL.zones.felwood,
    video: OFFICIAL.videos.felwood,
    blurb: "Corrupted north Kalimdor, shown in Blizzard’s Azeroth in a New Light gallery.",
  },
];

export const DUNGEONS = [
  { slug: "hall-of-thanes", name: "Hall of Thanes", levels: "13–18", location: "Ironforge", image: OFFICIAL.features.stories, blurb: "Royal burial chambers beneath Ironforge. Intruders have disturbed the tombs. Ghostly whispers in the corridors. Horde can find a way in." },
  { slug: "ruins-of-lordaeron", name: "Ruins of Lordaeron", levels: "15–20", location: "Tirisfal Glades", image: OFFICIAL.features.paths, blurb: "Reclaim the city from lingering Scourge. A necromancer is preparing another attack. Alliance can find a way in." },
  { slug: "city-of-dalaran", name: "City of Dalaran", levels: "28–33", location: "Alterac / Dalaran", image: DUNGEON_SHOT("dalaran.jpg"), blurb: "The barrier is down. Malfunctioning enchantments, constructs, and demonic activity. The city is also a wider space to explore." },
  { slug: "whelgars-excavation", name: "Wetlands Excavation Site", levels: "24–29", location: "Wetlands", image: DUNGEON_SHOT("excavation-site.jpg"), blurb: "Mysterious lights, drifting mist, and rogue Titan constructs above Whelgar’s Excavation." },
  { slug: "drowned-city", name: "The Drowned City", levels: "35–40", location: "Stranglethorn Vale", image: DUNGEON_SHOT("drowned-city.jpg"), blurb: "After thousands of years, a lost troll kingdom has risen off the coast of Stranglethorn Vale. Venture into the depths of I'lalai where you will battle rival explorers, face ancient horrors, and uncover the secrets of the legendary serpent king Min'loth." },
  { slug: "kroldok-stronghold", name: "Krol'dok Stronghold", levels: "40–55", location: "Riverglades", image: OFFICIAL.features.expanses, blurb: "Enormous outdoor ogre dungeon. Kidnappings, raids on nearby settlements, and nighttime chanting." },
  { slug: "alcaz-prison", name: "Alcaz Island Prison", levels: "48–53", location: "Alcaz Island", image: DUNGEON_SHOT("alcaz-prison.jpg"), blurb: "Previously inaccessible. Defias and naga fighting inside. Tied to rumors of Varian Wrynn’s captivity." },
  { slug: "blackmaw-hold", name: "Blackmaw Hold", levels: "55–60", location: "Azshara", image: DUNGEON_SHOT("blackmaw-hold.jpg"), blurb: "Furbolg city behind Azshara’s mysterious gate. Corruption in the depths. Tunnels lead toward the Barrow Deeps." },
  { slug: "shapers-terrace", name: "Shaper's Terrace", levels: "58–60", location: "Un'Goro Crater", image: OFFICIAL.features.journey, blurb: "Titan facility in the hills. Ancient machinery, power crystals, and uncontrolled wildlife." },
];

export const RAIDS = [
  { slug: "barrow-deeps", name: "Barrow Deeps", size: "10", date: "Dec 9, 2026", image: OFFICIAL.zones.ashenvale2, blurb: "Night Elf prison for dangerous captives. Three world entrances. Blackmaw Hold’s tunnels lead toward it. Max-level 10-player challenge." },
  { slug: "hyjal-summit", name: "Hyjal Summit", size: "20", date: "Dec 9, 2026", image: OFFICIAL.zones.ashenvale1, blurb: "20-player raid on Mount Hyjal. New tier sets and a legendary reward still under wraps." },
  { slug: "onyxias-lair", name: "Onyxia's Lair", size: "40", date: "Dec 9, 2026", image: OFFICIAL.features.power, blurb: "The classic broodmother remains a 40-player raid." },
];

export const CLASSES = [
  { name: "Warrior", color: "#C79C6E", icon: "class_warrior", role: "Tank / Melee" },
  { name: "Paladin", color: "#F58CBA", icon: "class_paladin", role: "Tank / Healer / Melee" },
  { name: "Hunter", color: "#ABD473", icon: "class_hunter", role: "Ranged" },
  { name: "Rogue", color: "#FFF569", icon: "class_rogue", role: "Melee" },
  { name: "Priest", color: "#FFFFFF", icon: "class_priest", role: "Healer / Caster" },
  { name: "Shaman", color: "#0070DE", icon: "class_shaman", role: "Healer / Melee / Caster" },
  { name: "Mage", color: "#69CCF0", icon: "class_mage", role: "Caster" },
  { name: "Warlock", color: "#9482C9", icon: "class_warlock", role: "Caster" },
  { name: "Druid", color: "#FF7D0A", icon: "class_druid", role: "Tank / Healer / Melee / Caster" },
];

export const ROADMAP = [
  { date: "Sep 17–Oct 21, 2026", title: "Beta", detail: "Level 30 cap. Guaranteed access with Epic Pack, Collection, or Collector’s Edition." },
  { date: "Oct 27–Nov 3, 2026", title: "Name reservation", detail: "Upgrade packs can create characters early and reserve up to three names. Each character uses a Main Name and a Secondary Name." },
  { date: "Nov 4, 2026 · 3:00 p.m. PST", title: "Launch", detail: "World of Warcraft: Forever goes live. Included with a WoW subscription." },
  { date: "Dec 9, 2026", title: "Raids unlock", detail: "Barrow Deeps (10), Hyjal Summit (20), Onyxia’s Lair (40)." },
  { date: "Winter 2026/2027", title: "Hardcore", detail: "Forever Hardcore plus additional raids and content." },
  { date: "Spring 2027", title: "Major update", detail: "Two raids, two dungeons, new playable area, legendary questline, PvP season." },
  { date: "Summer 2027", title: "Major update", detail: "Revamped iconic raid, new raid, two dungeons, professions and Legacy updates." },
];
