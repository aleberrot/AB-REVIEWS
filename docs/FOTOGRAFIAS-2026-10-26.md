# Fotografías comerciales y footer — 26/10/2026

Base: main 877d3fa del repositorio aleberrot/AB-REVIEWS.

Se sustituyen las tres fotos antiguas del catálogo por cuatro WebP: tarjeta blanca, tarjeta negra, stand y kit completo. Se retira también hero.png, sin referencias activas. Las imágenes se muestran directamente, sin el desplegable provisional. La demo NFC/QR conserva su comportamiento.

El collage de /mnt/data no estuvo disponible en este equipo. Se recuperaron n1.jpeg, n2.jpeg y n3.jpeg del chat y se preparó una nueva edición comercial de estudio a partir de ellas. Se conservaron los diseños impresos y se recortaron las tres piezas. La imagen es una edición generada, no una nueva fotografía documental. El QR fotográfico es ilustrativo y no se presenta como funcional.

Footer: «Servicio independiente. Google y sus marcas pertenecen a Google LLC.» en texto secundario.

Verificación: build de producción correcto; 13 pruebas existentes aprobadas, incluida decodificación del QR de demo. Sin referencias en src a las imágenes retiradas. Galería con object-fit: contain y anchos flexibles; se conservan los puntos de adaptación del catálogo. La revisión visual en escritorio y móvil quedó pendiente porque el navegador integrado no pudo conectar con la vista previa. No se afirma validación visual responsive.

Despliegue: no se fusionó main ni se desplegó producción. Cambios preparados en rama para revisión.
