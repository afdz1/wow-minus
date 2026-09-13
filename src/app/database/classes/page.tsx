import { Hero } from "@/components/Hero";
import { ClassCards } from "@/components/ClassCards";
import { OFFICIAL } from "@/data/art";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Classes",
  description:
    "Nine reworked World of Warcraft: Forever class talent trees. Compare every node to Classic WoW.",
  path: "/database/classes",
});

export default function ClassesPage() {
  return (
    <>
      <Hero image={OFFICIAL.features.power} kicker="Database" title="Nine classes, reworked trees">
        <p>Talents are overhauled rather than numerically nudged. Open a tree and compare every node to Classic.</p>
      </Hero>
      <div className="wrap">
        <ClassCards />
      </div>
    </>
  );
}
