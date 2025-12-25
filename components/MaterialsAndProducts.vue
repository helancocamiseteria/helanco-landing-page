<template>
  <section id="materiais" class="section" style="background: var(--surface);">
    <div class="container">
      <div style="text-align: center; max-width: 65ch; margin: 0 auto 3rem;">
        <h2 style="font-size: clamp(1.75rem, 4vw, 2.5rem);">Materiais e Produtos</h2>
        <p class="muted" style="font-size: 1.05rem;">Trabalhamos com uma ampla variedade de tecidos e malhas para criar peças sob medida para sua marca.</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2.5rem; margin-bottom: 1rem;">
        <!-- Malhas e Tecidos -->
        <div data-animate data-animate-delay="100">
          <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem;">
            <div style="width: 40px; height: 40px; border-radius: 10px; background: linear-gradient(135deg, var(--accent-2), var(--accent)); display: grid; place-items: center; box-shadow: 0 6px 16px rgba(200,155,60,0.25);">
              <svg width="20" height="20" fill="currentColor" style="color: #0c0c0c;" viewBox="0 0 24 24">
                <path d="M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2v14H3v3c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V2l-1.5 1.5zM19 19c0 .55-.45 1-1 1s-1-.45-1-1v-3H8V5h11v14z"/>
              </svg>
            </div>
            <h3 style="margin: 0; font-size: 1.35rem;">Malhas e Tecidos</h3>
          </div>
          <ul style="list-style: none; padding: 0; margin: 0; display: grid; gap: 0.75rem;">
            <li style="padding: 0.65rem 1rem; background: rgba(200,155,60,0.06); border-left: 3px solid var(--accent); border-radius: 0.4rem;">
              <strong style="color: var(--accent);">Algodão</strong>
              <span style="display: block; font-size: 0.9rem; color: var(--muted); margin-top: 0.15rem;">100% natural e confortável</span>
            </li>
            <li style="padding: 0.65rem 1rem; background: rgba(200,155,60,0.06); border-left: 3px solid var(--accent); border-radius: 0.4rem;">
              <strong style="color: var(--accent);">PV</strong>
              <span style="display: block; font-size: 0.9rem; color: var(--muted); margin-top: 0.15rem;">Poliéster e viscose</span>
            </li>
            <li style="padding: 0.65rem 1rem; background: rgba(200,155,60,0.06); border-left: 3px solid var(--accent); border-radius: 0.4rem;">
              <strong style="color: var(--accent);">Moletom</strong>
              <span style="display: block; font-size: 0.9rem; color: var(--muted); margin-top: 0.15rem;">Conforto e aquecimento</span>
            </li>
            <li style="padding: 0.65rem 1rem; background: rgba(200,155,60,0.06); border-left: 3px solid var(--accent); border-radius: 0.4rem;">
              <strong style="color: var(--accent);">Dry Fit</strong>
              <span style="display: block; font-size: 0.9rem; color: var(--muted); margin-top: 0.15rem;">Tecnologia esportiva</span>
            </li>
            <li style="padding: 0.65rem 1rem; background: rgba(200,155,60,0.06); border-left: 3px solid var(--accent); border-radius: 0.4rem;">
              <strong style="color: var(--accent);">Piquet</strong>
              <span style="display: block; font-size: 0.9rem; color: var(--muted); margin-top: 0.15rem;">Textura clássica</span>
            </li>
            <li style="padding: 0.65rem 1rem; background: rgba(200,155,60,0.06); border-left: 3px solid var(--accent); border-radius: 0.4rem;">
              <strong style="color: var(--accent);">Suplex</strong>
              <span style="display: block; font-size: 0.9rem; color: var(--muted); margin-top: 0.15rem;">Elasticidade e resistência</span>
            </li>
          </ul>
        </div>

        <!-- Tipos de Peças -->
        <div data-animate data-animate-delay="200">
          <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem;">
            <div style="width: 40px; height: 40px; border-radius: 10px; background: linear-gradient(135deg, var(--accent-2), var(--accent)); display: grid; place-items: center; box-shadow: 0 6px 16px rgba(200,155,60,0.25);">
              <svg width="20" height="20" fill="currentColor" style="color: #0c0c0c;" viewBox="0 0 24 24">
                <path d="M16 9H8c-2.21 0-4 1.79-4 4v8h2v-4h12v4h2v-8c0-2.21-1.79-4-4-4zm-8 8v-3h8v3H8zm13.5-12.5l-1-1-4 4-1.5-1.5-1 1 2.5 2.5 5-5zM12 2l-5.5 9h11L12 2z"/>
              </svg>
            </div>
            <h3 style="margin: 0; font-size: 1.35rem;">Tipos de Peças</h3>
          </div>
          <ul style="list-style: none; padding: 0; margin: 0; display: grid; gap: 0.75rem;">
            <li style="padding: 0.65rem 1rem; background: rgba(200,155,60,0.06); border-left: 3px solid var(--accent); border-radius: 0.4rem;">
              <strong style="color: var(--accent);">Camisetas</strong>
              <span style="display: block; font-size: 0.9rem; color: var(--muted); margin-top: 0.15rem;">Todos os tamanhos, incluindo oversize e plus size</span>
            </li>
            <li style="padding: 0.65rem 1rem; background: rgba(200,155,60,0.06); border-left: 3px solid var(--accent); border-radius: 0.4rem;">
              <strong style="color: var(--accent);">Uniformes</strong>
              <span style="display: block; font-size: 0.9rem; color: var(--muted); margin-top: 0.15rem;">Para escolas e empresas</span>
            </li>
            <li style="padding: 0.65rem 1rem; background: rgba(200,155,60,0.06); border-left: 3px solid var(--accent); border-radius: 0.4rem;">
              <strong style="color: var(--accent);">Camiseta Polo</strong>
              <span style="display: block; font-size: 0.9rem; color: var(--muted); margin-top: 0.15rem;">Estilo clássico</span>
            </li>
            <li style="padding: 0.65rem 1rem; background: rgba(200,155,60,0.06); border-left: 3px solid var(--accent); border-radius: 0.4rem;">
              <strong style="color: var(--accent);">Camiseta Dry Fit</strong>
              <span style="display: block; font-size: 0.9rem; color: var(--muted); margin-top: 0.15rem;">Performance esportiva</span>
            </li>
            <li style="padding: 0.65rem 1rem; background: rgba(200,155,60,0.06); border-left: 3px solid var(--accent); border-radius: 0.4rem;">
              <strong style="color: var(--accent);">Calça Legging</strong>
              <span style="display: block; font-size: 0.9rem; color: var(--muted); margin-top: 0.15rem;">Conforto e flexibilidade</span>
            </li>
            <li style="padding: 0.65rem 1rem; background: rgba(200,155,60,0.06); border-left: 3px solid var(--accent); border-radius: 0.4rem;">
              <strong style="color: var(--accent);">Top</strong>
              <span style="display: block; font-size: 0.9rem; color: var(--muted); margin-top: 0.15rem;">Fitness e atividades</span>
            </li>
            <li style="padding: 0.65rem 1rem; background: rgba(200,155,60,0.06); border-left: 3px solid var(--accent); border-radius: 0.4rem;">
              <strong style="color: var(--accent);">Casaco de Moletom</strong>
              <span style="display: block; font-size: 0.9rem; color: var(--muted); margin-top: 0.15rem;">Com e sem capuz</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Scroll animations
useScrollAnimation()
</script>
