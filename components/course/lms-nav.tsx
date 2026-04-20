"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { LogOut } from "lucide-react";

interface LmsNavProps {
  userEmail: string;
  completionPct: number;
  totalPoints: number;
}

export function LmsNav({ userEmail, completionPct, totalPoints }: LmsNavProps) {
  const router = useRouter();

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between gap-4">
        <span className="font-bold text-primary text-sm sm:text-base shrink-0">
          Academia del Cerrajero
        </span>

        <div className="flex-1 max-w-xs hidden sm:block">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <div className="flex-1 h-1.5 rounded-full bg-border overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-500"
                style={{ width: `${completionPct}%` }}
              />
            </div>
            <span className="shrink-0 font-medium text-foreground">
              {completionPct}%
            </span>
          </div>
          <p className="text-xs text-muted-foreground mt-0.5">
            {totalPoints} pts
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-muted-foreground hidden md:block truncate max-w-[160px]">
            {userEmail}
          </span>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <LogOut className="h-4 w-4" />
            <span className="hidden sm:inline">Salir</span>
          </button>
        </div>
      </div>

      {/* Barra de progreso mobile */}
      <div className="sm:hidden h-1 bg-border">
        <div
          className="h-full bg-primary transition-all duration-500"
          style={{ width: `${completionPct}%` }}
        />
      </div>
    </header>
  );
}
