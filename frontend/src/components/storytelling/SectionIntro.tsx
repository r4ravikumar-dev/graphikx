'use client';

import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Reveal} from '@/components/motion/Reveal';
import {Eyebrow} from './Eyebrow';
import {Lines} from './Lines';
import {typeRole} from '@/theme/typeScale';

type SectionIntroProps = {
  eyebrow?: string;
  /** Use "\n" for an intentional line break. */
  title: string;
  description?: string;
  level?: 1 | 2;
  align?: 'start' | 'center';
};

/** Eyebrow, heading, and supporting line that open a section or page. */
export function SectionIntro({
  eyebrow,
  title,
  description,
  level = 2,
  align = 'start',
}: SectionIntroProps) {
  return (
    <Reveal gap={3} hAlign={align} maxWidth={760}>
      {eyebrow && <Eyebrow justify={align}>{eyebrow}</Eyebrow>}
      <Heading
        level={level}
        // Page titles are Display S; section headings are Headline XL.
        type={level === 1 ? 'display-3' : undefined}
        style={level === 1 ? undefined : typeRole('headline-xl')}
        justify={align}
        textWrap="balance">
        <Lines text={title} />
      </Heading>
      {description && (
        <Text type="large" color="secondary" justify={align} textWrap="pretty">
          {description}
        </Text>
      )}
    </Reveal>
  );
}
