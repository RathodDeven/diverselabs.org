// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// animations.jsx
// Reusable animation starter: Stage, Timeline, Sprite, easing helpers.
// Exports (to window): Stage, Sprite, PlaybackBar, TextSprite, ImageSprite, RectSprite,
//   useTime, useTimeline, useSprite, Easing, interpolate, animate, clamp.
//
// Usage (in an HTML file that loads React + Babel):
//
//   <Stage width={1280} height={720} duration={10} background="#f6f4ef">
//     <MyScene />
//   </Stage>
//
// <Stage> auto-scales to the viewport and provides the scrubber, play/pause,
// ←/→ seek, space, and 0-to-reset controls, and persists the playhead.
// Inside <Stage>, any child can call useTime() to read the current
// playhead (seconds). Or wrap content in <Sprite start={1} end={4}>...</Sprite>
// to only render during that window -- children receive a `localTime` and
// `progress` via the useSprite() hook. Use Easing + interpolate()/animate()
// for tweens; TextSprite / ImageSprite / RectSprite have built-in entry/exit.
// Build YOUR scenes by composing Sprites inside a Stage.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

// ── Easing functions (hand-rolled, Popmotion-style) ─────────────────────────
// All easings take t ∈ [0,1] and return eased t ∈ [0,1] (may overshoot for back/elastic).
const Easing = {
  linear: (t) => t,

  // Quad
  easeInQuad:    (t) => t * t,
  easeOutQuad:   (t) => t * (2 - t),
  easeInOutQuad: (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),

  // Cubic
  easeInCubic:    (t) => t * t * t,
  easeOutCubic:   (t) => (--t) * t * t + 1,
  easeInOutCubic: (t) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1),

  // Quart
  easeInQuart:    (t) => t * t * t * t,
  easeOutQuart:   (t) => 1 - (--t) * t * t * t,
  easeInOutQuart: (t) => (t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t),

  // Expo
  easeInExpo:  (t) => (t === 0 ? 0 : Math.pow(2, 10 * (t - 1))),
  easeOutExpo: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
  easeInOutExpo: (t) => {
    if (t === 0) return 0;
    if (t === 1) return 1;
    if (t < 0.5) return 0.5 * Math.pow(2, 20 * t - 10);
    return 1 - 0.5 * Math.pow(2, -20 * t + 10);
  },

  // Sine
  easeInSine:    (t) => 1 - Math.cos((t * Math.PI) / 2),
  easeOutSine:   (t) => Math.sin((t * Math.PI) / 2),
  easeInOutSine: (t) => -(Math.cos(Math.PI * t) - 1) / 2,

  // Back (overshoot)
  easeOutBack: (t) => {
    const c1 = 1.70158, c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  },
  easeInBack: (t) => {
    const c1 = 1.70158, c3 = c1 + 1;
    return c3 * t * t * t - c1 * t * t;
  },
  easeInOutBack: (t) => {
    const c1 = 1.70158, c2 = c1 * 1.525;
    return t < 0.5
      ? (Math.pow(2 * t, 2) * ((c2 + 1) * 2 * t - c2)) / 2
      : (Math.pow(2 * t - 2, 2) * ((c2 + 1) * (t * 2 - 2) + c2) + 2) / 2;
  },

  // Elastic
  easeOutElastic: (t) => {
    const c4 = (2 * Math.PI) / 3;
    if (t === 0) return 0;
    if (t === 1) return 1;
    return Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
  },
};

// ── Core interpolation helpers ──────────────────────────────────────────────

// Clamp a value to [min, max]
const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

// interpolate([0, 0.5, 1], [0, 100, 50], ease?) -> fn(t)
// Popmotion-style: linearly maps t across input keyframes to output values,
// with optional easing per segment (single fn or array of fns).
function interpolate(input, output, ease = Easing.linear) {
  return (t) => {
    if (t <= input[0]) return output[0];
    if (t >= input[input.length - 1]) return output[output.length - 1];
    for (let i = 0; i < input.length - 1; i++) {
      if (t >= input[i] && t <= input[i + 1]) {
        const span = input[i + 1] - input[i];
        const local = span === 0 ? 0 : (t - input[i]) / span;
        const easeFn = Array.isArray(ease) ? (ease[i] || Easing.linear) : ease;
        const eased = easeFn(local);
        return output[i] + (output[i + 1] - output[i]) * eased;
      }
    }
    return output[output.length - 1];
  };
}

// animate({from, to, start, end, ease})(t) — simpler single-segment tween.
// Returns `from` before `start`, `to` after `end`.
function animate({ from = 0, to = 1, start = 0, end = 1, ease = Easing.easeInOutCubic }) {
  return (t) => {
    if (t <= start) return from;
    if (t >= end) return to;
    const local = (t - start) / (end - start);
    return from + (to - from) * ease(local);
  };
}

// ── Timeline context ────────────────────────────────────────────────────────

const TimelineContext = React.createContext({ time: 0, duration: 10, playing: false });

const useTime = () => React.useContext(TimelineContext).time;
const useTimeline = () => React.useContext(TimelineContext);

// ── Sprite ──────────────────────────────────────────────────────────────────
// Renders children only when the playhead is inside [start, end]. Provides
// a sub-context with `localTime` (seconds since start) and `progress` (0..1).
//
//   <Sprite start={2} end={5}>
//     {({ localTime, progress }) => <Thing x={progress * 100} />}
//   </Sprite>
//
// Or as a plain wrapper — children can call useSprite() themselves.

const SpriteContext = React.createContext({ localTime: 0, progress: 0, duration: 0 });
const useSprite = () => React.useContext(SpriteContext);

function Sprite({ start = 0, end = Infinity, children, keepMounted = false }) {
  const { time } = useTimeline();
  const visible = time >= start && time <= end;
  if (!visible && !keepMounted) return null;

  const duration = end - start;
  const localTime = Math.max(0, time - start);
  const progress = duration > 0 && isFinite(duration)
    ? clamp(localTime / duration, 0, 1)
    : 0;

  const value = { localTime, progress, duration, visible };

  return (
    <SpriteContext.Provider value={value}>
      {typeof children === 'function' ? children(value) : children}
    </SpriteContext.Provider>
  );
}

// ── Sample sprite components ────────────────────────────────────────────────

// TextSprite: fades/slides text in on entry, holds, then fades out on exit.
// Props: text, x, y, size, color, font, entryDur, exitDur, align
function TextSprite({
  text,
  x = 0, y = 0,
  size = 48,
  color = '#111',
  font = 'Inter, system-ui, sans-serif',
  weight = 600,
  entryDur = 0.45,
  exitDur = 0.35,
  entryEase = Easing.easeOutBack,
  exitEase = Easing.easeInCubic,
  align = 'left',
  letterSpacing = '-0.01em',
}) {
  const { localTime, duration } = useSprite();
  const exitStart = Math.max(0, duration - exitDur);

  let opacity = 1;
  let ty = 0;

  if (localTime < entryDur) {
    const t = entryEase(clamp(localTime / entryDur, 0, 1));
    opacity = t;
    ty = (1 - t) * 16;
  } else if (localTime > exitStart) {
    const t = exitEase(clamp((localTime - exitStart) / exitDur, 0, 1));
    opacity = 1 - t;
    ty = -t * 8;
  }

  const translateX = align === 'center' ? '-50%' : align === 'right' ? '-100%' : '0';

  return (
    <div style={{
      position: 'absolute',
      left: x, top: y,
      transform: `translate(${translateX}, ${ty}px)`,
      opacity,
      fontFamily: font,
      fontSize: size,
      fontWeight: weight,
      color,
      letterSpacing,
      whiteSpace: 'pre',
      lineHeight: 1.1,
      willChange: 'transform, opacity',
    }}>
      {text}
    </div>
  );
}

// ImageSprite: scales + fades in; optional Ken Burns drift during hold.
function ImageSprite({
  src,
  x = 0, y = 0,
  width = 400, height = 300,
  entryDur = 0.6,
  exitDur = 0.4,
  kenBurns = false,
  kenBurnsScale = 1.08,
  radius = 12,
  fit = 'cover',
  placeholder = null, // {label: string} for striped placeholder
}) {
  const { localTime, duration } = useSprite();
  const exitStart = Math.max(0, duration - exitDur);

  let opacity = 1;
  let scale = 1;

  if (localTime < entryDur) {
    const t = Easing.easeOutCubic(clamp(localTime / entryDur, 0, 1));
    opacity = t;
    scale = 0.96 + 0.04 * t;
  } else if (localTime > exitStart) {
    const t = Easing.easeInCubic(clamp((localTime - exitStart) / exitDur, 0, 1));
    opacity = 1 - t;
    scale = (kenBurns ? kenBurnsScale : 1) + 0.02 * t;
  } else if (kenBurns) {
    const holdSpan = exitStart - entryDur;
    const holdT = holdSpan > 0 ? (localTime - entryDur) / holdSpan : 0;
    scale = 1 + (kenBurnsScale - 1) * holdT;
  }

  const content = placeholder ? (
    <div style={{
      width: '100%', height: '100%',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'repeating-linear-gradient(135deg, #e9e6df 0 10px, #dcd8cf 10px 20px)',
      color: '#6b6458',
      fontFamily: 'JetBrains Mono, ui-monospace, monospace',
      fontSize: 13,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
    }}>
      {placeholder.label || 'image'}
    </div>
  ) : (
    <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: fit, display: 'block' }} />
  );

  return (
    <div style={{
      position: 'absolute',
      left: x, top: y,
      width, height,
      opacity,
      transform: `scale(${scale})`,
      transformOrigin: 'center',
      borderRadius: radius,
      overflow: 'hidden',
      willChange: 'transform, opacity',
    }}>
      {content}
    </div>
  );
}

// RectSprite: simple rectangle that animates position/size/color via props.
// Useful demo primitive — takes a `render` fn for per-frame customization.
function RectSprite({
  x = 0, y = 0,
  width = 100, height = 100,
  color = '#111',
  radius = 8,
  entryDur = 0.4,
  exitDur = 0.3,
  render, // optional: (ctx) => style overrides
}) {
  const spriteCtx = useSprite();
  const { localTime, duration } = spriteCtx;
  const exitStart = Math.max(0, duration - exitDur);

  let opacity = 1;
  let scale = 1;

  if (localTime < entryDur) {
    const t = Easing.easeOutBack(clamp(localTime / entryDur, 0, 1));
    opacity = clamp(localTime / entryDur, 0, 1);
    scale = 0.4 + 0.6 * t;
  } else if (localTime > exitStart) {
    const t = Easing.easeInQuad(clamp((localTime - exitStart) / exitDur, 0, 1));
    opacity = 1 - t;
    scale = 1 - 0.15 * t;
  }

  const overrides = render ? render(spriteCtx) : {};

  return (
    <div style={{
      position: 'absolute',
      left: x, top: y,
      width, height,
      background: color,
      borderRadius: radius,
      opacity,
      transform: `scale(${scale})`,
      transformOrigin: 'center',
      willChange: 'transform, opacity',
      ...overrides,
    }} />
  );
}


function Stage({
  width = 1280,
  height = 720,
  duration = 10,
  background = '#f6f4ef',
  fps = 60,
  loop = true,
  autoplay = true,
  persistKey = 'animstage',
  children,
}) {
  const [time, setTime] = React.useState(() => {
    try {
      const v = parseFloat(localStorage.getItem(persistKey + ':t') || '0');
      return isFinite(v) ? clamp(v, 0, duration) : 0;
    } catch { return 0; }
  });
  const [playing, setPlaying] = React.useState(autoplay);
  const [hoverTime, setHoverTime] = React.useState(null);
  const [scale, setScale] = React.useState(1);

  const stageRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  const rafRef = React.useRef(null);
  const lastTsRef = React.useRef(null);

  // Persist playhead
  React.useEffect(() => {
    try { localStorage.setItem(persistKey + ':t', String(time)); } catch {}
  }, [time, persistKey]);

  // Auto-scale to fit viewport
  React.useEffect(() => {
    if (!stageRef.current) return;
    const el = stageRef.current;
    const measure = () => {
      const barH = 44; // playback bar height
      const s = Math.min(
        el.clientWidth / width,
        (el.clientHeight - barH) / height
      );
      setScale(Math.max(0.05, s));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [width, height]);

  // Animation loop
  React.useEffect(() => {
    if (!playing) {
      lastTsRef.current = null;
      return;
    }
    const step = (ts) => {
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;
      setTime((t) => {
        let next = t + dt;
        if (next >= duration) {
          if (loop) next = next % duration;
          else { next = duration; setPlaying(false); }
        }
        return next;
      });
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTsRef.current = null;
    };
  }, [playing, duration, loop]);

  // Keyboard: space = play/pause, ← → = seek
  React.useEffect(() => {
    const onKey = (e) => {
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
      if (e.code === 'Space') {
        e.preventDefault();
        setPlaying(p => !p);
      } else if (e.code === 'ArrowLeft') {
        setTime(t => clamp(t - (e.shiftKey ? 1 : 0.1), 0, duration));
      } else if (e.code === 'ArrowRight') {
        setTime(t => clamp(t + (e.shiftKey ? 1 : 0.1), 0, duration));
      } else if (e.key === '0' || e.code === 'Home') {
        setTime(0);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [duration]);

  const displayTime = hoverTime != null ? hoverTime : time;

  const ctxValue = React.useMemo(
    () => ({ time: displayTime, duration, playing, setTime, setPlaying }),
    [displayTime, duration, playing]
  );

  return (
    <div
      ref={stageRef}
      style={{
        position: 'absolute', inset: 0,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center',
        background: '#0a0a0a',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      {/* Canvas area — vertically centered in remaining space */}
      <div style={{
        flex: 1,
        width: '100%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
        minHeight: 0,
      }}>
        <div
          ref={canvasRef}
          style={{
            width, height,
            background,
            position: 'relative',
            transform: `scale(${scale})`,
            transformOrigin: 'center',
            flexShrink: 0,
            boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
            overflow: 'hidden',
          }}
        >
          <TimelineContext.Provider value={ctxValue}>
            {children}
          </TimelineContext.Provider>
        </div>
      </div>

      {/* Playback bar — stacked below canvas, never overlapping */}
      <PlaybackBar
        time={displayTime}
        actualTime={time}
        duration={duration}
        playing={playing}
        onPlayPause={() => setPlaying(p => !p)}
        onReset={() => { setTime(0); }}
        onSeek={(t) => setTime(t)}
        onHover={(t) => setHoverTime(t)}
      />
    </div>
  );
}

// ── Playback bar ────────────────────────────────────────────────────────────
// Play/pause, return-to-begin, scrub track, time display.
// Uses fixed-width time fields so layout doesn't thrash.

function PlaybackBar({ time, duration, playing, onPlayPause, onReset, onSeek, onHover }) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);

  const timeFromEvent = React.useCallback((e) => {
    const rect = trackRef.current.getBoundingClientRect();
    const x = clamp((e.clientX - rect.left) / rect.width, 0, 1);
    return x * duration;
  }, [duration]);

  const onTrackMove = (e) => {
    if (!trackRef.current) return;
    const t = timeFromEvent(e);
    if (dragging) {
      onSeek(t);
    } else {
      onHover(t);
    }
  };

  const onTrackLeave = () => {
    if (!dragging) onHover(null);
  };

  const onTrackDown = (e) => {
    setDragging(true);
    const t = timeFromEvent(e);
    onSeek(t);
    onHover(null);
  };

  React.useEffect(() => {
    if (!dragging) return;
    const onUp = () => setDragging(false);
    const onMove = (e) => {
      if (!trackRef.current) return;
      const t = timeFromEvent(e);
      onSeek(t);
    };
    window.addEventListener('mouseup', onUp);
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('mousemove', onMove);
    };
  }, [dragging, timeFromEvent, onSeek]);

  const pct = duration > 0 ? (time / duration) * 100 : 0;
  const fmt = (t) => {
    const total = Math.max(0, t);
    const m = Math.floor(total / 60);
    const s = Math.floor(total % 60);
    const cs = Math.floor((total * 100) % 100);
    return `${String(m).padStart(1, '0')}:${String(s).padStart(2, '0')}.${String(cs).padStart(2, '0')}`;
  };

  const mono = 'JetBrains Mono, ui-monospace, SFMono-Regular, monospace';

  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12,
      padding: '8px 16px',
      background: 'rgba(20,20,20,0.92)',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      width: '100%',
      maxWidth: 680,
      alignSelf: 'center',

      borderRadius: 8,
      color: '#f6f4ef',
      fontFamily: 'Inter, system-ui, sans-serif',
      userSelect: 'none',
      flexShrink: 0,
    }}>
      <IconButton onClick={onReset} title="Return to start (0)">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M3 2v10M12 2L5 7l7 5V2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
        </svg>
      </IconButton>
      <IconButton onClick={onPlayPause} title="Play/pause (space)">
        {playing ? (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <rect x="3" y="2" width="3" height="10" fill="currentColor"/>
            <rect x="8" y="2" width="3" height="10" fill="currentColor"/>
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 2l9 5-9 5V2z" fill="currentColor"/>
          </svg>
        )}
      </IconButton>

      {/* Current time: fixed width so it doesn't thrash */}
      <div style={{
        fontFamily: mono,
        fontSize: 12,
        fontVariantNumeric: 'tabular-nums',
        width: 64, textAlign: 'right',
        color: '#f6f4ef',
      }}>
        {fmt(time)}
      </div>

      {/* Scrub track */}
      <div
        ref={trackRef}
        onMouseMove={onTrackMove}
        onMouseLeave={onTrackLeave}
        onMouseDown={onTrackDown}
        style={{
          flex: 1,
          height: 22,
          position: 'relative',
          cursor: 'pointer',
          display: 'flex', alignItems: 'center',
        }}
      >
        <div style={{
          position: 'absolute',
          left: 0, right: 0, height: 4,
          background: 'rgba(255,255,255,0.12)',
          borderRadius: 2,
        }}/>
        <div style={{
          position: 'absolute',
          left: 0, width: `${pct}%`, height: 4,
          background: 'oklch(72% 0.12 250)',
          borderRadius: 2,
        }}/>
        <div style={{
          position: 'absolute',
          left: `${pct}%`, top: '50%',
          width: 12, height: 12,
          marginLeft: -6, marginTop: -6,
          background: '#fff',
          borderRadius: 6,
          boxShadow: '0 2px 4px rgba(0,0,0,0.4)',
        }}/>
      </div>

      {/* Duration: fixed width */}
      <div style={{
        fontFamily: mono,
        fontSize: 12,
        fontVariantNumeric: 'tabular-nums',
        width: 64, textAlign: 'left',
        color: 'rgba(246,244,239,0.55)',
      }}>
        {fmt(duration)}
      </div>
    </div>
  );
}

function IconButton({ children, onClick, title }) {
  const [hover, setHover] = React.useState(false);
  return (
    <button
      onClick={onClick}
      title={title}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: 28, height: 28,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: hover ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 6,
        color: '#f6f4ef',
        cursor: 'pointer',
        padding: 0,
        transition: 'background 120ms',
      }}
    >
      {children}
    </button>
  );
}


Object.assign(window, {
  Easing, interpolate, animate, clamp,
  TimelineContext, useTime, useTimeline,
  Sprite, SpriteContext, useSprite,
  TextSprite, ImageSprite, RectSprite,
  Stage, PlaybackBar,
});



/* ============================================================================
   CRM Follow-up Automation — scene components (appended after the engine)
   References engine globals: Stage, Sprite, Easing, clamp, interpolate, useTime
   ========================================================================== */

const PAPER   = '#F1EFEA';
const INK     = '#1A1815';
const INK2    = '#544E45';
const INK3    = '#8C857A';
const LINE    = 'rgba(26,24,21,0.12)';
const LINE2   = 'rgba(26,24,21,0.07)';
const CARD    = '#FBFAF8';
const DARK    = '#16140F';
const DCARD   = '#221F19';
const DLINE   = 'rgba(241,239,234,0.16)';
const DINK    = '#EDEAE3';
const DINK2   = 'rgba(237,234,227,0.58)';
const ACCENT  = 'oklch(62% 0.12 274)';
const ACCENTS = 'oklch(62% 0.12 274 / 0.16)';

const SERIF = "'Newsreader', Georgia, serif";
const SANS  = "'Hanken Grotesk', system-ui, sans-serif";
const MONO  = "'JetBrains Mono', ui-monospace, monospace";

const E   = Easing;
const eo  = E.easeOutCubic;
const eob = E.easeOutBack;
const eio = E.easeInOutCubic;
const ramp = (t, a, b) => (b <= a ? (t >= b ? 1 : 0) : clamp((t - a) / (b - a), 0, 1));

function sceneFade(s, inDur = 0.45, outDur = 0.45) {
  const inO  = ramp(s.localTime, 0, inDur);
  const outO = 1 - ramp(s.localTime, s.duration - outDur, s.duration);
  return Math.min(inO, outO);
}

// ── shared bits ──────────────────────────────────────────────────────────────

function Caption({ s, text, at = 0.4, color = INK }) {
  const t = s.localTime;
  const o = ramp(t, at, at + 0.45) * (1 - ramp(t, s.duration - 0.4, s.duration));
  const ty = (1 - eo(ramp(t, at, at + 0.6))) * 16;
  return (
    <div style={{
      position: 'absolute', left: 0, right: 0, bottom: 92, textAlign: 'center',
      fontFamily: SERIF, fontSize: 48, fontWeight: 400, color, opacity: o,
      transform: `translateY(${ty}px)`, letterSpacing: '0.005em',
    }}>{text}</div>
  );
}

function Dot({ c = ACCENT, size = 9 }) {
  return <span style={{ display: 'inline-block', width: size, height: size, borderRadius: size, background: c }} />;
}

function Scene({ s, bg, children }) {
  return (
    <div style={{ position: 'absolute', inset: 0, background: bg, opacity: sceneFade(s) }}>
      {typeof children === 'function' ? children(s) : children}
    </div>
  );
}

// ── SCENE 1 — A follow-up comes due ──────────────────────────────────────────

function SceneDue({ s }) {
  const t = s.localTime;
  const cardO = eo(ramp(t, 0.1, 0.6));
  const cardY = (1 - cardO) * 24;
  const cam = 1 + 0.03 * eo(s.progress);
  const bannerO = eo(ramp(t, 1.2, 1.8));
  const bannerY = (1 - bannerO) * -12;
  const pulse = t > 1.8 && t < 3.8 ? 1 + 0.5 * (0.5 + 0.5 * Math.sin((t - 1.8) * 5)) : 0.4;

  const Row = ({ k, v, accent }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 0', borderTop: `1px solid ${LINE2}` }}>
      <span style={{ fontFamily: MONO, fontSize: 14, letterSpacing: '0.04em', color: INK3, textTransform: 'uppercase' }}>{k}</span>
      <span style={{ fontFamily: SANS, fontSize: 19, color: accent ? ACCENT : INK2, fontWeight: 500 }}>{v}</span>
    </div>
  );

  return (
    <React.Fragment>
      <div style={{ position: 'absolute', inset: 0, transform: `scale(${cam})`, transformOrigin: '50% 42%' }}>
        <div style={{ position: 'absolute', left: 580, top: 270, width: 760, opacity: cardO, transform: `translateY(${cardY}px)` }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18,
            padding: '14px 20px', background: CARD, border: `1px solid ${LINE}`, borderRadius: 14,
            boxShadow: '0 10px 28px rgba(26,24,21,0.07)', width: 'fit-content',
            opacity: bannerO, transform: `translateY(${bannerY}px)`,
          }}>
            <span style={{ width: 10, height: 10, borderRadius: 10, background: ACCENT, transform: `scale(${pulse})`, boxShadow: `0 0 0 6px ${ACCENTS}` }} />
            <span style={{ fontFamily: SANS, fontSize: 17, fontWeight: 600, color: INK }}>Follow-up due today</span>
            <span style={{ fontFamily: MONO, fontSize: 13, color: INK3, letterSpacing: '0.04em' }}>· cadence</span>
          </div>

          <div style={{ background: CARD, border: `1px solid ${LINE}`, borderRadius: 22, boxShadow: '0 22px 60px rgba(26,24,21,0.10)', padding: '36px 40px' }}>
            <div style={{ fontFamily: MONO, fontSize: 13, letterSpacing: '0.12em', color: INK3, textTransform: 'uppercase', marginBottom: 22 }}>CRM · Contact record</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 22, marginBottom: 26 }}>
              <div style={{ width: 78, height: 78, borderRadius: 78, background: 'repeating-linear-gradient(135deg,#E7E3DA 0 7px,#DED9CF 7px 14px)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: SANS, fontSize: 26, fontWeight: 600, color: INK2, flexShrink: 0 }}>JA</div>
              <div>
                <div style={{ fontFamily: SANS, fontSize: 30, fontWeight: 600, color: INK, letterSpacing: '-0.01em' }}>Jordan Avery</div>
                <div style={{ fontFamily: SANS, fontSize: 18, color: INK2, marginTop: 4 }}>VP Operations · Northwind Labs</div>
              </div>
            </div>
            <Row k="Last contacted" v="28 days ago" />
            <Row k="Stage" v="Proposal sent" />
            <Row k="Next step" v="Follow up" accent />
          </div>
        </div>
      </div>
      <Caption s={s} text="A follow-up comes due." at={2.2} />
    </React.Fragment>
  );
}

// ── SCENE 2 — the manual digging ─────────────────────────────────────────────

function SceneDigging({ s }) {
  const t = s.localTime;
  const panes = [
    { label: 'LinkedIn',     x: 470, y: 250, r: -4 },
    { label: 'Company news', x: 760, y: 300, r: 3 },
    { label: 'Past emails',  x: 1050, y: 250, r: -2 },
    { label: 'Notes',        x: 640, y: 470, r: 4 },
    { label: 'Calendar',     x: 930, y: 500, r: -3 },
    { label: 'Web search',   x: 1180, y: 470, r: 2 },
  ];
  const dim = ramp(t, 3.4, 4.1);
  const secs = Math.floor(ramp(t, 0.3, 3.4) * 52 * 60);
  const mm = String(Math.floor(secs / 60)).padStart(2, '0');
  const ss = String(secs % 60).padStart(2, '0');

  return (
    <React.Fragment>
      {panes.map((p, i) => {
        const a = 0.4 + i * 0.2;
        const o = eo(ramp(t, a, a + 0.4));
        const pop = eob(ramp(t, a, a + 0.45));
        const sc = (0.9 + 0.1 * pop) * (1 - 0.04 * dim);
        return (
          <div key={p.label} style={{
            position: 'absolute', left: p.x, top: p.y, width: 320, height: 210,
            background: CARD, border: `1px solid ${LINE}`, borderRadius: 16,
            boxShadow: '0 16px 40px rgba(26,24,21,0.10)',
            opacity: o * (1 - 0.55 * dim),
            transform: `rotate(${p.r}deg) scale(${sc})`, transformOrigin: '50% 50%',
            overflow: 'hidden',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '13px 16px', borderBottom: `1px solid ${LINE2}` }}>
              <Dot c={INK3} size={7} />
              <span style={{ fontFamily: MONO, fontSize: 13, letterSpacing: '0.06em', color: INK2, textTransform: 'uppercase' }}>{p.label}</span>
            </div>
            <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 9 }}>
              {[92, 78, 86, 64].map((w, j) => (
                <div key={j} style={{ height: 9, width: w + '%', borderRadius: 5, background: j === 0 ? 'rgba(26,24,21,0.14)' : LINE2 }} />
              ))}
            </div>
          </div>
        );
      })}

      <div style={{
        position: 'absolute', left: 0, right: 0, top: 150, textAlign: 'center',
        fontFamily: MONO, fontSize: 20, letterSpacing: '0.1em', color: INK3,
        opacity: eo(ramp(t, 0.5, 1.0)),
      }}>
        ⏱  00:{mm}:{ss} <span style={{ opacity: 0.7 }}>spent researching</span>
      </div>

      <Caption s={s} text="Normally — an hour of digging." at={1.7} />
    </React.Fragment>
  );
}

// ── SCENE 3 — plug into any CRM ───────────────────────────────────────────────

function SceneModular({ s }) {
  const t = s.localTime;
  const left  = [{ l: 'Salesforce', y: 402 }, { l: 'HubSpot', y: 502 }, { l: 'Zoho', y: 602 }];
  const right = [{ l: 'Pipedrive', y: 402 }, { l: 'Dynamics', y: 502 }, { l: 'Close', y: 602 }];
  const modO = eob(ramp(t, 0.25, 0.9));
  const ring = 1 + 0.04 * Math.sin(t * 2.4);

  const Chip = ({ l, y, side, i }) => {
    const a = 0.8 + i * 0.18;
    const p = eo(ramp(t, a, a + 0.45));
    const fromX = side === 'L' ? -340 : 340;
    const baseX = side === 'L' ? 360 : 1320;
    const tx = fromX * (1 - p);
    const line = ramp(t, a + 0.25, a + 0.7);
    const cy = y + 28;                              // vertical center of chip / line
    const modEdge = side === 'L' ? 760 : 1160;      // engine card edge
    const lineLeft = side === 'L' ? modEdge - 160 * line : modEdge;
    return (
      <React.Fragment>
        {/* connector: grows from the engine edge out to the chip */}
        <div style={{
          position: 'absolute', top: cy - 1, left: lineLeft, width: 160 * line, height: 2,
          background: ACCENT, opacity: 0.5 * line,
        }} />
        {/* anchor node on the engine edge */}
        <div style={{
          position: 'absolute', top: cy - 4, left: modEdge - 4, width: 8, height: 8,
          borderRadius: 8, background: ACCENT, opacity: line,
        }} />
        <div style={{
          position: 'absolute', left: baseX, top: y, width: 240, height: 56,
          transform: `translateX(${tx}px)`, opacity: p,
          display: 'flex', alignItems: 'center', gap: 12, padding: '0 20px',
          background: CARD, border: `1px solid ${LINE}`, borderRadius: 13,
          boxShadow: '0 10px 26px rgba(26,24,21,0.07)',
        }}>
          <Dot c={INK3} size={8} />
          <span style={{ fontFamily: SANS, fontSize: 19, fontWeight: 500, color: INK }}>{l}</span>
        </div>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      {left.map((c, i) => <Chip key={c.l} {...c} side="L" i={i} />)}
      {right.map((c, i) => <Chip key={c.l} {...c} side="R" i={i} />)}

      <div style={{
        position: 'absolute', left: 760, top: 400, width: 400, height: 260,
        opacity: modO, transform: `scale(${modO})`, transformOrigin: '50% 50%',
      }}>
        <div style={{ position: 'absolute', inset: -10, borderRadius: 26, border: `1.5px solid ${ACCENT}`, opacity: 0.5, transform: `scale(${ring})` }} />
        <div style={{
          position: 'absolute', inset: 0, background: DARK, borderRadius: 22,
          boxShadow: '0 26px 60px rgba(26,24,21,0.22)', display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 14,
        }}>
          <div style={{ fontFamily: MONO, fontSize: 13, letterSpacing: '0.14em', color: DINK2, textTransform: 'uppercase' }}>The Engine</div>
          <div style={{ fontFamily: SANS, fontSize: 30, fontWeight: 600, color: DINK, textAlign: 'center', lineHeight: 1.15 }}>Follow-up<br />Automation</div>
          <div style={{ fontFamily: MONO, fontSize: 13, letterSpacing: '0.06em', color: ACCENT }}>modular · crm-agnostic</div>
        </div>
      </div>

      <Caption s={s} text="Plug it into any CRM." at={2.0} />
    </React.Fragment>
  );
}

// ── SCENE 4 — the engine works (processing checklist, dark) ──────────────────

function SceneEngine({ s }) {
  const t = s.localTime;
  const cardO = eo(ramp(t, 0.1, 0.7));
  const rows = [
    { l: 'Read CRM context',  sub: 'contact · account · emails · notes' },
    { l: 'Research the web',  sub: '' },
    { l: 'Find the hook',     sub: 'Series B raised last month' },
    { l: 'Write the draft',   sub: 'ready for your review' },
  ];
  const chips = ['LinkedIn', 'Company news', 'Funding', 'Past emails'];
  const t0 = 0.7, step = 1.15, actDur = 0.92;

  return (
    <React.Fragment>
      <div style={{
        position: 'absolute', left: 610, top: 286, width: 700,
        opacity: cardO, transform: `translateY(${(1 - cardO) * 22}px)`,
        background: DCARD, border: `1px solid ${DLINE}`, borderRadius: 22,
        boxShadow: '0 34px 80px rgba(0,0,0,0.38)', padding: '34px 42px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
          <span style={{ width: 9, height: 9, borderRadius: 9, background: ACCENT, transform: `scale(${1 + 0.35 * Math.sin(t * 5)})` }} />
          <span style={{ fontFamily: MONO, fontSize: 14, letterSpacing: '0.1em', color: DINK2, textTransform: 'uppercase' }}>Working · Jordan Avery</span>
        </div>

        {rows.map((r, i) => {
          const act = t0 + i * step;
          const done = act + actDur;
          const state = t >= done ? 'done' : (t >= act ? 'active' : 'idle');
          const isLast = i === rows.length - 1;
          const lineFill = clamp((t - act) / step, 0, 1);
          return (
            <div key={r.l} style={{ display: 'flex', gap: 20 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 28 }}>
                <div style={{
                  width: 28, height: 28, borderRadius: 28, flexShrink: 0,
                  background: state === 'done' ? ACCENT : 'transparent',
                  border: `2px solid ${state === 'idle' ? DLINE : ACCENT}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: state === 'active' ? `0 0 0 5px ${ACCENTS}` : 'none',
                  transform: state === 'active' ? `scale(${1 + 0.06 * Math.sin(t * 8)})` : 'scale(1)',
                }}>
                  {state === 'done'
                    ? <svg width="14" height="14" viewBox="0 0 14 14"><path d="M3 7.4l2.6 2.6L11 4" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    : (state === 'active' ? <span style={{ width: 8, height: 8, borderRadius: 8, background: ACCENT }} /> : null)}
                </div>
                {!isLast && (
                  <div style={{ width: 2, flex: 1, marginTop: 5, marginBottom: 5, background: DLINE, position: 'relative', minHeight: 40 }}>
                    <div style={{ position: 'absolute', left: 0, top: 0, width: 2, height: `${lineFill * 100}%`, background: ACCENT }} />
                  </div>
                )}
              </div>

              <div style={{ paddingBottom: isLast ? 0 : 16, opacity: state === 'idle' ? 0.45 : 1 }}>
                <div style={{ fontFamily: SANS, fontSize: 22, fontWeight: 600, color: DINK }}>{r.l}</div>
                {i === 1 ? (
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'nowrap', marginTop: 11, height: 30 }}>
                    {chips.map((c, j) => {
                      const co = eo(ramp(t, act + 0.05 + j * 0.12, act + 0.35 + j * 0.12));
                      return (
                        <span key={c} style={{
                          fontFamily: MONO, fontSize: 13, color: DINK, padding: '5px 11px', borderRadius: 999,
                          border: `1px solid ${DLINE}`, background: DARK, opacity: co, transform: `translateY(${(1 - co) * 6}px)`,
                        }}>{c}</span>
                      );
                    })}
                  </div>
                ) : (
                  <div style={{ fontFamily: SANS, fontSize: 16, color: DINK2, marginTop: 6, opacity: state === 'idle' ? 0 : eo(ramp(t, act, act + 0.4)) }}>{r.sub}</div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <Caption s={s} text="It does the digging — for you." at={1.3} color={DINK} />
    </React.Fragment>
  );
}

// ── SCENE 5 — the personalized draft ─────────────────────────────────────────

function SceneDraft({ s }) {
  const t = s.localTime;
  const cardO = eo(ramp(t, 0.12, 0.7));
  const cardY = (1 - cardO) * 22;
  const ctxChips = ['VP Ops', 'Series B last month', 'Last reply · 3 wks ago'];

  const body =
    'Hi Jordan —\n\n' +
    'Congrats on the Series B last month. When we last spoke you were\n' +
    'scoping a Q3 rollout — is that still the plan? Happy to share how\n' +
    'teams like Northwind are approaching it.';
  const typeStart = 1.3, typeEnd = 4.4;
  const reveal = Math.floor(ramp(t, typeStart, typeEnd) * body.length);
  const shown = body.slice(0, reveal);
  const caret = t > typeStart && t < typeEnd + 0.3;

  return (
    <React.Fragment>
      <div style={{
        position: 'absolute', left: 510, top: 230, width: 900,
        opacity: cardO, transform: `translateY(${cardY}px)`,
        background: CARD, border: `1px solid ${LINE}`, borderRadius: 22,
        boxShadow: '0 24px 64px rgba(26,24,21,0.11)', overflow: 'hidden',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '22px 30px', borderBottom: `1px solid ${LINE2}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontFamily: MONO, fontSize: 14, letterSpacing: '0.04em', color: INK3, textTransform: 'uppercase' }}>Draft</span>
            <span style={{ fontFamily: SANS, fontSize: 18, color: INK2 }}>To: Jordan Avery</span>
          </div>
          <div style={{ display: 'flex', gap: 6, padding: 4, background: PAPER, borderRadius: 11, border: `1px solid ${LINE2}` }}>
            <span style={{ fontFamily: SANS, fontSize: 15, fontWeight: 600, color: '#fff', background: ACCENT, padding: '6px 16px', borderRadius: 8 }}>Email</span>
            <span style={{ fontFamily: SANS, fontSize: 15, fontWeight: 500, color: INK2, padding: '6px 16px' }}>LinkedIn</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 10, padding: '20px 30px 6px', flexWrap: 'wrap' }}>
          {ctxChips.map((c, i) => {
            const a = 0.55 + i * 0.16;
            const o = eo(ramp(t, a, a + 0.4));
            return (
              <span key={c} style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                fontFamily: MONO, fontSize: 14, letterSpacing: '0.02em', color: INK2,
                padding: '7px 14px', borderRadius: 999, border: `1px solid ${LINE}`, background: PAPER,
                opacity: o, transform: `translateY(${(1 - o) * 8}px)`,
              }}><Dot c={ACCENT} size={7} />{c}</span>
            );
          })}
        </div>

        <div style={{ padding: '18px 30px 34px', minHeight: 230 }}>
          <pre style={{ margin: 0, fontFamily: SANS, fontSize: 21, lineHeight: 1.6, color: INK, whiteSpace: 'pre-wrap', fontWeight: 400 }}>{shown}{caret ? <span style={{ color: ACCENT }}>▍</span> : null}</pre>
        </div>
      </div>

      <Caption s={s} text="Personalized — never a template." at={4.6} />
    </React.Fragment>
  );
}

// ── SCENE 6 — you have the final word ────────────────────────────────────────

function SceneControl({ s }) {
  const t = s.localTime;
  const cardO = eo(ramp(t, 0.12, 0.7));
  const cx = interpolate([0, 1], [1480, 1232], eio)(ramp(t, 0.6, 1.8));
  const cy = interpolate([0, 1], [880, 612], eio)(ramp(t, 0.6, 1.8));
  const hover = ramp(t, 1.7, 2.1);
  const approveLift = -3 * hover;

  return (
    <React.Fragment>
      <div style={{
        position: 'absolute', left: 560, top: 280, width: 800,
        opacity: cardO, transform: `translateY(${(1 - cardO) * 20}px)`,
        background: CARD, border: `1px solid ${LINE}`, borderRadius: 22,
        boxShadow: '0 24px 64px rgba(26,24,21,0.11)', padding: '34px 38px',
      }}>
        <div style={{ fontFamily: MONO, fontSize: 13, letterSpacing: '0.12em', color: INK3, textTransform: 'uppercase', marginBottom: 18 }}>Review · ready to send</div>
        <div style={{ fontFamily: SANS, fontSize: 21, lineHeight: 1.55, color: INK }}>
          Hi Jordan — congrats on the Series B last month. When we last spoke you were scoping a Q3 rollout — is that still the plan?
        </div>
        <div style={{ display: 'flex', gap: 14, marginTop: 30, justifyContent: 'flex-end' }}>
          <span style={{ fontFamily: SANS, fontSize: 18, fontWeight: 600, color: INK2, padding: '13px 26px', borderRadius: 12, border: `1px solid ${LINE}`, whiteSpace: 'nowrap' }}>Edit</span>
          <span style={{ fontFamily: SANS, fontSize: 18, fontWeight: 600, color: '#fff', background: ACCENT, padding: '13px 26px', borderRadius: 12, whiteSpace: 'nowrap', transform: `translateY(${approveLift}px)`, boxShadow: hover > 0 ? `0 8px 22px ${ACCENTS}` : 'none' }}>Approve &amp; send</span>
        </div>
      </div>

      <div style={{
        position: 'absolute', left: 0, right: 0, top: 600, textAlign: 'center',
        fontFamily: MONO, fontSize: 15, letterSpacing: '0.05em', color: INK3,
        opacity: eo(ramp(t, 2.3, 2.8)),
      }}>nothing sends without you</div>

      <div style={{ position: 'absolute', left: cx, top: cy, opacity: eo(ramp(t, 0.5, 0.8)) }}>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
          <path d="M4 2l6.5 16 2.2-6.4L19 9.3 4 2z" fill={INK} stroke="#fff" strokeWidth="1.4" strokeLinejoin="round" />
        </svg>
      </div>

      <Caption s={s} text="You always have the final word." at={2.5} />
    </React.Fragment>
  );
}

// ── SCENE 7 — end card with logo ─────────────────────────────────────────────

function SceneEnd({ s }) {
  const t = s.localTime;
  const ol = eo(ramp(t, 0.3, 1.0));
  const o1 = eo(ramp(t, 0.9, 1.6));
  const o2 = eob(ramp(t, 1.6, 2.3));

  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 36 }}>
      <img src="assets/diverse-labs.png" alt="Diverse Labs" style={{ height: 52, opacity: ol, transform: `translateY(${(1 - ol) * -10}px)` }} />
      <div style={{ fontFamily: SERIF, fontSize: 74, fontWeight: 400, color: INK, textAlign: 'center', lineHeight: 1.08, whiteSpace: 'nowrap', opacity: o1, transform: `translateY(${(1 - o1) * 16}px)`, letterSpacing: '-0.01em' }}>
        Your follow-ups, handled.
      </div>
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 14,
        padding: '15px 28px', borderRadius: 999, background: INK,
        opacity: o2, transform: `scale(${0.92 + 0.08 * o2})`,
      }}>
        <Dot c={ACCENT} size={10} />
        <span style={{ fontFamily: SANS, fontSize: 23, fontWeight: 500, color: PAPER, whiteSpace: 'nowrap' }}>Comment <span style={{ fontWeight: 700 }}>“CRM”</span> for a free consult</span>
      </div>
    </div>
  );
}

// ── time labeler (for comment context) ───────────────────────────────────────

function TimeLabeler({ rootRef }) {
  const time = useTime();
  const sec = Math.floor(time);
  React.useEffect(() => {
    if (rootRef.current) rootRef.current.setAttribute('data-screen-label', sec + 's');
  }, [sec]);
  return null;
}

// ── root ─────────────────────────────────────────────────────────────────────

function CRMVideo() {
  const rootRef = React.useRef(null);
  return (
    <div ref={rootRef} data-screen-label="0s" style={{ position: 'absolute', inset: 0 }}>
      <Stage width={1920} height={1080} duration={35.4} background={PAPER} persistKey="crmvid">
        <TimeLabeler rootRef={rootRef} />

        <Sprite start={0}    end={4.6}>{(s) => <Scene s={s} bg={PAPER}><SceneDue s={s} /></Scene>}</Sprite>
        <Sprite start={4.6}  end={9.4}>{(s) => <Scene s={s} bg={PAPER}><SceneDigging s={s} /></Scene>}</Sprite>
        <Sprite start={9.4}  end={14.4}>{(s) => <Scene s={s} bg={PAPER}><SceneModular s={s} /></Scene>}</Sprite>
        <Sprite start={14.4} end={21.4}>{(s) => <Scene s={s} bg={DARK}><SceneEngine s={s} /></Scene>}</Sprite>
        <Sprite start={21.4} end={27.4}>{(s) => <Scene s={s} bg={PAPER}><SceneDraft s={s} /></Scene>}</Sprite>
        <Sprite start={27.4} end={31.4}>{(s) => <Scene s={s} bg={PAPER}><SceneControl s={s} /></Scene>}</Sprite>
        <Sprite start={31.4} end={35.4}>{(s) => <Scene s={s} bg={PAPER}><SceneEnd s={s} /></Scene>}</Sprite>
      </Stage>
    </div>
  );
}

window.CRMVideo = CRMVideo;
if (typeof module !== 'undefined') module.exports = { CRMVideo };
