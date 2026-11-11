"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { motion } from "motion/react"
import { ShoppingBag } from "lucide-react"

import { useCart } from "@/lib/cart-context"
import { CartDrawer } from "@/components/shared/cart-drawer"
import { NavbarMobile } from "@/components/shared/navbar-mobile"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "Our story" },
  { href: "/showroom", label: "Showroom" },
  { href: "/journal", label: "Journal" },
  { href: "/help", label: "Help" },
  { href: "/contact", label: "Contact" },
]

const SPRING_TRANSITION = {
  type: "spring" as const,
  duration: 0.6,
  bounce: 0.12,
}

interface NavSlotState {
  top: number
  left: number
  width: number
  dark: boolean
}

export function Navbar() {
  const pathname = usePathname()
  const { count } = useCart()
  const [docked, setDocked] = useState(false)
  const [rest, setRest] = useState<NavSlotState | null>(null)
  const [measured, setMeasured] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let frame = 0
    const update = () => {
      const y = window.scrollY
      setScrollY(y)
      setDocked(y > 32)
    }
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }
    frame = requestAnimationFrame(update)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  useEffect(() => {
    const measure = () => {
      const slot = document.querySelector("[data-nav-slot]")
      setMeasured(true)
      if (!slot) {
        setRest(null)
        return
      }
      const rect = slot.getBoundingClientRect()
      setRest({
        top: rect.top + window.scrollY,
        left: rect.left,
        width: rect.width,
        dark: slot.getAttribute("data-tone") === "dark",
      })
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(document.body)
    const slot = document.querySelector("[data-nav-slot]")
    if (slot) observer.observe(slot)

    return () => observer.disconnect()
  }, [pathname])

  const isDocked = docked || (measured && !rest)
  const headerStyle =
    isDocked || !rest
      ? { borderRadius: 28 }
      : {
          top: Math.max(0, rest.top - scrollY),
          left: rest.left,
          width: rest.width,
          borderRadius: 0,
        }

  return (
    <motion.header
      layout
      transition={SPRING_TRANSITION}
      style={headerStyle}
      className={cn(
        "fixed z-40 flex items-center text-foreground transition-[background-color,color,box-shadow,border-color] duration-500 ease-soft",
        !measured && "pointer-events-none opacity-0",
        isDocked
          ? "dark inset-x-3 top-3 mx-auto max-w-md gap-2 bg-background py-1.5 ps-5 pe-1.5 shadow-2xl md:top-4"
          : "gap-4 bg-transparent min-[390px]:gap-14"
      )}
    >
      {/* Brand logo */}
      <div className={cn(isDocked && "me-auto")}>
        <Link
          href="/"
          aria-label="Nove home"
          className="block shrink-0 rounded-full whitespace-nowrap outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <span className="me-[-0.24em] inline-block font-display text-xl leading-none weight-display tracking-[0.24em]">
            NOVE
          </span>
        </Link>
      </div>

      {/* Center navigation menu (visible when at rest on desktop) */}
      {!isDocked ? (
        <div className="max-lg:hidden">
          <nav
            aria-label="Main"
            className="relative flex max-w-max flex-1 items-center justify-center"
          >
            <ul className="flex flex-1 list-none items-center justify-center gap-8">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href} className="relative">
                  <Link
                    href={href}
                    className="inline-block rounded-sm py-2 text-sm font-medium whitespace-nowrap underline decoration-transparent decoration-1 underline-offset-6 transition-[text-decoration-color,color] duration-300 ease-soft outline-none hover:decoration-current focus-visible:ring-3 focus-visible:ring-ring/50"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : null}

      {/* Right controls: Bag button + Mobile/Compact Menu */}
      <div className={cn("flex items-center gap-2", !isDocked && "ms-auto")}>
        {isDocked ? (
          <div>
            <NavbarMobile links={NAV_LINKS} triggerLabel="Menu" />
          </div>
        ) : null}

        <CartDrawer>
          <button
            type="button"
            className="group/button inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-transparent bg-primary bg-clip-padding px-6 text-sm font-medium whitespace-nowrap text-primary-foreground transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out outline-none select-none hover:bg-primary/85 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.97]"
            aria-label={`Bag, ${count} ${count === 1 ? "item" : "items"}`}
          >
            <ShoppingBag className="size-4" />
            <span>Bag</span>
            <span className="-mr-2 grid size-6 place-items-center rounded-full bg-primary-foreground font-mono text-xs text-primary figures">
              {count}
            </span>
          </button>
        </CartDrawer>

        {!isDocked ? (
          <div className="lg:hidden">
            <NavbarMobile links={NAV_LINKS} />
          </div>
        ) : null}
      </div>
    </motion.header>
  )
}
