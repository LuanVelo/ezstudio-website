# Design System — ezstudio Website

> Documento vivo. Atualizado na Fase 2 com tokens extraídos do Figma.  
> **Fonte de verdade:** `assets/css/design-system.css`  
> **Figma:** Layout-EZ-Studio · node 1:2 · Extraído em 2026-04-14

---

## Status

| Seção              | Status         |
|--------------------|----------------|
| Cores              | ✅ Extraído do Figma |
| Tipografia         | ✅ Extraído do Figma |
| Espaçamento        | ✅ Extraído do Figma |
| Grid / Layout      | ✅ Extraído do Figma |
| Sombras            | ⚠️ Nenhuma no Figma — valores padrão aplicados |
| Border Radius      | ✅ Extraído do Figma |
| Transições         | ✅ Definido (padrão) |
| Componentes        | ⬜ Aguardando implementação (Fase 3) |

---

## 1. Cores

### Paleta Principal

| Token CSS                  | Valor HEX / rgba              | Uso |
|----------------------------|-------------------------------|-----|
| `--color-text-primary`     | `#1d2029`                     | Headlines, body principal, nav, ícones, botões escuros |
| `--color-text-secondary`   | `#49505d`                     | Body descritivo, subtítulos de seção |
| `--color-text-muted`       | `#49505d`                     | Mesmo valor — placeholder para refinamento |
| `--color-text-inverted`    | `#ffffff`                     | Texto sobre fundos escuros |
| `--color-text-on-light`    | `#f2f4f7`                     | Labels de cards em fundo escuro |
| `--color-bg-primary`       | `#ffffff`                     | Fundo padrão da página, footer |
| `--color-bg-secondary`     | `#f2f4f7`                     | Fundo de cards, tags, seções alternadas |
| `--color-bg-inverted`      | `#1d2029`                     | Botões escuros, indicadores, nav escura |
| `--color-border`           | `rgba(90, 98, 113, 0.5)`      | Outlined tags / badges |
| `--color-border-subtle`    | `rgba(90, 98, 113, 0.2)`      | Divisores leves |
| `--color-header-bg`        | `rgba(255, 255, 255, 0.06)`   | Background do header (glassmorphism) |

> **Nota:** O design usa essencialmente 3 cores funcionais — `#1d2029` (escuro), `#f2f4f7` (cinza claro), `#ffffff` (branco). Sem cor de accent/brand identificada.

---

## 2. Tipografia

### Família

| Token CSS      | Fonte   | Pesos usados            | Carregamento |
|----------------|---------|-------------------------|--------------|
| `--font-display` | Inter | 500 (Medium), 600 (Semi Bold) | Google Fonts |
| `--font-body`    | Inter | 400 (Regular)                 | Google Fonts |

> Uma única família (Inter) com pesos diferentes cumpre display e body.

### Escala Tipográfica

| Token (prefixo)       | size (rem / px)    | line-height      | letter-spacing    | weight | Uso no Figma |
|-----------------------|--------------------|------------------|-------------------|--------|--------------|
| `--text-display-xl`   | 3.6625rem (58.6px) | 4.33rem (69.3px) | -0.1575rem (-2.52px) | 600 | Hero headline |
| `--text-display-lg`   | 2.6875rem (43px)   | 3.23rem (51.7px) | -0.1175rem (-1.88px) | 500 | Section titles grandes |
| `--text-display-md`   | 2.65rem (42.4px)   | 3.23rem (51.7px) | -0.1175rem (-1.88px) | 500 | Section title intro |
| `--text-display-sm`   | 2.26rem (36.1px)   | 2.68rem (42.9px) | -0.0975rem (-1.56px) | 500 | Card/service titles |
| `--text-body-lg`      | 1.13rem (18.1px)   | 1.625rem (26px)  | 0                    | 400 | Link CTA "Start project" |
| `--text-body-md`      | 0.9063rem (14.5px) | 1.3rem (20.8px)  | 0                    | 400 | Body descritivo padrão |
| `--text-body-sm`      | 0.75rem (12px)     | 1.1375rem (18.2px) | 0                  | 400 | Footer info, legendas |
| `--text-nav`          | 0.83rem (13.3px)   | 0.875rem (14px)  | 0                    | 600 | Links de navegação |
| `--text-overline`     | 0.6938rem (11.1px) | 1.2rem (19.2px)  | 0.03rem (0.48px)     | 400 | Eyebrow/kicker ("Who we are") |
| `--text-label`        | 0.7188rem (11.5px) | 1.2rem (19.2px)  | 0.03rem (0.48px)     | 400 | Tags, badges, nomes |

---

## 3. Espaçamento

Escala base **4px**.

| Token CSS      | Valor rem | px   | Onde aparece no Figma |
|----------------|-----------|------|-----------------------|
| `--space-1`    | 0.25rem   | 4px  | — |
| `--space-2`    | 0.5rem    | 8px  | — |
| `--space-3`    | 0.75rem   | 12px | Padding interno de tags (left: 12px) |
| `--space-4`    | 1rem      | 16px | — |
| `--space-5`    | 1.25rem   | 20px | Inner padding de cards de serviço |
| `--space-6`    | 1.5rem    | 24px | Padding interno de testimonial cards |
| `--space-8`    | 2rem      | 32px | — |
| `--space-10`   | 2.5rem    | 40px | Padding horizontal do header |
| `--space-12`   | 3rem      | 48px | — |
| `--space-16`   | 4rem      | 64px | — |
| `--space-20`   | 5rem      | 80px | — |
| `--space-24`   | 6rem      | 96px | — |
| `--space-32`   | 8rem      | 128px | — |

### Espaçamentos de Seção

| Token CSS              | Valor          | Uso |
|------------------------|----------------|-----|
| `--section-padding-x`  | 2.4375rem (39px) | Padding horizontal do container |
| `--section-gap`        | 0              | Seções empilhadas sem gap |

---

## 4. Grid e Layout

| Token CSS              | Valor     | Fonte |
|------------------------|-----------|-------|
| `--container-max`      | 1362px    | 1440px viewport − 2×39px padding |
| `--container-padding`  | 2.4375rem | 39px — extraído do footer e header |
| `--grid-columns`       | 12        | padrão |
| `--grid-gap`           | 1.5rem    | 24px |
| `--grid-gap-mobile`    | 1rem      | 16px |

### Breakpoints

| Nome        | Valor   |
|-------------|---------|
| Mobile      | 375px   |
| Tablet      | 768px   |
| Desktop MD  | 1024px  |
| Desktop LG  | 1440px  |
| Desktop XL  | 1920px  |

---

## 5. Border Radius

| Token CSS      | Valor rem   | px    | Onde aparece no Figma |
|----------------|-------------|-------|-----------------------|
| `--radius-xs`  | 0.4375rem   | 7px   | Indicador dot (eyebrow tag) |
| `--radius-sm`  | 0.625rem    | 10px  | Section wrapper corners |
| `--radius-md`  | 0.75rem     | 12px  | Cards, image containers, FAQ items |
| `--radius-lg`  | 1.125rem    | 18px  | Service section large card |
| `--radius-pill`| 6.25rem     | 100px | Tags, badges, eyebrow pills |
| `--radius-full`| 9999px      | —     | Avatares, botões ícone circulares |

---

## 6. Sombras

> Nenhuma sombra explícita identificada no Figma (design usa separação por cor de fundo).  
> Valores abaixo são defaults para uso futuro — validar com cliente.

| Token CSS      | Valor |
|----------------|-------|
| `--shadow-sm`  | `0 1px 3px rgba(29, 32, 41, 0.06)` |
| `--shadow-md`  | `0 4px 16px rgba(29, 32, 41, 0.08)` |
| `--shadow-lg`  | `0 16px 48px rgba(29, 32, 41, 0.12)` |

---

## 7. Transições e Animações

| Token CSS          | Valor                              |
|--------------------|------------------------------------|
| `--duration-fast`  | 150ms                              |
| `--duration-base`  | 300ms                              |
| `--duration-slow`  | 600ms                              |
| `--duration-xslow` | 1000ms                             |
| `--ease-default`   | cubic-bezier(0.4, 0, 0.2, 1)      |
| `--ease-in`        | cubic-bezier(0.4, 0, 1, 1)        |
| `--ease-out`       | cubic-bezier(0, 0, 0.2, 1)        |
| `--ease-spring`    | cubic-bezier(0.34, 1.56, 0.64, 1) |

---

## 8. Observações da Extração

- **Fonte única:** Todo o design usa Inter. Sem serif, sem mono.
- **Paleta mínima:** Apenas 3 tons funcionais (#1d2029, #f2f4f7, #ffffff). Sem brand color/accent identificado.
- **Negative tracking:** Todos os display sizes têm letter-spacing negativo, criando o caráter condensado do design.
- **Positive tracking:** Overlines/eyebrows têm tracking positivo (+0.48px), contrastando com os displays.
- **display-lg vs display-md:** Diferença mínima (43px vs 42.4px). Na prática, usar `--text-display-lg` para ambos até aparecer distinção clara.
- **Sombras ausentes:** O design separa camadas por cor de fundo (branco vs cinza), sem box-shadow.
- **Container:** 39px de padding (não 40px) — valor exato do Figma, não arredondado.

---

## 9. Log de Atualizações

| Data       | O que mudou | Por quem |
|------------|-------------|----------|
| 2026-04-14 | Documento criado com estrutura base | Claude |
| 2026-04-14 | Fase 2: tokens reais extraídos do Figma (node 1:2) | Claude |
