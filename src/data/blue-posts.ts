import { OFFICIAL } from "./art";

/** Official Blizzard communications. The community calls these Blue Posts. */
export type BluePost = {
  slug: string;
  title: string;
  dek: string;
  date: string;
  href: string;
  publisher: string;
  image: string;
  body: string[];
};

export const BLUE_POSTS: BluePost[] = [
  {
    slug: "blizzcon-2026-discover-whats-next",
    title: "World of Warcraft at BlizzCon 2026: Discover What’s Next",
    dek: "Blizzard’s BlizzCon weekend roundup — including the Forever announcement, launch date, and beta start.",
    date: "2026-09-12",
    href: "https://news.blizzard.com/en-us/article/24301145/world-of-warcraft-at-blizzcon-2026-discover-whats-next",
    publisher: "Blizzard Entertainment",
    image: OFFICIAL.countdown,
    body: [
      "This is Blizzard’s live BlizzCon 2026 news post. It covers several Warcraft products. The Forever section is the official announcement copy.",
      "Blizzard states Forever launches November 4, with beta beginning Thursday, September 17. It is a new permanent home alongside modern and Classic WoW, set after Warcraft III Reforged: Forsaken Kingdom and before Molten Core.",
      "Players return to the original continents, adventure to level 60, and keep progressing through new stories and updates. The post also points to a Forever Deep Dive panel on Sunday, September 13 at 10:00 a.m. PDT, and a live Q&A on September 17.",
      "The same article includes Midnight: Eclipse, The Last Titan, and Warcraft III Reforged: Forsaken Kingdom. Those are official, but they are not Forever patch notes.",
    ],
  },
  {
    slug: "whats-next-panel-recap",
    title: "World of Warcraft: Forever What’s Next Panel Recap",
    dek: "Blizzard’s official recap of the Forever What’s Next panel: original Azeroth, launch date, systems, and the first content roadmap.",
    date: "2026-09-12",
    href: "https://news.blizzard.com/en-us/article/24303862/world-of-warcraft-forever-whats-next-panel-recap",
    publisher: "Blizzard Entertainment",
    image: OFFICIAL.masthead,
    body: [
      "Blizzard published this recap on the official news site after the World of Warcraft: Forever What’s Next panel. It is the studio’s written account of what Forever is, not a creator summary.",
      "The post states Forever is original Azeroth — Eastern Kingdoms and Kalimdor — with new and reimagined regions and more than a thousand new quests across 1–60. Named regions include Mount Hyjal, Shen’dralas, Riverglades, and Zephras Isle, home of the Skyborne.",
      "It lists four pillars: approachable and familiar; the world as the main character; the journey before the destination; and protecting social experiences. There are no flying mounts and no level scaling. Leveling stays as important as endgame.",
      "Launch content named here includes nine new dungeons, Hyjal Summit (20) and Barrow Deeps (10), and the Darkspear Islands 15v15 battleground. Global launch is November 4, 2026 at 3:00 p.m. PST. Beta begins September 17. New raids unlock December 9.",
      "The closing line is the one players quote most: this is not a mode, a season, or a new version of Classic.",
    ],
  },
  {
    slug: "pre-purchase-upgrades",
    title: "Pre-Purchase World of Warcraft: Forever Upgrades",
    dek: "Official Battle.net upgrade packs, beta access, name reservation, and how Forever is included with a WoW subscription.",
    date: "2026-09-12",
    href: "https://news.blizzard.com/en-us/article/24301508/pre-purchase-world-of-warcraft-forever-upgrades-and-begin-your-next-journey-in-azeroth",
    publisher: "Blizzard Entertainment",
    image: OFFICIAL.collection,
    body: [
      "Blizzard’s shop post states Forever access is included with an active World of Warcraft Subscription or Game Time at launch on November 4, 2026 at 3:00 p.m. PST. Upgrade editions are optional.",
      "Skyborne Heroic Pack: Skyborne race and Zephras Isle, early name reservation, cosmetics, and one Invite-A-Friend launch code. It does not include guaranteed beta.",
      "Skyborne Epic Pack adds beta from September 17 through October 21, 30 days of Game Time starting November 4, extra cosmetics, and two more invite codes.",
      "Warcraft Forever Collection is a limited-time bundle through January 11, 2027. It includes the Epic Pack plus Warcraft III: Reforged and the Forsaken Kingdom campaign.",
      "Name reservation runs October 27–November 3 for upgrade buyers, up to three characters. Invite codes email starting October 20 and cover launch week, November 4–11.",
    ],
  },
  {
    slug: "forever-official-page",
    title: "World of Warcraft: Forever — Official Game Page",
    dek: "The live product page on worldofwarcraft.blizzard.com. Zones, features, and pack copy as Blizzard currently publishes them.",
    date: "2026-09-12",
    href: "https://worldofwarcraft.blizzard.com/en-us/forever",
    publisher: "Blizzard Entertainment",
    image: OFFICIAL.features.stories,
    body: [
      "The official Forever page is Blizzard’s standing product listing. Copy here can change; treat the live page as the source of truth and this entry as a snapshot of what it stated at catalog time.",
      "It presents Forever as included with a WoW subscription, launching November 4, with new and expanded zones, class updates, and graphics upgrades on original Azeroth.",
      "Feature blocks on the page include Explore Untold Stories, Soak in Breathtaking Expanses, Take Unknown Paths, Claim New Power, Every Journey Matters, and System Revamps.",
      "Zone modules currently lead with Zephras Isle, Riverglades, and Mount Hyjal. Race copy introduces the Skyborne and new class combinations such as Forsaken Paladin and Dwarf Shaman.",
    ],
  },
];

export function getBluePost(slug: string) {
  return BLUE_POSTS.find((p) => p.slug === slug);
}
