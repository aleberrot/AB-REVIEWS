import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { findReviewClient, getRedirectDestination, buildSmartLink } from '../src/lib/smartLinks.ts'
import { createQrGraphic } from '../src/lib/qr.ts'

const slug = process.argv[2]
const client = findReviewClient(slug)
if (!client?.active || (client.mode === 'redirect' && !getRedirectDestination(client))) {
  console.error('Usa un slug de cliente activo con destino válido, o demo para una prueba.')
  process.exitCode = 1
} else {
  const link = buildSmartLink(client.slug)
  const graphic = createQrGraphic(link)
  const directory = fileURLToPath(new URL('../outputs/qr/', import.meta.url))
  await fs.mkdir(directory, { recursive: true })
  const output = path.join(directory, `${client.slug}.svg`)
  await fs.writeFile(output, decodeURIComponent(graphic.downloadUrl.split(',')[1]), 'utf8')
  console.log(`QR creado: ${output}\nNFC y QR: ${link}`)
}
