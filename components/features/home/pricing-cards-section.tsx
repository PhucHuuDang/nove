import { machines } from "@/lib/data/products"
import { ProductCard } from "@/components/shared/product-card"
import { SectionLabel } from "@/components/shared/section-label"

export function HomePricingCardsSection() {
  return (
    <section
      id="machines"
      className="border-b border-border bg-background py-16 md:py-24"
    >
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="max-w-2xl">
          <SectionLabel>Machines</SectionLabel>
          <h2 className="mt-2 text-3xl font-light tracking-tight text-foreground md:text-5xl">
            Choose your machine
          </h2>
          <p className="mt-2 text-sm font-light text-muted-foreground md:text-base">
            Free shipping in Europe and the US, a 30-day swap guarantee, and a
            3-year warranty included.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {machines.map((machine, idx) => (
            <ProductCard
              key={machine.slug}
              product={machine}
              priority={idx === 1}
              showFeatures
            />
          ))}
        </div>
      </div>
    </section>
  )
}
