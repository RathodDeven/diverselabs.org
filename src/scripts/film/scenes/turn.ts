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

const FRAG = /* glsl */ `
  uniform float uP;
  uniform float uTime;
  varying vec2 vUv;

  const vec3 GREEN = vec3(0.290, 0.871, 0.502);

  void main() {
    float crush = smoothstep(0.0, 0.25, uP);   // scene squashes to a line
    float write = smoothstep(0.30, 0.68, uP);  // sentence sets on, then HOLDS

    vec3 col = vec3(0.024);

    // the line: blazes at full crush, dims + sinks to underline the words,
    // then glides back to center at the very end — exactly where the
    // doorway's resting line lives, so the handoff is seamless
    float endBack = smoothstep(0.86, 1.0, uP);
    float lineY = mix(mix(0.5, 0.30, write), 0.5, endBack);
    float lineI = crush * (1.0 - write * 0.75) + endBack * 0.45;
    float line = exp(-abs(vUv.y - lineY) * mix(150.0, 420.0, crush));
    float bloom = exp(-abs(vUv.y - lineY) * 22.0);
    col += GREEN * (line * 1.4 + bloom * 0.22) * lineI;

    col += filmGrain(vUv, uTime) * 0.04;
    gl_FragColor = vec4(col, 1.0);
  }
`;

export function createTurn(ctx: SceneCtx, win: [number, number]): FilmScene {
  const uniforms = {
    uP: uni(0),
    uTime: uni(0),
  };
  const mesh = fsQuad(FRAG, uniforms);

  let voices: HTMLElement | null = null;
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
    if (!voices) voices = document.getElementById('film-voices');
  };

  return {
    name: 'turn',
    win,
    mesh,
    setProgress(p) {
      grab();
      uniforms.uP.value = p;

      // DOM crush: the testimonial frame squashes into the green line,
      // mirroring the shader
      const crush = Math.min(1, p / 0.25);
      const sy = Math.max(1 - crush, 0.002);
      if (voices) {
        voices.style.transform = `scaleY(${sy})`;
        voices.style.opacity = String(1 - crush * 0.4);
      }

      // weight bloom: each word 300 -> 640, staggered, with a small rise —
      // words gain mass and settle. Completes by 68%, then the line sits
      // with the visitor for the rest of the scene (and rides the doorway
      // shutter out instead of vanishing).
      const write = Math.min(1, Math.max(0, (p - 0.3) / 0.38));
      const n = Math.max(words.length, 1);
      words.forEach((w, i) => {
        const local = Math.min(1, Math.max(0, (write * (n + 2.5) - i) / 2.5));
        const e = local * local * (3 - 2 * local);
        w.style.fontVariationSettings = `'wght' ${Math.round(300 + 340 * e)}`;
        w.style.opacity = String(0.22 + 0.78 * e);
        w.style.transform = `translateY(${(1 - e) * 0.45}em)`;
      });
      if (turnEl) {
        turnEl.style.letterSpacing = `${0.04 - 0.05 * write}em`;
        turnEl.style.transform = ''; // reclaim from the doorway's ride-out
      }
    },
    update(t) {
      uniforms.uTime.value = t;
    },
    onExit() {
      if (voices) {
        voices.style.transform = '';
        voices.style.opacity = '';
      }
    },
    resize(_vp: Viewport) {},
  };
}
