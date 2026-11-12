import Image from "next/image"

import { ScrollReveal } from "@/components/shared/scroll-reveal"

import { ContactForm } from "./contact-form"

export function ContactFormSection() {
  return (
    <section
      id="form"
      className="scroll-mt-24 px-3 section-padding md:px-5"
      aria-labelledby="form-heading"
    >
      <ScrollReveal>
        <div className="relative isolate overflow-hidden rounded-3xl gutter-3 py-3 md:gutter-6 md:py-6 lg:gutter-8 lg:py-8">
          <div aria-hidden="true" className="absolute -inset-16 -z-10">
            <Image
              src="/images/home/cup-hand.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover blur-3xl saturate-150"
            />
          </div>
          <div className="grid gap-10 rounded-2xl bg-popover p-6 shadow-xl md:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col items-start">
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span
                    aria-hidden="true"
                    className="size-2 rounded-full bg-success"
                  />
                  Reply within 1 working day
                </span>
                <p className="mt-6 text-4xl leading-tight md:text-5xl">
                  Ask before you buy,{" "}
                  <span className="text-muted-foreground">
                    or after it arrives.
                  </span>
                </p>
                <p className="mt-5 max-w-sm text-muted-foreground">
                  Questions about a model, an order or a repair all reach the
                  barista and the engineer who make the machine.
                </p>
              </div>
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl lg:aspect-auto lg:min-h-56 lg:flex-1">
                <Image
                  src="/images/home/latte.jpg"
                  alt="Milk being poured into a cup to make latte art"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
