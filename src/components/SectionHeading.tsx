interface SectionHeadingProps {
  title: string;
  eyebrow?: string;
}

export default function SectionHeading({ title, eyebrow }: SectionHeadingProps) {
  return (
    <div className="relative mb-8">
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300/80">
          {eyebrow}
        </p>
      ) : null}
      <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h3>
      <div className="absolute -bottom-3 left-0 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500" />
    </div>
  );
}
