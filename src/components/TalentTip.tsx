import { classicLabel, rankText, type Talent } from "@/lib/talents";
import { ZAM_ICON } from "@/data/art";

export type TipModel = {
  talent: Talent;
  rank: number;
  treeName: string;
  compare: boolean;
  reason: string | null;
  canDrop: boolean;
};

export function TalentTip({ model, compact = false }: { model: TipModel; compact?: boolean }) {
  const { talent: t, rank, treeName, compare, reason, canDrop } = model;
  const cur = rankText(t, rank);
  const nxt = rank < t.max ? rankText(t, rank + 1) : null;
  const classic = t.classic;
  const pct = (rank / t.max) * 100;

  return (
    <div className={`wow-tip${compact ? " compact" : ""}`}>
      <div className="wow-tip-head">
        {t.icon ? <img src={ZAM_ICON(t.icon)} alt="" /> : null}
        <div>
          <div className="wow-tip-name">{t.name}</div>
          <div className="wow-tip-sub">
            {t.passive ? "Passive" : t.cost || "Active"} · {treeName}
          </div>
        </div>
      </div>
      <div className="wow-tip-rank">
        <span>
          Rank {rank}/{t.max}
        </span>
        <div className="wow-tip-meter" aria-hidden>
          <i style={{ width: `${pct}%` }} />
        </div>
      </div>
      {cur ? (
        <p className="wow-tip-gold">
          {cur.text}
          {cur.est ? <em> Estimated from a nearby rank.</em> : null}
        </p>
      ) : (
        <p className="wow-tip-muted">Not learned yet.</p>
      )}
      {nxt ? (
        <>
          <div className="wow-tip-next">Next rank</div>
          <p className="wow-tip-gold dim">
            {nxt.text}
            {nxt.est ? <em> Estimated from a nearby rank.</em> : null}
          </p>
        </>
      ) : null}
      {t.note ? <p className="wow-tip-muted">{t.note}</p> : null}
      {compare && classic ? (
        <div className={`wow-tip-classic ${classic.status}`}>
          <b>{classicLabel(classic)}</b>
          {classic.status === "new" ? (
            <span>No Classic talent with this name.</span>
          ) : (
            <span>
              {classic.renamed ? `Renamed from ${classic.renamed}. ` : ""}
              {classic.moved ? `Was ${classic.tree} row ${classic.row}, column ${classic.col}. ` : ""}
              {classic.max !== t.max ? `Was ${classic.max} rank${(classic.max || 0) > 1 ? "s" : ""}. ` : ""}
              {classic.text ? `Classic rank 1: ${classic.text}` : ""}
            </span>
          )}
        </div>
      ) : null}
      {t.reqText ? <p className="wow-tip-req">{t.reqText}</p> : null}
      <div className="wow-tip-cta">
        {!reason ? "Left-click to learn" : reason === "Max rank" ? "Max rank" : reason}
        {canDrop ? " · Right-click to unlearn" : ""}
      </div>
    </div>
  );
}
