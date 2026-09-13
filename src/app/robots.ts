import type { MetadataRoute } from "next";
import { absUrl, shouldIndex } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  if (!shouldIndex()) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: absUrl("/sitemap.xml"),
    host: absUrl("/"),
  };
}
