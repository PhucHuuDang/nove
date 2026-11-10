import { SectionLabel } from "@/components/shared/section-label"

export function ShopHeroSection() {
  return (
    <section className="border-b border-border bg-background py-12 md:py-20">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="max-w-2xl">
          <SectionLabel>Shop</SectionLabel>
          <h1 className="mt-2 text-4xl font-light tracking-tight text-foreground md:text-6xl">
            Every machine. Every bean.
          </h1>
          <p className="mt-4 text-base leading-relaxed font-light text-muted-foreground md:text-lg">
            Free shipping across Europe and the US on everything. 30-day model
            swaps and a 3-year warranty on all machines.
          </p>
        </div>
      </div>
    </section>
  )
}
