import { test, expect } from "@playwright/test"

test.describe("Home Page", () => {
  test("renders hero, headings, and navigation", async ({ page }) => {
    await page.goto("/")

    // Check title
    await expect(page).toHaveTitle(/Nove · Café espresso at home/)

    // Check main headline
    const heading = page.locator("h1")
    await expect(heading).toContainText("Café espresso at home")

    // Check coffee tabs presence
    await expect(page.getByText("What you can make")).toBeVisible()
    await expect(page.getByRole("button", { name: "Espresso" })).toBeVisible()
    await expect(page.getByRole("button", { name: "Latte" })).toBeVisible()

    // Check machine compare section
    await expect(page.getByText("Three machines. Same espresso.")).toBeVisible()

    // Check engineering details section
    await expect(
      page.getByText("Built like a commercial machine, sized for a kitchen.")
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

  test("coffee tabs switch drinks and images", async ({ page }) => {
    await page.goto("/")

    const latteTab = page.getByRole("button", { name: "Latte" })
    await latteTab.click()

    await expect(page.getByText("1:4 ratio · textured milk")).toBeVisible()
    await expect(
      page.getByText("A double shot poured into 180 ml of rich steamed milk.")
    ).toBeVisible()
  })
})
