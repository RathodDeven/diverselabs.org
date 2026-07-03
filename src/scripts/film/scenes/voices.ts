/**
 * Scene 8 — IN THEIR WORDS.
 * After the numbers, a human voice: the LinkedIn recommendation lights up
 * word by word as the visitor scrolls (spoken, not faded in), then the
 * author row rises. The turn scene crushes this frame into its green line.
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
    float d = length((vUv - 0.5) * vec2(1.4, 1.0));
    col += vec3(0.026) * (1.0 - smoothstep(0.1, 0.75, d));
    col += filmGrain(vUv, uTime) * 0.05;
    col *= vig(vUv, 0.5);
    gl_FragColor = vec4(col, 1.0);
  }
`;

export function createVoices(ctx: SceneCtx, win: [number, number]): FilmScene {
  const uniforms = { uP: uni(0), uTime: uni(0) };
  const mesh = fsQuad(FRAG, uniforms);

  let root: HTMLElement | null = null;
  let words: HTMLElement[] = [];
  let head: HTMLElement | null = null;
  let author: HTMLElement | null = null;

  const grab = () => {
    if (root) return;
    root = document.getElementById('film-voices');
    if (!root) return;
    const quote = root.querySelector<HTMLElement>('.vq');
    if (quote && !quote.dataset.voiceSplit) {
      quote.dataset.voiceSplit = '1';
      const text = (quote.textContent || '').trim();
      quote.textContent = '';
      text.split(/\s+/).forEach((w) => {
        const s = document.createElement('span');
        s.className = 'vq-w';
        s.textContent = w;
        quote.appendChild(s);
        quote.appendChild(document.createTextNode(' '));
      });
    }
    words = Array.from(root.querySelectorAll<HTMLElement>('.vq-w'));
    head = root.querySelector<HTMLElement>('.voices-head');
    author = root.querySelector<HTMLElement>('.voices-by');
  };

  return {
    name: 'voices',
    win,
    mesh,
    setProgress(p) {
      uniforms.uP.value = p;
      grab();

      // exit: the whole frame scatters like the film's debris — each word
      // flies off on its own deterministic path (no green line, no crush)
      const out = Math.min(1, Math.max(0, (p - 0.8) / 0.2));
      const oe = out * out * (3 - 2 * out);

      if (head) {
        const e = Math.min(1, Math.max(0, p / 0.10));
        const k = e * e * (3 - 2 * e);
        head.style.opacity = String(k * (1 - oe));
        head.style.transform = `translateY(${(1 - k) * 16 - oe * 60}px)`;
      }

      // the quote is spoken: words light up in order with scroll
      const speak = Math.min(1, Math.max(0, (p - 0.06) / 0.5));
      const n = Math.max(words.length, 1);
      words.forEach((w, i) => {
        const local = Math.min(1, Math.max(0, (speak * (n + 4) - i) / 4));
        if (oe > 0) {
          const r = Math.sin(i * 127.1) * 43758.5453;
          const rx = (r - Math.floor(r) - 0.5) * 2;
          const r2 = Math.sin(i * 311.7) * 12543.21;
          const ry = (r2 - Math.floor(r2) - 0.5) * 2;
          w.style.transform =
            `translate(${rx * oe * 160}px, ${(ry - 0.6) * oe * 140}px) ` +
            `rotate(${rx * oe * 14}deg)`;
          w.style.opacity = String((0.14 + 0.86 * local) * (1 - oe));
        } else {
          w.style.transform = '';
          w.style.opacity = String(0.14 + 0.86 * local);
        }
      });

      if (author) {
        const e = Math.min(1, Math.max(0, (p - 0.5) / 0.18));
        const k = e * e * (3 - 2 * e);
        author.style.opacity = String(k * (1 - oe));
        author.style.transform = `translateY(${(1 - k) * 26 + oe * 70}px)`;
      }
    },
    update(t) {
      uniforms.uTime.value = t;
    },
    resize(_vp: Viewport) {},
  };
}
