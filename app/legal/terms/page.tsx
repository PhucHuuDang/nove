import type { Metadata } from "next"

import { pageMetadata } from "@/lib/seo"

import { SectionLabel } from "@/components/shared/section-label"

export const metadata: Metadata = pageMetadata({
  title: "Terms of sale",
  description:
    "The terms for buying from Nove: orders, prices and payment, delivery, the 30-day swap, cancelling and the 3-year warranty.",
  path: "/legal/terms",
})

const SECTIONS = [
  {
    number: "1",
    title: "Who you buy from",
    body: "You buy from Nove Espresso S.r.l., a company registered in Turin, Italy. We make and sell the Nove One, Nove Duo and Nove Pro espresso machines, the grinder, the milk jug and the beans subscription.",
  },
  {
    number: "2",
    title: "Placing an order",
    body: "When you check out, we email you to confirm we have your order. The contract between us starts when we email again to say it has shipped. If something is out of stock or a price on the site is wrong, we tell you before we ship, and you can cancel without paying anything.",
  },
  {
    number: "3",
    title: "Prices and payment",
    body: "Prices are in US dollars. For orders to the EU they include VAT. For orders to the US, any sales tax shows at checkout before you pay. You can pay with Visa, Mastercard, Amex, Apple Pay, Google Pay and PayPal. We take payment when you place the order.",
  },
  {
    number: "4",
    title: "Delivery",
    body: "Shipping is free to Europe and the US and takes 3 to 5 days. Other countries on request. Check the box when it arrives. If anything is damaged, send us a photo within 7 days and we send a new one.",
  },
  {
    number: "5",
    title: "The 30-day swap",
    body: "If you picked the wrong model, you can change it for another within 30 days of delivery. Tell us which model you want instead. We ship it, you send the first one back in its box, and we refund or charge the difference. The swap is for machines. For the grinder, the milk jug and the beans, the right to cancel below applies.",
  },
  {
    number: "6",
    title: "Cancelling within 14 days",
    body: "You can cancel any order within 14 days of delivery without giving a reason. Tell us, then send the items back within 14 days of telling us. We refund what you paid, including the delivery, within 14 days of getting them back. Send the items back in their box. An opened bag of beans cannot be returned, because coffee goes stale once the bag is open.",
  },
  {
    number: "7",
    title: "The 3-year warranty",
    body: "Every machine has a 3-year warranty on parts and labour, including the pump and the boiler, from the day it is delivered. If it breaks, we repair or replace it and pay for shipping both ways. After 3 years, we repair it at the price of the part. EU law also gives you a 2-year legal guarantee on everything you buy from us.",
  },
  {
    number: "8",
    title: "The beans subscription",
    body: "A 250 g bag of our house roast, whole or ground for the machine, every four weeks, for $18 a bag, charged when it ships. You can pause or stop it any time. With the full setup (the Duo and the grinder), the first 3 bags are free.",
  },
  {
    number: "9",
    title: "If something goes wrong",
    body: "We are responsible for losses you suffer because we broke these terms, where the loss was foreseeable. We are not responsible for losses we could not foresee, or for business losses if you use a machine in a commercial setting.",
  },
  {
    number: "10",
    title: "Which law applies",
    body: "Italian law applies to these terms. If you live elsewhere in the EU, you keep the protection of your own country's consumer law, and you can take a dispute to the courts where you live. If you have a complaint, write to us at hello@nove.coffee. We reply within 1 working day.",
  },
]

export function LegalTerms() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:px-8 md:py-24">
      <SectionLabel>Legal</SectionLabel>
      <h1 className="mt-2 text-4xl font-light tracking-tight text-foreground md:text-5xl">
        Terms of sale
      </h1>
      <p className="mt-4 font-mono text-sm text-muted-foreground">
        Last updated October 2026 · Nove Espresso S.r.l.
      </p>

      <div className="mt-12 divide-y divide-border">
        {SECTIONS.map((sec) => (
          <article key={sec.number} className="py-8">
            <h2 className="text-xl font-medium tracking-tight text-foreground">
              <span className="mr-2 font-mono text-muted-foreground">
                {sec.number}.
              </span>
              {sec.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed font-light text-muted-foreground md:text-base">
              {sec.body}
            </p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default function TermsPage() {
  return <LegalTerms />
}
