"use client"

import type { Product } from "@/types/product"
import { AccessoryHero } from "./accessory-hero"
import { AccessoryWhy } from "./accessory-why"
import { AccessoryUseWith } from "./accessory-use-with"
import { AccessoryBottomCta } from "./accessory-bottom-cta"
import { ProductOwnersSection } from "@/components/features/product/owners/product-owners-section"
import { ProductFaqSection } from "@/components/features/product/faq/product-faq-section"

interface ProductAccessoryViewProps {
  product: Product
}

const GRINDER_OWNERS = {
  title: "Nove grinder owners",
  subtitle: "The 4.9 rating covers all three models.",
  rating: "4.9",
  reviewCount: "1,284 reviews",
  reviews: [
    {
      author: "Tom H.",
      location: "Berlin · Nove One",
      avatar: "/images/home/reviews/faces/tom.jpg",
      quote:
        "It grinds straight into the basket, so I grind for one shot and pull it. No more stale coffee from a tin.",
      image: "/images/home/latte.jpg",
    },
    {
      author: "Daniel O.",
      location: "Austin · Nove Pro",
      avatar: "/images/home/reviews/faces/daniel.jpg",
      quote:
        "Same steel and walnut as the machine, so the two look like a pair on the counter.",
      image: "/images/home/reviews/anna.jpg",
    },
    {
      author: "Sofia M.",
      location: "Barcelona · Nove Duo",
      avatar: "/images/home/reviews/faces/sofia.jpg",
      quote:
        "Forty settings sounded like too many. I found mine in the first week and have not touched it since.",
      image: "/images/home/reviews/tom.jpg",
    },
  ],
}

const JUG_OWNERS = {
  title: "Milk jug, 350 ml owners",
  subtitle: "The 4.9 rating covers all three models.",
  rating: "4.9",
  reviewCount: "1,284 reviews",
  reviews: [
    {
      author: "Giulia R.",
      location: "Milan · Nove Duo",
      avatar: "/images/home/reviews/faces/anna.jpg",
      quote:
        "I thought the steam wand would be the hard part. Two tries and the milk was right. The jug in the box is the right size.",
      image: "/images/home/latte.jpg",
    },
    {
      author: "Lena W.",
      location: "Munich · Nove Pro",
      avatar: "/images/home/reviews/faces/daniel.jpg",
      quote:
        "Four of us, four different coffees. It steams the milk for one while the next shot is pulling, so nobody waits.",
      image: "/images/home/reviews/anna.jpg",
    },
    {
      author: "Ben T.",
      location: "London · Nove Duo",
      avatar: "/images/home/reviews/faces/tom.jpg",
      quote:
        "The wand is strong, so my first jugs went everywhere. By Sunday I was pouring hearts. Give yourself a few days.",
      image: "/images/home/reviews/tom.jpg",
    },
  ],
}

const GRINDER_QUESTIONS = [
  {
    question: "Do I need the grinder?",
    answer:
      "Not if you order your beans ground. But ground coffee goes stale in a few days, so a grinder gives you better shots. Ours matches the machine, and any grinder with an espresso setting works.",
  },
  {
    question: "Where do you ship, and how fast?",
    answer:
      "Free shipping across Europe and the US. Delivery takes 3 to 5 business days, with tracking sent when your order leaves our workshop in Turin.",
  },
  {
    question: "What does the warranty cover?",
    answer:
      "Every Nove comes with a three-year warranty covering all parts and labour. If something stops working, we repair it in Turin or replace it.",
  },
]

const JUG_QUESTIONS = [
  {
    question: "What is in the box?",
    answer:
      "One 350 ml brushed stainless steel milk jug with an oiled walnut handle.",
  },
  {
    question: "Where do you ship, and how fast?",
    answer:
      "Free shipping across Europe and the US. Delivery takes 3 to 5 business days, with tracking sent when your order leaves our workshop in Turin.",
  },
  {
    question: "What does the warranty cover?",
    answer:
      "Every Nove accessory comes with a three-year warranty covering all materials and craftsmanship.",
  },
]

export function ProductAccessoryView({ product }: ProductAccessoryViewProps) {
  const isGrinder = product.slug === "grinder"
  const isJug = product.slug === "jug"
  const owners = isGrinder
    ? GRINDER_OWNERS
    : isJug
      ? JUG_OWNERS
      : {
          ...JUG_OWNERS,
          title: `${product.name} owners`,
        }
  const questions = isGrinder ? GRINDER_QUESTIONS : JUG_QUESTIONS

  return (
    <>
      <AccessoryHero product={product} />
      <AccessoryWhy product={product} />
      <AccessoryUseWith items={product.useWith} />
      <ProductOwnersSection owners={owners} />
      <ProductFaqSection questions={questions} />
      <AccessoryBottomCta product={product} />
    </>
  )
}
