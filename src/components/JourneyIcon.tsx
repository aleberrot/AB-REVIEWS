type IconName = 'tap' | 'review' | 'discover'

export default function JourneyIcon({ name }: { name: IconName }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {name === 'tap' && <><rect x="19" y="7" width="27" height="48" rx="5" /><path d="M29 48h7M26 13h13M8 23a17 17 0 0 0 0 20M13 28a10 10 0 0 0 0 10" /><path d="m28 30 4 4 7-8" /></>}
      {name === 'review' && <><path d="M12 10h40a5 5 0 0 1 5 5v27a5 5 0 0 1-5 5H29L16 57V47h-4a5 5 0 0 1-5-5V15a5 5 0 0 1 5-5Z" /><path d="M17 23h30M17 32h24" /></>}
      {name === 'discover' && <><path d="M8 28h48l-5-15H13L8 28ZM11 28v27h42V28M26 55V39h12v16M6 55h52" /><path d="M8 28c0 8 12 8 12 0 0 8 12 8 12 0 0 8 12 8 12 0 0 8 12 8 12 0M22 19h20" /></>}
    </svg>
  )
}
