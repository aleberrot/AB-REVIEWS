export interface ReviewClient {
  slug: string
  businessName: string
  reviewUrl: string | null
  active: boolean
  mode: 'demo' | 'redirect' | 'page'
  whatsappUrl?: string
  instagramUrl?: string
  facebookUrl?: string
}

// Datos públicos: nunca guardar teléfonos privados, credenciales ni notas aquí.
// Un cliente nuevo necesita un slug único y un destino HTTPS verificado.
// El modo demo usa la misma resolución, pero no dirige reseñas a un negocio real.
export const reviewClients: readonly ReviewClient[] = [
  {
    slug: 'demo',
    businessName: 'Mesa & Miga',
    reviewUrl: null,
    active: true,
    mode: 'demo',
  },
]
