# Portfolio Release Checklist

Use this checklist before publishing portfolio changes to `okdere.com`.

## Content accuracy

- [ ] Every project status matches the repository evidence.
- [ ] Completed work is separated from planned work.
- [ ] Private repository URLs, personal financial data, credentials, and internal screenshots are absent.
- [ ] Technology lists reflect actual implementation rather than intended architecture.
- [ ] Dates, role descriptions, and experience claims are consistent across English and German content.

## Localization

- [ ] `messages/en.json` and `messages/de.json` contain matching key structures.
- [ ] New copy is reviewed in both languages.
- [ ] Long German headings and card text wrap without clipping.
- [ ] Navigation, buttons, metadata, status labels, and image alternative text are translated.
- [ ] Locale switching preserves the intended route.

## Engineering checks

Run from a clean checkout:

```bash
npm install
npm run lint
npm run typecheck
npm run build
```

Record failures honestly. Do not treat skipped checks as passing.

## Visual and accessibility review

Check at narrow mobile, tablet, laptop, and wide desktop widths:

- [ ] Header and mobile navigation remain usable.
- [ ] Project cards preserve readable hierarchy and media cropping.
- [ ] Keyboard focus is visible and follows a logical order.
- [ ] Heading levels remain sequential.
- [ ] Links have meaningful labels outside their visual context.
- [ ] Images expose useful alternative text.
- [ ] Reduced-motion preferences are respected.
- [ ] Text remains usable at browser zoom and larger system font settings.

## Routing and metadata

- [ ] English and German routes render without runtime errors.
- [ ] Legacy redirects still resolve to the correct localized destination.
- [ ] Canonical URLs, sitemap entries, robots settings, titles, and descriptions remain correct.
- [ ] Public asset paths resolve with production casing.

## Deployment verification

After Vercel reports a successful production deployment:

- [ ] Open `https://okdere.com` and `https://www.okdere.com`.
- [ ] Verify the changed route in English and German.
- [ ] Check browser console and network failures.
- [ ] Confirm the production commit SHA matches the intended release.
- [ ] Keep any known limitation documented instead of hiding it.
