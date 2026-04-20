import dynamic from "next/dynamic"
import HeroSection from "@/components/hero-section"

const SolutionSection = dynamic(() => import("@/components/solution-section"))
const OfferStack = dynamic(() => import("@/components/offer-stack"))
const FaqSection = dynamic(() => import("@/components/faq-section"))
const PlatformShowroom = dynamic(() => import("@/components/platform-showroom"))
const ClosingCta = dynamic(() => import("@/components/closing-cta"))

export default function Home() {
  return (
    <main className="bg-background text-foreground overflow-hidden font-[family-name:var(--font-wolfpack)]">
      <HeroSection />
      <SolutionSection />
      <OfferStack />
      <FaqSection />
      <PlatformShowroom />
      <ClosingCta />
    </main>
  )
}
