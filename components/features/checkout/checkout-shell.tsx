import { CheckoutFooter } from "./checkout-footer"
import { CheckoutHeader } from "./checkout-header"

/**
 * Checkout stands apart from the marketing site: `data-page` hides the site
 * banner, navbar and footer (see globals.css) and this shell brings its own.
 */
export function CheckoutShell({ children }: { children: React.ReactNode }) {
  return (
    <div data-page="checkout" className="flex min-h-svh flex-col">
      <a
        href="#main-content"
        className="sr-only z-50 rounded-full bg-background px-4 py-2 text-sm font-medium focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <CheckoutHeader />
      <div id="main-content" className="relative flex-1">
        <section className="gutter-3 section-padding pt-8! md:gutter-5 md:pt-12! lg:pt-16!">
          <div className="mx-auto max-w-7xl">{children}</div>
        </section>
      </div>
      <CheckoutFooter />
    </div>
  )
}
