import { ref, onMounted, onUnmounted } from 'vue'

interface CounterOptions {
  duration?: number // Animation duration in milliseconds
  delay?: number // Delay before starting animation
  suffix?: string // Suffix like '%' or '+'
  prefix?: string // Prefix like '$' or '#'
}

export const useCounterAnimation = (
  target: number,
  options: CounterOptions = {}
) => {
  const {
    duration = 2000,
    delay = 0,
    suffix = '',
    prefix = ''
  } = options

  const displayValue = ref(prefix + '0' + suffix)
  const element = ref<HTMLElement | null>(null)
  let observer: IntersectionObserver | null = null
  let animationFrame: number | null = null
  let hasAnimated = false

  const easeOutQuart = (t: number): number => {
    return 1 - Math.pow(1 - t, 4)
  }

  const animate = () => {
    if (hasAnimated) return

    const startTime = performance.now()
    const startValue = 0

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime - delay
      
      if (elapsed < 0) {
        animationFrame = requestAnimationFrame(updateCounter)
        return
      }

      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutQuart(progress)
      const currentValue = Math.floor(startValue + (target - startValue) * easedProgress)
      
      displayValue.value = prefix + currentValue + suffix

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCounter)
      } else {
        // Ensure we end exactly on target
        displayValue.value = prefix + target + suffix
        hasAnimated = true
      }
    }

    animationFrame = requestAnimationFrame(updateCounter)
  }

  const initObserver = () => {
    if (typeof window === 'undefined' || !element.value) return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            animate()
            observer?.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.3, // Trigger when 30% visible
        rootMargin: '0px'
      }
    )

    observer.observe(element.value)
  }

  onMounted(() => {
    initObserver()
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
    if (animationFrame !== null) {
      cancelAnimationFrame(animationFrame)
    }
  })

  return {
    displayValue,
    element
  }
}
