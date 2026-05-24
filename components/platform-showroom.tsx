"use client";

import { GraduationCap, FolderOpen } from "lucide-react";
import { ModuleCard } from "@/components/course/module-card";
import { modules } from "@/lib/course-content";

export default function PlatformShowroom() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-6xl px-4 space-y-10">

        {/* Encabezado */}
        <div className="text-center space-y-3">
          <h2 className="font-wolfpack text-3xl md:text-5xl tracking-wide text-foreground">
            Así es la plataforma
          </h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-primary" />
          <p className="text-foreground/90 max-w-xl mx-auto text-sm md:text-base drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
            Al adquirir el curso accedés a una plataforma de formación completa. Dos modos de estudio, 13 módulos progresivos y certificado oficial al finalizar.
          </p>
        </div>

        {/* Dos modos */}
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <div className="rounded-2xl border border-primary/30 bg-primary/10 px-5 py-4 text-left space-y-2">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary shrink-0" />
              <span className="text-sm font-semibold text-foreground">Para obtener el Certificado</span>
            </div>
            <p className="text-xs text-foreground/80 leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
              Completá los 13 módulos respondiendo los cuestionarios con un mínimo del 80% de aciertos. Al finalizar, podrás descargar tu certificado oficial de cerrajero.
            </p>
          </div>

          <div className="rounded-2xl border border-border/50 bg-card/60 px-5 py-4 text-left space-y-2">
            <div className="flex items-center gap-2">
              <FolderOpen className="h-5 w-5 text-primary shrink-0" />
              <span className="text-sm font-semibold text-foreground">Solo estudiar el material</span>
            </div>
            <p className="text-xs text-foreground/80 leading-relaxed drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
              Por haber adquirido el curso tenés acceso completo a todos los PDFs y videos, sin cuestionarios ni restricciones.
            </p>
          </div>
        </div>

        {/* Grid de módulos — todos bloqueados (solo visual) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 [&_button]:opacity-100!">
          {modules.map((mod) => (
            <ModuleCard
              key={mod.id}
              module={mod}
              status="locked"
              completedTaskCount={0}
              totalTaskCount={3}
              onOpen={() => {}}
            />
          ))}
        </div>

      </div>
    </section>
  );
}