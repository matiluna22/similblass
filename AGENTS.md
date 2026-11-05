# Web Designer Dev Kit — Reglas raíz

Kit multiagente para construir productos web desde el diseño. Lo leen Antigravity y cualquier herramienta compatible con AGENTS.md.

## Roles
| Agente | Archivo | Responsabilidad | Escribe en |
|---|---|---|---|
| PO | `.agents/agents/po.md` | Roadmap, specs, aceptación, integridad del producto | `docs/product/**` |
| UX | `.agents/agents/ux.md` | Design thinking, flujos, componentes MUI, theme | sección UX del spec, `src/theme/**` |
| DBA | `.agents/agents/dba.md` | Modelo de datos, migraciones, índices, footprint | sección Datos del spec, `db/**` |
| Dev | `.agents/agents/dev.md` | Implementación front y back | `web/**`, `api/**` |
| Integrity Guardian | `.agents/agents/guardian.md` | Gate de calidad, seguridad y anti-sobrescritura | `docs/product/features/<id>.md#review` (solo lectura del código) |

## Orquestación (flujo por feature)
`PO → UX → DBA → Dev → Guardian → PO (aceptación)`

1. **PO** crea `docs/product/features/<ID>-<slug>.md` desde `_TEMPLATE.md` y lo vincula en `ROADMAP.md`.
2. **UX** completa la sección *UX*. Sin flujo aprobado no se codea UI.
3. **DBA** completa *Datos* (solo si la feature toca persistencia) y genera la migración.
4. **Dev** implementa contra el spec. Si el spec es ambiguo, **pregunta al PO; no inventa**.
5. **Guardian** corre `/integrity-review`. Si bloquea, vuelve a Dev.
6. **PO** valida criterios de aceptación y marca la feature como `done`.

Entrada recomendada: workflow `/new-feature`.

## Fuente de verdad
- El **spec de la feature** manda. Toda decisión que cambie el spec se escribe primero en el spec.
- Decisiones de arquitectura → ADR en `docs/decisions/` (plantilla `ADR-000-template.md`).
- Preguntas abiertas se documentan en el spec, no se resuelven por supuesto.

## Protocolo de handoff
Cada agente, al terminar su etapa, agrega al final del spec:
```
### Handoff <ROL> → <SIGUIENTE> (<fecha>)
- Hecho: …
- Pendiente / riesgos: …
- Archivos tocados: …
```

## Reglas duras (todos los agentes)
- Ver `.agents/rules/` (stack, estándares de código, seguridad de cambios).
- Ningún agente escribe fuera de su zona sin pedirlo explícitamente.
- Nada se marca terminado sin el veredicto `APROBADO` del Guardian.
