import { GlowPanel, GlowPanelAside } from "@/components/shared/glow-panel"
import { PlanCard } from "@/components/shared/plan-card"
import {
  SectionEyebrow,
  SectionTitle,
} from "@/components/shared/section-heading"
import { pillButton } from "@/lib/pill-variants"

import { CONTACT_EMAIL, CONTACT_PLANS } from "./contact-data"

export function ContactOptions() {
  return (
    <section
      className="px-3 section-padding pt-6! md:px-5 md:pt-8! lg:pt-10!"
      aria-labelledby="contact-heading"
    >
      <GlowPanel
        header={
          <>
            <div className="flex flex-col items-start">
              <SectionEyebrow>Contact</SectionEyebrow>
              <SectionTitle as="h1" id="contact-heading" className="mt-3">
                Write, call or visit us
              </SectionTitle>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className={pillButton({ size: "sm", className: "mt-6" })}
              >
                {CONTACT_EMAIL}
              </a>
            </div>
            <GlowPanelAside badge="Reply within 1 working day">
              The barista and the engineer who make Nove answer every email and
              every call themselves.
            </GlowPanelAside>
          </>
        }
      >
        {CONTACT_PLANS.map((plan, i) => (
          <PlanCard key={plan.title} plan={plan} index={i} headingAs="h2" />
        ))}
      </GlowPanel>
    </section>
  )
}
