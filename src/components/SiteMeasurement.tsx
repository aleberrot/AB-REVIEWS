import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { analyticsExcluded, commercialPath, inquiryEvent, type CommercialEvent } from '../lib/measurement'

type AnalyticsCommand = 'pageview' | 'event' | 'beforeSend'
type BeforeSendEvent = { url: string; type: string }
type AnalyticsFunction = (command: AnalyticsCommand, payload: unknown) => void

declare global {
  interface Window {
    va?: AnalyticsFunction
    vaq?: [AnalyticsCommand, unknown][]
  }
}

/** Optional bridge to Vercel's first-party script. Replace with the official SDK
 * once package installation is available; never run both integrations together. */
export default function SiteMeasurement() {
  const { pathname, search } = useLocation()

  useEffect(() => {
    let internal: string | null = null
    try {
      if (new URLSearchParams(search).get('internal') === '1') sessionStorage.setItem('ab-internal', '1')
      internal = sessionStorage.getItem('ab-internal')
    } catch { /* Storage restrictions must never prevent using the site. */ }
    if (analyticsExcluded(search, internal)) return

    const path = commercialPath(pathname)
    if (!path) return
    const enabled = import.meta.env.PROD
      && import.meta.env.VITE_WEB_ANALYTICS_ENABLED === 'true'
      && window.location.hostname === 'reviews.absoftwareworks.com'
    if (enabled && !document.querySelector('script[data-ab-analytics]')) {
      window.va ??= (command, payload) => { (window.vaq ??= []).push([command, payload]) }
      window.va('beforeSend', (event: BeforeSendEvent) => {
        const url = new URL(event.url)
        const safePath = commercialPath(url.pathname)
        if (!safePath || analyticsExcluded(url.search, internal)) return null
        return { ...event, url: `${url.origin}${safePath}` }
      })
      const script = document.createElement('script')
      script.src = '/_vercel/insights/script.js'
      script.defer = true
      script.dataset.abAnalytics = 'true'
      // Explicit router pageviews avoid an automatic + manual double count.
      script.dataset.disableAutoTrack = '1'
      document.head.appendChild(script)
    }

    // Defer until after StrictMode's setup/cleanup replay has completed.
    const pageview = window.setTimeout(() => {
      if (enabled) window.va?.('pageview', { path, route: path })
    }, 0)

    function emit(name: CommercialEvent) {
      // Preview hook has no persistence or external transport. Also supports QA.
      window.dispatchEvent(new CustomEvent('ab-reviews:measurement', { detail: { name, path } }))
      if (enabled && import.meta.env.VITE_VERCEL_CUSTOM_EVENTS === 'true') {
        window.va?.('event', { name, data: { page: path } })
      }
    }

    function onClick(event: MouseEvent) {
      const element = event.target instanceof Element ? event.target.closest('a') : null
      if (!element) return
      const url = new URL(element.href, location.href)
      if (url.origin === location.origin && url.pathname === '/demo') emit('demo_click')
      if (url.hostname === 'wa.me') {
        emit('whatsapp_click')
        const inquiry = inquiryEvent(element.dataset.product)
        if (inquiry) emit(inquiry)
      }
      if (url.protocol === 'mailto:') emit('email_click')
    }
    document.addEventListener('click', onClick)

    const catalog = document.getElementById('productos')
    const observer = catalog ? new IntersectionObserver((entries) => {
      if (entries.some(entry => entry.isIntersecting)) {
        emit('catalog_view')
        observer?.disconnect()
      }
    }, { threshold: 0 }) : null
    if (catalog) observer?.observe(catalog)

    return () => {
      window.clearTimeout(pageview)
      document.removeEventListener('click', onClick)
      observer?.disconnect()
    }
  }, [pathname, search])

  return null
}
