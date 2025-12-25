# 🏭 Helanco Landing Page

Landing page moderna e otimizada para a Helanco Fábrica de Roupas, construída com **Nuxt 4** e **Vue 3**.

## ✨ Funcionalidades

- 🎨 Design responsivo com cores da marca
- 📸 Hero section com slideshow automático
- 🔢 Animações de contador para estatísticas
- 📱 Feed do Instagram integrado
- 📧 Formulário de contato via EmailJS
- 💬 Botão WhatsApp flutuante
- 🚀 Performance otimizada (Lighthouse 90+)
- 🔍 SEO completo com Open Graph e structured data
- ♿ Acessibilidade (WCAG 2.1)

## 📋 Pré-requisitos

- Node.js 18+ ou 20+
- npm, pnpm, yarn ou bun

## 🚀 Quick Start

### 1. Instalar dependências

```bash
npm install
```

### 2. Configurar variáveis de ambiente

```bash
# Copie o arquivo de exemplo
cp .env.example .env

# Edite .env e preencha os valores reais
# Veja docs/EMAILJS_SETUP.md e docs/INSTAGRAM_QUICK_START.md
```

### 3. Iniciar servidor de desenvolvimento

```bash
npm run dev
```

Acesse: `http://localhost:3000`

## 📦 Build para Produção

```bash
# Build estático (SSG)
npm run generate

# Build SSR
npm run build

# Preview do build
npm run preview
```

## 📚 Documentação

Guias detalhados disponíveis em `/docs`:

### Setup Inicial
- [`EMAILJS_SETUP.md`](docs/EMAILJS_SETUP.md) - Configurar formulário de contato
- [`INSTAGRAM_QUICK_START.md`](docs/INSTAGRAM_QUICK_START.md) - Configurar feed do Instagram (30 min)
- [`IMAGE_SETUP.md`](docs/IMAGE_SETUP.md) - Adicionar fotos da galeria

### Antes do Lançamento
- [`STATISTICS_UPDATE_NEEDED.md`](docs/STATISTICS_UPDATE_NEEDED.md) - Atualizar números reais
- [`SEO_GUIDE.md`](docs/SEO_GUIDE.md) - Checklist de SEO

### Otimização
- [`PERFORMANCE_GUIDE.md`](docs/PERFORMANCE_GUIDE.md) - Otimizações implementadas
- [`PERFORMANCE_TEST.md`](docs/PERFORMANCE_TEST.md) - Como testar performance

## 🎯 Checklist Pré-Lançamento

- [ ] Variáveis de ambiente configuradas (`.env`)
- [ ] 6 fotos adicionadas em `/public/images/gallery/`
- [ ] Estatísticas atualizadas com números reais
- [ ] Domínio real atualizado em todos os arquivos
- [ ] Imagem Open Graph criada (`/public/og-image.jpg`)
- [ ] Logo adicionado (`/public/logo.png`)
- [ ] Instagram API configurado
- [ ] Testes em múltiplos dispositivos
- [ ] Lighthouse audit > 90 (desktop e mobile)

## 🛠️ Stack Tecnológica

- **Framework**: Nuxt 4 + Vue 3 + TypeScript
- **Estilização**: CSS customizado com variáveis CSS
- **UI**: Nuxt UI
- **Imagens**: Nuxt Image (WebP/AVIF otimizado)
- **Email**: EmailJS
- **API**: Instagram Basic Display API
- **SEO**: Unhead (meta tags + structured data)
- **Performance**: View Transitions, payload extraction

## 📁 Estrutura do Projeto

```
/
├── components/       # Componentes Vue reutilizáveis
├── composables/      # Composables Vue (lógica reutilizável)
├── pages/           # Páginas (index, loja)
├── layouts/         # Layouts (default)
├── public/          # Arquivos estáticos
│   ├── images/      # Imagens (gallery, hero, og)
│   ├── robots.txt   # SEO
│   └── sitemap.xml  # SEO
├── docs/            # Documentação do projeto
└── assets/css/      # Estilos globais
```

## 🌐 Deploy

Compatible com:
- ✅ Vercel (recomendado)
- ✅ Netlify
- ✅ Cloudflare Pages
- ✅ AWS Amplify
- ✅ Qualquer host com Node.js

**Importante**: Adicione as variáveis de ambiente no painel do host.

## 📞 Suporte

Para dúvidas sobre o código, consulte a documentação em `/docs` ou os comentários no código.
