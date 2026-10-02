'use client';

import {VStack} from '@astryxdesign/core/Layout';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Reveal} from '@/components/motion/Reveal';
import type {Principle as PrincipleData} from '@/content/principles';
import {typeRole} from '@/theme/typeScale';

type PrincipleProps = {principle: PrincipleData; index: number};

/** A numbered design principle. Uses spacing, not a card, for grouping. */
export function Principle({principle, index}: PrincipleProps) {
  return (
    <Reveal delay={0.06 * index} gap={2}>
      <Text color="accent" hasTabularNumbers style={typeRole('headline-l')}>
        {String(index + 1).padStart(2, '0')}
      </Text>
      <VStack gap={1}>
        <Heading level={3}>{principle.title}</Heading>
        <Text color="secondary" textWrap="pretty">
          {principle.description}
        </Text>
      </VStack>
    </Reveal>
  );
}
