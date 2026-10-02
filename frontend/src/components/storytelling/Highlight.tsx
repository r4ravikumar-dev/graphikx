'use client';

import {Heading} from '@astryxdesign/core/Heading';
import {MotionVStack} from '@/components/motion/Motion';
import {expressive, springs} from '@/motion/springs';
import {useSequence} from '@/motion/useSequence';
import {typeRole} from '@/theme/typeScale';

/** Short emphasised lines that land one after another, e.g. "Less confusion." Plays once. */
export function Highlight({lines}: {lines: string[]}) {
  const {ref, visible, pauseProps} = useSequence(lines.length, {stepMs: 550});

  return (
    <MotionVStack ref={ref} gap={3} paddingBlock={4} {...pauseProps}>
      {lines.map((line, index) => {
        const isShown = index < visible;
        return (
          <MotionVStack
            key={line}
            initial={false}
            animate={isShown ? {opacity: 1, y: 0} : {opacity: 0, y: 16}}
            transition={isShown ? expressive('fast') : springs.effects.default}>
            <Heading level={3} style={typeRole('headline-l')} color="accent">
              {line}
            </Heading>
          </MotionVStack>
        );
      })}
    </MotionVStack>
  );
}
