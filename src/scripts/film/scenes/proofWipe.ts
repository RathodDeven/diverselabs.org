/**
 * Scene 4 — PROOF I: NUDGEFLOW.
 * A squeegee wipe drags left->right 1:1 with scroll: ahead of the edge the
 * held hero frame, behind it the NudgeFlow loop. At the edge: directional
 * smear + slight RGB split, like ink pulled across the frame.
 */
import {
  fsQuad,
  uni,
  MediaTex,
  type FilmScene,
  type SceneCtx,
  type Viewport,
} from '../lib';
import { getHeroMedia } from './layer';

const FRAG = /* glsl */ `
  uniform sampler2D uFrom;
  uniform sampler2D uTo;
  uniform float uP;
  uniform float uTime;
  uniform float uAspect;
  uniform float uFromAspect;
  uniform float uToAspect;
  uniform float uVel; // -1..1 smoothed scroll velocity
  varying vec2 vUv;

  void main() {
    // wipe edge travels -0.15 -> 1.15 with a slight vertical bow
    float edge = mix(-0.15, 1.15, uP) + 0.035 * sin(vUv.y * 5.2 + uP * 4.0);
    float d = vUv.x - edge;           // >0: ahead (from), <0: behind (to)
    float band = 0.085;               // smear band width

    vec2 fromUv = coverUv(vUv, uAspect, uFromAspect);
    vec2 toUv   = coverUv(vUv, uAspect, uToAspect);

    // directional smear inside the band: stretch samples along x toward edge
    float inBand = 1.0 - smoothstep(0.0, band, abs(d));
    float smear = inBand * band * (0.9 + abs(uVel) * 1.4);

    vec3 from = vec3(0.0);
    vec3 to = vec3(0.0);
    // 5-tap directional blur, RGB split scaled by smear
    for (int i = 0; i < 5; i++) {
      float o = (float(i) - 2.0) * 0.5 * smear;
      from += texture2D(uFrom, fromUv + vec2(o, 0.0)).rgb * 0.2;
      to   += texture2D(uTo,   toUv   + vec2(o, 0.0)).rgb * 0.2;
    }
    float split = smear * 0.6;
    from.r = texture2D(uFrom, fromUv + vec2(split, 0.0)).r * 0.55 + from.r * 0.45;
    to.b   = texture2D(uTo,   toUv   - vec2(split, 0.0)).b * 0.55 + to.b * 0.45;

    float side = smoothstep(-0.004, 0.004, d); // 1 = from side
    vec3 col = mix(to, from, side);

    // ink line at the very edge
    float line = exp(-abs(d) * 340.0);
    col = mix(col, vec3(0.95), line * 0.5);

    // heavier grain in the smear band
    col += filmGrain(vUv, uTime) * (0.04 + inBand * 0.06);
    col *= vig(vUv, 0.42);
    gl_FragColor = vec4(col, 1.0);
  }
`;

export function createProofWipe(ctx: SceneCtx, win: [number, number]): FilmScene {
  // "from" is the shared hero video: playing NudgeFlow pauses it, so the
  // outgoing plate holds the exact frame the iris ended on
  const from = getHeroMedia();
  const to = MediaTex.fromImage('/film/loops/nudgeflow.webp');
  to.upgradeToVideo('/film/loops/nudgeflow.mp4');

  const uniforms = {
    uFrom: uni(from.tex),
    uTo: uni(to.tex),
    uP: uni(0),
    uTime: uni(0),
    uAspect: uni(ctx.vp.aspect),
    uFromAspect: uni(from.aspect),
    uToAspect: uni(to.aspect),
    uVel: uni(0),
  };
  from.onSwap(() => {
    uniforms.uFrom.value = from.tex;
    uniforms.uFromAspect.value = from.aspect;
  });
  to.onSwap(() => {
    uniforms.uTo.value = to.tex;
    uniforms.uToAspect.value = to.aspect;
  });
  const mesh = fsQuad(FRAG, uniforms);

  return {
    name: 'proof-nudgeflow',
    win,
    mesh,
    setProgress(p) {
      uniforms.uP.value = p;
    },
    update(t) {
      uniforms.uTime.value = t;
      uniforms.uVel.value = Math.max(-1, Math.min(1, ctx.vel() / 3000));
    },
    onEnter() {
      // the NudgeFlow loop is the one revealed — it gets the decode budget
      to.play();
    },
    onExit() {
      to.pause();
    },
    resize(vp: Viewport) {
      uniforms.uAspect.value = vp.aspect;
    },
    dispose() {
      // `from` is the shared hero media — layer.ts owns its disposal
      to.dispose();
    },
  };
}
