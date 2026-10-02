export type ArticleCategory =
  | 'Product'
  | 'UX'
  | 'UI'
  | 'Interaction'
  | 'SaaS'
  | 'Design Systems'
  | 'No-code';

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  publishedAt: string;
  readingMinutes: number;
};

