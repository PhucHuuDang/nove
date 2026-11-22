import { LegalBlocks } from "@/components/features/legal/legal-blocks"
import { LEGAL_DOCUMENTS } from "@/components/features/legal/legal-content"
import { LegalPrintButton } from "@/components/features/legal/legal-print-button"
import { LegalSidebar } from "@/components/features/legal/legal-sidebar"
import type { LegalSlug } from "@/components/features/legal/legal-types"
import { NavSpacer } from "@/components/shared/nav-spacer"
import { ScrollReveal } from "@/components/shared/scroll-reveal"

export function LegalPageView({ slug }: { slug: LegalSlug }) {
  const legalDocument = LEGAL_DOCUMENTS[slug]

  return (
    <>
      <NavSpacer />
      <section
        className="gutter-3 section-padding md:gutter-5"
        aria-labelledby="legal-heading"
      >
        <div className="grid gap-12 md:px-3 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16 lg:px-5 xl:gap-24">
          <LegalSidebar current={slug} />
          <ScrollReveal className="w-full max-w-2xl lg:mx-auto">
            <article>
              <header>
                <div className="flex items-center justify-between gap-4 border-b pb-4">
                  <p className="font-medium">Nove Espresso S.r.l.</p>
                  <LegalPrintButton />
                </div>
                <h1
                  id="legal-heading"
                  className="mt-10 text-4xl leading-[1.05] md:mt-14 md:text-5xl lg:text-6xl"
                >
                  {legalDocument.title}
                </h1>
                <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
                  {legalDocument.intro}
                </p>
                <p className="mt-6 text-sm text-muted-foreground">
                  Last updated{" "}
                  <time
                    dateTime={legalDocument.updated.dateTime}
                    className="font-mono text-foreground"
                  >
                    {legalDocument.updated.label}
                  </time>
                </p>
              </header>
              <LegalBlocks blocks={legalDocument.blocks} />
            </article>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
