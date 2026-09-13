export type VideoRef = {
  id: string;
  title: string;
  publisher: string;
  date: string;
};

export const VIDEOS = {
  gameplay: {
    id: "uQuKE0KDgiM",
    title: "World of Warcraft: Forever | Gameplay Trailer",
    publisher: "World of Warcraft",
    date: "2026-09-12",
  },
  cinematic: {
    id: "xXaXYxcbA6A",
    title: "World of Warcraft: Forever | New Horizons | Cinematic Trailer",
    publisher: "World of Warcraft",
    date: "2026-09-12",
  },
  wille: {
    id: "ckQ-rP3JExM",
    title: "CLASSIC+ Is FINALLY Here! | WARCRAFT FOREVER",
    publisher: "WillE",
    date: "2026-09-12",
  },
  xaryu: {
    id: "-tEcZ1IELaA",
    title: "First Look at the NEW WoW Forever Dungeons",
    publisher: "Xaryu",
    date: "2026-09-12",
  },
  marcelian: {
    id: "O3lNT5DMGgU",
    title: "We Played WoW Forever... Is Retail in TROUBLE?",
    publisher: "Marcelian & Flame",
    date: "2026-09-12",
  },
  ace: {
    id: "G5umibm9dSY",
    title: "Everything You NEED To Know About World of Warcraft Forever...",
    publisher: "Ace_WoW",
    date: "2026-09-12",
  },
  slesh: {
    id: "dqD2jlZAWeI",
    title: "I Played WoW Forever At BlizzCon",
    publisher: "Slesh",
    date: "2026-09-12",
  },
  meta: {
    id: "LG8k2CcOgLs",
    title: "Classic+ Warcraft Forever’s Trailer Is Hiding A LOT!",
    publisher: "MetaGoblin",
    date: "2026-09-12",
  },
  preach: {
    id: "CizfIqerAyg",
    title: "Well… Classic Plus Really WAS WoW 2 in Disguise",
    publisher: "Preach Gaming",
    date: "2026-09-12",
  },
  soda: {
    id: "SrHs8RYm_8U",
    title: "WoW Forever Is The WoW We've Been Waiting For",
    publisher: "Sodapoppin",
    date: "2026-09-12",
  },
} as const satisfies Record<string, VideoRef>;

export function watch(id: string, seconds?: number) {
  const base = `https://www.youtube.com/watch?v=${id}`;
  return seconds == null ? base : `${base}&t=${seconds}s`;
}

export function cite(video: VideoRef, seconds: number, label: string) {
  return `[${label}](${watch(video.id, seconds)})`;
}

export function videoPage(video: VideoRef) {
  return { label: `${video.publisher} — ${video.title}`, href: watch(video.id) };
}

export function videoTranscript(video: VideoRef, excerpts: string[]) {
  return {
    title: video.title,
    url: watch(video.id),
    publisher: video.publisher,
    date: video.date,
    excerpts,
  };
}
