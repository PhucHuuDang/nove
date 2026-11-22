"use client"

import { useEffect, useRef, useState } from "react"
import { Check } from "lucide-react"

import { useCart } from "@/lib/cart-context"
import { toCartItem, type CatalogProduct } from "@/lib/data/catalog"
import { pillButton, type PillButtonProps } from "@/lib/pill-variants"

const ADD_LABEL = "Add to bag"
const ADDED_MS = 1600

type ShopAddButtonProps = PillButtonProps & { product: CatalogProduct }

/** Adds one product to the bag and confirms with a short "Added" state. */
export function ShopAddButton({ product, ...variants }: ShopAddButtonProps) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)
  const timer = useRef(0)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  return (
    <button
      type="button"
      aria-label={`${ADD_LABEL}: ${product.name}, ${product.price}`}
      onClick={() => {
        addItem(toCartItem(product))
        setAdded(true)
        window.clearTimeout(timer.current)
        timer.current = window.setTimeout(() => setAdded(false), ADDED_MS)
      }}
      className={pillButton(variants)}
    >
      {added ? (
        <>
          <Check data-icon="inline-start" aria-hidden="true" />
          Added
        </>
      ) : (
        ADD_LABEL
      )}
    </button>
  )
}
