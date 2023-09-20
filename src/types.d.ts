import { ReactNode } from 'react'

export interface MarqueeTextProps {
  children?: ReactNode
  className?: string
  duration?: number
  direction?: 'left' | 'right'
  textSpacing?: string
  pauseOnHover?: boolean
  playOnlyInView?: boolean
  treshold?: number
}
