export interface Experience {
  title: string;
  company: string;
  date: string;
  responsibilities: string[];
  technologies: string[];
  note?: string;
}

export const experiences: Experience[] = [
  {
    title: "Independent AI Product Builder / Portfolio Sprint",
    company: "Self-directed",
    date: "2025-Present",
    responsibilities: [
      "Building local-first AI-assisted portfolio products with React/TypeScript, RAG, OCR, BYOK AI, PDF/document extraction, and Vercel/GitHub deployment.",
      "Focused on practical decision-support tools: immigration/career path analysis, admission fit checking, private document assistants, and AI-driven mini-games.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Next.js",
      "Tailwind",
      "IndexedDB",
      "pdfjs",
      "Tesseract.js",
      "RAG",
      "BYOK AI",
      "Vercel",
    ],
    note:
      "During my transition to Germany, I focused on German language development, job-market alignment, and building focused AI-assisted portfolio products.",
  },
  {
    title: "Full Stack / Frontend Developer",
    company: "Ekinoks Software",
    date: "Dec 2022-Dec 2024",
    responsibilities: [
      "Built enterprise Angular/TypeScript frontend features across complex UI modules, forms, state, and API integration.",
      "Worked with a professional software team on maintainable frontend delivery, bug fixing, and iterative product improvements.",
      "Contributed to interface quality in data-heavy business workflows where clarity and reliability mattered.",
    ],
    technologies: [
      "Angular",
      "TypeScript",
      "RxJS",
      "Kendo UI",
      "JavaScript",
      "REST",
      "Git",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Fonet Software",
    date: "May 2021-Nov 2022",
    responsibilities: [
      "Developed hospital information management system features in a database-backed enterprise environment.",
      "Worked across Java/JavaScript full-stack tasks, service development, bug fixing, and production-oriented maintenance.",
      "Gained practical experience with healthcare software workflows and reliability expectations.",
    ],
    technologies: ["Java", "JavaScript", "ExtJS", "SQL/Oracle", "Git"],
  },
  {
    title: "Game Developer / Incubation",
    company: "ATOM / METU",
    date: "2019-2020",
    responsibilities: [
      "Built Unity prototypes and gameplay systems through game jams and incubation work.",
      "Explored visual design, interaction loops, and lightweight production pipelines for playable concepts.",
    ],
    technologies: ["Unity", "C#", "Blender", "Photoshop", "Git"],
  },
];
