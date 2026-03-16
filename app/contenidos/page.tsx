"use client";

import { useState } from "react";
import { CourseHero } from "@/components/course/course-hero";
import { SectionHeading } from "@/components/course/section-heading";
import { ModuleGrid } from "@/components/course/module-grid";
import { SupplementarySection } from "@/components/course/supplementary-section";
import { VideoSection } from "@/components/course/video-section";
import { PdfViewerModal } from "@/components/course/pdf-viewer-modal";
import { modules, supplementary, type CourseItem } from "@/lib/course-content";

export default function ContenidosPage() {
  const [openItem, setOpenItem] = useState<CourseItem | null>(null);

  return (
    <>
      <CourseHero />

      <main className="mx-auto max-w-6xl px-4 py-8 md:py-16 space-y-10 md:space-y-20">
        <section>
          <SectionHeading>Módulos del Curso</SectionHeading>
          <ModuleGrid modules={modules} onOpen={setOpenItem} />
        </section>

        <section>
          <SectionHeading>Material Complementario</SectionHeading>
          <SupplementarySection items={supplementary} onOpen={setOpenItem} />
        </section>

        <section>
          <SectionHeading>Prácticas Grabadas</SectionHeading>
          <VideoSection />
        </section>
      </main>

      <PdfViewerModal item={openItem} onClose={() => setOpenItem(null)} />
    </>
  );
}
