<template>
  <section id="instagram" class="section" style="background: var(--surface);">
    <div class="container">
      <div style="text-align: center; margin-bottom: 2rem;">
        <h2>Siga-nos no Instagram</h2>
        <p class="muted">Acompanhe nossos projetos, bastidores e novidades.</p>
        <a href="https://instagram.com/helancocamiseteria" target="_blank" rel="noopener" class="button primary" style="margin-top: 1rem;">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          @helancocamiseteria
        </a>
      </div>

      <!-- Feed do Instagram comentado temporariamente -->
      <!--
      <div v-if="loading" class="instagram-grid">
        <div v-for="i in 6" :key="`skeleton-${i}`" class="instagram-post card">
          <ImageSkeleton aspect-ratio="1" />
        </div>
      </div>

      <div v-else-if="error" class="error-state">
        <div class="card" style="padding: 2rem; text-align: center;">
          <svg width="48" height="48" fill="var(--accent)" viewBox="0 0 24 24" style="margin: 0 auto 1rem;">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          <h3>Não foi possível carregar o feed</h3>
          <p class="muted">{{ error }}</p>
          <small class="muted">
            💡 <strong>Ainda não configurado?</strong> Veja o guia em <code>docs/INSTAGRAM_API_SETUP.md</code>
          </small>
        </div>
      </div>

      <div v-else-if="posts.length > 0" class="instagram-grid">
        <a 
          v-for="post in posts" 
          :key="post.id"
          :href="post.permalink"
          target="_blank"
          rel="noopener noreferrer"
          class="instagram-post card"
        >
          <div class="instagram-media">
            <NuxtImg
              v-if="post.media_type === 'VIDEO' && post.thumbnail_url"
              :src="post.thumbnail_url"
              :alt="post.caption || 'Instagram post'"
              width="400"
              height="400"
              loading="lazy"
              format="webp"
              class="instagram-image"
            />
            <NuxtImg
              v-else
              :src="post.media_url"
              :alt="post.caption || 'Instagram post'"
              width="400"
              height="400"
              loading="lazy"
              format="webp"
              class="instagram-image"
            />
            
            <div class="instagram-overlay">
              <svg v-if="post.media_type === 'VIDEO'" width="32" height="32" fill="white" viewBox="0 0 24 24" style="margin-bottom: 0.5rem;">
                <path d="M8 5v14l11-7z"/>
              </svg>
              <svg v-else-if="post.media_type === 'CAROUSEL_ALBUM'" width="32" height="32" fill="white" viewBox="0 0 24 24" style="margin-bottom: 0.5rem;">
                <path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"/>
              </svg>
              <svg v-else width="32" height="32" fill="white" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
          </div>
        </a>
      </div>

      <div v-else class="instagram-grid">
        <div v-for="i in 6" :key="`placeholder-${i}`" class="instagram-post card">
          <div class="instagram-placeholder" :style="`background: linear-gradient(${135 + i * 30}deg, var(--color-${['yellow', 'copper', 'gold', 'yellow', 'copper', 'brown'][i-1]}) 0%, var(--color-${['copper', 'gold', 'brown', 'gold', 'brown', 'copper'][i-1]}) 100%);`">
            <div class="instagram-overlay">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div style="text-align: center; margin-top: 1.5rem;">
        <small class="muted">
          <template v-if="!posts.length && !error && !loading">
            💡 <strong>Configure o Instagram API</strong> para exibir posts reais - veja <code>docs/INSTAGRAM_API_SETUP.md</code>
          </template>
          <template v-else-if="posts.length > 0">
            Atualizando automaticamente do Instagram ✨
          </template>
        </small>
      </div>
      -->
    </div>
  </section>
</template>

<script setup lang="ts">
// Feed do Instagram comentado temporariamente
/*
const { posts, loading, error, fetchInstagramPosts } = useInstagramFeed()

onMounted(() => {
  fetchInstagramPosts({ limit: 6 })
})
*/
</script>

<style scoped>
.instagram-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.instagram-post {
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
  color: inherit;
}

.instagram-post:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(212,132,62,0.3);
}

.instagram-media {
  aspect-ratio: 1;
  position: relative;
  overflow: hidden;
}

.instagram-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.instagram-placeholder {
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  position: relative;
}

.instagram-overlay {
  background: rgba(0,0,0,0.5);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
}

.instagram-post:hover .instagram-overlay {
  opacity: 1;
}

.error-state code {
  background: rgba(212,132,62,0.1);
  padding: 0.15rem 0.4rem;
  border-radius: 0.3rem;
  color: var(--accent-2);
  font-size: 0.85rem;
}

@media (min-width: 640px) {
  .instagram-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .instagram-grid {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
