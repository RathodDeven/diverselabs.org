/**
 * Scene 6 — PROOF III: THE NUMBERS.
 * Colossal odometer stats physically roll and click into place (DOM digit
 * strips scrubbed by scroll). Behind them, every client we've worked with
 * drifts past as rows of logo chips travelling toward the top-left —
 * scroll drives the travel, so the dwell is spent among the companies.
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
    // faint center glow so the stats sit in a pool of light
    float d = length((vUv - 0.5) * vec2(1.4, 1.0));
    col += vec3(0.028) * (1.0 - smoothstep(0.1, 0.75, d));
    col += filmGrain(vUv, uTime) * 0.05;
    col *= vig(vUv, 0.5);
    gl_FragColor = vec4(col, 1.0);
  }
`;

const SPINS = 2; // full 0-9 revolutions before settling

interface OdoDigit {
  el: HTMLElement;
  value: number;
  row: number;
}

/* per-row drift: [start vw, travel vw] — all rows head left (the container's
   -8deg rotation turns that into a bottom-right -> top-left drift) */
const ROW_DRIFT: Array<[number, number]> = [
  [4, -42],
  [-18, -30],
  [-6, -52],
];

export function createNumbers(ctx: SceneCtx, win: [number, number]): FilmScene {
  const uniforms = { uP: uni(0), uTime: uni(0) };
  const mesh = fsQuad(FRAG, uniforms);

  let digits: OdoDigit[] = [];
  let odo: HTMLElement | null = null;
  let logosEl: HTMLElement | null = null;
  let logoRows: HTMLElement[] = [];
  let built = false;
  let odoRise = 0; // merged with the velocity skew in update()

  const build = () => {
    if (built) return;
    odo = document.getElementById('film-odo');
    logosEl = document.getElementById('film-logos');
    logoRows = Array.from(
      document.querySelectorAll<HTMLElement>('#film-logos .logo-row')
    );
    if (!odo) return;
    built = true;
    odo.querySelectorAll<HTMLElement>('[data-odo-val]').forEach((valEl, row) => {
      const value = valEl.dataset.odoVal || '';
      valEl.textContent = '';
      for (const ch of value) {
        if (/\d/.test(ch)) {
          const cell = document.createElement('span');
          cell.className = 'odo-cell';
          const stripEl = document.createElement('span');
          stripEl.className = 'odo-strip';
          for (let d = 0; d <= 10; d++) {
            const s = document.createElement('span');
            s.textContent = String(d % 10);
            stripEl.appendChild(s);
          }
          cell.appendChild(stripEl);
          valEl.appendChild(cell);
          digits.push({ el: stripEl, value: Number(ch), row });
        } else {
          const s = document.createElement('span');
          s.className = 'odo-sym';
          s.textContent = ch;
          valEl.appendChild(s);
        }
      }
    });
  };

  const easeOutBack = (t: number) => {
    const c1 = 0.9;
    const c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  };

  return {
    name: 'numbers',
    win,
    mesh,
    setProgress(p) {
      uniforms.uP.value = p;
      build();

      // the section never pops: it slides in over the first 12% and
      // accelerates out over the last 14%, all scroll-driven
      const ki = Math.min(1, p / 0.12);
      const kIn = ki * ki * (3 - 2 * ki);
      const ko = Math.min(1, Math.max(0, (p - 0.86) / 0.14));
      const kOut = ko * ko * (3 - 2 * ko);

      for (const d of digits) {
        // rolls finish by ~45% — the numbers then hold while logos travel
        const e = Math.min(1, Math.max(0, (p - 0.05 - d.row * 0.06) / 0.26));
        const k = easeOutBack(e); // overshoots just before settling — the "click"
        const pos = Math.max(0, (SPINS * 10 + d.value) * k);
        const off = ((pos % 10) + 10) % 10;
        d.el.style.transform = `translateY(${(-off * 100) / 11}%)`;
      }

      // scroll carries the visitor past every company; on exit the rows
      // keep going, faster — leaving the way they travelled
      logoRows.forEach((row, i) => {
        const [start, travel] = ROW_DRIFT[i % ROW_DRIFT.length];
        const x = start + 10 * (1 - kIn) + travel * p - 30 * kOut;
        row.style.transform = `translate3d(${x}vw, 0, 0)`;
      });
      if (logosEl) logosEl.style.opacity = String(0.4 * kIn * (1 - kOut));

      // the stats rise in with the rolls and lift away at the end
      odoRise = (1 - kIn) * 12 - kOut * 34;
      if (odo) odo.style.opacity = String(kIn * (1 - kOut));
    },
    update(t) {
      uniforms.uTime.value = t;
      const v = Math.max(-1, Math.min(1, ctx.vel() / 3000));
      if (odo)
        odo.style.transform =
          `translateY(${odoRise.toFixed(2)}vh) skewY(${v * 2.2}deg) ` +
          `scaleY(${1 + Math.abs(v) * 0.04})`;
    },
    onExit() {
      if (odo) {
        odo.style.transform = '';
        odo.style.opacity = '';
      }
      if (logosEl) logosEl.style.opacity = '';
    },
    resize(_vp: Viewport) {},
    dispose() {
      digits = [];
    },
  };
}
