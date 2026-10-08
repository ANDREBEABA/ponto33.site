import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Gera /robots.txt automaticamente no build.
export default function robots(): MetadataRoute.Robots {
  const base = site.url.replace(/\/$/, "");
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/obrigado-futuro-franqueado"],
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
