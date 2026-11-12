"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { CONTACT_MACHINES } from "./contact-data"

interface ContactMachineSelectProps {
  id: string
  value: string
  onChange: (value: string) => void
}

export function ContactMachineSelect({
  id,
  value,
  onChange,
}: ContactMachineSelectProps) {
  return (
    <Select
      name="machine"
      items={CONTACT_MACHINES}
      value={value || null}
      onValueChange={(next) => onChange((next as string | null) ?? "")}
    >
      <SelectTrigger
        id={id}
        className="w-full gap-1.5 rounded-full bg-popover px-4 py-2 transition-[color,box-shadow,background-color] data-[size=default]:h-11"
      >
        <SelectValue placeholder="Pick one" className="flex-none" />
      </SelectTrigger>
      <SelectContent className="rounded-2xl p-1 shadow-lg ring-foreground/5 dark:ring-foreground/10">
        {CONTACT_MACHINES.map((machine) => (
          <SelectItem
            key={machine.value}
            value={machine.value}
            className="gap-2.5 rounded-xl py-2 ps-3 pe-8 focus:bg-muted focus:text-foreground data-selected:font-medium"
          >
            {machine.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
