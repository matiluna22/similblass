---
name: feature-spec
description: Crea y mantiene specs de features del producto a partir de la plantilla docs/product/features/_TEMPLATE.md, con criterios de aceptación verificables y vínculo al roadmap. Usar al definir, refinar, priorizar o aceptar una feature.
---
# Feature spec

## Crear
1. Asigná ID correlativo: `F-NNN` (mirá el último en `ROADMAP.md`).
2. Copiá `docs/product/features/_TEMPLATE.md` → `docs/product/features/F-NNN-slug.md`.
3. Completá: Problema, Usuario, Valor, Alcance / Fuera de alcance, Criterios de aceptación, Dependencias, Preguntas abiertas.
4. Agregá la fila en `ROADMAP.md` con estado `draft`.

## Estados
`draft → ready (UX+Datos completos) → in-progress → review → done`
Solo el PO cambia estados. `done` requiere veredicto APROBADO del Guardian.

## Buenos criterios de aceptación
- Dado/Cuando/Entonces, observables y testeables.
- Incluir al menos un caso de error y uno de permisos si aplica.
- Malo: "La pantalla es rápida". Bueno: "Dado 500 alumnos, cuando abro el listado, entonces carga en < 1 s".

## Integridad del producto
Antes de pasar a `ready`, revisá otras specs que toquen las mismas entidades o pantallas y anotá impactos en *Dependencias*.
