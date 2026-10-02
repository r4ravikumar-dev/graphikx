'use client';

import {VStack, HStack} from '@astryxdesign/core/Layout';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {MotionCard} from '@/components/motion/Motion';
import {CtaButton} from '@/components/navigation/CtaButton';
import {springs} from '@/motion/springs';
import {EMPHASIS} from '@/theme/emphasis';
import {typeRole} from '@/theme/typeScale';

type FocusAreaProps = {
  title: string;
  description: string;
  action?: {label: string; href: string};
  /** Highlight the area, e.g. the one with somewhere to go next. */
  isFeatured?: boolean;
};

/** Something the studio is exploring for itself, with an optional link to see more. */
export function FocusArea({title, description, action, isFeatured}: FocusAreaProps) {
  return (
    <MotionCard
      padding={6}
      height="100%"
      variant={isFeatured ? EMPHASIS : 'default'}
      whileHover={{y: -4}}
      transition={springs.spatial.fast}>
      <VStack gap={4} height="100%" justify="between">
        <VStack gap={2}>
          <Heading level={3} style={typeRole('headline-m')}>
            {title}
          </Heading>
          <Text color="secondary" textWrap="pretty">
            {description}
          </Text>
        </VStack>
        {action && (
          <HStack>
            <CtaButton {...action} variant="secondary" size="md" />
          </HStack>
        )}
      </VStack>
    </MotionCard>
  );
}
