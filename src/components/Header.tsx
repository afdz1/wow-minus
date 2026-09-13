"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LINKS = [
  ["/", "Home", ""],
  ["/news", "Blue Posts", ""],
  ["/blog", "Blog", ""],
  ["/talents", "Talents", ""],
  ["/database", "Database", ""],
  ["/database/zones", "Zones", "sub"],
  ["/database/dungeons", "Dungeons", "sub"],
  ["/database/raids", "Raids", "sub"],
  ["/database/classes", "Classes", "sub"],
  ["/database/races", "Races", "sub"],
  ["/roadmap", "Roadmap", ""],
] as const;

const DISCORD = "https://discord.gg/pGsPbHJEg";

function isActive(path: string, href: string) {
  return href === "/" ? path === "/" : path.startsWith(href);
}

export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="header">
      <div className="header-bar">
        <div className="header-inner">
          <Link href="/" className="brand" onClick={() => setOpen(false)}>
            <img src="/brand.png" alt="ClassicMinus" />
            <span>
              <b className="serif">ClassicMinus</b>
              <small>WoW Forever</small>
            </span>
          </Link>
          <nav id="site-nav" className={`nav${open ? " open" : ""}`}>
            {LINKS.map(([href, label, kind]) => (
              <Link
                key={href}
                href={href}
                className={`${kind} ${isActive(path, href) ? "active" : ""}`.trim()}
              >
                {label}
              </Link>
            ))}
            <a href={DISCORD} target="_blank" rel="noopener noreferrer">
              Discord
            </a>
          </nav>
          <input className="search" placeholder="Search…" aria-label="Search" />
          <Link className="btn header-cta" href="/talents">
            Talents
          </Link>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      {open ? (
        <button type="button" className="nav-backdrop" aria-label="Close menu" onClick={() => setOpen(false)} />
      ) : null}
    </header>
  );
}
