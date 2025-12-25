# Contribuindo para Helanco Landing Page

Obrigado pelo interesse em contribuir! Este documento fornece diretrizes para contribuir com o projeto.

## 📋 Código de Conduta

- Seja respeitoso e profissional
- Mantenha discussões focadas no projeto
- Aceite feedback construtivo
- Priorize a qualidade do código

## 🚀 Como Contribuir

### Reportar Bugs

Ao reportar bugs, inclua:

1. **Descrição clara** do problema
2. **Passos para reproduzir**
3. **Comportamento esperado** vs **comportamento atual**
4. **Screenshots** (se aplicável)
5. **Ambiente**: Browser, OS, versão do Node

### Sugerir Melhorias

Para sugestões de features:

1. Verifique se já não existe issue similar
2. Descreva claramente o problema que resolve
3. Explique a solução proposta
4. Considere alternativas

## 💻 Desenvolvimento

### Setup Local

```bash
# Clone o repositório
git clone [url-do-repo]

# Instale dependências
npm install

# Configure variáveis de ambiente
cp .env.example .env
# Edite .env com valores reais

# Inicie servidor de dev
npm run dev
```

### Padrões de Código

#### TypeScript
- Use tipos explícitos sempre que possível
- Evite `any` - prefira `unknown` se necessário
- Documente tipos complexos com JSDoc

```typescript
// ✅ Bom
interface User {
  name: string
  email: string
}

// ❌ Evite
const data: any = {...}
```

#### Vue/Nuxt
- Use Composition API (não Options API)
- Componentes em PascalCase
- Props tipadas com TypeScript
- Emits declarados explicitamente

```vue
<script setup lang="ts">
// ✅ Bom
interface Props {
  title: string
  count?: number
}

const props = defineProps<Props>()
const emit = defineEmits<{
  click: [id: number]
}>()
</script>
```

#### CSS
- Use variáveis CSS para cores e espaçamentos
- Mobile-first (min-width, não max-width)
- Classes descritivas em inglês
- Evite `!important`

```css
/* ✅ Bom */
.button-primary {
  background: var(--accent);
  padding: var(--spacing-md);
}

@media (min-width: 768px) {
  .button-primary {
    padding: var(--spacing-lg);
  }
}
```

#### Commits

Use Conventional Commits:

```
feat: adiciona filtro de produtos
fix: corrige scroll suave no Safari
docs: atualiza guia de instalação
style: formata código com Prettier
refactor: simplifica lógica do carrinho
perf: otimiza carregamento de imagens
test: adiciona testes para formulário
chore: atualiza dependências
```

### Pull Requests

1. **Fork** o projeto
2. Crie uma **branch** descritiva: `git checkout -b feat/nova-feature`
3. **Commit** suas mudanças seguindo convenções
4. **Push** para o fork: `git push origin feat/nova-feature`
5. Abra um **Pull Request**

#### Checklist do PR

- [ ] Código segue os padrões do projeto
- [ ] Build local passa sem erros: `npm run build`
- [ ] Testado em Chrome, Firefox e Safari
- [ ] Testado em mobile e desktop
- [ ] Sem console.logs desnecessários
- [ ] Documentação atualizada (se necessário)
- [ ] Screenshots/GIFs para mudanças visuais

## 📁 Estrutura do Projeto

```
/components     # Componentes Vue reutilizáveis
/composables    # Lógica reutilizável (hooks)
/pages          # Páginas (rotas automáticas)
/layouts        # Layouts de página
/assets         # CSS, fontes, etc.
/public         # Arquivos estáticos
/docs           # Documentação
```

### Criar Novo Componente

```vue
<!-- components/NovoComponente.vue -->
<template>
  <div class="novo-componente">
    <h2>{{ title }}</h2>
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
}

defineProps<Props>()
</script>

<style scoped>
.novo-componente {
  /* estilos isolados */
}
</style>
```

### Criar Novo Composable

```typescript
// composables/useNovaFuncionalidade.ts
export function useNovaFuncionalidade() {
  const estado = ref<string>('')

  function metodo() {
    // lógica
  }

  return {
    estado: readonly(estado),
    metodo
  }
}
```

## 🧪 Testes

```bash
# Rodar testes
npm run test

# Testes com watch
npm run test:watch

# Coverage
npm run test:coverage
```

## 🎨 Assets

### Imagens
- Otimize antes de adicionar (Squoosh, TinyPNG)
- Use formatos modernos: WebP/AVIF
- Adicione em `/public/images/`
- Tamanhos recomendados:
  - Hero: 1920x1440px
  - Gallery: 800x600px
  - OG: 1200x630px

### Ícones
- Prefira SVG inline
- Use `currentColor` para cores dinâmicas
- Tamanho viewBox: 24x24

## 📊 Performance

Mantenha scores Lighthouse:
- **Performance**: 90+ (desktop), 85+ (mobile)
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

### Dicas
- Lazy load imagens below-the-fold
- Use `loading="lazy"` em `<img>`
- Minimize bundle size
- Use code splitting
- Otimize Web Vitals (LCP, CLS, FID)

## 🔐 Segurança

- **Nunca** commite `.env` ou secrets
- Valide inputs do usuário
- Sanitize dados antes de exibir
- Use HTTPS em produção
- Mantenha dependências atualizadas

## 📝 Documentação

Ao adicionar features complexas:
1. Adicione JSDoc nos métodos
2. Crie/atualize arquivo em `/docs`
3. Atualize README.md se necessário
4. Adicione exemplos de uso

## 🙏 Agradecimentos

Obrigado por contribuir para tornar este projeto melhor!

---

Dúvidas? Abra uma issue ou entre em contato.
