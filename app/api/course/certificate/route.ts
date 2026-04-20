import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";

function generateCertificateId(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let id = "CERR-";
  for (let i = 0; i < 8; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
    if (i === 3) id += "-";
  }
  return id;
}

export async function GET() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const db = supabase as any;

  const { data: enrollment } = await db
    .from("enrollments")
    .select("full_name, completed_at, certificate_id")
    .eq("user_id", user.id)
    .maybeSingle() as {
      data: {
        full_name: string;
        completed_at: string | null;
        certificate_id: string | null;
      } | null;
    };

  if (!enrollment?.completed_at) {
    return NextResponse.json(
      { error: "Curso no completado aún" },
      { status: 403 }
    );
  }

  let certificateId = enrollment.certificate_id;
  if (!certificateId) {
    certificateId = generateCertificateId();
    await db
      .from("enrollments")
      .update({ certificate_id: certificateId })
      .eq("user_id", user.id);
  }

  const completionDate = new Date(enrollment.completed_at).toLocaleDateString(
    "es-AR",
    { day: "numeric", month: "long", year: "numeric" }
  );

  // Generar HTML del certificado para renderizar como PDF
  // Nota: @react-pdf/renderer requiere entorno Node.js específico.
  // En v1 se devuelve un HTML imprimible desde el navegador.
  // Para PDF real: instalar @react-pdf/renderer y usar renderToBuffer().
  const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Certificado — Academia del Cerrajero</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;700&display=swap');
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Geist', sans-serif;
      background: #0d0d0d;
      color: #f5f5f5;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }
    .cert {
      border: 2px solid #c9b84c;
      border-radius: 16px;
      padding: 3rem 4rem;
      max-width: 800px;
      width: 100%;
      text-align: center;
      background: #111;
    }
    .academy { color: #c9b84c; font-size: 0.85rem; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 2rem; }
    h1 { font-size: 2.4rem; font-weight: 700; color: #f5f5f5; margin-bottom: 1rem; }
    .subtitle { color: #999; font-size: 0.9rem; margin-bottom: 2rem; }
    .student { font-size: 2rem; font-weight: 700; color: #c9b84c; margin: 1.5rem 0; }
    .course { font-size: 1.1rem; color: #f5f5f5; margin-bottom: 2rem; }
    .meta { font-size: 0.8rem; color: #666; margin-top: 2.5rem; border-top: 1px solid #222; padding-top: 1.5rem; }
    @media print {
      body { background: white; color: #111; }
      .cert { background: white; border-color: #c9b84c; }
      .student { color: #8B6914; }
      .academy { color: #8B6914; }
      .meta { color: #666; border-color: #eee; }
    }
  </style>
</head>
<body>
  <div class="cert">
    <p class="academy">Academia del Cerrajero · Roberto Pugliese</p>
    <h1>Certificado de Finalización</h1>
    <p class="subtitle">Se certifica que</p>
    <p class="student">${enrollment.full_name}</p>
    <p class="course">completó exitosamente el curso<br><strong>Cerrajería Profesional</strong></p>
    <p style="color:#999;font-size:0.9rem;">Fecha de finalización: ${completionDate}</p>
    <div class="meta">
      <p>ID de validación: <strong>${certificateId}</strong></p>
      <p style="margin-top:0.5rem;">Este certificado acredita la finalización de todos los módulos y evaluaciones del curso.</p>
      <button onclick="window.print()" style="margin-top:1.5rem;padding:0.6rem 1.5rem;background:#c9b84c;color:#111;border:none;border-radius:8px;font-weight:700;cursor:pointer;font-size:0.9rem;">
        Imprimir / Guardar como PDF
      </button>
    </div>
  </div>
</body>
</html>`;

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}
