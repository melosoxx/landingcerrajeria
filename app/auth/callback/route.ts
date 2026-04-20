import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");

  if (code) {
    const supabase = await createServerSupabaseClient();
    const { data } = await supabase.auth.exchangeCodeForSession(code);

    // Crear enrollment con el nombre guardado en los metadatos del usuario
    if (data.user) {
      const fullName =
        (data.user.user_metadata?.full_name as string | undefined) ?? "";

      if (fullName) {
        await fetch(`${origin}/api/auth/enroll`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId: data.user.id, fullName }),
        });
      }
    }
  }

  return NextResponse.redirect(`${origin}/contenidos`);
}
