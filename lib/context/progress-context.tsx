"use client";

import { createContext, useContext, type ReactNode } from "react";
import { useProgress, type UseProgressReturn } from "@/lib/hooks/use-progress";

const ProgressContext = createContext<UseProgressReturn | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const progress = useProgress();
  return (
    <ProgressContext.Provider value={progress}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgressContext(): UseProgressReturn {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgressContext must be inside ProgressProvider");
  return ctx;
}
