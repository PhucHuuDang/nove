"use client"

import {
  createContext,
  use,
  useCallback,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react"
import { CATALOG, catalogProduct, toCartItem } from "@/lib/data/catalog"
import type { CartContextValue, CartItem } from "@/types/cart"

const STORAGE_KEY = "nove:bag"
const CHANGE_EVENT = "nove:bag:change"

/** A first visit opens with the Duo and the grinder in the bag. */
const DEFAULT_ITEMS: CartItem[] = (["duo", "grinder"] as const).map((id) => ({
  ...toCartItem(catalogProduct(id)),
  qty: 1,
}))

/**
 * Rebuilds stored lines from the catalog, so a bag saved by an older build
 * (or edited by hand) can never carry a stale price or an off-site image.
 */
function normalizeItems(stored: unknown[]): CartItem[] {
  return stored.flatMap((entry) => {
    if (!entry || typeof entry !== "object") return []
    const { slug, qty, note } = entry as Partial<CartItem>
    const product = CATALOG.find((p) => p.id === slug)
    const count = Math.min(Math.max(Math.floor(Number(qty)) || 0, 0), 9)
    if (!product || count < 1) return []
    const item: CartItem = { ...toCartItem(product), qty: count }
    return typeof note === "string" && note ? [{ ...item, note }] : [item]
  })
}

let cachedRaw: string | null = null
let cachedItems: CartItem[] = DEFAULT_ITEMS

function getSnapshot(): CartItem[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (raw === cachedRaw) return cachedItems
    cachedRaw = raw
    if (raw) {
      const parsed = JSON.parse(raw)
      if (Array.isArray(parsed)) {
        cachedItems = normalizeItems(parsed)
        return cachedItems
      }
    }
    cachedItems = DEFAULT_ITEMS
    return cachedItems
  } catch {
    return cachedItems
  }
}

function getServerSnapshot(): CartItem[] {
  return DEFAULT_ITEMS
}

function subscribe(callback: () => void): () => void {
  window.addEventListener(CHANGE_EVENT, callback)
  window.addEventListener("storage", callback)
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback)
    window.removeEventListener("storage", callback)
  }
}

function setStoredItems(nextItems: CartItem[]): void {
  try {
    cachedItems = nextItems
    cachedRaw = JSON.stringify(nextItems)
    window.localStorage.setItem(STORAGE_KEY, cachedRaw)
  } catch {
    cachedItems = nextItems
  }
  window.dispatchEvent(new Event(CHANGE_EVENT))
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const items = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const [isOpen, setIsOpen] = useState(false)

  const openBag = useCallback(() => setIsOpen(true), [])
  const closeBag = useCallback(() => setIsOpen(false), [])

  const addItem = useCallback(
    (item: Omit<CartItem, "qty">) => {
      const existing = items.find((i) => i.slug === item.slug)
      let next: CartItem[]
      if (existing) {
        next = items.map((i) =>
          i.slug === item.slug ? { ...i, qty: Math.min(i.qty + 1, 9) } : i
        )
      } else {
        next = [...items, { ...item, qty: 1 }]
      }
      setStoredItems(next)
    },
    [items]
  )

  const addMissing = useCallback(
    (additions: Omit<CartItem, "qty">[]) => {
      const missing = additions.filter(
        (addition) => !items.some((i) => i.slug === addition.slug)
      )
      setStoredItems([
        ...items,
        ...missing.map((addition) => ({ ...addition, qty: 1 })),
      ])
    },
    [items]
  )

  const removeItem = useCallback(
    (slug: string) => {
      setStoredItems(items.filter((i) => i.slug !== slug))
    },
    [items]
  )

  const updateQty = useCallback(
    (slug: string, qty: number) => {
      if (qty <= 0) {
        setStoredItems(items.filter((i) => i.slug !== slug))
      } else {
        setStoredItems(
          items.map((i) =>
            i.slug === slug ? { ...i, qty: Math.min(qty, 9) } : i
          )
        )
      }
    },
    [items]
  )

  const clearCart = useCallback(() => {
    setStoredItems([])
  }, [])

  const total = useMemo(
    () => items.reduce((sum, i) => sum + i.price * i.qty, 0),
    [items]
  )

  const count = useMemo(() => items.reduce((sum, i) => sum + i.qty, 0), [items])

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      total,
      count,
      isOpen,
      setIsOpen,
      openBag,
      closeBag,
      addItem,
      addMissing,
      removeItem,
      updateQty,
      clearCart,
    }),
    [
      items,
      total,
      count,
      isOpen,
      openBag,
      closeBag,
      addItem,
      addMissing,
      removeItem,
      updateQty,
      clearCart,
    ]
  )

  return <CartContext value={value}>{children}</CartContext>
}

export function useCart(): CartContextValue {
  const ctx = use(CartContext)
  if (!ctx) {
    throw new Error("useCart must be used inside <CartProvider>")
  }
  return ctx
}
