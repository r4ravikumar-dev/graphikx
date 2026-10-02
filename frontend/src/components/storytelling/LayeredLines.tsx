'use client';

import {VStack} from '@astryxdesign/core/Layout';
import {Text} from '@astryxdesign/core/Text';
import {MotionCard} from '@/components/motion/Motion';
import {expressive, springs} from '@/motion/springs';
import {useSequence} from '@/motion/useSequence';

/**
 * Lines that pile up as offset layers, one after another, to show how
 * complexity accumulates a little at a time. The build-up plays once.
 */
export function LayeredLines({lines}: {lines: string[]}) {
  const {ref, visible, pauseProps} = useSequence(lines.length, {stepMs: 650});

  return (
    <VStack ref={ref} gap={2} role="list" {...pauseProps}>
      {lines.map((line, index) => {
        const isShown = index < visible;
        return (
          <MotionCard
            key={line}
            role="listitem"
            padding={3}
            elevation={index === lines.length - 1 ? 'med' : 'low'}
            initial={false}
            animate={isShown ? {opacity: 1, y: 0, scale: 1} : {opacity: 0, y: -24, scale: 0.96}}
            transition={isShown ? expressive('default') : springs.effects.default}
            style={{
              marginInlineStart: `calc(var(--spacing-4) * ${index})`,
              borderRadius: 'var(--radius-container)',
            }}>
            <Text type="large">{line}</Text>
          </MotionCard>
        );
      })}
    </VStack>
  );
}
