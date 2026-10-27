export type ProductFormat = 'card' | 'stand' | 'kit'

export interface Product {
  name: string
  format: ProductFormat
  launchPrice: number
  regularPrice: number
  use: string
  contents: string
}

// Cambia aquí los precios y el contenido; las vistas solo presentan estos datos.
export const products: Product[] = [
  {
    name: 'AB Review Card',
    format: 'card',
    launchPrice: 14990,
    regularPrice: 17990,
    use: 'Para caja, recepción o llevar contigo.',
    contents: '1 tarjeta NFC + QR digital',
  },
  {
    name: 'AB Review Stand',
    format: 'stand',
    launchPrice: 22990,
    regularPrice: 24990,
    use: 'Un lugar fijo en tu mesón. Siempre a la vista.',
    contents: '1 stand con NFC + QR visible',
  },
  {
    name: 'AB Review Kit',
    format: 'kit',
    launchPrice: 32990,
    regularPrice: 39990,
    use: 'El mismo negocio, en más de un punto de atención.',
    contents: '1 stand + 2 tarjetas · 1 enlace compartido',
  },
]

export const includedServices = [
  'Página de tu negocio o acceso directo a Google',
  'Enlace a las reseñas de tu negocio en Google',
  'Programación NFC y QR digital',
  'Configuración y pruebas antes de entregar',
  'Mini guía de uso',
  '30 días de soporte de configuración',
  '1 cambio de destino sin costo',
]

export const formatPrice = (amount: number) =>
  new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(amount)
