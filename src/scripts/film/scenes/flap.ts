/**
 * Scene 5 — PROOF II: DRAFTED -> APPROVED.
 * CRM footage refracts through huge outlined letters. A phosphor-green
 * scanline descends with scroll; as it passes, each cell flips split-flap
 * style from DRAFTED to APPROVED (an 8th cell flaps open from nothing).
 * The green is the first color on the page: green = a human said yes.
 */
import {
  fsQuad,
  makeCanvasTex,
  uni,
  FONT_DISPLAY,
  MediaTex,
  type CanvasTex,
  type FilmScene,
  type SceneCtx,
  type Viewport,
} from '../lib';

const WORD_A = 'DRAFTED'; // 7 letters -> right-pad to 8 cells
const WORD_B = 'APPROVED'; // 8 letters
const CELLS = 8;
const ROW_W = 0.88; // fraction of width the row spans
const ROW_H = 0.30; // fraction of height a cell spans (glyph box)

function drawFlapWord(word: string) {
  return (c: CanvasRenderingContext2D, w: number, h: number) => {
    c.clearRect(0, 0, w, h);
    c.textAlign = 'center';
    c.textBaseline = 'middle';
    const cellW = (w * ROW_W) / CELLS;
    const x0 = (w * (1 - ROW_W)) / 2;
    const px = cellW * 1.2; // letters dominate the frame
    c.font = `600 ${px}px ${FONT_DISPLAY}`;
    c.lineWidth = Math.max(2, px * 0.035);
    c.strokeStyle = '#f4f4f4';
    for (let i = 0; i < word.length && i < CELLS; i++) {
      const cx = x0 + cellW * (i + 0.5);
      c.strokeText(word[i], cx, h / 2);
    }
  };
}

const FRAG = /* glsl */ `
  uniform sampler2D uWordA;
  uniform sampler2D uWordB;
  uniform sampler2D uMedia;
  uniform float uP;
  uniform float uTime;
  uniform float uAspect;
  uniform float uMediaAspect;
  varying vec2 vUv;

  const float CELLS = 8.0;
  const float ROW_W = 0.88;
  const float ROW_H = 0.30;
  const vec3 GREEN = vec3(0.290, 0.871, 0.502); // #4ade80

  /* flip timing for cell i: staggered left->right across mid-scene */
  float flipT(float i) {
    return clamp((uP - (0.30 + i * 0.052)) / 0.15, 0.0, 1.0);
  }

  /* sample a word texture through the split-flap fold of its cell */
  float flapAlpha(vec2 uv, float t, out float isB, out float fold) {
    isB = step(0.5, t);
    // fold: cells squash to 0 height at t=0.5 and reopen
    float sy = abs(cos(3.14159265 * t));
    fold = 1.0 - sy;
    float y = 0.5 + (uv.y - 0.5) / max(sy, 1e-3);
    float inRow = step(abs(y - 0.5), ROW_H); // generous vertical clip
    vec2 suv = vec2(uv.x, y);
    float a = mix(texture2D(uWordA, suv).a, texture2D(uWordB, suv).a, isB);
    return a * inRow;
  }

  void main() {
    // which cell (in row space)?
    float rx = (vUv.x - (1.0 - ROW_W) * 0.5) / ROW_W;
    float cell = floor(rx * CELLS);
    bool inRowX = rx >= 0.0 && rx < 1.0;
    float t = inRowX ? flipT(cell) : 0.0;

    float isB, fold;
    float a = flapAlpha(vUv, t, isB, fold);

    // scanline position: sweeps top -> bottom across the scene
    float scanY = 1.0 - (uP * 1.5 - 0.1);
    float scan = exp(-abs(vUv.y - scanY) * 90.0);

    // media refracted by the letter field: cheap gradient of alpha
    float e = 0.004;
    float ax = texture2D(uWordA, vUv + vec2(e, 0.0)).a - texture2D(uWordA, vUv - vec2(e, 0.0)).a;
    float ay = texture2D(uWordA, vUv + vec2(0.0, e)).a - texture2D(uWordA, vUv - vec2(0.0, e)).a;
    vec2 mUv = coverUv(vUv, uAspect, uMediaAspect) + vec2(ax, ay) * 0.045;
    vec3 media = texture2D(uMedia, mUv).rgb * 0.62; // graded dark, brand-side

    vec3 letter = mix(vec3(0.956), GREEN, isB);
    vec3 col = media;
    col = mix(col, letter, a * 0.92);
    // white-hot crease while a cell folds
    col += vec3(1.0) * fold * a * 0.6;
    // the scanline itself
    col += GREEN * scan * 0.75;

    col += filmGrain(vUv, uTime) * 0.045;
    col *= vig(vUv, 0.45);
    gl_FragColor = vec4(col, 1.0);
  }
`;

export function createFlap(ctx: SceneCtx, win: [number, number]): FilmScene {
  const texH = Math.round(2048 / ctx.vp.aspect);
  let wordA: CanvasTex = makeCanvasTex(2048, texH, drawFlapWord(WORD_A));
  let wordB: CanvasTex = makeCanvasTex(2048, texH, drawFlapWord(WORD_B));

  const media = MediaTex.fromImage('/film/loops/crm.webp');
  media.upgradeToVideo('/film/loops/crm.mp4');

  const uniforms = {
    uWordA: uni(wordA.tex),
    uWordB: uni(wordB.tex),
    uMedia: uni(media.tex),
    uP: uni(0),
    uTime: uni(0),
    uAspect: uni(ctx.vp.aspect),
    uMediaAspect: uni(media.aspect),
  };
  media.onSwap = () => {
    uniforms.uMedia.value = media.tex;
    uniforms.uMediaAspect.value = media.aspect;
  };
  const mesh = fsQuad(FRAG, uniforms);

  return {
    name: 'proof-approved',
    win,
    mesh,
    setProgress(p) {
      uniforms.uP.value = p;
    },
    update(t) {
      uniforms.uTime.value = t;
    },
    onEnter() {
      media.play();
    },
    onExit() {
      media.pause();
    },
    resize(vp: Viewport) {
      uniforms.uAspect.value = vp.aspect;
      const hh = Math.round(2048 / vp.aspect);
      wordA.dispose();
      wordB.dispose();
      wordA = makeCanvasTex(2048, hh, drawFlapWord(WORD_A));
      wordB = makeCanvasTex(2048, hh, drawFlapWord(WORD_B));
      uniforms.uWordA.value = wordA.tex;
      uniforms.uWordB.value = wordB.tex;
    },
    dispose() {
      wordA.dispose();
      wordB.dispose();
      media.dispose();
    },
  };
}
