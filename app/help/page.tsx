import type { Metadata } from "next"

import { HelpHero } from "@/components/features/help/help-hero"
import { HelpGuide } from "@/components/features/help/help-guide"
import { HelpFaq } from "@/components/features/help/help-faq"

export const metadata: Metadata = {
  title: "Help & FAQ",
  description:
    "Shipping, the 30-day swap, the 3-year warranty, and how to clean and look after your Nove machine and grinder.",
}

export default function HelpPage() {
  return (
    <>
      <HelpHero />
      <HelpGuide />
      <HelpFaq />
    </>
  )
}
