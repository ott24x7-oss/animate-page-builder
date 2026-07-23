import { test, expect, type Page, type Locator } from "@playwright/test";

/**
 * Visual regression for every mockup image on every page.
 *
 * Baselines live in `tests/visual/mockups.spec.ts-snapshots/`.
 * Update them intentionally with: `bun run test:visual:update`.
 */

const KILL_ANIMATIONS = `
  *, *::before, *::after {
    transition: none !important;
    animation: none !important;
    caret-color: transparent !important;
  }
  html { scroll-behavior: auto !important; }
  /* Freeze Framer Motion inline transforms on mockup wrappers so screenshots stabilize. */
  [data-testid^="mockup-"], [data-testid^="mockup-"] * {
    transform: none !important;
    opacity: 1 !important;
  }
`;

async function prepare(page: Page, path: string, anchorTestId?: string) {
  page.setDefaultTimeout(60_000);
  await page.goto(path, { waitUntil: "load", timeout: 60_000 });
  if (anchorTestId) {
    await page.getByTestId(anchorTestId).first().waitFor({ state: "attached", timeout: 30_000 });
  }
  // Let hydration settle before evaluating in the page context.
  await page.waitForTimeout(1200);
  await page.addStyleTag({ content: KILL_ANIMATIONS });
  await page.waitForLoadState("networkidle", { timeout: 30_000 }).catch(() => {});
  await page.waitForTimeout(500);
}

async function snap(el: Locator, name: string) {
  await el.evaluate((node) => node.scrollIntoView({ block: "center", behavior: "instant" as ScrollBehavior }));
  await el.page().waitForTimeout(300);
  await expect(el).toHaveScreenshot(`${name}.png`);
}

test.describe("Landing page mockups", () => {
  test("hero, showcase and admin mockups", async ({ page }) => {
    await prepare(page, "/");

    const targets = [
      "mockup-hero-laptop",
      "mockup-hero-browser",
      "mockup-hero-phone",
      "mockup-showcase-0",
      "mockup-showcase-1",
      "mockup-showcase-2",
      "mockup-admin-website",
      "mockup-admin-theme",
      "mockup-admin-blog",
      "mockup-admin-miniapp",
    ];

    for (const id of targets) {
      const el = page.getByTestId(id).first();
      await snap(el, `landing__${id}`);
    }
  });
});

test.describe("Demo page mockups", () => {
  test("hero cluster, storefront, admin split and telegram trio", async ({ page }) => {
    await prepare(page, "/demo");

    const targets = [
      "mockup-demo-hero-laptop",
      "mockup-demo-hero-browser",
      "mockup-demo-hero-phone",
      "mockup-demo-storefront",
      "mockup-demo-admin-theme",
      "mockup-demo-admin-blog",
      "mockup-demo-phone-0",
      "mockup-demo-phone-1",
      "mockup-demo-phone-2",
    ];

    for (const id of targets) {
      const el = page.getByTestId(id).first();
      await snap(el, `demo__${id}`);
    }
  });
});

test.describe("Blog page", () => {
  test("has no unexpected mockup images", async ({ page }) => {
    await prepare(page, "/blog");
    // Blog page currently uses no mockup images; guard against regressions
    // that would silently introduce mismatched ones.
    const count = await page.locator("[data-testid^='mockup-']").count();
    expect(count).toBe(0);
  });
});
