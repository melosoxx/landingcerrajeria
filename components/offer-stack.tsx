"use client"

import { Button } from "@/components/ui/button"

export default function OfferStack() {
  const includes = [
    { item: "Videos profesionales (4+ horas)" },
    { item: "Manuales PDF detallados" },
    { item: "Guía de herramientas (marcas y dónde comprar)" },
    { item: "Técnicas avanzadas de apertura" },
    { item: "Cambio de combinaciones paso a paso" },
    { item: "Cálculo de precios y negociación" },
  ]

  const handleCheckout = () => {
    window.location.href = "https://robertopugliese.shop/cart/45612584861869:1"
  }

  return (
    <section
      data-section="offer"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card to-background"
    >
      <div className="max-w-4xl mx-auto bg-transparent">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Esto incluye el curso</h2>
          <p className="text-lg text-muted-foreground">
            Todo lo que necesitás para empezar a ganar desde el primer día
          </p>
        </div>

        {/* Offer Stack */}
        <div className="rounded-2xl border-2 border-primary/30 p-8 sm:p-12 mb-8 px-0 bg-input">
          <div className="space-y-4 mb-8">
            {includes.map((item, index) => (
              <div key={index} className="flex items-start gap-4 pb-4 border-b border-border/50 last:border-b-0">
                <div className="text-primary text-2xl flex-shrink-0">✓</div>
                <div className="flex-1">
                  <p className="font-semibold mb-1 text-sm">{item.item}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Price section */}
          <div className="rounded-xl p-8 text-center border px-0 border-yellow-300 bg-stone-900">
            
            

            
            
            

            <Button
              onClick={handleCheckout}
              className="font-bold bg-[oklch(0.55_0.2_142)] hover:bg-[oklch(0.50_0.2_142)] text-checkout-foreground shadow-lg shadow-[oklch(0.55_0.2_142)]/50 text-lg py-8 w-56 px-16"
            >
              ACCEDER AHORA
            </Button>

            <p className="text-muted-foreground mt-6 text-xs">🔒 Acceso inmediato por WhatsApp o Google Drive 🔒 </p>
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center text-center text-sm">
          <div>
            <p className="font-semibold text-primary mb-1">✓ Garantía 7 días</p>
            <p className="text-muted-foreground">Si no te gusta, devolución total</p>
          </div>
          <div className="hidden sm:block w-px bg-border/50"></div>
          <div>
            <p className="font-semibold text-primary mb-1">✓ Soporte 24/7</p>
            <p className="text-muted-foreground">Dudas por WhatsApp</p>
          </div>
          <div className="hidden sm:block w-px bg-border/50"></div>
          <div>
            <p className="font-semibold text-primary mb-1">✓ Envío inmediato</p>
            <p className="text-muted-foreground">Sin esperas, comienza ya</p>
          </div>
        </div>
      </div>
    </section>
  )
}
