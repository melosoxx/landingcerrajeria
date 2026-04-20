"use client";

import { use, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  FileText,
  Play,
  Lock,
  CheckCircle,
  ChevronLeft,
} from "lucide-react";
import { modules } from "@/lib/course-content";
import { getModuleById } from "@/lib/lms-content";
import { getQuizForModule } from "@/lib/quiz-data";
import { useProgressContext } from "@/lib/context/progress-context";
import { ModuleQuizComponent } from "@/components/course/module-quiz";
import { CompletionCelebration } from "@/components/course/completion-celebration";

interface PageProps {
  params: Promise<{ moduleId: string }>;
}

export default function ModulePage({ params }: PageProps) {
  const { moduleId } = use(params);
  const router = useRouter();
  const {
    taskProgress,
    isTaskLocked,
    isModuleLocked,
    passedModules,
    completeTask,
  } = useProgressContext();

  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [loadingPdf, setLoadingPdf] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [celebrationDone, setCelebrationDone] = useState(false);

  const courseModule = modules.find((m) => m.id === moduleId);
  const lmsModule = getModuleById(moduleId);
  const quiz = getQuizForModule(moduleId);

  if (!courseModule || !lmsModule) notFound();

  const isLocked = isModuleLocked(moduleId);

  if (isLocked) {
    return (
      <main className="mx-auto max-w-2xl px-4 py-16 text-center space-y-6">
        <Lock className="h-12 w-12 text-muted-foreground mx-auto" />
        <h1 className="text-xl font-bold text-foreground">Módulo bloqueado</h1>
        <p className="text-muted-foreground text-sm">
          Completá la evaluación del módulo anterior para desbloquear este contenido.
        </p>
        <Link
          href="/contenidos"
          className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
        >
          <ChevronLeft className="h-4 w-4" />
          Volver al curso
        </Link>
      </main>
    );
  }

  const pdfTask = lmsModule.tasks.find((t) => t.type === "pdf")!;
  const videoTask = lmsModule.tasks.find((t) => t.type === "video")!;
  const quizTask = lmsModule.tasks.find((t) => t.type === "quiz")!;

  const pdfDone = !!taskProgress.get(pdfTask.id);
  const videoDone = !!taskProgress.get(videoTask.id);
  const quizDone = passedModules.has(moduleId);

  async function handleOpenPdf() {
    if (pdfDone && pdfUrl) {
      window.open(pdfUrl, "_blank");
      return;
    }
    setLoadingPdf(true);
    const res = await fetch(`/api/course/pdf/${moduleId}`);
    const data = await res.json();
    setPdfUrl(data.url);
    setLoadingPdf(false);
    window.open(data.url, "_blank");

    if (!pdfDone) {
      await completeTask(pdfTask);
    }
  }

  async function handleCompleteVideo() {
    if (videoDone) return;
    await completeTask(videoTask);
  }

  const handleQuizPass = useCallback(() => {
    setShowCelebration(true);
  }, []);

  const allDone = pdfDone && videoDone && quizDone;

  return (
    <>
      <CompletionCelebration
        show={showCelebration && !celebrationDone}
        onDone={() => {
          setShowCelebration(false);
          setCelebrationDone(true);
        }}
        message="¡Módulo completado!"
      />

      <main className="mx-auto max-w-3xl px-4 py-8 md:py-12 space-y-8">
        {/* Header */}
        <div>
          <Link
            href="/contenidos"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ChevronLeft className="h-4 w-4" />
            Todos los módulos
          </Link>

          <div className="flex items-start gap-4">
            <div className="relative shrink-0 w-20 h-24 rounded-lg overflow-hidden">
              <Image
                src={courseModule.coverPath}
                alt={courseModule.title}
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">
                Módulo {courseModule.moduleNumber}
              </p>
              <h1 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                {courseModule.title}
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                {courseModule.description}
              </p>
            </div>
          </div>

          {/* Progreso del módulo */}
          <div className="mt-4 flex items-center gap-3">
            <div className="flex-1 h-1.5 rounded-full bg-border overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-500"
                style={{
                  width: `${([pdfDone, videoDone, quizDone].filter(Boolean).length / 3) * 100}%`,
                }}
              />
            </div>
            <span className="text-xs text-muted-foreground">
              {[pdfDone, videoDone, quizDone].filter(Boolean).length}/3 tareas
            </span>
          </div>
        </div>

        {/* Tarea 1: PDF */}
        <TaskCard
          number={1}
          icon={<FileText className="h-5 w-5" />}
          title="Leer el módulo"
          description="Descargá y leé el PDF completo antes de continuar."
          points={pdfTask.points}
          done={pdfDone}
          locked={false}
          action={
            <button
              onClick={handleOpenPdf}
              disabled={loadingPdf}
              className="text-sm font-medium text-primary hover:underline disabled:opacity-50"
            >
              {loadingPdf ? "Cargando..." : pdfDone ? "Abrir PDF" : "Abrir y completar"}
            </button>
          }
        />

        {/* Tarea 2: Video */}
        <TaskCard
          number={2}
          icon={<Play className="h-5 w-5" />}
          title="Ver la práctica grabada"
          description="Mirá el video de demostración del módulo."
          points={videoTask.points}
          done={videoDone}
          locked={isTaskLocked(moduleId, videoTask.id)}
          action={
            videoTask.youtubeId ? (
              <div className="space-y-3">
                <div className="aspect-video rounded-xl overflow-hidden bg-secondary">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoTask.youtubeId}`}
                    title="Video práctica"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                {!videoDone && (
                  <button
                    onClick={handleCompleteVideo}
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    Marcar como visto ✓
                  </button>
                )}
              </div>
            ) : null
          }
        />

        {/* Tarea 3: Quiz */}
        {quiz && (
          <TaskCard
            number={3}
            icon={<CheckCircle className="h-5 w-5" />}
            title="Evaluación del módulo"
            description="Respondé las 5 preguntas con un mínimo de 80% para avanzar."
            points={quizTask.points}
            done={quizDone}
            locked={isTaskLocked(moduleId, quizTask.id)}
            action={
              <ModuleQuizComponent
                moduleId={moduleId}
                quiz={quiz}
                hasPassed={quizDone}
                onPass={handleQuizPass}
              />
            }
          />
        )}

        {/* Banner completado */}
        {allDone && (
          <div className="text-center py-6 rounded-2xl border border-primary/20 bg-primary/5 space-y-2">
            <p className="text-2xl">🎉</p>
            <p className="font-bold text-foreground">¡Módulo completado!</p>
            <Link
              href="/contenidos"
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
            >
              Ver todos los módulos →
            </Link>
          </div>
        )}
      </main>
    </>
  );
}

function TaskCard({
  number,
  icon,
  title,
  description,
  points,
  done,
  locked,
  action,
}: {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  points: number;
  done: boolean;
  locked: boolean;
  action: React.ReactNode;
}) {
  return (
    <div
      className={`rounded-2xl border p-5 space-y-4 transition-all ${
        done
          ? "border-primary/30 bg-primary/5"
          : locked
          ? "border-border/30 bg-card opacity-60"
          : "border-border/60 bg-card"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
              done
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground"
            }`}
          >
            {done ? <CheckCircle className="h-4 w-4" /> : number}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">{icon}</span>
              <h3 className="font-semibold text-foreground text-sm">{title}</h3>
              {locked && <Lock className="h-3.5 w-3.5 text-muted-foreground" />}
            </div>
            <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
          </div>
        </div>
        <span className="text-xs text-primary font-medium shrink-0">+{points} pts</span>
      </div>

      {!locked && action && <div>{action}</div>}
    </div>
  );
}
