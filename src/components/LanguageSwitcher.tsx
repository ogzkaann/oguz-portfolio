"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

const locales: Array<{ code: Locale; label: string }> = [
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
];

export default function LanguageSwitcher() {
  const activeLocale = useLocale() as Locale;
  const pathname = usePathname();

  return (
    <div
      className="mx-auto mb-6 flex w-fit rounded-full border border-white/10 bg-slate-950/60 p-1 text-xs font-semibold tracking-[0.14em] shadow-lg shadow-black/20 lg:mx-0"
      aria-label="Language selection"
    >
      {locales.map((locale) => {
        const isActive = activeLocale === locale.code;

        return (
          <Link
            key={locale.code}
            href={pathname}
            locale={locale.code}
            aria-current={isActive ? "true" : undefined}
            onClick={() => {
              window.localStorage.setItem("portfolio-locale", locale.code);
            }}
            className={`rounded-full px-3 py-1.5 transition ${
              isActive
                ? "bg-cyan-300 text-slate-950"
                : "text-slate-400 hover:bg-white/5 hover:text-slate-100"
            }`}
          >
            {locale.label}
          </Link>
        );
      })}
    </div>
  );
}
