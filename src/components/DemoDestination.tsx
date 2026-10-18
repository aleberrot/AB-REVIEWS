import { Link } from 'react-router-dom'
import { findReviewClient } from '../lib/smartLinks'
import BusinessDestination from './BusinessDestination'

export default function DemoDestination({ embedded = false }: { embedded?: boolean }) {
  const business = findReviewClient('demo')!
  const content = <BusinessDestination client={business} embedded={embedded} demo />
  if (embedded) return content
  return <main className="demo-destination" lang="es"><Link className="text-link" to="/demo">← Sobre esta demostración</Link>{content}<Link className="text-link" to="/">Quiero esto para mi negocio ↗</Link></main>
}
