import { HomeHeroSection } from "@/components/features/home/hero-section"
import { CoffeeTabsSection } from "@/components/features/home/coffee-tabs-section"
import { HomeDetailsSection } from "@/components/features/home/details-section"
import { HomeModelsSection } from "@/components/features/home/models-section"
import { HomeAddonsSection } from "@/components/features/home/addons-section"
import { HomeReviewsSection } from "@/components/features/home/reviews-section"
import { HomeStorySection } from "@/components/features/home/story-section"
import { HomeGuaranteeSection } from "@/components/features/home/guarantee-section"
import { HomeFaqSection } from "@/components/features/home/faq-section"
import { HomeContactCtaSection } from "@/components/features/home/contact-cta-section"

export default function HomePage() {
  return (
    <>
      <HomeHeroSection />
      <CoffeeTabsSection />
      <HomeDetailsSection />
      <HomeModelsSection />
      <HomeAddonsSection />
      <HomeReviewsSection />
      <HomeStorySection />
      <HomeGuaranteeSection />
      <HomeFaqSection />
      <HomeContactCtaSection />
    </>
  )
}
