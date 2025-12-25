<template>
  <section id="galeria" class="section">
    <div class="container">
      <div style="text-align: center; max-width: 65ch; margin: 0 auto 2.5rem;">
        <h2 style="font-size: clamp(1.75rem, 4vw, 2.5rem);">Nosso Ambiente de Trabalho</h2>
        <p class="muted" style="font-size: 1.05rem;">Conheça nossas instalações e equipe dedicada à qualidade.</p>
      </div>
      
      <div class="facilities-content">
        <div class="facility-card card">
          <h3>Infraestrutura Moderna</h3>
          <ul class="facility-list">
            <li>Equipamentos de última geração para corte, costura e acabamento</li>
            <li>Instalações projetadas para otimizar a produção</li>
            <li>Ambiente organizado e seguro para nossa equipe</li>
            <li>Tecnologia moderna aplicada a cada etapa do processo</li>
          </ul>
        </div>

        <div class="facility-card card">
          <h3>Equipe Especializada</h3>
          <ul class="facility-list">
            <li>Profissionais com anos de experiência em confecção</li>
            <li>Profissionais em cada etapa: corte, costura e acabamento</li>
            <li>Comprometimento total com a qualidade dos produtos</li>
          </ul>
        </div>

        <div class="facility-card card">
          <h3>Controle de Qualidade Rigoroso</h3>
          <ul class="facility-list">
            <li>Múltiplas inspeções durante o processo produtivo</li>
            <li>Verificação de medidas e acabamentos</li>
            <li>Apenas produtos de qualidade são entregues aos clientes</li>
            <li>Profissionais dedicados ao controle de qualidade</li>
          </ul>
        </div>

        <div class="facility-card card">
          <h3>Processos Otimizados</h3>
          <ul class="facility-list">
            <li>Gestão eficiente de produção</li>
            <li>Cumprimento rigoroso de cronogramas</li>
            <li>Qualidade não é comprometida pela velocidade</li>
          </ul>
        </div>
      </div>
      
      <!-- <div style="text-align: center; margin-top: 3rem; padding: 2rem; background: rgba(212,132,62,0.05); border-radius: 12px; border: 1px solid rgba(212,132,62,0.15);">
        <p class="muted" style="font-size: 1.05rem; margin-bottom: 0.5rem;">
          <strong style="color: var(--accent);">Em breve:</strong> Fotos das nossas instalações e equipe!
        </p>
        <small class="muted">Estamos preparando um tour visual completo pelas nossas instalações.</small>
      </div> -->
    </div>
  </section>
</template>

<script setup lang="ts">
// Seção temporária sem imagens - aguardando fotos das instalações
</script>

<style scoped>
.facilities-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.facility-card {
  padding: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.facility-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(212,132,62,0.3);
}

.facility-card h3 {
  font-size: 1.35rem;
  margin-bottom: 1.25rem;
  color: var(--accent);
  text-align: center;
}

.facility-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.facility-list li {
  position: relative;
  padding-left: 1.75rem;
  color: var(--muted);
  line-height: 1.6;
  font-size: 1rem;
}

.facility-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: var(--accent);
  font-weight: bold;
  font-size: 1.1rem;
}

@media (min-width: 768px) {
  .facilities-content {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .facilities-content {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
