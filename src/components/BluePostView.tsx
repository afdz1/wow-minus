import Link from "next/link";
import { Hero } from "@/components/Hero";
import { BlueBadge } from "@/components/BlueBadge";
import { JsonLd } from "@/components/JsonLd";
import { SITE_NAME, absUrl } from "@/lib/site";
import type { BluePost } from "@/data/blue-posts";

export function BluePostView({ post }: { post: BluePost }) {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          headline: post.title,
          description: post.dek,
          datePublished: `${post.date}T12:00:00.000Z`,
          author: { "@type": "Organization", name: post.publisher },
          image: post.image,
          mainEntityOfPage: absUrl(`/news/${post.slug}`),
          isBasedOn: post.href,
          publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            logo: { "@type": "ImageObject", url: absUrl("/icon-512.png") },
          },
        }}
      />
      <Hero image={post.image} kicker="Blue Post" title={post.title}>
        <p>{post.dek}</p>
        <div className="hero-actions">
          <a className="btn" href={post.href} target="_blank" rel="noreferrer">
            Read on Blizzard.com
          </a>
        </div>
      </Hero>
      <div className="wrap article">
        <div className="blue-banner">
          <BlueBadge />
          <p>
            Official World of Warcraft communication from {post.publisher}. Posted {post.date}. ClassicMinus
            summarizes it here so you can tell Blue Posts apart from community recaps. The full post lives on
            Blizzard’s site.
          </p>
        </div>
        {post.body.map((p, i) => (
          <p key={i} className={i === 0 ? "lead" : undefined}>
            {p}
          </p>
        ))}
        <p>
          <a className="btn" href={post.href} target="_blank" rel="noreferrer">
            Open the official Blue Post
          </a>
        </p>
        <p className="sources">
          <Link href="/news">Back to Blue Posts</Link>
        </p>
      </div>
    </>
  );
}
