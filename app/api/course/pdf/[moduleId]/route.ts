import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { getModuleById } from "@/lib/lms-content";
import { modules, supplementary } from "@/lib/course-content";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ moduleId: string }> }
) {
  const { moduleId } = await params;

  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Buscar el PDF tanto en módulos del curso como en material complementario
  const courseModule = modules.find((m) => m.id === moduleId);
  const supplementaryItem = supplementary.find((s) => s.id === moduleId);
  const item = courseModule ?? supplementaryItem;

  if (!item) {
    return NextResponse.json({ error: "Module not found" }, { status: 404 });
  }

  // Si los PDFs están en Supabase Storage, usar signed URL.
  // Si todavía están en /public (modo de transición), devolver la ruta estática.
  const storageFileName = item.pdfPath.replace("/course/pdfs/", "");

  const { data: signedUrlData, error } = await supabase.storage
    .from("course-pdfs")
    .createSignedUrl(storageFileName, 3600); // 1 hora de validez

  if (error || !signedUrlData) {
    // Fallback: si el archivo aún no está en Storage, usar la ruta pública.
    // Quitar este fallback una vez que todos los PDFs estén subidos a Storage.
    return NextResponse.json({ url: item.pdfPath });
  }

  return NextResponse.json({ url: signedUrlData.signedUrl });
}
