import { PageHeadline } from "@/components/shared/page-headline"
import { ScrollReveal } from "@/components/shared/scroll-reveal"

interface PageIntroProps {
  id: string
  lines: React.ReactNode[]
  lede: React.ReactNode
  children: React.ReactNode
}

/** Two-column page opening: rising headline left, lede and actions right. */
export function PageIntro({ id, lines, lede, children }: PageIntroProps) {
  return (
    <div className="grid gap-8 gutter-0 pt-12 md:pt-16 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-16">
      <PageHeadline id={id} lines={lines} />
      <ScrollReveal
        delayMs={200}
        className="lg:max-w-md lg:justify-self-end lg:pb-2"
      >
        <p className="max-w-md text-base text-muted-foreground md:text-lg">
          {lede}
        </p>
        <div className="mt-6">{children}</div>
      </ScrollReveal>
    </div>
  )
}
