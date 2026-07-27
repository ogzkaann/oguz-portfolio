"use client";

import { FiDownload } from "react-icons/fi";
import { useTranslations } from "next-intl";

const resumes = [
  {
    key: "english",
    href: "/Oguz_Kaan_Dere_English_Resume_2026.pdf",
  },
  {
    key: "german",
    href: "/Oguz_Kaan_Dere_Lebenslauf_2026.pdf",
  },
] as const;

export function CvMenu() {
  const t = useTranslations("Site");

  return (
    <details className="cv-menu">
      <summary className="utility-link" aria-label={t("links.cv")}>
        <FiDownload aria-hidden="true" />
        <span>{t("links.cv")}</span>
      </summary>
      <div className="cv-menu-options">
        {resumes.map((resume) => (
          <a key={resume.key} href={resume.href} download>
            {t(`links.resumes.${resume.key}`)}
          </a>
        ))}
      </div>
    </details>
  );
}
