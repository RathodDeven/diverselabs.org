/**
 * Scene 5 — PROOF II: THE APPROVAL SWEEP.
 * A phosphor-green scanline sweeps top-to-bottom, wiping the held NudgeFlow
 * frame into the CRM-agent loop — the page's one color doing the reveal.
 * The footage itself shows drafting -> human approval; no overlay needed.
 * Sweep completes by ~55%, then the scene HOLDS the playing loop.
 */
import {
  fsQuad,
  uni,
  MediaTex,
  type FilmScene,
  type SceneCtx,
  type Viewport,
} from '../lib';
import { getNudgeMedia } from './proofWipe';

const FRAG = /* glsl */ `
  uniform sampler2D uFrom;
  uniform sampler2D uTo;
  uniform float uP;
  uniform float uTime;
  uniform float uAspect;
  uniform float uFromAspect;
  uniform float uToAspect;
  uniform float uVel;
  varying vec2 vUv;

  const vec3 GREEN = vec3(0.290, 0.871, 0.502);

  void main() {
    // scanline sweeps down (uv y-up): completes by 26%, then a LONG hold
    // on the playing loop — pure video, no filter
    float sp = smoothstep(0.04, 0.26, uP);
    float hold = smoothstep(0.26, 0.38, uP);
    float edgeY = mix(1.12, -0.12, sp);
    float d = vUv.y - edgeY;          // >0: above the line (revealed CRM)
    float band = 0.05;

    vec2 fromUv = coverUv(vUv, uAspect, uFromAspect);
    vec2 toUv   = coverUv(vUv, uAspect, uToAspect);

    // vertical smear inside the band, stronger when scrolling hard
    float inBand = 1.0 - smoothstep(0.0, band, abs(d));
    float smear = inBand * band * (0.8 + abs(uVel) * 1.3);

    vec3 from = vec3(0.0);
    vec3 to = vec3(0.0);
    for (int i = 0; i < 5; i++) {
      float o = (float(i) - 2.0) * 0.5 * smear;
      from += texture2D(uFrom, fromUv + vec2(0.0, o)).rgb * 0.2;
      to   += texture2D(uTo,   toUv   + vec2(0.0, o)).rgb * 0.2;
    }

    float side = smoothstep(-0.003, 0.003, d); // 1 = revealed side
    vec3 col = mix(from, to, side);

    // the scanline itself: hot green core + soft bloom, cooling as it lands
    float core = exp(-abs(d) * 320.0);
    float glow = exp(-abs(d) * 40.0);
    float heat = 1.0 - sp * 0.35;
    col += GREEN * (core * 1.1 + glow * 0.28) * heat * step(0.001, sp) * step(sp, 0.999);

    // grain + vignette only while transitioning — the held video is pure
    col += filmGrain(vUv, uTime) * (0.04 + inBand * 0.05) * (1.0 - hold);
    col *= mix(vig(vUv, 0.42), 1.0, hold);
    gl_FragColor = vec4(col, 1.0);
  }
`;

export function createFlap(ctx: SceneCtx, win: [number, number]): FilmScene {
  // "from" is the shared NudgeFlow video — paused by the CRM loop's play(),
  // so the sweep peels away the exact frame the visitor was just watching
  const from = getNudgeMedia();
  const to = MediaTex.fromImage('/film/loops/crm.webp');
  to.upgradeToVideo('/film/loops/crm.mp4');

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
    name: 'proof-approved',
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
      to.play(); // pauses NudgeFlow -> its texture holds the last frame
    },
    onExit() {
      to.pause();
    },
    resize(vp: Viewport) {
      uniforms.uAspect.value = vp.aspect;
    },
    dispose() {
      // `from` is the shared NudgeFlow media — proofWipe owns its disposal
      to.dispose();
    },
  };
}
