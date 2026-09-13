import { OFFICIAL } from "./art";
import { FEATURES_ARTICLE } from "./features-article";
import { PROFESSIONS_ARTICLE } from "./first-aid-article";
import { VIDEOS as v, cite, videoPage } from "./video-sources";

export const LAUNCH = new Date("2026-11-04T23:00:00.000Z");
export const BETA_START = new Date("2026-09-17T07:00:00.000Z");
export const RAIDS_UNLOCK = new Date("2026-12-09T08:00:00.000Z");

export type NewsSource = { label: string; href: string };

export type NewsFigure = {
  src: string;
  alt: string;
  caption?: string;
};

export type NewsSection = {
  id: string;
  heading: string;
  paragraphs: string[];
  image?: string;
  figures?: NewsFigure[];
};

export type Transcript = {
  title: string;
  url: string;
  publisher: string;
  date?: string;
  excerpts: string[];
};

export type NewsArticle = {
  slug: string;
  title: string;
  dek: string;
  date: string;
  author: string;
  tag: string;
  image: string;
  body: string[];
  sections?: NewsSection[];
  transcripts?: Transcript[];
  sources: NewsSource[];
  /** Replaces the default Blue/Community origin note when set. */
  note?: string;
};

export const NEWS: NewsArticle[] = [
  PROFESSIONS_ARTICLE,
  FEATURES_ARTICLE,
  {
    slug: "classic-plus-is-wow-forever",
    title: "Classic+ is World of Warcraft: Forever",
    dek: "BlizzCon 2026 named the long-rumored Classic+ branch. It is a separate, evergreen Azeroth with a level-60 cap — not a season, and not a Classic patch.",
    date: "2026-09-12",
    author: "ClassicMinus Staff",
    tag: "Announcement",
    image: OFFICIAL.masthead,
    body: [
      "Blizzard announced World of Warcraft: Forever at BlizzCon 2026 as the official answer to years of Classic+ speculation. Executive producer Holly Longdale framed it as a new beginning that never ends: original Azeroth, held in a first-year time bubble, with a level cap of 60 for the foreseeable future.",
      "Forever is not a mode inside Classic and not an expansion for modern WoW. It sits alongside both. Access is included with an active World of Warcraft subscription or Game Time. The beta opens September 17, 2026. Global launch is November 4, 2026 at 3:00 p.m. PST.",
      "The pitch is the world as the main character. No flying mounts. No level scaling. Leveling stays as important as endgame. Blizzard says new content will fill blank spaces on the original map rather than jumping to Outland or Northrend.",
      `Holly’s opening-ceremony clip states Forever is “your new permanent home,” “friendly, familiar, and new,” and will “live right alongside our modern and classic games.” It is “focused on what made vanilla so memorable in the first place. The world as a main character.” Instead of one big heroic story, “you will carve your own path.” Community is “nurtured.” “There’s no rush here. It’s the journey that counts, not the destination.” ${cite(v.soda, 327, "Sodapoppin, 5:27")}`,
      `The same clip places the setting “after the events of Warcraft III, but before Molten Core. So essentially year one of Vanilla WoW.” Players “meet up on our original continents, embark on the journey to 60, and stay at 60 indefinitely” so they do not “leave our accomplishments, our gear, and our friends behind.” ${cite(v.soda, 642, "Sodapoppin, 10:42")}`,
      `Ace’s recap of the panel states Forever will not add Outland, Northrend, Pandaria, or the Broken Isles. ${cite(v.ace, 461, "Ace, 7:41")}`,
    ],
    sources: [
      { label: "Official Forever page", href: "https://worldofwarcraft.blizzard.com/en-us/forever" },
      { label: "Blizzard panel recap", href: "https://news.blizzard.com/en-us/article/24303862/world-of-warcraft-forever-whats-next-panel-recap" },
      videoPage(v.soda),
      videoPage(v.ace),
      videoPage(v.preach),
    ],
  },
  {
    slug: "new-zones-zephras-riverglades-hyjal",
    title: "Zephras Isle, Riverglades, and Mount Hyjal headline launch",
    dek: "Three new or expanded regions lead the map: a Skyborne starting island, an Eastern Kingdoms frontier, and a recovering Hyjal.",
    date: "2026-09-12",
    author: "ClassicMinus Staff",
    tag: "Zones",
    image: OFFICIAL.zones.ashenvale1,
    body: [
      "The official Forever site leads with three zones. Zephras Isle is a floating starting experience for the Skyborne, levels 1–12, with architecture inspired by Skywall. Access to the race and this starting storyline requires the Skyborne Heroic Pack or a higher edition.",
      "Riverglades is a sprawling Eastern Kingdoms landscape that shifts from lush hillsides to ruined keeps. Blizzard’s What’s Next panel placed more than 150 quests here in the mid-30s to mid-40s, with a Goblin trading post, travel routes, and an ogre fortress dungeon meant as an alternative to repeating Scarlet Monastery.",
      "Mount Hyjal is being expanded into an endgame zone after Archimonde’s defeat. Threats old and new stalk the slopes. Hyjal Summit (20-player) sits here, and one of three Barrow Deeps raid entrances is also tied to the mountain.",
      "Shen’dralas fills the gap between Mulgore and Desolace, tying the Shen’dralar, Dire Maul, and centaur tribes into a return visit for Maraudon and the Razorfen hills.",
      `WillE’s panel recap places Riverglades against the Burning Steppes, Swamp of Sorrows, and Redridge, and calls it “a pretty enormous zone.” He states Hyjal is framed so that players go through Darkwhisper Gorge, and asks whether the elites on that road will be retuned. ${cite(v.wille, 131, "WillE, 2:11")} ${cite(v.wille, 114, "WillE, 1:54")}`,
      `Slesh’s solo demo on Zephras names the starting city Valinar. He reached a Darnassus-style boat toward the mainland and hit an invisible wall. A dark forest on the island is called out for the updated lighting pass. ${cite(v.slesh, 199, "Slesh, 3:19")}`,
      `MetaGoblin’s trailer breakdown shows a moving boat at the Southshore lighthouse, an aerial route toward Skyborne land with Dalaran in the distance, multiple transport lines leaving Zephras, and a Skyborne route visible from Mulgore. Those stills are trailer footage, not a published travel map. ${cite(v.meta, 20, "MetaGoblin, 0:20")} ${cite(v.meta, 168, "MetaGoblin, 2:48")} ${cite(v.meta, 344, "MetaGoblin, 5:44")}`,
    ],
    sources: [
      { label: "Official zones", href: "https://worldofwarcraft.blizzard.com/en-us/forever#zones" },
      { label: "Blizzard panel recap", href: "https://news.blizzard.com/en-us/article/24303862/world-of-warcraft-forever-whats-next-panel-recap" },
      videoPage(v.wille),
      videoPage(v.slesh),
      videoPage(v.meta),
    ],
  },
  {
    slug: "nine-dungeons-and-raid-roadmap",
    title: "Nine new dungeons at launch — raids unlock December 9",
    dek: "Hall of Thanes through Shaper’s Terrace fill the 1–60 ladder. Barrow Deeps, Hyjal Summit, and Onyxia open a month after launch.",
    date: "2026-09-12",
    author: "ClassicMinus Staff",
    tag: "PVE",
    image: OFFICIAL.features.stories,
    body: [
      "Launch includes nine new dungeons: Hall of Thanes beneath Ironforge (13–18), Ruins of Lordaeron (~15–20), City of Dalaran (~20–35), the Wetlands excavation above Whelgar’s (24–29), Drowned City off Stranglethorn (35–40), Krol’dok Stronghold (35–40), Alcaz Prison (48–53), Blackmaw Hold (55–60), and Shaper’s Terrace in Un’Goro (58–60).",
      "Raids do not open on day one. On December 9, 2026 Blizzard unlocks Barrow Deeps (10-player), Hyjal Summit (20-player), and Onyxia’s Lair as a 40-player encounter. Barrow Deeps has three world entrances and is described as a Night Elf prison for especially dangerous captives.",
      "A 15 vs 15 battleground, Darkspear Islands, mixes Arathi Basin-style flag captures with Eye of the Storm-like layout off the coast of Kalimdor.",
      `WillE states Hall of Thanes is the Ironforge door players have glitched or that Cataclysm later opened, and that both factions can complete it, with Horde using an alternative entrance. He describes City of Dalaran as a mid-level dungeon and also “a bit more of an open-world zone.” ${cite(v.wille, 161, "WillE, 2:41")} ${cite(v.wille, 172, "WillE, 2:52")}`,
      `Xaryu’s show-floor dungeon run is labeled Drown City / Sunken Hollow. Trash includes fears and a shark pack. A first-boss emote is “It’s time for a little blood.” Loot called out: Giant Club of the Boar; Twilight Armor of the Eagle; Maze of Healing, read as 53 healing and 14 intellect — Xaryu says those stats look like a typo. The demo client had no dungeon map. ${cite(v.xaryu, 397, "Xaryu, 6:37")} ${cite(v.xaryu, 996, "Xaryu, 16:36")} ${cite(v.xaryu, 923, "Xaryu, 15:23")}`,
      `Ace’s recap of the raid slide: new raids shown so far are 10-player or 20-player; Onyxia stays 40. WillE notes the roadmap still lists Onyxia as 40 and asks whether 10 and 20 are hard caps or flexible — unanswered in these videos. ${cite(v.ace, 114, "Ace, 1:54")} ${cite(v.wille, 328, "WillE, 5:28")}`,
      `WillE describes Darkspear Islands as 15v15 in an Eye of the Storm format with capture-the-flag and holding points. ${cite(v.wille, 499, "WillE, 8:19")}`,
    ],
    sources: [
      { label: "Blizzard panel recap", href: "https://news.blizzard.com/en-us/article/24303862/world-of-warcraft-forever-whats-next-panel-recap" },
      videoPage(v.wille),
      videoPage(v.xaryu),
      videoPage(v.ace),
    ],
  },
  {
    slug: "skyborne-and-new-class-combos",
    title: "Skyborne can join Horde or Alliance — plus Undead Paladin and Dwarf Shaman",
    dek: "The new windswept elves pick a faction at creation. Racials and talent trees are already leaking from the BlizzCon demo.",
    date: "2026-09-12",
    author: "ClassicMinus Staff",
    tag: "Classes",
    image: OFFICIAL.skyborne,
    body: [
      "Skyborne are elemental elves who do not form a third faction. At character creation you choose Windshaper (Horde, shaman access) or High Order (Alliance, mage access). Both factions can play Warrior, Hunter, Rogue, and Druid, including unique Skyborne druid forms.",
      "Confirmed new combos for existing races include Undead Paladin and Dwarf Shaman. Racials are being rewritten: Forsaken Paladin is real, Will of the Forsaken is no longer a full immunity, Dwarves pick up Big Game Hunter, Humans gain Will to Survive, and Skyborne share Walk on Air plus elemental passives.",
      "Class talent trees are overhauled rather than numerically tweaked. ClassicMinus hosts a full Forever talent calculator transcribed from in-game tooltips, with Compare to Classic markers for every changed, moved, or new talent.",
      `Slesh played an Alliance Skyborne rogue on the solo demo. Walk on Air is a slow-fall. A ley-line interaction is remembered as 100% health and mana regen; he flags that he may have the numbers wrong. ${cite(v.slesh, 75, "Slesh, 1:15")} ${cite(v.slesh, 150, "Slesh, 2:30")} ${cite(v.slesh, 171, "Slesh, 2:51")}`,
      `Ace’s Skyborne stills show unique druid forms for boomkin, travel, cat, and bear. ${cite(v.ace, 302, "Ace, 5:02")}`,
      `Marcelian’s demo station names additional combos beyond the headline pair: Orc Mage and Human Hunter, plus Undead Paladin. MetaGoblin says BlizzCon footage confirmed the class combinations shown in the Hyjal trailer, including Orc Mage and Troll Warlock. ${cite(v.marcelian, 134, "Marcelian & Flame, 2:14")} ${cite(v.meta, 156, "MetaGoblin, 2:36")}`,
      `Marcelian opened Retribution Paladin and read Holy Strike — an ability from original WoW alpha — with seals still on the spec. ${cite(v.marcelian, 93, "Marcelian & Flame, 1:33")}`,
      `Xaryu read the Mage trees on the dungeon demo: Arcane Blast is present; Missile Barrage is a 40% chance tied to Arcane Blast; Hot Streak stacks to three and cuts Pyroblast cast time by 25% per stack; Frostfire Bolt is listed with Fire crits; there is no mage healer spec. An Arcane talent is read as 30% less threat. Dual specialization is on the client. ${cite(v.xaryu, 40, "Xaryu, 0:40")} ${cite(v.xaryu, 200, "Xaryu, 3:20")} ${cite(v.xaryu, 840, "Xaryu, 14:00")} ${cite(v.xaryu, 1295, "Xaryu, 21:35")}`,
    ],
    sources: [
      { label: "Official Skyborne section", href: "https://worldofwarcraft.blizzard.com/en-us/forever" },
      { label: "Forever Talents", href: "https://forevertalents.up.railway.app" },
      videoPage(v.slesh),
      videoPage(v.ace),
      videoPage(v.marcelian),
      videoPage(v.xaryu),
      videoPage(v.meta),
    ],
  },
  {
    slug: "systems-camping-legacy-transmog",
    title: "Camping, Legacy alts, optional transmog, and HD/SD models",
    dek: "Forever keeps Classic social friction, then adds systems meant to make the 1–60 journey repeatable without skipping it.",
    date: "2026-09-12",
    author: "ClassicMinus Staff",
    tag: "Systems",
    image: OFFICIAL.features.systems,
    body: [
      "Camping lets players craft campfires in the outdoor world. Other adventurers can stop, contribute through professions, and share campsite buffs. Blizzard is positioning it as a new gathering point outside cities.",
      "The Legacy system grants account-wide perks for leveling additional characters without letting alts skip the journey to 60. Transmog is opt-in: you choose whether you see your own transmog and whether you see other players’ transmog.",
      "Visual presets include modern and Classic looks, HD and SD character models, restored Classic animations on HD models, gamepad support, and rendering upgrades — flowing rivers in Elwynn, mist on Darkshore, moonlight in Ashenvale — while keeping original silhouettes.",
      `WillE describes Camping as usable “almost anywhere in the open world,” with other players stopping to craft for the camp and talk. ${cite(v.wille, 376, "WillE, 6:16")}`,
      `Legacy is broken into six categories — classes, trade skills, PvP, adventure, dungeons, and raids. Points carry to alts. Slesh’s demo pane redeems those points for cosmetics and mounts. Xaryu compares the UI to achievements. ${cite(v.wille, 409, "WillE, 6:49")} ${cite(v.ace, 408, "Ace, 6:48")} ${cite(v.slesh, 114, "Slesh, 1:54")} ${cite(v.xaryu, 745, "Xaryu, 12:25")}`,
      `Xaryu’s PvP tab on the demo: unranked, with a rank cap that increases each week up to 24,750 for Rank 14. WillE infers from the 2027 “PvP season refresh” line that Rank 14 may not last; that is not what the demo tab shows. ${cite(v.xaryu, 297, "Xaryu, 4:57")} ${cite(v.wille, 513, "WillE, 8:33")}`,
      `Other demo QoL: dual spec, 40 quest-log slots, an in-game quest helper, arachnophobia mode, edit mode, nameplates, and focus targets. Missing in that client: a dungeon map, target markers, and a way to turn off the retail-style cast bar. ${cite(v.xaryu, 1295, "Xaryu, 21:35")} ${cite(v.xaryu, 727, "Xaryu, 12:07")} ${cite(v.slesh, 107, "Slesh, 1:47")} ${cite(v.xaryu, 888, "Xaryu, 14:48")}`,
      `Ace shows a trinket that stuns for 3 seconds, or 5 seconds extra with 80% of the cooldown refunded if the target is Naga. He also lists riding-skill updates and gamepad support on the systems slide. ${cite(v.ace, 362, "Ace, 6:02")} ${cite(v.ace, 249, "Ace, 4:09")}`,
      `MetaGoblin’s trailer stills show many players fishing a lake and a pole with a red orb, plus an Un’Goro altar scene labeled “new professions content,” not only new recipes. ${cite(v.meta, 263, "MetaGoblin, 4:23")} ${cite(v.meta, 632, "MetaGoblin, 10:32")}`,
    ],
    sources: [
      { label: "Blizzard panel recap", href: "https://news.blizzard.com/en-us/article/24303862/world-of-warcraft-forever-whats-next-panel-recap" },
      videoPage(v.wille),
      videoPage(v.ace),
      videoPage(v.slesh),
      videoPage(v.xaryu),
      videoPage(v.meta),
    ],
  },
  {
    slug: "roadmap-beta-to-summer-2027",
    title: "Roadmap: beta this week, Hardcore later, major updates through 2027",
    dek: "September beta to 30, October name reserve, November launch, December raids, then Hardcore and two seasonal content drops.",
    date: "2026-09-12",
    author: "ClassicMinus Staff",
    tag: "Roadmap",
    image: OFFICIAL.countdown,
    body: [
      "Beta runs September 17 through October 21 (Pacific), with a level 30 cap. Upgrade packs can reserve names October 27–November 3. Launch is November 4. Raids unlock December 9.",
      "Hardcore is planned after launch, sometime in winter 2026/2027. Spring 2027 brings two new raids (10 and 20), two dungeons, a new playable area, a legendary questline, and a PvP season refresh. Summer 2027 revamps an iconic raid, adds another raid, two more dungeons, world content, and profession/Legacy updates.",
      "Skyborne Heroic Pack does not include guaranteed beta. Skyborne Epic Pack and the Warcraft Forever Collection do. The Collection is a limited-time BlizzCon offer through January 11, 2027.",
      `Holly’s ceremony clip: “World of Warcraft Forever launches in seven weeks… on November 4.” “Beta starts this Thursday. And if you’re here, you can play Forever on the show floor.” ${cite(v.soda, 289, "Sodapoppin, 4:49")}`,
      `Ace’s pack recap: guaranteed beta is on Skyborne Epic Pack and Warcraft Forever Collection, not the Heroic Pack. He reads beta as September 17 through October 22, level 30, with name reservation on October 27. ${cite(v.ace, 10, "Ace, 0:10")}`,
      `WillE notes Skyborne and guaranteed beta sit behind a purchase, and that a later race or class could be sold the same way. That is his monetization read, not an announced second pack. ${cite(v.wille, 545, "WillE, 9:05")}`,
      `Slesh reports two show-floor queues — solo and dungeons — with about 25 minutes on the solo island. ${cite(v.slesh, 67, "Slesh, 1:07")}`,
    ],
    sources: [
      { label: "Pre-purchase notes", href: "https://news.blizzard.com/en-us/article/24301508/pre-purchase-world-of-warcraft-forever-upgrades-and-begin-your-next-journey-in-azeroth" },
      videoPage(v.soda),
      videoPage(v.ace),
      videoPage(v.wille),
      videoPage(v.slesh),
    ],
  },
];

export function getNews(slug: string) {
  return NEWS.find((n) => n.slug === slug);
}
