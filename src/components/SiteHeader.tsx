"use client";

import { useLayoutEffect, useRef, useState } from "react";
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
  const headerRef = useRef<HTMLElement>(null);
  const desktopNavRef = useRef<HTMLElement>(null);
  const gamesLinkRef = useRef<HTMLAnchorElement>(null);

  useLayoutEffect(() => {
    const header = headerRef.current;
    const desktopNav = desktopNavRef.current;
    const gamesLink = gamesLinkRef.current;

    if (!header || !desktopNav || !gamesLink) {
      return;
    }

    const updateSplit = () => {
      if (window.innerWidth < 900) {
        header.style.removeProperty("--header-split");
        return;
      }

      const headerRect = header.getBoundingClientRect();
      const gamesRect = gamesLink.getBoundingClientRect();
      header.style.setProperty(
        "--header-split",
        `${gamesRect.left - headerRect.left}px`,
      );
    };

    updateSplit();

    const resizeObserver = new ResizeObserver(updateSplit);
    resizeObserver.observe(header);
    resizeObserver.observe(desktopNav);
    resizeObserver.observe(gamesLink);
    window.addEventListener("resize", updateSplit);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateSplit);
    };
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header ref={headerRef} className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="wordmark" aria-label={t("homeLabel")}>
          OGUZ KAAN DERE
        </Link>

        <nav
          ref={desktopNavRef}
          className="desktop-nav"
          aria-label={t("navigationLabel")}
        >
          {navigation.map((item) => (
            <Link
              key={item.key}
              ref={item.key === "games" ? gamesLinkRef : undefined}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`nav-link nav-link-${item.key}`}
            >
              {t(`navigation.${item.key}`)}
            </Link>
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
