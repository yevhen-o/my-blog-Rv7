import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  // Expect a title "to contain" a string.
  await expect(page).toHaveTitle(/ReactRouterV7 SSR Blog site/);
  await expect(page).toHaveScreenshot("HomePageView.png", {
    fullPage: true,
  });
});
