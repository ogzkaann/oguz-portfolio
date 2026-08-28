import { FiBookOpen, FiGithub, FiLinkedin, FiYoutube } from "react-icons/fi";
import { getTranslations } from "next-intl/server";
import { CvMenu } from "@/components/CvMenu";

export async function SiteFooter() {
  const t = await getTranslations("Site");

  return (
    <footer className="site-footer">
      <p>{t("footer")}</p>
      <div>
        <a href="https://blog.okdere.com" target="_blank" rel="noreferrer">
          <FiBookOpen aria-hidden="true" />
          Blog
        </a>
        <a href="https://www.youtube.com/@oguzkdere" target="_blank" rel="noreferrer">
          <FiYoutube aria-hidden="true" />
          YouTube
        </a>
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
