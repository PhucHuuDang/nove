"use client"

import Link from "next/link"
import { Menu } from "lucide-react"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

interface NavLink {
  href: string
  label: string
}

interface NavbarMobileProps {
  links?: NavLink[]
  triggerLabel?: string
}

const SUB_PILLS = [
  { href: "/shop#machines", label: "Models" },
  { href: "/shop#add-ons", label: "Add-ons" },
  { href: "/shop#beans", label: "Beans" },
]

const SIDEBAR_LINKS: NavLink[] = [
  { href: "/about", label: "Our story" },
  { href: "/showroom", label: "Showroom" },
  { href: "/journal", label: "Journal" },
  { href: "/help", label: "Help" },
  { href: "/contact", label: "Contact" },
]

export function NavbarMobile({ triggerLabel }: NavbarMobileProps) {
  const triggerButton = triggerLabel ? (
    <button
      type="button"
      aria-label="Open menu"
      className="group/button inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-transparent bg-clip-padding px-6 text-sm font-medium whitespace-nowrap text-foreground transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out outline-none select-none hover:bg-muted hover:text-foreground dark:hover:bg-foreground/10"
    >
      {triggerLabel}
      <Menu className="size-4" />
    </button>
  ) : (
    <button
      type="button"
      aria-label="Open menu"
      className="group/button inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-transparent bg-popover bg-clip-padding text-sm font-medium whitespace-nowrap text-popover-foreground shadow-xs transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out outline-none select-none hover:bg-[color-mix(in_oklch,var(--popover),var(--foreground)_6%)]"
    >
      <Menu className="size-4" />
      <span className="sr-only">Open menu</span>
    </button>
  )

  return (
    <Sheet>
      <SheetTrigger render={triggerButton} />
      <SheetContent
        side="right"
        className="w-3/4 sm:max-w-sm"
        showCloseButton={true}
        closeButtonLabel="Close menu"
      >
        <SheetHeader className="p-6">
          <SheetTitle className="text-2xl font-normal text-foreground">
            Menu
          </SheetTitle>
        </SheetHeader>

        <nav aria-label="Menu" className="px-6">
          <ul>
            <li className="border-t">
              <SheetClose
                render={
                  <Link
                    href="/shop"
                    className="block py-4 text-3xl font-medium tracking-tight text-foreground transition-colors hover:text-muted-foreground"
                  >
                    Shop
                  </Link>
                }
              />
              <ul className="-mt-1 flex flex-wrap gap-2 pb-4">
                {SUB_PILLS.map((pill) => (
                  <li key={pill.href}>
                    <SheetClose
                      render={
                        <Link
                          href={pill.href}
                          className="group/button inline-flex h-9 shrink-0 items-center justify-center rounded-full border border-transparent bg-secondary px-4 text-sm font-medium text-secondary-foreground transition-colors outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)]"
                        >
                          {pill.label}
                        </Link>
                      }
                    />
                  </li>
                ))}
              </ul>
            </li>

            {SIDEBAR_LINKS.map((link, idx) => (
              <li
                key={link.href}
                className={
                  idx === SIDEBAR_LINKS.length - 1
                    ? "border-t border-b"
                    : "border-t"
                }
              >
                <SheetClose
                  render={
                    <Link
                      href={link.href}
                      className="block py-4 text-3xl font-medium tracking-tight text-foreground transition-colors hover:text-muted-foreground"
                    >
                      {link.label}
                    </Link>
                  }
                />
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
