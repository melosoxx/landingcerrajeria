"use client"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Martín",
      role: "Buenos Aires",
      text: "En la primera semana ya había sacado $40k de ganancias. El curso es directo, sin relleno. Recomendado.",
      star: 5,
    },
    {
      name: "Javier",
      role: "Córdoba",
      text: "Dejé mi trabajo. Ahora gano en 3 servicios de emergencia lo que ganaba en todo un mes. Cambió mi vida.",
      star: 5,
    },
    {
      name: "Carlos",
      role: "CABA",
      text: "El curso explica todo paso a paso. Las técnicas funcionan. Ya tengo clientes fijos que me llaman.",
      star: 5,
    },
  ]

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-sidebar-border">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="sm:text-5xl font-bold text-balance text-3xl mb-1">Lo que dicen otros cerrajeros</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-8 border border-border hover:border-primary/30 transition-colors px-2"
            >
              <div className="flex gap-1 mb-4">
                {Array(testimonial.star)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-primary text-lg">
                      ★
                    </span>
                  ))}
              </div>
              <p className="text-foreground mb-6 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
