export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Angular", "TypeScript", "Tailwind"],
  },
  {
    title: "Backend/Data",
    skills: ["Java", "Node.js", "REST", "SQL", "PostgreSQL", "Oracle"],
  },
  {
    title: "AI/Product",
    skills: ["RAG", "OCR", "BYOK AI", "Prompt/system design", "Document extraction"],
  },
  {
    title: "Tools",
    skills: ["Git", "Vercel", "GitHub", "Figma/design sense", "Unity"],
  },
  {
    title: "Domain",
    skills: ["Biomedical Engineering", "Hospital software", "MedTech interest"],
  },
];

export const productThinking = [
  "I model vague real-world problems into explicit data structures, rules, and review flows.",
  "I constrain AI instead of letting it hallucinate.",
  "I separate source retrieval, user data, AI explanation, and final user decision.",
  "I prefer local-first and BYOK patterns when user documents are sensitive.",
  "I build MVPs that are demoable, deployable, and explainable.",
];
