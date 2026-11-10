export interface BoxItem {
  qty: number
  name: string
  image: string
}

export interface ProductFeature {
  image: string
  stat?: string
  title: string
  description: string
}

export interface UseWith {
  image: string
  name: string
  href?: string
}

export interface Product {
  slug: string
  name: string
  tagline: string
  description: string
  price: number
  images: string[]
  inUseImage: string
  warmupSeconds?: number
  bar?: number
  basketMm?: number
  features: ProductFeature[]
  inBox: BoxItem[]
  useWith?: UseWith[]
  subscription?: boolean
  weight?: string
  subscriptionFrequency?: string
  roast?: string
}

export interface MachineProduct extends Product {
  bar: number
  basketMm: number
  warmupSeconds: number
  steamWand: boolean
  dualBoiler: boolean
  widthCm: number
  weightKg: number
  bestFor: string
}

export type ProductSlug =
  "one" | "duo" | "pro" | "grinder" | "jug" | "beans" | "origin" | "decaf"
