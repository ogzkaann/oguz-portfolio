export type ProjectStatus = "live" | "inProgress" | "concept" | "portfolio";

export interface NavigationItem {
  id: string;
  label: string;
}

export interface Experience {
  title: string;
  company: string;
  date: string;
  responsibilities: string[];
  technologies: string[];
  note?: string;
}

export interface Project {
  title: string;
  status: ProjectStatus;
  description: string;
  liveUrl?: string;
  githubUrl?: string;
  highlights: string[];
  designed: string[];
  tech: string[];
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface PortfolioMessages {
  Metadata: {
    title: string;
    description: string;
    openGraphDescription: string;
  };
  Home: {
    hero: {
      title: string;
      subtitle: string;
      intro: string;
      transitionNote: string;
    };
    buttons: {
      viewProjects: string;
      downloadCv: string;
      github: string;
      linkedIn: string;
      liveDemo: string;
    };
    navigation: NavigationItem[];
    sections: {
      about: {
        title: string;
        ariaLabel: string;
        paragraphs: string[];
      };
      productThinking: {
        title: string;
        ariaLabel: string;
        items: string[];
      };
      experience: {
        title: string;
        ariaLabel: string;
      };
      projects: {
        title: string;
        ariaLabel: string;
      };
      skills: {
        title: string;
        ariaLabel: string;
      };
    };
    projectCard: {
      designedHeading: string;
    };
    statuses: Record<ProjectStatus, string>;
    experiences: Experience[];
    projects: Project[];
    skillGroups: SkillGroup[];
    footer: string;
  };
}
