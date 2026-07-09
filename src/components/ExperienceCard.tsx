import type { Experience } from "@/types/portfolio";

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="group relative rounded-lg border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-black/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-300/30">
      <div className="absolute left-0 top-0 h-full w-1 rounded-l-lg bg-gradient-to-b from-cyan-400 via-blue-500 to-fuchsia-500" />

      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h4 className="text-xl font-semibold tracking-tight text-white">
            {experience.title}
          </h4>
          <p className="mt-1 text-base font-medium text-cyan-200">
            {experience.company}
          </p>
        </div>
        <span className="w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
          {experience.date}
        </span>
      </div>

      <ul className="mt-5 space-y-3">
        {experience.responsibilities.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {experience.note ? (
        <p className="mt-5 rounded-lg border border-cyan-300/15 bg-cyan-300/5 p-4 text-sm leading-6 text-cyan-50/90">
          {experience.note}
        </p>
      ) : null}

      <div className="mt-5 flex flex-wrap gap-2">
        {experience.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1.5 text-xs font-medium text-slate-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
