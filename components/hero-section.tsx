"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"


export default function HeroSection() {
  const handleCTA = () => {
    const offerSection = document.querySelector('[data-section="offer"]')
    offerSection?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const handleScrollToPrecios = () => {
    const trigger = document.querySelector('[data-accordion-trigger="precios"]') as HTMLElement
    trigger?.scrollIntoView({ behavior: "smooth", block: "center" })

    setTimeout(() => {
      if (trigger && trigger.getAttribute('data-state') === 'closed') {
        trigger.click()
      }
    }, 800)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-linear-to-b from-background via-background to-card overflow-hidden">

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Attention grabber */}
        <p className="font-semibold text-orange-500 text-sm tracking-wider mb-2.5 mt-2.5">TU PRÓXIMO PASO</p>

        {/* Main headline */}
        <h1 className="sm:text-6xl lg:text-7xl font-bold leading-tight text-balance animate-fade-in-up text-2xl mb-2.5">
          Convertite en <span className="text-primary">Cerrajero Certificado</span>
        </h1>

        {/* Imagen de portada con glow naranja centrado */}
        <div className="mt-2 mb-6 flex justify-center animate-fade-in-up relative">
          {/* Glow naranja centrado detrás del ebook */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-80 h-80 bg-orange-500 rounded-full blur-3xl animate-glow-bg"></div>
          </div>
          <div className="w-70 h-50 relative overflow-hidden rounded-xl border-2 border-primary/30 shadow-lg z-10">
            <Image
              src="/tapa.jpeg"
              alt="Portada del curso de cerrajería"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center gap-4 justify-center animate-fade-in-up mb-6">
          <Button
            onClick={handleScrollToPrecios}
            className="py-3 px-6 text-sm font-semibold bg-primary hover:bg-primary/85 text-primary-foreground rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 font-sans"
          >
            ¿Cuánto gana un cerrajero?
          </Button>
          <Button
            onClick={handleCTA}
            className="relative overflow-hidden font-bold text-white text-xl sm:text-2xl tracking-widest py-8 px-14 sm:px-20 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 animate-glow-pulse bg-orange-500 hover:bg-orange-600"
          >
            ACCEDER AHORA
          </Button>
        </div>

      </div>
    </section>
  )
}
