'use client';

import type {ReactNode} from 'react';
import {VStack} from '@astryxdesign/core/Layout';
import {Grid} from '@astryxdesign/core/Grid';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Container} from '@/components/layout/Container';
import {Reveal} from '@/components/motion/Reveal';
import {Eyebrow} from './Eyebrow';
import {Lines} from './Lines';
import {Microcopy} from './Microcopy';
import {typeRole} from '@/theme/typeScale';

type NarrativeBlockProps = {
  id?: string;
  eyebrow: string;
  /** Use "\n" for an intentional line break. */
  title: string;
  paragraphs: string[];
  microcopy?: string;
  /** 1 when this block opens the page and its heading is the page title. */
  level?: 1 | 2;
  /** Set the heading as a major storytelling statement (Display M). */
  isStatement?: boolean;
  /** Extra story content shown after the paragraphs, e.g. a Highlight. */
  children?: ReactNode;
};

/** Two-column chapter: a heading on one side, the story on the other. */
export function NarrativeBlock({
  id,
  eyebrow,
  title,
  paragraphs,
  microcopy,
  level = 2,
  isStatement = false,
  children,
}: NarrativeBlockProps) {
  return (
    <Container paddingBlock={10} id={id}>
      <Grid columns={{minWidth: 320, max: 2}} gap={8}>
        <Reveal gap={2}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <Heading
            level={level}
            // Statement → Display M, page title → Display S, otherwise a section heading (Headline XL).
            type={isStatement ? 'display-2' : level === 1 ? 'display-3' : undefined}
            style={isStatement || level === 1 ? undefined : typeRole('headline-xl')}
            textWrap="balance">
            <Lines text={title} />
          </Heading>
        </Reveal>
        <VStack gap={4}>
          {paragraphs.map((paragraph, index) => (
            <Reveal key={paragraph} delay={0.08 * (index + 1)}>
              <Text type="large" color="secondary" as="p" textWrap="pretty">
                <Lines text={paragraph} />
              </Text>
            </Reveal>
          ))}
          {children}
          {microcopy && <Microcopy delay={0.1}>{microcopy}</Microcopy>}
        </VStack>
      </Grid>
    </Container>
  );
}
