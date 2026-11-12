export interface CartItem {
  slug: string
  name: string
  price: number
  qty: number
  image: string
  note?: string
  subscription?: boolean
}

export interface CartState {
  items: CartItem[]
  total: number
  count: number
  isOpen: boolean
}

export interface CartContextValue extends CartState {
  setIsOpen: (open: boolean) => void
  openBag: () => void
  closeBag: () => void
  addItem: (item: Omit<CartItem, "qty">) => void
  removeItem: (slug: string) => void
  updateQty: (slug: string, qty: number) => void
  clearCart: () => void
}
