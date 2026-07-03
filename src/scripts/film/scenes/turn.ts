/**
 * Scene 9 — THE TURN.
 * The testimonial has scattered to black; the belief line sets on out of
 * the dark, word by word, via variable-font weight bloom — words gain
 * mass, not opacity. It holds, then rides the doorway's iris out.
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

  void main() {
    vec3 col = vec3(0.024);
    // a breath of light gathers behind the words as they gain weight
    float d = length((vUv - 0.5) * vec2(1.5, 1.0));
    float write = smoothstep(0.05, 0.55, uP);
    col += vec3(0.03) * write * (1.0 - smoothstep(0.05, 0.7, d));
    col += filmGrain(vUv, uTime) * 0.04;
    col *= vig(vUv, 0.45);
    gl_FragColor = vec4(col, 1.0);
  }
`;

export function createTurn(ctx: SceneCtx, win: [number, number]): FilmScene {
  const uniforms = {
    uP: uni(0),
    uTime: uni(0),
  };
  const mesh = fsQuad(FRAG, uniforms);

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
  };

  return {
    name: 'turn',
    win,
    mesh,
    setProgress(p) {
      grab();
      uniforms.uP.value = p;

      // weight bloom: each word 300 -> 640, staggered, with a small rise —
      // words gain mass and settle. Completes by ~55%, then the line sits
      // with the visitor and rides the doorway iris out (never pops).
      const write = Math.min(1, Math.max(0, (p - 0.05) / 0.5));
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
    resize(_vp: Viewport) {},
  };
}
