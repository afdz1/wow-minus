import { OFFICIAL } from "./art";

export const DEEP_DIVE_ARTICLE = {
  slug: "deep-dive",
  title: "Forever Deep Dive",
  dek: "ClassicMinus report from Blizzard’s Sunday BlizzCon panel: camping, 600 recipes, transmog loot rules, Legacy caps, Realmless Azeroth, combat stats, and Paladin.",
  date: "2026-09-13",
  author: "ClassicMinus Staff",
  tag: "News",
  image: OFFICIAL.features.systems,
  note: "ClassicMinus report from Blizzard’s official World of Warcraft: Forever Deep Dive at BlizzCon 2026.",
  body: [
    "Blizzard’s Sunday Deep Dive is the systems panel for World of Warcraft: Forever. Clay Stone opened and called it the first of four Forever panels that day. Josh Greenfield (Aggrend) covered camping, professions, and transmog. Anna, lead software engineer, covered Legacy and server infrastructure. Chris, a 21-year Warcraft veteran, covered combat, items, racials, and Paladin as the class example.",
    "A later panel on the same stage is the place for Skyborne lore. Show-floor play remains Skyborne 1–10 or The Drowned City. Saturday’s What’s Next panel is covered separately.",
  ],
  sections: [
    {
      id: "camping",
      heading: "Camping",
      image: OFFICIAL.features.systems,
      paragraphs: [
        "Placing a campfire creates a campsite. Players rest there for vendors, repairs, tradeskill workspaces, and buffs that last one hour. You sit by the fire for a few moments before the buffs. Camps are for the wilderness, not the center of town. Cooks teach the campfire.",
        "Blacksmithing objects: Sharpening Wheel at skill 20 grants 34 Strength, exclusive with Strength of Earth Totem. Anvil at 140 replaces the wheel and keeps its benefits. Master Forge at 300 also keeps the wheel’s benefits and is usable for recipes that require it. All camping features share a 1-hour cooldown and need a campfire nearby.",
      ],
    },
    {
      id: "professions",
      heading: "Professions and cooking",
      paragraphs: [
        "Forever adds over 600 new recipes across all professions. Many existing recipes are overhauled. Profession choice is meant to matter even at low level.",
        "Almost all crafted cooking food gives a stat boost.",
      ],
    },
    {
      id: "transmog",
      heading: "Transmog",
      paragraphs: [
        "First login offers Classic or Enhanced presets. Classic starts Standard Definition models, quest points of interest and objective blobs off, one bag off, transmog off. Enhanced starts High Definition models, quest blobs on, one bag on, transmog on. Any setting can be changed later.",
        "Opt out at an NPC. Fyrenz Vishonar’s disable line: you will no longer see appearances applied to other players’ gear. You will only see the equipment they actually have equipped. Speak to the NPC again to turn it back on.",
        "Bind-on-pickup uncommon and rare dungeon drops grant the appearance to everyone in the group. You do not have to win the item to collect the look. Epic drops and raids grant the appearance only to the player who loots and binds the item.",
        "You transmog an item to the same kind — a cloth chest needs another cloth chest. A saved outfit can mix armor appearance types per slot so a field upgrade still matches. You cannot transmog a high-level appearance onto a low-level character. PvP appearances still require the rank.",
        "With transmog disabled you can still hide your own helm or cloak. Other players’ helm and cloak visibility is not affected. Further Classic-specific transmog rules are coming in blogs before launch.",
      ],
    },
    {
      id: "legacy",
      heading: "Legacy",
      image: OFFICIAL.features.journey,
      paragraphs: [
        "Legacy exists so repeating 1–60 stays exciting. Points come from challenges on the journey you already play — class-leveling milestones at 25, 45, and 60 were the example — not gimmick tasks.",
        "You can spend 16 points on the perk trees. You can earn up to 65 points; extras fill the cosmetic reward track (tabards, pets, a mount). New challenges, perks, and tree updates are planned each patch. Benefits are account-wide, including characters on different servers.",
        "Deeper nodes named on stage: more scarce materials from mining, herbalism, and skinning (20% per rank, up to 100%); class abilities that no longer consume reagents; camping objects that cost no reagents.",
      ],
    },
    {
      id: "rulesets",
      heading: "Realmless Azeroth",
      paragraphs: [
        "The Deep Dive slide is titled Realmless Azeroth. You pick a playstyle, not a realm: PvP, PvE, Roleplay, and Hardcore coming later. Each playstyle shares a version of the world.",
        "Factions stay separate. You group only with the same playstyle. A dead Hardcore character can transfer to another playstyle. Characters use a Main Name and a Secondary Name.",
        "Language preference affects who you encounter. PvP playstyles get faction-balance mechanisms. The engineering goal is large-realm populations with familiar faces — seeing the same players, and your guild, out in the world.",
      ],
    },
    {
      id: "combat-items",
      heading: "Combat and itemization",
      image: OFFICIAL.features.power,
      paragraphs: [
        "Paladin is the example for the whole class pass. Combat stays Classic: slower pacing, crowd control matters, threat matters. The design goal is to un-solve twenty years of solved paths.",
        "Hit is unified across melee, ranged, and spells. Critical strike is unified the same way. Weapon skill still exists and is still valuable; you cannot get as much of it on a single item as in original Classic.",
        "Healing specs are supposed to be able to kill things while questing. New items are more situational — some only work, or work better, in mountains, deserts, cities, or caverns.",
        "Every dungeon boss drop is upgraded to rare quality. New items and quest rewards are added. The Duskwood Morbent Fel quest no longer ends on a two-hander only warriors want; it awards an heirloom family ring. Nesingwary in Stranglethorn still has the Master Hunter’s bow and crossbow, plus a Master Hunter’s spell sword aimed at Retribution (strength and spell damage). World-drop epics, Goldflame Shield named, are buffed so the epic moment is not a weak item.",
      ],
    },
    {
      id: "racials",
      heading: "Dwarf and Undead racials",
      paragraphs: [
        "Dwarf and Undead were the spoken pass because Paladin and Shaman are now options. Stoneform still exists; the armor buff is now physical-damage reduction so it works without a big armor pool. Find Treasure no longer conflicts with Find Herbs, Find Minerals, or Tracking Beasts — you can track iron and treasure at the same time. Mace Specialization is 1% crit on spells, melee, and ranged while a mace is equipped, so Dwarf Shamans and Priests care. Big Game Hunter remains 5% damage to beasts.",
        "Undead: longer underwater breathing; Will of the Forsaken removes Charm, Fear, and Sleep rather than granting immunity; attacks have a 5% chance to drain health from the target.",
      ],
    },
    {
      id: "paladin",
      heading: "Paladin",
      paragraphs: [
        "Dual specialization is in the game (primary and secondary). Unlock level was not announced on stage. Baseline Paladin bonuses that used to live in talents are now on the whole class. Every spec is supposed to be a viable dungeon or raid option; none is so strong you stack it.",
        "Holy Strike returns from the 2004 beta (instant weapon damage plus Holy). Consecration is an 8-second cooldown. Judgment no longer consumes your seal.",
        "Seal of Fury is the tank seal. Swings deal damage that favors faster weapons; it grants a small absorb; Judgment of Fury is a taunt with 10-yard range versus the 5-yard range on Growl and Taunt. Consecration deals light damage to every target that enters and heavy damage to the first four, so you cannot hold a whole room.",
        "Holy: Improved Holy Strike (row 1, shorter cooldown). Voice of Truth (11-point) is a silence and interrupt immunity. Reverence is 30% mana regen while casting; hybrid damage-and-heal classes get spirit-based mana return. Divine Favor is a two-minute 100% crit on the next Flash of Light, Holy Light, or Holy Shock. Infusion of Light: Holy Shock and Flash of Light crits shorten the next Holy Light. Holy Shock’s cooldown is 10 seconds. Consecrated Ground increases Holy damage in Consecration. Light’s Vigil marks a friend; the next Holy Shock heals that target’s party and resets Holy Shock — usable on multiple parties, or on enemies for damage plus the reset.",
        "Protection: Improved Seal of Fury returns mana when the absorb is consumed; Shield Specialization helps sustain a whole boss. Swift Judgment (16-point) resets Judgment when a taunt misses. Templar’s Bulwark (21-point) is a 100% health absorb and applies Forbearance. Reckoning can extra-attack on block. Iron Creed: Holy Strike cuts damage taken.",
        "Retribution: Vindication is reworked like Demoralizing Shout and Demoralizing Roar, and all three reduce attack power by the same amount. Sacred Arbiter adds 10% Holy Strike damage and refreshes judgments so one Ret can keep judgments up for other Paladins. Champion of the Light converts Intellect into spell damage and healing. Instrument of Law shortens Hammer of Wrath and cuts threat when Righteous Fury is off. Twist of Light: replacing a damaging seal grants an Echo so the next swing applies both seals — Command and Righteousness together if you alternate. Skipping that talent and taking Holy Shock is the anti-twist path.",
        "Paladins still have holes: strong single-target healing, limited range, unique seals and judgments. Other classes get the same treatment in beta, videos, blogs, and Q&A.",
      ],
    },
  ],
  sources: [
    { label: "World of Warcraft at BlizzCon 2026", href: "https://news.blizzard.com/en-us/article/24301145/world-of-warcraft-at-blizzcon-2026-discover-whats-next" },
    { label: "Forever What’s Next panel recap", href: "https://news.blizzard.com/en-us/article/24303862/world-of-warcraft-forever-whats-next-panel-recap" },
    { label: "Official Forever page", href: "https://worldofwarcraft.blizzard.com/en-us/forever" },
  ],
};
