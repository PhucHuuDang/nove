import { MessageSquare, PhoneCall, Mail } from "lucide-react"

import { SectionLabel } from "@/components/shared/section-label"

const OPTIONS = [
  {
    icon: MessageSquare,
    title: "Chat with us",
    desc: "Available Tuesday to Saturday, 10:00 to 19:00 CET.",
    action: "hello@nove.coffee",
    href: "mailto:hello@nove.coffee",
  },
  {
    icon: PhoneCall,
    title: "Book a 20-min call",
    desc: "Talk directly with Matteo or Davide about choosing the right model.",
    action: "Schedule a video call",
    href: "#form",
  },
  {
    icon: Mail,
    title: "Write an email",
    desc: "We reply to all inquiries within one business day.",
    action: "Use the contact form below",
    href: "#form",
  },
]

export function ContactOptions() {
  return (
    <section className="border-b border-border bg-background py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="max-w-2xl">
          <SectionLabel>Contact</SectionLabel>
          <h1 className="mt-2 text-4xl font-light tracking-tight text-foreground sm:text-6xl">
            Talk to the makers
          </h1>
          <p className="mt-4 text-base font-light text-muted-foreground md:text-lg">
            Have questions about fit, electrical requirements, or bean pairing?
            The two of us answer every email and call directly.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {OPTIONS.map((opt) => {
            const Icon = opt.icon
            return (
              <a
                key={opt.title}
                href={opt.href}
                className="group flex flex-col justify-between rounded-2xl border border-border/70 bg-card p-6 transition-all hover:border-border hover:shadow-xs"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium">{opt.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed font-light text-muted-foreground md:text-sm">
                    {opt.desc}
                  </p>
                </div>
                <p className="mt-6 font-mono text-xs text-foreground group-hover:underline">
                  {opt.action} →
                </p>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
