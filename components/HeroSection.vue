<template>
  <section class="hero-section">
    <div class="hero-container">
      <!-- Text Content - Left Side -->
      <div class="hero-content" data-animate="slide-right">
        <h1 class="hero-title">HELANCO</h1>
        <p class="hero-description">
          A Helanco é a sua parceira estratégica na fabricação de camisetas em volume. 
          Atendemos marcas, eventos e empresas com produção personalizada e alta capacidade produtiva em 
          Brasília.
        </p>
        <div class="hero-actions">
          <NuxtLink to="#contato" class="button primary">Iniciar um Projeto</NuxtLink>
          <NuxtLink to="/loja" class="button secondary">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
            Loja
          </NuxtLink>
        </div>
      </div>

      <!-- Image Slideshow - Right Side -->
      <div class="hero-image-wrapper" data-animate="slide-left" data-animate-delay="200">
        <div class="slideshow-container">
          <div
            v-for="(image, index) in heroImages"
            :key="index"
            class="slide"
            :class="{ active: currentSlide === index }"
          >
            <NuxtImg
              :src="image.src"
              :alt="image.alt"
              :width="1200"
              :height="1600"
              loading="eager"
              format="webp"
              class="hero-image"
              :placeholder="[120, 160, 75, 5]"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- Smooth gradient fade at bottom -->
    <div class="hero-fade"></div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Scroll animations
useScrollAnimation()

// Hero images for slideshow
const heroImages = ref([
  { src: '/images/hero/hero-1.png', alt: 'Helanco - Coleção Premium 1' },
  { src: '/images/hero/hero-2.png', alt: 'Helanco - Coleção Premium 2' },
  { src: '/images/hero/hero-3.png', alt: 'Helanco - Coleção Premium 3' }
])

const currentSlide = ref(0)
let slideInterval: ReturnType<typeof setInterval> | null = null

// Auto-advance slides
const startSlideshow = () => {
  slideInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % heroImages.value.length
  }, 6000) // Change image every 6 seconds
}

// Manual navigation
const goToSlide = (index: number) => {
  currentSlide.value = index
  // Reset interval when manually navigating
  if (slideInterval) {
    clearInterval(slideInterval)
    startSlideshow()
  }
}

onMounted(() => {
  startSlideshow()
})

onUnmounted(() => {
  if (slideInterval) {
    clearInterval(slideInterval)
  }
})
</script>

<style scoped>
.hero-section {
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg);
  padding: 2rem 0 8rem 0;
  position: relative;
  overflow: hidden;
  margin-bottom: -150px;
}

.hero-fade {
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 350px;
  background: linear-gradient(to bottom, 
    transparent 0%, 
    rgba(var(--bg-rgb), 0.2) 30%,
    rgba(var(--bg-rgb), 0.5) 50%,
    rgba(var(--bg-rgb), 0.8) 70%,
    var(--bg) 90%,
    var(--bg) 100%
  );
  pointer-events: none;
  z-index: 5;
}

.hero-container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  padding: 0 3rem;
}

/* Left Content */
.hero-content {
  padding-right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero-title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 300;
  letter-spacing: 0.02em;
  line-height: 1;
  margin-bottom: 1.5rem;
  color: var(--text);
}

.hero-description {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text);
  margin-bottom: 2.5rem;
  max-width: 500px;
  opacity: 0.9;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.button {
  padding: 0.9rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.button.primary {
  background: var(--color-gold);
  color: #fff;
  border-color: var(--color-gold);
}

.button.primary:hover {
  background: var(--color-copper);
  border-color: var(--color-copper);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(200, 155, 60, 0.3);
}

.button.secondary {
  background: transparent;
  color: var(--accent);
  border-color: var(--accent);
}

.button.secondary:hover {
  background: var(--accent);
  color: #fff;
  transform: translateY(-2px);
}

/* Right Image */
.hero-image-wrapper {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 0;
  overflow: visible;
  mask-image: linear-gradient(to bottom, 
    black 0%, 
    black 60%, 
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(to bottom, 
    black 0%, 
    black 60%, 
    transparent 100%
  );
}

.slideshow-container {
  position: relative;
  width: 100%;
  max-width: 550px;
  height: auto;
  margin: 0 auto;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 2s ease-in-out;
  z-index: 1;
}

.slide.active {
  position: relative;
  opacity: 1;
  z-index: 2;
}

.hero-image {
  width: 100%;
  max-width: 550px;
  height: auto;
  object-fit: contain;
  display: block;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .hero-section {
    min-height: auto;
    padding: 4rem 0 6rem 0;
    margin-bottom: -100px;
  }

  .hero-container {
    gap: 3rem;
  }

  .hero-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
  }

  .slideshow-container {
    max-width: 450px;
  }

  .hero-image {
    max-width: 450px;
  }
}

@media (max-width: 1024px) {
  .hero-section {
    padding: 3rem 0 4rem 0;
    margin-bottom: -80px;
  }

  .hero-container {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1.5rem;
  }

  .hero-content {
    padding-right: 0;
    text-align: center;
    order: 2;
  }

  .hero-image-wrapper {
    order: 1;
    padding-top: 0;
  }

  .hero-description {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .hero-actions {
    justify-content: center;
  }

  .slideshow-container {
    max-width: 400px;
  }

  .hero-image {
    max-width: 400px;
  }

  .hero-fade {
    height: 250px;
  }
}

@media (max-width: 768px) {
  .hero-section {
    min-height: auto;
    padding: 2rem 0 3rem 0;
    margin-bottom: -60px;
  }

  .hero-container {
    gap: 1.5rem;
    padding: 0 1rem;
  }

  .hero-title {
    font-size: 2.25rem;
    margin-bottom: 1rem;
  }

  .hero-description {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  .hero-actions {
    flex-direction: column;
    width: 100%;
    gap: 0.75rem;
  }

  .button {
    width: 100%;
    justify-content: center;
    padding: 0.85rem 1.5rem;
    font-size: 0.95rem;
  }

  .slideshow-container {
    max-width: 320px;
  }

  .hero-image {
    max-width: 320px;
  }

  .hero-fade {
    height: 200px;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 1.5rem 0 2rem 0;
    margin-bottom: -40px;
  }

  .hero-container {
    padding: 0 0.75rem;
  }

  .hero-title {
    font-size: 1.85rem;
  }

  .hero-description {
    font-size: 0.95rem;
  }

  .button {
    padding: 0.75rem 1.25rem;
    font-size: 0.9rem;
  }

  .slideshow-container {
    max-width: 280px;
  }

  .hero-image {
    max-width: 280px;
  }

  .hero-fade {
    height: 150px;
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .button {
    transition: none;
  }
  
  .slide {
    transition: none;
  }
}
</style>