export interface CartItem {
  slug: string
  name: string
  price: number
  qty: number
  image: string
  subscription?: boolean
}

export interface CartState {
  items: CartItem[]
  total: number
  count: number
}

export interface CartContextValue extends CartState {
  addItem: (item: Omit<CartItem, "qty">) => void
  removeItem: (slug: string) => void
  updateQty: (slug: string, qty: number) => void
  clearCart: () => void
}
