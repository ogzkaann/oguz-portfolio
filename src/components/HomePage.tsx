import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { projects } from "@/data/projects";
import type { LocalizedProject, ProjectId, ProjectLinkKind } from "@/types/portfolio";
import { ProjectFeature } from "@/components/ProjectFeature";
import { ProjectRow } from "@/components/ProjectRow";

function projectCopy(
  raw: (key: string) => unknown,
  id: ProjectId,
): LocalizedProject {
  return raw(`projects.${id}`) as LocalizedProject;
}

export async function HomePage() {
  const t = await getTranslations("Portfolio");
  const labels = t.raw("linkLabels") as Record<ProjectLinkKind, string>;
  const statuses = t.raw("statusLabels") as Record<string, string>;
  const nightSoup = projects.nightSoup;

  return (
    <main>
      <section className="split-hero" aria-labelledby="engineering-hero-title">
        <div className="engineering-hero">
          <p className="engineering-intro">{t("home.introduction")}</p>
          <div className="hero-copy">
            <p className="hero-eyebrow">{t("home.engineering.eyebrow")}</p>
            <h1 id="engineering-hero-title">{t("home.engineering.title")}</h1>
            <span className="engineering-rule" aria-hidden="true" />
            <p>{t("home.engineering.description")}</p>
            <Link href="/engineering" className="hero-cta hero-cta-engineering">
              {t("home.engineering.cta")}
              <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="games-hero">
          <Image
            src={nightSoup.media?.src ?? "/media/night-soup.png"}
            alt={t("projects.nightSoup.mediaAlt")}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            style={{ objectPosition: nightSoup.media?.position }}
          />
          <div className="games-hero-overlay" />
          <div className="hero-copy">
            <p className="hero-eyebrow">{t("home.games.eyebrow")}</p>
            <h2>{t("home.games.title")}</h2>
            <p>{t("home.games.description")}</p>
            <Link href="/games" className="hero-cta hero-cta-games">
              {t("home.games.cta")}
              <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <nav className="work-tabs" aria-label={t("home.workNavigationLabel")}>
        <a href="#selected-work" aria-current="page">
          {t("home.tabs.all")}
        </a>
        <Link href="/engineering">{t("home.tabs.engineering")}</Link>
        <Link href="/games">{t("home.tabs.games")}</Link>
      </nav>

      <section id="selected-work" className="selected-work" aria-label={t("home.selectedWorkLabel")}>
        <div className="engineering-work">
          <ProjectFeature
            id="ledgerflow"
            copy={projectCopy(t.raw, "ledgerflow")}
            labels={labels}
            statusLabel={statuses[projects.ledgerflow.status]}
            mediaPriority
          />

          <div className="work-subsection-heading">
            <span>{t("home.otherEngineering")}</span>
          </div>
          <ProjectRow
            id="tipTracker"
            copy={projectCopy(t.raw, "tipTracker")}
            labels={labels}
            statusLabel={statuses[projects.tipTracker.status]}
          />
          <ProjectRow
            id="weatherShaders"
            copy={projectCopy(t.raw, "weatherShaders")}
            labels={labels}
            statusLabel={statuses[projects.weatherShaders.status]}
          />
          <ProjectRow
            id="contextApi"
            copy={projectCopy(t.raw, "contextApi")}
            labels={labels}
            statusLabel={statuses[projects.contextApi.status]}
          />
        </div>

        <div className="games-work">
          <ProjectFeature
            id="nightSoup"
            copy={projectCopy(t.raw, "nightSoup")}
            labels={labels}
            statusLabel={statuses[projects.nightSoup.status]}
            compact
          />
          <ProjectFeature
            id="swarmScript"
            copy={projectCopy(t.raw, "swarmScript")}
            labels={labels}
            statusLabel={statuses[projects.swarmScript.status]}
          />
          <div className="work-subsection-heading work-subsection-heading-games">
            <span>{t("home.otherGames")}</span>
          </div>
          <ProjectRow
            id="gladiatorArena"
            copy={projectCopy(t.raw, "gladiatorArena")}
            labels={labels}
            statusLabel={statuses[projects.gladiatorArena.status]}
          />
        </div>
      </section>
    </main>
  );
}
