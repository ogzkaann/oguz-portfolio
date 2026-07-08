export type ProjectStatus = "Live" | "In progress" | "Concept" | "Portfolio";

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

export const projects: Project[] = [
  {
    title: "Germany Path Finder",
    status: "Live",
    liveUrl: "https://germany-path-finder.vercel.app/",
    githubUrl: "https://github.com/ogzkaann/germany-path-finder",
    description:
      "Local-first RAG decision-support tool for Germany residence and career path planning using owner-curated official PDFs, BYOK AI, citations, and conservative source-bound answers.",
    highlights: [
      "Local-first RAG",
      "Official source manifest",
      "PDF ingestion",
      "BYOK Gemini/OpenAI-compatible AI",
      "Citations and uncertainty handling",
      "No legal-advice overclaim",
    ],
    designed: [
      "Source-bound answer flow",
      "Conservative path comparison",
      "Private document and API-key handling",
    ],
    tech: [
      "Vite",
      "React",
      "TypeScript",
      "Tailwind",
      "IndexedDB/Dexie",
      "pdfjs",
      "RAG",
      "BYOK AI",
      "Vercel",
    ],
  },
  {
    title: "Admission Fit Checker",
    status: "Live",
    liveUrl: "https://admission-fit-checker.vercel.app/",
    githubUrl: "https://github.com/ogzkaann/admission-fit-checker",
    description:
      "AI-assisted admission fit checker that extracts academic profiles from PDFs/images, uses OCR, compares profile data with university program requirements, and returns conservative fit verdicts.",
    highlights: [
      "Transcript/profile extraction",
      "OCR with Tesseract.js",
      "Academic fit engine",
      "Program library",
      "BYOK AI",
      "Local-first storage",
    ],
    designed: [
      "PDF/image extraction workflow",
      "Fit verdict model",
      "Reviewable profile fields before AI explanation",
    ],
    tech: [
      "Vite",
      "React",
      "TypeScript",
      "Tailwind",
      "IndexedDB/Dexie",
      "pdfjs",
      "Tesseract.js",
      "Zod",
      "Vercel",
    ],
  },
  {
    title: "Grup Kartı / WhatsApp Group Analyzer",
    status: "In progress",
    description:
      "Privacy-aware WhatsApp group analyzer that creates a humorous group report without quoting private message content.",
    highlights: [
      "Behavior-only analysis",
      "Privacy-first rules",
      "No private content quotes",
      "Fun social sharing format",
    ],
    designed: [
      "Local parsing rules",
      "Privacy boundaries for summaries",
      "Shareable report structure",
    ],
    tech: ["React", "TypeScript", "Local parsing", "AI-assisted summarization"],
  },
  {
    title: "Local Company Document Assistant",
    status: "Concept",
    description:
      "Local-first document assistant for small companies that answers questions only from company PDFs, handbooks, and catalogs with a privacy-first RAG approach.",
    highlights: [
      "Local/private document QA",
      "Source citations",
      "No cloud database",
      "SMB-focused use case",
    ],
    designed: [
      "Document-only answer constraints",
      "Small-business onboarding path",
      "Source citation and refusal behavior",
    ],
    tech: ["React/TypeScript", "RAG", "Local LLM/Ollama planned", "pdfjs"],
  },
  {
    title: "Beni İşe Al - AI Persuasion Game",
    status: "Concept",
    description:
      "A funny AI dialogue game where the player tries to convince a grumpy AI boss to hire them through suggested/editable responses and a persuasion meter.",
    highlights: [
      "AI dialogue game loop",
      "Controlled choice + editable answer design",
      "Persuasion score",
      "Multiple endings",
    ],
    designed: [
      "Game-state loop",
      "Scoring and ending model",
      "Editable response interaction",
    ],
    tech: ["React", "TypeScript", "Lightweight AI API", "Game-state engine"],
  },
  {
    title: "Portfolio Website",
    status: "Portfolio",
    liveUrl: "https://oguzdere.vercel.app/",
    githubUrl: "https://github.com/ogzkaann/oguz-portfolio",
    description:
      "Personal portfolio website presenting my software background, AI-assisted product projects, and selected work.",
    highlights: [
      "Sticky personal intro panel",
      "Compact long-form layout",
      "Project status system",
      "Dark visual identity",
    ],
    designed: [
      "Content architecture",
      "Reusable portfolio data model",
      "Responsive project and experience cards",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
  },
];
