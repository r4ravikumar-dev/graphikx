'use client';

import {VStack} from '@astryxdesign/core/Layout';
import {Grid} from '@astryxdesign/core/Grid';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {VisuallyHidden} from '@astryxdesign/core/VisuallyHidden';
import {Reveal} from '@/components/motion/Reveal';
import {IndexLabel} from '@/components/editorial/IndexLabel';
import {Lines, accentStyle} from '@/components/storytelling/Lines';
import {typeRole} from '@/theme/typeScale';
import {EYEBROW_STYLE} from '@/theme/eyebrow';

type FounderNoteProps = {
  index: number;
  label: string;
  name: string;
  role: string;
  /** "*word*" sets the italic serif accent. */
  quote: string;
  bio: string;
  team: string;
};

/**
 * The founder, editorial style: a large pull quote, then name, role and a
 * short bio. No portrait yet; the quote carries the section.
 */
export function FounderNote({index, label, name, role, quote, bio, team}: FounderNoteProps) {
  return (
    <Grid columns={{minWidth: 320, max: 2}} gap={10} style={{alignItems: 'end'}}>
      <VStack gap={6}>
        <Reveal>
          <IndexLabel index={index}>{label}</IndexLabel>
        </Reveal>
        <Reveal delay={0.05} distance={32}>
          <figure style={{margin: 0}}>
            <blockquote style={{margin: 0}}>
              <Heading level={2} textWrap="balance" style={{...typeRole('display-m'), letterSpacing: '-0.02em'}}>
                <span aria-hidden style={{...accentStyle, color: 'var(--color-brand-text)'}}>
                  “
                </span>
                <Lines text={quote} />
                <span aria-hidden style={{...accentStyle, color: 'var(--color-brand-text)'}}>
                  ”
                </span>
              </Heading>
            </blockquote>
            <figcaption>
              <VisuallyHidden>
                {name}, {role}
              </VisuallyHidden>
            </figcaption>
          </figure>
        </Reveal>
      </VStack>
      <Reveal delay={0.12}>
        <VStack gap={5} style={{borderBlockStart: '1px solid var(--color-border)', paddingBlockStart: 'var(--spacing-6)'}}>
          <VStack gap={1}>
            <Heading level={3} style={typeRole('headline-m')}>
              {name}
            </Heading>
            <Text type="supporting" color="secondary" style={EYEBROW_STYLE}>
              {role}
            </Text>
          </VStack>
          <Text type="large" color="secondary" textWrap="pretty">
            {bio}
          </Text>
          <Text color="secondary" textWrap="pretty">
            {team}
          </Text>
        </VStack>
      </Reveal>
    </Grid>
  );
}
