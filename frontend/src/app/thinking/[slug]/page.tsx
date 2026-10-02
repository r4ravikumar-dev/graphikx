import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {VStack} from '@astryxdesign/core/Layout';
import {Grid} from '@astryxdesign/core/Grid';
import {Section} from '@astryxdesign/core/Section';
import {Container} from '@/components/layout/Container';
import {Reveal} from '@/components/motion/Reveal';
import {SectionIntro} from '@/components/storytelling/SectionIntro';
import {ProjectInvitation} from '@/components/storytelling/ProjectInvitation';
import {ArticleContent} from '@/components/thinking/ArticleContent';
import {ArticleCard} from '@/components/thinking/ArticleCard';
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

  return (
    <VStack gap={0}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData).replace(/</g, '\\u003c')}}
      />
      <ArticleContent article={article} />

      {/* Related thinking */}
      <Container paddingBlock={10}>
        <VStack gap={6}>
          <SectionIntro eyebrow={thinkingPage.related.eyebrow} title={thinkingPage.related.title} />
          <Grid columns={{minWidth: 260}} gap={4}>
            {related.map((relatedArticle, index) => (
              <Reveal key={relatedArticle.slug} delay={0.06 * index} height="100%">
                <ArticleCard article={relatedArticle} variant="compact" />
              </Reveal>
            ))}
          </Grid>
        </VStack>
      </Container>

      {/* Article CTA */}
      <Section variant="muted" padding={0}>
        <ProjectInvitation {...thinkingPage.articleInvitation} />
      </Section>
    </VStack>
  );
}
