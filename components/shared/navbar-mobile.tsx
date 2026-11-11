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
  triggerLabel?: string
}

export function NavbarMobile({ links, triggerLabel }: NavbarMobileProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {triggerLabel ? (
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="group/button inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-transparent bg-clip-padding px-6 text-sm font-medium whitespace-nowrap text-foreground transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out outline-none select-none hover:bg-muted hover:text-foreground dark:hover:bg-foreground/10"
        >
          {triggerLabel}
          <span className="flex">
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </span>
        </button>
      ) : (
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="group/button inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-transparent bg-popover bg-clip-padding text-sm font-medium whitespace-nowrap text-popover-foreground shadow-xs transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out outline-none select-none hover:bg-[color-mix(in_oklch,var(--popover),var(--foreground)_6%)]"
        >
          <Menu className="size-4" />
        </button>
      )}

      {open ? (
        <div className="fixed inset-0 z-50 flex flex-col bg-background p-6">
          <div className="flex items-center justify-between border-b border-border pb-6">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="font-display text-xl tracking-[0.24em]"
            >
              NOVE
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="grid size-11 place-items-center rounded-full bg-muted text-foreground"
            >
              <X className="size-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-2 py-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="py-3 text-2xl font-light transition-colors hover:text-muted-foreground"
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
