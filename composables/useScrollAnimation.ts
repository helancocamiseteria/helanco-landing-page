import { onMounted, onUnmounted, ref } from 'vue'

export const useScrollAnimation = () => {
  const elements = ref<Element[]>([])
  let observer: IntersectionObserver | null = null

  const initScrollAnimation = () => {
    // Only run in browser
    if (typeof window === 'undefined') return

    // Get all elements with data-animate attribute
    elements.value = Array.from(document.querySelectorAll('[data-animate]'))

    // Create intersection observer
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement
            const delay = element.dataset.animateDelay || '0'
            
            // Add animated class with delay
            setTimeout(() => {
              element.classList.add('animate-in')
            }, parseInt(delay))

            // Stop observing once animated
            observer?.unobserve(element)
          }
        })
      },
      {
        threshold: 0.1, // Trigger when 10% visible
        rootMargin: '0px 0px -50px 0px', // Start slightly before entering viewport
      }
    )

    // Observe all elements
    elements.value.forEach((element) => {
      observer?.observe(element)
    })
  }

  const cleanup = () => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
  }

  onMounted(() => {
    // Small delay to ensure DOM is ready
    setTimeout(initScrollAnimation, 100)
  })

  onUnmounted(() => {
    cleanup()
  })

  return {
    initScrollAnimation,
    cleanup,
  }
}
