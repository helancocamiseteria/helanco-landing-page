# 📋 Quick Reference - Helanco Landing Page

Comandos e informações essenciais sempre à mão.

---

## 🚀 Comandos Principais

```bash
# Desenvolvimento
npm run dev              # Iniciar servidor local (localhost:3000)

# Build & Deploy
npm run build            # Build SSR
npm run generate         # Build estático (SSG)
npm run preview          # Preview do build local

# Verificações
npm run check            # Verificar se está pronto para deploy
npm run lint             # Verificar código (ESLint)
npm run type-check       # Verificar tipos TypeScript

# Manutenção
npm install              # Instalar/atualizar dependências
npm outdated             # Ver pacotes desatualizados
npm audit                # Verificar vulnerabilidades
```

---

## 🔐 Variáveis de Ambiente

Arquivo: `.env`

```bash
# EmailJS (Formulário de Contato)
NUXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NUXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NUXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Instagram Feed
NUXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN=IGQV...
```

**⚠️ Lembrete**: Instagram token expira a cada 60 dias!

---

## 📁 Estrutura de Arquivos

```
/components/          → Componentes Vue reutilizáveis
  ContactCta.vue      → Seção de CTA de contato
  FeatureList.vue     → Lista de funcionalidades
  HeroSection.vue     → Hero com slideshow
  InstagramFeed.vue   → Feed do Instagram
  ProcessSteps.vue    → Processo de produção
  TestimonialList.vue → Depoimentos
  WhatsAppButton.vue  → Botão flutuante do WhatsApp
  WorkplaceGallery.vue → Galeria de fotos

/composables/         → Lógica reutilizável
  useContactForm.ts   → Lógica do formulário
  useCounterAnimation.ts → Animações de contadores
  useInstagramFeed.ts → API do Instagram
  useScrollAnimation.ts → Animações de scroll

/pages/               → Páginas (rotas)
  index.vue           → Página inicial
  loja.vue            → Loja (em breve)

/public/images/       → Imagens estáticas
  gallery/            → 6 fotos da fábrica
  hero/               → 4 fotos do hero
  og/                 → Imagem Open Graph

/docs/                → Documentação
  *.md                → Guias e documentação
```

---

## 🖼️ Imagens Necessárias

### Galeria (6 fotos)
```
public/images/gallery/
├── corte.jpg      (800x600px, ~200KB)
├── costura.jpg    (800x600px, ~200KB)
├── qualidade.jpg  (800x600px, ~200KB)
├── bordado.jpg    (800x600px, ~200KB)
├── embalagem.jpg  (800x600px, ~200KB)
└── equipe.jpg     (800x600px, ~200KB)
```

### SEO
```
public/
├── og-image.jpg   (1200x630px) - Social sharing
└── logo.png       (512x512px)  - Structured data
```

---

## 🔗 Links Importantes

### Dashboards
- **EmailJS**: https://dashboard.emailjs.com/
- **Facebook Developers**: https://developers.facebook.com/
- **Google Search Console**: https://search.google.com/search-console

### Ferramentas
- **Lighthouse**: https://pagespeed.web.dev
- **OG Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Card**: https://cards-dev.twitter.com/validator
- **Image Optimizer**: https://squoosh.app

### Deploy
- **Vercel**: https://vercel.com
- **Netlify**: https://netlify.com
- **Cloudflare Pages**: https://pages.cloudflare.com

---

## 📊 Metas de Performance

Target Lighthouse Scores:
- 🖥️ **Desktop**: 90+ performance
- 📱 **Mobile**: 85+ performance
- ♿ **Accessibility**: 95+
- ✅ **Best Practices**: 95+
- 🔍 **SEO**: 100

---

## 🐛 Troubleshooting Rápido

| Problema | Solução Rápida |
|----------|----------------|
| Site não carrega | `npm run build` → ver erros |
| Formulário não envia | Verificar `.env` → reiniciar server |
| Instagram não aparece | Token expirou? Regenerar (60 dias) |
| Imagens quebradas | Verificar nomes de arquivo (case-sensitive) |
| Build falha | `rm -rf node_modules && npm install` |
| CSS não aplica | Limpar cache do browser (Ctrl+Shift+R) |

Ver [TROUBLESHOOTING.md](docs/TROUBLESHOOTING.md) para mais detalhes.

---

## 📅 Manutenção Regular

- **Mensal**: Lighthouse audit, testar formulário
- **Bimestral**: Renovar token Instagram (⚠️ CRÍTICO)
- **Trimestral**: Atualizar dependências, revisar conteúdo
- **Anual**: Renovar domínio, auditoria completa

Ver [MAINTENANCE.md](docs/MAINTENANCE.md) para checklist completo.

---

## 🎯 Checklist Pré-Deploy

```bash
# Executar verificação automática
npm run check
```

Manualmente verificar:
- [ ] `.env` configurado
- [ ] Build local funciona
- [ ] Domínio real atualizado
- [ ] Imagens adicionadas
- [ ] Estatísticas atualizadas
- [ ] Formulário testado
- [ ] Lighthouse > 85

---

## 📞 Contatos Úteis

**Suporte Técnico**:
- EmailJS: support@emailjs.com
- Meta Developers: developers.facebook.com/support

**Documentação**:
- Nuxt: nuxt.com/docs
- Vue: vuejs.org
- TypeScript: typescriptlang.org

---

## 🎨 Cores da Marca

```css
--accent: #C89B3C;      /* Dourado */
--background: #1A1A1D;  /* Preto escuro */
--surface: #0F0F11;     /* Preto mais escuro */
--text: #E0E0E0;        /* Cinza claro */
--text-secondary: #B0B0B0; /* Cinza médio */
```

---

## 🔢 Estatísticas Atuais

```vue
500+  Projetos Concluídos
50k+  Peças por Mês
98%   Taxa de Satisfação
1995  Ano de fundação
```

**⚠️ Atualizar com números reais** → [STATISTICS_UPDATE_NEEDED.md](docs/STATISTICS_UPDATE_NEEDED.md)

---

## 📚 Documentação Completa

- **[README.md](README.md)** - Visão geral e quick start
- **[DEPLOYMENT.md](docs/DEPLOYMENT.md)** - Guia de deploy
- **[TROUBLESHOOTING.md](docs/TROUBLESHOOTING.md)** - Solução de problemas
- **[MAINTENANCE.md](docs/MAINTENANCE.md)** - Manutenção recorrente
- **[CHANGELOG.md](CHANGELOG.md)** - Histórico de mudanças
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Como contribuir

### Setup Guides
- **[EMAILJS_SETUP.md](docs/EMAILJS_SETUP.md)** - Configurar formulário
- **[INSTAGRAM_QUICK_START.md](docs/INSTAGRAM_QUICK_START.md)** - Instagram em 30 min
- **[IMAGE_SETUP.md](docs/IMAGE_SETUP.md)** - Adicionar imagens
- **[SEO_GUIDE.md](docs/SEO_GUIDE.md)** - SEO completo
- **[PERFORMANCE_GUIDE.md](docs/PERFORMANCE_GUIDE.md)** - Otimizações

---

**Última atualização**: Dezembro 2025  
**Versão**: 1.0.0
