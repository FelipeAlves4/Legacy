import type { MetadataRoute } from "next";
import { site } from "@/config/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/sobre",
    "/ecossistema",
    "/gestao",
    "/educacao",
    "/digital",
    "/contato",
    "/portal",
    "/privacidade",
  ].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly" as const,
    priority: path ? 0.7 : 1,
  }));
}
