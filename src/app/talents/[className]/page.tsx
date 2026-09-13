import type { Metadata } from "next";
import { TalentCalculator } from "@/components/TalentCalculator";
import { CLASSES } from "@/data/content";
import { notFound } from "next/navigation";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return CLASSES.map((c) => ({ className: c.name.toLowerCase() }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ className: string }>;
}): Promise<Metadata> {
  const { className } = await params;
  const found = CLASSES.find((c) => c.name.toLowerCase() === className.toLowerCase());
  if (!found) return {};
  return pageMeta({
    title: `${found.name} talent calculator`,
    description: `Plan a World of Warcraft: Forever ${found.name} build. Reworked Classic+ talent tree compared to Classic.`,
    path: `/talents/${found.name.toLowerCase()}`,
  });
}

export default async function ClassTalentsPage({
  params,
}: {
  params: Promise<{ className: string }>;
}) {
  const { className } = await params;
  const found = CLASSES.find((c) => c.name.toLowerCase() === className.toLowerCase());
  if (!found) notFound();
  return <TalentCalculator initialClass={found.name} />;
}
