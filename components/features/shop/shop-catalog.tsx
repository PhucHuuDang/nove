"use client"

import Link from "next/link"

import { ShopOpenBagButton } from "@/components/features/shop/shop-open-bag-button"
import { ShopProductCard } from "@/components/features/shop/shop-product-card"
import { ShopRoastCard } from "@/components/features/shop/shop-roast-card"
import { useSpotlight } from "@/components/features/shop/shop-spotlight"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import {
  SectionEyebrow,
  SectionTitle,
} from "@/components/shared/section-heading"
import {
  ADD_ONS,
  MACHINES,
  ROASTS,
  type CatalogId,
  type CatalogProduct,
} from "@/lib/data/catalog"
import { pillButton } from "@/lib/pill-variants"
import { cn } from "@/lib/utils"

const SECTIONS = [
  {
    id: "machines",
    eyebrow: "Pick by what you drink",
    title: "Machines",
    products: MACHINES,
    action: (
      <Link
        href="#compare"
        className={pillButton({
          variant: "outline",
          size: "sm",
          className: "mt-6",
        })}
      >
        Compare the models
      </Link>
    ),
  },
  {
    id: "add-ons",
    eyebrow: "Complete the setup",
    title: "Add-ons",
    products: ADD_ONS,
    action: <ShopOpenBagButton />,
  },
  {
    id: "beans",
    eyebrow: "Every four weeks",
    title: "Beans",
    products: ROASTS,
    action: (
      <p className="mt-4 max-w-xs text-sm text-muted-foreground">
        A 250 g bag every four weeks, whole or ground for the machine. Pause or
        stop any time.
      </p>
    ),
  },
]

export function ShopCatalog() {
  const spotlit = useSpotlight()

  return (
    <div className="mt-16 flex flex-col gap-16 md:mt-24 md:gap-24">
      {SECTIONS.map((section) => (
        <section
          key={section.id}
          id={section.id}
          aria-labelledby={`${section.id}-heading`}
          className="grid scroll-mt-24 gap-8 xl:grid-cols-4 xl:gap-5"
        >
          <ScrollReveal as="header" className="flex flex-col items-start">
            <SectionEyebrow>{section.eyebrow}</SectionEyebrow>
            <SectionTitle id={`${section.id}-heading`} className="mt-3">
              {section.title}
            </SectionTitle>
            {section.action}
          </ScrollReveal>
          <ul
            className={cn(
              "grid gap-x-5 gap-y-12 xl:col-span-3",
              section.products.length === 3
                ? "md:grid-cols-3"
                : "md:grid-cols-2",
              section.id === "beans" && "gap-y-5"
            )}
          >
            {section.products.map((product, index) => (
              <ScrollReveal
                key={product.id}
                as="li"
                id={`shop-${product.id}`}
                delayMs={80 * index}
              >
                <CatalogCard
                  product={product}
                  siblings={section.products}
                  spotlit={spotlit}
                />
              </ScrollReveal>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}

interface CatalogCardProps {
  product: CatalogProduct
  siblings: CatalogProduct[]
  spotlit: CatalogId | null
}

function CatalogCard({ product, siblings, spotlit }: CatalogCardProps) {
  if (product.kind === "subscription")
    return <ShopRoastCard product={product} />

  const siblingLit =
    spotlit !== null && siblings.some((sibling) => sibling.id === spotlit)
  return (
    <ShopProductCard
      product={product}
      lit={spotlit === product.id}
      dimmed={siblingLit && spotlit !== product.id}
    />
  )
}
