"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-input">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Preguntas frecuentes</h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
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
