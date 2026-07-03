/**
 * Shared plumbing for the home-page scroll film.
 *
 * Every scene is a fullscreen quad + fragment shader (orthographic, no scene
 * graph). Type is rasterized to canvas textures in the brand fonts; scenes
 * scrub entirely off a normalized progress uniform so the whole film is
 * reversible.
 */
import * as THREE from 'three';

/* ── GLSL chunks shared by every scene ─────────────────────── */
export const GLSL_UTILS = /* glsl */ `
  float hash12(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * .1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
  }
  float filmGrain(vec2 uv, float t) {
    return hash12(uv * 917.3 + fract(t * 0.31) * 73.1) - 0.5;
  }
  float vig(vec2 uv, float k) {
    vec2 d = uv - 0.5;
    return 1.0 - dot(d, d) * k;
  }
  /* cover-fit sampling: screen uv -> media uv */
  vec2 coverUv(vec2 uv, float screenAspect, float mediaAspect) {
    vec2 s = vec2(1.0);
    if (screenAspect > mediaAspect) s = vec2(1.0, mediaAspect / screenAspect);
    else s = vec2(screenAspect / mediaAspect, 1.0);
    return (uv - 0.5) * s + 0.5;
  }
`;

const FS_VERT = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

export function fsQuad(
  frag: string,
  uniforms: Record<string, THREE.IUniform>
): THREE.Mesh {
  const mat = new THREE.ShaderMaterial({
    vertexShader: FS_VERT,
    fragmentShader: GLSL_UTILS + frag,
    uniforms,
    depthTest: false,
    depthWrite: false,
    transparent: true,
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat);
  mesh.frustumCulled = false;
  mesh.visible = false;
  return mesh;
}

/* ── Canvas type textures ──────────────────────────────────── */

export const FONT_DISPLAY = '"Space Grotesk", sans-serif';
export const FONT_MONO = '"JetBrains Mono", monospace';

export function ensureFonts(): Promise<unknown> {
  const f = document.fonts;
  if (!f) return Promise.resolve();
  return Promise.all([
    f.load(`600 100px ${FONT_DISPLAY}`),
    f.load(`500 100px ${FONT_DISPLAY}`),
    f.load(`300 100px ${FONT_DISPLAY}`),
    f.load(`500 100px ${FONT_MONO}`),
  ]).catch(() => undefined);
}

export interface CanvasTex {
  tex: THREE.CanvasTexture;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  redraw: (draw: (ctx: CanvasRenderingContext2D, w: number, h: number) => void) => void;
  dispose: () => void;
}

export function makeCanvasTex(
  w: number,
  h: number,
  draw?: (ctx: CanvasRenderingContext2D, w: number, h: number) => void
): CanvasTex {
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(2, Math.round(w));
  canvas.height = Math.max(2, Math.round(h));
  const ctx = canvas.getContext('2d', { willReadFrequently: false })!;
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  tex.generateMipmaps = true;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  const api: CanvasTex = {
    tex,
    canvas,
    ctx,
    redraw(fn) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      fn(ctx, canvas.width, canvas.height);
      tex.needsUpdate = true;
    },
    dispose() {
      tex.dispose();
      canvas.width = canvas.height = 0;
    },
  };
  if (draw) api.redraw(draw);
  return api;
}

/** Font size (px) at which `text` rendered with `font` spans targetW px. */
export function fitTextPx(
  ctx: CanvasRenderingContext2D,
  text: string,
  weight: number | string,
  family: string,
  targetW: number
): number {
  const probe = 100;
  ctx.font = `${weight} ${probe}px ${family}`;
  const w = ctx.measureText(text).width || 1;
  return (targetW / w) * probe;
}

/* ── Media textures (poster now, video when available) ─────── */

const activeVideos = new Set<HTMLVideoElement>();

export class MediaTex {
  tex: THREE.Texture;
  aspect = 16 / 9;
  private video: HTMLVideoElement | null = null;

  private constructor(tex: THREE.Texture) {
    this.tex = tex;
  }

  /** 1x1 dark placeholder that image/video loads later replace. */
  static placeholder(): MediaTex {
    const c = document.createElement('canvas');
    c.width = c.height = 2;
    const x = c.getContext('2d')!;
    x.fillStyle = '#0c0c0c';
    x.fillRect(0, 0, 2, 2);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return new MediaTex(t);
  }

  static fromImage(url: string): MediaTex {
    const m = MediaTex.placeholder();
    new THREE.TextureLoader().load(url, (t) => {
      t.colorSpace = THREE.SRGBColorSpace;
      t.minFilter = THREE.LinearFilter;
      t.generateMipmaps = false;
      m.aspect = t.image.width / t.image.height;
      m.tex.dispose();
      m.tex = t;
      m.onSwap?.();
    });
    return m;
  }

  /** Called when the underlying texture object is replaced. */
  onSwap: (() => void) | null = null;

  /** Upgrade to a looping muted video once it can play through. */
  upgradeToVideo(url: string) {
    if (this.video) return;
    const v = document.createElement('video');
    this.video = v;
    v.muted = true;
    v.loop = true;
    v.playsInline = true;
    v.preload = 'auto';
    v.crossOrigin = 'anonymous';
    v.src = url;
    v.addEventListener(
      'canplay',
      () => {
        const t = new THREE.VideoTexture(v);
        t.colorSpace = THREE.SRGBColorSpace;
        t.minFilter = THREE.LinearFilter;
        t.generateMipmaps = false;
        this.aspect = (v.videoWidth || 16) / (v.videoHeight || 9);
        this.tex.dispose();
        this.tex = t;
        this.onSwap?.();
      },
      { once: true }
    );
    v.load();
  }

  /** Keep at most `keep` videos decoding; play this one, pause the rest. */
  play(exclusive = true) {
    const v = this.video;
    if (!v) return;
    if (exclusive) {
      activeVideos.forEach((o) => {
        if (o !== v) o.pause();
      });
      activeVideos.clear();
    }
    activeVideos.add(v);
    v.play().catch(() => undefined);
  }

  pause() {
    if (!this.video) return;
    this.video.pause();
    activeVideos.delete(this.video);
  }

  dispose() {
    this.pause();
    if (this.video) {
      this.video.src = '';
      this.video = null;
    }
    this.tex.dispose();
  }
}

/* ── Scene contract ────────────────────────────────────────── */

export interface Viewport {
  w: number;
  h: number;
  aspect: number;
  dpr: number;
}

export type Tier = 'high' | 'low';

export interface SceneCtx {
  tier: Tier;
  vp: Viewport;
  /** Smoothed lenis scroll velocity (px/s, signed), updated each tick. */
  vel: () => number;
  /** 0 lets the DOM behind the canvas show through cleared pixels. */
  setClearAlpha: (a: number) => void;
}

export interface FilmScene {
  name: string;
  /** [start, end] window on the master 0-1 film progress. */
  win: [number, number];
  mesh: THREE.Mesh;
  setProgress(local: number): void;
  /** Clock-driven work (grain seeds, video textures) while active. */
  update?(time: number): void;
  onEnter?(): void;
  onExit?(): void;
  resize?(vp: Viewport): void;
  dispose?(): void;
}

export const uni = (value: unknown): THREE.IUniform => ({ value });
