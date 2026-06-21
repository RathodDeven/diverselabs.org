// NudgeFlow flow-showcase reel — scenes mounted as children of <Stage> (animations.jsx).
// Globals come from animations.jsx (the parent x-import). Resolve them LAZILY at
// render time — scenes.jsx may evaluate before animations.jsx has populated window,
// so a top-level `const { Sprite } = window` would bake in `undefined` (React #130).
const Sprite      = (props) => React.createElement(window.Sprite, props);
const useTime     = (...a) => window.useTime(...a);
const useTimeline = (...a) => window.useTimeline(...a);
const useSprite   = (...a) => window.useSprite(...a);
const clamp       = (...a) => window.clamp(...a);
const interpolate = (...a) => window.interpolate(...a);
const animate     = (...a) => window.animate(...a);
const Easing      = new Proxy({}, { get: (_, k) => (window.Easing ? window.Easing[k] : ((t) => t)) });

// ── Palette (clean fintech, blue/green) ─────────────────────────────────────
const C = {
  bg:    '#ffffff',
  panel: '#f6f8fb',
  ink:   '#0f1f3d',
  sub:   '#5b6b86',
  faint: '#8a99b3',
  line:  '#e4e9f1',
  blue:  '#2563eb',
  blueD: '#1d4ed8',
  blueSoft: '#eef3ff',
  green: '#15a35b',
  greenSoft: '#e7f6ee',
  amber: '#e7902b',
  red:   '#e0483d',
  wa:    '#0f7a6b',     // whatsapp header teal-green
  waBg:  '#eef3ee',
  waOut: '#d6f3c4',     // outgoing bubble
};
const DISP = "'Plus Jakarta Sans', system-ui, sans-serif";
const MONO = "'JetBrains Mono', ui-monospace, monospace";

const INR = (n) => '\u20B9' + n.toLocaleString('en-IN');

// ── Full-frame layer with fade in/out envelope ──────────────────────────────
function Layer({ children, fin = 0.55, fout = 0.55, rise = 26 }) {
  const { localTime, duration } = useSprite();
  const out = Math.max(0, duration - fout);
  let o = 1, ty = 0;
  if (localTime < fin) {
    const t = Easing.easeOutCubic(clamp(localTime / fin, 0, 1));
    o = t; ty = (1 - t) * rise;
  } else if (localTime > out) {
    const t = Easing.easeInCubic(clamp((localTime - out) / fout, 0, 1));
    o = 1 - t; ty = -t * (rise * 0.6);
  }
  return (
    <div style={{ position: 'absolute', inset: 0, opacity: o, transform: `translateY(${ty}px)`, willChange: 'opacity, transform' }}>
      {children}
    </div>
  );
}

// element-level entrance: appear at `at` (sprite-local secs), slide up + fade
function inn(localTime, at, dur = 0.5, dist = 18, ease = Easing.easeOutCubic) {
  const t = ease(clamp((localTime - at) / dur, 0, 1));
  return { opacity: t, transform: `translateY(${(1 - t) * dist}px)` };
}

// animated number
function Counter({ to, at, dur = 1.4, fmt = (v) => Math.round(v).toString(), style }) {
  const { localTime } = useSprite();
  const t = Easing.easeOutCubic(clamp((localTime - at) / dur, 0, 1));
  return <span style={style}>{fmt(to * t)}</span>;
}

// ── Brand mark ──────────────────────────────────────────────────────────────
function NudgeMark({ size = 56, r = 16 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: r, flexShrink: 0,
      background: `linear-gradient(150deg, ${C.blue}, ${C.blueD})`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      boxShadow: '0 8px 22px rgba(37,99,235,0.30)',
    }}>
      <svg width={size * 0.5} height={size * 0.5} viewBox="0 0 24 24" fill="none">
        <path d="M4 13.5l5 5 11-13" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" opacity="0" />
        <path d="M3 12h13M11 6l6 6-6 6" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
function Wordmark({ size = 34, color = C.ink }) {
  return (
    <div style={{ fontFamily: DISP, fontWeight: 800, fontSize: size, color, letterSpacing: '-0.02em' }}>
      Nudge<span style={{ color: C.blue }}>Flow</span>
    </div>
  );
}

// ── Cursor ──────────────────────────────────────────────────────────────────
function Cursor({ x, y, clickAt, localTime }) {
  let ring = 0, ringO = 0, press = 1;
  if (clickAt != null) {
    const d = localTime - clickAt;
    if (d > 0 && d < 0.6) { ring = interpolate([0, 1], [0, 46])(d / 0.6); ringO = 1 - d / 0.6; }
    if (d > -0.05 && d < 0.16) press = 0.86;
  }
  return (
    <div style={{ position: 'absolute', left: x, top: y, transform: `scale(${press})`, transformOrigin: 'top left', zIndex: 50, willChange: 'left, top, transform' }}>
      {ringO > 0 && (
        <div style={{ position: 'absolute', left: 4, top: 2, width: ring, height: ring, marginLeft: -ring / 2, marginTop: -ring / 2, borderRadius: '50%', border: `2px solid ${C.blue}`, opacity: ringO }} />
      )}
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" style={{ filter: 'drop-shadow(0 3px 5px rgba(15,31,61,0.3))' }}>
        <path d="M5 3l14 7-6 1.6 3.4 6.2-2.7 1.4L10.3 13 5 17V3z" fill="#fff" stroke={C.ink} strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════
//  SCENE 1a — Abandoned application
// ════════════════════════════════════════════════════════════════════════════
function SceneAbandon() {
  const { localTime } = useSprite();
  const steps = [
    ['Mobile number verified', 'done'],
    ['PAN & KYC complete', 'done'],
    ['Bank statement linked', 'done'],
    ['Electricity bill upload', 'stuck'],
    ['Loan disbursal', 'locked'],
  ];
  const abandon = clamp((localTime - 2.4) / 0.7, 0, 1);
  const tilt = Easing.easeOutCubic(abandon) * 2.2;
  const desat = abandon;
  // progress bar fills to 70% then freezes
  const prog = interpolate([0, 1.4], [0, 0.7], Easing.easeOutCubic)(localTime);

  return (
    <div style={{ position: 'absolute', inset: 0, background: C.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', top: 64, left: 0, right: 0, textAlign: 'center', ...inn(localTime, 0.1, 0.6) }}>
        <div style={{ fontFamily: MONO, fontSize: 16, letterSpacing: '0.22em', color: C.faint, textTransform: 'uppercase' }}>ClickPe · Muthoot Business Loan</div>
      </div>

      <div style={{
        position: 'relative', width: 720, background: '#fff', borderRadius: 24,
        border: `1px solid ${C.line}`, boxShadow: '0 30px 80px rgba(15,31,61,0.12)',
        padding: '40px 44px 44px', transform: `rotate(${tilt}deg) translateY(${abandon * 10}px)`,
        filter: `grayscale(${desat * 0.7}) brightness(${1 - desat * 0.05})`,
        ...inn(localTime, 0.3, 0.6, 24),
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ fontFamily: DISP, fontWeight: 800, fontSize: 30, color: C.ink, letterSpacing: '-0.02em' }}>Kamini M. Patel</div>
            <div style={{ fontFamily: DISP, fontWeight: 600, fontSize: 17, color: C.sub, marginTop: 4 }}>Kamini Imitation · Surat, Gujarat</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: MONO, fontSize: 13, color: C.faint, letterSpacing: '0.12em' }}>APPROVED</div>
            <div style={{ fontFamily: DISP, fontWeight: 800, fontSize: 34, color: C.blue, letterSpacing: '-0.02em' }}>{INR(80000)}</div>
          </div>
        </div>

        {/* progress */}
        <div style={{ marginTop: 26, height: 8, borderRadius: 6, background: C.line, overflow: 'hidden' }}>
          <div style={{ width: `${prog * 100}%`, height: '100%', borderRadius: 6, background: abandon > 0.4 ? C.faint : C.blue }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontFamily: MONO, fontSize: 13, color: C.faint }}>
          <span>Application progress</span><span>{Math.round(prog * 100)}%</span>
        </div>

        {/* steps */}
        <div style={{ marginTop: 26, display: 'flex', flexDirection: 'column', gap: 14 }}>
          {steps.map(([label, st], i) => {
            const active = st === 'stuck';
            const c = st === 'done' ? C.green : active ? C.amber : C.faint;
            const bg = st === 'done' ? C.greenSoft : active ? '#fdf2e2' : C.panel;
            return (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, ...inn(localTime, 0.6 + i * 0.16, 0.5, 12) }}>
                <div style={{ width: 30, height: 30, borderRadius: 9, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {st === 'done' ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4 10-11" stroke={C.green} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  ) : active ? (
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: C.amber }} />
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="5" y="10" width="14" height="10" rx="2" stroke={C.faint} strokeWidth="2" /><path d="M8 10V8a4 4 0 018 0v2" stroke={C.faint} strokeWidth="2" /></svg>
                  )}
                </div>
                <div style={{ fontFamily: DISP, fontWeight: active ? 700 : 600, fontSize: 19, color: active ? C.ink : st === 'done' ? C.sub : C.faint }}>{label}</div>
                {active && <div style={{ marginLeft: 'auto', fontFamily: MONO, fontSize: 12, color: C.amber, letterSpacing: '0.1em' }}>WAITING…</div>}
              </div>
            );
          })}
        </div>

        {/* ABANDONED stamp */}
        {abandon > 0.05 && (
          <div style={{
            position: 'absolute', right: 40, top: 150, transform: `rotate(-9deg) scale(${0.8 + 0.2 * Easing.easeOutBack(abandon)})`,
            opacity: abandon, border: `3px solid ${C.red}`, color: C.red, borderRadius: 12,
            padding: '8px 18px', fontFamily: DISP, fontWeight: 800, fontSize: 26, letterSpacing: '0.06em',
            background: 'rgba(255,255,255,0.6)',
          }}>ABANDONED</div>
        )}
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════
//  SCENE 1b — The statement
// ════════════════════════════════════════════════════════════════════════════
function SceneStatement() {
  const { localTime } = useSprite();
  return (
    <div style={{ position: 'absolute', inset: 0, background: C.bg, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', maxWidth: 1280, padding: '0 80px' }}>
        <div style={{ fontFamily: DISP, fontWeight: 800, fontSize: 78, lineHeight: 1.08, color: C.ink, letterSpacing: '-0.03em', ...inn(localTime, 0.12, 0.6, 30) }}>
          Borrowers rarely say no.
        </div>
        <div style={{ fontFamily: DISP, fontWeight: 800, fontSize: 78, lineHeight: 1.08, color: C.blue, letterSpacing: '-0.03em', marginTop: 4, ...inn(localTime, 0.5, 0.6, 30) }}>
          They just go quiet.
        </div>
        <div style={{ fontFamily: DISP, fontWeight: 600, fontSize: 27, color: C.sub, marginTop: 34, ...inn(localTime, 1.05, 0.6, 20) }}>
          Up to <span style={{ color: C.ink, fontWeight: 800 }}>1 in 3</span> approved loans never reach disbursal — money reserved, never collected.
        </div>
      </div>
      <div style={{ marginTop: 56, display: 'flex', alignItems: 'center', gap: 16, ...inn(localTime, 1.7, 0.6, 18) }}>
        <NudgeMark size={52} r={15} />
        <div style={{ fontFamily: DISP, fontWeight: 700, fontSize: 30, color: C.ink, letterSpacing: '-0.02em' }}>
          NudgeFlow brings them back.
        </div>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════
//  SCENE 2 — Ops dashboard + human-in-the-loop
// ════════════════════════════════════════════════════════════════════════════
function BrowserChrome({ url, children, w = 1640, h = 880 }) {
  return (
    <div style={{ width: w, height: h, borderRadius: 18, overflow: 'hidden', background: '#fff', border: `1px solid ${C.line}`, boxShadow: '0 40px 100px rgba(15,31,61,0.16)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: 52, background: C.panel, borderBottom: `1px solid ${C.line}`, display: 'flex', alignItems: 'center', gap: 8, padding: '0 18px', flexShrink: 0 }}>
        <div style={{ display: 'flex', gap: 8 }}>
          {['#ff5f57', '#febc2e', '#28c840'].map((c) => <div key={c} style={{ width: 13, height: 13, borderRadius: '50%', background: c }} />)}
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <div style={{ background: '#fff', border: `1px solid ${C.line}`, borderRadius: 9, padding: '6px 20px', fontFamily: MONO, fontSize: 14, color: C.sub, minWidth: 360, textAlign: 'center' }}>{url}</div>
        </div>
        <div style={{ width: 52 }} />
      </div>
      <div style={{ flex: 1, position: 'relative', minHeight: 0 }}>{children}</div>
    </div>
  );
}

function SceneDashboard() {
  const { localTime } = useSprite();
  const rows = [
    { name: 'Surinder Singh', firm: 'Surinder Traders', loan: 100000, loc: 'New Delhi', blk: 'No movement', pr: 'P2' },
    { name: 'Rahul Das', firm: 'Rahul Store', loan: 95000, loc: 'West Bengal', blk: 'App error', pr: 'P3' },
    { name: 'Kamini M. Patel', firm: 'Kamini Imitation', loan: 80000, loc: 'Surat, GJ', blk: 'Bill mismatch', pr: 'P1', hi: true },
  ];
  const prColor = { P1: C.red, P2: C.amber, P3: C.faint };

  // panel slides in at 3.4; cursor moves to Approve button and clicks at 6.1
  const panelIn = clamp((localTime - 3.4) / 0.6, 0, 1);
  // cursor path
  const cx = interpolate([4.6, 6.0, 6.1, 7.4], [1180, 1352, 1352, 1352], Easing.easeInOutCubic)(localTime);
  const cy = interpolate([4.6, 6.0, 6.1, 7.4], [560, 726, 726, 726], Easing.easeInOutCubic)(localTime);
  const sent = localTime > 6.18;

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#eef2f8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ ...inn(localTime, 0.15, 0.6, 26) }}>
        <BrowserChrome url="localhost:3050 / recovery-queue">
          {/* dashboard header */}
          <div style={{ display: 'flex', height: '100%' }}>
            <div style={{ flex: 1, padding: '26px 30px', minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <NudgeMark size={38} r={11} />
                <Wordmark size={23} />
                <div style={{ marginLeft: 10, padding: '5px 12px', borderRadius: 8, background: C.blueSoft, fontFamily: DISP, fontWeight: 700, fontSize: 14, color: C.blueD }}>Tenant · ClickPe</div>
              </div>
              <div style={{ marginTop: 22, display: 'flex', alignItems: 'baseline', gap: 14 }}>
                <div style={{ fontFamily: DISP, fontWeight: 800, fontSize: 30, color: C.ink, letterSpacing: '-0.02em' }}>Recovery Queue</div>
                <div style={{ fontFamily: DISP, fontWeight: 600, fontSize: 17, color: C.sub }}>
                  <Counter to={142} at={0.5} dur={1.2} fmt={(v) => Math.round(v).toString()} /> drop-offs ingested today
                </div>
              </div>

              {/* table head */}
              <div style={{ marginTop: 22, display: 'grid', gridTemplateColumns: '1.6fr 1fr 1.1fr 1.2fr 0.7fr', gap: 10, padding: '0 16px 12px', fontFamily: MONO, fontSize: 12.5, letterSpacing: '0.08em', color: C.faint, textTransform: 'uppercase', borderBottom: `1px solid ${C.line}` }}>
                <span>Borrower</span><span>Loan</span><span>Location</span><span>Blocker</span><span>Priority</span>
              </div>
              {rows.map((r, i) => {
                const st = inn(localTime, 0.9 + i * 0.22, 0.5, 14);
                const hi = r.hi;
                return (
                  <div key={i} style={{
                    display: 'grid', gridTemplateColumns: '1.6fr 1fr 1.1fr 1.2fr 0.7fr', gap: 10, alignItems: 'center',
                    padding: '16px', marginTop: 8, borderRadius: 12,
                    background: hi ? C.blueSoft : '#fff', border: `1.5px solid ${hi ? C.blue : C.line}`,
                    ...st,
                  }}>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ fontFamily: DISP, fontWeight: 700, fontSize: 18, color: C.ink }}>{r.name}</div>
                      <div style={{ fontFamily: DISP, fontWeight: 500, fontSize: 14, color: C.sub }}>{r.firm}</div>
                    </div>
                    <div style={{ fontFamily: MONO, fontWeight: 600, fontSize: 17, color: C.ink }}>{INR(r.loan)}</div>
                    <div style={{ fontFamily: DISP, fontWeight: 600, fontSize: 16, color: C.sub }}>{r.loc}</div>
                    <div style={{ fontFamily: DISP, fontWeight: 600, fontSize: 15, color: hi ? C.blueD : C.sub }}>{r.blk}</div>
                    <div><span style={{ fontFamily: MONO, fontWeight: 700, fontSize: 13, color: '#fff', background: prColor[r.pr], padding: '4px 10px', borderRadius: 7 }}>{r.pr}</span></div>
                  </div>
                );
              })}
            </div>

            {/* HITL panel */}
            <div style={{
              width: 430, flexShrink: 0, borderLeft: `1px solid ${C.line}`, background: C.panel,
              padding: '26px 26px', transform: `translateX(${(1 - panelIn) * 100}%)`, opacity: panelIn,
              display: 'flex', flexDirection: 'column',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: C.blue }} />
                <div style={{ fontFamily: MONO, fontSize: 13, letterSpacing: '0.12em', color: C.blueD, textTransform: 'uppercase' }}>AI-drafted outreach</div>
              </div>
              <div style={{ fontFamily: DISP, fontWeight: 800, fontSize: 22, color: C.ink, marginTop: 12, letterSpacing: '-0.01em' }}>Kamini M. Patel</div>
              <div style={{ fontFamily: DISP, fontWeight: 600, fontSize: 14.5, color: C.sub, marginTop: 2 }}>WhatsApp template · Neha (agent)</div>

              <div style={{ marginTop: 18, background: '#fff', border: `1px solid ${C.line}`, borderRadius: 14, padding: '18px 18px' }}>
                <div style={{ fontFamily: DISP, fontWeight: 500, fontSize: 17, lineHeight: 1.5, color: C.ink }}>
                  Namaste Kamini ji 🙏 Aapka {INR(80000)} ka ClickPe business loan bas ek step door hai. Neeche tap karke application complete kijiye.
                </div>
                <div style={{ marginTop: 14, borderTop: `1px solid ${C.line}`, paddingTop: 12, textAlign: 'center', fontFamily: DISP, fontWeight: 700, fontSize: 15.5, color: C.blue }}>
                  ↗ Resume Application
                </div>
              </div>

              <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['Language matched · Hinglish', 'Within 08:00–19:00 outreach window', 'Compliant template · no incentives'].map((t, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: DISP, fontWeight: 600, fontSize: 13.5, color: C.sub }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4 10-11" stroke={C.green} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>{t}
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 'auto', paddingTop: 18 }}>
                <div style={{
                  height: 56, borderRadius: 13, background: sent ? C.green : C.blue, color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                  fontFamily: DISP, fontWeight: 700, fontSize: 18, boxShadow: `0 10px 24px ${sent ? 'rgba(21,163,91,0.3)' : 'rgba(37,99,235,0.3)'}`,
                }}>
                  {sent ? (<><svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4 10-11" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>Sent via WhatsApp</>) : 'Approve & Send'}
                </div>
                <div style={{ textAlign: 'center', marginTop: 10, fontFamily: DISP, fontWeight: 600, fontSize: 13, color: C.faint }}>Human-in-the-loop · nothing sends without you</div>
              </div>
            </div>
          </div>
        </BrowserChrome>
      </div>

      {localTime > 4.6 && localTime < 7.6 && <Cursor x={cx} y={cy} clickAt={6.1} localTime={localTime} />}
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════
//  SCENE 3 — WhatsApp recovery conversation
// ════════════════════════════════════════════════════════════════════════════
function Bubble({ side, children, cta, sub, time }) {
  const out = side === 'out';
  return (
    <div style={{ display: 'flex', justifyContent: out ? 'flex-end' : 'flex-start' }}>
      <div style={{ maxWidth: 360, background: out ? C.waOut : '#fff', borderRadius: 14, borderTopLeftRadius: out ? 14 : 4, borderTopRightRadius: out ? 4 : 14, padding: '10px 13px 7px', boxShadow: '0 1px 1px rgba(0,0,0,0.08)' }}>
        {sub && <div style={{ fontFamily: DISP, fontWeight: 800, fontSize: 13.5, color: C.blue, marginBottom: 3 }}>{sub}</div>}
        <div style={{ fontFamily: DISP, fontWeight: 500, fontSize: 17, lineHeight: 1.42, color: C.ink }}>{children}</div>
        {cta && (
          <div style={{ marginTop: 9, marginLeft: -13, marginRight: -13, marginBottom: -7, borderTop: `1px solid ${C.line}`, padding: '10px 0 9px', textAlign: 'center', fontFamily: DISP, fontWeight: 700, fontSize: 15.5, color: C.blue, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M9 7h8v8" stroke={C.blue} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>{cta}
          </div>
        )}
        <div style={{ fontFamily: DISP, fontSize: 11.5, color: C.faint, textAlign: 'right', marginTop: 3 }}>{time} {out && <span style={{ color: '#34b7f1' }}>✓✓</span>}</div>
      </div>
    </div>
  );
}

function Typing() {
  const t = useTime();
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
      <div style={{ background: '#fff', borderRadius: 14, borderTopLeftRadius: 4, padding: '13px 16px', display: 'flex', gap: 5, boxShadow: '0 1px 1px rgba(0,0,0,0.08)' }}>
        {[0, 1, 2].map((i) => {
          const o = 0.3 + 0.7 * (0.5 + 0.5 * Math.sin(t * 7 - i * 0.9));
          return <div key={i} style={{ width: 8, height: 8, borderRadius: '50%', background: C.faint, opacity: o }} />;
        })}
      </div>
    </div>
  );
}

function SceneChat() {
  const { localTime } = useSprite();

  // conversation script with reveal times (sprite-local seconds)
  const msgs = [
    { at: 0.4, side: 'in', sub: 'Neha · ClickPe', time: '10:02', node: <>Namaste Kamini ji 🙏 Aapka <b>{INR(80000)}</b> ka ClickPe loan bas ek step door hai.</>, cta: 'Resume Application' },
    { at: 2.1, side: 'out', time: '10:04', node: <>Bill upload nahi ho raha 😕</> },
    { typing: true, at: 2.9, until: 3.5 },
    { at: 3.5, side: 'in', time: '10:04', node: <>Koi baat nahi! Kya bijli ka bill aapke <b>naam</b> par nahi hai?</> },
    { at: 4.8, side: 'out', time: '10:05', node: <>haan, papa ke naam pe hai</> },
    { typing: true, at: 5.6, until: 6.3 },
    { at: 6.3, side: 'in', time: '10:05', node: <>Tension mat lijiye 🛡️ Apne <b>father ka Aadhaar</b> aur <b>relationship proof</b> upload kar dijiye — Muthoot policy allow karti hai.</>, cta: 'Upload Documents' },
    { at: 8.4, side: 'out', time: '10:08', node: <>ho gaya, dono upload kar diye ✅</> },
    { typing: true, at: 9.2, until: 9.9 },
    { at: 9.9, side: 'in', time: '10:08', node: <>Perfect! 🎉 <b>{INR(76814)}</b> 24 ghante mein aapke account mein aa jayenge.</> },
  ];

  // annotations on the left — what the AI is doing
  const notes = [
    { at: 3.8, title: 'Detects language', body: 'Replies in Hinglish, matching the borrower' },
    { at: 6.5, title: 'Recognises blocker', body: 'Bill mismatch → applies Muthoot rescue policy' },
    { at: 10.1, title: 'Resolves & confirms', body: 'Application unblocked, disbursal scheduled' },
  ];

  const visible = msgs.filter((m) => localTime >= m.at && (!m.typing || localTime < m.until));
  // gentle zoom on phone
  const zoom = 1 + 0.03 * Easing.easeInOutSine(clamp(localTime / 11, 0, 1));

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#f3f1ec', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 70 }}>
      {/* left annotations */}
      <div style={{ width: 430, display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{ ...inn(localTime, 0.2, 0.6, 18) }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
            <div style={{ width: 46, height: 46, borderRadius: 13, background: `linear-gradient(150deg, ${C.blue}, ${C.blueD})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: DISP, fontWeight: 800, fontSize: 22, color: '#fff' }}>N</div>
            <div>
              <div style={{ fontFamily: DISP, fontWeight: 800, fontSize: 22, color: C.ink, letterSpacing: '-0.01em' }}>Neha takes over</div>
              <div style={{ fontFamily: DISP, fontWeight: 600, fontSize: 15, color: C.sub }}>AI agent · live on WhatsApp</div>
            </div>
          </div>
        </div>
        {notes.map((n, i) => {
          const st = inn(localTime, n.at, 0.5, 16);
          return (
            <div key={i} style={{ background: '#fff', border: `1px solid ${C.line}`, borderLeft: `4px solid ${C.blue}`, borderRadius: 12, padding: '15px 17px', boxShadow: '0 6px 18px rgba(15,31,61,0.05)', ...st }}>
              <div style={{ fontFamily: MONO, fontSize: 12, letterSpacing: '0.1em', color: C.blueD, textTransform: 'uppercase' }}>{n.title}</div>
              <div style={{ fontFamily: DISP, fontWeight: 600, fontSize: 17, color: C.ink, marginTop: 5, lineHeight: 1.35 }}>{n.body}</div>
            </div>
          );
        })}
      </div>

      {/* phone */}
      <div style={{ transform: `scale(${zoom})`, ...inn(localTime, 0.3, 0.7, 30) }}>
        <div style={{ width: 392, height: 812, background: '#0b1220', borderRadius: 52, padding: 12, boxShadow: '0 50px 110px rgba(15,31,61,0.28)' }}>
          <div style={{ width: '100%', height: '100%', borderRadius: 42, overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative', background: C.waBg }}>
            {/* status bar */}
            <div style={{ height: 30, background: C.wa, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', fontFamily: DISP, fontWeight: 700, fontSize: 13, color: '#fff' }}>
              <span>9:41</span><span style={{ letterSpacing: '0.1em' }}>5G ▥</span>
            </div>
            {/* wa header */}
            <div style={{ background: C.wa, padding: '8px 16px 12px', display: 'flex', alignItems: 'center', gap: 11, flexShrink: 0 }}>
              <div style={{ color: '#fff', fontSize: 22 }}>‹</div>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: DISP, fontWeight: 800, fontSize: 19, color: C.blue }}>N</div>
              <div>
                <div style={{ fontFamily: DISP, fontWeight: 700, fontSize: 17, color: '#fff' }}>Neha · ClickPe</div>
                <div style={{ fontFamily: DISP, fontWeight: 500, fontSize: 12.5, color: 'rgba(255,255,255,0.8)' }}>online</div>
              </div>
            </div>
            {/* chat body */}
            <div style={{ flex: 1, padding: '14px 14px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 9, minHeight: 0 }}>
              <div style={{ alignSelf: 'center', background: '#e3e9d8', borderRadius: 8, padding: '4px 12px', fontFamily: DISP, fontWeight: 600, fontSize: 12, color: C.sub, marginBottom: 4 }}>TODAY</div>
              {visible.map((m, i) => {
                if (m.typing) return <Typing key={'t' + i} />;
                const pop = Easing.easeOutBack(clamp((localTime - m.at) / 0.32, 0, 1));
                return (
                  <div key={i} style={{ transform: `scale(${0.9 + 0.1 * pop})`, transformOrigin: m.side === 'out' ? 'bottom right' : 'bottom left', opacity: clamp((localTime - m.at) / 0.2, 0, 1) }}>
                    <Bubble side={m.side} cta={m.cta} sub={m.sub} time={m.time}>{m.node}</Bubble>
                  </div>
                );
              })}
            </div>
            {/* input */}
            <div style={{ flexShrink: 0, padding: '8px 12px 14px', display: 'flex', gap: 8, alignItems: 'center' }}>
              <div style={{ flex: 1, height: 40, background: '#fff', borderRadius: 22, display: 'flex', alignItems: 'center', padding: '0 16px', fontFamily: DISP, fontSize: 15, color: C.faint }}>Message</div>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: C.wa, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 12l16-8-6 16-3-7-7-1z" fill="#fff" /></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════
//  SCENE 3b — Voice channel · retries & follow-up
// ════════════════════════════════════════════════════════════════════════════
function Waveform({ active }) {
  const t = useTime();
  const N = 30;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4, height: 64 }}>
      {Array.from({ length: N }).map((_, i) => {
        const env = active ? (0.25 + 0.75 * Math.abs(Math.sin(t * 5.5 + i * 0.55)) * (0.45 + 0.55 * Math.abs(Math.sin(i * 1.1 + t)))) : 0.1;
        const h = 6 + env * 56;
        return <div key={i} style={{ flex: 1, height: h, borderRadius: 3, background: i % 2 ? C.blue : C.blueD, opacity: active ? 1 : 0.4 }} />;
      })}
    </div>
  );
}

function SceneVoice() {
  const { localTime } = useSprite();
  const connected = localTime > 1.9;
  const callDur = Math.max(0, localTime - 2.2);
  const mm = String(Math.floor(callDur / 60)).padStart(2, '0');
  const ss = String(Math.floor(callDur % 60)).padStart(2, '0');

  const attempts = [
    { n: '01', time: '10:24 AM', status: 'No answer', color: C.faint, at: 0.5 },
    { n: '02', time: '11:08 AM', status: 'Busy · auto-retry', color: C.amber, at: 1.1 },
    { n: '03', time: '6:15 PM', status: 'Connected', color: C.green, at: 1.8, hi: true },
  ];
  const lines = [
    { at: 2.8, side: 'in', who: 'Neha', text: <>Namaste Surinder ji, ClickPe se Neha. Aapka <b>₹1,00,000</b> ka loan bas ek step door hai.</> },
    { at: 4.8, side: 'out', who: 'Surinder', text: <>haan, batao kya karna hai</> },
    { at: 6.3, side: 'in', who: 'Neha', text: <>Main abhi WhatsApp par link bhej deti hoon — ek tap mein ho jayega.</> },
  ];

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#eef2f8', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 56 }}>
      {/* left — persistence timeline */}
      <div style={{ width: 470, display: 'flex', flexDirection: 'column', gap: 13 }}>
        <div style={{ ...inn(localTime, 0.15, 0.6, 18) }}>
          <div style={{ fontFamily: MONO, fontSize: 13, letterSpacing: '0.14em', color: C.blueD, textTransform: 'uppercase' }}>Not just WhatsApp</div>
          <div style={{ fontFamily: DISP, fontWeight: 800, fontSize: 32, color: C.ink, letterSpacing: '-0.02em', marginTop: 6 }}>It calls, retries & follows up.</div>
          <div style={{ fontFamily: DISP, fontWeight: 600, fontSize: 16, color: C.sub, marginTop: 4 }}>Surinder Singh · ₹1,00,000 · no movement</div>
        </div>
        {attempts.map((a, i) => {
          const st = inn(localTime, a.at, 0.5, 16);
          return (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, background: '#fff', border: `1.5px solid ${a.hi ? C.green : C.line}`, borderRadius: 12, padding: '13px 16px', boxShadow: '0 5px 16px rgba(15,31,61,0.05)', ...st }}>
              <div style={{ fontFamily: MONO, fontWeight: 700, fontSize: 14, color: C.faint, width: 22 }}>{a.n}</div>
              <div style={{ width: 34, height: 34, borderRadius: 10, background: a.hi ? C.greenSoft : C.panel, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 005 5l1.5-2 4 1.5v3a1.5 1.5 0 01-1.6 1.5C11.5 23 4 15.5 5 5.6A1.5 1.5 0 016.5 4z" stroke={a.color} strokeWidth="1.8" strokeLinejoin="round" /></svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: DISP, fontWeight: 700, fontSize: 16, color: C.ink }}>Voice call <span style={{ color: C.faint, fontWeight: 600 }}>· {a.time}</span></div>
                <div style={{ fontFamily: DISP, fontWeight: 600, fontSize: 14, color: a.color }}>{a.status}</div>
              </div>
              {a.hi && <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4 10-11" stroke={C.green} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>}
            </div>
          );
        })}
        <div style={{ fontFamily: DISP, fontWeight: 600, fontSize: 13.5, color: C.faint, marginTop: 2, lineHeight: 1.4, ...inn(localTime, 4.9, 0.5, 10) }}>Auto-retry on busy / no-answer — only inside calling windows (10–11:30 AM &amp; 6–9 PM IST).</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 2, padding: '12px 16px', borderRadius: 12, background: C.blueSoft, ...inn(localTime, 5.4, 0.5, 14) }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke={C.blueD} strokeWidth="2" /><path d="M12 7.5V12l3 2" stroke={C.blueD} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          <div style={{ fontFamily: DISP, fontWeight: 700, fontSize: 15.5, color: C.blueD }}>Follow-up auto-scheduled · tomorrow 10:30 AM</div>
        </div>
      </div>

      {/* right — live call card */}
      <div style={{ width: 440, ...inn(localTime, 0.3, 0.6, 26) }}>
        <div style={{ background: '#fff', borderRadius: 24, border: `1px solid ${C.line}`, boxShadow: '0 40px 90px rgba(15,31,61,0.16)', overflow: 'hidden' }}>
          <div style={{ background: C.ink, padding: '15px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: connected ? C.green : C.amber }} />
              <div style={{ fontFamily: MONO, fontSize: 12.5, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.85)', textTransform: 'uppercase' }}>Outbound AI Voice · Bolna</div>
            </div>
            <div style={{ fontFamily: MONO, fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>{mm}:{ss}</div>
          </div>
          <div style={{ padding: '24px 26px 24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: `linear-gradient(150deg, ${C.blue}, ${C.blueD})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: DISP, fontWeight: 800, fontSize: 24, color: '#fff' }}>S</div>
              <div>
                <div style={{ fontFamily: DISP, fontWeight: 800, fontSize: 22, color: C.ink, letterSpacing: '-0.01em' }}>Surinder Singh</div>
                <div style={{ fontFamily: DISP, fontWeight: 600, fontSize: 15, color: connected ? C.green : C.sub }}>{connected ? 'Connected — Hinglish' : 'Calling…'}</div>
              </div>
            </div>
            <div style={{ marginTop: 20 }}><Waveform active={connected} /></div>
            <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 9, minHeight: 156 }}>
              {lines.filter((l) => localTime >= l.at).map((l, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: l.side === 'out' ? 'flex-end' : 'flex-start', ...inn(localTime, l.at, 0.4, 10) }}>
                  <div style={{ maxWidth: 320, background: l.side === 'out' ? C.panel : C.blueSoft, borderRadius: 13, padding: '9px 13px' }}>
                    <div style={{ fontFamily: DISP, fontWeight: 800, fontSize: 12, color: l.side === 'out' ? C.faint : C.blueD, marginBottom: 2 }}>{l.who}</div>
                    <div style={{ fontFamily: DISP, fontWeight: 500, fontSize: 15.5, lineHeight: 1.4, color: C.ink }}>{l.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════
//  SCENE 3c — Closing the loop · inference → CRM sync
// ════════════════════════════════════════════════════════════════════════════
function SceneSync() {
  const { localTime } = useSprite();
  const signals = [
    { at: 0.6, k: 'Intent', v: 'High', color: C.green },
    { at: 1.1, k: 'Disposition', v: 'Will resume application', color: C.ink },
    { at: 1.6, k: 'Blocker', v: 'Bill mismatch → resolved', color: C.ink },
    { at: 2.1, k: 'Best follow-up', v: 'Tomorrow, 10:30 AM', color: C.blueD },
  ];
  const crmFields = [
    { at: 2.9, k: 'Lead status', v: 'In progress → Reactivated' },
    { at: 3.3, k: 'Next action', v: 'Send resume link · WhatsApp' },
    { at: 3.7, k: 'Call summary', v: 'Docs uploaded; confirmed interest' },
  ];
  const connectors = ['Salesforce', 'HubSpot', 'Zoho', 'LeadSquared'];
  const synced = localTime > 4.3;

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#eef2f8', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', maxWidth: 1300, ...inn(localTime, 0.15, 0.6, 20) }}>
        <div style={{ fontFamily: MONO, fontSize: 13, letterSpacing: '0.14em', color: C.blueD, textTransform: 'uppercase' }}>Closing the loop</div>
        <div style={{ fontFamily: DISP, fontWeight: 800, fontSize: 46, color: C.ink, letterSpacing: '-0.02em', marginTop: 6 }}>It reads every reply — and updates your CRM.</div>
        <div style={{ fontFamily: DISP, fontWeight: 600, fontSize: 18, color: C.sub, marginTop: 6 }}>Intent, disposition and next steps — inferred from the chat and the call.</div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 32, marginTop: 42 }}>
        {/* left — inference */}
        <div style={{ width: 480, background: '#fff', borderRadius: 20, border: `1px solid ${C.line}`, boxShadow: '0 24px 60px rgba(15,31,61,0.1)', padding: '22px 24px', ...inn(localTime, 0.4, 0.6, 22) }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ fontFamily: DISP, fontWeight: 800, fontSize: 18, color: C.ink }}>AI inference</div>
            <div style={{ display: 'flex', gap: 8 }}>
              {[['WhatsApp', C.green], ['Voice', C.blue]].map(([n, c]) => (
                <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '5px 10px', borderRadius: 8, background: C.panel }}>
                  <div style={{ width: 7, height: 7, borderRadius: '50%', background: c }} />
                  <span style={{ fontFamily: DISP, fontWeight: 700, fontSize: 13, color: C.sub }}>{n}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 11 }}>
            {signals.map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', ...inn(localTime, s.at, 0.45, 12) }}>
                <span style={{ fontFamily: MONO, fontSize: 13, color: C.faint, letterSpacing: '0.04em' }}>{s.k}</span>
                <span style={{ fontFamily: DISP, fontWeight: 700, fontSize: 16.5, color: s.color }}>{s.v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* flow arrow */}
        <div style={{ width: 78, height: 40, position: 'relative', display: 'flex', alignItems: 'center' }}>
          <div style={{ position: 'absolute', left: 0, right: 12, top: '50%', height: 2, background: C.line }} />
          {[0, 1, 2].map((i) => {
            const p = ((localTime * 0.9 + i * 0.33) % 1);
            return <div key={i} style={{ position: 'absolute', top: '50%', marginTop: -3.5, left: `${p * 62}px`, width: 7, height: 7, borderRadius: '50%', background: C.blue, opacity: localTime > 2.2 ? 1 : 0 }} />;
          })}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ position: 'absolute', right: 0, top: '50%', marginTop: -8 }}><path d="M5 12h13M12 6l6 6-6 6" stroke={C.blue} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>

        {/* right — CRM record */}
        <div style={{ width: 480, background: '#fff', borderRadius: 20, border: `1.5px solid ${synced ? C.green : C.line}`, boxShadow: '0 24px 60px rgba(15,31,61,0.1)', padding: '22px 24px', ...inn(localTime, 0.7, 0.6, 22) }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ fontFamily: DISP, fontWeight: 800, fontSize: 18, color: C.ink }}>Your CRM</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '5px 11px', borderRadius: 8, background: synced ? C.greenSoft : C.panel }}>
              {synced && <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4 10-11" stroke={C.green} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>}
              <span style={{ fontFamily: DISP, fontWeight: 700, fontSize: 13, color: synced ? C.green : C.faint }}>{synced ? 'Synced' : 'Writing…'}</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 7, marginTop: 12, flexWrap: 'wrap' }}>
            {connectors.map((c, i) => (
              <div key={c} style={{ padding: '5px 11px', borderRadius: 999, background: i === 0 ? C.blueSoft : C.panel, border: `1px solid ${i === 0 ? C.blue : C.line}`, fontFamily: DISP, fontWeight: 700, fontSize: 12.5, color: i === 0 ? C.blueD : C.faint }}>{c}{i === 0 ? ' · connected' : ''}</div>
            ))}
          </div>
          <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 11 }}>
            {crmFields.map((s, i) => (
              <div key={i} style={{ ...inn(localTime, s.at, 0.45, 12) }}>
                <div style={{ fontFamily: MONO, fontSize: 12, color: C.faint, letterSpacing: '0.04em' }}>{s.k}</div>
                <div style={{ fontFamily: DISP, fontWeight: 700, fontSize: 16.5, color: C.ink, marginTop: 2 }}>{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════
//  SCENE 4 — The win
// ════════════════════════════════════════════════════════════════════════════
function SceneWin() {
  const { localTime } = useSprite();
  const bars = [0.3, 0.42, 0.38, 0.55, 0.6, 0.74, 0.9];
  return (
    <div style={{ position: 'absolute', inset: 0, background: C.bg, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '0 90px' }}>
      <div style={{ textAlign: 'center', ...inn(localTime, 0.2, 0.7, 24) }}>
        <div style={{ fontFamily: DISP, fontWeight: 800, fontSize: 60, color: C.ink, letterSpacing: '-0.03em' }}>
          From abandoned to <span style={{ color: C.green }}>disbursed</span>.
        </div>
      </div>

      <div style={{ display: 'flex', gap: 28, marginTop: 48, alignItems: 'stretch' }}>
        {/* Kamini outcome card */}
        <div style={{ width: 560, background: '#fff', border: `1.5px solid ${C.greenSoft}`, borderRadius: 22, padding: '30px 32px', boxShadow: '0 24px 60px rgba(15,31,61,0.1)', ...inn(localTime, 0.6, 0.6, 22) }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontFamily: DISP, fontWeight: 800, fontSize: 26, color: C.ink, letterSpacing: '-0.01em', whiteSpace: 'nowrap' }}>Kamini M. Patel</div>
              <div style={{ fontFamily: DISP, fontWeight: 600, fontSize: 16, color: C.sub, marginTop: 2 }}>Kamini Imitation · Surat</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: C.greenSoft, padding: '8px 14px', borderRadius: 10, ...inn(localTime, 1.4, 0.5, 0) }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4 10-11" stroke={C.green} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <span style={{ fontFamily: DISP, fontWeight: 800, fontSize: 15, color: C.green, letterSpacing: '0.04em' }}>RECOVERED</span>
            </div>
          </div>
          <div style={{ marginTop: 26, display: 'flex', alignItems: 'flex-end', gap: 14 }}>
            <div style={{ fontFamily: DISP, fontWeight: 800, fontSize: 56, color: C.green, letterSpacing: '-0.02em' }}>
              <Counter to={76814} at={1.0} dur={1.6} fmt={(v) => INR(Math.round(v))} />
            </div>
            <div style={{ fontFamily: DISP, fontWeight: 600, fontSize: 17, color: C.sub, paddingBottom: 12 }}>disbursed to account</div>
          </div>
          <div style={{ marginTop: 8, height: 8, borderRadius: 6, background: C.line, overflow: 'hidden' }}>
            <div style={{ width: `${interpolate([1.0, 2.4], [0, 100], Easing.easeOutCubic)(localTime)}%`, height: '100%', background: C.green, borderRadius: 6 }} />
          </div>
          <div style={{ marginTop: 16, fontFamily: DISP, fontWeight: 600, fontSize: 15, color: C.faint }}>Status synced from lender · 4 messages · 0 human minutes</div>
        </div>

        {/* aggregate tile */}
        <div style={{ width: 420, background: C.ink, borderRadius: 22, padding: '30px 32px', display: 'flex', flexDirection: 'column', boxShadow: '0 24px 60px rgba(15,31,61,0.2)', ...inn(localTime, 0.85, 0.6, 22) }}>
          <div style={{ fontFamily: MONO, fontSize: 13, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase' }}>This week · ClickPe</div>
          <div style={{ fontFamily: DISP, fontWeight: 800, fontSize: 64, color: '#fff', letterSpacing: '-0.03em', marginTop: 8 }}>
            <Counter to={34} at={1.1} dur={1.6} fmt={(v) => Math.round(v) + '%'} />
          </div>
          <div style={{ fontFamily: DISP, fontWeight: 600, fontSize: 17, color: 'rgba(255,255,255,0.75)' }}>of abandoned loans reactivated</div>
          {/* bars */}
          <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'flex-end', gap: 9, height: 90 }}>
            {bars.map((h, i) => {
              const t = Easing.easeOutCubic(clamp((localTime - 1.3 - i * 0.08) / 0.5, 0, 1));
              return <div key={i} style={{ flex: 1, height: `${h * 90 * t}px`, background: i === bars.length - 1 ? C.green : 'rgba(255,255,255,0.3)', borderRadius: 4 }} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════════════════
//  SCENE 5 — Close
// ════════════════════════════════════════════════════════════════════════════
function SceneClose() {
  const { localTime } = useSprite();
  const feats = ['Hinglish AI agent', 'WhatsApp + Voice', 'Human-in-the-loop', 'Multi-tenant'];
  return (
    <div style={{ position: 'absolute', inset: 0, background: C.bg, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20, ...inn(localTime, 0.2, 0.7, 26) }}>
        <NudgeMark size={88} r={24} />
        <Wordmark size={72} />
      </div>
      <div style={{ fontFamily: DISP, fontWeight: 600, fontSize: 29, color: C.sub, marginTop: 26, ...inn(localTime, 0.7, 0.7, 20) }}>
        WhatsApp <span style={{ color: C.ink, fontWeight: 800 }}>+ voice</span> loan recovery, <span style={{ color: C.ink, fontWeight: 800 }}>on autopilot.</span>
      </div>
      <div style={{ display: 'flex', gap: 14, marginTop: 40 }}>
        {feats.map((f, i) => (
          <div key={i} style={{ padding: '11px 20px', borderRadius: 999, whiteSpace: 'nowrap', background: C.blueSoft, fontFamily: DISP, fontWeight: 700, fontSize: 17, color: C.blueD, ...inn(localTime, 1.2 + i * 0.12, 0.5, 14) }}>{f}</div>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, marginTop: 64, ...inn(localTime, 1.5, 0.7, 16) }}>
        <div style={{ fontFamily: MONO, fontSize: 13, letterSpacing: '0.18em', color: C.faint, textTransform: 'uppercase' }}>Built by</div>
        <img src="uploads/diverselabs-logo.png" alt="Diverse Labs" style={{ height: 46 }} />
      </div>
    </div>
  );
}

// ── per-second label ticker (for comment context) ───────────────────────────
function LabelTicker() {
  const t = useTime();
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current) ref.current.parentElement?.setAttribute('data-screen-label', String(Math.floor(t)) + 's');
  }, [Math.floor(t)]);
  return <div ref={ref} style={{ display: 'none' }} />;
}

// ════════════════════════════════════════════════════════════════════════════
function NudgeFlowReel() {
  return (
    <div style={{ position: 'absolute', inset: 0, background: C.bg, fontFamily: DISP }} data-screen-label="0s">
      <Sprite start={0}    end={4.4}><Layer><SceneAbandon /></Layer></Sprite>
      <Sprite start={4.2}  end={8.0}><Layer><SceneStatement /></Layer></Sprite>
      <Sprite start={7.8}  end={16.0}><Layer><SceneDashboard /></Layer></Sprite>
      <Sprite start={15.8} end={27.0}><Layer><SceneChat /></Layer></Sprite>
      <Sprite start={26.8} end={35.0}><Layer><SceneVoice /></Layer></Sprite>
      <Sprite start={34.8} end={40.2}><Layer><SceneSync /></Layer></Sprite>
      <Sprite start={40.0} end={44.6}><Layer><SceneWin /></Layer></Sprite>
      <Sprite start={44.4} end={48.5}><Layer fout={0.3}><SceneClose /></Layer></Sprite>
      <LabelTicker />
    </div>
  );
}
window.NudgeFlowReel = NudgeFlowReel;
