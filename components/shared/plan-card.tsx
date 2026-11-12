import Link from "next/link"
import { ArrowUpRight, Check } from "lucide-react"

import { GlowCard, GlowCardNumber } from "@/components/shared/glow-card"
import { pillBadge, pillButton } from "@/lib/pill-variants"

export interface Plan {
  glow: string
  title: string
  note: string
  statLabel: string
  statBadge: string
  stat: string
  points: string[]
  cta: {
    label: string
    href: string
    variant?: "default" | "accent"
    external?: boolean
  }
}

interface PlanCardProps {
  plan: Plan
  index: number
  headingAs?: "h2" | "h3"
}

/** Numbered glow card with a stat tile, a checklist and a full-width action. */
export function PlanCard({ plan, index, headingAs = "h3" }: PlanCardProps) {
  const Heading = headingAs
  const { cta } = plan
  const ctaClass = pillButton({ variant: cta.variant, className: "w-full" })

  return (
    <GlowCard glow={plan.glow}>
      <GlowCardNumber>{index + 1}</GlowCardNumber>
      <Heading className="mt-5 text-xl leading-tight md:text-2xl">
        {plan.title}
      </Heading>
      <p className="mt-1 text-sm text-muted-foreground">{plan.note}</p>

      <div className="mt-5 rounded-xl bg-card p-4">
        <div className="flex items-center justify-between gap-3">
          <span className="text-sm text-muted-foreground">
            {plan.statLabel}
          </span>
          <span className={pillBadge()}>{plan.statBadge}</span>
        </div>
        <p className="mt-4 font-mono text-3xl figures">{plan.stat}</p>
      </div>

      <ul className="mt-5 flex flex-col gap-3 text-sm">
        {plan.points.map((point) => (
          <li key={point} className="flex items-start gap-2.5">
            <Check
              aria-hidden="true"
              className="mt-0.5 size-4 shrink-0 text-muted-foreground"
            />
            {point}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-7">
        {cta.external ? (
          <a
            href={cta.href}
            target="_blank"
            rel="noreferrer"
            className={ctaClass}
          >
            {cta.label}
            <ArrowUpRight aria-hidden="true" data-icon="inline-end" />
          </a>
        ) : (
          <Link href={cta.href} className={ctaClass}>
            {cta.label}
          </Link>
        )}
      </div>
    </GlowCard>
  )
}
