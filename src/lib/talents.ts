export type Classic = {
  status: "new" | "changed" | "moved" | "same";
  tree?: string;
  row?: number;
  col?: number;
  max?: number;
  text?: string;
  renamed?: string;
  moved?: boolean;
};

export type Talent = {
  name: string;
  max: number;
  row: number;
  col: number;
  passive?: boolean;
  icon?: string;
  cost?: string;
  desc: string[] | Record<string, string>;
  classic?: Classic;
  req?: string;
  reqText?: string;
  note?: string;
  scaleIdx?: number[];
  fixed?: string[];
};

export type Tree = {
  name: string;
  bg: number;
  icon: string;
  talents: Talent[];
  removed?: { name: string; max: number; text: string }[];
};

export type ClassData = { icon: string; source?: string; trees: Tree[] };

export const CLASS_COLORS: Record<string, string> = {
  Warrior: "#C79C6E",
  Paladin: "#F58CBA",
  Hunter: "#ABD473",
  Rogue: "#FFF569",
  Priest: "#F5F5F5",
  Shaman: "#0070DE",
  Mage: "#69CCF0",
  Warlock: "#9482C9",
  Druid: "#FF7D0A",
};

export function scaleText(text: string, from: number, to: number, t: Talent) {
  const fixed = new Set(t.fixed || []);
  const idxOnly = t.scaleIdx ? new Set(t.scaleIdx) : null;
  const chanceOverflow = [...text.matchAll(/(\d+(?:\.\d+)?)%\s+chance/gi)].some(
    (m) => (parseFloat(m[1]) * to) / from > 100
  );
  const hasChance = !chanceOverflow && /\d+(?:\.\d+)?%\s+chance/i.test(text);
  let i = -1;
  return text.replace(
    /(\b(?:by an additional|by up to|by|an additional|a|an|up to|below|under|above|within|over|every|next|first|lasts|for|than|per|as if you were)\s+)?(\d+(?:\.\d+)?)(%)?(\s+chance)?/gi,
    (m, pre, num, pct, chance) => {
      i++;
      const tok = num + (pct || "");
      let ok: boolean;
      if (idxOnly) ok = idxOnly.has(i);
      else {
        if (fixed.has(tok)) return m;
        if (chanceOverflow && chance) return m;
        const p = (pre || "").trim().toLowerCase();
        if (/^(up to|below|under|above|within|over|every|next|first|lasts|for|than|per|as if you were)$/.test(p))
          return m;
        if (hasChance) ok = !!chance;
        else ok = !!pct || /\./.test(num) || /^by/.test(p);
      }
      if (!ok) return m;
      let v = (parseFloat(num) * to) / from;
      if (pct && v > 100) v = 100;
      const out = Number.isInteger(v) ? String(v) : (Math.round(v * 10) / 10).toFixed(1);
      return (pre || "") + out + (pct || "") + (chance || "");
    }
  );
}

export function rankText(t: Talent, r: number) {
  if (r < 1) return null;
  if (Array.isArray(t.desc)) return { text: t.desc[Math.min(r, t.desc.length) - 1], est: false };
  const desc = t.desc as Record<string, string>;
  const known = Object.keys(desc).map(Number).sort((a, b) => a - b);
  if (desc[r]) return { text: desc[r], est: false };
  const base = known.reduce((b, k) => (Math.abs(k - r) < Math.abs(b - r) ? k : b), known[0]);
  return { text: scaleText(desc[String(base)], base, r, t), est: true };
}

export function classicLabel(c: Classic) {
  if (c.status === "new") return "New in Forever";
  if (c.status === "moved") return "Moved";
  if (c.status === "changed") return "Changed";
  return "Unchanged";
}
