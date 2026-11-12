import Image from "next/image"

import { ScrollReveal } from "@/components/shared/scroll-reveal"
import {
  SectionEyebrow,
  SectionLede,
  SectionTitle,
} from "@/components/shared/section-heading"
import { cn } from "@/lib/utils"

import { ABOUT_BUILT } from "./about-data"

export function AboutBuilt() {
  return (
    <section
      className="gutter-3 section-padding md:gutter-5"
      aria-labelledby="about-built-heading"
    >
      <div className="grid gap-10 xl:grid-cols-2 xl:gap-16">
        <div>
          <ScrollReveal as="header" className="xl:sticky xl:top-28">
            <SectionEyebrow>Made in Turin</SectionEyebrow>
            <SectionTitle id="about-built-heading" className="mt-3">
              What goes into every machine
            </SectionTitle>
            <SectionLede className="mt-5">
              A machine should outlast its warranty, so all three models share
              the same steel body, walnut handles and numbered parts.
            </SectionLede>
          </ScrollReveal>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-2">
          {ABOUT_BUILT.map((item, i) => (
            <ScrollReveal
              key={item.title}
              as="li"
              delayMs={(i % 2) * 80}
              className="row-span-3 grid grid-rows-subgrid gap-0 rounded-3xl bg-card p-6 md:p-8"
            >
              <div
                className={cn(
                  "relative size-24 overflow-hidden rounded-2xl md:size-28",
                  item.cutout ? "bg-popover" : null
                )}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="112px"
                  className={
                    item.cutout ? "object-contain p-2" : "object-cover"
                  }
                />
              </div>
              <h3 className="mt-6 text-xl md:mt-8 md:text-2xl">{item.title}</h3>
              <p className="mt-2 text-base text-muted-foreground">
                {item.text}
              </p>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
