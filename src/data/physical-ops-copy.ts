import type { LocalizedProject } from "@/types/portfolio";

export const physicalOpsCopy: Record<"en" | "de", LocalizedProject> = {
  en: {
    title: "Physical Ops Simulator",
    eyebrow: "3D operations simulation",
    hook: "A browser-based discrete-event simulation platform for modeling physical service operations, starting with cafés and quick-service restaurants.",
    role: "System design, simulation engineering, and 3D product development",
    contributions: [
      "Built an editable 3D venue model with persisted geometry, operational stations, recipes, workforce constraints, and versioned project schemas.",
      "Implemented deterministic SimPy customer, queue, staff, and spatial-movement simulation behind FastAPI contracts while keeping rendering non-authoritative.",
      "Added obstacle-aware pathfinding, congestion and travel metrics, reusable café fixtures, end-to-end verification, and frontend/backend quality gates.",
    ],
    note: "Current status: Phase 7 complete. Live 3D simulation visualization, comparative heatmaps, and automated optimization remain roadmap work rather than implemented claims.",
  },
  de: {
    title: "Physical Ops Simulator",
    eyebrow: "3D-Betriebssimulation",
    hook: "Eine browserbasierte Discrete-Event-Simulationsplattform für physische Serviceabläufe, zunächst für Cafés und Quick-Service-Restaurants.",
    role: "Systemdesign, Simulationsentwicklung und 3D-Produktentwicklung",
    contributions: [
      "Ein editierbares 3D-Betriebsmodell mit persistierter Geometrie, operativen Stationen, Rezepten, Personalanforderungen und versionierten Projektschemata aufgebaut.",
      "Deterministische SimPy-Simulation für Kunden, Warteschlangen, Personal und räumliche Bewegung hinter FastAPI-Verträgen umgesetzt, während das Rendering bewusst nicht autoritativ bleibt.",
      "Hindernisbewusstes Pathfinding, Stau- und Laufwegmetriken, wiederverwendbare Café-Fixtures, End-to-End-Verifikation sowie Frontend-/Backend-Quality-Gates ergänzt.",
    ],
    note: "Aktueller Stand: Phase 7 abgeschlossen. Live-3D-Simulationsvisualisierung, vergleichende Heatmaps und automatisierte Optimierung bleiben Roadmap-Themen und werden nicht als bereits umgesetzt dargestellt.",
  },
};
