/**
 * Scene 6 — PROOF III: AI CREATIVES.
 * Three phone-shaped cards rise from the bottom, settle side by side, and
 * play real published AI UGC ads (vertical loops). Scroll drives the rise;
 * the long hold is spent watching the ads run. DOM video for crispness —
 * the WebGL layer just keeps the black + grain world behind them.
 */
import {
  fsQuad,
  uni,
  reducedMotion,
  type FilmScene,
  type SceneCtx,
  type Viewport,
} from '../lib';

const FRAG = /* glsl */ `
  uniform float uP;
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    vec3 col = vec3(0.024);
    // soft pool of light behind the phones
    float d = length((vUv - 0.5) * vec2(1.3, 1.0));
    col += vec3(0.03) * (1.0 - smoothstep(0.15, 0.8, d));
    col += filmGrain(vUv, uTime) * 0.05;
    col *= vig(vUv, 0.5);
    gl_FragColor = vec4(col, 1.0);
  }
`;

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

export function createCreatives(ctx: SceneCtx, win: [number, number]): FilmScene {
  const uniforms = { uP: uni(0), uTime: uni(0) };
  const mesh = fsQuad(FRAG, uniforms);

  let phones: HTMLElement[] = [];
  let videos: HTMLVideoElement[] = [];
  let grabbed = false;

  const grab = () => {
    if (grabbed) return;
    const wrap = document.getElementById('film-phones');
    if (!wrap) return;
    grabbed = true;
    phones = Array.from(wrap.querySelectorAll<HTMLElement>('.phone'));
    videos = Array.from(wrap.querySelectorAll<HTMLVideoElement>('video'));
  };

  return {
    name: 'creatives',
    win,
    mesh,
    setProgress(p) {
      uniforms.uP.value = p;
      grab();
      phones.forEach((ph, i) => {
        // staggered rise: all settled by ~40%, then the ads just play;
        // at the end they continue up past the camera — same direction,
        // no pop at the scene boundary
        const e = easeOut(Math.min(1, Math.max(0, (p - i * 0.05) / 0.28)));
        const xo = Math.min(1, Math.max(0, (p - 0.86 - i * 0.03) / 0.11));
        const exit = xo * xo * (3 - 2 * xo);
        const rise = (1 - e) * 120 - exit * 130;
        const tilt = (i - 1) * 4 * (1 - e * 0.4);
        ph.style.transform = `translateY(${rise}vh) rotate(${tilt}deg)`;
      });
    },
    update(t) {
      uniforms.uTime.value = t;
    },
    onEnter() {
      grab();
      if (reducedMotion) return; // posters stay still
      videos.forEach((v) => {
        v.play().catch(() => undefined); // muted + playsinline: allowed
      });
    },
    onExit() {
      videos.forEach((v) => v.pause());
    },
    resize(_vp: Viewport) {},
  };
}
