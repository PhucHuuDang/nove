export interface AddonItem {
  id: string
  label: string
  name: string
  price: string
  rawPrice: number
  was?: string
  per?: string
  cta: string
  tone: string
  ink?: boolean
  isBeans?: boolean
  image: {
    src: string
    alt: string
    width: number
    height: number
    sizes: string
    className: string
  }
}

export const ADDONS_DATA = {
  eyebrow: "Add-ons",
  heading: "What else you will need",
  lede: "Espresso needs beans ground just before you brew. Add our grinder, a bag of beans every four weeks, or a spare milk jug.",
  items: [
    {
      id: "grinder",
      label: "Grinds fresh for every coffee",
      name: "Nove grinder",
      price: "$290",
      rawPrice: 290,
      cta: "Add to bag",
      tone: "raised-card",
      image: {
        src: "/images/home/grinder.png",
        alt: "Nove grinder in steel with a walnut knob and a clear hopper of beans",
        width: 800,
        height: 800,
        sizes: "16rem",
        className: "mix-blend-multiply h-full w-auto",
      },
    },
    {
      id: "jug",
      label: "For steaming milk on the Duo and the Pro",
      name: "Milk jug, 350 ml",
      price: "$38",
      rawPrice: 38,
      cta: "Add to bag",
      tone: "raised-card",
      image: {
        src: "/images/home/jug.png",
        alt: "Steel milk jug with a walnut handle",
        width: 800,
        height: 800,
        sizes: "14rem",
        className: "mix-blend-multiply h-[80%] w-auto",
      },
    },
    {
      id: "beans",
      label: "Every four weeks",
      name: "House roast",
      price: "$18",
      rawPrice: 18,
      per: "a bag",
      cta: "Subscribe",
      tone: "raised-card",
      isBeans: true,
      image: {
        src: "/images/shop/beans-house.jpg",
        alt: "A cream paper bag of coffee on a walnut counter, roasted beans spilled in front of it",
        width: 816,
        height: 1024,
        sizes: "12rem",
        className: "h-full w-full object-cover",
      },
    },
    {
      id: "setup",
      label: "Duo and grinder, 3 bags of beans free",
      name: "The full setup",
      price: "$1,240",
      rawPrice: 1240,
      was: "$1,294",
      cta: "Add to bag",
      tone: "dark bg-background text-foreground",
      ink: true,
      image: {
        src: "/images/home/machine.png",
        alt: "Nove Duo, a steel espresso machine with a steam wand and a walnut portafilter handle",
        width: 1116,
        height: 1400,
        sizes: "16rem",
        className: "h-full w-auto",
      },
    },
  ] satisfies AddonItem[],
}
