# Pixel-Perfect Log — ezstudio Website

> Registro de validações visuais por componente/section.
> Comparação: screenshot Figma × screenshot preview.
> Status: ✅ Aprovado · 🔧 Ajuste · ❌ Refazer

---

## Fase 3 — Componentes Globais

### Header / Nav
- **Data:** 2026-04-14
- **Figma node:** `2-34` (Component Set — variantes Desktop, Mobile, Scroll)
- **Arquivos:** `components/header.html` · `assets/css/components.css` · `assets/js/components.js`
- **Status:** ✅ Aprovado

**Variantes validadas:**
| Variante | Status |
|----------|--------|
| Desktop — logo + nav links | ✅ |
| Mobile — logo + botão Menu | ✅ |
| Mobile — menu aberto (overlay + Close) | ✅ |
| Scroll — reaparece com glass reforçado | ✅ |

**Comportamentos validados:**
- Scroll down → header some (`translateY(-100%)`)
- Scroll up → reaparece com `.is-scrolled` (glass effect)
- No topo → estado padrão limpo
- Botão Menu abre overlay fullscreen com links grandes
- Botão vira "Close" quando menu está aberto
- Fecha com Escape ou clicando em qualquer link

---

### Footer
- **Data:** 2026-04-14
- **Figma node:** `2-396` (Component Set — variantes desktop, mobile)
- **Arquivos:** `components/footer.html` · `assets/css/components.css`
- **Status:** ✅ Aprovado

**Elementos validados:**
| Elemento | Status |
|----------|--------|
| Logo footer (229×49) | ✅ |
| Tagline "Creative engineering / for thoughtful brands" | ✅ |
| Imagem do vinil (full-width, border-radius 12px) | ✅ |
| Bottom row: Contact · Pages · Legal | ✅ |
| Link "Home" com underline (ativo) | ✅ |
| Mobile: imagem 305px, menus em wrap | ✅ |

---

### CTA Destaque
- **Data:** 2026-04-14
- **Figma node:** `2-672` (Component Set — variantes default, mouseover)
- **Arquivos:** `components/cta-destaque.html` · `assets/css/components.css`
- **Status:** ✅ Aprovado

**Estados validados:**
| Estado | Status |
|--------|--------|
| Default: seta ↗ + linha curta (25px) | ✅ |
| Hover: seta → (rotate 0°) + linha full-width (147px) | ✅ |
| Transição CSS suave (arrow 0.3s, linha 0.45s) | ✅ |
| Fundo claro | ✅ |
| Fundo escuro (cor invertida via inline style) | ✅ |

---

### Slider de Cards
- **Data:** 2026-04-14 · **Revisão:** 2026-04-15
- **Figma node:** `2-533` (variantes: desktop / mobile)
- **Arquivos:** `components/slider.html` · `assets/css/components.css` · `assets/js/components.js`
- **Status:** ✅ Aprovado

**Elementos validados:**
| Elemento | Status |
|----------|--------|
| Cards 306×438px com imagens full-cover | ✅ |
| Overlay gradient + título + desc no hover | ✅ |
| Ícone circular mix-blend-mode: difference | ✅ |
| Ícone hover: `rotate(-45deg)` (seta diagonal ↗) | ✅ |
| Botões prev/next — opacity 0 por padrão | ✅ |
| Proximity reveal: botão aparece ao aproximar cursor da borda (ZONE=140px) | ✅ |
| Animação slide: `expo.out` 0.8s (fluída, não linear) | ✅ |
| Drag (mousedown/mousemove/mouseup) com snap | ✅ |
| Touch swipe (mobile) | ✅ |
| Mobile: cards `calc(100vw - 60px)` × 365px | ✅ |

**Ajustes aplicados (2026-04-15):**
- Largura do card: 312px → **306px** (match Figma exato)
- `.slider__title`: `font-size` 27px → **27.7px**, `line-height` → **36px**, `letter-spacing` → **-0.6px**
- `.slider__desc`: `font-size` → **14.4px**, clamp 2 linhas com `-webkit-line-clamp: 2`
- `.slider__titles`: adicionado `display: flex; flex-direction: column; gap: 12px`
- `.slider__icon:hover`: `scale(1.1)` → **`rotate(-45deg)`**

---

### Tags / Badges
- **Data:** 2026-04-15
- **Figma node:** `3-713` (Component Set — 6 variantes)
- **Arquivos:** `components/tags.html` · `assets/css/components.css`
- **Status:** ✅ Aprovado

**Variantes validadas:**
| Variante | Classe | Status |
|----------|--------|--------|
| Header (dot + texto, fundo cinza claro) | `.tag--header` | ✅ |
| Header Inverted (dot + texto, fundo escuro médio) | `.tag--header-inverted` | ✅ |
| White (fundo branco, texto escuro) | `.tag--white` | ✅ |
| Black (fundo escuro médio, texto branco) | `.tag--black` | ✅ |
| Ghost (outlined border muted, transparente) | `.tag--ghost` | ✅ |
| Ghost Inverted (outlined branco, p/ fundo escuro) | `.tag--ghost-inverted` | ✅ |

---

### Cards
- **Data:** 2026-04-15
- **Figma nodes:** `9-1505` (card-image) · `9-1519` (card-case)
- **Arquivos:** `components/card-image.html` · `components/card-case.html` · `assets/css/components.css`
- **Status:** ✅ Aprovado

**Componentes validados:**
| Componente | Descrição | Status |
|---|---|---|
| `.card-image` | Imagem quadrada, hover: blur 2px + overlay + ícone circular com seta | ✅ |
| `.card-case` | `.card-image` + linha de conteúdo (título + meta à direita) | ✅ |

**Especificações validadas:**
- `card-image`: `aspect-ratio: 1/1`, `border-radius: 12px`, hover: `filter: blur(2px)` + overlay + ícone 100×100px
- Ícone: círculo branco, `scale(0.8) translateY(8px)` → `scale(1) translateY(0)` no hover
- `card-case`: título `14.5px` / `flex: 1`, meta `14.5px` / `color-text-secondary`
- Mobile: largura 100%

---

### Section Title
- **Data:** 2026-04-15
- **Figma node:** `9-1448` (Component Set — 3 variantes)
- **Arquivos:** `components/section-title.html` · `assets/css/components.css`
- **Status:** ✅ Aprovado

**Variantes validadas:**
| Variante | Classe | Status |
|----------|--------|--------|
| Centered (tag + H2 + sub centrados, máx 500px) | `.section-title--centered` | ✅ |
| 1 coluna (tag + H2 + sub à esquerda) | `.section-title--1col` | ✅ |
| 2 colunas (esquerda + CTA Destaque à direita) | `.section-title--2col` | ✅ |

**Especificações validadas:**
- H2: `--text-display-lg-size` (42.8px), `--font-weight-semibold`
- Subtítulo: `--text-body-md-size` (14.5px), `--color-text-secondary`
- CTA: componente `.cta-destaque` reutilizado, `align-self: flex-end`
- Mobile: variantes 1col/2col colapsam para coluna, H2 ~32px

---

### Botões (`.btn`)
- **Data:** 2026-04-15
- **Figma node:** `9-1296` (Component Set — variantes primary, inverted)
- **Arquivos:** `assets/css/components.css`
- **Status:** ✅ Aprovado

**Variantes validadas:**
| Variante | Classe | Status |
|----------|--------|--------|
| Primary (fundo escuro #1d2029, texto branco) | `.btn--primary` | ✅ |
| Inverted (fundo branco, texto escuro) | `.btn--inverted` | ✅ |

**Especificações validadas:**
- Height: 48px · Padding: 10px 24px · Border-radius: 12px
- Font-size: 18.6px · Font-weight: regular · Line-height: 26px
- Hover primary: `#35373e` · Hover inverted: `#f2f4f7`

---

### Hero
- **Data:** 2026-04-14
- **Figma node:** `2-35`
- **Arquivos:** `components/hero.html` · `assets/css/components.css` · `index.html`
- **Status:** ✅ Aprovado

**Elementos validados:**
| Elemento | Status |
|----------|--------|
| Hero 100vh (`min-height: 100vh`, flex-direction: column) | ✅ |
| hero__content: `flex: 1`, `align-items: flex-end`, `justify-content: space-between` | ✅ |
| hero__content: `padding: 124px 40px 36px`, `min-height: 230px` | ✅ |
| Título: `--text-display-xl-size` (58.6px), semibold, tracking -2.52px | ✅ |
| CTA Destaque alinhado bottom-right | ✅ |
| Slider embedded (componente reutilizado) | ✅ |
| Content (422px) + Slider (478px) = 900px = 100vh | ✅ |

---

## Fase 4 — Páginas

### Case Template (`case-template.html`)
- **Data:** 2026-05-10
- **Figma nodes:** `56-1116` (Hero) · `56-1230` (Text Case) · `56-1270` (Image Grid)
- **Arquivo:** `case-template.html`
- **Status:** ✅ Aprovado

#### S01 — Hero Case (node `56-1116`)

| Elemento | Figma | Implementado | Status |
|----------|-------|--------------|--------|
| Heading font-size | 59.2px | 59.2px | ✅ |
| Heading font-weight | semibold 600 | 600 | ✅ |
| Heading letter-spacing | -2.52px | -2.52px | ✅ |
| Heading line-height | 69.3px | 69.28px | ✅ |
| Sub font-size | 18.1px | `--text-body-lg-size` 18.1px | ✅ |
| Detail labels | 11.1px uppercase tracking 0.48px | `--text-overline-size` | ✅ |
| Detail values | 14.8px | 14.8px | ✅ |
| CTA "View website" | direita, bottom-aligned | reutiliza `.cta-destaque` | ✅ |
| Hero image height | 681px | 681px | ✅ |
| Hero image border-radius | 12px | 12px | ✅ |
| Gap header → imagem | 49px | 3.0625rem | ✅ |
| Padding topo | 64px | `var(--space-16)` | ✅ |

#### S02 — Text Case (node `56-1230`)

Estrutura fixa: **Overview · Soluções · Métricas**

| Elemento | Figma | Implementado | Status |
|----------|-------|--------------|--------|
| Título font-size | 35.8px | 36.16px (`--text-display-sm-size`) | ✅ |
| Título font-weight | medium 500 | 500 | ✅ |
| Título letter-spacing | -1.56px | -1.56px | ✅ |
| Body font-size | 18.4px | 1.15rem | ✅ |
| Body line-height | 26px | 26px | ✅ |
| Bloco max-width | 650px | 650px | ✅ |
| Gap bloco → bloco | 44px | 2.75rem | ✅ |
| Gap título → body | 44px | 2.75rem | ✅ |

#### S03 — Image Grid (node `56-1270`)

Layout: **2 halves · 1 full (1:1) · 2 halves · 2 halves** = 7 slots

| Elemento | Figma | Implementado | Status |
|----------|-------|--------------|--------|
| Item half width | 676px | 675px `calc(50% - 5px)` | ✅ |
| Item full width | 1362px | 100% | ✅ |
| Aspect-ratio | 1/1 | 1/1 | ✅ |
| Gap | 10px | 10px | ✅ |
| Border-radius | 12px | 12px | ✅ |
| Background | `#f0f1f3` | `--color-bg-secondary` | ✅ |

#### S04 — Contact CTA · S05 — Header + Footer
- Reutilizam os componentes padrão sem alterações

---
