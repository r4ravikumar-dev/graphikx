'use client';

import type {ReactNode} from 'react';
import {ACCENT, Dot, Illustration, MUTED, Pulse, Stroke, Surface, Travel} from './Illustration';

/**
 * Small step illustrations for the sequence rails, in the same language as
 * the large scenes: line art on the dot grid, a soft surface, one brand-blue
 * accent and a slow loop that pauses off screen. Each is drawn on a 96 × 72
 * canvas.
 */
export type GlyphName =
  | 'foundation'
  | 'tokens'
  | 'components'
  | 'patterns'
  | 'experiences'
  | 'product'
  | 'ux'
  | 'ui'
  | 'interaction'
  | 'build'
  | 'evolve';

const VIEW_BOX = '0 0 96 72';

const rect = (x: number, y: number, w: number, h: number, r = 4) =>
  `M${x + r} ${y} h${w - 2 * r} a${r} ${r} 0 0 1 ${r} ${r} v${h - 2 * r} a${r} ${r} 0 0 1 -${r} ${r} h-${w - 2 * r} a${r} ${r} 0 0 1 -${r} -${r} v-${h - 2 * r} a${r} ${r} 0 0 1 ${r} -${r} Z`;

const circle = (cx: number, cy: number, r: number) =>
  `M${cx - r} ${cy} a${r} ${r} 0 1 0 ${r * 2} 0 a${r} ${r} 0 1 0 ${-r * 2} 0`;

/** Floats a group gently, offset by `delay` so neighbours move out of step. */
function Float({
  children,
  delay = 0,
  distance = 3,
}: {
  children: ReactNode;
  delay?: number;
  distance?: number;
}) {
  return (
    <g
      className="ill-loop ill-float"
      style={{animationDelay: `${delay}s`, ['--float' as string]: `${distance}px`}}>
      {children}
    </g>
  );
}

const glyphs: Record<GlyphName, () => ReactNode> = {
  /** Slabs laid one on another, the blue point resting on top. */
  foundation: () => (
    <>
      <Surface d={rect(18, 48, 60, 10, 3)} />
      <Stroke d={rect(18, 48, 60, 10, 3)} />
      <Stroke order={1} d={rect(24, 36, 48, 10, 3)} />
      <Float>
        <Stroke order={2} stroke={ACCENT} d={rect(30, 24, 36, 10, 3)} />
      </Float>
      <Pulse cx={48} cy={14} r={3} />
      <Dot order={3} cx={48} cy={14} r={3} />
    </>
  ),
  /** A row of swatches, one value lit in blue. */
  tokens: () => (
    <>
      <Surface d={circle(26, 36, 10)} />
      <Stroke d={circle(26, 36, 10)} />
      <Float delay={-1.5}>
        <Stroke order={1} stroke={ACCENT} d={circle(48, 36, 10)} />
        <Dot order={3} cx={48} cy={36} r={4} />
      </Float>
      <Stroke order={2} d={circle(70, 36, 10)} />
      <Stroke order={3} weight="fine" stroke={MUTED} d="M16 58 h64" />
    </>
  ),
  /** Two building blocks that snap together. */
  components: () => (
    <>
      <Surface d={rect(16, 22, 30, 30, 6)} />
      <Stroke d={rect(16, 22, 30, 30, 6)} />
      <Float delay={-2} distance={4}>
        <Stroke order={1} stroke={ACCENT} d={rect(50, 22, 30, 30, 6)} />
      </Float>
      <Stroke order={2} weight="fine" stroke={MUTED} d="M46 37 h4" />
      <Pulse cx={65} cy={37} r={3} delay={0.6} />
      <Dot order={3} cx={65} cy={37} r={2.5} />
    </>
  ),
  /** Blocks arranged into a repeatable grid; a pulse travels the pattern. */
  patterns: () => (
    <>
      {[
        [22, 14],
        [52, 14],
        [22, 40],
      ].map(([x, y], index) => (
        <g key={`${x}-${y}`}>
          <Surface order={index} d={rect(x, y, 22, 18, 4)} />
          <Stroke order={index} d={rect(x, y, 22, 18, 4)} />
        </g>
      ))}
      <Stroke order={3} stroke={ACCENT} d={rect(52, 40, 22, 18, 4)} />
      <Travel d="M33 23 H63 V49" duration={6} thickness={2.5} />
    </>
  ),
  /** A screen with content and one clear action. */
  experiences: () => (
    <>
      <Surface d={rect(20, 10, 56, 52, 6)} />
      <Stroke d={rect(20, 10, 56, 52, 6)} />
      <Stroke order={1} weight="fine" stroke={MUTED} d="M28 22 h26 M28 30 h40 M28 38 h32" />
      <Stroke order={2} stroke={ACCENT} d={rect(28, 46, 24, 8, 4)} />
      <Pulse cx={40} cy={50} r={4} delay={0.4} />
    </>
  ),
  /** An idea given a shape: a box, with the point inside. */
  product: () => (
    <>
      <Surface d="M48 10 L72 22 L72 48 L48 60 L24 48 L24 22 Z" />
      <Stroke d="M48 10 L72 22 L72 48 L48 60 L24 48 L24 22 Z" />
      <Stroke order={1} weight="fine" stroke={MUTED} d="M24 22 L48 34 L72 22 M48 34 V60" />
      <Float>
        <Pulse cx={48} cy={34} r={3} />
        <Dot order={2} cx={48} cy={34} r={3.5} />
      </Float>
    </>
  ),
  /** A journey from one point to the next. */
  ux: () => (
    <>
      <Stroke
        weight="fine"
        stroke={MUTED}
        strokeDasharray="2 5"
        d="M18 52 C 30 20, 50 60, 60 30 S 74 18, 78 20"
      />
      <Travel
        d="M18 52 C 30 20, 50 60, 60 30 S 74 18, 78 20"
        duration={6}
        shape="dot"
        thickness={6}
      />
      <Stroke order={1} d={circle(18, 52, 4)} />
      <Stroke order={2} stroke={ACCENT} d={circle(78, 20, 6)} />
      <Dot order={3} cx={78} cy={20} r={2.5} />
    </>
  ),
  /** A layout taking shape: header, content and a blue heading bar. */
  ui: () => (
    <>
      <Surface d={rect(16, 12, 64, 48, 6)} />
      <Stroke d={rect(16, 12, 64, 48, 6)} />
      <Stroke order={1} weight="fine" stroke={MUTED} d="M16 22 h64" />
      <Float delay={-1}>
        <Stroke order={2} stroke={ACCENT} d={rect(24, 30, 30, 6, 3)} />
      </Float>
      <Stroke order={3} weight="fine" stroke={MUTED} d="M24 44 h40 M24 51 h28" />
      <Dot order={3} cx={22} cy={17} r={1.5} fill="currentColor" />
    </>
  ),
  /** A pointer tapping, the response rippling out. */
  interaction: () => (
    <>
      <Surface d={rect(18, 18, 44, 24, 12)} />
      <Stroke d={rect(18, 18, 44, 24, 12)} />
      <Pulse cx={40} cy={30} r={6} />
      <Pulse cx={40} cy={30} r={6} delay={1.5} />
      <Float distance={2}>
        <Stroke order={1} stroke={ACCENT} d="M52 34 L52 58 L58 52 L63 62 L67 60 L62 50 L70 50 Z" />
      </Float>
    </>
  ),
  /** Blocks stacking up into something real. */
  build: () => (
    <>
      <Surface d={rect(20, 46, 26, 14, 3)} />
      <Stroke d={rect(20, 46, 26, 14, 3)} />
      <Stroke order={1} d={rect(50, 46, 26, 14, 3)} />
      <Stroke order={2} d={rect(34, 30, 28, 14, 3)} />
      <Float distance={5}>
        <Stroke order={3} stroke={ACCENT} d={rect(38, 10, 20, 14, 3)} />
      </Float>
    </>
  ),
  /** Growth over time, a pulse climbing the line. */
  evolve: () => (
    <>
      <Stroke weight="fine" stroke={MUTED} d="M16 60 H80 M16 60 V12" />
      <Stroke order={1} d="M20 54 C 36 52, 44 44, 52 36 S 66 18, 76 16" />
      <Travel d="M20 54 C 36 52, 44 44, 52 36 S 66 18, 76 16" duration={7} thickness={2.5} />
      <Stroke order={2} stroke={ACCENT} d="M68 14 L76 16 L72 23" />
      <Pulse cx={76} cy={16} r={3} delay={0.8} />
    </>
  ),
};

/** One step illustration, sized for a rail column. */
export function Glyph({name}: {name: GlyphName}) {
  return (
    <Illustration viewBox={VIEW_BOX} maxWidth={96}>
      {glyphs[name]()}
    </Illustration>
  );
}
