import Link from "next/link"
import { Lock, RefreshCw, ShieldCheck, Truck } from "lucide-react"

import { Spinner } from "@/components/ui/spinner"
import { pillButton } from "@/lib/pill-variants"

const LEGAL_LINK =
  "rounded-sm underline decoration-foreground/30 underline-offset-4 transition-[text-decoration-color] duration-200 ease-soft outline-none hover:decoration-foreground focus-visible:ring-3 focus-visible:ring-ring/50"

interface CheckoutPayAreaProps {
  total: string
  paying: boolean
  hasMachine: boolean
}

/** The pay button, the promises under it and the terms line. */
export function CheckoutPayArea({
  total,
  paying,
  hasMachine,
}: CheckoutPayAreaProps) {
  const perks = [
    { icon: Truck, label: "Free shipping" },
    ...(hasMachine
      ? [
          { icon: RefreshCw, label: "30-day swap" },
          { icon: ShieldCheck, label: "3-year warranty" },
        ]
      : []),
  ]

  return (
    <div className="pt-10">
      <button
        type="submit"
        disabled={paying}
        data-pay="true"
        className={pillButton({
          variant: "accent",
          size: "lg",
          className: "h-13 w-full rounded-full",
        })}
      >
        {paying ? (
          <>
            <Spinner aria-hidden="true" />
            Paying
          </>
        ) : (
          <>
            <Lock aria-hidden="true" />
            Pay
            <span aria-hidden="true" className="opacity-50">
              ·
            </span>
            <span className="font-mono figures">{total}</span>
          </>
        )}
      </button>
      <ul className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
        {perks.map((perk) => (
          <li key={perk.label} className="flex items-center gap-1.5">
            <perk.icon aria-hidden="true" className="size-3.5" />
            {perk.label}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-center text-xs text-muted-foreground">
        By paying you agree to our{" "}
        <Link href="/legal/terms" className={LEGAL_LINK}>
          terms of sale
        </Link>{" "}
        and{" "}
        <Link href="/legal/privacy" className={LEGAL_LINK}>
          privacy policy
        </Link>
        .
      </p>
    </div>
  )
}
