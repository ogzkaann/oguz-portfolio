import type { ProjectDefinition, ProjectId } from "@/types/portfolio";

export const projects: Record<ProjectId, ProjectDefinition> = {
  ledgerflow: {
    id: "ledgerflow",
    world: "engineering",
    status: "completed",
    featured: true,
    media: { src: "/media/ledgerflow-architecture.svg" },
    stack: [
      "Java 25",
      "Spring Boot",
      "Kafka",
      "PostgreSQL",
      "Redis",
      "Keycloak",
      "React",
      "Playwright",
    ],
    links: [
      {
        kind: "architecture",
        href: "https://github.com/ogzkaann/ledgerflow-banking-platform/blob/main/docs/architecture/system-design.md",
      },
      {
        kind: "github",
        href: "https://github.com/ogzkaann/ledgerflow-banking-platform",
      },
    ],
  },
  tipTracker: {
    id: "tipTracker",
    world: "engineering",
    status: "playStorePrep",
    featured: true,
    media: { src: "/media/tip-tracker.svg" },
    stack: [
      "Kotlin",
      "Jetpack Compose",
      "Room",
      "DataStore",
      "Hilt",
      "Coroutines",
      "Material 3",
    ],
    links: [
      {
        kind: "overview",
        href: "https://github.com/ogzkaann/tip-tracker-showcase",
      },
    ],
  },
  physicalOps: {
    id: "physicalOps",
    world: "engineering",
    status: "documented",
    stack: [
      "React",
      "TypeScript",
      "Three.js",
      "React Three Fiber",
      "Python",
      "FastAPI",
      "SimPy",
      "Playwright",
    ],
    links: [
      {
        kind: "architecture",
        href: "https://github.com/ogzkaann/physical-ops-simulator/blob/main/docs/architecture/ARCHITECTURE.md",
      },
      {
        kind: "github",
        href: "https://github.com/ogzkaann/physical-ops-simulator",
      },
    ],
  },
  weatherShaders: {
    id: "weatherShaders",
    world: "engineering",
    status: "live",
    media: { src: "/media/weather-shaders.png" },
    stack: ["React", "TypeScript", "WebGL2", "GLSL", "Open-Meteo"],
    links: [
      {
        kind: "live",
        href: "https://ogzkaann.github.io/yet-another-weather-app-but-with-shaders/",
      },
      {
        kind: "github",
        href: "https://github.com/ogzkaann/yet-another-weather-app-but-with-shaders",
      },
    ],
  },
  contextApi: {
    id: "contextApi",
    world: "engineering",
    status: "live",
    media: { src: "/media/context-api-scales.png" },
    stack: ["React", "TypeScript", "Vite", "Vitest", "useSyncExternalStore"],
    links: [
      {
        kind: "live",
        href: "https://ogzkaann.github.io/context-api-but-it-scales/",
      },
      {
        kind: "github",
        href: "https://github.com/ogzkaann/context-api-but-it-scales",
      },
    ],
  },
  germanyPathFinder: {
    id: "germanyPathFinder",
    world: "engineering",
    status: "live",
    media: { src: "/media/germany-path-finder.png" },
    stack: ["React", "TypeScript", "RAG", "IndexedDB", "pdfjs", "BYOK AI"],
    links: [
      { kind: "live", href: "https://germany-path-finder.vercel.app/" },
      {
        kind: "github",
        href: "https://github.com/ogzkaann/germany-path-finder",
      },
    ],
  },
  admissionFitChecker: {
    id: "admissionFitChecker",
    world: "engineering",
    status: "live",
    media: { src: "/media/admission-fit-checker.png" },
    stack: ["React", "TypeScript", "OCR", "Tesseract.js", "pdfjs", "Zod"],
    links: [
      { kind: "live", href: "https://admission-fit-checker.vercel.app/" },
      {
        kind: "github",
        href: "https://github.com/ogzkaann/admission-fit-checker",
      },
    ],
  },
  nightSoup: {
    id: "nightSoup",
    world: "games",
    status: "verticalSlice",
    featured: true,
    media: {
      src: "/media/night-soup.png",
      position: "46% center",
    },
    stack: [
      "Godot 4.7.1",
      "GDScript",
      "Narrative systems",
      "Save architecture",
      "Headless QA",
    ],
    links: [],
  },
  kuryePatronu: {
    id: "kuryePatronu",
    world: "games",
    status: "verticalSlice",
    stack: [
      "Godot 4.7",
      "GDScript",
      "3D SubViewport",
      "Offline graph routing",
      "Data-driven progression",
    ],
    links: [],
  },
  swarmScript: {
    id: "swarmScript",
    world: "games",
    status: "live",
    featured: true,
    media: { src: "/media/swarm-script.png" },
    stack: ["React", "TypeScript", "Phaser", "Web Workers", "Playwright"],
    links: [
      { kind: "live", href: "https://swarm-script.vercel.app/play" },
      {
        kind: "architecture",
        href: "https://swarm-script.vercel.app/architecture",
      },
      { kind: "github", href: "https://github.com/ogzkaann/swarm-script" },
    ],
  },
  gladiatorArena: {
    id: "gladiatorArena",
    world: "games",
    status: "prototype",
    stack: ["Unity 6", "C#", "JSON"],
    links: [],
  },
  schleimer: {
    id: "schleimer",
    world: "games",
    status: "live",
    media: { src: "/media/schleimer.png" },
    stack: ["React", "TypeScript", "Zustand", "Gemini API", "BYOK AI"],
    links: [
      { kind: "live", href: "https://schleimer.vercel.app/" },
      { kind: "github", href: "https://github.com/ogzkaann/schleimer" },
    ],
  },
};

export const engineeringProjectIds: ProjectId[] = [
  "ledgerflow",
  "tipTracker",
  "physicalOps",
  "weatherShaders",
  "contextApi",
  "germanyPathFinder",
  "admissionFitChecker",
];

export const gameProjectIds: ProjectId[] = [
  "nightSoup",
  "kuryePatronu",
  "swarmScript",
  "gladiatorArena",
  "schleimer",
];
