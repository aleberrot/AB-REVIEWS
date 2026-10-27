import type { ProductFormat } from '../data/products'
import blackCard from '../assets/products/ab-card-black-studio.webp'
import whiteCard from '../assets/products/ab-card-white-studio.webp'
import standPhoto from '../assets/products/ab-stand-studio.webp'
import kitPhoto from '../assets/products/ab-kit-studio.webp'

function ProductObject({ format }: { format: ProductFormat }) {
  return (
    <figure className={`product-gallery product-gallery--${format}`}>
      <div className="product-gallery__images">
        {format === 'card' ? <>
          <img src={blackCard} alt="Tarjeta NFC negra, con su diseño impreso original." width={415} height={645} loading="lazy" decoding="async" />
          <img src={whiteCard} alt="Tarjeta NFC blanca, con su diseño impreso original." width={385} height={635} loading="lazy" decoding="async" />
        </> : <img src={format === 'stand' ? standPhoto : kitPhoto} alt={format === 'stand' ? 'Stand blanco con QR y símbolos NFC, en presentación de estudio.' : 'Kit con un stand blanco y dos tarjetas NFC, una blanca y una negra.'} width={format === 'stand' ? 470 : 1536} height={format === 'stand' ? 800 : 1024} loading="lazy" decoding="async" />}
      </div>
      <figcaption>Edición comercial a partir de fotografías reales.{format === 'card' ? ' Tarjetas blanca y negra.' : ' QR ilustrativo; prueba el acceso en la demo.'}</figcaption>
    </figure>
  )
}

export default ProductObject
