"use client";

import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";

interface CompletionCelebrationProps {
  show: boolean;
  onDone: () => void;
  message?: string;
}

const CONFETTI_COLORS = [
  "oklch(0.88 0.2 102)",  // primary yellow
  "oklch(0.65 0.2 142)",  // green
  "oklch(0.98 0 0)",      // white
  "oklch(0.75 0.18 55)",  // gold
];

export function CompletionCelebration({
  show,
  onDone,
  message = "¡Módulo completado!",
}: CompletionCelebrationProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!show) return;
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
      onDone();
    }, 2500);
    return () => clearTimeout(timer);
  }, [show, onDone]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center">
      {/* Overlay semitransparente */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />

      {/* Contenido central */}
      <div className="relative flex flex-col items-center gap-4 animate-bounce">
        <CheckCircle className="h-20 w-20 text-primary drop-shadow-[0_0_20px_oklch(0.88_0.2_102)]" />
        <p className="text-2xl font-bold text-foreground">{message}</p>
      </div>

      {/* Confetti CSS */}
      {Array.from({ length: 20 }).map((_, i) => (
        <span
          key={i}
          className="absolute top-0 rounded-sm"
          style={{
            left: `${5 + (i * 4.5) % 90}%`,
            width: `${8 + (i % 4) * 3}px`,
            height: `${8 + (i % 3) * 4}px`,
            backgroundColor: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
            animation: `confettiFall ${1.2 + (i % 5) * 0.3}s ease-in ${(i % 7) * 0.15}s forwards`,
            opacity: 0,
          }}
        />
      ))}

      <style>{`
        @keyframes confettiFall {
          0%   { transform: translateY(-20px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(${360}deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
