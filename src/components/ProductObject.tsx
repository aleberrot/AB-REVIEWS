import type { ProductFormat } from '../data/products'
import cardPhoto from '../assets/products/google_review_nfc_cards_duo-800.jpg'
import cardSmall from '../assets/products/google_review_nfc_cards_duo-480.jpg'
import standPhoto from '../assets/products/white_nfc_review_stand_display-800.jpg'
import standSmall from '../assets/products/white_nfc_review_stand_display-480.jpg'
import kitPhoto from '../assets/products/ab_reviews_google_feedback_kit-800.jpg'
import kitSmall from '../assets/products/ab_reviews_google_feedback_kit-480.jpg'
import originalCard from '../assets/products/ab-card-real.webp'
import originalStand from '../assets/products/ab-stand-real.webp'
import originalKit from '../assets/products/ab-kit-real.webp'

const originals = {
  card: { src: originalCard, alt: 'Ejemplar real de tarjeta blanca con diseño impreso de Google y símbolo NFC.' },
  stand: { src: originalStand, alt: 'Ejemplar real del stand blanco con su diseño impreso, QR y símbolo NFC.' },
  kit: { src: originalKit, alt: 'Fotografía original de un stand y una tarjeta blanca sobre una repisa.' },
}

const commercialPhotos = {
  card: { src: cardPhoto, small: cardSmall, height: 677, alt: 'Dos variantes de tarjeta NFC para reseñas: blanca y negra, sobre fondo blanco.' },
  stand: { src: standPhoto, small: standSmall, height: 1000, alt: 'Stand blanco de sobremesa con base, indicación NFC y QR ilustrativo.' },
  kit: { src: kitPhoto, small: kitSmall, height: 713, alt: 'Kit con un stand blanco y dos tarjetas NFC, blanca y negra, sobre fondo blanco.' },
}

function ProductObject({ format }: { format: ProductFormat }) {
  const photo = commercialPhotos[format]
  return (
    <figure className={`product-gallery product-gallery--${format}`}>
      <div className="product-gallery__images">
        <img
          src={photo.src}
          srcSet={`${photo.small} 480w, ${photo.src} 800w`}
          sizes="(max-width: 560px) calc(90vw - 70px), (max-width: 900px) 45vw, 30vw"
          alt={photo.alt}
          width={800}
          height={photo.height}
          loading="lazy"
          decoding="async"
        />
      </div>
      <figcaption>Imagen comercial de referencia.{format === 'card' ? ' Se muestran dos variantes; el precio incluye 1 tarjeta, no dos.' : ' QR ilustrativo; prueba el acceso en la demo.'}</figcaption>
      <details className="product-gallery__original">
        <summary>Ver fotografía real del producto</summary>
        <p>Diseño del ejemplar disponible, sin personalización física.{format === 'kit' && ' La foto muestra 1 stand y 1 tarjeta; el Kit incluye 2 tarjetas.'} El QR fotografiado no es el enlace de prueba.</p>
        <img src={originals[format].src} alt={originals[format].alt} width={1152} height={1536} loading="lazy" decoding="async" />
      </details>
    </figure>
  )
}

export default ProductObject
