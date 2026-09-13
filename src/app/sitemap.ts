import type { MetadataRoute } from "next";
import { NEWS } from "@/data/news";
import { BLUE_POSTS } from "@/data/blue-posts";
import { CONFIRMED } from "@/data/confirmed";
import { CLASSES } from "@/data/content";
import { absUrl } from "@/lib/site";

function onDay(iso: string) {
  return new Date(`${iso}T12:00:00.000Z`);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const newestNews = NEWS.reduce((best, article) => (article.date > best.date ? article : best));
  const newestConfirm = CONFIRMED[0];
  const newest = newestConfirm && newestConfirm.date > newestNews.date ? newestConfirm : newestNews;
  const hubsUpdated = onDay(newest.date);

  const hubs: MetadataRoute.Sitemap = [
    { url: absUrl("/"), lastModified: hubsUpdated, changeFrequency: "daily", priority: 1 },
    { url: absUrl("/blog"), lastModified: hubsUpdated, changeFrequency: "daily", priority: 0.9 },
    { url: absUrl("/talents"), lastModified: hubsUpdated, changeFrequency: "weekly", priority: 0.9 },
    { url: absUrl("/database"), lastModified: hubsUpdated, changeFrequency: "weekly", priority: 0.8 },
    { url: absUrl("/database/zones"), changeFrequency: "weekly", priority: 0.8 },
    { url: absUrl("/database/dungeons"), changeFrequency: "weekly", priority: 0.8 },
    { url: absUrl("/database/raids"), changeFrequency: "weekly", priority: 0.8 },
    { url: absUrl("/database/classes"), changeFrequency: "weekly", priority: 0.8 },
    { url: absUrl("/database/races"), changeFrequency: "weekly", priority: 0.8 },
    { url: absUrl("/roadmap"), changeFrequency: "weekly", priority: 0.7 },
    { url: absUrl("/news"), lastModified: hubsUpdated, changeFrequency: "daily", priority: 0.9 },
    { url: absUrl("/confirmed"), lastModified: hubsUpdated, changeFrequency: "daily", priority: 0.85 },
  ];

  const posts: MetadataRoute.Sitemap = NEWS.map((article) => ({
    url: absUrl(`/blog/${article.slug}`),
    lastModified: onDay(article.date),
    changeFrequency: "weekly",
    priority: article.tag === "Ledger" ? 0.9 : 0.8,
    images: article.image
      ? [article.image.startsWith("http") ? article.image : absUrl(article.image)]
      : undefined,
  }));

  const bluePosts: MetadataRoute.Sitemap = BLUE_POSTS.map((post) => ({
    url: absUrl(`/news/${post.slug}`),
    lastModified: onDay(post.date),
    changeFrequency: "weekly",
    priority: 0.85,
    images: post.image ? [post.image] : undefined,
  }));
  const talentTrees: MetadataRoute.Sitemap = CLASSES.map((cls) => ({
    url: absUrl(`/talents/${cls.name.toLowerCase()}`),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...hubs, ...bluePosts, ...posts, ...talentTrees];
}
