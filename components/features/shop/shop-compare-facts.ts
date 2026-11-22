import { IN_THE_BOX, type CatalogProduct } from "@/lib/data/catalog"

export interface CompareFact {
  label: string
  value: string
  /** Set in mono with tabular figures. */
  figure?: boolean
}

const MACHINE_SPECS: Record<string, [CompareFact, CompareFact]> = {
  one: [
    { label: "Warm-up", value: "40 s", figure: true },
    { label: "Milk", value: "No steam wand" },
  ],
  duo: [
    { label: "Warm-up", value: "45 s", figure: true },
    { label: "Milk", value: "Steam wand" },
  ],
  pro: [
    { label: "Warm-up", value: "90 s", figure: true },
    { label: "Milk", value: "Two boilers, steams while it brews" },
  ],
}

/** "For lattes and flat whites" reads as "Lattes and flat whites". */
function bestFor(kicker: string) {
  return kicker.replace(/^For /, "").replace(/^./, (c) => c.toUpperCase())
}

/** The rows of the compare table for one machine, in display order. */
export function machineFacts(machine: CatalogProduct): CompareFact[] {
  return [
    { label: "Best for", value: bestFor(machine.kicker) },
    ...(MACHINE_SPECS[machine.id] ?? []),
    { label: "Brewing pressure", value: "9 bar", figure: true },
    { label: "Basket width", value: "58 mm", figure: true },
    { label: "In the box", value: IN_THE_BOX[machine.id] },
  ]
}
