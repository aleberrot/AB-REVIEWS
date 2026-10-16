import { useState } from 'react'
import { Link } from 'react-router-dom'
import { findReviewClient } from '../lib/smartLinks'

function DemoDestination({ embedded = false }: { embedded?: boolean }) {
  const [opened, setOpened] = useState(false)
  const business = findReviewClient('demo')
  const BusinessHeading = embedded ? 'h2' : 'h1'
  const content = (
    <section className="demo-business" aria-labelledby="demo-business-title">
      <p className="eyebrow">NEGOCIO DE EJEMPLO · NO PUBLICA RESEÑAS</p>
      <span className="demo-business__monogram" aria-hidden="true">M.</span>
      <p className="demo-business__category">CAFÉ & PAN DE CADA DÍA</p>
      <BusinessHeading id="demo-business-title">{business?.businessName}</BusinessHeading>
      <p>Gracias por venir.<br />¿Nos cuentas cómo fue tu visita?</p>
      <button className="button button--primary" onClick={() => setOpened(true)}>Compartir mi experiencia ↗</button>
      <p className="demo-business__result" role="status">
        {opened
          ? 'Prueba completada. En una tarjeta configurada, el Smart Link te lleva directamente a las reseñas del negocio en Google. No se ha enviado ni publicado nada.'
          : 'Estás probando AB Reviews. Este negocio es ficticio.'}
      </p>
      {opened && <button className="text-link" onClick={() => setOpened(false)}>Repetir prueba</button>}
      <div className="demo-business__signature">Facilitado por <strong>AB Reviews</strong></div>
    </section>
  )
  if (embedded) return content
  return (
    <main className="demo-destination" lang="es">
      <Link className="text-link" to="/demo">← Sobre esta demostración</Link>
      {content}
      <Link className="text-link" to="/">Quiero esto para mi negocio ↗</Link>
    </main>
  )
}

export default DemoDestination
