import type { Metadata } from "next"

import { NavSpacer } from "@/components/shared/nav-spacer"
import { ContactOptions } from "@/components/features/contact/contact-options"
import { ContactFormSection } from "@/components/features/contact/contact-form-section"
import { HomeFaqSection } from "@/components/features/home/faq-section"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Write to Nove, ask for a call with the founders or visit the showroom in Turin. We reply within 1 working day.",
}

export default function ContactPage() {
  return (
    <>
      <NavSpacer />
      <ContactOptions />
      <ContactFormSection />
      <HomeFaqSection />
    </>
  )
}
