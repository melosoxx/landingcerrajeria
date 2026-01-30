"use client"

import { Button } from "@/components/ui/button"

export default function ClosingCta() {
  const handleCheckout = () => {
    window.location.href = "https://wwhustle.com/cart/51610450329883:1"
  }

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-card to-background relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-primary"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
          No es tarde. <span className="text-primary">Empezá hoy.</span>
        </h2>

        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Cada día que pasa sin aprender cerrajería es dinero que dejás de ganar. En una sola emergencia ya recuperás lo
          que invertiste en el curso.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            onClick={handleCheckout}
            className="px-12 py-8 font-bold bg-[oklch(0.55_0.2_142)] hover:bg-[oklch(0.50_0.2_142)] text-checkout-foreground shadow-lg shadow-[oklch(0.55_0.2_142)]/50 hover:shadow-[oklch(0.55_0.2_142)]/70 transition-all duration-300 rounded-lg text-2xl"
          >
            EMPEZAR AHORA
          </Button>
        </div>

        <p className="text-muted-foreground text-xs">Acceso inmediato • Garantía 7 días • Soporte 24/7</p>
      </div>
    </section>
  )
}
