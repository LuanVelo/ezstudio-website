/**
 * components.js — ezstudio Website
 * Lógica de componentes reutilizáveis
 * Fase 3 · 2026-04-14
 */

'use strict';

/* ═══════════════════════════════════════════
 * HEADER
 * Comportamento:
 *  - Scroll down  → .is-hidden (some)
 *  - Scroll up    → aparece com .is-scrolled (glass)
 *  - No topo      → sem classe (estado padrão)
 *  - Mobile: botão "Menu" abre overlay fullscreen
 * ═══════════════════════════════════════════ */

function initHeader() {
  const header     = document.getElementById('site-header');
  const menuBtn    = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!header) return;

  // ── Scroll hide / show ──────────────────────
  let lastScrollY   = window.scrollY;
  let ticking       = false;
  const SCROLL_THRESHOLD = 10; // px mínimos para acionar

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }

  function updateHeader() {
    const currentScrollY = window.scrollY;
    const delta = currentScrollY - lastScrollY;

    if (currentScrollY <= 4) {
      // No topo — estado padrão limpo
      header.classList.remove('is-hidden', 'is-scrolled');
    } else if (delta > SCROLL_THRESHOLD) {
      // Scroll down — esconde
      header.classList.add('is-hidden');
      header.classList.remove('is-scrolled');
    } else if (delta < -SCROLL_THRESHOLD) {
      // Scroll up — mostra com variante glass
      header.classList.remove('is-hidden');
      header.classList.add('is-scrolled');
    }

    lastScrollY = currentScrollY;
    ticking = false;
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  // ── Mobile Menu ─────────────────────────────
  if (!menuBtn || !mobileMenu) return;

  function openMenu() {
    menuBtn.setAttribute('aria-expanded', 'true');
    mobileMenu.setAttribute('aria-hidden', 'false');
    mobileMenu.classList.add('is-open');
    document.body.style.overflow = 'hidden'; // trava scroll do body
  }

  function closeMenu() {
    menuBtn.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
    mobileMenu.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function toggleMenu() {
    const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';
    isOpen ? closeMenu() : openMenu();
  }

  menuBtn.addEventListener('click', toggleMenu);

  // Fechar ao clicar em link do menu mobile
  mobileMenu.querySelectorAll('.mobile-menu__link').forEach(function(link) {
    link.addEventListener('click', closeMenu);
  });

  // Fechar com Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && menuBtn.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuBtn.focus();
    }
  });
}

// ── Marcar link ativo baseado na página atual ──
function setActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.site-header__nav-link, .mobile-menu__link').forEach(function(link) {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('is-active');
      link.setAttribute('aria-current', 'page');
    }
  });
}

/* ═══════════════════════════════════════════
 * SLIDER
 * Dependência: GSAP (carregado via gsap-init.js ou CDN)
 * ═══════════════════════════════════════════ */

function initSlider() {
  document.querySelectorAll('[data-slider]').forEach(function(sliderEl) {
    var list    = sliderEl.querySelector('.slider__list');
    var items   = sliderEl.querySelectorAll('.slider__item');
    var btnPrev = sliderEl.querySelector('.slider__btn--prev');
    var btnNext = sliderEl.querySelector('.slider__btn--next');

    if (!list || items.length === 0) return;

    var currentX  = 0;
    var GAP       = 10;
    var isAnimating = false;

    function cardWidth() {
      return items[0].offsetWidth + GAP;
    }

    function maxOffset() {
      return -(items.length * cardWidth() - sliderEl.offsetWidth + GAP);
    }

    function updateButtons() {
      if (btnPrev) btnPrev.disabled = currentX >= 0;
      if (btnNext) btnNext.disabled = currentX <= maxOffset();
    }

    function slideTo(x) {
      if (isAnimating) return;
      isAnimating = true;
      currentX = Math.max(maxOffset(), Math.min(0, x));

      var gsapAvailable = typeof gsap !== 'undefined';
      if (gsapAvailable) {
        gsap.to(list, {
          x: currentX,
          duration: 0.8,
          ease: 'expo.out',
          onComplete: function() { isAnimating = false; }
        });
      } else {
        list.style.transform = 'translateX(' + currentX + 'px)';
        list.style.transition = 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
        isAnimating = false;
      }
      updateButtons();
    }

    function slideBy(dir) {
      slideTo(currentX + dir * cardWidth());
    }

    if (btnPrev) btnPrev.addEventListener('click', function() { slideBy(1); });
    if (btnNext) btnNext.addEventListener('click', function() { slideBy(-1); });

    // ── Ícone: toggle is-open (click fecha o card aberto) ──
    items.forEach(function(item) {
      var icon = item.querySelector('.slider__icon');
      if (!icon) return;
      icon.addEventListener('click', function(e) {
        e.preventDefault();
        var isOpen = item.classList.contains('is-open');
        // Fecha todos
        items.forEach(function(i) { i.classList.remove('is-open'); });
        // Se não estava aberto, abre
        if (!isOpen) {
          item.classList.add('is-open');
        }
      });
    });

    // ── Botões: aparecem por proximidade da borda ──
    var ZONE = 140; // px de cada borda que ativa o botão
    var gsapAvail = typeof gsap !== 'undefined';

    function setButtonOpacity(btn, opacity) {
      if (!btn) return;
      if (gsapAvail) {
        gsap.to(btn, { opacity: opacity, duration: 0.25, ease: 'power2.out', overwrite: 'auto' });
      } else {
        btn.style.opacity = opacity;
      }
    }

    sliderEl.addEventListener('mousemove', function(e) {
      var rect = sliderEl.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var w = rect.width;

      var prevOpacity = x < ZONE ? Math.min(1, (ZONE - x) / ZONE + 0.3) : 0;
      var nextOpacity = x > w - ZONE ? Math.min(1, (x - (w - ZONE)) / ZONE + 0.3) : 0;

      setButtonOpacity(btnPrev, btnPrev && !btnPrev.disabled ? prevOpacity : 0);
      setButtonOpacity(btnNext, btnNext && !btnNext.disabled ? nextOpacity : 0);
    });

    sliderEl.addEventListener('mouseleave', function() {
      setButtonOpacity(btnPrev, 0);
      setButtonOpacity(btnNext, 0);
    });

    // ── Swipe / drag ──
    var dragStartX = 0;
    var dragStartListX = 0;
    var isDragging = false;

    list.addEventListener('mousedown', function(e) {
      isDragging = true;
      dragStartX = e.clientX;
      dragStartListX = currentX;
      list.classList.add('is-dragging');
    });

    document.addEventListener('mousemove', function(e) {
      if (!isDragging) return;
      var delta = e.clientX - dragStartX;
      var newX = Math.max(maxOffset(), Math.min(0, dragStartListX + delta));
      list.style.transform = 'translateX(' + newX + 'px)';
    });

    document.addEventListener('mouseup', function(e) {
      if (!isDragging) return;
      isDragging = false;
      list.classList.remove('is-dragging');
      var delta = e.clientX - dragStartX;
      if (Math.abs(delta) > 60) {
        slideBy(delta > 0 ? 1 : -1);
      } else {
        slideTo(dragStartListX); // snap back
      }
    });

    // ── Touch ──
    var touchStartX = 0;
    list.addEventListener('touchstart', function(e) {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });

    list.addEventListener('touchend', function(e) {
      var delta = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(delta) > 50) slideBy(delta > 0 ? 1 : -1);
    }, { passive: true });

    // ── Init state ──
    updateButtons();
  });
}

/* ═══════════════════════════════════════════
 * TESTIMONIALS CAROUSEL
 * Drag + prev/next — mesmo padrão do slider
 * ═══════════════════════════════════════════ */

function initTestimonialsCarousel() {
  document.querySelectorAll('[data-testimonials]').forEach(function(el) {
    var track   = el.querySelector('.testimonials__track');
    var cards   = el.querySelectorAll('.testimonial-card');
    var btnPrev = el.querySelector('.testimonials__btn--prev');
    var btnNext = el.querySelector('.testimonials__btn--next');

    if (!track || !cards.length) return;

    var currentX    = 0;
    var GAP         = 8;
    var isAnimating = false;

    function cardWidth() {
      return cards[0].offsetWidth + GAP;
    }

    function maxOffset() {
      var totalW = cards.length * cardWidth() - GAP;
      return -(totalW - el.offsetWidth);
    }

    function clamp(x) {
      return Math.max(Math.min(maxOffset(), 0), Math.min(0, x));
    }

    function isScrollable() {
      var totalW = cards.length * cardWidth() - GAP;
      return totalW > el.offsetWidth;
    }

    function checkOverflow() {
      if (isScrollable()) {
        el.classList.add('has-overflow');
      } else {
        el.classList.remove('has-overflow');
        currentX = 0;
        gsap.set(track, { x: 0 });
      }
      updateButtons();
    }

    function updateButtons() {
      if (btnPrev) btnPrev.disabled = currentX >= 0;
      if (btnNext) btnNext.disabled = currentX <= maxOffset();
    }

    function slideTo(x) {
      if (isAnimating) return;
      isAnimating = true;
      currentX = clamp(x);
      gsap.to(track, {
        x: currentX,
        duration: 0.7,
        ease: 'expo.out',
        onComplete: function() { isAnimating = false; }
      });
      updateButtons();
    }

    if (btnPrev) btnPrev.addEventListener('click', function() { slideTo(currentX + cardWidth()); });
    if (btnNext) btnNext.addEventListener('click', function() { slideTo(currentX - cardWidth()); });

    // ── Drag ──
    var dragStartX = 0;
    var dragOriginX = 0;
    var isDragging = false;

    track.addEventListener('mousedown', function(e) {
      isDragging = true;
      dragStartX = e.clientX;
      dragOriginX = currentX;
      track.classList.add('is-dragging');
    });

    document.addEventListener('mousemove', function(e) {
      if (!isDragging) return;
      track.style.transform = 'translateX(' + clamp(dragOriginX + e.clientX - dragStartX) + 'px)';
    });

    document.addEventListener('mouseup', function(e) {
      if (!isDragging) return;
      isDragging = false;
      track.classList.remove('is-dragging');
      var delta = e.clientX - dragStartX;
      if (Math.abs(delta) > 60) {
        slideTo(dragOriginX + (delta > 0 ? cardWidth() : -cardWidth()));
      } else {
        slideTo(dragOriginX);
      }
    });

    // ── Touch ──
    var touchStartX = 0;
    track.addEventListener('touchstart', function(e) { touchStartX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', function(e) {
      var delta = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(delta) > 50) slideTo(currentX + (delta > 0 ? cardWidth() : -cardWidth()));
    }, { passive: true });

    // ── Overflow check: init + resize ──
    checkOverflow();
    window.addEventListener('resize', checkOverflow, { passive: true });
  });
}

/* ═══════════════════════════════════════════
 * FAQ ACCORDION
 * Toggle .is-open no item clicado; fecha os demais
 * ═══════════════════════════════════════════ */

function initFaqAccordion() {
  var items = document.querySelectorAll('[data-faq-item]');
  if (!items.length) return;

  items.forEach(function(item) {
    var btn = item.querySelector('.faq-item__header');
    if (!btn) return;

    btn.addEventListener('click', function() {
      var isOpen = item.classList.contains('is-open');

      // Fecha todos
      items.forEach(function(i) {
        i.classList.remove('is-open');
        var b = i.querySelector('.faq-item__header');
        if (b) b.setAttribute('aria-expanded', 'false');
      });

      // Abre o clicado se estava fechado
      if (!isOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// ── Init ───────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  initHeader();
  setActiveNavLink();
  initSlider();
  initTestimonialsCarousel();
  initFaqAccordion();
});
