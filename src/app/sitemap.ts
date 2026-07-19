import type { MetadataRoute } from "next";

const baseUrl = "https://okdere.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/engineering", "/games", "/about"];
  const locales = ["en", "de"];

  return locales.flatMap((locale) =>
    paths.map((path) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
  );
}
