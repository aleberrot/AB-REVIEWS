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
- Maquetas CSS de Card, Stand y Kit para explicar el formato, etiquetadas como representaciones.
- Precios de lanzamiento y regulares explícitos. Sin tachados, temporizadores, stock inventado ni testimonios ficticios.
- Alcance comercial visible: pago único, contenido del Kit, soporte, cambio de destino y despacho aparte.
- QR real y Smart Link probado. Los botones de consulta identifican el producto en WhatsApp.
- FAQ para resolver NFC, cuenta Google, mensualidad y valoraciones libres.
- Estilos reorganizados: base en `index.css`, páginas/componentes compartidos en `App.css`, escena del hero en `Hero.css`.

## Siguiente mejora visual de mayor valor

Fotografiar el primer producto terminado en una caja o mesón real, con luz natural y permiso del negocio. Las maquetas no sustituyen evidencia física. No usar imágenes generadas que presenten como fabricado un acabado que todavía no existe.
