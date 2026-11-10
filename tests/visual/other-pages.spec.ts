import { test, expect } from "@playwright/test"

test.describe("Content Pages", () => {
  test("about page renders story, founders, and pillars", async ({ page }) => {
    await page.goto("/about")
    await expect(page).toHaveTitle(/About · Nove/)
    await expect(page.locator("h1")).toContainText("Built in Turin, Italy")
    await expect(
      page.getByText("Four principles we refuse to break")
    ).toBeVisible()
    await expect(
      page.getByText("From workshop bench to your counter")
    ).toBeVisible()
  })

  test("contact page renders channels and form", async ({ page }) => {
    await page.goto("/contact")
    await expect(page).toHaveTitle(/Contact · Nove/)
    await expect(page.locator("h1")).toContainText("Talk to the makers")
    await expect(page.getByText("Chat with us")).toBeVisible()

    // Test form submission
    await page.getByPlaceholder("e.g. Elena Rossi").fill("Marco Polo")
    await page.getByPlaceholder("elena@example.com").fill("marco@example.com")
    await page
      .getByPlaceholder("Tell us about the coffee you drink at home...")
      .fill("Interested in the Duo!")
    await page
      .getByRole("button", { name: "Send message to Matteo & Davide" })
      .click()

    await expect(page.getByText("Message received")).toBeVisible()
  })

  test("showroom page renders Turin visit info and steps", async ({ page }) => {
    await page.goto("/showroom")
    await expect(page).toHaveTitle(/Showroom in Turin · Nove/)
    await expect(page.locator("h1")).toContainText(
      "Try all three models in Turin"
    )
    await expect(page.getByText("A 45-minute guided tasting")).toBeVisible()
    await expect(page.getByText("Via Nizza 45, 10125 Turin")).toBeVisible()
  })

  test("journal page renders article cards", async ({ page }) => {
    await page.goto("/journal")
    await expect(page).toHaveTitle(/Journal · Nove/)
    await expect(page.locator("h1")).toContainText(
      "Technique, mechanics & coffee"
    )
    await expect(
      page.getByText("Cleaning and descaling your Nove")
    ).toBeVisible()
    await expect(page.getByText("Why every Nove brews at 9 bar")).toBeVisible()
  })

  test("help page renders guide steps and FAQ", async ({ page }) => {
    await page.goto("/help")
    await expect(page).toHaveTitle(/Help & FAQ · Nove/)
    await expect(page.locator("h1")).toContainText(
      "Shipping, swaps, warranty and care"
    )
    await expect(page.getByText("Delivery & first setup")).toBeVisible()
    await expect(page.getByText("Answers & specifications")).toBeVisible()
  })

  test("legal terms page renders sections", async ({ page }) => {
    await page.goto("/legal/terms")
    await expect(page).toHaveTitle(/Terms of sale · Nove/)
    await expect(page.locator("h1")).toContainText("Terms of sale")
    await expect(page.getByText("Who you buy from")).toBeVisible()
    await expect(page.getByText("Which law applies")).toBeVisible()
  })
})
