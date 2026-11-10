"use client"

import { createContext, use, useCallback, useMemo, useReducer } from "react"

import type { CartContextValue, CartItem } from "@/types/cart"

// ─── State & Reducer ─────────────────────────────────────────────────────────

type CartAction =
  | { type: "ADD_ITEM"; payload: Omit<CartItem, "qty"> }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QTY"; payload: { slug: string; qty: number } }
  | { type: "CLEAR_CART" }

function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.find((i) => i.slug === action.payload.slug)
      if (existing) {
        return state.map((i) =>
          i.slug === action.payload.slug ? { ...i, qty: i.qty + 1 } : i
        )
      }
      return [...state, { ...action.payload, qty: 1 }]
    }
    case "REMOVE_ITEM":
      return state.filter((i) => i.slug !== action.payload)
    case "UPDATE_QTY":
      return state
        .map((i) =>
          i.slug === action.payload.slug ? { ...i, qty: action.payload.qty } : i
        )
        .filter((i) => i.qty > 0)
    case "CLEAR_CART":
      return []
    default:
      return state
  }
}

// ─── Context ─────────────────────────────────────────────────────────────────

const CartContext = createContext<CartContextValue | null>(null)

// ─── Provider ────────────────────────────────────────────────────────────────

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, dispatch] = useReducer(cartReducer, [])

  const addItem = useCallback(
    (item: Omit<CartItem, "qty">) =>
      dispatch({ type: "ADD_ITEM", payload: item }),
    []
  )

  const removeItem = useCallback(
    (slug: string) => dispatch({ type: "REMOVE_ITEM", payload: slug }),
    []
  )

  const updateQty = useCallback(
    (slug: string, qty: number) =>
      dispatch({ type: "UPDATE_QTY", payload: { slug, qty } }),
    []
  )

  const clearCart = useCallback(() => dispatch({ type: "CLEAR_CART" }), [])

  const total = useMemo(
    () => items.reduce((sum, i) => sum + i.price * i.qty, 0),
    [items]
  )

  const count = useMemo(() => items.reduce((sum, i) => sum + i.qty, 0), [items])

  const value = useMemo<CartContextValue>(
    () => ({ items, total, count, addItem, removeItem, updateQty, clearCart }),
    [items, total, count, addItem, removeItem, updateQty, clearCart]
  )

  return <CartContext value={value}>{children}</CartContext>
}

// ─── Hook ────────────────────────────────────────────────────────────────────

export function useCart(): CartContextValue {
  const ctx = use(CartContext)
  if (!ctx) {
    throw new Error("useCart must be used inside <CartProvider>")
  }
  return ctx
}
