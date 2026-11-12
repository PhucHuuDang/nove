import { PageIntro } from "@/components/shared/page-intro"
import { pillBadge } from "@/lib/pill-variants"

import { ABOUT_FACTS } from "./about-data"
import { AboutHeroImage } from "./about-hero-image"

export function AboutHero() {
  return (
    <section
      aria-labelledby="about-heading"
      className="pb-12 md:pb-16 lg:pb-20"
    >
      <div className="px-3 md:px-5">
        <PageIntro
          id="about-heading"
          lines={["We make one espresso", "machine in Turin"]}
          lede="One of us ran a bar near Porta Palazzo and the other fixed its machines, so we built the espresso machine we wanted and now make it in three models."
        >
          <ul className="flex flex-wrap gap-2">
            {ABOUT_FACTS.map((fact) => (
              <li key={fact.label}>
                <span className={pillBadge({ variant: "secondary" })}>
                  <span className="text-muted-foreground">{fact.label}</span>
                  {fact.value}
                </span>
              </li>
            ))}
          </ul>
        </PageIntro>
      </div>
      <AboutHeroImage />
    </section>
  )
}
