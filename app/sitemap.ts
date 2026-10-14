import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Gera /sitemap.xml automaticamente no build.
// Páginas públicas (a /obrigado-futuro-franqueado fica de fora — é noindex).
export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const now = new Date();

  const rotas: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/franquias", priority: 0.9, changeFrequency: "weekly" },
    { path: "/ofereca-um-ponto", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contato", priority: 0.6, changeFrequency: "monthly" },
  ];

  return rotas.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
