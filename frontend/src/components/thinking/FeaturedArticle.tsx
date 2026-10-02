'use client';

import {VStack, HStack} from '@astryxdesign/core/Layout';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Icon} from '@astryxdesign/core/Icon';
import {ArrowRight} from 'lucide-react';
import {MotionClickableCard, MotionHStack} from '@/components/motion/Motion';
import {Eyebrow} from '@/components/storytelling/Eyebrow';
import {springs} from '@/motion/springs';
import type {Article} from '@/content/articles';
import {EMPHASIS} from '@/theme/emphasis';
import {typeRole} from '@/theme/typeScale';

type FeaturedArticleProps = {
  article: Article;
  actionLabel: string;
};

/** One article given the spotlight: a large card with its category, title, and excerpt. */
export function FeaturedArticle({article, actionLabel}: FeaturedArticleProps) {
  return (
    <MotionClickableCard
      label={article.title}
      href={`/thinking/${article.slug}`}
      padding={8}
      variant={EMPHASIS}
      elevation="low"
      initial="rest"
      whileHover="hover"
      whileTap={{scale: 0.99}}
      variants={{rest: {y: 0}, hover: {y: -6}}}
      transition={springs.spatial.fast}>
      <VStack gap={5}>
        <Eyebrow>{`Featured · ${article.category}`}</Eyebrow>
        <Heading level={3} style={typeRole('headline-m')} textWrap="balance">
          {article.title}
        </Heading>
        <Text type="large" textWrap="pretty">
          {article.excerpt}
        </Text>
        <MotionHStack
          gap={2}
          vAlign="center"
          variants={{rest: {x: 0}, hover: {x: 8}}}
          transition={springs.spatial.fast}>
          <Text type="large" weight="medium" color="accent">
            {actionLabel}
          </Text>
          <Icon icon={ArrowRight} size="md" color="accent" />
        </MotionHStack>
        <HStack>
          <Text type="supporting">{article.readingMinutes} min read</Text>
        </HStack>
      </VStack>
    </MotionClickableCard>
  );
}
