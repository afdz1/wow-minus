import { OFFICIAL } from "./art";

export const LEGACY_ARTICLE = {
  slug: "legacy",
  title: "Legacy",
  dek: "Account-wide challenges, a three-branch perk tree, and a cosmetic track for players who keep leveling alts. Points do not skip the journey to 60.",
  date: "2026-09-13",
  author: "ClassicMinus Staff",
  tag: "Classic-",
  image: OFFICIAL.features.journey,
  note: "ClassicMinus Legacy ledger from the BlizzCon 2026 floor demo and Blizzard’s Sunday Deep Dive. Challenge tabs, perk ranks, and cosmetics are demo pane text. Spend and earn caps come from the Deep Dive.",
  body: [
    "Legacy is the alt system. Challenges across the account award Legacy points. Those points buy account-wide perks, and the same total also fills a cosmetic track. Alts still play 1–60.",
    "Each completed challenge awards one Legacy point. Points spend in a talent-style tree with three branches: Professions, Adventure, and Resourcefulness. Most nodes are passive. Dedicated Study is a long-cast cooldown. None of the shown bonuses are combat rotations. Some nodes have multiple ranks. You can spend 16 points on perks. You can earn up to 65 points; extras fill the cosmetic track.",
    "Cosmetic unlocks use total points earned, not leftover unspent points.",
  ],
  sections: [
    {
      id: "challenges",
      heading: "Challenges",
      paragraphs: [
        "Goals cover exploring, leveling classes, raising tradeskills, earning PvP ranks, maximizing reputations, and clearing dungeons and raids.",
        "The demo pane grouped those goals under six tabs: classes, trade skills, player versus player, adventure, dungeons, and raids. Adventure is the exploring bucket. Reputations sit in that same challenge set.",
      ],
    },
    {
      id: "professions",
      heading: "Professions",
      paragraphs: [
        "Working Overtime (0/5): 4% chance to gain a skill increase from using any primary, secondary, or class-based tradeskill.",
        "Performance Bonus (0/5): 5% chance to receive 100% increased Merchant Favor when you turn in a crate to the Azeroth Commerce Authority or Durotar Supply and Logistics.",
        "Luremaster (0/5): while fishing with a lure active, 25% chance to catch an extra fish.",
        "Master Chef (0/5): cooking recipes have a 10% chance to create an extra result.",
        "Dedicated Study (0/5): 25-second cast, 23-hour cooldown. Increases skill by 1 in your lowest tradeskill among Primary and Secondary tradeskills. If you already have 300 in your two current Primary tradeskills and all three Secondary tradeskills, you gain 2 to 4 of a random Elemental Essence.",
      ],
    },
    {
      id: "adventure",
      heading: "Adventure",
      paragraphs: [
        "Well Rested (0/5): rested experience accumulates 4% faster, and the rested experience cap is increased by 4%.",
        "Talented (0/5): you gain talent points every level starting at level 9 instead of level 10. You still may not have more than 51 total talent points.",
        "High Alert (0/2): increases your ability to detect nearby stealthed targets as if your level were increased by 1. Ineffective in battlegrounds.",
        "Thrill of Adventure (0/5): you gain 1% of your maximum Health and Mana over 10 seconds each time you deliver the killing blow to a non-trivial enemy. Ineffective in dungeons, raids, and battlegrounds.",
      ],
    },
    {
      id: "resourcefulness",
      heading: "Resourcefulness",
      paragraphs: [
        "The Quick and the Dead (0/2): increases movement speed while dead by 5%. Helpful spells and abilities cost no resources for 1 minute after you are resurrected, or until you enter combat.",
        "Reinforce (0/5): you take 6% less durability loss when you die.",
        "Diplomat (0/5): increases reputation gains by 2%.",
        "For Great Honor (0/5): increases Honor Points gained by 2%.",
        "Permanence (0/2): class abilities that grant long-duration stat or attribute benefits to all party or raid members last 50% longer, and the benefits you gain from resting at a camp last 50% longer.",
      ],
    },
    {
      id: "cosmetics",
      heading: "Cosmetic track",
      paragraphs: [
        "Rewards shown on the demo track: Replica Ironforge Air Rifle, which fires shots that can stun other players and keep a score; Spectral Bear Cub pet; Spectral Bear tabard; Reins of the Spectral Bear mount.",
        "Those unlocks follow total Legacy points earned.",
      ],
    },
    {
      id: "caps",
      heading: "Caps",
      paragraphs: [
        "The Deep Dive states the spend cap is 16 perk points and the earn cap is 65 for the cosmetic track. New challenges and perks are planned each patch. Benefits are account-wide, including characters on different servers.",
        "Spoken deep nodes not on the demo pane: more scarce materials from mining, herbalism, and skinning; class abilities that no longer consume reagents; camping objects that cost no reagents.",
        "Whether Merchant Favor and the named crate vendors are a full Forever economy, or only leftover tooltip names, is unpublished. The perk text uses those names.",
        "Talent points starting at level 9 is a purchased Legacy node, not the default character. The calculator still treats 51 points from level 10 as the baseline.",
      ],
    },
  ],
  sources: [
    { label: "Forever What’s Next panel recap", href: "https://news.blizzard.com/en-us/article/24303862/world-of-warcraft-forever-whats-next-panel-recap" },
    { label: "Official Forever page", href: "https://worldofwarcraft.blizzard.com/en-us/forever" },
  ],
};
