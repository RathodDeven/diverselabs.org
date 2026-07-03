/**
 * Home-page scroll film — director.
 *
 * One fixed canvas behind the DOM copy layer, one ScrollTrigger scrubbing a
 * normalized 0-1 progress across a tall track, eight scenes as fullscreen
 * shader quads. Exactly one scene renders at a time; captions in the DOM are
 * toggled from the same progress so the whole film is reversible.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';
import {
  ensureFonts,
  reducedMotion,
  setReducedMotion,
  type FilmScene,
  type SceneCtx,
  type Tier,
  type Viewport,
} from './lib';
import { createGrind } from './scenes/grind';
import { createRefusal } from './scenes/refusal';
import { createLayer } from './scenes/layer';
import { createBridge } from './scenes/bridge';
import { createProofWipe } from './scenes/proofWipe';
import { createFlap } from './scenes/flap';
import { createCreatives } from './scenes/creatives';
import { createNumbers } from './scenes/numbers';
import { createVoices } from './scenes/voices';
import { createTurn } from './scenes/turn';
import { createDoorway } from './scenes/doorway';

gsap.registerPlugin(ScrollTrigger);

type FullTier = Tier | 'off';

function detectTier(): FullTier {
  // reduced motion does NOT mean the static page: the film is scroll-driven
  // (motion only under the visitor's own finger). It means: poster frames
  // instead of autoplaying video, no inertia glide, no auto-snap. Windows
  // ships with "Animation effects" off on plenty of machines — those
  // visitors still get the film.
  setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  try {
    // three r172 is WebGL2-only — a WebGL1-only device must get the fallback
    const c = document.createElement('canvas');
    if (!c.getContext('webgl2')) return 'off';
  } catch {
    return 'off';
  }
  const mem = (navigator as { deviceMemory?: number }).deviceMemory ?? 8;
  const cores = navigator.hardwareConcurrency ?? 8;
  const small = window.innerWidth < 820;
  if (reducedMotion || mem <= 4 || cores <= 4 || small) return 'low';
  return 'high';
}

/** Framebuffer DPR is a hardware question, not a viewport-size one — the
    all-typography film goes blurry on phones if forced to DPR 1. */
function pickDpr(): number {
  const mem = (navigator as { deviceMemory?: number }).deviceMemory ?? 8;
  const cores = navigator.hardwareConcurrency ?? 8;
  const weak = mem <= 4 || cores <= 4;
  return Math.min(window.devicePixelRatio || 1, weak ? 1.5 : 2);
}

interface Caption {
  el: HTMLElement;
  scene: string;
  inAt: number;
  outAt: number;
}

/** Master-progress values the film eases onto when the visitor stops
    scrolling nearby: each scene's composed "rest frame" (ENOUGH., the
    thesis, each full-bleed loop, the phones, the numbers, the belief line). */
const REST_POINTS = [0.072, 0.12, 0.151, 0.238, 0.295, 0.395, 0.537, 0.677, 0.758, 0.839, 0.925, 1.0];

/* ── scroll gearing ─────────────────────────────────────────────
   [filmStart, filmEnd, weight]: heavier segments consume more scroll per
   unit of film progress. Video holds are geared ~1.6-1.9x, so the loop
   stays on screen through real scrolling; transitions stay 1x (quick). */
const SEGS: Array<[number, number, number]> = [
  [0.0, 0.085, 1], [0.085, 0.155, 1],
  [0.155, 0.215, 1], [0.215, 0.265, 1.3],   // WE LAYER -> hero hold
  [0.265, 0.315, 1],
  [0.315, 0.355, 1], [0.355, 0.46, 1.5],    // wipe -> NudgeFlow hold
  [0.46, 0.5, 1], [0.5, 0.6, 1.5],          // sweep -> CRM hold
  [0.6, 0.645, 1], [0.645, 0.71, 1.3],      // phones rise -> ads hold
  [0.71, 0.79, 1.1], [0.79, 0.865, 1.1],    // numbers, voices
  [0.865, 0.945, 1], [0.945, 1.0, 1],
];
const FILM_PTS: number[] = [0];
const SCROLL_PTS: number[] = [0];
{
  let acc = 0;
  for (const [a, b, w] of SEGS) {
    acc += (b - a) * w;
    FILM_PTS.push(b);
    SCROLL_PTS.push(acc);
  }
  for (let i = 0; i < SCROLL_PTS.length; i++) SCROLL_PTS[i] /= acc;
}
/** scroll fraction -> film progress */
function warp(raw: number): number {
  const r = Math.min(1, Math.max(0, raw));
  for (let i = 1; i < SCROLL_PTS.length; i++) {
    if (r <= SCROLL_PTS[i]) {
      const t = (r - SCROLL_PTS[i - 1]) / (SCROLL_PTS[i] - SCROLL_PTS[i - 1]);
      return FILM_PTS[i - 1] + t * (FILM_PTS[i] - FILM_PTS[i - 1]);
    }
  }
  return 1;
}
/** film progress -> scroll fraction (for snap targets) */
function unwarp(film: number): number {
  const f = Math.min(1, Math.max(0, film));
  for (let i = 1; i < FILM_PTS.length; i++) {
    if (f <= FILM_PTS[i]) {
      const t = (f - FILM_PTS[i - 1]) / (FILM_PTS[i] - FILM_PTS[i - 1]);
      return SCROLL_PTS[i - 1] + t * (SCROLL_PTS[i] - SCROLL_PTS[i - 1]);
    }
  }
  return 1;
}

class Film {
  private renderer: THREE.WebGLRenderer;
  private scene3 = new THREE.Scene();
  private camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  private scenes: FilmScene[] = [];
  private active: FilmScene | null = null;
  private captions: Caption[] = [];
  private progress = -1;
  private velSmooth = 0;
  private idleFrames = 0;
  private snapDone = false;
  private vp: Viewport;
  private track: HTMLElement;
  private tickFn: (time: number) => void;
  private resizeTimer = 0;
  private onResize = () => {
    window.clearTimeout(this.resizeTimer);
    this.resizeTimer = window.setTimeout(() => this.applySize(), 180);
  };

  constructor(private root: HTMLElement, tier: Tier) {
    const canvas = root.querySelector<HTMLCanvasElement>('#film-canvas')!;
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false,
      alpha: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setClearColor(0x060606, 1);
    const dpr = pickDpr();
    this.vp = this.measure(dpr);
    this.renderer.setPixelRatio(dpr);
    this.renderer.setSize(this.vp.w, this.vp.h, false);

    const ctx: SceneCtx = {
      tier,
      vp: this.vp,
      vel: () => this.velSmooth,
      setClearAlpha: (a) => {
        this.renderer.setClearColor(0x060606, a);
      },
    };

    this.scenes = [
      createGrind(ctx, [0.0, 0.085]),
      createRefusal(ctx, [0.085, 0.155]),
      createLayer(ctx, [0.155, 0.265]),
      createBridge(ctx, [0.265, 0.315]),
      createProofWipe(ctx, [0.315, 0.46]),
      createFlap(ctx, [0.46, 0.6]),
      createCreatives(ctx, [0.6, 0.71]),
      createNumbers(ctx, [0.71, 0.79]),
      createVoices(ctx, [0.79, 0.865]),
      createTurn(ctx, [0.865, 0.945]),
      createDoorway(ctx, [0.945, 1.000001]),
    ];
    this.scenes.forEach((s) => this.scene3.add(s.mesh));

    this.captions = Array.from(
      root.querySelectorAll<HTMLElement>('[data-cap]')
    ).map((el) => ({
      el,
      scene: el.dataset.cap || '',
      inAt: parseFloat(el.dataset.in ?? '0'),
      outAt: parseFloat(el.dataset.out ?? '1'),
    }));

    // NOTE: no ScrollTrigger here on purpose — motion.ts kills all triggers on
    // every astro:page-load. Progress is derived from track geometry per tick.
    this.track = root.querySelector<HTMLElement>('#film-track')!;

    this.tickFn = (time) => this.tick(time);
    gsap.ticker.add(this.tickFn);
    window.addEventListener('resize', this.onResize, { passive: true });
    this.tick(0);
    // debug handle: lets tooling advance a frame when rAF is throttled
    (window as unknown as { __film?: Film }).__film = this;
  }

  /** Advance one frame manually (occluded windows throttle rAF to zero). */
  forceTick() {
    this.tick(performance.now() / 1000);
  }

  private readProgress(): number {
    const rect = this.track.getBoundingClientRect();
    const span = rect.height - window.innerHeight;
    if (span <= 0) return 0;
    return Math.min(1, Math.max(0, -rect.top / span));
  }

  private measure(dpr: number): Viewport {
    return {
      w: window.innerWidth,
      h: window.innerHeight,
      aspect: window.innerWidth / Math.max(window.innerHeight, 1),
      dpr,
    };
  }

  private applySize() {
    const next = this.measure(this.vp.dpr);
    // iOS URL-bar jitter: ignore height-only wiggles under 120px
    if (next.w === this.vp.w && Math.abs(next.h - this.vp.h) < 120) return;
    Object.assign(this.vp, next);
    this.renderer.setSize(this.vp.w, this.vp.h, false);
    this.scenes.forEach((s) => s.resize?.(this.vp));
  }

  private setProgress(p: number) {
    this.progress = p;
    const scene =
      this.scenes.find((s) => p >= s.win[0] && p < s.win[1]) ??
      this.scenes[this.scenes.length - 1];
    if (scene !== this.active) {
      if (this.active) {
        this.active.onExit?.();
        this.active.mesh.visible = false;
      }
      this.active = scene;
      scene.mesh.visible = true;
      scene.onEnter?.();
      this.root.dataset.scene = scene.name;
    }
    const local = Math.min(
      1,
      Math.max(0, (p - scene.win[0]) / (scene.win[1] - scene.win[0]))
    );
    scene.setProgress(local);
    this.root.style.setProperty('--fsp', local.toFixed(4));

    for (const c of this.captions) {
      c.el.classList.toggle(
        'on',
        c.scene === scene.name && local >= c.inAt && local <= c.outAt
      );
    }
  }

  private smooth = -1;

  private tick(time: number) {
    // scroll -> gearing warp -> inertial glide. The glide is what makes
    // every transition feel driven rather than dragged: a flick becomes a
    // choreographed move that eases out instead of a 1:1 scrub.
    const target = warp(this.readProgress());
    if (this.smooth < 0) this.smooth = target;
    const dp = target - this.smooth;
    // reduced motion: no inertia — progress tracks the scrollbar exactly
    this.smooth += reducedMotion || Math.abs(dp) < 0.00035 ? dp : dp * 0.1;
    if (Math.abs(this.smooth - this.progress) > 1e-5) this.setProgress(this.smooth);

    const lenis = (window as { __lenis?: { velocity?: number } }).__lenis;
    const raw = (lenis?.velocity ?? 0) * 60; // ~px/s
    this.velSmooth += (raw - this.velSmooth) * 0.12;
    this.root.style.setProperty(
      '--film-vel',
      (Math.max(-1, Math.min(1, this.velSmooth / 3000))).toFixed(3)
    );

    this.maybeSnap();

    // stop rendering once the film has scrolled past
    if (this.root.getBoundingClientRect().bottom < 0) return;

    this.active?.update?.(time);
    this.renderer.render(this.scene3, this.camera);
  }

  /** When the visitor stops scrolling near a rest point, ease onto it —
      transitions complete and each scene settles on its composed frame. */
  private maybeSnap() {
    if (reducedMotion) return; // never scroll the page on the user's behalf
    const lenis = (window as { __lenis?: { scrollTo: (y: number, o?: object) => void } }).__lenis;
    if (!lenis || this.progress <= 0.01 || this.progress >= 0.995) return;
    if (Math.abs(this.velSmooth) > 45) {
      this.idleFrames = 0;
      this.snapDone = false;
      return;
    }
    if (++this.idleFrames < 14 || this.snapDone) return;
    this.snapDone = true; // one attempt per stop — never fight the visitor

    let nearest = REST_POINTS[0];
    let dist = 1;
    for (const r of REST_POINTS) {
      const d = Math.abs(r - this.progress);
      if (d < dist) {
        dist = d;
        nearest = r;
      }
    }
    if (dist < 0.004 || dist > 0.05) return; // already there / too far to pull

    const rect = this.track.getBoundingClientRect();
    const span = rect.height - window.innerHeight;
    if (span <= 0) return;
    // rest points live in film space — convert through the gearing
    const target = window.scrollY + rect.top + unwarp(nearest) * span;
    lenis.scrollTo(target, {
      duration: 1.05,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
    });
  }

  dispose() {
    delete (window as unknown as { __film?: Film }).__film;
    gsap.ticker.remove(this.tickFn);
    window.removeEventListener('resize', this.onResize);
    this.scenes.forEach((s) => {
      s.dispose?.();
      (s.mesh.material as THREE.Material).dispose();
      s.mesh.geometry.dispose();
    });
    this.renderer.dispose();
  }
}

let film: Film | null = null;

async function boot() {
  const root = document.getElementById('film');
  if (!root) return;
  if (film || root.dataset.booted) return;
  // never boot against a hidden track (e.g. tier CSS put the fallback up)
  const track = root.querySelector<HTMLElement>('#film-track');
  if (!track || track.offsetHeight === 0) return;
  root.dataset.booted = '1';

  const tier = detectTier();
  document.documentElement.dataset.filmTier = tier;
  if (tier === 'off') return;

  await ensureFonts();
  // the await may have lost a race with a view transition — re-validate
  if (film || !root.isConnected) return;
  try {
    film = new Film(root, tier);
  } catch {
    // renderer construction failed (context loss, driver) -> editorial page
    document.documentElement.dataset.filmTier = 'off';
    delete root.dataset.booted;
    return;
  }
  // late layout shifts (fonts, images elsewhere) — re-measure the track
  ScrollTrigger.refresh();
}

document.addEventListener('astro:page-load', boot);
document.addEventListener('astro:before-swap', () => {
  film?.dispose();
  film = null;
});
if (document.readyState !== 'loading') boot();
else document.addEventListener('DOMContentLoaded', () => boot());
