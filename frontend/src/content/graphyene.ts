/**
 * Graphyene page copy, in page order. Multi-line strings use "\n" for line
 * breaks; arrays are separate paragraphs.
 */

export const problem = {
  eyebrow: 'An idea in progress',
  title: 'Products grow.\nDesign gets complicated.',
  opening: ['A product rarely starts with a hundred screens.', 'It starts with one.'],
  buildUp: [
    'Then another feature gets added.',
    'Another team joins.',
    'Another pattern appears.',
    'Another version of the same decision gets made.',
  ],
  paragraphs: [
    'Over time, small differences begin to add up.',
    'The product starts to feel less connected.\nThe team spends more time deciding what to repeat.\nAnd simple changes become harder than they need to be.',
  ],
  statement: "The challenge isn't making more things.\nIt's keeping everything connected as things grow.",
  microcopy: "That's the problem we're exploring with Graphyene.",
};

export const idea = {
  eyebrow: 'The idea',
  title: 'What if a design system helped people think better?',
  paragraphs: [
    'Graphyene is our ongoing exploration into how a design system can help teams create clearer, more connected digital products.',
    "We're not trying to create a box of ready-made components and call it a day.",
    "We're thinking about the decisions behind them.",
  ],
  questions: [
    'How things relate.',
    'How patterns stay useful.',
    'How consistency can exist without making everything look the same.',
    'How a system can make everyday design work easier without taking the thinking out of it.',
  ],
  statement: 'A good system gives you a starting point, not a straightjacket.',
  microcopy: 'Graphyene is being built, tested, questioned, and refined at Graphikx.',
};

export const view = {
  eyebrow: 'Our view',
  title: 'A system should make the right thing easier.',
  paragraphs: [
    'We believe a design system should do more than keep colours, buttons, and components in one place.',
    'It should help people make decisions with less guesswork.',
    'It should make familiar things easier to build.',
    'It should help teams stay connected as a product grows.',
    'And it should leave enough room for the product to have a personality of its own.',
  ],
  listTitle: 'A system should...',
  items: [
    {
      icon: 'sparkles',
      title: 'Create clarity',
      description: 'Make relationships between decisions easier to understand.',
    },
    {
      icon: 'repeat',
      title: 'Reduce repetition',
      description: 'Stop teams from solving the same small problems again and again.',
    },
    {
      icon: 'link',
      title: 'Support consistency',
      description: 'Help different parts of a product feel like they belong together.',
    },
    {
      icon: 'palette',
      title: 'Leave room for creativity',
      description: 'Provide useful boundaries without removing good ideas.',
    },
    {
      icon: 'sprout',
      title: 'Grow with the product',
      description: 'Adapt as the product, team, and needs change.',
    },
    {
      icon: 'refresh',
      title: 'Make change easier',
      description: 'Give teams a foundation they can improve instead of constantly rebuild.',
    },
  ],
};

export const principlesSection = {
  eyebrow: 'The questions guiding us',
  title: "We're building around a few simple ideas.",
  paragraphs: [
    "These aren't rules carved in stone.",
    "They're questions we keep coming back to while Graphyene takes shape.",
  ],
  principles: [
    {
      title: 'Consistency without sameness',
      description:
        'A product should feel connected without making every screen feel identical.',
    },
    {
      title: 'Structure without rigidity',
      description: 'Good structure should make things easier to create, not harder to change.',
    },
    {
      title: 'Clarity before decoration',
      description:
        'A system should help people understand what matters before worrying about making it look impressive.',
    },
    {
      title: 'Useful over excessive',
      description:
        "More components don't automatically make a better system. We'd rather build what people actually need.",
    },
    {
      title: 'Designed for real teams',
      description:
        'A system has to work in everyday design work, not just look organised in a file.',
    },
    {
      title: 'Built to evolve',
      description:
        'A design system should be able to learn, change, and improve as the product does.',
    },
  ],
  statement:
    'The system should never become more important than the experience it’s helping create.',
};

export type ArchitectureLayer = {
  title: string;
  description: string;
  items?: string[];
};

export const architecture = {
  eyebrow: 'Current exploration',
  title: 'From decisions to experiences.',
  paragraphs: [
    "We're exploring Graphyene as a connected set of decisions rather than a collection of isolated parts.",
    "At a high level, we're thinking about how the pieces build on one another.",
  ],
  layers: [
    {
      title: 'Foundation',
      description: 'The basic decisions that give everything else direction.',
      items: ['Typography', 'Colour', 'Spacing', 'Shape', 'Motion', 'Accessibility'],
    },
    {title: 'Tokens', description: 'The shared values behind those decisions.'},
    {title: 'Components', description: 'The reusable building blocks people interact with.'},
    {
      title: 'Patterns',
      description: 'Ways those building blocks come together to solve common needs.',
    },
    {title: 'Experiences', description: 'The actual screens, flows, and products people use.'},
  ] satisfies ArchitectureLayer[],
  statement: 'This is a working model, not a final architecture.',
  microcopy:
    "We're still testing what belongs where, what should connect, and what should stay flexible.",
};

export const experiments = {
  eyebrow: 'Thinking in public',
  title: 'Some answers are better found by making.',
  paragraphs: [
    "Graphyene isn't being built entirely on paper.",
    "We're exploring ideas through small studies, interface experiments, component tests, and visual questions.",
  ],
  outcomes: ['Some will stay.', 'Some will change.', 'Some will disappear completely.'],
  closing: "That's part of the process.",
  explorations: [
    {
      question: 'How much consistency is enough?',
      description: 'Finding the point where a system creates familiarity without creating sameness.',
    },
    {
      question: 'What should be shared?',
      description:
        'Looking at which decisions benefit from being common across a product, and which should remain open.',
    },
    {
      question: 'Can a system make design faster without making it feel automatic?',
      description: 'Exploring where structure helps and where it starts getting in the way.',
    },
    {
      question: 'What happens when the system grows with the product?',
      description:
        'Thinking about how foundations change as products, teams, and needs become more complex.',
    },
  ],
  microcopy: 'These are explorations, not final answers.',
  action: {label: "See what we're exploring", href: '#still-becoming'},
};

export const stillBecoming = {
  id: 'still-becoming',
  eyebrow: 'Still becoming',
  title: "Graphyene isn't finished.\nThat's intentional.",
  opening: "We're learning as we build it.",
  changes: [
    'A principle changes.',
    'A pattern gets simpler.',
    'A decision gets challenged.',
    'Something that seemed important turns out not to be.',
  ],
  paragraph:
    "We'd rather let the system improve through real use than pretend we have everything figured out from the start.",
  listTitle: "Right now, we're exploring...",
  exploring: [
    {
      title: 'What belongs in the foundation.',
      question: 'What should be decided once, and what should remain flexible?',
    },
    {
      title: 'How components should connect.',
      question: 'How can reusable parts stay useful across different products and needs?',
    },
    {
      title: 'How teams interact with the system.',
      question:
        'How can documentation and guidance help people make decisions without slowing them down?',
    },
    {
      title: 'How the system keeps its character.',
      question: 'How do we build consistency without flattening creativity?',
    },
  ],
  status: {label: 'Graphyene · In progress', stages: ['Exploring', 'Testing', 'Refining']},
};

export const closing = {
  title: "We're not building a library of parts.\nWe're building a way of thinking.",
  description:
    'Graphyene is an evolving design-system idea from Graphikx, shaped by questions, experiments, and the products we design along the way.',
  action: {label: 'Follow the evolution', href: '/thinking?category=Design%20Systems'},
};

