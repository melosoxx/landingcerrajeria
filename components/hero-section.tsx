"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { trackEventWithServer } from "@/lib/meta-pixel"
import { Check } from "lucide-react"

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
    const element = document.getElementById('resultado-ingresos')
    element?.scrollIntoView({ behavior: "smooth", block: "center" })

    // Abrir el acordeón después del scroll
    setTimeout(() => {
      const trigger = document.querySelector('[data-accordion-trigger="precios"]') as HTMLElement
      if (trigger && trigger.getAttribute('data-state') === 'closed') {
        trigger.click()
      }
    }, 800)
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

        {/* Imagen de portada */}
        <div className="my-2 flex justify-center animate-fade-in-up">
          <div className="w-[280px] h-[200px] relative overflow-hidden rounded-xl border-2 border-primary/30 shadow-lg">
            <Image
              src="/tapa.jpeg"
              alt="Portada del curso de cerrajería"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Secondary subheadline */}
        <p className="text-foreground/80 max-w-2xl mx-auto animate-fade-in-up text-center px-9 mt-5 mb-5 text-base">
          Sin horarios, sin jefe, generando ingresos que otros sueñan.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up mb-3.5">
          <Button
            onClick={handleCTA}
            className="relative overflow-hidden font-bold text-white text-lg sm:text-xl py-8 px-10 sm:px-12 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 animate-glow-pulse bg-green-500 hover:bg-green-600"
          >
            ACCEDER AHORA
          </Button>
          <Button
            onClick={handleSeeMore}
            className="px-10 py-8 font-bold border-2 border-primary text-primary-foreground bg-primary hover:bg-primary/90 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 text-base my-1"
          >
            Ver tarifas de servicios
          </Button>
        </div>

        {/* Trust element */}
        <div className="flex sm:flex-row justify-center text-sm text-muted-foreground flex-col items-stretch gap-1 my-0">
          <div className="flex items-center gap-2 my-0">
            <div className="shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
              <Check className="w-3 h-3 text-green-500" strokeWidth={3} />
            </div>
            <span>Acceso inmediato por WhatsApp</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
              <Check className="w-3 h-3 text-green-500" strokeWidth={3} />
            </div>
            <span>Acceso de por vida</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
              <Check className="w-3 h-3 text-green-500" strokeWidth={3} />
            </div>
            <span>Garantía 100% satisfacción</span>
          </div>
        </div>
      </div>
    </section>
  )
}
