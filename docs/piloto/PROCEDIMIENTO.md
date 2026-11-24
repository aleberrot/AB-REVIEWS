# Piloto comercial — operación por negocio

Complementa OPERACION.md y EVIDENCIA-Y-PILOTO.md. No sustituye el registro privado: no subir al repositorio contactos, mensajes, permisos ni datos reales de pedidos.

## Antes de aceptar al negocio

- Confirmar encargado autorizado, sucursal, formato, cantidades, precio final e impuestos, retiro/despacho y propiedad o préstamo del material.
- Acordar fecha de inicio, 30 días de soporte desde entrega, canal/horario y respuesta comprometida. No prometer un SLA que no se haya acordado.
- Dejar por escrito plazo de continuidad de Smart Link, un cambio de destino incluido y su vigencia. Los cambios se solicitan al equipo; todavía requieren modificar registro y desplegar, previa autorización.
- Definir reposición por defecto, desgaste o daño, transporte y costo antes de cobrar; no asumir que todo cambio físico es gratuito. Si se solicita otra pieza, confirmar stock y precio.
- Acordar medición manual inicial y sus límites: no hay contador automático de Smart Links activado. No vender estadísticas como función disponible.

## Alta y enlace de reseñas

1. El titular abre su Perfil de Empresa de Google y obtiene la opción para pedir/compartir reseñas. Puede entregar ese enlace a AB Reviews; no debe compartir contraseña ni códigos de acceso.
2. Abrir el enlace en otra sesión y comprobar nombre, dirección/sucursal y que permite escribir una reseña, no solo ver una búsqueda. Pedir confirmación al encargado. No publicar una reseña de prueba ni ofrecer premios.
3. Elegir slug estable en minúsculas y guiones; no incluir teléfono ni correo. No reutilizar slugs entregados. Registrar ID interno privado, slug y versión de destino.
4. Crear entrada en `src/data/reviewClients.ts`: modo `redirect` para acceso directo a Google o `page` para página y canales aprobados. Mantener `demo` solo para el ejemplo. Validar URLs de cada plataforma.
5. Ejecutar test, lint y build; después de autorización de publicación, probar URL pública directa y recarga. No entregar un enlace aún ausente de producción.

## NFC y QR

1. Programar el chip con un registro NDEF de URL HTTPS al Smart Link completo, nunca directamente a Google. Comprobar lectura después de grabar. No bloquear permanentemente el chip hasta probarlo y acordar la configuración.
2. Generar QR funcional con `npm run qr -- slug` después de dar de alta el negocio. La CLI actual genera el dominio público sin source; conservarlo así hasta aprobar la arquitectura de canales. Los QR dentro de imágenes comerciales son ilustrativos y no sirven como entregable.
3. Si se aprueba la fase de métricas, generar URLs separadas `?source=nfc` y `?source=qr`, verificar cada payload y mantener mismo negocio/destino. Habrá que actualizar la CLI antes de usarlos. No inventar datos de canal para tarjetas ya entregadas.
4. Mantener margen blanco, contraste y tamaño legible. Probar archivo digital y QR físico impreso en condiciones de uso. La Card actual tiene QR digital; no prometer QR impreso en ella. El Stand sí muestra QR físico. Verificar que el QR del producto físico pueda apuntar al Smart Link correcto antes de venderlo como configurado.
5. Kit: probar stand y ambas tarjetas. La foto original muestra una tarjeta, pero se entregan dos. No ofrecer logo del negocio impreso ni rediseño físico como parte del precio.

## Matriz física obligatoria

| Prueba | Android real | iPhone real | Evidencia privada |
| --- | --- | --- | --- |
| NFC detecta la pieza y abre URL correcta | Pendiente | Pendiente | Modelo, SO, fecha |
| QR digital e impreso abre mismo negocio | Pendiente | Pendiente | Payload decodificado |
| Aparece sucursal correcta en Google | Pendiente | Pendiente | Confirmación del encargado |
| Sin sesión Google: pide autenticación al publicar | Pendiente | Pendiente | Observación, sin guardar credenciales |
| Redirección o página según modo acordado | Pendiente | Pendiente | Modo y versión |
| Sin NFC: alternativa QR funciona | Pendiente | Pendiente | Pieza y colocación |

Probar con NFC activado en Android, posición de antena apropiada y sin apoyo metálico que interfiera. Probar cámara/lector real; el emulador no valida antenas ni impresión. Si hay fallo, registrar si es lectura NFC, QR, red, Smart Link o destino; no atribuirlo automáticamente a Google.

## Línea base y seguimiento

Antes de instalar: registrar fecha/hora y zona horaria, número público de reseñas, valoración visible, días abiertos y volumen de atención disponible. Recoger un período anterior comparable (idealmente 30 días) solo si hay evidencia; si no, marcarlo como no disponible. No reconstruir conteos inventados. Registrar promociones, cierres y campañas concurrentes.

| Momento | Qué hacer | Qué guardar |
| --- | --- | --- |
| Entrega / día 0 | Probar piezas, ubicar stand, enseñar invitación neutral y explicar soporte | Formato, cantidades, fecha, línea base, prueba física y condiciones |
| 48 horas | Confirmar lectura NFC/QR, sucursal correcta y comodidad del equipo | Fallos, correcciones y ubicación; sin inferir rendimiento comercial aún |
| 7 días | Revisar uso y muestra observada comparable | Invitaciones, aperturas observadas, reseñas públicas nuevas y contexto |
| 30 días | Comparar contra línea base y entrevistar encargado | Resumen con denominadores, limitaciones, problemas, decisión de continuidad |

Usar registro-diario.md y resumen-plantilla.json existentes. `npm run pilot:report -- RUTA_PRIVADA.json` valida agregados; no obtiene datos de Google ni verifica evidencia por sí mismo. Separar invitaciones, intentos, accesos correctos y reseñas públicas. Las métricas del sitio comercial (catálogo/WhatsApp) no miden el uso de las tarjetas del negocio.

Indicadores: aperturas observadas/invitaciones de la MISMA cohorte; tasa de error por intentos; diferencia de reseñas públicas entre fechas, sin atribuir todo el cambio a AB Reviews. Publicaciones verificadas solo de forma voluntaria y agregada, sin exigir mostrar la cuenta o el texto. Si faltan denominadores, informar «no disponible», no cero. Aun con servidor futuro se reportarán accesos filtrados, no clientes únicos ni publicaciones.

## Incidencias y cambio de destino

Recibir por WhatsApp/correo, identificar negocio y pieza, reproducir el fallo con consentimiento y registrar fecha. Priorizar restaurar acceso correcto. Un destino equivocado se corrige y se vuelve a probar; no reutilizar el slug de otro negocio. Cambiar únicamente destino mantiene URL grabada. Documentar consumo del cambio incluido y confirmar trabajos adicionales antes de cobrarlos. Una reposición física necesita una nueva prueba de NFC y QR aunque el slug sea el mismo.

Al día 30 informar cierre del período de soporte y qué compromisos de enlace siguen vigentes según acuerdo. No desactivar de sorpresa una tarjeta por terminar el piloto; aplicar las condiciones y aviso pactados.

## Fotos y testimonios

Obtener autorización separada, voluntaria y registrada para fotografiar producto/local, mostrar nombre/logo del negocio y usar un testimonio. Definir canales (web/redes), texto y plazo; confirmar versión final y contacto para retirar permiso. Negarse no afecta soporte ni acceso a reseñas. Evitar clientes identificables en fotos sin su permiso. No fabricar testimonios ni usar reseñas públicas como autorización automática.

Texto de solicitud sugerido: «¿Nos autorizas a mostrar una foto del producto instalado y el nombre de tu negocio en nuestra web/redes? Podemos enviarte la imagen y el texto antes de publicarlos. Es opcional y no cambia las condiciones del piloto». Registrar respuesta y alcance en el expediente privado, no aquí.

## Condiciones para iniciar

- Fotos nuevas verificadas contra stock real; QR comercial aclarado, sin afiliación aparente a Google.
- Precios, soporte, cambio, continuidad del enlace y reposición acordados por escrito.
- Primer negocio/sucursal y destino reales confirmados; el registro actual solo contiene demo.
- Android/iPhone reales y QR físico probados.
- Elegir medición manual o aprobar arquitectura y costos antes de activar BD.
- Autorización de despliegue y comprobación posterior de producción. No se han enviado invitaciones comerciales en este sprint.
