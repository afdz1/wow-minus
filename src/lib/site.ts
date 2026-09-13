/** Production origin for sitemap, robots, canonical URLs, and JSON-LD. */
export const SITE_NAME = "ClassicMinus";
export const SITE_TAGLINE = "World of Warcraft: Forever database";
export const SITE_DESCRIPTION =
  "Independent World of Warcraft: Forever (Classic+) database: official Blue Posts, talent calculator, zones, dungeons, raids, races, and class guides. Level cap 60. Launch November 4, 2026.";

export function getSiteUrl() {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000");
  return raw.replace(/\/$/, "");
}

export function absUrl(path = "/") {
  const prefix = path.startsWith("/") ? path : `/${path}`;
  return `${getSiteUrl()}${prefix === "/" ? "" : prefix}` || getSiteUrl();
}

/** Preview deployments on Vercel should not be indexed. */
export function shouldIndex() {
  if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production") return false;
  return true;
}
