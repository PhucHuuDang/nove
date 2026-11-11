"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"
import { FooterCallout } from "./footer/footer-callout"
import { FooterNav } from "./footer/footer-nav"
import { FooterBottom } from "./footer/footer-bottom"

export function Footer() {
  const pathname = usePathname()
  const hasMachine = pathname !== "/shop"

  return (
    <footer className="group/footer px-3 pt-12 pb-3 md:px-5 md:pt-16 md:pb-5 lg:pt-24">
      {hasMachine ? (
        <div data-machine="true" className="flex justify-center">
          <Image
            alt="Nove Duo, a steel espresso machine with a steam wand and a walnut portafilter handle"
            width={1116}
            height={1400}
            className="relative z-10 -mb-14 h-auto w-56 drop-shadow-2xl md:-mb-20 md:w-72 lg:-mb-28 lg:w-80 xl:w-96"
            sizes="(min-width: 80rem) 24rem, (min-width: 64rem) 20rem, (min-width: 48rem) 18rem, 14rem"
            src="/images/home/machine.png"
          />
        </div>
      ) : null}
      <div className="dark rounded-3xl bg-background gutter-5 pt-12 pb-6 text-foreground group-has-[[data-machine]]/footer:pt-20 md:gutter-8 md:pt-16 md:group-has-[[data-machine]]/footer:pt-28 lg:gutter-10 lg:pt-20 lg:pb-8 lg:group-has-[[data-machine]]/footer:pt-36">
        <FooterCallout />
        <FooterNav />
        <FooterBottom />
      </div>
    </footer>
  )
}
