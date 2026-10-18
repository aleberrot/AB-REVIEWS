# Dirección de diseño · AB Reviews

## Problemas encontrados

- El diseño anterior repetía tarjetas redondeadas, tonos suaves y títulos de beneficio intercambiables. La oferta seguía siendo poco tangible.
- La tabla de precios no explicaba diferencias de contenido; obligaba a preguntar por todo.
- El teléfono ocupaba protagonismo sin mostrar un enlace propio funcionando.
- La demo terminaba en un mensaje, pero no usaba infraestructura de cliente compartida.
- Había estilos de plantilla Vite y numerosos bloques de sobrescritura. El contenedor estrecho y los estilos globales condicionaban las páginas.

## Decisiones aplicadas

- Dirección de catálogo: papel cálido, verde tinta, líneas divisorias y números de referencia. Bordes discretos y sin gradientes.
- Titulares serif de sistema; texto funcional sans serif. Sin dependencia de fuentes externas.
- Fotografías reales de Card, Stand y Kit en catálogo. La escena ilustrativa del hero sigue rotulada como representación.
- Precios de lanzamiento y regulares explícitos. Sin tachados, temporizadores, stock inventado ni testimonios ficticios.
- Alcance comercial visible: pago único, contenido del Kit, soporte, cambio de destino y despacho aparte.
- QR real y Smart Link probado. Los botones de consulta identifican el producto en WhatsApp.
- FAQ para resolver NFC, cuenta Google, mensualidad y valoraciones libres.
- Estilos reorganizados: base en `index.css`, páginas/componentes compartidos en `App.css`, escena del hero en `Hero.css`.

## Siguiente mejora visual de mayor valor

Corregir el arte físico con estrellas junto al logo de Google antes de una nueva publicación. Fotografiar el Kit completo (stand y dos tarjetas), fondo neutro y una toma en mesón con permiso. Mantener marca AB, instrucciones neutrales en español y proporciones verificables. No usar imágenes generadas que presenten como fabricado un acabado que todavía no existe. Ver auditoría y fuentes en `EVIDENCIA-Y-PILOTO.md`.
