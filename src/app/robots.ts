import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://okdere.com/sitemap.xml",
    host: "https://okdere.com",
  };
}
