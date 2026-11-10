"use client"

import { useState } from "react"
import Image from "next/image"

import { SectionLabel } from "@/components/shared/section-label"
import { cn } from "@/lib/utils"

const BASE = "https://nove-nextjs-template.vercel.app"

const STEPS = [
  {
    step: "01",
    title: "Tracking notification",
    desc: "We email you the DHL or FedEx tracking code as soon as your machine leaves our Turin workshop.",
    image: `${BASE}/images/help/step-email.jpg`,
  },
  {
    step: "02",
    title: "Fast free arrival",
    desc: "It arrives in 3 to 5 business days, free, anywhere in Europe and the continental US.",
    image: `${BASE}/images/home/faq-shipping.jpg`,
  },
  {
    step: "03",
    title: "Inspect your delivery",
    desc: "Check the outer box. If anything suffered damage in transit, take a photo within 7 days and we send a replacement immediately.",
    image: `${BASE}/images/help/step-photo.jpg`,
  },
  {
    step: "04",
    title: "Initial rinse",
    desc: "Rinse the reservoir and run one full tank of hot water through the portafilter before pulling your first espresso.",
    image: `${BASE}/images/help/step-tank.jpg`,
  },
  {
    step: "05",
    title: "Keep your packaging",
    desc: "Keep the custom fitted cardboard packaging for 30 days in case you decide to swap your model.",
    image: `${BASE}/images/product/box-duo.png`,
  },
]

export function HelpGuide() {
  const [activeTab, setActiveTab] = useState("shipping")

  return (
    <section className="border-b border-border bg-background py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <SectionLabel>Process</SectionLabel>
        <h2 className="mt-2 text-2xl font-light tracking-tight text-foreground md:text-4xl">
          Delivery & first setup
        </h2>

        {/* Tab buttons */}
        <div className="mt-8 flex flex-wrap gap-2 border-b border-border pb-4 font-mono text-xs">
          {["shipping", "swap", "warranty", "care"].map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={cn(
                "rounded-full px-4 py-1.5 tracking-wider uppercase transition-colors",
                activeTab === t
                  ? "bg-foreground text-background"
                  : "bg-muted text-muted-foreground hover:bg-accent hover:text-foreground"
              )}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Steps */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((s) => (
            <div
              key={s.step}
              className="flex flex-col justify-between rounded-2xl border border-border/70 bg-card p-5"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-muted/40">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 200px"
                  className="object-cover"
                />
              </div>

              <div className="mt-5">
                <span className="font-mono text-xs text-muted-foreground">
                  Step {s.step}
                </span>
                <h3 className="mt-1 text-base font-medium">{s.title}</h3>
                <p className="mt-2 text-xs leading-relaxed font-light text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
