---
name: mysql-lean
description: Diseño de esquemas, migraciones, índices y configuración de MariaDB/MySQL priorizando el menor consumo de recursos. Usar al modelar datos, crear migraciones, elegir motor o versión, tunear my.cnf o revisar queries lentas.
---
# MySQL lean

## Elección de motor
| Opción | Cuándo |
|---|---|
| **MariaDB LTS** (default) | Casi siempre. Menor footprint típico, `performance_schema` apagado por defecto. |
| MySQL LTS | Si se necesita algo exclusivo de MySQL (ADR). Apagar `performance_schema`. |

Usar la imagen Docker oficial con tag LTS fijo (nunca `latest`).

## Config base
Copiar `resources/my.cnf` a `db/my.cnf` y montarlo en el contenedor. Ajustar `innodb_buffer_pool_size` a ~el tamaño de los datos calientes (piso 64M).

## Esquema
- `utf8mb4` en todo. Tipos mínimos suficientes.
- PK `INT UNSIGNED AUTO_INCREMENT` salvo necesidad distribuida (ADR para UUID en `BINARY(16)`).
- Timestamps: `created_at`, `updated_at`; soft delete con `deleted_at` cuando el PO lo pida.
- FKs con `ON DELETE` explícito.

## Índices
- Derivarlos de queries reales: columnas de `WHERE`, `JOIN` y `ORDER BY`.
- Índices compuestos en orden de selectividad y uso (regla del prefijo izquierdo).
- Verificar con `EXPLAIN`: evitar `type=ALL` en tablas que crecen.
- Cada índice cuesta escritura y RAM: si no lo usa ninguna query, no va.

## Migraciones
- `db/migrations/NNNN_descripcion.up.sql` y `.down.sql`.
- Una migración = un cambio lógico. Nunca editar una migración ya aplicada.
- Cambios destructivos en dos pasos (agregar nuevo → migrar datos → eliminar viejo en release posterior).

## Backups
- `mariadb-dump`/`mysqldump --single-transaction` programado; probar restore periódicamente.
