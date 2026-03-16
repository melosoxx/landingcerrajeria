import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-6 md:mb-8", className)}>
      <h2 className="font-[family-name:var(--font-wolfpack)] text-2xl sm:text-3xl md:text-4xl text-foreground tracking-wide">
        {children}
      </h2>
      <div className="mt-3 h-1 w-16 rounded-full bg-primary" />
    </div>
  );
}
