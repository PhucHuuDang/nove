import type { Metadata } from "next"

import { JournalGrid } from "@/components/features/journal/journal-grid"

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Guides from the people who make Nove: your first espresso, milk drinks, the grinder and beans, cleaning and descaling, and how the machines work.",
}

export default function JournalPage() {
  return <JournalGrid />
}
