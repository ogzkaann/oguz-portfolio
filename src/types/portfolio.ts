export type ProjectWorld = "engineering" | "games";

export type ProjectStatus =
  | "live"
  | "documented"
  | "preProduction"
  | "prototype";

export type ProjectId =
  | "ledgerflow"
  | "weatherShaders"
  | "contextApi"
  | "germanyPathFinder"
  | "admissionFitChecker"
  | "nightSoup"
  | "swarmScript"
  | "gladiatorArena"
  | "schleimer";

export type ProjectLinkKind =
  | "live"
  | "github"
  | "architecture"
  | "overview"
  | "devlog";

export interface ProjectLink {
  kind: ProjectLinkKind;
  href: string;
}

export interface ProjectMedia {
  src: string;
  position?: string;
}

export interface ProjectDefinition {
  id: ProjectId;
  world: ProjectWorld;
  status: ProjectStatus;
  featured?: boolean;
  media?: ProjectMedia;
  stack: string[];
  links: ProjectLink[];
}

export interface LocalizedProject {
  title: string;
  eyebrow: string;
  hook: string;
  role: string;
  contributions: string[];
  mediaAlt?: string;
  note?: string;
}

export interface Experience {
  title: string;
  company: string;
  date: string;
  responsibilities: string[];
  technologies: string[];
  note?: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}
