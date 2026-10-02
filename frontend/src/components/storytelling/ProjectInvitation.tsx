'use client';

import {Section} from '@astryxdesign/core/Section';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {HStack} from '@astryxdesign/core/Layout';
import {Container} from '@/components/layout/Container';
import {Reveal} from '@/components/motion/Reveal';
import {CtaButton} from '@/components/navigation/CtaButton';
import {projectCta} from '@/content/site';
import {Lines} from './Lines';
import {Microcopy} from './Microcopy';

type Action = {label: string; href: string};

type ProjectInvitationProps = {
  /** Use "\n" for an intentional line break. */
  title?: string;
  description?: string;
  action?: Action;
  secondaryAction?: Action;
  microcopy?: string;
};

/** An invitation to start a conversation about a project. */
export function ProjectInvitation({
  title = 'Have something that needs to make more sense?',
  description = 'Tell us what you are working on. We will listen first, ask good questions, and suggest a sensible next step.',
  action = projectCta,
  secondaryAction,
  microcopy,
}: ProjectInvitationProps) {
  return (
    <Section variant="transparent" padding={0}>
      <Container size="narrow" paddingBlock={10} gap={4}>
        <Reveal gap={5} hAlign="center">
          <Heading level={2} type="display-2" justify="center" textWrap="balance">
            <Lines text={title} />
          </Heading>
          <Text type="large" color="secondary" justify="center" textWrap="balance">
            <Lines text={description} />
          </Text>
          <HStack gap={3} wrap="wrap" justify="center">
            <CtaButton {...action} />
            {secondaryAction && <CtaButton {...secondaryAction} variant="ghost" />}
          </HStack>
        </Reveal>
        {microcopy && (
          <Microcopy justify="center" delay={0.15}>
            {microcopy}
          </Microcopy>
        )}
      </Container>
    </Section>
  );
}
