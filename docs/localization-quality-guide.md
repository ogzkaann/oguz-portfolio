# Bilingual Content Quality Guide

The portfolio uses English and German as equal public surfaces. Translation work must preserve meaning, evidence, tone, and layout rather than translating isolated words mechanically.

## Structural contract

The key hierarchy in these files must remain aligned:

```text
messages/en.json
messages/de.json
```

When adding or removing a key:

1. update both locale files in the same change;
2. preserve arrays and object shapes expected by components;
3. keep project IDs and status keys identical;
4. validate both routes with a production build.

## Editorial rules

- Prefer direct, factual language.
- Describe implemented behavior before architecture terminology.
- Separate current scope from future plans.
- Avoid literal translations that sound unnatural in German.
- Do not inflate titles such as production-ready, enterprise-grade, secure, scalable, or AI-powered without visible evidence.
- Keep product names, technical identifiers, and code terms unchanged when translation would reduce clarity.

## German layout risks

German copy is often longer than English. Review:

- navigation labels;
- section headings;
- project hooks and role lines;
- status badges and technology chips;
- call-to-action buttons;
- image captions and alternative text;
- mobile cards and narrow viewport wrapping.

Do not solve overflow by reducing text to an inaccurate claim. Adjust wording first, then layout only when necessary.

## Project update checklist

For each changed project:

- [ ] English and German describe the same delivered scope.
- [ ] Status labels match `src/data/projects.ts`.
- [ ] Technology names match the implementation.
- [ ] Notes identify limitations consistently.
- [ ] Media alternative text describes the image rather than repeating the title.
- [ ] Private or personal information is excluded.

## Verification

Run:

```bash
npm run typecheck
npm run build
```

Then manually review the affected English and German routes at mobile and desktop widths. JSON validity alone is not sufficient; successful rendering and readable layout are required.
