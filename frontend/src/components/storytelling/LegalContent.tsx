'use client';

import {VStack} from '@astryxdesign/core/Layout';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Divider} from '@astryxdesign/core/Divider';
import {Container} from '@/components/layout/Container';
import {Reveal} from '@/components/motion/Reveal';
import {formatArticleMonthLong} from '@/content/articles';
import type {LegalPage} from '@/content/legal';
import {SectionIntro} from './SectionIntro';

/** A short, plain-language policy page (Privacy, Terms). */
export function LegalContent({page}: {page: LegalPage}) {
  return (
    <Container size="narrow" paddingBlock={10} as="article">
      <VStack gap={8} paddingBlockStart={10}>
        <SectionIntro level={1} eyebrow={page.eyebrow} title={page.title} description={page.intro} />
        <Text type="supporting">
          Last updated <time dateTime={page.updated}>{formatArticleMonthLong(page.updated)}</time>
        </Text>
        <Divider />
        {page.sections.map(section => (
          <Reveal key={section.heading} gap={3}>
            <Heading level={2}>{section.heading}</Heading>
            {section.paragraphs.map(paragraph => (
              <Text key={paragraph} type="large" color="secondary" as="p" textWrap="pretty">
                {paragraph}
              </Text>
            ))}
          </Reveal>
        ))}
      </VStack>
    </Container>
  );
}
