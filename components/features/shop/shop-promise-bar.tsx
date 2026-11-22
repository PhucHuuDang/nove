import { ArrowLeftRight, ShieldCheck, Star, Truck } from "lucide-react"

const PROMISES = [
  { Icon: Truck, text: "Free shipping, 3 to 5 days" },
  { Icon: ArrowLeftRight, text: "Swap the model within 30 days" },
  { Icon: ShieldCheck, text: "3-year warranty" },
  { Icon: Star, text: "4.9 from 1,284 reviews" },
]

const RULE_CLASS = "h-px w-full shrink-0 bg-border"

export function ShopPromiseBar() {
  return (
    <div className="mt-8 md:mt-10">
      <div role="none" className={RULE_CLASS} />
      <ul
        aria-label="What comes with every machine"
        className="grid grid-cols-1 gap-x-10 gap-y-3 py-5 text-sm figures sm:grid-cols-2 md:flex md:flex-wrap md:justify-center md:py-6"
      >
        {PROMISES.map(({ Icon, text }) => (
          <li key={text} className="flex items-center gap-2.5">
            <Icon
              aria-hidden="true"
              className="size-4 shrink-0 text-muted-foreground"
            />
            {text}
          </li>
        ))}
      </ul>
      <div role="none" className={RULE_CLASS} />
    </div>
  )
}
