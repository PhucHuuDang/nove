export interface ModelFeatureItem {
  included: boolean
  prefix?: string
  number?: string
  suffix?: string
  text?: string
}

export interface MachineModel {
  id: string
  name: string
  price: string
  tagline: string
  href: string
  cta: string
  badge?: string
  theme: "light" | "dark"
  image: {
    src: string
    alt: string
    width: number
    height: number
  }
  widthStyle: {
    w: string
    wLg: string
  }
  features: ModelFeatureItem[]
}

export const MODELS_SECTION_DATA = {
  eyebrow: "Three models",
  heading: "Pick by what you drink",
  lede: "All three make the same espresso. They differ in milk, and in how many drinks you can make back to back.",
  models: [
    {
      id: "one",
      name: "Nove One",
      price: "$650",
      tagline: "For espresso and black coffee",
      href: "/shop/one",
      cta: "Buy the Nove One",
      theme: "light",
      image: {
        src: "/images/home/machine-one.png",
        alt: "Nove One, a narrow steel espresso machine with one gauge and a walnut portafilter handle",
        width: 1101,
        height: 1400,
      },
      widthStyle: {
        w: "35%",
        wLg: "27%",
      },
      features: [
        { included: true, text: "Espresso and americano" },
        { included: false, text: "Doesn't steam milk" },
        {
          included: true,
          prefix: "Ready in ",
          number: "40",
          suffix: " seconds",
        },
        { included: true, number: "1.4", suffix: "L water tank" },
        { included: true, text: "In the box: portafilter, tamper" },
      ],
    },
    {
      id: "duo",
      name: "Nove Duo",
      price: "$950",
      tagline: "For lattes and flat whites",
      href: "/shop/duo",
      cta: "Buy the Nove Duo",
      badge: "Bestseller",
      theme: "dark",
      image: {
        src: "/images/home/machine.png",
        alt: "Nove Duo, a steel espresso machine with a steam wand and a walnut portafilter handle",
        width: 1116,
        height: 1400,
      },
      widthStyle: {
        w: "44%",
        wLg: "34%",
      },
      features: [
        { included: true, text: "Espresso and milk drinks" },
        { included: true, text: "Brews, then steams the milk" },
        {
          included: true,
          prefix: "Ready in ",
          number: "45",
          suffix: " seconds",
        },
        { included: true, number: "1.8", suffix: "L water tank" },
        { included: true, text: "In the box: portafilter, tamper, milk jug" },
      ],
    },
    {
      id: "pro",
      name: "Nove Pro",
      price: "$1,450",
      tagline: "For two or more coffee drinkers",
      href: "/shop/pro",
      cta: "Buy the Nove Pro",
      theme: "light",
      image: {
        src: "/images/home/machine-pro.png",
        alt: "Nove Pro, a wide steel espresso machine with two gauges, a steam wand and two cups on the tray",
        width: 1356,
        height: 1400,
      },
      widthStyle: {
        w: "51%",
        wLg: "39%",
      },
      features: [
        { included: true, text: "Espresso and milk drinks" },
        { included: true, text: "Brews and steams at the same time" },
        { included: true, text: "Four drinks in five minutes" },
        {
          included: true,
          prefix: "Ready in ",
          number: "90",
          suffix: " seconds",
        },
        { included: true, number: "2.5", suffix: "L water tank" },
        { included: true, text: "In the box: portafilter, tamper, milk jug" },
      ],
    },
  ] satisfies MachineModel[],
}
