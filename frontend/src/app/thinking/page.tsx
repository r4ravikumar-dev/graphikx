import type {Metadata} from 'next';
import {Suspense} from 'react';
import {VStack} from '@astryxdesign/core/Layout';
import {Grid} from '@astryxdesign/core/Grid';
import {Section} from '@astryxdesign/core/Section';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Container} from '@/components/layout/Container';
import {Reveal} from '@/components/motion/Reveal';
import {SectionIntro} from '@/components/storytelling/SectionIntro';
import {Microcopy} from '@/components/storytelling/Microcopy';
import {ProjectInvitation} from '@/components/storytelling/ProjectInvitation';
import {ArticleList} from '@/components/thinking/ArticleList';
import {FeaturedArticle} from '@/components/thinking/FeaturedArticle';
import {articleCategories, articles, getArticle, thinkingPage} from '@/content/articles';

export const metadata: Metadata = {
  title: 'Thinking',
  description:
    'Articles, observations, and ideas about product design, UX, UI, interaction, SaaS, design systems, and no-code.',
  alternates: {canonical: '/thinking'},
};

export default function ThinkingPage() {
  const {opening, featured, all, emptyCategory, invitation} = thinkingPage;
  const featuredArticle = getArticle(featured.slug);

  return (
    <VStack gap={0}>
      {/* 01: Opening */}
      <Container paddingBlock={10}>
        <Grid columns={{minWidth: 320, max: 2}} gap={10}>
          <VStack paddingBlockStart={10}>
            <SectionIntro level={1} eyebrow={opening.eyebrow} title={opening.title} />
          </VStack>
          <VStack gap={5} paddingBlockStart={10} vAlign="end">
            <VStack gap={1}>
              {opening.details.map((detail, index) => (
                <Reveal key={detail} delay={0.15 + 0.08 * index} distance={12}>
                  <Text type="large" weight="medium">
                    {detail}
                  </Text>
                </Reveal>
              ))}
            </VStack>
            {opening.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph} delay={0.5 + 0.06 * index}>
                <Text type="large" color="secondary" as="p" textWrap="pretty">
                  {paragraph}
                </Text>
              </Reveal>
            ))}
            <Microcopy delay={0.6}>{opening.microcopy}</Microcopy>
          </VStack>
        </Grid>
      </Container>

      {/* 02: Featured thinking */}
      {featuredArticle && (
        <Container paddingBlock={10}>
          <Grid columns={{minWidth: 320, max: 2}} gap={10}>
            <VStack gap={5}>
              <SectionIntro eyebrow={featured.eyebrow} title={featured.title} />
              <Reveal delay={0.1}>
                <Text type="large" color="secondary">
                  {featured.intro}
                </Text>
              </Reveal>
              <VStack gap={1}>
                {featured.questions.map((question, index) => (
                  <Reveal key={question} delay={0.15 + 0.08 * index} distance={12}>
                    <Heading level={3}>{question}</Heading>
                  </Reveal>
                ))}
              </VStack>
              <Reveal delay={0.4}>
                <Text type="large" color="secondary">
                  {featured.closing}
                </Text>
              </Reveal>
            </VStack>
            <Reveal delay={0.15}>
              <FeaturedArticle article={featuredArticle} actionLabel={featured.actionLabel} />
            </Reveal>
          </Grid>
        </Container>
      )}

      {/* 03: All thinking */}
      <Container paddingBlock={10}>
        <VStack gap={8}>
          <SectionIntro eyebrow={all.eyebrow} title={all.title} description={all.description} />
          <Suspense>
            <ArticleList
              articles={articles}
              categories={articleCategories}
              emptyCategory={emptyCategory}
            />
          </Suspense>
        </VStack>
      </Container>

      {/* 06: Thinking CTA */}
      <Section variant="muted" padding={0}>
        <ProjectInvitation {...invitation} />
      </Section>
    </VStack>
  );
}
