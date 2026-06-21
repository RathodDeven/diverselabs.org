// Diverse Labs — Hero Pitch (fast montage)
// ~25s of quick ~2s shots, each a distinct visual, kinetic type with popping
// highlight words, joined by a bright scan-wipe transition. A through-line motif
// (a "mind" buried then freed) ties problem → solution. Registers window.DiverseHero.
// Brand: monochrome dark. Space Grotesk / Inter / JetBrains Mono.

const { useState, useEffect, useRef, useMemo, createContext, useContext } = React;

/* ── tokens ── */
const DISPLAY = "'Space Grotesk', system-ui, sans-serif";
const BODY    = "'Inter', system-ui, sans-serif";
const MONO    = "'JetBrains Mono', ui-monospace, monospace";
const BG = '#060606', INK = '#f4f4f4', MUTED = '#a6a6a6', FAINT = '#6b6b6b';
const LINE = 'rgba(255,255,255,0.10)';
const DUR = 33;

/* ── easing / math ── */
const E = {
  linear: t => t,
  outCubic: t => 1 - Math.pow(1 - t, 3),
  inCubic:  t => t * t * t,
  outQuart: t => 1 - Math.pow(1 - t, 4),
  outExpo:  t => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t)),
  outBack:  t => { const c1 = 2.0, c3 = c1 + 1; return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); },
  inOutCubic: t => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
  inOutQuint: t => (t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2),
  outSine: t => Math.sin((t * Math.PI) / 2),
};
const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
const lerp  = (a, b, t) => a + (b - a) * t;
const ramp  = (local, at, dur, ease = E.outCubic) => ease(clamp((local - at) / dur, 0, 1));
const rev   = (local, inAt, inDur, outAt, outDur, ease = E.outCubic) => {
  const i = ramp(local, inAt, inDur, ease);
  const o = outAt != null ? ramp(local, outAt, outDur, E.inCubic) : 0;
  return i * (1 - o);
};

/* ── timeline ── */
const TL = createContext({ time: 0, duration: DUR });
const useTime = () => useContext(TL).time;

/* ── Stage engine ── */
function Stage({ width, height, duration, controls = true, children }) {
  const KEY = 'dl-montage:t';
  // Always open from the start on a fresh page load (a hero should lead with its
  // strongest frame, not resume mid-montage from a persisted playhead).
  const [time, setTime] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [scale, setScale] = useState(1);
  const wrapRef = useRef(null), rafRef = useRef(null), lastRef = useRef(null);
  useEffect(() => { try { localStorage.setItem(KEY, String(time)); } catch {} }, [time]);
  useEffect(() => {
    const el = wrapRef.current; if (!el) return;
    const measure = () => setScale(Math.max(0.05, Math.min(el.clientWidth / width, (el.clientHeight - (controls ? 46 : 0)) / height)));
    measure();
    const ro = new ResizeObserver(measure); ro.observe(el);
    window.addEventListener('resize', measure);
    return () => { ro.disconnect(); window.removeEventListener('resize', measure); };
  }, [width, height]);
  useEffect(() => {
    if (!playing) { lastRef.current = null; return; }
    const step = (ts) => {
      if (lastRef.current == null) lastRef.current = ts;
      const dt = (ts - lastRef.current) / 1000; lastRef.current = ts;
      setTime(t => { let n = t + dt; if (n >= duration) n = n % duration; return n; });
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); lastRef.current = null; };
  }, [playing, duration]);
  useEffect(() => {
    const onKey = (e) => {
      if (e.code === 'Space') { e.preventDefault(); setPlaying(p => !p); }
      else if (e.code === 'ArrowLeft')  setTime(t => clamp(t - (e.shiftKey ? 1 : 0.1), 0, duration));
      else if (e.code === 'ArrowRight') setTime(t => clamp(t + (e.shiftKey ? 1 : 0.1), 0, duration));
      else if (e.key === '0' || e.code === 'Home') setTime(0);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [duration]);
  useEffect(() => { window.__dlSeek = (v) => { setPlaying(false); setTime(clamp(v, 0, duration)); }; }, [duration]);
  useEffect(() => { window.__dlPlay = (v) => setPlaying(!!v); }, []);
  const ctx = useMemo(() => ({ time, duration }), [time, duration]);
  return (
    <div ref={wrapRef} style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#050505', fontFamily: BODY }}>
      <div style={{ flex: 1, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', minHeight: 0 }}>
        <div data-screen-label={`t=${Math.floor(time)}s`} style={{ width, height, background: BG, position: 'relative', transform: `scale(${scale})`, transformOrigin: 'center', flexShrink: 0, overflow: 'hidden', boxShadow: '0 30px 90px rgba(0,0,0,0.6)' }}>
          <TL.Provider value={ctx}>{children}</TL.Provider>
        </div>
      </div>
      {controls && <PlayBar time={time} duration={duration} playing={playing} onToggle={() => setPlaying(p => !p)} onReset={() => setTime(0)} onSeek={setTime} />}
    </div>
  );
}
function PlayBar({ time, duration, playing, onToggle, onReset, onSeek }) {
  const trackRef = useRef(null); const [drag, setDrag] = useState(false);
  const fromE = (e) => { const r = trackRef.current.getBoundingClientRect(); return clamp((e.clientX - r.left) / r.width, 0, 1) * duration; };
  useEffect(() => {
    if (!drag) return;
    const mv = (e) => onSeek(fromE(e)), up = () => setDrag(false);
    window.addEventListener('mousemove', mv); window.addEventListener('mouseup', up);
    return () => { window.removeEventListener('mousemove', mv); window.removeEventListener('mouseup', up); };
  }, [drag]);
  const pct = duration > 0 ? (time / duration) * 100 : 0;
  const fmt = (t) => { const s = Math.max(0, t); return `${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,'0')}`; };
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 16px', background: 'rgba(14,14,14,0.95)', borderTop: `1px solid ${LINE}`, width: '100%', maxWidth: 720, borderRadius: 8, margin: '6px 0', color: INK, userSelect: 'none', flexShrink: 0 }}>
      <BarBtn onClick={onReset} title="Restart (0)"><svg width="13" height="13" viewBox="0 0 14 14"><path d="M3 2v10M12 2L5 7l7 5V2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" fill="none"/></svg></BarBtn>
      <BarBtn onClick={onToggle} title="Play/pause (space)">{playing
        ? <svg width="13" height="13" viewBox="0 0 14 14"><rect x="3" y="2" width="3" height="10" fill="currentColor"/><rect x="8" y="2" width="3" height="10" fill="currentColor"/></svg>
        : <svg width="13" height="13" viewBox="0 0 14 14"><path d="M3 2l9 5-9 5V2z" fill="currentColor"/></svg>}</BarBtn>
      <div style={{ fontFamily: MONO, fontSize: 12, width: 42, textAlign: 'right', fontVariantNumeric: 'tabular-nums' }}>{fmt(time)}</div>
      <div ref={trackRef} onMouseDown={(e) => { setDrag(true); onSeek(fromE(e)); }} style={{ flex: 1, height: 20, position: 'relative', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', left: 0, right: 0, height: 3, background: 'rgba(255,255,255,0.14)', borderRadius: 2 }} />
        <div style={{ position: 'absolute', left: 0, width: `${pct}%`, height: 3, background: INK, borderRadius: 2 }} />
        <div style={{ position: 'absolute', left: `${pct}%`, width: 11, height: 11, marginLeft: -5.5, background: '#fff', borderRadius: 6, boxShadow: '0 1px 4px rgba(0,0,0,0.5)' }} />
      </div>
      <div style={{ fontFamily: MONO, fontSize: 12, width: 42, color: 'rgba(255,255,255,0.5)', fontVariantNumeric: 'tabular-nums' }}>{fmt(duration)}</div>
    </div>
  );
}
function BarBtn({ children, onClick, title }) {
  const [h, setH] = useState(false);
  return <button onClick={onClick} title={title} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
    style={{ width: 26, height: 26, display: 'flex', alignItems: 'center', justifyContent: 'center', background: h ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.04)', border: `1px solid ${LINE}`, borderRadius: 6, color: INK, cursor: 'pointer', padding: 0 }}>{children}</button>;
}

/* ── kinetic helpers ── */
// inverted highlight: a white block wipes across; the word flips to black as it covers.
function HL({ children, local, at = 0.3, dur = 0.42 }) {
  const p = ramp(local, at, dur, E.inOutCubic);
  return (
    <span style={{ position: 'relative', display: 'inline-block', padding: '0 0.14em', margin: '0 0.02em' }}>
      <span style={{ position: 'absolute', left: 0, top: '0.08em', bottom: '0.08em', width: `${p * 100}%`, background: INK, borderRadius: 2 }} />
      <span style={{ position: 'relative', color: p > 0.5 ? BG : INK }}>{children}</span>
    </span>
  );
}
// word that rises in word-by-word
function Words({ children, local, at = 0.08, stagger = 0.06, size, color = INK, weight = 600, ls = '-0.03em', align = 'center', lh = 1.08, font = DISPLAY }) {
  const parts = String(children).split(' ');
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0 0.28em', justifyContent: align === 'center' ? 'center' : 'flex-start', fontFamily: font, fontSize: size, fontWeight: weight, letterSpacing: ls, lineHeight: lh, color }}>
      {parts.map((w, i) => {
        const o = ramp(local, at + i * stagger, 0.4, E.outCubic);
        return <span key={i} style={{ display: 'inline-block', opacity: o, transform: `translateY(${(1 - o) * 26}px)` }}>{w}</span>;
      })}
    </div>
  );
}
const Mono = ({ children, style }) => (
  <div style={{ fontFamily: MONO, fontSize: 17, fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: FAINT, ...style }}>{children}</div>
);

/* ── Shot wrapper: a DISTINCT entrance per shot (no repeated wipe) ── */
function Shot({ start, end, enter = 'scaleIn', children }) {
  const { time } = useContext(TL);
  if (time < start - 0.001 || time > end + 0.001) return null;
  const local = time - start, dur = end - start;
  const ein = ramp(local, 0, 0.5, E.inOutCubic);
  const eout = ramp(local, dur - 0.24, 0.24, E.inCubic);
  let clip = null, transform = '', opacity = 1 - eout * 0.85, accent = null;
  switch (enter) {
    case 'scaleIn':      transform = `scale(${lerp(0.86, 1, ein)})`; opacity *= ein; break;
    case 'scaleThrough': transform = `scale(${lerp(1.55, 1, E.outCubic(ein))})`; opacity *= ramp(local, 0, 0.3); break;
    case 'wipeUp':       clip = `inset(${(1 - ein) * 100}% 0% 0% 0%)`; accent = { k: 'hline', y: (1 - ein) * 100, o: 1 - ein }; break;
    case 'pushLeft':     transform = `translateX(${(1 - ein) * 18}%)`; opacity *= ramp(local, 0, 0.32); break;
    case 'pushUp':       transform = `translateY(${(1 - ein) * 16}%)`; opacity *= ramp(local, 0, 0.32); break;
    case 'splitV':       clip = `inset(0% ${(1 - ein) * 50}% 0% ${(1 - ein) * 50}%)`; accent = { k: 'vseam', o: 1 - ein }; break;
    case 'splitH':       clip = `inset(${(1 - ein) * 50}% 0% ${(1 - ein) * 50}% 0%)`; accent = { k: 'hseam', o: 1 - ein }; break;
    case 'iris':         clip = `circle(${lerp(0, 80, E.outCubic(ein))}% at 50% 50%)`; accent = { k: 'ring', r: lerp(0, 80, E.outCubic(ein)), o: (1 - ein) * 0.9 }; break;
    case 'flash':        transform = `scale(${lerp(1.07, 1, ein)})`; opacity *= ramp(local, 0, 0.22); accent = { k: 'flash', o: (1 - ramp(local, 0, 0.2)) * 0.6 }; break;
    default:             opacity *= ein;
  }
  const cstyle = clip ? { clipPath: clip, WebkitClipPath: clip } : {};
  return (
    <div style={{ position: 'absolute', inset: 0, opacity, transform, transformOrigin: 'center', ...cstyle }}>
      {children({ local, dur })}
      {accent && accent.k === 'hline' && <div style={{ position: 'absolute', left: 0, right: 0, top: `${accent.y}%`, height: 3, background: '#fff', boxShadow: '0 0 24px rgba(255,255,255,0.85)', opacity: accent.o }} />}
      {accent && accent.k === 'vseam' && <div style={{ position: 'absolute', top: '12%', bottom: '12%', left: '50%', width: 2, marginLeft: -1, background: '#fff', boxShadow: '0 0 24px rgba(255,255,255,0.9)', opacity: accent.o }} />}
      {accent && accent.k === 'hseam' && <div style={{ position: 'absolute', left: '14%', right: '14%', top: '50%', height: 2, marginTop: -1, background: '#fff', boxShadow: '0 0 24px rgba(255,255,255,0.9)', opacity: accent.o }} />}
      {accent && accent.k === 'ring' && accent.o > 0.02 && <div style={{ position: 'absolute', left: '50%', top: '50%', width: `${accent.r * 2}%`, height: `${accent.r * 3.4}%`, transform: 'translate(-50%,-50%)', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.85)', boxShadow: '0 0 30px rgba(255,255,255,0.5)', opacity: accent.o, pointerEvents: 'none' }} />}
      {accent && accent.k === 'flash' && accent.o > 0.01 && <div style={{ position: 'absolute', inset: 0, background: '#fff', opacity: accent.o, pointerEvents: 'none' }} />}
    </div>
  );
}
// a centered stage area for a shot's content
const Plate = ({ children }) => (
  <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>{children}</div>
);

/* ── small visual primitives ── */
const Sq = ({ s = 30, o = 1, ...rest }) => <div style={{ width: s, height: s, borderRadius: 5, background: `rgba(255,255,255,${0.14})`, opacity: o, ...rest }} />;

/* ═══════════════════ SHOTS ═══════════════════ */

// S1 — TIME LEAKING : clock ring + sweeping hand + countdown ticking down
function S1Time({ local }) {
  const ringO = ramp(local, 0.15, 0.5);
  const ang = local * 230; // fast sweep
  const total = Math.max(0, 28800 - Math.floor(ramp(local, 0.1, 1.6, E.outQuart) * 19000));
  const hh = String(Math.floor(total / 3600)).padStart(2, '0');
  const mm = String(Math.floor((total % 3600) / 60)).padStart(2, '0');
  const ss = String(total % 60).padStart(2, '0');
  return (
    <Plate>
      <div style={{ position: 'relative', width: 220, height: 220, opacity: ringO }}>
        <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.18)' }} />
        {[...Array(12)].map((_, i) => <div key={i} style={{ position: 'absolute', left: '50%', top: 8, width: 2, height: 12, background: 'rgba(255,255,255,0.25)', transformOrigin: '50% 102px', transform: `translateX(-50%) rotate(${i * 30}deg)` }} />)}
        <div style={{ position: 'absolute', left: '50%', top: '50%', width: 3, height: 86, background: INK, transformOrigin: '50% 0', transform: `translate(-50%,0) rotate(${ang}deg)`, borderRadius: 2 }} />
        <div style={{ position: 'absolute', left: '50%', top: '50%', width: 12, height: 12, marginLeft: -6, marginTop: -6, borderRadius: '50%', background: INK }} />
      </div>
      <div style={{ marginTop: 30, fontFamily: MONO, fontSize: 26, letterSpacing: '0.1em', color: MUTED, fontVariantNumeric: 'tabular-nums' }}>{hh}:{mm}:{ss}</div>
      <div style={{ marginTop: 34, fontFamily: DISPLAY, fontSize: 62, fontWeight: 600, letterSpacing: '-0.03em', color: INK, textAlign: 'center' }}>
        Your team's time is <HL local={local} at={0.55}>leaking.</HL>
      </div>
    </Plate>
  );
}

// S2 — REPETITIVE : identical rows stamp in, again and again
function S2Repeat({ local }) {
  const rows = 7;
  return (
    <Plate>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 560, marginBottom: 38 }}>
        {[...Array(rows)].map((_, i) => {
          const cyc = (local * 3.2) % rows; // a stamping highlight runs down
          const o = ramp(local, 0.1 + i * 0.12, 0.3);
          const hot = Math.abs(((local * 4) % rows) - i) < 0.6;
          return (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, opacity: o }}>
              <div style={{ width: 26, height: 26, borderRadius: 6, border: `1px solid ${hot ? 'rgba(255,255,255,0.6)' : LINE}`, background: hot ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.03)' }} />
              <div style={{ flex: 1, height: 26, borderRadius: 6, background: hot ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.05)' }} />
              <div style={{ width: 60, height: 26, borderRadius: 6, background: 'rgba(255,255,255,0.05)' }} />
            </div>
          );
        })}
      </div>
      <div style={{ fontFamily: DISPLAY, fontSize: 62, fontWeight: 600, letterSpacing: '-0.03em', color: INK, textAlign: 'center' }}>
        Buried in <HL local={local} at={0.5}>repetitive</HL> work.
      </div>
    </Plate>
  );
}

// S3 — PILES UP : counter climbs fast + stacking bar
function S3Pile({ local }) {
  const val = Math.floor(ramp(local, 0.15, 1.4, E.outExpo) * 1492);
  const fill = ramp(local, 0.15, 1.5, E.outExpo);
  return (
    <Plate>
      <div style={{ fontFamily: MONO, fontSize: 18, letterSpacing: '0.2em', textTransform: 'uppercase', color: FAINT, marginBottom: 10 }}>Open tasks</div>
      <div style={{ fontFamily: DISPLAY, fontSize: 168, fontWeight: 600, letterSpacing: '-0.04em', color: INK, lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>{val.toLocaleString()}</div>
      <div style={{ width: 620, height: 10, borderRadius: 6, background: 'rgba(255,255,255,0.08)', overflow: 'hidden', marginTop: 30 }}>
        <div style={{ height: '100%', width: `${fill * 100}%`, background: INK, borderRadius: 6 }} />
      </div>
      <div style={{ marginTop: 40, fontFamily: DISPLAY, fontSize: 60, fontWeight: 600, letterSpacing: '-0.03em', color: INK }}>
        And it only <HL local={local} at={0.7}>piles up.</HL>
      </div>
    </Plate>
  );
}

// S4 — BEST MINDS BURIED : glowing node covered by falling squares (motif setup)
function S4Bury({ local }) {
  const cover = ramp(local, 0.3, 1.4, E.outCubic);
  const glow = lerp(1, 0.16, cover);
  const sqs = [[-150, -40, 0], [120, -70, 0.15], [-60, 30, 0.3], [60, 60, 0.1], [-130, 90, 0.25], [150, 40, 0.2], [0, -90, 0.05], [-30, 120, 0.35], [110, 110, 0.3]];
  return (
    <Plate>
      <div style={{ position: 'relative', width: 460, height: 320, marginBottom: 30 }}>
        <div style={{ position: 'absolute', left: '50%', top: '50%', width: 86, height: 86, marginLeft: -43, marginTop: -43, borderRadius: '50%', background: `rgba(244,244,244,${glow})`, boxShadow: `0 0 ${60 * glow}px rgba(255,255,255,${0.7 * glow})` }} />
        {sqs.map((s, i) => {
          const p = ramp(local, 0.2 + s[2], 0.7, E.outCubic);
          return <div key={i} style={{ position: 'absolute', left: `calc(50% + ${s[0]}px)`, top: `calc(50% + ${s[1] - (1 - p) * 240}px)`, width: 56, height: 56, marginLeft: -28, marginTop: -28, borderRadius: 9, background: 'rgba(255,255,255,0.13)', border: '1px solid rgba(255,255,255,0.16)', opacity: p }} />;
        })}
      </div>
      <div style={{ fontFamily: DISPLAY, fontSize: 60, fontWeight: 600, letterSpacing: '-0.03em', color: INK, textAlign: 'center' }}>
        Your <HL local={local} at={0.5}>best minds</HL> — on busywork.
      </div>
    </Plate>
  );
}

// S5 — HIRING CAN'T KEEP PACE : two racing bars, work outruns people
function S5Hiring({ local }) {
  const work = ramp(local, 0.2, 1.5, E.outQuart);
  const people = ramp(local, 0.2, 1.5, E.outSine) * 0.42;
  const Bar = ({ label, v, tall }) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
      <div style={{ width: 96, height: 330, background: 'rgba(255,255,255,0.05)', borderRadius: 10, display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <div style={{ width: '100%', height: `${v * 100}%`, background: tall ? INK : 'rgba(255,255,255,0.32)', borderRadius: 10 }} />
      </div>
      <Mono style={{ fontSize: 15 }}>{label}</Mono>
    </div>
  );
  return (
    <Plate>
      <div style={{ display: 'flex', gap: 70, marginBottom: 36, alignItems: 'flex-end' }}>
        <Bar label="Workload" v={work} tall />
        <Bar label="Headcount" v={people} />
      </div>
      <div style={{ fontFamily: DISPLAY, fontSize: 60, fontWeight: 600, letterSpacing: '-0.03em', color: INK }}>
        <HL local={local} at={0.55}>Hiring</HL> can't keep pace.
      </div>
    </Plate>
  );
}

// S6 — THE PIVOT : a line ignites across, screen brightens, the turn
function S6Pivot({ local }) {
  const ig = ramp(local, 0.2, 0.7, E.inOutCubic);
  const flare = rev(local, 0.35, 0.35, 0.9, 0.6);
  return (
    <Plate>
      <div style={{ position: 'relative', width: 900, height: 6, marginBottom: 44 }}>
        <div style={{ position: 'absolute', inset: 0, top: 2, height: 2, background: 'rgba(255,255,255,0.12)' }} />
        <div style={{ position: 'absolute', left: 0, top: 1, height: 4, width: `${ig * 100}%`, background: INK, boxShadow: '0 0 26px rgba(255,255,255,0.8)', borderRadius: 3 }} />
        <div style={{ position: 'absolute', left: `${ig * 100}%`, top: -8, width: 20, height: 20, marginLeft: -10, borderRadius: '50%', background: '#fff', boxShadow: '0 0 40px rgba(255,255,255,0.95)', opacity: ig < 1 ? 1 : flare }} />
      </div>
      <div style={{ fontFamily: DISPLAY, fontSize: 70, fontWeight: 600, letterSpacing: '-0.035em', color: INK, textAlign: 'center' }}>
        But there's a <HL local={local} at={0.6}>clear win.</HL>
      </div>
    </Plate>
  );
}

// S7 — AI ABSORBS : grey squares stream into a bright slot and vanish
function S7Absorb({ local }) {
  const slotX = 0; // center
  const items = [...Array(10)];
  return (
    <Plate>
      <div style={{ position: 'relative', width: 820, height: 240, marginBottom: 38 }}>
        {/* portal slot */}
        <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 6, marginLeft: -3, background: 'linear-gradient(to bottom, transparent, #fff, transparent)', boxShadow: '0 0 30px rgba(255,255,255,0.8)' }} />
        <Mono style={{ position: 'absolute', left: '50%', top: -34, transform: 'translateX(-50%)', fontSize: 14, color: MUTED }}>AI&nbsp;system</Mono>
        {items.map((_, i) => {
          const phase = (local * 1.3 + i * 0.22) % 1.6 / 1.6; // travel 0..1 looping
          const startX = -380 - (i % 3) * 30;
          const y = (i - 4.5) * 24 + Math.sin(i) * 6;
          const x = lerp(startX, 0, E.inCubic(phase));
          const o = phase < 0.86 ? clamp(phase * 4, 0, 1) : (1 - (phase - 0.86) / 0.14);
          const sc = lerp(1, 0.2, clamp((phase - 0.7) / 0.3, 0, 1));
          return <div key={i} style={{ position: 'absolute', left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, width: 30, height: 30, marginLeft: -15, marginTop: -15, borderRadius: 6, background: 'rgba(255,255,255,0.16)', border: '1px solid rgba(255,255,255,0.2)', opacity: o, transform: `scale(${sc})` }} />;
        })}
      </div>
      <div style={{ fontFamily: DISPLAY, fontSize: 62, fontWeight: 600, letterSpacing: '-0.03em', color: INK, textAlign: 'center' }}>
        <HL local={local} at={0.5}>AI</HL> absorbs the repetition.
      </div>
    </Plate>
  );
}

// S8 — HOURS → SECONDS : big number whip
function S8Speed({ local }) {
  const swap = local > 1.0;
  const oA = rev(local, 0.1, 0.35, 0.95, 0.2);
  const oB = ramp(local, 1.0, 0.4, E.outBack);
  const scaleA = lerp(1, 1.4, ramp(local, 0.6, 0.5));
  const blurA = ramp(local, 0.7, 0.3) * 8;
  return (
    <Plate>
      <Mono style={{ fontSize: 17, marginBottom: 18 }}>Work that took</Mono>
      <div style={{ position: 'relative', height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', fontFamily: DISPLAY, fontSize: 176, fontWeight: 600, letterSpacing: '-0.04em', color: MUTED, opacity: oA, transform: `scale(${scaleA})`, filter: `blur(${blurA}px)` }}>8&nbsp;hrs</div>
        <div style={{ position: 'absolute', fontFamily: DISPLAY, fontSize: 200, fontWeight: 600, letterSpacing: '-0.04em', color: INK, opacity: oB, transform: `scale(${lerp(0.6, 1, oB)})` }}>0.3&nbsp;<span style={{ fontSize: 120 }}>sec</span></div>
      </div>
      <div style={{ marginTop: 26, fontFamily: DISPLAY, fontSize: 56, fontWeight: 600, letterSpacing: '-0.03em', color: INK, opacity: ramp(local, 1.15, 0.4) }}>
        now <HL local={local} at={1.3}>instant.</HL>
      </div>
    </Plate>
  );
}

// S9 — LESS COST, MORE OUTPUT : two arrows counter
function S9Trade({ local }) {
  const down = ramp(local, 0.2, 1.3, E.outCubic);
  const up = ramp(local, 0.35, 1.3, E.outCubic);
  const Col = ({ dir, label, val }) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
      <div style={{ fontSize: 88, lineHeight: 1, color: INK, transform: `translateY(${dir === 'down' ? (1 - down) * -40 : (1 - up) * 40}px)`, fontFamily: DISPLAY, fontWeight: 600 }}>{dir === 'down' ? '↓' : '↑'}</div>
      <div style={{ fontFamily: DISPLAY, fontSize: 56, fontWeight: 600, letterSpacing: '-0.03em', color: INK }}>{val}</div>
      <Mono style={{ fontSize: 15 }}>{label}</Mono>
    </div>
  );
  return (
    <Plate>
      <div style={{ display: 'flex', gap: 150, marginBottom: 44 }}>
        <Col dir="down" label="Operating cost" val={`−${Math.floor(down * 60)}%`} />
        <div style={{ width: 1, background: 'rgba(255,255,255,0.12)' }} />
        <Col dir="up" label="Output" val={`+${Math.floor(up * 4)}×`} />
      </div>
      <div style={{ fontFamily: DISPLAY, fontSize: 60, fontWeight: 600, letterSpacing: '-0.03em', color: INK }}>
        <HL local={local} at={0.55}>Less</HL> cost. <HL local={local} at={0.85}>More</HL> output.
      </div>
    </Plate>
  );
}

// S10 — FREED : the node bursts free of squares and rises (motif payoff)
function S10Free({ local }) {
  const burst = ramp(local, 0.1, 0.8, E.outBack);
  const rise = ramp(local, 0.5, 1.4, E.outCubic);
  const glow = lerp(0.3, 1, ramp(local, 0.2, 0.9));
  const sqs = [[-150, -40], [120, -70], [-60, 30], [60, 60], [-130, 90], [150, 40], [0, -90], [-30, 120], [110, 110]];
  return (
    <Plate>
      <div style={{ position: 'relative', width: 460, height: 340, marginBottom: 30 }}>
        {sqs.map((s, i) => {
          const a = (i / sqs.length) * Math.PI * 2;
          const fly = burst * 260;
          return <div key={i} style={{ position: 'absolute', left: `calc(50% + ${s[0] + Math.cos(a) * fly}px)`, top: `calc(50% + ${s[1] + Math.sin(a) * fly}px)`, width: 56, height: 56, marginLeft: -28, marginTop: -28, borderRadius: 9, background: 'rgba(255,255,255,0.13)', border: '1px solid rgba(255,255,255,0.16)', opacity: (1 - burst) * 0.9 }} />;
        })}
        <div style={{ position: 'absolute', left: '50%', top: `calc(50% - ${rise * 70}px)`, width: 96, height: 96, marginLeft: -48, marginTop: -48, borderRadius: '50%', background: `rgba(244,244,244,${glow})`, boxShadow: `0 0 ${70 * glow}px rgba(255,255,255,${0.8 * glow})` }} />
      </div>
      <div style={{ fontFamily: DISPLAY, fontSize: 60, fontWeight: 600, letterSpacing: '-0.03em', color: INK, textAlign: 'center' }}>
        Back on what <HL local={local} at={0.6}>matters.</HL>
      </div>
    </Plate>
  );
}

// S11 — BRAND
function S11Brand({ local }) {
  const oMark = ramp(local, 0.2, 0.7, E.outCubic);
  const oTag = ramp(local, 0.7, 0.7, E.outCubic);
  const glow = ramp(local, 0.1, 1.0);
  return (
    <Plate>
      <div style={{ position: 'absolute', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.06), transparent 70%)', opacity: glow }} />
      <div style={{ fontFamily: DISPLAY, fontSize: 150, fontWeight: 600, letterSpacing: '-0.04em', color: INK, lineHeight: 1, opacity: oMark, transform: `translateY(${(1 - oMark) * 24}px)` }}>Diverse&nbsp;Labs</div>
      <div style={{ marginTop: 26, fontFamily: MONO, fontSize: 22, letterSpacing: '0.2em', textTransform: 'uppercase', color: MUTED, opacity: oTag, transform: `translateY(${(1 - oTag) * 14}px)` }}>Less busywork. More judgment.</div>
    </Plate>
  );
}

/* ── frame chrome (grain, vignette, mark, progress, tonal brighten after pivot) ── */
function Frame() {
  const time = useTime();
  const seed = Math.floor(time * 12) % 6;
  const bright = ramp(time, 14.8, 2.4);     // brighten tone once we hit the solution
  const branding = rev(time, 30.0, 1.0);
  return (
    <>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '42px 42px', WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 35%, transparent 82%)', maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 35%, transparent 82%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse 70% 60% at 50% 46%, rgba(255,255,255,${0.05 * bright}), transparent 70%)`, pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 100% 100% at 50% 46%, transparent 54%, rgba(0,0,0,0.6) 100%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 50, left: 64, display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: MONO, fontSize: 15, letterSpacing: '0.16em', textTransform: 'uppercase', color: FAINT, opacity: 0.5 * (1 - branding), pointerEvents: 'none' }}>
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 10px rgba(74,222,128,0.7)', opacity: 0.55 + 0.45 * Math.sin(time * 3) }} />
        Diverse&nbsp;Labs
      </div>
      <Mono style={{ position: 'absolute', top: 50, right: 64, fontSize: 14, color: FAINT, opacity: 0.5 * (1 - branding), pointerEvents: 'none' }}>For founders</Mono>
      <div style={{ position: 'absolute', left: 64, right: 64, bottom: 52, height: 1, background: 'rgba(255,255,255,0.08)', pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: `${(time / DUR) * 100}%`, background: 'rgba(255,255,255,0.55)' }} />
      </div>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.045, mixBlendMode: 'overlay', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' seed='${seed}' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
    </>
  );
}

/* ── schedule (3s shots) ── */
const SH = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]; // boundaries; brand 30→33

function DiverseHero() {
  return (
    <Stage width={1920} height={1080} duration={DUR} controls={false}>
      <Frame />
      <Shot start={0}     end={SH[0]} enter="scaleIn">{(s) => <S1Time {...s} />}</Shot>
      <Shot start={SH[0]} end={SH[1]} enter="wipeUp">{(s) => <S2Repeat {...s} />}</Shot>
      <Shot start={SH[1]} end={SH[2]} enter="pushLeft">{(s) => <S3Pile {...s} />}</Shot>
      <Shot start={SH[2]} end={SH[3]} enter="iris">{(s) => <S4Bury {...s} />}</Shot>
      <Shot start={SH[3]} end={SH[4]} enter="splitV">{(s) => <S5Hiring {...s} />}</Shot>
      <Shot start={SH[4]} end={SH[5]} enter="flash">{(s) => <S6Pivot {...s} />}</Shot>
      <Shot start={SH[5]} end={SH[6]} enter="pushUp">{(s) => <S7Absorb {...s} />}</Shot>
      <Shot start={SH[6]} end={SH[7]} enter="scaleThrough">{(s) => <S8Speed {...s} />}</Shot>
      <Shot start={SH[7]} end={SH[8]} enter="splitH">{(s) => <S9Trade {...s} />}</Shot>
      <Shot start={SH[8]} end={SH[9]} enter="iris">{(s) => <S10Free {...s} />}</Shot>
      <Shot start={SH[9]} end={DUR}  enter="scaleIn">{(s) => <S11Brand {...s} />}</Shot>
    </Stage>
  );
}
window.DiverseHero = DiverseHero;
