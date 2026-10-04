'use client';

import {useState} from 'react';
import {useSearchParams} from 'next/navigation';
import {AnimatePresence} from 'framer-motion';
import {VStack, HStack} from '@astryxdesign/core/Layout';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {MotionVStack} from '@/components/motion/Motion';
import {ArticleRows} from '@/components/editorial/ArticleRows';
import {expressive, springs} from '@/motion/springs';
import {ALL_CATEGORIES, CategoryFilter} from './CategoryFilter';
import type {Article} from '@/content/articles';
import {typeRole} from '@/theme/typeScale';
import {EYEBROW_STYLE} from '@/theme/eyebrow';

type ArticleListProps = {
  articles: Article[];
  categories: readonly string[];
  emptyCategory: {title: string; description: string};
};

/**
 * Filterable Thinking articles as large editorial rows. The category can be
 * preset with ?category=..., and the URL follows the filter so a filtered view
 * can be shared.
 */
export function ArticleList({articles, categories, emptyCategory}: ArticleListProps) {
  const searchParams = useSearchParams();
  const requested = searchParams.get('category');
  const [category, setCategory] = useState(
    requested && categories.includes(requested) ? requested : ALL_CATEGORIES,
  );

  const visible =
    category === ALL_CATEGORIES
      ? articles
      : articles.filter(article => article.category === category);

  function selectCategory(next: string) {
    setCategory(next);
    const url = new URL(window.location.href);
    if (next === ALL_CATEGORIES) url.searchParams.delete('category');
    else url.searchParams.set('category', next);
    window.history.replaceState(null, '', url);
  }

  return (
    <VStack gap={6}>
      <CategoryFilter categories={categories} value={category} onChange={selectCategory} />
      <HStack>
        <Text type="supporting" color="secondary" role="status" style={EYEBROW_STYLE}>
          {String(visible.length).padStart(2, '0')} {visible.length === 1 ? 'article' : 'articles'}
        </Text>
      </HStack>
      <AnimatePresence mode="wait" initial={false}>
        <MotionVStack
          key={category}
          initial={{opacity: 0, y: 16}}
          animate={{opacity: 1, y: 0}}
          exit={{opacity: 0, transition: springs.effects.fast}}
          transition={expressive('default')}>
          {visible.length === 0 ? (
            <VStack gap={3} paddingBlock={10} style={{borderBlock: '1px solid var(--color-border)'}}>
              <Heading level={3} style={typeRole('headline-l')}>
                {emptyCategory.title}
              </Heading>
              <Text type="large" color="secondary">
                {emptyCategory.description}
              </Text>
            </VStack>
          ) : (
            <ArticleRows articles={visible} />
          )}
        </MotionVStack>
      </AnimatePresence>
    </VStack>
  );
}
