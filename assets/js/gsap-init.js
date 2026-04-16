/**
 * gsap-init.js — ezstudio Website
 * Registro de plugins GSAP e configurações globais
 * Fase 2 · 2026-04-14
 *
 * Carregar via <script> ANTES de animations.js e main.js
 * GSAP CDN ou bundle local deve ser incluído antes deste arquivo
 */

/* ─────────────────────────────────────────
 * REGISTRO DE PLUGINS
 * ───────────────────────────────────────── */

gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(ScrollSmoother); // ativar quando necessário

/* ─────────────────────────────────────────
 * DEFAULTS GLOBAIS
 * ───────────────────────────────────────── */

gsap.defaults({
  ease: 'power3.out',
  duration: 0.6,
});

/* ─────────────────────────────────────────
 * SCROLL TRIGGER — CONFIG PADRÃO
 * Exportado para reutilização em animations.js
 * ───────────────────────────────────────── */

const scrollDefaults = {
  start: 'top 80%',
  end: 'bottom 20%',
  toggleActions: 'play none none reverse',
  markers: false,   // sempre false em produção
};

/* ─────────────────────────────────────────
 * MATCH MEDIA — BREAKPOINTS
 * Usar gsap.matchMedia() para animações responsivas
 * ───────────────────────────────────────── */

const mm = gsap.matchMedia();

// Exporta para uso em animations.js
// mm.add('(min-width: 768px)', () => { ... });
// mm.add('(max-width: 767px)', () => { ... });

/* ─────────────────────────────────────────
 * SMOOTH SCROLL (opcional)
 * Descomentar quando ScrollSmoother for ativado
 * ───────────────────────────────────────── */

// const smoother = ScrollSmoother.create({
//   wrapper: '#smooth-wrapper',
//   content: '#smooth-content',
//   smooth: 1.5,
//   effects: true,
// });
