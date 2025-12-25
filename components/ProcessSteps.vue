<template>
  <section id="processo" class="section" style="background: var(--surface);">
    <div class="container">
      <div style="text-align: center; max-width: 65ch; margin: 0 auto 2.5rem;">
        <h2 style="font-size: clamp(1.75rem, 4vw, 2.5rem);">Nosso Processo</h2>
        <p class="muted" style="font-size: 1.05rem;">Do conceito até a entrega, cada etapa é cuidadosamente gerenciada.</p>
      </div>
      <div style="max-width: 900px; margin: 0 auto;">
        <div class="grid" style="grid-template-columns: repeat(1, minmax(0, 1fr)); gap: 1.5rem;">
          <div class="card" style="display:flex; gap:1.5rem; align-items:flex-start; padding: 1.75rem; position: relative;">
            <div style="width:48px; height:48px; border-radius:12px; background: linear-gradient(135deg, var(--accent-2), var(--accent)); display: grid; place-items: center; flex-shrink: 0; box-shadow: 0 8px 20px rgba(200,155,60,0.25); font-weight: 800; color: #0c0c0c; font-size: 1.25rem;">1</div>
            <div>
              <h3 style="margin-bottom: .5rem;">Descoberta e Ficha Técnica</h3>
              <p>Requisitos, materiais e especificações-alinhados para viabilidade e prazos.</p>
            </div>
          </div>
          <div class="card" style="display:flex; gap:1.5rem; align-items:flex-start; padding: 1.75rem; position: relative;">
            <div style="width:48px; height:48px; border-radius:12px; background: linear-gradient(135deg, var(--accent-2), var(--accent)); display: grid; place-items: center; flex-shrink: 0; box-shadow: 0 8px 20px rgba(200,155,60,0.25); font-weight: 800; color: #0c0c0c; font-size: 1.25rem;">2</div>
            <div>
              <h3 style="margin-bottom: .5rem;">Amostragem</h3>
              <p>Protótipos de peças para aprovação de caimento, construção e acabamento.</p>
            </div>
          </div>
          <div class="card" style="display:flex; gap:1.5rem; align-items:flex-start; padding: 1.75rem; position: relative;">
            <div style="width:48px; height:48px; border-radius:12px; background: linear-gradient(135deg, var(--accent-2), var(--accent)); display: grid; place-items: center; flex-shrink: 0; box-shadow: 0 8px 20px rgba(200,155,60,0.25); font-weight: 800; color: #0c0c0c; font-size: 1.25rem;">3</div>
            <div>
              <h3 style="margin-bottom: .5rem;">Produção</h3>
              <p>Corte e costura em escala com controle de qualidade inline e inspeção final rigorosa.</p>
            </div>
          </div>
          <div class="card" style="display:flex; gap:1.5rem; align-items:flex-start; padding: 1.75rem; position: relative;">
            <div style="width:48px; height:48px; border-radius:12px; background: linear-gradient(135deg, var(--accent-2), var(--accent)); display: grid; place-items: center; flex-shrink: 0; box-shadow: 0 8px 20px rgba(200,155,60,0.25); font-weight: 800; color: #0c0c0c; font-size: 1.25rem;">4</div>
            <div>
              <h3 style="margin-bottom: .5rem;">Embalagem e Envio</h3>
              <p>Embalagem personalizada, etiquetagem e coordenação de logística global.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Process steps, static for now
</script>
