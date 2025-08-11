import { useInView } from 'react-intersection-observer'
import { useAnimation, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

export const useScrollAnimation = (threshold = 0.1, triggerOnce = true) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold, triggerOnce })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else if (!triggerOnce) {
      controls.start('hidden')
    }
  }, [controls, inView, triggerOnce])

  return [ref, controls]
}

export const useParallax = (offset = 50) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset])

  return { ref, y }
}

export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = scrollPx / winHeightPx
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return scrollProgress
}

export const useRevealAnimation = (threshold = 0.1, delay = 0) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold, triggerOnce: true })

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        controls.start('visible')
      }, delay * 1000)
    }
  }, [controls, inView, delay])

  return [ref, controls]
}
