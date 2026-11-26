# Legacy institucional — Fase 1

Site institucional em Next.js App Router, React, TypeScript, Tailwind CSS, Motion, Lucide, Next Image e Next Font. A identidade exibida é uma proposta conceitual para a marca.

## Executar

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abra `http://localhost:3000`. No PowerShell, use `Copy-Item .env.example .env.local`.

## Verificar

```bash
npm run lint
npm run typecheck
npm run test
npm run build
npm run screenshots
```

`npm run test` verifica as rotas contra a aplicação em execução em `http://localhost:3000`, ou `TEST_BASE_URL`.
`npm run screenshots` gera capturas desktop e mobile em `artifacts/screenshots/` e verifica overflow horizontal em seis larguras. Usa Microsoft Edge quando disponível no Windows; em outros ambientes, configure `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` ou instale o Chromium do Playwright.

## Evidências da Fase 1

- Capturas finais: `artifacts/screenshots/desktop.png`, `mobile.png`, `desktop-hero.png` e `mobile-hero.png`.
- Relatórios Lighthouse da versão de produção: `artifacts/lighthouse-desktop-repeat.json` e `artifacts/lighthouse-mobile.json`.
- Desktop repetido: 100 em performance, acessibilidade, boas práticas e SEO. Mobile: 99 em performance e 100 nas demais categorias. Uma execução desktop anterior marcou 80 em performance por variação de FCP e Speed Index; o relatório foi preservado em `artifacts/lighthouse-desktop.json`.

## Rotas

`/`, `/sobre`, `/ecossistema`, `/gestao`, `/educacao`, `/digital`, `/contato`, `/portal`, `/privacidade`.

## Integrações pendentes

Configure as variáveis em `.env.local` para desenvolvimento e nas Environment Variables da Vercel para deploy:

| Variável                                                              | Uso                                                                                                                                                                                                  |
| --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_LEGACY_PORTAL_URL`                                       | URL oficial de acesso ao portal. Sem ela, a página informa que a integração está em preparação.                                                                                                      |
| `NEXT_PUBLIC_LEGACY_CONTACT_ENDPOINT`                                 | Endpoint HTTP de POST JSON para o formulário, com `{ name, email, company, message }`. Deve responder com status 2xx e suportar CORS quando em outro domínio. Sem ele, o formulário não envia dados. |
| `NEXT_PUBLIC_LEGACY_WHATSAPP_NUMBER`                                  | Número oficial em formato internacional, somente dígitos. O link aparece somente após configuração.                                                                                                  |
| `NEXT_PUBLIC_LEGACY_SITE_URL`                                         | Origem pública usada em metadata, sitemap e Open Graph. Em deploys Vercel, `VERCEL_URL` é usado como fallback.                                                                                       |
| `NEXT_PUBLIC_LEGACY_LINKEDIN_URL`, `NEXT_PUBLIC_LEGACY_INSTAGRAM_URL` | Perfis oficiais opcionais.                                                                                                                                                                           |

Antes da publicação comercial, revisar a política de privacidade com as informações jurídicas oficiais e configurar os canais de contato. Não há autenticação paralela, credenciais de demonstração, métricas reais ou testemunhos inventados.

## Deploy

Importe o repositório na Vercel, selecione esta branch para uma prévia, configure as variáveis necessárias e execute o build padrão de Next.js. Não há merge automático na `main`.
