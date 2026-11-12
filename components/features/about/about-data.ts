export const ABOUT_FACTS = [
  { label: "Founded", value: "2019" },
  { label: "Workshop", value: "Via Nizza, Turin" },
  { label: "Warranty", value: "3 years" },
]

export const ABOUT_STATS = [
  { from: 2000, to: 2019, label: "Founded in Turin" },
  { from: 0, to: 10, label: "The first machines, built by hand" },
  { from: 0, to: 3, label: "Models: the One, the Duo and the Pro" },
]

export const ABOUT_STORY_PHOTOS = [
  {
    src: "/images/about/sketch.jpg",
    alt: "A pencil drawing of the machine on a strip of till roll on a walnut bar",
  },
  {
    src: "/images/about/workshop.jpg",
    alt: "Hands with a screwdriver beside a Nove with its side panel off on a workshop bench",
  },
]

export const ABOUT_TIMELINE = [
  {
    year: "2019",
    title: "The first ten",
    text: "Built by hand. A bar near Porta Palazzo and a repair bench behind it. The machine drawn on a till roll.",
    photo: "/images/home/cup-hand.jpg",
  },
  {
    year: "2021",
    title: "The Duo",
    text: "The steam wand and the milk jug. Walnut handles instead of plastic. A workshop on Via Nizza.",
    photo: "/images/shop/duo-in-use.jpg",
  },
  {
    year: "2023",
    title: "The Pro",
    text: "Two boilers, brews while it steams. A parts shelf for every machine ever sold. Three years of warranty on all of them.",
    photo: "/images/shop/pro-in-use.jpg",
  },
  {
    year: "2026",
    title: "The One",
    text: "Espresso only, 20 cm wide. Swap any model for another within 30 days. Still one machine. Still nine bar.",
    photo: "/images/shop/one-in-use.jpg",
  },
]

export const ABOUT_BUILT = [
  {
    src: "/images/home/details-gauge-3d.png",
    alt: "The pressure gauge",
    cutout: true,
    title: "A gauge on the front",
    text: "Every machine holds 9 bar at the coffee, and the gauge shows it while the shot runs.",
  },
  {
    src: "/images/home/details-exploded.png",
    alt: "The Duo's steel body taken apart",
    cutout: true,
    title: "2 mm steel body",
    text: "Brushed steel, with panels that come off with one screwdriver.",
  },
  {
    src: "/images/home/details-swatches.png",
    alt: "Steel, walnut and copper samples",
    cutout: true,
    title: "Oiled walnut handles",
    text: "They darken where you hold them.",
  },
  {
    src: "/images/home/details-portafilter-3d.png",
    alt: "The 58 mm portafilter with its walnut handle",
    cutout: true,
    title: "58 mm portafilter",
    text: "The handle that holds the coffee, in the size cafés use, so any 58 mm basket or tamper fits.",
  },
  {
    src: "/images/about/parts.jpg",
    alt: "A workshop shelf of drawers holding spare handles, portafilters and gauges",
    cutout: false,
    title: "Every part has a number",
    text: "We keep parts in Turin for every machine we have sold.",
  },
  {
    src: "/images/showroom/workshop.jpg",
    alt: "Hands tightening a fitting inside a machine with its casing off on the workshop bench",
    cutout: false,
    title: "Repairs for as long as you keep it",
    text: "Three years of warranty, then repairs at the price of the part.",
  },
]

export const ABOUT_FOUNDERS = [
  {
    src: "/images/about/barista.jpg",
    alt: "The barista behind a walnut espresso bar",
    title: "The barista",
    text: "Ran a bar near Porta Palazzo. Ask about taste, milk drinks and which model makes the coffee you drink.",
  },
  {
    src: "/images/about/engineer.jpg",
    alt: "The engineer with crossed arms in the repair workshop",
    title: "The engineer",
    text: "Fixed the bar's machines. Ask about warm-up times, the Pro's two boilers, repairs and the warranty.",
  },
]

export const ABOUT_PICKS = [
  {
    photo: "/images/shop/duo-in-use.jpg",
    alt: "Nove Duo steaming milk in a white-tiled kitchen",
    title: "Order online",
    text: "Swap it for another model within 30 days.",
    cta: { label: "Shop the machines", href: "/shop", variant: "accent" },
  },
  {
    photo: "/images/showroom/room.jpg",
    alt: "The three models on a walnut counter in the Turin showroom",
    title: "Try all three in Turin",
    text: "Via Nizza 45, Tuesday to Saturday, 10:00 to 19:00. Visits are free.",
    cta: { label: "Plan a visit", href: "/showroom", variant: "default" },
  },
  {
    photo: "/images/home/cup-hand.jpg",
    alt: "A hand holding a small cup of black espresso, seen from above",
    title: "Tell us what you drink",
    text: "Write to us and one of us replies within 1 working day.",
    cta: { label: "Contact us", href: "/contact", variant: "default" },
  },
] as const
