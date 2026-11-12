import { beans } from "@/lib/data/products"
import { ProductCard } from "@/components/shared/product-card"
import { SectionLabel } from "@/components/shared/section-label"

export function ShopBeansGrid() {
  return (
    <section
      id="beans"
      className="scroll-mt-24 border-b border-border bg-background py-16 md:py-24"
    >
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="flex flex-col justify-between gap-2 md:flex-row md:items-end">
          <div>
            <SectionLabel>03 / Beans</SectionLabel>
            <h2 className="mt-2 text-2xl font-light tracking-tight text-foreground md:text-4xl">
              Fresh roasted subscription
            </h2>
          </div>
          <p className="font-mono text-xs text-muted-foreground">
            Delivered every 4 weeks · Pause or cancel anytime
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {beans.map((bean) => (
            <ProductCard key={bean.slug} product={bean} showFeatures />
          ))}
        </div>
      </div>
    </section>
  )
}
