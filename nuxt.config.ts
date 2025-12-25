// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  devServer: {
    host: '0.0.0.0', // Permite acesso de todos os dispositivos da rede
    port: 3000
  },

  css: ['~/assets/css/main.css'],

  vite: {
    server: {
      allowedHosts: true
    }
  },
  
  dir: {
    pages: 'pages'
  },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/test-utils',
    '@nuxt/scripts',
    '@nuxt/image',
    '@nuxt/hints'
  ],

  runtimeConfig: {
    public: {
      emailjsServiceId: '',
      emailjsTemplateId: '',
      emailjsPublicKey: '',
      instagramAccessToken: ''
    }
  },

  image: {
    quality: 80,
    formats: ['webp', 'avif', 'jpeg'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    densities: [1, 2],
    alias: {
      gallery: '/images/gallery',
      hero: '/images/hero',
      og: '/images/og',
    },
  },

  // Performance optimizations
  experimental: {
    payloadExtraction: true,
    renderJsonPayloads: true,
    viewTransition: true,
  },

  // Nitro optimizations for production
  nitro: {
    compressPublicAssets: true,
    minify: true,
  },

  // App performance
  app: {
    head: {
      title: 'Helanco',
      htmlAttrs: {
        lang: 'pt-BR'
      },
      link: [
        // Favicon
        { rel: 'icon', type: 'image/png', href: '/images/logo.png' },
        { rel: 'apple-touch-icon', href: '/images/logo.png' },
        // Preconnect to external domains for faster loading
        { rel: 'preconnect', href: 'https://graph.instagram.com' },
        { rel: 'dns-prefetch', href: 'https://api.emailjs.com' },
      ],
      meta: [
        // Improve mobile performance
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
      ]
    }
  },

  // Fix FOUC (Flash of Unstyled Content)
  features: {
    inlineStyles: true, // Inline critical CSS
  },
})