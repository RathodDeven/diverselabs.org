/**
 * Scene 4 — THE BRIDGE.
 * Its own beat between the promise and the proof: the held hero frame
 * slides up and away, "Now watch them work." condenses out of debris
 * (the film's established type language), holds, then scatters as the
 * proof reel takes over on black.
 */
import {
  fsQuad,
  makeCanvasTex,
  typeTexSize,
  fitTextPx,
  uni,
  FONT_DISPLAY,
  type CanvasTex,
  type FilmScene,
  type SceneCtx,
  type Viewport,
} from '../lib';
import { getHeroMedia } from './layer';

const LINE = 'Now watch them work.';

function drawLine(c: CanvasRenderingContext2D, w: number, h: number) {
  c.clearRect(0, 0, w, h);
  c.fillStyle = '#060606';
  c.fillRect(0, 0, w, h);
  c.textAlign = 'center';
  c.textBaseline = 'middle';
  const px = fitTextPx(c, LINE, 500, FONT_DISPLAY, w * 0.76);
  c.font = `500 ${px}px ${FONT_DISPLAY}`;
  c.fillStyle = '#f4f4f4';
  c.fillText(LINE, w / 2, h / 2);
}

const FRAG = /* glsl */ `
  uniform sampler2D uHero;
  uniform sampler2D uText;
  uniform float uP;
  uniform float uTime;
  uniform float uAspect;
  uniform float uHeroAspect;
  uniform vec2 uGrid;
  varying vec2 vUv;

  vec4 debris(sampler2D tex, vec2 uv, vec2 grid, float k, float seedSalt) {
    vec2 cellId = floor(uv * grid);
    float r = hash12(cellId + seedSalt);
    float r2 = hash12(cellId * 1.7 + seedSalt + 11.0);
    float local = clamp((k - r * 0.45) / 0.55, 0.0, 1.0);
    float e = local * local * (3.0 - 2.0 * local);
    vec2 cellCenter = (cellId + 0.5) / grid;
    vec2 dir = normalize(cellCenter - 0.5 + vec2(r - 0.5, r2 - 0.5) * 0.9 + 1e-4);
    float dist = e * (0.18 + r * 0.38);
    float shrink = 1.0 - e * 0.62;
    float ang = (r - 0.5) * e * 3.2;
    vec2 local2 = fract(uv * grid) - 0.5;
    float ca = cos(ang), sa = sin(ang);
    local2 = mat2(ca, -sa, sa, ca) * local2;
    vec2 srcUv = (cellId + 0.5 + local2 / max(shrink, 0.02)) / grid - dir * dist;
    float inCell = step(abs(local2.x / max(shrink, 0.02)), 0.5) *
                   step(abs(local2.y / max(shrink, 0.02)), 0.5);
    vec4 s = texture2D(tex, srcUv);
    float lum = max(max(s.r, s.g), s.b);
    float fade = (1.0 - e * 0.55) * (1.0 - smoothstep(0.75, 1.0, e));
    return vec4(s.rgb, lum * inCell * fade);
  }

  void main() {
    // the held hero frame rides up and out of the world
    float lift = smoothstep(0.0, 0.30, uP);
    // the line condenses, holds, then scatters at the very end
    float kIn  = 1.0 - smoothstep(0.20, 0.52, uP);
    float kOut = smoothstep(0.84, 1.0, uP);

    vec3 col = vec3(0.024);

    vec2 pUv = vec2(vUv.x, vUv.y - lift * 1.05);
    if (pUv.y >= 0.0 && pUv.y <= 1.0 && lift < 1.0) {
      vec3 hero = texture2D(uHero, coverUv(pUv, uAspect, uHeroAspect)).rgb;
      col = mix(col, hero, 1.0);
    }

    float xLag = (floor(vUv.x * uGrid.x) / uGrid.x) * 0.30;
    float k = clamp(kIn + xLag * kIn + kOut, 0.0, 1.0);
    vec4 line = debris(uText, vUv, uGrid, k, 23.0);
    col = mix(col, line.rgb, line.a);

    col += filmGrain(vUv, uTime) * 0.05;
    col *= vig(vUv, 0.5);
    gl_FragColor = vec4(col, 1.0);
  }
`;

export function createBridge(ctx: SceneCtx, win: [number, number]): FilmScene {
  const size = typeTexSize(ctx.vp, 2048);
  let text: CanvasTex = makeCanvasTex(size.w, size.h, drawLine);
  const hero = getHeroMedia();

  const uniforms = {
    uHero: uni(hero.tex),
    uText: uni(text.tex),
    uP: uni(0),
    uTime: uni(0),
    uAspect: uni(ctx.vp.aspect),
    uHeroAspect: uni(hero.aspect),
    uGrid: uni([46, 26]),
  };
  hero.onSwap(() => {
    uniforms.uHero.value = hero.tex;
    uniforms.uHeroAspect.value = hero.aspect;
  });
  const mesh = fsQuad(FRAG, uniforms);

  return {
    name: 'bridge',
    win,
    mesh,
    setProgress(p) {
      uniforms.uP.value = p;
    },
    update(t) {
      uniforms.uTime.value = t;
    },
    resize(vp: Viewport) {
      uniforms.uAspect.value = vp.aspect;
      text.dispose();
      const s = typeTexSize(vp, 2048);
      text = makeCanvasTex(s.w, s.h, drawLine);
      uniforms.uText.value = text.tex;
    },
    dispose() {
      text.dispose();
    },
  };
}
