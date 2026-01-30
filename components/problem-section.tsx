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
    <section className="sm:py-24 px-4 sm:px-6 lg:px-8 bg-sidebar-border py-10 my-0.5 opacity-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          
          
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
