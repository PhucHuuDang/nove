import type { Metadata } from "next"

import { pageMetadata } from "@/lib/seo"

import { NavSpacer } from "@/components/shared/nav-spacer"
import { AboutHero } from "@/components/features/about/about-hero"
import { AboutStory } from "@/components/features/about/about-story"
import { AboutBuilt } from "@/components/features/about/about-built"
import { AboutFounders } from "@/components/features/about/about-founders"
import { AboutPick } from "@/components/features/about/about-pick"

export const metadata: Metadata = pageMetadata({
  title: "Our story",
  description:
    "Nove is a barista and an engineer in Turin who have made one espresso machine, in three models, since 2019.",
  path: "/about",
})

export default function AboutPage() {
  return (
    <>
      <NavSpacer />
      <AboutHero />
      <AboutStory />
      <AboutBuilt />
      <AboutFounders />
      <AboutPick />
    </>
  )
}
