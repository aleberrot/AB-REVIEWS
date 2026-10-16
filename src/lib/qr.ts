import QRCode from 'qrcode'

export function createQrGraphic(value: string) {
  const qr = QRCode.create(value, { errorCorrectionLevel: 'M' })
  // Cuatro módulos blancos en cada borde: margen necesario para escanear/impresión.
  const margin = 4
  const size = qr.modules.size + margin * 2
  const squares: string[] = []
  for (let row = 0; row < qr.modules.size; row += 1) {
    for (let column = 0; column < qr.modules.size; column += 1) {
      if (qr.modules.get(row, column)) squares.push(`M${column + margin} ${row + margin}h1v1h-1z`)
    }
  }
  const path = squares.join('')
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" shape-rendering="crispEdges"><path fill="#fff" d="M0 0h${size}v${size}H0z"/><path fill="#182f32" d="${path}"/></svg>`
  return { size, path, downloadUrl: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}` }
}
