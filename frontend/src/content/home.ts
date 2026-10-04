/**
 * Homepage copy, in page order. About 450 words in total: each chapter says
 * one thing. "\n" breaks a line; "*word*" sets the italic serif accent (titles)
 * or the brand-blue keyword (manifesto).
 */

export const hero = {
  title: 'Make *sense*\nof it.',
  description:
    'A digital design studio for products, interfaces and systems that are easier to understand and easier to use.',
  action: {label: 'Start a project', href: '/start-a-project', direction: 'out'},
  meta: ['Digital design studio', 'Product', 'UX', 'UI', 'Interaction'],
} as const;

export const manifesto = {
  label: 'Our point of view',
  text: "People don't experience screens. They experience what happens *between* them. The hesitation, the extra step, the choice that almost works. We look closely at those moments, then make them *simpler*.",
};

export const problem = {
  index: 1,
  label: 'What we keep noticing',
  title: 'Products rarely get complicated *all at once.*',
  layers: [
    'A new feature gets added.',
    'Another screen follows.',
    'A shortcut becomes a workaround.',
    'A good idea becomes another layer.',
  ],
  resolution: 'Less confusion.\nLess friction.\nMore *clarity.*',
};

export const practice = {
  index: 2,
  label: 'Practice',
  title: 'What we can help you *figure out.*',
  action: {label: 'Explore the practice', href: '/practice'},
};

export const howWeThink = {
  index: 3,
  label: 'How we think',
  title: "We don't rush to make it *look* good.",
  steps: [
    {title: 'Understand', description: 'What are people trying to do?'},
    {title: 'Question', description: 'Where do they stop, wonder or work too hard?'},
    {title: 'Simplify', description: 'What can be removed, changed or made clearer?'},
    {title: 'Shape', description: 'Turn the thinking into something people can use.'},
    {title: 'Refine', description: 'Keep going until it feels natural.'},
  ],
};

export const graphyene = {
  index: 4,
  label: "An idea we're building",
  title: 'Graphyene',
  description: 'A design system that brings clarity to growing products, and still leaves room for ideas.',
  layers: ['Foundation', 'Tokens', 'Components', 'Patterns', 'Experiences'],
  principles: [
    'Consistency without sameness',
    'Structure without rigidity',
    'Clarity without compromise',
    'Support creativity, never replace it',
  ],
  action: {label: 'Explore Graphyene', href: '/graphyene'},
};

export const thinking = {
  index: 5,
  label: 'Thinking',
  title: 'Some things are worth *slowing down* for.',
  articleSlugs: [
    'why-dashboards-feel-harder',
    'the-flow-is-the-experience',
    'when-consistency-feels-repetitive',
  ],
  action: {label: 'Read our thinking', href: '/thinking'},
};

export const familiar = {
  index: 6,
  label: 'Maybe this sounds familiar',
  situations: [
    "Maybe the idea is strong, but the experience hasn't caught up.",
    'Maybe simple things take people longer than they should.',
    "Maybe the product grew and the interface didn't.",
    "Maybe you're starting with nothing but an idea.",
  ],
  closing: "You don't need the *perfect* brief.",
};

export const closing = {
  title: 'Bring us something worth *figuring out.*',
  note: "Tell us where you are. We'll start from there.",
};
