/** Newest first. Drop a screenshot in public/images/confirmed and add a row. */

export type ConfirmationShot = {
  src: string;
  alt: string;
  credit?: { label: string; href: string };
};

export type Confirmation = {
  id: string;
  date: string;
  topic: string;
  title: string;
  fact: string;
  notes?: string[];
  shots: ConfirmationShot[];
};

export const CONFIRMED: Confirmation[] = [
  {
    id: "race-class-combos",
    date: "2026-09-13",
    topic: "Characters",
    title: "New race and class combinations",
    fact: "Forever adds six new race and class combinations: Human Hunter, Gnome Priest, Dwarf Shaman, Troll Warlock, Orc Mage, and Undead Paladin.",
    notes: [
      "Official copy already named Forsaken Paladin and Dwarf Shaman.",
      "Alliance still: Gnome Priest and Dwarf Shaman.",
      "Horde still: Undead Paladin, Orc Mage, and Troll Warlock.",
    ],
    shots: [
      {
        src: "/images/confirmed/race-class-alliance.png",
        alt: "Gnome Priest and Dwarf Shaman standing in an Alliance zone, with a Tauren in gold plate on the left.",
      },
      {
        src: "/images/confirmed/race-class-horde.png",
        alt: "Undead Paladin, Orc Mage, and Troll Warlock standing together in a Horde zone.",
      },
    ],
  },
  {
    id: "unholy-paladin-mount",
    date: "2026-09-13",
    topic: "Classes",
    title: "Unholy Paladin mount",
    fact: "Undead Paladins have an Unholy mount: a black armored horse with gold trim and skull barding.",
    shots: [
      {
        src: "/images/confirmed/unholy-paladin-mount.png",
        alt: "Unholy Paladin mount: a black horse in spiked gold-and-black armor with a skull faceplate and tattered white barding.",
      },
    ],
  },
  {
    id: "world-buffs-raids",
    date: "2026-09-13",
    topic: "Systems",
    title: "World buffs stay out of raids",
    fact: "World buffs exist in Forever. They do not work in raids.",
    shots: [],
  },
  {
    id: "full-name",
    date: "2026-09-13",
    topic: "Characters",
    title: "First name and last name",
    fact: "Forever characters use a Full Name — Main Name plus Secondary Name — instead of the Name-Realm convention.",
    notes: [
      "Character creation labels the two fields Type Main Name and Type Secondary Name.",
      "A dice control sits beside the fields.",
      "The official page already said both names are required, and that the secondary name can be hidden in settings.",
    ],
    shots: [
      {
        src: "/images/confirmed/full-name.png",
        alt: "Character creation Full Name pane with Type Main Name and Type Secondary Name fields, plus a dice control.",
        credit: { label: "@MrGMYT on X", href: "https://x.com/MrGMYT" },
      },
    ],
  },
  {
    id: "controller-map",
    date: "2026-09-13",
    topic: "Systems",
    title: "Native controller support",
    fact: "Forever has a native gamepad overlay. Controller Map shows Xbox-layout bindings, and the HUD draws button prompts on the action bars.",
    notes: [
      "Official Controller Map copy labels the gamepad option alpha and asks for feedback.",
      "Currently the gamepad can be tested on the Skyborne 1–10 experience only, not the dungeon playtest.",
      "In the Skyborne starting zone, press any button on the gamepad to switch. The game detects pad usage.",
      "Left stick moves. Right stick adjusts the camera. A jumps. X interacts. Bumpers target. Triggers switch skill panels. D-pad and face buttons can fire spells.",
      "The in-game overlay reopens from Controller Info in the Main Menu.",
      "In-game overlay shot at level 38.",
    ],
    shots: [
      {
        src: "/images/confirmed/controller-map-card.png",
        alt: "Official Forever Controller Map card. Xbox-layout bindings on the right, Skyborne valley art on the left. Copy says gamepad is alpha, Skyborne 1–10 only, not the dungeon playtest.",
      },
      {
        src: "/images/confirmed/controller-map.png",
        alt: "Controller Map overlay on an Xbox-layout pad, with action-bar button prompts in the open world. The pane labels gamepad support as alpha.",
      },
    ],
  },
  {
    id: "ping-wheel",
    date: "2026-09-13",
    topic: "UI",
    title: "Retail-style pings",
    fact: "Forever has a radial ping wheel. It works in the open world and posts to chat.",
    notes: [
      "The wheel includes attack, warning, look-here, and a movement ping, with a center cancel.",
      "Chat prints Look here when that ping is used.",
      "The client rate-limits it: Could not send ping: too many pings sent at once.",
      "Shot in Coldridge Valley.",
    ],
    shots: [
      {
        src: "/images/confirmed/ping-wheel.jpg",
        alt: "Dwarf in Coldridge Valley with a retail-style ping wheel open. Chat shows Look here. Red error: Could not send ping: too many pings sent at once.",
        credit: { label: "@MrGMYT on X", href: "https://x.com/MrGMYT" },
      },
    ],
  },
];

export function confirmationCover(entry: Confirmation) {
  return entry.shots[0];
}

export function getConfirmation(id: string) {
  return CONFIRMED.find((c) => c.id === id);
}
