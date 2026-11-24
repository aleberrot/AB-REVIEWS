# Auditoría del sprint — 23/11/2026

Cambios preparados para una pull request, con commit y publicación de rama autorizados por el usuario. La PR #8 fue fusionada por el usuario. La corrección de las tres imágenes nuevas se prepara en una PR posterior, sin fusionarla ni desplegar producción. La activación de Analytics sigue pendiente.

## Base de trabajo

El checkout inicial estaba desactualizado frente a producción. Se preservó sin modificar y se recuperó una copia posterior, contrastada con GitHub antes de editar.

Sus fuentes, configuración, documentación y fotos coinciden con el árbol GitHub main **89732927601a424b92027f215d8059d049181e10** por hashes Git, normalizando CRLF a LF en texto. Solo faltaba el SVG de demo regenerable en outputs. Se copió esa base al workspace actual, en `work/ab-reviews`, sin metadatos Git ni cambios a los originales. No se pudo clonar por DNS. No se afirma que el checkout antiguo estuviera limpio.

El build inicial produjo `index-ojkdUQlr.js` e `index-B3jKcrII.css`, exactamente los nombres que carga producción. Home y Demo publicadas también coinciden con la base observada. Es evidencia fuerte de correspondencia; no se consultó el SHA privado de despliegue ni la cuenta Vercel.

## Mapa del código auditado

| Área | Archivos | Hallazgo |
| --- | --- | --- |
| Catálogo | pages/Home.tsx, data/products.ts | Tres productos, precios y cantidades correctos |
| Fotos | components/ProductObject.tsx, assets/products/ | Cuatro WebP comerciales existentes, lazy, dimensiones y contain |
| Home | pages/Home.tsx, components/hero/* | Hero, catálogo, servicios, página de ejemplo, pasos, evidencia, piloto, FAQ y contacto |
| Demo | pages/Demo.tsx, DemoDestination.tsx, BusinessDestination.tsx, SmartQr.tsx | QR generado por código; negocio ficticio y acciones simuladas |
| Rutas | router.tsx | Home, /demo, /r/:slug y ayuda en wildcard |
| Smart Links | lib/smartLinks.ts, data/reviewClients.ts, pages/ReviewLink.tsx | Modos demo/page/redirect; solo existe demo; destino controlado por registro |
| Vercel | vercel.json | Rewrite SPA a index.html; sin Functions ni BD |
| Contacto | ContactActions.tsx, Home.tsx, ReviewLink.tsx | wa.me/56937145672 y mailto:alejandro@absoftwareworks.com |
| Analítica | App.tsx, SiteMeasurement.tsx nuevo | No había SDK/snippet; integración opcional preparada y desactivada |

Las rutas del mapa son relativas a src salvo vercel.json. El wildcard muestra ayuda, pero sigue siendo una respuesta HTTP de SPA, no un 404 real del servidor. La redirección actual requiere JavaScript y usa window.location.replace, con enlace manual de respaldo. El modo página no debe perderse al introducir un backend.

## Cambios y justificación

- Se conserva el copy principal. Cada producto ahora muestra configuración, Smart Link, QR digital/físico según formato, soporte, un cambio de destino y despacho separado al lado de la consulta.
- Card: la imagen muestra dos variantes, pero se aclara que el precio incluye una tarjeta. No se promete QR impreso en Card ni impresión personalizada del logo del negocio.
- Se restauran las tres fotos originales como referencia desplegable, con alt, dimensiones y carga diferida. La foto original del Kit muestra un stand y una tarjeta; se aclara que se entregan dos tarjetas.
- Se conservan los cuatro WebP comerciales anteriores; no se borraron imágenes al intentar sustituirlas.
- Eventos tipados y pageviews opcionales con filtros de rutas y pruebas internas. No se creó un backend ni se contrataron servicios.
- Arquitectura y costos en MEDICION-Y-ARQUITECTURA.md; alta, NFC/QR, pruebas físicas, línea base, seguimientos y consentimiento en piloto/PROCEDIMIENTO.md.

## Imágenes nuevas: corrección completada

Se recuperaron los tres archivos exactos proporcionados por el usuario y se contrastaron sus tamaños con los originales. Se revisaron visualmente antes de generar derivados. Los problemas DNS del mecanismo inicial de descarga quedaron resueltos mediante la descarga del navegador; no se utilizaron imágenes sustitutas.

| Fuente | PNG original | JPEG 480 px | JPEG 800 px |
| --- | ---: | ---: | ---: |
| google_review_nfc_cards_duo.png | 1.420.219 B | 29.930 B | 61.687 B |
| white_nfc_review_stand_display.png | 1.456.413 B | 33.774 B | 74.409 B |
| ab_reviews_google_feedback_kit.png | 1.385.627 B | 35.046 B | 73.130 B |

Los PNG originales permanecen conservados fuera del bundle. El catálogo usa JPEG con calidad 88, srcSet 480/800, sizes, dimensiones explícitas y carga diferida. Se utiliza el codificador de Windows para evitar añadir dependencias al proyecto; no se requiere ejecutar el optimizador en Vercel. El script reproducible es scripts/optimize-product-images.ps1.

Card y Kit eliminan solamente márgenes blancos superior/inferior: mantienen todas las piezas y sus sombras. Stand conserva todo el encuadre. No se alteraron diseños, letras, logos ni códigos QR. Los cuatro WebP comerciales anteriores permanecen en el repositorio; las fotos originales continúan accesibles mediante el desplegable. Las leyendas aclaran que las nuevas son imágenes comerciales de referencia y que el QR es ilustrativo. La cantidad de Card sigue siendo una tarjeta.

| Imagen conservada/restaurada | Bytes | Función |
| --- | ---: | --- |
| ab-card-black-studio.webp | 29.872 | Comercial anterior |
| ab-card-white-studio.webp | 17.712 | Comercial anterior |
| ab-stand-studio.webp | 32.334 | Comercial anterior |
| ab-kit-studio.webp | 82.640 | Comercial anterior |
| ab-card-real.webp | 146.744 | Original restaurada |
| ab-stand-real.webp | 119.450 | Original restaurada |
| ab-kit-real.webp | 151.196 | Original restaurada |

Las siete imágenes tienen alt, tamaño explícito, lazy y decoding async. Originales: 1152 × 1536, sin estiramiento ni recorte. Se abrieron las tres originales en navegador y cargaron correctamente. Una imagen lazy cerrada puede tener naturalWidth=0 hasta abrirse; no implica recurso roto. El antiguo hero.png se conserva únicamente en la copia local y no se incluye en la pull request porque no tiene referencias activas.

## Verificaciones ejecutadas

| Verificación | Resultado y límites |
| --- | --- |
| TypeScript | Aprobado: tsc -b dentro del build |
| Build | Aprobado con Vite 8.3.2 y dependencias locales |
| Lint | Aprobado, sin errores |
| Suite | 15/15: 13 existentes y 2 nuevas de política de medición |
| Home | Hero/catálogo, precios, cantidades, servicios y fotos revisados |
| Demo | El botón Google cambia mensaje de simulación; no publica ni envía |
| /r/demo?source=qr | Muestra Mesa & Miga; parámetro no cambia destino |
| /r/no-existe | Ayuda visible, sin redirección |
| Modos redirect/page | Pruebas de resolución/validación; no existe negocio real para probar redirección completa en navegador |
| QR demo | Prueba automatizada de decodificación aprobada |
| Responsive Home/catálogo | Revisión visual y geometría en 375, 430, 768 y 1280 px |
| Responsive Demo | Revisión visual y geometría en los mismos cuatro anchos |
| Imágenes actuales | Cuatro comerciales y tres originales cargadas al mostrarlas |
| Consola local | Sin errores ni warnings capturados en los recorridos comprobados |
| Contacto | Cinco wa.me con número/mensajes correctos y dos mailto; no se comprobó envío, recepción ni propiedad del número |
| Analytics | Política de privacidad/exclusión probada; recepción externa, dashboard y plan NO verificados |
| Android/iPhone físicos | Pendientes; un emulador o navegador no valida NFC ni QR impreso |

La instalación limpia con npm ci no se completó por conectividad y terminó con error de npm. Para ejecutar las comprobaciones se reutilizaron las dependencias existentes de la copia local reciente. Por tanto, build/lint/tests sí están ejecutados, pero una instalación desde cero permanece sin verificar. `npm run qr -- demo` regeneró correctamente el SVG que faltaba.

Sin desbordamiento horizontal: innerWidth 375/430/768/1280 frente a scrollWidth 360/415/753/1265, respectivamente, en Home y Demo. La diferencia son 15 px de scrollbar. Catálogo: una columna móvil, dos en 768 y tres en 1280. Evidencia fuera del repositorio: outputs/ab-reviews-catalogo-1280.jpg del workspace.

El SDK @vercel/analytics no está instalado. La descarga de dependencias está bloqueada y el paquete no está en caché. Se preparó un puente opcional al script de primera parte; flags desactivados, sin recepción real comprobada. No anunciar que la analítica ya está activa. Ver propuesta, límites y alternativa manual en MEDICION-Y-ARQUITECTURA.md.

## Inventario del sprint inicial frente a su base de GitHub

Modificados:

- src/App.tsx
- src/App.css
- src/pages/Home.tsx
- src/components/ProductObject.tsx
- src/components/ContactActions.tsx
- docs/OPERACION.md
- docs/piloto/README.md

Creados/restaurados:

- .env.example
- src/components/SiteMeasurement.tsx
- src/lib/measurement.ts
- tests/measurement.test.mjs
- src/assets/products/ab-card-real.webp
- src/assets/products/ab-stand-real.webp
- src/assets/products/ab-kit-real.webp
- docs/MEDICION-Y-ARQUITECTURA.md
- docs/piloto/PROCEDIMIENTO.md
- docs/SPRINT-IMAGENES-CONVERSION-2026-11-23.md

No se añadieron dependencias. package.json, lockfile, rutas, registro y vercel.json conservan la base actual. Recuperar una base reciente no se presenta como cambio propio del sprint. OPERACION y piloto/README enlazan los documentos nuevos.

## Pendientes para iniciar

1. Revisar la PR de corrección de imágenes nuevas; los tres archivos ya se recuperaron, optimizaron e integraron. Confirmar el diseño y la variante física antes de entregar al primer negocio.
2. Verificar cuenta/plan Vercel; elegir puente o SDK, activar Analytics y comprobar recepción tras despliegue autorizado.
3. Elegir medición manual o aprobar arquitectura/costos de Function + Supabase antes de crear BD.
4. Dar de alta primer negocio real. Probar NFC y QR impresos con Android e iPhone, especialmente que el QR físico del stock se pueda configurar al Smart Link correcto.
5. Formalizar soporte, cambio, reposición, despacho y continuidad de enlaces; recoger permisos separados.
6. Revisar la pull request y sus pendientes antes de decidir la fusión. La publicación en producción requiere autorización separada; no se ha desplegado este sprint.

## Archivos de la corrección de imágenes

- Modificados: src/components/ProductObject.tsx, src/App.css y este informe.
- Añadido: scripts/optimize-product-images.ps1.
- Añadidas: seis imágenes JPEG con nombres de las fuentes y sufijos -480 / -800 en src/assets/products/.
- No se eliminó ninguna fotografía anterior ni se modificaron rutas, precios o analítica en esta corrección.

Verificación de esta corrección: build/TypeScript y lint aprobados; 15/15 pruebas existentes aprobadas. Catálogo nuevo revisado en navegador a 375, 430, 768 y 1280 px, sin desbordamiento horizontal y con las tres imágenes nuevas cargadas. Consola sin errores ni warnings capturados.
