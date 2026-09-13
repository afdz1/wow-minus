import { Hero } from "@/components/Hero";
import { ShareButton } from "@/components/ShareButton";
import { CONFIRMED } from "@/data/confirmed";
import { OFFICIAL } from "@/data/art";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Confirmed",
  description:
    "Short in-game confirmations for World of Warcraft: Forever. Screenshot when we have one. Add here instead of waiting for a full recap.",
  path: "/confirmed",
});

export default function ConfirmedPage() {
  return (
    <>
      <Hero image={OFFICIAL.features.systems} kicker="Ledger" title="Confirmed">
        <p>
          Short facts from the client. If a screenshot settles it, it goes here — not a full recap.
          Newest first.
        </p>
      </Hero>
      <div className="wrap-wide">
        <div className="confirm-list">
          {CONFIRMED.map((c) => (
            <article key={c.id} id={c.id} className="confirm-card">
              <div className="pad">
                <div className="confirm-head">
                  <div className="meta">
                    {c.topic} · {c.date}
                  </div>
                  <ShareButton
                    title={`${c.title} — ClassicMinus`}
                    text={c.fact}
                    path={`/confirmed#${c.id}`}
                  />
                </div>
                <h2>{c.title}</h2>
                <p className="lead">{c.fact}</p>
                {c.notes?.length ? (
                  <ul>
                    {c.notes.map((n) => (
                      <li key={n}>{n}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
              {c.image ? (
                <figure className="article-figure shot">
                  <img src={c.image} alt={c.imageAlt ?? c.title} />
                  {c.credit ? (
                    <figcaption>
                      Screenshot:{" "}
                      <a href={c.credit.href} target="_blank" rel="noopener noreferrer">
                        {c.credit.label}
                      </a>
                    </figcaption>
                  ) : null}
                </figure>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

