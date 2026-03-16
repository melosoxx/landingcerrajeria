import type { ModuleItem } from "@/lib/course-content";
import { ModuleCard } from "./module-card";

interface ModuleGridProps {
  modules: ModuleItem[];
  onOpen: (item: ModuleItem) => void;
}

export function ModuleGrid({ modules, onOpen }: ModuleGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
      {modules.map((m) => (
        <ModuleCard key={m.id} module={m} onOpen={onOpen} />
      ))}
    </div>
  );
}
