import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { BlueBadge } from "@/components/BlueBadge";
import { BLUE_POSTS } from "@/data/blue-posts";
import { OFFICIAL } from "@/data/art";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Blue Posts",
  description:
    "Official World of Warcraft: Forever communications from Blizzard — the posts the community calls Blue Posts.",
  path: "/news",
});

export default function BluePostsIndex() {
  return (
    <>
      <Hero image={OFFICIAL.countdown} kicker="Official" title="Blue Posts">
        <p>
          Direct from Blizzard’s WoW site and newsroom. Blue Posts are official studio copy — not YouTube recaps,
          not demo notes, not ClassicMinus commentary.
        </p>
      </Hero>
      <section className="band tight">
        <div className="wrap-wide">
          <div className="news-grid">
            {BLUE_POSTS.map((p) => (
              <Link key={p.slug} href={`/news/${p.slug}`} className="news-tile blue-tile">
                <img src={p.image} alt={p.title} />
                <div className="pad">
                  <div className="meta">
                    <BlueBadge compact />
                    <span>
                      {p.publisher} · {p.date}
                    </span>
                  </div>
                  <h3>{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
          <p className="section-lede" style={{ marginTop: 36 }}>
            Looking for talent trees, dungeon notes, or timestamped demo coverage? That lives on the{" "}
            <Link href="/blog">community blog</Link>, and those posts are tagged when they cite a Blue Post.
          </p>
        </div>
      </section>
    </>
  );
}
