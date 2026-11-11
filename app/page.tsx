import { HomeHeroSection } from "@/components/features/home/hero-section"
import { CoffeeTabsSection } from "@/components/features/home/coffee-tabs-section"
import { MachineCompareSection } from "@/components/features/home/machine-compare-section"
import { HomeDetailsSection } from "@/components/features/home/details-section"
import { HomeReviewsSection } from "@/components/features/home/reviews-section"
import { AboutBlurbSection } from "@/components/features/home/about-blurb-section"
import { HomeCountersSection } from "@/components/features/home/counters-section"
import { HomePricingCardsSection } from "@/components/features/home/pricing-cards-section"
import { HomeFaqSection } from "@/components/features/home/faq-section"
import { HomeContactCtaSection } from "@/components/features/home/contact-cta-section"

export default function HomePage() {
  return (
    <>
      <HomeHeroSection />
      <CoffeeTabsSection />
      <HomeDetailsSection />
      <MachineCompareSection />
      <HomeReviewsSection />
      <AboutBlurbSection />
      <HomeCountersSection />
      <HomePricingCardsSection />
      <HomeFaqSection />
      <HomeContactCtaSection />
    </>
  )
}
