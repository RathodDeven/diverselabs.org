import * as THREE from 'three';

/**
 * "Chaos → Order" particle scene (portfolio hero).
 *
 * Scroll blends scattered/chaotic particles into an ordered chart. Once ordered,
 * the particles continuously morph through several GRAPH TYPES — scatter → bars
 * → trend line → (loop) — over time. A persistent axis frame fades in with
 * scroll; the trend line shows only during the trend phase.
 *
 * Recolored to the Diverse Labs monochrome theme (white, additive-blended).
 * onState(cb) reports {stage, graph, progress} so the page can drive a small
 * status read-out. Returns a cleanup function for view-transition navigation.
 */

interface SceneState {
  stage: 'CHAOS' | 'ORDER';
  graph: 'SCATTER' | 'BARS' | 'TREND';
  progress: number;
}
interface SceneOptions {
  reducedQuality?: boolean;
  onState?: (s: SceneState) => void;
}

const COL = 0xffffff;
const COL_TEXT = '#f4f4f4';

export function initPortfolioScene(canvas: HTMLCanvasElement, options: SceneOptions = {}) {
  const { reducedQuality = false, onState } = options;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: !reducedQuality,
    alpha: true,
    powerPreference: reducedQuality ? 'low-power' : 'high-performance',
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, reducedQuality ? 1 : 2));
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 0, 22);

  // ─── Chart frame dimensions ──────────────────────────────────────────────────
  const CHART_LEFT = -6, CHART_RIGHT = 6, CHART_BOTTOM = -4.5, CHART_TOP = 4.5;
  const CHART_WIDTH = CHART_RIGHT - CHART_LEFT;
  const CHART_HEIGHT = CHART_TOP - CHART_BOTTOM;
  const PARTICLE_COUNT = reducedQuality ? 90 : 170;

  const sigmoidY = (t: number) =>
    CHART_BOTTOM + 0.8 + (CHART_HEIGHT - 1.5) * (1 / (1 + Math.exp(-6 * (t - 0.4))));

  // ─── Target layouts (each PARTICLE_COUNT points) ─────────────────────────────
  // 0 = scatter (correlation cloud), 1 = bars (distribution), 2 = trend (line)
  const scatter: THREE.Vector3[] = [];
  const bars: THREE.Vector3[] = [];
  const trend: THREE.Vector3[] = [];
  const NB = 8;
  const barSlot = (CHART_WIDTH - 1.6) / NB;

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const t = i / PARTICLE_COUNT;

    // scatter
    const sx = CHART_LEFT + 0.5 + t * (CHART_WIDTH - 1);
    const sNoise = (Math.random() - 0.5) * 1.2 * (1 - t * 0.5);
    const sy = Math.max(CHART_BOTTOM + 0.3, Math.min(CHART_TOP - 0.3, sigmoidY(t) + sNoise));
    scatter.push(new THREE.Vector3(sx, sy, 0));

    // bars — round-robin into NB bars, stacked to an increasing height
    const b = i % NB;
    const barX = CHART_LEFT + 0.8 + (b + 0.5) * barSlot;
    const barHeight = (0.28 + 0.66 * ((b + 1) / NB)) * (CHART_HEIGHT - 1.2);
    const bx = barX + (Math.random() - 0.5) * barSlot * 0.55;
    const by = CHART_BOTTOM + 0.6 + Math.random() * barHeight;
    bars.push(new THREE.Vector3(bx, by, 0));

    // trend — points riding the smooth curve, faint thickness
    const tx = CHART_LEFT + 0.5 + t * (CHART_WIDTH - 1);
    const ty = sigmoidY(t) + (Math.random() - 0.5) * 0.18;
    trend.push(new THREE.Vector3(tx, ty, 0));
  }
  const targets = [scatter, bars, trend];
  const GRAPH_NAMES: SceneState['graph'][] = ['SCATTER', 'BARS', 'TREND'];

  // ─── Chaotic start positions ─────────────────────────────────────────────────
  const chaos: THREE.Vector3[] = [];
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    chaos.push(new THREE.Vector3(
      (Math.random() - 0.5) * 14,
      (Math.random() - 0.5) * 12,
      (Math.random() - 0.5) * 8,
    ));
  }

  // ─── Particle system ─────────────────────────────────────────────────────────
  const particleGeo = new THREE.BufferGeometry();
  const positions = new Float32Array(PARTICLE_COUNT * 3);
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    positions[i * 3] = chaos[i].x;
    positions[i * 3 + 1] = chaos[i].y;
    positions[i * 3 + 2] = chaos[i].z;
  }
  particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const particleMat = new THREE.PointsMaterial({
    color: COL, size: reducedQuality ? 0.12 : 0.1, transparent: true,
    opacity: 0.6, sizeAttenuation: true, blending: THREE.AdditiveBlending,
  });
  const particles = new THREE.Points(particleGeo, particleMat);

  // ─── Trend line mesh (shown only during the trend phase) ─────────────────────
  const trendPts: THREE.Vector3[] = [];
  for (let i = 0; i <= 60; i++) { const t = i / 60; trendPts.push(new THREE.Vector3(CHART_LEFT + 0.5 + t * (CHART_WIDTH - 1), sigmoidY(t), 0)); }
  const trendGeo = new THREE.BufferGeometry().setFromPoints(new THREE.CatmullRomCurve3(trendPts).getPoints(80));
  const trendMat = new THREE.LineBasicMaterial({ color: COL, transparent: true, opacity: 0 });
  const trendLine = new THREE.Line(trendGeo, trendMat);

  // ─── Axis frame ──────────────────────────────────────────────────────────────
  const chartGroup = new THREE.Group();
  const axisMat = new THREE.LineBasicMaterial({ color: COL, transparent: true, opacity: 0 });
  const gridMat = new THREE.LineBasicMaterial({ color: COL, transparent: true, opacity: 0 });
  chartGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(CHART_LEFT, CHART_BOTTOM, 0), new THREE.Vector3(CHART_LEFT, CHART_TOP, 0),
  ]), axisMat));
  chartGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(CHART_LEFT, CHART_BOTTOM, 0), new THREE.Vector3(CHART_RIGHT, CHART_BOTTOM, 0),
  ]), axisMat));
  const TICKS_Y = 5;
  for (let i = 0; i <= TICKS_Y; i++) {
    const y = CHART_BOTTOM + (i / TICKS_Y) * CHART_HEIGHT;
    chartGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(CHART_LEFT - 0.2, y, 0), new THREE.Vector3(CHART_LEFT, y, 0)]), axisMat));
    if (i > 0) chartGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(CHART_LEFT, y, 0), new THREE.Vector3(CHART_RIGHT, y, 0)]), gridMat));
  }
  const TICKS_X = 6;
  for (let i = 0; i <= TICKS_X; i++) {
    const x = CHART_LEFT + (i / TICKS_X) * CHART_WIDTH;
    chartGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(x, CHART_BOTTOM - 0.2, 0), new THREE.Vector3(x, CHART_BOTTOM, 0)]), axisMat));
  }

  function textSprite(text: string, size = 40): THREE.Sprite {
    const c = document.createElement('canvas'); c.width = 256; c.height = 64;
    const x = c.getContext('2d')!;
    x.font = `${size}px "Space Grotesk", sans-serif`; x.fillStyle = COL_TEXT;
    x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(text, 128, 32);
    const tex = new THREE.CanvasTexture(c); tex.minFilter = THREE.LinearFilter;
    const m = new THREE.SpriteMaterial({ map: tex, transparent: true, opacity: 0, depthWrite: false });
    const s = new THREE.Sprite(m); s.scale.set(2, 0.5, 1); return s;
  }
  const labels: THREE.Sprite[] = [];
  for (let i = 0; i <= TICKS_Y; i++) {
    const s = textSprite(`${i * 20}`); s.position.set(CHART_LEFT - 1, CHART_BOTTOM + (i / TICKS_Y) * CHART_HEIGHT, 0);
    s.scale.set(1.2, 0.4, 1); chartGroup.add(s); labels.push(s);
  }
  ['1', '2', '3', '4', '5', '6'].forEach((l, i) => {
    const s = textSprite(l); s.position.set(CHART_LEFT + ((i + 0.5) / TICKS_X) * CHART_WIDTH, CHART_BOTTOM - 0.7, 0);
    s.scale.set(1.2, 0.4, 1); chartGroup.add(s); labels.push(s);
  });
  const yTitle = textSprite('Impact', 36); yTitle.position.set(CHART_LEFT - 2.2, 0, 0); yTitle.scale.set(2.2, 0.5, 1); chartGroup.add(yTitle); labels.push(yTitle);
  const xTitle = textSprite('Time', 36); xTitle.position.set(0, CHART_BOTTOM - 1.5, 0); xTitle.scale.set(2, 0.5, 1); chartGroup.add(xTitle); labels.push(xTitle);

  const group = new THREE.Group();
  group.add(particles, trendLine, chartGroup);
  scene.add(group);
  scene.add(new THREE.AmbientLight(0x222222, 0.8));
  const pl = new THREE.PointLight(0xffffff, 1.5, 30); pl.position.set(5, 5, 10); scene.add(pl);

  const placeGroup = () => {
    if (window.innerWidth < 768) { group.position.set(0, 0, 0); group.scale.setScalar(0.55); }
    else { group.position.set(3.5, 0, 0); group.scale.setScalar(0.9); }
  };
  placeGroup();

  // ─── State / interaction ─────────────────────────────────────────────────────
  let scrollProgress = 0, time = 0, rafId = 0;
  const mouse = { x: 0, y: 0 };
  const updateScroll = () => { scrollProgress = Math.min(1, Math.max(0, window.scrollY / (window.innerHeight * 2))); };
  updateScroll();
  const onMouseMove = (e: MouseEvent) => { mouse.x = (e.clientX / window.innerWidth) * 2 - 1; mouse.y = (e.clientY / window.innerHeight) * 2 - 1; };
  const onResize = () => { camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth, window.innerHeight); placeGroup(); };
  window.addEventListener('scroll', updateScroll, { passive: true });
  document.addEventListener('mousemove', onMouseMove, { passive: true });
  window.addEventListener('resize', onResize, { passive: true });
  const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

  // ─── Graph-cycle timing ──────────────────────────────────────────────────────
  const HOLD = 2.6, TRANS = 1.5, STEP = HOLD + TRANS;     // seconds per graph
  const CYCLE = targets.length * STEP;

  const fps = reducedQuality ? 30 : 60;
  const interval = 1000 / fps;
  let lastFrame = 0, stateTick = 0;
  let lastStage = '', lastGraph = '';

  function animate(ts: number) {
    rafId = requestAnimationFrame(animate);
    if (ts - lastFrame < interval) return;
    lastFrame = ts;
    time += 0.003;
    const progress = easeInOut(scrollProgress);

    // which graphs are we between, and how mixed
    const tt = (ts / 1000) % CYCLE;
    const idx = Math.floor(tt / STEP);
    const local = tt - idx * STEP;
    const nxt = (idx + 1) % targets.length;
    const mix = local > HOLD ? easeInOut((local - HOLD) / TRANS) : 0;
    const fromT = targets[idx], toT = targets[nxt];

    // per-graph weight (for showing the trend-line mesh)
    const w = [0, 0, 0];
    w[idx] += 1 - mix; w[nxt] += mix;

    const posAttr = particleGeo.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const a = fromT[i], b = toT[i];
      const ox = a.x + (b.x - a.x) * mix;
      const oy = a.y + (b.y - a.y) * mix;
      const oz = a.z + (b.z - a.z) * mix;
      const jX = Math.sin(time * 2.5 + i * 0.13) * (1 - progress) * 0.5;
      const jY = Math.cos(time * 2 + i * 0.17) * (1 - progress) * 0.6;
      const jZ = Math.sin(time * 1.5 + i * 0.11) * (1 - progress) * 0.4;
      posAttr.setXYZ(i,
        chaos[i].x * (1 - progress) + ox * progress + jX,
        chaos[i].y * (1 - progress) + oy * progress + jY,
        chaos[i].z * (1 - progress) + oz * progress + jZ);
    }
    posAttr.needsUpdate = true;

    particleMat.size = (reducedQuality ? 0.1 : 0.08) + progress * 0.06;
    particleMat.opacity = 0.4 + progress * 0.4;

    const chartFade = Math.max(0, (progress - 0.2) / 0.5);
    axisMat.opacity = chartFade * 0.8;
    gridMat.opacity = chartFade * 0.15;
    const labelFade = Math.max(0, (progress - 0.35) / 0.4);
    labels.forEach((s) => { (s.material as THREE.SpriteMaterial).opacity = labelFade * 0.85; });
    trendMat.opacity = progress * w[2] * 0.9;   // only during TREND phase

    const cRotY = time * 0.8, cRotX = Math.sin(time * 0.6) * 0.4;
    group.rotation.y = cRotY * (1 - progress) + mouse.x * 0.05 * progress;
    group.rotation.x = cRotX * (1 - progress) + mouse.y * 0.03 * progress;
    group.rotation.z = Math.sin(time * 0.4) * 0.2 * (1 - progress);

    const deep = Math.max(0, window.scrollY - window.innerHeight * 2.5) / window.innerHeight;
    const fade = Math.max(0, 1 - deep);
    group.visible = fade > 0.01;
    if (group.visible) {
      particleMat.opacity *= fade; trendMat.opacity *= fade;
      axisMat.opacity *= fade; gridMat.opacity *= fade;
      labels.forEach((s) => { (s.material as THREE.SpriteMaterial).opacity *= fade; });
    }

    renderer.render(scene, camera);

    // ─── report state for the HUD (throttled, only on change) ──────────────────
    if (onState && ts - stateTick > 120) {
      stateTick = ts;
      const stage: SceneState['stage'] = progress > 0.45 ? 'ORDER' : 'CHAOS';
      const graph = GRAPH_NAMES[mix < 0.5 ? idx : nxt];
      if (stage !== lastStage || graph !== lastGraph) {
        lastStage = stage; lastGraph = graph;
        onState({ stage, graph, progress });
      } else {
        onState({ stage, graph, progress });
      }
    }
  }
  rafId = requestAnimationFrame(animate);

  return () => {
    cancelAnimationFrame(rafId);
    window.removeEventListener('scroll', updateScroll);
    document.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('resize', onResize);
    renderer.dispose();
    scene.clear();
  };
}
