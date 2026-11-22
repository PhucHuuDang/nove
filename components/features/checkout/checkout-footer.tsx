import Link from "next/link"

import { CONTACT_EMAIL } from "@/components/features/contact/contact-data"

import { LEGAL_COPY } from "./checkout-data"

const LINK_CLASS =
  "rounded-sm transition-colors duration-200 ease-soft outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"

const LINKS = [
  { label: "Help", href: "/help" },
  { label: "Terms", href: "/legal/terms" },
  { label: "Privacy", href: "/legal/privacy" },
]

export function CheckoutFooter() {
  return (
    <footer className="border-t px-3 md:px-5">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-3 py-6 text-xs text-muted-foreground">
        <p>{LEGAL_COPY}</p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={LINK_CLASS}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a href={`mailto:${CONTACT_EMAIL}`} className={LINK_CLASS}>
              {CONTACT_EMAIL}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
