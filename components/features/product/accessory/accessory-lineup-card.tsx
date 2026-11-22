import Link from "next/link"

import { GroundedProductImage } from "@/components/shared/product-image"
import { MACHINES } from "@/lib/data/catalog"
import { pillButton } from "@/lib/pill-variants"

/** The three machines a roast works with, each linking to its page. */
export function AccessoryLineupCard() {
  return (
    <div className="flex flex-1 flex-col gap-5 rounded-3xl bg-popover p-6">
      <p className="font-medium">Works with all three machines</p>
      <ul className="flex items-end justify-between gap-3">
        {MACHINES.map((machine) => (
          <li
            key={machine.id}
            className="flex flex-col items-center gap-2"
            style={{ width: `${30 * machine.scale}%` }}
          >
            <Link
              href={machine.href}
              className="group/pick flex w-full flex-col items-center gap-2 rounded-xl transition-transform duration-150 ease-soft outline-none focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.97]"
            >
              <GroundedProductImage
                product={machine}
                sizes="8rem"
                className="transition-[translate] duration-300 ease-soft motion-safe:group-hover/pick:-translate-y-1"
              />
              <span className="relative text-center text-xs text-muted-foreground transition-colors duration-200 ease-soft group-hover/pick:text-foreground">
                <span className="block">
                  {machine.name.replace("Nove ", "")}
                </span>
                <span className="font-mono figures">{machine.price}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="/shop#machines"
        className={pillButton({
          variant: "outline",
          className: "mt-auto self-start",
        })}
      >
        See the machines
      </Link>
    </div>
  )
}
