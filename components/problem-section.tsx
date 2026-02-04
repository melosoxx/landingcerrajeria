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
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-card to-background overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Este oficio es <span className="text-primary">ideal para vos</span> si experimentaste alguna de estas situaciones
          </h2>
          <p className="text-lg text-muted-foreground">
            ¿Te identificás con alguna?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((item, index) => (
            <div
              key={index}
              className="p-8 bg-card/80 rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center mb-6">
                <span className="text-3xl">{item.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
