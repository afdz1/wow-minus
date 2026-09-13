import { Hero } from "@/components/Hero";
import { ROADMAP } from "@/data/content";
import { OFFICIAL } from "@/data/art";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Forever roadmap",
  description:
    "World of Warcraft: Forever schedule: beta September 17, launch November 4, raids December 9, Hardcore and updates through 2027.",
  path: "/roadmap",
});

export default function RoadmapPage() {
  return (
    <>
      <Hero image={OFFICIAL.countdown} kicker="Schedule" title="Forever roadmap">
        <p>Beta this week. Launch November 4. Raids December 9. Hardcore and major updates through 2027.</p>
      </Hero>
      <div className="wrap">
        <div className="panel">
          {ROADMAP.map((r) => (
            <div key={r.title} className="news-card" style={{ gridTemplateColumns: "180px 1fr" }}>
              <div className="meta" style={{ paddingTop: 8 }}>
                {r.date}
              </div>
              <div>
                <h3>{r.title}</h3>
                <p>{r.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
