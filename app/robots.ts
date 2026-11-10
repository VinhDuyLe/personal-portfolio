import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://vinh-duy-le-portfolio.saferoot4097.chatgpt.site/sitemap.xml" }; }
