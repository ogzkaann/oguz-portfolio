import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { WorldPage } from "@/components/WorldPage";
import { gameProjectIds } from "@/data/projects";
import type { Locale } from "@/i18n/routing";
import { createPageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return createPageMetadata(locale, "games", "/games");
}

export default async function GamesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <WorldPage world="games" projectIds={gameProjectIds} />;
}
