import type {MetadataRoute} from 'next';
import {articles} from '@/content/articles';
import {site} from '@/content/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    '',
    '/practice',
    '/graphyene',
    '/thinking',
    '/studio',
    '/start-a-project',
    '/privacy',
    '/terms',
  ];

  return [
    ...pages.map(path => ({url: `${site.url}${path}`})),
    ...articles.map(article => ({
      url: `${site.url}/thinking/${article.slug}`,
      lastModified: article.publishedAt,
    })),
  ];
}
