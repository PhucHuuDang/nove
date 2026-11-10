import Link from "next/link"

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

const SHOP_LINKS = [
  { href: "/shop/one", label: "Nove One" },
  { href: "/shop/duo", label: "Nove Duo" },
  { href: "/shop/pro", label: "Nove Pro" },
  { href: "/shop/grinder", label: "Grinder" },
  { href: "/shop/jug", label: "Milk jug" },
  { href: "/shop/beans", label: "Beans" },
]

const INFO_LINKS = [
  { href: "/about", label: "About" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
  { href: "/showroom", label: "Showroom" },
  { href: "/help", label: "Help" },
  { href: "/legal/terms", label: "Terms of sale" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-screen-xl px-4 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-3">
            <p className="font-mono text-sm font-semibold tracking-widest uppercase">
              Nove
            </p>
            <p className="max-w-xs text-sm text-muted-foreground">
              Café espresso at home. Made in Turin, Italy.
            </p>
            <a
              href="https://instagram.com/nove.espresso"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <InstagramIcon className="h-3.5 w-3.5" />
              @nove.espresso
            </a>
          </div>

          {/* Shop */}
          <div className="space-y-3">
            <p className="font-mono text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              Shop
            </p>
            <ul className="space-y-2">
              {SHOP_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div className="space-y-3">
            <p className="font-mono text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              Info
            </p>
            <ul className="space-y-2">
              {INFO_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} Nove Espresso S.r.l. — Turin, Italy
          </p>
          <p>hello@nove.coffee</p>
        </div>
      </div>
    </footer>
  )
}
