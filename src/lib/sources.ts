/** Official Blizzard communications — what the community calls Blue Posts. */
export function isBluePostUrl(href: string) {
  try {
    const host = new URL(href).hostname.replace(/^www\./i, "").toLowerCase();
    if (host === "news.blizzard.com" || host === "worldofwarcraft.blizzard.com") return true;
    if (host.endsWith(".forums.blizzard.com") || host === "us.forums.blizzard.com") return true;
    if (host === "wow.blizzard.com") return true;
    return false;
  } catch {
    return false;
  }
}

export function hasBlueSources(sources: { href: string }[]) {
  return sources.some((s) => isBluePostUrl(s.href));
}

export function hasCommunitySources(sources: { href: string }[]) {
  return sources.some((s) => !isBluePostUrl(s.href));
}

export function statementKind(text: string): "blue" | "community" | "mixed" | "plain" {
  const hrefs = [...text.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)].map((m) => m[1]);
  if (hrefs.length === 0) return "plain";
  const blue = hrefs.some(isBluePostUrl);
  const community = hrefs.some((href) => !isBluePostUrl(href));
  if (blue && community) return "mixed";
  return blue ? "blue" : "community";
}
