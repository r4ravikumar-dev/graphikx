'use client';

import {VStack} from '@astryxdesign/core/Layout';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Icon} from '@astryxdesign/core/Icon';
import {MotionClickableCard} from '@/components/motion/Motion';
import {springs} from '@/motion/springs';
import {capabilityIcons} from './capabilityIcons';
import type {Capability as CapabilityData} from '@/content/practice';

/** One practice capability as a navigable card that lifts on hover. */
export function Capability({capability}: {capability: CapabilityData}) {
  const icon = capabilityIcons[capability.slug];

  return (
    <MotionClickableCard
      label={capability.title}
      href={`/practice#${capability.slug}`}
      padding={5}
      height="100%"
      whileHover={{y: -6}}
      whileTap={{scale: 0.98}}
      transition={springs.spatial.fast}>
      <VStack gap={4}>
        {icon && <Icon icon={icon} size="lg" color="accent" />}
        <VStack gap={2}>
          <Heading level={3}>{capability.title}</Heading>
          <Text color="secondary" textWrap="pretty">
            {capability.summary}
          </Text>
        </VStack>
      </VStack>
    </MotionClickableCard>
  );
}
