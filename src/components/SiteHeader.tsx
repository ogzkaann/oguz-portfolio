"use client";

import { useState } from "react";
import { FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { CvMenu } from "@/components/CvMenu";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

const navigation = [
  { key: "work", href: "/" },
  { key: "engineering", href: "/engineering" },
  { key: "games", href: "/games" },
  { key: "about", href: "/about" },
] as const;

const desktopNavigationGroups = [
  { key: "engineering", items: navigation.slice(0, 2) },
  { key: "games", items: navigation.slice(2) },
] as const;

const utilityLinks = [
  {
    key: "github",
    href: "https://github.com/ogzkaann",
    icon: FiGithub,
  },
  {
    key: "linkedin",
    href: "https://linkedin.com/in/oguz-kaan-dere",
    icon: FiLinkedin,
  },
] as const;

export function SiteHeader() {
  const t = useTranslations("Site");
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="wordmark" aria-label={t("homeLabel")}>
          OGUZ KAAN DERE
        </Link>

        <nav className="desktop-nav" aria-label={t("navigationLabel")}>
          {desktopNavigationGroups.map((group) => (
            <div
              key={group.key}
              className={`desktop-nav-group desktop-nav-${group.key}`}
            >
              {group.items.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`nav-link nav-link-${item.key}`}
                >
                  {t(`navigation.${item.key}`)}
                </Link>
              ))}
            </div>
          ))}
        </nav>

        <div className="desktop-utilities">
          <LanguageSwitcher />
          {utilityLinks.map(({ key, href, icon: Icon }) => (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="utility-link"
              aria-label={t(`links.${key}`)}
            >
              <Icon aria-hidden="true" />
              <span>{t(`links.${key}`)}</span>
            </a>
          ))}
          <CvMenu />
        </div>

        <button
          type="button"
          className="mobile-menu-button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>
      </div>

      {menuOpen ? (
        <div id="mobile-navigation" className="mobile-navigation">
          <nav aria-label={t("navigationLabel")}>
            {navigation.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {t(`navigation.${item.key}`)}
              </Link>
            ))}
          </nav>
          <div className="mobile-utilities">
            <LanguageSwitcher />
            {utilityLinks.map(({ key, href, icon: Icon }) => (
              <a key={key} href={href} target="_blank" rel="noreferrer">
                <Icon aria-hidden="true" />
                <span>{t(`links.${key}`)}</span>
              </a>
            ))}
            <CvMenu />
          </div>
        </div>
      ) : null}
    </header>
  );
}
