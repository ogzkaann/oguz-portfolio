# Oguz Kaan Dere Portfolio

Personal portfolio website for Oguz Kaan Dere, focused on full-stack software experience, biomedical engineering background, and AI-assisted product projects.

Live demo: https://oguzdere.vercel.app/

## What This Site Is

This is a compact, dark, long-form portfolio built with a sticky intro panel and project-focused content. It presents:

- Professional software experience across enterprise frontend, hospital software, and game prototypes
- Current AI-native product direction: local-first apps, RAG, OCR, BYOK AI, and document workflows
- Selected portfolio projects with honest status badges: `Live`, `In progress`, `Concept`, and `Portfolio`
- Product thinking principles behind the work

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- React
- Vercel deployment

## Content Structure

Portfolio content is separated from the page component:

- `src/data/projects.ts` - project cards, status badges, links, highlights, tech stacks
- `src/data/experience.ts` - professional timeline
- `src/data/skills.ts` - skill clusters and product-thinking bullets
- `src/components/ProjectCard.tsx` - reusable project presentation
- `src/components/ExperienceCard.tsx` - reusable timeline card
- `src/components/SkillGroup.tsx` - compact skill groups
- `src/components/SectionHeading.tsx` - consistent section titles

## Adding Or Editing Projects

Edit `src/data/projects.ts` and add a project object:

```ts
{
  title: "Project Name",
  status: "Live",
  liveUrl: "https://example.com",
  githubUrl: "https://github.com/example/repo",
  description: "Short, honest product description.",
  highlights: ["Local-first", "Citations", "BYOK AI"],
  designed: ["What I designed or modeled"],
  tech: ["React", "TypeScript", "Tailwind"]
}
```

Leave `liveUrl` or `githubUrl` out when a project does not have that link. The buttons are hidden automatically.

## Adding A Profile Photo

Add a square or portrait image at:

```txt
public/profile-oguz.jpg
```

The site will use it automatically. If the file is missing, it shows an initials avatar fallback.

## Running Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production Build

```bash
npm run build
```

## Deployment

The project is ready for Vercel. Connect the GitHub repository, keep the default Next.js build settings, and deploy.

## Future Improvements

- Add a real profile photo and Open Graph image
- Add richer project screenshots for live products
- Add a concise CV/contact section or contact form
- Add optional case-study pages for the two live AI-assisted projects
