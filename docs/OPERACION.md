# AB Reviews · Configuración y entrega v1

## Qué se vende

| Formato | Lanzamiento (CLP) | Regular (CLP) | Contenido físico |
| --- | ---: | ---: | --- |
| AB Review Card | $14.990 | $17.990 | 1 Card |
| AB Review Stand | $22.990 | $24.990 | 1 Stand con NFC y QR visible |
| AB Review Kit | $32.990 | $39.990 | 1 Stand + 2 Cards, un negocio y un enlace compartido |

Todos incluyen Smart Link, programación NFC, QR digital, configuración de Google Reviews, pruebas, mini guía, 30 días de soporte de configuración y un cambio de destino sin costo. Pago único, sin mensualidad obligatoria. Despacho no incluido; confirmar retiro o costo según destino antes del pago. No se ha definido ni publicado una tarifa de instalación presencial.

Las maquetas de la web son representaciones de formato. Sustituirlas por fotos de una muestra fabricada antes de prometer acabados, colores o materiales específicos. No publicar números de cupos ni testimonios sin evidencia.

## Alta de un negocio

1. Confirmar nombre, dirección y ficha de Google Business con el cliente.
2. Obtener y abrir el enlace de reseñas correcto; comprobar que corresponde a esa sucursal. No deducirlo del nombre ni usar un enlace de búsqueda genérico.
3. Añadir una entrada en `src/data/reviewClients.ts`. Usar `mode: 'redirect'`, `active: true` y un `reviewUrl` HTTPS real. Los datos son públicos y forman parte del sitio; no incluir datos privados.

```ts
{
  slug: 'nombre-del-negocio',
  businessName: 'Nombre confirmado del negocio',
  reviewUrl: 'ENLACE_HTTPS_VERIFICADO',
  active: true,
  mode: 'redirect',
}
```

El ejemplo es una plantilla: no activarlo con el marcador. Slugs en minúsculas, sin tildes, con números y guiones. No reutilizar un slug de una tarjeta entregada para otro negocio.

4. Ejecutar `npm test`, `npm run lint` y `npm run build`.
5. Desplegar y comprobar la URL pública `/r/nombre-del-negocio` abriéndola directamente y recargándola. `vercel.json` conserva las rutas de React en accesos directos. Un cambio de registro requiere volver a desplegar: no hay panel ni persistencia remota.
6. Generar el QR con `npm run qr -- nombre-del-negocio`. Se guarda en `outputs/qr/` y siempre codifica el dominio público. La CLI rechaza clientes desconocidos, inactivos y destinos inválidos.
7. Grabar en NFC el Smart Link completo `https://reviews.absoftwareworks.com/r/nombre-del-negocio`, nunca directamente la URL de Google. Usar el mismo enlace en el QR.
8. Probar producto físico y QR impreso antes de entregar.

## Cómo funciona la redirección

`/r/:slug` busca un cliente en el registro y redirige con `window.location.replace`. Es una redirección del navegador, requiere JavaScript e internet. Tiene un enlace manual de respaldo. Un destino inválido, cliente desactivado o slug inexistente muestra ayuda sin redirigir. Los parámetros de la visita no pueden elegir el destino. No se registra ni cuenta el tráfico.

`/r/demo` pasa por el mismo registro pero entra en modo demostración, sin enviar a un negocio real. `/demo` utiliza ese mismo componente de destino. El QR de `/demo` usa el origen actual para permitir pruebas de entorno; el QR pequeño del hero y la CLI usan el dominio público. No entregar un QR de localhost a un cliente.

Para cambiar un destino, editar únicamente `reviewUrl`, pasar las pruebas y desplegar. El slug permanece estable. Para desactivar una tarjeta, usar `active: false` y desplegar.

## Checklist por pedido

Copiar esta lista en el registro privado de cada pedido (no subir datos del cliente al repositorio).

- [ ] Formato, cantidad, precio final y despacho confirmados.
- [ ] Negocio y sucursal confirmados por el cliente.
- [ ] Ficha de Google y URL de reseña correctas.
- [ ] Slug único creado; no contiene datos privados.
- [ ] Pruebas de registro, lint y build aprobados.
- [ ] Versión desplegada y Smart Link público comprobado.
- [ ] NFC programado con Smart Link.
- [ ] QR SVG generado desde el mismo Smart Link.
- [ ] QR leído desde archivo y después de imprimir, con margen blanco intacto.
- [ ] NFC y QR probados con iPhone real.
- [ ] NFC y QR probados con Android real.
- [ ] Kit: las tres piezas usan el mismo enlace.
- [ ] Producto limpio, acabado revisado y embalaje preparado.
- [ ] Mini guía incluida y explicada al cliente.
- [ ] Fecha de entrega e inicio de los 30 días de soporte registrados.
- [ ] Un cambio de destino incluido explicado y registro preparado.
- [ ] Foto o testimonio solicitado solo con consentimiento; nunca exigir una reseña positiva.

## Prueba física pendiente

La aplicación no puede grabar una tarjeta ni validar su antena desde este entorno. Programar una tarjeta de prueba con `/r/demo` después del despliegue y completar las pruebas en ambos sistemas. Preparar una muestra con funda o sobre y la guía antes de la primera entrega. No marcar estos pasos como completados por haber pasado pruebas de software.

## Antes de publicar la oferta

Confirmar condiciones tributarias del precio publicado, continuidad del dominio/hosting, disponibilidad física y las condiciones comerciales del soporte y del cambio incluido. Estos compromisos están publicados en la landing y deben poder cumplirse. La v1 no incorpora pasarela de pago: se coordina y confirma el pedido por WhatsApp o correo.
