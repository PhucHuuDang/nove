import Link from "next/link"

import { SectionLabel } from "@/components/shared/section-label"
import { buttonVariants } from "@/components/ui/button"

const SPECS = [
  {
    feature: "Best for",
    one: "Espresso & americano",
    duo: "Lattes & flat whites",
    pro: "Multiple coffee drinkers",
  },
  {
    feature: "Price",
    one: "$650",
    duo: "$950",
    pro: "$1,450",
  },
  {
    feature: "Pressure",
    one: "9 bar",
    duo: "9 bar",
    pro: "9 bar",
  },
  {
    feature: "Basket diameter",
    one: "58 mm commercial",
    duo: "58 mm commercial",
    pro: "58 mm commercial",
  },
  {
    feature: "Warmup time",
    one: "40 seconds",
    duo: "45 seconds",
    pro: "90 seconds",
  },
  {
    feature: "Steam wand",
    one: "No wand",
    duo: "Yes, microfoam wand",
    pro: "Yes, commercial power",
  },
  {
    feature: "Boiler system",
    one: "Precision thermoblock",
    duo: "Precision thermoblock",
    pro: "Dual independent boilers",
  },
  {
    feature: "Simultaneous brew & steam",
    one: "No",
    duo: "Sequential",
    pro: "Simultaneous",
  },
  {
    feature: "Width",
    one: "20 cm (7.9 in)",
    duo: "27 cm (10.6 in)",
    pro: "35 cm (13.8 in)",
  },
  {
    feature: "Weight",
    one: "7 kg (15.4 lbs)",
    duo: "9 kg (19.8 lbs)",
    pro: "12 kg (26.5 lbs)",
  },
  {
    feature: "Milk jug in box",
    one: "Optional add-on",
    duo: "Included (350 ml)",
    pro: "Included (350 ml)",
  },
]

export function ShopCompareTable() {
  return (
    <section
      id="compare"
      className="scroll-mt-24 border-b border-border bg-background py-16 md:py-24"
    >
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <SectionLabel>Compare</SectionLabel>
        <h2 className="mt-2 text-2xl font-light tracking-tight text-foreground md:text-4xl">
          Side-by-side specifications
        </h2>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="py-4 pr-6 font-mono text-xs font-semibold text-muted-foreground uppercase">
                  Model
                </th>
                <th className="px-6 py-4 font-medium">Nove One</th>
                <th className="px-6 py-4 font-medium">
                  Nove Duo{" "}
                  <span className="ml-1 font-mono text-xs text-muted-foreground">
                    (Bestseller)
                  </span>
                </th>
                <th className="py-4 pl-6 font-medium">Nove Pro</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {SPECS.map((row) => (
                <tr key={row.feature} className="hover:bg-muted/30">
                  <td className="py-3.5 pr-6 font-mono text-xs text-muted-foreground">
                    {row.feature}
                  </td>
                  <td className="px-6 py-3.5 font-light">{row.one}</td>
                  <td className="px-6 py-3.5 font-medium">{row.duo}</td>
                  <td className="py-3.5 pl-6 font-light">{row.pro}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="py-6 pr-6"></td>
                <td className="px-6 py-6">
                  <Link
                    href="/shop/one"
                    className={buttonVariants({
                      variant: "outline",
                      size: "sm",
                    })}
                  >
                    Nove One $650
                  </Link>
                </td>
                <td className="px-6 py-6">
                  <Link
                    href="/shop/duo"
                    className={buttonVariants({
                      variant: "default",
                      size: "sm",
                    })}
                  >
                    Nove Duo $950
                  </Link>
                </td>
                <td className="py-6 pl-6">
                  <Link
                    href="/shop/pro"
                    className={buttonVariants({
                      variant: "outline",
                      size: "sm",
                    })}
                  >
                    Nove Pro $1,450
                  </Link>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  )
}
