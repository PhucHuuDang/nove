import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { ADDONS_DATA } from "./addons/addons-data"
import { AddonsCarousel } from "./addons/addons-carousel"

export function HomeAddonsSection() {
  return (
    <section
      className="overflow-x-clip gutter-3 section-padding md:gutter-5"
      aria-labelledby="addons-heading"
    >
      <ScrollReveal
        as="header"
        className="flex flex-col items-center text-center"
      >
        <p className="text-sm font-medium text-muted-foreground">
          {ADDONS_DATA.eyebrow}
        </p>
        <h2
          className="mt-3 text-4xl leading-[1.05] md:text-5xl lg:text-6xl"
          id="addons-heading"
        >
          {ADDONS_DATA.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
          {ADDONS_DATA.lede}
        </p>
      </ScrollReveal>

      <ScrollReveal
        delayMs={100}
        className="grid grid-cols-[minmax(0,1fr)_auto] items-center"
      >
        <AddonsCarousel />
      </ScrollReveal>
    </section>
  )
}
