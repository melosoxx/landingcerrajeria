import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { getTaskById, TOTAL_TASKS } from "@/lib/lms-content";

export async function POST(request: Request) {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { taskId, moduleId, taskType } = body as {
    taskId: string;
    moduleId: string;
    taskType: string;
  };

  // Validar que la tarea existe y obtener puntos canónicos (anti-tampering)
  const task = getTaskById(taskId);
  if (!task || task.moduleId !== moduleId || task.type !== taskType) {
    return NextResponse.json({ error: "Invalid task" }, { status: 400 });
  }

  const { error } = await supabase.from("task_progress").upsert(
    {
      user_id: user.id,
      module_id: moduleId,
      task_id: taskId,
      task_type: taskType as "pdf" | "video" | "quiz",
      points_earned: task.points,
    },
    { onConflict: "user_id,task_id", ignoreDuplicates: true }
  );

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Verificar si el alumno completó el 100% del curso
  const { count } = await supabase
    .from("task_progress")
    .select("*", { count: "exact", head: true })
    .eq("user_id", user.id);

  if (count === TOTAL_TASKS) {
    await supabase
      .from("enrollments")
      .update({ completed_at: new Date().toISOString() })
      .eq("user_id", user.id)
      .is("completed_at", null);
  }

  return NextResponse.json({ success: true });
}
