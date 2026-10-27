# Fotografías comerciales y footer — 26/10/2026

Base: main 877d3fa del repositorio aleberrot/AB-REVIEWS.

Se sustituyen las tres fotos antiguas del catálogo por cuatro WebP: tarjeta blanca, tarjeta negra, stand y kit completo. Se retira también hero.png, sin referencias activas. Las imágenes se muestran directamente, sin el desplegable provisional. La demo NFC/QR conserva su comportamiento.

El collage de /mnt/data no estuvo disponible en este equipo. Se recuperaron n1.jpeg, n2.jpeg y n3.jpeg del chat y se preparó una nueva edición comercial de estudio a partir de ellas. Se conservaron los diseños impresos y se recortaron las tres piezas. La imagen es una edición generada, no una nueva fotografía documental. El QR fotográfico es ilustrativo y no se presenta como funcional.

Footer: «Servicio independiente. Google y sus marcas pertenecen a Google LLC.» en texto secundario.

Verificación: build de producción correcto; 13 pruebas existentes aprobadas, incluida decodificación del QR de demo. Sin referencias en src a las imágenes retiradas. Galería con object-fit: contain y anchos flexibles; se conservan los puntos de adaptación del catálogo. La revisión visual en escritorio y móvil quedó pendiente porque el navegador integrado no pudo conectar con la vista previa. No se afirma validación visual responsive.

Despliegue: no se fusionó main ni se desplegó producción. Cambios preparados en rama para revisión.

## Actualización: explicación visual del servicio

Se sustituye /r/tu-negocio por una vista ilustrativa de Mesa & Miga y «La página de tu negocio. Lista para compartir.». El botón abre /r/demo; se mantiene la opción de acceso directo a Google. Se simplifican también el texto del hero, los servicios incluidos y el enlace visible de la demo.

El recorrido A/B/C se reemplaza por tres pasos con iconos SVG propios: teléfono, opinión y local. Textos: «Tu cliente se acerca», «Comparte su experiencia» y «Alguien más te descubre». No hay testimonios, valoraciones ni resultados ficticios.

Verificación visual posterior: navegador integrado disponible; escritorio 1366 × 900 con tres columnas y móvil 390 × 844 con pasos verticales. Sin desbordamiento horizontal en ambos tamaños. Botón del ejemplo comprobado hasta /r/demo. Build y 13 pruebas aprobados. Capturas guardadas entre los entregables. No desplegado.
