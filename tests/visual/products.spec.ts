import { test, expect } from "@playwright/test"

const PRODUCTS = [
  { slug: "one", name: "Nove One", price: "$650" },
  { slug: "duo", name: "Nove Duo", price: "$950" },
  { slug: "pro", name: "Nove Pro", price: "$1,450" },
  { slug: "grinder", name: "Nove grinder", price: "$290" },
  { slug: "jug", name: "Milk jug, 350 ml", price: "$38" },
  { slug: "beans", name: "House roast", price: "$18" },
]

test.describe("Product Pages", () => {
  for (const prod of PRODUCTS) {
    test(`renders product ${prod.slug}`, async ({ page }) => {
      await page.goto(`/shop/${prod.slug}`)

      await expect(page).toHaveTitle(new RegExp(`${prod.name} · Nove`))
      await expect(page.locator("h1")).toContainText(prod.name)
      await expect(page.getByText(prod.price).first()).toBeVisible()

      // Add to bag button exists
      const addBtn = page.getByRole("button", { name: /Add to bag/ }).first()
      await expect(addBtn).toBeVisible()

      // Check reviews section
      await expect(
        page.getByText(new RegExp(`${prod.name} owners`, "i"))
      ).toBeVisible()
    })
  }
})
