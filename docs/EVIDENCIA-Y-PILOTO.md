# AB Reviews evidencia comercial y plan piloto

Informe para Alejandro y AB Software Works. Revisión al 18 de octubre de 2026. Mercado propuesto: negocios con atención presencial en Chile. Este documento reúne auditoría, benchmarking, evidencia, oferta y protocolo de prueba. La recomendación es vender configuración y facilidad de acceso a opiniones auténticas, medir el uso y evitar prometer ventas o posicionamiento.

## Estado y alcance verificado

Se consultó reviews.absoftwareworks.com por HTTPS y se abrió la landing en navegador. Se revisó el repositorio público aleberrot/AB-REVIEWS, rama main, y su registro de clientes. La conversación anterior aportó diez fotografías adjuntas, pero no el contenido de las respuestas anteriores. El repositorio ya contiene tres fotografías reales optimizadas; no debe describirse su incorporación como trabajo nuevo de esta revisión.

La landing presenta Card, Stand y Kit, precios en CLP, pago único, demo interactiva, contacto, NFC y QR y un Smart Link. La identidad de interfaz usa verde oscuro, crema y acento lima; combina títulos editoriales con bloques de producto. Conviene conservar esta base y reforzar AB como marca principal en el objeto físico. La ilustración del hero está rotulada como representación, lo que evita confundirla con una fotografía.

El código tiene una sola entrada, demo. No hay cinco clientes activos ni evidencia de pilotos ejecutados. /r/:slug resuelve el destino desde un registro público y redirige mediante JavaScript. Un cambio requiere editar y desplegar; no existe panel de autoservicio, servidor de métricas ni verificación de publicaciones en Google. NFC y QR usan un enlace estable, pero el funcionamiento físico requiere pruebas reales. No se ha demostrado equivalencia exacta entre el commit local y el despliegue público.

## Prioridades de la auditoría

1. Antes de producción: revisar arte físico y marcas. La fotografía del Kit muestra cinco estrellas junto al logotipo de Google, algo que la guía oficial prohíbe [7]. Corregir el producto y tomar nuevas fotos, sin retocar la foto para simular un objeto que aún no existe.
2. Antes de cobrar: confirmar impuestos del precio final, stock, despacho, continuidad de dominio, plazo del cambio incluido y condiciones de reposición y soporte. No inventar SLA ni compromiso de por vida.
3. Antes del piloto: acordar cinco negocios, consentimiento, baseline y método de registro. No anunciar analítica automática que no existe.
4. En la rama de revisión: mensajes con evidencia, FAQ de límites, propuesta de piloto y herramienta de cálculo con pruebas. La publicación queda pendiente de autorización.

La comprobación visual pública fue de la vista disponible en navegador; no reemplaza una auditoría exhaustiva en múltiples tamaños, lectores de pantalla o teléfonos físicos.



## Historia y madurez de la categoría

El código QR fue anunciado por DENSO WAVE en Japón en 1994, inicialmente para necesidades de identificación y control industrial. No nació como una herramienta para reseñas. La historia oficial describe su posterior adopción en otras actividades comerciales [1]. En 2026 han pasado 32 años desde ese anuncio; esta resta expresa antigüedad de la tecnología, no años de resultados comerciales de AB Reviews.

El NFC Forum se formó en 2004 y documenta veinte años de desarrollo del ecosistema en su conmemoración de 2024 [2]. En 2026 han transcurrido 22 años desde su creación. Esta fecha corresponde a la organización, no al primer uso de toda comunicación de proximidad ni al inicio de tarjetas para reseñas.

Yelp declara que se fundó en San Francisco en 2004 [3]. Es un hito verificable de reseñas de negocios en internet; no se presenta como la invención de todas las reseñas online. El trabajo de Luca ya analizó Yelp y restaurantes de Seattle con datos de 2003 a 2009 [5]. Google actualmente permite solicitar opiniones mediante un enlace o QR [6]. Esto confirma madurez y aceptación de la mecánica, sin demostrar ventas adicionales por NFC.

No se verificó una fecha primaria única para la aparición de tarjetas NFC dedicadas a reseñas. No debe afirmarse que AB inaugura la categoría, que el servicio lleva determinada cantidad de años en el mercado o que su antigüedad garantiza eficacia. Tampoco se halló en las fuentes revisadas un ensayo específico de AB Reviews o de tarjetas NFC en negocios chilenos.

## Posicionamiento recomendado

AB Reviews facilita la última parte de una invitación a opinar: llevar al cliente al enlace correcto de su sucursal. El valor comercial combina el soporte físico, la configuración, la comprobación del destino y una guía de uso. La alternativa gratuita existe: el negocio puede obtener su enlace o QR en Google [6]. El precio debe justificarse por el trabajo y la presentación, no por ocultar esa alternativa.

Cliente inicial propuesto: cafeterías, barberías, peluquerías, restaurantes pequeños y comercios de atención presencial, con una ficha legítima y una persona responsable. La ubicación del piloto aún se debe acordar; no se supone una ciudad por el idioma o el dominio. Evitar comenzar en servicios sanitarios o situaciones sensibles donde solicitar una reseña al salir pueda generar presión o revelar información personal.

Mensaje principal: «Tu cliente puede llegar al enlace de reseñas de tu negocio con NFC o QR. Te entregamos el formato configurado y una guía para invitar a compartir experiencias reales». La hipótesis es reducir pasos de acceso; se debe comprobar con observación de tareas y entrevistas.



## Evidencia sobre decisiones y ventas

### Lectura de reseñas en Estados Unidos

BrightLocal publicó el 11 de febrero de 2026 una encuesta en la que el 97% declaró leer reseñas de negocios locales [4]. Población: panel de 1.002 adultos estadounidenses mediante SurveyMonkey, descrito por el editor como representativo. Metodología: encuesta de conducta declarada; no seguimiento experimental de compras. Las fechas exactas de campo no están especificadas en el apartado metodológico consultado. La cifra no es una tasa de conversión, no significa que las reseñas determinen el 97% de una compra y no se extrapola a Chile. El proveedor vende herramientas de marketing, un interés relevante al interpretar su investigación.

Uso comercial admisible: «Las reseñas forman parte de cómo muchas personas evalúan negocios. En un panel de adultos de Estados Unidos, el 97% declaró leerlas». Mantener junto a la cifra año, país, tamaño muestral y enlace. Evitar «Las reseñas aumentan tu decisión de compra en un 97%».

### Ingresos de restaurantes y calificaciones en Yelp

Michael Luca, Harvard Business School, working paper de 2011 revisado en 2016, combina reseñas con datos tributarios de 3.582 restaurantes que operaron en Seattle, Washington, entre enero de 2003 y octubre de 2009 [5]. El trabajo reporta un efecto de 5% a 9% en ingresos por una estrella adicional de calificación en Yelp, concentrado en restaurantes independientes. Usa regresiones y discontinuidad en los umbrales de redondeo para sostener la interpretación causal de la calificación visible.

La evidencia causal depende de los supuestos del diseño y del entorno estudiado; no es un ensayo aleatorio de entrega de tarjetas. El número total de restaurantes no es el tamaño de todas las submuestras alrededor de los umbrales. No equivale a que conseguir una reseña más aumente ingresos en ese rango. No se traslada a Google, a Chile en 2026 ni a AB Reviews. El documento es un working paper, condición que se conserva al citarlo.

### Conversión de productos en comercio electrónico

El informe Spiegel Research Center de Northwestern de junio de 2017 reporta una probabilidad de compra 270% mayor en productos con cinco reseñas frente a ninguna [8]. Es un incremento relativo, equivalente a 3,7 veces la probabilidad de referencia; no son 270 puntos porcentuales ni un aumento garantizado de facturación. Para el minorista de regalos de alta gama estudia aproximadamente 15,5 millones de páginas vistas, 7,8 millones de usuarios y 1.800 productos durante un año. No se identifican país del minorista ni fechas exactas de ese año en la síntesis consultada. Son datos comerciales observados y modelados; esta revisión no los trata como un experimento aleatorio.

En todos los casos se investiga el papel de las reseñas o su visualización, no el efecto específico de NFC. El 270% queda para el informe y no como promesa en la landing. No hay base para anunciar una tasa de efectividad de AB antes del piloto.



## Benchmarking de alternativas

Comparación funcional consultada el 18 de octubre de 2026. Las prestaciones de proveedores son declaraciones de sus páginas, no auditorías independientes de calidad. No se comparan precios importados con CLP sin impuestos, envío y moneda confirmados.

| Alternativa | Acceso y operación | Implicación para AB |
| --- | --- | --- |
| Enlace o QR de Google [6] | El negocio puede compartir acceso a su ficha y solicitar reseñas | Alternativa sin hardware NFC; AB debe demostrar valor de configuración y entrega |
| Tap Tag [9] | Publicita NFC y QR dinámico, panel y analítica de vistas de siete días, con compra única y opciones adicionales | Competidor con más autoservicio; AB no debe anunciar esas funciones como propias |
| Tapt [10] | Documenta activación del stand por NFC o QR y revisión de sucursal; el stand de reseñas no aparece en su Dashboard | Comprobar destino y probar con otro teléfono es una práctica que AB puede adoptar |
| AB Reviews auditado | Formatos físicos, cambio gestionado por el equipo y registro de destinos en código | Diferenciar por atención local y puesta en marcha; validar con entrevistas, sin proclamar superioridad |

Tap Tag también publicita funciones opcionales de filtrado. No se recomienda copiarlas: dirigir solo a clientes satisfechos a Google constituye solicitud selectiva prohibida [11]. Las páginas de competidores son útiles para comparar oferta y proceso; sus afirmaciones de eficacia no sustituyen investigación.

## Identidad y fotografías

Conservar verde, crema y lima, el nombre AB Reviews y la demo identificada como ilustración. La foto real del Kit aporta transparencia: muestra un stand y una tarjeta, mientras la oferta incluye dos tarjetas. El texto actual ya aclara esa diferencia. La siguiente sesión debe mostrar el Kit completo.

Las fotos actuales tienen fondo urbano, malla de seguridad y sombras que distraen; los objetos llevan instrucciones en inglés y la marca Google domina sobre AB. Recomendación: fondo neutro mate, luz lateral difusa, toma frontal legible y toma a tres cuartos. Añadir una toma contextual en mesón con permiso del negocio, sin rostros o datos de clientes. Fotografiar Card, Stand y Kit completo con escala y acabado coherentes; no afirmar material o dimensiones sin medirlos.

La guía oficial para reseñas permite el logo oficial G o la palabra Google cuando se hace referencia a opiniones, con condiciones. Prohíbe estrellas junto al nombre o logo, lockups o badges no oficiales y exige consentimiento para reutilizar reseñas en publicidad [7]. La regla general también prohíbe sugerir afiliación o patrocinio [12]. La foto inspeccionada muestra estrellas junto a la G: se requiere corregir el diseño físico antes de una nueva campaña. El aviso de independencia no corrige ese diseño por sí solo.



## Ficha de oferta para revisión comercial

Los importes siguientes son los publicados en el repositorio al revisar, no una nueva autorización de precio. Deben confirmarse tratamiento tributario, stock y precio final antes del pago. Mantener el precio regular solo si existe una base comercial real para usarlo como referencia.

| Formato | Lanzamiento CLP | Regular CLP | Contenido publicado |
| --- | --- | --- | --- |
| AB Review Card | 14.990 | 17.990 | Una tarjeta NFC y QR digital |
| AB Review Stand | 22.990 | 24.990 | Un stand NFC con QR visible |
| AB Review Kit | 32.990 | 39.990 | Un stand y dos tarjetas para el mismo negocio |

Incluye: Smart Link, destino confirmado de la sucursal, programación NFC, QR digital, comprobación antes de entrega, mini guía, treinta días de soporte de configuración y un cambio de destino. El Kit comparte el destino; el precio no incluye tres sucursales. Despacho se cotiza aparte y retiro se coordina. No hay mensualidad obligatoria publicada, analítica automática ni panel de autoservicio.

Soporte publicado: treinta días desde la entrega para configuración. Canal: alejandro@absoftwareworks.com. Alcance propuesto para formalizar: revisión del destino, ayuda con posición NFC y uso del QR y corrección de configuración imputable a AB. No se inventa un plazo de respuesta: horario y compromiso deben acordarse por escrito. Reposición por defecto, daño accidental, reimpresión, nuevos diseños o instalación presencial requieren términos separados, preservando los derechos legales aplicables.

La ficha de pedido debe registrar fecha de entrega e inicio del soporte, vigencia y número de cambios incluidos, sucursal autorizada, precio e impuestos, envío, acabado aprobado, pruebas NFC/QR, duración del alojamiento, forma de exportar el destino y tratamiento al cierre del servicio. Recomendación por validar: ofrecer un plazo explícito de continuidad y avisar antes del vencimiento. No incorporar una duración arbitraria al contrato público sin capacidad de cumplirla.

## Guiones comerciales y de atención

Presentación: «Preparamos una tarjeta o un stand para que tus clientes lleguen al enlace de reseñas con NFC o QR. Revisamos tu sucursal y lo probamos antes de entregarlo. No te prometemos estrellas ni ventas: te ayudamos a hacer más sencillo el acceso».

Invitación del personal: «Si quieres compartir cómo fue tu experiencia, aquí puedes abrir el enlace de reseñas con tu teléfono o el QR. Es voluntario y puedes opinar con libertad». Aplicar el mismo criterio a todos los clientes reales; nunca preguntar primero si la visita fue buena para decidir a quién mostrar el enlace.

Objeción sobre QR gratuito: «Puedes usar el QR que entrega Google. AB agrega el formato físico, configuración y acompañamiento. Si eso no te aporta valor, el QR directo puede ser suficiente». Objeción sobre ventas: «No tenemos evidencia para prometerte un porcentaje. Podemos medir uso y nuevas reseñas durante un piloto».



## Protocolo del piloto de cinco negocios

Objetivo: comprobar usabilidad, adopción del personal y viabilidad de la oferta durante treinta días de intervención. No estimar causalidad de ventas con cinco establecimientos por conveniencia. Costo o préstamo, responsables y fechas deben acordarse; no se han reclutado participantes ni iniciado visitas.

Reclutar P01 cafetería, P02 barbería, P03 peluquería, P04 restaurante y P05 comercio, en una zona de operación acordada en Chile. Son perfiles de reclutamiento, no negocios confirmados. Exigir ficha correcta, autorización del encargado, actividad suficiente y voluntad de registrar transacciones. No elegir por calificación alta ni excluir opiniones negativas. Registrar por qué cada negocio aceptó o rechazó y evitar presentar la muestra como representativa del país.

### Antes del día uno

Medir treinta días consecutivos previos con el mismo calendario de apertura y fuentes de datos: transacciones o atenciones, solicitudes de reseña habituales, nuevas reseñas públicas identificadas por fecha, total al comienzo y al final y cierres o promociones. Si no hay datos históricos fiables, recolectar baseline prospectivo antes de iniciar; no reconstruirlo con ceros. Guardar evidencia con fecha y custodiar datos del negocio en privado.

No confundir nuevas publicaciones con diferencia neta del total: puede haber eliminaciones o retrasos. Registrar ambas por separado. Si la plataforma no muestra datos suficientes, marcar la observación como no disponible. Registrar el promedio de estrellas solo como contexto, nunca como objetivo o condición para pagar al personal.

### Días uno a treinta

En el día uno confirmar enlace y sucursal, explicar el guion neutral y probar NFC y QR con iPhone y Android reales. No reemplazar esas pruebas con la demo. Instalar el formato adecuado y fotografiar su posición con consentimiento. Mantener una invitación uniforme, por ejemplo a cada cliente al terminar la atención, sin usar satisfacción como criterio.

Registrar diariamente transacciones, invitaciones observadas, intentos NFC y QR, aperturas correctas, errores, publicaciones verificadas voluntariamente y nuevas reseñas públicas. Hacer ventanas fijas de observación equivalentes, por ejemplo dos de veinte minutos por día abierto, previamente acordadas. Una persona observada cuenta una sola vez aunque repita el escaneo; los intentos repetidos se guardan como diagnóstico. Las tasas del embudo se refieren solo a esa cohorte observada, no a todo el tráfico.

Revisar en días siete, catorce y veintiuno enlace, posición, registro y carga del personal. Corregir fallos y dejar fecha de cada cambio para interpretar resultados. En día treinta entrevistar al encargado y resumir por negocio; en día treinta y siete comprobar publicaciones demoradas por separado. El período de intervención sigue siendo de treinta días.



## Métricas y conversión verificable

| Métrica | Definición y denominador | Fuente y límite |
| --- | --- | --- |
| Apertura observada | Personas que llegan al destino correcto / invitaciones de la cohorte observada | Registro de tarea voluntario; no mide todo el día |
| Uso por canal | Intentos y aperturas de NFC y QR por separado | Puede haber reintentos o cambio de canal |
| Conversión verificada | Publicaciones comprobadas / aperturas de la misma cohorte | No sustituir numerador por reseñas totales del negocio |
| Reseñas por atención | Nuevas reseñas públicas / transacciones × 100 | Comparación contextual; no atribución a AB |
| Reseñas por día | Nuevas publicaciones / días del período | Informar días abiertos y cierres |
| Fiabilidad | Pruebas correctas / pruebas programadas | Medir destino correcto, no solo carga de página |

Una apertura no prueba una reseña. La redirección no recibe una confirmación de publicación de Google. Para una comprobación individual, el cliente puede mostrar voluntariamente que publicó y el operador comprobar la presencia pública cuando esté disponible, sin pedir estrellas, texto concreto, captura de cuenta o identidad para obtener beneficios. Guardar solo ID de observación, fecha, estado y referencia de evidencia minimizada con acceso restringido. No almacenar nombres de usuario en el repositorio. Si no se verifica, clasificar como desconocido, aunque la persona diga que publicó.

La publicación comprobada debe pertenecer al mismo conjunto de aperturas y no contarse dos veces. Personas que declinan observación o verificación siguen teniendo exactamente el mismo acceso. Esto produce una tasa de publicaciones verificadas con posible sesgo de consentimiento y subregistro, no una estimación completa de todas las conversiones. Informar también desconocidos y tamaño de cohorte.

La versión actual no mide escaneos automáticamente. Para el piloto inicial se propone observación manual con registro diario. Un contador futuro requiere persistencia, control de duplicados, exclusión de bots y pruebas, aviso de privacidad, retención y validación contra observaciones. No es lícito llamar «personas» a solicitudes HTTP. Para distinguir el canal en una instrumentación futura pueden usarse marcadores de origen diferentes manteniendo el mismo destino; no se activó rastreo en esta revisión.

El calculador desarrollado acepta agregados de cinco negocios y valida enteros, períodos y denominadores. Devuelve null cuando no hay denominador. No valida evidencia externa y no convierte correlación en causalidad. La plantilla de registro guarda blancos para datos pendientes; no hay resultados simulados presentados como reales.

Ventas: si el negocio desea aportar ingresos o tickets, tratarlos como una serie exploratoria privada junto a promociones, temporada, clima y horarios. No publicar «AB aumentó ventas» a partir del antes y después. Un ensayo posterior con asignación aleatoria, controles y tamaño justificado sería necesario para estimar efectos más sólidos.



## Entrevistas y criterios de decisión

Al inicio preguntar al encargado: ¿cómo solicitan opiniones hoy?, ¿qué dificultad concreta quieren resolver?, ¿cuántas atenciones reciben?, ¿quién mantendrá el registro?, ¿qué condiciones de soporte consideran necesarias? Registrar respuestas literales relevantes con permiso y separar hechos de expectativas.

En día siete preguntar al personal: ¿se recuerda ofrecerlo?, ¿en qué parte de la atención encaja?, ¿cuántas veces falló y por qué?, ¿se sintió presión para pedir una valoración positiva? Corregir ese último punto inmediatamente. Al cliente voluntario preguntar: ¿entendió la instrucción?, ¿encontró la sucursal correcta?, ¿qué paso resultó difícil?, ¿pudo decidir libremente si opinar? No solicitar una reseña como pago por la entrevista.

Al cierre preguntar al encargado: ¿qué cambió en su rutina?, ¿qué evidencia le resulta útil?, ¿compraría a los precios publicados?, ¿qué soporte esperaría?, ¿qué alternativa elegiría? Una intención declarada de compra no es una venta. Obtener permiso separado para citar una entrevista, usar nombre, imagen o testimonio. No usar reseñas públicas como testimonio comercial sin consentimiento [7].

Criterios internos propuestos, a fijar antes de iniciar; son umbrales de gestión, no estadísticas del mercado ni compromisos al comprador:

1. Seguridad y política: ninguna selección por satisfacción, incentivo o destino incorrecto sin corregir. Pausar un punto afectado hasta solucionar el problema.
2. Operación: cinco instalaciones comprobadas en ambos sistemas; al menos veinte pruebas técnicas programadas por negocio y 95% de apertura correcta. Son pruebas controladas, no clientes únicos.
3. Calidad de datos: registro en al menos 90% de días abiertos y treinta invitaciones observadas por negocio. Si faltan, extender medición o declarar inconcluso, sin esconder bajas.
4. Usabilidad: reportar tiempos, fallos y conversión verificada con numeradores y denominadores; no fijar una promesa universal de conversión antes de conocer la línea base. El mínimo de cohorte sirve para aprendizaje, no para precisión estadística nacional.
5. Valor comercial: al menos tres de cinco encargados declaran voluntad de comprar al precio final confirmado y explican el valor; informar cuántos efectivamente compran por separado.

Continuar si se cumplen los criterios de política, operación y datos y hay señales comerciales. Iterar si existe uso con problemas solucionables o escasa claridad de oferta. Detener si el servicio exige filtrar opiniones, hay fallos recurrentes o el costo de soporte impide sostener el precio. Publicar una ficha por negocio y una síntesis con mediana y rango; evitar que un negocio de alto tráfico oculte los demás. No excluir a quien tuvo resultados débiles.

Privacidad operativa propuesta: guardar registros con IDs P01 a P05 en carpeta privada, acceso solo del responsable y Alejandro, sin IP, huellas de dispositivo ni credenciales. Revisar y borrar evidencia individual a los sesenta días del cierre, conservando agregados anónimos si se acordó. Este plazo es una propuesta a formalizar con los participantes, no una política ya implantada.



## Implementación y pendientes de entrega

La rama de revisión incorpora evidencia contextualizada de BrightLocal, mensajes sin promesas, propuesta de piloto y FAQ sobre soporte, continuidad y límites de medición. Mantiene las fotografías reales y explica que corregir el arte físico sigue pendiente. No se cargaron clientes ficticios como negocios activos ni se habilitó captura de datos en producción.

Se desarrolló una herramienta local de resumen y pruebas de denominadores para no usar crecimiento total de reseñas como conversión del enlace. Se preparan registros diarios, ficha comercial y entrevistas para los cinco negocios. La herramienta procesa conteos que el operador debe comprobar. No sustituye un sistema de analítica ni acredita por sí sola que alguien publicó.

Antes de publicar: aprobar condiciones comerciales concretas, revisar el uso del logo según las guías vigentes, corregir estrellas en el objeto y renovar fotos, ejecutar pruebas físicas y revisar la rama o PR. Antes de activar el piloto: reclutar participantes, completar baseline, formalizar observación y privacidad y designar responsable por negocio. El despliegue en producción requiere confirmación de Alejandro.

## Referencias primarias

Consulta de todas las fuentes el 18 de octubre de 2026. Las cifras se conservan con población y límites en la sección de evidencia. Los enlaces llevan a autores, plataformas o proveedores originales.

[1] DENSO WAVE. History of QR Code. Historia del anuncio de 1994 y adopción industrial. https://www.qrcode.com/en/history/

[2] NFC Forum. NFC Forum 20th Anniversary. Formación del foro en 2004. https://nfc-forum.org/legacy/nfc-forum-20th-anniversary/

[3] Yelp. Company Fast Facts. Fundación en San Francisco en 2004. https://www.yelp-press.com/company/fast-facts/default.aspx

[4] BrightLocal. Local Consumer Review Survey 2026. Publicado el 11 de febrero de 2026; panel estadounidense mediante SurveyMonkey. https://www.brightlocal.com/research/local-consumer-review-survey/

[5] Luca, Michael. Reviews Reputation and Revenue The Case of Yelp.com. HBS Working Paper 12-016, 2011, revisión 2016. https://www.hbs.edu/ris/Publication%20Files/12-016_a7e4a5a2-03f9-490d-b093-8f951238dba2.pdf

[6] Google Business Profile Help. Tips to get more reviews. https://support.google.com/business/answer/3474122

[7] Google Partner Marketing Hub. Customer reviews. Guía de logos, estrellas y consentimiento. https://partnermarketinghub.withgoogle.com/brands/google/use-cases/customer-reviews/

[8] Medill Spiegel Research Center. How Online Reviews Influence Sales. Junio de 2017. https://spiegel.medill.northwestern.edu/wp-content/uploads/sites/2/2021/04/Spiegel_Online-Review_eBook_Jun2017_FINAL.pdf

[9] Tap Tag. Dynamic Tap and QR Review Standup Sign. Oferta declarada del proveedor. https://taptag.shop/products/dynamic-qr-tap-review-standup-sign

[10] Tapt Help Center. Activate a Tapt Stand or Google Review product. https://help.tapt.io/en/articles/10764841-activate-a-tapt-stand-or-google-review-product

[11] Google. Prohibited and restricted content. Fake engagement y solicitud selectiva. https://support.google.com/contributionpolicy/answer/7400114

[12] Google Brand Resource Center. Guidance. Independencia y uso de marcas. https://about.google/brand-resource-center/guidance/
