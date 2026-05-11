---
name: ezstudio-cases
description: >
  Gerencia páginas de case do site ezstudio. Escaneia a pasta cases/ do projeto,
  detecta cases novos e existentes, normaliza nomes de imagens, copia para o worktree,
  gera HTML a partir do template, e atualiza work.html com o card do novo case.

  Use quando o usuário disser: "novo case", "gerar case", "checar cases", "atualizar cases",
  "sincronizar cases", "criar página de case", "olhar os cases", ou similar.
  Também dispara quando o usuário mencionar o nome de uma pasta de case que ainda não tem HTML.
---

# ezstudio-cases skill

Você é responsável pelo pipeline completo de cases do site ezstudio. Execute todos os passos abaixo em ordem, comunicando o progresso ao usuário.

---

## Contexto do projeto

- **Projeto principal:** `/Users/luancarneiro/Library/CloudStorage/GoogleDrive-luan@velodigital.com.br/My Drive/Design Lab/Claude testing/ezstudio/website/`
- **Worktree ativo:** detectar com `find .claude/worktrees -maxdepth 1 -mindepth 1 -type d` a partir do projeto principal, ou usar o diretório de trabalho atual se já estiver no worktree
- **Pasta de cases (fonte):** `<projeto>/cases/`
- **Pasta de cases (worktree):** `<worktree>/cases/`
- **work.html:** `<worktree>/work.html`

---

## Passo 1 — Escanear todos os cases

```bash
find "<projeto>/cases" -mindepth 1 -maxdepth 1 -type d | sort
```

Para cada pasta de case encontrada:
- Nome da pasta = identificador do case (ex: `caiofonseca`, `dateahome`)
- Listar todos os arquivos dentro com `find "<projeto>/cases/<nome>" -type f | sort`

---

## Passo 2 — Ler o arquivo .md de dados

Cada pasta de case deve conter um arquivo `<nome>.md`. Ler este arquivo para extrair:

| Campo | Onde está no .md |
|-------|-----------------|
| `titulo` | linha "Título principal Hero:" |
| `sub` | linha "Texto secundário hero:" |
| `duracao` | linha "Duração:" |
| `industria` | linha "Industria:" |
| `cliente` | linha "Cliente:" |
| `overview` | conteúdo após `## Overview` |
| `solucao` | conteúdo após `## Solução` |
| `numeros` | conteúdo após `## Números` |

Se o .md não existir: criar um template vazio e avisar o usuário para preenchê-lo antes de continuar com esse case.

---

## Passo 3 — Verificar e normalizar imagens

### Regras de nomenclatura

**NUNCA usar imagens de fora da pasta `cases/<nome>/images/`** — exceto se o usuário pedir explicitamente.

Varredura da pasta `<projeto>/cases/<nome>/images/`:

1. **Identificar imagens por função:**
   - Arquivo com "hero" no nome → renomear para `hero.png` (ou manter extensão original)
   - Arquivo com "thumb" no nome → renomear para `thumb_case.png`
   - Demais arquivos → renomear para `grid-1.ext`, `grid-2.ext`, etc. (ordem alfabética original)

2. **Normalizar nomes problemáticos** (aplicar ANTES de renomear por função):
   - Espaços → hífens: `grid 1.png` → `grid-1.png`
   - Caracteres especiais (acentos, parênteses, etc.) → remover ou substituir por hífen
   - Letras maiúsculas → minúsculas
   - Usar `mv` para renomear no diretório fonte

3. **Pasta com nome errado** (ex: `images base/` com espaço):
   - Copiar conteúdo para `images/` com nomes normalizados
   - NÃO deletar a pasta original

### Exemplo de renomeação em bash

```bash
BASE="<projeto>/cases/<nome>/images"
# Renomeia com espaços
for f in "$BASE"/*; do
  novo=$(basename "$f" | tr ' ' '-' | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9._-]//g')
  [ "$(basename "$f")" != "$novo" ] && mv "$f" "$BASE/$novo"
done
```

---

## Passo 4 — Sincronizar imagens para o worktree

```bash
mkdir -p "<worktree>/cases/<nome>/images"
cp "<projeto>/cases/<nome>/images/"* "<worktree>/cases/<nome>/images/"
```

Remover do worktree arquivos de imagem que não existem mais na fonte:
```bash
for f in <worktree>/cases/<nome>/images/*; do
  [ ! -f "<projeto>/cases/<nome>/images/$(basename $f)" ] && rm "$f"
done
```

---

## Passo 5 — Detectar o que é novo vs. existente

- **Case novo:** `<worktree>/cases/<nome>.html` **não existe**
- **Case existente:** arquivo `.html` já existe → apenas sincronizar imagens (Passo 4) e verificar se há novas imagens de grid para adicionar ao HTML

---

## Passo 6 — Gerar HTML para cases novos

Usar o `case-template.html` como base. Substituir todo o conteúdo específico conforme dados do .md.

### Regras do HTML gerado

**Arquivo:** `<worktree>/cases/<nome>.html`

**Caminhos relativos** (HTML está em `cases/`, um nível abaixo da raiz):
- CSS: `../assets/css/design-system.css`
- JS: `../assets/js/gsap-init.js`
- Logo: `../assets/images/logo.png`
- Hero image: `<nome>/images/hero.png`
- Grid images: `<nome>/images/grid-N.ext`

**Grid de imagens — regras:**
- Imagem **landscape** (largura > altura) → `case-grid__item--landscape` (largura total, altura proporcional)
- Imagem **portrait/square** → `case-grid__item--half` (50% da largura, quadrada)
- Slot **sem imagem** → `case-grid__item--empty` (oculto via CSS)
- Detecção de orientação via JS no carregamento (ver snippet abaixo)

**Snippet JS obrigatório** no final do HTML (antes de `</body>`):
```html
<script>
  document.querySelectorAll('.case-grid__item').forEach(item => {
    const img = item.querySelector('img');
    if (!img) { item.classList.add('case-grid__item--empty'); return; }
    const applyLayout = () => {
      if (img.naturalWidth > img.naturalHeight) {
        item.classList.remove('case-grid__item--half', 'case-grid__item--full');
        item.classList.add('case-grid__item--landscape');
      }
    };
    img.complete && img.naturalWidth ? applyLayout() : img.addEventListener('load', applyLayout);
  });
</script>
```

**CSS obrigatório** no `<style>` da página:
```css
.case-grid__item--landscape { width: 100%; aspect-ratio: auto; height: auto; }
.case-grid__item--landscape img { width: 100%; height: auto; object-fit: unset; display: block; }
.case-grid__item--empty { display: none; }
```

---

## Passo 7 — Atualizar work.html

Para cada case **novo** (com `thumb_case.png` disponível), inserir um card no grid de `work.html`.

### Localizar o ponto de inserção

Encontrar o último `</article>` dentro de `.projects-grid` e inserir o novo card **após** ele.

### Template do card

```html
<article class="card-case">
  <a class="card-image" href="cases/<nome>.html" aria-label="Ver case: <titulo>">
    <img class="card-image__img"
      src="cases/<nome>/images/thumb_case.png"
      alt="<titulo>"
      width="669" height="669" loading="eager" />
    <div class="card-image__hover" aria-hidden="true">
      <div class="card-image__icon-btn">
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 17.5H30M30 17.5L17.5 5M30 17.5L17.5 30" stroke="#1d2029" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
  </a>
  <div class="card-case__content">
    <h3 class="card-case__title"><titulo></h3>
    <span class="card-case__meta"><duracao></span>
  </div>
</article>
```

**Se `thumb_case.png` não existir:** inserir o card com um comentário `<!-- thumb_case.png pendente -->` e um placeholder vazio, e avisar o usuário.

---

## Passo 8 — Servidor e preview

Após todas as operações:
1. Verificar se há servidor rodando (`preview_list`)
2. Se não houver, iniciar (`preview_start` com o nome do launch.json)
3. Fornecer URLs para aprovação:
   - Cases novos/atualizados: `http://localhost:<porta>/cases/<nome>.html`
   - Se work.html foi atualizado: `http://localhost:<porta>/work.html`

---

## Fluxo resumido por case

```
pasta cases/<nome>/
  ├── <nome>.md        → ler dados
  ├── images/
  │   ├── hero.png     → imagem hero
  │   ├── thumb_case.png → card em work.html
  │   ├── grid-1.ext   → grid (landscape ou half, auto-detectado)
  │   └── grid-N.ext
  └── (gerado) → cases/<nome>.html
```

---

## O que reportar ao usuário

Ao final, listar:

```
Cases processados:
  ✅ caiofonseca — existente, imagens sincronizadas
  ✅ dateahome   — existente, imagens sincronizadas
  🆕 novoclient  — HTML gerado, card adicionado ao work.html
  ⚠️  outro      — .md não encontrado, aguardando preenchimento

Abra para aprovar:
  http://localhost:3000/cases/novoclient.html
  http://localhost:3000/work.html
```
