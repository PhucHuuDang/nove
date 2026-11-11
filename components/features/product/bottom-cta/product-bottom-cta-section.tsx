import { Truck, RefreshCw, ShieldCheck } from "lucide-react"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import type { MachinePageData } from "@/lib/data/product-pages-data"
import { ProductBottomCtaModels } from "./product-bottom-cta-models"
import { ProductBottomCtaCard } from "./product-bottom-cta-card"

interface ProductBottomCtaSectionProps {
  data: MachinePageData
}

export function ProductBottomCtaSection({
  data,
}: ProductBottomCtaSectionProps) {
  return (
    <section
      className="gutter-3 section-padding md:gutter-5"
      aria-label={`Buy the ${data.name}`}
    >
      <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-3 lg:gap-5">
        {/* Column 1: Value Props List */}
        <ul className="grid auto-rows-fr gap-4 lg:gap-5">
          <ScrollReveal
            as="li"
            className="flex items-center gap-4 rounded-3xl bg-card p-4"
          >
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-popover">
              <Truck className="size-5" />
            </span>
            <span>
              <span className="block font-medium">Free shipping</span>
              <span className="block text-sm text-muted-foreground">
                Europe and the US, 3 to 5 days
              </span>
            </span>
          </ScrollReveal>

          <ScrollReveal
            as="li"
            delayMs={80}
            className="flex items-center gap-4 rounded-3xl bg-card p-4"
          >
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-popover">
              <RefreshCw className="size-5" />
            </span>
            <span>
              <span className="block font-medium">30-day swap</span>
              <span className="block text-sm text-muted-foreground">
                Change to another model
              </span>
            </span>
          </ScrollReveal>

          <ScrollReveal
            as="li"
            delayMs={160}
            className="flex items-center gap-4 rounded-3xl bg-card p-4"
          >
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-popover">
              <ShieldCheck className="size-5" />
            </span>
            <span>
              <span className="block font-medium">3-year warranty</span>
              <span className="block text-sm text-muted-foreground">
                Parts and labour
              </span>
            </span>
          </ScrollReveal>
        </ul>

        {/* Column 2: All three models picker */}
        <ProductBottomCtaModels currentSlug={data.slug} />

        {/* Column 3: Buy Card */}
        <ProductBottomCtaCard data={data} />
      </div>
    </section>
  )
}
