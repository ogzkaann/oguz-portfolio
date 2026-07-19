import { FiArrowRight, FiExternalLink } from "react-icons/fi";
import type { ProjectLink } from "@/types/portfolio";

interface ProjectLinksProps {
  links: ProjectLink[];
  labels: Record<ProjectLink["kind"], string>;
  tone: "engineering" | "games";
}

export function ProjectLinks({ links, labels, tone }: ProjectLinksProps) {
  if (links.length === 0) {
    return null;
  }

  return (
    <div className="project-links">
      {links.map((link) => (
        <a
          key={`${link.kind}-${link.href}`}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className={`project-link project-link-${tone}`}
        >
          <span>{labels[link.kind]}</span>
          {link.kind === "github" ? (
            <FiExternalLink aria-hidden="true" />
          ) : (
            <FiArrowRight aria-hidden="true" />
          )}
        </a>
      ))}
    </div>
  );
}
