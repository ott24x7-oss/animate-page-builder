## Goal
Automatically catch when a mockup image on any page changes vs an approved baseline (wrong asset, broken URL, layout shift around the frame, or unintended edit).

## Approach
Use Playwright's built-in `toHaveScreenshot` visual comparison. It stores PNG baselines in-repo, diffs pixel-by-pixel with a tolerance, and produces a diff image on failure. No extra service needed.

## What gets added

1. **Deps** (dev only)
   - `@playwright/test`
   - Chromium browser (installed via `bunx playwright install chromium`)

2. **Config** — `playwright.config.ts`
   - `webServer`: reuses `bun run dev` on port 8080
   - Single Chromium project, fixed viewport 1280×1800, `deviceScaleFactor: 1`
   - `expect.toHaveScreenshot`: `maxDiffPixelRatio: 0.01`, `animations: "disabled"`, `caret: "hide"`

3. **Test file** — `tests/visual/mockups.spec.ts`
   Per page (`/`, `/demo`, `/blog`) and per mockup element:
   - Navigate, wait for images to load, disable Framer Motion animations via CSS injection
   - Screenshot each mockup element by `data-testid` (see below), not the whole page — keeps diffs stable when copy or layout above changes
   - Assert against baseline PNG

4. **Instrumentation** — minimal, additive
   Add `data-testid` attrs on the mockup wrappers only:
   - `src/components/site/HeroScene.tsx`: `mockup-laptop-website`, `mockup-browser-admin`, `mockup-phone-miniapp`
   - `src/routes/demo.tsx`: `mockup-storefront`, `mockup-admin-theme`, `mockup-admin-blog`, `mockup-phone-{miniapp,sales,admin}`
   - `src/routes/index.tsx` showcase/admin sections: matching testids
   No visual change, no logic change.

5. **Baselines** — `tests/visual/mockups.spec.ts-snapshots/`
   Generated on first run with `bunx playwright test --update-snapshots`. Committed to the repo as the approved reference set.

6. **Scripts** — `package.json`
   - `test:visual` → `playwright test`
   - `test:visual:update` → `playwright test --update-snapshots`

## Workflow going forward
- Run `bun run test:visual` locally or in CI to detect drift.
- When a mockup is intentionally changed, run `bun run test:visual:update` and commit the new baselines.
- Failures write `test-results/**/…-diff.png` for visual review.

## Technical notes
- Tests run against the dev server (already on :8080); no separate build required.
- Element screenshots avoid flakiness from scroll offset, ambient mesh gradients, and theme-switcher position.
- Framer Motion is neutralized per-test via `page.addStyleTag({ content: "*,*::before,*::after{transition:none!important;animation:none!important}" })` plus `await img.evaluate(el => el.complete)` waits.
- Snapshots are ~50–150 KB each; total baseline set stays well under 5 MB.

## Out of scope
- Cross-browser matrix (Firefox/WebKit) — Chromium only.
- Multi-viewport (mobile vs desktop) — can add later if you want mobile baselines too.
- CI wiring — I'll add scripts; hooking into a CI provider is a separate ask.
