import { BookOpen, FileText, Video } from "lucide-react";

export function CourseHero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/course-background.webp')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 backdrop-blur-sm" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.88_0.2_102/0.06)_0%,transparent_70%)]" />
      <div className="relative mx-auto max-w-5xl px-4 py-10 md:py-24 text-center">
        <h1 className="font-[family-name:var(--font-wolfpack)] text-[1.75rem] sm:text-4xl md:text-6xl tracking-wide text-foreground animate-fade-in-up drop-shadow-[0_0_25px_oklch(0.88_0.2_102/0.3)]">
          Academia del Cerrajero
        </h1>
        <div className="mx-auto mt-3 md:mt-4 h-1 w-20 md:w-24 rounded-full bg-primary animate-fade-in-up shadow-[0_0_10px_oklch(0.88_0.2_102/0.5)]" />
        <p className="mt-4 md:mt-5 max-w-2xl mx-auto text-base md:text-xl text-foreground/80 leading-relaxed animate-fade-in-up [animation-delay:150ms] [animation-fill-mode:backwards]">
          Bienvenido a tu espacio de formación profesional. Aquí vas a encontrar todos los contenidos que necesitás para dar tus primeros pasos en el mundo de la cerrajería y empezar a realizar tus propios servicios con confianza.
        </p>

        <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-5 animate-fade-in-up [animation-delay:300ms] [animation-fill-mode:backwards]">
          <div className="flex items-center gap-2.5 rounded-xl border border-border/50 bg-card/60 backdrop-blur-md px-4 py-2.5 md:px-5 md:py-3 shadow-[0_0_15px_oklch(0.88_0.2_102/0.05)] transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_20px_oklch(0.75_0.18_55/0.15)]">
            <BookOpen className="h-5 w-5 text-primary shrink-0" />
            <span className="text-sm text-muted-foreground">
              <strong className="text-foreground">13</strong> Módulos
            </span>
          </div>
          <div className="flex items-center gap-2.5 rounded-xl border border-border/50 bg-card/60 backdrop-blur-md px-4 py-2.5 md:px-5 md:py-3 shadow-[0_0_15px_oklch(0.88_0.2_102/0.05)] transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_20px_oklch(0.75_0.18_55/0.15)]">
            <FileText className="h-5 w-5 text-primary shrink-0" />
            <span className="text-sm text-muted-foreground">
              <strong className="text-foreground">3</strong> Guías Extra
            </span>
          </div>
          <div className="flex items-center gap-2.5 rounded-xl border border-border/50 bg-card/60 backdrop-blur-md px-4 py-2.5 md:px-5 md:py-3 shadow-[0_0_15px_oklch(0.88_0.2_102/0.05)] transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_20px_oklch(0.75_0.18_55/0.15)]">
            <Video className="h-5 w-5 text-primary shrink-0" />
            <span className="text-sm text-muted-foreground">
              <strong className="text-foreground">+4hs</strong> de Prácticas
            </span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}
