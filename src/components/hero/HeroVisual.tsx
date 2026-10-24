import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import SmartQr from '../SmartQr'
import { buildSmartLink } from '../../lib/smartLinks'

type DemoStep = 'ready' | 'detected' | 'notification' | 'review'
const DETECTION_DELAY_MS = 900
const instructions: Record<DemoStep, string> = {
  ready: 'Prueba el gesto de tu próximo cliente.',
  detected: 'NFC detectado. Preparando el enlace…',
  notification: 'Toca la notificación del teléfono.',
  review: 'Un enlace. El negocio correcto.',
}

function PhoneScreen({ step, onOpen, notificationRef }: {
  step: DemoStep
  onOpen: () => void
  notificationRef: React.RefObject<HTMLButtonElement | null>
}) {
  if (step === 'notification') {
    return <div className="phone__notification-view"><span className="phone__time">9:41</span><p>ENLACE NFC DETECTADO</p><button ref={notificationRef} className="phone__notification" onClick={onOpen}><strong>Abrir AB Reviews ↗</strong><span>/r/demo</span></button><span className="phone__hint">Toca para continuar</span></div>
  }
  if (step === 'review') {
    return <div className="phone__review"><span className="phone__business-mark">M.</span><p>NEGOCIO DE EJEMPLO</p><strong>Mesa & Miga</strong><span>¿Cómo fue tu visita?</span><Link to="/r/demo">Abrir experiencia ↗</Link><small>Demostración sin publicar reseñas</small></div>
  }
  return <div className="phone__waiting"><span className="phone__scan" aria-hidden="true">◎</span><strong>{step === 'detected' ? 'Enlace detectado.' : 'Un toque.'}</strong><span>{step === 'detected' ? 'Tu negocio, a un paso.' : 'Una opinión que cuenta.'}</span><small>Sin instalar otra app.</small></div>
}

function HeroVisual() {
  const [step, setStep] = useState<DemoStep>('ready')
  const controlRef = useRef<HTMLButtonElement>(null)
  const notificationRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (step !== 'detected') return
    const timer = window.setTimeout(() => setStep('notification'), DETECTION_DELAY_MS)
    return () => window.clearTimeout(timer)
  }, [step])

  useEffect(() => {
    // La notificación se inserta antes del control. El foco sigue el recorrido,
    // pero no se lo quitamos a alguien que ya salió de la simulación.
    if (step === 'notification' && document.activeElement === controlRef.current) {
      notificationRef.current?.focus({ preventScroll: true })
    }
  }, [step])

  function openReview() {
    setStep('review')
    controlRef.current?.focus({ preventScroll: true })
  }

  return (
    <figure className="hero-object" aria-label="Simulación del acceso NFC a AB Reviews">
      <div className="hero-object__label"><span>AB / EN TU PUNTO DE ATENCIÓN</span><span>PRUEBA INTERACTIVA</span></div>
      <div className="hero-object__scene" data-step={step}>
        <div className="hero-access">
          <span className="eyebrow">DOS FORMAS DE ENTRAR</span>
          <strong>NFC + QR</strong>
          <p>Acerca o escanea.<br />Abre tu Smart Link.</p>
          <SmartQr value={buildSmartLink('demo')} />
        </div>
        <span className="hero-object__wave" aria-hidden="true">))</span>
        <div className="phone">
          <div className="phone__top" aria-hidden="true"><span>9:41</span><i /><span>▰</span></div>
          <div className="phone__screen" key={step}><PhoneScreen step={step} onOpen={openReview} notificationRef={notificationRef} /></div>
          <span className="phone__home" aria-hidden="true" />
        </div>
      </div>
      <figcaption className="hero-object__caption">
        <p role="status">{instructions[step]}</p>
        <button ref={controlRef} onClick={() => setStep(step === 'ready' ? 'detected' : 'ready')}>{step === 'ready' ? 'Simular acercamiento →' : 'Reiniciar ↺'}</button>
      </figcaption>
      <p className="hero-object__note">Simulación de uso; no muestra un producto físico. El QR abre la demo pública.</p>
    </figure>
  )
}

export default HeroVisual
