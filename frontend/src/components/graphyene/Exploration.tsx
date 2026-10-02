'use client';

import {VStack} from '@astryxdesign/core/Layout';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {MotionCard} from '@/components/motion/Motion';
import {springs} from '@/motion/springs';

type ExplorationProps = {
  number: number;
  question: string;
  description: string;
};

/** One open Graphyene question, framed as an exploration rather than an answer. */
export function Exploration({number, question, description}: ExplorationProps) {
  return (
    <MotionCard
      padding={6}
      height="100%"
      whileHover={{y: -4}}
      transition={springs.spatial.fast}>
      <VStack gap={3}>
        <Text type="label" color="accent" hasTabularNumbers>
          Exploration {String(number).padStart(2, '0')}
        </Text>
        <Heading level={3} textWrap="balance">
          {question}
        </Heading>
        <Text color="secondary" textWrap="pretty">
          {description}
        </Text>
      </VStack>
    </MotionCard>
  );
}
