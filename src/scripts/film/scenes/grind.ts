/**
 * Scene 1 — THE GRIND.
 * One viewport-filling "AGAIN." — every few % of scroll stamps another copy
 * onto the stack with an ink-impact kick. Copies land offset, progressively
 * greyer; the stack tightens and buckles until the frame is a moiré wall.
 */
import gsap from 'gsap';
import * as THREE from 'three';
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

export const WORD = 'AGAIN.';
/** 5 AGAINs land one at a time, then the 6th stamp is the turn: ENOUGH. */
export const MAX_STAMPS = 6;
const SHOUT = 'ENOUGH.';

/* Deterministic per-stamp jitter so scrubbing backwards replays exactly.
   Stamp 0 is the first paint — it lands dead-center, unjittered. */
function jitter(i: number) {
  if (i === 0) return { dx: 0, dy: 0, rot: 0, scale: 1 };
  const r = (n: number) => {
    const x = Math.sin(i * 127.1 + n * 311.7) * 43758.5453;
    return x - Math.floor(x);
  };
  return {
    dx: (r(1) - 0.5) * 0.16, // fraction of width
    dy: (r(2) - 0.5) * 0.55, // fraction of height
    rot: (r(3) - 0.5) * 4.5, // degrees
    scale: 0.96 + r(4) * 0.1,
  };
}

/** Draws `count` stamps. Shared with scene 2, which needs the full wall.
    Stamps 1-8 are AGAIN., each annotated with a real micro-task; stamp 9
    slams ENOUGH. dead-center over the buckled wall — the turn of the film. */
export function drawWall(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  count: number
) {
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = '#060606';
  ctx.fillRect(0, 0, w, h);
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const basePx = fitTextPx(ctx, WORD, 600, FONT_DISPLAY, w * 0.92);
  const shout = count >= MAX_STAMPS;
  const againCount = Math.min(count, MAX_STAMPS - 1);
  // the stack buckles: everything compresses slightly as copies land
  const squeeze = 1 - (againCount - 1) * 0.012;

  for (let i = 0; i < againCount; i++) {
    const j = jitter(i);
    const age = againCount - 1 - i; // 0 = newest
    let shade = Math.max(0x6b, 0xf4 - age * 0x14);
    if (shout) shade = Math.min(shade, 0x52); // the wall recedes under ENOUGH.
    ctx.save();
    ctx.translate(w / 2 + j.dx * w, h / 2 + j.dy * h * squeeze);
    ctx.rotate((j.rot * Math.PI) / 180);
    ctx.scale(j.scale, j.scale * squeeze);
    ctx.font = `600 ${basePx}px ${FONT_DISPLAY}`;
    const hex = shade.toString(16).padStart(2, '0');
    ctx.fillStyle = `#${hex}${hex}${hex}`;
    ctx.fillText(WORD, 0, 0);
    ctx.restore();
  }

  if (shout) {
    const px = fitTextPx(ctx, SHOUT, 600, FONT_DISPLAY, w * 0.74);
    ctx.save();
    ctx.translate(w / 2, h / 2);
    ctx.font = `600 ${px}px ${FONT_DISPLAY}`;
    // hard shadow so it detaches from the wall behind it
    ctx.shadowColor = 'rgba(6, 6, 6, 0.9)';
    ctx.shadowBlur = Math.max(24, w * 0.03);
    ctx.fillStyle = '#ffffff';
    ctx.fillText(SHOUT, 0, 0);
    ctx.restore();
  }
}

const FRAG = /* glsl */ `
  uniform sampler2D uTex;
  uniform float uImpact;
  uniform float uTime;
  uniform float uP;
  varying vec2 vUv;

  void main() {
    // impact punch: minute zoom kick around center
    vec2 uv = (vUv - 0.5) * (1.0 - uImpact * 0.018) + 0.5;
    vec3 col = texture2D(uTex, uv).rgb;
    // exposure kick on impact
    col *= 1.0 + uImpact * 0.5;
    // grain, heavier during impact
    col += filmGrain(vUv, uTime) * (0.05 + uImpact * 0.10);
    col *= vig(vUv, 0.55);
    gl_FragColor = vec4(col, 1.0);
  }
`;

export function createGrind(ctx: SceneCtx, win: [number, number]): FilmScene {
  // no mipmaps: this canvas is redrawn per stamp and sampled ~1:1 — mipmap
  // regeneration per stamp is the difference between a kick and a hitch
  const size = typeTexSize(ctx.vp, 2048);
  let wall: CanvasTex = makeCanvasTex(size.w, size.h, undefined, { mipmaps: false });
  wall.redraw((c, w, h) => drawWall(c, w, h, 1));

  const uniforms = {
    uTex: uni(wall.tex),
    uImpact: uni(0),
    uTime: uni(0),
    uP: uni(0),
  };
  const mesh = fsQuad(FRAG, uniforms);
  let count = 1;

  const stamp = (n: number) => {
    count = n;
    wall.redraw((c, w, h) => drawWall(c, w, h, n));
  };

  return {
    name: 'grind',
    win,
    mesh,
    setProgress(p) {
      uniforms.uP.value = p;
      // stamps land on a deterministic ladder across the first 72% of the
      // scene; ENOUGH. slams as the final stamp and HOLDS — the visitor sits
      // with the shout before the wall shatters into the thesis
      const target = 1 + Math.min(MAX_STAMPS - 1, Math.floor((p / 0.72) * (MAX_STAMPS - 1)));
      if (target !== count) {
        const grew = target > count;
        const isShout = grew && target === MAX_STAMPS;
        stamp(target);
        if (grew) {
          gsap.killTweensOf(uniforms.uImpact);
          uniforms.uImpact.value = isShout ? 1.6 : 1;
          gsap.to(uniforms.uImpact, {
            value: 0,
            duration: isShout ? 0.7 : 0.42,
            ease: 'power3.out',
          });
        }
      }
    },
    update(t) {
      uniforms.uTime.value = t;
    },
    resize(vp: Viewport) {
      wall.dispose();
      const s = typeTexSize(vp, 2048);
      wall = makeCanvasTex(s.w, s.h, undefined, { mipmaps: false });
      wall.redraw((c, w, h) => drawWall(c, w, h, count));
      uniforms.uTex.value = wall.tex;
    },
    dispose() {
      wall.dispose();
    },
  };
}
