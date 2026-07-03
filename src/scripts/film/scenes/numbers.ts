/**
 * Scene 6 — PROOF III: THE NUMBERS.
 * Colossal odometer stats physically roll and click into place (DOM digit
 * strips scrubbed by scroll). Behind them, the client logos drift as one
 * grayscale filmstrip; scroll velocity shears the whole scene.
 */
import * as THREE from 'three';
import {
  fsQuad,
  makeCanvasTex,
  uni,
  type CanvasTex,
  type FilmScene,
  type SceneCtx,
  type Viewport,
} from '../lib';

const LOGOS = [
  'clickpe', 'scaleup', 'ad360', 'digitalkalakari', 'mezh_studio', 'bloomerstv',
  'handprotocol', 'danz', 'interality', 'paiso', 'vikram_enterprise', 'vashi',
  'landboard', 'celo', 'lens', 'livepeer',
].map((n) => `/companies/${n}.jpeg`);

/* One shared filmstrip texture; scene 7 crushes the same strip. */
let strip: CanvasTex | null = null;
export function getStrip(): CanvasTex {
  if (strip) return strip;
  strip = makeCanvasTex(4096, 256, (c, w, h) => {
    c.fillStyle = '#0a0a0a';
    c.fillRect(0, 0, w, h);
  });
  const slot = 4096 / LOGOS.length;
  LOGOS.forEach((url, i) => {
    const img = new Image();
    img.onload = () => {
      if (!strip) return;
      const { ctx, canvas, tex } = strip;
      ctx.save();
      ctx.filter = 'grayscale(1) brightness(0.95)';
      const pad = 26;
      const size = Math.min(slot - pad, canvas.height - pad);
      ctx.drawImage(img, i * slot + (slot - size) / 2, (canvas.height - size) / 2, size, size);
      ctx.restore();
      // film sprocket holes between slots
      ctx.fillStyle = '#060606';
      ctx.fillRect(i * slot - 3, 0, 6, canvas.height);
      tex.needsUpdate = true;
    };
    img.src = url;
  });
  strip.tex.wrapS = THREE.RepeatWrapping;
  return strip;
}

const FRAG = /* glsl */ `
  uniform sampler2D uStrip;
  uniform float uP;
  uniform float uTime;
  uniform float uVel;
  varying vec2 vUv;

  void main() {
    vec3 col = vec3(0.024);

    // filmstrip band across the middle: SCROLL drives the strip, so the
    // scene's dwell is spent travelling past every company we've worked with
    float bandC = 0.5;
    float bandH = 0.20;
    float inBand = 1.0 - smoothstep(bandH * 0.94, bandH, abs(vUv.y - bandC));
    if (inBand > 0.0) {
      vec2 suv;
      suv.y = (vUv.y - (bandC - bandH)) / (2.0 * bandH);
      suv.x = fract(vUv.x * 0.45 + uP * 0.85 + uTime * 0.004
                    + (vUv.y - 0.5) * uVel * 0.10); // velocity shear
      vec3 s = texture2D(uStrip, suv).rgb;
      col = mix(col, s * 0.5, inBand);
    }

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

export function createNumbers(ctx: SceneCtx, win: [number, number]): FilmScene {
  const uniforms = {
    uStrip: uni(getStrip().tex),
    uP: uni(0),
    uTime: uni(0),
    uVel: uni(0),
  };
  const mesh = fsQuad(FRAG, uniforms);

  let digits: OdoDigit[] = [];
  let odo: HTMLElement | null = null;
  let built = false;

  const build = () => {
    if (built) return;
    odo = document.getElementById('film-odo');
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
      for (const d of digits) {
        // rolls finish by ~45% — the numbers then hold while logos travel
        const e = Math.min(1, Math.max(0, (p - 0.05 - d.row * 0.06) / 0.28));
        const k = easeOutBack(e); // overshoots just before settling — the "click"
        const pos = Math.max(0, (SPINS * 10 + d.value) * k);
        const off = ((pos % 10) + 10) % 10;
        // percentage of the strip's own height: one step is exactly one of
        // its 11 rows, regardless of the row's font-size/height in em
        d.el.style.transform = `translateY(${(-off * 100) / 11}%)`;
      }
    },
    update(t) {
      uniforms.uTime.value = t;
      const v = Math.max(-1, Math.min(1, ctx.vel() / 3000));
      uniforms.uVel.value = v;
      if (odo) odo.style.transform = `skewY(${v * 2.2}deg) scaleY(${1 + Math.abs(v) * 0.04})`;
    },
    onExit() {
      if (odo) odo.style.transform = '';
    },
    resize(_vp: Viewport) {},
    dispose() {
      digits = [];
    },
  };
}
