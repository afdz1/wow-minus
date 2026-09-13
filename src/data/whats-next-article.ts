import { OFFICIAL } from "./art";
import { VIDEOS, cite, videoPage, videoTranscript } from "./video-sources";

const v = VIDEOS.whatsNext;
const t = (seconds: number, label: string) => cite(v, seconds, `What's Next, ${label}`);

export const WHATS_NEXT_ARTICLE = {
  slug: "whats-next-panel",
  title: "What's Next panel",
  dek: "Timestamped ledger from the official Warcraft upload of the BlizzCon What’s Next panel. Spoken developer lines, not the written recap.",
  date: "2026-09-13",
  author: "ClassicMinus Staff",
  tag: "Ledger",
  image: OFFICIAL.masthead,
  note: "ClassicMinus transcript of the official World of Warcraft What’s Next panel VOD. Whisper names are cleaned to known proper nouns. The Sunday Deep Dive is a separate ledger on this site.",
  body: [
    "The official Warcraft channel posted the BlizzCon What’s Next panel as a 47-minute VOD. Ion Hazzikostas opens. Lead Classic Designer Tim Jones covers pillars and the four new regions. Nora covers dungeons, raids, classes, items, and racials. Clay Stone covers rendering, camping, Legacy, transmog, models, the roadmap, and Hardcore.",
    "The written Blizzard recap is still the short official summary. This page is the spoken Saturday panel. The Sunday Deep Dive goes further on camping, transmog, Legacy, rulesets, and Paladin.",
  ],
  sections: [
    {
      id: "why-forever",
      heading: "Why Forever exists",
      paragraphs: [
        `Ion frames Forever as a secret that was both best-kept and worst-kept. He tells the Classic subreddit it is not too late to start. ${t(22, "0:22")}`,
        `The pitch starts from Classic’s 2017 announcement and the 2019 launch: players settled at 60, then argued about what came next. One camp wanted Burning Crusade. Another wanted to stay in the Warcraft III aftermath and not replace raid epics with Outland greens or fly across Outland in minutes. ${t(30, "0:30")} ${t(93, "1:33")}`,
        `He names a 2020 wish list: stay at 60, add content in that world, and make “mean specs” a tiny bit viable — “Paladin is talking to you here.” The Classic team then was built to restore an old client, not to ship new content, so the idea stayed an ember. ${t(113, "1:53")} ${t(131, "2:11")}`,
        `Season of Discovery in 2023 was the test. It was time-limited on purpose so they could find how much change was too much. They shipped new quests, items, class abilities, and dungeons and raids including Karazhan Crypts and the Scarlet Enclave. By mid-2024 they judged it possible to build new content that still belonged next to original Azeroth. Players also said they did not want another temporary season — they wanted a forever home. ${t(166, "2:46")} ${t(203, "3:23")} ${t(256, "4:16")}`,
      ],
    },
    {
      id: "pillars",
      heading: "Four pillars",
      paragraphs: [
        `Tim Jones: Forever looks deeper into Eastern Kingdoms and Kalimdor rather than moving to Outland. Mysteries never fully explored, stories never fully told, regions that sat on the map without becoming adventures. ${t(312, "5:12")}`,
        `Approachable and familiar: additions are judged by whether they belong, not whether they are flashy. No flying mounts. No level scaling. Azeroth stays dangerous; preparation, communication, and working together matter. They are not making the game hard for difficulty’s sake. ${t(383, "6:23")}`,
        `World as the main character: leveling is as important as endgame. Not every story saves Azeroth. Memorable ones happen in a remote village, a forgotten road, or a corner of the map. ${t(440, "7:20")}`,
        `Journey before destination: no planned level-cap increases that invalidate what you earned. Professions, routes, gear, and friends keep mattering. Catch-up is play the game: level, run dungeons, make friends, explore, earn rewards. ${t(480, "8:00")}`,
        `Protect social experiences: they have been disciplined about convenience because QoL changes how players meet. Camping is named as part of that. Every patch is supposed to include content for solo, dungeons, raids, PvP, and in-between. ${t(527, "8:47")}`,
        `Unfinished vanilla stories named as potential, not launch zones: Gilneas, Mount Hyjal, Uldum, the mountains north of Un’Goro, forgotten kingdoms, Titan mysteries, the Emerald Dream, the Caverns of Time. Hyjal is the one from that list that ships as a launch zone. ${t(612, "10:12")}`,
      ],
    },
    {
      id: "four-regions",
      heading: "Four new regions",
      image: OFFICIAL.skyborne,
      paragraphs: [
        `The panel introduces four new regions built into Eastern Kingdoms and Kalimdor: Mount Hyjal, Shen’dralas, Riverglades, and Zephras Isle. ${t(650, "10:50")}`,
        `Mount Hyjal is endgame leveling after Archimonde’s defeat: how the mountain recovers, how the forests heal, how the Wild Gods are affected, what dangers remain. Players journey through Darkwhisper Gorge. New stories, rewards, reputations, solo and group content. Hyjal Summit is a launch raid on the mountain. One of three Barrow Deeps raid entrances is there. ${t(673, "11:13")}`,
        `Shen’dralas sits in ruins players have flown over between Mulgore and Desolace. The story ties to the Shen’dralar, Eldre’Thalas, Dire Maul, and Prince Tortheldrin. Gelkis and Magram centaur storylines continue, with new reasons to visit Maraudon and Razorfen Downs. ${t(752, "12:32")}`,
        `Riverglades sits on the eastern coast of the Eastern Kingdoms between Redridge, Burning Steppes, the Badlands, and Swamp of Sorrows. Human forces once pursued retreating orcs here; help never came, settlers stayed, and their descendants still live on the frontier. Humans, orcs, ogres, gnolls, goblins, and murlocs compete. Mid-30s to mid-40s, 150+ quests, both factions, new reputations, a neutral goblin port. Krol’dok Stronghold is the outdoor ogre dungeon — framed as another option besides Scarlet Monastery for the 25th time. ${t(793, "13:13")}`,
        `Zephras Isle: thousands of years ago Highborne exiles forged a pact with elemental wind spirits and built a civilization in Skywall. Thunderfury and Prince Thunderaan are named as classic precedent for elemental powers beyond Azeroth. The air spirits that protected the islands have vanished, structures are failing, communities are isolated. Skyborne are divided: some seek the wind spirits, some want the arcane of their ancestors, some have turned to darker powers. Levels 1–12. Classic aesthetics plus Skywall-inspired architecture. ${t(918, "15:18")}`,
        `Skyborne are not a neutral race. Character creation picks Horde or Alliance. Horde Skyborne take elemental traditions with the Earthen Ring and get Shaman. Alliance Skyborne take Kirin Tor arcane and get Mage. Both factions play Warrior, Hunter, Rogue, and Druid, including Skyborne druid forms. New racials, customizations, voices, dances, and visual options. ${t(990, "16:30")}`,
      ],
    },
    {
      id: "dungeons-raids",
      heading: "Dungeons, raids, battleground",
      image: OFFICIAL.features.stories,
      paragraphs: [
        `City of Dalaran (28–33): Kirin Tor barrier after Warcraft III is down. Enchantments backfiring, constructs haywire, demonic energy, “there are cats everywhere.” Magical artifacts are offered. It is not only a dungeon — there is a whole city to explore. A ragtag group helping the Kirin Tor would look bad, so there is a roundabout way in. ${t(1173, "19:33")}`,
        `Ruins of Lordaeron (15–20): Forsaken reclaiming the city. Family heirlooms and keepsakes still inside. Scourge in the dark corners. A necromancer has moved in; signs point to an attack on another city. Horde assists the Forsaken. Alliance has to sneak in. ${t(1248, "20:48")}`,
        `Hall of Thanes (13–18) under Ironforge: burial place of dwarven monarchs. Intruders — Dark Irons suspected. Ghostly whispers. Alliance is the natural fit. Horde has to sneak or carve a way in. ${t(1303, "21:43")}`,
        `Wetlands excavation above Whelgar’s (24–29): a site “trapped in time,” Titan constructs, mist from the mountains, flashing lights. Explorers’ League is interested. ${t(1360, "22:40")}`,
        `The Drowned City (35–40) off Stranglethorn: submerged troll ruins risen from the ocean. Trolls and naga spotted. A pirate ship crashed into it. Playable on the BlizzCon show floor. ${t(1410, "23:30")}`,
        `Alcaz Island Prison (48–53): rumored Defias ransom prison, once rumored to have held Varian Wrynn. The island could be visited before; Forever lets you go inside. Defias fighting naga. ${t(1480, "24:40")}`,
        `Shaper’s Terrace (58–60) in Un’Goro: compared to a Titan facility in Sholazar from Wrath Classic. Titan buildings, wildlife running amok, power crystals. Spoken as “a whole lot like Jurassic Park.” ${t(1543, "25:43")}`,
        `Krol’dok Stronghold (40–55) in Riverglades: kidnappings and raids. Twilight chanting — possibly cultists. ${t(1570, "26:10")}`,
        `Blackmaw Hold (55–60) behind Azshara’s gate: furbolg city fighting corruption. Tunnels run deep and can lead into a different kind of danger — the Barrow Deeps. ${t(1601, "26:41")}`,
        `Barrow Deeps is a 10-player raid. Night Elf prison for dangerous captives. “Rumor has it, an infamous demon hunter was once kept here.” Night elves, like the Blackmaw furbolgs, may be dealing with corruption. Allies are not freely let in. ${t(1643, "27:23")}`,
        `Hyjal Summit is 20-player. Malfurion sacrificed the power sustaining Night Elf immortality to stop Archimonde. Reports say someone or something is draining power from the land around Hyjal Summit. Snowy peaks, a river through ancient elven ruins, ghosts of the Third War. Legendary power is named as a reward. ${t(1700, "28:20")}`,
        `Darkspear Islands is 15 vs 15. Eye of the Storm-style control of positions, plus Arathi Basin-style flags you capture and stand on. Horde joins the Darkspear trolls to push Alliance off the islands. Alliance reports to the Theramore Expeditionary Force. ${t(1764, "29:24")}`,
      ],
    },
    {
      id: "classes-items-racials",
      heading: "Classes, items, racial sneak peek",
      image: OFFICIAL.features.power,
      paragraphs: [
        `Class work follows the 2005–2006 talent pass: uniqueness, not making every class good at everything. Cover gaps without erasing identity. ${t(1830, "30:30")}`,
        `Paladins: a new seal to tank more effectively; talents that enable a bit of group healing; Retribution “maybe now’s your time to shine.” Talents moved off tiny incremental nodes toward choices you notice and real trade-offs. ${t(1861, "31:01")}`,
        `Hundreds of new items with on-use and on-equip effects. Named examples: Sharkmane Cutlery as a farm weapon; a grave robber’s shovel. Existing items were updated too: Tidal Charm is now super effective against certain sea-dwellers; Whitemane’s Chapeau increases healing and damage done and reduces resurrection cast time. ${t(1901, "31:41")}`,
        `Racial sneak peek: Dwarf 5% damage against beasts; Undead 5% chance to drain health from the target. The rest of the racial pass was pointed at the Sunday Deep Dive. ${t(1946, "32:26")}`,
      ],
    },
    {
      id: "systems",
      heading: "Rendering, camping, Legacy, transmog, models",
      image: OFFICIAL.features.systems,
      paragraphs: [
        `Clay Stone: not every zone is locked to sunrise or sunset. Classic art style is treated as timeless. The pass is environmental effects, not a new art style: rivers in Elwynn, fog rolling into Duskwood at night, moonlight through Ashenvale leaves. ${t(2040, "34:00")}`,
        `Camping doubles down on tradeskills alongside other new professions content. Almost anywhere in the open world you craft a campsite. Others stop, use tradeskills for the camp, and grant a buff. You sit a moment before the buffs, so people might talk. ${t(2118, "35:18")}`,
        `Legacy triples down on the 1–60 journey. It benefits everyone and especially alt-levelers: perks unlock across alts as you hit goals on each new run. ${t(2170, "36:10")}`,
        `Transmog is entirely opt-in. On: everyone can look their best. Off: you see original gear — “clown suits for everyone.” Further Classic-specific transmog rules, plus more camping and Legacy, were deferred to the Deep Dive. ${t(2293, "38:13")}`,
        `Character models are a game-wide HD or SD toggle: your character, NPCs, and other players together. Classic animations were restored onto HD character models so an HD dwarf can run with Classic animation sets — “no bouncy dwarves.” ${t(2388, "39:48")}`,
      ],
    },
    {
      id: "roadmap",
      heading: "What they ran out of time to cover",
      paragraphs: [
        `Clay lists systems they did not have time to walk: new professions content, new reputations, itemization that blows up much of the old meta, the new PvP system, the first new legendary, riding-skill changes meant to keep the moment you earn your first mount, official gamepad support (playable on the show floor in an in-development state), and integration of previously unfinished and unused vanilla content. ${t(2496, "41:36")}`,
        `Roadmap language: fast-paced production for a slow-paced game. New raids unlock December 9, then more raids, dungeons, PvP updates, world content, and new quests throughout 1–60, on top of original vanilla content. ${t(2568, "42:48")}`,
        `Summer’s “revamped iconic raid” line: Forever is set at the beginning of World of Warcraft, with stories authentic to that time. The original iconic raids have not opened yet. They want players to rediscover them later. ${t(2640, "44:00")}`,
        `Nothing is off the table, including a new class. They say they can pivot on community feedback. ${t(2700, "45:00")}`,
        `The winter gap on the roadmap is Hardcore. Clay says Hardcore is coming to Forever and points to a Hardcore panel the next day. Forever is not a seasonal experimental realm. ${t(2734, "45:34")}`,
        `Collector’s Edition: dwarf-and-bear statue from the original cinematic, tied back to November 2004. Launch November 4. Beta “this Thursday.” Demo on the show floor. ${t(2813, "46:53")}`,
      ],
    },
  ],
  transcripts: [
    videoTranscript(v, [
      `${t(22, "0:22")} Ion: not too late to start Forever. Classic 2017/2019 to the 60-cap split: TBC vs stay in the Warcraft III world.`,
      `${t(166, "2:46")} Season of Discovery as a bounded experiment, including Karazhan Crypts and Scarlet Enclave. Players asked for a permanent home, not another season.`,
      `${t(650, "10:50")} Four regions: Hyjal, Shen’dralas, Riverglades, Zephras. Riverglades sits between Redridge, Burning Steppes, Badlands, and Swamp of Sorrows.`,
      `${t(918, "15:18")} Zephras: Highborne pact with wind spirits in Skywall. Thunderfury / Thunderaan named as precedent. Skyborne split toward wind, arcane, or darker powers.`,
      `${t(1173, "19:33")} Dungeon ladder spoken with infiltration notes: Dalaran roundabout entry; Alliance sneaks Lordaeron; Horde sneaks Hall of Thanes.`,
      `${t(1643, "27:23")} Barrow Deeps 10, demon-hunter prison as rumor. Hyjal Summit 20, power being drained from the mountain, legendary reward named.`,
      `${t(1861, "31:01")} Paladin tank seal and a bit of group healing. Sharkmane Cutlery, grave robber’s shovel, Tidal Charm vs sea-dwellers, Whitemane’s Chapeau.`,
      `${t(1946, "32:26")} Racial sneak peek: Dwarf 5% vs beasts; Undead 5% drain. Rest of racials, transmog, camping, Legacy pointed at the Sunday Deep Dive.`,
      `${t(2040, "34:00")} Duskwood fog at night. Camping requires sitting before buffs. HD/SD is game-wide. Classic animations restored on HD models.`,
      `${t(2496, "41:36")} Unused vanilla content, first-mount riding skill, in-dev gamepads on the show floor. Original iconic raids are not open yet.`,
    ]),
  ],
  sources: [
    { label: "Forever What’s Next panel recap", href: "https://news.blizzard.com/en-us/article/24303862/world-of-warcraft-forever-whats-next-panel-recap" },
    { label: "Official Forever page", href: "https://worldofwarcraft.blizzard.com/en-us/forever" },
    videoPage(v),
  ],
};
