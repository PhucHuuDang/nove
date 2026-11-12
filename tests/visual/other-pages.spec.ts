import { test, expect } from "@playwright/test"

test.describe("Content Pages", () => {
  test("about page renders story, timeline and founders", async ({ page }) => {
    await page.goto("/about")
    await expect(page).toHaveTitle(/Our story · Nove/)
    await expect(page.locator("h1")).toContainText(
      "We make one espresso machine in Turin"
    )
    await expect(page.getByText("How Nove started")).toBeVisible()

    const year = page.getByRole("radio", { name: "2023" })
    await year.scrollIntoViewIfNeeded()
    await year.click()
    await expect(year).toHaveAttribute("aria-checked", "true")
    await expect(
      page.getByRole("heading", { name: "The Pro", level: 3 })
    ).toBeVisible()
    await expect(page.getByText("The people behind your machine")).toBeVisible()
  })

  test("contact page validates and sends the form", async ({ page }) => {
    await page.goto("/contact")
    await expect(page).toHaveTitle(/Contact · Nove/)
    await expect(page.locator("h1")).toContainText("Write, call or visit us")
    await expect(page.getByText("Ask for a call").first()).toBeVisible()

    const send = page.getByRole("button", { name: "Send message" })
    await send.scrollIntoViewIfNeeded()
    await send.click()
    await expect(page.getByText("Add your name.")).toBeVisible()
    await expect(page.locator("#contact-name")).toBeFocused()

    await page.getByLabel("Name", { exact: true }).fill("Marco Polo")
    await page.getByLabel("Email", { exact: true }).fill("marco@example.com")
    await page
      .getByLabel("Message", { exact: true })
      .fill("Interested in the Duo!")
    await send.click()

    await expect(page.getByText("Message sent")).toBeVisible()
    await expect(
      page.getByText("Thanks, Marco. We will reply to marco@example.com")
    ).toBeVisible()
  })

  test("showroom page renders steps and visit info", async ({ page }) => {
    await page.goto("/showroom")
    await expect(page).toHaveTitle(/Showroom in Turin · Nove/)
    await expect(page.locator("h1")).toContainText(
      "Try all three models in Turin"
    )
    await expect(page.getByText("Bring your own beans")).toBeVisible()
    await expect(page.getByText("Via Nizza 45, 10125 Turin")).toBeVisible()
  })

  test("journal page filters and pages articles", async ({ page }) => {
    await page.goto("/journal")
    await expect(page).toHaveTitle(/Journal · Nove/)
    await expect(page.locator("h1")).toContainText("Journal")
    await expect(
      page.getByText("Cleaning and descaling your Nove")
    ).toBeVisible()
    await expect(page.getByText("Choosing beans for espresso")).toBeHidden()

    await page.getByRole("button", { name: "Show more articles" }).click()
    await expect(page.getByText("Choosing beans for espresso")).toBeVisible()

    await page.getByRole("radio", { name: "Milk" }).click()
    await expect(
      page.getByText("Making a cappuccino and a latte")
    ).toBeVisible()
    await expect(
      page.getByText("Cleaning and descaling your Nove")
    ).toBeHidden()
  })

  test("help page renders guide steps and FAQ", async ({ page }) => {
    await page.goto("/help")
    await expect(page).toHaveTitle(/Help & FAQ · Nove/)
    await expect(page.locator("h1")).toContainText(
      "Shipping, swaps, warranty and care"
    )
    await expect(page.getByRole("tab", { name: "Shipping" })).toBeVisible()
    await expect(page.getByText("Shipping and delivery").first()).toBeVisible()
  })

  test("legal terms page renders sections", async ({ page }) => {
    await page.goto("/legal/terms")
    await expect(page).toHaveTitle(/Terms of sale · Nove/)
    await expect(page.locator("h1")).toContainText("Terms of sale")
    await expect(page.getByText("Who you buy from")).toBeVisible()
    await expect(page.getByText("Which law applies")).toBeVisible()
  })
})
