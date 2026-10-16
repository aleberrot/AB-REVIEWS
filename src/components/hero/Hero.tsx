import { Link } from 'react-router-dom'
import HeroVisual from './HeroVisual'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__copy">
        <p className="eyebrow"><span className="status-dot" /> RESEÑAS PARA NEGOCIOS REALES</p>
        <h1 id="hero-title">Una buena visita<br />merece <em>ser<br className="hero__desktop-break" /> compartida.</em></h1>
        <p className="hero__description">Haz fácil que tus clientes lleguen a tus reseñas en Google. Una tarjeta o un stand, un toque con el teléfono y tu negocio listo para recibir su opinión.</p>
        <div className="hero__actions"><Link className="button button--primary" to="/demo">Probar la experiencia <span aria-hidden="true">↗</span></Link><a className="text-link" href="#productos">Ver formatos y precios ↓</a></div>
        <p className="hero__assurance">NFC + QR · Configuración incluida · Desde $14.990</p>
      </div>
      <HeroVisual />
      <div className="hero__bottom-note"><span>PARA MOSTRADORES, MESAS Y RECEPCIONES.</span><a href="#como-funciona">Así lo dejamos listo ↓</a></div>
    </section>
  )
}

export default Hero
