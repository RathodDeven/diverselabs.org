/**
 * Pinned cinematic moment — AGAIN -> ENOUGH. -> "Machines should do the
 * machine work." -> "So that's what we build."
 *
 * One compact sticky stage inside a ~450vh track on an otherwise normal
 * page. Progress maps DIRECTLY to scroll with a light glide (~0.35s
 * settle): it responds the instant you move and stops when you stop.
 * No fixed-rate playback, no wheel gearing, no snapping.
 */
import gsap from 'gsap';
import * as THREE from 'three';
import { ensureFonts, type FilmScene, type SceneCtx, type Viewport } from './film/lib';
import { createGrind } from './film/scenes/grind';
import { createRefusal } from './film/scenes/refusal';

class Moment {
  private renderer: THREE.WebGLRenderer;
  private scene3 = new THREE.Scene();
  private camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  private scenes: FilmScene[];
  private active: FilmScene | null = null;
  private smooth = -1;
  private vp: Viewport;
  private tickFn: (time: number, deltaMs: number) => void;
  private resizeTimer = 0;
  private onResize = () => {
    window.clearTimeout(this.resizeTimer);
    this.resizeTimer = window.setTimeout(() => this.applySize(), 180);
  };

  constructor(private track: HTMLElement, canvas: HTMLCanvasElement) {
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false,
      alpha: false,
      powerPreference: 'high-performance',
    });
    this.renderer.setClearColor(0x060606, 1);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.vp = this.measure(dpr);
    this.renderer.setPixelRatio(dpr);
    this.renderer.setSize(this.vp.w, this.vp.h, false);

    const ctx: SceneCtx = {
      tier: window.innerWidth < 820 ? 'low' : 'high',
      vp: this.vp,
      vel: () => 0,
      setClearAlpha: () => undefined,
    };
    this.scenes = [createGrind(ctx, [0, 0.55]), createRefusal(ctx, [0.55, 1.000001])];
    this.scenes.forEach((s) => this.scene3.add(s.mesh));

    this.tickFn = (t, d) => this.tick(t, d);
    gsap.ticker.add(this.tickFn);
    window.addEventListener('resize', this.onResize, { passive: true });
    (window as unknown as { __moment?: Moment }).__moment = this;
    this.tick(0, 16.7);
  }

  forceTick() {
    this.tick(performance.now() / 1000, 16.7);
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
    if (next.w === this.vp.w && Math.abs(next.h - this.vp.h) < 120) return;
    Object.assign(this.vp, next);
    this.renderer.setSize(this.vp.w, this.vp.h, false);
    this.scenes.forEach((s) => s.resize?.(this.vp));
  }

  private tick(time: number, deltaMs: number) {
    const rect = this.track.getBoundingClientRect();
    const onScreen = rect.bottom > -100 && rect.top < window.innerHeight + 100;

    const span = rect.height - window.innerHeight;
    const target = span > 0 ? Math.min(1, Math.max(0, -rect.top / span)) : 0;
    if (this.smooth < 0) this.smooth = target;
    const dp = target - this.smooth;
    const dt = Math.min(Math.max(deltaMs, 1), 50) / 1000;
    // light, responsive glide: settles ~0.35s after the hand stops. The
    // glide always advances (so the final frame lands even if the visitor
    // scrolls past quickly); rendering is skipped while off screen.
    const k = 1 - Math.exp(-dt * 9);
    this.smooth += Math.abs(dp) < 0.0004 ? dp : dp * k;
    if (!onScreen) return;

    const p = this.smooth;
    const scene =
      this.scenes.find((s) => p >= s.win[0] && p < s.win[1]) ??
      this.scenes[this.scenes.length - 1];
    if (scene !== this.active) {
      if (this.active) this.active.mesh.visible = false;
      this.active = scene;
      scene.mesh.visible = true;
    }
    const local = Math.min(1, Math.max(0, (p - scene.win[0]) / (scene.win[1] - scene.win[0])));
    scene.setProgress(local);
    scene.update?.(time);
    this.renderer.render(this.scene3, this.camera);
  }

  dispose() {
    delete (window as unknown as { __moment?: Moment }).__moment;
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

let moment: Moment | null = null;

async function boot() {
  const track = document.getElementById('moment-track');
  const canvas = document.getElementById('moment-canvas') as HTMLCanvasElement | null;
  if (!track || !canvas) return;
  if (moment || track.dataset.booted) return;

  try {
    const probe = document.createElement('canvas');
    if (!probe.getContext('webgl2')) {
      document.documentElement.classList.add('moment-off');
      return;
    }
  } catch {
    document.documentElement.classList.add('moment-off');
    return;
  }
  track.dataset.booted = '1';
  await ensureFonts();
  if (!track.isConnected) return;
  try {
    moment = new Moment(track, canvas);
  } catch {
    document.documentElement.classList.add('moment-off');
  }
}

document.addEventListener('astro:page-load', boot);
document.addEventListener('astro:before-swap', () => {
  moment?.dispose();
  moment = null;
});
if (document.readyState !== 'loading') boot();
else document.addEventListener('DOMContentLoaded', () => boot());
