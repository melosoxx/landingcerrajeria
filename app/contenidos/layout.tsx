"use client";

import { useEffect, useState } from "react";
import { ProgressProvider, useProgressContext } from "@/lib/context/progress-context";
import { LmsNav } from "@/components/course/lms-nav";
import { createClient } from "@/lib/supabase/client";

function LmsShell({ children }: { children: React.ReactNode }) {
  const { completionPct, totalPoints, isLoading } = useProgressContext();
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => {
      setUserEmail(data.user?.email ?? "");
    });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <LmsNav
        userEmail={userEmail}
        completionPct={isLoading ? 0 : completionPct}
        totalPoints={isLoading ? 0 : totalPoints}
      />
      {children}
    </div>
  );
}

export default function ContenidosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProgressProvider>
      <LmsShell>{children}</LmsShell>
    </ProgressProvider>
  );
}
