"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function SolutionSection() {
  const [showVideo, setShowVideo] = useState(false)

  // Timer de 5 segundos para la imagen
  useEffect(() => {
    if (!showVideo) {
      const timer = setTimeout(() => {
        setShowVideo(true)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [showVideo])

  // Cuando el video termina, volver a la imagen
  const handleVideoEnd = () => {
    setShowVideo(false)
  }

  return (
    <section
      data-section="solution"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image/Video Carousel */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-muted overflow-hidden relative">
              {/* Imagen */}
              <div className={`absolute inset-0 transition-opacity duration-700 ${showVideo ? 'opacity-0' : 'opacity-100'}`}>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tapa%20base.jpeg-2UDmiq1oDhZowi7Q1PDQEBjFErZRwX.png"
                  alt="Herramientas profesionales de cerrajería"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Video */}
              <div className={`absolute inset-0 transition-opacity duration-700 ${showVideo ? 'opacity-100' : 'opacity-0'}`}>
                {showVideo && (
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    playsInline
                    onEnded={handleVideoEnd}
                  >
                    <source src="/refe3.mp4" type="video/mp4" />
                  </video>
                )}
              </div>
              {/* Borde amarillo siempre visible */}
              <div className="absolute inset-0 rounded-2xl border-2 border-primary pointer-events-none"></div>
            </div>
          </div>

          {/* Right side - Copy */}
          <div className="">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
              La solución: Convertite en <span className="text-primary">cerrajero profesional</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6">
              La cerrajería es uno de los oficios con mayor demanda y menos profesionales. Las urgencias no tienen
              horario.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex gap-3">
                <span className="text-primary text-xl font-bold shrink-0">✓</span>
                <div>
                  <h3 className="font-bold mb-1">Aprende a abrir puertas sin dañarlas</h3>
                  <p className="text-sm text-muted-foreground">Técnicas profesionales para todo tipo de cerraduras</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-primary text-xl font-bold shrink-0">✓</span>
                <div>
                  <h3 className="font-bold mb-1">Domina cambios de combinación</h3>
                  <p className="text-sm text-muted-foreground">Métodos rápidos y seguros para todos los modelos</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-primary text-xl font-bold shrink-0">✓</span>
                <div>
                  <h3 className="font-bold mb-1">Consigue tus herramientas</h3>
                  <p className="text-sm text-muted-foreground">
                    Guía completa de dónde comprar y cuáles son esenciales
                  </p>
                </div>
              </div>
            </div>

            <p className="text-primary font-bold text-3xl">↓ Resultado: Generá ingresos desde tu primer trabajo</p>
          </div>
        </div>
      </div>
    </section>
  )
}
