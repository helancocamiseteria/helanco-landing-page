<template>
  <div>
    <HeroSection />
    <AboutSection />
    <FeatureList />
    <MaterialsAndProducts />
    <ProcessSteps />
    <WorkplaceGallery />
    <InstagramFeed />
    <ContactCta />
    <LocationMap />
  </div>
</template>

<script setup lang="ts">
// Initialize scroll animations
useScrollAnimation()

const config = useRuntimeConfig()
const siteUrl = (config.public.siteUrl || 'https://helanco.vercel.app') as string
const siteName = 'Helanco'
const siteDescription = 'Fábrica de roupas premium especializada em vestuário de malha e tecido plano. Amostragem, corte e costura, bordado, controle de qualidade e logística global desde 1995.'
const siteImage = `${siteUrl}/og-image.jpg`

useHead({
  title: 'Helanco',
  meta: [
    // Primary Meta Tags
    { name: 'description', content: siteDescription },
    { name: 'keywords', content: 'fábrica de roupas, confecção, vestuário premium, corte e costura, bordado, malha, tecido plano, amostragem, controle de qualidade, produção têxtil' },
    { name: 'author', content: 'Helanco' },
    { name: 'robots', content: 'index, follow' },
    
    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: siteUrl },
    { property: 'og:title', content: 'Helanco — Fabricação Premium de Vestuário' },
    { property: 'og:description', content: siteDescription },
    { property: 'og:image', content: siteImage },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:site_name', content: siteName },
    { property: 'og:locale', content: 'pt_BR' },
    
    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:url', content: siteUrl },
    { name: 'twitter:title', content: 'Helanco — Fabricação Premium de Vestuário' },
    { name: 'twitter:description', content: siteDescription },
    { name: 'twitter:image', content: siteImage },
    
    // Additional SEO
    { name: 'theme-color', content: '#c89b3c' },
    { name: 'format-detection', content: 'telephone=no' }
  ],
  link: [
    { rel: 'canonical', href: siteUrl }
  ]
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      textContent: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Helanco',
        description: 'Fábrica de roupas premium especializada em vestuário de malha e tecido plano',
        url: siteUrl,
        logo: `${siteUrl}/logo.png`,
        foundingDate: '1995',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'BR'
        },
        sameAs: [
          'https://instagram.com/helancocamiseteria'
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Service',
          availableLanguage: ['Portuguese']
        }
      })
    }
  ]
})
</script>