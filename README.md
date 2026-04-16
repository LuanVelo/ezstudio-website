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

| Arquivo | Página |
|---------|--------|
| `index.html` | Home |
| `about.html` | About |
| `work.html` | Work |
| `case-template.html` | Case Template |
| `solutions.html` | Our Solutions |
| `contact.html` | Contact |

---

## Estrutura do Projeto

```
website/
├── index.html
├── about.html
├── work.html
├── case-template.html
├── solutions.html
├── contact.html
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
└── docs/
    ├── design-system.md        ← Documentação dos tokens
    └── pixel-perfect-log.md    ← Log de validações por seção
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

## Fases do Projeto

| Fase | Descrição | Status |
|------|-----------|--------|
| 1 | Fundação — estrutura, docs, config | ✅ Concluído |
| 2 | Design System — tokens do Figma | ⬜ Pendente |
| 3 | Componentes Globais — header, footer, cards | ⬜ Pendente |
| 4 | Páginas — section por section | ⬜ Pendente |
| 5 | Animações GSAP | ⬜ Pendente |
| 6 | Responsividade & QA | ⬜ Pendente |
| 7 | Migração para Framework | ⬜ Futuro |

---

## Desenvolvido por

**VELO Digital** — [velodigital.com.br](https://velodigital.com.br)
