import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {VStack} from '@astryxdesign/core/Layout';
import {ArticleRows} from '@/components/editorial/ArticleRows';
import {BigStatement} from '@/components/editorial/BigStatement';
import {Chapter} from '@/components/editorial/Chapter';
import {ChapterHeader} from '@/components/editorial/ChapterHeader';
import {ArticleContent} from '@/components/thinking/ArticleContent';
import {articles, getArticle, getRelatedArticles, thinkingPage} from '@/content/articles';
import {site} from '@/content/site';

type ArticlePageProps = {params: Promise<{slug: string}>};

export function generateStaticParams() {
  return articles.map(article => ({slug: article.slug}));
}

export const dynamicParams = false;

export async function generateMetadata({params}: ArticlePageProps): Promise<Metadata> {
  const article = getArticle((await params).slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    alternates: {canonical: `/thinking/${article.slug}`},
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.excerpt,
      publishedTime: article.publishedAt,
      section: article.category,
    },
  };
}

export default async function ArticlePage({params}: ArticlePageProps) {
  const article = getArticle((await params).slug);
  if (!article) notFound();

  const related = getRelatedArticles(article);
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    articleSection: article.category,
    author: {'@type': 'Organization', name: site.name},
    publisher: {'@type': 'Organization', name: site.name},
  };

  const {back, related: relatedCopy, closing} = thinkingPage.article;

  return (
    <VStack gap={0}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData).replace(/</g, '\\u003c')}}
      />
      <ArticleContent article={article} backLabel={back} />

      {/* Keep thinking: related articles as rows. */}
      <Chapter label={relatedCopy.label}>
        <ChapterHeader label={relatedCopy.label} title={relatedCopy.title} size="display-l" />
        <ArticleRows articles={related} />
      </Chapter>

      <BigStatement {...closing} />
    </VStack>
  );
}
