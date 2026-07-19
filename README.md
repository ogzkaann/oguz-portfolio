# Oguz Kaan Dere Portfolio

Personal portfolio for a full-stack engineer working across Java/Spring backend systems, performance-conscious React architecture, resilient data flows, controlled AI products, and deterministic browser-based experiences.

**Live site:** https://okdere.com

## Featured engineering projects

- **LedgerFlow** — Java microservice architecture, PostgreSQL, immutable ledger, pessimistic locking, reconciliation, OpenAPI, integration testing, and ADRs.
- **context-api-but-it-scales** — measured React rendering behavior, `useSyncExternalStore`, selectors, persistence, cross-tab synchronization, tests, and CI.
- **Yet Another Weather App — but with shaders** — typed weather pipeline, stale-while-revalidate cache, race protection, WebGL2/GLSL rendering, reduced motion, and GPU lifecycle cleanup.
- **Swarm Script** — programmable swarm roguelite with a custom DSL, safe interpreter, deterministic worker simulation, Phaser, and Monaco Editor.
- **Germany Path Finder** — local-first, source-bound RAG decision support with citations and uncertainty handling.
- **Admission Fit Checker** — defensive PDF/OCR extraction, typed validation, human review, and explainable admission-fit analysis.

## Site structure

- Recruiter-focused project-first content flow
- English and German localization through `next-intl`
- Responsive project and experience cards
- Honest project statuses and direct live-demo/GitHub links
- Downloadable CV, LinkedIn, and GitHub access
- Minimal dark visual system with keyboard-accessible navigation

## Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- next-intl
- Vercel

## Run locally

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

## Assets

The site expects:

- `public/profile-oguz.jpg`
- `public/Oguz_Kaan_Dere_CV.pdf`

## Deployment

The `master` branch is connected to Vercel and deploys through the standard Next.js build flow. Production is served at `https://okdere.com`; legacy Vercel hostnames permanently redirect to the matching path on the canonical domain.
