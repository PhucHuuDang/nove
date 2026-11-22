"use client"

import { Checkbox } from "@/components/ui/checkbox"

interface CheckoutCheckboxProps {
  id: string
  name: string
  label: string
  checked: boolean
  onCheckedChange: (checked: boolean) => void
}

/** A checkbox with its label beside it, styled like the original checkout. */
export function CheckoutCheckbox({
  id,
  name,
  label,
  checked,
  onCheckedChange,
}: CheckoutCheckboxProps) {
  return (
    <div
      role="group"
      data-slot="field"
      className="flex w-full flex-row items-center gap-3"
    >
      <Checkbox
        id={id}
        name={name}
        checked={checked}
        onCheckedChange={(value) => onCheckedChange(value === true)}
        className="rounded-[5px] border-foreground/50 bg-transparent dark:bg-transparent"
      />
      <label
        htmlFor={id}
        className="flex-auto text-sm leading-snug select-none"
      >
        {label}
      </label>
    </div>
  )
}
