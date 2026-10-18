import type { ProductFormat } from '../data/products'
import cardPhoto from '../assets/products/ab-card-real.webp'
import standPhoto from '../assets/products/ab-stand-real.webp'
import kitPhoto from '../assets/products/ab-kit-real.webp'

const photos = {
  card: { src: cardPhoto, alt: 'Tarjeta física AB Review Card blanca con el logotipo de Google y símbolo NFC.' },
  stand: { src: standPhoto, alt: 'Stand físico AB Review Stand blanco con el logotipo de Google, código QR e indicación NFC.' },
  kit: { src: kitPhoto, alt: 'Stand y una tarjeta del AB Review Kit fotografiados juntos, con sus diseños físicos originales.' },
}

function ProductObject({ format }: { format: ProductFormat }) {
  const photo = photos[format]
  return (
    <img
      className="product-photo"
      src={photo.src}
      alt={photo.alt}
      width={1152}
      height={1536}
      loading="lazy"
      decoding="async"
    />
  )
}

export default ProductObject
