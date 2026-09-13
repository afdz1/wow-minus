import racialPack from "@/data/racials.json";
import { Hero } from "@/components/Hero";
import { OFFICIAL } from "@/data/art";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Races & racials",
  description:
    "World of Warcraft: Forever races including the Skyborne, plus rewritten racial abilities for Horde and Alliance.",
  path: "/database/races",
});

const RACIALS = racialPack.racials as Record<
  string,
  { race: string; classes: string[]; abilities: string[][] }[]
>;

export default function RacesPage() {
  return (
    <>
      <Hero image={OFFICIAL.skyborne} kicker="Database" title="Races & racials">
        <p>
          Stand with a new race of windswept elves. Follow the path of the Windshaper Horde or the High Order
          Alliance. Existing racials were rewritten for Forever.
        </p>
      </Hero>
      <div className="wrap">
        <div className="factions" style={{ padding: 0 }}>
          {Object.entries(RACIALS).map(([fac, races]) => (
            <div key={fac} className="panel">
              <h2>{fac}</h2>
              <div style={{ padding: 12 }}>
                {races.map((r) => (
                  <div key={r.race} className="race">
                    <div className="rn">
                      <span>{r.race}</span>
                      <small>{r.classes.join(", ")}</small>
                    </div>
                    <ul>
                      {r.abilities.map(([n, t]) => (
                        <li key={n}>
                          <b>{n}</b> {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
