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
      "Once a secluded island oasis in the sky. Highborne exiles forged a pact with wind spirits and built in Skywall. The spirits have vanished; structures fail; Skyborne are split over what comes next. Levels 1–12.",
  },
  {
    slug: "riverglades",
    name: "Riverglades",
    levels: "30–45",
    continent: "Eastern Kingdoms",
    image: OFFICIAL.features.expanses,
    video: OFFICIAL.videos.riverglades,
    blurb:
      "Frontier between Redridge, Burning Steppes, the Badlands, and Swamp of Sorrows. Rivers, trade routes, a neutral goblin port, 150+ quests from the mid-30s to mid-40s. Humans, orcs, ogres, gnolls, goblins, and murlocs.",
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
      "Ruins between Mulgore and Desolace. Shen’dralar, Eldre’Thalas, Dire Maul, and Prince Tortheldrin. Gelkis and Magram storylines continue, with new reasons to visit Maraudon and Razorfen Downs.",
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
  { slug: "hall-of-thanes", name: "Hall of Thanes", levels: "13–18", location: "Ironforge", image: OFFICIAL.features.stories, blurb: "Royal burial chambers beneath Ironforge. Dark Irons are suspected. Ghostly whispers. Alliance is the natural fit; Horde sneaks or carves a way in." },
  { slug: "ruins-of-lordaeron", name: "Ruins of Lordaeron", levels: "15–20", location: "Tirisfal Glades", image: OFFICIAL.features.paths, blurb: "Forsaken reclaim the city. Family heirlooms still inside. A necromancer is preparing an attack on another city. Alliance has to sneak in." },
  { slug: "city-of-dalaran", name: "City of Dalaran", levels: "28–33", location: "Alterac / Dalaran", image: DUNGEON_SHOT("dalaran.jpg"), blurb: "Kirin Tor barrier is down. Enchantments backfiring, constructs haywire, demonic energy, and cats everywhere. A whole city to explore, with a roundabout way in." },
  { slug: "whelgars-excavation", name: "Wetlands Excavation Site", levels: "24–29", location: "Wetlands", image: DUNGEON_SHOT("excavation-site.jpg"), blurb: "A site trapped in time above Whelgar’s. Titan constructs, mist from the mountains, flashing lights. Explorers’ League is interested." },
  { slug: "drowned-city", name: "The Drowned City", levels: "35–40", location: "Stranglethorn Vale", image: DUNGEON_SHOT("drowned-city.jpg"), blurb: "After thousands of years, a lost troll kingdom has risen off the coast of Stranglethorn Vale. Venture into the depths of I'lalai where you will battle rival explorers, face ancient horrors, and uncover the secrets of the legendary serpent king Min'loth. Trolls, naga, and a crashed pirate ship." },
  { slug: "kroldok-stronghold", name: "Krol'dok Stronghold", levels: "40–55", location: "Riverglades", image: OFFICIAL.features.expanses, blurb: "Enormous outdoor ogre dungeon. Kidnappings, raids on nearby settlements, and twilight chanting that may be cultists." },
  { slug: "alcaz-prison", name: "Alcaz Island Prison", levels: "48–53", location: "Alcaz Island", image: DUNGEON_SHOT("alcaz-prison.jpg"), blurb: "Previously inaccessible. Defias fighting naga inside. Tied to rumors of Varian Wrynn’s captivity." },
  { slug: "blackmaw-hold", name: "Blackmaw Hold", levels: "55–60", location: "Azshara", image: DUNGEON_SHOT("blackmaw-hold.jpg"), blurb: "Furbolg city behind Azshara’s mysterious gate. Corruption in the depths. Tunnels can lead into the Barrow Deeps." },
  { slug: "shapers-terrace", name: "Shaper's Terrace", levels: "58–60", location: "Un'Goro Crater", image: OFFICIAL.features.journey, blurb: "Titan facility in the hills, compared to Sholazar from Wrath Classic. Ancient machinery, power crystals, and wildlife running amok." },
];

export const RAIDS = [
  { slug: "barrow-deeps", name: "Barrow Deeps", size: "10", date: "Dec 9, 2026", image: OFFICIAL.zones.ashenvale2, blurb: "Night Elf prison for dangerous captives. Rumor of an infamous demon hunter once kept here. Three world entrances. Blackmaw Hold’s tunnels lead toward it." },
  { slug: "hyjal-summit", name: "Hyjal Summit", size: "20", date: "Dec 9, 2026", image: OFFICIAL.zones.ashenvale1, blurb: "20-player raid on Mount Hyjal. Someone is draining power from the land around the summit. New tier sets and a legendary reward. Snowy peaks, a river through elven ruins, ghosts of the Third War." },
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
