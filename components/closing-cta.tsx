"use client"

import { Button } from "@/components/ui/button"
import { trackEventWithServer } from "@/lib/meta-pixel"

export default function ClosingCta() {
  const handleCheckout = () => {
    trackEventWithServer("InitiateCheckout", {
      content_name: "Curso Cerrajería",
      content_category: "Curso Online",
      value: 1,
      currency: "ARS",
    })
    window.location.href = "https://robertopugliese.shop/cart/48760681398523:1"
  }

  return (
    <section className="pb-16 sm:pb-24 pt-0 px-4 sm:px-6 lg:px-8 bg-input relative overflow-hidden">

      <div className="relative z-10 max-w-4xl mx-auto text-center pt-8 sm:pt-16">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
          No es tarde. <span className="text-primary">Empezá hoy.</span>
        </h2>

        <p className="text-xl text-orange-500 font-semibold mb-8 max-w-2xl mx-auto">
          Cada día que pasa sin aprender cerrajería es dinero que dejás en la mesa.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            onClick={handleCheckout}
            className="relative overflow-hidden font-bold text-white text-lg sm:text-xl py-8 w-full sm:w-auto sm:px-12 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 animate-glow-pulse bg-orange-500 hover:bg-orange-600"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              EMPEZAR AHORA
            </span>
          </Button>
        </div>

        <p className="text-muted-foreground text-xs">Acceso inmediato • Garantía 7 días • Soporte 24/7</p>
      </div>
    </section>
  )
}
