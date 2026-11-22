export type CatalogKind = "machine" | "add-on" | "subscription"

export type CatalogId =
  "one" | "duo" | "pro" | "grinder" | "jug" | "beans" | "origin" | "decaf"

export interface CatalogImage {
  src: string
  width: number
  height: number
  alt: string
}

export interface CatalogProduct {
  id: CatalogId
  kind: CatalogKind
  name: string
  kicker: string
  note: string
  category: string
  amount: number
  price: string
  description: string
  cta: string
  href: string
  /** Relative visual size, so the One, Duo and Pro read true to scale. */
  scale: number
  image: CatalogImage
}

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
})

export function formatPrice(amount: number): string {
  return usd.format(amount)
}

type CatalogEntry = Omit<CatalogProduct, "price">

const ENTRIES: CatalogEntry[] = [
  {
    id: "one",
    kind: "machine",
    name: "Nove One",
    kicker: "For espresso and americano",
    note: "No milk drinks",
    category: "Machine · Espresso only",
    amount: 650,
    description:
      "The smallest Nove, 20 cm wide. Get it if you drink your coffee black.",
    cta: "Buy the Nove One",
    href: "/shop/one",
    scale: 0.8,
    image: {
      src: "/images/home/machine-one.png",
      width: 1101,
      height: 1400,
      alt: "Nove One, a narrow steel espresso machine with one gauge and a walnut portafilter handle",
    },
  },
  {
    id: "duo",
    kind: "machine",
    name: "Nove Duo",
    kicker: "For lattes and flat whites",
    note: "Adds a steam wand for milk",
    category: "Machine · With steam wand",
    amount: 950,
    description:
      "Everything the One makes, plus a steam wand that heats and froths milk. Our bestseller.",
    cta: "Buy the Nove Duo",
    href: "/shop/duo",
    scale: 1,
    image: {
      src: "/images/home/machine.png",
      width: 1116,
      height: 1400,
      alt: "Nove Duo, a steel espresso machine with a steam wand and a walnut portafilter handle",
    },
  },
  {
    id: "pro",
    kind: "machine",
    name: "Nove Pro",
    kicker: "For two or more coffee drinkers",
    note: "Brews and steams at once",
    category: "Machine · Two boilers",
    amount: 1450,
    description:
      "Brews coffee and steams milk at the same time, so it makes four drinks in five minutes.",
    cta: "Buy the Nove Pro",
    href: "/shop/pro",
    scale: 1.16,
    image: {
      src: "/images/home/machine-pro.png",
      width: 1356,
      height: 1400,
      alt: "Nove Pro, a wide steel espresso machine with two gauges, a steam wand and two cups on the tray",
    },
  },
  {
    id: "grinder",
    kind: "add-on",
    name: "Nove grinder",
    kicker: "Add-on",
    note: "Grinds fresh for every coffee",
    category: "Add-on · Grinder",
    amount: 290,
    description:
      "40 settings, and it grinds straight into the portafilter. Steel and walnut, like the machine.",
    cta: "Buy the grinder",
    href: "/shop/grinder",
    scale: 0.5,
    image: {
      src: "/images/home/grinder.png",
      width: 800,
      height: 800,
      alt: "Nove grinder in steel with a walnut knob and a clear hopper of beans",
    },
  },
  {
    id: "jug",
    kind: "add-on",
    name: "Milk jug, 350 ml",
    kicker: "Add-on",
    note: "For steaming milk on the Duo and the Pro",
    category: "Add-on · Milk jug",
    amount: 38,
    description:
      "The same 350 ml jug that comes with the Duo and the Pro. A second one lets you steam milk for the next drink without washing the first.",
    cta: "Buy the milk jug",
    href: "/shop/jug",
    scale: 0.36,
    image: {
      src: "/images/home/jug.png",
      width: 800,
      height: 800,
      alt: "Steel milk jug with a walnut handle",
    },
  },
  {
    id: "beans",
    kind: "subscription",
    name: "House roast",
    kicker: "Every four weeks",
    note: "Chocolate and caramel, for espresso and milk",
    category: "Beans · Medium-dark roast",
    amount: 18,
    description:
      "Our house roast, a medium-dark blend for espresso and milk drinks. A 250 g bag, whole or ground for the machine, every four weeks. Pause or stop any time.",
    cta: "Subscribe",
    href: "/shop/beans",
    scale: 0.5,
    image: {
      src: "/images/shop/beans-house.jpg",
      width: 816,
      height: 1024,
      alt: "A cream paper bag of coffee on a walnut counter, roasted beans spilled in front of it",
    },
  },
  {
    id: "origin",
    kind: "subscription",
    name: "Ethiopia single origin",
    kicker: "Every four weeks",
    note: "Light roast, fruity, best black",
    category: "Beans · Light roast",
    amount: 22,
    description:
      "Beans from one region of Ethiopia, roasted light. Fruity and bright, best as espresso or americano. A 250 g bag, whole or ground for the machine, every four weeks. Pause or stop any time.",
    cta: "Subscribe",
    href: "/shop/origin",
    scale: 0.5,
    image: {
      src: "/images/shop/beans-origin.jpg",
      width: 816,
      height: 1024,
      alt: "A sage green bag of coffee on pale stone beside light roasted beans and a small cup",
    },
  },
  {
    id: "decaf",
    kind: "subscription",
    name: "Decaf roast",
    kicker: "Every four weeks",
    note: "Medium roast, for an evening coffee",
    category: "Beans · Decaf",
    amount: 19,
    description:
      "Our decaf, roasted medium for espresso and milk drinks, for a coffee after dinner. A 250 g bag, whole or ground for the machine, every four weeks. Pause or stop any time.",
    cta: "Subscribe",
    href: "/shop/decaf",
    scale: 0.5,
    image: {
      src: "/images/shop/beans-decaf.jpg",
      width: 816,
      height: 1024,
      alt: "A black bag of coffee on dark green marble under a low lamp",
    },
  },
]

export const CATALOG: CatalogProduct[] = ENTRIES.map((entry) => ({
  ...entry,
  price: formatPrice(entry.amount),
}))

export function catalogProduct(id: CatalogId): CatalogProduct {
  const product = CATALOG.find((entry) => entry.id === id)
  if (!product) throw new Error(`Unknown catalog product "${id}"`)
  return product
}

/** The bag line for a catalog product, before a quantity is set. */
export function toCartItem(product: CatalogProduct) {
  return {
    slug: product.id,
    name: product.name,
    price: product.amount,
    image: product.image.src,
    subscription: product.kind === "subscription",
  }
}

export const MACHINES = CATALOG.filter((p) => p.kind === "machine")
export const ADD_ONS = CATALOG.filter((p) => p.kind === "add-on")
export const ROASTS = CATALOG.filter((p) => p.kind === "subscription")

/** The bestselling machine, shown dark in the shop. */
export const BESTSELLER_ID: CatalogId = "duo"

const FREE_BAGS = 3
const setupFree = catalogProduct("beans")
const setupAmount =
  catalogProduct("duo").amount + catalogProduct("grinder").amount

/** The Duo, grinder and beans bundle: the first three bags are free. */
export const FULL_SETUP = {
  name: "The full setup",
  items: (["duo", "grinder", "beans"] as const).map(catalogProduct),
  free: setupFree,
  saving: FREE_BAGS * setupFree.amount,
  price: formatPrice(setupAmount),
  was: formatPrice(setupAmount + FREE_BAGS * setupFree.amount),
  freeLabel: "First 3 bags of beans",
  note: "Three months of beans free with the Duo and the grinder",
}

/** What ships in the box, per product. */
export const IN_THE_BOX: Record<CatalogId, string> = {
  one: "Portafilter and tamper",
  duo: "Portafilter, tamper and milk jug",
  pro: "Portafilter, tamper and milk jug",
  grinder: "The grinder",
  jug: "One 350 ml jug",
  beans: "A 250 g bag, every four weeks",
  origin: "A 250 g bag, every four weeks",
  decaf: "A 250 g bag, every four weeks",
}
