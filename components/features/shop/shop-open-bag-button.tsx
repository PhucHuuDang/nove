"use client"

import { useCart } from "@/lib/cart-context"
import { pillButton } from "@/lib/pill-variants"

export function ShopOpenBagButton() {
  const { openBag } = useCart()

  return (
    <button
      type="button"
      onClick={openBag}
      className={pillButton({
        variant: "outline",
        size: "sm",
        className: "mt-6",
      })}
    >
      Open your bag
    </button>
  )
}
