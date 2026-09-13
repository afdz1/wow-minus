import { NEWS } from "@/data/news";
import { BLUE_POSTS } from "@/data/blue-posts";
import { CONFIRMED } from "@/data/confirmed";
import { SITE_DESCRIPTION, SITE_NAME, absUrl } from "@/lib/site";

export const revalidate = 3600;

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function GET() {
  const items = [
    ...BLUE_POSTS.map((p) => ({
      title: p.title,
      dek: p.dek,
      url: absUrl(`/news/${p.slug}`),
      date: p.date,
    })),
    ...NEWS.map((n) => ({
      title: n.title,
      dek: n.dek,
      url: absUrl(`/blog/${n.slug}`),
      date: n.date,
    })),
    ...CONFIRMED.map((c) => ({
      title: c.title,
      dek: c.fact,
      url: absUrl(`/confirmed#${c.id}`),
      date: c.date,
    })),
  ].sort((a, b) => b.date.localeCompare(a.date));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_NAME)}</title>
    <link>${escapeXml(absUrl("/"))}</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en-us</language>
    <atom:link href="${escapeXml(absUrl("/feed.xml"))}" rel="self" type="application/rss+xml"/>
    ${items
      .map(
        (item) => `<item>
      <title>${escapeXml(item.title)}</title>
      <link>${escapeXml(item.url)}</link>
      <guid>${escapeXml(item.url)}</guid>
      <pubDate>${new Date(`${item.date}T12:00:00.000Z`).toUTCString()}</pubDate>
      <description>${escapeXml(item.dek)}</description>
    </item>`,
      )
      .join("\n    ")}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
