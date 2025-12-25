<template>
  <section id="sobre" class="section" style="background: var(--surface); position: relative; z-index: 10; padding-top: 12rem;">
    <div class="container">
      <div style="display:grid; gap:2.5rem; grid-template-columns: 1fr; align-items:center;">
        <div style="max-width: 65ch;" data-animate>
          <div style="display:inline-flex; align-items:center; gap:.5rem; font-size:.85rem; padding:.4rem .8rem; border-radius:.5rem; border:1px solid rgba(200,155,60,.35); background:rgba(200,155,60,.08); color:var(--accent); font-weight:700; margin-bottom: 1rem;">
            Excelência desde 2005
          </div>
          <h2 style="font-size: clamp(1.75rem, 4vw, 2.5rem);">Sobre a Helanco</h2>
          <p style="font-size: 1.1rem; line-height: 1.7; color: var(--text);">
            Indústria têxtil full service especializada em vestuário de alta qualidade. Transformamos conceitos em realidade, dominando com excelência a produção em malharia e tecido plano.
          </p>
          <div class="grid cols-3" style="margin-top: 2rem; gap: 1.5rem;">
            <div data-animate data-animate-delay="100">
              <div ref="projects" style="font-size: 2rem; font-weight: 800; color: var(--accent); margin-bottom: .25rem;">{{ projectsCount }}</div>
              <div class="muted" style="font-size: .9rem;">Projetos Concluídos</div>
            </div>
            <div data-animate data-animate-delay="200">
              <div ref="pieces" style="font-size: 2rem; font-weight: 800; color: var(--accent); margin-bottom: .25rem;">{{ piecesCount }}</div>
              <div class="muted" style="font-size: .9rem;">Peças por Mês</div>
            </div>
            <!-- <div data-animate data-animate-delay="300">
              <div ref="satisfaction" style="font-size: 2rem; font-weight: 800; color: var(--accent); margin-bottom: .25rem;">{{ satisfactionCount }}</div>
              <div class="muted" style="font-size: .9rem;">Taxa de Satisfação</div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Animated counters for statistics
const { displayValue: projectsCount, element: projects } = useCounterAnimation(1000, { 
  suffix: '+', 
  duration: 2500,
  delay: 100 
})

const { displayValue: piecesCount, element: pieces } = useCounterAnimation(5, { 
  suffix: 'k+', 
  duration: 1500,
  delay: 200 
})

const { displayValue: satisfactionCount, element: satisfaction } = useCounterAnimation(98, { 
  suffix: '%', 
  duration: 2000,
  delay: 300 
})
</script>
