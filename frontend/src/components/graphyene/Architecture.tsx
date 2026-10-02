'use client';

import {VStack, HStack} from '@astryxdesign/core/Layout';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Icon} from '@astryxdesign/core/Icon';
import {Token} from '@astryxdesign/core/Token';
import {ArrowDown} from 'lucide-react';
import {MotionCard, MotionHStack} from '@/components/motion/Motion';
import {springs} from '@/motion/springs';
import {useSequence} from '@/motion/useSequence';
import type {ArchitectureLayer} from '@/content/graphyene';
import {EMPHASIS} from '@/theme/emphasis';

/**
 * Graphyene's working model as a top-down flow. When it scrolls into view,
 * decisions travel down from the foundation, lighting up each layer until
 * they reach the experiences people use. It plays once.
 */
export function Architecture({layers}: {layers: ArchitectureLayer[]}) {
  const {ref, visible, pauseProps} = useSequence<HTMLOListElement>(layers.length, {
    stepMs: 800,
  });
  const active = visible - 1;

  return (
    <VStack
      ref={ref}
      gap={2}
      hAlign="stretch"
      as="ol"
      role="list"
      aria-label="Graphyene working model"
      {...pauseProps}>
      {layers.map((layer, index) => {
        const isReached = index < visible;
        const isActive = index === active;
        return (
          <VStack key={layer.title} gap={2} as="li" hAlign="center">
            <MotionCard
              width="100%"
              padding={5}
              variant={isActive ? EMPHASIS : 'default'}
              elevation={isActive ? 'med' : 'low'}
              initial={false}
              animate={{opacity: isReached ? 1 : 0.55, scale: isActive ? 1.02 : 1}}
              transition={springs.spatial.default}>
              <VStack gap={3}>
                <HStack gap={4} justify="between" vAlign="center" wrap="wrap">
                  <VStack gap={1}>
                    <Heading level={3}>{layer.title}</Heading>
                    <Text color="secondary">{layer.description}</Text>
                  </VStack>
                  <Text type="label" color={isReached ? 'accent' : 'secondary'} hasTabularNumbers>
                    {String(index + 1).padStart(2, '0')}
                  </Text>
                </HStack>
                {layer.items && (
                  <HStack gap={2} wrap="wrap">
                    {layer.items.map(item => (
                      <Token key={item} label={item} color={EMPHASIS} size="sm" />
                    ))}
                  </HStack>
                )}
              </VStack>
            </MotionCard>
            {index < layers.length - 1 && (
              <MotionHStack
                aria-hidden
                initial={false}
                animate={{opacity: index < active ? 1 : 0.3, y: index < active ? 2 : -2}}
                transition={springs.spatial.fast}>
                <Icon icon={ArrowDown} size="md" color="accent" />
              </MotionHStack>
            )}
          </VStack>
        );
      })}
    </VStack>
  );
}
