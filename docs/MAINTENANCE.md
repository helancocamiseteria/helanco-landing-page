# 🔧 Manutenção do Site - Helanco Landing Page

Checklist de tarefas recorrentes para manter o site funcionando perfeitamente.

---

## 📅 Mensal

### Performance & SEO
- [ ] Rodar Lighthouse audit
  ```bash
  # Desktop
  lighthouse https://seudominio.com --preset=desktop --view
  
  # Mobile
  lighthouse https://seudominio.com --preset=mobile --view
  ```
  - Meta: Performance 90+ (desktop), 85+ (mobile)
  - Meta: SEO 100

- [ ] Verificar Google Search Console
  - Erros de indexação
  - Core Web Vitals
  - Cliques e impressões
  - Problemas de usabilidade mobile

- [ ] Testar formulário de contato
  - Enviar teste
  - Verificar recebimento de email
  - Testar validações

- [ ] Verificar links quebrados
  - Todos os botões funcionando
  - Links externos ativos
  - Imagens carregando

### Conteúdo
- [ ] Verificar feed do Instagram
  - Posts carregando corretamente
  - Sem erros no console do browser

- [ ] Atualizar estatísticas (se houver mudanças)
  - Projetos concluídos
  - Produção mensal
  - Satisfação de clientes

---

## 📅 Bimestral (A cada 2 meses)

### Instagram API Token
- [ ] **⚠️ CRÍTICO**: Regenerar token de acesso
  - Token expira a cada 60 dias
  - Acesse: https://developers.facebook.com/
  - Navegue até seu app → Instagram Basic Display
  - Gere novo token
  - Atualize variável de ambiente no host
  - **Marque próxima renovação no calendário** (+60 dias)

### Dependências
- [ ] Atualizar pacotes npm
  ```bash
  # Ver pacotes desatualizados
  npm outdated
  
  # Atualizar (cuidado com breaking changes)
  npm update
  
  # Testar após atualizar
  npm run dev
  npm run build
  ```

- [ ] Verificar vulnerabilidades de segurança
  ```bash
  npm audit
  
  # Corrigir automaticamente (se possível)
  npm audit fix
  ```

---

## 📅 Trimestral (A cada 3 meses)

### Conteúdo
- [ ] Revisar textos e copywriting
- [ ] Atualizar galeria de fotos (se houver novas)
- [ ] Verificar informações de contato atualizadas
- [ ] Revisar keywords de SEO

### Análise
- [ ] Revisar Analytics
  - Páginas mais visitadas
  - Taxa de rejeição
  - Tempo na página
  - Dispositivos mais usados
  - Origens de tráfego

- [ ] Testar em novos browsers/dispositivos
  - Últimas versões de Chrome, Firefox, Safari, Edge
  - iOS e Android atualizados
  - Tablets

### Backup
- [ ] Fazer backup completo do código (já no Git?)
- [ ] Fazer backup das variáveis de ambiente
- [ ] Documentar mudanças recentes

---

## 📅 Semestral (A cada 6 meses)

### Estratégia
- [ ] Revisar estratégia de conteúdo
- [ ] Avaliar novas features desejadas
- [ ] Considerar atualizações de design
- [ ] Revisar concorrência

### Infraestrutura
- [ ] Verificar custos de hosting
- [ ] Revisar plano de hospedagem (precisa upgrade?)
- [ ] Verificar CDN e performance global
- [ ] Testar tempo de uptime

### Legal & Compliance
- [ ] Revisar política de privacidade (se houver)
- [ ] Verificar conformidade com LGPD
- [ ] Atualizar copyright no footer (ano)

---

## 📅 Anual

### Major Updates
- [ ] Avaliar upgrade de framework (Nuxt 4 → 5, etc.)
- [ ] Considerar redesign visual
- [ ] Revisar toda a arquitetura do site
- [ ] Planejar novas funcionalidades

### Auditoria Completa
- [ ] Auditoria de acessibilidade (WCAG 2.1)
- [ ] Auditoria de segurança completa
- [ ] Teste de carga/stress
- [ ] Revisão de toda documentação

### Renovações
- [ ] Renovar domínio
- [ ] Renovar certificado SSL (se não for automático)
- [ ] Renovar serviços terceiros (se aplicável)

---

## 🚨 Tarefas Emergenciais

### Se o Site Cair
1. Verificar status do hosting
2. Verificar logs de erro
3. Verificar últimas mudanças no código
4. Rollback se necessário
5. Comunicar equipe/clientes

### Se Instagram Parar de Funcionar
1. Verificar token de acesso (provavelmente expirou)
2. Regenerar token
3. Atualizar variável de ambiente
4. Redeploy se necessário

### Se Formulário Parar de Enviar
1. Testar localmente (`npm run dev`)
2. Verificar variáveis de ambiente no host
3. Verificar cota do EmailJS (200/mês no free tier)
4. Verificar configuração de domínio permitido no EmailJS

---

## 📊 Métricas para Monitorar

### Performance
- Lighthouse Score: 90+ desktop, 85+ mobile
- Time to First Byte (TTFB): <600ms
- First Contentful Paint (FCP): <1.8s
- Largest Contentful Paint (LCP): <2.5s
- Cumulative Layout Shift (CLS): <0.1
- First Input Delay (FID): <100ms

### SEO
- Posição em buscas relevantes
- Tráfego orgânico
- Taxa de cliques (CTR)
- Páginas indexadas

### Conversão
- Taxa de envio do formulário
- Cliques no botão WhatsApp
- Tempo médio na página
- Taxa de rejeição

### Técnico
- Uptime: >99.9%
- Erros 404: Mínimo possível
- Tempo de resposta do servidor: <500ms
- Bundle size: <500KB (gzip)

---

## 📝 Template de Report Mensal

```markdown
# Report de Manutenção - [Mês/Ano]

## ✅ Tarefas Completadas
- [ ] Lighthouse audit
- [ ] Google Search Console
- [ ] Teste de formulário
- [ ] Verificação de links

## 📊 Métricas
- Performance Score: __/100
- SEO Score: __/100
- Uptime: __%
- Visitantes únicos: __
- Taxa de conversão: __%

## 🐛 Problemas Encontrados
- Nenhum / Listar problemas

## 🔧 Ações Tomadas
- Listar correções e melhorias

## 📅 Próximas Tarefas
- Renovar token Instagram (data: __)
- Atualizar dependências
- Outras tarefas planejadas

---
Data: __/__/____
Responsável: ________
```

---

## 🔔 Lembretes & Notificações

### Configure Alertas para:
- Token Instagram expirando (50 dias após última renovação)
- Domínio expirando (30 dias antes)
- Lighthouse score abaixo de 85
- Site offline (usar UptimeRobot)
- Erros críticos (configurar Sentry/LogRocket)

### Ferramentas Úteis:
- **Uptime Monitoring**: https://uptimerobot.com (grátis)
- **Performance**: https://web.dev/measure
- **SEO**: https://search.google.com/search-console
- **Broken Links**: https://www.brokenlinkcheck.com
- **SSL Check**: https://www.ssllabs.com/ssltest/

---

**Mantenha este documento atualizado!**  
Última revisão: Dezembro 2025
