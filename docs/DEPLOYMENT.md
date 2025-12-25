# 🚀 Guia de Deploy - Helanco Landing Page

Este guia cobre o processo de deploy para produção em diferentes plataformas.

## ✅ Checklist Pré-Deploy

Antes de fazer o deploy, certifique-se de que:

- [ ] Todas as variáveis de ambiente estão configuradas localmente
- [ ] Site funciona perfeitamente em `npm run dev`
- [ ] Build local executado sem erros: `npm run build`
- [ ] Testes de performance realizados (Lighthouse > 90)
- [ ] Todos os links e botões testados
- [ ] Formulário de contato enviando emails
- [ ] Feed do Instagram carregando
- [ ] Imagens carregando corretamente
- [ ] SEO tags verificadas (Open Graph, Twitter Card)
- [ ] Domínio real atualizado em:
  - [ ] `/pages/index.vue`
  - [ ] `/pages/loja.vue`
  - [ ] `/public/sitemap.xml`
  - [ ] `/public/robots.txt`

---

## 🌐 Opções de Hosting

### 1. Vercel (Recomendado) ⚡

**Vantagens**: Integração perfeita com Nuxt, deploy automático, edge network global, SSL grátis.

#### Setup Passo a Passo

1. **Criar conta**
   - Acesse: https://vercel.com/signup
   - Conecte com GitHub/GitLab/Bitbucket

2. **Importar projeto**
   - Click "Add New..." → "Project"
   - Selecione o repositório do projeto
   - Vercel detecta Nuxt automaticamente

3. **Configurar variáveis de ambiente**
   - Em "Environment Variables", adicione:
     ```
     NUXT_PUBLIC_EMAILJS_SERVICE_ID
     NUXT_PUBLIC_EMAILJS_TEMPLATE_ID
     NUXT_PUBLIC_EMAILJS_PUBLIC_KEY
     NUXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN
     ```
   - Cole os valores do seu arquivo `.env` local
   - Adicione para: Production, Preview, Development

4. **Configurações de build** (já detectadas)
   - Build Command: `npm run build`
   - Output Directory: `.output/public`
   - Install Command: `npm install`

5. **Deploy**
   - Click "Deploy"
   - Aguarde ~2-3 minutos
   - Site estará em: `https://seu-projeto.vercel.app`

6. **Domínio customizado**
   - Settings → Domains
   - Adicione seu domínio (ex: `helanco.com`)
   - Configure DNS conforme instruções
   - SSL configurado automaticamente

#### Deploy Contínuo
- Cada push para `main` → deploy automático em produção
- Cada PR → preview deploy automático

---

### 2. Netlify 🌊

**Vantagens**: Interface simples, forms nativos, redirects fáceis, SSL grátis.

#### Setup Passo a Passo

1. **Criar conta**
   - Acesse: https://app.netlify.com/signup
   - Conecte com GitHub/GitLab/Bitbucket

2. **Criar novo site**
   - "Add new site" → "Import an existing project"
   - Selecione o repositório

3. **Configurações de build**
   - Build command: `npm run generate`
   - Publish directory: `.output/public`
   - Node version: `20`

4. **Variáveis de ambiente**
   - Site settings → Environment variables
   - Adicione todas as variáveis do `.env`

5. **Deploy**
   - Click "Deploy site"
   - Site estará em: `https://random-name.netlify.app`

6. **Domínio customizado**
   - Domain settings → Add custom domain
   - Configure DNS
   - SSL automático

#### Otimizações Netlify

Crie `netlify.toml` na raiz:

```toml
[build]
  command = "npm run generate"
  publish = ".output/public"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "*.css"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/images/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

---

### 3. Cloudflare Pages 🔶

**Vantagens**: CDN global, Workers, Analytics grátis, Pages Functions.

#### Setup

1. **Criar conta**: https://dash.cloudflare.com/sign-up
2. **Pages** → "Create a project" → "Connect to Git"
3. **Build settings**:
   - Build command: `npm run generate`
   - Build output directory: `.output/public`
   - Root directory: (deixe vazio)
4. **Environment variables**: Adicione todas do `.env`
5. **Deploy**

---

### 4. AWS Amplify ☁️

**Vantagens**: Integração com AWS, escalabilidade, hosting poderoso.

#### Setup

1. **Console AWS**: https://console.aws.amazon.com/amplify/
2. **Host web app** → Connect repository
3. **Build settings** (amplify.yml criado automaticamente):

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run generate
  artifacts:
    baseDirectory: .output/public
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

4. **Environment variables**: Adicione no console
5. **Deploy**

---

## 🔧 Configurações Pós-Deploy

### 1. Google Search Console

1. Acesse: https://search.google.com/search-console
2. Adicione a propriedade (seu domínio)
3. Verifique propriedade
4. Envie o sitemap: `https://seudominio.com/sitemap.xml`

### 2. Analytics (Opcional)

**Google Analytics 4**:
```vue
// Adicione em app.vue ou nuxt.config.ts
useHead({
  script: [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX',
      async: true
    }
  ]
})
```

**Plausible** (alternativa privacy-first):
```vue
useHead({
  script: [
    {
      src: 'https://plausible.io/js/script.js',
      'data-domain': 'seudominio.com',
      defer: true
    }
  ]
})
```

### 3. Monitoramento

- **Uptime**: https://uptimerobot.com (grátis)
- **Performance**: https://pagespeed.web.dev
- **Errors**: Sentry, LogRocket, ou Rollbar

---

## 🔄 Manutenção Contínua

### Instagram Token (A cada 60 dias)

1. Acesse Facebook Developers
2. Regenere o token
3. Atualize a variável de ambiente no host
4. Faça redeploy (ou aguarde próximo deploy automático)

### Sitemap

Atualize `lastmod` em `/public/sitemap.xml` quando houver mudanças significativas no conteúdo.

### Performance

Execute Lighthouse mensalmente:
```bash
npm install -g lighthouse
lighthouse https://seudominio.com --view
```

Metas:
- Performance: 90+ (desktop), 85+ (mobile)
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

---

## 🐛 Troubleshooting

### Build falha

**Erro**: `Cannot find module...`
- Solução: Certifique-se de que `package.json` está atualizado e commitado

**Erro**: `Environment variable not found`
- Solução: Verifique se todas as variáveis estão no painel do host

### Site não carrega

**Erro 404**:
- Verifique o diretório de output nas configurações
- Para SSG: `.output/public`
- Para SSR: `.output`

**Imagens não aparecem**:
- Certifique-se de que `/public/images/` foi commitado
- Verifique os caminhos nos componentes

### Formulário não envia

- Verifique se EmailJS está configurado nas variáveis de ambiente
- Teste localmente primeiro: `npm run dev`
- Verifique domínio permitido no painel do EmailJS

### Instagram não carrega

- Token expirado? Regenere
- Variável de ambiente configurada?
- Conta do Instagram é pública?

---

## 📊 Métricas de Sucesso

Após deploy, monitore:

- **Lighthouse Score**: >90 desktop, >85 mobile
- **Load Time**: <2s (first contentful paint)
- **Bundle Size**: <500KB (gzip)
- **Uptime**: >99.9%
- **Core Web Vitals**: Todos "Good"

---

## 🎉 Deploy Checklist Final

- [ ] Build local sem erros
- [ ] Variáveis de ambiente configuradas no host
- [ ] Domínio customizado configurado
- [ ] SSL ativo (HTTPS)
- [ ] Sitemap submetido ao Google
- [ ] Analytics configurado
- [ ] Testes em dispositivos reais
- [ ] Links compartilhados testados (Open Graph)
- [ ] Performance verificada (Lighthouse)
- [ ] Formulário de contato testado
- [ ] WhatsApp button testado em mobile
- [ ] Feed Instagram carregando

---

**Última atualização**: Dezembro 2025
