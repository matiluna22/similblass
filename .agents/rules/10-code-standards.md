# Estándares de código

## Clean code
- Funciones cortas, una responsabilidad. Nombres que expliquen intención (código en inglés).
- Sin código muerto, sin logs de debug, sin TODO sin issue asociado.
- React: un componente por archivo; separar presentación de datos. >200 líneas por archivo = señal de refactor.
- Sin duplicación: antes de crear un helper/componente, buscar si ya existe en el workspace.
- Errores nunca silenciados. Go: `fmt.Errorf("…: %w", err)`. Node: errores tipados + handler central.
- TS en `strict: true`. `any` solo con comentario que lo justifique.

## Seguridad (mínimos no negociables)
- Validar toda entrada en el backend. El front no es frontera de seguridad.
- SQL siempre parametrizado. Prohibido concatenar strings en queries.
- Secretos solo por env vars. `.env` en `.gitignore`; `.env.example` sin valores reales.
- AuthN/AuthZ verificadas en el server en cada endpoint protegido.
- Headers de seguridad (CSP, HSTS, X-Content-Type-Options) en proxy o middleware.
- Dependencias mantenidas y fijadas en lockfile. Nada de paquetes abandonados.
- `dangerouslySetInnerHTML` solo con contenido sanitizado (DOMPurify) y justificado.

## Tests
- Lógica de negocio con tests unitarios; endpoints con tests de integración contra DB de test.
- Una feature no está lista sin tests de sus criterios de aceptación críticos.
