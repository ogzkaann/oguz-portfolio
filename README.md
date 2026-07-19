# Oguz Kaan Dere — Engineering & Games

Personal portfolio for [Oguz Kaan Dere](https://okdere.com), presenting one body of work through two distinct disciplines: precise software engineering and atmospheric interactive games.

## Portfolio Architecture

- **Work** — a split Engineering/Games introduction and selected project overview
- **Engineering** — LedgerFlow, Weather with Shaders, context-api-but-it-scales and selected AI-assisted product work
- **Games** — Night Soup, Swarm Script, Gladiator Arena and Schleimer
- **About** — background, product principles, experience and technical skills
- **EN/DE** — locale-aware routes and professional English/German content with `next-intl`

## Screenshots

![Split Engineering and Games homepage](docs/assets/home.png)

![Games project presentation](docs/assets/games.png)

## Stack

- Next.js App Router
- React and TypeScript
- Tailwind CSS with a focused global visual system
- next-intl
- Vercel

Project facts and links are centralized in `src/data/projects.ts`; localized editorial content lives in `messages/en.json` and `messages/de.json`.

## Run Locally

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

The site expects `public/profile-oguz.jpg` and `public/Oguz_Kaan_Dere_CV.pdf`. Production metadata, canonicals, sitemap and robots target `https://okdere.com`.

## Deployment

Vercel uses npm and the standard Next.js production build configured in `vercel.json`.
