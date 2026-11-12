"use client"

import Link from "next/link"
import Image from "next/image"
import { Minus, Plus } from "lucide-react"
import { motion } from "motion/react"
import type { CartItem } from "@/types/cart"

interface CartItemRowProps {
  item: CartItem
  onRemove: (slug: string) => void
  onUpdateQty: (slug: string, qty: number) => void
  onClose: () => void
}

function getLineNote(item: CartItem): string {
  if (item.note) return item.note
  if (item.slug === "one") return "With portafilter and tamper"
  if (item.slug === "duo" || item.slug === "pro")
    return "With portafilter, tamper and milk jug"
  if (item.slug === "grinder") return "Grinds fresh for every coffee"
  if (item.slug === "origin") return "Light roast, fruity, best black"
  if (item.slug === "beans") return "House roast, smooth and chocolatey"
  if (item.slug === "decaf") return "Swiss water decaf, tastes like real coffee"
  if (item.slug === "jug") return "350 ml, pours fine latte art"
  return ""
}

export function CartItemRow({
  item,
  onRemove,
  onUpdateQty,
  onClose,
}: CartItemRowProps) {
  const note = getLineNote(item)
  const isMachine =
    item.slug === "one" || item.slug === "duo" || item.slug === "pro"

  return (
    <motion.li
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden"
    >
      <div className="pb-6">
        <div className="flex items-baseline justify-between gap-4">
          <div className="flex min-w-0 flex-col gap-0.5">
            <Link
              href={`/shop/${item.slug}`}
              onClick={onClose}
              className="text-base font-medium text-foreground underline-offset-4 hover:underline"
            >
              {item.name}
            </Link>
            {note ? (
              <p className="text-sm text-muted-foreground lg:hidden">{note}</p>
            ) : null}
          </div>
          <button
            type="button"
            onClick={() => onRemove(item.slug)}
            className="group/button relative h-auto! rounded-none px-0! text-xs font-medium text-foreground underline decoration-foreground/30 underline-offset-4 after:absolute after:-inset-x-1 after:-inset-y-2.5 hover:decoration-foreground"
            aria-label={`Remove ${item.name}`}
          >
            Remove
          </button>
        </div>

        <div className="mt-2 flex items-center gap-3 rounded-2xl bg-card p-2">
          <span className="isolate flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-foreground p-1.5">
            <Image
              src={item.image}
              alt={item.name}
              width={160}
              height={160}
              className={`h-auto max-h-full w-auto ${isMachine ? "" : "mix-blend-multiply"}`}
            />
          </span>

          {note ? (
            <p className="min-w-0 flex-1 text-sm text-muted-foreground max-lg:hidden">
              {note}
            </p>
          ) : (
            <div className="min-w-0 flex-1" />
          )}

          <div
            role="group"
            aria-label={`Quantity of ${item.name}`}
            className="ms-auto inline-flex items-center gap-1 rounded-full bg-secondary p-1"
          >
            <button
              type="button"
              onClick={() => onUpdateQty(item.slug, item.qty - 1)}
              className="inline-flex size-9 shrink-0 items-center justify-center rounded-full text-sm font-medium transition-colors outline-none hover:bg-muted active:scale-[0.97] dark:hover:bg-foreground/10"
              aria-label="Decrease quantity"
            >
              <Minus className="size-4" />
            </button>
            <span className="w-5 text-center font-mono text-foreground figures">
              {item.qty}
            </span>
            <button
              type="button"
              onClick={() => onUpdateQty(item.slug, item.qty + 1)}
              disabled={item.qty >= 9}
              className="inline-flex size-9 shrink-0 items-center justify-center rounded-full text-sm font-medium transition-colors outline-none hover:bg-muted active:scale-[0.97] disabled:opacity-40 dark:hover:bg-foreground/10"
              aria-label="Increase quantity"
            >
              <Plus className="size-4" />
            </button>
          </div>

          <p className="min-w-16 shrink-0 pe-2 text-end font-mono text-base text-foreground figures">
            ${(item.price * item.qty).toLocaleString()}
          </p>
        </div>
      </div>
    </motion.li>
  )
}
