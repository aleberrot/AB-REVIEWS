import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { findReviewClient, getRedirectDestination } from '../lib/smartLinks'
import DemoDestination from '../components/DemoDestination'

function ReviewLink() {
  const { slug } = useParams()
  const client = findReviewClient(slug)
  const destination = client ? getRedirectDestination(client) : null

  useEffect(() => {
    if (destination) window.location.replace(destination)
  }, [destination])

  if (client?.active && client.mode === 'demo') return <DemoDestination />

  return (
    <main className="link-status" lang="es">
      <Link className="brand" to="/">AB Reviews ↗</Link>
      <p className="eyebrow">ACCESO A RESEÑAS</p>
      <h1>{destination ? `Abriendo ${client?.businessName}` : 'Este enlace no está disponible.'}</h1>
      {destination ? (
        <>
          <p role="status">Te estamos llevando a la página del negocio.</p>
          <a className="button button--primary" href={destination}>Continuar al negocio ↗</a>
        </>
      ) : (
        <>
          <p>Revisa el enlace de la tarjeta. Si el problema continúa, escríbenos para revisar la configuración.</p>
          <a className="button button--primary" href="mailto:alejandro@absoftwareworks.com">Solicitar ayuda</a>
        </>
      )}
    </main>
  )
}

export default ReviewLink
