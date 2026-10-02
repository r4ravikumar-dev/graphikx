import type {Article} from '../models/article.js';

export type ThinkingService = {
  list(category?: string): Article[];
  get(slug: string): Article | undefined;
};

export function createThinkingService(articles: Article[]): ThinkingService {
  const sorted = [...articles].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

  return {
    list(category) {
      if (!category) return sorted;
      const wanted = category.toLowerCase();
      return sorted.filter(article => article.category.toLowerCase() === wanted);
    },
    get(slug) {
      return sorted.find(article => article.slug === slug);
    },
  };
}
