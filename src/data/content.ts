import { OFFICIAL } from "./art";

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
      "A sprawling landscape in the Eastern Kingdom which shifts from lush hillsides to ruined keeps of old. Frontier rivers, trade routes, a goblin post, and 150+ quests.",
  },
  {
    slug: "mount-hyjal",
    name: "Mount Hyjal",
    levels: "55–60",
    continent: "Kalimdor",
    image: OFFICIAL.zones.ashenvale1,
    video: OFFICIAL.videos.hyjal,
    blurb:
      "Threats both old and new stalk the slopes of the mountain, eager to claim its power and destroy anyone daring enough to get in their way. Home of Hyjal Summit.",
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
  { slug: "hall-of-thanes", name: "Hall of Thanes", levels: "13–18", location: "Ironforge", image: OFFICIAL.features.stories, blurb: "Underground resting place for ancient Dwarven rulers beneath Ironforge." },
  { slug: "ruins-of-lordaeron", name: "Ruins of Lordaeron", levels: "15–20", location: "Tirisfal Glades", image: OFFICIAL.features.paths, blurb: "Horde and Alliance battle over the ruins as the Forsaken push to reclaim them." },
  { slug: "city-of-dalaran", name: "City of Dalaran", levels: "20–35", location: "Alterac / Dalaran", image: OFFICIAL.features.power, blurb: "The old barrier has fallen. Strange magical trouble inside the restored city." },
  { slug: "whelgars-excavation", name: "Whelgar's Excavation", levels: "24–29", location: "Wetlands", image: OFFICIAL.zones.dustwallow, blurb: "Explorers’ League dig site above Whelgar’s Excavation." },
  { slug: "drowned-city", name: "Drowned City", levels: "35–40", location: "Stranglethorn Vale", image: OFFICIAL.zones.darkshore, blurb: "Sunken troll ruins off the coast. Naga and pirates." },
  { slug: "kroldok-stronghold", name: "Krol'dok Stronghold", levels: "35–40", location: "Riverglades", image: OFFICIAL.features.expanses, blurb: "Massive ogre fortress. Outdoor dungeon meant as a Scarlet Monastery alternative." },
  { slug: "alcaz-prison", name: "Alcaz Prison", levels: "48–53", location: "Alcaz Island", image: OFFICIAL.zones.felwood, blurb: "A prison used by the Defias to hold important captives." },
  { slug: "blackmaw-hold", name: "Blackmaw Hold", levels: "55–60", location: "Kalimdor", image: OFFICIAL.zones.ashenvale1, blurb: "Sprawling underground furbolg city. Corruption in the depths." },
  { slug: "shapers-terrace", name: "Shaper's Terrace", levels: "58–60", location: "Un'Goro Crater", image: OFFICIAL.features.journey, blurb: "Titan mysteries on the slopes of Un’Goro." },
];

export const RAIDS = [
  { slug: "barrow-deeps", name: "Barrow Deeps", size: "10", date: "Dec 9, 2026", image: OFFICIAL.zones.ashenvale2, blurb: "Night Elf prison for dangerous captives. Three world entrances. Max-level 10-player challenge." },
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
  { date: "Oct 27–Nov 3, 2026", title: "Name reservation", detail: "Upgrade packs can create characters early and reserve up to three names." },
  { date: "Nov 4, 2026 · 3:00 p.m. PST", title: "Launch", detail: "World of Warcraft: Forever goes live. Included with a WoW subscription." },
  { date: "Dec 9, 2026", title: "Raids unlock", detail: "Barrow Deeps (10), Hyjal Summit (20), Onyxia’s Lair (40)." },
  { date: "Winter 2026/2027", title: "Hardcore", detail: "Forever Hardcore plus additional raids and content." },
  { date: "Spring 2027", title: "Major update", detail: "Two raids, two dungeons, new playable area, legendary questline, PvP season." },
  { date: "Summer 2027", title: "Major update", detail: "Revamped iconic raid, new raid, two dungeons, professions and Legacy updates." },
];
