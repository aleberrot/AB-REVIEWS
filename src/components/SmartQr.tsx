import { useMemo } from 'react'
import { createQrGraphic } from '../lib/qr'

interface SmartQrProps {
  value: string
  label?: string
  downloadable?: boolean
}

function SmartQr({ value, label = 'QR para abrir la demo de AB Reviews', downloadable = false }: SmartQrProps) {
  const graphic = useMemo(() => createQrGraphic(value), [value])
  return (
    <div className="smart-qr">
      <svg viewBox={`0 0 ${graphic.size} ${graphic.size}`} role="img" aria-label={label} shapeRendering="crispEdges">
        <path fill="white" d={`M0 0h${graphic.size}v${graphic.size}H0z`} />
        <path fill="#182f32" d={graphic.path} />
      </svg>
      {downloadable && <a href={graphic.downloadUrl} download="ab-reviews-demo.svg">Descargar QR de prueba ↓</a>}
    </div>
  )
}

export default SmartQr
