import type {Article} from '../models/article.js';

/**
 * Thinking article index. This mirrors frontend/src/content/articles.ts until a
 * CMS or database becomes the single source of truth.
 */
export const articles: Article[] = [
  {
    slug: "a-good-feature-can-still-create-a-bad-experience",
    title: "A good feature can still create a bad experience.",
    excerpt: "Adding something useful doesn't always make a product easier to use. Sometimes the experience needs to make room for it first.",
    category: "Product",
    publishedAt: "2026-10-02",
    readingMinutes: 6
  },
  {
    slug: "the-flow-is-the-experience",
    title: "The flow is the experience.",
    excerpt: "Why a product can look great and still feel difficult to use.",
    category: "UX",
    publishedAt: "2026-10-01",
    readingMinutes: 6
  },
  {
    slug: "why-dashboards-feel-harder",
    title: "Why do dashboards feel harder than they need to?",
    excerpt: "A closer look at information, hierarchy, and the decisions that make complex products easier to use.",
    category: "Product",
    publishedAt: "2026-09-29",
    readingMinutes: 7
  },
  {
    slug: "clarity-is-a-feature",
    title: "Clarity is a feature",
    excerpt: "Complex products do not need complex interfaces. Clarity is something you design for on purpose.",
    category: "Product",
    publishedAt: "2026-09-18",
    readingMinutes: 4
  },
  {
    slug: "when-consistency-feels-repetitive",
    title: "When consistency starts to feel repetitive.",
    excerpt: "A closer look at where design systems help, and where they should leave room for personality.",
    category: "Design Systems",
    publishedAt: "2026-09-15",
    readingMinutes: 5
  },
  {
    slug: "the-small-moments-matter",
    title: "The small moments matter more than we think.",
    excerpt: "A loading state, a confirmation, a subtle change on screen. These are the moments that decide whether people feel confident.",
    category: "Interaction",
    publishedAt: "2026-09-08",
    readingMinutes: 4
  },
  {
    slug: "revamping-flows-without-starting-over",
    title: "Revamping flows without starting over",
    excerpt: "A flow revamp is not a redesign from scratch. It is careful untangling of what has grown complicated.",
    category: "UX",
    publishedAt: "2026-08-27",
    readingMinutes: 5
  },
  {
    slug: "motion-that-explains",
    title: "Motion that explains",
    excerpt: "Good motion answers a question: where did that come from, and where did it go?",
    category: "Interaction",
    publishedAt: "2026-08-05",
    readingMinutes: 3
  },
  {
    slug: "design-systems-start-small",
    title: "Design systems start small",
    excerpt: "The most useful design systems begin as a handful of decisions, not a library of components.",
    category: "Design Systems",
    publishedAt: "2026-07-14",
    readingMinutes: 4
  },
];
