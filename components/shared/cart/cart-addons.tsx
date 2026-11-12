"use client"

import Image from "next/image"
import { Plus } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { Separator } from "@/components/ui/separator"
import type { CartItem } from "@/types/cart"

interface AddonDefinition {
  slug: string
  name: string
  price: number
  image: string
  note: string
  isSubscription?: boolean
}

const AVAILABLE_ADDONS: AddonDefinition[] = [
  {
    slug: "jug",
    name: "Milk jug, 350 ml",
    price: 38,
    image: "/images/home/jug.png",
    note: "350 ml, pours fine latte art",
  },
  {
    slug: "beans",
    name: "House roast",
    price: 18,
    image: "/images/shop/beans-house.jpg",
    note: "House roast, smooth and chocolatey",
    isSubscription: true,
  },
]

interface CartAddonsProps {
  currentSlugs: string[]
  onAdd: (addon: Omit<CartItem, "qty">) => void
}

export function CartAddons({ currentSlugs, onAdd }: CartAddonsProps) {
  const missingAddons = AVAILABLE_ADDONS.filter(
    (addon) => !currentSlugs.includes(addon.slug)
  )

  if (missingAddons.length === 0) return null

  return (
    <motion.section
      aria-labelledby="or-add"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden"
    >
      <div className="pb-4">
        <div className="flex items-center gap-4">
          <Separator className="flex-1" />
          <h3 id="or-add" className="text-sm font-medium text-muted-foreground">
            or add
          </h3>
          <Separator className="flex-1" />
        </div>

        <ul className="mt-5 grid gap-3 lg:grid-cols-2">
          <AnimatePresence initial={false} mode="popLayout">
            {missingAddons.map((addon) => (
              <motion.li
                key={addon.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                <button
                  type="button"
                  aria-label={`Add to bag: ${addon.name}, $${addon.price}`}
                  onClick={() =>
                    onAdd({
                      slug: addon.slug,
                      name: addon.name,
                      price: addon.price,
                      image: addon.image,
                      note: addon.note,
                    })
                  }
                  className="group flex h-full w-full items-center gap-3 rounded-2xl bg-card p-2 text-start transition-colors duration-200 ease-soft outline-none hover:bg-secondary focus-visible:ring-3 focus-visible:ring-ring/50"
                >
                  <span
                    className={`isolate flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-foreground ${
                      addon.isSubscription ? "" : "p-1.5"
                    }`}
                  >
                    <Image
                      src={addon.image}
                      alt={addon.name}
                      width={96}
                      height={96}
                      className={`transition-transform duration-300 ease-soft group-hover:scale-105 ${
                        addon.isSubscription
                          ? "size-full object-cover"
                          : "h-auto max-h-full w-auto mix-blend-multiply"
                      }`}
                    />
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className="leading-snug font-medium text-foreground">
                      {addon.name}
                    </span>
                    <span className="font-mono text-sm text-muted-foreground figures">
                      ${addon.price}
                    </span>
                  </span>
                  <Plus className="me-2 size-4 shrink-0 text-muted-foreground transition-colors duration-200 ease-soft group-hover:text-foreground" />
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </motion.section>
  )
}
