import type { MachineProduct, Product } from "@/types/product"

const BASE = "https://nove-nextjs-template.vercel.app"

// ─── Machine products ───────────────────────────────────────────────────────

export const machines: MachineProduct[] = [
  {
    slug: "one",
    name: "Nove One",
    tagline: "For espresso and americano",
    description:
      "The smallest Nove, 20 cm wide. Get it if you drink your coffee black.",
    price: 650,
    images: [`${BASE}/images/home/machine-one.png`],
    inUseImage: `${BASE}/images/shop/one-in-use.jpg`,
    bar: 9,
    basketMm: 58,
    warmupSeconds: 40,
    steamWand: false,
    dualBoiler: false,
    widthCm: 20,
    weightKg: 7,
    bestFor: "Espresso and americano",
    features: [
      {
        image: `${BASE}/images/home/details-gauge-3d.png`,
        stat: "9 bar",
        title: "Less bitter coffee",
        description:
          "The same pressure café machines use. More than that makes espresso bitter.",
      },
      {
        image: `${BASE}/images/home/details-portafilter-3d.png`,
        stat: "58 mm",
        title: "A bigger basket, like cafés use",
        description:
          "The coffee sits flatter, so the water runs through it evenly.",
      },
      {
        image: `${BASE}/images/shop/one-in-use.jpg`,
        title: "Steel and walnut, no plastic",
        description:
          "2 mm brushed steel panels and an oiled walnut handle that darkens where you hold it.",
      },
      {
        image: `${BASE}/images/home/details-stopwatch.png`,
        stat: "40s",
        title: "Ready in 40 seconds",
        description: "From switching it on. Most machines take 10 minutes.",
      },
    ],
    inBox: [
      {
        qty: 1,
        name: "Nove One",
        image: `${BASE}/images/home/machine-one.png`,
      },
      {
        qty: 1,
        name: "Portafilter with two baskets",
        image: `${BASE}/images/home/details-portafilter-3d.png`,
      },
      { qty: 1, name: "Tamper", image: `${BASE}/images/product/tamper.jpg` },
    ],
  },
  {
    slug: "duo",
    name: "Nove Duo",
    tagline: "For lattes and flat whites",
    description:
      "Everything the One makes, plus a steam wand that heats and froths milk. Our bestseller.",
    price: 950,
    images: [`${BASE}/images/home/machine.png`],
    inUseImage: `${BASE}/images/shop/duo-in-use.jpg`,
    bar: 9,
    basketMm: 58,
    warmupSeconds: 45,
    steamWand: true,
    dualBoiler: false,
    widthCm: 27,
    weightKg: 9,
    bestFor: "Lattes and flat whites",
    features: [
      {
        image: `${BASE}/images/home/details-gauge-3d.png`,
        stat: "9 bar",
        title: "Less bitter coffee",
        description:
          "The same pressure café machines use. More than that makes espresso bitter.",
      },
      {
        image: `${BASE}/images/home/details-portafilter-3d.png`,
        stat: "58 mm",
        title: "A bigger basket, like cafés use",
        description:
          "The coffee sits flatter, so the water runs through it evenly.",
      },
      {
        image: `${BASE}/images/shop/duo-in-use.jpg`,
        title: "Steel and walnut, no plastic",
        description:
          "2 mm brushed steel panels and an oiled walnut handle that darkens where you hold it.",
      },
      {
        image: `${BASE}/images/home/details-stopwatch.png`,
        stat: "45s",
        title: "Ready in 45 seconds",
        description: "From switching it on. Most machines take 10 minutes.",
      },
    ],
    inBox: [
      {
        qty: 1,
        name: "Nove Duo",
        image: `${BASE}/images/home/machine.png`,
      },
      {
        qty: 1,
        name: "Portafilter with two baskets",
        image: `${BASE}/images/home/details-portafilter-3d.png`,
      },
      { qty: 1, name: "Tamper", image: `${BASE}/images/product/tamper.jpg` },
      {
        qty: 1,
        name: "Milk jug, 350 ml",
        image: `${BASE}/images/home/jug.png`,
      },
    ],
  },
  {
    slug: "pro",
    name: "Nove Pro",
    tagline: "For two or more coffee drinkers",
    description:
      "Brews coffee and steams milk at the same time, so it makes four drinks in five minutes.",
    price: 1450,
    images: [`${BASE}/images/home/machine-pro.png`],
    inUseImage: `${BASE}/images/shop/pro-in-use.jpg`,
    bar: 9,
    basketMm: 58,
    warmupSeconds: 90,
    steamWand: true,
    dualBoiler: true,
    widthCm: 35,
    weightKg: 12,
    bestFor: "Multiple coffee drinkers",
    features: [
      {
        image: `${BASE}/images/home/details-gauge-3d.png`,
        stat: "9 bar",
        title: "Less bitter coffee",
        description:
          "The same pressure café machines use. More than that makes espresso bitter.",
      },
      {
        image: `${BASE}/images/home/details-portafilter-3d.png`,
        stat: "58 mm",
        title: "A bigger basket, like cafés use",
        description:
          "The coffee sits flatter, so the water runs through it evenly.",
      },
      {
        image: `${BASE}/images/shop/pro-in-use.jpg`,
        title: "Steel and walnut, no plastic",
        description:
          "2 mm brushed steel panels and an oiled walnut handle that darkens where you hold it.",
      },
      {
        image: `${BASE}/images/home/details-stopwatch.png`,
        stat: "90s",
        title: "Ready in 90 seconds",
        description: "From switching it on. Most machines take 10 minutes.",
      },
    ],
    inBox: [
      {
        qty: 1,
        name: "Nove Pro",
        image: `${BASE}/images/home/machine-pro.png`,
      },
      {
        qty: 1,
        name: "Portafilter with two baskets",
        image: `${BASE}/images/home/details-portafilter-3d.png`,
      },
      { qty: 1, name: "Tamper", image: `${BASE}/images/product/tamper.jpg` },
      {
        qty: 1,
        name: "Milk jug, 350 ml",
        image: `${BASE}/images/home/jug.png`,
      },
    ],
  },
]

// ─── Accessory products ─────────────────────────────────────────────────────

export const accessories: Product[] = [
  {
    slug: "grinder",
    name: "Nove grinder",
    tagline: "Grinds fresh for every coffee",
    description:
      "40 settings, and it grinds straight into the portafilter. Steel and walnut, like the machine.",
    price: 290,
    images: [`${BASE}/images/home/grinder.png`],
    inUseImage: `${BASE}/images/shop/grinder-in-use.jpg`,
    features: [
      {
        image: `${BASE}/images/product/grinder-dial.jpg`,
        stat: "40 settings",
        title: "40 settings",
        description:
          "Turn the walnut dial toward fine for espresso, a step at a time, until the shot runs right.",
      },
      {
        image: `${BASE}/images/product/grinder-hopper.jpg`,
        title: "Beans stay whole until you grind",
        description:
          "Ground coffee goes stale in a few days, so grind just before each shot.",
      },
      {
        image: `${BASE}/images/shop/grinder-in-use.jpg`,
        title: "Grinds straight into the basket",
        description:
          "The cradle holds the portafilter of every Nove while it fills.",
      },
      {
        image: `${BASE}/images/home/details-swatches.png`,
        title: "Steel and walnut",
        description:
          "The same steel and walnut as the machine, so the two match on the counter.",
      },
    ],
    inBox: [],
    useWith: [
      { image: `${BASE}/images/home/machine.png`, name: "Any Nove model" },
      {
        image: `${BASE}/images/home/details-portafilter-3d.png`,
        name: "The portafilter",
      },
      { image: `${BASE}/images/product/tamper.jpg`, name: "The tamper" },
      { image: `${BASE}/images/shop/beans-house.jpg`, name: "Nove beans" },
    ],
  },
  {
    slug: "jug",
    name: "Milk jug, 350 ml",
    tagline: "For steaming milk on the Duo and the Pro",
    description:
      "The same 350 ml jug that comes with the Duo and the Pro. A second one lets you steam milk for the next drink without washing the first.",
    price: 38,
    images: [`${BASE}/images/home/jug.png`],
    inUseImage: `${BASE}/images/shop/jug-in-use.jpg`,
    features: [
      {
        image: `${BASE}/images/home/jug.png`,
        stat: "350 ml",
        title: "350 ml",
        description:
          "Enough milk for one or two drinks. Fill it to just below the spout before you steam, so the milk has room to grow.",
      },
      {
        image: `${BASE}/images/home/details-swatches.png`,
        title: "Steel with a walnut handle",
        description: "Brushed steel and oiled walnut, like the machine.",
      },
      {
        image: `${BASE}/images/shop/jug-in-use.jpg`,
        title: "A pointed spout for pouring",
        description:
          "Pour slowly from high up, then close to the cup to draw the pattern.",
      },
      {
        image: `${BASE}/images/home/machine.png`,
        title: "For the Duo and the Pro",
        description:
          "Both come with one jug in the box. The One has no steam wand.",
      },
    ],
    inBox: [],
    useWith: [
      {
        image: `${BASE}/images/home/machine.png`,
        name: "Nove Duo",
        href: "/shop/duo",
      },
      {
        image: `${BASE}/images/home/machine-pro.png`,
        name: "Nove Pro",
        href: "/shop/pro",
      },
      {
        image: `${BASE}/images/home/latte.jpg`,
        name: "Flat whites and lattes",
      },
      { image: `${BASE}/images/shop/beans-house.jpg`, name: "Nove beans" },
    ],
  },
]

// ─── Bean subscription products ─────────────────────────────────────────────

export const beans: Product[] = [
  {
    slug: "beans",
    name: "House roast",
    tagline: "Every four weeks",
    description:
      "Our house roast, a medium-dark blend for espresso and milk drinks. A 250 g bag, whole or ground for the machine, every four weeks. Pause or stop any time.",
    price: 18,
    images: [`${BASE}/images/shop/beans-house.jpg`],
    inUseImage: `${BASE}/images/shop/beans-house-scene.jpg`,
    subscription: true,
    subscriptionFrequency: "Every four weeks",
    weight: "250 g",
    roast: "Medium-dark",
    features: [
      {
        image: `${BASE}/images/home/beans-dark.jpg`,
        stat: "250 g",
        title: "250 g",
        description: "$18 a bag, with free shipping.",
      },
      {
        image: `${BASE}/images/shop/beans-house.jpg`,
        title: "Every four weeks",
        description: "Skip a month when you are away, or stop any time.",
      },
      {
        image: `${BASE}/images/shop/beans-house-scene.jpg`,
        title: "Whole or ground",
        description:
          "Pick whole beans if you have a grinder, ground if you do not.",
      },
      {
        image: `${BASE}/images/product/beans-bags.jpg`,
        title: "Free with the full setup",
        description:
          "The first three bags come free when you buy the Duo and the grinder together.",
      },
    ],
    inBox: [],
  },
  {
    slug: "origin",
    name: "Ethiopia single origin",
    tagline: "Every four weeks",
    description:
      "Beans from one region of Ethiopia, roasted light. Fruity and bright, best as espresso or americano. A 250 g bag, whole or ground for the machine, every four weeks. Pause or stop any time.",
    price: 22,
    images: [`${BASE}/images/shop/beans-origin.jpg`],
    inUseImage: `${BASE}/images/shop/beans-origin-scene.jpg`,
    subscription: true,
    subscriptionFrequency: "Every four weeks",
    weight: "250 g",
    roast: "Light",
    features: [
      {
        image: `${BASE}/images/home/beans-dark.jpg`,
        stat: "250 g",
        title: "250 g",
        description: "$22 a bag, with free shipping.",
      },
      {
        image: `${BASE}/images/shop/beans-origin.jpg`,
        title: "Every four weeks",
        description: "Skip a month when you are away, or stop any time.",
      },
      {
        image: `${BASE}/images/shop/beans-origin-scene.jpg`,
        title: "Whole or ground",
        description:
          "Pick whole beans if you have a grinder, ground if you do not.",
      },
      {
        image: `${BASE}/images/product/beans-bags.jpg`,
        title: "Three roasts",
        description:
          "House roast $18, Ethiopia single origin $22 and Decaf roast $19, each a 250 g bag.",
      },
    ],
    inBox: [],
  },
  {
    slug: "decaf",
    name: "Decaf roast",
    tagline: "Every four weeks",
    description:
      "Our decaf, roasted medium for espresso and milk drinks, for a coffee after dinner. A 250 g bag, whole or ground for the machine, every four weeks. Pause or stop any time.",
    price: 19,
    images: [`${BASE}/images/shop/beans-decaf.jpg`],
    inUseImage: `${BASE}/images/shop/beans-decaf-scene.jpg`,
    subscription: true,
    subscriptionFrequency: "Every four weeks",
    weight: "250 g",
    roast: "Medium",
    features: [
      {
        image: `${BASE}/images/home/beans-dark.jpg`,
        stat: "250 g",
        title: "250 g",
        description: "$19 a bag, with free shipping.",
      },
      {
        image: `${BASE}/images/shop/beans-decaf.jpg`,
        title: "Every four weeks",
        description: "Skip a month when you are away, or stop any time.",
      },
      {
        image: `${BASE}/images/shop/beans-decaf-scene.jpg`,
        title: "Whole or ground",
        description:
          "Pick whole beans if you have a grinder, ground if you do not.",
      },
      {
        image: `${BASE}/images/product/beans-bags.jpg`,
        title: "Three roasts",
        description:
          "House roast $18, Ethiopia single origin $22 and Decaf roast $19, each a 250 g bag.",
      },
    ],
    inBox: [],
  },
]

// ─── Helpers ─────────────────────────────────────────────────────────────────

export const allProducts = [...machines, ...accessories, ...beans]

export function getProductBySlug(slug: string) {
  return allProducts.find((p) => p.slug === slug)
}

export function getMachineBySlug(slug: string) {
  return machines.find((m) => m.slug === slug)
}
