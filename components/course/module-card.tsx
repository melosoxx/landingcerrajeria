import Image from "next/image";
import { Lock, CheckCircle } from "lucide-react";
import type { ModuleItem } from "@/lib/course-content";

export type ModuleStatus = "locked" | "in_progress" | "completed";

interface ModuleCardProps {
  module: ModuleItem;
  onOpen: (item: ModuleItem) => void;
  status?: ModuleStatus;
  completedTaskCount?: number;
  totalTaskCount?: number;
}

export function ModuleCard({
  module,
  onOpen,
  status = "in_progress",
  completedTaskCount = 0,
  totalTaskCount = 3,
}: ModuleCardProps) {
  const isLocked = status === "locked";
  const isCompleted = status === "completed";

  return (
    <button
      onClick={() => !isLocked && onOpen(module)}
      disabled={isLocked}
      className={`group text-left w-full rounded-2xl bg-card border border-border/50 p-2 sm:p-3 transition-all duration-300 ${
        isLocked
          ? "cursor-not-allowed opacity-60"
          : "hover:border-primary/30 hover:shadow-[0_0_30px_oklch(0.75_0.18_55/0.15)] hover:scale-[1.02] cursor-pointer"
      } ${isCompleted ? "ring-2 ring-primary/30" : ""}`}
    >
      <div className="relative aspect-3/4 overflow-hidden rounded-xl bg-secondary">
        <Image
          src={module.coverPath}
          alt={module.title}
          fill
          className={`object-cover transition-transform duration-300 ${
            isLocked ? "grayscale" : "group-hover:scale-105"
          }`}
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 25vw"
        />

        {/* Número de módulo */}
        <div className="absolute top-2 left-2 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-bold shadow-lg">
          {module.moduleNumber}
        </div>

        {/* Badge completado */}
        {isCompleted && (
          <div className="absolute top-2 right-2">
            <CheckCircle className="h-6 w-6 text-primary drop-shadow-md fill-background" />
          </div>
        )}

        {/* Overlay bloqueado */}
        {isLocked && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/40">
            <Lock className="h-8 w-8 text-foreground/60" />
          </div>
        )}

        {/* Barra de progreso en el pie de la imagen */}
        {!isLocked && !isCompleted && totalTaskCount > 0 && (
          <div className="absolute bottom-0 left-0 right-0 px-2 pb-2">
            <div className="h-1 rounded-full bg-black/40 overflow-hidden">
              <div
                className="h-full bg-primary rounded-full"
                style={{
                  width: `${(completedTaskCount / totalTaskCount) * 100}%`,
                }}
              />
            </div>
          </div>
        )}
      </div>

      <h3 className="mt-2 sm:mt-3 text-sm font-semibold text-foreground leading-tight">
        {module.title}
      </h3>
      <p className="mt-1 hidden sm:block text-xs text-muted-foreground line-clamp-2">
        {isLocked
          ? "Completá el módulo anterior para desbloquear"
          : isCompleted
          ? `${completedTaskCount}/${totalTaskCount} tareas · Completado`
          : `${completedTaskCount}/${totalTaskCount} tareas`}
      </p>
    </button>
  );
}
