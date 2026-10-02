'use client';

import {Fragment} from 'react';
import {VStack, HStack} from '@astryxdesign/core/Layout';
import {Grid} from '@astryxdesign/core/Grid';
import {Text} from '@astryxdesign/core/Text';
import {Icon} from '@astryxdesign/core/Icon';
import {Card} from '@astryxdesign/core/Card';
import {ChevronRight, CircleCheck, CircleHelp} from 'lucide-react';
import {MotionCard} from '@/components/motion/Motion';
import {springs} from '@/motion/springs';
import {useSequence} from '@/motion/useSequence';
import {EMPHASIS} from '@/theme/emphasis';

type Step = {label: string; isDecision?: boolean};

const before: Step[] = [
  {label: 'Open app'},
  {label: 'Choose a plan?', isDecision: true},
  {label: 'Pick a workspace?', isDecision: true},
  {label: 'Find the button'},
  {label: 'Confirm settings?', isDecision: true},
  {label: 'Done?', isDecision: true},
];

const after: Step[] = [{label: 'Open app'}, {label: 'Do the task'}, {label: 'Done'}];

type FlowRowProps = {
  title: string;
  steps: Step[];
  /** How many steps of the walk-through have been reached so far. */
  reached: number;
  emphasis?: boolean;
};

function FlowRow({title, steps, reached, emphasis}: FlowRowProps) {
  const decisions = steps.filter(step => step.isDecision).length;
  const isDone = reached >= steps.length;

  return (
    <Card padding={5} variant={emphasis ? EMPHASIS : 'default'} height="100%">
      <VStack gap={4}>
        <HStack justify="between" vAlign="center" wrap="wrap" gap={2}>
          <HStack gap={2} vAlign="center">
            <Text type="label">{title}</Text>
            {isDone && (
              <Icon icon={CircleCheck} size="sm" color={emphasis ? 'success' : 'secondary'} />
            )}
          </HStack>
          <Text type="supporting" hasTabularNumbers>
            {steps.length} steps · {decisions} {decisions === 1 ? 'decision' : 'decisions'}
          </Text>
        </HStack>
        <HStack gap={1} wrap="wrap" vAlign="center" role="list">
          {steps.map((step, index) => {
            const isReached = index < reached;
            const isCurrent = index === reached - 1 && !isDone;
            return (
              <Fragment key={step.label}>
                {index > 0 && <Icon icon={ChevronRight} size="sm" color="secondary" />}
                <MotionCard
                  role="listitem"
                  padding={2}
                  variant={step.isDecision ? 'yellow' : 'muted'}
                  elevation={isCurrent ? 'med' : 'none'}
                  initial={false}
                  animate={{opacity: isReached ? 1 : 0.4, scale: isCurrent ? 1.08 : 1}}
                  transition={springs.spatial.fast}
                  style={{borderRadius: 'var(--radius-element)'}}>
                  <HStack gap={1} vAlign="center">
                    {step.isDecision && <Icon icon={CircleHelp} size="xsm" color="warning" />}
                    <Text type="supporting" color="primary">
                      {step.label}
                    </Text>
                  </HStack>
                </MotionCard>
              </Fragment>
            );
          })}
        </HStack>
      </VStack>
    </Card>
  );
}

/**
 * Before-and-after of the same task: a long, decision-heavy path versus a clear
 * one. When it scrolls into view, both paths are walked step by step at the
 * same pace, once.
 */
export function FlowComparison() {
  // One shared clock walks both paths in step, so "After" visibly finishes first.
  const {ref, visible, pauseProps} = useSequence(Math.max(before.length, after.length), {
    stepMs: 750,
  });

  return (
    <Grid ref={ref} columns={{minWidth: 280, max: 2}} gap={4} {...pauseProps}>
      <FlowRow title="Before" steps={before} reached={visible} />
      <FlowRow title="After" steps={after} reached={visible} emphasis />
    </Grid>
  );
}
