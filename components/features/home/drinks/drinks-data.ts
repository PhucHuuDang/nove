export interface DrinkPhoto {
  src: string
  alt: string
  width: number
  height: number
}

export interface Drink {
  id: string
  name: string
  how: string
  text: string
  models: ("one" | "duo" | "pro")[]
  photo: DrinkPhoto
}

export interface DrinkPosition {
  desk: { x: number; y: number }
  phone: { x: number; y: number }
  start: number
}

export const DRINKS: Drink[] = [
  {
    id: "espresso",
    name: "Espresso",
    how: "A double shot, black",
    text: "Every other drink starts with this shot. Every model makes it.",
    models: ["one", "duo", "pro"],
    photo: {
      src: "/images/home/cup-dark.jpg",
      alt: "Hand holding a white espresso cup and saucer against black",
      width: 933,
      height: 1400,
    },
  },
  {
    id: "americano",
    name: "Americano",
    how: "A double shot topped with hot water",
    text: "The hot water comes from the machine, so you don't need a kettle.",
    models: ["one", "duo", "pro"],
    photo: {
      src: "/images/home/cup-hand.jpg",
      alt: "Hand holding a small cup of black espresso, seen from above",
      width: 1067,
      height: 1600,
    },
  },
  {
    id: "cortado",
    name: "Cortado",
    how: "A double shot with the same amount of hot milk",
    text: "Small and strong, with a little milk. The wand heats 100 ml of milk in 20 seconds.",
    models: ["duo", "pro"],
    photo: {
      src: "/images/home/kitchen.jpg",
      alt: "Man drinking an espresso at the counter of a dark blue kitchen",
      width: 1200,
      height: 1800,
    },
  },
  {
    id: "flat-white",
    name: "Flat white",
    how: "A double shot with 150 ml of hot milk",
    text: "Milk with a thin layer of foam. The jug in the box is the right size.",
    models: ["duo", "pro"],
    photo: {
      src: "/images/home/latte.jpg",
      alt: "Milk being poured into a cup to make latte art",
      width: 1400,
      height: 1400,
    },
  },
  {
    id: "latte",
    name: "Latte",
    how: "A double shot with 250 ml of hot milk",
    text: "The tall one. The Pro heats milk while the next shot brews.",
    models: ["duo", "pro"],
    photo: {
      src: "/images/home/steam.jpg",
      alt: "Hands steaming milk in a jug at a dark espresso bar",
      width: 2200,
      height: 1469,
    },
  },
]

export const DRINK_POSITIONS: DrinkPosition[] = [
  { desk: { x: 19, y: 60 }, phone: { x: 25, y: 62 }, start: -1 },
  { desk: { x: 19, y: 80 }, phone: { x: 25, y: 77 }, start: 0.08 },
  { desk: { x: 82, y: 38 }, phone: { x: 75, y: 62 }, start: 0.46 },
  { desk: { x: 82, y: 58 }, phone: { x: 75, y: 77 }, start: 0.58 },
  { desk: { x: 82, y: 78 }, phone: { x: 75, y: 92 }, start: 0.7 },
]

export const NOVE_ONE = {
  id: "one",
  name: "Nove One",
  note: "No milk drinks",
  price: "$650",
  cta: "Buy the Nove One",
  href: "/shop/one",
}

export const NOVE_DUO = {
  id: "duo",
  name: "Nove Duo",
  note: "Adds a steam wand for milk",
  price: "$950",
  cta: "Buy the Nove Duo",
  href: "/shop/duo",
}

export const EASE_SOFT = [0.22, 1, 0.36, 1] as const
