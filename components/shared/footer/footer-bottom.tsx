import Link from "next/link"

const LEGAL_LINKS = [
  { href: "/legal/privacy", label: "Privacy" },
  { href: "/legal/terms", label: "Terms" },
  { href: "/legal/cookies", label: "Cookies" },
]

const PAYMENT_METHODS = [
  "Visa",
  "Mastercard",
  "Amex",
  "Apple Pay",
  "Google Pay",
  "PayPal",
]

export function FooterBottom() {
  return (
    <div className="mt-14 flex flex-col gap-6 border-t pt-6 text-xs text-muted-foreground md:mt-20 lg:flex-row lg:items-center lg:justify-between">
      <p className="flex flex-wrap gap-x-5 gap-y-2">
        <span>
          © <span className="figures">2026</span> Nove Espresso S.r.l.
        </span>
        {LEGAL_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="transition-colors duration-200 ease-soft hover:text-foreground"
          >
            {link.label}
          </Link>
        ))}
      </p>
      <ul aria-label="Ways to pay" className="flex flex-wrap gap-1.5">
        {PAYMENT_METHODS.map((method) => (
          <li key={method}>
            <span className="inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-foreground">
              {method}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
