import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Lato, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { defaultMetadata } from "@/lib/seo";
import { SITE_DESCRIPTION, SITE_NAME, absUrl } from "@/lib/site";

const sans = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  themeColor: "#0c0a08",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const origin = absUrl("/");
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>
        <JsonLd
          data={[
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: SITE_NAME,
              alternateName: ["Classic Minus", "WoW Forever database"],
              url: origin,
              description: SITE_DESCRIPTION,
              inLanguage: "en-US",
              publisher: {
                "@type": "Organization",
                name: SITE_NAME,
                url: origin,
                logo: absUrl("/icon-512.png"),
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: SITE_NAME,
              url: origin,
              logo: absUrl("/icon-512.png"),
              description: SITE_DESCRIPTION,
            },
          ]}
        />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <div className="ticker">
          Beta Sep 17 · Launch Nov 4 · Raids Dec 9 · Level cap 60 · No flying · Classic+ is Forever
        </div>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
