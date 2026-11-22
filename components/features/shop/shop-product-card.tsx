"use client"

import Link from "next/link"
import { AnimatePresence, motion } from "motion/react"

import { ShopAddButton } from "@/components/features/shop/shop-add-button"
import {
  GroundedProductImage,
  ProductImage,
} from "@/components/shared/product-image"
import { BESTSELLER_ID, type CatalogProduct } from "@/lib/data/catalog"
import { pillBadge } from "@/lib/pill-variants"
import { cn } from "@/lib/utils"

const SLIDE = { type: "spring" as const, duration: 0.45, bounce: 0.15 }
const LIFT =
  "transition-transform duration-300 ease-soft motion-safe:group-hover:-translate-y-1 motion-reduce:transition-none"

interface ShopProductCardProps {
  product: CatalogProduct
  /** Outlined after a jump from the hero. */
  lit: boolean
  /** Faded while a sibling card is lit. */
  dimmed: boolean
}

export function ShopProductCard({
  product,
  lit,
  dimmed,
}: ShopProductCardProps) {
  const isBestseller = product.id === BESTSELLER_ID
  const isMachine = product.kind === "machine"

  return (
    <article
      className={cn(
        "group flex h-full flex-col transition-opacity duration-300 ease-soft",
        dimmed && "opacity-35"
      )}
    >
      <Link
        href={product.href}
        tabIndex={-1}
        aria-hidden
        className={cn(
          "relative flex h-80 items-center justify-center overflow-hidden rounded-3xl pt-6 lg:h-104",
          isBestseller ? "dark bg-background text-foreground" : "bg-card"
        )}
      >
        <AnimatePresence>
          {lit ? (
            <motion.span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-3xl border-2 border-foreground"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={SLIDE}
            />
          ) : null}
        </AnimatePresence>
        {isBestseller ? (
          <span
            className={pillBadge({
              variant: "secondary",
              className: "absolute top-4 left-4",
            })}
          >
            Bestseller
          </span>
        ) : null}
        <span className="absolute top-4 right-5 font-mono text-lg figures">
          {product.price}
        </span>
        {isMachine ? (
          <div
            className={cn(LIFT, lit && "-translate-y-2")}
            style={{ width: `${Math.round(54 * product.scale)}%` }}
          >
            <GroundedProductImage product={product} sizes="16rem" />
          </div>
        ) : (
          <ProductImage
            product={product}
            sizes="24rem"
            className={cn(
              LIFT,
              lit && "-translate-y-2",
              "w-auto",
              product.id === "grinder" ? "h-4/5" : "h-1/2"
            )}
          />
        )}
      </Link>
      <div className="mt-5 flex flex-1 items-start justify-between gap-4 md:flex-col md:justify-start xl:flex-row xl:justify-between">
        <div>
          <h3 className="text-xl leading-tight">
            <Link
              href={product.href}
              className="rounded-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              {product.name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {isMachine ? product.kicker : product.note}
          </p>
        </div>
        <ShopAddButton
          product={product}
          variant={lit ? "default" : "outline"}
          size="sm"
          className="md:mt-auto xl:mt-0"
        />
      </div>
    </article>
  )
}
