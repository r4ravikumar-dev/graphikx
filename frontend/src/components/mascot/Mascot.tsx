'use client';

import {motion, useReducedMotion} from 'framer-motion';
import {springs} from '@/motion/springs';

type MascotProps = {
  size?: number;
  /** Pupil offset in the -1..1 range on each axis. */
  look?: {x: number; y: number};
  /** Accessible name. Omit when the mascot is decorative. */
  label?: string;
};

/**
 * The Graphikx mascot: a soft "G" blob with curious eyes.
 * Colours come from theme tokens so it follows light and dark mode.
 */
export function Mascot({size = 32, look = {x: 0, y: 0}, label}: MascotProps) {
  const reduceMotion = useReducedMotion();
  const pupil = {x: look.x * 2.2, y: look.y * 2.2};

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      whileHover={reduceMotion ? undefined : {scale: 1.08, rotate: -6}}
      whileTap={reduceMotion ? undefined : {scale: 0.94}}
      transition={springs.spatial.fast}>
      <path
        d="M24 4c11 0 20 8.4 20 19.6 0 2.4-1.8 4.2-4.2 4.2H31v-6h7.2C36.6 14.8 30.9 10 24 10c-7.9 0-14 6.3-14 14s6.1 14 14 14c3.3 0 6.3-1.1 8.7-3l3.8 4.6C33 42.4 28.7 44 24 44 12.9 44 4 35.1 4 24S12.9 4 24 4Z"
        fill="var(--color-accent)"
        transform="matrix(1 0 0 -1 0 48)"
      />
      {[17.5, 26.5].map(cx => (
        <g key={cx}>
          <motion.ellipse
            cx={cx}
            cy={23}
            rx={3.4}
            ry={3.8}
            fill="var(--color-background-surface)"
            animate={reduceMotion ? undefined : {scaleY: [1, 1, 0.1, 1]}}
            transition={{
              duration: 4.2,
              times: [0, 0.92, 0.96, 1],
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{transformOrigin: `${cx}px 23px`}}
          />
          <motion.circle
            cx={cx}
            cy={23}
            r={1.7}
            fill="var(--color-text-primary)"
            animate={pupil}
            transition={springs.spatial.default}
          />
        </g>
      ))}
    </motion.svg>
  );
}
