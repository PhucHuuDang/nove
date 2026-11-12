"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Coffee,
  Milk,
  Users,
  ArrowDown,
  Truck,
  ArrowLeftRight,
  ShieldCheck,
  Star,
} from "lucide-react"
import { cn } from "@/lib/utils"

const HERO_MODELS = [
  {
    slug: "one" as const,
    name: "Nove One",
    tagline: "Espresso and americano",
    description:
      "The smallest Nove, 20 cm wide. Get it if you drink your coffee black.",
    image: "/images/home/machine-one.png",
    alt: "Nove One, a narrow steel espresso machine with one gauge and a walnut portafilter handle",
    widthPct: "63%",
    icon: Coffee,
  },
  {
    slug: "duo" as const,
    name: "Nove Duo",
    tagline: "Lattes and flat whites",
    description:
      "Everything the One makes, plus a steam wand that heats and froths milk. Our bestseller.",
    image: "/images/home/machine.png",
    alt: "Nove Duo, a steel espresso machine with a steam wand and a walnut portafilter handle",
    widthPct: "80%",
    icon: Milk,
  },
  {
    slug: "pro" as const,
    name: "Nove Pro",
    tagline: "Two or more coffee drinkers",
    description:
      "Brews coffee and steams milk at the same time, so it makes four drinks in five minutes.",
    image: "/images/home/machine-pro.png",
    alt: "Nove Pro, a wide steel espresso machine with two gauges, a steam wand and two cups on the tray",
    widthPct: "93%",
    icon: Users,
  },
]

export function ShopHeroSection() {
  const [activeSlug, setActiveSlug] = useState<"one" | "duo" | "pro">("duo")

  return (
    <section
      className="gutter-3 section-padding pt-6! md:gutter-5 md:pt-8! lg:pt-10!"
      aria-labelledby="shop-heading"
    >
      <div className="grid gap-3 md:gap-5 lg:grid-cols-2">
        {/* Left card */}
        <div className="flex flex-col rounded-3xl bg-card p-5 md:p-8 lg:min-h-176">
          <p className="text-sm font-medium text-muted-foreground">Shop</p>
          <h1
            className="mt-3 text-5xl leading-none sm:text-6xl xl:text-7xl"
            id="shop-heading"
          >
            <span className="block overflow-hidden pb-1">Machines</span>
            <span className="block overflow-hidden pb-1">and add-ons</span>
          </h1>
          <p className="mt-5 max-w-md text-base text-muted-foreground md:text-lg">
            One machine in three models, and the grinder, milk jug and three
            beans that go with it. Free shipping to Europe and the US, and 30
            days to swap the model.
          </p>

          <ul
            aria-label="Which model is for you"
            className="-mx-3 mt-10 flex flex-col gap-1 md:mt-12 lg:mt-auto lg:pt-10"
          >
            {HERO_MODELS.map((item) => {
              const Icon = item.icon
              const isSelected = activeSlug === item.slug

              return (
                <li key={item.slug} className="relative">
                  {isSelected ? (
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-2xl bg-popover shadow-xs"
                    />
                  ) : null}
                  <a
                    href={`#shop-${item.slug}`}
                    onMouseEnter={() => setActiveSlug(item.slug)}
                    className="group relative flex flex-col gap-1.5 rounded-2xl px-3 py-4 transition-transform duration-150 ease-soft outline-none focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.99] md:py-5"
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="size-4 shrink-0" />
                      <span className="text-lg leading-snug font-medium">
                        {item.tagline}
                      </span>
                      <span className="ml-auto flex shrink-0 items-center gap-1.5 text-sm text-muted-foreground transition-colors duration-200 ease-soft group-hover:text-foreground">
                        {item.name}
                        <ArrowDown className="size-4 transition-transform duration-200 ease-soft motion-safe:group-hover:translate-y-0.5" />
                      </span>
                    </span>
                    <span className="max-w-md pl-7 text-base text-muted-foreground">
                      {item.description}
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Right card: Machine preview */}
        <div className="relative flex min-h-80 items-center justify-center overflow-hidden rounded-3xl bg-card p-6 md:p-8 lg:min-h-176">
          <div className="relative flex size-full items-end justify-center">
            {HERO_MODELS.map((m) => {
              const isActive = activeSlug === m.slug
              return (
                <div
                  key={m.slug}
                  className={cn(
                    "absolute bottom-0 mx-auto transition-all duration-500 ease-soft",
                    isActive
                      ? "blur-0 scale-100 opacity-100"
                      : "pointer-events-none scale-95 opacity-0 blur-sm"
                  )}
                  style={{ width: m.widthPct }}
                >
                  <Image
                    src={m.image}
                    alt={m.alt}
                    width={1116}
                    height={1400}
                    priority
                    className="h-auto w-full object-contain"
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Guarantee bar */}
      <div className="mt-8 md:mt-10">
        <div className="h-px w-full bg-border" />
        <ul
          aria-label="What comes with every machine"
          className="grid grid-cols-1 gap-x-10 gap-y-3 py-5 text-sm figures sm:grid-cols-2 md:flex md:flex-wrap md:justify-center md:py-6"
        >
          <li className="flex items-center gap-2.5">
            <Truck className="size-4 shrink-0 text-muted-foreground" />
            Free shipping, 3 to 5 days
          </li>
          <li className="flex items-center gap-2.5">
            <ArrowLeftRight className="size-4 shrink-0 text-muted-foreground" />
            Swap the model within 30 days
          </li>
          <li className="flex items-center gap-2.5">
            <ShieldCheck className="size-4 shrink-0 text-muted-foreground" />
            3-year warranty
          </li>
          <li className="flex items-center gap-2.5">
            <Star className="size-4 shrink-0 text-muted-foreground" />
            4.9 from 1,284 reviews
          </li>
        </ul>
        <div className="h-px w-full bg-border" />
      </div>
    </section>
  )
}
