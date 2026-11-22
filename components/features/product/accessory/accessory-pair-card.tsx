"use client"

import { useState } from "react"
import Link from "next/link"

import { ProductHeroRollingText } from "@/components/features/product/hero/product-hero-rolling-text"
import { ProductImage } from "@/components/shared/product-image"
import { SlidingToggleGroup } from "@/components/shared/sliding-toggle-group"
import {
  FULL_SETUP,
  MACHINES,
  catalogProduct,
  formatPrice,
  type CatalogId,
  type CatalogProduct,
} from "@/lib/data/catalog"
import { pillButton } from "@/lib/pill-variants"
import { cn } from "@/lib/utils"

/** Machines each add-on works with; unlisted add-ons fit all three. */
const FITS: Partial<Record<CatalogId, CatalogId[]>> = { jug: ["duo", "pro"] }

/** Where the add-on stands beside the machine, as a share of the row. */
const BESIDE_STYLE: Partial<Record<CatalogId, React.CSSProperties>> = {
  grinder: { width: "52%", marginLeft: "-13%", marginBottom: "-2.9%" },
  jug: { width: "21%", marginLeft: "2%", marginBottom: "-2.4%" },
}

const WIDEST_SCALE = Math.max(...MACHINES.map((machine) => machine.scale))

function isInFullSetup(ids: CatalogId[]) {
  return ids.every((id) => FULL_SETUP.items.some((item) => item.id === id))
}

/** An add-on shown beside a machine of your choice, priced together. */
export function AccessoryPairCard({ addon }: { addon: CatalogProduct }) {
  const machines = MACHINES.filter(
    (machine) => FITS[addon.id]?.includes(machine.id) ?? true
  )
  const [shownId, setShownId] = useState<CatalogId>("duo")
  const machine = catalogProduct(shownId)
  const shortName = (product: CatalogProduct) =>
    product.name.replace("Nove ", "")

  return (
    <div className="flex flex-1 flex-col gap-5 rounded-3xl bg-popover p-6">
      <p className="font-medium">
        With the <ProductHeroRollingText value={machine.name} />
      </p>
      <div className="flex w-full items-end justify-center">
        <div className="grid w-3/5 shrink-0 items-end">
          {machines.map((option) => (
            <div
              key={option.id}
              className={cn(
                "justify-self-end transition-opacity duration-300 ease-soft [grid-area:1/1]",
                option.id === shownId ? "opacity-100" : "opacity-0"
              )}
              style={{ width: `${(option.scale / WIDEST_SCALE) * 100}%` }}
            >
              <ProductImage product={option} sizes="16rem" />
            </div>
          ))}
        </div>
        <div className="relative shrink-0" style={BESIDE_STYLE[addon.id]}>
          <ProductImage product={addon} sizes="16rem" />
        </div>
      </div>
      <SlidingToggleGroup
        label={`The machine beside the ${addon.name}`}
        variant="segmented"
        size="sm"
        value={shownId}
        options={machines.map((option) => ({
          value: option.id,
          label: shortName(option),
        }))}
        onValueChange={(value) => setShownId(value as CatalogId)}
        className="w-full"
        itemClassName="flex-1"
      />
      {addon.id === "jug" ? (
        <p className="text-sm text-muted-foreground">
          The {shortName(machine)} comes with one jug. This one is a second.
        </p>
      ) : (
        <div className="flex flex-col gap-1">
          <p className="flex items-baseline justify-between gap-3">
            <span className="text-sm text-muted-foreground">Together</span>
            <span className="font-mono text-2xl figures">
              <ProductHeroRollingText
                value={formatPrice(machine.amount + addon.amount)}
              />
            </span>
          </p>
          {isInFullSetup([machine.id, addon.id]) ? (
            <p className="text-sm text-muted-foreground">{FULL_SETUP.note}.</p>
          ) : null}
        </div>
      )}
      <Link
        href={machine.href}
        className={pillButton({ variant: "outline", className: "self-start" })}
      >
        See the {machine.name}
      </Link>
    </div>
  )
}
