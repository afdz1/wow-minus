import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { ArticleView } from "@/components/ArticleView";
import { NEWS, getNews } from "@/data/news";
import { pageMeta } from "@/lib/seo";

const SLUG_REDIRECTS: Record<string, string> = {
  "first-aid-profession-preview": "/blog/professions",
};

export function generateStaticParams() {
  return NEWS.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (SLUG_REDIRECTS[slug]) {
    return { alternates: { canonical: SLUG_REDIRECTS[slug] } };
  }
  const article = getNews(slug);
  if (!article) return {};
  return {
    ...pageMeta({
      title: article.title,
      description: article.dek,
      path: `/blog/${article.slug}`,
      image: article.image,
      type: "article",
    }),
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.dek,
      url: `/blog/${article.slug}`,
      type: "article",
      publishedTime: `${article.date}T12:00:00.000Z`,
      authors: [article.author],
      images: [article.image],
      siteName: "ClassicMinus",
    },
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (SLUG_REDIRECTS[slug]) redirect(SLUG_REDIRECTS[slug]);
  const article = getNews(slug);
  if (!article) notFound();
  return <ArticleView article={article} />;
}
