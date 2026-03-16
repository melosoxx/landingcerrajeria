"use client";

import { useEffect, useCallback, useState } from "react";
import { X, Download, ExternalLink } from "lucide-react";
import type { CourseItem } from "@/lib/course-content";

interface PdfViewerModalProps {
  item: CourseItem | null;
  onClose: () => void;
}

function getTitle(item: CourseItem): string {
  if (item.category === "module") {
    return `Módulo ${item.moduleNumber}: ${item.title}`;
  }
  return item.title;
}

export function PdfViewerModal({ item, onClose }: PdfViewerModalProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!item) return;
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [item, handleKeyDown]);

  if (!item) return null;

  const title = getTitle(item);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative z-10 mx-4 flex h-[95vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-4 py-3 md:px-6">
          <h2 className="text-sm md:text-base font-semibold text-foreground truncate pr-4">
            {title}
          </h2>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={item.pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-lg bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:bg-muted"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Abrir</span>
            </a>
            <a
              href={item.pdfPath}
              download
              className="flex items-center gap-1.5 rounded-lg bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:bg-muted"
            >
              <Download className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Descargar</span>
            </a>
            <button
              onClick={onClose}
              className="flex items-center justify-center rounded-lg bg-secondary p-1.5 text-secondary-foreground transition-colors hover:bg-muted cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden">
          {isMobile ? (
            <div className="flex h-full flex-col items-center justify-center gap-6 p-8 text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.coverPath}
                alt={title}
                className="w-48 rounded-xl shadow-lg"
              />
              <p className="text-sm text-muted-foreground max-w-xs">
                Para una mejor experiencia, abrí el PDF directamente en tu
                navegador.
              </p>
              <a
                href={item.pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <ExternalLink className="h-4 w-4" />
                Abrir PDF
              </a>
              <a
                href={item.pdfPath}
                download
                className="flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                <Download className="h-4 w-4" />
                Descargar PDF
              </a>
            </div>
          ) : (
            <iframe
              src={`${item.pdfPath}#toolbar=1&navpanes=0&scrollbar=1`}
              className="h-full w-full"
              title={title}
            />
          )}
        </div>
      </div>
    </div>
  );
}
