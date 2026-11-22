import { ProductHeroRollingText } from "@/components/features/product/hero/product-hero-rolling-text"
import { ShopAddButton } from "@/components/features/shop/shop-add-button"
import type { CatalogProduct } from "@/lib/data/catalog"

/** The raised card with the product's name, price and a large add button. */
export function AccessoryPriceCard({ product }: { product: CatalogProduct }) {
  return (
    <div
      data-tone="raised"
      className="group/card flex flex-1 flex-col gap-(--card-spacing) overflow-hidden rounded-3xl bg-popover py-(--card-spacing) text-sm text-popover-foreground shadow-xs [--card-spacing:--spacing(6)]"
    >
      <div className="flex flex-col gap-1 px-(--card-spacing)">
        <p className="text-2xl">{product.name}</p>
        <p className="text-muted-foreground">{product.note}</p>
        <p className="mt-5 font-mono text-4xl figures">
          <ProductHeroRollingText value={product.price} delay={0.08} />
        </p>
      </div>
      <div className="mt-auto flex items-center rounded-b-3xl px-(--card-spacing)">
        <ShopAddButton product={product} size="lg" className="w-full" />
      </div>
    </div>
  )
}
