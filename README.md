# Oguz Kaan Dere — Engineering & Games

Personal portfolio for [Oguz Kaan Dere](https://okdere.com), presenting software engineering, independent products, and technical game work through one bilingual site.

## Current portfolio story

- **LedgerFlow** — completed Java microservice case study with Kafka workflows, PostgreSQL service ownership, Redis, Keycloak, observability, and a React operations console
- **Tip Tracker** — private native Android product being prepared for Google Play
- **Frontend systems** — measured React architecture and WebGL-driven product work
- **AI-assisted products** — local-first RAG, OCR, document extraction, and BYOK workflows
- **Games** — Night Soup, Swarm Script, Gladiator Arena, and Schleimer
- **EN/DE** — locale-aware routes and professional English/German editorial content with `next-intl`

## Site structure

- **Work** — split Engineering/Games introduction and selected project overview
- **Engineering** — backend platforms, Android products, frontend architecture, and controlled AI workflows
- **Games** — narrative systems, deterministic simulations, and playable prototypes
- **About** — professional background, engineering principles, experience, and current working set

## Screenshots

![Split Engineering and Games homepage](docs/assets/home.png)

![Games project presentation](docs/assets/games.png)

## Stack

- Next.js App Router
- React and TypeScript
- Tailwind CSS with a focused global visual system
- `next-intl` for English and German content
- Vercel deployment

Project facts, status, stack, media, and links are centralized in `src/data/projects.ts`. Localized editorial content lives in `messages/en.json` and `messages/de.json`.

## Run locally

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run lint
npm run typecheck
npm run build
```

The site expects `public/profile-oguz.jpg` and `public/Oguz_Kaan_Dere_CV.pdf`. Production metadata, canonicals, sitemap, and robots target `https://okdere.com`.

## Deployment

Vercel uses npm and the standard Next.js production build configured in `vercel.json`.
