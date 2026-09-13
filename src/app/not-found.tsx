import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap" style={{ padding: "80px 24px 120px", textAlign: "center" }}>
      <img src="/brand.png" alt="" width={72} height={72} style={{ margin: "0 auto 20px" }} />
      <h1>Page not found</h1>
      <p style={{ color: "var(--muted)", maxWidth: 420, margin: "0 auto 24px" }}>
        That path isn’t in the ClassicMinus ledger. Try Blue Posts, the blog, or the talent calculator.
      </p>
      <p className="hero-actions" style={{ justifyContent: "center" }}>
        <Link className="btn" href="/">
          Back home
        </Link>
        <Link className="btn ghost" href="/talents">
          Talent calculator
        </Link>
      </p>
    </div>
  );
}
