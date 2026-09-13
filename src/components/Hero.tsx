import Link from "next/link";
import { OFFICIAL } from "@/data/art";

export function Hero({
  image,
  video,
  kicker,
  title,
  children,
  tall = false,
  align = "left",
  logo = false,
}: {
  image: string;
  video?: string;
  kicker?: string;
  title: string;
  children?: React.ReactNode;
  tall?: boolean;
  align?: "left" | "right";
  logo?: boolean;
}) {
  return (
    <section className={`hero ${tall ? "tall" : ""} ${align}`}>
      {video ? (
        <video className="bg" autoPlay muted loop playsInline poster={image}>
          <source src={video} type="video/mp4" />
        </video>
      ) : (
        <img className="bg" src={image} alt="" />
      )}
      <div className="veil" />
      <div className="copy">
        {logo ? <img className="logo-lockup" src={OFFICIAL.logo} alt="World of Warcraft: Forever" /> : null}
        {kicker ? <div className="kicker">{kicker}</div> : null}
        <h1>{title}</h1>
        {children}
      </div>
    </section>
  );
}

export function ZoneTile({
  href,
  name,
  blurb,
  image,
  video,
}: {
  href: string;
  name: string;
  blurb: string;
  image: string;
  video?: string;
}) {
  return (
    <Link className="zone-tile" href={href}>
      {video ? (
        <video autoPlay muted loop playsInline poster={image}>
          <source src={video} type="video/mp4" />
        </video>
      ) : (
        <img src={image} alt="" />
      )}
      <div className="veil" />
      <div className="txt">
        <h3>{name}</h3>
        <p style={{ margin: 0, fontSize: 14 }}>{blurb}</p>
      </div>
    </Link>
  );
}
