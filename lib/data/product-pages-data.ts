export interface MachinePageData {
  slug: "one" | "duo" | "pro"
  name: string
  shortName: string
  tagline: string
  description: string
  price: number
  priceFormatted: string
  dimensions: {
    widthCm: number
    warmupSeconds: number
    bar: number
    basketMm: number
    steamWand: boolean
    dualBoiler: boolean
  }
  hero: {
    thumbnail: string
    thumbnailAlt: string
    aspectRatio: string
    heightPercent: string
    slides: Array<{
      id: string
      label: string
      image: string
      alt: string
      title: string
      description: string
    }>
  }
  why: {
    eyebrow: string
    heading: string
    lede: string
    cards: {
      gauge: { stat: string; title: string; description: string; image: string }
      portafilter: {
        stat: string
        title: string
        description: string
        image: string
      }
      machine: {
        title: string
        description: string
        image: string
        alt: string
      }
      stopwatch: {
        stat: string
        title: string
        description: string
        image: string
      }
    }
  }
  inBox: Array<{
    qty: string
    name: string
    image: string
    alt?: string
    blendMultiply?: boolean
  }>
  owners: {
    title: string
    subtitle: string
    rating: string
    reviewCount: string
    reviews: Array<{
      author: string
      location: string
      avatar: string
      quote: string
      image: string
    }>
  }
  questions: Array<{
    question: string
    answer: string
  }>
}

export const MACHINE_PAGES_DATA: Record<
  "one" | "duo" | "pro",
  MachinePageData
> = {
  one: {
    slug: "one",
    name: "Nove One",
    shortName: "One",
    tagline: "For espresso and americano",
    description:
      "The smallest Nove, 20 cm wide. Get it if you drink your coffee black.",
    price: 650,
    priceFormatted: "$650",
    dimensions: {
      widthCm: 20,
      warmupSeconds: 40,
      bar: 9,
      basketMm: 58,
      steamWand: false,
      dualBoiler: false,
    },
    hero: {
      thumbnail: "/images/home/machine-one.png",
      thumbnailAlt:
        "Nove One, a narrow steel espresso machine with one gauge and a walnut portafilter handle",
      aspectRatio: "1101 / 1400",
      heightPercent: "74.6%",
      slides: [
        {
          id: "in-use",
          label: "Show in use",
          image: "/images/shop/one-in-use.jpg",
          alt: "The Nove One pulling an espresso into a stoneware cup on a walnut counter in morning sun",
          title: "9 bar · 58 mm",
          description: "Brewing pressure and basket width",
        },
        {
          id: "box",
          label: "Show in the box",
          image: "/images/product/box-one.png",
          alt: "The Nove One packed in its open box, with the portafilter and tamper in the tray",
          title: "Portafilter and tamper",
          description: "Free shipping, Europe and the US, 3 to 5 days",
        },
      ],
    },
    why: {
      eyebrow: "Nove One",
      heading: "Why the espresso tastes better",
      lede: "Most home machines get three things wrong. Here is what we do instead.",
      cards: {
        gauge: {
          stat: "9 bar",
          title: "Less bitter coffee",
          description:
            "The same pressure café machines use. More than that makes espresso bitter.",
          image: "/images/home/details-gauge-3d.png",
        },
        portafilter: {
          stat: "58 mm",
          title: "A bigger basket, like cafés use",
          description:
            "The coffee sits flatter, so the water runs through it evenly.",
          image: "/images/home/details-portafilter-3d.png",
        },
        machine: {
          title: "Steel and walnut, no plastic",
          description:
            "2 mm brushed steel panels and an oiled walnut handle that darkens where you hold it.",
          image: "/images/shop/one-in-use.jpg",
          alt: "The Nove One pulling an espresso into a stoneware cup on a walnut counter in morning sun",
        },
        stopwatch: {
          stat: "40s",
          title: "Ready in 40 seconds",
          description: "From switching it on. Most machines take 10 minutes.",
          image: "/images/home/details-stopwatch.png",
        },
      },
    },
    inBox: [
      {
        qty: "x1",
        name: "Nove One",
        image: "/images/home/machine-one.png",
        alt: "Nove One, a narrow steel espresso machine with one gauge and a walnut portafilter handle",
      },
      {
        qty: "x1",
        name: "Portafilter with two baskets",
        image: "/images/home/details-portafilter-3d.png",
      },
      {
        qty: "x1",
        name: "Tamper",
        image: "/images/product/tamper.jpg",
        blendMultiply: true,
      },
    ],
    owners: {
      title: "Nove One owners",
      subtitle: "The 4.9 rating covers all three models.",
      rating: "4.9",
      reviewCount: "1,284 reviews",
      reviews: [
        {
          author: "Tom H.",
          location: "Berlin · Nove One",
          avatar: "/images/home/reviews/faces/tom.jpg",
          quote:
            "20 cm on the counter. The gauge sits at nine every time and it is warm before I finish grinding.",
          image: "/images/home/reviews/tom.jpg",
        },
        {
          author: "Anna L.",
          location: "Lyon · Nove One",
          avatar: "/images/home/reviews/faces/anna.jpg",
          quote:
            "A seal went last winter. The part came in three days with a note on how to fit it. Ten minutes with a screwdriver.",
          image: "/images/home/reviews/anna.jpg",
        },
        {
          author: "James M.",
          location: "Dublin · Nove One",
          avatar: "/images/home/reviews/faces/james.jpg",
          quote:
            "Ordered on a Monday and it was making coffee by Thursday. Shipping was free and the box was packed properly.",
          image: "/images/home/latte.jpg",
        },
        {
          author: "Claire D.",
          location: "Bordeaux · Nove One",
          avatar: "/images/home/reviews/faces/claire.jpg",
          quote:
            "A new bag lands just as the last one runs out. I paused it for August and it started again in September.",
          image: "/images/home/latte.jpg",
        },
      ],
    },
    questions: [
      {
        question: "Which model should I get?",
        answer:
          "If you drink it black, the One. If you drink lattes or flat whites, the Duo. If two or more people at home want milk drinks at the same time, the Pro. Pick wrong and swap within 30 days.",
      },
      {
        question: "Do I need the grinder?",
        answer:
          "Not if you order your beans ground. But ground coffee goes stale in a few days, so a grinder gives you better shots. Ours matches the machine, and any grinder with an espresso setting works.",
      },
      {
        question: "How does the 30-day swap work?",
        answer:
          "Tell us which model you want instead. We ship it, you send the first one back in its box, and we refund or charge the difference.",
      },
      {
        question: "What does the warranty cover?",
        answer:
          "Three years, parts and labour, including the pump and the boiler. After that, repairs at the price of the part.",
      },
      {
        question: "Where do you ship, and how fast?",
        answer:
          "Europe and the US, free, in 3 to 5 days. Other countries on request.",
      },
      {
        question: "Is it loud?",
        answer:
          "It hums rather than rattles. About as loud as a kettle, for the 28 seconds of the shot.",
      },
    ],
  },
  duo: {
    slug: "duo",
    name: "Nove Duo",
    shortName: "Duo",
    tagline: "For lattes and flat whites",
    description:
      "Everything the One makes, plus a steam wand that heats and froths milk. Our bestseller.",
    price: 950,
    priceFormatted: "$950",
    dimensions: {
      widthCm: 27,
      warmupSeconds: 45,
      bar: 9,
      basketMm: 58,
      steamWand: true,
      dualBoiler: false,
    },
    hero: {
      thumbnail: "/images/home/machine.png",
      thumbnailAlt:
        "Nove Duo, a steel espresso machine with a steam wand and a walnut portafilter handle",
      aspectRatio: "1116 / 1400",
      heightPercent: "92%",
      slides: [
        {
          id: "in-use",
          label: "Show in use",
          image: "/images/shop/duo-in-use.jpg",
          alt: "Steaming milk with the Nove Duo in a white tiled kitchen, an iced latte on the counter beside it",
          title: "9 bar · 58 mm",
          description: "Brewing pressure and basket width",
        },
        {
          id: "box",
          label: "Show in the box",
          image: "/images/product/box-duo.png",
          alt: "The Nove Duo packed in its open box, with the portafilter, tamper and milk jug in the tray",
          title: "Portafilter, tamper and milk jug",
          description: "Free shipping, Europe and the US, 3 to 5 days",
        },
      ],
    },
    why: {
      eyebrow: "Nove Duo",
      heading: "Why the espresso tastes better",
      lede: "Most home machines get three things wrong. Here is what we do instead.",
      cards: {
        gauge: {
          stat: "9 bar",
          title: "Less bitter coffee",
          description:
            "The same pressure café machines use. More than that makes espresso bitter.",
          image: "/images/home/details-gauge-3d.png",
        },
        portafilter: {
          stat: "58 mm",
          title: "A bigger basket, like cafés use",
          description:
            "The coffee sits flatter, so the water runs through it evenly.",
          image: "/images/home/details-portafilter-3d.png",
        },
        machine: {
          title: "Steel and walnut, no plastic",
          description:
            "2 mm brushed steel panels and an oiled walnut handle that darkens where you hold it.",
          image: "/images/shop/duo-in-use.jpg",
          alt: "Steaming milk with the Nove Duo in a white tiled kitchen, an iced latte on the counter beside it",
        },
        stopwatch: {
          stat: "45s",
          title: "Ready in 45 seconds",
          description: "From switching it on. Most machines take 10 minutes.",
          image: "/images/home/details-stopwatch.png",
        },
      },
    },
    inBox: [
      {
        qty: "x1",
        name: "Nove Duo",
        image: "/images/home/machine.png",
        alt: "Nove Duo, a steel espresso machine with a steam wand and a walnut portafilter handle",
      },
      {
        qty: "x1",
        name: "Portafilter with two baskets",
        image: "/images/home/details-portafilter-3d.png",
      },
      {
        qty: "x1",
        name: "Tamper",
        image: "/images/product/tamper.jpg",
        blendMultiply: true,
      },
      {
        qty: "x1",
        name: "Milk jug, 350 ml",
        image: "/images/home/jug.png",
      },
    ],
    owners: {
      title: "Nove Duo owners",
      subtitle: "The 4.9 rating covers all three models.",
      rating: "4.9",
      reviewCount: "1,284 reviews",
      reviews: [
        {
          author: "Giulia R.",
          location: "Milan · Nove Duo",
          avatar: "/images/home/reviews/faces/giulia.jpg",
          quote: "Flat whites like the bar downstairs.",
          image: "/images/home/latte.jpg",
        },
        {
          author: "Marco P.",
          location: "Turin · Nove Duo",
          avatar: "/images/home/reviews/faces/marco.jpg",
          quote:
            "Nine kilos of steel. I started with the One, swapped to the Duo in week two, and they sent the Duo before I had posted the One back.",
          image: "/images/home/reviews/tom.jpg",
        },
        {
          author: "Sofia M.",
          location: "Barcelona · Nove Duo",
          avatar: "/images/home/reviews/faces/sofia.jpg",
          quote:
            "Forty settings sounded like too many. It was three. Now I do not touch it.",
          image: "/images/home/latte.jpg",
        },
        {
          author: "Ben T.",
          location: "Portland · Nove Duo",
          avatar: "/images/home/reviews/faces/ben.jpg",
          quote:
            "The wand is strong, so my first jugs went everywhere. By Sunday I was pouring hearts. Give yourself a few days.",
          image: "/images/home/reviews/daniel.jpg",
        },
      ],
    },
    questions: [
      {
        question: "Which model should I get?",
        answer:
          "If you drink it black, the One. If you drink lattes or flat whites, the Duo. If two or more people at home want milk drinks at the same time, the Pro. Pick wrong and swap within 30 days.",
      },
      {
        question: "Do I need the grinder?",
        answer:
          "Not if you order your beans ground. But ground coffee goes stale in a few days, so a grinder gives you better shots. Ours matches the machine, and any grinder with an espresso setting works.",
      },
      {
        question: "How does the 30-day swap work?",
        answer:
          "Tell us which model you want instead. We ship it, you send the first one back in its box, and we refund or charge the difference.",
      },
      {
        question: "What does the warranty cover?",
        answer:
          "Three years, parts and labour, including the pump and the boiler. After that, repairs at the price of the part.",
      },
      {
        question: "Where do you ship, and how fast?",
        answer:
          "Europe and the US, free, in 3 to 5 days. Other countries on request.",
      },
      {
        question: "Is it loud?",
        answer:
          "It hums rather than rattles. About as loud as a kettle, for the 28 seconds of the shot.",
      },
    ],
  },
  pro: {
    slug: "pro",
    name: "Nove Pro",
    shortName: "Pro",
    tagline: "For two or more coffee drinkers",
    description:
      "Brews coffee and steams milk at the same time, so it makes four drinks in five minutes.",
    price: 1450,
    priceFormatted: "$1,450",
    dimensions: {
      widthCm: 32,
      warmupSeconds: 50,
      bar: 9,
      basketMm: 58,
      steamWand: true,
      dualBoiler: true,
    },
    hero: {
      thumbnail: "/images/home/machine-pro.png",
      thumbnailAlt:
        "Nove Pro, a wide steel espresso machine with two gauges, a steam wand and two cups on the tray",
      aspectRatio: "1356 / 1400",
      heightPercent: "87.8%",
      slides: [
        {
          id: "in-use",
          label: "Show in use",
          image: "/images/shop/pro-in-use.jpg",
          alt: "The Nove Pro pulling two espressos while milk steams at night, four cups waiting on a green marble counter",
          title: "9 bar · 58 mm",
          description: "Brewing pressure and basket width",
        },
        {
          id: "box",
          label: "Show in the box",
          image: "/images/product/box-pro.png",
          alt: "The Nove Pro packed in its open box, with the portafilter, tamper and milk jug in the tray",
          title: "Portafilter, tamper and milk jug",
          description: "Free shipping, Europe and the US, 3 to 5 days",
        },
      ],
    },
    why: {
      eyebrow: "Nove Pro",
      heading: "Why the espresso tastes better",
      lede: "Most home machines get three things wrong. Here is what we do instead.",
      cards: {
        gauge: {
          stat: "9 bar",
          title: "Less bitter coffee",
          description:
            "The same pressure café machines use. More than that makes espresso bitter.",
          image: "/images/home/details-gauge-3d.png",
        },
        portafilter: {
          stat: "58 mm",
          title: "A bigger basket, like cafés use",
          description:
            "The coffee sits flatter, so the water runs through it evenly.",
          image: "/images/home/details-portafilter-3d.png",
        },
        machine: {
          title: "Steel and walnut, no plastic",
          description:
            "2 mm brushed steel panels and an oiled walnut handle that darkens where you hold it.",
          image: "/images/shop/pro-in-use.jpg",
          alt: "The Nove Pro pulling two espressos while milk steams at night, four cups waiting on a green marble counter",
        },
        stopwatch: {
          stat: "50s",
          title: "Ready in 50 seconds",
          description: "From switching it on. Most machines take 10 minutes.",
          image: "/images/home/details-stopwatch.png",
        },
      },
    },
    inBox: [
      {
        qty: "x1",
        name: "Nove Pro",
        image: "/images/home/machine-pro.png",
        alt: "Nove Pro, a wide steel espresso machine with two gauges, a steam wand and two cups on the tray",
      },
      {
        qty: "x1",
        name: "Portafilter with two baskets",
        image: "/images/home/details-portafilter-3d.png",
      },
      {
        qty: "x1",
        name: "Tamper",
        image: "/images/product/tamper.jpg",
        blendMultiply: true,
      },
      {
        qty: "x1",
        name: "Milk jug, 350 ml",
        image: "/images/home/jug.png",
      },
    ],
    owners: {
      title: "Nove Pro owners",
      subtitle: "The 4.9 rating covers all three models.",
      rating: "4.9",
      reviewCount: "1,284 reviews",
      reviews: [
        {
          author: "Sarah K.",
          location: "Leeds · Nove Pro",
          avatar: "/images/home/reviews/faces/sarah.jpg",
          quote:
            "Two boilers means no waiting between drinks. Worth it for a house of coffee drinkers.",
          image: "/images/home/reviews/tom.jpg",
        },
        {
          author: "Daniel P.",
          location: "Munich · Nove Pro",
          avatar: "/images/home/reviews/faces/daniel.jpg",
          quote:
            "The handle feels like a tool from a kitchen, not an appliance. It belongs on the counter.",
          image: "/images/home/reviews/daniel.jpg",
        },
        {
          author: "Lena W.",
          location: "Vienna · Nove Pro",
          avatar: "/images/home/reviews/faces/lena.jpg",
          quote:
            "Four of us, four different coffees. It steams the milk for one while the next shot is pulling, so nobody waits.",
          image: "/images/home/latte.jpg",
        },
        {
          author: "Yusuf A.",
          location: "Rotterdam · Nove Pro",
          avatar: "/images/home/reviews/faces/yusuf.jpg",
          quote:
            "It warms up while I take the cups down. Then it is coffee for two and milk at the same time.",
          image: "/images/home/reviews/anna.jpg",
        },
      ],
    },
    questions: [
      {
        question: "Which model should I get?",
        answer:
          "If you drink it black, the One. If you drink lattes or flat whites, the Duo. If two or more people at home want milk drinks at the same time, the Pro. Pick wrong and swap within 30 days.",
      },
      {
        question: "Do I need the grinder?",
        answer:
          "Not if you order your beans ground. But ground coffee goes stale in a few days, so a grinder gives you better shots. Ours matches the machine, and any grinder with an espresso setting works.",
      },
      {
        question: "How does the 30-day swap work?",
        answer:
          "Tell us which model you want instead. We ship it, you send the first one back in its box, and we refund or charge the difference.",
      },
      {
        question: "What does the warranty cover?",
        answer:
          "Three years, parts and labour, including the pump and the boiler. After that, repairs at the price of the part.",
      },
      {
        question: "Where do you ship, and how fast?",
        answer:
          "Europe and the US, free, in 3 to 5 days. Other countries on request.",
      },
      {
        question: "Is it loud?",
        answer:
          "It hums rather than rattles. About as loud as a kettle, for the 28 seconds of the shot.",
      },
    ],
  },
}
