import { cn } from "@/lib/utils"

export function SectionEyebrow({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      className={cn("text-sm font-medium text-muted-foreground", className)}
      {...props}
    />
  )
}

export function SectionTitle({
  as: Component = "h2",
  className,
  ...props
}: React.ComponentProps<"h2"> & { as?: "h1" | "h2" }) {
  return (
    <Component
      className={cn(
        "text-4xl leading-[1.05] md:text-5xl lg:text-6xl",
        className
      )}
      {...props}
    />
  )
}

export function SectionLede({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "max-w-xl text-base text-muted-foreground md:text-lg",
        className
      )}
      {...props}
    />
  )
}
