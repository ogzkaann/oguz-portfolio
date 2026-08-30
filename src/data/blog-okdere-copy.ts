import type { LocalizedProject } from "@/types/portfolio";

export const blogOkdereCopy: Record<"en" | "de", LocalizedProject> = {
  en: {
    title: "blog.okdere",
    eyebrow: "Editorial platform migration",
    hook: "A standalone editorial application designed to replace a long-running Blogger site without breaking historical URLs or requiring a risky one-shot cutover.",
    role: "Product architecture, migration engineering, and full-stack implementation",
    contributions: [
      "Built a deterministic Blogger import and exact legacy-path preservation layer so historical articles remain addressable during and after migration.",
      "Designed Supabase Postgres/Auth/Storage with RLS, server-only admin authorization, moderated comments, rate limiting, and a private TipTap authoring workflow.",
      "Added resilient snapshot fallback, noindex preview boundaries, production-analytics isolation, trusted server-generated story cards, URL validation, tests, build checks, and operational cutover documentation.",
    ],
    note: "Current status: pre-production migration build. Production DNS cutover and Supabase configuration remain explicit, separately controlled steps rather than completed claims.",
  },
  de: {
    title: "blog.okdere",
    eyebrow: "Migration einer Editorial-Plattform",
    hook: "Eine eigenständige Editorial-Anwendung, die eine langjährig betriebene Blogger-Seite ersetzen soll, ohne historische URLs zu brechen oder einen riskanten Komplett-Cutover zu erzwingen.",
    role: "Produktarchitektur, Migrationsentwicklung und Full-Stack-Umsetzung",
    contributions: [
      "Einen deterministischen Blogger-Import mit exakter Beibehaltung historischer Pfade umgesetzt, damit bestehende Artikel während und nach der Migration erreichbar bleiben.",
      "Supabase Postgres/Auth/Storage mit RLS, serverseitiger Admin-Autorisierung, moderierten Kommentaren, Rate Limiting und privatem TipTap-Authoring entworfen.",
      "Robusten Snapshot-Fallback, Noindex-Grenzen für Previews, getrennte Production-Analytics, serverseitig erzeugte Story Cards, URL-Validierung, Tests, Build-Checks und dokumentierte Cutover-Abläufe ergänzt.",
    ],
    note: "Aktueller Stand: Pre-Production-Migrationsbuild. Produktions-DNS-Cutover und Supabase-Konfiguration bleiben bewusst getrennte, noch nicht als abgeschlossen dargestellte Schritte.",
  },
};
