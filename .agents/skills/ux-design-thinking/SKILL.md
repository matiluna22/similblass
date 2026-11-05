---
name: ux-design-thinking
description: Guía el diseño de features con design thinking (empatizar, definir, idear, prototipar, testear) y lo traduce a pantallas y theme de Material UI (MUI). Usar al diseñar flujos, pantallas, componentes, design tokens o al revisar accesibilidad.
---
# UX con design thinking → MUI

## 1. Empatizar
- ¿Quién usa esto y en qué contexto (dispositivo, apuro, frecuencia)?
- Job-to-be-done: "Cuando ___, quiero ___, para ___".

## 2. Definir
- Problema en una frase + "¿Cómo podríamos…?" (HMW).
- Métrica de éxito observable (tiempo de tarea, errores, conversión).

## 3. Idear
- Mínimo 2 alternativas de flujo. Elegir una y explicar por qué en 2 líneas.

## 4. Prototipar
- Flujo en Mermaid (`flowchart LR`).
- Cada pantalla con: objetivo, acción primaria, componentes MUI, estados.

| Estado | Patrón MUI sugerido |
|---|---|
| Cargando | `Skeleton` (no spinner a pantalla completa) |
| Vacío | Ilustración/ícono + texto + acción primaria |
| Error | `Alert severity="error"` con acción de reintento |
| Éxito | `Snackbar` breve; no modal |
| Confirmación destructiva | `Dialog` con verbo explícito ("Eliminar alumno") |

## 5. Testear
- 3 tareas para validar con un usuario real y qué observar en cada una.

## Theme (web/src/theme/)
- `palette`: primary, secondary, error, warning, success, background; modo light y dark.
- `typography`: escala acotada (h1–h6, body1/2, caption, button). Máx. 2 familias.
- `spacing`: base 8. `shape.borderRadius` único.
- Overrides en `components` del theme, no estilos sueltos por pantalla.
- Contraste mínimo 4.5:1 en texto normal; verificarlo para ambos modos.

## Checklist de accesibilidad
- Todo input con `label`; errores asociados con `helperText`.
- Foco visible y orden lógico; todo usable con teclado.
- `IconButton` siempre con `aria-label`.
- No transmitir información solo con color.
