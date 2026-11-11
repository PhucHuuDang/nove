export interface DetailPart {
  figure: string
  unit: string
  label: string
  most: string
  title: string
  text: string
}

export const DETAILS_DATA = {
  eyebrow: "What is inside",
  heading: "Why the espresso tastes better",
  lede: "Most home machines get three things wrong. Here is what we do instead.",
  lineup: {
    title: "Same parts in every model",
    text: "The One, the Duo and the Pro all brew at 9 bar and use the same 58 mm basket. Only the milk side changes.",
    link: { label: "Compare the models", href: "/shop#compare" },
  },
  materials: {
    title: "Steel and walnut, no plastic",
    text: "2 mm brushed steel panels and an oiled walnut handle that darkens where you hold it.",
  },
  parts: {
    pressure: {
      figure: "9",
      unit: "bar",
      label: "Brewing pressure",
      most: "15 bar",
      title: "Less bitter coffee",
      text: "The same pressure café machines use. More than that makes espresso bitter.",
    },
    basket: {
      figure: "58",
      unit: "mm",
      label: "Basket width",
      most: "51 mm",
      title: "A bigger basket, like cafés use",
      text: "The coffee sits flatter, so the water runs through it evenly.",
    },
    warmup: {
      figure: "40",
      unit: "s",
      label: "Warm-up",
      most: "10 min",
      title: "Ready in 40 seconds",
      text: "On the One. The Duo takes 45 seconds and the Pro 90.",
    },
  },
  story: {
    title: "Fits on a home counter",
    text: "The same espresso a café makes, from a machine 20 to 32 cm wide.",
  },
  art: {
    exploded: {
      src: "/images/home/details-exploded.png",
      alt: "The Nove Duo pulled apart: the top tray, the steel body, the boiler, the gauge, the basket, the portafilter and the drip tray",
      width: 610,
      height: 998,
    },
    gauge: {
      src: "/images/home/details-gauge-3d.png",
      alt: "",
      width: 788,
      height: 771,
    },
    portafilter: {
      src: "/images/home/details-portafilter-3d.png",
      alt: "",
      width: 871,
      height: 909,
    },
    stopwatch: {
      src: "/images/home/details-stopwatch.png",
      alt: "",
      width: 747,
      height: 849,
    },
    swatches: {
      src: "/images/home/details-swatches.png",
      alt: "",
      width: 596,
      height: 822,
    },
    kitchen: {
      src: "/images/home/details-kitchen.jpg",
      alt: "A woman holding an espresso cup at a kitchen table, the Nove Duo on the counter behind her",
      width: 768,
      height: 1024,
    },
  },
  machines: [
    {
      id: "one",
      name: "Nove One",
      price: "$650",
      scale: 0.8,
      image: "/images/home/machine-one.png",
      alt: "Nove One, a narrow steel espresso machine with one gauge and a walnut portafilter handle",
      width: 1101,
      height: 1400,
    },
    {
      id: "duo",
      name: "Nove Duo",
      price: "$950",
      scale: 1,
      image: "/images/home/machine.png",
      alt: "Nove Duo, a steel espresso machine with a steam wand and a walnut portafilter handle",
      width: 1116,
      height: 1400,
    },
    {
      id: "pro",
      name: "Nove Pro",
      price: "$1,450",
      scale: 1.16,
      image: "/images/home/machine-pro.png",
      alt: "Nove Pro, a wide steel espresso machine with two gauges, a steam wand and two cups on the tray",
      width: 1356,
      height: 1400,
    },
  ],
}
