import Link from "next/link";
import { hasBlueSources, hasCommunitySources } from "@/lib/sources";
import type { NewsArticle } from "@/data/news";

export function BlueBadge({
  compact = false,
  label = "Blue Post",
}: {
  compact?: boolean;
  label?: string;
}) {
  return (
    <span
      className={`origin-label blue${compact ? " compact" : ""}`}
      title="Official Blizzard communication from the WoW site or Blizzard News"
    >
      {label}
    </span>
  );
}

export function CommunityBadge({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`origin-label community${compact ? " compact" : ""}`} title="Creator, demo, or ClassicMinus recap">
      Community
    </span>
  );
}

export function SourceBadges({ article }: { article: NewsArticle }) {
  const blue = hasBlueSources(article.sources);
  const community = hasCommunitySources(article.sources);
  if (!blue && !community) return null;
  return (
    <span className="origin-pills">
      {blue ? <BlueBadge compact label="Blue" /> : null}
      {community ? <CommunityBadge compact /> : null}
    </span>
  );
}

export function BlogTile({ article }: { article: NewsArticle }) {
  return (
    <Link href={`/blog/${article.slug}`} className="news-tile">
      <div className="thumb">
        <img src={article.image} alt={article.title} />
        <SourceBadges article={article} />
      </div>
      <div className="pad">
        <div className="meta">
          {article.tag} · {article.date}
        </div>
        <h3>{article.title}</h3>
      </div>
    </Link>
  );
}
