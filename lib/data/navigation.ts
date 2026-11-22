export interface NavLink {
  href: string
  label: string
}

/** The shop's sections, listed under "Shop" in every menu. */
export const SHOP_SECTIONS: NavLink[] = [
  { href: "/shop#machines", label: "Models" },
  { href: "/shop#add-ons", label: "Add-ons" },
  { href: "/shop#beans", label: "Beans" },
]

/** The pages after "Shop" in the main navigation. */
export const PAGE_LINKS: NavLink[] = [
  { href: "/about", label: "Our story" },
  { href: "/showroom", label: "Showroom" },
  { href: "/help", label: "Help" },
  { href: "/contact", label: "Contact" },
]

export const MAIN_NAV = [
  { href: "/shop", label: "Shop", children: SHOP_SECTIONS },
  ...PAGE_LINKS,
]
