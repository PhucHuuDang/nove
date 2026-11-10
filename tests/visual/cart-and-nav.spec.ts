import { test, expect } from "@playwright/test"

test.describe("Navigation and Cart Drawer", () => {
  test("cart drawer functions correctly when adding a machine", async ({
    page,
  }) => {
    await page.goto("/shop/duo")

    // Initially cart count badge is not present
    await expect(page.locator("button[aria-label^='Cart']")).toBeVisible()

    // Add to bag
    const addBtn = page.getByRole("button", { name: "Add to bag" }).first()
    await addBtn.click()

    // Badge should show 1
    const cartBtn = page.locator("button[aria-label^='Cart (1']")
    await expect(cartBtn).toBeVisible()

    // Click cart button to open drawer
    await cartBtn.click()

    // Drawer should open showing Nove Duo
    await expect(page.getByText("Bag (1)")).toBeVisible()
    await expect(page.getByText("Nove Duo").first()).toBeVisible()
    await expect(page.getByText("$950").first()).toBeVisible()

    // Increment quantity
    await page.getByRole("button", { name: "Increase quantity" }).click()
    await expect(page.getByText("Bag (2)")).toBeVisible()
    await expect(page.getByText("$1,900").first()).toBeVisible()

    // Remove item
    await page.getByRole("button", { name: "Remove Nove Duo" }).click()
    await expect(page.getByText("Your bag is empty.")).toBeVisible()
  })

  test("mobile responsive menu toggles on small screen", async ({
    page,
    isMobile,
  }) => {
    await page.goto("/")

    if (isMobile) {
      const openBtn = page.getByRole("button", { name: "Open menu" })
      await expect(openBtn).toBeVisible()

      await openBtn.click()
      await expect(
        page.getByRole("banner").getByRole("link", { name: "Journal" })
      ).toBeVisible()

      const closeBtn = page.getByRole("button", { name: "Close menu" })
      await closeBtn.click()
    } else {
      await expect(
        page.getByRole("link", { name: "About" }).first()
      ).toBeVisible()
      await expect(
        page.getByRole("button", { name: "Open menu" })
      ).not.toBeVisible()
    }
  })
})
