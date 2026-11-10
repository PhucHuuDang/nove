import type { Metadata } from "next"

import { AboutHero } from "@/components/features/about/about-hero"
import { AboutDesignPillars } from "@/components/features/about/design-pillars"
import { AboutStoryTimeline } from "@/components/features/about/story-timeline"

export const metadata: Metadata = {
  title: "About",
  description:
    "The story of Nove espresso machines, built in Turin, Italy. 9 bar pressure, 58 mm portafilter, and repairable steel design.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutDesignPillars />
      <AboutStoryTimeline />
    </>
  )
}
