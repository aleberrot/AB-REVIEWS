import type { ProductFormat } from '../data/products'
import blackCard from '../assets/products/ab-card-black-studio.webp'
import whiteCard from '../assets/products/ab-card-white-studio.webp'
import standPhoto from '../assets/products/ab-stand-studio.webp'
import kitPhoto from '../assets/products/ab-kit-studio.webp'
import originalCard from '../assets/products/ab-card-real.webp'
import originalStand from '../assets/products/ab-stand-real.webp'
import originalKit from '../assets/products/ab-kit-real.webp'

const originals = {
  card: { src: originalCard, alt: 'Ejemplar real de tarjeta blanca con diseño impreso de Google y símbolo NFC.' },
  stand: { src: originalStand, alt: 'Ejemplar real del stand blanco con su diseño impreso, QR y símbolo NFC.' },
  kit: { src: originalKit, alt: 'Fotografía original de un stand y una tarjeta blanca sobre una repisa.' },
}

function ProductObject({ format }: { format: ProductFormat }) {
  return (
    <figure className={`product-gallery product-gallery--${format}`}>
      <div className="product-gallery__images">
        {format === 'card' ? <>
          <img src={blackCard} alt="Tarjeta NFC negra, con su diseño impreso original." width={415} height={645} loading="lazy" decoding="async" />
          <img src={whiteCard} alt="Tarjeta NFC blanca, con su diseño impreso original." width={385} height={635} loading="lazy" decoding="async" />
        </> : <img src={format === 'stand' ? standPhoto : kitPhoto} alt={format === 'stand' ? 'Stand blanco con QR y símbolos NFC, en presentación de estudio.' : 'Kit con un stand blanco y dos tarjetas NFC, una blanca y una negra.'} width={format === 'stand' ? 470 : 1536} height={format === 'stand' ? 800 : 1024} loading="lazy" decoding="async" />}
      </div>
      <figcaption>Edición comercial a partir de fotografías reales.{format === 'card' ? ' Se muestran dos variantes; el precio incluye 1 tarjeta, no dos.' : ' QR ilustrativo; prueba el acceso en la demo.'}</figcaption>
      <details className="product-gallery__original">
        <summary>Ver fotografía real del producto</summary>
        <p>Diseño del ejemplar disponible, sin personalización física.{format === 'kit' && ' La foto muestra 1 stand y 1 tarjeta; el Kit incluye 2 tarjetas.'} El QR fotografiado no es el enlace de prueba.</p>
        <img src={originals[format].src} alt={originals[format].alt} width={1152} height={1536} loading="lazy" decoding="async" />
      </details>
    </figure>
  )
}

export default ProductObject
