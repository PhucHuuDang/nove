"use client"

import { useEffect, useRef, useState } from "react"
import { Check } from "lucide-react"

import { useCart } from "@/lib/cart-context"
import { FULL_SETUP, toCartItem } from "@/lib/data/catalog"
import { pillButton } from "@/lib/pill-variants"

const ADDED_MS = 1600

/** Adds whichever bundle items are not in the bag yet. */
export function ShopBundleAddButton() {
  const { addMissing } = useCart()
  const [added, setAdded] = useState(false)
  const timer = useRef(0)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  return (
    <button
      type="button"
      aria-label={`Add to bag: ${FULL_SETUP.name}, ${FULL_SETUP.price}`}
      onClick={() => {
        addMissing(FULL_SETUP.items.map(toCartItem))
        setAdded(true)
        window.clearTimeout(timer.current)
        timer.current = window.setTimeout(() => setAdded(false), ADDED_MS)
      }}
      className={pillButton()}
    >
      {added ? (
        <>
          <Check data-icon="inline-start" aria-hidden="true" />
          Added
        </>
      ) : (
        "Add to bag"
      )}
    </button>
  )
}
