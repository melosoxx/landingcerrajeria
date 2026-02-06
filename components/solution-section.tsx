"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const preciosServicios = [
  { categoria: "Programado", servicio: "Apertura Simple (Turno previo)", franja: "Mañana (08:00 a 13:00)", precio: "$60.000", observaciones: "El servicio más económico." },
  { categoria: "Programado", servicio: "Apertura Simple (Turno previo)", franja: "Tarde (13:00 a 19:00)", precio: "$75.000", observaciones: "Mantenimiento estándar." },
  { categoria: "Programado", servicio: "Cambio de combinación / cilindro", franja: "Mañana / Tarde", precio: "$50.000", observaciones: "No incluye costo de materiales." },
  { categoria: "Programado", servicio: "Apertura de vehículo", franja: "Mañana / Tarde", precio: "$85.000", observaciones: "Sin daños en la unidad." },
  { categoria: "Emergencia", servicio: "Apertura de Urgencia \"After Hour\"", franja: "Tarde/Noche (19:00 a 23:00)", precio: "$130.000", observaciones: "Respuesta inmediata." },
  { categoria: "Emergencia", servicio: "Apertura Nocturna Especial", franja: "Noche (23:00 a 06:00)", precio: "$180.000", observaciones: "Tarifa máxima por nocturnidad." },
  { categoria: "Emergencia", servicio: "Apertura de Urgencia (Madrugada)", franja: "Pre-alba (06:00 a 08:00)", precio: "$150.000", observaciones: "Servicio antes de horario comercial." },
  { categoria: "Emergencia", servicio: "Urgencias Domingos y Feriados", franja: "24 Horas", precio: "$160.000", observaciones: "Tarifa plana por día no laborable." },
  { categoria: "Alta Seguridad", servicio: "Apertura Puerta Blindada / Judicial", franja: "Cualquier horario", precio: "$230.000", observaciones: "Requiere herramientas complejas." },
]

const getCategoriaStyle = (categoria: string) => {
  switch (categoria) {
    case "Programado":
      return "bg-green-500/20 text-green-400 border-green-500/30"
    case "Emergencia":
      return "bg-red-500/20 text-red-400 border-red-500/30"
    case "Alta Seguridad":
      return "bg-blue-500/20 text-blue-400 border-blue-500/30"
    default:
      return "bg-muted text-muted-foreground"
  }
}

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
                  <h3 className="font-bold mb-1">Domina cambios de combinación y tipos de cerraduras</h3>
                  <p className="text-sm text-muted-foreground">Métodos rápidos y seguros para todos los modelos</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-primary text-xl font-bold shrink-0">✓</span>
                <div>
                  <h3 className="font-bold mb-1">Conocé tus herramientas</h3>
                  <p className="text-sm text-muted-foreground">
                    Familiarizate con tu equipo de trabajo y conocé cuáles son los esenciales para operar
                  </p>
                </div>
              </div>
            </div>

            <p id="resultado-ingresos" className="text-primary font-bold text-3xl">↓ Resultado: Generá ingresos desde tu primer trabajo</p>

            <Accordion type="single" collapsible className="mt-6">
              <AccordionItem value="precios" className="border border-border/50 rounded-xl bg-card/50">
                <AccordionTrigger data-accordion-trigger="precios" className="px-4 hover:no-underline">
                  <span className="flex items-center gap-2 text-base font-semibold">
                    📋 Ver tabla de precios de referencia
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-4">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border/50">
                          <th className="text-left py-3 px-2 text-primary font-semibold">Categoría</th>
                          <th className="text-left py-3 px-2 text-primary font-semibold">Servicio</th>
                          <th className="text-left py-3 px-2 text-primary font-semibold">Franja Horaria</th>
                          <th className="text-left py-3 px-2 text-primary font-semibold">Precio</th>
                          <th className="text-left py-3 px-2 text-primary font-semibold hidden sm:table-cell">Observaciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {preciosServicios.map((item, index) => (
                          <tr key={index} className="border-b border-border/30 last:border-b-0">
                            <td className="py-3 px-2">
                              <span className={`text-xs px-2 py-1 rounded-full border ${getCategoriaStyle(item.categoria)}`}>
                                {item.categoria}
                              </span>
                            </td>
                            <td className="py-3 px-2 text-foreground">{item.servicio}</td>
                            <td className="py-3 px-2 text-muted-foreground">{item.franja}</td>
                            <td className="py-3 px-2 font-semibold text-primary">{item.precio}</td>
                            <td className="py-3 px-2 text-muted-foreground text-xs hidden sm:table-cell">{item.observaciones}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-muted-foreground mt-4 text-center">* Precios de referencia del mercado argentino</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
