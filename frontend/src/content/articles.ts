export const articleCategories = [
  'Product',
  'UX',
  'UI',
  'Interaction',
  'SaaS',
  'Design Systems',
  'No-code',
] as const;

export type ArticleCategory = (typeof articleCategories)[number];

/** Visual examples an article can embed. Each maps to a component in components/thinking. */
export type ArticleVisual = 'flow-comparison';

/**
 * Article content is a sequence of blocks so long reads stay in short,
 * clearly headed sections. Multi-line strings use "\n" for line breaks.
 */
export type ArticleBlock =
  | {type: 'section'; heading?: string; paragraphs: string[]}
  | {type: 'questions'; items: {question: string; answer: string}[]}
  | {
      type: 'visual';
      eyebrow: string;
      title: string;
      paragraphs?: string[];
      visual: ArticleVisual;
      caption: string;
      microcopy?: string;
    }
  | {type: 'perspective'; eyebrow: string; title: string; paragraphs: string[]; statement: string}
  | {type: 'closing'; title: string; paragraphs: string[]};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  publishedAt: string;
  readingMinutes: number;
  /** Shown under the title. Defaults to the excerpt. */
  intro?: string[];
  body: ArticleBlock[];
  /** Slugs to suggest under "Keep thinking". Defaults to the newest other articles. */
  related?: string[];
};

const articleList: Article[] = [
  {
    slug: 'a-good-feature-can-still-create-a-bad-experience',
    title: 'A good feature can still create a bad experience.',
    excerpt:
      "Adding something useful doesn't always make a product easier to use. Sometimes the experience needs to make room for it first.",
    category: 'Product',
    publishedAt: '2026-10-02',
    readingMinutes: 6,
    body: [
      {
        type: 'section',
        paragraphs: [
          'Every feature starts with a good reason. Someone asked for it, a competitor has it, or it solves a real problem for a real group of people.',
          'And yet a product can get harder to use with every good feature it adds.',
        ],
      },
      {
        type: 'section',
        heading: 'Features compete for attention',
        paragraphs: [
          'Each new option asks for a little space on the screen and a little space in someone’s head. One more is rarely a problem. Ten more usually is.',
        ],
      },
      {
        type: 'questions',
        items: [
          {question: 'Who is this for?', answer: 'Not everyone needs to see every feature.'},
          {question: 'Where does it belong?', answer: 'Put it where the need appears, not where there is room.'},
          {question: 'What does it replace?', answer: 'Sometimes the best addition is a simplification.'},
        ],
      },
      {
        type: 'closing',
        title: 'Make room before you add.',
        paragraphs: [
          'The best time to fit a feature into an experience is before it ships, not after people get lost.',
        ],
      },
    ],
  },
  {
    slug: 'the-flow-is-the-experience',
    title: 'The flow is the experience.',
    excerpt: 'Why a product can look great and still feel difficult to use.',
    category: 'UX',
    publishedAt: '2026-10-01',
    readingMinutes: 6,
    intro: [
      'A product can have beautiful screens and still feel difficult to use.',
      "Because people don't move from screen to screen thinking about the interface.",
      "They're trying to get something done.",
      'The experience lives in everything that happens along the way.',
    ],
    body: [
      {
        type: 'section',
        paragraphs: [
          'You open an app to do one simple thing.',
          "Three screens later, you're choosing between options you didn't expect to see, looking for a button that moved, and wondering whether you've already done the thing you came here to do.",
          'Nothing looks broken.',
          'But something feels difficult.',
        ],
      },
      {
        type: 'section',
        heading: 'Small decisions can create a long journey.',
        paragraphs: [
          "The number of screens isn't always the problem.",
          "It's what each screen asks someone to understand, choose, remember, or do.",
          "When those decisions don't connect naturally, even a polished interface can feel tiring.",
        ],
      },
      {
        type: 'questions',
        items: [
          {question: 'What is the person trying to do?', answer: 'Start with the goal, not the screen.'},
          {question: 'What needs to happen next?', answer: 'Make the next step easier to understand.'},
          {
            question: 'What can wait?',
            answer: 'Not every piece of information needs to appear at the same time.',
          },
          {
            question: 'What creates doubt?',
            answer: 'Look for moments where people have to stop and work things out.',
          },
        ],
      },
      {
        type: 'visual',
        eyebrow: 'Look closer',
        title: 'One small change can change the whole journey.',
        visual: 'flow-comparison',
        caption: 'Same task. Fewer decisions. A clearer path.',
        microcopy: 'Sometimes seeing the problem makes the answer easier to find.',
      },
      {
        type: 'perspective',
        eyebrow: 'Our take',
        title: "We don't think every flow needs to be shorter.",
        paragraphs: [
          "A useful experience isn't always the one with the fewest steps.",
          "Some steps help people understand what they're doing.\nSome give them confidence.\nSome prevent mistakes.",
          "The goal isn't to remove everything.",
          "It's to remove what doesn't help.",
        ],
        statement: 'Make the journey easier, not simply smaller.',
      },
      {
        type: 'closing',
        title: 'The best flow is the one that lets people keep going.',
        paragraphs: [
          "Good experiences don't constantly remind people that they're using a product.",
          'They let people focus on what they came to do.',
          "That's the part worth designing.",
        ],
      },
    ],
    related: [
      'why-dashboards-feel-harder',
      'when-consistency-feels-repetitive',
      'the-small-moments-matter',
    ],
  },
  {
    slug: 'why-dashboards-feel-harder',
    title: 'Why do dashboards feel harder than they need to?',
    excerpt:
      'A closer look at information, hierarchy, and the decisions that make complex products easier to use.',
    category: 'Product',
    publishedAt: '2026-09-29',
    readingMinutes: 7,
    body: [
      {
        type: 'section',
        paragraphs: [
          'Most dashboards are built by adding. Every team has a number it cares about, and every number earns a tile. Over time the screen stops answering questions and starts asking them.',
          'The problem is rarely too much data. It is too little hierarchy.',
        ],
      },
      {
        type: 'section',
        heading: 'Start with the question, not the metric',
        paragraphs: [
          'Before deciding what a dashboard shows, ask what someone needs to decide when they open it. The answer usually fits in a sentence, and that sentence tells you what belongs at the top.',
        ],
      },
      {
        type: 'section',
        heading: 'Let some things be secondary',
        paragraphs: [
          'Not every number deserves equal weight. When everything is emphasised, nothing is. Grouping, spacing, and progressive detail do more for clarity than another chart type.',
        ],
      },
    ],
  },
  {
    slug: 'when-consistency-feels-repetitive',
    title: 'When consistency starts to feel repetitive.',
    excerpt:
      'A closer look at where design systems help, and where they should leave room for personality.',
    category: 'Design Systems',
    publishedAt: '2026-09-15',
    readingMinutes: 5,
    body: [
      {
        type: 'section',
        paragraphs: [
          'Design systems exist so teams can stop solving the same problems again and again. Used well, they free up time for the problems that are actually new.',
          'Used too strictly, they can make every screen feel the same, even when the moments they serve are very different.',
        ],
      },
      {
        type: 'section',
        heading: 'Consistency without sameness',
        paragraphs: [
          'Consistency is about behaviour people can predict: the same action does the same thing, everywhere. It does not require every page to look identical.',
        ],
      },
      {
        type: 'section',
        heading: 'Leave room on purpose',
        paragraphs: [
          'The best systems are clear about what is fixed and what is open. Structure where it helps people, freedom where it helps ideas.',
        ],
      },
    ],
  },
  {
    slug: 'clarity-is-a-feature',
    title: 'Clarity is a feature',
    excerpt:
      'Complex products do not need complex interfaces. Clarity is something you design for on purpose.',
    category: 'Product',
    publishedAt: '2026-09-18',
    readingMinutes: 4,
    body: [
      {
        type: 'section',
        paragraphs: [
          'Most products start simple. Then they grow: new features, new users, new edge cases. Each addition makes sense on its own, but together they quietly make the product harder to understand.',
          'Clarity rarely survives by accident. It has to be treated like any other feature: scoped, designed, tested, and protected.',
        ],
      },
      {
        type: 'section',
        heading: 'Start with what people need to know',
        paragraphs: [
          'Before deciding what a screen shows, decide what someone needs to understand when they land on it. Everything else is supporting detail.',
        ],
      },
      {
        type: 'section',
        heading: 'Remove before you add',
        paragraphs: [
          'When a flow feels confusing, the instinct is to add help text, tooltips, or onboarding. Often the better fix is to take something away.',
        ],
      },
    ],
  },
  {
    slug: 'the-small-moments-matter',
    title: 'The small moments matter more than we think.',
    excerpt:
      'A loading state, a confirmation, a subtle change on screen. These are the moments that decide whether people feel confident.',
    category: 'Interaction',
    publishedAt: '2026-09-08',
    readingMinutes: 4,
    body: [
      {
        type: 'section',
        paragraphs: [
          'Nobody remembers a well-designed loading state. But almost everyone remembers wondering whether a payment went through.',
          'Small moments carry a lot of weight because they answer the question people ask constantly: did that work?',
        ],
      },
      {
        type: 'section',
        heading: 'Every action deserves an answer',
        paragraphs: [
          'A click should change something people can see. A wait should explain itself. A success should feel finished.',
        ],
      },
    ],
  },
  {
    slug: 'revamping-flows-without-starting-over',
    title: 'Revamping flows without starting over',
    excerpt:
      'A flow revamp is not a redesign from scratch. It is careful untangling of what has grown complicated.',
    category: 'UX',
    publishedAt: '2026-08-27',
    readingMinutes: 5,
    body: [
      {
        type: 'section',
        paragraphs: [
          'Flows grow complicated one reasonable decision at a time. By the time people start dropping off, the flow carries years of context nobody remembers.',
        ],
      },
      {
        type: 'section',
        heading: 'Audit before you redesign',
        paragraphs: [
          'Map the flow as it exists today, step by step, including the edge cases. The goal is to see the whole thing at once before changing any of it.',
        ],
      },
      {
        type: 'section',
        heading: 'Change one thing, then measure',
        paragraphs: [
          'Small, focused changes make it possible to understand what actually helped. Big-bang redesigns make that almost impossible.',
        ],
      },
    ],
  },
  {
    slug: 'motion-that-explains',
    title: 'Motion that explains',
    excerpt: 'Good motion answers a question: where did that come from, and where did it go?',
    category: 'Interaction',
    publishedAt: '2026-08-05',
    readingMinutes: 3,
    body: [
      {
        type: 'section',
        paragraphs: [
          'Animation is easy to add and hard to justify. The test we use is simple: does this movement help someone understand what changed?',
        ],
      },
      {
        type: 'section',
        heading: 'Springs over durations',
        paragraphs: [
          'Spring-based motion responds to interruption naturally. If someone changes their mind halfway through, the interface follows them instead of finishing a fixed animation first.',
        ],
      },
      {
        type: 'section',
        heading: 'Respect reduced motion',
        paragraphs: [
          'Some people find motion uncomfortable. When the operating system asks for reduced motion, we replace movement with instant state changes.',
        ],
      },
    ],
  },
  {
    slug: 'design-systems-start-small',
    title: 'Design systems start small',
    excerpt:
      'The most useful design systems begin as a handful of decisions, not a library of components.',
    category: 'Design Systems',
    publishedAt: '2026-07-14',
    readingMinutes: 4,
    body: [
      {
        type: 'section',
        paragraphs: [
          'It is tempting to begin a design system by building every component. In practice, the most valuable early work is agreeing on a small set of decisions: type, colour, spacing, and naming.',
        ],
      },
      {
        type: 'section',
        heading: 'Name things for what they are',
        paragraphs: [
          'A component called ArticleCard can be reused anywhere. A component called HomeSection3 cannot. Naming is the first act of system design.',
        ],
      },
    ],
  },
];

/** Newest first. */
export const articles = [...articleList].sort((a, b) =>
  b.publishedAt.localeCompare(a.publishedAt),
);

export function getArticle(slug: string): Article | undefined {
  return articles.find(article => article.slug === slug);
}

export function getRelatedArticles(article: Article, count = 3): Article[] {
  const explicit = (article.related ?? [])
    .map(getArticle)
    .filter((related): related is Article => related !== undefined);
  const fallback = articles.filter(
    other => other.slug !== article.slug && !explicit.includes(other),
  );
  return [...explicit, ...fallback].slice(0, count);
}

function toDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`);
}

/** "Oct 2026", for cards. */
export function formatArticleMonth(iso: string): string {
  return toDate(iso).toLocaleDateString('en-US', {month: 'short', year: 'numeric', timeZone: 'UTC'});
}

/** "October 2026", for the article header. */
export function formatArticleMonthLong(iso: string): string {
  return toDate(iso).toLocaleDateString('en-GB', {month: 'long', year: 'numeric', timeZone: 'UTC'});
}

export const thinkingPage = {
  opening: {
    eyebrow: 'Thinking',
    title: 'We like to think about the things people usually overlook.',
    details: [
      'The pause before a click.',
      'The screen that asks for one thing too many.',
      'The pattern that keeps getting redesigned.',
      'The tiny interaction that changes how a product feels.',
    ],
    paragraphs: [
      'Thinking is where we explore those details.',
      'Short observations, deeper ideas, experiments, and questions from the world of digital product design.',
    ],
    microcopy: 'Not everything needs an answer. Some things need a better question.',
  },
  featured: {
    eyebrow: 'Worth a look',
    title: 'Start with a question.',
    intro: 'Some of our thoughts begin with something very simple:',
    questions: [
      'Why does this feel difficult?',
      'Why does this pattern keep appearing?',
      'Could this work another way?',
    ],
    closing: 'These are the questions we follow.',
    slug: 'why-dashboards-feel-harder',
    actionLabel: 'Read the thinking',
  },
  all: {
    eyebrow: 'All thinking',
    title: 'Ideas worth spending a few minutes with.',
    description:
      'Browse our notes, observations, and explorations across product design, UX, UI, interaction, SaaS, design systems, and no-code.',
  },
  emptyCategory: {
    title: 'Coming into focus',
    description: "We're still collecting our thoughts here.",
    microcopy: 'More ideas are on the way.',
  },
  invitation: {
    title: "Have a question we've missed?",
    description:
      "We're always interested in the parts of a product that make you stop and think.\nSend us yours.",
    action: {label: 'Start a conversation', href: '/start-a-project'},
    microcopy: 'A rough question is perfectly fine.',
  },
  articleInvitation: {
    title: 'Have a product problem on your mind?',
    description: "You don't need to turn it into a perfect brief.\nTell us what's happening.",
    action: {label: "Let's make sense of it", href: '/start-a-project'},
  },
  related: {eyebrow: 'Keep thinking', title: 'You might also like these.'},
};
