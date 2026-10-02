'use client';

import {VStack} from '@astryxdesign/core/Layout';
import {Grid} from '@astryxdesign/core/Grid';
import {Section} from '@astryxdesign/core/Section';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Divider} from '@astryxdesign/core/Divider';
import {Breadcrumbs, BreadcrumbItem} from '@astryxdesign/core/Breadcrumbs';
import {Container} from '@/components/layout/Container';
import {Reveal} from '@/components/motion/Reveal';
import {Eyebrow} from '@/components/storytelling/Eyebrow';
import {KeyStatement} from '@/components/storytelling/KeyStatement';
import {Lines} from '@/components/storytelling/Lines';
import {Microcopy} from '@/components/storytelling/Microcopy';
import {FlowComparison} from './FlowComparison';
import {
  formatArticleMonthLong,
  type Article,
  type ArticleBlock,
  type ArticleVisual,
} from '@/content/articles';
import {typeRole} from '@/theme/typeScale';

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

function Block({block}: {block: ArticleBlock}) {
  switch (block.type) {
    case 'section':
      return (
        <Container size="narrow" gap={4}>
          {block.heading && (
            <Reveal>
              <Heading level={2} style={typeRole('headline-xl')} textWrap="balance">
                {block.heading}
              </Heading>
            </Reveal>
          )}
          <Paragraphs paragraphs={block.paragraphs} />
        </Container>
      );

    case 'questions':
      return (
        <Container size="narrow">
          <Grid columns={{minWidth: 260, max: 2}} gap={6}>
            {block.items.map((item, index) => (
              <Reveal key={item.question} delay={0.06 * index} gap={1}>
                <Heading level={3}>{item.question}</Heading>
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
        <Section variant="muted" padding={0} paddingBlock={10}>
          <Container gap={6}>
            <Reveal gap={2} maxWidth={760}>
              <Eyebrow>{block.eyebrow}</Eyebrow>
              <Heading level={2} style={typeRole('headline-xl')} textWrap="balance">
                {block.title}
              </Heading>
            </Reveal>
            {block.paragraphs && <Paragraphs paragraphs={block.paragraphs} />}
            <VStack gap={3} as="figure" style={{margin: 0}}>
              {visuals[block.visual]()}
              <Text type="label" justify="center" as="div">
                <figcaption>{block.caption}</figcaption>
              </Text>
            </VStack>
            {block.microcopy && <Microcopy justify="center">{block.microcopy}</Microcopy>}
          </Container>
        </Section>
      );

    case 'perspective':
      return (
        <Container size="narrow" gap={4}>
          <Reveal gap={2}>
            <Eyebrow>{block.eyebrow}</Eyebrow>
            <Heading level={2} style={typeRole('headline-xl')} textWrap="balance">
              {block.title}
            </Heading>
          </Reveal>
          <Paragraphs paragraphs={block.paragraphs} />
          <KeyStatement>{block.statement}</KeyStatement>
        </Container>
      );

    case 'closing':
      return (
        <Container size="narrow" gap={4}>
          <Divider />
          <Reveal>
            <Heading level={2} type="display-2" textWrap="balance">
              {block.title}
            </Heading>
          </Reveal>
          <Paragraphs paragraphs={block.paragraphs} />
        </Container>
      );
  }
}

/** A full Thinking article: header, introduction, meta, and its content blocks. */
export function ArticleContent({article}: {article: Article}) {
  const intro = article.intro ?? [article.excerpt];

  return (
    <VStack gap={10} as="article" paddingBlock={10}>
      <Container size="narrow" gap={6} paddingBlockStart={10}>
        <Reveal gap={4}>
          <Breadcrumbs>
            <BreadcrumbItem href="/thinking">Thinking</BreadcrumbItem>
            <BreadcrumbItem isCurrent>{article.title}</BreadcrumbItem>
          </Breadcrumbs>
          <Eyebrow>{article.category}</Eyebrow>
          <Heading level={1} type="display-3" textWrap="balance">
            {article.title}
          </Heading>
        </Reveal>
        <VStack gap={3}>
          {intro.map((paragraph, index) => (
            <Reveal key={paragraph} delay={0.08 * (index + 1)}>
              <Text type="large" color="secondary" as="p" textWrap="pretty">
                {paragraph}
              </Text>
            </Reveal>
          ))}
        </VStack>
        <Reveal delay={0.2} gap={0.5}>
          <Text type="supporting">{article.readingMinutes} min read</Text>
          <Text type="supporting">
            Published{' '}
            <time dateTime={article.publishedAt}>{formatArticleMonthLong(article.publishedAt)}</time>
          </Text>
        </Reveal>
        <Divider />
      </Container>

      {article.body.map((block, index) => (
        <Block key={index} block={block} />
      ))}
    </VStack>
  );
}
