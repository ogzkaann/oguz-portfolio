import { projects } from "@/data/projects";
import type { LocalizedProject, ProjectId, ProjectLinkKind } from "@/types/portfolio";
import { ProjectLinks } from "@/components/ProjectLinks";
import { ProjectMedia } from "@/components/ProjectMedia";

interface ProjectFeatureProps {
  id: ProjectId;
  copy: LocalizedProject;
  labels: Record<ProjectLinkKind, string>;
  statusLabel: string;
  compact?: boolean;
  mediaPriority?: boolean;
}

export function ProjectFeature({
  id,
  copy,
  labels,
  statusLabel,
  compact = false,
  mediaPriority = false,
}: ProjectFeatureProps) {
  const project = projects[id];

  return (
    <article
      className={`project-feature project-feature-${project.world} ${
        compact ? "project-feature-compact" : ""
      }`}
    >
      <div className="project-copy">
        <div className="project-kicker-row">
          <p className="project-eyebrow">{copy.eyebrow}</p>
          <span className="status-badge">{statusLabel}</span>
        </div>
        <h2>{copy.title}</h2>
        <p className="project-hook">{copy.hook}</p>
        <p className="project-role">{copy.role}</p>
        <ul className="project-contributions">
          {copy.contributions.map((contribution) => (
            <li key={contribution}>{contribution}</li>
          ))}
        </ul>
        {copy.note ? <p className="project-note">{copy.note}</p> : null}
      </div>

      {project.media && copy.mediaAlt ? (
        <ProjectMedia
          src={project.media.src}
          alt={copy.mediaAlt}
          position={project.media.position}
          priority={mediaPriority}
        />
      ) : null}

      <div className="project-meta">
        <p>{project.stack.join(" · ")}</p>
        <ProjectLinks links={project.links} labels={labels} tone={project.world} />
      </div>
    </article>
  );
}
