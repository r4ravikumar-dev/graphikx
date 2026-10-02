'use client';

import {VStack, HStack} from '@astryxdesign/core/Layout';
import {Grid} from '@astryxdesign/core/Grid';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Icon} from '@astryxdesign/core/Icon';
import {Token} from '@astryxdesign/core/Token';
import {Reveal} from '@/components/motion/Reveal';
import {MotionHStack} from '@/components/motion/Motion';
import {Lines} from '@/components/storytelling/Lines';
import {expressive} from '@/motion/springs';
import {capabilityIcons} from './capabilityIcons';
import type {Capability} from '@/content/practice';
import {EMPHASIS} from '@/theme/emphasis';
import {typeRole} from '@/theme/typeScale';

/** A full chapter for one capability: headline, story, what we work on, and a nudge line. */
export function PracticeSection({capability}: {capability: Capability}) {
  const icon = capabilityIcons[capability.slug];
  const titleId = `${capability.slug}-title`;

  return (
    <Grid columns={{minWidth: 320, max: 2}} gap={8}>
      <Reveal
        gap={3}
        id={capability.slug}
        as="section"
        aria-labelledby={titleId}>
        <HStack gap={2} vAlign="center">
          {icon && <Icon icon={icon} size="md" color="accent" />}
          <Text type="label" color="accent" id={titleId}>
            {capability.title}
          </Text>
        </HStack>
        <Heading level={3} style={typeRole('headline-l')} textWrap="balance">
          <Lines text={capability.headline} />
        </Heading>
      </Reveal>

      <VStack gap={5}>
        {capability.body.map((paragraph, index) => (
          <Reveal key={paragraph} delay={0.06 * (index + 1)}>
            <Text type="large" color="secondary" as="p" textWrap="pretty">
              {paragraph}
            </Text>
          </Reveal>
        ))}

        <VStack gap={2}>
          <Text type="label" color="secondary">
            What we work on
          </Text>
          <HStack gap={2} wrap="wrap" role="list">
            {capability.workOn.map((item, index) => (
              <MotionHStack
                key={item}
                role="listitem"
                initial={{opacity: 0, scale: 0.8}}
                whileInView={{opacity: 1, scale: 1}}
                viewport={{once: true}}
                transition={expressive('fast', 0.04 * index)}>
                <Token label={item} color={EMPHASIS} />
              </MotionHStack>
            ))}
          </HStack>
        </VStack>

        <Reveal delay={0.1}>
          <Text type="large" weight="medium" color="accent" textWrap="pretty">
            {capability.nudge}
          </Text>
        </Reveal>
      </VStack>
    </Grid>
  );
}
