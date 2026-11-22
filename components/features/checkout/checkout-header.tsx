import Link from "next/link"
import { ArrowLeft } from "lucide-react"

/** Pared-back header for checkout: the wordmark and a way back to the shop. */
export function CheckoutHeader() {
  return (
    <header className="border-b px-3 md:px-5">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 md:h-20">
        <Link
          href="/"
          aria-label="Nove, home"
          className="rounded-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <span className="me-[-0.24em] inline-block font-display text-xl leading-none weight-display tracking-[0.24em]">
            NOVE
          </span>
        </Link>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 rounded-sm text-sm font-medium underline decoration-foreground/30 underline-offset-4 transition-[text-decoration-color] duration-200 ease-soft outline-none hover:decoration-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Back to shop
        </Link>
      </div>
    </header>
  )
}
