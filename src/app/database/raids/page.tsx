import { Hero } from "@/components/Hero";
import { RAIDS } from "@/data/content";
import { OFFICIAL } from "@/data/art";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Raids",
  description:
    "World of Warcraft: Forever raids unlock December 9, 2026: 10-player Barrow Deeps, 20-player Hyjal Summit, and 40-player Onyxia’s Lair.",
  path: "/database/raids",
});

export default function RaidsPage() {
  return (
    <>
      <Hero image={OFFICIAL.zones.ashenvale1} video={OFFICIAL.videos.hyjal} kicker="Database" title="Raids unlock December 9">
        <p>10-player Barrow Deeps, 20-player Hyjal Summit, and 40-player Onyxia’s Lair.</p>
      </Hero>
      <div className="wrap db-grid">
        {RAIDS.map((r) => (
          <article key={r.slug} className="db-card">
            <img src={r.image} alt="" />
            <div className="pad">
              <div className="meta">
                {r.size}-player · {r.date}
              </div>
              <h3>{r.name}</h3>
              <p style={{ margin: 0, color: "var(--muted)", fontSize: 13 }}>{r.blurb}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
