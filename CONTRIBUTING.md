# Contributing

This repository contains the bilingual portfolio published at [okdere.com](https://okdere.com). Changes should keep the site factual, accessible, responsive, and consistent across English and German routes.

## Local setup

The project currently targets Node.js 24.

```bash
npm install
npm run dev
```

Before committing, run:

```bash
npm run lint
npm run typecheck
npm run build
```

Do not report a check as passing when it was skipped or unavailable.

## Project content

Project facts, status, technology stacks, media paths, and links are centralized in:

```text
src/data/projects.ts
```

When updating a project:

- describe only implemented and verifiable work;
- distinguish completed scope from planned work;
- keep private repository URLs and sensitive information out of public content;
- avoid production, security, performance, or compliance claims that are not backed by evidence;
- keep project ordering intentional across the homepage and category pages.

## Localization

Localized editorial content lives in:

```text
messages/en.json
messages/de.json
```

Every user-facing content change must be reviewed in both languages. Keep the same key structure in both files and verify that longer German copy does not break cards, headings, navigation, or responsive layouts.

## Media

Public assets live under `public/`. Use optimized, repository-owned media and provide meaningful alternative text in the localized content.

Do not add:

- personal financial data;
- private application screenshots containing real records;
- credentials, tokens, or environment files;
- copyrighted assets without permission;
- generated visuals presented as real product evidence.

## Design constraints

Preserve the established visual system unless a change explicitly targets design direction. Check at minimum:

- mobile and desktop layout;
- keyboard navigation and visible focus states;
- heading hierarchy;
- image cropping and alternative text;
- reduced-motion behavior;
- English and German routes;
- legacy redirects and canonical metadata when routing changes.

## Commit and pull request guidance

Use focused commits that describe the actual change. Do not split trivial edits into artificial commits.

A pull request should state:

- what changed;
- why the change was needed;
- which routes or projects are affected;
- which checks were executed and their real results;
- any known limitations or follow-up work.

For dependency upgrades, avoid blind force fixes. Review the lockfile, framework migration notes, audit output, and production build before merging.
