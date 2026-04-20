"use client";

import { Award } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CertificateButtonProps {
  completionPct: number;
}

export function CertificateButton({ completionPct }: CertificateButtonProps) {
  const isEnabled = completionPct >= 100;

  function handleDownload() {
    window.open("/api/course/certificate", "_blank");
  }

  return (
    <Button
      onClick={handleDownload}
      disabled={!isEnabled}
      variant="default"
      className="gap-2"
      title={
        isEnabled
          ? "Descargar certificado"
          : "Completá todos los módulos para desbloquear el certificado"
      }
    >
      <Award className="h-4 w-4" />
      Descargar Certificado
    </Button>
  );
}
