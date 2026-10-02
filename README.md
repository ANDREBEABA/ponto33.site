# Ponto 33 — Site institucional

Site da **Ponto 33 — Café Grab & Go**, uma cafeteria autônoma (autoatendimento,
24 horas). Três páginas: **Início**, **Franquias** e **Contato**.

Construído com **Next.js (App Router) + TypeScript + Tailwind CSS**, pronto para
deploy no **Vercel**.

## Rodando localmente

Pré-requisitos: Node.js 18.18+ (recomendado 20+).

```bash
npm install
npm run dev
```

Abra <http://localhost:3000>.

Scripts disponíveis:

- `npm run dev` — ambiente de desenvolvimento
- `npm run build` — build de produção
- `npm run start` — sobe o build de produção
- `npm run lint` — checagem de lint

## Estrutura

```
app/
  layout.tsx          # layout raiz (fontes, SEO, Header/Footer/WhatsApp)
  globals.css         # design system (paleta da marca, componentes)
  page.tsx            # Início
  franquias/page.tsx  # Franquias
  contato/page.tsx    # Contato
components/            # Header, Footer, Logo, Manifesto, ícones, etc.
lib/site.ts           # ⭐ configuração central (contatos, links, textos)
public/img/           # imagens da marca (copo, estação)
public/icon.svg       # favicon
```

## Como editar o conteúdo

Quase tudo que muda com frequência está em **`lib/site.ts`**:

- Telefone / WhatsApp, e-mail e Instagram
- Nome, tagline e frases de manifesto

Para trocar as imagens, substitua os arquivos em `public/img/`
(`cup.webp`, `kiosk-1.webp`, `kiosk-2.webp`).

> **A definir:** os números da página de Franquias (investimento, retorno,
> espaço e o percentual ilustrativo "33%") estão marcados como _a definir_ /
> _ilustrativo_. Atualize-os em `app/franquias/page.tsx` quando os valores reais
> estiverem definidos.

## Identidade visual

- Paleta: preto quente `#15110C`, **dourado `#D4B23C`** (acento), creme
  `#F2EEE6`, marrom café.
- Tipografia: **Outfit** (títulos) + **Hanken Grotesk** (corpo), via
  `next/font/google`.
- Tema escuro premium.

## Formulários / contato

Neste início, os contatos usam **links diretos** de WhatsApp e e-mail (sem
backend). A página de Contato tem um seletor de assunto que monta a mensagem de
WhatsApp pré-preenchida.

## Deploy no Vercel

1. Faça o push deste repositório para o GitHub (já está em `andrebeaba/ponto33.site`).
2. Acesse <https://vercel.com/new> e faça login com a conta do GitHub.
3. Clique em **Import** no repositório `ponto33.site`.
4. O Vercel detecta **Next.js** automaticamente — não é preciso configurar nada.
5. Clique em **Deploy**. Em ~1 minuto o site estará no ar com uma URL `*.vercel.app`.
6. (Opcional) Em **Settings → Domains**, conecte o domínio `ponto33.site`.

A cada `git push` na branch principal, o Vercel publica automaticamente uma nova
versão.

## Próximos passos (ideias)

- Formulário de contato com backend (ex.: Resend / Formspree)
- Página "Onde encontrar" com unidades e mapa
- Cardápio e preços
- Área do franqueado
