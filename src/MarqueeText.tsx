import React, { useState, useRef, useEffect, Children } from 'react'
import useInView from './hooks/useInView'
import { injectMarqueeStyles } from './injectStyles'
import { MarqueeTextProps } from './types'

const marqueeContainerStyles: React.CSSProperties = {
  position: 'relative',
  width: '100%',
  overflow: 'hidden'
}

const marqueeItemsStyles = (
  startPosition: number,
  time: number,
  direction?: string,
  willChange?: boolean
): React.CSSProperties => ({
  display: 'inline-block',
  whiteSpace: 'nowrap',
  transform: `translate3d(-${startPosition}px, 0, 0)`,
  animationName: 'marqueeScroll',
  animationDuration: `${time}s`,
  animationTimingFunction: 'linear',
  animationIterationCount: 'infinite',
  animationPlayState: 'var(--marquee-play)',
  animationDirection: direction === 'right' ? 'reverse' : undefined,
  ...(willChange && { willChange: 'transform' })
})

const marqueeItemStyles = (marginRight: string): React.CSSProperties => ({
  position: 'relative',
  display: 'inline-block',
  marginRight: marginRight
})

const getClonedItems = (
  items: (string | number | React.ReactNode)[],
  copyTimes = 1
): (string | number)[] => {
  return Array(copyTimes).fill(items).flat()
}

const MarqueeText: React.FC<MarqueeTextProps> = ({
  className = 'marquee',
  duration = 50,
  direction = 'left',
  pauseOnHover = false,
  playOnlyInView = true,
  textSpacing = '0.15em',
  treshold = 0.1,
  children
}: MarqueeTextProps) => {
  const marqueeContainer = useRef<HTMLDivElement>(null)
  const marqueeItems = useRef<HTMLDivElement>(null)
  const [translateFrom, setTranslateFrom] = useState(0)
  const [showItems, setShowItems] = useState(Children.toArray(children))
  const [initialDuration, setInitialDuration] = useState(duration)
  const [isPlaying, setIsPlaying] = useState(true)

  const isVisible = useInView({
    ref: marqueeContainer,
    rootMargin: '10px',
    threshold: [treshold],
    repeat: true
  })

  useEffect(() => {
    injectMarqueeStyles()
  }, [])

  useEffect(() => {
    const containerWidth = Math.floor(marqueeContainer.current!.offsetWidth)
    const itemsWidth = Math.floor(marqueeItems.current!.scrollWidth)
    const cloneTimes = Math.max(2, Math.ceil((containerWidth * 2) / itemsWidth))
    const translateFromVal = itemsWidth * Math.floor(cloneTimes / 2)
    const durationVal =
      duration * parseFloat((translateFromVal / containerWidth).toFixed(2))

    setShowItems(getClonedItems(Children.toArray(children), cloneTimes))
    setTranslateFrom(translateFromVal)
    setInitialDuration(durationVal)
  }, [children, duration])

  useEffect(() => {
    if (!playOnlyInView) return

    if (isVisible) {
      setIsPlaying(true)
    } else {
      setIsPlaying(false)
    }
  }, [isVisible, playOnlyInView])

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPlaying(false)
    }
  }

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPlaying(true)
    }
  }

  return (
    <div
      ref={marqueeContainer}
      className={`${className}`}
      style={{
        ...marqueeContainerStyles,
        ['--marquee-play' as string]: isPlaying ? 'running' : 'paused'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`${className}__items`}
        style={marqueeItemsStyles(translateFrom, initialDuration, direction)}
        ref={marqueeItems}
      >
        {showItems.map((item, index) => (
          <div
            className={`${className}__item`}
            style={marqueeItemStyles(textSpacing)}
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MarqueeText
