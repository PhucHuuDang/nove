"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

interface NavLink {
  href: string
  label: string
}

interface NavbarMobileProps {
  links: NavLink[]
}

export function NavbarMobile({ links }: NavbarMobileProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-accent md:hidden"
      >
        {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </button>

      {open ? (
        <div
          className="fixed inset-0 top-14 z-40 bg-background md:hidden"
          onClick={() => setOpen(false)}
        >
          <nav className="flex flex-col px-6 py-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-5 text-xl font-light transition-colors hover:text-muted-foreground"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </>
  )
}
