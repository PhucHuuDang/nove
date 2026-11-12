import { ScrollReveal } from "@/components/shared/scroll-reveal"
import {
  SectionEyebrow,
  SectionLede,
  SectionTitle,
} from "@/components/shared/section-heading"

import { ShowroomStepList } from "./showroom-step-list"

export function ShowroomSteps() {
  return (
    <section
      className="gutter-3 section-padding md:gutter-5"
      aria-labelledby="try-heading"
    >
      <ScrollReveal
        as="header"
        className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-10"
      >
        <div>
          <SectionEyebrow>At the showroom</SectionEyebrow>
          <SectionTitle id="try-heading" className="mt-3 max-w-2xl">
            What you can try before you buy
          </SectionTitle>
        </div>
        <SectionLede className="max-w-md lg:pb-1">
          Bring the beans you drink at home, make the same coffee on all three
          models, steam milk on the Duo and the Pro and try the grinder, with
          one of us beside you.
        </SectionLede>
      </ScrollReveal>
      <ShowroomStepList />
    </section>
  )
}
