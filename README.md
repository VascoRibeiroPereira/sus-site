# Sociedade União Sintrense — versão estática (GitHub Pages)

Este repositório contém uma cópia **100% estática** (sem dependências do GoDaddy, sem assets externos).

## Publicar no GitHub Pages
1. Cria um repo no GitHub (ex.: `sus-site`)
2. Faz upload de tudo o que está nesta pasta (ou faz push via git)
3. GitHub → **Settings → Pages**
   - Source: Deploy from a branch
   - Branch: `main` / Folder: `/ (root)`

## Estrutura
- `index.html`
- Pastas por página (URLs “bonitas”):
  - `/oferta/`
  - `/agenda/`
  - `/noticias-e-atividades/`
  - `/teatro-uniao/`
  - `/torne-se-socio/`
  - `/contacte-nos/`
  - `/politica-de-privacidade/`
  - `/direcao/`
- `assets/` (CSS/JS/imagens)
- `downloads/` (PDFs)

## O que falta (para ficares 100% igual ao site atual)
### PDFs
O ambiente aqui não me deixou descarregar PDFs do `img1.wsimg.com`, por isso deixei placeholders:

Coloca estes ficheiros em `downloads/`:
- `Contrato-Concurso-Camelias-2025.pdf`
- `Ficha-Inscricao-Concurso-Camelias-2025.pdf`
- `Proposta-de-Socio.pdf`

> Tens arquivos `.PLACEHOLDER.txt` ao lado com notas.

### Ícones / favicon
Substituir em `assets/img/`:
- `favicon.svg`
- `social-facebook.svg`
- `social-instagram.svg`
- `social-tiktok.svg`
- `social-youtube.svg`

## Formulários (GoDaddy → estático)
Os formulários do GoDaddy não funcionam em GitHub Pages.
Opções comuns:
- **Formspree** (mais simples)
- **Google Forms**
- **Netlify Forms** (se alojar no Netlify)

## Licença / direitos
Garante que tens direitos sobre imagens e documentos antes de republicar.

Gerado em: 2026-01-22 19:09 UTC

## Temas (design tokens)

Este site usa **CSS variables (tokens)** para suportar temas **offline**.

- Tema atual: definido em `<html data-theme="...">` (default: `theatre`)
- Temas disponíveis: `theatre`, `modern`, `classic`

### Como experimentar
- Abrir com o seletor de temas: adicionar `?dev=1` ao URL (ex.: `/agenda/?dev=1`)
- Forçar tema via URL: `?theme=modern` (ou `theatre`, `classic`)
- Atalho: `Ctrl + Shift + T` (cicla entre temas)
- Preferência fica guardada em `localStorage`

Ficheiros:
- `assets/css/style.css` — base + tokens default
- `assets/css/themes.css` — overrides por tema
