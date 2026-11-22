"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { fieldAria } from "./checkout-field"

interface Option {
  value: string
  label: string
}

interface CheckoutSelectProps {
  id: string
  name: string
  items: Option[]
  value: string
  placeholder?: string
  autoComplete?: string
  error?: string
  onChange: (value: string) => void
}

export function CheckoutSelect({
  id,
  name,
  items,
  value,
  placeholder,
  autoComplete,
  error,
  onChange,
}: CheckoutSelectProps) {
  return (
    <Select
      name={name}
      items={items}
      value={value || null}
      autoComplete={autoComplete}
      onValueChange={(next) => onChange((next as string | null) ?? "")}
    >
      <SelectTrigger
        id={id}
        {...fieldAria(id, error)}
        className="w-full gap-1.5 rounded-full bg-popover px-4 py-2 transition-[color,box-shadow,background-color] data-[size=default]:h-11"
      >
        <SelectValue placeholder={placeholder} className="flex-none" />
      </SelectTrigger>
      <SelectContent className="max-h-80 rounded-2xl p-1 shadow-lg ring-foreground/5 dark:ring-foreground/10">
        {items.map((item) => (
          <SelectItem
            key={item.value}
            value={item.value}
            className="gap-2.5 rounded-xl py-2 ps-3 pe-8 focus:bg-muted focus:text-foreground data-selected:font-medium"
          >
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
