import { getLocale, getTranslations } from "next-intl/server";
import { projects } from "@/data/projects";
import { physicalOpsCopy } from "@/data/physical-ops-copy";
import type {
  LocalizedProject,
  ProjectId,
  ProjectLinkKind,
  ProjectWorld,
} from "@/types/portfolio";
import { ProjectFeature } from "@/components/ProjectFeature";
import { ProjectRow } from "@/components/ProjectRow";

interface WorldPageProps {
  world: ProjectWorld;
  projectIds: ProjectId[];
}

export async function WorldPage({ world, projectIds }: WorldPageProps) {
  const t = await getTranslations("Portfolio");
  const locale = await getLocale();
  const labels = t.raw("linkLabels") as Record<ProjectLinkKind, string>;
  const statuses = t.raw("statusLabels") as Record<string, string>;
  const [featuredId, ...secondaryIds] = projectIds;
  const featured = projects[featuredId];

  const projectCopy = (id: ProjectId): LocalizedProject => {
    if (id === "physicalOps") {
      return physicalOpsCopy[locale === "de" ? "de" : "en"];
    }

    return t.raw(`projects.${id}`) as LocalizedProject;
  };

  return (
    <main className={`world-page world-page-${world}`}>
      <header className="world-page-header">
        <p>{t(`${world}.eyebrow`)}</p>
        <h1>{t(`${world}.title`)}</h1>
        <div className="world-page-intro">
          <p>{t(`${world}.intro`)}</p>
          <p>{t(`${world}.supporting`)}</p>
        </div>
      </header>

      <section className="world-feature" aria-label={t(`${world}.featuredLabel`)}>
        <ProjectFeature
          id={featuredId}
          copy={projectCopy(featuredId)}
          labels={labels}
          statusLabel={statuses[featured.status]}
          mediaPriority
        />
      </section>

      <section className="world-projects" aria-labelledby={`${world}-projects-title`}>
        <div className="world-section-heading">
          <p>{t(`${world}.projectsEyebrow`)}</p>
          <h2 id={`${world}-projects-title`}>{t(`${world}.projectsTitle`)}</h2>
        </div>
        <div className="world-project-list">
          {secondaryIds.map((id) => (
            <ProjectRow
              key={id}
              id={id}
              copy={projectCopy(id)}
              labels={labels}
              statusLabel={statuses[projects[id].status]}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
