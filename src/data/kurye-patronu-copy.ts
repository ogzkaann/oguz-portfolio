import type { LocalizedProject } from "@/types/portfolio";

export const kuryePatronuCopy: Record<"en" | "de", LocalizedProject> = {
  en: {
    title: "Kurye Patronu",
    eyebrow: "Mobile progression game",
    hook: "A portrait-first courier life and career progression game built around an offline fictional city, delivery work, needs, purchases, and visible lifestyle growth.",
    role: "Game direction, systems design, and Godot implementation",
    contributions: [
      "Built a playable courier progression loop from walking deliveries through physically represented bikes and powered vehicles, licenses, higher-tier platforms, equipment, debt, achievements, and home upgrades.",
      "Expanded the offline city into a unified playable delivery space with route alternatives, manual on-foot 3D navigation, POI-based pickup/drop-off chains, multi-package carrying and routing, and timed delivery-performance pressure.",
      "Integrated the world clock, needs and home interactions, persistent applications and progression, contextual encounters, onboarding, versioned save migration, Android device export, and automated debug-APK CI.",
    ],
    note: "Current status: playable mobile vertical slice in active development with Android device builds verified through CI. The private repository is not presented as a finished commercial release; independent-company progression and final production assets remain future scope.",
  },
  de: {
    title: "Kurye Patronu",
    eyebrow: "Mobiles Progressionsspiel",
    hook: "Ein für Hochformat entwickeltes Kurier-Lebens- und Karriere-Progressionsspiel mit einer offline simulierten Stadt, Lieferarbeit, Bedürfnissen, Käufen und sichtbarer Lebensentwicklung.",
    role: "Game Direction, Systemdesign und Godot-Umsetzung",
    contributions: [
      "Eine spielbare Kurier-Progression von Lieferungen zu Fuß über physisch dargestellte Fahrräder und motorisierte Fahrzeuge, Führerscheine, höherwertige Plattformen, Ausrüstung, Schulden, Erfolge und Wohnungs-Upgrades aufgebaut.",
      "Die Offline-Stadt zu einem zusammenhängenden spielbaren Lieferraum mit Routenalternativen, manueller 3D-Navigation zu Fuß, POI-basierten Abhol-/Lieferketten, Mehrpaket-Transport und zeitbasiertem Liefer-Performance-Druck erweitert.",
      "Weltzeit, Bedürfnisse und Wohnungsinteraktionen, persistente Bewerbungen und Progression, kontextbezogene Entscheidungen, Onboarding, versionierte Save-Migrationen, Android-Geräteexport und automatisierte Debug-APK-CI integriert.",
    ],
    note: "Aktueller Stand: spielbarer mobiler Vertical Slice in aktiver Entwicklung; Android-Geräte-Builds werden über CI verifiziert. Das private Repository wird nicht als fertiges kommerzielles Release dargestellt; eigene Firmenprogression und finale Produktionsassets bleiben zukünftiger Umfang.",
  },
};
