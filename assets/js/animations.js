/**
 * animations.js — ezstudio Website
 * Animações de scroll e interações por seção
 * Depende de: gsap.min.js + ScrollTrigger.min.js + gsap-init.js
 * Fase 4 · 2026-04-15
 */

'use strict';

/* ═══════════════════════════════════════════
 * WHAT WE DO — Image expand on scroll
 * Figma node: 4-1106
 * Behavior: clip-path inset(0 40px) → inset(0 0px) as section enters view
 * ═══════════════════════════════════════════ */

function initWhatWeDoAnimation() {
  const section   = document.getElementById('what-we-do');
  const titleBlock = document.querySelector('.what-we-do .section-title');
  const imageWrap  = document.querySelector('.what-we-do__image-wrap');
  if (!section || !titleBlock || !imageWrap) return;

  // ── Título: sobe 30px ao entrar no viewport ──
  gsap.from(titleBlock, {
    y: 30,
    opacity: 0,
    duration: 0.9,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: titleBlock,
      start: 'top 85%',
      toggleActions: 'play none none none',
      markers: false,
    },
  });

  // ── Imagem: expande clip-path ao rolar (desktop only) ──
  mm.add('(min-width: 768px)', function() {
    gsap.to(imageWrap, {
      clipPath: 'inset(0px 0px round 12px)',
      ease: 'none',
      scrollTrigger: {
        trigger: imageWrap,
        start: 'top 85%',
        end: 'top 30%',
        scrub: 1.2,
        markers: false,
      },
    });
  });
}

/* ═══════════════════════════════════════════
 * PROJECTS — Title + cards fade-up on scroll
 * Figma node: 11-1560
 * ═══════════════════════════════════════════ */

function initProjectsAnimation() {
  const section    = document.getElementById('projects');
  if (!section) return;

  const titleBlock = section.querySelector('.section-title');
  const cards      = section.querySelectorAll('.card-case');

  // ── Título: sobe 30px ──
  if (titleBlock) {
    gsap.from(titleBlock, {
      y: 30,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: titleBlock,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  }

  // ── Cards: stagger 30px, entram em pares por linha ──
  if (cards.length) {
    gsap.from(cards, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.12,
      scrollTrigger: {
        trigger: section.querySelector('.projects__grid'),
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  }
}

/* ═══════════════════════════════════════════
 * SERVICES — Title fade-up + cards scale-down ao empilhar
 * Figma node: 11-1817
 * ═══════════════════════════════════════════ */

function initServicesAnimation() {
  const section    = document.getElementById('services');
  if (!section) return;

  const titleBlock = section.querySelector('.section-title');
  const cards      = section.querySelectorAll('.service-card');

  // ── Título: sobe 30px ao entrar no viewport ──
  if (titleBlock) {
    gsap.from(titleBlock, {
      y: 30,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: titleBlock,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });
  }

  mm.add('(min-width: 768px)', function() {
    cards.forEach(function(card, i) {

      // ── Entrada: cada card começa 5% maior e chega a 100% ao fixar ──
      gsap.fromTo(card,
        { scale: 1.05 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',   // quando o card entra na tela pelo fundo
            end: 'top ' + 128 + 'px', // quando fica fixado no topo
            scrub: true,
          },
        }
      );

      // ── Saída: card enterrado encolhe levemente quando o próximo empilha ──
      if (i < cards.length - 1) {
        gsap.to(card, {
          scale: 0.97,
          ease: 'none',
          scrollTrigger: {
            trigger: cards[i + 1],
            start: 'top ' + (128 + 20) + 'px',
            end: 'top ' + 128 + 'px',
            scrub: true,
          },
        });
      }
    });
  });
}

/* ═══════════════════════════════════════════
 * TESTIMONIALS — title fade-up on scroll
 * ═══════════════════════════════════════════ */

function initTestimonialsAnimation() {
  const titleBlock = document.querySelector('#testimonials .section-title');
  if (!titleBlock) return;

  gsap.from(titleBlock, {
    y: 30,
    opacity: 0,
    duration: 0.9,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: titleBlock,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  });
}

/* ═══════════════════════════════════════════
 * FAQ — Title fade-up on scroll
 * ═══════════════════════════════════════════ */

function initFaqAnimation() {
  const titleBlock = document.querySelector('#faq .faq-section__left');
  if (!titleBlock) return;

  gsap.from(titleBlock, {
    y: 30,
    opacity: 0,
    duration: 0.9,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: titleBlock,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
  });
}

/* ── Init ──────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function() {
  initWhatWeDoAnimation();
  initProjectsAnimation();
  initServicesAnimation();
  initTestimonialsAnimation();
  initFaqAnimation();
});
