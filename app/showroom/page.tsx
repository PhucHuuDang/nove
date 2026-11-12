import type { Metadata } from "next"

import { ShowroomHero } from "@/components/features/showroom/showroom-hero"
import { ShowroomSteps } from "@/components/features/showroom/showroom-steps"
import { ShowroomGallery } from "@/components/features/showroom/showroom-gallery"
import { ShowroomVisit } from "@/components/features/showroom/showroom-visit"

export const metadata: Metadata = {
  title: "Showroom in Turin",
  description:
    "Try the Nove One, Duo and Pro with your own beans at our showroom on Via Nizza in Turin, open Tuesday to Saturday. Visits are free.",
}

export default function ShowroomPage() {
  return (
    <>
      <ShowroomHero />
      <ShowroomSteps />
      <ShowroomGallery />
      <ShowroomVisit />
    </>
  )
}
