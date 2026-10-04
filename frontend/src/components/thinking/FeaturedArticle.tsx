'use client';

import NextLink from 'next/link';
import {VStack, HStack} from '@astryxdesign/core/Layout';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {Reveal} from '@/components/motion/Reveal';
import {CtaButton} from '@/components/navigation/CtaButton';
import {IndexLabel} from '@/components/editorial/IndexLabel';
import type {Article} from '@/content/articles';
import {typeRole} from '@/theme/typeScale';
import {EYEBROW_STYLE} from '@/theme/eyebrow';

type FeaturedArticleProps = {
  index: number;
  label: string;
  article: Article;
  actionLabel: string;
};

/** One article given a whole chapter: label, meta, a very large title and the excerpt. */
export function FeaturedArticle({index, label, article, actionLabel}: FeaturedArticleProps) {
  const href = `/thinking/${article.slug}`;
  return (
    <VStack gap={8}>
      <Reveal>
        <IndexLabel index={index}>{label}</IndexLabel>
      </Reveal>
      <Reveal delay={0.05} distance={32}>
        <VStack gap={5}>
          <Text type="supporting" color="secondary" style={EYEBROW_STYLE}>
            {article.category} · {article.readingMinutes} min read
          </Text>
          <NextLink href={href} className="featured-article-link">
            <Heading level={2} textWrap="balance" style={{...typeRole('display-l'), letterSpacing: '-0.03em', maxInlineSize: '20ch'}}>
              {article.title}
            </Heading>
          </NextLink>
        </VStack>
      </Reveal>
      <HStack justify="end">
        <Reveal delay={0.12}>
          <VStack gap={6} style={{maxInlineSize: '44ch'}}>
            <Text type="large" color="secondary" textWrap="pretty">
              {article.excerpt}
            </Text>
            <HStack>
              <CtaButton label={actionLabel} href={href} variant="secondary" />
            </HStack>
          </VStack>
        </Reveal>
      </HStack>
    </VStack>
  );
}
