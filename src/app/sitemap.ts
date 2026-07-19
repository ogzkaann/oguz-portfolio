import type { MetadataRoute } from "next";

const siteUrl = "https://okdere.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["en", "de"].map((locale) => ({
    url: `${siteUrl}/${locale}`,
    changeFrequency: "monthly" as const,
    priority: 1,
  }));
}
