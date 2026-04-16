# CLAUDE.md — ezstudio Website

> Instruções de contexto para o Claude Code. Este arquivo deve ser lido antes de qualquer tarefa neste projeto.

---

## Visão Geral do Projeto

**Projeto:** ezstudio — Website institucional  
**Tipo:** Site multi-página (HTML + CSS + JS)  
**Stack inicial:** HTML5 semântico, CSS (custom properties), JavaScript vanilla, GSAP  
**Stack futura:** Migração para framework (a definir) após todas as páginas finalizadas  
**Metodologia visual:** Pixel-perfect — cada section é validada contra o Figma antes de avançar

---

## Fases do Projeto

### ✅ Fase 1 — Fundação
- [x] Estrutura de pastas criada
- [x] `CLAUDE.md` com regras e contexto
- [x] `docs/design-system.md` estruturado
- [x] `.claude/launch.json` configurado
- [x] `README.md` criado
- [x] Projeto no GitHub criado e código enviado
- [ ] Iniciar servidor de desenvolvimento

---

### ✅ Fase 2 — Design System
- [x] Receber link do Figma
- [x] Extrair variáveis do Figma (cores, tipografia, espaçamento, grid)
- [x] Criar `assets/css/design-system.css` com tokens reais
- [x] Criar `assets/css/base.css` — reset + elementos base
- [x] Criar `assets/css/layout.css` — grid, container, breakpoints
- [x] Criar `assets/css/animations.css` — classes GSAP utilitárias
- [x] Configurar GSAP em `assets/js/gsap-init.js`

---

### ✅ Fase 3 — Componentes Globais
- [x] Header / Nav
  - [x] `components/header.html`
  - [x] Estilos em `components.css`
  - [x] Lógica em `components.js` (menu mobile, scroll behavior)
- [x] Footer
  - [x] `components/footer.html`
  - [x] Estilos em `components.css`
- [x] CTA Destaque — Figma node `2-672`
  - [x] `components/cta-destaque.html`
  - [x] Estilos em `components.css`
  - [x] Animação hover: seta ↗→ + linha expande
  - [x] Variante invertida `.cta-destaque--inverted` (fundo escuro)
- [x] Botões (`.btn`) — variantes: primary, inverted
- [x] Section Title — tag + heading + subtítulo · variantes: centered, 1col, 2col (com CTA)
- ~~CTA Section — eliminado: coberto por Section Title + Botão~~
- [x] Cards — `card-image` (Figma 9-1505) + `card-case` (Figma 9-1519)
- [x] Tags / Badges — Figma node `3-713`
  - [x] `components/tags.html`
  - [x] Estilos em `components.css`
  - [x] 6 variantes: header, header-inverted, white, black, ghost, ghost-inverted

---

### 🔧 Fase 4 — Páginas (section por section, pixel-perfect)

> Fluxo por página: implementar → screenshot Figma → screenshot preview → validar → ✅ aprovar → próxima section

- [x] **Home** (`index.html`)
  - [x] Sections: Hero, What We Do, Latest Works, Services (3 cards), Testimonials, FAQ, Contact CTA
  - [x] JS/GSAP: slider, carousel, accordion, scroll animations (clip-path, fade-up, stagger)
- [x] **About** (`about.html`)
  - [x] Sections: Hero About, Our Process, Who We Are (video), Works List, The Team, Contact CTA
- [x] **Work** (`work.html`)
  - [x] Sections: Projects Grid 2×3 com card-case
- [x] **Contact** (`contact.html`)
  - [x] Sections: Hero Contact (formulário + details card), FAQ
- [ ] **Case Template** (`case-template.html`) — ⏸ adiado
- [ ] **Our Solutions** (`solutions.html`) — ⏸ adiado

---

### ⬜ Fase 5 — Animações GSAP
- [ ] Page load animations — hero e header com stagger
- [ ] ScrollTrigger por seção — fade, slide, reveal
- [ ] Hover states e micro-interações
- [ ] Page transitions entre páginas

---

### ⬜ Fase 6 — Responsividade & QA
- [ ] Revisão completa mobile (375px)
- [ ] Revisão completa tablet (768px)
- [ ] Revisão completa desktop (1440px)
- [ ] Cross-browser check (Chrome, Safari, Firefox)
- [ ] Performance — otimização de imagens, fontes e scripts

---

### ⬜ Fase 7 — Migração para Framework *(futuro)*
- [ ] Definir framework (React, Next.js, Astro, etc.)
- [ ] Migrar HTML/CSS/JS para componentes do framework
- [ ] Manter `design-system.css` como fonte de verdade dos tokens

---

## Estrutura de Páginas

| Arquivo              | Descrição                        |
|----------------------|----------------------------------|
| `index.html`         | Home                             |
| `about.html`         | About                            |
| `work.html`          | Work (listagem de cases)         |
| `case-template.html` | Case Template (template de case) |
| `solutions.html`     | Our Solutions                    |
| `contact.html`       | Contact                          |

---

## Estrutura de Arquivos

```
website/
├── CLAUDE.md                  ← Este arquivo
├── index.html                 ← Home
├── about.html
├── work.html
├── case-template.html
├── solutions.html
├── contact.html
│
├── assets/
│   ├── css/
│   │   ├── design-system.css  ← Tokens: cores, tipografia, espaçamento, grid
│   │   ├── base.css           ← Reset, elementos base, utilitários
│   │   ├── layout.css         ← Grid, container, breakpoints
│   │   ├── components.css     ← Estilos dos componentes reutilizáveis
│   │   └── animations.css     ← Classes de animação GSAP + CSS transitions
│   │
│   ├── js/
│   │   ├── gsap-init.js       ← Registro de plugins GSAP (ScrollTrigger, etc.)
│   │   ├── animations.js      ← Timelines e animações por seção
│   │   ├── components.js      ← Lógica de componentes (menu, accordion, etc.)
│   │   └── main.js            ← Inicialização global
│   │
│   ├── fonts/                 ← Fontes locais (se houver)
│   ├── images/                ← Imagens otimizadas
│   └── icons/                 ← SVGs e ícones
│
├── components/                ← Snippets HTML reutilizáveis (para referência)
│   ├── header.html
│   ├── footer.html
│   ├── nav.html
│   └── cta.html
│
└── docs/
    ├── design-system.md       ← Documentação do design system
    └── pixel-perfect-log.md   ← Log de validações pixel-perfect por section
```

---

## Regras de Desenvolvimento

### HTML
- Sempre usar HTML5 semântico (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, etc.)
- Toda `<section>` deve ter um `id` descritivo e uma classe BEM-like
- Atributos `data-*` para hooks de animação (ex: `data-gsap="fade-in"`)
- Nunca usar elementos de layout com `<div>` quando existe elemento semântico adequado
- Imagens sempre com `alt`, `width` e `height` definidos

### CSS
- **Sempre** usar variáveis CSS de `design-system.css` — nunca hardcodar valores
- Metodologia de nomenclatura: BEM modificado (`bloco__elemento--modificador`)
- Mobile-first: estilos base para mobile, breakpoints com `@media (min-width: ...)`
- Ordem de propriedades: posicionamento → box model → tipografia → visual → animação
- Nunca usar `!important` exceto em utilitários de override declarados

### JavaScript
- Vanilla JS, sem jQuery ou outras libs além do GSAP
- Cada animação GSAP deve ser encapsulada em função nomeada
- ScrollTrigger: sempre com `markers: false` em produção
- Usar `gsap.matchMedia()` para animações responsivas
- Eventos: sempre remover listeners quando componente é destruído

### GSAP
- Plugins registrados: `ScrollTrigger`, `ScrollSmoother` (se necessário)
- Animações de entrada (page load): timeline com stagger controlado
- Scroll animations: `ScrollTrigger` com `start: "top 80%"`
- Hover: `.to()` com `duration: 0.3` ou menos, `ease: "power2.out"`
- Nunca animar `width` ou `height` — usar `scaleX/scaleY` para performance

---

## Sistema de Componentes Reutilizáveis

Todos os elementos abaixo são componentes — devem ter classe CSS própria e podem ser instanciados em qualquer página:

| Componente     | Classe CSS base       | Arquivo JS          |
|----------------|-----------------------|---------------------|
| Header/Nav     | `.site-header`        | `components.js`     |
| Footer         | `.site-footer`        | `components.js`     |
| CTA Button     | `.btn`                | —                   |
| CTA Section    | `.cta-section`        | `animations.js`     |
| Section Title  | `.section-title`      | —                   |
| Hero           | `.hero`               | `animations.js`     |
| Card           | `.card`               | —                   |
| Tag/Badge      | `.tag`                | —                   |

---

## Fluxo de Trabalho: Pixel-Perfect

Para cada section implementada:

1. **Capturar screenshot** do Figma via MCP (`mcp__Figma__get_screenshot`)
2. **Implementar** a section em HTML/CSS
3. **Fornecer link de aprovação** — sempre ao final de cada build (página, section ou componente), informar a URL do servidor local: `http://localhost:3000/nome-do-arquivo.html` para o usuário abrir no navegador e aprovar
4. **Não avançar** para a próxima task sem aprovação explícita do usuário
5. **Verificação interna** via `preview_screenshot` (complementar — não substitui o link para o usuário)
6. **Comparar** os dois (Figma vs. preview) lado a lado
7. **Registrar** no `docs/pixel-perfect-log.md` com status: ✅ Aprovado / 🔧 Ajuste / ❌ Refazer
8. Só avançar para a próxima section após status **✅**

---

## Figma

- **MCP Server:** `mcp__51d31712-6ad7-4283-879e-d9e314b52550__*`
- **Usuário:** luan@velodigital.com.br
- Para ler variáveis do Figma: `get_variable_defs`
- Para ler estrutura: `get_metadata`
- Para contexto de design + código: `get_design_context`
- Para screenshot: `get_screenshot`
- **Sempre** verificar variáveis do Figma antes de definir tokens no CSS

---

## Breakpoints

| Nome       | Valor   |
|------------|---------|
| Mobile     | 375px   |
| Tablet     | 768px   |
| Desktop MD | 1024px  |
| Desktop LG | 1440px  |
| Desktop XL | 1920px  |

---

## Convenções de Commits (quando aplicável)

```
feat: adiciona section hero da Home
fix: corrige espaçamento do header no mobile
style: ajusta tipografia do section-title
anim: adiciona scroll animation na section about
```

---

## Status das Páginas

| Página              | HTML | CSS | JS/GSAP | Pixel-Perfect |
|---------------------|------|-----|---------|---------------|
| Home                | ✅   | ✅  | ✅      | ⬜            |
| About               | ✅   | ✅  | ✅      | ⬜            |
| Work                | ✅   | ✅  | —       | ⬜            |
| Contact             | ✅   | ✅  | ✅      | ⬜            |
| Case Template       | ⏸   | ⏸  | ⏸      | ⏸            |
| Our Solutions       | ⏸   | ⏸  | ⏸      | ⏸            |

Legenda: ⬜ Pendente · 🔧 Em progresso · ✅ Aprovado · — Não se aplica · ⏸ Adiado

