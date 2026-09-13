import Link from "next/link";
import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { CLASSES, DUNGEONS, RAIDS, ZONES } from "@/data/content";
import { OFFICIAL } from "@/data/art";
import { CONFIRMED } from "@/data/confirmed";
import { ZAM_ICON } from "@/data/art";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Database",
  description:
    "World of Warcraft: Forever zones, dungeons, raids, classes, and racials from official Blizzard materials and demo tooltips.",
  path: "/database",
});

export default function DatabasePage() {
  return (
    <>
      <Hero image={OFFICIAL.features.stories} kicker="Database" title="Consolidate Forever">
        <p>Zones, dungeons, raids, classes, and racials scraped from official Blizzard materials and demo tooltips.</p>
      </Hero>
      <div className="wrap db-grid">
        {[
          ["/confirmed", "Confirmed", CONFIRMED[0]?.image ?? OFFICIAL.features.systems, "In-game screenshots"],
          ["/database/zones", "Zones", OFFICIAL.zones.ashenvale1, `${ZONES.length} regions`],
          ["/database/dungeons", "Dungeons", OFFICIAL.features.stories, `${DUNGEONS.length} new at launch`],
          ["/database/raids", "Raids", OFFICIAL.zones.ashenvale2, `${RAIDS.length} unlock Dec 9`],
          ["/database/classes", "Classes", OFFICIAL.features.power, "9 trees reworked"],
          ["/database/races", "Races", OFFICIAL.skyborne, "Skyborne + racial reworks"],
          ["/talents", "Talents", OFFICIAL.features.power, "Full calculator"],
        ].map(([href, name, img, meta]) => (
          <Link key={href} href={href} className="db-card">
            <img src={img} alt="" />
            <div className="pad">
              <div className="meta">{meta}</div>
              <h3>{name}</h3>
            </div>
          </Link>
        ))}
      </div>
      <div className="wrap">
        <div className="class-strip">
          {CLASSES.map((c) => (
            <Link key={c.name} href={`/talents/${c.name.toLowerCase()}`}>
              <img src={ZAM_ICON(c.icon)} alt={c.name} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
