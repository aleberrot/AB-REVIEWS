import { Link } from 'react-router-dom'
import HeroVisual from './HeroVisual'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__copy">
        <p className="eyebrow"><span className="status-dot" /> RESEÑAS PARA NEGOCIOS REALES</p>
        <h1 id="hero-title">Tus clientes de hoy <em>pueden inspirar a los de mañana.</em></h1>
        <p className="hero__description">Facilita que tus clientes dejen una reseña en Google con una tarjeta o un stand NFC + QR. Lo entregamos configurado para tu negocio.</p>
        <div className="hero__actions"><Link className="button button--primary" to="/demo">Probar cómo lo verá tu cliente <span aria-hidden="true">↗</span></Link><a className="text-link" href="#productos">Ver formatos y precios ↓</a></div>
        <p className="hero__assurance">NFC + QR · Configuración incluida · Desde $14.990</p>
      </div>
      <HeroVisual />
      <div className="hero__bottom-note"><span>PARA MOSTRADORES, MESAS Y RECEPCIONES.</span><a href="#como-funciona">Así lo dejamos listo ↓</a></div>
    </section>
  )
}

export default Hero
