"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "motion/react"

interface SubLink {
  href: string
  label: string
}

interface MenuItem {
  href: string
  label: string
  children?: SubLink[]
}

interface NavbarCompactMenuProps {
  open: boolean
  onClose: () => void
  items: MenuItem[]
  triggerRef: React.RefObject<HTMLDivElement | null>
}

const EASE_SOFT = [0.22, 1, 0.36, 1] as const
const CLOSED_CLIP = "inset(0% 0% calc(100% - 56px) 0% round 28px)"
const OPEN_CLIP = "inset(0% 0% calc(0% - 0px) 0% round 28px)"

export function NavbarCompactMenu({
  open,
  onClose,
  items,
  triggerRef,
}: NavbarCompactMenuProps) {
  const panelRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!open) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    const handlePointerDown = (e: PointerEvent) => {
      const target = e.target as Node
      if (
        triggerRef.current?.contains(target) ||
        panelRef.current?.contains(target)
      ) {
        return
      }
      onClose()
    }

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("pointerdown", handlePointerDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("pointerdown", handlePointerDown)
    }
  }, [open, onClose, triggerRef])

  return (
    <AnimatePresence initial={false}>
      {open ? (
        <motion.div
          ref={panelRef}
          key="panel"
          className="absolute inset-x-0 top-0 -z-10"
        >
          {/* Dropdown shadow background */}
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.15, duration: 0.3 } }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
            className="absolute inset-0 rounded-3xl bg-background shadow-2xl"
          />

          {/* Animated clipping navigation */}
          <motion.nav
            id="compact-menu"
            aria-label="Main"
            initial={{ clipPath: CLOSED_CLIP }}
            animate={{
              clipPath: OPEN_CLIP,
              transition: { duration: 0.5, ease: EASE_SOFT },
            }}
            exit={{
              clipPath: CLOSED_CLIP,
              transition: { duration: 0.3, ease: EASE_SOFT, delay: 0.05 },
            }}
            className="relative rounded-3xl bg-background ps-5 pe-5 pt-16 pb-3"
          >
            <ul>
              {items.map((item, idx) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: {
                      delay: 0.1 + 0.045 * idx,
                      duration: 0.45,
                      ease: EASE_SOFT,
                    },
                  }}
                  exit={{
                    opacity: 0,
                    y: -6,
                    transition: { duration: 0.12, ease: EASE_SOFT },
                  }}
                  className="border-t first:border-t-0"
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block rounded-xl py-3 text-2xl font-medium tracking-tight text-foreground transition-[color,transform] duration-200 ease-soft outline-none hover:translate-x-1 hover:text-muted-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
                  >
                    {item.label}
                  </Link>
                  {item.children ? (
                    <ul className="-mt-1 flex flex-wrap gap-2 pb-3">
                      {item.children.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            onClick={onClose}
                            className="group/button inline-flex h-9 shrink-0 items-center justify-center rounded-full border border-transparent bg-secondary px-4 text-sm font-medium text-secondary-foreground transition-colors outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)]"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
