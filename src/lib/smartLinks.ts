import { reviewClients, type ReviewClient } from '../data/reviewClients.ts'

export const PUBLIC_ORIGIN = 'https://reviews.absoftwareworks.com'
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

// Page actions only accept verified platform URLs, never arbitrary schemes.
function platformUrl(value: string | null | undefined, hosts: readonly string[]): string | null {
  if (!value) return null
  try {
    const url = new URL(value)
    if (url.protocol !== 'https:' || url.username || url.password || url.port) return null
    return hosts.includes(url.hostname.toLowerCase()) ? url.href : null
  } catch {
    return null
  }
}

export function getPageActions(client: ReviewClient) {
  if (!client.active || client.mode !== 'page') return { google: null, whatsapp: null, instagram: null, facebook: null }
  return {
    google: platformUrl(client.reviewUrl, ['search.google.com', 'www.google.com', 'maps.google.com', 'g.page', 'maps.app.goo.gl']),
    whatsapp: platformUrl(client.whatsappUrl, ['wa.me', 'api.whatsapp.com']),
    instagram: platformUrl(client.instagramUrl, ['instagram.com', 'www.instagram.com']),
    facebook: platformUrl(client.facebookUrl, ['facebook.com', 'www.facebook.com', 'm.facebook.com']),
  }
}

export function isValidSlug(slug: string): boolean {
  return slug.length <= 80 && SLUG_PATTERN.test(slug)
}

export function findReviewClient(
  slug: string | undefined,
  clients: readonly ReviewClient[] = reviewClients,
): ReviewClient | undefined {
  if (!slug || !isValidSlug(slug)) return undefined
  return clients.find((client) => client.slug === slug)
}

export function buildSmartLink(slug: string, origin = PUBLIC_ORIGIN): string {
  if (!isValidSlug(slug)) throw new Error('El slug debe usar minúsculas, números y guiones.')
  // La URL impresa no depende del destino actual del negocio.
  return new URL(`/r/${slug}`, origin).href
}

export function getRedirectDestination(client: ReviewClient): string | null {
  if (!client.active || client.mode !== 'redirect' || !client.reviewUrl) return null
  try {
    const destination = new URL(client.reviewUrl)
    if (destination.protocol !== 'https:' || destination.username || destination.password) return null
    // Evita bucles hacia nuestros propios Smart Links y URLs locales por error.
    const hostname = destination.hostname.toLowerCase()
    if (hostname === new URL(PUBLIC_ORIGIN).hostname || hostname === 'localhost') return null
    return destination.href
  } catch {
    return null
  }
}

export function validateClientRegistry(clients: readonly ReviewClient[]): string[] {
  const errors: string[] = []
  const slugs = new Set<string>()
  for (const client of clients) {
    if (!isValidSlug(client.slug)) errors.push(`Slug inválido: ${client.slug}`)
    if (slugs.has(client.slug)) errors.push(`Slug duplicado: ${client.slug}`)
    slugs.add(client.slug)
    if (!client.businessName.trim()) errors.push(`Negocio sin nombre: ${client.slug}`)
    if (client.active && client.mode === 'redirect' && !getRedirectDestination(client)) {
      errors.push(`Destino inválido: ${client.slug}`)
    }
    if (client.active && client.mode === 'page') {
      const actions = getPageActions(client)
      if (!actions.google) errors.push(`Destino de Google inválido: ${client.slug}`)
      for (const [field, action] of [['whatsappUrl', 'whatsapp'], ['instagramUrl', 'instagram'], ['facebookUrl', 'facebook']] as const) {
        if (client[field] && !actions[action]) errors.push(`Canal inválido (${field}): ${client.slug}`)
      }
    }
  }
  return errors
}
