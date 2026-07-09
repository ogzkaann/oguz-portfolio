import type {
  Project,
  ProjectAccent,
  ProjectIcon,
  ProjectStatus,
} from "@/types/portfolio";
import type { ReactNode } from "react";

interface ProjectCardProps {
  project: Project;
  designedHeading: string;
  liveDemoLabel: string;
  githubLabel: string;
  statusLabels: Record<ProjectStatus, string>;
}

const statusStyles: Record<ProjectStatus, string> = {
  live: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
  inProgress: "border-amber-300/30 bg-amber-300/10 text-amber-100",
  concept: "border-sky-300/30 bg-sky-300/10 text-sky-100",
  portfolio: "border-fuchsia-300/30 bg-fuchsia-300/10 text-fuchsia-100",
};

const accentStyles: Record<
  ProjectAccent,
  { card: string; line: string; tile: string; bullet: string }
> = {
  orange: {
    card: "border-orange-300/25 shadow-orange-950/20 hover:border-orange-300/45",
    line: "via-orange-300/80",
    tile: "border-orange-300/25 bg-gradient-to-br from-orange-400/20 to-rose-500/10 text-orange-200",
    bullet: "bg-orange-300",
  },
  blue: {
    card: "border-blue-300/20 shadow-blue-950/20 hover:border-blue-300/40",
    line: "via-blue-300/70",
    tile: "border-blue-300/25 bg-gradient-to-br from-blue-400/20 to-sky-500/10 text-blue-200",
    bullet: "bg-blue-300",
  },
  emerald: {
    card: "border-emerald-300/20 shadow-emerald-950/20 hover:border-emerald-300/40",
    line: "via-emerald-300/70",
    tile: "border-emerald-300/25 bg-gradient-to-br from-emerald-400/20 to-teal-500/10 text-emerald-200",
    bullet: "bg-emerald-300",
  },
  cyan: {
    card: "border-cyan-300/20 shadow-cyan-950/20 hover:border-cyan-300/40",
    line: "via-cyan-300/70",
    tile: "border-cyan-300/25 bg-gradient-to-br from-cyan-400/20 to-blue-500/10 text-cyan-200",
    bullet: "bg-cyan-300",
  },
  violet: {
    card: "border-violet-300/20 shadow-violet-950/20 hover:border-violet-300/40",
    line: "via-violet-300/70",
    tile: "border-violet-300/25 bg-gradient-to-br from-violet-400/20 to-fuchsia-500/10 text-violet-200",
    bullet: "bg-violet-300",
  },
  slate: {
    card: "border-slate-400/15 shadow-black/20 hover:border-slate-300/30",
    line: "via-slate-300/50",
    tile: "border-slate-400/20 bg-gradient-to-br from-slate-300/15 to-slate-700/20 text-slate-200",
    bullet: "bg-slate-300",
  },
};

function ProjectMark({ icon }: { icon: ProjectIcon }) {
  const iconProps = {
    className: "h-5 w-5",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };

  const paths: Record<ProjectIcon, ReactNode> = {
    game: (
      <>
        <path d="M7 8h10a4 4 0 0 1 3.8 2.8l1 3.2a3 3 0 0 1-4.7 3.2l-2.4-1.9H9.3l-2.4 1.9A3 3 0 0 1 2.2 14l1-3.2A4 4 0 0 1 7 8Z" />
        <path d="M8 12h3" />
        <path d="M9.5 10.5v3" />
        <path d="M16.5 11.5h.01" />
        <path d="M18.5 13.5h.01" />
      </>
    ),
    university: (
      <>
        <path d="M3 9 12 4l9 5-9 5-9-5Z" />
        <path d="M7 11.2V16c0 1.7 2.2 3 5 3s5-1.3 5-3v-4.8" />
        <path d="M21 9v6" />
      </>
    ),
    germany: (
      <>
        <path d="M5 19V5l5-2 5 2 4-2v14l-4 2-5-2-5 2Z" />
        <path d="M10 3v14" />
        <path d="M15 5v14" />
        <path d="M7 12h3" />
        <path d="M14 10h3" />
      </>
    ),
    chat: (
      <>
        <path d="M7 16H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v1" />
        <path d="M10 10h7a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3h-3l-3 2v-2h-1a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3Z" />
        <path d="M6 8h5" />
      </>
    ),
    document: (
      <>
        <path d="M6 3h8l4 4v14H6V3Z" />
        <path d="M14 3v5h5" />
        <path d="M9 12h6" />
        <path d="M9 16h4" />
        <path d="m15.5 18.5 2 2" />
      </>
    ),
    portfolio: (
      <>
        <path d="M4 5h16v12H4V5Z" />
        <path d="M4 17h16" />
        <path d="M8 21h8" />
        <path d="M10 9 8 11l2 2" />
        <path d="m14 9 2 2-2 2" />
      </>
    ),
  };

  return <svg {...iconProps}>{paths[icon]}</svg>;
}

export default function ProjectCard({
  project,
  designedHeading,
  liveDemoLabel,
  githubLabel,
  statusLabels,
}: ProjectCardProps) {
  const accent = project.accent ?? "cyan";
  const icon = project.icon ?? "portfolio";
  const styles = accentStyles[accent];

  return (
    <article
      className={`group relative flex h-full flex-col rounded-lg border bg-slate-900/70 p-5 shadow-xl backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-slate-900/90 ${
        project.featured ? styles.card : "border-white/10 shadow-black/20 hover:border-cyan-300/30"
      }`}
    >
      <div
        className={`absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent ${styles.line} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
          project.featured ? "opacity-100" : ""
        }`}
      />

      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-start gap-3">
          <div
            className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border ${styles.tile}`}
          >
            <ProjectMark icon={icon} />
          </div>
          <h4 className="min-w-0 text-xl font-semibold tracking-tight text-white">
            {project.title}
          </h4>
        </div>
        <span
          className={`shrink-0 rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${statusStyles[project.status]}`}
        >
          {statusLabels[project.status]}
        </span>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-300">{project.description}</p>

      <div className="mt-5">
        <h5 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          {designedHeading}
        </h5>
        <ul className="mt-3 space-y-2">
          {project.designed.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-5 text-slate-300">
              <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${styles.bullet}`} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.highlights.map((highlight) => (
          <span
            key={highlight}
            className="rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1 text-xs text-slate-300"
          >
            {highlight}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-cyan-300/10 px-2.5 py-1 text-xs font-medium text-cyan-100"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-3 pt-6">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:from-cyan-300 hover:to-blue-400"
          >
            {liveDemoLabel}
          </a>
        ) : null}
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-white/20 hover:bg-white/10"
          >
            {githubLabel}
          </a>
        ) : null}
      </div>
    </article>
  );
}
