"use client"

import { Store, Truck } from "lucide-react"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { DELIVERY_OPTIONS, type DeliveryMethod } from "./checkout-data"

const ICONS = { ship: Truck, pickup: Store }

interface CheckoutDeliveryOptionsProps {
  value: DeliveryMethod
  onChange: (value: DeliveryMethod) => void
}

/** The two delivery cards: free shipping or pick up at the showroom. */
export function CheckoutDeliveryOptions({
  value,
  onChange,
}: CheckoutDeliveryOptionsProps) {
  return (
    <RadioGroup
      name="method"
      value={value}
      onValueChange={(next) => onChange(next as DeliveryMethod)}
      aria-labelledby="checkout-delivery"
      className="grid w-full gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
    >
      {DELIVERY_OPTIONS.map((option) => {
        const Icon = ICONS[option.value]
        return (
          <label
            key={option.value}
            htmlFor={`method-${option.value}`}
            className="flex w-full cursor-pointer flex-col rounded-2xl border transition-colors outline-none not-has-data-checked:hover:bg-input/40 has-data-checked:bg-input/30 has-[:focus-visible]:border-ring has-[:focus-visible]:ring-3 has-[:focus-visible]:ring-ring/50"
          >
            <div className="flex w-full flex-row items-start gap-3 p-4">
              <RadioGroupItem
                id={`method-${option.value}`}
                value={option.value}
                className="mt-px border-foreground/50 bg-transparent dark:bg-transparent"
              />
              <div className="flex flex-1 flex-col gap-1 leading-snug">
                <div className="flex w-fit items-center gap-2 text-sm font-medium">
                  <Icon aria-hidden="true" className="size-4" />
                  {option.title}
                </div>
                <p className="text-sm leading-normal text-muted-foreground">
                  {option.note}
                </p>
              </div>
              <span className="font-mono text-sm figures">Free</span>
            </div>
          </label>
        )
      })}
    </RadioGroup>
  )
}
