import { Hero, ZoneTile } from "@/components/Hero";
import { ZONES } from "@/data/content";
import { OFFICIAL } from "@/data/art";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Zones",
  description:
    "World of Warcraft: Forever zones — Zephras Isle, Riverglades, Mount Hyjal, Shen’dralas, and lighting passes on Classic Azeroth.",
  path: "/database/zones",
});

export default function ZonesPage() {
  return (
    <>
      <Hero image={OFFICIAL.zones.darkshore} video={OFFICIAL.videos.darkshore} kicker="Database" title="Zones">
        <p>
          Journey through an updated and expanded Azeroth. New locales — Zephras, Riverglades, Hyjal,
          Shen’dralas — plus lighting passes on Classic zones.
        </p>
      </Hero>
      <div className="wrap">
        <div className="banner-row">
          {ZONES.slice(0, 3).map((z) => (
            <ZoneTile key={z.slug} href={`#${z.slug}`} name={z.name} blurb={z.blurb} image={z.image} video={z.video} />
          ))}
        </div>
        <div className="db-grid">
          {ZONES.map((z) => (
            <article key={z.slug} id={z.slug} className="db-card">
              {z.video ? (
                <video autoPlay muted loop playsInline poster={z.image}>
                  <source src={z.video} type="video/mp4" />
                </video>
              ) : (
                <img src={z.image} alt="" />
              )}
              <div className="pad">
                <div className="meta">
                  {z.levels} · {z.continent}
                </div>
                <h3>{z.name}</h3>
                <p style={{ margin: 0, color: "var(--muted)", fontSize: 13 }}>{z.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
