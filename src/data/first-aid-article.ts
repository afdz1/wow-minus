const SRC =
  "https://www.warcrafttavern.com/forever/news/first-aid-profession-preview-for-world-of-warcraft-forever/";
const img = (file: string) => `/images/first-aid/${file}`;
const shot = "BlizzCon 2026 floor demo.";

export const PROFESSIONS_ARTICLE = {
  slug: "professions",
  title: "Professions",
  dek: "Camping is a world profession for campsites. First Aid is the first trade with a published recipe window: camping kits, bandages, curatives, and healing potions.",
  date: "2026-09-13",
  author: "ClassicMinus Staff",
  tag: "Classic-",
  image: img("horde-camping.jpg"),
  note: "ClassicMinus profession ledger. Camping is the campsite system. First Aid recipes are from the BlizzCon floor demo. Other trades stay empty until a recipe window is published. Sources at the bottom.",
  body: [
    "Camping is a profession built around campsites in the open world. First Aid is the only trade with a published recipe window so far, from the BlizzCon 2026 floor demo.",
    "That First Aid window groups recipes into Camping, Bandages, Curatives, and Healing Potions. Three shots show the skill bar at First Aid 225/225. Nothing in those shots states whether 225 is the cap.",
  ],
  sections: [
    {
      id: "camping-profession",
      heading: "Camping",
      paragraphs: [
        "Camping is a profession, not only a First Aid folder. Players place a campfire in the outdoor world to create a campsite. Other adventurers join for vendors, repairs, tradeskill workspaces, and one-hour buffs. You slash-sit by the fire for a few moments first.",
        "Each player can place one object. Each tradeskill has different objects at different skill levels. Named examples: a sharpening wheel (strength), a tailor faction banner (spirit), an herbalist incense candle (intellect). Those are exclusive with class buffs such as Blessing of Might or Arcane Intellect.",
        "Camping features share a 1-hour cooldown. A campfire is required for the published First Aid Kit. The Legacy perk Permanence extends camp rest benefits by 50%.",
        "Whether Camping has its own skill bar, like First Aid, is unpublished. The First Aid Camping group is the kit you unpack at a fire.",
      ],
    },
    {
      id: "first-aid",
      heading: "First Aid",
      figures: [
        {
          src: img("camping-kit.jpg"),
          alt: "Forever First Aid window with First Aid Kit selected and its tooltip open",
          caption: shot,
        },
      ],
      paragraphs: [
        "The First Aid window includes Search, Filter, Track Recipe, Create All, a quantity field, and Create.",
        "Recipe groups in the list: Camping, Bandages, Curatives, and Healing Potions.",
      ],
    },
    {
      id: "camping",
      heading: "First Aid camping recipes",
      paragraphs: [
        "Camping is also a First Aid recipe group. The listed craft is First Aid Kit.",
        "Craft: 3 Linen Bandage and 1 Refreshing Spring Water.",
        "Use: unpacks a first aid kit that lets you and others sitting nearby gain 34 increased Stamina, exclusive with Power Word: Fortitude. Requires a Campfire nearby. All camping features share a cooldown of 1 hour. Requires First Aid (20).",
      ],
    },
    {
      id: "bandages",
      heading: "Bandages",
      paragraphs: [
        "Listed recipes: Mageweave Bandage, Silk Bandage, Heavy Wool Bandage, Wool Bandage, Heavy Linen Bandage, and Linen Bandage.",
        "Linen Bandage is a reagent for First Aid Kit. Bandage reagents, heal amounts, and channel times are not in the published shots.",
      ],
    },
    {
      id: "curatives",
      heading: "Curatives",
      figures: [
        {
          src: img("woolen-tourniquet.jpg"),
          alt: "First Aid recipe for Woolen Tourniquet, requiring Wool Cloth and Fine Thread",
          caption: `${shot} Woolen Tourniquet.`,
        },
        {
          src: img("simple-poultice.jpg"),
          alt: "First Aid recipe for Simple Poultice, requiring Spider Ichor, Mild Spices, and Bottle of Dalaran Noir",
          caption: `${shot} Simple Poultice.`,
        },
        {
          src: img("anti-venom.jpg"),
          alt: "First Aid recipe for Anti-Venom, requiring a Small Venom Sac",
          caption: `${shot} Anti-Venom.`,
        },
      ],
      paragraphs: [
        "Curatives are a new First Aid group. Three recipes are listed.",
        "Woolen Tourniquet cures Bleed effects. Craft: 2 Wool Cloth and 2 Fine Thread.",
        "Simple Poultice cures diseases. Craft: 1 Spider Ichor, 1 Mild Spices, and 1 Bottle of Dalaran Noir. The recipe icon is marked 3; the recipe text only says it creates a Simple Poultice.",
        "Anti-Venom handles poisons. Craft: 1 Small Venom Sac, creating 3 Vials of Anti-Venom.",
      ],
    },
    {
      id: "healing-potions",
      heading: "Healing potions",
      paragraphs: [
        "Healing potions craft through First Aid. Listed recipes: Healing Potion, Lesser Healing Potion, and Minor Healing Potion.",
        "Potion reagents and tooltips are not in the published shots.",
      ],
    },
    {
      id: "alchemy",
      heading: "Alchemy",
      paragraphs: [
        "Not yet documented. It is unknown whether Healing Potion, Lesser Healing Potion, and Minor Healing Potion still craft through Alchemy, or whether First Aid will include other potions.",
      ],
    },
    {
      id: "other-professions",
      heading: "Other professions",
      paragraphs: [
        "Not yet documented with recipe windows: Blacksmithing, Cooking, Enchanting, Engineering, Fishing, Herbalism, Leatherworking, Mining, Skinning, and Tailoring.",
        "The Deep Dive adds over 600 new recipes across all professions, with many existing recipes overhauled, and profession choice meant to matter at low level. Almost all crafted cooking food gives a stat boost.",
        "Cooking and Fishing are named on Legacy perks (Master Chef, Luremaster), so those trades exist. Recipe lists are unpublished.",
        "A Legacy perk names crate turn-ins to the Azeroth Commerce Authority and Durotar Supply and Logistics, and a Merchant Favor currency. Those names are on the perk. The rest of that economy is unpublished.",
      ],
    },
  ],
  sources: [
    { label: "First Aid Profession Preview — Warcraft Tavern (Luxrah)", href: SRC },
    { label: "Forever What’s Next panel recap", href: "https://news.blizzard.com/en-us/article/24303862/world-of-warcraft-forever-whats-next-panel-recap" },
  ],
};
