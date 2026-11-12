import type { Metadata } from "next"

import { pageMetadata } from "@/lib/seo"
import Link from "next/link"

export const metadata: Metadata = pageMetadata({
  title: "Privacy policy",
  description:
    "What personal data Nove Espresso S.r.l. collects when you order or write to us, why, how long we keep it and how to have it deleted.",
  path: "/legal/privacy",
})

const SECTIONS = [
  {
    id: "who-we-are",
    number: "1",
    title: "Who we are",
    body: "Nove Espresso S.r.l. makes and sells Nove espresso machines, grinders, milk jugs and beans from Turin, Italy. We decide how your data is used, which makes us the data controller under the GDPR.",
  },
  {
    id: "what-we-collect",
    number: "2",
    title: "What we collect",
    body: "We ask only for what we need to deliver your order and answer your messages: your name, email address, phone number, delivery address, order details, and billing address. Full card numbers go directly to the payment provider.",
  },
  {
    id: "why-we-use-it",
    number: "3",
    title: "Why we use it",
    body: "We use data to fulfill orders, handle 30-day swaps and 3-year warranty service, manage bean subscriptions, keep tax invoices under Italian law, and respond to inquiries. We do not sell your data or use it for advertising.",
  },
  {
    id: "who-we-share-it-with",
    number: "4",
    title: "Who we share it with",
    body: "Our couriers (to deliver your order), payment providers (Visa, Mastercard, Amex, Apple Pay, Google Pay, PayPal), hosting/email providers, and accounting authorities as required by law.",
  },
  {
    id: "data-sent-outside-the-eu",
    number: "5",
    title: "Data sent outside the EU",
    body: "When you order to the US, the US courier receives your delivery details. All transfers are covered by the EU-US Data Privacy Framework or standard contractual clauses.",
  },
  {
    id: "how-long-we-keep-it",
    number: "6",
    title: "How long we keep it",
    body: "Orders and invoices: 10 years (Italian tax law). Customer service messages: 2 years. Analytics: 14 months.",
  },
  {
    id: "your-rights",
    number: "7",
    title: "Your rights",
    body: "Under GDPR you have rights to access, rectify, erase, restrict, port, or withdraw consent at any time. We respond within one month.",
  },
  {
    id: "how-to-reach-us",
    number: "8",
    title: "How to reach us",
    body: "Email hello@nove.coffee or write through our contact page. We reply within 1 working day.",
  },
  {
    id: "changes-to-this-policy",
    number: "9",
    title: "Changes to this policy",
    body: "If we change how we use your data, we update this page and date. If the change affects an active order, we email you.",
  },
]

export default function PrivacyPage() {
  return (
    <div className="gutter-3 section-padding md:gutter-5">
      <div className="mx-auto max-w-3xl">
        <header className="border-b pb-8">
          <p className="font-medium text-muted-foreground">Legal</p>
          <h1 className="mt-2 text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
            Privacy policy
          </h1>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            This policy explains what personal data we collect, why we use it,
            and your rights under GDPR.
          </p>
          <p className="mt-4 font-mono text-xs text-muted-foreground">
            Last updated October 1, 2026 · Nove Espresso S.r.l.
          </p>
        </header>

        <div className="mt-8 divide-y divide-border">
          {SECTIONS.map((sec) => (
            <article key={sec.number} className="py-8">
              <h2
                id={sec.id}
                className="flex items-center gap-3 text-xl font-medium tracking-tight text-foreground md:text-2xl"
              >
                <span className="grid size-7 shrink-0 place-items-center rounded-md border bg-card font-mono text-xs text-muted-foreground">
                  {sec.number}
                </span>
                {sec.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {sec.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex gap-4 text-sm text-muted-foreground">
          <Link href="/legal/terms" className="underline hover:text-foreground">
            Terms of sale
          </Link>
          <span>·</span>
          <Link
            href="/legal/cookies"
            className="underline hover:text-foreground"
          >
            Cookie policy
          </Link>
        </div>
      </div>
    </div>
  )
}
