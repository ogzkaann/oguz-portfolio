import type { Project, ProjectStatus } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

const statusStyles: Record<ProjectStatus, string> = {
  Live: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
  "In progress": "border-amber-300/30 bg-amber-300/10 text-amber-100",
  Concept: "border-sky-300/30 bg-sky-300/10 text-sky-100",
  Portfolio: "border-fuchsia-300/30 bg-fuchsia-300/10 text-fuchsia-100",
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex h-full flex-col rounded-lg border border-white/10 bg-slate-900/70 p-5 shadow-xl shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-slate-900/90">
      <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex items-start justify-between gap-4">
        <h4 className="text-xl font-semibold tracking-tight text-white">
          {project.title}
        </h4>
        <span
          className={`shrink-0 rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${statusStyles[project.status]}`}
        >
          {project.status}
        </span>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-300">{project.description}</p>

      <div className="mt-5">
        <h5 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          What I designed
        </h5>
        <ul className="mt-3 space-y-2">
          {project.designed.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-5 text-slate-300">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
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
            Live Demo
          </a>
        ) : null}
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-white/20 hover:bg-white/10"
          >
            GitHub
          </a>
        ) : null}
      </div>
    </article>
  );
}
