import { accessories } from "@/lib/data/products"
import { ProductCard } from "@/components/shared/product-card"
import { SectionLabel } from "@/components/shared/section-label"

export function ShopAccessoriesGrid() {
  return (
    <section
      id="add-ons"
      className="scroll-mt-24 border-b border-border bg-background py-16 md:py-24"
    >
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <SectionLabel>02 / Accessories</SectionLabel>
        <h2 className="mt-2 text-2xl font-light tracking-tight text-foreground md:text-4xl">
          Designed to match
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:max-w-4xl">
          {accessories.map((acc) => (
            <ProductCard key={acc.slug} product={acc} showFeatures />
          ))}
        </div>
      </div>
    </section>
  )
}
