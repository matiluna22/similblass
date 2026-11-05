#!/usr/bin/env bash
# Integrity Guardian — chequeo automático de un diff.
# Uso: check-integrity.sh [base_ref]   (default: HEAD → compara el working tree)
set -uo pipefail

BASE="${1:-HEAD}"
ROOT="$(git rev-parse --show-toplevel 2>/dev/null)" || { echo "No es un repo git"; exit 2; }
cd "$ROOT"
PROTECTED_FILE=".agents/protected-paths.txt"
REWRITE_RATIO=40   # % de líneas originales borradas
REWRITE_MIN=50     # tamaño mínimo del archivo original para evaluar

blockers=0; warnings=0
block() { echo "  ❌ $*"; blockers=$((blockers+1)); }
warn()  { echo "  ⚠️  $*"; warnings=$((warnings+1)); }

echo "▶ Integrity check contra '$BASE'"

# --- 1. Reescrituras ---
echo "· Reescrituras"
while IFS=$'\t' read -r add del file; do
  [[ "$add" == "-" ]] && continue                       # binario
  orig=$(git show "$BASE:$file" 2>/dev/null | wc -l) || orig=0
  (( orig < REWRITE_MIN )) && continue
  pct=$(( del * 100 / orig ))
  (( pct >= REWRITE_RATIO )) && block "$file: $pct% de sus $orig líneas originales borradas (+$add/-$del)"
done < <(git diff --numstat "$BASE" --diff-filter=M)

# --- 2. Rutas protegidas ---
echo "· Rutas protegidas"
if [[ -f "$PROTECTED_FILE" ]]; then
  mapfile -t patterns < <(grep -vE '^\s*(#|$)' "$PROTECTED_FILE")
  while read -r file; do
    for p in "${patterns[@]}"; do
      # shellcheck disable=SC2053
      [[ "$file" == $p ]] && { block "$file: ruta protegida ($p)"; break; }
    done
  done < <(git diff --name-only "$BASE")
fi

# --- 3. Contenido agregado ---
echo "· Secretos y patrones inseguros"
added=$(git diff -U0 "$BASE" | grep -E '^\+[^+]' || true)
removed=$(git diff -U0 "$BASE" | grep -E '^-[^-]' || true)

grep -qE -- '-----BEGIN [A-Z ]*PRIVATE KEY-----' <<<"$added" && block "Clave privada en el diff"
grep -qE 'AKIA[0-9A-Z]{16}' <<<"$added" && block "Posible AWS access key"
grep -qiE '(password|passwd|secret|api[_-]?key|token)["'\'' ]*[:=][ ]*["'\''][^"'\'' ]{8,}["'\'']' <<<"$added" \
  && block "Posible secreto literal (password/secret/api_key/token)"

grep -qiE '(SELECT|INSERT|UPDATE|DELETE)[^;]*("|`|'\'')\s*\+|\$\{[^}]+\}[^`]*(WHERE|VALUES)|fmt\.Sprintf\("[^"]*(SELECT|INSERT|UPDATE|DELETE)' <<<"$added" \
  && warn "Posible SQL armado con strings (usar queries parametrizadas)"
grep -q 'dangerouslySetInnerHTML' <<<"$added" && warn "dangerouslySetInnerHTML agregado (¿sanitizado?)"
grep -qE ':\s*any\b|as any\b|<any>' <<<"$added" && warn "Uso de 'any' en TS"
grep -qE 'console\.log\(|fmt\.Println\(' <<<"$added" && warn "Logs de debug agregados"

# --- 4. Exports eliminados (ignora los que reaparecen en el diff: movidos/editados) ---
echo "· API pública"
shown=0
while read -r name; do
  [[ -z "$name" ]] && continue
  grep -qE "(export|func)[^=({]*\\b$name\\b" <<<"$added" && continue
  if (( shown < 10 )); then warn "Símbolo exportado eliminado: $name"; else warnings=$((warnings+1)); fi
  shown=$((shown+1))
done < <(
  { grep -E '^-\s*export\s+(default\s+)?(async\s+)?(function|const|class|interface|type)\s' <<<"$removed" \
      | sed -E 's/^-\s*export\s+(default\s+)?(async\s+)?(function|const|class|interface|type)\s+([A-Za-z0-9_$]+).*/\4/'
    grep -E '^-func (\([^)]*\) )?[A-Z]' <<<"$removed" \
      | sed -E 's/^-func (\([^)]*\) )?([A-Za-z0-9_]+).*/\2/'
  } | sort -u || true
)
(( shown > 10 )) && echo "  … y $((shown-10)) más"

echo
echo "Resultado: $blockers bloqueante(s), $warnings warning(s)"
(( blockers > 0 )) && exit 1 || exit 0
