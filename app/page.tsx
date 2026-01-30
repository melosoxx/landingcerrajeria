"use client"
import HeroSection from "@/components/hero-section"
import ProblemSection from "@/components/problem-section"
import SolutionSection from "@/components/solution-section"
import BenefitsSection from "@/components/benefits-section"
import OfferStack from "@/components/offer-stack"
import TestimonialsSection from "@/components/testimonials-section"
import FaqSection from "@/components/faq-section"
import ClosingCta from "@/components/closing-cta"

export default function Home() {
  return (
    <main className="bg-background text-foreground overflow-hidden">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <OfferStack />
      <TestimonialsSection />
      <FaqSection />
      <ClosingCta />
    </main>
  )
}
