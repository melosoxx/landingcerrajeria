"use client";

import { useState } from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/course/section-heading";
import { ModuleCard } from "@/components/course/module-card";
import { SupplementarySection } from "@/components/course/supplementary-section";
import { VideoSection } from "@/components/course/video-section";
import { GraduationCap, FolderOpen } from "lucide-react";
import { modules, supplementary, type CourseItem } from "@/lib/course-content";

export default function MaterialPage() {
  const [loadingId, setLoadingId] = useState<string | null>(null);

  async function handleOpenPdf(item: CourseItem) {
    setLoadingId(item.id);
    const res = await fetch(`/api/course/pdf/${item.id}`);
    const data = await res.json();
    setLoadingId(null);
    if (data.url) window.open(data.url, "_blank");
  }

  return (
    <>
      {/* Banner modo libre */}
      <div className="border-b border-border/50 bg-card/40 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-sm">
            <FolderOpen className="h-4 w-4 text-primary shrink-0" />
            <span className="text-muted-foreground">
              <span className="font-semibold text-foreground">Modo libre</span> — Accedés a todo el material pero no acumulás puntos ni podés obtener el certificado.
            </span>
          </div>
          <Link
            href="/contenidos"
            className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline shrink-0"
          >
            <GraduationCap className="h-3.5 w-3.5" />
            Ir al modo certificación →
          </Link>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-4 py-8 md:py-16 space-y-10 md:space-y-20">

        {/* Módulos */}
        <section>
          <SectionHeading>Módulos del Curso</SectionHeading>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
            {modules.map((mod) => (
              <div key={mod.id} className="relative">
                <ModuleCard
                  module={mod}
                  status="in_progress"
                  completedTaskCount={0}
                  totalTaskCount={3}
                  onOpen={handleOpenPdf}
                />
                {loadingId === mod.id && (
                  <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-background/70 backdrop-blur-sm">
                    <span className="text-xs text-muted-foreground animate-pulse">Cargando...</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Material complementario */}
        <section>
          <SectionHeading>Material Complementario</SectionHeading>
          <SupplementarySection items={supplementary} onOpen={handleOpenPdf} />
        </section>

        {/* Videos */}
        <section>
          <SectionHeading>Prácticas Grabadas</SectionHeading>
          <VideoSection />
        </section>

      </main>
    </>
  );
}
