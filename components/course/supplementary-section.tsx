import Image from "next/image";
import { LockKeyhole, BookOpen, Map } from "lucide-react";
import type { SupplementaryItem } from "@/lib/course-content";

const iconMap = {
  "lock-keyhole": LockKeyhole,
  "book-open": BookOpen,
  map: Map,
} as const;

interface SupplementarySectionProps {
  items: SupplementaryItem[];
  onOpen: (item: SupplementaryItem) => void;
}

export function SupplementarySection({
  items,
  onOpen,
}: SupplementarySectionProps) {
  return (
    <div className="grid gap-4">
      {items.map((item) => {
        const Icon = iconMap[item.icon];
        return (
          <button
            key={item.id}
            onClick={() => onOpen(item)}
            className="group flex items-center gap-3 md:gap-6 rounded-2xl bg-card border border-border/50 p-3 md:p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_oklch(0.75_0.18_55/0.15)] cursor-pointer text-left w-full"
          >
            <div className="relative h-16 w-12 md:h-24 md:w-20 shrink-0 overflow-hidden rounded-xl bg-secondary">
              <Image
                src={item.coverPath}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="80px"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <Icon className="h-4 w-4 text-primary shrink-0" />
                <h3 className="text-sm md:text-base font-semibold text-foreground truncate">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
