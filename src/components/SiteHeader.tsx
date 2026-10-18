import { Link } from 'react-router-dom'

function SiteHeader() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#contenido-principal">Saltar al contenido</a>
      <Link className="brand" to="/" aria-label="AB Reviews, inicio"><span className="brand__mark">ab↗</span><span>AB Reviews<small>POR AB SOFTWARE WORKS</small></span></Link>
      <nav aria-label="Navegación principal">
        <a className="site-header__catalog" href="/#productos">Formatos y precios</a>
        <a className="text-link" href="/#contacto">Hablemos <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  )
}

export default SiteHeader
