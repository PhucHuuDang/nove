import { machines } from "@/lib/data/products"
import { ProductCard } from "@/components/shared/product-card"
import { SectionLabel } from "@/components/shared/section-label"

export function ShopMachinesGrid() {
  return (
    <section
      id="machines"
      className="scroll-mt-24 border-b border-border bg-background py-16 md:py-24"
    >
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="flex flex-col justify-between gap-2 md:flex-row md:items-end">
          <div>
            <SectionLabel>01 / Machines</SectionLabel>
            <h2 className="mt-2 text-2xl font-light tracking-tight text-foreground md:text-4xl">
              Espresso machines
            </h2>
          </div>
          <p className="font-mono text-xs text-muted-foreground">
            All 3 models brew at 9 bar with a 58 mm portafilter
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
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
