import { Hero } from "@/components/Hero";
import { DUNGEONS } from "@/data/content";
import { OFFICIAL } from "@/data/art";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Dungeons",
  description:
    "Nine new World of Warcraft: Forever dungeons at launch, from Hall of Thanes under Ironforge to Shaper’s Terrace in Un’Goro.",
  path: "/database/dungeons",
});

export default function DungeonsPage() {
  return (
    <>
      <Hero image={OFFICIAL.features.stories} kicker="Database" title="Nine new dungeons">
        <p>Launch ladder from Hall of Thanes under Ironforge to Shaper’s Terrace in Un’Goro.</p>
      </Hero>
      <div className="wrap db-grid">
        {DUNGEONS.map((d) => (
          <article key={d.slug} className="db-card">
            <img src={d.image} alt={d.name} />
            <div className="pad">
              <div className="meta">
                {d.levels} · {d.location}
              </div>
              <h3>{d.name}</h3>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: 13 }}>{d.blurb}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
