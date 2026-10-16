import type { ProductFormat } from '../data/products'

// Maquetas hechas con CSS: no se presentan como fotografías del producto final.
function ProductObject({ format }: { format: ProductFormat }) {
  return (
    <div className={`product-object product-object--${format}`} aria-hidden="true">
      {(format === 'stand' || format === 'kit') && (
        <div className="product-object__stand">
          <span className="product-object__logo">ab<span>↗</span></span>
          <span className="product-object__message">¿Cómo estuvo<br />tu visita?</span>
          <span className="product-object__rule" />
          <span className="product-object__small">Acerca tu teléfono<br />o escanea el QR</span>
          <span className="product-object__base" />
        </div>
      )}
      {(format === 'card' || format === 'kit') && (
        <>
          {format === 'kit' && <div className="product-object__card product-object__card--back" />}
          <div className="product-object__card">
            <span className="product-object__logo">ab<span>↗</span></span>
            <span className="product-object__message">Tu experiencia<br />merece compartirse.</span>
            <span className="product-object__small">AB REVIEWS · NFC</span>
          </div>
        </>
      )}
    </div>
  )
}

export default ProductObject
