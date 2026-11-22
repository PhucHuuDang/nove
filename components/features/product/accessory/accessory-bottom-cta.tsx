import { Truck } from "lucide-react"

import { AccessoryLineupCard } from "@/components/features/product/accessory/accessory-lineup-card"
import { AccessoryPairCard } from "@/components/features/product/accessory/accessory-pair-card"
import { AccessoryPriceCard } from "@/components/features/product/accessory/accessory-price-card"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import type { CatalogProduct } from "@/lib/data/catalog"

/** Free shipping, how it pairs with a machine, and the price card. */
export function AccessoryBottomCta({ product }: { product: CatalogProduct }) {
  return (
    <section
      className="gutter-3 section-padding md:gutter-5"
      aria-label={`Buy the ${product.name}`}
    >
      <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-3 lg:gap-5">
        <ul className="grid content-start gap-4 lg:gap-5">
          <ScrollReveal
            as="li"
            className="flex items-center gap-4 rounded-3xl bg-card p-4"
          >
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-popover">
              <Truck className="size-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block font-medium">Free shipping</span>
              <span className="block text-sm text-muted-foreground">
                Europe and the US, 3 to 5 days
              </span>
            </span>
          </ScrollReveal>
        </ul>
        <ScrollReveal className="flex">
          {product.kind === "add-on" ? (
            <AccessoryPairCard addon={product} />
          ) : (
            <AccessoryLineupCard />
          )}
        </ScrollReveal>
        <ScrollReveal delayMs={80} className="flex">
          <AccessoryPriceCard product={product} />
        </ScrollReveal>
      </div>
    </section>
  )
}
