import React, { useState, useRef, useEffect, Children } from 'react'
import useInView from './hooks/useInView'
import { MarqueeTextProps } from './types'
import './styles.css'

// const marqueeContainerStyles: React.CSSProperties = {
//   position: 'relative',
//   width: '100%',
//   overflow: 'hidden'
// }

const marqueeItemsStyles = (
  startPosition: number,
  time: number,
  direction?: string
): React.CSSProperties => ({
  display: 'inline-block',
  whiteSpace: 'nowrap',
  transform: `translateX(-${startPosition}px)`,
  animationName: 'marqueeScroll',
  animationDuration: `${time}s`,
  animationTimingFunction: 'linear',
  animationIterationCount: 'infinite',
  animationPlayState: 'var(--marquee-play)',
  animationDirection: direction === 'right' ? 'reverse' : undefined
})

const marqueeItemStyles = (marginRight: string): React.CSSProperties => ({
  position: 'relative',
  display: 'inline-block',
  marginRight: marginRight
})

const getClonedItems = (items: string[], copyTimes = 1): string[] => {
  return Array(copyTimes).fill(items).flat()
}

const MarqueeText: React.FC<MarqueeTextProps> = ({
  className,
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
      className={`marquee ${className}`}
      style={{
        ['--marquee-play' as string]: isPlaying ? 'running' : 'paused'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="marquee__items"
        style={marqueeItemsStyles(translateFrom, initialDuration, direction)}
        ref={marqueeItems}
      >
        {showItems.map((item, index) => (
          <div style={marqueeItemStyles(textSpacing)} key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MarqueeText