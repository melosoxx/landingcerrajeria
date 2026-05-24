# MAPA_PROYECTO.md — Landing Cerrajería v2

---

## Cabecera

| Campo            | Valor                                                      |
|------------------|------------------------------------------------------------|
| Versión del mapa | 1.2                                                        |
| Fecha            | 2026-05-04                                                 |
| Commit ref       | `403941a31a59dd423ba578fef5eef104a4199463`                 |
| Rama             | `master`                                                   |
| Stack            | Next.js 16 · React 19 · TypeScript · Tailwind v4 · shadcn/ui |

---

## Arquitectura general

```
/
├── app/
│   ├── page.tsx                   ← Landing page (/)
│   ├── layout.tsx                 ← Root layout, analytics, fuentes
│   ├── globals.css                ← Tokens de color OKLch, animaciones
│   ├── contenidos/
│   │   └── page.tsx               ← Plataforma de curso (/contenidos)
│   └── api/
│       └── meta-conversions/
│           └── route.ts           ← API server-side Meta Conversions
├── components/
│   ├── hero-section.tsx
│   ├── solution-section.tsx       ← DESHABILITADO (sin importar en page.tsx)
│   ├── offer-stack.tsx
│   ├── faq-section.tsx            ← Incluye tabla "Valores de referencia" como primera pregunta
│   ├── platform-showroom.tsx      ← Showroom visual de la plataforma (fondo negro sólido)
│   ├── closing-cta.tsx
│   ├── testimonials-section.tsx   ← DESHABILITADO (returns null)
│   ├── course/
│   │   ├── course-hero.tsx
│   │   ├── module-grid.tsx
│   │   ├── module-card.tsx        ← Actualizado: soporta status locked/in_progress/completed
│   │   ├── section-heading.tsx
│   │   ├── supplementary-section.tsx
│   │   ├── video-section.tsx
│   │   ├── pdf-viewer-modal.tsx
│   │   ├── video-player-modal.tsx
│   │   ├── certificate-button.tsx ← LMS: botón descarga de certificado
│   │   ├── completion-celebration.tsx
│   │   ├── lms-nav.tsx
│   │   └── module-quiz.tsx        ← LMS: componente de quiz por módulo
│   └── ui/
│       ├── button.tsx             ← shadcn/ui
│       └── accordion.tsx          ← shadcn/ui + Radix UI
├── lib/
│   ├── course-content.ts          ← Fuente de verdad del curso (estática)
│   ├── lms-content.ts             ← NUEVO — Módulos LMS, tareas, puntos, VIDEO_MODULE_MAP
│   ├── quiz-data.ts               ← NUEVO — 5 preguntas por módulo (13 módulos)
│   ├── meta-pixel.ts              ← Tracking client-side + server-side
│   ├── utils.ts                   ← cn() (clsx + tailwind-merge)
│   ├── context/
│   │   └── progress-context.tsx   ← LMS: contexto global de progreso del usuario
│   ├── hooks/
│   │   └── use-progress.ts        ← LMS: hook que carga/persiste progreso desde Supabase
│   └── supabase/                  ← LMS: cliente Supabase + tipos de tablas
└── public/
    ├── fonts/wolfpack-Regular.ttf
    ├── *.webp                     ← Imágenes de hero/mockups
    └── course/
        ├── pdfs/                  ← PDFs de los 13 módulos + 3 suplementarios
        └── covers/                ← Thumbnails de módulos
```

---

## Módulo 1 — Landing Page

**Ruta:** `app/page.tsx`

**Puntos de entrada:**
- `Home()` ~L9-20 — Ensambla las 6 secciones de la landing con `dynamic()` para code splitting. HeroSection se carga eager, el resto lazy.

**Orden de secciones:** HeroSection → **PlatformShowroom** → OfferStack → FaqSection → ClosingCta

**Impacto:** Si tocás esto, revisá:
- `components/hero-section.tsx` (primera sección, siempre visible)
- `components/platform-showroom.tsx`, `offer-stack.tsx`, `faq-section.tsx`, `closing-cta.tsx` (carga lazy)
- `components/solution-section.tsx` está deshabilitado (no importado) — sus datos de precios viven ahora en `faq-section.tsx`

**Estado:** Estable

**Lecciones aprendidas:** (ninguna con evidencia)

---

## Módulo 2 — Layout & Analytics

**Ruta:** `app/layout.tsx`

**Puntos de entrada:**
- `metadata` ~L17-26 — SEO básico: título, descripción, icono de la app.
- `RootLayout()` ~L28-75 — Inyecta fuentes (Geist + Wolfpack), Meta Pixel init, Microsoft Clarity, Vercel Analytics.

**Dependencias externas incrustadas:**
- Meta Pixel ID: `2338003480044925` (hardcodeado en script inline, L55)
- Microsoft Clarity ID: `vbbelho578` (hardcodeado en script inline, L42)
- `@vercel/analytics/next` → `<Analytics />`

**Impacto:** Si tocás esto, revisá:
- `lib/meta-pixel.ts` (el Pixel ID debe coincidir)
- `app/api/meta-conversions/route.ts` (mismo Pixel ID)
- `public/fonts/wolfpack-Regular.ttf` (si cambia la ruta del font)

**Estado:** Estable

**Lecciones aprendidas:** (ninguna con evidencia)

---

## Módulo 3 — Datos del Curso

**Ruta:** `lib/course-content.ts`

**Puntos de entrada:**
- `type ModuleItem` ~L1-9 — Tipo de módulo (id, número, título, descripción, ruta PDF, ruta cover).
- `type SupplementaryItem` ~L11-19 — Material complementario (igual + campo `icon`).
- `type VideoItem` ~L21-28 — Video de práctica (id, título, youtubeId, published).
- `type CourseItem` ~L30 — Union type: `ModuleItem | SupplementaryItem`.
- `videos: VideoItem[]` ~L32-L227 — 27 videos publicados en YouTube.
- `modules: ModuleItem[]` ~L229-L360 — 13 módulos del curso, cada uno con ruta a PDF y cover.
- `supplementary: SupplementaryItem[]` ~L362-L390 — 3 materiales complementarios.

**Convención de rutas de contenido:**
- PDFs: `/course/pdfs/modulo-NN-nombre.pdf`
- Covers: `/course/covers/modulo-NN-nombre.webp`
- Thumbnails YouTube: generados dinámicamente via `img.youtube.com/vi/{youtubeId}/hqdefault.jpg`

**Impacto:** Si tocás esto, revisá:
- `app/contenidos/page.tsx` (consume `modules`, `supplementary`, `CourseItem`)
- `components/course/module-grid.tsx`, `module-card.tsx`, `supplementary-section.tsx`, `video-section.tsx`
- `components/course/pdf-viewer-modal.tsx` (recibe `CourseItem`)
- `components/offer-stack.tsx` (referencia a los valores del stack)

**Estado:** Estable

**Lecciones aprendidas:** (ninguna con evidencia)

---

## Módulo 4 — Hero Section

**Ruta:** `components/hero-section.tsx`

**Puntos de entrada:**
- `HeroSection()` ~L7-80 — Hero full-screen con video de fondo en loop, overlay oscuro, mockup flotante con glow naranja, botón CTA que hace scroll suave a `[data-section="offer"]`.

**Elementos clave:**
- Video de fondo: `/loop-cerrajeria.mp4` (autoPlay/loop/muted/playsInline, object-cover, poster `/background.webp`)
- Mockup: `/mockups_nobackground.webp` (max-w 220px mobile / 280px desktop)
- Animaciones CSS: `animate-fade-in-up`, `animate-glow-bg`, `animate-float` (definidas en `globals.css`)
- Social proof: "+90 cerrajeros formados" y 5 estrellas (hardcodeado)

**Impacto:** Si tocás esto, revisá:
- `app/globals.css` (animaciones usadas aquí)
- `app/page.tsx` (orden de carga)
- El atributo `data-section="offer"` en `components/offer-stack.tsx` (target del scroll)

**Estado:** Estable

**Lecciones aprendidas:** (ninguna con evidencia)

---

## Módulo 5 — Solution Section [DESHABILITADO]

**Ruta:** `components/solution-section.tsx`

**Estado actual:** El componente sigue existiendo en disco pero **no se importa ni renderiza** en `app/page.tsx` (v1.2). La tabla de precios (`tablasPrecio`) fue replicada en `faq-section.tsx` como primera pregunta del acordeón.

**Puntos de entrada (legacy):**
- `tablasPrecio` ~L2-33 — Array estático con 3 tablas de precios (Programado, Emergencia, Alta Seguridad) con precios en ARS. **Ya no es la fuente activa** — la copia viva vive en `faq-section.tsx`.
- `SolutionSection()` ~L35-132 — Sección "Qué incluye el curso": embed YouTube del curso + tabla de precios.

**Impacto:** Si se vuelve a habilitar, sincronizar precios con `faq-section.tsx` antes para evitar divergencia.

**Estado:** Deshabilitado

**Lecciones aprendidas:** (ninguna con evidencia)

---

## Módulo 6 — Offer Stack

**Ruta:** `components/offer-stack.tsx`

**Puntos de entrada:**
- `valueStackItems` ~L15-36 — Array de 4 items del stack con iconos y valores en ARS.
- `totalValue` ~L38 — Suma automática del stack (45.000 ARS).
- `OfferStack()` ~L40-237 — Sección de oferta: stack de valor, contador de viewers, countdown timer, CTA de compra.

**Estado interno:**
- `viewersCount` ~L42 — Contador falso de personas viendo (rango 5-18). Se inicializa en 12 para evitar hydration mismatch, luego se randomiza en `useEffect`.
- `timeLeft` ~L71 — Countdown de 7 minutos. Usa `useRef(Date.now())` como referencia del inicio. **El timer reinicia con cada recarga de página** — no persiste en sesión.
- `data-section="offer"` — Ancla objetivo del scroll desde HeroSection.

**Tracking:**
- Llama a `trackEventWithServer("InitiateCheckout")` al hacer click en CTA de compra.
- Link de checkout: `https://robertopugliese.shop/cart/45612584861869:1`

**Impacto:** Si tocás esto, revisá:
- `lib/meta-pixel.ts` → `trackEventWithServer()`
- `components/hero-section.tsx` (scroll hacia `data-section="offer"`)
- `components/closing-cta.tsx` (mismo link de checkout + mismo evento)

**Estado:** Frágil
- Timer no persiste entre recargas (comportamiento esperado pero frágil de UX)
- viewersCount es simulado — si se quiere real, requiere backend

**Lecciones aprendidas:** (ninguna con evidencia)

---

## Módulo 7 — FAQ Section

**Ruta:** `components/faq-section.tsx`

**Puntos de entrada:**
- `tablasPrecio` ~L3-34 — Array estático con 3 tablas de precios (Programado, Emergencia, Alta Seguridad). Replicado desde `solution-section.tsx`.
- `FaqSection()` — Acordeón Radix UI. La **primera pregunta** ("¿Cuánto puede ganar un cerrajero independiente?") despliega las tablas de precios; las 4 siguientes son texto plano.

**Contenido de las FAQs (hardcodeado):**
0. ¿Cuánto puede ganar un cerrajero independiente? → Tablas de precios de referencia (Programado / Emergencia / Alta Seguridad).
1. ¿Qué herramientas necesito? → No necesitás herramientas previas.
2. ¿Cómo accedo al curso? → WhatsApp o Google Drive post-compra.
3. ¿Tiene garantía? → 7 días.
4. ¿En cuánto tiempo veo resultados? → Según práctica individual.

**Impacto:** Si tocás esto, revisá:
- `components/ui/accordion.tsx` (componente base)
- `components/solution-section.tsx` (deshabilitado pero contiene la copia legacy de `tablasPrecio` — sincronizar precios si se modifican)
- Texto debe estar alineado con `components/closing-cta.tsx` (garantía 7 días)

**Estado:** Estable

**Lecciones aprendidas:** (ninguna con evidencia)

---

## Módulo 8 — Closing CTA

**Ruta:** `components/closing-cta.tsx`

**Puntos de entrada:**
- `ClosingCta()` ~L6-49 — Sección final de conversión. Botón redirige a checkout Shopify y dispara evento Meta Pixel.

**Elementos clave:**
- Checkout URL: `https://robertopugliese.shop/cart/45612584861869:1` (hardcodeado, L14)
- Evento: `trackEventWithServer("InitiateCheckout", { content_name: "Curso Cerrajería", value: 1, currency: "ARS" })`
- Copy: "No es tarde. Empezá hoy."
- Badge: "Acceso inmediato • Garantía 7 días • Soporte 24/7"

**Impacto:** Si tocás esto, revisá:
- `lib/meta-pixel.ts` → `trackEventWithServer()`
- `components/offer-stack.tsx` (mismo link de checkout — deben ser idénticos)

**Estado:** Estable

**Lecciones aprendidas:** (ninguna con evidencia)

---

## Módulo 9 — Plataforma de Curso

**Rutas:**
- `app/contenidos/page.tsx` — Página `/contenidos`
- `components/course/` — Todos los componentes del área de curso

**Puntos de entrada:**
- `ContenidosPage()` ~L12-39 — Orquesta las 3 secciones: Módulos del Curso, Material Complementario, Prácticas Grabadas. Maneja el estado del modal PDF.
  - `openItem: CourseItem | null` ~L13 — Ítem actualmente abierto en el modal.
- `CourseHero()` (`course-hero.tsx` ~L3-45) — Banner del área de curso con estadísticas: 13 Módulos, 3 Guías Extra, 4+ hs de práctica.
- `ModuleGrid()` (`module-grid.tsx` ~L9-16) — Grid responsivo (2/3/4 cols). Recibe `modules[]` y `onOpen` callback.
- `ModuleCard()` (`module-card.tsx` ~L9-34) — Tarjeta individual de módulo con cover, badge de número, título y descripción.
- `SupplementarySection()` (`supplementary-section.tsx` ~L16-54) — Grid de 3 materiales complementarios con iconos Lucide.
- `VideoSection()` (`video-section.tsx` ~L8-67) — Grid de videos publicados. Filtra `published === true`. Maneja `selectedVideoId` internamente.
  - Thumbnail fallback: `hqdefault.jpg` → `default.jpg` si falla (L33-39).
- `PdfViewerModal()` (`pdf-viewer-modal.tsx` ~L19-95) — Modal de PDF. Detecta mobile para ajustar presentación. Maneja cierre con tecla Escape.
- `VideoPlayerModal()` (`video-player-modal.tsx` ~L11-67) — Modal de YouTube embed. Maneja `body overflow` y cierre con Escape.
- `SectionHeading()` (`section-heading.tsx` ~L8-16) — Heading reutilizable con subrayado decorativo.

**Flujo de datos:**
```
course-content.ts (modules, supplementary, videos)
  └── contenidos/page.tsx
       ├── ModuleGrid → ModuleCard → onOpen(moduleItem)
       ├── SupplementarySection → onOpen(supplementaryItem)
       ├── VideoSection (maneja su propio estado de video)
       └── PdfViewerModal ← openItem (CourseItem | null)
```

**Impacto:** Si tocás esto, revisá:
- `lib/course-content.ts` (fuente de todos los datos)
- `/public/course/pdfs/` y `/public/course/covers/` (rutas de archivos referenciadas)
- `components/ui/button.tsx` y `app/globals.css` (estilos base)

**Estado:** Estable

**Lecciones aprendidas:** (ninguna con evidencia)

---

## Módulo 10 — Platform Showroom

**Ruta:** `components/platform-showroom.tsx`

**Puntos de entrada:**
- `PlatformShowroom()` — Sección de marketing en la landing que muestra la UI de la plataforma sin dar acceso real. `"use client"` por el `onOpen` callback en `ModuleCard`.

**Elementos clave:**
- Fondo: negro sólido (`bg-background`). Sin imagen de fondo, sin blur, sin fades (v1.2).
- Dos cards de modo (idénticos visualmente a `CourseHero`) sin links ni interacción
- Grid de 13 `ModuleCard` todos con `status="locked"`, `onOpen={() => {}}` (noop), `[&_button]:opacity-100!` para neutralizar el `opacity-60` del estado bloqueado

**Propósito:** Social proof de la plataforma para visitantes no comprados. No expone ninguna ruta de `/contenidos`.

**Impacto:** Si tocás esto, revisá:
- `components/course/module-card.tsx` (renderiza los cards — no modificar opacity-60 sin revisar este showroom)
- `lib/course-content.ts` (fuente de `modules[]`)
- `app/page.tsx` (orden de secciones)

**Estado:** Estable

**Lecciones aprendidas:** (ninguna con evidencia)

---

## Módulo 11 — LMS Content & Quizzes

**Rutas:**
- `lib/lms-content.ts` — Definición de módulos LMS, tareas y puntos
- `lib/quiz-data.ts` — Banco de preguntas

**Puntos de entrada (`lms-content.ts`):**
- `POINTS` — `{ pdf: 10, video: 5, quiz: 25 }`
- `VIDEO_MODULE_MAP` — Asigna video (o `null`) a cada módulo. Módulos 5, 9, 10, 11 tienen `null` (sin video asignado — el video disponible no correspondía al tema del módulo).
- `lmsModules: LMSModule[]` — 13 módulos, cada uno con array de `Task[]`. El video se agrega condicionalmente: solo si `VIDEO_MODULE_MAP[mod.id]` no es `null`.
- `TOTAL_TASKS` / `MAX_POINTS` — Se calculan con `reduce` sobre las tareas reales (9 módulos con video = 3 tareas, 4 sin video = 2 tareas → 9×3 + 4×2 = 35 tareas, 500 pts máx).

**Puntos de entrada (`quiz-data.ts`):**
- `quizData` — Record de `moduleId → QuizQuestion[]`. 5 preguntas por módulo, 13 módulos. Cada pregunta tiene 4 opciones, correcta y explicación.

**Impacto:** Si tocás esto, revisá:
- `lib/hooks/use-progress.ts` (consume `lmsModules`)
- `app/contenidos/[moduleId]/page.tsx` (consume `quizData`)
- `components/platform-showroom.tsx` (NO consume lms-content — usa `modules` directamente)

**Estado:** Estable

**Lecciones aprendidas:**
- Videos mal asignados (placeholders) confunden al alumno si no corresponden al tema del módulo. Se optó por `null` en VIDEO_MODULE_MAP para módulos sin video pertinente, en lugar de asignar cualquier video disponible.

---

## Módulo 12 — Tracking Meta Pixel

**Rutas:**
- `lib/meta-pixel.ts` — Client-side tracking
- `app/api/meta-conversions/route.ts` — Server-side Conversions API

### `lib/meta-pixel.ts`

**Puntos de entrada:**
- `META_PIXEL_ID` ~L11 — Constante con el Pixel ID (`"2338003480044925"`).
- `trackEvent(eventName, params?)` ~L35-39 — Wrapper de `window.fbq("track", ...)`.
- `trackCustomEvent(eventName, params?)` ~L41-44 — Wrapper de `window.fbq("trackCustom", ...)`.
- `trackLead()` ~L47-49, `trackInitiateCheckout()` ~L51-53, `trackPurchase()` ~L55-57, `trackContact()` ~L59-60, `trackViewContent()` ~L63-68 — Helpers específicos por evento.
- `sendServerEvent(data)` ~L101-121 — `async`. Hace POST a `/api/meta-conversions` con los datos del evento.
- `getFbcFromCookie()` ~L123-127, `getFbpFromCookie()` ~L129-133 — Lee cookies `_fbc` y `_fbp` del navegador.
- `trackEventWithServer(eventName, params?, userData?)` ~L135-155 — **Función principal de tracking**. Combina: `trackEvent()` (client-side) + `sendServerEvent()` (server-side). Adjunta automáticamente cookies fbc/fbp y userAgent.

### `app/api/meta-conversions/route.ts`

**Puntos de entrada:**
- `hashData(data)` ~L8-14 — SHA-256 + lowercase + trim para PII.
- `POST(request)` ~L47-129 — Recibe evento, hashea PII, envía a Meta Graph API v21.0.

**Endpoint externo:** `https://graph.facebook.com/v21.0/{PIXEL_ID}/events`

**Variables de entorno requeridas (actualmente hardcodeadas):**
- `PIXEL_ID` — Pixel ID de Meta (actualmente en L4 de `route.ts` y L11 de `meta-pixel.ts`)
- `META_ACCESS_TOKEN` — Token de acceso a la Conversions API (actualmente en L5-6 de `route.ts`)

**[ZONA FRÁGIL]:** El `ACCESS_TOKEN` de Facebook está hardcodeado en el código fuente (`route.ts` L5-6). Si el repositorio es público o el token es comprometido, hay que rotarlo en Meta Business Manager y moverlo a variable de entorno `META_ACCESS_TOKEN`.

**Impacto:** Si tocás esto, revisá:
- `components/offer-stack.tsx` (usa `trackEventWithServer`)
- `components/closing-cta.tsx` (usa `trackEventWithServer`)
- `app/layout.tsx` (init del Pixel, mismo Pixel ID)

**Estado:** Frágil — ACCESS_TOKEN hardcodeado en source

**Lecciones aprendidas:** (ninguna con evidencia)

---

## Módulo 13 — UI Compartidos

**Rutas:**
- `components/ui/button.tsx`
- `components/ui/accordion.tsx`
- `lib/utils.ts`
- `app/globals.css`

### `components/ui/button.tsx`
- `buttonVariants(props?)` ~L7-39 — CVA con 6 variantes (default, destructive, outline, secondary, ghost, link) y 4 tamaños.
- `Button` ~L41-60 — Componente React polimórfico. Soporta `asChild` via Radix Slot.

### `components/ui/accordion.tsx`
- `Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent` ~L9-65 — Wrappers estilizados sobre `@radix-ui/react-accordion`. Estado manejado por Radix.

### `lib/utils.ts`
- `cn(...inputs)` ~L4-6 — Combina clases Tailwind con deduplicación via `clsx` + `twMerge`. Usar en lugar de concatenación manual de strings.

### `app/globals.css`
Tokens de diseño y animaciones globales:

**Colores (OKLch):**
- `--background`: `oklch(0.08 0 0)` — Casi negro
- `--foreground`: `oklch(0.98 0 0)` — Casi blanco
- `--primary`: `oklch(0.88 0.2 102)` — Amarillo/lima (color acentuado principal)
- `--checkout`: `oklch(0.55 0.2 142)` — Azul/violeta
- `--card`: derivado de background con leve claridad

**Fuentes CSS:**
- `--font-sans`: Geist
- `--font-mono`: Geist Mono
- `--font-wolfpack`: custom (Wolfpack Regular)

**Animaciones definidas aquí (usadas con `animate-*` en componentes):**
- `fadeInUp` — Fade con slide hacia arriba (0.6s)
- `glow-pulse` — Drop-shadow pulsante naranja (2s infinite)
- `glow-bg` — Background glow con scale (3s infinite)
- `float` — Flotación suave (3s infinite)

**Impacto:** Si tocás `globals.css`, revisá:
- `components/hero-section.tsx` (usa todas las animaciones)
- `components/offer-stack.tsx` (usa `animate-glow-pulse`)
- Cualquier componente con `text-primary`, `bg-background`, `text-foreground`

**Estado:** Estable

**Lecciones aprendidas:** (ninguna con evidencia)

---

## Grafo de impacto resumen

```
lib/course-content.ts
  → app/contenidos/page.tsx
  → components/course/* (todos)

lib/meta-pixel.ts
  → components/offer-stack.tsx
  → components/closing-cta.tsx
  → app/api/meta-conversions/route.ts

app/globals.css
  → components/hero-section.tsx (animaciones)
  → components/offer-stack.tsx (glow)
  → todos los componentes (color tokens)

components/ui/button.tsx
  → hero-section.tsx, offer-stack.tsx, closing-cta.tsx
  → components/course/pdf-viewer-modal.tsx
```

---

## Zonas frágiles

| Zona | Archivo | Descripción |
|------|---------|-------------|
| `[ZONA FRÁGIL]` | `app/api/meta-conversions/route.ts` L5-6 | `ACCESS_TOKEN` hardcodeado en source. Mover a `process.env.META_ACCESS_TOKEN`. |
| `[ZONA FRÁGIL]` | `components/offer-stack.tsx` L40-95 | Timer de 7 min y contador de viewers son efímeros y simulados. Sin persistencia. |
| `[DESHABILITADO]` | `components/testimonials-section.tsx` | Retorna `null`. Tiene estructura de datos para 3 testimonios pero no renderiza nada. |

---

## Glosario del proyecto

| Término | Significado |
|---------|-------------|
| **Cerrajería** | Oficio de apertura, instalación y reparación de cerraduras. Dominio de negocio del curso. |
| **Módulo** | Unidad de contenido del curso. Tiene número, título, PDF y cover. Total: 13 módulos. |
| **Suplementario** | Material complementario fuera del curriculum principal (guías, enciclopedias, atlas). Total: 3. |
| **Lock Picking** | Técnica de apertura de cerraduras sin llave mediante manipulación de los pernos. |
| **Apertura** | Acto de abrir una cerradura. Servicio principal que aprende el alumno. |
| **Yale** | Tipo de cerradura de cilindro muy común. Módulo 9 del curso. |
| **Cruciforme** | Cerradura con llave en forma de cruz (+). Módulo 4. |
| **Tubular** | Cerradura cuya llave es tubular (hueca). Módulo 6. |
| **Magnética** | Cerradura que usa imanes como mecanismo de seguridad. Módulo 7. |
| **Caja Fuerte** | Contenedor blindado con cerradura de alta seguridad. Módulo 11. |
| **Candado** | Cerradura portátil con arco. Módulo 12. |
| **Value Stack** | Presentación de todos los bonuses con sus precios individuales para justificar el precio del curso. |
| **Meta Pixel** | SDK de Facebook para tracking de eventos de conversión en la landing. |
| **Conversions API** | API server-side de Meta para enviar eventos con mayor precisión, bypaseando ad-blockers. |
| **ARS** | Peso Argentino. Moneda en que están expresados todos los precios del curso y servicios. |
| **Checkout** | Página de pago externa en `robertopugliese.shop` (Shopify). |
| **Wolfpack** | Nombre de la fuente tipográfica personalizada del proyecto. Archivo: `/public/fonts/wolfpack-Regular.ttf`. |
| **hqdefault** | Calidad de thumbnail de YouTube usada para las previsualizaciones de videos. Fallback a `default.jpg`. |

---

## Supuestos

1. **Hosting en Netlify, no en Vercel.** Hay un `.netlify/` en la raíz con `siteId`. Sin embargo, el proyecto usa Vercel Blob para imágenes y `@vercel/analytics`. Asumí que Vercel Analytics funciona también desde Netlify (solo tracking de pageviews).

2. **Testimonials deshabilitado intencionalmente.** `testimonials-section.tsx` retorna `null` y no está incluido en `app/page.tsx`. Asumí que fue removido/pospuesto, no es un bug.

3. **No hay base de datos.** Todo el contenido del curso vive en `lib/course-content.ts` como TypeScript estático. Asumí que esto es una decisión de diseño deliberada, no una limitación temporal.

4. **Los PDFs se sirven directamente desde `/public/course/pdfs/`.** No hay CDN de PDFs ni protección de acceso (cualquiera con la URL puede bajarlos sin comprar). Asumí que esto es intencional para la versión actual.

5. **El video embed en `solution-section.tsx` no usa los datos de `course-content.ts`.** El YouTube ID del video de presentación del curso está hardcodeado directamente en el JSX de ese componente. Asumí que es un video diferente al catálogo de prácticas.

6. **Precio del curso no visible en el código fuente explorado.** El `value: 1` en los eventos de checkout sugiere un precio simbólico en el payload de Meta, pero el precio real no aparece como constante nombrada. Asumí que vive en la página de Shopify.
