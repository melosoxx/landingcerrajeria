import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/supabase/types";

// Usa service role para bypassear RLS en la creación inicial del enrollment
function getServiceClient() {
  return createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } }
  );
}

export async function POST(request: Request) {
  const { userId, fullName } = await request.json();

  if (!userId || !fullName) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const supabase = getServiceClient();

  const { error } = await supabase.from("enrollments").upsert(
    { user_id: userId, full_name: fullName.trim() },
    { onConflict: "user_id", ignoreDuplicates: true }
  );

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
