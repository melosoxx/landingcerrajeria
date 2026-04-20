# CLAUDE.md — Landing Cerrajería v2

Este archivo define el comportamiento por defecto de Claude Code en este proyecto.

---

## Protocolo activo: Cirujano Indexador

Este proyecto opera bajo el protocolo **Cirujano Indexador**. Se asume que existe `MAPA_PROYECTO.md` en la raíz con secciones de módulos, puntos de entrada, impacto, estado, lecciones, glosario y supuestos. Si su estructura no coincide o no existe, avisar antes de operar.

### Chequeo inicial de sesión

Como primera acción en cada sesión:

1. Leer `MAPA_PROYECTO.md`.
2. Comparar el `commit hash de referencia` de la cabecera contra `git rev-parse HEAD` actual.
3. Si el mapa no existe, está vacío, o el hash es mucho más viejo que HEAD (o pertenece a otra rama), avisar y proponer regenerarlo o actualizarlo parcialmente.
4. Reportar en 3 líneas qué módulos están marcados como `Frágil` o `En Refactorización`.

### Protocolo Consultor (cómo leer)

- Prohibido leer archivos completos de más de 100 líneas.
- Primero consultar el mapa, identificar el módulo y el rango relevante, y usar `Read` con `offset` + `limit` para traer solo lo necesario.
- `Grep` para buscar símbolos, `Glob` para descubrir archivos. `bash` queda para comandos del proyecto, nunca para leer código.
- Antes de editar, revisar la sección "Impacto" del módulo afectado para anticipar efectos secundarios.
- Los nombres de módulo del mapa son la fuente de verdad. Si se pide tocar algo que no figura en el mapa, pedir aclaración antes de asumir.

### Protocolo Multi-archivo

Antes de ejecutar una tarea que toca más de 3 archivos, devolver primero un plan corto (archivos + cambio + justificación en una línea cada uno) y esperar OK. No empezar a editar hasta tener confirmación.

### Protocolo Indexador (cómo mantener el mapa)

Al terminar una tarea, actualizar `MAPA_PROYECTO.md` **solo si** la tarea cambió la estructura del proyecto. Cambios que disparan actualización:

- Función/clase/módulo nuevo, borrado, renombrado o movido
- Nueva dependencia entre módulos (cambia el grafo de Impacto)
- Cambio de estado de fragilidad (`Frágil` → `Estable` tras refactor, o al revés)
- Aparición de un TODO/FIXME nuevo significativo
- Una cicatriz nueva (error cometido y corregido durante la tarea)

**Cuándo NO actualizar el mapa:** fixes triviales, typos, renames cosméticos, ediciones internas a una función que no cambian su firma ni su propósito. Si se duda, no tocar el mapa y avisar.

Cuando se actualice el mapa:

- Subir la versión (`1.0` → `1.1`, etc.) y actualizar el commit hash de referencia.
- Rangos de línea: actualizar solo si la estructura cambió. Mantener siempre como aproximados y anclados al nombre del símbolo.
- **Registro de cicatrices**: si durante la tarea se cometió un error y se corrigió, registrarlo en "Lecciones aprendidas" del módulo afectado, en una línea, con evidencia de qué pasó. Obligatorio: las cicatrices no se omiten.
- **Poda semántica**: si una zona dejó de ser `Frágil` por refactor, actualizar su estado.

### Manejo de incertidumbre

Si durante una tarea el mapa contradice al código real, frenar. Reportar la discrepancia exacta (módulo, qué dice el mapa, qué se encontró) y esperar instrucción antes de continuar o tocar el mapa. No resolver silenciosamente.

### Seguridad

Nunca leer, mostrar ni incluir en el mapa el contenido de `.env*`, archivos de credenciales ni datos personales de fixtures. Si un módulo depende de variables de entorno, referirse a ellas solo por nombre.

### Comando de gatillo: "Estado del Mapa"

Cuando el usuario escriba **"Estado del Mapa"**:

1. Ejecutar `git diff --stat` desde el commit hash de referencia del mapa hasta HEAD.
2. Cruzar los archivos modificados contra los módulos del mapa.
3. Responder con una tabla: `Módulo | Cambió (sí/no) | Acción sugerida`.
4. **No editar el mapa todavía**, solo reportar. El usuario decide qué aplicar.

### Principio guía

Leer menos es trabajar mejor. Ante la duda entre leer más contexto o pedir una aclaración, preguntar.
