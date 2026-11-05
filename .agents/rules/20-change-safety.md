# Seguridad de cambios (anti-sobrescritura)

Aplica a TODOS los agentes que editan archivos.

1. **Editar, no reescribir.** Cambios mínimos y localizados. Prohibido regenerar un archivo existente completo para modificar una parte.
2. **Leer antes de escribir.** Abrir la versión actual antes de editar; nunca asumir su contenido.
3. **Zonas protegidas.** Las rutas de `.agents/protected-paths.txt` solo se modifican con pedido explícito del usuario en el chat.
4. **No borrar lo que no entendés.** Si un bloque parece innecesario, se reporta; no se elimina.
5. **Exports públicos.** No renombrar ni eliminar funciones/componentes/endpoints exportados sin buscar todos sus usos y documentarlo en el handoff.
6. **Fuera de alcance = fuera.** Mejoras no pedidas van a *Preguntas abiertas* del spec; no se arreglan de paso.
7. **Commits atómicos** por paso lógico, con mensaje convencional (`feat:`, `fix:`, `refactor:`…).
8. Antes de entregar: `bash .agents/skills/integrity-check/scripts/check-integrity.sh`.
