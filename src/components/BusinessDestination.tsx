import { useState } from 'react'
import type { ReviewClient } from '../data/reviewClients'
import { getPageActions } from '../lib/smartLinks'
import './BusinessDestination.css'

function SocialIcon({ network }: { network: 'instagram' | 'facebook' }) {
  return network === 'instagram' ? (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" focusable="false"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M14 22v-9h3l.5-3.5H14V7.3c0-1 .3-1.8 1.8-1.8h1.9V2.3A24 24 0 0 0 15 2c-2.8 0-4.7 1.7-4.7 4.8v2.7H7V13h3.3v9z" /></svg>
  )
}

export default function BusinessDestination({ client, embedded = false, demo = false }: { client: ReviewClient; embedded?: boolean; demo?: boolean }) {
  const [message, setMessage] = useState('Esta demostración no publica reseñas ni abre cuentas reales.')
  const Heading = embedded ? 'h2' : 'h1'
  const actions = demo ? { google: '#', whatsapp: '#', instagram: '#', facebook: '#', tiktok: '#', youtube: '#', linkedin: '#' } : getPageActions(client)
  const simulate = (channel: string) => setMessage(`En un negocio configurado, esta opción abriría ${channel}. Esta prueba no ha enviado ni publicado nada.`)
  const socialNetworks = ['instagram', 'facebook'] as const
  return (
    <section className="business-destination" aria-label={`Reseñas y contacto de ${client.businessName}`}>
      {demo && <p className="business-destination__demo">NEGOCIO DE EJEMPLO · DEMOSTRACIÓN</p>}
      <span className="business-destination__monogram" aria-hidden="true">{client.businessName.charAt(0)}.</span>
      <Heading>{client.businessName}</Heading>
      <p>Gracias por visitarnos.<br />Cuéntanos cómo fue tu experiencia.</p>
      {actions.google ? <>
        {demo ? <button className="button button--primary" onClick={() => simulate('el formulario de reseñas de Google')}>Dejar reseña en Google ↗</button> : <a className="button button--primary" href={actions.google}>Dejar reseña en Google ↗</a>}
        <p className="business-destination__help">Tu opinión es libre. Para publicar, inicia sesión en Google.</p>
      </> : <p>El acceso a las reseñas no está disponible por ahora.</p>}
      {actions.whatsapp && (demo ? <button className="button business-destination__contact" onClick={() => simulate('WhatsApp del negocio')}>Escribir por WhatsApp ↗</button> : <a className="button business-destination__contact" href={actions.whatsapp}>Escribir por WhatsApp ↗</a>)}
      {(actions.instagram || actions.facebook) && <div className="business-destination__networks"><p>Síguenos y descubre nuestras novedades</p><div className="business-destination__socials">{socialNetworks.map(network => {
        const href = actions[network]
        if (!href) return null
        const label = network === 'instagram' ? 'Instagram' : 'Facebook'
        return demo ? <button key={network} className="social-icon" aria-label={label} title={label} onClick={() => simulate(label)}><SocialIcon network={network} /></button> : <a key={network} className="social-icon" aria-label={label} title={label} href={href}><SocialIcon network={network} /></a>
      })}</div></div>}
      <p className="business-destination__signature">Facilitado por <strong>AB Reviews</strong></p>
      <div className="business-destination__extra-networks">{(['tiktok', 'youtube', 'linkedin'] as const).map(network => {
        const href = actions[network]
        const label = { tiktok: 'TikTok', youtube: 'YouTube', linkedin: 'LinkedIn' }[network]
        if (!href) return null
        return demo ? <button className="text-link" key={network} onClick={() => simulate(label)}>{label} ↗</button> : <a className="text-link" key={network} href={href}>{label} ↗</a>
      })}</div>
      {demo && <p className="business-destination__help" role="status">{message}</p>}
    </section>
  )
}
