"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type AccordionSingleProps = Omit<
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>,
  "type" | "value" | "defaultValue" | "onValueChange"
> & {
  type?: "single"
  collapsible?: boolean
  value?: string
  defaultValue?: string
  onValueChange?(value: string): void
}

type AccordionMultipleProps = Omit<
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>,
  "type" | "value" | "defaultValue" | "onValueChange"
> & {
  type: "multiple"
  value?: string[]
  defaultValue?: string[]
  onValueChange?(value: string[]): void
}

type AccordionProps = AccordionSingleProps | AccordionMultipleProps

function Accordion({ className, ...props }: AccordionProps) {
  if (props.type === "multiple") {
    return (
      <AccordionPrimitive.Root
        data-slot="accordion"
        className={cn("flex w-full flex-col", className)}
        {...props}
      />
    )
  }

  const { collapsible = true, ...singleProps } = props
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      type="single"
      collapsible={collapsible}
      className={cn("flex w-full flex-col", className)}
      {...singleProps}
    />
  )
}

function AccordionItem({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("not-last:border-b", className)}
      {...props}
    />
  )
}

interface AccordionTriggerProps extends React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Trigger
> {
  showChevron?: boolean
}

function AccordionTrigger({
  className,
  children,
  showChevron = true,
  ...props
}: AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Header className="font-text flex tracking-normal">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/accordion-trigger relative flex flex-1 items-center justify-between gap-6 rounded-md py-5 text-start text-base font-medium transition-colors outline-none hover:text-foreground/70 focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ms-auto **:data-[slot=accordion-trigger-icon]:size-4",
          className
        )}
        {...props}
      >
        {children}
        {showChevron ? (
          <>
            <ChevronDownIcon
              data-slot="accordion-trigger-icon"
              className="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden"
            />
            <ChevronUpIcon
              data-slot="accordion-trigger-icon"
              className="pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline"
            />
          </>
        ) : null}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="overflow-hidden text-sm text-muted-foreground data-open:animate-accordion-down data-closed:animate-accordion-up"
      {...props}
    >
      <div
        className={cn(
          "h-(--radix-accordion-content-height) pt-0 pb-5 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
          className
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
