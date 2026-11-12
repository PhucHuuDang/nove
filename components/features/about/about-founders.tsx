import { ParallaxImage } from "@/components/shared/parallax-image"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import {
  SectionEyebrow,
  SectionTitle,
} from "@/components/shared/section-heading"

import { ABOUT_FOUNDERS } from "./about-data"

export function AboutFounders() {
  return (
    <section
      className="px-3 section-padding md:px-5"
      aria-labelledby="about-team-heading"
    >
      <div className="dark grid gap-12 rounded-3xl bg-background panel-padding text-foreground lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col">
          <ScrollReveal as="header" className="flex flex-col items-start">
            <SectionEyebrow>The founders</SectionEyebrow>
            <SectionTitle id="about-team-heading" className="mt-3">
              The people behind your machine
            </SectionTitle>
          </ScrollReveal>
          <ScrollReveal
            as="figure"
            delayMs={120}
            className="mt-10 md:mt-14 lg:mt-auto lg:pt-14"
          >
            <blockquote className="text-2xl leading-snug md:text-3xl">
              <span className="text-muted-foreground">
                Nove means nine. Espresso needs{" "}
              </span>
              <span>9 bar of pressure</span>
              <span className="text-muted-foreground">
                . Less and the coffee tastes thin, more and it tastes bitter.
                Every machine we make holds nine, and the gauge on the front
                shows it.
              </span>
            </blockquote>
            <figcaption className="mt-6 text-base text-muted-foreground">
              From Turin, with nine bar.
            </figcaption>
          </ScrollReveal>
        </div>
        <ul className="grid gap-8 sm:grid-cols-2 sm:gap-5">
          {ABOUT_FOUNDERS.map((person, i) => (
            <ScrollReveal
              key={person.title}
              as="li"
              delayMs={i * 120}
              className={i === 1 ? "sm:mt-24" : undefined}
            >
              <div className="relative isolate aspect-4/5 overflow-hidden rounded-2xl">
                <ParallaxImage
                  src={person.src}
                  alt={person.alt}
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <h3 className="mt-5 text-xl md:text-2xl">{person.title}</h3>
              <p className="mt-2 text-base text-muted-foreground">
                {person.text}
              </p>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
