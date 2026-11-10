import Link from "next/link"

import { SectionLabel } from "@/components/shared/section-label"
import { buttonVariants } from "@/components/ui/button"

export function HelpHero() {
  return (
    <section className="border-b border-border bg-background py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="max-w-3xl">
          <SectionLabel>Support & Care</SectionLabel>
          <h1 className="mt-2 text-4xl font-light tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Shipping, swaps, warranty and care
          </h1>
          <p className="mt-6 text-base leading-relaxed font-light text-muted-foreground sm:text-xl">
            Free delivery, a 30-day model swap guarantee, and a 3-year warranty
            on every Nove machine.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/contact"
              className={buttonVariants({ variant: "default", size: "lg" })}
            >
              Write to us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
