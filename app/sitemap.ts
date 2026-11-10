import type { MetadataRoute } from "next";
import { projects } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://vinh-duy-le-portfolio.saferoot4097.chatgpt.site";
  return ["", "/projects", "/about", ...projects.map((p) => `/projects/${p.slug}`)].map((path) => ({ url: `${base}${path}`, changeFrequency: "monthly", priority: path === "" ? 1 : 0.8 }));
}
