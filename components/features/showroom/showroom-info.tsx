import Link from "next/link"
import { MapPin, Calendar, Phone } from "lucide-react"

import { SectionLabel } from "@/components/shared/section-label"
import { buttonVariants } from "@/components/ui/button"

export function ShowroomInfo() {
  return (
    <section id="info" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <SectionLabel>Plan your visit</SectionLabel>
        <h2 className="mt-2 text-2xl font-light tracking-tight text-foreground md:text-4xl">
          Location & appointments
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* 1. Find us */}
          <div className="flex flex-col justify-between rounded-2xl border border-border/70 bg-card p-6 md:p-8">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-foreground">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-medium">Find us in Turin</h3>
              <p className="mt-2 font-mono text-xs text-muted-foreground">
                Via Nizza 45, 10125 Turin
              </p>
              <ul className="mt-4 space-y-1.5 text-xs font-light text-muted-foreground">
                <li>• 10 min walk from Porta Nuova station</li>
                <li>• Tuesday to Saturday, 10:00 – 19:00</li>
                <li>• Closed Sunday & Monday</li>
              </ul>
            </div>
            <a
              href="https://maps.google.com/?q=Via+Nizza+45+Torino"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 font-mono text-xs underline hover:text-foreground"
            >
              Get directions on Google Maps →
            </a>
          </div>

          {/* 2. Book a visit */}
          <div className="flex flex-col justify-between rounded-2xl border border-border/70 bg-card p-6 md:p-8">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-foreground">
                <Calendar className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-medium">Book a tasting visit</h3>
              <p className="mt-2 font-mono text-xs text-muted-foreground">
                45 minutes · Completely free
              </p>
              <ul className="mt-4 space-y-1.5 text-xs font-light text-muted-foreground">
                <li>• Try One, Duo, and Pro with your beans</li>
                <li>• Learn steam technique on the Duo wand</li>
                <li>• With Matteo or Davide, not sales staff</li>
              </ul>
            </div>
            <Link
              href="/contact#form"
              className={buttonVariants({ variant: "default", size: "sm" })}
            >
              Reserve a time slot
            </Link>
          </div>

          {/* 3. Remote call */}
          <div className="flex flex-col justify-between rounded-2xl border border-border/70 bg-card p-6 md:p-8">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-foreground">
                <Phone className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-medium">Video consultation</h3>
              <p className="mt-2 font-mono text-xs text-muted-foreground">
                20 minutes · Remote call
              </p>
              <ul className="mt-4 space-y-1.5 text-xs font-light text-muted-foreground">
                <li>• For customers outside northern Italy</li>
                <li>• Counter space & plumbing assessment</li>
                <li>• Personalized grinder & bean advice</li>
              </ul>
            </div>
            <Link
              href="/contact#form"
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              Schedule video call
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
