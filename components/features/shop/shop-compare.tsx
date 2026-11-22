import { machineFacts } from "@/components/features/shop/shop-compare-facts"
import { ShopAddButton } from "@/components/features/shop/shop-add-button"
import { ShopCompareScroller } from "@/components/features/shop/shop-compare-scroller"
import { ProductImage } from "@/components/shared/product-image"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import {
  SectionEyebrow,
  SectionTitle,
} from "@/components/shared/section-heading"
import { MACHINES } from "@/lib/data/catalog"
import { cn } from "@/lib/utils"

const COLUMNS = MACHINES.map((machine) => ({
  machine,
  facts: machineFacts(machine),
}))
const ROW_LABELS = COLUMNS[0].facts.map((fact) => fact.label)

export function ShopCompare() {
  return (
    <section
      id="compare"
      aria-labelledby="compare-heading"
      className="mt-16 grid scroll-mt-24 gap-8 md:mt-24 xl:grid-cols-4 xl:gap-5"
    >
      <ScrollReveal as="header" className="flex flex-col items-start">
        <SectionEyebrow>Side by side</SectionEyebrow>
        <SectionTitle id="compare-heading" className="mt-3">
          Compare
        </SectionTitle>
      </ScrollReveal>
      <ScrollReveal className="min-w-0 xl:col-span-3">
        <ShopCompareScroller>
          <table className="w-full text-sm">
            <caption className="sr-only">The three models compared</caption>
            <thead>
              <tr>
                <td className="w-1/4 p-5 md:p-6" />
                {COLUMNS.map(({ machine }) => (
                  <th
                    key={machine.id}
                    scope="col"
                    className="w-1/4 p-5 text-left align-bottom font-normal md:p-6"
                  >
                    <span className="flex h-24 items-end">
                      <ProductImage
                        product={machine}
                        sizes="5rem"
                        className="h-full w-auto"
                      />
                    </span>
                    <span className="mt-4 block text-lg font-medium">
                      {machine.name}
                    </span>
                    <span className="mt-1 block font-mono figures">
                      {machine.price}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROW_LABELS.map((label, row) => (
                <tr key={label} className="border-t">
                  <th
                    scope="row"
                    className="px-5 py-4 text-left align-top font-normal text-muted-foreground md:px-6"
                  >
                    {label}
                  </th>
                  {COLUMNS.map(({ machine, facts }) => (
                    <td
                      key={machine.id}
                      className={cn(
                        "px-5 py-4 align-top md:px-6",
                        facts[row].figure && "font-mono figures"
                      )}
                    >
                      {facts[row].value}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="border-t">
                <td className="p-5 md:p-6" />
                {COLUMNS.map(({ machine }) => (
                  <td key={machine.id} className="p-5 md:p-6">
                    <ShopAddButton
                      product={machine}
                      variant="outline"
                      size="sm"
                    />
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </ShopCompareScroller>
      </ScrollReveal>
    </section>
  )
}
