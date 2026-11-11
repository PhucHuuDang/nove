"use client"

import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { DETAILS_DATA } from "./details/details-data"
import { DetailsExplodedCard } from "./details/details-exploded-card"
import { DetailsPartCard } from "./details/details-part-card"
import { DetailsMaterialsCard } from "./details/details-materials-card"
import { DetailsStoryCard } from "./details/details-story-card"
import { DetailsLineupCard } from "./details/details-lineup-card"

export function HomeDetailsSection() {
  return (
    <section
      id="details"
      aria-labelledby="details-heading"
      className="gutter-3 section-padding md:gutter-5"
    >
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {/* Card 1: Exploded machine 3D view */}
        <ScrollReveal className="md:col-span-2 lg:row-span-2">
          <DetailsExplodedCard />
        </ScrollReveal>

        {/* Card 2: 9 bar pressure */}
        <ScrollReveal delayMs={60} className="lg:col-start-3">
          <DetailsPartCard
            part={DETAILS_DATA.parts.pressure}
            image={DETAILS_DATA.art.gauge}
          />
        </ScrollReveal>

        {/* Card 3: Fits on a home counter */}
        <ScrollReveal
          delayMs={120}
          className="md:row-span-2 lg:col-start-4 lg:row-span-2"
        >
          <DetailsStoryCard />
        </ScrollReveal>

        {/* Card 4: 58 mm basket */}
        <ScrollReveal delayMs={180} className="lg:col-start-3 lg:row-start-2">
          <DetailsPartCard
            part={DETAILS_DATA.parts.basket}
            image={DETAILS_DATA.art.portafilter}
            place="top-[7%] right-0 w-[42%]"
          />
        </ScrollReveal>

        {/* Card 5: 40 s warm-up with animated counter */}
        <ScrollReveal delayMs={60} className="lg:row-start-3">
          <DetailsPartCard
            part={DETAILS_DATA.parts.warmup}
            image={DETAILS_DATA.art.stopwatch}
            place="top-[7%] right-[3%] w-[38%]"
            count
          />
        </ScrollReveal>

        {/* Card 6: Steel and walnut, no plastic */}
        <ScrollReveal delayMs={120} className="lg:row-start-3">
          <DetailsMaterialsCard />
        </ScrollReveal>

        {/* Card 7: Same parts in every model */}
        <ScrollReveal delayMs={180} className="md:col-span-2 lg:row-start-3">
          <DetailsLineupCard />
        </ScrollReveal>
      </div>
    </section>
  )
}
