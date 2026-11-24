export type CommercialEvent = 'catalog_view' | 'demo_click' | 'whatsapp_click' | 'card_inquiry' | 'stand_inquiry' | 'kit_inquiry' | 'email_click'

export function inquiryEvent(format: string | undefined): CommercialEvent | null {
  if (format === 'card') return 'card_inquiry'
  if (format === 'stand') return 'stand_inquiry'
  if (format === 'kit') return 'kit_inquiry'
  return null
}

// Never send Smart Link slugs, contact messages, search parameters or fragments.
export function commercialPath(pathname: string): '/' | '/demo' | null {
  return pathname === '/' || pathname === '/demo' ? pathname : null
}

export function analyticsExcluded(search: string, internal: string | null): boolean {
  return new URLSearchParams(search).get('internal') === '1' || internal === '1'
}
