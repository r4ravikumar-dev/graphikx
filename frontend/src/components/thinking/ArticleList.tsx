'use client';

import {useState} from 'react';
import {useSearchParams} from 'next/navigation';
import {AnimatePresence} from 'framer-motion';
import {VStack} from '@astryxdesign/core/Layout';
import {Grid} from '@astryxdesign/core/Grid';
import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {MotionVStack} from '@/components/motion/Motion';
import {expressive, springs} from '@/motion/springs';
import {ArticleCard} from './ArticleCard';
import {ALL_CATEGORIES, CategoryFilter} from './CategoryFilter';
import type {Article} from '@/content/articles';
import {typeRole} from '@/theme/typeScale';

type EmptyCategoryCopy = {title: string; description: string; microcopy: string};

type ArticleListProps = {
  articles: Article[];
  categories: readonly string[];
  emptyCategory: EmptyCategoryCopy;
};

/**
 * Filterable grid of Thinking articles; cards spring into their new positions.
 * The category can be preset with ?category=..., and the URL follows the filter
 * so a filtered view can be shared.
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
      <AnimatePresence mode="wait" initial={false}>
        {visible.length === 0 ? (
          <MotionVStack
            key={`empty-${category}`}
            gap={3}
            hAlign="center"
            paddingBlock={10}
            role="status"
            initial={{opacity: 0, y: 16}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, transition: springs.effects.fast}}
            transition={expressive('default')}>
            <Heading level={3} style={typeRole('headline-l')} justify="center">
              {emptyCategory.title}
            </Heading>
            <Text type="large" color="secondary" justify="center">
              {emptyCategory.description}
            </Text>
            <Text type="supporting" justify="center">
              {emptyCategory.microcopy}
            </Text>
          </MotionVStack>
        ) : (
          <MotionVStack
            key="grid"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: springs.effects.fast}}
            transition={springs.effects.default}>
            <Grid columns={{minWidth: 300}} gap={4}>
              <AnimatePresence mode="popLayout">
                {visible.map((article, index) => (
                  <MotionVStack
                    key={article.slug}
                    layout
                    initial={{opacity: 0, scale: 0.94, y: 16}}
                    animate={{opacity: 1, scale: 1, y: 0}}
                    exit={{opacity: 0, scale: 0.94, transition: springs.effects.fast}}
                    transition={{
                      ...expressive('default', 0.04 * index),
                      layout: springs.spatial.default,
                    }}>
                    <ArticleCard article={article} />
                  </MotionVStack>
                ))}
              </AnimatePresence>
            </Grid>
          </MotionVStack>
        )}
      </AnimatePresence>
    </VStack>
  );
}
