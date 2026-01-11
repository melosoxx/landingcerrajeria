"use client"

export default function ProblemSection() {
  const problems = [
    {
      icon: "💼",
      title: "Trabajo inestable",
      description: "Depender de un jefe, horarios fijos, sueldos que no acompañan la inflación.",
    },
    {
      icon: "📉",
      title: "Ingresos limitados",
      description: "Cobrar por horas en un mundo donde otros ganan por resolver urgencias.",
    },
    {
      icon: "⏰",
      title: "Sin libertad",
      description: "Trabajar 8 horas sin poder elegir cuándo, dónde, ni cuánto cobrar.",
    },
  ]

  return (
    <section className="sm:py-24 px-4 sm:px-6 lg:px-8 py-5 bg-sidebar-border">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance mt-0">El problema que todos enfrentan</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto my-0">
            Trabajas duro pero no llega. Los gastos crecen, el sueldo no. Y lo peor: no tenés control sobre tu futuro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((item, index) => (
            <div
              key={index}
              className="p-8 bg-background/50 rounded-xl border border-border hover:border-primary/30 transition-colors"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
