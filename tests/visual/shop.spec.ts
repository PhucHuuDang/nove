import { test, expect } from "@playwright/test"

test.describe("Shop Page", () => {
  test("renders machines, compare table, accessories, beans, and bundle", async ({
    page,
  }) => {
    await page.goto("/shop")

    await expect(page).toHaveTitle(/Shop Machines & Accessories · Nove/)
    await expect(page.locator("h1")).toContainText("Machines")

    // Check machines
    await expect(page.getByText("Nove One").first()).toBeVisible()
    await expect(page.getByText("Nove Duo").first()).toBeVisible()
    await expect(page.getByText("Nove Pro").first()).toBeVisible()

    // Check comparison table
    await expect(page.getByRole("heading", { name: "Compare" })).toBeVisible()

    // Check accessories
    await expect(page.getByText("Nove grinder").first()).toBeVisible()
    await expect(page.getByText("Milk jug, 350 ml").first()).toBeVisible()

    // Check beans
    await expect(page.getByText("House roast").first()).toBeVisible()
    await expect(page.getByText("Ethiopia single origin").first()).toBeVisible()
    await expect(page.getByText("Decaf roast").first()).toBeVisible()

    // Check bundle
    await expect(page.getByText("The full setup")).toBeVisible()
  })
})
