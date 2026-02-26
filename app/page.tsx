"use client"
import HeroSection from "@/components/hero-section"
import SolutionSection from "@/components/solution-section"
import OfferStack from "@/components/offer-stack"
import TestimonialsSection from "@/components/testimonials-section"
import FaqSection from "@/components/faq-section"
import ClosingCta from "@/components/closing-cta"

export default function Home() {
  return (
    <main className="bg-background text-foreground overflow-hidden font-[family-name:var(--font-wolfpack)]">
      <HeroSection />
      <SolutionSection />
      <OfferStack />
      <TestimonialsSection />
      <FaqSection />
      <ClosingCta />
    </main>
  )
}
