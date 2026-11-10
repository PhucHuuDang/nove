"use client"

import { useState } from "react"
import Image from "next/image"

import { SectionLabel } from "@/components/shared/section-label"
import { cn } from "@/lib/utils"

const BASE = "https://nove-nextjs-template.vercel.app"

interface DrinkTab {
  id: string
  name: string
  ratio: string
  description: string
  image: string
}

const DRINKS: DrinkTab[] = [
  {
    id: "espresso",
    name: "Espresso",
    ratio: "1:2 ratio · 28 seconds",
    description:
      "18 g of coffee in, 36 g of espresso out in 28 seconds. The base for everything else.",
    image: `${BASE}/images/home/cup-dark.jpg`,
  },
  {
    id: "americano",
    name: "Americano",
    ratio: "1:5 ratio · hot water tap",
    description:
      "A double shot topped with 120 ml of hot water straight from the tap. Clean, sweet and long.",
    image: `${BASE}/images/home/cup-hand.jpg`,
  },
  {
    id: "cortado",
    name: "Cortado",
    ratio: "1:1 ratio · warm milk",
    description:
      "Equal parts espresso and warm milk with just a thin layer of foam. Spain's classic morning drink.",
    image: `${BASE}/images/showroom/tasting.jpg`,
  },
  {
    id: "flat-white",
    name: "Flat white",
    ratio: "1:3 ratio · microfoam",
    description:
      "A double shot covered with 120 ml of velvety steamed microfoam. Sweet milk and punchy coffee.",
    image: `${BASE}/images/home/latte.jpg`,
  },
  {
    id: "latte",
    name: "Latte",
    ratio: "1:4 ratio · textured milk",
    description:
      "A double shot poured into 180 ml of rich steamed milk. Mild, creamy and gently sweet.",
    image: `${BASE}/images/home/latte.jpg`,
  },
]

export function CoffeeTabsSection() {
  const [activeTab, setActiveTab] = useState(0)
  const current = DRINKS[activeTab]

  return (
    <section className="border-b border-border bg-background py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <SectionLabel>What you can make</SectionLabel>

        {/* Tab Buttons */}
        <div className="mt-6 flex flex-wrap gap-2 border-b border-border pb-4">
          {DRINKS.map((drink, idx) => (
            <button
              key={drink.id}
              onClick={() => setActiveTab(idx)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                activeTab === idx
                  ? "bg-foreground text-background"
                  : "bg-muted text-muted-foreground hover:bg-accent hover:text-foreground"
              )}
            >
              {drink.name}
            </button>
          ))}
        </div>

        {/* Content & Image Grid */}
        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="space-y-4 lg:col-span-5">
            <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
              {current.ratio}
            </p>
            <h2 className="text-3xl font-light tracking-tight text-foreground md:text-4xl">
              {current.name}
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              {current.description}
            </p>
          </div>

          <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-muted lg:col-span-7">
            {DRINKS.map((drink, idx) => (
              <div
                key={drink.id}
                className={cn(
                  "absolute inset-0 transition-opacity duration-500 ease-in-out",
                  activeTab === idx
                    ? "z-10 opacity-100"
                    : "pointer-events-none z-0 opacity-0"
                )}
              >
                <Image
                  src={drink.image}
                  alt={drink.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
