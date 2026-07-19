"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

const locales: Array<{ code: Locale; label: string }> = [
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
];

export function LanguageSwitcher() {
  const activeLocale = useLocale() as Locale;
  const pathname = usePathname();

  return (
    <div className="language-switcher" aria-label="Language selection">
      {locales.map((locale, index) => {
        const isActive = activeLocale === locale.code;

        return (
          <span key={locale.code} className="flex items-center">
            {index > 0 ? <span aria-hidden="true">/</span> : null}
            <Link
              href={pathname}
              locale={locale.code}
              aria-current={isActive ? "page" : undefined}
              className={isActive ? "language-active" : undefined}
            >
              {locale.label}
            </Link>
          </span>
        );
      })}
    </div>
  );
}
