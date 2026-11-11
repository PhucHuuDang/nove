import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function FooterCallout() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
        Café espresso at home
      </h2>
      <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground figures md:text-lg">
        From $650. Three models, and you can swap within 30 days.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
        <Link
          href="/shop#compare"
          className="group/button inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-transparent bg-accent bg-clip-padding px-6 text-sm font-medium whitespace-nowrap text-accent-foreground transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out outline-none select-none hover:bg-accent/85 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.97]"
        >
          Pick your model
        </Link>
        <Link
          href="/shop#add-ons"
          className="group inline-flex items-center gap-2 rounded-sm text-sm font-medium underline decoration-foreground/30 underline-offset-4 transition-[text-decoration-color] duration-200 ease-soft outline-none hover:decoration-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          See the add-ons
          <ArrowRight className="size-4 transition-transform duration-300 ease-soft motion-safe:group-hover:translate-x-1 motion-reduce:transition-none" />
        </Link>
      </div>
    </div>
  )
}
