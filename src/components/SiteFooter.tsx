import { FiGithub, FiLinkedin } from "react-icons/fi";
import { getTranslations } from "next-intl/server";
import { CvMenu } from "@/components/CvMenu";

export async function SiteFooter() {
  const t = await getTranslations("Site");

  return (
    <footer className="site-footer">
      <p>{t("footer")}</p>
      <div>
        <a href="https://github.com/ogzkaann" target="_blank" rel="noreferrer">
          <FiGithub aria-hidden="true" />
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/oguz-kaan-dere"
          target="_blank"
          rel="noreferrer"
        >
          <FiLinkedin aria-hidden="true" />
          LinkedIn
        </a>
        <CvMenu />
      </div>
    </footer>
  );
}
