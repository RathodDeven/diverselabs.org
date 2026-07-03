/**
 * Scene 10 — THE DOORWAY.
 * An iris opens out of the black onto the CTA panel behind the canvas —
 * the same aperture language the visitor entered through in the WE LAYER
 * zoom (through the counter of the A). White-hot rim, no color: the film
 * ends the way it began, and green stays reserved for approval.
 */
import {
  fsQuad,
  uni,
  type FilmScene,
  type SceneCtx,
  type Viewport,
} from '../lib';

const FRAG = /* glsl */ `
  uniform float uP;
  uniform float uTime;
  uniform float uAspect;
  varying vec2 vUv;

  void main() {
    float e = uP * uP * (3.0 - 2.0 * uP);
    // aperture radius: 0 (closed) -> past the corners (fully open)
    float r = e * 1.6;
    float d = length((vUv - 0.5) * vec2(uAspect, 1.0));

    // opaque black outside the iris, transparent inside
    float outside = smoothstep(max(r - 0.015, 0.0), max(r, 1e-4), d);
    outside = mix(1.0, outside, step(1e-4, uP));

    vec3 col = vec3(0.024);
    col += filmGrain(vUv, uTime) * 0.05;
    col *= vig(vUv, 0.5);

    // white-hot rim on the opening — same as the letterform iris
    float rimA = exp(-abs(d - r) * 90.0) * step(1e-4, uP) * (1.0 - e * 0.75);
    col += vec3(1.0) * rimA * 0.8;

    gl_FragColor = vec4(col, max(outside, rimA));
  }
`;

export function createDoorway(ctx: SceneCtx, win: [number, number]): FilmScene {
  const uniforms = {
    uP: uni(0),
    uTime: uni(0),
    uAspect: uni(ctx.vp.aspect),
  };
  const mesh = fsQuad(FRAG, uniforms);
  let turnEl: HTMLElement | null = null;

  return {
    name: 'doorway',
    win,
    mesh,
    setProgress(p) {
      uniforms.uP.value = p;
      // panel becomes interactive once the iris is wide enough to read
      document.getElementById('film')?.classList.toggle('gate-open', p > 0.5);

      // the belief line rises out ahead of the opening — gone by half-open
      // so it never fights the panel type showing through the aperture
      if (!turnEl) turnEl = document.querySelector<HTMLElement>('.film-turn');
      if (turnEl) {
        const k = Math.min(1, p / 0.5);
        const e = k * k * (3 - 2 * k);
        const rise = e * 0.72 * window.innerHeight;
        turnEl.style.transform = `translate(-50%, calc(-50% - ${rise.toFixed(1)}px))`;
      }
    },
    update(t) {
      uniforms.uTime.value = t;
    },
    onEnter() {
      ctx.setClearAlpha(0); // let the DOM panel show through the iris
    },
    onExit() {
      ctx.setClearAlpha(1);
      document.getElementById('film')?.classList.remove('gate-open');
      if (turnEl) turnEl.style.transform = '';
    },
    resize(vp: Viewport) {
      uniforms.uAspect.value = vp.aspect;
    },
  };
}
