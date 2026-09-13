const slide = (file: string) => `/images/deep-dive/${file}`;
const caption = "Blizzard Deep Dive slide, BlizzCon 2026.";
const BLUE = [
  {
    label: "World of Warcraft at BlizzCon 2026",
    href: "https://news.blizzard.com/en-us/article/24301145/world-of-warcraft-at-blizzcon-2026-discover-whats-next",
  },
  {
    label: "Forever What’s Next panel recap",
    href: "https://news.blizzard.com/en-us/article/24303862/world-of-warcraft-forever-whats-next-panel-recap",
  },
  { label: "Official Forever page", href: "https://worldofwarcraft.blizzard.com/en-us/forever" },
];
const note = "ClassicMinus report from Blizzard’s official Deep Dive slides at BlizzCon 2026.";

export const REALMLESS_ARTICLE = {
  slug: "realmless-azeroth",
  title: "Realmless Azeroth",
  dek: "You pick a playstyle, not a realm: PvP, PvE, Roleplay, and Hardcore coming later. Each playstyle shares a version of the world.",
  date: "2026-09-13",
  author: "ClassicMinus Staff",
  tag: "News",
  image: slide("realmless-azeroth.png"),
  note,
  body: [
    "Forever’s Deep Dive names the server model Realmless Azeroth. Character creation chooses a playstyle instead of a realm list.",
  ],
  sections: [
    {
      id: "playstyles",
      heading: "Four playstyles",
      figures: [
        {
          src: slide("realmless-azeroth.png"),
          alt: "Forever Realmless Azeroth slide showing PvP, PvE, Roleplay, and Hardcore coming later",
          caption,
        },
      ],
      paragraphs: [
        "The slide lists four playstyles: PvP, PvE, Roleplay, and Hardcore. Hardcore is labeled Coming later.",
        "Slide line: “Each playstyle shares a version of the world.”",
      ],
    },
  ],
  sources: BLUE,
};

export const CLASSIC_ENHANCED_ARTICLE = {
  slug: "classic-or-enhanced",
  title: "Classic or Enhanced",
  dek: "First login offers two presets. Classic starts SD, no quest blobs, no one-bag, transmog off. Enhanced starts HD, quest blobs on, one-bag on, transmog on.",
  date: "2026-09-13",
  author: "ClassicMinus Staff",
  tag: "News",
  image: slide("classic-enhanced.png"),
  note,
  body: [
    "Forever’s first-login mode selector is two named presets: Classic and Enhanced. You can reconfigure any of the settings later.",
  ],
  sections: [
    {
      id: "presets",
      heading: "The two presets",
      figures: [
        {
          src: slide("classic-enhanced.png"),
          alt: "Forever New Features slide comparing Classic and Enhanced starting settings",
          caption,
        },
      ],
      paragraphs: [
        "Classic copy: “A more traditional presentation with simpler visuals, standard character models, and fewer modern interface features enabled by default for a cleaner, more original-style experience with less automatic guidance.” Starting settings: Standard Definition character models; Quest points of interest and objective blobs off; One bag off; Transmog off.",
        "Enhanced copy: “An updated presentation with higher visual fidelity and additional interface features enabled by default.” Starting settings: High Definition character models; Quest points of interest and objective blobs on; One bag on; Transmog on.",
      ],
    },
  ],
  sources: BLUE,
};

export const TRANSMOG_NPC_ARTICLE = {
  slug: "transmog-npc",
  title: "Transmog is an NPC toggle",
  dek: "Fyrenz Vishonar sells the look change. Disable, and you only see the gear other players actually have equipped. Speak to the NPC again to turn it back on.",
  date: "2026-09-13",
  author: "ClassicMinus Staff",
  tag: "News",
  image: slide("transmog-npc.png"),
  note,
  body: [
    "Transmog is handled by an NPC, not only a settings checkbox. The Deep Dive slide names Fyrenz Vishonar.",
  ],
  sections: [
    {
      id: "gossip",
      heading: "What the NPC says",
      figures: [
        {
          src: slide("transmog-npc.png"),
          alt: "Forever transmog NPC gossip and the disable confirmation dialog",
          caption,
        },
      ],
      paragraphs: [
        "Greeting: “I can show you how to weave magic about yourself to change the appearance of your equipment, if you so desire. Do you wish to utilize my services?” Two options: “I’d like to change the appearance of my equipment.” and “I’d like to disable transmogrification.”",
        "Disable confirmation: “By disabling transmogrification you will no longer see any appearances applied to other players’ gear via transmogrification. You will only see the equipment other players actually have equipped.” You can re-enable it by speaking with the NPC again.",
      ],
    },
  ],
  sources: BLUE,
};

export const CAMPING_BLACKSMITH_ARTICLE = {
  slug: "camping-blacksmithing",
  title: "Camping 101: Blacksmithing",
  dek: "Sharpening Wheel at skill 20, Anvil at 140, Master Forge at 300. Strength buff, campfire required, one-hour shared cooldown, not in the middle of town.",
  date: "2026-09-13",
  author: "ClassicMinus Staff",
  tag: "News",
  image: slide("camping-blacksmithing.png"),
  note,
  body: [
    "Blacksmithing is the first camping tradeskill with published object tooltips. The trainer quest is Camping 101: Blacksmithing, from Smith Argus.",
  ],
  sections: [
    {
      id: "quest",
      heading: "The quest",
      figures: [
        {
          src: slide("camping-blacksmithing.png"),
          alt: "Forever camping slide with Camping 101: Blacksmithing quest and Sharpening Wheel, Anvil, and Master Forge tooltips",
          caption,
        },
      ],
      paragraphs: [
        "Quest text: you can now craft a Sharpening Wheel. “Most folk don’t care much for camps being set up in the center of town, so you’ll need to head into the wilderness if you want to test it out.” No camp is complete without a campfire. “Most cooks can teach you to make a fire.” Reward: Sharpening Wheel and 270 experience.",
      ],
    },
    {
      id: "objects",
      heading: "The three objects",
      paragraphs: [
        "Sharpening Wheel. Use: Constructs a sharpening wheel that grants you and others sitting nearby 34 increased Strength, exclusive with Strength of Earth Totem. Requires a Campfire nearby. All camping features share a cooldown of 1 hour. Requires Blacksmithing (20).",
        "Anvil. Use: Places an anvil, and provides all of the benefits of a Sharpening Wheel. Requires a Campfire nearby. May be placed over a Sharpening Wheel to replace it. All camping features share a cooldown of 1 hour. Requires Blacksmithing (140).",
        "Master Forge. Use: Places a Master Forge usable for recipes that require it, and provides all of the benefits of a Sharpening Wheel. Requires a Campfire nearby. May be placed over a Sharpening Wheel to replace it. All camping features share a cooldown of 1 hour. Requires Blacksmithing (300).",
      ],
    },
  ],
  sources: BLUE,
};

export const TRADESKILL_PLANS_ARTICLE = {
  slug: "new-blacksmith-plans",
  title: "New blacksmith plans",
  dek: "Three published recipes from the Deep Dive: Crusader’s Boots, Officer’s Pauldrons, and Enriched Thorium Breastplate. New reagents include Pristine Leather, Sandpaper, Sulfuric Acid, Legionite Bar, and Azerothium Bar.",
  date: "2026-09-13",
  author: "ClassicMinus Staff",
  tag: "News",
  image: slide("tradeskill-plans.png"),
  note,
  body: [
    "The Deep Dive tradeskills slide shows three soulbound plans. Stats, levels, and reagents are on the tooltips.",
  ],
  sections: [
    {
      id: "plans",
      heading: "The three plans",
      figures: [
        {
          src: slide("tradeskill-plans.png"),
          alt: "Forever tradeskills slide with Crusader’s Boots, Officer’s Pauldrons, and Enriched Thorium Breastplate plans",
          caption,
        },
      ],
      paragraphs: [
        "Plans: Crusader’s Boots. Mail feet. 131 Armor, +4 Strength, +5 Stamina. Equip: Increases damage and healing done by magical spells and effects by up to 6. Requires Level 17. Craft: 12 Bronze Bar, 2 Coarse Grinding Stone, 4 Pristine Leather, 5 Lesser Magic Essence. Requires Blacksmithing (85). Sell price 4 silver 25 copper.",
        "Plans: Officer’s Pauldrons. Plate shoulder. 375 Armor, +13 Strength, +10 Stamina, +8 Agility. Requires Level 42. Craft: 20 Mithril Bar, 2 Solid Grinding Stone, 10 Sandpaper, 4 Sulfuric Acid, 8 Jade, 1 Large Glowing Shard. Requires Blacksmithing (210). Sell price 10 silver 50 copper.",
        "Plans: Enriched Thorium Breastplate. Plate chest. 647 Armor, +25 Stamina. Equip: Increased Defense +9. Equip: Increases damage and healing done by magical spells and effects by up to 14. Requires Level 57. Craft: 8 Legionite Bar, 24 Heavy Thorium Bar, 4 Essence of Air, 4 Essence of Fire, 4 Azerothium Bar. Requires Blacksmithing (300). Sell price 15 silver.",
      ],
    },
    {
      id: "new-reagents",
      heading: "Reagents that are not original Classic",
      paragraphs: [
        "Named on these plans and not original Classic blacksmithing: Pristine Leather, Sandpaper, Sulfuric Acid, Legionite Bar, Heavy Thorium Bar, and Azerothium Bar.",
      ],
    },
  ],
  sources: BLUE,
};

export const DEEP_DIVE_SLIDE_ARTICLES = [
  REALMLESS_ARTICLE,
  CLASSIC_ENHANCED_ARTICLE,
  TRANSMOG_NPC_ARTICLE,
  CAMPING_BLACKSMITH_ARTICLE,
  TRADESKILL_PLANS_ARTICLE,
];
