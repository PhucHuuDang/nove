import type { Metadata } from "next"

import { ShowroomHero } from "@/components/features/showroom/showroom-hero"
import { ShowroomSteps } from "@/components/features/showroom/showroom-steps"
import { ShowroomGallery } from "@/components/features/showroom/showroom-gallery"
import { ShowroomInfo } from "@/components/features/showroom/showroom-info"

export const metadata: Metadata = {
  title: "Showroom in Turin",
  description:
    "Try the Nove One, Duo and Pro with your own beans at our showroom on Via Nizza in Turin. Visits are free.",
}

export default function ShowroomPage() {
  return (
    <>
      <ShowroomHero />
      <ShowroomSteps />
      <ShowroomGallery />
      <ShowroomInfo />
    </>
  )
}
