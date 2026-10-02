'use client';

import {VStack, HStack} from '@astryxdesign/core/Layout';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Container} from '@/components/layout/Container';
import {Reveal} from '@/components/motion/Reveal';
import {CtaButton} from '@/components/navigation/CtaButton';
import {Eyebrow} from './Eyebrow';
import {Microcopy} from './Microcopy';

type HeroAction = {label: string; href: string};

type HeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  microcopy?: string;
  primaryAction?: HeroAction;
};

/**
 * Centred hero, adapted from the Astryx "centered-hero" template:
 * headline, short blurb, and calls to action.
 */
export function Hero({
  eyebrow,
  title,
  description,
  microcopy,
  primaryAction,
}: HeroProps) {
  return (
    <Container paddingBlockStart={10} paddingBlockEnd={10}>
      <VStack gap={6} hAlign="center" paddingBlock={10}>
        <VStack gap={3} hAlign="center" maxWidth={860}>
          {eyebrow && (
            <Reveal delay={0.05} hAlign="center">
              <Eyebrow justify="center">{eyebrow}</Eyebrow>
            </Reveal>
          )}
          <Reveal delay={0.1} distance={32}>
            <Heading level={1} type="display-1" justify="center" textWrap="balance">
              {title}
            </Heading>
          </Reveal>
          <Reveal delay={0.2}>
            <Text type="large" color="secondary" justify="center" textWrap="balance">
              {description}
            </Text>
          </Reveal>
        </VStack>
        {microcopy && (
          <Microcopy justify="center" delay={0.25}>
            {microcopy}
          </Microcopy>
        )}
        {primaryAction && (
          <Reveal delay={0.3}>
            <HStack gap={3} wrap="wrap" justify="center">
              <CtaButton {...primaryAction} />
            </HStack>
          </Reveal>
        )}
      </VStack>
    </Container>
  );
}
