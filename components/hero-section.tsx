"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { trackEventWithServer } from "@/lib/meta-pixel"

export default function HeroSection() {
  const handleCTA = () => {
    trackEventWithServer("InitiateCheckout", {
      content_name: "Curso Cerrajería",
      content_category: "Curso Online",
      value: 1,
      currency: "ARS",
    })
    window.location.href = "https://robertopugliese.shop/cart/45612584861869:1"
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
      {/* Decorative background element */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Attention grabber */}
        <div className="inline-block px-4 py-2 rounded-full border border-primary/20 mb-2.5 bg-border mt-2.5">
          <p className="font-semibold text-primary text-xs text-center">Curso 100% Online</p>
        </div>

        {/* Main headline */}
        <h1 className="sm:text-6xl lg:text-7xl font-bold leading-tight text-balance animate-fade-in-up text-2xl mb-2.5">
          Convertite en <span className="text-primary">Cerrajero Certificado</span>
        </h1>

        {/* Imagen de portada */}
        <div className="my-2 flex justify-center animate-fade-in-up">
          <div className="w-70 h-50 relative overflow-hidden rounded-xl border-2 border-primary/30 shadow-lg">
            <Image
              src="/tapa.jpeg"
              alt="Portada del curso de cerrajería"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Subheadline with hook */}
        <p className="sm:text-2xl text-muted-foreground text-balance leading-relaxed max-w-2xl mx-auto animate-fade-in-up mt-5 mb-5 text-base">
          Ejercé una de las profesiones más escasas y más demandadas del mercado
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center gap-4 justify-center animate-fade-in-up mb-6">
          <Button
            onClick={handleCTA}
            className="relative overflow-hidden font-bold text-white text-xl sm:text-2xl tracking-widest py-8 px-14 sm:px-20 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 animate-glow-pulse bg-orange-500 hover:bg-orange-600"
          >
            ACCEDER AHORA
          </Button>
          <Button
            onClick={handleScrollToPrecios}
            className="py-3 px-6 text-sm font-semibold bg-primary hover:bg-primary/85 text-primary-foreground rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            ¿Cuánto gana un cerrajero?
          </Button>
        </div>

      </div>
    </section>
  )
}
