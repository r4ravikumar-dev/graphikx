'use client';

import {AnimatePresence, motion, useReducedMotion} from 'framer-motion';
import {VStack, HStack} from '@astryxdesign/core/Layout';
import {Heading} from '@astryxdesign/core/Heading';
import {VisuallyHidden} from '@astryxdesign/core/VisuallyHidden';
import {MotionCard} from '@/components/motion/Motion';
import {expressive, springs} from '@/motion/springs';
import {useSequence} from '@/motion/useSequence';
import {Mascot} from './Mascot';
import {typeRole} from '@/theme/typeScale';

type MascotDialogueProps = {
  frames: string[];
  /** Where the mascot looks, in the -1..1 range on each axis. */
  look?: {x: number; y: number};
};

/**
 * The mascot "thinks out loud": a speech bubble steps through each frame,
 * holds on the last, takes a breath, and starts again. The mascot is the one
 * element on the site that loops, so there is no replay button. Hovering pauses it. Screen readers get the whole dialogue at
 * once; reduced-motion users see every frame without the sequence.
 */
export function MascotDialogue({frames, look = {x: 0.8, y: -0.3}}: MascotDialogueProps) {
  const reduceMotion = useReducedMotion();
  const {ref, visible, pauseProps} = useSequence(frames.length, {
    loop: true,
    stepMs: 1800,
    holdMs: 2600,
    restMs: 600,
  });
  // During the short rest between loops the bubble disappears, like a pause.
  const frame = visible - 1;

  if (reduceMotion) {
    return (
      <VStack gap={4} hAlign="center">
        <Mascot size={96} />
        {frames.map(line => (
          <Heading key={line} level={3} style={typeRole('headline-l')} justify="center">
            {line}
          </Heading>
        ))}
      </VStack>
    );
  }

  return (
    <VStack ref={ref} gap={6} hAlign="center" {...pauseProps}>
      <VisuallyHidden>{frames.join(' ')}</VisuallyHidden>
      <HStack gap={4} vAlign="center" justify="center" wrap="wrap" minHeight={120} aria-hidden>
        <Mascot size={112} look={look} />
        <AnimatePresence mode="wait">
          {frame >= 0 && (
            <MotionCard
              key={frame}
              padding={5}
              elevation="med"
              initial={{opacity: 0, scale: 0.7, x: -24}}
              animate={{opacity: 1, scale: 1, x: 0}}
              exit={{opacity: 0, scale: 0.9, transition: springs.effects.fast}}
              transition={expressive('fast')}
              style={{transformOrigin: 'left center', borderStartStartRadius: 'var(--radius-sm)'}}>
              <Heading level={3} style={typeRole('headline-l')}>
                {frames[frame]}
              </Heading>
            </MotionCard>
          )}
        </AnimatePresence>
      </HStack>
      {frames.length > 1 && (
        <HStack gap={1} aria-hidden>
          {frames.map((line, index) => (
            <motion.span
              key={line}
              animate={{
                opacity: index <= frame ? 1 : 0.3,
                scale: index === frame ? 1.3 : 1,
              }}
              transition={springs.spatial.fast}
              style={{
                display: 'block',
                inlineSize: 'var(--spacing-1)',
                blockSize: 'var(--spacing-1)',
                borderRadius: 'var(--radius-full, 999px)',
                background: 'var(--color-accent)',
              }}
            />
          ))}
        </HStack>
      )}
    </VStack>
  );
}
