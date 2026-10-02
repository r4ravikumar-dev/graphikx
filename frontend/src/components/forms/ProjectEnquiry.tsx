'use client';

import {VStack} from '@astryxdesign/core/Layout';
import {Grid} from '@astryxdesign/core/Grid';
import {Section} from '@astryxdesign/core/Section';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Container} from '@/components/layout/Container';
import {Reveal} from '@/components/motion/Reveal';
import {Eyebrow} from '@/components/storytelling/Eyebrow';
import {ProjectForm} from './ProjectForm';

type ProjectEnquiryProps = {
  id?: string;
  eyebrow: string;
  title: string;
  /** Short examples of what people bring, shown one per line. */
  prompts: string[];
  closing: string;
};

/** An inline "start a conversation" section: invitation on one side, the form on the other. */
export function ProjectEnquiry({id, eyebrow, title, prompts, closing}: ProjectEnquiryProps) {
  return (
    <Container
      paddingBlock={10}
      id={id}
      style={id ? {scrollMarginTop: 'var(--spacing-10)'} : undefined}>
      <Grid columns={{minWidth: 320, max: 2}} gap={10}>
        <VStack gap={5}>
          <Reveal gap={3}>
            <Eyebrow>{eyebrow}</Eyebrow>
            <Heading level={2} type="display-2" textWrap="balance">
              {title}
            </Heading>
          </Reveal>
          <VStack gap={1}>
            {prompts.map((prompt, index) => (
              <Reveal key={prompt} delay={0.06 * index} distance={12}>
                <Text type="large" color="secondary">
                  {prompt}
                </Text>
              </Reveal>
            ))}
          </VStack>
          <Reveal delay={0.3}>
            <Text type="large" weight="medium" textWrap="pretty">
              {closing}
            </Text>
          </Reveal>
        </VStack>
        <Reveal delay={0.15}>
          <Section padding={6}>
            <ProjectForm />
          </Section>
        </Reveal>
      </Grid>
    </Container>
  );
}
