import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/i18n/routing";

const siteUrl = "https://okdere.com";

export async function createPageMetadata(
  locale: Locale,
  page: "work" | "engineering" | "games" | "about",
  pathname = "",
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: `Metadata.${page}` });
  const localizedPath = `/${locale}${pathname}`;

  return {
    metadataBase: new URL(siteUrl),
    title: t("title"),
    description: t("description"),
    authors: [{ name: "Oguz Kaan Dere" }],
    alternates: {
      canonical: localizedPath,
      languages: {
        en: `/en${pathname}`,
        de: `/de${pathname}`,
        "x-default": `/en${pathname}`,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${siteUrl}${localizedPath}`,
      siteName: "Oguz Kaan Dere",
      type: "website",
      locale: locale === "de" ? "de_DE" : "en_US",
      alternateLocale: locale === "de" ? ["en_US"] : ["de_DE"],
      images: [
        {
          url: "/media/night-soup.png",
          width: 1672,
          height: 941,
          alt: "Oguz Kaan Dere - Engineering and Games",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/media/night-soup.png"],
    },
  };
}
