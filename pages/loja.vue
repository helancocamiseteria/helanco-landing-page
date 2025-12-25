<template>
  <div class="coming-soon-page">
    <div class="container">
      <div class="coming-soon-card card">
        <div class="icon-wrapper">
          <svg width="64" height="64" fill="currentColor" viewBox="0 0 24 24" style="color: var(--accent);">
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
          </svg>
        </div>
        
        <h1 style="font-size: clamp(1.75rem, 4vw, 2.5rem); margin-bottom: 1rem;">
          Loja Online <span style="color: var(--accent);">Em Breve</span>
        </h1>
        
        <p style="font-size: 1.15rem; max-width: 50ch; margin: 0 auto 2rem; color: var(--text);">
          Estamos trabalhando duro para trazer nossa loja online até você. 
          Em breve você poderá adquirir produtos exclusivos da Helanco com toda comodidade.
        </p>

        <div class="features-grid">
          <div class="feature-item">
            <div class="feature-icon">✨</div>
            <div class="muted">Produtos Exclusivos</div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">🚚</div>
            <div class="muted">Entrega Rápida</div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">💳</div>
            <div class="muted">Pagamento Seguro</div>
          </div>
        </div>

        <div style="margin-top: 2.5rem;">
          <NuxtLink to="/" class="button primary" style="padding: 1rem 2rem; font-size: 1.05rem;">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
            </svg>
            Voltar para Página Inicial
          </NuxtLink>
        </div>

        <!-- <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid rgba(255,255,255,0.08);">
          <p class="muted" style="margin-bottom: .75rem;">Quer ser avisado quando lançarmos?</p>
          <a href="/#contato" class="button ghost">Entre em Contato</a>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const siteUrl = (config.public.siteUrl || 'https://helanco.vercel.app') as string
const pageUrl = `${siteUrl}/loja`
const pageTitle = 'Loja em Breve — Helanco'
const pageDescription = 'Nossa loja online está em desenvolvimento. Em breve você poderá adquirir produtos exclusivos da Helanco com toda comodidade.'

useHead({
  title: pageTitle,
  meta: [
    // Primary Meta Tags
    { name: 'description', content: pageDescription },
    { name: 'robots', content: 'noindex, follow' }, // Don't index "coming soon" page
    
    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: pageUrl },
    { property: 'og:title', content: pageTitle },
    { property: 'og:description', content: pageDescription },
    { property: 'og:site_name', content: 'Helanco' },
    { property: 'og:locale', content: 'pt_BR' },
    
    // Twitter Card
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:url', content: pageUrl },
    { name: 'twitter:title', content: pageTitle },
    { name: 'twitter:description', content: pageDescription },
  ],
  link: [
    { rel: 'canonical', href: pageUrl },
  ],
})
</script>

<style scoped>
.coming-soon-page {
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem;
}

.coming-soon-card {
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  padding: 3rem 2rem;
  background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));
}

.icon-wrapper {
  width: 96px;
  height: 96px;
  margin: 0 auto 2rem;
  border-radius: 24px;
  background: linear-gradient(135deg, rgba(247,201,72,0.15), rgba(200,155,60,0.15));
  border: 1px solid rgba(200,155,60,0.3);
  display: grid;
  place-items: center;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
  padding: 2rem 0;
}

.feature-item {
  text-align: center;
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: .5rem;
}

@media (max-width: 640px) {
  .coming-soon-card {
    padding: 2rem 1.5rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
</style>
