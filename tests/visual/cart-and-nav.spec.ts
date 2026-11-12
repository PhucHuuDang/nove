import { test, expect } from "@playwright/test"

test.describe("Navigation and Cart Drawer", () => {
  test("cart drawer functions correctly when adding a machine", async ({
    page,
  }) => {
    await page.goto("/shop/duo")
    await page.waitForLoadState("networkidle")

    // Initially cart count badge is not present
    await expect(page.locator("button[aria-label*='Bag']")).toBeVisible()

    // Add to bag
    const addBtn = page.getByRole("button", { name: "Add to bag" }).first()
    await addBtn.click()

    // Badge should show 1
    const cartBtn = page.locator("button[aria-label*='1 item']")
    await expect(cartBtn).toBeVisible()

    // Click cart button to open drawer
    await cartBtn.click()

    // Drawer should open showing Nove Duo
    await expect(page.getByRole("heading", { name: /Your bag/ })).toBeVisible()
    await expect(page.getByText("Nove Duo").first()).toBeVisible()
    await expect(page.getByText("$950").first()).toBeVisible()

    // Increment quantity
    await page.getByRole("button", { name: "Increase quantity" }).click()
    await expect(
      page.getByRole("heading", { name: /Your bag \(2\)/ })
    ).toBeVisible()
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
      await page.waitForLoadState("networkidle")
      const openBtn = page.getByRole("button", { name: "Open menu" })
      await expect(openBtn).toBeVisible()

      await openBtn.click()
      await expect(
        page.getByRole("navigation").getByRole("link", { name: "Journal" })
      ).toBeVisible()

      const closeBtn = page.getByRole("button", { name: "Close menu" })
      await closeBtn.click()
    } else {
      await expect(
        page.getByRole("link", { name: "Our story" }).first()
      ).toBeVisible()
      await expect(
        page.getByRole("button", { name: "Open menu" })
      ).not.toBeVisible()
    }
  })
})
