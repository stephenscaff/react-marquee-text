import { RefObject, useState, useEffect } from 'react'

type Props = {
  ref: RefObject<HTMLElement | null>
  rootMargin?: string
  threshold?: number | number[]
  repeat?: boolean
}

/**
 * UseInView
 * Hook using IO to determin if element is visible
 * @example
 *   const ref = useRef<HTMLDivElement>(null)
 *   const isInView = useInView({ ref: ref, rootMargin: '-10px', fireOnce: true })
 * @returns Boolean
 */
function useInView({
  ref,
  rootMargin = '10px',
  threshold = 0.4,
  repeat = false
}: Props): boolean {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const callbackFunction = (entries) => {
      const [entry] = entries
      setIntersecting(entry.isIntersecting)

      if (!repeat && entry.intersectionRatio > 0) {
        observer.unobserve(entry.target)
      }
    }

    let observerRefValue = null

    const observer = new IntersectionObserver(callbackFunction, {
      rootMargin,
      threshold
    })

    if (ref.current) {
      observer.observe(ref.current)
      observerRefValue = ref.current
    }
    return () => {
      if (observerRefValue) observer.unobserve(observerRefValue)
    }
  }, [ref, setIntersecting, rootMargin, threshold, repeat])
  return isIntersecting
}

export default useInView
