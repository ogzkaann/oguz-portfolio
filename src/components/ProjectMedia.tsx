import Image from "next/image";

interface ProjectMediaProps {
  src: string;
  alt: string;
  position?: string;
  priority?: boolean;
  className?: string;
}

export function ProjectMedia({
  src,
  alt,
  position,
  priority = false,
  className = "",
}: ProjectMediaProps) {
  return (
    <div className={`project-media ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 50vw, 100vw"
        style={{ objectPosition: position }}
      />
    </div>
  );
}
