// src/injectStyles.ts
const CSS = `
@keyframes marqueeScroll {
  to {
    transform: translate3d(0, 0, 0);
  }
}
`

export function injectMarqueeStyles(): void {
  if (typeof document === 'undefined') return // SSR guard
  if (document.getElementById('react-marquee-text-styles')) return // idempotent
  const style = document.createElement('style')
  style.id = 'react-marquee-text-styles'
  // Avoid CSP issues: set textContent
  style.textContent = CSS
  document.head.appendChild(style)
}
