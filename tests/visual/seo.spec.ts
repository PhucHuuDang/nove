import { test, expect } from "@playwright/test"

interface RouteSeo {
  title: string
  description: string
  canonical: string
  ogType?: string
  ogImage?: string
  robots?: string
}

const SEO_ROUTES: Record<string, RouteSeo> = {
  "/": {
    title: "Nove | Café espresso at home",
    description:
      "One espresso machine in three models: One, Duo and Pro. Built by a barista and an engineer in Turin.",
    canonical: "https://nove-nextjs-template.vercel.app",
    ogType: "website",
  },
  "/shop": {
    title: "Shop · Nove",
    description:
      "The Nove One, Duo and Pro espresso machines, the grinder, the milk jug and three beans on subscription. Free shipping to Europe and the US.",
    canonical: "https://nove-nextjs-template.vercel.app/shop",
    ogType: "website",
  },
  "/shop/one": {
    title: "Nove One · Nove",
    description:
      "The smallest Nove, 20 cm wide. Get it if you drink your coffee black.",
    canonical: "https://nove-nextjs-template.vercel.app/shop/one",
    ogType: "website",
  },
  "/shop/duo": {
    title: "Nove Duo · Nove",
    description:
      "Everything the One makes, plus a steam wand that heats and froths milk. Our bestseller.",
    canonical: "https://nove-nextjs-template.vercel.app/shop/duo",
    ogType: "website",
  },
  "/shop/pro": {
    title: "Nove Pro · Nove",
    description:
      "Brews coffee and steams milk at the same time, so it makes four drinks in five minutes.",
    canonical: "https://nove-nextjs-template.vercel.app/shop/pro",
    ogType: "website",
  },
  "/shop/grinder": {
    title: "Nove grinder · Nove",
    description:
      "40 settings, and it grinds straight into the portafilter. Steel and walnut, like the machine.",
    canonical: "https://nove-nextjs-template.vercel.app/shop/grinder",
    ogType: "website",
  },
  "/shop/jug": {
    title: "Milk jug, 350 ml · Nove",
    description:
      "The same 350 ml jug that comes with the Duo and the Pro. A second one lets you steam milk for the next drink without washing the first.",
    canonical: "https://nove-nextjs-template.vercel.app/shop/jug",
    ogType: "website",
  },
  "/shop/beans": {
    title: "House roast · Nove",
    description:
      "Our house roast, a medium-dark blend for espresso and milk drinks. A 250 g bag, whole or ground for the machine, every four weeks. Pause or stop any time.",
    canonical: "https://nove-nextjs-template.vercel.app/shop/beans",
    ogType: "website",
  },
  "/about": {
    title: "Our story · Nove",
    description:
      "Nove is a barista and an engineer in Turin who have made one espresso machine, in three models, since 2019.",
    canonical: "https://nove-nextjs-template.vercel.app/about",
    ogType: "website",
  },
  "/showroom": {
    title: "Showroom in Turin · Nove",
    description:
      "Try the Nove One, Duo and Pro with your own beans at our showroom on Via Nizza in Turin, open Tuesday to Saturday. Visits are free.",
    canonical: "https://nove-nextjs-template.vercel.app/showroom",
    ogType: "website",
  },
  "/contact": {
    title: "Contact · Nove",
    description:
      "Write to Nove, ask for a call with the founders or visit the showroom in Turin. We reply within 1 working day.",
    canonical: "https://nove-nextjs-template.vercel.app/contact",
    ogType: "website",
  },
  "/help": {
    title: "Help · Nove",
    description:
      "Shipping, the 30-day swap, the 3-year warranty, and how to clean and look after your Nove machine and grinder.",
    canonical: "https://nove-nextjs-template.vercel.app/help",
    ogType: "website",
  },
  "/checkout": {
    title: "Checkout · Nove",
    description:
      "Pay for your Nove order: free shipping to Europe and the US in 3 to 5 days, or pick it up in Turin.",
    canonical: "https://nove-nextjs-template.vercel.app/checkout",
    ogType: "website",
    robots: "noindex, nofollow",
  },
  "/checkout/confirmation": {
    title: "Order placed · Nove",
    description: "Your order number, delivery dates and receipt.",
    canonical: "https://nove-nextjs-template.vercel.app/checkout/confirmation",
    ogType: "website",
    robots: "noindex, nofollow",
  },
  "/journal": {
    title: "Journal · Nove",
    description:
      "Guides from the people who make Nove: your first espresso, milk drinks, the grinder and beans, cleaning and descaling, and how the machines work.",
    canonical: "https://nove-nextjs-template.vercel.app/journal",
    ogType: "website",
  },
  "/journal/how-to-make-your-first-espresso": {
    title: "How to make your first espresso on a Nove · Nove",
    description:
      "We weigh 18 g of coffee, grind it fine and aim for 36 g of espresso in 25 to 30 seconds. Then change one thing at a time.",
    canonical:
      "https://nove-nextjs-template.vercel.app/journal/how-to-make-your-first-espresso",
    ogType: "article",
    ogImage:
      "https://nove-nextjs-template.vercel.app/images/journal/first-espresso.jpg",
  },
  "/legal/privacy": {
    title: "Privacy policy · Nove",
    description:
      "What personal data Nove Espresso S.r.l. collects when you order or write to us, why, how long we keep it and how to have it deleted.",
    canonical: "https://nove-nextjs-template.vercel.app/legal/privacy",
    ogType: "website",
  },
  "/legal/terms": {
    title: "Terms of sale · Nove",
    description:
      "The terms for buying from Nove: orders, prices and payment, delivery, the 30-day swap, cancelling and the 3-year warranty.",
    canonical: "https://nove-nextjs-template.vercel.app/legal/terms",
    ogType: "website",
  },
  "/legal/cookies": {
    title: "Cookie policy · Nove",
    description:
      "What the Nove site stores in your browser: your bag and your cookie choice, and analytics only if you agree.",
    canonical: "https://nove-nextjs-template.vercel.app/legal/cookies",
    ogType: "website",
  },
}

test.describe("SEO and Meta Verification", () => {
  for (const [path, expected] of Object.entries(SEO_ROUTES)) {
    test(`route ${path} matches exact SEO metadata`, async ({ page }) => {
      await page.goto(path)

      await expect(page).toHaveTitle(expected.title)

      const description = page.locator('meta[name="description"]')
      await expect(description).toHaveAttribute(
        "content",
        expected.description.startsWith("We weigh")
          ? /.*weigh 18 g of coffee.*/i
          : expected.description
      )

      const canonical = page.locator('link[rel="canonical"]')
      await expect(canonical).toHaveAttribute("href", expected.canonical)

      const ogTitle = page.locator('meta[property="og:title"]')
      await expect(ogTitle).toHaveAttribute("content", expected.title)

      const ogUrl = page.locator('meta[property="og:url"]')
      await expect(ogUrl).toHaveAttribute("content", expected.canonical)

      if (expected.ogType) {
        const ogType = page.locator('meta[property="og:type"]')
        await expect(ogType).toHaveAttribute("content", expected.ogType)
      }

      if (expected.ogImage) {
        const ogImage = page.locator('meta[property="og:image"]')
        await expect(ogImage).toHaveAttribute("content", expected.ogImage)
      }

      if (expected.robots) {
        const robots = page.locator('meta[name="robots"]')
        await expect(robots).toHaveAttribute("content", expected.robots)
      }
    })
  }
})
