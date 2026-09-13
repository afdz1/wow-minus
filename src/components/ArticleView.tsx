import Link from "next/link";
import { Hero } from "@/components/Hero";
import { BlueBadge, CommunityBadge, SourceBadges } from "@/components/BlueBadge";
import { JsonLd } from "@/components/JsonLd";
import { hasBlueSources, hasCommunitySources, isBluePostUrl, statementKind } from "@/lib/sources";
import { SITE_NAME, absUrl } from "@/lib/site";
import type { NewsArticle } from "@/data/news";

/** Renders `[label](url)` as an external citation link. */
function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!m) return <span key={i}>{part}</span>;
        return (
          <a
            key={i}
            href={m[2]}
            target="_blank"
            rel="noreferrer"
            className={isBluePostUrl(m[2]) ? "cite cite-blue" : "cite"}
          >
            {m[1]}
          </a>
        );
      })}
    </>
  );
}

export function ArticleView({ article }: { article: NewsArticle }) {
  const sections = article.sections ?? [];
  const transcripts = article.transcripts;
  const blueSources = article.sources.filter((s) => isBluePostUrl(s.href));
  const communitySources = article.sources.filter((s) => !isBluePostUrl(s.href));

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.dek,
          datePublished: `${article.date}T12:00:00.000Z`,
          author: { "@type": "Organization", name: article.author || SITE_NAME },
          image: article.image.startsWith("http") ? article.image : absUrl(article.image),
          mainEntityOfPage: absUrl(`/blog/${article.slug}`),
          publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            logo: { "@type": "ImageObject", url: absUrl("/icon-512.png") },
          },
        }}
      />
      <Hero image={article.image} kicker={`${article.tag} · ${article.date}`} title={article.title}>
        <SourceBadges article={article} />
        <p>{article.dek}</p>
      </Hero>
      <div className="wrap article">
        {article.note ? (
          <div className={hasCommunitySources(article.sources) ? "origin-note community" : "origin-note"}>
            <p>{article.note}</p>
          </div>
        ) : hasBlueSources(article.sources) && hasCommunitySources(article.sources) ? (
          <div className="origin-note">
            <p>
              This recap mixes <BlueBadge compact label="Blue" /> official Blizzard copy with{" "}
              <CommunityBadge compact /> demo notes and creator videos. Creator-cited lines sit in a
              warmer gold so community statements read apart from the recap. Sources at the bottom are
              split the same way.
            </p>
          </div>
        ) : hasBlueSources(article.sources) ? (
          <div className="origin-note">
            <p>
              This recap is based on <BlueBadge compact label="Blue" /> official Blizzard communications.
            </p>
          </div>
        ) : (
          <div className="origin-note community">
            <p>
              This recap is <CommunityBadge compact /> coverage — demo notes or creator videos, not a Blue Post.
            </p>
          </div>
        )}
        {article.body.map((p, i) => (
          <p key={i} className={[i === 0 ? "lead" : "", `stmt-${statementKind(p)}`].filter(Boolean).join(" ")}>
            <RichText text={p} />
          </p>
        ))}

        {sections.length > 0 ? (
          <nav className="toc" aria-label="Article contents">
            <h2>Contents</h2>
            <ol>
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.heading}</a>
                </li>
              ))}
              {transcripts ? (
                <li>
                  <a href="#transcripts">Video transcripts</a>
                </li>
              ) : null}
              <li>
                <a href="#sources">Sources</a>
              </li>
            </ol>
          </nav>
        ) : null}

        {sections.map((s) => (
          <section key={s.id} id={s.id} className="article-section">
            <h2>{s.heading}</h2>
            {s.image ? (
              <figure className="article-figure">
                <img src={s.image} alt="" />
              </figure>
            ) : null}
            {s.figures?.length ? (
              <div className="article-figures">
                {s.figures.map((fig) => (
                  <figure key={fig.src} className="article-figure shot">
                    <img src={fig.src} alt={fig.alt} />
                    {fig.caption ? <figcaption>{fig.caption}</figcaption> : null}
                  </figure>
                ))}
              </div>
            ) : null}
            {s.paragraphs.map((p, i) => (
              <p key={i} className={`stmt-${statementKind(p)}`}>
                <RichText text={p} />
              </p>
            ))}
          </section>
        ))}

        {transcripts ? (
          <section id="transcripts" className="article-section transcripts">
            <h2>Video transcripts</h2>
            {transcripts.length === 0 ? (
              <p>
                No video transcripts have been added yet. When YouTube sources are supplied, excerpts
                will be recorded here with a link to each video.
              </p>
            ) : (
              transcripts.map((t) => (
                <article key={t.url} className="transcript">
                  <h3>
                    <a href={t.url} target="_blank" rel="noreferrer">
                      {t.title}
                    </a>
                  </h3>
                  <p className="meta">
                    {t.publisher}
                    {t.date ? ` · ${t.date}` : ""}
                  </p>
                  {t.excerpts.map((ex, i) => (
                    <blockquote key={i} className="stmt-community">
                      <RichText text={ex} />
                    </blockquote>
                  ))}
                </article>
              ))
            )}
          </section>
        ) : null}

        <section id="sources" className="article-section">
          <h2>Sources</h2>
          {blueSources.length > 0 ? (
            <>
              <h3>
                <BlueBadge compact label="Blue" />
              </h3>
              <ul className="source-list blue">
                {blueSources.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} target="_blank" rel="noreferrer">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
          {communitySources.length > 0 ? (
            <>
              <h3>
                <CommunityBadge compact />
              </h3>
              <ul className="source-list">
                {communitySources.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} target="_blank" rel="noreferrer">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </section>

        <p className="sources">
          <Link href="/blog">Back to the blog</Link>
        </p>
      </div>
    </>
  );
}
