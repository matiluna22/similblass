# Stack del kit

## Frontend
- React + TypeScript + Vite. Sin Next salvo que el spec pida SSR/SEO (requiere ADR).
- UI: **MUI (Material UI)**, versión estable vigente. Theme centralizado en `web/src/theme/`.
- Estilos: `sx` y `styled()` de MUI. Sin CSS global salvo reset. Nada de colores/espaciados hardcodeados: siempre tokens del theme.
- Estado: estado local + TanStack Query para datos del server. Redux/Zustand solo con ADR.
- Formularios: React Hook Form + Zod (mismo schema que valida el backend si es Node).
- Accesibilidad: WCAG 2.2 AA como piso.

## Backend (Node o Go — decide la skill `backend-stack-selector`)
- **Go (default por footprint)**: chi + sqlc (o database/sql), binario único, imagen distroless/alpine.
- **Node**: Fastify + TypeScript + Kysely o Drizzle. Express solo con ADR.
- API REST JSON, versionada (`/api/v1`). Contrato en `api/openapi.yaml`.
- La decisión se registra como ADR en el primer uso y no se cambia sin otro ADR.

## Datos (universo MySQL, prioridad: menor consumo de recursos)
- Default: **MariaDB LTS**; MySQL LTS solo si se necesita una feature exclusiva (ADR).
- Configuración base: `.agents/skills/mysql-lean/resources/my.cnf`.
- Migraciones versionadas en `db/migrations/` (up/down). Nunca cambios manuales en prod.

## Infra
- Docker Compose: un contenedor por servicio, una base por app (sin bases compartidas).
- Reverse proxy liviano (Caddy). Secretos por variables de entorno, nunca en el repo.
