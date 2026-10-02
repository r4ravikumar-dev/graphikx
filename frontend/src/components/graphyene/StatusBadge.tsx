'use client';

import {Fragment} from 'react';
import {VStack, HStack} from '@astryxdesign/core/Layout';
import {Text} from '@astryxdesign/core/Text';
import {StatusDot} from '@astryxdesign/core/StatusDot';
import {Card} from '@astryxdesign/core/Card';
import {MotionHStack} from '@/components/motion/Motion';
import {springs} from '@/motion/springs';
import {useSequence} from '@/motion/useSequence';

type StatusBadgeProps = {
  label: string;
  stages: string[];
};

/**
 * "Graphyene · In progress" with its stages. When it scrolls into view, the
 * stages light up in turn (Exploring → Testing → Refining) and stay lit.
 */
export function StatusBadge({label, stages}: StatusBadgeProps) {
  const {ref, visible} = useSequence(stages.length, {stepMs: 600});

  return (
    <Card ref={ref} padding={5} elevation="low" maxWidth={420}>
      <VStack gap={3}>
        <HStack gap={2} vAlign="center">
          <StatusDot variant="accent" label="In progress" />
          <Text type="label">{label}</Text>
        </HStack>
        <HStack gap={2} vAlign="center" aria-label={stages.join(', ')}>
          {stages.map((stage, index) => {
            const isLit = index < visible;
            return (
              <Fragment key={stage}>
                {index > 0 && (
                  <Text type="supporting" aria-hidden>
                    ·
                  </Text>
                )}
                <MotionHStack
                  aria-hidden
                  initial={false}
                  animate={{opacity: isLit ? 1 : 0.45, scale: index === visible - 1 ? 1.06 : 1}}
                  transition={springs.spatial.fast}>
                  <Text type="supporting" color={isLit ? 'accent' : 'secondary'} weight="medium">
                    {stage}
                  </Text>
                </MotionHStack>
              </Fragment>
            );
          })}
        </HStack>
      </VStack>
    </Card>
  );
}
