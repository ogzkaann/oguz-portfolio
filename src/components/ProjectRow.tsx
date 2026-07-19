import { projects } from "@/data/projects";
import type { LocalizedProject, ProjectId, ProjectLinkKind } from "@/types/portfolio";
import { ProjectLinks } from "@/components/ProjectLinks";
import { ProjectMedia } from "@/components/ProjectMedia";

interface ProjectRowProps {
  id: ProjectId;
  copy: LocalizedProject;
  labels: Record<ProjectLinkKind, string>;
  statusLabel: string;
}

export function ProjectRow({ id, copy, labels, statusLabel }: ProjectRowProps) {
  const project = projects[id];

  return (
    <article className={`project-row project-row-${project.world}`}>
      {project.media && copy.mediaAlt ? (
        <ProjectMedia
          src={project.media.src}
          alt={copy.mediaAlt}
          position={project.media.position}
          className="project-row-media"
        />
      ) : null}
      <div className="project-row-copy">
        <div className="project-kicker-row">
          <p className="project-eyebrow">{copy.eyebrow}</p>
          <span className="status-badge">{statusLabel}</span>
        </div>
        <h3>{copy.title}</h3>
        <p className="project-hook">{copy.hook}</p>
        <p className="project-role">{copy.role}</p>
        <ul className="project-contributions">
          {copy.contributions.slice(0, 3).map((contribution) => (
            <li key={contribution}>{contribution}</li>
          ))}
        </ul>
        <p className="project-stack">{project.stack.join(" · ")}</p>
        <ProjectLinks links={project.links} labels={labels} tone={project.world} />
      </div>
    </article>
  );
}
