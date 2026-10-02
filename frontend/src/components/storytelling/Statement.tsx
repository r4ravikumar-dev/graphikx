'use client';

import {Section} from '@astryxdesign/core/Section';
import {Heading} from '@astryxdesign/core/Heading';
import {Container} from '@/components/layout/Container';
import {Reveal} from '@/components/motion/Reveal';
import {Microcopy} from './Microcopy';

type StatementProps = {
  statement: string;
  /** A quiet line under the statement: an attribution or microcopy. */
  attribution?: string;
};

/** A single large statement that marks a turn in the story. */
export function Statement({statement, attribution}: StatementProps) {
  return (
    <Section variant="muted" padding={0}>
      <Container size="narrow" gap={4} hAlign="center" paddingBlock={10}>
        <Reveal distance={40} speed="slow" hAlign="center">
          <Heading level={2} type="display-2" justify="center" textWrap="balance">
            {statement}
          </Heading>
        </Reveal>
        {attribution && (
          <Microcopy justify="center" delay={0.15}>
            {attribution}
          </Microcopy>
        )}
      </Container>
    </Section>
  );
}
