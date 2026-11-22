"use client"

import { useState } from "react"

import { ShopHeroModelLink } from "@/components/features/shop/shop-hero-model-link"
import { ShopHeroStage } from "@/components/features/shop/shop-hero-stage"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import {
  SectionEyebrow,
  SectionLede,
} from "@/components/shared/section-heading"
import { BESTSELLER_ID, MACHINES, type CatalogId } from "@/lib/data/catalog"

const TITLE_LINES = ["Machines", "and add-ons"]

export function ShopHero() {
  const [shownId, setShownId] = useState<CatalogId>(BESTSELLER_ID)

  return (
    <ScrollReveal className="grid gap-3 md:gap-5 lg:grid-cols-2">
      <div className="flex flex-col rounded-3xl bg-card p-5 md:p-8 lg:min-h-176">
        <SectionEyebrow>Shop</SectionEyebrow>
        <h1
          id="shop-heading"
          className="mt-3 text-5xl leading-none sm:text-6xl xl:text-7xl"
        >
          {TITLE_LINES.map((line, index) => (
            <span key={line} className="block overflow-hidden pb-1">
              <span
                className="block animate-line-rise motion-reduce:animate-none"
                style={{ animationDelay: `${0.1 + 0.08 * index}s` }}
              >
                {line}
              </span>
            </span>
          ))}
        </h1>
        <SectionLede className="mt-5 max-w-md">
          One machine in three models, and the grinder, milk jug and three beans
          that go with it. Free shipping to Europe and the US, and 30 days to
          swap the model.
        </SectionLede>
        <ul
          aria-label="Which model is for you"
          className="-mx-3 mt-10 flex flex-col gap-1 md:mt-12 lg:mt-auto lg:pt-10"
        >
          {MACHINES.map((machine) => (
            <li key={machine.id} className="relative">
              <ShopHeroModelLink
                product={machine}
                shown={machine.id === shownId}
                onShow={() => setShownId(machine.id)}
              />
            </li>
          ))}
        </ul>
      </div>
      <ShopHeroStage shownId={shownId} />
    </ScrollReveal>
  )
}
