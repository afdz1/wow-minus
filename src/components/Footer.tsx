import { BLIZZARD_CREDIT, OFFICIAL } from "@/data/art";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <img src="/brand.png" alt="ClassicMinus" width={56} height={56} style={{ marginBottom: 16 }} />
        <p>
          ClassicMinus is an independent fan database consolidating public World of Warcraft: Forever
          (Classic+) information. Not affiliated with Blizzard Entertainment.{" "}
          <a href="https://discord.gg/pGsPbHJEg" target="_blank" rel="noopener noreferrer">
            Join the Discord
          </a>
          .
        </p>
        <p className="legal">
          {BLIZZARD_CREDIT} World of Warcraft, Warcraft, and Blizzard Entertainment are trademarks or
          registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries. Official
          artwork and cinematics used for news reporting and database illustration with credit to{" "}
          <a href={OFFICIAL.source}>Blizzard Entertainment</a>. Talent icons courtesy of in-game assets as
          hosted for community tools.
        </p>
      </div>
    </footer>
  );
}
