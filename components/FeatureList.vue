<template>
  <section id="recursos" class="section" style="background: var(--bg);">
    <div class="container">
      <div style="text-align: center; max-width: 65ch; margin: 0 auto 2.5rem;">
        <h2 style="font-size: clamp(1.75rem, 4vw, 2.5rem);">Capacidades Feitas para Escalar</h2>
        <p class="muted" style="font-size: 1.05rem;">Da amostragem à produção em grande escala com rigoroso controle de qualidade.</p>
      </div>
      <div class="grid cols-3" style="gap: 1.5rem;">
        <article class="card feature-card" data-animate data-animate-delay="100" style="padding: 1.75rem; transition: all 0.3s ease;">
          <div style="width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, var(--accent-2), var(--accent)); display: grid; place-items: center; margin-bottom: 1rem; box-shadow: 0 8px 20px rgba(200,155,60,0.25);">
            <svg width="24" height="24" fill="currentColor" style="color: #0c0c0c;" viewBox="0 0 24 24"><path d="M7 2h10c1.1 0 2 .9 2 2v18l-7-3-7 3V4c0-1.1.9-2 2-2z"/></svg>
          </div>
          <h3>Modelagem e Amostragem</h3>
          <p>Prototipagem rápida com modelistas especializados em criação de moldes.</p>
        </article>
        <article class="card feature-card" data-animate data-animate-delay="200" style="padding: 1.75rem; transition: all 0.3s ease;">
          <div style="width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, var(--accent-2), var(--accent)); display: grid; place-items: center; margin-bottom: 1rem; box-shadow: 0 8px 20px rgba(200,155,60,0.25);">
            <svg width="24" height="24" fill="currentColor" style="color: #0c0c0c;" viewBox="0 0 24 24"><path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z"/></svg>
          </div>
          <h3>Corte e Costura</h3>
          <p>Corte e costura com operadores qualificados para produção consistente e eficiente.</p>
        </article>
        <article class="card feature-card" data-animate data-animate-delay="300" style="padding: 1.75rem; transition: all 0.3s ease;">
          <div style="width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, var(--accent-2), var(--accent)); display: grid; place-items: center; margin-bottom: 1rem; box-shadow: 0 8px 20px rgba(200,155,60,0.25);">
            <svg width="24" height="24" fill="currentColor" style="color: #0c0c0c;" viewBox="0 0 24 24"><path d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1l4.24 4.24C17.38 10.48 18 12 18 13.59s-.62 3.11-1.76 4.24C15.11 18.97 13.6 19.59 12 19.59z"/></svg>
          </div>
          <h3>DTF e Serigrafia</h3>
          <p>Capacidade de fabricar camisetas personalizadas com artes digitais e serigrafia.</p>
        </article>
        <article class="card feature-card" data-animate data-animate-delay="300" style="padding: 1.75rem; transition: all 0.3s ease;">
          <div style="width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, var(--accent-2), var(--accent)); display: grid; place-items: center; margin-bottom: 1rem; box-shadow: 0 8px 20px rgba(200,155,60,0.25);">
            <svg width="24" height="24" fill="currentColor" style="color: #0c0c0c;" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
          </div>
          <h3>Uniformes e Eventos</h3>
          <p>Grande experiência na produção de uniformes escolares, corporativos e para eventos.</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Scroll animations
useScrollAnimation()
</script>
