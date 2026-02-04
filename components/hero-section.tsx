"use client"

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

  const handleSeeMore = () => {
    const element = document.querySelector('[data-section="solution"]')
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-card overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Attention grabber */}
        <div className="inline-block px-4 py-2 rounded-full border border-primary/20 mb-2.5 bg-border mt-2.5">
          <p className="font-semibold text-primary text-xs text-center">🔓 La oportunidad que estabas esperando</p>
        </div>

        {/* Main headline */}
        <h1 className="sm:text-6xl lg:text-7xl font-bold leading-tight text-balance animate-fade-in-up text-2xl mb-2.5">
          Convertite en <span className="text-primary">Cerrajero Certificado</span>
        </h1>

        {/* Subheadline with hook */}
        <p className="sm:text-2xl text-muted-foreground text-balance leading-relaxed max-w-2xl mx-auto animate-fade-in-up mb-2.5 mt-2.5 text-base">
          Trabaja sin jefes, maneja tus propios horarios y genera en 15 minutos lo que otros tardan un día entero en ganar
        </p>

        {/* Secondary subheadline */}
        <p className="text-foreground/80 max-w-2xl mx-auto animate-fade-in-up text-center px-9 mt-5 mb-5 text-base">
          Sin horarios, sin jefe, generando ingresos que otros sueñan.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up mb-3.5">
          <Button
            onClick={handleCTA}
            className="py-8 font-bold hover:bg-checkout/90 text-checkout-foreground shadow-lg shadow-checkout/50 hover:shadow-checkout/70 transition-all duration-300 rounded-lg bg-checkout text-xl tracking-normal px-4"
          >
            Acceder Ahora 
          </Button>
          <Button
            onClick={handleSeeMore}
            variant="outline"
            className="px-10 py-8 font-bold border-2 border-primary text-primary hover:bg-primary/10 rounded-lg bg-transparent text-base my-1"
          >
            Ver más
          </Button>
        </div>

        {/* Trust element */}
        <div className="flex sm:flex-row justify-center text-sm text-muted-foreground flex-col items-stretch gap-1 my-0">
          <div className="flex items-center gap-2 my-0">
            <span className="text-primary text-lg">✓</span>
            <span>Acceso inmediato por WhatsApp</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary text-lg">✓</span>
            <span>Acceso de por vida</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary text-lg">✓</span>
            <span>Garantía 100% satisfacción</span>
          </div>
        </div>
      </div>
    </section>
  )
}
