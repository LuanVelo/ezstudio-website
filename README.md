# ezstudio — Website Institucional

Site institucional da ezstudio, desenvolvido com HTML5 semântico, CSS customizado e animações GSAP. Projeto estruturado com metodologia pixel-perfect, validando cada seção contra o Figma antes de avançar.

---

## Stack

| Tecnologia | Uso |
|------------|-----|
| HTML5 semântico | Estrutura das páginas |
| CSS (Custom Properties) | Estilo e design system |
| JavaScript Vanilla | Lógica de componentes |
| GSAP + ScrollTrigger | Animações e scroll |

> **Próxima etapa:** migração para framework (React / Next.js / Astro) após todas as páginas finalizadas.

---

## Páginas

| Arquivo | Página | Status |
|---------|--------|--------|
| `index.html` | Home | ✅ Implementado |
| `about.html` | About | ✅ Implementado |
| `work.html` | Work | ✅ Implementado |
| `case-template.html` | Case Template | ✅ Implementado |
| `contact.html` | Contact | ✅ Implementado |
| `solutions.html` | Our Solutions | ⏸ Adiado |

---

## Cases

Cada case do portfólio vive em `cases/<nomecliente>/` com a seguinte estrutura:

```
cases/
└── caiofonseca/
    ├── caiofonseca.md          ← dados do case (título, textos, detalhes)
    └── images/
        ├── hero.png            ← imagem principal do case
        ├── thumb_case.png      ← thumbnail usada no card de work.html
        ├── grid-1.png          ← imagens do grid (landscape ou portrait)
        └── grid-N.png
```

### Convenções de imagem

| Nome | Uso |
|------|-----|
| `hero.png` | Banner principal no topo da página de case |
| `thumb_case.png` | Thumbnail no card de `work.html` |
| `grid-N.ext` | Galeria de imagens do case |

- Imagem **landscape** (largura > altura) → exibida em largura total, altura proporcional
- Imagem **portrait / quadrada** → exibida em 50% da largura, cortada em quadrado
- Slot **sem imagem** → oculto automaticamente

### Formato do arquivo `.md`

```markdown
## HERO
- Título principal Hero: Nome do Cliente
- Texto secundário hero: Subtítulo do projeto
- Duração: X semanas
- Industria: Segmento
- Cliente: Nome do Cliente

## Overview
- Descrição geral do projeto

## Solução
- O que foi feito e como

## Números
- Resultados e métricas
```

---

## Skill: `/ezstudio-cases`

Skill de automação para gerenciar o pipeline completo de pages de case. Disponível apenas neste projeto (`.claude/skills/ezstudio-cases/`).

### O que ela faz

1. **Escaneia** todas as pastas em `cases/`
2. **Lê o `.md`** de cada case e extrai título, subtítulo, duração, indústria, cliente e os 3 blocos de texto
3. **Normaliza imagens** — remove espaços, caracteres especiais e converte para minúsculas
4. **Renomeia por função** — identifica `hero`, `thumb_case` e `grid-N` automaticamente
5. **Sincroniza** imagens para o worktree ativo
6. **Detecta** cases novos (sem HTML) vs. existentes (apenas sincroniza imagens)
7. **Gera o HTML** de cases novos com orientação de imagem auto-detectada via JS
8. **Atualiza `work.html`** inserindo o card do case usando `thumb_case.png`
9. **Inicia o servidor** e fornece as URLs para aprovação

### Como usar

```
/ezstudio-cases
```

Ou em linguagem natural:
- `"tem um novo case, processa tudo"`
- `"checar os cases"`
- `"gerar página do case X"`
- `"sincronizar cases"`

### Fluxo para adicionar um novo case

1. Criar `cases/<nomecliente>/` no projeto
2. Adicionar `<nomecliente>.md` com os dados
3. Colocar as imagens em `images/` (qualquer nome — a skill normaliza)
4. Incluir `thumb_case.png` para aparecer no card de `work.html`
5. Rodar `/ezstudio-cases`
6. Aprovar as URLs fornecidas

---

## Estrutura do Projeto

```
website/
├── index.html
├── about.html
├── work.html
├── case-template.html
├── contact.html
│
├── cases/                      ← Páginas de case geradas pela skill
│   ├── caiofonseca.html
│   ├── caiofonseca/
│   │   └── images/             ← hero.png · thumb_case.png · grid-N.png
│   ├── dateahome.html
│   └── dateahome/
│       └── images/
│
├── assets/
│   ├── css/
│   │   ├── design-system.css   ← Tokens: cores, tipografia, espaçamento
│   │   ├── base.css            ← Reset e elementos base
│   │   ├── layout.css          ← Grid, container, breakpoints
│   │   ├── components.css      ← Componentes reutilizáveis
│   │   └── animations.css      ← Classes GSAP utilitárias
│   ├── js/
│   │   ├── gsap-init.js        ← Registro de plugins GSAP
│   │   ├── animations.js       ← Timelines por seção
│   │   ├── components.js       ← Lógica de componentes
│   │   └── main.js             ← Inicialização global
│   ├── fonts/
│   ├── images/
│   └── icons/
│
├── components/                 ← Snippets HTML reutilizáveis
│   ├── header.html
│   ├── footer.html
│   └── ...
│
├── preview/                    ← Páginas de teste de componentes isolados
│   ├── preview-btn.html
│   ├── preview-cards.html
│   ├── preview-cta.html
│   ├── preview-footer.html
│   ├── preview-glass-bottom.html
│   ├── preview-hero.html
│   ├── preview-section-title.html
│   └── preview-slider.html
│
├── docs/
│   ├── design-system.md        ← Documentação dos tokens
│   └── pixel-perfect-log.md    ← Log de validações por seção
│
└── .claude/
    └── skills/
        └── ezstudio-cases/     ← Skill de automação de cases
            └── SKILL.md
```

---

## Como rodar localmente

### Opção 1 — Live Server (recomendado, com hot reload)

```bash
npx live-server . --port=3000
```

### Opção 2 — Python HTTP Server

```bash
python3 -m http.server 3000
```

Acesse em: [http://localhost:3000](http://localhost:3000)

---

## Design System

Os tokens de design (cores, tipografia, espaçamento, grid) estão documentados em [`docs/design-system.md`](docs/design-system.md) e implementados em `assets/css/design-system.css`.

**Referência visual:** Figma — Layout-EZ-Studio

---

## Metodologia Pixel-Perfect

Para cada seção implementada:

1. Capturar screenshot no Figma
2. Implementar em HTML/CSS
3. Capturar screenshot do preview
4. Comparar e validar
5. Registrar em `docs/pixel-perfect-log.md`

Só avança para a próxima seção após aprovação ✅

---

## Componentes Globais

Componentes reutilizáveis implementados e prontos para uso em qualquer página:

| Componente | Arquivo | Variantes |
|------------|---------|-----------|
| Header / Nav | `components/header.html` | Menu mobile, scroll behavior |
| Footer | `components/footer.html` | — |
| CTA Destaque | `components/cta-destaque.html` | Default, inverted |
| Botões | `components/button.html` | Primary, inverted |
| Section Title | `components/section-title.html` | Centered, 1col, 2col com CTA |
| Cards | `components/card-image.html` + `card-case.html` | Image, Case |
| Tags / Badges | `components/tags.html` | 6 variantes (header, white, black, ghost…) |

---

## Fases do Projeto

| Fase | Descrição | Status |
|------|-----------|--------|
| 1 | Fundação — estrutura, docs, config | ✅ Concluído |
| 2 | Design System — tokens extraídos do Figma | ✅ Concluído |
| 3 | Componentes Globais — header, footer, cards, CTAs | ✅ Concluído |
| 4 | Páginas — Home, About, Work, Case Template, Contact | ✅ Concluído |
| 5 | Animações GSAP | ⬜ Pendente |
| 6 | Responsividade & QA | ⬜ Pendente |
| 7 | Migração para Framework | ⬜ Futuro |

---

## Desenvolvido por

**VELO Digital** — [velodigital.com.br](https://velodigital.com.br)
