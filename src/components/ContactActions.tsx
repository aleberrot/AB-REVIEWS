interface ContactActionsProps {
  product?: string
  compact?: boolean
  inquiry?: string
}

function ContactActions({ product, compact = false, inquiry }: ContactActionsProps) {
  const message = encodeURIComponent(inquiry ?? (product
    ? `Hola Alejandro, me interesa ${product} de AB Reviews. Quiero confirmar disponibilidad, precio de lanzamiento y entrega para mi negocio.`
    : 'Hola Alejandro, quiero AB Reviews para mi negocio. ¿Podemos coordinar la configuración y entrega?'))

  return (
    <div className="contact-actions">
      <a className="button button--primary" aria-label={product ? `Consultar disponibilidad de ${product} por WhatsApp` : undefined} href={`https://wa.me/56937145672?text=${message}`} target="_blank" rel="noopener noreferrer">
        {product ? 'Consultar disponibilidad' : 'Hablemos por WhatsApp'} <span aria-hidden="true">↗</span>
      </a>
      {!compact && <a className="text-link" href="mailto:alejandro@absoftwareworks.com">Escribir a Alejandro</a>}
    </div>
  )
}

export default ContactActions
