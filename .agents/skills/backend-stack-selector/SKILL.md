---
name: backend-stack-selector
description: Decide entre Go y Node para el backend de un producto según requisitos, footprint y ecosistema, y registra la decisión como ADR. Usar cuando no existe ADR de backend o cuando una feature cuestiona el stack vigente.
---
# Selector de backend: Go vs Node

## Default: Go
Go gana por consumo de recursos (binario único, decenas de MB de RAM, arranque instantáneo). Elegí Node solo si aplica al menos un criterio fuerte:

| Criterio | Inclina a |
|---|---|
| Footprint de RAM/CPU es prioridad (VPS chico, muchos servicios) | Go |
| Concurrencia alta, workers, procesamiento en background | Go |
| Compartir tipos/schemas Zod entre front y back es clave | Node |
| Dependencia crítica que solo existe (o es mucho mejor) en npm | Node |
| SSR/render server-side de React | Node |
| Realtime simple con ecosistema JS (Socket.IO) | Node |
| Equipo que va a mantenerlo solo sabe JS/TS | Node |

## Procedimiento
1. Leé el spec y `docs/product/VISION.md`.
2. Evaluá la tabla; anotá cada criterio que aplica.
3. Si hay empate, gana Go.
4. Creá `docs/decisions/ADR-001-backend-stack.md` con la plantilla: contexto, opciones, decisión, consecuencias.

## Scaffold resultante
- **Go**: `api/cmd/server/main.go`, `api/internal/{http,service,store}`, chi, sqlc, `migrate`.
- **Node**: `api/src/{routes,services,db}`, Fastify, Zod, Kysely/Drizzle, `tsx` en dev y build con `tsc`.
