'use client';

import {motion} from 'framer-motion';
import {VStack} from '@astryxdesign/core/Layout';
import {Grid} from '@astryxdesign/core/Grid';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Divider} from '@astryxdesign/core/Divider';
import {MotionVStack} from '@/components/motion/Motion';
import {springs} from '@/motion/springs';
import {useSequence} from '@/motion/useSequence';

type Step = {title: string; description: string};

/**
 * An ordered process. When it scrolls into view, a line draws across the
 * steps and each step lights up in turn, so the sequence reads left to right.
 * It plays once. Every step stays readable the whole time.
 */
export function ProcessSteps({steps}: {steps: Step[]}) {
  const {ref, visible, pauseProps} = useSequence(steps.length, {stepMs: 900});

  return (
    <VStack ref={ref} gap={6} {...pauseProps}>
      <motion.span
        aria-hidden
        initial={false}
        animate={{scaleX: visible / steps.length}}
        transition={springs.spatial.slow}
        style={{display: 'block', transformOrigin: 'left'}}>
        <Divider variant="strong" />
      </motion.span>
      <Grid columns={{minWidth: 180}} gap={6} role="list">
        {steps.map((step, index) => {
          const isReached = index < visible;
          return (
            <MotionVStack
              key={step.title}
              role="listitem"
              gap={2}
              initial={false}
              animate={{opacity: isReached ? 1 : 0.45, y: isReached ? 0 : 6}}
              transition={isReached ? springs.spatial.default : springs.effects.slow}>
              <Text type="label" color={isReached ? 'accent' : 'secondary'} hasTabularNumbers>
                {String(index + 1).padStart(2, '0')}
              </Text>
              <Heading level={3}>{step.title}</Heading>
              <Text color="secondary" textWrap="pretty">
                {step.description}
              </Text>
            </MotionVStack>
          );
        })}
      </Grid>
    </VStack>
  );
}
