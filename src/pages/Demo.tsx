import { Link } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'
import SmartQr from '../components/SmartQr'
import DemoDestination from '../components/DemoDestination'
import { buildSmartLink } from '../lib/smartLinks'

function Demo() {
  // En local el teléfono debe estar en la misma red. El enlace público solo
  // funcionará después de desplegar esta versión en el dominio de producción.
  const demoLink = buildSmartLink('demo', window.location.origin)
  const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'

  return (
    <main lang="es">
      <SiteHeader />
      <section className="demo-page section">
        <div className="demo-page__intro">
          <p className="eyebrow">LA MISMA RUTA QUE USARÁ TU TARJETA</p>
          <h1>Pruébalo.<br /><em>Del toque al negocio.</em></h1>
          <p>El NFC y el QR abren un Smart Link de AB Reviews. En un negocio configurado, ese enlace te lleva directamente a sus reseñas en Google.</p>
          <p>Esta muestra usa un negocio ficticio y termina aquí: puedes recorrerla sin publicar nada.</p>
          <div className="demo-page__qr">
            <SmartQr value={demoLink} downloadable />
            <div><strong>Escanea o abre el enlace.</strong><a className="text-link" href="/r/demo">{demoLink.replace(/^https?:\/\//, '')} ↗</a><p>{isLocal ? 'Prueba local: localhost solo funciona en este equipo. Para probar desde otro teléfono, usa la dirección de red del servidor o la web desplegada.' : 'Este QR y el enlace abren la misma experiencia de prueba.'}</p></div>
          </div>
          <Link className="text-link" to="/#productos">Elegir mi formato ←</Link>
        </div>
        <DemoDestination embedded />
      </section>
    </main>
  )
}

export default Demo
