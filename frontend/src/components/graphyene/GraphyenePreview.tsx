'use client';

import {VStack, HStack} from '@astryxdesign/core/Layout';
import {Grid} from '@astryxdesign/core/Grid';
import {Section} from '@astryxdesign/core/Section';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {StatusDot} from '@astryxdesign/core/StatusDot';
import {Container} from '@/components/layout/Container';
import {Reveal} from '@/components/motion/Reveal';
import {MotionCard} from '@/components/motion/Motion';
import {CtaButton} from '@/components/navigation/CtaButton';
import {Eyebrow} from '@/components/storytelling/Eyebrow';
import {Lines} from '@/components/storytelling/Lines';
import {expressive} from '@/motion/springs';
import {EMPHASIS} from '@/theme/emphasis';

type GraphyenePreviewProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  principles: string[];
  status: string;
  action: {label: string; href: string};
};

/** Home-page introduction to Graphyene, clearly marked as an exploration in progress. */
export function GraphyenePreview({
  eyebrow,
  title,
  subtitle,
  paragraphs,
  principles,
  status,
  action,
}: GraphyenePreviewProps) {
  return (
    <Section variant="muted" padding={0}>
      <Container paddingBlock={10}>
        <Grid columns={{minWidth: 320, max: 2}} gap={10}>
          <VStack gap={5}>
            <Reveal gap={2}>
              <Eyebrow>{eyebrow}</Eyebrow>
              <Heading level={2} type="display-2">
                {title}
              </Heading>
              <Text type="large" weight="medium">
                {subtitle}
              </Text>
            </Reveal>
            {paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph} delay={0.08 * (index + 1)}>
                <Text type="large" color="secondary" as="p" textWrap="pretty">
                  <Lines text={paragraph} />
                </Text>
              </Reveal>
            ))}
            <Reveal delay={0.3} gap={5}>
              <HStack gap={2} vAlign="center">
                <StatusDot variant="accent" label="In progress" />
                <Text type="supporting">{status}</Text>
              </HStack>
              <HStack>
                <CtaButton {...action} variant="secondary" />
              </HStack>
            </Reveal>
          </VStack>

          <VStack gap={3} vAlign="center" role="list" aria-label="Graphyene principles">
            {principles.map((principle, index) => (
              <MotionCard
                key={principle}
                role="listitem"
                padding={5}
                variant={index === principles.length - 1 ? EMPHASIS : 'default'}
                initial={{opacity: 0, x: 40, rotate: 2}}
                whileInView={{opacity: 1, x: 0, rotate: 0}}
                viewport={{once: true}}
                transition={expressive('default', 0.1 * index)}>
                <Heading level={3}>{principle}</Heading>
              </MotionCard>
            ))}
          </VStack>
        </Grid>
      </Container>
    </Section>
  );
}
