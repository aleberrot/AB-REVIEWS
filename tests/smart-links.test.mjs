import test from 'node:test'
import assert from 'node:assert/strict'
import QRCode from 'qrcode'
import jsQR from 'jsqr'
import { buildSmartLink, findReviewClient, getRedirectDestination, getPageActions, validateClientRegistry } from '../src/lib/smartLinks.ts'
import { reviewClients } from '../src/data/reviewClients.ts'
import { createQrGraphic } from '../src/lib/qr.ts'

const client = {
  slug: 'negocio-prueba',
  businessName: 'Negocio de prueba',
  reviewUrl: 'https://search.google.com/local/writereview?placeid=example',
  active: true,
  mode: 'redirect',
}

test('la página conserva Google como acción principal y omite canales ausentes', () => {
  const page = { ...client, mode: 'page', instagramUrl: 'https://www.instagram.com/ejemplo/' }
  assert.deepEqual(getPageActions(page), { google: client.reviewUrl, whatsapp: null, instagram: page.instagramUrl, facebook: null })
  assert.equal(getRedirectDestination(page), null)
  assert.deepEqual(validateClientRegistry([page]), [])
  assert.equal(getPageActions({ ...page, active: false }).google, null)
})

test('la página rechaza canales con destinos ajenos, credenciales o esquemas inseguros', () => {
  for (const instagramUrl of ['javascript:alert(1)', 'http://instagram.com/a', 'https://instagram.com.evil.example/a', 'https://user:pass@instagram.com/a', 'https://instagram.com:444/a']) {
    const page = { ...client, mode: 'page', instagramUrl }
    assert.equal(getPageActions(page).instagram, null)
    assert.ok(validateClientRegistry([page]).some(error => error.includes('instagramUrl')))
  }
  const page = { ...client, mode: 'page', reviewUrl: 'https://example.com/review', whatsappUrl: 'https://example.com/chat', facebookUrl: 'https://example.com/profile' }
  assert.equal(getPageActions(page).google, null)
  assert.equal(getPageActions(page).whatsapp, null)
  assert.equal(getPageActions(page).facebook, null)
  assert.equal(validateClientRegistry([page]).length, 3)
})

test('el registro público es válido y la demo no tiene un destino real', () => {
  assert.deepEqual(validateClientRegistry(reviewClients), [])
  assert.equal(findReviewClient('demo')?.mode, 'demo')
  assert.equal(getRedirectDestination(findReviewClient('demo')), null)
})

test('enlaces desconocidos o slugs malformados no resuelven un cliente', () => {
  for (const slug of [undefined, '', 'no-existe', '../demo', 'demo?url=https://example.com', 'DEMO']) {
    assert.equal(findReviewClient(slug), undefined)
  }
  assert.throws(() => buildSmartLink('../demo'))
})

test('solo los destinos configurados y activos permiten salir de la app', () => {
  assert.equal(getRedirectDestination(client), client.reviewUrl)
  assert.equal(getRedirectDestination({ ...client, active: false }), null)
  for (const reviewUrl of ['javascript:alert(1)', 'http://example.com', 'https://user:password@example.com', '/demo', 'https://reviews.absoftwareworks.com/r/demo', 'https://localhost/r/demo']) {
    assert.equal(getRedirectDestination({ ...client, reviewUrl }), null)
  }
})

test('cambiar el destino no cambia la URL grabada en la tarjeta', () => {
  const updated = { ...client, reviewUrl: 'https://wa.me/56937145672' }
  assert.equal(buildSmartLink(client.slug), buildSmartLink(updated.slug))
  assert.equal(getRedirectDestination(updated), updated.reviewUrl)
})

test('la resolución solo usa el slug; parámetros de origen no cambian el destino', () => {
  const url = new URL(`${buildSmartLink(client.slug)}?src=qr&url=https://untrusted.example`)
  const resolved = findReviewClient(url.pathname.split('/').pop(), [client])
  assert.equal(getRedirectDestination(resolved), client.reviewUrl)
})

test('se detectan slugs duplicados y destinos inválidos antes de entregar', () => {
  assert.ok(validateClientRegistry([client, client]).some((error) => error.includes('duplicado')))
  assert.ok(validateClientRegistry([{ ...client, reviewUrl: 'not-a-url' }]).some((error) => error.includes('Destino')))
})

test('el QR se decodifica al Smart Link, con margen blanco incluido', () => {
  const value = buildSmartLink('demo')
  const graphic = createQrGraphic(value)
  const qr = QRCode.create(value, { errorCorrectionLevel: 'M' })
  const scale = 8
  const pixels = graphic.size * scale
  const rgba = new Uint8ClampedArray(pixels * pixels * 4).fill(255)
  // Renderiza el mismo path que entregamos al navegador, no una segunda imagen.
  for (const [, x, y] of graphic.path.matchAll(/M(\d+) (\d+)h1v1h-1z/g)) {
    for (let row = 0; row < scale; row += 1) {
      for (let column = 0; column < scale; column += 1) {
        const offset = (((Number(y) * scale + row) * pixels) + Number(x) * scale + column) * 4
        rgba[offset] = 24
        rgba[offset + 1] = 47
        rgba[offset + 2] = 50
      }
    }
  }
  assert.equal(graphic.size, qr.modules.size + 8)
  assert.equal(jsQR(rgba, pixels, pixels)?.data, value)
  assert.ok(decodeURIComponent(graphic.downloadUrl).includes('<svg'))
})
