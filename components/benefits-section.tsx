"use client"

export default function BenefitsSection() {
  const benefits = [
    { icon: "💰", title: "Ingresos altísimos", description: "$80k a $300k por servicio según urgencia" },
    { icon: "🕐", title: "Sin horarios", description: "Trabaja cuando quieras, las urgencias no tienen hora" },
    { icon: "📱", title: "Bajo capital inicial", description: "Herramientas esenciales cuestan menos de $50k" },
    { icon: "🎯", title: "Demanda constante", description: "Siempre hay quien necesita un cerrajero urgente" },
    { icon: "🚀", title: "Escalá fácil", description: "Contratá otros cerrajeros y cobrá comisión" },
    { icon: "✨", title: "Libertad total", description: "Sé tu propio jefe, sin clientes, sin obligaciones" },
  ]

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-border">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Por qué esto es mejor que otros oficios</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Datos reales de lo que podés lograr como cerrajero profesional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 hover:bg-card/80 transition-all group"
            >
              <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform">{benefit.icon}</div>
              <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
