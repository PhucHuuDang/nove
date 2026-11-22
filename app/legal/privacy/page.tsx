import type { Metadata } from "next"

import { LEGAL_DOCUMENTS } from "@/components/features/legal/legal-content"
import { LegalPageView } from "@/components/features/legal/legal-page-view"
import { pageMetadata } from "@/lib/seo"

const { title, description } = LEGAL_DOCUMENTS.privacy

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/legal/privacy",
})

export default function PrivacyPage() {
  return <LegalPageView slug="privacy" />
}
