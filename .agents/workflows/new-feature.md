---
description: Lleva una feature desde la idea hasta la aceptación pasando por PO, UX, DBA, Dev e Integrity Guardian.
---
# /new-feature

1. **PO** — Con la skill `feature-spec`, hacé las preguntas necesarias al usuario y creá `docs/product/features/F-NNN-slug.md`. Agregalo al roadmap como `draft`. Esperá confirmación del usuario sobre el alcance.
2. **UX** — Con la skill `ux-design-thinking`, completá la sección *UX* (flujo, pantallas, estados, componentes MUI, cambios al theme). Dejá handoff.
3. **DBA** — Si la feature toca persistencia, completá *Datos* con la skill `mysql-lean` y creá las migraciones `up/down`. Si no, anotá "Sin cambios de datos" y seguí.
4. **PO** — Revisá que UX y Datos cubran los criterios de aceptación. Pasá a `ready` o devolvé con observaciones.
5. **Dev** — Si no hay ADR de backend, ejecutá la skill `backend-stack-selector`. Implementá en pasos chicos: contrato OpenAPI → backend → frontend → tests. Corré `check-integrity.sh` y dejá handoff.
6. **Guardian** — Ejecutá `/integrity-review`. Si el veredicto no es APROBADO, volvé al paso 5 con los bloqueantes.
7. **PO** — Validá cada criterio de aceptación. Marcá `done` en spec y roadmap, o reabrí con el gap concreto.
