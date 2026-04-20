"use client";

import { useEffect, useState, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import {
  lmsModules,
  getModuleById,
  getPreviousModule,
  TOTAL_TASKS,
  MAX_POINTS,
  type Task,
} from "@/lib/lms-content";

type TaskProgressRow = {
  task_id: string;
  module_id: string;
};

type QuizAttemptRow = {
  module_id: string;
  passed: boolean;
};

export type UseProgressReturn = {
  taskProgress: Map<string, boolean>;
  passedModules: Set<string>;
  totalPoints: number;
  completionPct: number;
  isTaskLocked: (moduleId: string, taskId: string) => boolean;
  isModuleLocked: (moduleId: string) => boolean;
  completeTask: (task: Task) => Promise<void>;
  isLoading: boolean;
};

export function useProgress(): UseProgressReturn {
  const [taskProgress, setTaskProgress] = useState<Map<string, boolean>>(
    new Map()
  );
  const [passedModules, setPassedModules] = useState<Set<string>>(new Set());
  const [totalPoints, setTotalPoints] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProgress() {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        setIsLoading(false);
        return;
      }

      const [{ data: taskRows }, { data: quizRows }] = await Promise.all([
        supabase
          .from("task_progress")
          .select("task_id, module_id")
          .eq("user_id", user.id),
        supabase
          .from("quiz_attempts")
          .select("module_id, passed")
          .eq("user_id", user.id)
          .eq("passed", true),
      ]);

      const progressMap = new Map<string, boolean>();
      let points = 0;

      for (const mod of lmsModules) {
        for (const task of mod.tasks) {
          const done = (taskRows ?? []).some(
            (r: TaskProgressRow) => r.task_id === task.id
          );
          if (done) {
            progressMap.set(task.id, true);
            points += task.points;
          }
        }
      }

      const passed = new Set<string>(
        (quizRows ?? []).map((r: QuizAttemptRow) => r.module_id)
      );

      setTaskProgress(progressMap);
      setPassedModules(passed);
      setTotalPoints(points);
      setIsLoading(false);
    }

    fetchProgress();
  }, []);

  const isModuleLocked = useCallback(
    (moduleId: string): boolean => {
      const mod = getModuleById(moduleId);
      if (!mod || mod.moduleNumber === 1) return false;
      const prev = getPreviousModule(moduleId);
      if (!prev) return false;
      return !passedModules.has(prev.id);
    },
    [passedModules]
  );

  const isTaskLocked = useCallback(
    (moduleId: string, taskId: string): boolean => {
      if (isModuleLocked(moduleId)) return true;
      const mod = getModuleById(moduleId);
      if (!mod) return true;

      const taskIndex = mod.tasks.findIndex((t) => t.id === taskId);
      if (taskIndex === 0) return false;

      // Cada tarea requiere que la anterior esté completada
      for (let i = 0; i < taskIndex; i++) {
        if (!taskProgress.get(mod.tasks[i].id)) return true;
      }
      return false;
    },
    [isModuleLocked, taskProgress]
  );

  const completeTask = useCallback(
    async (task: Task) => {
      if (taskProgress.get(task.id)) return;

      const res = await fetch("/api/course/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          taskId: task.id,
          moduleId: task.moduleId,
          taskType: task.type,
        }),
      });

      if (!res.ok) return;

      setTaskProgress((prev) => new Map(prev).set(task.id, true));
      setTotalPoints((prev) => prev + task.points);
    },
    [taskProgress]
  );

  const completionPct =
    TOTAL_TASKS === 0 ? 0 : Math.round((taskProgress.size / TOTAL_TASKS) * 100);

  return {
    taskProgress,
    passedModules,
    totalPoints,
    completionPct,
    isTaskLocked,
    isModuleLocked,
    completeTask,
    isLoading,
  };
}
