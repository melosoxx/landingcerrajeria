"use client";

import { useReducer, useCallback } from "react";
import { CheckCircle, XCircle, Trophy, RotateCcw, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CompletionCelebration } from "./completion-celebration";
import type { ModuleQuiz } from "@/lib/quiz-data";

type QuizResult = {
  isCorrect: boolean;
  correctIndex: number;
  explanation: string;
};

type State =
  | { phase: "intro" }
  | { phase: "question"; currentIndex: number; answers: number[]; answered: number | null }
  | { phase: "loading" }
  | { phase: "result"; score: number; passed: boolean; results: QuizResult[] }
  | { phase: "celebrate" };

type Action =
  | { type: "START" }
  | { type: "ANSWER"; selectedIndex: number }
  | { type: "NEXT" }
  | { type: "SUBMIT"; answers: number[] }
  | { type: "RESULT"; score: number; passed: boolean; results: QuizResult[] }
  | { type: "RETRY" }
  | { type: "CELEBRATE_DONE" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "START":
      return { phase: "question", currentIndex: 0, answers: [], answered: null };
    case "ANSWER":
      if (state.phase !== "question") return state;
      return { ...state, answered: action.selectedIndex };
    case "NEXT": {
      if (state.phase !== "question" || state.answered === null) return state;
      const newAnswers = [...state.answers, state.answered];
      const nextIndex = state.currentIndex + 1;
      if (nextIndex >= 5) {
        return { phase: "loading" };
      }
      return { phase: "question", currentIndex: nextIndex, answers: newAnswers, answered: null };
    }
    case "SUBMIT":
      return { phase: "loading" };
    case "RESULT":
      if (action.passed) return { phase: "celebrate" };
      return { phase: "result", score: action.score, passed: false, results: action.results };
    case "CELEBRATE_DONE":
      return { phase: "result", score: 100, passed: true, results: [] };
    case "RETRY":
      return { phase: "intro" };
    default:
      return state;
  }
}

interface ModuleQuizProps {
  moduleId: string;
  quiz: ModuleQuiz;
  hasPassed: boolean;
  onPass: () => void;
}

export function ModuleQuizComponent({
  moduleId,
  quiz,
  hasPassed,
  onPass,
}: ModuleQuizProps) {
  const [state, dispatch] = useReducer(reducer, { phase: "intro" });

  const submitAnswers = useCallback(
    async (answers: number[]) => {
      try {
        const res = await fetch("/api/course/quiz", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ moduleId, answers }),
        });
        const data = await res.json();
        dispatch({ type: "RESULT", ...data });
        if (data.passed) onPass();
      } catch {
        dispatch({ type: "RETRY" });
      }
    },
    [moduleId, onPass]
  );

  if (hasPassed) {
    return (
      <div className="flex items-center gap-3 rounded-xl bg-primary/10 border border-primary/20 px-5 py-4">
        <Trophy className="h-6 w-6 text-primary shrink-0" />
        <div>
          <p className="font-semibold text-foreground text-sm">Evaluación aprobada</p>
          <p className="text-xs text-muted-foreground">+25 puntos ganados</p>
        </div>
      </div>
    );
  }

  if (state.phase === "intro") {
    return (
      <div className="rounded-2xl border border-border/60 bg-card p-6 space-y-4 text-center">
        <Trophy className="h-10 w-10 text-primary mx-auto" />
        <div>
          <h3 className="font-bold text-foreground text-lg">Evaluación del Módulo</h3>
          <p className="text-sm text-muted-foreground mt-1">
            5 preguntas · Necesitás un 80% para pasar · +25 puntos
          </p>
        </div>
        <Button onClick={() => dispatch({ type: "START" })} className="w-full sm:w-auto">
          Comenzar evaluación
        </Button>
      </div>
    );
  }

  if (state.phase === "loading") {
    return (
      <div className="rounded-2xl border border-border/60 bg-card p-6 text-center">
        <p className="text-muted-foreground text-sm animate-pulse">Calculando resultado...</p>
      </div>
    );
  }

  if (state.phase === "celebrate") {
    return (
      <>
        <CompletionCelebration
          show={true}
          onDone={() => dispatch({ type: "CELEBRATE_DONE" })}
          message="¡Evaluación aprobada!"
        />
        <div className="rounded-2xl border border-border/60 bg-card p-6 text-center">
          <p className="text-muted-foreground text-sm animate-pulse">Cargando resultado...</p>
        </div>
      </>
    );
  }

  if (state.phase === "result") {
    return (
      <div className="rounded-2xl border border-border/60 bg-card p-6 space-y-4">
        <div className="text-center">
          {state.passed ? (
            <CheckCircle className="h-10 w-10 text-primary mx-auto mb-2" />
          ) : (
            <XCircle className="h-10 w-10 text-destructive mx-auto mb-2" />
          )}
          <p className="font-bold text-foreground text-lg">
            {state.passed ? "¡Aprobaste!" : "No alcanzaste el 80%"}
          </p>
          <p className="text-muted-foreground text-sm">Resultado: {state.score}/100</p>
        </div>

        {!state.passed && (
          <Button
            variant="outline"
            onClick={() => dispatch({ type: "RETRY" })}
            className="w-full gap-2"
          >
            <RotateCcw className="h-4 w-4" />
            Intentar de nuevo
          </Button>
        )}
      </div>
    );
  }

  // phase === "question"
  if (state.phase !== "question") return null;

  const question = quiz.questions[state.currentIndex];
  const totalQuestions = quiz.questions.length;

  async function handleNext() {
    if (state.phase !== "question" || state.answered === null) return;
    const newAnswers = [...state.answers, state.answered];
    if (state.currentIndex + 1 >= totalQuestions) {
      dispatch({ type: "SUBMIT", answers: newAnswers });
      await submitAnswers(newAnswers);
    } else {
      dispatch({ type: "NEXT" });
    }
  }

  return (
    <div className="rounded-2xl border border-border/60 bg-card p-6 space-y-5">
      {/* Progreso */}
      <div className="space-y-1">
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Pregunta {state.currentIndex + 1} de {totalQuestions}</span>
          <span>{Math.round(((state.currentIndex) / totalQuestions) * 100)}%</span>
        </div>
        <div className="h-1.5 rounded-full bg-border overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-300"
            style={{ width: `${((state.currentIndex) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Pregunta */}
      <p className="font-semibold text-foreground leading-snug">{question.question}</p>

      {/* Opciones */}
      <div className="space-y-2">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => dispatch({ type: "ANSWER", selectedIndex: idx })}
            className={`w-full text-left rounded-xl border px-4 py-3 text-sm transition-all duration-150 ${
              state.answered === idx
                ? "border-primary bg-primary/10 text-foreground font-medium"
                : "border-border/50 bg-secondary/30 text-foreground hover:border-primary/40 hover:bg-secondary/60"
            }`}
          >
            <span className="font-bold text-primary mr-2">
              {String.fromCharCode(65 + idx)}.
            </span>
            {option}
          </button>
        ))}
      </div>

      {/* Botón siguiente */}
      <Button
        onClick={handleNext}
        disabled={state.answered === null}
        className="w-full gap-2"
      >
        {state.currentIndex + 1 === totalQuestions ? "Enviar respuestas" : "Siguiente"}
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
