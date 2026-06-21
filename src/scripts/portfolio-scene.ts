import * as THREE from 'three';

/**
 * "Chaos → Clean Chart" particle scene (ported from Priyam Haryani's portfolio).
 *
 * Scattered, chaotic particles reassemble on scroll into a clean scatter plot
 * with axes, ticks, labels, a trend line and a confidence band. Recolored to
 * the Diverse Labs monochrome theme (white particles, additive-blended, over
 * the near-black page). Loaded only on the hidden portfolio page.
 *
 * Returns a cleanup function — call it on Astro view-transition navigation so
 * the global scroll/mousemove listeners and the WebGL context are released.
 */

interface SceneOptions {
  reducedQuality?: boolean;
}

// Monochrome palette — white lines/particles read as "light" via additive blending.
const COL_PARTICLE = 0xffffff;
const COL_LINE = 0xffffff;
const COL_GRID = 0xffffff;
const COL_TEXT = '#f4f4f4';

export function initPortfolioScene(canvas: HTMLCanvasElement, options: SceneOptions = {}) {
  const { reducedQuality = false } = options;

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

  // ─── Chart dimensions ────────────────────────────────────────────────────────
  const CHART_LEFT = -6;
  const CHART_RIGHT = 6;
  const CHART_BOTTOM = -4.5;
  const CHART_TOP = 4.5;
  const CHART_WIDTH = CHART_RIGHT - CHART_LEFT;
  const CHART_HEIGHT = CHART_TOP - CHART_BOTTOM;

  const PARTICLE_COUNT = reducedQuality ? 80 : 160;

  // ─── Scatter-plot target positions (organized state) ─────────────────────────
  const organizedPositions: THREE.Vector3[] = [];
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const t = i / PARTICLE_COUNT;
    const x = CHART_LEFT + 0.5 + t * (CHART_WIDTH - 1);
    const trend = CHART_BOTTOM + 0.8 + (CHART_HEIGHT - 1.5) * (1 / (1 + Math.exp(-6 * (t - 0.4))));
    const noise = (Math.random() - 0.5) * 1.2 * (1 - t * 0.5);
    const y = Math.max(CHART_BOTTOM + 0.3, Math.min(CHART_TOP - 0.3, trend + noise));
    organizedPositions.push(new THREE.Vector3(x, y, 0));
  }

  // ─── Chaotic start positions ─────────────────────────────────────────────────
  const chaoticPositions: THREE.Vector3[] = [];
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    chaoticPositions.push(new THREE.Vector3(
      (Math.random() - 0.5) * 14,
      (Math.random() - 0.5) * 12,
      (Math.random() - 0.5) * 8,
    ));
  }

  // ─── Particle system ─────────────────────────────────────────────────────────
  const particleGeo = new THREE.BufferGeometry();
  const positions = new Float32Array(PARTICLE_COUNT * 3);
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    positions[i * 3] = chaoticPositions[i].x;
    positions[i * 3 + 1] = chaoticPositions[i].y;
    positions[i * 3 + 2] = chaoticPositions[i].z;
  }
  particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const particleMat = new THREE.PointsMaterial({
    color: COL_PARTICLE,
    size: reducedQuality ? 0.12 : 0.1,
    transparent: true,
    opacity: 0.6,
    sizeAttenuation: true,
    blending: THREE.AdditiveBlending,
  });
  const particles = new THREE.Points(particleGeo, particleMat);

  // ─── Trend line ──────────────────────────────────────────────────────────────
  const trendPoints: THREE.Vector3[] = [];
  const TREND_SEGMENTS = 50;
  for (let i = 0; i <= TREND_SEGMENTS; i++) {
    const t = i / TREND_SEGMENTS;
    const x = CHART_LEFT + 0.5 + t * (CHART_WIDTH - 1);
    const y = CHART_BOTTOM + 0.8 + (CHART_HEIGHT - 1.5) * (1 / (1 + Math.exp(-6 * (t - 0.4))));
    trendPoints.push(new THREE.Vector3(x, y, 0));
  }
  const trendCurve = new THREE.CatmullRomCurve3(trendPoints);
  const trendGeo = new THREE.BufferGeometry().setFromPoints(trendCurve.getPoints(80));
  const trendMat = new THREE.LineBasicMaterial({ color: COL_LINE, transparent: true, opacity: 0 });
  const trendLine = new THREE.Line(trendGeo, trendMat);

  // ─── Chart frame (axes, ticks, grid) ─────────────────────────────────────────
  const chartGroup = new THREE.Group();
  const axisMat = new THREE.LineBasicMaterial({ color: COL_LINE, transparent: true, opacity: 0 });
  const gridMat = new THREE.LineBasicMaterial({ color: COL_GRID, transparent: true, opacity: 0 });

  const yAxisGeo = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(CHART_LEFT, CHART_BOTTOM, 0),
    new THREE.Vector3(CHART_LEFT, CHART_TOP, 0),
  ]);
  chartGroup.add(new THREE.Line(yAxisGeo, axisMat));

  const xAxisGeo = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(CHART_LEFT, CHART_BOTTOM, 0),
    new THREE.Vector3(CHART_RIGHT, CHART_BOTTOM, 0),
  ]);
  chartGroup.add(new THREE.Line(xAxisGeo, axisMat));

  const TICKS_Y = 5;
  for (let i = 0; i <= TICKS_Y; i++) {
    const y = CHART_BOTTOM + (i / TICKS_Y) * CHART_HEIGHT;
    const tickGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(CHART_LEFT - 0.2, y, 0),
      new THREE.Vector3(CHART_LEFT, y, 0),
    ]);
    chartGroup.add(new THREE.Line(tickGeo, axisMat));
    if (i > 0) {
      const gridGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(CHART_LEFT, y, 0),
        new THREE.Vector3(CHART_RIGHT, y, 0),
      ]);
      chartGroup.add(new THREE.Line(gridGeo, gridMat));
    }
  }

  const TICKS_X = 6;
  for (let i = 0; i <= TICKS_X; i++) {
    const x = CHART_LEFT + (i / TICKS_X) * CHART_WIDTH;
    const tickGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(x, CHART_BOTTOM - 0.2, 0),
      new THREE.Vector3(x, CHART_BOTTOM, 0),
    ]);
    chartGroup.add(new THREE.Line(tickGeo, axisMat));
  }

  // ─── Sprite-based text labels ────────────────────────────────────────────────
  function createTextSprite(text: string, fontSize = 48): THREE.Sprite {
    const canvas2d = document.createElement('canvas');
    const ctx = canvas2d.getContext('2d')!;
    canvas2d.width = 256;
    canvas2d.height = 64;
    ctx.font = `${fontSize}px "Space Grotesk", sans-serif`;
    ctx.fillStyle = COL_TEXT;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, 128, 32);

    const texture = new THREE.CanvasTexture(canvas2d);
    texture.minFilter = THREE.LinearFilter;
    const spriteMat = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      opacity: 0,
      depthWrite: false,
    });
    const sprite = new THREE.Sprite(spriteMat);
    sprite.scale.set(2, 0.5, 1);
    return sprite;
  }

  const labelSprites: THREE.Sprite[] = [];

  for (let i = 0; i <= TICKS_Y; i++) {
    const y = CHART_BOTTOM + (i / TICKS_Y) * CHART_HEIGHT;
    const label = createTextSprite(`${i * 20}`, 40);
    label.position.set(CHART_LEFT - 1, y, 0);
    label.scale.set(1.2, 0.4, 1);
    chartGroup.add(label);
    labelSprites.push(label);
  }

  const xLabels = ['1', '2', '3', '4', '5', '6'];
  for (let i = 0; i < xLabels.length; i++) {
    const x = CHART_LEFT + ((i + 0.5) / TICKS_X) * CHART_WIDTH;
    const label = createTextSprite(xLabels[i], 40);
    label.position.set(x, CHART_BOTTOM - 0.7, 0);
    label.scale.set(1.2, 0.4, 1);
    chartGroup.add(label);
    labelSprites.push(label);
  }

  const yTitle = createTextSprite('Impact', 36);
  yTitle.position.set(CHART_LEFT - 2.2, 0, 0);
  yTitle.scale.set(2.2, 0.5, 1);
  chartGroup.add(yTitle);
  labelSprites.push(yTitle);

  const xTitle = createTextSprite('Time', 36);
  xTitle.position.set(0, CHART_BOTTOM - 1.5, 0);
  xTitle.scale.set(2, 0.5, 1);
  chartGroup.add(xTitle);
  labelSprites.push(xTitle);

  // ─── Confidence band ─────────────────────────────────────────────────────────
  const bandUpper: THREE.Vector3[] = [];
  const bandLower: THREE.Vector3[] = [];
  for (let i = 0; i <= 30; i++) {
    const t = i / 30;
    const x = CHART_LEFT + 0.5 + t * (CHART_WIDTH - 1);
    const y = CHART_BOTTOM + 0.8 + (CHART_HEIGHT - 1.5) * (1 / (1 + Math.exp(-6 * (t - 0.4))));
    const band = 0.6 * (1 - t * 0.4);
    bandUpper.push(new THREE.Vector3(x, y + band, 0));
    bandLower.push(new THREE.Vector3(x, y - band, 0));
  }
  const bandMat = new THREE.LineBasicMaterial({ color: COL_GRID, transparent: true, opacity: 0 });
  const bandLineUpper = new THREE.Line(new THREE.BufferGeometry().setFromPoints(bandUpper), bandMat);
  const bandLineLower = new THREE.Line(new THREE.BufferGeometry().setFromPoints(bandLower), bandMat);
  chartGroup.add(bandLineUpper, bandLineLower);

  // ─── Assemble ────────────────────────────────────────────────────────────────
  const group = new THREE.Group();
  group.add(particles, trendLine, chartGroup);
  scene.add(group);

  scene.add(new THREE.AmbientLight(0x222222, 0.8));
  const pointLight = new THREE.PointLight(0xffffff, 1.5, 30);
  pointLight.position.set(5, 5, 10);
  scene.add(pointLight);

  const placeGroup = () => {
    if (window.innerWidth < 768) {
      group.position.set(0, 0, 0);
      group.scale.setScalar(0.55);
    } else {
      group.position.set(3.5, 0, 0);
      group.scale.setScalar(0.9);
    }
  };
  placeGroup();

  // ─── State ───────────────────────────────────────────────────────────────────
  let scrollProgress = 0;
  let time = 0;
  let rafId = 0;
  const mouse = { x: 0, y: 0 };

  const updateScroll = () => {
    const maxScroll = window.innerHeight * 2;
    scrollProgress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
  };
  updateScroll();

  const onMouseMove = (e: MouseEvent) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
  };

  const onResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    placeGroup();
  };

  window.addEventListener('scroll', updateScroll, { passive: true });
  document.addEventListener('mousemove', onMouseMove, { passive: true });
  window.addEventListener('resize', onResize, { passive: true });

  const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

  // ─── Animation ───────────────────────────────────────────────────────────────
  const fps = reducedQuality ? 30 : 60;
  const interval = 1000 / fps;
  let lastFrame = 0;

  function animate(timestamp: number) {
    rafId = requestAnimationFrame(animate);
    if (timestamp - lastFrame < interval) return;
    lastFrame = timestamp;

    time += 0.003;
    const progress = easeInOutCubic(scrollProgress);

    const posAttr = particleGeo.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const chaotic = chaoticPositions[i];
      const organized = organizedPositions[i];
      const jX = Math.sin(time * 2.5 + i * 0.13) * (1 - progress) * 0.5;
      const jY = Math.cos(time * 2 + i * 0.17) * (1 - progress) * 0.6;
      const jZ = Math.sin(time * 1.5 + i * 0.11) * (1 - progress) * 0.4;
      posAttr.setXYZ(
        i,
        chaotic.x * (1 - progress) + organized.x * progress + jX,
        chaotic.y * (1 - progress) + organized.y * progress + jY,
        chaotic.z * (1 - progress) + organized.z * progress + jZ,
      );
    }
    posAttr.needsUpdate = true;

    particleMat.size = (reducedQuality ? 0.1 : 0.08) + progress * 0.06;
    particleMat.opacity = 0.4 + progress * 0.4;

    const chartFade = Math.max(0, (progress - 0.2) / 0.5);
    axisMat.opacity = chartFade * 0.8;
    gridMat.opacity = chartFade * 0.15;

    const labelFade = Math.max(0, (progress - 0.35) / 0.4);
    labelSprites.forEach((s) => { (s.material as THREE.SpriteMaterial).opacity = labelFade * 0.85; });

    trendMat.opacity = Math.max(0, (progress - 0.5) / 0.3) * 0.9;
    bandMat.opacity = Math.max(0, (progress - 0.6) / 0.3) * 0.25;

    const chaosRotY = time * 0.8;
    const chaosRotX = Math.sin(time * 0.6) * 0.4;
    group.rotation.y = chaosRotY * (1 - progress) + mouse.x * 0.05 * progress;
    group.rotation.x = chaosRotX * (1 - progress) + mouse.y * 0.03 * progress;
    group.rotation.z = Math.sin(time * 0.4) * 0.2 * (1 - progress);

    // Fade the whole scene out once it's well behind the content.
    const deepScroll = Math.max(0, window.scrollY - window.innerHeight * 2.5) / window.innerHeight;
    const fadeOut = Math.max(0, 1 - deepScroll);
    group.visible = fadeOut > 0.01;
    if (group.visible) {
      particleMat.opacity *= fadeOut;
      trendMat.opacity *= fadeOut;
      axisMat.opacity *= fadeOut;
      gridMat.opacity *= fadeOut;
      bandMat.opacity *= fadeOut;
      labelSprites.forEach((s) => { (s.material as THREE.SpriteMaterial).opacity *= fadeOut; });
    }

    renderer.render(scene, camera);
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
