import Image from "next/image";
import type { ModuleItem } from "@/lib/course-content";

interface ModuleCardProps {
  module: ModuleItem;
  onOpen: (item: ModuleItem) => void;
}

export function ModuleCard({ module, onOpen }: ModuleCardProps) {
  return (
    <button
      onClick={() => onOpen(module)}
      className="group text-left w-full rounded-2xl bg-card border border-border/50 p-2 sm:p-3 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_oklch(0.75_0.18_55/0.15)] hover:scale-[1.02] cursor-pointer"
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-secondary">
        <Image
          src={module.coverPath}
          alt={module.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 25vw"
        />
        <div className="absolute top-2 left-2 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-bold shadow-lg">
          {module.moduleNumber}
        </div>
      </div>
      <h3 className="mt-2 sm:mt-3 text-sm font-semibold text-foreground leading-tight">
        {module.title}
      </h3>
      <p className="mt-1 hidden sm:block text-xs text-muted-foreground line-clamp-2">
        {module.description}
      </p>
    </button>
  );
}
