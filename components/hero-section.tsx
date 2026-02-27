"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"


export default function HeroSection() {
  const handleCTA = () => {
    const offerSection = document.querySelector('[data-section="offer"]')
    offerSection?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const handleScrollToPrecios = () => {
    const trigger = document.querySelector('[data-accordion-trigger="precios"]') as HTMLElement
    trigger?.scrollIntoView({ behavior: "smooth", block: "center" })

    setTimeout(() => {
      if (trigger && trigger.getAttribute('data-state') === 'closed') {
        trigger.click()
      }
    }, 800)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* Background image */}
      <Image
        src="/background.png"
        alt=""
        fill
        className="object-cover"
        priority
      />

      {/* Glass/blur overlay */}
      <div className="absolute inset-0 backdrop-blur-sm bg-background/60 z-[1]" />

      {/* Degradé inferior para transición suave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background z-[2]" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Attention grabber */}
        <p className="font-semibold text-orange-500 text-sm tracking-wider mb-2.5 mt-2.5">TU PRÓXIMO PASO</p>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-7xl lg:text-8xl font-bold leading-tight text-balance animate-fade-in-up mb-2.5">
          Convertite en <span className="text-primary">Cerrajero Certificado</span>
        </h1>

        {/* Subtítulo */}
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-4 animate-fade-in-up font-sans">
          El manual que usan los cerrajeros que facturan <span className="text-primary font-semibold">$200.000 por servicio</span><br />
          y que nadie te enseña en ningún curso.
        </p>

        {/* Imagen de portada con glow naranja centrado */}
        <div className="mt-2 -mb-2 flex justify-center animate-fade-in-up relative">
          {/* Glow naranja centrado detrás del ebook */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-80 h-80 bg-orange-500 rounded-full blur-3xl animate-glow-bg"></div>
          </div>
          <Image
            src="/mockups_nobackground.png"
            alt="Portada del curso de cerrajería"
            width={500}
            height={400}
            className="relative z-10 drop-shadow-2xl max-w-[280px] sm:max-w-[320px] h-auto animate-float"
          />
        </div>

        {/* Estrellas */}
        <div className="flex justify-center gap-1 mb-4 animate-fade-in-up">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center gap-4 justify-center animate-fade-in-up mb-6">
          <Button
            onClick={handleScrollToPrecios}
            className="py-3 px-6 text-sm font-semibold bg-primary hover:bg-primary/85 text-primary-foreground rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 font-sans"
          >
            ¿Cuánto gana un cerrajero?
          </Button>
          <Button
            onClick={handleCTA}
            className="relative overflow-hidden font-bold text-white text-xl sm:text-2xl tracking-widest py-8 px-14 sm:px-20 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 animate-glow-pulse bg-orange-500 hover:bg-orange-600"
          >
            ACCEDER AHORA
          </Button>
        </div>

      </div>
    </section>
  )
}
