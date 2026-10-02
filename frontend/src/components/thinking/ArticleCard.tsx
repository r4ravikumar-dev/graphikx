'use client';

import {VStack, HStack} from '@astryxdesign/core/Layout';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Icon} from '@astryxdesign/core/Icon';
import {ArrowRight} from 'lucide-react';
import {MotionClickableCard, MotionHStack} from '@/components/motion/Motion';
import {Eyebrow} from '@/components/storytelling/Eyebrow';
import {springs} from '@/motion/springs';
import {formatArticleMonth, type Article} from '@/content/articles';

type ArticleCardProps = {
  article: Article;
  /** "compact" drops the excerpt, for related-article lists. */
  variant?: 'default' | 'compact';
};

/** A Thinking article preview: category, title, excerpt, meta, and a read link. */
export function ArticleCard({article, variant = 'default'}: ArticleCardProps) {
  const isCompact = variant === 'compact';

  return (
    <MotionClickableCard
      label={article.title}
      href={`/thinking/${article.slug}`}
      padding={5}
      height="100%"
      initial="rest"
      whileHover="hover"
      whileTap={{scale: 0.98}}
      variants={{rest: {y: 0}, hover: {y: -6}}}
      transition={springs.spatial.fast}>
      <VStack gap={4} height="100%" justify="between">
        <VStack gap={3}>
          {!isCompact && <Eyebrow>{article.category}</Eyebrow>}
          <Heading level={3} textWrap="balance">
            {article.title}
          </Heading>
          {!isCompact && (
            <Text color="secondary" textWrap="pretty">
              {article.excerpt}
            </Text>
          )}
        </VStack>
        <HStack gap={3} justify="between" vAlign="center" wrap="wrap">
          <Text type="supporting">
            {isCompact
              ? `${article.category} · ${article.readingMinutes} min read`
              : `${article.readingMinutes} min read · ${formatArticleMonth(article.publishedAt)}`}
          </Text>
          <MotionHStack
            gap={1}
            vAlign="center"
            variants={{rest: {x: 0}, hover: {x: 4}}}
            transition={springs.spatial.fast}>
            <Text type="label" color="accent">
              {isCompact ? 'Read' : 'Read article'}
            </Text>
            <Icon icon={ArrowRight} size="sm" color="accent" />
          </MotionHStack>
        </HStack>
      </VStack>
    </MotionClickableCard>
  );
}
