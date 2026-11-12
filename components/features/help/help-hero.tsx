import Link from "next/link"
import Image from "next/image"
import { Mail } from "lucide-react"

export function HelpHero() {
  return (
    <section
      className="px-3 section-padding pt-0! pb-0! md:px-5"
      aria-labelledby="help-heading"
    >
      <div className="grid gap-8 gutter-0 pt-12 md:pt-16 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-16">
        <h1
          className="text-5xl leading-none sm:text-6xl xl:text-7xl"
          id="help-heading"
        >
          <span className="block overflow-hidden pb-1">
            <span
              className="animate-line-rise block motion-reduce:animate-none"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="mr-[0.2em] inline-block h-[0.78em] w-[1.25em] overflow-hidden rounded-[0.18em] bg-card align-[-0.06em]">
                <Image
                  alt=""
                  width={1200}
                  height={900}
                  className="size-full object-cover mix-blend-multiply"
                  src="/images/home/faq-shipping.jpg"
                  priority
                />
              </span>
              Shipping, swaps,{" "}
            </span>
          </span>
          <span className="block overflow-hidden pb-1">
            <span
              className="animate-line-rise block text-muted-foreground motion-reduce:animate-none"
              style={{ animationDelay: "0.18s" }}
            >
              warranty and{" "}
              <span className="mr-[0.2em] inline-block h-[0.78em] w-[1.25em] overflow-hidden rounded-[0.18em] bg-card align-[-0.06em]">
                <Image
                  alt=""
                  width={1200}
                  height={900}
                  className="size-full object-cover mix-blend-multiply"
                  src="/images/home/faq-loud.jpg"
                  priority
                />
              </span>
              care
            </span>
          </span>
        </h1>

        <div className="lg:max-w-md lg:justify-self-end lg:pb-2">
          <p className="max-w-md text-base text-muted-foreground md:text-lg">
            Free shipping, a 30-day swap and a 3-year warranty on every machine.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="group/button inline-flex h-9 shrink-0 items-center justify-center gap-2 rounded-full border border-transparent bg-secondary px-4 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out outline-none select-none hover:bg-secondary/80 focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <Mail className="size-4" />
              Write to us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
