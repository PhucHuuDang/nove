import Image from "next/image"
import { ScrollReveal } from "@/components/shared/scroll-reveal"

export function FaqBoxCard() {
  return (
    <ScrollReveal
      as="li"
      delayMs={60}
      className="group raised-card row-span-3 grid grid-rows-subgrid gap-y-0 rounded-3xl p-1.5 lg:col-span-4"
    >
      <div
        aria-hidden="true"
        className="relative h-44 overflow-hidden rounded-2xl"
      >
        <div className="absolute inset-0 bg-linear-to-b from-card to-popover transition-transform duration-300 ease-soft motion-safe:group-hover:-translate-y-1 motion-reduce:transition-none">
          <Image
            alt=""
            width={1116}
            height={1400}
            className="absolute top-1/2 left-1/2 h-auto w-[150%] max-w-none -translate-x-[30%] -translate-y-[54%]"
            src="/images/home/machine.png"
          />
          <span className="absolute right-4 bottom-4 inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent bg-background px-2.5 py-0.5 font-mono text-xs font-medium whitespace-nowrap text-foreground shadow-sm">
            58 mm
          </span>
        </div>
      </div>
      <h3 className="px-5 pt-5 text-xl leading-snug text-pretty md:px-6">
        What is in the box?
      </h3>
      <p className="mt-2 px-5 pb-6 text-sm leading-relaxed text-muted-foreground md:px-6">
        The machine, a portafilter with two baskets, a tamper and the power
        lead. The portafilter is the handle that holds the coffee. The Duo and
        the Pro also come with a milk jug.
      </p>
    </ScrollReveal>
  )
}

export function FaqGrinderCard() {
  return (
    <ScrollReveal
      as="li"
      delayMs={120}
      className="group raised-card row-span-3 grid grid-rows-subgrid gap-y-0 rounded-3xl p-1.5 lg:col-span-4"
    >
      <div
        aria-hidden="true"
        className="relative h-44 overflow-hidden rounded-2xl"
      >
        <div className="absolute inset-0 bg-linear-to-b from-card to-popover transition-transform duration-300 ease-soft motion-safe:group-hover:-translate-y-1 motion-reduce:transition-none">
          <div className="flex h-full items-end justify-center">
            <Image
              alt="Nove grinder in steel with a walnut knob and a clear hopper of beans"
              width={800}
              height={800}
              className="h-full w-auto mix-blend-multiply"
              src="/images/home/grinder.png"
            />
            <span className="absolute right-4 bottom-4 inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent bg-background px-2.5 py-0.5 font-mono text-xs font-medium whitespace-nowrap text-foreground shadow-sm">
              $290
            </span>
          </div>
        </div>
      </div>
      <h3 className="px-5 pt-5 text-xl leading-snug text-pretty md:px-6">
        Do I need the grinder?
      </h3>
      <p className="mt-2 px-5 pb-6 text-sm leading-relaxed text-muted-foreground md:px-6">
        Not if you order your beans ground. But ground coffee goes stale in a
        few days, so a grinder gives you better shots. Ours matches the machine,
        and any grinder with an espresso setting works.
      </p>
    </ScrollReveal>
  )
}

export function FaqWarmupCard() {
  return (
    <ScrollReveal
      as="li"
      delayMs={240}
      className="group raised-card row-span-3 grid grid-rows-subgrid gap-y-0 rounded-3xl p-1.5 lg:col-span-5"
    >
      <div
        aria-hidden="true"
        className="relative h-44 overflow-hidden rounded-2xl lg:h-56"
      >
        <div className="absolute inset-0 bg-linear-to-b from-card to-popover transition-transform duration-300 ease-soft motion-safe:group-hover:-translate-y-1 motion-reduce:transition-none">
          <Image
            alt=""
            fill
            className="object-cover object-[50%_40%] mix-blend-multiply"
            src="/images/home/faq-warmup.jpg"
          />
          <span className="absolute right-4 bottom-4 inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent bg-background px-2.5 py-0.5 font-mono text-xs font-medium whitespace-nowrap text-foreground shadow-sm">
            40 s
          </span>
        </div>
      </div>
      <h3 className="px-5 pt-5 text-xl leading-snug text-pretty md:px-6">
        How long does it take to warm up?
      </h3>
      <p className="mt-2 px-5 pb-6 text-sm leading-relaxed text-muted-foreground md:px-6">
        40 seconds on the One, 45 on the Duo and 90 on the Pro, which heats two
        boilers so it can brew and steam at once.
      </p>
    </ScrollReveal>
  )
}

export function FaqWarrantyCard() {
  return (
    <ScrollReveal
      as="li"
      delayMs={300}
      className="group raised-card row-span-3 grid grid-rows-subgrid gap-y-0 rounded-3xl p-1.5 lg:col-span-4"
    >
      <div
        aria-hidden="true"
        className="relative h-44 overflow-hidden rounded-2xl"
      >
        <div className="absolute inset-0 bg-linear-to-b from-card to-popover transition-transform duration-300 ease-soft motion-safe:group-hover:-translate-y-1 motion-reduce:transition-none">
          <Image
            alt=""
            fill
            className="object-contain p-3 mix-blend-multiply"
            src="/images/home/faq-warranty.jpg"
          />
          <span className="absolute right-4 bottom-4 inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent bg-background px-2.5 py-0.5 font-mono text-xs font-medium whitespace-nowrap text-foreground shadow-sm">
            3 years
          </span>
        </div>
      </div>
      <h3 className="px-5 pt-5 text-xl leading-snug text-pretty md:px-6">
        What does the warranty cover?
      </h3>
      <p className="mt-2 px-5 pb-6 text-sm leading-relaxed text-muted-foreground md:px-6">
        Three years, parts and labour, including the pump and the boiler. After
        that, repairs at the price of the part.
      </p>
    </ScrollReveal>
  )
}

export function FaqShippingCard() {
  return (
    <ScrollReveal
      as="li"
      delayMs={360}
      className="group raised-card row-span-3 grid grid-rows-subgrid gap-y-0 rounded-3xl p-1.5 lg:col-span-4"
    >
      <div
        aria-hidden="true"
        className="relative h-44 overflow-hidden rounded-2xl"
      >
        <div className="absolute inset-0 bg-linear-to-b from-card to-popover transition-transform duration-300 ease-soft motion-safe:group-hover:-translate-y-1 motion-reduce:transition-none">
          <Image
            alt=""
            fill
            className="object-contain p-4 mix-blend-multiply"
            src="/images/home/faq-shipping.jpg"
          />
          <span className="absolute right-4 bottom-4 inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent bg-background px-2.5 py-0.5 font-mono text-xs font-medium whitespace-nowrap text-foreground shadow-sm">
            3 to 5 days
          </span>
        </div>
      </div>
      <h3 className="px-5 pt-5 text-xl leading-snug text-pretty md:px-6">
        Where do you ship, and how fast?
      </h3>
      <p className="mt-2 px-5 pb-6 text-sm leading-relaxed text-muted-foreground md:px-6">
        Europe and the US, free, in 3 to 5 days. Other countries on request.
      </p>
    </ScrollReveal>
  )
}

export function FaqLoudCard() {
  return (
    <ScrollReveal
      as="li"
      delayMs={420}
      className="group raised-card row-span-3 grid grid-rows-subgrid gap-y-0 rounded-3xl p-1.5 lg:col-span-4"
    >
      <div
        aria-hidden="true"
        className="relative h-44 overflow-hidden rounded-2xl"
      >
        <div className="absolute inset-0 bg-linear-to-b from-card to-popover transition-transform duration-300 ease-soft motion-safe:group-hover:-translate-y-1 motion-reduce:transition-none">
          <Image
            alt=""
            fill
            className="object-cover object-[50%_75%] mix-blend-multiply"
            src="/images/home/faq-loud.jpg"
          />
          <span className="absolute right-4 bottom-4 inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent bg-background px-2.5 py-0.5 font-mono text-xs font-medium whitespace-nowrap text-foreground shadow-sm">
            28 s
          </span>
        </div>
      </div>
      <h3 className="px-5 pt-5 text-xl leading-snug text-pretty md:px-6">
        Is it loud?
      </h3>
      <p className="mt-2 px-5 pb-6 text-sm leading-relaxed text-muted-foreground md:px-6">
        It hums rather than rattles. About as loud as a kettle, for the 28
        seconds of the shot.
      </p>
    </ScrollReveal>
  )
}
