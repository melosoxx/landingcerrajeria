"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { trackEventWithServer } from "@/lib/meta-pixel"
import { ShieldCheck, PlayCircle, BookOpen, Map, Wrench, type LucideIcon } from "lucide-react"

interface ValueItem {
  icon: LucideIcon
  name: string
  value: number
}

const valueStackItems: ValueItem[] = [
  {
    icon: PlayCircle,
    name: "+4 Horas de prácticas en video",
    value: 15000,
  },
  {
    icon: BookOpen,
    name: "Manual de Lockpicking",
    value: 10000,
  },
  {
    icon: Map,
    name: "Atlas de Cerrajería",
    value: 12000,
  },
  {
    icon: Wrench,
    name: "Guía de herramientas esenciales",
    value: 8000,
  },
]

const totalValue = valueStackItems.reduce((sum, item) => sum + item.value, 0)

export default function OfferStack() {
  // Estado para contador de personas viendo (valor fijo inicial para evitar hydration mismatch)
  const [viewersCount, setViewersCount] = useState(12)

  // Efecto para setear valor random inicial y fluctuar cada 5-10 segundos
  useEffect(() => {
    setViewersCount(Math.floor(Math.random() * 7) + 7)

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

  // Contador regresivo de 7 minutos
  const startTime = useRef(Date.now())
  const [timeLeft, setTimeLeft] = useState({ minutes: "07", seconds: "00" })

  useEffect(() => {
    const DURATION = 7 * 60 * 1000 // 7 minutos en ms

    const updateTimer = () => {
      const elapsed = Date.now() - startTime.current
      const remaining = Math.max(0, DURATION - elapsed)

      const minutes = Math.floor(remaining / (1000 * 60))
      const seconds = Math.floor((remaining % (1000 * 60)) / 1000)

      setTimeLeft({
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      })
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)
    return () => clearInterval(interval)
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
      className="py-10 sm:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-card to-background font-sans"
    >
      <div className="max-w-4xl mx-auto bg-transparent">
        <div className="text-center mb-6 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-orange-500">Esta oferta expira en</h2>

          {/* Contador regresivo */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex flex-col items-center bg-card border border-primary/30 rounded-lg px-4 py-2 min-w-16">
              <span className="text-2xl sm:text-3xl font-bold text-primary font-mono">{timeLeft.minutes}</span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Min</span>
            </div>
            <span className="text-2xl font-bold text-primary">:</span>
            <div className="flex flex-col items-center bg-card border border-primary/30 rounded-lg px-4 py-2 min-w-16">
              <span className="text-2xl sm:text-3xl font-bold text-primary font-mono">{timeLeft.seconds}</span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Seg</span>
            </div>
          </div>
        </div>

        {/* Offer Stack */}
        <div className="rounded-2xl border-2 border-primary/30 p-4 sm:p-8 mb-8 px-0 bg-input">

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

          {/* Value Stack */}
          <div className="px-3 sm:px-8 mb-6">
            <div className="space-y-2">
              {valueStackItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 border border-orange-500/40 rounded-xl py-2 px-3 shadow-[0_0_12px_rgba(249,115,22,0.15)] bg-card/50"
                >
                  <div className="shrink-0 w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm sm:text-base">{item.name}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-sm sm:text-base font-semibold text-muted-foreground line-through">
                      ${item.value.toLocaleString("es-AR")}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Valor real */}
            <div className="mt-4 pt-3 border-t border-primary/20 text-center">
              <p className="text-xl sm:text-2xl text-muted-foreground">
                Valor real{" "}
                <span className="line-through text-2xl sm:text-3xl font-bold">
                  ${totalValue.toLocaleString("es-AR")}
                </span>
              </p>
            </div>
          </div>

          {/* Price section */}
          <div className="rounded-xl p-6 text-center border px-4 sm:px-8 border-yellow-300 bg-stone-900">

            {/* Etiqueta LLEVALO HOY POR */}
            <div className="inline-block bg-orange-500 text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded mb-3">
              Llevalo hoy por
            </div>

            {/* Precios */}
            <div className="mb-4">
              <p className="text-4xl sm:text-5xl font-bold text-primary">$14.999 ARS</p>
            </div>

            {/* Etiqueta 3 cuotas */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
              <span>💳</span>
              <span className="text-sm font-semibold text-primary">Hasta 3 cuotas sin interés de $4.999</span>
            </div>

            {/* Botón CTA Mejorado - Amarillo */}
            <div className="mb-4">
              <Button
                onClick={handleCheckout}
                className="relative overflow-hidden font-bold text-white text-lg sm:text-xl py-8 w-full sm:w-auto sm:px-12 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 animate-glow-pulse bg-green-500 hover:bg-green-600"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  DESCARGAR AHORA
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
              <span className="text-xs text-muted-foreground">También podés pagar por transferencia bancaria</span>
            </div>

            {/* Garantía */}
            <div className="text-center mt-2">
              <p className="font-bold text-primary text-lg sm:text-xl flex items-center justify-center gap-3 tracking-wide">
                <ShieldCheck className="w-5 h-5 text-green-500" strokeWidth={3} />
                Garantía 7 días
              </p>
              <p className="text-muted-foreground text-sm mt-1">Si no te gusta, devolución total</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
