import type { Metadata } from "next";
import { TalentCalculator } from "@/components/TalentCalculator";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Talent calculator",
  description:
    "Plan a World of Warcraft: Forever build. Nine reworked Classic+ talent trees transcribed from the BlizzCon demo, compared to Classic.",
  path: "/talents",
});

export default function TalentsPage() {
  return <TalentCalculator />;
}
