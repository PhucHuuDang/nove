import Link from "next/link"

const SHOP_LINKS = [
  { href: "/shop/one", label: "Nove One" },
  { href: "/shop/duo", label: "Nove Duo" },
  { href: "/shop/pro", label: "Nove Pro" },
  { href: "/shop/grinder", label: "Nove grinder" },
  { href: "/shop/jug", label: "Milk jug, 350 ml" },
  { href: "/shop#beans", label: "Beans" },
]

const HELP_LINKS = [
  { href: "/shop#compare", label: "Compare the models" },
  { href: "/help#shipping", label: "Shipping and returns" },
  { href: "/help#swap", label: "30-day swap" },
  { href: "/help#warranty", label: "Warranty" },
  { href: "/help#care", label: "Care guide" },
]

const NOVE_LINKS = [
  { href: "/about", label: "Our story" },
  { href: "/showroom", label: "Showroom in Turin" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
]

export function FooterNav() {
  return (
    <div className="mt-16 grid gap-12 border-t pt-10 md:mt-24 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 lg:pt-12">
      <div>
        <Link
          aria-label="Nove home"
          href="/"
          className="inline-block rounded-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <span className="me-[-0.24em] inline-block font-display text-xl leading-none tracking-[0.24em]">
            NOVE
          </span>
        </Link>
        <p className="mt-5 max-w-sm text-muted-foreground">
          Built by a barista and an engineer in Turin, since{" "}
          <span className="figures">2019</span>.
        </p>
        <ul className="mt-6 flex gap-2">
          <li>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Nove on Instagram"
              className="group/button inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-transparent bg-popover bg-clip-padding text-sm font-medium whitespace-nowrap text-popover-foreground shadow-xs transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out outline-none select-none hover:bg-[color-mix(in_oklch,var(--popover),var(--foreground)_6%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.97]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="0.75"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Nove on TikTok"
              className="group/button inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-transparent bg-popover bg-clip-padding text-sm font-medium whitespace-nowrap text-popover-foreground shadow-xs transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out outline-none select-none hover:bg-[color-mix(in_oklch,var(--popover),var(--foreground)_6%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.97]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.6 2.6 0 0 1-2.6-2.6 2.6 2.6 0 0 1 3.38-2.48V9.66a5.7 5.7 0 0 0-.78-.05A5.69 5.69 0 0 0 4.17 15.3 5.69 5.69 0 0 0 9.86 21a5.69 5.69 0 0 0 5.69-5.69V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.3 4.3 0 0 1-3.25-1.48Z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <nav
        aria-label="Footer"
        className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3"
      >
        <div>
          <h3 className="text-sm font-semibold tracking-normal">Shop</h3>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-muted-foreground">
            {SHOP_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors duration-200 ease-soft hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-normal">Help</h3>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-muted-foreground">
            {HELP_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors duration-200 ease-soft hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-normal">Nove</h3>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-muted-foreground">
            {NOVE_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors duration-200 ease-soft hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  )
}
