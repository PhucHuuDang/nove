"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

const HERO_MODELS = [
  {
    name: "Nove One",
    subtitle: "Espresso only · $650",
    href: "/shop/one",
    image: "/images/shop/one-in-use.jpg",
  },
  {
    name: "Nove Duo",
    subtitle: "Dual boiler · $1,300",
    href: "/shop/duo",
    image: "/images/shop/duo-in-use.jpg",
  },
  {
    name: "Nove Pro",
    subtitle: "Commercial tech · $1,900",
    href: "/shop/pro",
    image: "/images/shop/pro-in-use.jpg",
  },
]

export function HeroFloatingCard() {
  const [active, setActive] = useState(0)
  const current = HERO_MODELS[active]

  return (
    <div className="dark absolute right-3 bottom-3 w-52 rounded-xl bg-background/35 p-2 text-foreground ring-1 ring-foreground/20 backdrop-blur-xl md:right-4 md:bottom-4 lg:w-64">
      <Link
        href={current.href}
        className="group/card block rounded-lg outline-none focus-visible:ring-3 focus-visible:ring-foreground/50"
      >
        <span className="relative block aspect-video overflow-hidden rounded-lg">
          {HERO_MODELS.map((m, idx) => (
            <Image
              key={m.name}
              src={m.image}
              alt={m.name}
              fill
              sizes="16rem"
              className={cn(
                "object-cover transition-opacity duration-500 ease-soft",
                idx === active ? "opacity-100" : "pointer-events-none opacity-0"
              )}
            />
          ))}
        </span>
        <span className="mt-2.5 block px-1 text-sm font-medium">
          {current.name}
        </span>
      </Link>

      <div className="flex items-center justify-between gap-2 px-1 pt-0.5 pb-1">
        <span className="font-mono text-[0.625rem] text-foreground/70 figures">
          {current.subtitle}
        </span>
        <span className="flex gap-1">
          {HERO_MODELS.map((m, idx) => (
            <button
              key={m.name}
              type="button"
              aria-label={`Show the ${m.name}`}
              aria-pressed={idx === active}
              onClick={() => setActive(idx)}
              className="grid size-4 place-items-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-foreground/60"
            >
              <span
                className={cn(
                  "size-1.5 rounded-full transition-colors duration-200",
                  idx === active ? "bg-foreground" : "bg-foreground/40"
                )}
              />
            </button>
          ))}
        </span>
      </div>
    </div>
  )
}
