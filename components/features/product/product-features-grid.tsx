import Image from "next/image"

import type { ProductFeature } from "@/types/product"
import { SectionLabel } from "@/components/shared/section-label"

interface ProductFeaturesGridProps {
  features: ProductFeature[]
}

export function ProductFeaturesGrid({ features }: ProductFeaturesGridProps) {
  if (!features || features.length === 0) return null

  return (
    <section className="border-b border-border bg-background py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <SectionLabel>Features</SectionLabel>
        <h2 className="mt-2 text-2xl font-light tracking-tight text-foreground md:text-4xl">
          Engineered for taste & longevity
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => (
            <div
              key={item.title}
              className="flex flex-col justify-between rounded-2xl border border-border/70 bg-card p-6"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-muted/30">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain p-4"
                />
              </div>

              <div className="mt-6">
                {item.stat ? (
                  <span className="font-mono text-xs font-semibold text-muted-foreground uppercase">
                    {item.stat}
                  </span>
                ) : null}
                <h3 className="mt-1 text-base font-medium">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground md:text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
