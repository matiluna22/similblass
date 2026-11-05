# Web Designer Dev Kit para Antigravity

Kit de 5 agentes (PO, UI/UX, DBA, Dev, Integrity Guardian) para construir productos web con React + MUI, backend Go/Node y MariaDB/MySQL lean.

## Instalación
Copiá el contenido de esta carpeta en la raíz de tu proyecto:
```
AGENTS.md                 # reglas raíz + orquestación (también lo leen Cursor, Claude Code, Codex)
.agents/rules/            # reglas siempre activas
.agents/agents/           # personas (agent.md con frontmatter)
.agents/skills/           # skills con carga progresiva
.agents/workflows/        # /new-feature, /integrity-review, /db-migration
.agents/protected-paths.txt
docs/                     # visión, roadmap, specs y ADRs
```

## Uso
- Nueva feature: `/new-feature` y describí la idea.
- Review: `/integrity-review`.
- Cambio de datos: `/db-migration`.
- Agentes con nombre: en Antigravity CLI, `--agent po` (o el que corresponda).

## Hook opcional (recomendado)
Bloquear commits que el Guardian rechazaría:
```bash
echo 'bash .agents/skills/integrity-check/scripts/check-integrity.sh HEAD' > .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
```
