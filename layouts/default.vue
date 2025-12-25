<template>
  <div>
    <header class="site-header">
      <div class="container navbar">
        <NuxtLink to="/" class="brand" aria-label="Helanco Início">
          <img src="/images/logo.png" alt="Helanco Logo" class="brand-logo" />
          <span>HELANCO</span>
        </NuxtLink>
        
        <!-- Desktop Navigation -->
        <nav class="nav" aria-label="Principal">
          <a href="/#sobre">Sobre</a>
          <a href="/#recursos">Recursos</a>
          <a href="/#materiais">Materiais</a>
          <a href="/#processo">Processo</a>
          <a href="/#galeria">Galeria</a>
          <a href="/#contato">Contato</a>
          <a href="/loja" style="color: var(--accent); font-weight: 700;">Loja</a>
        </nav>

        <!-- Mobile Menu Button -->
        <button 
          class="mobile-menu-button"
          @click="toggleMobileMenu"
          :aria-expanded="mobileMenuOpen"
          aria-controls="mobile-menu"
          aria-label="Menu de navegação"
        >
          <span class="hamburger" :class="{ 'open': mobileMenuOpen }">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>
    </header>

    <!-- Mobile Navigation Overlay -->
    <Transition name="fade">
      <div 
        v-if="mobileMenuOpen" 
        class="mobile-menu-overlay"
        @click="closeMobileMenu"
        aria-hidden="true"
      ></div>
    </Transition>

    <!-- Mobile Navigation Menu -->
    <Transition name="slide">
      <nav 
        v-if="mobileMenuOpen"
        id="mobile-menu"
        class="mobile-nav"
        aria-label="Menu principal mobile"
      >
        <div class="mobile-nav-header">
          <div class="brand">
            <img src="/images/logo.png" alt="Helanco Logo" class="brand-logo" />
            <span>Helanco</span>
          </div>
          <button 
            @click="closeMobileMenu"
            class="close-button"
            aria-label="Fechar menu"
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </div>
        <div class="mobile-nav-links">
          <a href="/#sobre" @click="closeMobileMenu">Sobre</a>
          <a href="/#recursos" @click="closeMobileMenu">Recursos</a>
          <a href="/#materiais" @click="closeMobileMenu">Materiais</a>
          <a href="/#processo" @click="closeMobileMenu">Processo</a>
          <a href="/#galeria" @click="closeMobileMenu">Galeria</a>
          <a href="/loja" @click="closeMobileMenu" style="color: var(--accent);">Loja</a>
          <a href="/#contato" @click="closeMobileMenu">Contato</a>
        </div>
      </nav>
    </Transition>

    <main>
      <slot />
    </main>

    <footer class="site-footer section sm">
      <div class="container">
        <div style="display:grid; gap:2rem; grid-template-columns: repeat(1, 1fr); margin-bottom: 1.5rem;">
          <div style="text-align: center;">
            <div style="display:flex; align-items:center; gap:.6rem; margin-bottom: 1rem; justify-content: center;">
              <img src="/images/logo.png" alt="Helanco Logo" class="brand-logo" />
              <strong style="color:#fff; font-size: 1.1rem;">Helanco</strong>
            </div>
            <p class="muted" style="max-width: 35ch; font-size: .95rem; margin: 0 auto 1rem;">Transformando ideias em vestuário de qualidade desde 2005.</p>
            
            <!-- Informações da Empresa -->
            <div style="margin: 1.5rem auto; max-width: 45ch;">
              <div style="display: grid; gap: 0.75rem; font-size: .875rem; color: var(--muted);">
                <div style="display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" style="opacity: 0.7;">
                    <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                  <span>CNPJ: 11.494.276.0001-90</span>
                </div>
                <div style="display: flex; align-items: start; justify-content: center; gap: 0.5rem; text-align: left;">
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" style="opacity: 0.7; flex-shrink: 0; margin-top: 2px;">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span>QR 309, Conjunto 10, Lote 05 - Samambaia Sul - Distrito Federal - CEP 72305-811</span>
                </div>
              </div>
            </div>
            
            <div style="display:flex; gap:1.5rem; justify-content: center; margin-top: 1.5rem;">
              <a href="#sobre" class="muted" style="text-decoration: none; font-size: .9rem; transition: color 0.2s;">Sobre</a>
              <a href="/loja" class="muted" style="text-decoration: none; font-size: .9rem; transition: color 0.2s;">Loja</a>
              <a href="#contato" class="muted" style="text-decoration: none; font-size: .9rem; transition: color 0.2s;">Contato</a>
            </div>
          </div>
        </div>
        <div style="border-top: 1px solid rgba(255,255,255,0.08); padding-top: 1.5rem; text-align: center;">
          <small class="muted">{{ new Date().getFullYear() }} Helanco®. Todos os direitos reservados.</small>
        </div>
      </div>
    </footer>

    <!-- Back to Top Button -->
    <button 
      v-show="showBackToTop"
      @click="scrollToTop"
      class="back-to-top"
      aria-label="Voltar ao topo"
    >
      <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
      </svg>
    </button>

    <!-- WhatsApp Floating Button -->
    <WhatsAppButton />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'

const showBackToTop = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

// Prevent body scroll when mobile menu is open
watch(mobileMenuOpen, (isOpen) => {
  if (typeof document !== 'undefined') {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
})

// Close menu on escape key
const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && mobileMenuOpen.value) {
    closeMobileMenu()
  }
}

onMounted(() => {
  // Force scroll to top on page load/refresh
  window.scrollTo(0, 0)
  
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', handleKeyDown)
  // Cleanup body scroll lock
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
main { min-height: 70vh; }

/* Mobile Menu Button */
.mobile-menu-button {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
}

.hamburger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 28px;
  height: 24px;
  position: relative;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 3px;
  background: var(--text);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.hamburger.open span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* Mobile Menu Overlay */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  z-index: 999;
}

/* Mobile Navigation */
.mobile-nav {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(320px, 85vw);
  background: var(--bg);
  border-left: 1px solid rgba(255, 255, 255, 0.06);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  box-shadow: -8px 0 32px rgba(0, 0, 0, 0.5);
}

.mobile-nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.mobile-nav-header .brand {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--text);
  font-weight: 800;
  letter-spacing: 0.4px;
}

.close-button {
  background: none;
  border: none;
  color: var(--text);
  cursor: pointer;
  padding: 0.5rem;
  display: grid;
  place-items: center;
  border-radius: 0.5rem;
  transition: background 0.2s;
}

.close-button:hover {
  background: rgba(255, 255, 255, 0.05);
}

.mobile-nav-links {
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  gap: 0.25rem;
}

.mobile-nav-links a {
  padding: 1rem 1.5rem;
  color: var(--text);
  text-decoration: none;
  font-weight: 600;
  font-size: 1.05rem;
  transition: all 0.2s;
  border-left: 3px solid transparent;
}

.mobile-nav-links a:hover {
  background: rgba(255, 255, 255, 0.03);
  border-left-color: var(--accent);
  color: var(--accent);
}

.mobile-nav-links a:active {
  background: rgba(255, 255, 255, 0.05);
}

/* Animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

/* Show mobile menu button on small screens */
@media (max-width: 859px) {
  .mobile-menu-button {
    display: block;
  }
}

.back-to-top {
  position: fixed;
  bottom: 6.5rem;
  right: 2rem;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-2), var(--accent));
  border: 1px solid rgba(0,0,0,0.25);
  color: #0c0c0c;
  cursor: pointer;
  display: grid;
  place-items: center;
  box-shadow: 0 8px 24px rgba(200,155,60,0.35), 0 0 0 1px rgba(255,255,255,0.1) inset;
  transition: all 0.3s ease;
  z-index: 100;
}

.back-to-top:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(200,155,60,0.45), 0 0 0 1px rgba(255,255,255,0.1) inset;
}

.back-to-top:active {
  transform: translateY(-2px);
}

@media (max-width: 640px) {
  .back-to-top {
    bottom: 5.5rem;
    right: 1.5rem;
    width: 48px;
    height: 48px;
  }
}
</style>
