<template>
  <section id="localizacao" class="section" style="background: var(--bg);">
    <div class="container">
      <div style="text-align: center; max-width: 65ch; margin: 0 auto 2.5rem;">
        <h2 style="font-size: clamp(1.75rem, 4vw, 2.5rem);">Nossa Localização</h2>
        <p class="muted" style="font-size: 1.05rem;">Venha nos visitar e conhecer nossa produção de perto!</p>
      </div>
      
      <div class="map-container card">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.405119203723!2d-48.10151127471316!3d-15.887833198707785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935bd34f0279646d%3A0xe771001b819ca51f!2sHelanco%20Camisetas!5e0!3m2!1spt-BR!2sbr!4v1769885603181!5m2!1spt-BR!2sbr" 
          width="100%" 
          height="450" 
          style="border:0;" 
          allowfullscreen 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
          title="Mapa de Localização Helanco"
        ></iframe>
      </div>
      
      <div style="text-align: center; margin-top: 1.5rem;">
        <p class="muted" style="font-size: 0.95rem;">
          <svg width="16" height="16" fill="var(--accent)" viewBox="0 0 24 24" style="vertical-align: text-bottom; margin-right: 4px;">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          Samambaia Sul, Distrito Federal
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.map-container {
  overflow: hidden;
  padding: 0.5rem;
  background: var(--surface);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
}

iframe {
  display: block;
  border-radius: 12px;
  filter: grayscale(1) contrast(1.2) invert(0.9);
}

/* Make map look normal on hover */
.map-container:hover iframe {
  filter: none;
  transition: filter 0.3s ease;
}
</style>
