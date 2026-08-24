import type { LocalizedProject } from "@/types/portfolio";

export const kuryePatronuCopy: Record<"en" | "de", LocalizedProject> = {
  en: {
    title: "Kurye Patronu",
    eyebrow: "Mobile progression game",
    hook: "A portrait-first courier life and career progression game built around an offline fictional city, delivery work, needs, purchases, and visible lifestyle growth.",
    role: "Game direction, systems design, and Godot implementation",
    contributions: [
      "Built a playable courier progression loop from walking deliveries through bikes, e-bikes, licenses, higher-tier platforms, equipment, debt, achievements, and home upgrades.",
      "Implemented a 63-junction offline city with route alternatives, traffic and demand effects, live 3D courier navigation, POI-based pickup/drop-off chains, and transport-specific movement rules.",
      "Added a unified world clock, needs and home interactions, persistent applications and progression, contextual encounter decisions, onboarding guidance, and save-schema migration through version 8.",
    ],
    note: "Current status: playable mobile vertical slice in active development. The private repository is not presented as a finished commercial release; independent-company progression and final production assets remain future scope.",
  },
  de: {
    title: "Kurye Patronu",
    eyebrow: "Mobiles Progressionsspiel",
    hook: "Ein für Hochformat entwickeltes Kurier-Lebens- und Karriere-Progressionsspiel mit einer offline simulierten Stadt, Lieferarbeit, Bedürfnissen, Käufen und sichtbarer Lebensentwicklung.",
    role: "Game Direction, Systemdesign und Godot-Umsetzung",
    contributions: [
      "Eine spielbare Kurier-Progression von Lieferungen zu Fuß über Fahrräder, E-Bikes, Führerscheine, höherwertige Plattformen, Ausrüstung, Schulden, Erfolge und Wohnungs-Upgrades aufgebaut.",
      "Eine Offline-Stadt mit 63 Kreuzungen, echten Routenalternativen, Verkehrs- und Nachfrageeffekten, Live-3D-Kuriernavigation, POI-basierten Abhol-/Lieferketten und verkehrsmittelspezifischen Bewegungsregeln umgesetzt.",
      "Eine einheitliche Weltzeit, Bedürfnisse und Wohnungsinteraktionen, persistente Bewerbungen und Progression, kontextbezogene Entscheidungen, Onboarding sowie Save-Schema-Migrationen bis Version 8 ergänzt.",
    ],
    note: "Aktueller Stand: spielbarer mobiler Vertical Slice in aktiver Entwicklung. Das private Repository wird nicht als fertiges kommerzielles Release dargestellt; eigene Firmenprogression und finale Produktionsassets bleiben zukünftiger Umfang.",
  },
};
