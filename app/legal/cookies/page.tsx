import type { Metadata } from "next"

import { LEGAL_DOCUMENTS } from "@/components/features/legal/legal-content"
import { LegalPageView } from "@/components/features/legal/legal-page-view"
import { pageMetadata } from "@/lib/seo"

const { title, description } = LEGAL_DOCUMENTS.cookies

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/legal/cookies",
})

export default function CookiesPage() {
  return <LegalPageView slug="cookies" />
}
