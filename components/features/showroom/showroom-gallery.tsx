import { ScrollReveal } from "@/components/shared/scroll-reveal"
import {
  SectionEyebrow,
  SectionLede,
  SectionTitle,
} from "@/components/shared/section-heading"

import { ShowroomGalleryCarousel } from "./showroom-gallery-carousel"
import { ShowroomGalleryFan } from "./showroom-gallery-fan"

export function ShowroomGallery() {
  return (
    <section
      className="overflow-x-clip gutter-3 section-padding md:gutter-5"
      aria-labelledby="inside-heading"
    >
      <ScrollReveal
        as="header"
        className="flex flex-col items-center text-center"
      >
        <SectionEyebrow>On Via Nizza 45</SectionEyebrow>
        <SectionTitle id="inside-heading" className="mt-3">
          Inside the showroom
        </SectionTitle>
        <SectionLede className="mt-5">
          The counter where you try the machines is at the front, and the bench
          where we repair them is at the back.
        </SectionLede>
      </ScrollReveal>
      <ShowroomGalleryCarousel />
      <ShowroomGalleryFan />
    </section>
  )
}
