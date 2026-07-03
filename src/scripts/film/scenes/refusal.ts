/**
 * Scene 2 — THE REFUSAL.
 * The finished AGAIN-wall shatters into grid cells that fly apart; the debris
 * recondenses into the thesis, holds, then the thesis itself shatters and
 * reforms into the answer — one belief morphing into what we do about it.
 * One shader, three type textures, fully reversible on scrub.
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
import { drawWall, MAX_STAMPS } from './grind';

export const THESIS_L1 = 'Machines should do';
export const THESIS_L2 = 'the machine work.';
export const ANSWER = "So that's what we build.";

function drawThesis(c: CanvasRenderingContext2D, w: number, h: number) {
  c.clearRect(0, 0, w, h);
  c.fillStyle = '#060606';
  c.fillRect(0, 0, w, h);
  c.textAlign = 'center';
  c.textBaseline = 'middle';
  const px = Math.min(
    fitTextPx(c, THESIS_L1, 500, FONT_DISPLAY, w * 0.82),
    fitTextPx(c, THESIS_L2, 500, FONT_DISPLAY, w * 0.82)
  );
  c.font = `500 ${px}px ${FONT_DISPLAY}`;
  c.fillStyle = '#f4f4f4';
  const gap = px * 0.62;
  c.fillText(THESIS_L1, w / 2, h / 2 - gap);
  c.fillText(THESIS_L2, w / 2, h / 2 + gap);
}

function drawAnswer(c: CanvasRenderingContext2D, w: number, h: number) {
  c.clearRect(0, 0, w, h);
  c.fillStyle = '#060606';
  c.fillRect(0, 0, w, h);
  c.textAlign = 'center';
  c.textBaseline = 'middle';
  const px = fitTextPx(c, ANSWER, 500, FONT_DISPLAY, w * 0.78);
  c.font = `500 ${px}px ${FONT_DISPLAY}`;
  c.fillStyle = '#f4f4f4';
  c.fillText(ANSWER, w / 2, h / 2);
}

const FRAG = /* glsl */ `
  uniform sampler2D uWall;
  uniform sampler2D uThesis;
  uniform sampler2D uAnswer;
  uniform vec2 uGrid;
  uniform float uP;
  uniform float uTime;
  varying vec2 vUv;

  /* Sample tex as flying grid debris.
     dir: +1 => cells explode outward as k 0->1
     dir: -1 => cells assemble inward as k 1->0 */
  vec4 debris(sampler2D tex, vec2 uv, vec2 grid, float k, float seedSalt) {
    vec2 cellId = floor(uv * grid);
    float r = hash12(cellId + seedSalt);
    float r2 = hash12(cellId * 1.7 + seedSalt + 11.0);
    // per-cell start time: cells don't all leave at once
    float local = clamp((k - r * 0.45) / 0.55, 0.0, 1.0);
    float e = local * local * (3.0 - 2.0 * local); // smoothstep

    // fly direction: away from center, salted per-cell
    vec2 cellCenter = (cellId + 0.5) / grid;
    vec2 away = cellCenter - 0.5;
    vec2 rnd = vec2(r - 0.5, r2 - 0.5);
    vec2 dir = normalize(away + rnd * 0.9 + 1e-4);
    float dist = e * (0.18 + r * 0.38);

    // spin + shrink within the cell as it departs — fragments stay visible
    // most of the flight so the mid-transition reads as a storm, not a void
    float shrink = 1.0 - e * 0.62;
    float ang = (r - 0.5) * e * 3.2;
    vec2 local2 = fract(uv * grid) - 0.5;
    float ca = cos(ang), sa = sin(ang);
    local2 = mat2(ca, -sa, sa, ca) * local2;
    vec2 srcUv = (cellId + 0.5 + local2 / max(shrink, 0.02)) / grid - dir * dist;

    // outside its own cell content -> transparent
    float inCell = step(abs(local2.x / max(shrink, 0.02)), 0.5) *
                   step(abs(local2.y / max(shrink, 0.02)), 0.5);
    vec4 s = texture2D(tex, srcUv);
    float lum = max(max(s.r, s.g), s.b);
    // fragments stay bright mid-flight but MUST hit zero at full departure,
    // or fully-departed fields ghost over the adjacent scenes' clean frames
    float fade = (1.0 - e * 0.55) * (1.0 - smoothstep(0.75, 1.0, e));
    return vec4(s.rgb, lum * inCell * fade);
  }

  void main() {
    // beat 1: wall departs, thesis streams in (overlapping storms)
    float kOut  = smoothstep(0.0, 0.34, uP);
    float kIn1  = 1.0 - smoothstep(0.08, 0.42, uP);
    // beat 2: thesis holds until 55%, then shatters into the answer
    float kOut1 = smoothstep(0.55, 0.74, uP);
    float kIn2  = 1.0 - smoothstep(0.60, 0.90, uP);

    vec4 wallBit = debris(uWall, vUv, uGrid, kOut, 0.0);

    // sentences assemble left-to-right: cells further right lag the front
    float xLag = (floor(vUv.x * uGrid.x) / uGrid.x) * 0.30;
    float kThesis = clamp(kIn1 + xLag * kIn1 + kOut1, 0.0, 1.0);
    vec4 thesisBit = debris(uThesis, vUv, uGrid * 1.35, kThesis, 7.0);
    float kAns = clamp(kIn2 + xLag * kIn2, 0.0, 1.0);
    vec4 ansBit = debris(uAnswer, vUv, uGrid * 1.35, kAns, 13.0);

    vec3 col = vec3(0.024);
    col = mix(col, wallBit.rgb, wallBit.a);
    col = mix(col, thesisBit.rgb, thesisBit.a);
    col = mix(col, ansBit.rgb, ansBit.a);
    col += filmGrain(vUv, uTime) * 0.05;
    col *= vig(vUv, 0.5);
    gl_FragColor = vec4(col, 1.0);
  }
`;

export function createRefusal(ctx: SceneCtx, win: [number, number]): FilmScene {
  const size = typeTexSize(ctx.vp, 2048);
  let wallTex: CanvasTex = makeCanvasTex(size.w, size.h, (c, w, hh) =>
    drawWall(c, w, hh, MAX_STAMPS)
  );
  let thesisTex: CanvasTex = makeCanvasTex(size.w, size.h, drawThesis);
  let answerTex: CanvasTex = makeCanvasTex(size.w, size.h, drawAnswer);

  const uniforms = {
    uWall: uni(wallTex.tex),
    uThesis: uni(thesisTex.tex),
    uAnswer: uni(answerTex.tex),
    uGrid: uni([46, 26]),
    uP: uni(0),
    uTime: uni(0),
  };
  const mesh = fsQuad(FRAG, uniforms);

  return {
    name: 'refusal',
    win,
    mesh,
    setProgress(p) {
      uniforms.uP.value = p;
    },
    update(t) {
      uniforms.uTime.value = t;
    },
    resize(vp: Viewport) {
      const s = typeTexSize(vp, 2048);
      wallTex.dispose();
      thesisTex.dispose();
      answerTex.dispose();
      wallTex = makeCanvasTex(s.w, s.h, (c, w, x) => drawWall(c, w, x, MAX_STAMPS));
      thesisTex = makeCanvasTex(s.w, s.h, drawThesis);
      answerTex = makeCanvasTex(s.w, s.h, drawAnswer);
      uniforms.uWall.value = wallTex.tex;
      uniforms.uThesis.value = thesisTex.tex;
      uniforms.uAnswer.value = answerTex.tex;
    },
    dispose() {
      wallTex.dispose();
      thesisTex.dispose();
      answerTex.dispose();
    },
  };
}
