import { Truck, RefreshCw, ShieldCheck, Sparkles } from "lucide-react"
import type { HelpTabDef, GuideItem } from "./help-guide-types"

export const HELP_TABS: HelpTabDef[] = [
  { id: "shipping", label: "Shipping", icon: Truck },
  { id: "swap", label: "Swap", icon: RefreshCw },
  { id: "warranty", label: "Warranty", icon: ShieldCheck },
  { id: "care", label: "Care", icon: Sparkles },
]

export const HELP_GUIDES: GuideItem[] = [
  {
    id: "shipping",
    topic: "shipping",
    title: "Shipping and delivery",
    sub: "Where we ship, how long it takes and what is in the box",
    corner: "3 to 5 days",
    fact: { label: "Delivery", value: "Free, in 3 to 5 days" },
    sections: [
      {
        heading: "Where we ship",
        text: "Europe and the US, free, in 3 to 5 days. Other countries on request.",
        bullets: [
          "Free to Europe and the US",
          "3 to 5 days to arrive",
          "Machines and add-ons ship free",
        ],
        picture: {
          src: "/images/home/faq-shipping.jpg",
          alt: "A closed cardboard box",
          width: 1200,
          height: 900,
        },
      },
      {
        heading: "If something arrives damaged",
        text: "Check the box when it arrives. If anything is damaged, send us a photo within 7 days and we send a new one.",
      },
      {
        heading: "What is in the box",
        bullets: [
          "The machine and the power lead",
          "A portafilter with two baskets",
          "A tamper",
          "A 350 ml milk jug with the Duo and the Pro",
        ],
        picture: {
          src: "/images/product/box-duo.png",
          alt: "The Nove Duo packed in its open box with portafilter",
          width: 1000,
          height: 1255,
        },
      },
      {
        heading: "Keep the box for 30 days",
        text: "If you swap the model, the first machine goes back in the box it came in.",
      },
    ],
    steps: [
      "We email you when your order ships.",
      "It arrives in 3 to 5 days, free, anywhere in Europe and the US.",
      "Check the box. If anything is damaged, send us a photo within 7 days.",
      "Rinse the tank and run one full tank of water through the machine before your first coffee.",
      "Keep the box for 30 days in case you swap the model.",
    ],
  },
  {
    id: "swap",
    topic: "swap",
    title: "The 30-day swap",
    sub: "Change to another model within 30 days of delivery",
    corner: "30 days",
    fact: { label: "Time to swap", value: "30 days" },
    sections: [
      {
        heading: "How it works",
        text: "Pick wrong and swap within 30 days. We ship the new model, you box up the old one, and we settle the difference.",
        picture: {
          src: "/images/product/box-one.png",
          alt: "The Nove One packed in its open box",
          width: 1000,
          height: 1255,
        },
      },
      {
        heading: "What a swap costs",
        text: "We charge or refund the difference between the two prices.",
        bullets: [
          "One to Duo: we charge $300",
          "Duo to Pro: we charge $500",
          "One to Pro: we charge $800",
          "To a cheaper model: we refund the same amount",
        ],
      },
      {
        heading: "Which model to swap to",
        text: "If you drink it black, the One. If you drink lattes or flat whites, the Duo. If two or more people at home want milk drinks at the same time, the Pro. Pick wrong and swap within 30 days.",
      },
      {
        heading: "For machines only",
        text: "For the grinder, the milk jug and the beans, you can cancel within 14 days of delivery instead. An opened bag of beans cannot be returned.",
      },
    ],
    steps: [
      "Write to us and say which model you want instead.",
      "We ship the new one.",
      "Send the first one back in its box.",
      "We refund or charge the difference.",
    ],
  },
  {
    id: "warranty",
    topic: "warranty",
    title: "The 3-year warranty",
    sub: "Parts and labour, including the pump and the boiler",
    corner: "3 years",
    fact: { label: "Covered for", value: "3 years" },
    sections: [
      {
        heading: "What it covers",
        text: "Parts and labour for 3 years from delivery, including the pump and the boiler. We pay for shipping both ways. After that, repairs at the price of the part.",
        bullets: [
          "Parts and labour for 3 years from delivery",
          "The pump and the boiler included",
          "We pay for shipping both ways",
          "After 3 years, repairs at the price of the part",
        ],
        picture: {
          src: "/images/home/faq-warranty.jpg",
          alt: "The machine's boiler and pump",
          width: 1200,
          height: 900,
        },
      },
      {
        heading: "What it does not cover",
        bullets: [
          "Damage from a fall",
          "Damage from limescale, so descale on time",
          "Repairs by someone else",
        ],
      },
      {
        heading: "Parts for every machine",
        text: "We keep every part for every machine we have sold.",
      },
    ],
    steps: [
      "Write to hello@nove.coffee with your order number and what the machine does.",
      "We reply within 24 hours, Monday to Friday.",
      "We repair or replace the machine and pay for shipping both ways.",
    ],
  },
  {
    id: "daily",
    topic: "care",
    title: "Daily cleaning",
    sub: "Rinse the basket, rinse the screen and wipe the steam wand",
    corner: "Daily",
    fact: { label: "Time it takes", value: "2 minutes" },
    sections: [
      {
        heading: "After each coffee",
        text: "Knock the used coffee out of the basket, rinse the basket under the tap and wipe the rim of the portafilter dry.",
      },
      {
        heading: "After steaming milk",
        text: "On the Duo and the Pro, wipe the steam wand with a damp cloth straight away, then open it for a second to blow out the milk inside. Dried milk blocks the tip.",
      },
      {
        heading: "At the end of the day",
        bullets: [
          "Run water for 2 seconds with the portafilter out, to rinse the screen above the basket",
          "Empty and rinse the drip tray",
          "Wipe the steel with a dry cloth",
        ],
      },
    ],
    steps: [
      "Knock out the used coffee and rinse the basket.",
      "Wipe the steam wand and open it for a second.",
      "Run water for 2 seconds with the portafilter out.",
      "Empty and rinse the drip tray.",
    ],
  },
  {
    id: "backflush",
    topic: "care",
    title: "Backflushing",
    sub: "Clean the parts above the basket you cannot reach",
    corner: "Weekly",
    fact: { label: "How often", value: "Once a week" },
    sections: [
      {
        heading: "What you need",
        text: "A blind basket, which is a basket with no holes. Any 58 mm blind basket fits. Once a month you also need espresso machine cleaner.",
      },
      {
        heading: "Why it matters",
        text: "Coffee oil builds up above the basket and makes the espresso taste bitter. Backflushing pushes water back through those parts and out into the drip tray.",
      },
    ],
    steps: [
      "Put the blind basket in the portafilter and lock it into the machine.",
      "Run the pump for 10 seconds, then stop it for 10 seconds. Do this 5 times.",
      "Once a month, put half a teaspoon of cleaner in the blind basket first, then run 5 more rounds with water only.",
      "Pull one shot and pour it away.",
    ],
  },
  {
    id: "descale",
    topic: "care",
    title: "Descaling",
    sub: "Remove the scale hard water leaves in the boiler",
    corner: "3 months",
    fact: { label: "How often", value: "Every 3 months" },
    sections: [
      {
        heading: "Why it matters",
        text: "Hard water leaves scale in the boiler and the pipes. Over time it slows the water and the machine heats less evenly.",
      },
      {
        heading: "How often",
        bullets: [
          "Hard water: every 3 months",
          "Filtered or soft water: every 6 months",
          "Water running slower than it used to: now",
        ],
      },
      {
        heading: "What to use",
        text: "A descaler made for espresso machines. Not vinegar, which leaves a taste and wears the seals.",
      },
    ],
    steps: [
      "Mix the descaler with water in the tank, as its pack says.",
      "Switch the machine on and let it warm up.",
      "Run half the tank through with the portafilter out.",
      "Wait 20 minutes, then run the rest through.",
      "Rinse the tank and run two full tanks of fresh water through.",
    ],
  },
  {
    id: "water",
    topic: "care",
    title: "Water and the filter",
    sub: "What water to put in the tank",
    corner: "Daily",
    fact: { label: "Best water", value: "Filtered, not distilled" },
    sections: [
      {
        heading: "Use filtered water",
        text: "Water from a filter jug leaves less scale and makes cleaner-tasting coffee. Change the jug's filter when its maker says, usually every 4 weeks.",
      },
      {
        heading: "Not distilled water",
        text: "The machine needs some minerals in the water to sense how full the boiler is, and coffee made with distilled water tastes flat.",
      },
    ],
    steps: [
      "Fill a filter jug the night before.",
      "Each morning, empty and rinse the tank.",
      "Refill it with the filtered water.",
      "Once a week, wash the tank with warm water and a drop of washing-up liquid.",
    ],
  },
  {
    id: "burrs",
    topic: "care",
    title: "Grinder burrs",
    sub: "Brush out old coffee so the grind stays even",
    corner: "2 weeks",
    fact: { label: "How often", value: "Every 2 weeks" },
    sections: [
      {
        heading: "Why it matters",
        text: "Old grounds and coffee oil stick to the burrs, the two steel rings that grind the beans. They make the grind uneven and the coffee taste stale.",
      },
      {
        heading: "Note your setting first",
        text: "The grinder has 40 settings. Write down the one you use, so you can set it back after cleaning.",
      },
    ],
    steps: [
      "Note your grind setting.",
      "Run the grinder empty until no more coffee comes out, then unplug it.",
      "Lift off the hopper, turn the top burr anticlockwise and lift it out.",
      "Brush both burrs and the chute with a dry brush.",
      "Put the burr back, set your number and grind a few beans to check.",
    ],
  },
]
