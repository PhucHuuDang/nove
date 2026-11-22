"use client"

import { motion } from "motion/react"
import { ArrowDown, Coffee, Milk, Users, type LucideIcon } from "lucide-react"

import { spotlightProduct } from "@/components/features/shop/shop-spotlight"
import type { CatalogId, CatalogProduct } from "@/lib/data/catalog"

const SLIDE = { type: "spring" as const, duration: 0.45, bounce: 0.15 }

const MODEL_ICONS: Partial<Record<CatalogId, LucideIcon>> = {
  one: Coffee,
  duo: Milk,
  pro: Users,
}

/** "For lattes and flat whites" reads as "Lattes and flat whites". */
function useCaseOf(kicker: string) {
  const useCase = kicker.replace(/^For /, "")
  return useCase.charAt(0).toUpperCase() + useCase.slice(1)
}

interface ShopHeroModelLinkProps {
  product: CatalogProduct
  shown: boolean
  onShow: () => void
}

export function ShopHeroModelLink({
  product,
  shown,
  onShow,
}: ShopHeroModelLinkProps) {
  const Icon = MODEL_ICONS[product.id] ?? Coffee

  return (
    <>
      {shown ? (
        <motion.span
          layoutId="guide-row"
          aria-hidden="true"
          className="absolute inset-0 rounded-2xl bg-popover shadow-xs"
          transition={SLIDE}
        />
      ) : null}
      <a
        href={`#shop-${product.id}`}
        onMouseEnter={onShow}
        onFocus={onShow}
        onClick={(event) => {
          event.preventDefault()
          onShow()
          spotlightProduct(product.id)
        }}
        data-shown={shown || undefined}
        className="group relative flex flex-col gap-1.5 rounded-2xl px-3 py-4 transition-transform duration-150 ease-soft outline-none focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.99] md:py-5"
      >
        <span className="flex items-center gap-3">
          <Icon aria-hidden="true" className="size-4 shrink-0" />
          <span className="text-lg leading-snug font-medium">
            {useCaseOf(product.kicker)}
          </span>
          <span className="ml-auto flex shrink-0 items-center gap-1.5 text-sm text-muted-foreground transition-colors duration-200 ease-soft group-hover:text-foreground group-data-shown:text-foreground">
            {product.name}
            <ArrowDown
              aria-hidden="true"
              className="size-4 transition-transform duration-200 ease-soft motion-safe:group-hover:translate-y-0.5"
            />
          </span>
        </span>
        <span className="max-w-md pl-7 text-base text-muted-foreground">
          {product.description}
        </span>
      </a>
    </>
  )
}
