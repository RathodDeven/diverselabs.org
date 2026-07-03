/**
 * Scene 7 — THE TURN.
 * The stats scene vertically crushes into a single 2px phosphor line (CRT
 * power-off), then the belief line sets on word-by-word via variable-font
 * weight bloom — words gain mass, not opacity.
 */
import {
  fsQuad,
  uni,
  type FilmScene,
  type SceneCtx,
  type Viewport,
} from '../lib';
import { getStrip } from './numbers';

const FRAG = /* glsl */ `
  uniform sampler2D uStrip;
  uniform float uP;
  uniform float uTime;
  varying vec2 vUv;

  const vec3 GREEN = vec3(0.290, 0.871, 0.502);

  void main() {
    float crush = smoothstep(0.0, 0.32, uP);   // scene squashes to a line
    float write = smoothstep(0.40, 1.0, uP);   // sentence phase

    vec3 col = vec3(0.024);

    // the old scene's backdrop, squashing into the center line
    float sy = max(1.0 - crush * 0.998, 0.002);
    float y = 0.5 + (vUv.y - 0.5) / sy;
    if (y > 0.0 && y < 1.0 && crush < 1.0) {
      float bandC = 0.5, bandH = 0.16;
      float inBand = 1.0 - smoothstep(bandH * 0.94, bandH, abs(y - bandC));
      // same drift phase as the numbers scene so the strip doesn't snap
      // sideways at the handoff
      vec2 suv = vec2(fract(vUv.x * 0.5 + 0.35 + uTime * 0.008), (y - (bandC - bandH)) / (2.0 * bandH));
      col = mix(col, texture2D(uStrip, suv).rgb * 0.30 * (1.0 - crush), inBand);
    }

    // the line: blazes at full crush, then dims + sinks to underline the words
    float lineY = mix(0.5, 0.30, write);
    float lineI = crush * (1.0 - write * 0.82);
    float line = exp(-abs(vUv.y - lineY) * mix(150.0, 420.0, crush));
    float bloom = exp(-abs(vUv.y - lineY) * 22.0);
    col += GREEN * (line * 1.4 + bloom * 0.22) * lineI;

    col += filmGrain(vUv, uTime) * 0.04;
    gl_FragColor = vec4(col, 1.0);
  }
`;

export function createTurn(ctx: SceneCtx, win: [number, number]): FilmScene {
  const uniforms = {
    uStrip: uni(getStrip().tex),
    uP: uni(0),
    uTime: uni(0),
  };
  const mesh = fsQuad(FRAG, uniforms);

  let odo: HTMLElement | null = null;
  let words: HTMLElement[] = [];
  let turnEl: HTMLElement | null = null;

  const grab = () => {
    if (!turnEl) {
      turnEl = document.querySelector<HTMLElement>('.film-turn');
      // NB: marker must NOT be data-split — global.css hides [data-split]
      if (turnEl && !turnEl.dataset.turnSplit) {
        turnEl.dataset.turnSplit = '1';
        const text = (turnEl.textContent || '').trim();
        turnEl.textContent = '';
        text.split(/\s+/).forEach((w) => {
          const s = document.createElement('span');
          s.className = 'turn-w';
          s.textContent = w;
          turnEl!.appendChild(s);
          turnEl!.appendChild(document.createTextNode(' '));
        });
      }
      words = Array.from(turnEl?.querySelectorAll<HTMLElement>('.turn-w') ?? []);
    }
    if (!odo) odo = document.getElementById('film-odo');
  };

  return {
    name: 'turn',
    win,
    mesh,
    setProgress(p) {
      grab();
      uniforms.uP.value = p;

      // DOM crush of the odometer block mirrors the shader crush
      const crush = Math.min(1, p / 0.32);
      if (odo) {
        const sy = Math.max(1 - crush, 0.002);
        odo.style.transform = `scaleY(${sy})`;
        odo.style.opacity = String(1 - crush * 0.35);
      }

      // weight bloom: each word 300 -> 640, staggered; tracking tightens
      const write = Math.min(1, Math.max(0, (p - 0.4) / 0.6));
      const n = Math.max(words.length, 1);
      words.forEach((w, i) => {
        const local = Math.min(1, Math.max(0, (write * (n + 2.5) - i) / 2.5));
        const e = local * local * (3 - 2 * local);
        w.style.fontVariationSettings = `'wght' ${Math.round(300 + 340 * e)}`;
        w.style.opacity = String(0.25 + 0.75 * e);
      });
      if (turnEl) turnEl.style.letterSpacing = `${0.04 - 0.05 * write}em`;
    },
    update(t) {
      uniforms.uTime.value = t;
    },
    onExit() {
      if (odo) {
        odo.style.transform = '';
        odo.style.opacity = '';
      }
    },
    resize(_vp: Viewport) {},
  };
}
