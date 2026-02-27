"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const tablasPrecio = [
  {
    titulo: "Programado",
    headerBg: "bg-green-500/20",
    headerText: "text-green-400",
    borderColor: "border-green-500/30",
    servicios: [
      { servicio: "Apertura Simple", franja: "Mañana", precio: "$75.000" },
      { servicio: "Cambio de combinación / cilindro", franja: "Mañana", precio: "$50.000" },
      { servicio: "Apertura de vehículo", franja: "Mañana", precio: "$85.000" },
    ],
  },
  {
    titulo: "Emergencia",
    headerBg: "bg-red-500/20",
    headerText: "text-red-400",
    borderColor: "border-red-500/30",
    servicios: [
      { servicio: "Apertura de Urgencia", franja: "Tarde", precio: "$130.000" },
      { servicio: "Apertura Nocturna", franja: "Noche", precio: "$180.000" },
      { servicio: "Apertura Madrugada", franja: "Madrugada", precio: "$150.000" },
      { servicio: "Domingos y Feriados", franja: "Mañana", precio: "$160.000" },
    ],
  },
  {
    titulo: "Alta Seguridad",
    headerBg: "bg-blue-500/20",
    headerText: "text-blue-400",
    borderColor: "border-blue-500/30",
    servicios: [
      { servicio: "Puerta Blindada / Judicial", franja: "Mañana", precio: "$230.000" },
    ],
  },
]

export default function SolutionSection() {
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    if (!showVideo) {
      const timer = setTimeout(() => {
        setShowVideo(true)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [showVideo])

  const handleVideoEnd = () => {
    setShowVideo(false)
  }

  return (
    <section
      data-section="solution"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card font-sans"
    >
      <div className="max-w-5xl mx-auto">
        {/* Título y subtítulo arriba del video */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance font-[family-name:var(--font-wolfpack)]">
          Generá ingresos desde tu <span className="text-primary">primer trabajo</span>
        </h2>
        <p className="text-lg text-orange-400 mb-8 drop-shadow-[0_0_8px_rgba(249,115,22,0.3)]">
          La cerrajería es uno de los oficios con mayor demanda y menos profesionales. Las urgencias no tienen
          horario.
        </p>

        {/* Chips */}
        <div className="space-y-4 mb-8">
              <div className="flex gap-3 border border-orange-500/40 rounded-xl p-4 shadow-[0_0_12px_rgba(249,115,22,0.15)] transition-all duration-300 cursor-pointer hover:border-orange-400/70 hover:shadow-[0_0_20px_rgba(249,115,22,0.35)] hover:scale-[1.02] active:scale-[0.98]">
                <span className="text-primary text-xl font-bold shrink-0">✓</span>
                <div>
                  <h3 className="font-bold mb-1">Aprende a abrir puertas sin dañarlas</h3>
                  <p className="text-sm text-muted-foreground">Técnicas profesionales para todo tipo de cerraduras</p>
                </div>
              </div>
              <div className="flex gap-3 border border-orange-500/40 rounded-xl p-4 shadow-[0_0_12px_rgba(249,115,22,0.15)] transition-all duration-300 cursor-pointer hover:border-orange-400/70 hover:shadow-[0_0_20px_rgba(249,115,22,0.35)] hover:scale-[1.02] active:scale-[0.98]">
                <span className="text-primary text-xl font-bold shrink-0">✓</span>
                <div>
                  <h3 className="font-bold mb-1">Domina cambios de combinación y tipos de cerraduras</h3>
                  <p className="text-sm text-muted-foreground">Métodos rápidos y seguros para todos los modelos</p>
                </div>
              </div>
              <div className="flex gap-3 border border-orange-500/40 rounded-xl p-4 shadow-[0_0_12px_rgba(249,115,22,0.15)] transition-all duration-300 cursor-pointer hover:border-orange-400/70 hover:shadow-[0_0_20px_rgba(249,115,22,0.35)] hover:scale-[1.02] active:scale-[0.98]">
                <span className="text-primary text-xl font-bold shrink-0">✓</span>
                <div>
                  <h3 className="font-bold mb-1">Conocé tus herramientas</h3>
                  <p className="text-sm text-muted-foreground">
                    Familiarizate con tu equipo de trabajo y conocé cuáles son los esenciales para operar
                  </p>
                </div>
              </div>
            </div>

        {/* Video */}
        <div className="relative mb-8">
          <div className="aspect-video rounded-2xl bg-muted overflow-hidden relative">
            <div className={`absolute inset-0 transition-opacity duration-700 ${showVideo ? 'opacity-0' : 'opacity-100'}`}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tapa%20base.jpeg-2UDmiq1oDhZowi7Q1PDQEBjFErZRwX.png"
                alt="Herramientas profesionales de cerrajería"
                fill
                className="object-cover"
                priority
              />
            </div>
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
          </div>
        </div>

        <h3 id="resultado-ingresos" className="text-primary font-bold text-3xl font-[family-name:var(--font-wolfpack)]">Tabla de precios</h3>

        <div className="mt-6 space-y-6">
          {tablasPrecio.map((tabla) => (
            <div key={tabla.titulo} className={`rounded-xl border ${tabla.borderColor} overflow-hidden`}>
              <div className={`${tabla.headerBg} px-4 py-3`}>
                <h3 className={`font-bold ${tabla.headerText}`}>{tabla.titulo}</h3>
              </div>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-white/5">
                    <th className="text-left py-3 px-4 text-orange-400 font-bold text-xs uppercase tracking-wider border-b border-border">Servicio</th>
                    <th className="text-right py-3 px-4 text-orange-400 font-bold text-xs uppercase tracking-wider border-b border-border">Precio</th>
                  </tr>
                </thead>
                <tbody>
                  {tabla.servicios.map((item, index) => (
                    <tr key={index} className="border-b border-border/40 last:border-b-0 hover:bg-white/5 transition-colors">
                      <td className="py-3 px-4">
                        <span className="text-foreground">{item.servicio}</span>
                        <span className="block text-xs text-muted-foreground mt-0.5">{item.franja}</span>
                      </td>
                      <td className="py-3 px-4 font-bold text-primary text-right align-top text-base">{item.precio}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
          <p className="text-xs text-muted-foreground text-center">* Precios de referencia del mercado argentino</p>
        </div>
      </div>
    </section>
  )
}
