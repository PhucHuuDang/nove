"use client"

import * as React from "react"
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

interface SheetTriggerProps extends React.ComponentProps<
  typeof SheetPrimitive.Trigger
> {
  render?: React.ReactNode
}

function SheetTrigger({
  render,
  asChild,
  children,
  ...props
}: SheetTriggerProps) {
  return (
    <SheetPrimitive.Trigger
      data-slot="sheet-trigger"
      asChild={asChild || Boolean(render)}
      {...props}
    >
      {render || children}
    </SheetPrimitive.Trigger>
  )
}

interface SheetCloseProps extends React.ComponentProps<
  typeof SheetPrimitive.Close
> {
  render?: React.ReactNode
}

function SheetClose({ render, asChild, children, ...props }: SheetCloseProps) {
  return (
    <SheetPrimitive.Close
      data-slot="sheet-close"
      asChild={asChild || Boolean(render)}
      {...props}
    >
      {render || children}
    </SheetPrimitive.Close>
  )
}

function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/30 duration-300 supports-backdrop-filter:backdrop-blur-sm data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        className
      )}
      {...props}
    />
  )
}

const sheetVariants = cva(
  "fixed z-50 flex flex-col bg-clip-padding text-sm shadow-xl transition ease-drawer data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:border-e data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:border-s data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-open:animate-in data-open:duration-500 data-[side=bottom]:data-open:fade-in-0 data-[side=bottom]:data-open:slide-in-from-bottom-10 data-[side=left]:data-open:slide-in-from-left data-[side=right]:data-open:slide-in-from-right data-[side=top]:data-open:fade-in-0 data-[side=top]:data-open:slide-in-from-top-10 data-closed:animate-out data-closed:duration-300 data-[side=bottom]:data-closed:fade-out-0 data-[side=bottom]:data-closed:slide-out-to-bottom-10 data-[side=left]:data-closed:slide-out-to-left data-[side=right]:data-closed:slide-out-to-right data-[side=top]:data-closed:fade-out-0 data-[side=top]:data-closed:slide-out-to-top-10",
  {
    variants: {
      size: {
        default:
          "data-[side=left]:w-3/4 data-[side=right]:w-3/4 data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm",
        lg: "data-[side=left]:w-full data-[side=right]:w-full data-[side=left]:sm:max-w-lg data-[side=right]:sm:max-w-lg",
        xl: "data-[side=left]:w-full data-[side=right]:w-full data-[side=left]:sm:max-w-2xl data-[side=right]:sm:max-w-2xl data-[side=left]:lg:max-w-5xl data-[side=right]:lg:max-w-5xl",
      },
      inset: {
        true: "overflow-hidden rounded-3xl border data-[side=left]:inset-y-3 data-[side=left]:left-3 data-[side=left]:h-auto data-[side=right]:inset-y-3 data-[side=right]:right-3 data-[side=right]:h-auto data-[side=left]:max-sm:w-[calc(100%-1.5rem)] data-[side=right]:max-sm:w-[calc(100%-1.5rem)]",
        false: "",
      },
      tone: {
        default: "bg-background text-foreground",
        ink: "dark bg-background text-foreground",
      },
    },
    defaultVariants: {
      size: "default",
      inset: false,
      tone: "default",
    },
  }
)

interface SheetContentProps
  extends
    React.ComponentProps<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {
  side?: "top" | "right" | "bottom" | "left"
  showCloseButton?: boolean
  closeButtonLabel?: string
}

function SheetContent({
  className,
  children,
  side = "right",
  size,
  inset,
  tone,
  showCloseButton = true,
  closeButtonLabel = "Close",
  ...props
}: SheetContentProps) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        data-side={side}
        className={cn(sheetVariants({ size, inset, tone }), className)}
        {...props}
      >
        {children}
        {showCloseButton ? (
          <SheetPrimitive.Close
            data-slot="sheet-close"
            className="group/button absolute end-6 top-5.5 inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-transparent bg-secondary text-secondary-foreground transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.97]"
            aria-label={closeButtonLabel}
          >
            <X className="size-4" />
            <span className="sr-only">{closeButtonLabel}</span>
          </SheetPrimitive.Close>
        ) : null}
      </SheetPrimitive.Content>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1.5 p-6", className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-6", className)}
      {...props}
    />
  )
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("font-display text-2xl text-foreground", className)}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  sheetVariants,
}
