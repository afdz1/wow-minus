import type { Metadata } from "next";
import { SITE_NAME, SITE_DESCRIPTION, SITE_TAGLINE, absUrl, shouldIndex } from "./site";

export const defaultMetadata: Metadata = {
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "games",
  keywords: [
    "World of Warcraft Forever",
    "WoW Forever",
    "Classic+",
    "ClassicMinus",
    "WoW talent calculator",
    "Forever talents",
    "Classic Plus",
    "Blue Posts",
  ],
  metadataBase: new URL(absUrl("/")),
  robots: shouldIndex()
    ? { index: true, follow: true, googleBot: { index: true, follow: true } }
    : { index: false, follow: false },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    url: absUrl("/"),
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  alternates: {
    types: {
      "application/rss+xml": absUrl("/feed.xml"),
    },
  },
};

export function pageMeta({
  title,
  description,
  path,
  image,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
}): Metadata {
  const url = absUrl(path);
  return {
    title,
    description,
    alternates: { canonical: path, types: { "application/rss+xml": "/feed.xml" } },
    openGraph: {
      title,
      description,
      url,
      type,
      siteName: SITE_NAME,
      locale: "en_US",
      ...(image ? { images: [{ url: image }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}
