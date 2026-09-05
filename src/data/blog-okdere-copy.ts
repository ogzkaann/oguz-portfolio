import type { LocalizedProject } from "@/types/portfolio";

export const blogOkdereCopy: Record<"en" | "de", LocalizedProject> = {
  en: {
    title: "blog.okdere",
    eyebrow: "Editorial platform migration",
    hook: "A standalone editorial application that replaced a long-running Blogger site while preserving historical URLs and search continuity.",
    role: "Product architecture, migration engineering, and full-stack implementation",
    contributions: [
      "Built a deterministic Blogger import and exact legacy-path preservation layer so historical articles remain addressable during and after migration.",
      "Designed Supabase Postgres/Auth/Storage with RLS, server-only admin authorization, moderated comments, guarded first-party read tracking, per-article reader statistics, editorial discussion prompts, and a private TipTap authoring workflow.",
      "Added resilient snapshot fallback, noindex preview boundaries, tag canonical/noindex rules, sitemap freshness based on real post updates, production-analytics isolation, trusted server-generated story cards, URL validation, tests, build checks, and operational cutover documentation.",
    ],
    note: "Current status: live production replacement at blog.okdere.com. The cutover is complete, all 69 historical published URLs have been validated, and the public showcase intentionally exposes only high-level architecture and screenshots rather than production implementation or configuration.",
  },
  de: {
    title: "blog.okdere",
    eyebrow: "Migration einer Editorial-Plattform",
    hook: "Eine eigenständige Editorial-Anwendung, die eine langjährig betriebene Blogger-Seite ersetzt hat und dabei historische URLs sowie die Suchkontinuität bewahrt.",
    role: "Produktarchitektur, Migrationsentwicklung und Full-Stack-Umsetzung",
    contributions: [
      "Einen deterministischen Blogger-Import mit exakter Beibehaltung historischer Pfade umgesetzt, damit bestehende Artikel während und nach der Migration erreichbar bleiben.",
      "Supabase Postgres/Auth/Storage mit RLS, serverseitiger Admin-Autorisierung, moderierten Kommentaren, geschütztem First-Party-Lesetracking, artikelbezogenen Leserstatistiken, redaktionellen Diskussionsimpulsen und privatem TipTap-Authoring entworfen.",
      "Robusten Snapshot-Fallback, Noindex-Grenzen für Previews, Canonical-/Noindex-Regeln für Tags, Sitemap-Aktualität anhand echter Beitragsänderungen, getrennte Production-Analytics, serverseitig erzeugte Story Cards, URL-Validierung, Tests, Build-Checks und dokumentierte Cutover-Abläufe ergänzt.",
    ],
    note: "Aktueller Stand: produktiv live unter blog.okdere.com. Der Cutover ist abgeschlossen, alle 69 historischen veröffentlichten URLs wurden validiert, und das öffentliche Showcase zeigt bewusst nur Architektur auf hoher Ebene und Screenshots statt Produktionsimplementierung oder -konfiguration.",
  },
};
