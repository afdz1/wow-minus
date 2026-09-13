"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import talentData from "@/data/talents.json";
import racialPack from "@/data/racials.json";
import { OFFICIAL, GAME_ICON, ZAM_ICON, ZAM_TALENT_BG } from "@/data/art";
import { CLASS_COLORS, type ClassData, type Tree } from "@/lib/talents";
import { TalentTip, type TipModel } from "@/components/TalentTip";

const DATA = talentData as Record<string, ClassData>;
const CLASSES = Object.keys(DATA);
type Ability = string[];
const RACIALS = racialPack.racials as Record<
  string,
  { race: string; icon?: string; classes: string[]; abilities: Ability[] }[]
>;
const CLASS_ABILITIES = racialPack.classAbilities as Record<string, Ability[]>;
const CLASS_RACIALS = racialPack.classRacials as Record<
  string,
  { note: string; sources?: string; races: Record<string, Ability[]> }
>;

function emptyRanks(cls: string) {
  return DATA[cls].trees.map((t) => t.talents.map(() => 0));
}

function tipPosition(rect: DOMRect) {
  const gap = 14;
  const width = 340;
  const preferRight = rect.right + gap + width < window.innerWidth - 12;
  const left = preferRight ? rect.right + gap : Math.max(12, rect.left - width - gap);
  const top = Math.min(Math.max(12, rect.top), window.innerHeight - 24);
  return { left, top, maxHeight: window.innerHeight - top - 12 };
}

export function TalentCalculator({ initialClass = "Warrior" }: { initialClass?: string }) {
  const start = CLASSES.find((c) => c.toLowerCase() === initialClass.toLowerCase()) || "Warrior";
  const [cls, setCls] = useState(start);
  const [level, setLevel] = useState(60);
  const [ranks, setRanks] = useState<Record<string, number[][]>>({ [start]: emptyRanks(start) });
  const [compare, setCompare] = useState(true);
  const [allRaces, setAllRaces] = useState(false);
  const [copied, setCopied] = useState(false);
  const [hover, setHover] = useState<{ ti: number; i: number; rect: DOMRect } | null>(null);
  const [link, setLink] = useState("");
  const [mounted, setMounted] = useState(false);
  const [touchUi, setTouchUi] = useState(false);
  const pointerType = useRef("mouse");
  const holdTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const held = useRef(false);

  useEffect(() => {
    setMounted(true);
    const hoverMq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setTouchUi(!hoverMq.matches || window.innerWidth < 760);
    sync();
    hoverMq.addEventListener("change", sync);
    window.addEventListener("resize", sync);
    return () => {
      hoverMq.removeEventListener("change", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);

  const clearHold = () => {
    if (holdTimer.current) {
      clearTimeout(holdTimer.current);
      holdTimer.current = null;
    }
  };

  useEffect(() => () => clearHold(), []);

  useEffect(() => {
    if (!hover) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setHover(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [hover]);

  const rFor = useCallback((c = cls) => ranks[c] || emptyRanks(c), [ranks, cls]);
  const pool = Math.max(0, level - 9);
  const treePts = (ti: number, c = cls) => rFor(c)[ti].reduce((a, b) => a + b, 0);
  const totalPts = (c = cls) => DATA[c].trees.reduce((a, _, i) => a + treePts(i, c), 0);
  const above = (ti: number, tier: number) =>
    DATA[cls].trees[ti].talents.reduce((a, t, i) => a + (t.row < tier ? rFor()[ti][i] : 0), 0);
  const idx = (tree: Tree, name: string) => tree.talents.findIndex((t) => t.name === name);

  const gate = (ti: number, i: number) => {
    const tree = DATA[cls].trees[ti];
    const t = tree.talents[i];
    const r = rFor()[ti];
    const need = (t.row - 1) * 5;
    if (above(ti, t.row) < need) return `Requires ${need} points in ${tree.name}`;
    if (t.req) {
      const p = idx(tree, t.req);
      if (p >= 0 && r[p] < tree.talents[p].max)
        return `Requires ${tree.talents[p].max} point${tree.talents[p].max > 1 ? "s" : ""} in ${t.req}`;
    }
    return null;
  };
  const canAdd = (ti: number, i: number) => {
    const t = DATA[cls].trees[ti].talents[i];
    const r = rFor()[ti][i];
    if (r >= t.max) return "Max rank";
    const g = gate(ti, i);
    if (g) return g;
    if (totalPts() >= pool) return "No unspent points";
    return null;
  };
  const canRemove = (ti: number, i: number) => {
    const tree = DATA[cls].trees[ti];
    const tmp = rFor()[ti].slice();
    if (tmp[i] <= 0) return false;
    tmp[i]--;
    for (let j = 0; j < tree.talents.length; j++) {
      if (tmp[j] <= 0) continue;
      const t = tree.talents[j];
      const need = (t.row - 1) * 5;
      const ab = tree.talents.reduce((a, tt, ii) => a + (tt.row < t.row ? tmp[ii] : 0), 0);
      if (ab < need) return false;
      if (t.req) {
        const p = idx(tree, t.req);
        if (p >= 0 && tmp[p] < tree.talents[p].max) return false;
      }
    }
    return true;
  };
  const status = (ti: number, i: number) => {
    const t = DATA[cls].trees[ti].talents[i];
    const r = rFor()[ti][i];
    return r >= t.max ? "maxed" : r > 0 ? "partial" : gate(ti, i) ? "locked" : "avail";
  };

  const mutate = (ti: number, i: number, d: number) => {
    setRanks((prev) => {
      const cur = prev[cls] || emptyRanks(cls);
      const copy = cur.map((row) => row.slice());
      copy[ti][i] = Math.max(0, Math.min(DATA[cls].trees[ti].talents[i].max, copy[ti][i] + d));
      return { ...prev, [cls]: copy };
    });
  };

  const encode = useMemo(
    () => `${cls.toLowerCase()}/${level}/${rFor().map((t) => t.join("")).join("-")}`,
    [cls, level, ranks]
  );

  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash.slice(1) : "";
    const m = /^([a-z ]+)\/(\d+)\/([0-9-]*)$/i.exec(decodeURIComponent(hash));
    if (!m) return;
    const found = CLASSES.find((c) => c.toLowerCase() === m[1].toLowerCase());
    if (!found) return;
    const lvl = Math.min(60, Math.max(10, +m[2] || 60));
    const next = emptyRanks(found);
    m[3].split("-").forEach((s, ti) => {
      if (!next[ti]) return;
      [...s].forEach((ch, i) => {
        if (next[ti][i] !== undefined)
          next[ti][i] = Math.min(+ch || 0, DATA[found].trees[ti].talents[i].max);
      });
    });
    setCls(found);
    setLevel(lvl);
    setRanks((p) => ({ ...p, [found]: next }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    history.replaceState(null, "", `#${encode}`);
    setLink(`${location.origin}${location.pathname}#${encode}`);
  }, [encode]);

  const modelFor = (ti: number, i: number): TipModel => {
    const talent = DATA[cls].trees[ti].talents[i];
    return {
      talent,
      rank: rFor()[ti][i],
      treeName: DATA[cls].trees[ti].name,
      compare,
      reason: canAdd(ti, i),
      canDrop: canRemove(ti, i),
    };
  };

  const spent = totalPts();
  const left = pool - spent;
  const accent = CLASS_COLORS[cls] || "#c9a227";
  const hoverModel = hover ? modelFor(hover.ti, hover.i) : null;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  };

  return (
    <div className="calc" style={{ ["--accent" as string]: accent }}>
      <div className="calc-mast">
        <img src={OFFICIAL.features.power} alt="" />
        <div className="calc-mast-veil" />
        <div className="calc-mast-copy">
          <img className="calc-class-art" src={ZAM_ICON(DATA[cls].icon)} alt="" />
          <div>
            <div className="kicker">Forever talent planner</div>
            <h1>{cls}</h1>
            <p>Tap a talent to spend a point and read it. Hold to unlearn.</p>
          </div>
        </div>
      </div>

      <nav className="calc-dock" aria-label="Class">
        {CLASSES.map((c) => (
          <button
            key={c}
            className="calc-dock-btn"
            aria-pressed={c === cls}
            style={{ ["--c" as string]: CLASS_COLORS[c] }}
            title={c}
            onClick={() => {
              setCls(c);
              setRanks((p) => ({ ...p, [c]: p[c] || emptyRanks(c) }));
              setHover(null);
            }}
          >
            <img src={ZAM_ICON(DATA[c].icon)} alt="" />
            <span>{c}</span>
          </button>
        ))}
      </nav>

      <div className="calc-hud">
        <div className="calc-stat">
          <b className={left < 0 ? "over" : ""}>{left}</b>
          <span>Points left</span>
        </div>
        {DATA[cls].trees.map((tree, ti) => (
          <div key={tree.name} className="calc-stat mini">
            <b>{treePts(ti)}</b>
            <span>{tree.name}</span>
            <i style={{ width: `${Math.min(100, (treePts(ti) / pool) * 100)}%` }} />
          </div>
        ))}
        <label className="calc-level">
          Level
          <select value={level} onChange={(e) => setLevel(+e.target.value)}>
            {Array.from({ length: 51 }, (_, i) => 60 - i).map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </label>
        <button className={`calc-toggle${compare ? " on" : ""}`} onClick={() => setCompare((v) => !v)}>
          Compare Classic
        </button>
        <button className="calc-ghost" onClick={() => setRanks((p) => ({ ...p, [cls]: emptyRanks(cls) }))}>
          Reset
        </button>
        <button className="calc-ghost" onClick={copyLink}>
          {copied ? "Copied" : "Share"}
        </button>
        <div className="calc-legend">
          <span>
            <i className="avail" /> Available
          </span>
          <span>
            <i className="maxed" /> Maxed
          </span>
          <span>
            <i className="new" /> New
          </span>
          <span>
            <i className="changed" /> Changed
          </span>
        </div>
      </div>

      <div className="calc-board">
        <div className="calc-trees">
          {DATA[cls].trees.map((tree, ti) => (
            <section key={tree.name} className="calc-tree">
              <header>
                <img src={ZAM_ICON(tree.icon)} alt="" />
                <div>
                  <strong>{tree.name}</strong>
                  <small>
                    {treePts(ti)} / {pool}
                  </small>
                </div>
                <button
                  onClick={() =>
                    setRanks((p) => {
                      const cur = (p[cls] || emptyRanks(cls)).map((row) => row.slice());
                      cur[ti] = tree.talents.map(() => 0);
                      return { ...p, [cls]: cur };
                    })
                  }
                >
                  Clear
                </button>
              </header>
              <div className="calc-sheet" style={{ backgroundImage: `url(${ZAM_TALENT_BG(tree.bg)})` }}>
                <svg className="calc-arrows" viewBox="0 0 400 448" preserveAspectRatio="none">
                  {tree.talents.map((t) => {
                    if (!t.req) return null;
                    const p = idx(tree, t.req);
                    if (p < 0) return null;
                    const parent = tree.talents[p];
                    const on = rFor()[ti][p] >= parent.max;
                    const ax = ((parent.col - 0.5) / 4) * 400;
                    const ay = (parent.row - 0.5) * 64;
                    const bx = ((t.col - 0.5) / 4) * 400;
                    const by = (t.row - 0.5) * 64;
                    return (
                      <line
                        key={`${parent.name}-${t.name}`}
                        className={on ? "on" : ""}
                        x1={ax}
                        y1={ay + 18}
                        x2={bx}
                        y2={by - 18}
                      />
                    );
                  })}
                </svg>
                <div className="calc-grid">
                  {tree.talents.map((t, i) => {
                    const r = rFor()[ti][i];
                    const st = status(ti, i);
                    const active = hover?.ti === ti && hover.i === i;
                    return (
                      <button
                        key={t.name}
                        type="button"
                        className={`calc-node ${st}${active ? " focus" : ""}`}
                        style={{ gridRow: t.row, gridColumn: t.col }}
                        aria-label={`${t.name}, rank ${r} of ${t.max}`}
                        aria-expanded={active}
                        onPointerDown={(e) => {
                          pointerType.current = e.pointerType;
                          held.current = false;
                          clearHold();
                          if (e.pointerType !== "touch" && e.pointerType !== "pen") return;
                          const el = e.currentTarget;
                          holdTimer.current = setTimeout(() => {
                            held.current = true;
                            if (canRemove(ti, i)) mutate(ti, i, -1);
                            setHover({ ti, i, rect: el.getBoundingClientRect() });
                          }, 450);
                        }}
                        onPointerUp={clearHold}
                        onPointerCancel={clearHold}
                        onClick={(e) => {
                          e.preventDefault();
                          const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
                          const fromTouch = pointerType.current === "touch" || pointerType.current === "pen" || touchUi;
                          if (held.current) {
                            held.current = false;
                            return;
                          }
                          if (fromTouch) {
                            if (!canAdd(ti, i)) mutate(ti, i, 1);
                            setHover({ ti, i, rect });
                            return;
                          }
                          if (e.shiftKey) {
                            if (canRemove(ti, i)) mutate(ti, i, -1);
                          } else if (!canAdd(ti, i)) mutate(ti, i, 1);
                        }}
                        onContextMenu={(e) => {
                          e.preventDefault();
                          if (canRemove(ti, i)) mutate(ti, i, -1);
                        }}
                        onMouseEnter={(e) => {
                          if (touchUi) return;
                          setHover({ ti, i, rect: (e.currentTarget as HTMLElement).getBoundingClientRect() });
                        }}
                        onMouseMove={(e) => {
                          if (touchUi) return;
                          setHover({ ti, i, rect: (e.currentTarget as HTMLElement).getBoundingClientRect() });
                        }}
                        onMouseLeave={() => {
                          if (!touchUi) setHover(null);
                        }}
                        onFocus={(e) => {
                          if (touchUi) return;
                          setHover({ ti, i, rect: (e.currentTarget as HTMLElement).getBoundingClientRect() });
                        }}
                        onBlur={() => {
                          if (!touchUi) setHover(null);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            if (!canAdd(ti, i)) mutate(ti, i, 1);
                          }
                          if (e.key === "Backspace" || e.key === "Delete") {
                            e.preventDefault();
                            if (canRemove(ti, i)) mutate(ti, i, -1);
                          }
                        }}
                      >
                        {t.icon ? <img src={ZAM_ICON(t.icon)} alt="" /> : <span>{t.name.slice(0, 2)}</span>}
                        <em>
                          {r}/{t.max}
                        </em>
                        {compare && t.classic && t.classic.status !== "same" ? (
                          <abbr className={t.classic.status} title={t.classic.status}>
                            {t.classic.status === "new" ? "N" : t.classic.status === "moved" ? "M" : "C"}
                          </abbr>
                        ) : null}
                      </button>
                    );
                  })}
                </div>
              </div>
              {tree.removed?.length ? (
                <footer>
                  Removed vs Classic: {tree.removed.map((x) => x.name).join(" · ")}
                </footer>
              ) : null}
            </section>
          ))}
        </div>
      </div>

      {mounted && hover && hoverModel
        ? createPortal(
            touchUi ? (
                <div
                  className="wow-tip-float sheet"
                  role="dialog"
                  aria-label={hoverModel.talent.name}
                  style={{ ["--accent" as string]: accent }}
                >
                  <button type="button" className="wow-tip-close" onClick={() => setHover(null)} aria-label="Close">
                    ×
                  </button>
                  <TalentTip model={hoverModel} touch />
                  <div className="wow-tip-actions">
                    <button
                      type="button"
                      className="wow-tip-act"
                      disabled={!hoverModel.canDrop}
                      onClick={() => mutate(hover.ti, hover.i, -1)}
                    >
                      Unlearn
                    </button>
                    <button
                      type="button"
                      className="wow-tip-act primary"
                      disabled={!!hoverModel.reason}
                      onClick={() => mutate(hover.ti, hover.i, 1)}
                    >
                      Learn
                    </button>
                  </div>
                </div>
            ) : (
              <div
                className="wow-tip-float"
                style={{ ...tipPosition(hover.rect), ["--accent" as string]: accent }}
              >
                <TalentTip model={hoverModel} />
              </div>
            ),
            document.body
          )
        : null}

      <section className="calc-races">
        <header>
          <h2>Racials for {cls}</h2>
          <label>
            <input type="checkbox" checked={allRaces} onChange={(e) => setAllRaces(e.target.checked)} /> Show
            every race
          </label>
        </header>
        {CLASS_ABILITIES[cls] ? (
          <div className="calc-newspells">
            <strong>New baseline spells</strong>
            <ul>
              {CLASS_ABILITIES[cls].map(([n, t, ic]) => (
                <li key={n}>
                  {ic ? <img src={GAME_ICON(ic)} alt="" /> : null}
                  <b>{n}</b> {t}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        <div className="calc-factions">
          {Object.entries(RACIALS).map(([fac, races]) => (
            <div key={fac}>
              <h3 className={fac.toLowerCase()}>{fac}</h3>
              <div className="calc-race-grid">
                {races
                  .filter((r) => allRaces || r.classes.includes(cls))
                  .map((r) => (
                    <article key={r.race} className={r.classes.includes(cls) ? "" : "dim"}>
                      <div className="rn">
                        {r.icon ? <img className="portrait" src={GAME_ICON(r.icon)} alt="" /> : null}
                        <div>
                          <h4>{r.race}</h4>
                          <small>{r.classes.join(" · ")}</small>
                        </div>
                      </div>
                      <ul>
                        {r.abilities.map(([n, t, ic]) => (
                          <li key={n}>
                            {ic ? <img src={GAME_ICON(ic)} alt="" /> : null}
                            <b>{n}</b> {t}
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
              </div>
            </div>
          ))}
        </div>
        {CLASS_RACIALS[cls] ? (
          <div className="calc-newspells">
            <strong>{cls} racial spells</strong>
            <p className="calc-note" style={{ margin: "6px 0 10px" }}>
              {CLASS_RACIALS[cls].note}
            </p>
            <ul>
              {Object.entries(CLASS_RACIALS[cls].races).map(([race, spells]) =>
                spells.map(([n, t, ic]) => (
                  <li key={`${race}-${n}`}>
                    {ic ? <img src={GAME_ICON(ic)} alt="" /> : null}
                    <b>
                      {race}: {n}
                    </b>{" "}
                    {t}
                  </li>
                )),
              )}
            </ul>
          </div>
        ) : null}
      </section>
    </div>
  );
}
