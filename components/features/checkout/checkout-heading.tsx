import { cn } from "@/lib/utils"

interface CheckoutHeadingProps {
  children: React.ReactNode
  className?: string
}

/** The page title, rising into view line by line. */
export function CheckoutHeading({ children, className }: CheckoutHeadingProps) {
  return (
    <h1
      className={cn(
        "text-4xl leading-[1.05] md:text-5xl lg:text-6xl",
        className
      )}
    >
      <span className="block overflow-hidden pb-1">
        <span className="block animate-line-rise motion-reduce:animate-none">
          {children}
        </span>
      </span>
    </h1>
  )
}
