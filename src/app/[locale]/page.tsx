import { setRequestLocale } from "next-intl/server";
import PortfolioPage from "@/components/PortfolioPage";
import type { Locale } from "@/i18n/routing";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <PortfolioPage />;
}
