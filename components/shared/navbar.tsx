"use client"

import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"
import { ShoppingBag, Menu, X } from "lucide-react"

import { useCart } from "@/lib/cart-context"
import { CartDrawer } from "@/components/shared/cart-drawer"
import { NavbarMobile } from "@/components/shared/navbar-mobile"
import { NavbarCompactMenu } from "@/components/shared/navbar-compact-menu"
import { cn } from "@/lib/utils"

const SPRING_TRANSITION = {
  type: "spring" as const,
  duration: 0.6,
  bounce: 0.12,
}

const MENU_ITEMS = [
  {
    href: "/shop",
    label: "Shop",
    children: [
      { href: "/shop#machines", label: "Models" },
      { href: "/shop#add-ons", label: "Add-ons" },
      { href: "/shop#beans", label: "Beans" },
    ],
  },
  { href: "/about", label: "Our story" },
  { href: "/showroom", label: "Showroom" },
  { href: "/journal", label: "Journal" },
  { href: "/help", label: "Help" },
  { href: "/contact", label: "Contact" },
]

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
  const [compactOpen, setCompactOpen] = useState(false)
  const triggerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let frame = 0
    const update = () => {
      setDocked((current) => window.scrollY > (current ? 8 : 48))
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
    const slot = document.querySelector("[data-nav-slot]")
    const observer = new ResizeObserver(() => {
      const currentSlot = document.querySelector("[data-nav-slot]")
      setMeasured(true)
      if (!currentSlot) {
        setRest(null)
        return
      }
      const rect = currentSlot.getBoundingClientRect()
      setRest({
        top: rect.top + window.scrollY,
        left: rect.left,
        width: rect.width,
        dark: currentSlot.getAttribute("data-tone") === "dark",
      })
    })

    observer.observe(document.body)
    if (slot) observer.observe(slot)
    return () => observer.disconnect()
  }, [pathname])

  const isDocked = docked || (measured && !rest)
  const headerStyle =
    isDocked || !rest
      ? { borderRadius: 28 }
      : {
          top: rest.top,
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
        !measured && "invisible",
        (isDocked ? true : rest?.dark) && "dark",
        isDocked
          ? "dark inset-x-3 top-3 mx-auto max-w-md gap-2 bg-background py-1.5 ps-5 pe-1.5 shadow-2xl md:top-4"
          : "gap-4 bg-transparent min-[390px]:gap-14"
      )}
    >
      {/* Brand logo */}
      <motion.div
        layout="position"
        transition={SPRING_TRANSITION}
        className={cn(isDocked && "me-auto")}
      >
        <Link
          href="/"
          aria-label="Nove home"
          className="block shrink-0 rounded-full whitespace-nowrap outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <span className="me-[-0.24em] inline-block font-display text-xl leading-none weight-display tracking-[0.24em]">
            NOVE
          </span>
        </Link>
      </motion.div>

      {/* Center navigation menu (visible when un-docked on desktop) */}
      {!isDocked ? (
        <motion.div
          layout="position"
          transition={SPRING_TRANSITION}
          className="max-lg:hidden"
        >
          <nav
            aria-label="Main"
            className="relative flex max-w-max flex-1 items-center justify-center"
          >
            <ul className="flex flex-1 list-none items-center justify-center gap-8">
              {MENU_ITEMS.map(({ href, label }) => (
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
        </motion.div>
      ) : null}

      {/* Right controls: Menu (docked) + Bag + Mobile Menu (un-docked) */}
      <motion.div
        ref={triggerRef}
        layout="position"
        transition={SPRING_TRANSITION}
        className={cn("flex items-center gap-2", !isDocked && "ms-auto")}
      >
        <AnimatePresence initial={false} mode="popLayout">
          {isDocked ? (
            <motion.div
              key="menu"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={SPRING_TRANSITION}
            >
              <button
                type="button"
                aria-expanded={compactOpen}
                aria-controls="compact-menu"
                onClick={() => setCompactOpen((v) => !v)}
                className="group/button inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-transparent bg-clip-padding px-6 text-sm font-medium whitespace-nowrap text-foreground transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out outline-none select-none hover:bg-muted hover:text-foreground dark:hover:bg-foreground/10"
              >
                Menu
                <AnimatePresence initial={false} mode="popLayout">
                  <motion.span
                    key={compactOpen ? "close" : "open"}
                    initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="flex"
                  >
                    {compactOpen ? (
                      <X className="size-4" />
                    ) : (
                      <Menu className="size-4" />
                    )}
                  </motion.span>
                </AnimatePresence>
              </button>
            </motion.div>
          ) : null}
        </AnimatePresence>

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
            <NavbarMobile />
          </div>
        ) : null}
      </motion.div>

      {/* Docked compact dropdown panel */}
      <NavbarCompactMenu
        open={compactOpen && isDocked}
        onClose={() => setCompactOpen(false)}
        items={MENU_ITEMS}
        triggerRef={triggerRef}
      />
    </motion.header>
  )
}
