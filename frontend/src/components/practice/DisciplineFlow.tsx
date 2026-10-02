'use client';

import {Fragment} from 'react';
import {HStack} from '@astryxdesign/core/Layout';
import {Heading} from '@astryxdesign/core/Heading';
import {Icon} from '@astryxdesign/core/Icon';
import {VisuallyHidden} from '@astryxdesign/core/VisuallyHidden';
import {ArrowRight} from 'lucide-react';
import {MotionCard, MotionHStack} from '@/components/motion/Motion';
import {springs} from '@/motion/springs';
import {useSequence} from '@/motion/useSequence';
import {EMPHASIS} from '@/theme/emphasis';

/**
 * Disciplines as one connected sequence (Product → UX → … → Evolve).
 * When it scrolls into view, each step lights up after the one before it,
 * ending on Evolve. It plays once.
 */
export function DisciplineFlow({steps}: {steps: string[]}) {
  const {ref, visible, pauseProps} = useSequence(steps.length, {stepMs: 600});
  const active = visible - 1;

  return (
    <HStack ref={ref} gap={2} wrap="wrap" vAlign="center" {...pauseProps}>
      <VisuallyHidden>{steps.join(', then ')}</VisuallyHidden>
      {steps.map((step, index) => {
        const isReached = index < visible;
        return (
          <Fragment key={step}>
            {index > 0 && (
              <MotionHStack
                aria-hidden
                initial={false}
                animate={{opacity: isReached ? 1 : 0.35, x: isReached ? 0 : -4}}
                transition={springs.spatial.fast}>
                <Icon icon={ArrowRight} size="md" color={isReached ? 'accent' : 'secondary'} />
              </MotionHStack>
            )}
            <MotionCard
              aria-hidden
              padding={3}
              variant={index === active ? EMPHASIS : 'default'}
              elevation={index === active ? 'med' : 'low'}
              initial={false}
              animate={{opacity: isReached ? 1 : 0.5, scale: index === active ? 1.06 : 1}}
              transition={springs.spatial.default}
              style={{borderRadius: 'var(--radius-container)'}}>
              <Heading level={3}>{step}</Heading>
            </MotionCard>
          </Fragment>
        );
      })}
    </HStack>
  );
}
