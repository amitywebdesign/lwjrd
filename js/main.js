/* ═══════════════════════════════════════════════════════════
   LONG WHARF JUNIOR ROLLER DERBY
   main.js — minimal interactivity
   ═══════════════════════════════════════════════════════════ */

(() => {
  'use strict';

  // ─── 1. Mobile nav toggle ───
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav__toggle');
  if (nav && toggle) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.style.overflow = open ? 'hidden' : '';
    });

    // Close menu when a link is clicked
    nav.querySelectorAll('.nav__link, .nav__cta').forEach(link => {
      link.addEventListener('click', () => {
        if (nav.classList.contains('is-open')) {
          nav.classList.remove('is-open');
          toggle.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        }
      });
    });
  }

  // ─── 2. Active nav link highlighting ───
  const path = window.location.pathname;
  const filename = path.split('/').pop() || 'index.html';
  const normalizedPath = filename === '' ? 'index.html' : filename;

  document.querySelectorAll('.nav__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === normalizedPath) {
      link.classList.add('is-active');
    } else if (normalizedPath === 'index.html' && (href === '/' || href === './')) {
      link.classList.add('is-active');
    }
  });

  // ─── 3. Scroll-triggered reveal ───
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -8% 0px' });

    reveals.forEach(el => observer.observe(el));
  } else {
    // Fallback: just show everything
    reveals.forEach(el => el.classList.add('is-visible'));
  }

  // ─── 4. Hero load animation ───
  const heroSlogan = document.querySelector('.hero__slogan');
  if (heroSlogan) {
    requestAnimationFrame(() => {
      document.querySelectorAll('.hero .reveal').forEach(el => {
        el.classList.add('is-visible');
      });
    });
  }

  // ─── 5. Current year in footer ───
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
