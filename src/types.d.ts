export interface MarqueeTextProps {
  children?: string
  className?: string
  duration?: number
  direction?: 'left' | 'right'
  textSpacing?: string
  pauseOnHover?: boolean
  playOnlyInView?: boolean
  treshold?: number
}
