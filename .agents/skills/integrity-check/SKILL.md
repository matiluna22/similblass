---
name: integrity-check
description: Audita cambios de código antes de darlos por terminados detectando sobrescritura de archivos, exports eliminados, rutas protegidas tocadas, secretos y patrones inseguros, y emite un veredicto. Usar al revisar un diff, al cerrar una tarea de desarrollo o cuando se pida una review de integridad.
---
# Integrity check

## 1. Chequeo automático
```bash
bash .agents/skills/integrity-check/scripts/check-integrity.sh          # contra HEAD (working tree)
bash .agents/skills/integrity-check/scripts/check-integrity.sh main     # contra una rama
```
Exit `1` = hay bloqueantes. Exit `0` = sin bloqueantes (puede haber warnings).

Detecta:
- **Reescritura**: archivo existente con ≥40% de sus líneas borradas (≥50 líneas originales).
- **Rutas protegidas** de `.agents/protected-paths.txt` modificadas.
- **Secretos** en líneas agregadas (claves privadas, AWS keys, `password=`/`api_key=` literales).
- **Warnings**: exports eliminados (TS/JS), funciones exportadas eliminadas (Go), SQL concatenado, `dangerouslySetInnerHTML`, `any`.

## 2. Revisión manual (lo que el script no ve)
- ¿Cada cambio está en el alcance del spec?
- ¿Validación de entrada y authZ en cada endpoint nuevo?
- ¿Se reutilizó lo existente o se duplicó?
- ¿Tokens del theme en lugar de valores visuales fijos?
- ¿Tests de criterios críticos presentes y pasando?

## 3. Veredicto
Escribir la sección *Review* del spec con el formato definido en `.agents/agents/guardian.md`.
Un bloqueo por reescritura se levanta solo si el handoff del Dev lo justifica explícitamente.
