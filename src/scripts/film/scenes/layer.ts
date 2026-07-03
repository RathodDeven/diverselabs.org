/**
 * Scene 3 — THE LAYER.
 * "WE LAYER / INTELLIGENCE" set gigantic; the glyphs are windows onto product
 * footage. Scroll slides the word, then zooms ~38x toward the counter of the
 * A in LAYER and passes through it — an iris opens into full-bleed footage.
 * Two-LOD canvas type (word + single letter) keeps edges crisp at depth.
 */
import {
  fsQuad,
  makeCanvasTex,
  typeTexSize,
  fitTextPx,
  uni,
  FONT_DISPLAY,
  MediaTex,
  type CanvasTex,
  type FilmScene,
  type SceneCtx,
  type Viewport,
} from '../lib';

const LINE1 = 'WE LAYER';
const LINE2 = 'INTELLIGENCE';

interface WordLayout {
  /** Center of the A counter, in texture UV (y up). */
  focus: { x: number; y: number };
  /** A glyph bbox in texture UV: center + size. */
  aCenter: { x: number; y: number };
  aSize: { w: number; h: number };
}

function drawWord(c: CanvasRenderingContext2D, w: number, h: number): WordLayout {
  c.clearRect(0, 0, w, h);
  c.textBaseline = 'middle';
  const px = Math.min(
    fitTextPx(c, LINE2, 600, FONT_DISPLAY, w * 0.9),
    fitTextPx(c, LINE1, 600, FONT_DISPLAY, w * 0.9) // line1 shorter; line2 governs
  );
  c.font = `600 ${px}px ${FONT_DISPLAY}`;
  c.fillStyle = '#f4f4f4';
  const gap = px * 0.58;
  const y1 = h / 2 - gap;
  const y2 = h / 2 + gap;
  const w1 = c.measureText(LINE1).width;
  const w2 = c.measureText(LINE2).width;
  c.textAlign = 'left';
  const x1 = (w - w1) / 2;
  const x2 = (w - w2) / 2;
  c.fillText(LINE1, x1, y1);
  c.fillText(LINE2, x2, y2);

  // locate the A in "WE LAYER" (prefix "WE L")
  const prefixW = c.measureText('WE L').width;
  const aW = c.measureText('A').width;
  const aX = x1 + prefixW + aW / 2;
  // the enclosed counter of A sits above the crossbar — above middle
  const counterY = y1 - px * 0.13;
  const toUv = (X: number, Y: number) => ({ x: X / w, y: 1 - Y / h });
  return {
    focus: toUv(aX, counterY),
    aCenter: toUv(aX, y1),
    aSize: { w: aW / w, h: (px * 0.74) / h },
  };
}

/** Hi-res single "A" for the deep zoom. Returns its bbox in this texture's UV. */
function drawLetter(c: CanvasRenderingContext2D, w: number, h: number) {
  c.clearRect(0, 0, w, h);
  c.textAlign = 'center';
  c.textBaseline = 'middle';
  const px = fitTextPx(c, 'A', 600, FONT_DISPLAY, w * 0.72);
  c.font = `600 ${px}px ${FONT_DISPLAY}`;
  c.fillStyle = '#f4f4f4';
  c.fillText('A', w / 2, h / 2);
  return { center: { x: 0.5, y: 0.5 }, size: { w: (c.measureText('A').width) / w, h: (px * 0.74) / h } };
}

/* Hero footage is shared with the wipe scene: when the wipe starts playing
   NudgeFlow, this video pauses and its texture holds the exact frame the
   iris ended on — the "held frame" is real, not a poster jump-cut. */
let heroMedia: MediaTex | null = null;
export function getHeroMedia(): MediaTex {
  if (!heroMedia) {
    heroMedia = MediaTex.fromImage('/film/loops/hero.webp');
    heroMedia.upgradeToVideo('/film/loops/hero.mp4');
  }
  return heroMedia;
}

const FRAG = /* glsl */ `
  uniform sampler2D uWord;
  uniform sampler2D uLetter;
  uniform sampler2D uMedia;
  uniform float uP;
  uniform float uTime;
  uniform float uAspect;
  uniform float uMediaAspect;
  uniform vec2 uFocus;      // A-counter center in word UV
  uniform vec2 uACenter;    // A bbox center in word UV
  uniform vec2 uASize;      // A bbox size in word UV
  uniform vec2 uLetterCenter;
  uniform vec2 uLetterSize;
  varying vec2 vUv;

  void main() {
    // everything completes by 78% — the last stretch HOLDS full-bleed
    // footage so the visitor can actually watch it
    float pPan  = smoothstep(0.00, 0.26, uP);
    float pZoom = smoothstep(0.26, 0.62, uP);
    float pIris = smoothstep(0.60, 0.78, uP);

    // exponential zoom feels like constant approach speed
    float zoom = mix(1.0, 1.10, pPan) * exp(pZoom * 3.65); // 1 -> ~42x
    float pan = mix(0.040, -0.040, pPan) * (1.0 - pZoom);

    vec2 target = mix(vec2(0.5), uFocus, smoothstep(0.0, 0.35, pZoom));
    vec2 wordUv = target + (vUv - 0.5 + vec2(pan, 0.0)) / zoom;

    // word alpha, re-sharpened; swap to hi-res letter once deep enough
    float aWord = texture2D(uWord, wordUv).a;
    vec2 letterUv = uLetterCenter +
      (wordUv - uACenter) * (uLetterSize / max(uASize, vec2(1e-5)));
    float aLetter = texture2D(uLetter, letterUv).a;
    float lodMix = smoothstep(4.0, 7.0, zoom);
    float aRaw = mix(aWord, aLetter, lodMix);
    float glyph = smoothstep(0.42, 0.58, aRaw);

    // footage inside the letterforms; slight push as we approach.
    // Lifted so letterforms read even over dark frames.
    vec2 mUv = coverUv(vUv, uAspect, uMediaAspect);
    mUv = (mUv - 0.5) * (1.0 - 0.10 * pZoom) + 0.5;
    vec3 media = texture2D(uMedia, mUv).rgb * 1.1 + 0.09;

    vec3 outside = vec3(0.024) + filmGrain(vUv, uTime) * 0.05;
    vec3 col = mix(outside, media, glyph);
    // hairline stroke around each glyph so the silhouette always reads
    float edgeLine = smoothstep(0.18, 0.5, aRaw) * (1.0 - smoothstep(0.5, 0.82, aRaw));
    col += vec3(0.9) * edgeLine * 0.5 * (1.0 - pIris);

    // iris: pass through the counterform into full-bleed footage
    float d = length((vUv - 0.5) * vec2(uAspect, 1.0));
    float irisR = pIris * 1.45;
    float inIris = (1.0 - smoothstep(max(irisR - 0.02, 0.0), max(irisR, 1e-4), d)) * step(1e-4, pIris);
    col = mix(col, media, inIris);
    // hot rim on the opening gate
    float rim = exp(-abs(d - irisR) * 60.0) * step(0.001, pIris) * (1.0 - pIris * 0.6);
    col += rim * 0.55;

    col += filmGrain(vUv, uTime * 1.3) * 0.035;
    col *= vig(vUv, 0.4);
    gl_FragColor = vec4(col, 1.0);
  }
`;

export function createLayer(ctx: SceneCtx, win: [number, number]): FilmScene {
  const size = typeTexSize(ctx.vp, 2600);
  let layout: WordLayout | undefined;
  let word: CanvasTex = makeCanvasTex(size.w, size.h);
  word.redraw((c, w, h) => {
    layout = drawWord(c, w, h);
  });
  let letterBox = { center: { x: 0.5, y: 0.5 }, size: { w: 0.5, h: 0.5 } };
  const letter: CanvasTex = makeCanvasTex(2048, 2048);
  letter.redraw((c, w, h) => {
    letterBox = drawLetter(c, w, h);
  });

  const media = getHeroMedia();

  const uniforms = {
    uWord: uni(word.tex),
    uLetter: uni(letter.tex),
    uMedia: uni(media.tex),
    uP: uni(0),
    uTime: uni(0),
    uAspect: uni(ctx.vp.aspect),
    uMediaAspect: uni(media.aspect),
    uFocus: uni([layout!.focus.x, layout!.focus.y]),
    uACenter: uni([layout!.aCenter.x, layout!.aCenter.y]),
    uASize: uni([layout!.aSize.w, layout!.aSize.h]),
    uLetterCenter: uni([letterBox.center.x, letterBox.center.y]),
    uLetterSize: uni([letterBox.size.w, letterBox.size.h]),
  };
  media.onSwap(() => {
    uniforms.uMedia.value = media.tex;
    uniforms.uMediaAspect.value = media.aspect;
  });
  const mesh = fsQuad(FRAG, uniforms);

  const applyLayout = () => {
    if (!layout) return;
    uniforms.uFocus.value = [layout.focus.x, layout.focus.y];
    uniforms.uACenter.value = [layout.aCenter.x, layout.aCenter.y];
    uniforms.uASize.value = [layout.aSize.w, layout.aSize.h];
  };

  return {
    name: 'layer',
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
      word.dispose();
      const s = typeTexSize(vp, 2600);
      word = makeCanvasTex(s.w, s.h);
      word.redraw((c, w, h) => {
        layout = drawWord(c, w, h);
      });
      uniforms.uWord.value = word.tex;
      applyLayout();
    },
    dispose() {
      word.dispose();
      letter.dispose();
      media.dispose();
      heroMedia = null;
    },
  };
}
