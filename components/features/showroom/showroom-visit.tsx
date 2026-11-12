import { GlowPanel, GlowPanelAside } from "@/components/shared/glow-panel"
import { PlanCard } from "@/components/shared/plan-card"
import {
  SectionEyebrow,
  SectionTitle,
} from "@/components/shared/section-heading"

import { SHOWROOM_PLANS } from "./showroom-data"

export function ShowroomVisit() {
  return (
    <section
      id="visit"
      className="scroll-mt-24 px-3 section-padding md:px-5"
      aria-labelledby="visit-heading"
    >
      <GlowPanel
        header={
          <>
            <div>
              <SectionEyebrow>Visit us</SectionEyebrow>
              <SectionTitle id="visit-heading" className="mt-3">
                Where to find us
              </SectionTitle>
            </div>
            <GlowPanelAside badge="Tuesday to Saturday, 10:00 to 19:00">
              Book a time and we keep the counter free for you, with all three
              models switched on and one of us beside you.
            </GlowPanelAside>
          </>
        }
      >
        {SHOWROOM_PLANS.map((plan, i) => (
          <PlanCard key={plan.title} plan={plan} index={i} />
        ))}
      </GlowPanel>
    </section>
  )
}
