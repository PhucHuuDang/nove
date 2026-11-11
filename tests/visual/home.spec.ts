import { test, expect } from "@playwright/test"

test.describe("Home Page", () => {
  test("renders hero, headings, and navigation", async ({ page }) => {
    await page.goto("/")

    // Check title
    await expect(page).toHaveTitle(/Nove · Café espresso at home/)

    // Check main headline
    const heading = page.locator("h1")
    await expect(heading).toContainText("Café espresso at home")

    // Check drinks section presence
    await expect(page.getByText("What you can make")).toBeVisible()
    await expect(
      page.getByRole("link", { name: /Espresso/i }).first()
    ).toBeVisible()
    await expect(
      page.getByRole("link", { name: /Latte/i }).first()
    ).toBeVisible()

    // Check machine compare section
    await expect(page.getByText("Three machines. Same espresso.")).toBeVisible()

    // Check engineering details section
    await expect(page.getByText("Why the espresso tastes better")).toBeVisible()
    await expect(
      page.getByRole("heading", { name: "Less bitter coffee" })
    ).toBeVisible()

    // Check pricing cards
    await expect(
      page.getByRole("heading", { name: "Nove Duo" }).first()
    ).toBeVisible()

    // Check FAQ accordion
    await expect(page.getByText("Questions you might have")).toBeVisible()

    // Check no horizontal scrollbar / overflow
    const scrollWidth = await page.evaluate(
      () => document.documentElement.scrollWidth
    )
    const clientWidth = await page.evaluate(
      () => document.documentElement.clientWidth
    )
    expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 2)
  })

  test("drinks section displays drinks and links to products", async ({
    page,
  }) => {
    await page.goto("/")
    await page.waitForLoadState("networkidle")

    const drinksSection = page.locator("#drinks")
    await drinksSection.scrollIntoViewIfNeeded()

    await expect(drinksSection.getByText("What you can make")).toBeVisible()
    await expect(
      drinksSection.getByText("Espresso", { exact: true })
    ).toBeVisible()
    await expect(
      drinksSection.getByText("Americano", { exact: true })
    ).toBeVisible()
    await expect(
      drinksSection.getByText("Cortado", { exact: true })
    ).toBeVisible()
    await expect(
      drinksSection.getByText("Flat white", { exact: true })
    ).toBeVisible()
    await expect(
      drinksSection.getByText("Latte", { exact: true })
    ).toBeVisible()

    // Verify product links
    const espressoLink = drinksSection.getByRole("link", { name: /Espresso/i })
    await expect(espressoLink).toHaveAttribute("href", "/shop/one")

    const latteLink = drinksSection.getByRole("link", { name: /Latte/i })
    await expect(latteLink).toHaveAttribute("href", "/shop/duo")
  })
})
