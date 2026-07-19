# Design QA

## Evidence

- Source visual truth: `C:\Users\ogzka\Downloads\ChatGPT Image 19 Tem 2026 19_39_11.png`
- Source dimensions: 864 x 1821; desktop-only approved mockup
- Rendered implementation: `http://localhost:4173/en`
- Final desktop screenshots: `docs/assets/qa/after-home-1440.png`, `docs/assets/qa/after-games-1440.png`
- Final mobile screenshots: `docs/assets/qa/after-home-390.png`, `docs/assets/qa/after-games-390.png`
- Full-view before/after comparisons: `docs/assets/qa/comparison-before-after-home-1440.png`, `docs/assets/qa/comparison-before-after-games-1440.png`
- Focused mobile comparisons: `docs/assets/qa/comparison-before-after-home-390.png`, `docs/assets/qa/comparison-before-after-games-390.png`
- Requested viewports tested: 1440 x 900, 1280 x 720, 768 x 1024, 390 x 844, 360 x 800
- States tested: EN home, DE home, Engineering, Games, About, mobile navigation open and closed, keyboard focus

The source mockup and final 1440 x 900 implementation were inspected together. Pixel-exact viewport normalization is not possible because the approved source is an 864 px-wide full-page mockup, while the requested desktop validation viewports begin at 1280 px. Comparisons therefore use the source for hierarchy, split balance, typography, color, crop direction, and section rhythm rather than false pixel precision. The source supplies no mobile frame; mobile QA follows the approved Engineering-first stacking behavior.

## Findings

No actionable P0, P1, or P2 findings remain.

### Required Fidelity Surfaces

- Fonts and typography: Barlow Condensed preserves the narrow editorial display character; Inter keeps body copy readable. Heading weight, line height, zero letter spacing, wrapping, and compact UI sizing remain consistent across breakpoints.
- Spacing and layout rhythm: the desktop split hero, sticky header, work tabs, and Selected Work transition now follow the source hierarchy closely. Games-page and mobile section spacing were reduced without collapsing project content.
- Colors and tokens: off-white architectural Engineering surfaces, blue rules, dark Games surfaces, and orange accents remain unchanged. Text contrast is strong in inspected states.
- Image quality: the verified Night Soup media remains sharp and unchanged. Its crop now favors the sign, diner guest, and cooking area; restrained brightness and layered overlays improve text legibility.
- Copy and content: routes, localization, project data, statuses, links, and verified claims are unchanged.

## Comparison History

### Iteration 1

- [P2] Desktop hero height delayed Selected Work and reduced the mockup's compact long-form rhythm.
  - Fix: reduced the desktop hero from a 540-650 px range to a 480-540 px range, tightened CTA dimensions, reduced the work-tab height, and reduced initial project padding.
  - Post-fix evidence: `docs/assets/qa/comparison-before-after-home-1440.png`. Selected Work now begins at approximately the same visual depth as the source composition.
- [P2] The Games page intro reserved too much empty vertical space before Night Soup.
  - Fix: reduced the world-page header minimum height and vertical padding, then tightened featured-project spacing.
  - Post-fix evidence: `docs/assets/qa/comparison-before-after-games-1440.png`. Night Soup content and media now enter the first desktop viewport without crowding the introduction.
- [P2] Mobile hero and world-page spacing kept important content unnecessarily low.
  - Fix: reduced mobile hero minimum height, CTA spacing, world-page intro spacing, and featured-section padding while preserving readable line lengths.
  - Post-fix evidence: `docs/assets/qa/comparison-before-after-home-390.png` and `docs/assets/qa/comparison-before-after-games-390.png`.
- [P2] Night Soup's hero crop favored the far-right character and the lower overlay obscured too much of the cooking scene.
  - Fix: shifted the verified image focal point from 52% to 46%, added a restrained brightness adjustment, and balanced horizontal and vertical overlays.
  - Post-fix evidence: `docs/assets/qa/after-home-1440.png` and `docs/assets/qa/after-home-390.png`.
- [P3] Desktop navigation and button proportions were slightly looser than the source.
  - Fix: reduced header and button dimensions, tightened nav-link padding, and shifted the wide-desktop navigation toward the source alignment. The transform is removed at narrower desktop widths to avoid collisions.

## Interaction And Accessibility Checks

- No horizontal overflow at any requested viewport.
- No visible CTA or menu control crosses the viewport width.
- Mobile navigation exposes `aria-expanded`, routes correctly, and closes after navigation.
- Keyboard focus displays a high-contrast gold outline with a 4 px offset.
- Hover and active button treatments are defined; active links receive a restrained 1 px press response.
- `prefers-reduced-motion` disables smooth scrolling and reduces transitions and animations.
- Each tested route has one H1 and expected header, navigation, main, and footer landmarks.
- All rendered images have meaningful alt text.
- No browser console errors remained after the clean preview restart.

## Open Questions

- Native browser zoom was not instrumented in this browser surface. The requested viewport reflow, including the earlier 200% equivalent size, remains overflow-free.
- The source mockup has no mobile reference frame, so mobile findings are responsive-quality checks rather than pixel comparisons.

## Implementation Checklist

- [x] Match desktop hero and Selected Work rhythm
- [x] Refine Night Soup crop and overlay readability
- [x] Reduce Games-page empty space
- [x] Tighten mobile hero and section spacing
- [x] Refine navigation and button proportions
- [x] Verify focus, reduced motion, contrast, and semantic structure
- [x] Re-capture desktop, tablet, and mobile evidence
- [x] Preserve architecture, localization, content, links, and verified media

## Follow-up Polish

- P3: confirm native 200% zoom manually in a system browser if strict zoom instrumentation is required.

final result: passed
