import { Hero } from "@/components/Hero";
import { NEWS } from "@/data/news";
import { OFFICIAL } from "@/data/art";
import { BlogTile, BlueBadge, CommunityBadge } from "@/components/BlueBadge";
import Link from "next/link";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Forever ledger",
  description:
    "ClassicMinus recaps of World of Warcraft: Forever. Official Blue Posts labeled separately from demo notes and creator videos.",
  path: "/blog",
});

export default function BlogIndex() {
  return (
    <>
      <Hero image={OFFICIAL.masthead} kicker="Blog" title="Forever ledger">
        <p>
          ClassicMinus recaps. Each post is labeled <BlueBadge compact label="Blue" /> for official Blizzard copy
          and <CommunityBadge compact /> for demo notes and creator videos. Full Blue Posts live under{" "}
          <Link href="/news">Blue Posts</Link>. Short in-game screenshots go on{" "}
          <Link href="/confirmed">Confirmed</Link>.
        </p>
      </Hero>
      <section className="band tight">
        <div className="wrap-wide">
          <div className="news-grid">
            {NEWS.map((n) => (
              <BlogTile key={n.slug} article={n} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
