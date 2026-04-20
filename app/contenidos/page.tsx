"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { CourseHero } from "@/components/course/course-hero";
import { SectionHeading } from "@/components/course/section-heading";
import { ModuleCard } from "@/components/course/module-card";
import { useProgressContext } from "@/lib/context/progress-context";
import { lmsModules } from "@/lib/lms-content";
import { modules } from "@/lib/course-content";
import { CertificateButton } from "@/components/course/certificate-button";
import { GraduationCap, FolderOpen } from "lucide-react";

export default function ContenidosPage() {
  const router = useRouter();
  const { taskProgress, isModuleLocked, completionPct, isLoading } =
    useProgressContext();

  function getModuleStatus(moduleId: string) {
    if (isModuleLocked(moduleId)) return "locked" as const;
    const lmsMod = lmsModules.find((m) => m.id === moduleId);
    if (!lmsMod) return "in_progress" as const;
    const allDone = lmsMod.tasks.every((t) => taskProgress.get(t.id));
    return allDone ? "completed" as const : "in_progress" as const;
  }

  function getCompletedCount(moduleId: string): number {
    const lmsMod = lmsModules.find((m) => m.id === moduleId);
    if (!lmsMod) return 0;
    return lmsMod.tasks.filter((t) => taskProgress.get(t.id)).length;
  }

  return (
    <>
      <CourseHero />

      {/* Banner modo certificación */}
      <div className="border-b border-border/50 bg-card/40 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-sm">
            <GraduationCap className="h-4 w-4 text-primary shrink-0" />
            <span className="text-muted-foreground">
              <span className="font-semibold text-foreground">Modo certificación</span> — Completá los cuestionarios de cada módulo para obtener tu certificado oficial.
            </span>
          </div>
          <Link
            href="/contenidos/material"
            className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline shrink-0"
          >
            <FolderOpen className="h-3.5 w-3.5" />
            Ver todo el material sin cuestionarios →
          </Link>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-4 py-8 md:py-16 space-y-10 md:space-y-20">
        <section>
          <div className="flex items-center justify-between mb-6">
            <SectionHeading>Módulos del Curso</SectionHeading>
            {!isLoading && completionPct === 100 && (
              <CertificateButton completionPct={completionPct} />
            )}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
            {modules.map((mod) => {
              const status = isLoading ? "in_progress" : getModuleStatus(mod.id);
              const completedCount = isLoading ? 0 : getCompletedCount(mod.id);
              return (
                <ModuleCard
                  key={mod.id}
                  module={mod}
                  status={status}
                  completedTaskCount={completedCount}
                  totalTaskCount={3}
                  onOpen={() => router.push(`/contenidos/${mod.id}`)}
                />
              );
            })}
          </div>
        </section>

        {!isLoading && completionPct === 100 && (
          <section className="text-center py-8 space-y-4 border border-primary/20 rounded-2xl bg-primary/5">
            <p className="text-3xl">🎓</p>
            <h2 className="text-xl font-bold text-foreground">
              ¡Completaste el curso!
            </h2>
            <p className="text-muted-foreground text-sm">
              Descargá tu certificado oficial de cerrajería profesional.
            </p>
            <div className="flex justify-center">
              <CertificateButton completionPct={completionPct} />
            </div>
          </section>
        )}
      </main>
    </>
  );
}
