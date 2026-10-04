'use client';

import NextLink from 'next/link';
import {VStack, HStack} from '@astryxdesign/core/Layout';
import {Grid} from '@astryxdesign/core/Grid';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Icon} from '@astryxdesign/core/Icon';
import {ArrowLeft} from 'lucide-react';
import {Container} from '@/components/layout/Container';
import {Reveal} from '@/components/motion/Reveal';
import {IndexLabel} from '@/components/editorial/IndexLabel';
import {Lines, accentStyle} from '@/components/storytelling/Lines';
import {FlowComparison} from './FlowComparison';
import {
  formatArticleMonthLong,
  type Article,
  type ArticleBlock,
  type ArticleVisual,
} from '@/content/articles';
import {typeRole} from '@/theme/typeScale';
import {EYEBROW_STYLE} from '@/theme/eyebrow';

const visuals: Record<ArticleVisual, () => React.ReactNode> = {
  'flow-comparison': () => <FlowComparison />,
};

function Paragraphs({paragraphs}: {paragraphs: string[]}) {
  return paragraphs.map(paragraph => (
    <Reveal key={paragraph}>
      <Text type="large" as="p" textWrap="pretty">
        <Lines text={paragraph} />
      </Text>
    </Reveal>
  ));
}

function SectionHeading({children}: {children: string}) {
  return (
    <Reveal>
      <Heading level={2} textWrap="balance" style={{...typeRole('headline-l'), letterSpacing: '-0.02em'}}>
        {children}
      </Heading>
    </Reveal>
  );
}

function Block({block}: {block: ArticleBlock}) {
  switch (block.type) {
    case 'section':
      return (
        <Container size="reading" gap={5}>
          {block.heading && <SectionHeading>{block.heading}</SectionHeading>}
          <Paragraphs paragraphs={block.paragraphs} />
        </Container>
      );

    case 'questions':
      return (
        <Container size="narrow">
          <Grid columns={{minWidth: 260, max: 2}} gap={0} style={{borderBlockStart: '1px solid var(--color-border)'}}>
            {block.items.map((item, index) => (
              <Reveal
                key={item.question}
                delay={0.06 * index}
                gap={2}
                style={{borderBlockEnd: '1px solid var(--color-border)', paddingBlock: 'var(--spacing-6)', paddingInlineEnd: 'var(--spacing-6)'}}>
                <Heading level={3} textWrap="balance" style={typeRole('headline-s')}>
                  {item.question}
                </Heading>
                <Text type="large" color="secondary" textWrap="pretty">
                  {item.answer}
                </Text>
              </Reveal>
            ))}
          </Grid>
        </Container>
      );

    case 'visual':
      return (
        <VStack
          as="section"
          gap={0}
          style={{backgroundColor: 'var(--color-background-muted)', paddingBlock: 'var(--space-chapter-gap)'}}>
          <Container gap={0} style={{gap: 'var(--space-block)'}}>
            <Reveal gap={4} style={{maxInlineSize: '760px'}}>
              <IndexLabel>{block.eyebrow}</IndexLabel>
              <Heading level={2} textWrap="balance" style={{...typeRole('headline-xl'), letterSpacing: '-0.02em'}}>
                {block.title}
              </Heading>
            </Reveal>
            {block.paragraphs && (
              <VStack gap={4} style={{maxInlineSize: '680px'}}>
                <Paragraphs paragraphs={block.paragraphs} />
              </VStack>
            )}
            <VStack gap={3} as="figure" style={{margin: 0}}>
              {visuals[block.visual]()}
              <Text type="supporting" color="secondary" justify="center" as="div" style={EYEBROW_STYLE}>
                <figcaption>{block.caption}</figcaption>
              </Text>
            </VStack>
            {block.microcopy && (
              <Text color="secondary" justify="center" style={accentStyle}>
                {block.microcopy}
              </Text>
            )}
          </Container>
        </VStack>
      );

    case 'perspective':
      return (
        <Container size="reading" gap={5}>
          <Reveal>
            <IndexLabel>{block.eyebrow}</IndexLabel>
          </Reveal>
          <SectionHeading>{block.title}</SectionHeading>
          <Paragraphs paragraphs={block.paragraphs} />
          {/* Pull quote: the italic serif, set off by a brand-blue rule. */}
          <Reveal distance={24}>
            <blockquote
              style={{
                margin: 0,
                paddingInlineStart: 'var(--spacing-6)',
                borderInlineStart: '2px solid var(--color-brand-text)',
              }}>
              <Text as="p" textWrap="balance" style={{...typeRole('display-s'), ...accentStyle}}>
                {block.statement}
              </Text>
            </blockquote>
          </Reveal>
        </Container>
      );

    case 'closing':
      return (
        <Container size="reading" gap={5}>
          <Reveal style={{borderBlockStart: '1px solid var(--color-border)', paddingBlockStart: 'var(--space-block)'}}>
            <Heading level={2} textWrap="balance" style={{...typeRole('display-s'), letterSpacing: '-0.02em'}}>
              {block.title}
            </Heading>
          </Reveal>
          <Paragraphs paragraphs={block.paragraphs} />
        </Container>
      );
  }
}

/** A full Thinking article: reading-column header, then its content blocks. */
export function ArticleContent({article, backLabel}: {article: Article; backLabel: string}) {
  const intro = article.intro ?? [article.excerpt];

  return (
    <VStack gap={0} as="article" style={{gap: 'var(--space-chapter-gap)', paddingBlock: 'var(--space-chapter-gap)'}}>
      <Container size="reading" gap={0} style={{gap: 'var(--space-block)'}}>
        <Reveal>
          <NextLink href="/thinking" className="back-link">
            <HStack gap={2} vAlign="center">
              <Icon icon={ArrowLeft} size="sm" color="inherit" />
              <Text type="supporting" color="inherit" style={EYEBROW_STYLE}>
                {backLabel}
              </Text>
            </HStack>
          </NextLink>
        </Reveal>
        <VStack gap={6}>
          <Reveal>
            <IndexLabel>{article.category}</IndexLabel>
          </Reveal>
          <Reveal delay={0.05} distance={32}>
            <Heading level={1} textWrap="balance" style={{...typeRole('display-l'), letterSpacing: '-0.03em'}}>
              {article.title}
            </Heading>
          </Reveal>
          {intro.map((paragraph, index) => (
            <Reveal key={paragraph} delay={0.1 + 0.06 * index}>
              <Text type="large" color="secondary" as="p" textWrap="pretty">
                {paragraph}
              </Text>
            </Reveal>
          ))}
        </VStack>
        <Reveal delay={0.2}>
          <HStack
            gap={6}
            wrap="wrap"
            style={{borderBlock: '1px solid var(--color-border)', paddingBlock: 'var(--spacing-4)'}}>
            <Text type="supporting" color="secondary" style={EYEBROW_STYLE}>
              {article.readingMinutes} min read
            </Text>
            <Text type="supporting" color="secondary" style={EYEBROW_STYLE}>
              Published <time dateTime={article.publishedAt}>{formatArticleMonthLong(article.publishedAt)}</time>
            </Text>
          </HStack>
        </Reveal>
      </Container>

      {article.body.map((block, index) => (
        <Block key={index} block={block} />
      ))}
    </VStack>
  );
}
