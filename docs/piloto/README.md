# Uso del kit de piloto

Leer EVIDENCIA-Y-PILOTO.md antes de reclutar. Las plantillas no son resultados.
Crear una copia privada de registro-diario.md para cada día y negocio.
Conservar datos diarios y referencias de evidencia para auditar agregados.
No cargar datos personales ni registros de negocios en el repositorio público.

Completar resumen-plantilla.json con agregados de 30 días por período.
null indica pendiente y será rechazado; no reemplazar datos ausentes por cero.
Los campos invitations, observedOpenings y verifiedPublications corresponden
a la misma cohorte observada. newPublicReviews es el conteo público general.

Ejecutar desde la raíz con Node 22.18 o superior:
npm run pilot:report -- RUTA_AL_RESUMEN_PRIVADO.json

La herramienta calcula y valida denominadores, no verifica la autenticidad
de la evidencia y no prueba causalidad. No existe captura automática de visitas.
El protocolo, guiones, entrevistas, criterios de éxito y ficha de oferta están
en EVIDENCIA-Y-PILOTO.md. Confirmar condiciones comerciales antes de iniciar.
