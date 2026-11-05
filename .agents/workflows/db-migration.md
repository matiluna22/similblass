---
description: Crea una migración de base de datos segura y reversible con el DBA.
---
# /db-migration

1. **DBA** — Pedí (o leé del spec) el cambio requerido y las queries que lo van a usar.
2. Proponé el cambio de esquema y los índices necesarios, justificando cada índice con una query.
3. Si es destructivo, planificalo en dos pasos y avisá explícitamente al usuario antes de seguir.
4. Creá `db/migrations/NNNN_descripcion.up.sql` y `.down.sql`.
5. Aplicá `up`, luego `down`, luego `up` contra la base local para probar reversibilidad.
6. Actualizá la sección *Datos* del spec y dejá handoff al Dev.
