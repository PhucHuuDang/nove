import type { Metadata } from "next"

import { ContactOptions } from "@/components/features/contact/contact-options"
import { ContactForm } from "@/components/features/contact/contact-form"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk directly with the makers of Nove in Turin. Email, live chat, or book a 20-minute video consultation.",
}

export default function ContactPage() {
  return (
    <>
      <ContactOptions />
      <ContactForm />
    </>
  )
}
