import { modules } from "./course-content";

export type TaskType = "pdf" | "video" | "quiz";

export type Task = {
  id: string;
  type: TaskType;
  title: string;
  points: number;
  moduleId: string;
  youtubeId?: string;
};

export type LMSModule = {
  id: string;
  moduleNumber: number;
  title: string;
  tasks: Task[];
};

export const POINTS = {
  pdf: 10,
  video: 5,
  quiz: 25,
} as const;

// Video → módulo mapping. Se completa a medida que se definen las asignaciones.
// Por ahora cada módulo tiene un video placeholder (video-01 como ejemplo).
// Actualizar esta tabla cuando Roberto defina qué video va en cada módulo.
const VIDEO_MODULE_MAP: Record<string, string | null> = {
  "modulo-01": "video-26", // Tutorial Abrir Cerraduras → Introducción
  "modulo-02": "video-01", // Apertura Fac S90 → Técnicas Básicas
  "modulo-03": "video-03", // Cerradura de Borjas → Doble Paleta
  "modulo-04": "video-24", // Cerradura Cruciforme → Cruciformes
  "modulo-05": null,        // Sin video asignado para Copia de Llaves
  "modulo-06": "video-06", // Apertura Tubular → Tubulares
  "modulo-07": "video-09", // Apertura Iseo → Magnéticas
  "modulo-08": "video-04", // RUSWIN 6 pins → Comunes
  "modulo-09": null,        // Sin video asignado para Yale
  "modulo-10": null,        // Sin video asignado para Muebles
  "modulo-11": null,        // Sin video asignado para Cajas Fuertes
  "modulo-12": "video-02", // Candado Pitón → Candados
  "modulo-13": "video-27", // Tutorial Multipuntos → Colocación
};

const VIDEO_YOUTUBE_IDS: Record<string, string> = {
  "video-01": "psSkjUXg6VY",
  "video-02": "DEN7BDw1SPA",
  "video-03": "dDkvnKkWDV0",
  "video-04": "0e3nfgSC-9Y",
  "video-05": "CW-vfFpuuJk",
  "video-06": "N2q5YyBFV-8",
  "video-08": "XQ_y7glG0xE",
  "video-09": "ql3Gv7WFMN4",
  "video-11": "H2o9KDQQN9k",
  "video-13": "5e4aIYqXs08",
  "video-24": "DqlFoOci9jE",
  "video-26": "nzz511c3hhQ",
  "video-27": "i-7NFzMoSFg",
};

export const lmsModules: LMSModule[] = modules.map((mod) => {
  const videoId = VIDEO_MODULE_MAP[mod.id] ?? null;
  const youtubeId = videoId ? (VIDEO_YOUTUBE_IDS[videoId] ?? null) : null;

  const tasks: Task[] = [
    {
      id: `${mod.id}-pdf`,
      type: "pdf",
      title: `Módulo ${mod.moduleNumber}: ${mod.title}`,
      points: POINTS.pdf,
      moduleId: mod.id,
    },
  ];

  if (youtubeId) {
    tasks.push({
      id: `${mod.id}-video`,
      type: "video",
      title: `Video práctica — ${mod.title}`,
      points: POINTS.video,
      moduleId: mod.id,
      youtubeId,
    });
  }

  tasks.push({
    id: `${mod.id}-quiz`,
    type: "quiz",
    title: `Evaluación — ${mod.title}`,
    points: POINTS.quiz,
    moduleId: mod.id,
  });

  return {
    id: mod.id,
    moduleNumber: mod.moduleNumber,
    title: mod.title,
    tasks,
  };
});

export const TOTAL_TASKS = lmsModules.reduce(
  (sum, mod) => sum + mod.tasks.length,
  0
); // 13 × 3 = 39

export const MAX_POINTS = lmsModules.reduce(
  (sum, mod) =>
    sum + mod.tasks.reduce((s, t) => s + t.points, 0),
  0
); // 13 × (10 + 5 + 25) = 520

export function getTaskById(taskId: string): Task | undefined {
  for (const mod of lmsModules) {
    const task = mod.tasks.find((t) => t.id === taskId);
    if (task) return task;
  }
  return undefined;
}

export function getModuleById(moduleId: string): LMSModule | undefined {
  return lmsModules.find((m) => m.id === moduleId);
}

export function getPreviousModule(moduleId: string): LMSModule | undefined {
  const idx = lmsModules.findIndex((m) => m.id === moduleId);
  return idx > 0 ? lmsModules[idx - 1] : undefined;
}
