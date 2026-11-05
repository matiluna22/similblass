---
description: Review del Integrity Guardian sobre los cambios actuales con veredicto escrito en el spec.
---
# /integrity-review

1. Identificá la feature en curso (spec en estado `in-progress` o `review`). Si hay más de una, preguntá cuál.
2. Corré `bash .agents/skills/integrity-check/scripts/check-integrity.sh` (o contra la rama base si el usuario la indica).
3. Leé el diff completo (`git diff`) y el handoff del Dev.
4. Aplicá la revisión manual de la skill `integrity-check`.
5. Escribí la sección *Review* en el spec con veredicto, bloqueantes (archivo:línea → corrección) y sugerencias.
6. Si es APROBADO, pasá el spec a `review` para que el PO acepte. No modifiques código.
