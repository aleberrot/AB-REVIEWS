# Identidad A y Smart Link

Dirección elegida por Alejandro: verde, crema y lima, titulares sans serif y «Tus clientes de hoy pueden inspirar a los de mañana». Las redes usan iconos de Instagram y Facebook, con nombres accesibles, foco visible y objetivos de 52 px. Google y WhatsApp mantienen acciones escritas.

El favicon SVG reemplaza el gráfico de plantilla por el monograma AB en verde y lima, trazado con vectores para no depender de fuentes instaladas.

## Configuración

El registro público `src/data/reviewClients.ts` admite `mode: 'page'`, además de los modos existentes `redirect` y `demo`. No se agregaron clientes reales. El modo `page` requiere `reviewUrl` de Google y puede incluir `whatsappUrl`, `instagramUrl` y `facebookUrl`; los canales ausentes o rechazados no se muestran. Las direcciones deben ser HTTPS, sin credenciales ni puertos personalizados, y pertenecer a los dominios admitidos por cada plataforma.

La validación del dominio no comprueba la propiedad del perfil ni la sucursal: el equipo debe verificar ambos antes de configurar un negocio. Usar solo datos comerciales públicos autorizados, nunca teléfonos privados ni credenciales. Ejecutar las pruebas y validar el registro antes de entregar. No usar URLs de ejemplo como clientes activos.

La demo reutiliza el mismo componente de página con acciones simuladas. No abre Google, WhatsApp o perfiles reales; no publica ni recopila datos. El modo de redirección directa conserva su comportamiento anterior. Añadir opciones implica un toque adicional para llegar a Google: comprobar comprensión y tiempo en el piloto, sin asumir mejores conversiones.

## Revisión pendiente antes de producción

- Aprobar y fusionar el PR; este cambio no autoriza despliegue en producción.
- Comprobar destinos y sucursal por negocio y confirmar qué configuración incluye su oferta.
- Pruebas físicas NFC/QR en iPhone y Android, zoom y lectores de pantalla.
- Corregir el arte físico y renovar fotografías según el informe comercial existente.
- El piloto continúa como propuesta: no hay resultados ni analítica automática nuevos.
