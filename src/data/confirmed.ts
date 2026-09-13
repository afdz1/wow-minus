/** Newest first. Drop a screenshot in public/images/confirmed and add a row. */

export type Confirmation = {
  id: string;
  date: string;
  topic: string;
  title: string;
  fact: string;
  notes?: string[];
  image?: string;
  imageAlt?: string;
  credit?: { label: string; href: string };
};

export const CONFIRMED: Confirmation[] = [
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
    image: "/images/confirmed/full-name.png",
    imageAlt:
      "Character creation Full Name pane with Type Main Name and Type Secondary Name fields, plus a dice control.",
    credit: { label: "@MrGMYT on X", href: "https://x.com/MrGMYT" },
  },
  {
    id: "controller-map",
    date: "2026-09-13",
    topic: "Systems",
    title: "Native controller support",
    fact: "Forever has a native gamepad overlay. Controller Map shows Xbox-layout bindings, and the HUD draws button prompts on the action bars.",
    notes: [
      "Left stick moves. Right stick adjusts the camera. A jumps. X interacts. Bumpers target. Triggers switch skill panels. D-pad and face buttons can fire spells.",
      "The pane says to reopen it from Controller Info in the Main Menu.",
      "The client calls the gamepad option alpha and asks for feedback.",
      "Welcome text: World of Warcraft's new gamepad option. Have fun adventuring in Azeroth!",
      "Shot in the open world at level 38.",
    ],
    image: "/images/confirmed/controller-map.png",
    imageAlt:
      "Controller Map overlay on an Xbox-layout pad, with action-bar button prompts in the open world. The pane labels gamepad support as alpha.",
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
    image: "/images/confirmed/ping-wheel.jpg",
    imageAlt:
      "Dwarf in Coldridge Valley with a retail-style ping wheel open. Chat shows Look here. Red error: Could not send ping: too many pings sent at once.",
    credit: { label: "@MrGMYT on X", href: "https://x.com/MrGMYT" },
  },
];

export function getConfirmation(id: string) {
  return CONFIRMED.find((c) => c.id === id);
}
