import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { getQuizForModule } from "@/lib/quiz-data";
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
  const { moduleId, answers } = body as {
    moduleId: string;
    answers: number[];
  };

  const quiz = getQuizForModule(moduleId);
  if (!quiz || !Array.isArray(answers) || answers.length !== quiz.questions.length) {
    return NextResponse.json({ error: "Invalid quiz data" }, { status: 400 });
  }

  // Calcular score server-side — correctIndex NUNCA se envía al cliente
  let correct = 0;
  const results = quiz.questions.map((q, i) => {
    const isCorrect = answers[i] === q.correctIndex;
    if (isCorrect) correct++;
    return {
      isCorrect,
      correctIndex: q.correctIndex,
      explanation: q.explanation,
    };
  });

  const score = Math.round((correct / quiz.questions.length) * 100);
  const passed = score >= 80;

  // Guardar intento en quiz_attempts
  await supabase.from("quiz_attempts").insert({
    user_id: user.id,
    module_id: moduleId,
    score,
  });

  // Si pasó: registrar la tarea quiz como completada
  if (passed) {
    const quizTask = getTaskById(`${moduleId}-quiz`);
    if (quizTask) {
      await supabase.from("task_progress").upsert(
        {
          user_id: user.id,
          module_id: moduleId,
          task_id: quizTask.id,
          task_type: "quiz",
          points_earned: quizTask.points,
        },
        { onConflict: "user_id,task_id", ignoreDuplicates: true }
      );

      // Verificar si completó el 100% del curso
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
    }
  }

  return NextResponse.json({ score, passed, results });
}
