import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { BluePostView } from "@/components/BluePostView";
import { BLUE_POSTS, getBluePost } from "@/data/blue-posts";
import { NEWS, getNews } from "@/data/news";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return [
    ...BLUE_POSTS.map((p) => ({ slug: p.slug })),
    ...NEWS.map((n) => ({ slug: n.slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBluePost(slug);
  if (post) {
    return {
      ...pageMeta({
        title: post.title,
        description: post.dek,
        path: `/news/${post.slug}`,
        image: post.image,
        type: "article",
      }),
      authors: [{ name: post.publisher }],
      openGraph: {
        title: post.title,
        description: post.dek,
        url: `/news/${post.slug}`,
        type: "article",
        publishedTime: `${post.date}T12:00:00.000Z`,
        images: [post.image],
        siteName: "ClassicMinus",
      },
    };
  }
  const article = getNews(slug);
  if (article) {
    return {
      title: article.title,
      alternates: { canonical: `/blog/${article.slug}` },
      robots: { index: false, follow: true },
    };
  }
  return {};
}

export default async function NewsSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBluePost(slug);
  if (post) return <BluePostView post={post} />;
  if (getNews(slug)) redirect(`/blog/${slug}`);
  notFound();
}
