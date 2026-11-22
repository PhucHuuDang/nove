import type { CartItem } from "@/types/cart"

const MACHINE_SLUGS = ["one", "duo", "pro"]

/** The saving row label shared by the bag and the checkout summary. */
export const SETUP_SAVING_LABEL = "Beans, free for three months"

/** The short line under a product name in the bag and order summaries. */
export function lineNote(item: CartItem): string {
  if (item.note) return item.note
  if (item.slug === "one") return "With portafilter and tamper"
  if (item.slug === "duo" || item.slug === "pro")
    return "With portafilter, tamper and milk jug"
  if (item.slug === "grinder") return "Grinds fresh for every coffee"
  if (item.slug === "origin") return "Light roast, fruity, best black"
  if (item.slug === "beans") return "House roast, smooth and chocolatey"
  if (item.slug === "decaf") return "Swiss water decaf, tastes like real coffee"
  if (item.slug === "jug") return "350 ml, pours fine latte art"
  return ""
}

export function bagHasMachine(items: CartItem[]): boolean {
  return items.some((item) => MACHINE_SLUGS.includes(item.slug))
}

/** A machine, the grinder and beans together get three bags free ($54). */
export function bagSaving(items: CartItem[]): number {
  const hasGrinder = items.some((item) => item.slug === "grinder")
  const hasBeans = items.some(
    (item) => item.slug === "beans" || item.slug === "origin"
  )
  return bagHasMachine(items) && hasGrinder && hasBeans ? 54 : 0
}
