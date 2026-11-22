import { cn } from "@/lib/utils"

interface CheckoutSectionProps {
  title: string
  id?: string
  description?: React.ReactNode
  className?: string
  children: React.ReactNode
}

/** One titled step of the checkout form. */
export function CheckoutSection({
  title,
  id,
  description,
  className,
  children,
}: CheckoutSectionProps) {
  return (
    <section className={cn("py-10 first:pt-0", className)}>
      <h2 id={id} className="text-2xl md:text-3xl">
        {title}
      </h2>
      {description ? (
        <div className="mt-2 text-sm text-muted-foreground">{description}</div>
      ) : null}
      <div className="mt-6">{children}</div>
    </section>
  )
}
