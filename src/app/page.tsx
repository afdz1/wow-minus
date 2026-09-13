import Link from "next/link";
import type { Metadata } from "next";
import { Hero, ZoneTile } from "@/components/Hero";
import { ClassCards } from "@/components/ClassCards";
import { Countdown } from "@/components/Countdown";
import { NEWS } from "@/data/news";
import { DUNGEONS, RAIDS, ZONES } from "@/data/content";
import { OFFICIAL } from "@/data/art";
import { BLUE_POSTS } from "@/data/blue-posts";
import { CONFIRMED } from "@/data/confirmed";
import { BlueBadge, BlogTile } from "@/components/BlueBadge";
import { ShareButton } from "@/components/ShareButton";
import { pageMeta } from "@/lib/seo";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export const metadata: Metadata = {
  ...pageMeta({
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    path: "/",
  }),
  title: { absolute: `${SITE_NAME} — ${SITE_TAGLINE}` },
};

export default function HomePage() {
  const features = [
    ["Explore Untold Stories", OFFICIAL.features.stories, "1,000+ new quests, nine dungeons, secrets in every corner.", "/blog/wow-forever-features#explore-untold-stories"],
    ["Soak in Breathtaking Expanses", OFFICIAL.features.expanses, "Lighting, fog, water, and moonlight upgrades on original Azeroth.", "/blog/wow-forever-features#soak-in-breathtaking-expanses"],
    ["Take Unknown Paths", OFFICIAL.features.paths, "Skyborne, Undead Paladin, Dwarf Shaman, and more race/class combos.", "/blog/wow-forever-features#take-unknown-paths"],
    ["Claim New Power", OFFICIAL.features.power, "Reworked talent trees for all nine classes. Plan a build.", "/blog/wow-forever-features#claim-new-power"],
    ["Every Journey Matters", OFFICIAL.features.journey, "Legacy account-wide perks for alts without skipping 1–60.", "/blog/legacy"],
    ["System Revamps", OFFICIAL.features.systems, "Camping profession, Honor, optional transmog, HD/SD models.", "/blog/wow-forever-features#system-revamps"],
  ] as const;

  return (
    <div className="home-page">
      <Hero image={OFFICIAL.masthead} title="Rediscover Azeroth" tall align="right" logo>
        <p>
          The Forever database for World of Warcraft: Classic+. News, talents, zones, and dungeons —
          one source for the level-60 world that does not end.
        </p>
        <Countdown />
        <div className="hero-actions">
          <Link className="btn" href="/talents">
            Open talent calculator
          </Link>
          <Link className="btn ghost" href="/database">
            Explore the database
          </Link>
        </div>
      </Hero>

      <section className="band">
        <div className="wrap-wide split">
          <div className="split-media">
            <video autoPlay muted loop playsInline poster={OFFICIAL.cinematic}>
              <source src={OFFICIAL.videos.hyjal} type="video/mp4" />
            </video>
          </div>
          <div className="split-copy">
            <h2>Relive the original WoW experience</h2>
            <p>
              Forever stays on the Eastern Kingdoms and Kalimdor, locked at 60, with no flying and no
              level scaling. New zones, dungeons, and systems are built into that first-year world.
            </p>
            <Link className="text-link" href="/blog/classic-plus-is-wow-forever">
              Learn more →
            </Link>
          </div>
        </div>
      </section>

      <section className="band tight">
        <div className="wrap-wide">
          <div className="section-head">
            <h2>Blue Posts</h2>
            <Link className="text-link" href="/news">
              View all →
            </Link>
          </div>
          <p className="section-lede" style={{ textAlign: "left", margin: "0 0 22px" }}>
            Official Blizzard communications from the WoW site and newsroom — not community recaps.
          </p>
          <div className="news-grid">
            {BLUE_POSTS.map((p) => (
              <Link key={p.slug} href={`/news/${p.slug}`} className="news-tile blue-tile">
                <img src={p.image} alt={p.title} />
                <div className="pad">
                  <div className="meta">
                    <BlueBadge compact />
                    <span>{p.date}</span>
                  </div>
                  <h3>{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="band tight">
        <div className="wrap-wide">
          <div className="section-head">
            <h2>
              <img src={OFFICIAL.icon} alt="" />
              Latest Updates
            </h2>
            <Link className="text-link" href="/blog">
              View all →
            </Link>
          </div>
          <div className="news-grid">
            {NEWS.slice(0, 4).map((n) => (
              <BlogTile key={n.slug} article={n} />
            ))}
          </div>
        </div>
      </section>

      <section className="band tight">
        <div className="wrap-wide">
          <div className="section-head">
            <h2>Confirmed</h2>
            <Link className="text-link" href="/confirmed">
              View all →
            </Link>
          </div>
          <p className="section-lede" style={{ textAlign: "left", margin: "0 0 22px" }}>
            Short in-game facts. Screenshot when we have one.
          </p>
          {CONFIRMED[0] ? (
            <div className="confirm-home">
              <Link className="shot-link" href={`/confirmed#${CONFIRMED[0].id}`}>
                <img
                  src={CONFIRMED[0].image ?? OFFICIAL.features.systems}
                  alt={CONFIRMED[0].imageAlt ?? CONFIRMED[0].title}
                />
              </Link>
              <div className="copy">
                <div className="confirm-head">
                  <div className="meta">
                    {CONFIRMED[0].topic} · {CONFIRMED[0].date}
                  </div>
                  <ShareButton
                    title={`${CONFIRMED[0].title} — ClassicMinus`}
                    text={CONFIRMED[0].fact}
                    path={`/confirmed#${CONFIRMED[0].id}`}
                  />
                </div>
                <h3>
                  <Link href={`/confirmed#${CONFIRMED[0].id}`}>{CONFIRMED[0].title}</Link>
                </h3>
                <p style={{ margin: 0, color: "var(--muted)" }}>{CONFIRMED[0].fact}</p>
                {CONFIRMED[0].credit ? (
                  <p className="confirm-credit">
                    Screenshot:{" "}
                    <a href={CONFIRMED[0].credit.href} target="_blank" rel="noopener noreferrer">
                      {CONFIRMED[0].credit.label}
                    </a>
                  </p>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className="band">
        <div className="wrap-wide">
          <p className="section-kicker">Experience iconic moments</p>
          <h2 className="section-title">Adventure. Forever.</h2>
          <p className="section-lede">
            Zephras Isle, Riverglades, and Mount Hyjal lead the map. Leveling is still the point —
            new dungeons fill the 1–60 ladder, and raids unlock a month after launch.
          </p>
          <div className="banner-row">
            {ZONES.slice(0, 3).map((z) => (
              <ZoneTile
                key={z.slug}
                href={`/database/zones#${z.slug}`}
                name={z.name}
                blurb={z.blurb}
                image={z.image}
                video={z.video}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="band tight">
        <div className="wrap-wide">
          <p className="section-kicker">Claim new power</p>
          <h2 className="section-title">Plan a Forever build</h2>
          <p className="section-lede">
            Nine reworked talent trees transcribed from the BlizzCon demo. Compare every talent to
            Classic, then share a spec.
          </p>
          <ClassCards />
          <p style={{ textAlign: "center", marginTop: 28 }}>
            <Link className="btn" href="/talents">
              Open the calculator
            </Link>
          </p>
        </div>
      </section>

      <section className="band">
        <div className="wrap-wide">
          <div className="feature-grid">
            {features.map(([title, img, blurb, href]) => (
              <Link key={title} href={href} className="feature-card">
                <img src={img} alt="" />
                <div className="txt">
                  <h3>{title}</h3>
                  <p style={{ margin: 0, fontSize: 14, color: "var(--muted)" }}>{blurb}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="band tight">
        <div className="wrap-wide">
          <p className="section-kicker">The Forever database</p>
          <h2 className="section-title">What’s in the catalog</h2>
          <div className="db-grid" style={{ marginTop: 28 }}>
            {[
              ["/database/zones", "Zones", OFFICIAL.zones.ashenvale1, `${ZONES.length} regions`],
              ["/database/dungeons", "Dungeons", OFFICIAL.features.stories, `${DUNGEONS.length} new at launch`],
              ["/database/raids", "Raids", OFFICIAL.zones.ashenvale2, `${RAIDS.length} unlock Dec 9`],
              ["/database/races", "Races", OFFICIAL.skyborne, "Skyborne + racials"],
            ].map(([href, name, img, meta]) => (
              <Link key={href} href={href} className="db-card">
                <img src={img} alt="" />
                <div className="pad">
                  <div className="meta">{meta}</div>
                  <h3>{name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
