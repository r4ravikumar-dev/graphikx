import type {Metadata} from 'next';
import {PageFaq} from '@/components/editorial/PageFaq';
import {thinkingFaq} from '@/content/faqs';
import {Suspense} from 'react';
import {VStack} from '@astryxdesign/core/Layout';
import {Reveal} from '@/components/motion/Reveal';
import {BigStatement} from '@/components/editorial/BigStatement';
import {Chapter} from '@/components/editorial/Chapter';
import {ChapterHeader} from '@/components/editorial/ChapterHeader';
import {EditorialHero} from '@/components/editorial/EditorialHero';
import {IndexLabel} from '@/components/editorial/IndexLabel';
import {Manifesto} from '@/components/editorial/Manifesto';
import {ThinkingLens} from '@/components/illustrations/scenes';
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
  const {hero, manifesto, featured, all, emptyCategory, closing} = thinkingPage;
  const featuredArticle = getArticle(featured.slug);

  return (
    <VStack gap={0}>
      <EditorialHero
        {...hero}
        meta={[
          `${articles.length} articles`,
          `${articleCategories.length} topics`,
          'Product',
          'UX',
          'Systems',
        ]}
        illustration={<ThinkingLens />}
      />

      {/* Manifesto: the details we look at. */}
      <Chapter label={manifesto.label}>
        <Reveal hAlign="center">
          <IndexLabel>{manifesto.label}</IndexLabel>
        </Reveal>
        <Manifesto text={manifesto.text} />
      </Chapter>

      {/* 01: Featured article, on the muted surface. */}
      {featuredArticle && (
        <Chapter tone="muted" label={featured.label}>
          <FeaturedArticle
            index={1}
            label={featured.label}
            article={featuredArticle}
            actionLabel={featured.actionLabel}
          />
        </Chapter>
      )}

      {/* 02: All thinking. */}
      <Chapter label={all.label}>
        <ChapterHeader index={2} label={all.label} title={all.title} />
        <Suspense>
          <ArticleList
            articles={articles}
            categories={articleCategories}
            emptyCategory={emptyCategory}
          />
        </Suspense>
      </Chapter>

      {/* 03: About these ideas. */}
      <PageFaq group={thinkingFaq} index={3} tone="muted" />

      <BigStatement {...closing} />
    </VStack>
  );
}
