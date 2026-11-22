export type LegalSlug = "privacy" | "terms" | "cookies"

export type LegalInline = string | { href: string; text: string }

/** Plain text, or text mixed with inline links. */
export type LegalRichText = string | LegalInline[]

export interface LegalTableRow {
  term: string
  /** Storage key shown in mono next to the term, e.g. `nove:bag`. */
  code?: string
  note?: string
  value: string
}

export type LegalBlock =
  | { type: "heading"; id: string; title: string }
  | { type: "paragraph"; content: LegalRichText }
  | { type: "callout"; content: LegalRichText }
  | { type: "list"; items: LegalRichText[] }
  | { type: "table"; caption: string; rows: LegalTableRow[] }

export interface LegalDocument {
  title: string
  /** Short label used in the sidebar navigation. */
  navLabel: string
  description: string
  intro: string
  updated: { dateTime: string; label: string }
  blocks: LegalBlock[]
}
