"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const tablasPrecio = [
  {
    titulo: "Programado",
    headerBg: "bg-green-500/20",
    headerText: "text-green-400",
    borderColor: "border-green-500/30",
    servicios: [
      { servicio: "Cambio de combinación", franja: "Mañana / Tarde", precio: "$50.000" },
      { servicio: "Apertura Simple", franja: "Mañana / Tarde", precio: "$75.000" },
      { servicio: "Apertura de vehículo", franja: "Mañana / Tarde", precio: "$85.000" },
    ],
  },
  {
    titulo: "Emergencia",
    headerBg: "bg-red-500/20",
    headerText: "text-red-400",
    borderColor: "border-red-500/30",
    servicios: [
      { servicio: "Apertura Nocturna", franja: "Noche", precio: "$150.000" },
      { servicio: "Apertura Madrugada", franja: "Madrugada", precio: "$180.000" },
    ],
  },
  {
    titulo: "Alta Seguridad",
    headerBg: "bg-blue-500/20",
    headerText: "text-blue-400",
    borderColor: "border-blue-500/30",
    servicios: [
      { servicio: "Puerta Blindada / Judicial", franja: "Full time", precio: "$230.000" },
    ],
  },
]

export default function FaqSection() {
  const faqs = [
    {
      question: "¿Necesito tener herramientas ya?",
      answer:
        "No. El curso te explica exactamente cuáles comprar, dónde, y cuánto gastar. Podés empezar con menos de $50k.",
    },
    {
      question: "¿Cómo accedo al curso?",
      answer:
        "Inmediatamente después de comprar, recibirás acceso por WhatsApp o Google Drive. Sin esperas, comienza ya.",
    },
    {
      question: "¿Hay garantía?",
      answer: "Sí, garantía de 7 días. Si no te satisface, devolución 100% sin preguntas.",
    },
    {
      question: "¿Puedo ver resultados rápido?",
      answer:
        "Muchos estudiantes reportan sus primeros servicios en la primera semana. La demanda de cerrajeros urgentes es constante.",
    },
  ]

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-input font-sans">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Preguntas frecuentes</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem
            value="item-precios"
            className="bg-card rounded-lg border border-border px-6 data-[state=open]:border-primary/50 transition-colors"
          >
            <AccordionTrigger className="py-4 hover:text-primary transition-colors font-semibold">
              ¿Cuánto puede ganar un cerrajero independiente?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <div className="space-y-6 pt-2">
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
            </AccordionContent>
          </AccordionItem>

          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-lg border border-border px-6 data-[state=open]:border-primary/50 transition-colors"
            >
              <AccordionTrigger className="py-4 hover:text-primary transition-colors font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
