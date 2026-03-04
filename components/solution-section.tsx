
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

export default function SolutionSection() {
  return (
    <section
      data-section="solution"
      className="pt-16 pb-8 sm:pt-24 sm:pb-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card font-sans"
    >
      <div className="max-w-5xl mx-auto">
        {/* Título y subtítulo arriba del video */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance font-[family-name:var(--font-wolfpack)]">
          Qué incluye el <span className="text-primary">curso</span>
        </h2>

        {/* Video */}
        <div className="relative mb-8">
          <div className="aspect-video rounded-2xl bg-muted overflow-hidden relative">
            <iframe
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] pointer-events-none"
              src="https://www.youtube.com/embed/n1-79BWOzm4?autoplay=1&mute=1&controls=0&loop=1&playlist=n1-79BWOzm4&playsinline=1&rel=0&showinfo=0&modestbranding=1&iv_load_policy=3&disablekb=1"
              allow="autoplay; encrypted-media"
              title="Video de referencia"
            />
          </div>
        </div>

        {/* Chips */}
        <div className="space-y-4 mb-8">
              <div className="flex gap-3 border border-orange-500/40 rounded-xl p-4 bg-gradient-to-r from-orange-500/10 via-orange-500/5 to-transparent shadow-[0_0_12px_rgba(249,115,22,0.15)] transition-all duration-300 cursor-pointer hover:border-orange-400/70 hover:shadow-[0_0_20px_rgba(249,115,22,0.35)] hover:scale-[1.02] active:scale-[0.98]">
                <svg className="shrink-0 text-primary" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 11.9997V9.32968C6 6.01968 8.35 4.65968 11.22 6.31968L13.53 7.65968L15.84 8.99968C18.71 10.6597 18.71 13.3697 15.84 15.0297L13.53 16.3697L11.22 17.7097C8.35 19.3397 6 17.9897 6 14.6697V11.9997Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <h3 className="font-bold mb-1">Aprende a abrir puertas sin dañarlas</h3>
                  <p className="text-sm text-muted-foreground">Técnicas profesionales para todo tipo de cerraduras</p>
                </div>
              </div>
              <div className="flex gap-3 border border-orange-500/40 rounded-xl p-4 bg-gradient-to-r from-orange-500/10 via-orange-500/5 to-transparent shadow-[0_0_12px_rgba(249,115,22,0.15)] transition-all duration-300 cursor-pointer hover:border-orange-400/70 hover:shadow-[0_0_20px_rgba(249,115,22,0.35)] hover:scale-[1.02] active:scale-[0.98]">
                <svg className="shrink-0 text-primary" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 11.9997V9.32968C6 6.01968 8.35 4.65968 11.22 6.31968L13.53 7.65968L15.84 8.99968C18.71 10.6597 18.71 13.3697 15.84 15.0297L13.53 16.3697L11.22 17.7097C8.35 19.3397 6 17.9897 6 14.6697V11.9997Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <h3 className="font-bold mb-1">Domina cambios de combinación y tipos de cerraduras</h3>
                  <p className="text-sm text-muted-foreground">Métodos rápidos y seguros para todos los modelos</p>
                </div>
              </div>
              <div className="flex gap-3 border border-orange-500/40 rounded-xl p-4 bg-gradient-to-r from-orange-500/10 via-orange-500/5 to-transparent shadow-[0_0_12px_rgba(249,115,22,0.15)] transition-all duration-300 cursor-pointer hover:border-orange-400/70 hover:shadow-[0_0_20px_rgba(249,115,22,0.35)] hover:scale-[1.02] active:scale-[0.98]">
                <svg className="shrink-0 text-primary" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 11.9997V9.32968C6 6.01968 8.35 4.65968 11.22 6.31968L13.53 7.65968L15.84 8.99968C18.71 10.6597 18.71 13.3697 15.84 15.0297L13.53 16.3697L11.22 17.7097C8.35 19.3397 6 17.9897 6 14.6697V11.9997Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <h3 className="font-bold mb-1">Conocé tus herramientas</h3>
                  <p className="text-sm text-muted-foreground">
                    Familiarizate con tu equipo de trabajo y conocé cuáles son los esenciales para operar
                  </p>
                </div>
              </div>
            </div>

        <p className="text-lg text-orange-400 mb-8 italic drop-shadow-[0_0_8px_rgba(249,115,22,0.3)]">
          La cerrajería es uno de los oficios con mayor demanda y menos profesionales. Las urgencias no tienen
          horario.
        </p>

        <h3 id="resultado-ingresos" className="text-primary font-bold text-3xl font-[family-name:var(--font-wolfpack)]">Valores de referencia para tus servicios</h3>

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
