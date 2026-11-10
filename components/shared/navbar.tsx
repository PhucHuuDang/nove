"use client"

import Link from "next/link"
import { ShoppingBag } from "lucide-react"

import { useCart } from "@/lib/cart-context"
import { CartDrawer } from "@/components/shared/cart-drawer"
import { NavbarMobile } from "@/components/shared/navbar-mobile"

const NAV_LINKS = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
  { href: "/help", label: "Help" },
]

export function Navbar() {
  const { count } = useCart()

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-screen-xl items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-widest uppercase"
        >
          Nove
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map(({ href, label }) => (
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

        {/* Right side: cart + mobile menu */}
        <div className="flex items-center gap-2">
          <CartDrawer>
            <button
              aria-label={`Cart (${count} items)`}
              className="relative flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-accent"
            >
              <ShoppingBag className="h-4 w-4" />
              {count > 0 ? (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-foreground font-mono text-[9px] text-background">
                  {count}
                </span>
              ) : null}
            </button>
          </CartDrawer>

          <NavbarMobile links={NAV_LINKS} />
        </div>
      </nav>
    </header>
  )
}
