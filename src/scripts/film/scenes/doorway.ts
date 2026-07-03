/**
 * Scene 8 — THE DOORWAY.
 * The green line splits open like a film gate: two black shutters part
 * vertically (canvas turns transparent in the widening slit), revealing the
 * DOM CTA panel that lives *behind* the canvas. Inverse of the CRT crush —
 * the film ends the way it collapsed.
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
  varying vec2 vUv;

  const vec3 GREEN = vec3(0.290, 0.871, 0.502);

  void main() {
    // gate half-height: 0 (closed) -> 0.62 (fully open, past screen edge)
    float e = uP * uP * (3.0 - 2.0 * uP);
    float halfH = e * 0.62;
    float dy = abs(vUv.y - 0.5);

    // shutters: opaque outside the slit, transparent inside
    float shutter = smoothstep(halfH, halfH + 0.003, dy);

    vec3 col = vec3(0.024);
    col += filmGrain(vUv, uTime) * 0.05;
    col *= vig(vUv, 0.5);

    // phosphor edge on each shutter lip
    float lip = exp(-abs(dy - halfH) * 120.0);
    col += GREEN * lip * (0.9 - e * 0.55);
    // before it opens, the resting line glows at center
    float rest = exp(-dy * 300.0) * (1.0 - smoothstep(0.0, 0.08, uP));
    col += GREEN * rest * 1.2;

    // alpha must cover the emissive line too, or the resting line's core is
    // a transparent hairline with the CTA panel peeking through
    float glowA = clamp(lip * (0.9 - e * 0.55) + rest * 1.2, 0.0, 1.0);
    gl_FragColor = vec4(col, max(shutter, glowA));
  }
`;

export function createDoorway(ctx: SceneCtx, win: [number, number]): FilmScene {
  const uniforms = { uP: uni(0), uTime: uni(0) };
  const mesh = fsQuad(FRAG, uniforms);
  let turnEl: HTMLElement | null = null;

  return {
    name: 'doorway',
    win,
    mesh,
    setProgress(p) {
      uniforms.uP.value = p;
      // panel becomes interactive once the gate is wide enough to read
      document.getElementById('film')?.classList.toggle('gate-open', p > 0.55);

      // the belief line stays and rides the top shutter out — it never pops
      if (!turnEl) turnEl = document.querySelector<HTMLElement>('.film-turn');
      if (turnEl) {
        const e = p * p * (3 - 2 * p); // same easing as the shutters
        const rise = e * 0.62 * window.innerHeight;
        turnEl.style.transform = `translate(-50%, calc(-50% - ${rise.toFixed(1)}px))`;
      }
    },
    update(t) {
      uniforms.uTime.value = t;
    },
    onEnter() {
      ctx.setClearAlpha(0); // let the DOM panel show through the slit
    },
    onExit() {
      ctx.setClearAlpha(1);
      document.getElementById('film')?.classList.remove('gate-open');
      if (turnEl) turnEl.style.transform = '';
    },
    resize(_vp: Viewport) {},
  };
}
