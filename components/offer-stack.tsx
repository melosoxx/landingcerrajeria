"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { trackEventWithServer } from "@/lib/meta-pixel"
import { Check } from "lucide-react"

export default function OfferStack() {
  // Estado para contador de personas viendo
  const [viewersCount, setViewersCount] = useState(() =>
    Math.floor(Math.random() * 7) + 7
  )

  // Estado para contador de cupos
  const [spotsLeft, setSpotsLeft] = useState(() =>
    Math.random() > 0.5 ? 4 : 3
  )

  // Efecto para fluctuar viewers cada 5-10 segundos
  useEffect(() => {
    const fluctuate = () => {
      setViewersCount((prev) => {
        const change = Math.floor(Math.random() * 3) + 1
        const increase = Math.random() > 0.5
        const newCount = increase ? prev + change : prev - change
        return Math.max(5, Math.min(18, newCount))
      })
    }

    const scheduleNext = () => {
      const nextInterval = Math.floor(Math.random() * 5000) + 5000
      return setTimeout(() => {
        fluctuate()
        timeoutId = scheduleNext()
      }, nextInterval)
    }

    let timeoutId = scheduleNext()
    return () => clearTimeout(timeoutId)
  }, [])

  // Efecto para reducir cupos después de 30-60 segundos
  useEffect(() => {
    const timeout = setTimeout(
      () => {
        setSpotsLeft((prev) => {
          if (prev > 2) return Math.random() > 0.5 ? 2 : 1
          return prev
        })
      },
      Math.floor(Math.random() * 30000) + 30000
    )

    return () => clearTimeout(timeout)
  }, [])


  const handleCheckout = () => {
    trackEventWithServer("InitiateCheckout", {
      content_name: "Curso Cerrajería",
      content_category: "Curso Online",
      value: 1,
      currency: "ARS",
    })
    window.location.href = "https://robertopugliese.shop/cart/45612584861869:1"
  }

  return (
    <section
      data-section="offer"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-card to-background"
    >
      <div className="max-w-4xl mx-auto bg-transparent">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-2 text-balance">Oferta válida solo por hoy:</h2>
          <p className="text-lg text-primary font-semibold">
            {new Date().toLocaleDateString("es-AR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>

        {/* Offer Stack */}
        <div className="rounded-2xl border-2 border-primary/30 p-8 sm:p-12 mb-8 px-0 bg-input">
          {/* Price section */}
          <div className="rounded-xl p-8 text-center border px-4 sm:px-8 border-yellow-300 bg-stone-900">

            {/* Contador de personas viendo */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm text-muted-foreground">
                <span className="font-semibold text-green-400">{viewersCount}</span> personas viendo esta página
              </span>
            </div>

            {/* Contador de cupos limitados */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <span className="text-sm text-muted-foreground">
                Quedan <span className="font-bold text-destructive">{spotsLeft}</span> cupos promocionales
              </span>
            </div>

            {/* Etiqueta DESCUENTO ESPECIAL */}
            <div className="inline-block bg-orange-500 text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded mb-3">
              Descuento Especial
            </div>

            {/* Precios */}
            <div className="mb-4">
              <p className="text-muted-foreground line-through text-xl">$35.000 ARS</p>
              <p className="text-4xl sm:text-5xl font-bold text-primary">$14.999 ARS</p>
            </div>

            {/* Etiqueta 3 cuotas */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <span>💳</span>
              <span className="text-sm font-semibold text-primary">Hasta 3 cuotas sin interés</span>
            </div>

            {/* Botón CTA Mejorado - Amarillo */}
            <div className="mb-4">
              <Button
                onClick={handleCheckout}
                className="relative overflow-hidden font-bold text-white text-lg sm:text-xl py-8 w-full sm:w-auto sm:px-12 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 animate-glow-pulse bg-green-500 hover:bg-green-600"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  ACCEDER AL SISTEMA COMPLETO
                </span>
              </Button>
            </div>

            {/* Safe payment */}
            <div className="flex justify-center mb-4">
              <Image
                src="/safepayment.png"
                alt="Métodos de pago seguros"
                width={360}
                height={50}
                className="opacity-70"
              />
            </div>

            {/* Etiqueta transferencia bancaria */}
            <div className="inline-flex items-center gap-2 bg-muted/30 border border-border rounded-full px-4 py-2 mb-6">
              <span>🏦</span>
              <span className="text-xs text-muted-foreground">También podés pagar por transferencia bancaria – entrega inmediata</span>
            </div>

            {/* Lista de beneficios */}
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-green-500" strokeWidth={3} />
              <span>Descarga segura</span>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center text-center text-sm">
          <div>
            <p className="font-semibold text-primary mb-1 flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-green-500" strokeWidth={3} />
              Garantía 7 días
            </p>
            <p className="text-muted-foreground">Si no te gusta, devolución total</p>
          </div>
          <div className="hidden sm:block w-px bg-border/50"></div>
          <div>
            <p className="font-semibold text-primary mb-1 flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-green-500" strokeWidth={3} />
              Soporte 24/7
            </p>
            <p className="text-muted-foreground">Dudas por WhatsApp</p>
          </div>
          <div className="hidden sm:block w-px bg-border/50"></div>
          <div>
            <p className="font-semibold text-primary mb-1 flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-green-500" strokeWidth={3} />
              Envío inmediato
            </p>
            <p className="text-muted-foreground">Sin esperas, comienza ya</p>
          </div>
        </div>
      </div>
    </section>
  )
}
