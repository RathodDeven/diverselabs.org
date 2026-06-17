/**
 * Global motion system — Lenis smooth scroll + GSAP ScrollTrigger.
 *
 * Declarative API (used across pages):
 *   data-split            → masked word-by-word headline reveal
 *   data-reveal           → fade-up on enter (data-reveal-delay="0.1")
 *   data-reveal-group     → staggered fade-up of direct children
 *   data-count="15"       → count-up number (data-suffix="+")
 *   data-parallax         → inner <img> drifts vertically on scroll
 *   data-marquee          → infinite tape, speed reacts to scroll velocity
 *   data-stack            → sticky stacking cards (children .stack-card)
 *   data-reel             → pinned horizontal scroll section
 *   data-scrub-text       → paragraph words brighten as you scroll
 *   data-process          → timeline line fill + step activation
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const desktop = () => window.innerWidth >= 900;

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

/* Per-page cleanup registry (view transitions re-run init) */
let cleanupFns: Array<() => void> = [];
const onCleanup = (fn: () => void) => cleanupFns.push(fn);

/* ────────────────────────────────────────────────────────────
   Lenis — created once, survives Astro view transitions
   ──────────────────────────────────────────────────────────── */
function setupLenis() {
  if (window.__lenis) return;
  const lenis = new Lenis({
    lerp: 0.1,
    smoothWheel: true,
    syncTouch: false,
  });
  window.__lenis = lenis;
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // Anchor links scroll through Lenis so easing stays consistent
  document.addEventListener('click', (e) => {
    const link = (e.target as Element).closest?.('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute('href');
    if (!id || id === '#') return;
    const dest = document.querySelector(id);
    if (!dest) return;
    e.preventDefault();
    lenis.scrollTo(dest as HTMLElement, { offset: -96, duration: 1.2 });
  });
}

/* ────────────────────────────────────────────────────────────
   Split headline — words wrapped in overflow-hidden masks
   ──────────────────────────────────────────────────────────── */
function wrapWords(el: HTMLElement) {
  if (el.dataset.splitDone) return;
  el.dataset.splitDone = 'true';
  const splitNode = (node: Node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const frag = document.createDocumentFragment();
      const parts = (node.textContent || '').split(/(\s+)/);
      parts.forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) {
          frag.appendChild(document.createTextNode(part));
        } else {
          const mask = document.createElement('span');
          mask.className = 'sw-mask';
          const inner = document.createElement('span');
          inner.className = 'sw-word';
          inner.textContent = part;
          mask.appendChild(inner);
          frag.appendChild(mask);
        }
      });
      node.parentNode?.replaceChild(frag, node);
    } else if (
      node.nodeType === Node.ELEMENT_NODE &&
      !(node as Element).classList.contains('sw-mask')
    ) {
      Array.from(node.childNodes).forEach(splitNode);
    }
  };
  Array.from(el.childNodes).forEach(splitNode);
}

function initSplits() {
  document.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
    wrapWords(el);
    const words = el.querySelectorAll('.sw-word');
    const delay = parseFloat(el.dataset.splitDelay || '0');
    gsap.set(el, { visibility: 'visible' });
    gsap.fromTo(
      words,
      { yPercent: 115, rotate: 2.5 },
      {
        yPercent: 0,
        rotate: 0,
        duration: 1.15,
        ease: 'power4.out',
        stagger: 0.06,
        delay,
        scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      }
    );
  });
}

/* ────────────────────────────────────────────────────────────
   Reveals & stagger groups
   ──────────────────────────────────────────────────────────── */
function initReveals() {
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    gsap.fromTo(
      el,
      { y: 36, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.05,
        ease: 'power3.out',
        delay: parseFloat(el.dataset.revealDelay || '0'),
        scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      }
    );
  });

  document
    .querySelectorAll<HTMLElement>('[data-reveal-group]')
    .forEach((group) => {
      const items = Array.from(group.children) as HTMLElement[];
      gsap.fromTo(
        items,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          ease: 'power3.out',
          stagger: 0.09,
          scrollTrigger: { trigger: group, start: 'top 88%', once: true },
        }
      );
    });
}

/* ────────────────────────────────────────────────────────────
   Counters
   ──────────────────────────────────────────────────────────── */
function initCounters() {
  document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    const to = parseFloat(el.dataset.count || '0');
    const suffix = el.dataset.suffix || '';
    const state = { v: 0 };
    el.textContent = '0' + suffix;
    gsap.to(state, {
      v: to,
      duration: 1.9,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      onUpdate: () => {
        el.textContent = String(Math.round(state.v)) + suffix;
      },
    });
  });
}

/* ────────────────────────────────────────────────────────────
   Parallax media
   ──────────────────────────────────────────────────────────── */
function initParallax() {
  if (!desktop()) return;
  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((wrap) => {
    const img = wrap.querySelector('img');
    if (!img) return;
    const speed = parseFloat(wrap.dataset.parallaxSpeed || '8');
    gsap.fromTo(
      img,
      { yPercent: -speed },
      {
        yPercent: speed,
        ease: 'none',
        scrollTrigger: {
          trigger: wrap,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  });
}

/* ────────────────────────────────────────────────────────────
   Velocity-reactive marquee tapes
   ──────────────────────────────────────────────────────────── */
function initMarquees() {
  const tapes = document.querySelectorAll<HTMLElement>('[data-marquee]');
  if (!tapes.length) return;

  let lastY = window.scrollY;
  let velocity = 0;
  let skew = 0;

  const items = Array.from(tapes).map((tape) => ({
    tape,
    track: tape.querySelector<HTMLElement>('[data-marquee-track]'),
    dir: tape.dataset.direction === 'right' ? 1 : -1,
    speed: parseFloat(tape.dataset.speed || '1'),
    skews: tape.dataset.skew !== 'false',
    pos: 0,
    visible: true,
  }));

  // Don't pay for tapes that aren't on screen
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const item = items.find((it) => it.tape === entry.target);
      if (item) item.visible = entry.isIntersecting;
    });
  });
  items.forEach((it) => io.observe(it.tape));
  onCleanup(() => io.disconnect());

  let lastTime = performance.now();
  const tick = () => {
    const now = performance.now();
    const dt = Math.min((now - lastTime) / 1000, 0.05);
    lastTime = now;

    const y = window.scrollY;
    velocity += (Math.abs(y - lastY) / Math.max(dt, 0.001) - velocity) * 0.12;
    const signed = (y - lastY) / Math.max(dt, 0.001);
    lastY = y;

    const boost = Math.min(velocity * 0.004, 22);
    skew += (gsap.utils.clamp(-5, 5, signed * 0.0035) - skew) * 0.08;

    items.forEach((it) => {
      if (!it.track || !it.visible) return;
      it.pos += (5.2 * it.speed + boost) * dt * it.dir;
      if (it.pos <= -50) it.pos += 50;
      if (it.pos >= 0) it.pos -= 50;
      gsap.set(it.track, { xPercent: it.pos, skewX: it.skews ? skew : 0 });
    });
  };
  gsap.ticker.add(tick);
  onCleanup(() => gsap.ticker.remove(tick));
}

/* ────────────────────────────────────────────────────────────
   Sticky stacking cards (services)
   ──────────────────────────────────────────────────────────── */
function initStacks() {
  document.querySelectorAll<HTMLElement>('[data-stack]').forEach((stack) => {
    const cards = Array.from(
      stack.querySelectorAll<HTMLElement>('.stack-card')
    );
    cards.forEach((card, i) => {
      card.style.setProperty('--stack-i', String(i));
      if (!desktop() || i === cards.length - 1) return;
      const next = cards[i + 1];
      gsap.to(card.querySelector('.stack-card-inner'), {
        scale: 0.945,
        opacity: 0.55,
        ease: 'none',
        scrollTrigger: {
          trigger: next,
          start: 'top bottom-=120',
          end: 'top top+=160',
          scrub: true,
        },
      });
    });
  });
}

/* ────────────────────────────────────────────────────────────
   Pinned horizontal work reel
   ──────────────────────────────────────────────────────────── */
function initReel() {
  const reel = document.querySelector<HTMLElement>('[data-reel]');
  const track = reel?.querySelector<HTMLElement>('[data-reel-track]');
  if (!reel || !track) return;
  if (!desktop()) return; // mobile: native snap scroll via CSS

  const getAmount = () => Math.max(0, track.scrollWidth - window.innerWidth);
  const counter = reel.querySelector<HTMLElement>('[data-reel-counter]');
  const bar = reel.querySelector<HTMLElement>('[data-reel-bar]');
  const cards = track.querySelectorAll<HTMLElement>('.reel-card');
  const total = cards.length;

  const tween = gsap.to(track, {
    x: () => -getAmount(),
    ease: 'none',
    scrollTrigger: {
      trigger: reel,
      start: 'top top',
      end: () => `+=${getAmount()}`,
      pin: true,
      scrub: 1,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        if (bar) gsap.set(bar, { scaleX: self.progress });
        if (counter) {
          const idx = Math.min(
            total,
            Math.max(1, Math.round(self.progress * (total - 1)) + 1)
          );
          counter.textContent = String(idx).padStart(2, '0');
        }
      },
    },
  });

  // Inner-image parallax tied to the horizontal container animation
  cards.forEach((card) => {
    const img = card.querySelector('img');
    if (!img) return;
    gsap.fromTo(
      img,
      { xPercent: -7 },
      {
        xPercent: 7,
        ease: 'none',
        scrollTrigger: {
          trigger: card,
          containerAnimation: tween,
          start: 'left right',
          end: 'right left',
          scrub: true,
        },
      }
    );
  });

  // Re-measure once images settle
  track.querySelectorAll('img').forEach((img) => {
    if (!img.complete)
      img.addEventListener('load', () => ScrollTrigger.refresh(), {
        once: true,
      });
  });
}

/* ────────────────────────────────────────────────────────────
   Scroll-scrubbed word highlight (philosophy statement)
   ──────────────────────────────────────────────────────────── */
function initScrubText() {
  document.querySelectorAll<HTMLElement>('[data-scrub-text]').forEach((el) => {
    if (!el.dataset.scrubDone) {
      el.dataset.scrubDone = 'true';
      const words = (el.textContent || '').trim().split(/\s+/);
      el.innerHTML = words
        .map((w) => `<span class="scrub-w">${w}</span>`)
        .join(' ');
    }
    gsap.set(el, { visibility: 'visible' });
    gsap.fromTo(
      el.querySelectorAll('.scrub-w'),
      { opacity: 0.14 },
      {
        opacity: 1,
        ease: 'none',
        stagger: 0.06,
        scrollTrigger: {
          trigger: el,
          start: 'top 78%',
          end: 'bottom 45%',
          scrub: 0.4,
        },
      }
    );
  });
}

/* ────────────────────────────────────────────────────────────
   Process timeline (about page)
   ──────────────────────────────────────────────────────────── */
function initProcess() {
  const wrap = document.querySelector<HTMLElement>('[data-process]');
  if (!wrap) return;
  const line = wrap.querySelector<HTMLElement>('[data-process-line]');
  if (line) {
    gsap.fromTo(
      line,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: wrap,
          start: 'top 70%',
          end: 'bottom 60%',
          scrub: 0.5,
        },
      }
    );
  }
  wrap.querySelectorAll<HTMLElement>('.process-step').forEach((step) => {
    ScrollTrigger.create({
      trigger: step,
      start: 'top 68%',
      onEnter: () => step.classList.add('is-active'),
      onLeaveBack: () => step.classList.remove('is-active'),
    });
  });
}

/* ────────────────────────────────────────────────────────────
   Service mockup scenes — pause CSS loops while offscreen
   ──────────────────────────────────────────────────────────── */
function initMockupPause() {
  const mockups = document.querySelectorAll<HTMLElement>('.svc-mockup');
  if (!mockups.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        (entry.target as HTMLElement).classList.toggle(
          'sm-paused',
          !entry.isIntersecting
        );
      });
    },
    { rootMargin: '80px' }
  );
  mockups.forEach((m) => io.observe(m));
  onCleanup(() => io.disconnect());
}

/* ────────────────────────────────────────────────────────────
   Nav — condensed pill after scroll, always visible
   ──────────────────────────────────────────────────────────── */
function initNav() {
  const nav = document.getElementById('site-nav');
  if (!nav) return;
  let raf = 0;
  const onScroll = () => {
    if (raf) return;
    raf = requestAnimationFrame(() => {
      nav.classList.toggle('nav-scrolled', window.scrollY > 40);
      raf = 0;
    });
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  onCleanup(() => window.removeEventListener('scroll', onScroll));
}

/* ────────────────────────────────────────────────────────────
   Page enter — content rises in on every navigation
   ──────────────────────────────────────────────────────────── */
function pageEnter() {
  const main = document.getElementById('main-content');
  if (!main) return;
  gsap.fromTo(
    main,
    { opacity: 0, y: 18 },
    { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', clearProps: 'all' }
  );
}

/* ────────────────────────────────────────────────────────────
   Init / teardown
   ──────────────────────────────────────────────────────────── */
function initMotion(replayEnter = true) {
  cleanupFns.forEach((fn) => fn());
  cleanupFns = [];
  ScrollTrigger.getAll().forEach((t) => t.kill());

  setupLenis();
  if (replayEnter) pageEnter();
  initNav();
  initSplits();
  initReveals();
  initCounters();
  initParallax();
  initMarquees();
  initStacks();
  initReel();
  initScrubText();
  initProcess();
  initMockupPause();

  ScrollTrigger.refresh();
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
}

// astro:page-load fires on first load AND after every view transition
document.addEventListener('astro:page-load', () => initMotion());

// Desktop-only effects (pinned reel, parallax, stacks) are skipped when the
// page loads narrow — re-init if the window later crosses the breakpoint
window
  .matchMedia('(min-width: 900px)')
  .addEventListener('change', () => initMotion(false));
// Safety net if ClientRouter is ever removed
if (document.readyState !== 'loading') {
  setTimeout(() => {
    if (!ScrollTrigger.getAll().length) initMotion();
  }, 0);
} else {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      if (!ScrollTrigger.getAll().length) initMotion();
    }, 0);
  });
}
window.addEventListener('load', () => ScrollTrigger.refresh());
