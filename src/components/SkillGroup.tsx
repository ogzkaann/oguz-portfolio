import type { SkillGroup as SkillGroupType } from "@/types/portfolio";

interface SkillGroupProps {
  group: SkillGroupType;
}

export default function SkillGroup({ group }: SkillGroupProps) {
  return (
    <div className="rounded-lg border border-white/10 bg-slate-900/60 p-5 shadow-lg shadow-black/20 backdrop-blur">
      <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
        {group.title}
      </h4>
      <div className="mt-4 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1.5 text-xs font-medium text-slate-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
