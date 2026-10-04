'use client';

import type {Article} from '@/content/articles';
import {IndexList} from './IndexList';

/** Articles as large editorial rows: title, then category and read time. */
export function ArticleRows({articles}: {articles: readonly Article[]}) {
  return (
    <IndexList
      isNumbered={false}
      items={articles.map(article => ({
        title: article.title,
        summary: `${article.category} · ${article.readingMinutes} min read`,
        href: `/thinking/${article.slug}`,
      }))}
    />
  );
}
