import type { Plan } from "@/components/shared/plan-card"

export const SHOWROOM_STEPS = [
  {
    title: "Bring your own beans",
    text: "Make the coffee you drink at home on all three.",
    photo: "/images/showroom/tasting.jpg",
    alt: "Espresso cups on a pale oak counter seen from above, a hand picking one up beside a scale, a bowl of beans and a notebook",
  },
  {
    title: "Try the grinder",
    text: "Set the grind with us before you pull a shot.",
    photo: "/images/showroom/grinder.jpg",
    alt: "The Nove grinder filling a dosing cup with fresh grounds under a warm lamp at night",
  },
  {
    title: "Pull a shot on each",
    text: "The One, the Duo and the Pro, switched on side by side.",
    photo: "/images/showroom/pull.jpg",
    alt: "Shots pouring into small glasses on the One, the Duo and the Pro side by side in bright morning light",
  },
  {
    title: "Steam milk on the Duo",
    text: "And on the Pro, which brews and steams at once.",
    photo: "/images/showroom/steam.jpg",
    alt: "Steaming milk on the Duo under a low lamp in the showroom after dark",
  },
]

const PLACE = {
  trying: {
    title: "The counter",
    note: "Try each model yourself",
    src: "/images/showroom/trying.jpg",
    alt: "A visitor locking the portafilter into the Duo while a friend laughs with a cup, and a woman pulling a shot on the Pro further along the counter",
  },
  window: {
    title: "By the window",
    note: "A seat for the coffee after",
    src: "/images/showroom/window.jpg",
    alt: "Someone on a stool at the rainy window with a cup, a tram passing outside",
  },
  counter: {
    title: "At the machine",
    note: "You make each coffee yourself",
    src: "/images/showroom/counter.jpg",
    alt: "Hands fitting the portafilter into the Nove Duo at the showroom counter",
  },
  bench: {
    title: "The workshop",
    note: "Where we repair them",
    src: "/images/showroom/bench.jpg",
    alt: "Our engineer tightening a fitting inside a machine with its casing off while a customer leans in to watch",
  },
  street: {
    title: "From the street",
    note: "Via Nizza 45, Turin",
    src: "/images/showroom/storefront.jpg",
    alt: "The showroom's arched window on Via Nizza in low afternoon sun, the three machines inside, someone in a long coat walking past",
  },
}

export type ShowroomPlace = (typeof PLACE)[keyof typeof PLACE]

/** Order for the swipeable carousel below `lg`. */
export const SHOWROOM_CAROUSEL = [
  PLACE.trying,
  PLACE.window,
  PLACE.counter,
  PLACE.bench,
  PLACE.street,
]

/** Fanned layout at `lg`: `side` is the distance from the centre photo. */
export const SHOWROOM_FAN = [
  {
    ...PLACE.window,
    width: "w-1/6",
    aspect: "aspect-3/4",
    z: "z-10",
    side: -2,
  },
  {
    ...PLACE.counter,
    width: "w-1/5",
    aspect: "aspect-4/5",
    z: "z-20",
    side: -1,
  },
  {
    ...PLACE.trying,
    width: "w-3/10",
    aspect: "aspect-4/5",
    z: "z-30",
    side: 0,
  },
  { ...PLACE.bench, width: "w-1/5", aspect: "aspect-4/5", z: "z-20", side: 1 },
  { ...PLACE.street, width: "w-1/6", aspect: "aspect-3/4", z: "z-10", side: 2 },
]

export const SHOWROOM_PLANS: Plan[] = [
  {
    glow: "/images/showroom/storefront.jpg",
    title: "Find us",
    note: "Via Nizza 45, 10125 Turin",
    statLabel: "From Porta Nuova",
    statBadge: "On foot",
    stat: "10 min",
    points: [
      "Directions open in Google Maps",
      "Open Tuesday to Saturday, 10:00 to 19:00",
      "Closed on Sunday and Monday",
    ],
    cta: {
      label: "Get directions",
      href: "https://www.google.com/maps/search/?api=1&query=Via+Nizza+45+10125+Torino",
      external: true,
    },
  },
  {
    glow: "/images/showroom/room.jpg",
    title: "Book a visit",
    note: "With the barista or the engineer",
    statLabel: "A visit takes",
    statBadge: "Free",
    stat: "45 min",
    points: [
      "Try the One, the Duo and the Pro",
      "Bring the beans you drink at home",
      "Steam milk and try the grinder",
    ],
    cta: { label: "Book a visit", href: "/contact#form", variant: "accent" },
  },
  {
    glow: "/images/showroom/window.jpg",
    title: "Talk to us",
    note: "If you cannot come to Turin",
    statLabel: "Call length",
    statBadge: "Free",
    stat: "20 min",
    points: [
      "Tell us what you drink",
      "We tell you which model to get",
      "With the two of us, not a sales team",
    ],
    cta: { label: "Contact us", href: "/contact" },
  },
]
