import { Link } from 'react-router-dom'
import Hero from '../components/hero/Hero'
import SiteHeader from '../components/SiteHeader'
import ProductObject from '../components/ProductObject'
import ContactActions from '../components/ContactActions'
import { products, includedServices, formatPrice } from '../data/products'

const steps = [
  { title: 'Nos cuentas de tu negocio.', text: 'Revisamos contigo la ficha de Google y el lugar donde vas a usar tu Card o Stand.' },
  { title: 'Lo dejamos preparado.', text: 'Configuramos tu enlace, programamos el NFC y generamos el QR. Probamos el acceso antes de entregar.' },
  { title: 'Lo pones a trabajar.', text: 'Lo colocas en tu punto de atención e invitas a tus clientes a compartir su experiencia. Incluimos una guía y 30 días de soporte.' },
]

function Home() {
  return (
    <main lang="es" id="contenido">
      <SiteHeader />
      <div id="contenido-principal" tabIndex={-1} />
      <Hero />

      <section className="service-strip" aria-label="Condiciones del servicio">
        <p>Pago único.<br /><strong>Sin mensualidad obligatoria.</strong></p>
        <p>Configurado para ti.<br /><strong>Listo antes de entregar.</strong></p>
        <p>Contacto directo.<br /><strong>30 días de soporte.</strong></p>
      </section>

      <section className="catalog section" id="productos" aria-labelledby="catalog-title">
        <div className="section-heading">
          <p className="eyebrow">01 / ELIGE DÓNDE PONERLO</p>
          <div>
            <h2 id="catalog-title">En tu mesón.<br />En la mano de tu cliente.</h2>
            <p>Elige el formato. Nosotros lo conectamos con tu negocio.</p>
          </div>
        </div>
        <div className="catalog__launch"><span className="status-dot" /> Lanzamiento para primeros clientes <span>Pago único · CLP</span></div>
        <div className="catalog__grid">
          {products.map((product, index) => (
            <article className={`catalog-item ${product.format === 'kit' ? 'catalog-item--featured' : ''}`} key={product.format}>
              <div className="catalog-item__label"><span>AB / 0{index + 1}</span><span>{product.format === 'kit' ? 'RECOMENDADO' : 'NFC + QR'}</span></div>
              <ProductObject format={product.format} />
              <p className="object-caption">{product.format === 'kit' ? 'Foto real: stand y una tarjeta del Kit' : 'Fotografía del producto real'}</p>
              <h3>{product.name}</h3>
              <p className="catalog-item__use">{product.use}</p>
              <p className="catalog-item__contents">{product.contents}</p>
              <p className="catalog-item__price">{formatPrice(product.launchPrice)} <span>CLP</span></p>
              <p className="catalog-item__regular">Precio regular: {formatPrice(product.regularPrice)}</p>
              <ContactActions product={product.name} compact />
            </article>
          ))}
        </div>
        <p className="small-print">Precios de lanzamiento sujetos a disponibilidad, confirmada antes de pagar. Despacho no incluido; se calcula según destino. Retiro a coordinar.</p>
      </section>

      <section className="included section" aria-labelledby="included-title">
        <div>
          <p className="eyebrow">MÁS QUE EL OBJETO</p>
          <h2 id="included-title">Abres el paquete.<br />Ya está configurado.</h2>
          <p>No tienes que programar el chip ni resolver el enlace de Google. Cada formato incluye la puesta en marcha para tu negocio.</p>
        </div>
        <ul className="included__list">
          {includedServices.map((service, index) => <li key={service}><span>0{index + 1}</span>{service}</li>)}
        </ul>
      </section>

      <section className="smart-link section" aria-labelledby="smart-title">
        <div className="smart-link__diagram" aria-label="NFC y QR abren tu enlace de AB Reviews: acceso directo a Google o página con reseñas y contacto">
          <div className="smart-link__sources"><span>TARJETA NFC</span><span>CÓDIGO QR</span></div>
          <span className="smart-link__arrow" aria-hidden="true">↓</span>
          <div className="smart-link__address"><span>TU ENLACE AB REVIEWS</span><strong>/r/tu-negocio</strong></div>
          <span className="smart-link__arrow" aria-hidden="true">↓</span>
          <span className="smart-link__target">Google · WhatsApp · Redes</span>
        </div>
        <div>
          <p className="eyebrow">EL DETALLE QUE HACE LA DIFERENCIA</p>
          <h2 id="smart-title">Reseñas y contacto,<br />en un mismo enlace.</h2>
          <p>Tu Card o Stand abre un enlace propio de AB Reviews. Puedes elegir acceso directo a Google o una página con la reseña como acción principal, WhatsApp y tus redes configuradas. Tu enlace puede cambiar; tu tarjeta se queda.</p>
          <p className="smart-link__note">Incluimos un cambio de destino sin costo. El Kit comparte un mismo enlace entre el stand y sus dos tarjetas.</p>
          <Link className="text-link" to="/demo">Ver el Smart Link en acción <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="how section" id="como-funciona" aria-labelledby="how-title">
        <div className="section-heading"><p className="eyebrow">02 / DE TU PEDIDO AL PRIMER TOQUE</p><h2 id="how-title">Nos encargamos<br />de la puesta en marcha.</h2></div>
        <ol className="how__steps">
          {steps.map(({ title, text }, index) => (
            <li key={title}><span className="how__number">0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>
          ))}
        </ol>
      </section>

      <section className="included section" aria-labelledby="evidence-title">
        <div>
          <p className="eyebrow">OPINIONES REALES, DECISIONES INFORMADAS</p>
          <h2 id="evidence-title">Haz más fácil compartir una experiencia.</h2>
          <p>AB Reviews evita que tu cliente tenga que buscar el negocio para llegar al enlace de reseñas. Tú recibes el producto configurado y una guía para invitar de forma neutral.</p>
          <p>No prometemos ventas, posicionamiento ni una cantidad de reseñas. El cliente decide si publica y qué valoración deja.</p>
        </div>
        <div>
          <h3>¿Por qué importan las reseñas?</h3>
          <p>En la encuesta BrightLocal 2026, el 97% de las personas encuestadas declaró leer reseñas de negocios locales.</p>
          <p className="small-print">Estados Unidos · 1.002 adultos · panel mediante SurveyMonkey · publicado el 11 de febrero de 2026. Es conducta declarada; no mide ventas ni resultados de tarjetas NFC y no representa una estimación para Chile.</p>
          <a className="text-link" href="https://www.brightlocal.com/research/local-consumer-review-survey/" target="_blank" rel="noreferrer">Consultar estudio y metodología ↗</a>
          <p>Google permite pedir reseñas auténticas mediante un enlace o QR. Invitamos a todos por igual, sin premios ni filtros por satisfacción.</p>
          <a className="text-link" href="https://support.google.com/business/answer/3474122?hl=es" target="_blank" rel="noreferrer">Recomendaciones de Google ↗</a>
        </div>
      </section>

      <section className="included section" id="piloto" aria-labelledby="pilot-title">
        <div><p className="eyebrow">PROPUESTA DE PILOTO</p><h2 id="pilot-title">5 negocios.<br />30 días para aprender.</h2><p>Buscamos evaluar el acceso a reseñas en situaciones reales. Registraremos una línea base previa, aperturas observadas del enlace, nuevas reseñas públicas y entrevistas con el equipo.</p></div>
        <div><h3>Una prueba con objetivos claros</h3><p>Las aperturas de un enlace no equivalen a reseñas publicadas. Compararemos los resultados de cada negocio con su línea base y explicaremos las limitaciones de atribución.</p><p>Participación, disponibilidad, costo o préstamo del material y condiciones se acuerdan por escrito antes de comenzar. Esta propuesta no confirma una plaza.</p><ContactActions product="Piloto de 30 días" inquiry="Hola Alejandro, me interesa evaluar mi negocio para el piloto de AB Reviews. Quiero conocer los requisitos, la medición y las condiciones de participación." compact /></div>
      </section>

      <section className="questions section" aria-labelledby="questions-title">
        <div><p className="eyebrow">ANTES DE ELEGIR</p><h2 id="questions-title">Lo que conviene saber.</h2></div>
        <div>
          <details><summary>¿Mi cliente necesita instalar una app?</summary><p>No necesita una app de AB Reviews. Puede usar NFC en un teléfono compatible o la cámara para leer el QR. Para publicar una reseña en Google necesitará acceder a su cuenta de Google.</p></details>
          <details><summary>¿Qué pasa si el teléfono no tiene NFC?</summary><p>Puede escanear el QR. Ambos accesos apuntan al mismo Smart Link. La Card incluye QR digital y el Stand incluye QR visible.</p></details>
          <details><summary>¿Hay una mensualidad?</summary><p>No hay mensualidad obligatoria. El precio corresponde al producto y los servicios descritos aquí. Cualquier servicio adicional se acuerda por separado.</p></details>
          <details><summary>¿Qué cubren los 30 días de soporte?</summary><p>Soporte de configuración desde la entrega: revisar el enlace y orientar el uso de NFC y QR. Escríbenos a alejandro@absoftwareworks.com. Los plazos de respuesta, reposición física y trabajos adicionales se confirman por escrito antes de pagar.</p></details>
          <details><summary>¿Cuánto dura el Smart Link y cómo se cambia?</summary><p>El enlace depende del dominio y alojamiento de AB Reviews. Antes de pagar confirmamos por escrito su período de continuidad y las condiciones del cambio de destino incluido. No ofrecemos un servicio de enlace de por vida. Actualmente los cambios los realiza nuestro equipo; no hay un panel de autoservicio.</p></details>
          <details><summary>¿Incluye estadísticas de escaneos?</summary><p>La oferta actual no incluye un contador automático ni identifica quién publica una reseña en Google. En el piloto acordamos un registro de medición específico. Un toque o escaneo que abre el enlace no demuestra una publicación.</p></details>
          <details><summary>¿Garantiza más reseñas o cinco estrellas?</summary><p>No. AB Reviews facilita el acceso; cada cliente decide si publica una reseña, qué cuenta y qué valoración deja. No filtramos opiniones ni condicionamos el acceso a una valoración positiva.</p></details>
          <details><summary>¿Qué incluye el envío?</summary><p>El despacho no está incluido en el precio. Coordinamos retiro o cotizamos el envío según tu destino antes de confirmar el pedido.</p></details>
        </div>
      </section>

      <section className="contact section" id="contacto" aria-labelledby="contact-title">
        <div><p className="eyebrow">03 / EMPECEMOS POR TU NEGOCIO</p><h2 id="contact-title">¿En qué mesón<br />ponemos el tuyo?</h2><p>Escríbele a Alejandro con el nombre de tu negocio y el formato que te interesa. Confirmamos disponibilidad, configuración y entrega antes de pagar.</p><ContactActions /></div>
        <aside><span className="contact__mark" aria-hidden="true">ab↗</span><p>Diseñado para el momento<br />en que alguien dice:<br /><em>«Gracias, estuvo muy bueno».</em></p><a href="mailto:alejandro@absoftwareworks.com">alejandro@absoftwareworks.com</a></aside>
      </section>
      <footer className="site-footer"><strong>AB Reviews</strong><span>Un producto de AB Software Works · Chile. Servicio independiente, sin afiliación ni patrocinio de Google.</span><Link to="/demo">Probar antes de elegir ↗</Link></footer>
    </main>
  )
}

export default Home

