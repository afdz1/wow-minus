import Link from "next/link";
import { CLASSES } from "@/data/content";
import { ZAM_ICON } from "@/data/art";

export function ClassCards() {
  return (
    <div className="db-grid class-cards">
      {CLASSES.map((c) => (
        <Link
          key={c.name}
          href={`/talents/${c.name.toLowerCase()}`}
          className="db-card class-card"
          style={{ ["--class-color" as string]: c.color }}
        >
          <div className="pad class-card-pad">
            <img src={ZAM_ICON(c.icon)} alt="" />
            <div>
              <h3>{c.name}</h3>
              <div className="meta">{c.role}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
