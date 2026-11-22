"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion } from "motion/react"
import { ChevronDown } from "lucide-react"

import { catalogProduct, type CatalogProduct } from "@/lib/data/catalog"
import { SHOP_SECTIONS } from "@/lib/data/navigation"
import { EASE_SOFT } from "@/lib/pill-variants"
import { cn } from "@/lib/utils"

const OPEN_DELAY_MS = 150
const CLOSE_DELAY_MS = 300

const SECTION_DETAILS: Record<
  string,
  { note: string; product: CatalogProduct }
> = {
  "/shop#machines": {
    note: "One, Duo and Pro, from $650",
    product: catalogProduct("duo"),
  },
  "/shop#add-ons": {
    note: "The grinder and the milk jug",
    product: catalogProduct("grinder"),
  },
  "/shop#beans": {
    note: "Whole or ground, every four weeks",
    product: catalogProduct("beans"),
  },
}

const LINK_CLASS =
  "flex items-center rounded-2xl text-sm transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:outline-1"

/** "Shop" in the main navigation, opening a panel of shop sections. */
export function NavbarShopMenu() {
  const [open, setOpen] = useState(false)
  const timer = useRef(0)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const setOpenAfter = (next: boolean, delay: number) => {
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setOpen(next), delay)
  }

  return (
    <li
      className="relative"
      onPointerEnter={() => setOpenAfter(true, OPEN_DELAY_MS)}
      onPointerLeave={() => setOpenAfter(false, CLOSE_DELAY_MS)}
      onKeyDown={(event) => {
        if (event.key === "Escape") setOpen(false)
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls="shop-menu"
        data-open={open || undefined}
        onClick={() => {
          window.clearTimeout(timer.current)
          setOpen((current) => !current)
        }}
        className="group/navigation-menu-trigger inline-flex w-max items-center justify-center rounded-sm py-2 font-medium whitespace-nowrap underline decoration-transparent decoration-1 underline-offset-6 transition-all duration-300 ease-soft outline-none hover:decoration-current focus-visible:ring-3 focus-visible:ring-ring/50 data-open:decoration-current"
      >
        Shop{" "}
        <ChevronDown
          aria-hidden="true"
          className="relative top-px ms-1 size-3 transition duration-300 group-data-open/navigation-menu-trigger:rotate-180"
        />
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div
            id="shop-menu"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: EASE_SOFT }}
            className="absolute start-0 top-full mt-1.5 w-md overflow-hidden rounded-3xl bg-popover p-2 text-popover-foreground shadow-lg ring-1 ring-foreground/5"
          >
            <ul className="flex flex-col">
              {SHOP_SECTIONS.map((section) => (
                <li key={section.href}>
                  <ShopSectionLink
                    href={section.href}
                    label={section.label}
                    onNavigate={() => setOpen(false)}
                  />
                </li>
              ))}
            </ul>
            <div role="none" className="my-2 h-px w-full shrink-0 bg-border" />
            <Link
              href="/shop"
              onClick={() => setOpen(false)}
              className={cn(LINK_CLASS, "justify-between p-3 font-medium")}
            >
              Shop everything
              <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </li>
  )
}

interface ShopSectionLinkProps {
  href: string
  label: string
  onNavigate: () => void
}

function ShopSectionLink({ href, label, onNavigate }: ShopSectionLinkProps) {
  const { note, product } = SECTION_DETAILS[href]
  const isPhoto = product.kind === "subscription"

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={cn(LINK_CLASS, "gap-4 p-2")}
    >
      <span className="flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-card">
        <Image
          src={product.image.src}
          alt={product.image.alt}
          width={product.image.width}
          height={product.image.height}
          sizes="4rem"
          className={cn(
            isPhoto ? "size-full object-cover" : "h-auto max-h-13 w-auto",
            product.kind === "add-on" && "mix-blend-multiply"
          )}
        />
      </span>
      <span className="flex flex-col gap-0.5">
        <span className="text-base font-medium">{label}</span>
        <span className="text-muted-foreground">{note}</span>
      </span>
    </Link>
  )
}
