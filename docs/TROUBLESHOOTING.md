# 🔧 Troubleshooting - Helanco Landing Page

Guia de solução de problemas comuns.

---

## 🚫 Site não Carrega / Erro 404

### Possíveis Causas
1. Build falhou
2. Diretório de output incorreto
3. DNS não configurado corretamente
4. Servidor offline

### Soluções

**Build Local**
```bash
# Limpar cache e rebuild
rm -rf .nuxt .output node_modules
npm install
npm run build

# Testar localmente
npm run preview
```

**Verificar Configurações de Deploy**
- Vercel/Netlify: Output directory deve ser `.output/public`
- Comando de build: `npm run generate` ou `npm run build`

**DNS**
- Aguardar propagação (até 48h)
- Verificar configuração no registrador de domínio
- Testar com https://dnschecker.org

---

## 📧 Formulário de Contato não Funciona

### Sintoma: "Configuração de e-mail não encontrada"

**Causa**: Variáveis de ambiente não configuradas

**Solução**:
```bash
# 1. Verificar se .env existe
cat .env

# 2. Verificar se tem as 3 variáveis do EmailJS
# NUXT_PUBLIC_EMAILJS_SERVICE_ID=...
# NUXT_PUBLIC_EMAILJS_TEMPLATE_ID=...
# NUXT_PUBLIC_EMAILJS_PUBLIC_KEY=...

# 3. Reiniciar servidor de dev
npm run dev
```

**Em Produção**:
- Verificar variáveis no painel do host (Vercel/Netlify)
- Nomes devem ser EXATAMENTE iguais ao .env
- Fazer redeploy após adicionar variáveis

### Sintoma: Formulário envia mas email não chega

**Soluções**:
1. **Verificar spam** - Emails do EmailJS podem cair no spam
2. **Verificar cota** - Free tier: 200 emails/mês
3. **Verificar template** - Ir no painel do EmailJS → Templates → testar
4. **Verificar domínio permitido**:
   - EmailJS → Account → Security
   - Adicionar domínio do site nos "Allowed domains"

### Sintoma: Erro "Failed to send email"

**Debug**:
```bash
# Abrir console do browser (F12)
# Procurar por erros vermelhos
# Copiar mensagem de erro

# Testar EmailJS manualmente:
# https://dashboard.emailjs.com/admin
# Usar "Send Test Email"
```

---

## 📸 Feed do Instagram não Aparece

### Sintoma: "Instagram access token not configured"

**Causa**: Token não está no `.env`

**Solução**:
```bash
# Adicionar ao .env
NUXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN=IGQV...

# Reiniciar
npm run dev
```

### Sintoma: "Invalid OAuth access token"

**Causa**: Token expirado (duram 60 dias)

**Solução**:
1. Acesse: https://developers.facebook.com/
2. Seu App → Instagram Basic Display
3. User Token Generator → Generate Token
4. Copie novo token
5. Atualize `.env` (local) e variáveis no host (produção)
6. Marque calendário para renovar em 60 dias

### Sintoma: Posts não aparecem mesmo com token válido

**Verificar**:
1. **Conta pública?** - Feed só funciona com contas públicas
2. **Posts existem?** - Verificar se há posts recentes no Instagram
3. **Limite de rate**: Aguardar alguns minutos

**Debug**:
```bash
# Testar token manualmente
curl "https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=SEU_TOKEN"

# Se retornar erro, token está inválido
# Se retornar {"data": []}, conta não tem posts ou está privada
```

---

## 🖼️ Imagens não Carregam

### Sintoma: Placeholders aparecem, imagens reais não

**Causa**: Imagens não foram adicionadas nas pastas corretas

**Solução**:
```bash
# Verificar estrutura
ls -la public/images/gallery/
# Deve ter: corte.jpg, costura.jpg, qualidade.jpg, bordado.jpg, embalagem.jpg, equipe.jpg

ls -la public/images/hero/
# Já tem: hero-1.png, hero-2.png, hero-3.png, hero-4.png

# Adicionar imagens faltantes
cp /caminho/para/foto.jpg public/images/gallery/corte.jpg
```

### Sintoma: Imagens quebradas (ícone de imagem quebrada)

**Causas**:
1. Nome do arquivo incorreto
2. Formato não suportado
3. Permissões de arquivo

**Soluções**:
```bash
# Verificar nomes (case-sensitive!)
# Correto: corte.jpg
# Errado: Corte.jpg, corte.JPG, CORTE.jpg

# Converter formato se necessário
# Aceitos: .jpg, .jpeg, .png, .webp, .avif

# Verificar permissões
chmod 644 public/images/gallery/*.jpg
```

---

## ⚡ Site Lento

### Diagnosticar

```bash
# Lighthouse audit
npx lighthouse https://seudominio.com --view

# Ou usar: https://pagespeed.web.dev
```

### Problemas Comuns

**Imagens muito grandes**
- Comprimir com https://squoosh.app
- Tamanho recomendado: Gallery 800x600, Hero 1920x1440
- Peso máximo: ~200KB por imagem

**Muitas requisições**
- Otimizar imports
- Usar dynamic imports para componentes pesados

**JavaScript muito grande**
```bash
# Analisar bundle
npx nuxt analyze

# Ver tamanho atual
npm run build
ls -lh .output/public/_nuxt/
```

---

## 🔐 Erros de CORS

### Sintoma: "Access-Control-Allow-Origin" error

**Causa**: API externa bloqueando requisições

**Contexto**: Comum com Instagram/EmailJS

**Solução EmailJS**:
- Adicionar domínio em Account → Security → Allowed domains

**Solução Instagram**:
- Verificar configuração do App no Facebook Developers
- Valid OAuth Redirect URIs deve incluir seu domínio

---

## 💻 Erros de Build

### "Cannot find module"

```bash
# Reinstalar dependências
rm -rf node_modules package-lock.json
npm install
```

### "Module parse failed"

**Causa**: Erro de TypeScript ou sintaxe

**Solução**:
```bash
# Verificar tipos
npx tsc --noEmit

# Ver linha exata do erro
npm run build
# Ler stack trace completo
```

### "Out of memory"

```bash
# Aumentar memória do Node
NODE_OPTIONS=--max-old-space-size=4096 npm run build
```

---

## 🌐 Problemas de SEO

### Google não indexa o site

**Verificar**:
1. Sitemap enviado no Search Console?
2. robots.txt permite crawling?
3. Meta robots não está como "noindex"?

**Solução**:
```bash
# Verificar robots.txt
curl https://seudominio.com/robots.txt

# Deve retornar:
# User-agent: *
# Allow: /
# Sitemap: https://seudominio.com/sitemap.xml
```

### Open Graph não funciona no Facebook

**Testar**: https://developers.facebook.com/tools/debug/

**Limpar cache**:
1. Cole URL do site
2. Click "Scrape Again"
3. Verificar preview

---

## 🔄 Deploy Falha

### Vercel

**Erro comum**: "Build failed"

```bash
# Build local primeiro
npm run build

# Se funcionar local mas falhar no Vercel:
# - Verificar versão do Node (.nvmrc)
# - Verificar variáveis de ambiente
# - Ver logs completos no Vercel
```

### Netlify

**Erro**: "Deploy didn't seem to include any files"

**Solução**:
- Publish directory: `.output/public` (não `dist/`)
- Build command: `npm run generate`

---

## 🎨 CSS não Aplica / FOUC

### Flash of Unstyled Content

**Causa**: CSS não inline, carrega depois do HTML

**Solução já implementada**:
```typescript
// nuxt.config.ts
features: {
  inlineStyles: true
}
```

### Estilos não aparecem em produção

**Verificar**:
```bash
# Build e ver se CSS foi gerado
npm run build
ls -la .output/public/_nuxt/*.css

# Deve ter arquivos CSS
```

---

## 📱 Problemas Mobile

### Layout quebrado no mobile

**Debug**:
1. Chrome DevTools → Toggle device toolbar (Ctrl+Shift+M)
2. Testar várias resoluções
3. Verificar media queries no CSS

### Touch events não funcionam

**Verificar**:
- Usar `@click` (funciona em touch e mouse)
- Evitar `:hover` only (não funciona bem no mobile)

---

## 🆘 Ainda com Problemas?

### Passos para Debug Sistemático

1. **Reproduzir localmente**
   ```bash
   npm run dev
   # Funciona? Problema está no deploy
   # Não funciona? Problema está no código
   ```

2. **Console do Browser** (F12)
   - Tab "Console": Erros JavaScript
   - Tab "Network": Requisições falhando
   - Tab "Elements": HTML/CSS

3. **Logs do Servidor**
   - Vercel: Deploy → Function Logs
   - Netlify: Deploys → Deploy log

4. **Isolar o Problema**
   - Comentar código até funcionar
   - Adicionar de volta aos poucos
   - Identificar linha que quebra

5. **Google o Erro**
   - Copiar mensagem de erro exata
   - Adicionar "Nuxt 4" ou "Vue 3"
   - Procurar em GitHub Issues

6. **Pedir Ajuda**
   - Stackoverflow com código e erro
   - Nuxt Discord
   - GitHub Issues do projeto

---

## 📚 Recursos Úteis

- **Nuxt Docs**: https://nuxt.com/docs
- **Vue Docs**: https://vuejs.org
- **EmailJS Docs**: https://www.emailjs.com/docs/
- **Instagram API**: https://developers.facebook.com/docs/instagram-basic-display-api
- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com

---

**Mantenha este guia atualizado com novos problemas encontrados!**
