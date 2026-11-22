import type { CatalogId } from "@/lib/data/catalog"

/** A labelled point on an in-use photo, in percent of the photo's size. */
export interface PhotoSpot {
  id: string
  label: string
  x: number
  y: number
  figure?: string
  title: string
  text: string
}

export interface InUsePhoto {
  src: string
  alt: string
  /** How far right (in %) the photo may crop before it stops panning. */
  edge: number
  /** The photo is dark, so overlays use the light theme. */
  dark: boolean
  spots: PhotoSpot[]
}

type SpotPosition = Pick<PhotoSpot, "x" | "y">

const gaugeSpot = (position: SpotPosition): PhotoSpot => ({
  id: "gauge",
  label: "Pressure gauge",
  ...position,
  figure: "9 bar",
  title: "Less bitter coffee",
  text: "The same pressure café machines use. More than that makes espresso bitter.",
})

const portafilterSpot = (position: SpotPosition): PhotoSpot => ({
  id: "portafilter",
  label: "Portafilter",
  ...position,
  figure: "58 mm",
  title: "A bigger basket, like cafés use",
  text: "The coffee sits flatter, so the water runs through it evenly.",
})

const jugSpot = (position: SpotPosition, model: string): PhotoSpot => ({
  id: "jug",
  label: "Milk jug",
  ...position,
  figure: "350 ml",
  title: "A milk jug in the box",
  text: `It comes with the ${model}, along with the portafilter and tamper.`,
})

export const IN_USE_PHOTOS: Partial<Record<CatalogId, InUsePhoto>> = {
  one: {
    src: "/images/shop/one-in-use.jpg",
    alt: "The Nove One pulling an espresso into a stoneware cup on a walnut counter in morning sun",
    edge: 88,
    dark: true,
    spots: [
      gaugeSpot({ x: 64.1, y: 35.6 }),
      portafilterSpot({ x: 64.5, y: 53.5 }),
      {
        id: "shot",
        label: "The shot",
        x: 65.8,
        y: 68.6,
        title: "Espresso and americano",
        text: "Makes espresso and americano, but not milk drinks. Get it if you drink your coffee black.",
      },
      {
        id: "warmup",
        label: "Warm-up",
        x: 79,
        y: 40,
        figure: "40 s",
        title: "Ready in 40 seconds",
        text: "Most home machines take about 10 minutes to warm up.",
      },
    ],
  },
  duo: {
    src: "/images/shop/duo-in-use.jpg",
    alt: "Steaming milk with the Nove Duo in a white tiled kitchen, an iced latte on the counter beside it",
    edge: 84,
    dark: false,
    spots: [
      gaugeSpot({ x: 57, y: 22.4 }),
      portafilterSpot({ x: 58.6, y: 37.8 }),
      {
        id: "wand",
        label: "Steam wand",
        x: 71.6,
        y: 40.8,
        title: "A steam wand for milk",
        text: "Steams milk for lattes and flat whites. The One has no wand.",
      },
      jugSpot({ x: 73.5, y: 54 }, "Duo"),
    ],
  },
  pro: {
    src: "/images/shop/pro-in-use.jpg",
    alt: "The Nove Pro pulling two espressos while milk steams at night, four cups waiting on a green marble counter",
    edge: 85,
    dark: true,
    spots: [
      gaugeSpot({ x: 57, y: 32.8 }),
      {
        id: "boilers",
        label: "Two boilers",
        x: 65.1,
        y: 33.2,
        title: "Brews and steams at once",
        text: "Brews coffee and steams milk at the same time, so it makes four drinks in five minutes.",
      },
      portafilterSpot({ x: 61.2, y: 49 }),
      jugSpot({ x: 79.8, y: 59 }, "Pro"),
    ],
  },
  grinder: {
    src: "/images/shop/grinder-in-use.jpg",
    alt: "The Nove grinder on an oak counter, its hopper full of beans, grinding into a portafilter",
    edge: 93,
    dark: false,
    spots: [
      {
        id: "hopper",
        label: "Hopper",
        x: 75,
        y: 22,
        title: "Beans stay whole until you grind",
        text: "Ground coffee goes stale in a few days, so grind just before each shot.",
      },
      {
        id: "settings",
        label: "Grind dial",
        x: 67.4,
        y: 42.8,
        figure: "40",
        title: "40 settings",
        text: "Turn the walnut dial toward fine for espresso, a step at a time, until the shot runs right.",
      },
      {
        id: "cradle",
        label: "Portafilter cradle",
        x: 72,
        y: 62,
        figure: "58 mm",
        title: "Grinds straight into the basket",
        text: "The cradle holds the portafilter of every Nove while it fills.",
      },
    ],
  },
  jug: {
    src: "/images/shop/jug-in-use.jpg",
    alt: "Pouring steamed milk from the Nove milk jug into a flat white in front of the Nove Pro",
    edge: 96,
    dark: true,
    spots: [
      {
        id: "size",
        label: "Milk jug",
        x: 83,
        y: 57,
        figure: "350 ml",
        title: "Enough milk for one or two drinks",
        text: "Fill it to just below the spout before you steam, so the milk has room to grow.",
      },
      {
        id: "spout",
        label: "Spout",
        x: 68.4,
        y: 63,
        title: "A pointed spout for pouring",
        text: "Pour slowly from high up, then close to the cup to draw the pattern.",
      },
      {
        id: "machines",
        label: "Nove Pro",
        x: 79.4,
        y: 15.6,
        title: "For the Duo and the Pro",
        text: "Both come with one jug in the box. The One has no steam wand.",
      },
    ],
  },
}
