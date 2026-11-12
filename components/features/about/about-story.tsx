import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { SectionTitle } from "@/components/shared/section-heading"

import { ABOUT_STATS } from "./about-data"
import { AboutCountUp } from "./about-count-up"
import { AboutStoryPhotos } from "./about-story-photos"
import { AboutTimeline } from "./about-timeline"

export function AboutStory() {
  return (
    <section
      className="px-3 section-padding md:px-5"
      aria-labelledby="about-story-heading"
    >
      <div className="rounded-3xl bg-card panel-padding">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col">
            <ScrollReveal as="header">
              <SectionTitle id="about-story-heading">
                How Nove started
              </SectionTitle>
              <p className="mt-6 text-2xl leading-snug md:mt-8 md:text-3xl">
                One of us ran a bar near Porta Palazzo.{" "}
                <span className="text-muted-foreground">
                  The other fixed its machines. The one we wanted did not exist,
                  so we drew it on a till roll and built the first ten by hand.
                </span>
              </p>
            </ScrollReveal>
            <ScrollReveal
              as="ul"
              delayMs={120}
              className="mt-10 grid grid-cols-3 gap-3 md:mt-14 md:gap-5 lg:mt-auto lg:pt-14"
            >
              {ABOUT_STATS.map((stat) => (
                <li
                  key={stat.label}
                  className="rounded-2xl bg-popover p-4 md:p-5"
                >
                  <p className="font-mono text-3xl leading-none figures md:text-5xl">
                    <AboutCountUp from={stat.from} to={stat.to} />
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground md:text-base">
                    {stat.label}
                  </p>
                </li>
              ))}
            </ScrollReveal>
          </div>
          <AboutStoryPhotos />
        </div>
        <AboutTimeline />
      </div>
    </section>
  )
}
