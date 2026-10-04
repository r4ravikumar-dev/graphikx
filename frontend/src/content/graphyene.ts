import type {SequenceStep} from '@/components/editorial/SequenceRail';

/**
 * Graphyene page copy, in page order. "*word*" sets the italic serif accent
 * (in the manifesto, the brand-blue keyword); "\n" breaks a line.
 */

export const hero = {
  label: 'Graphyene · In progress',
  title: 'Products grow. Design gets *complicated.*',
  description:
    'Graphyene is our ongoing exploration into how a design system can keep a growing product clear and connected.',
  action: {
    label: 'Follow the evolution',
    href: '/thinking?category=Design%20Systems',
    direction: 'forward' as const,
  },
  meta: ['Exploring', 'Testing', 'Refining', 'Not finished, on purpose'],
};

export const problem = {
  label: 'The problem',
  title: 'It starts with *one* screen.',
  layers: [
    'Another feature gets added.',
    'Another team joins.',
    'Another pattern appears.',
    'The same decision gets made twice.',
  ],
  resolution: "The challenge isn't making more things.\nIt's keeping everything *connected.*",
};

export const idea = {
  label: 'The idea',
  text: 'What if a design system helped people *think* better? Not a box of ready-made components, but the *decisions* behind them: how things relate, how patterns stay useful, and how consistency can exist without everything looking the same.',
};

export const shouldDo = {
  label: 'Our view',
  title: 'A system should make the right thing *easier.*',
  items: [
    {
      title: 'Create clarity',
      summary: 'Make the relationships between decisions easier to understand.',
    },
    {
      title: 'Reduce repetition',
      summary: 'Stop teams solving the same small problems again and again.',
    },
    {title: 'Support consistency', summary: 'Help every part of a product feel like it belongs.'},
    {
      title: 'Leave room for creativity',
      summary: 'Useful boundaries, without removing good ideas.',
    },
    {title: 'Grow with the product', summary: 'Adapt as the product, team and needs change.'},
    {title: 'Make change easier', summary: 'A foundation teams improve instead of rebuild.'},
  ],
};

export const principles = {
  label: 'The questions guiding us',
  title: 'A few *simple* ideas.',
  steps: [
    {
      title: 'Consistency without sameness',
      description: 'Connected, without every screen feeling identical.',
    },
    {title: 'Structure without rigidity', description: 'Easier to create, never harder to change.'},
    {title: 'Clarity before decoration', description: 'Understanding first. Impressive second.'},
    {title: 'Useful over excessive', description: 'More components don’t make a better system.'},
    {
      title: 'Designed for real teams',
      description: 'It has to work in everyday design, not just in a file.',
    },
    {title: 'Built to evolve', description: 'It learns and improves as the product does.'},
  ],
};

/** The Graphyene layers, each building on the one before. Shared with the homepage. */
export const graphyeneLayers: SequenceStep[] = [
  {
    title: 'Foundation',
    glyph: 'foundation',
    description: 'The basic decisions that give everything else direction.',
  },
  {title: 'Tokens', glyph: 'tokens', description: 'The shared values behind those decisions.'},
  {
    title: 'Components',
    glyph: 'components',
    description: 'The reusable building blocks people interact with.',
  },
  {
    title: 'Patterns',
    glyph: 'patterns',
    description: 'Building blocks coming together to solve common needs.',
  },
  {
    title: 'Experiences',
    glyph: 'experiences',
    description: 'The screens, flows and products people actually use.',
  },
];

export const architecture = {
  label: 'Current exploration',
  title: 'From decisions to *experiences.*',
  description:
    'A connected set of decisions rather than a collection of parts, each layer building on the one before. A working model, not a final architecture.',
  layers: graphyeneLayers,
};

export const explorations = {
  label: 'Thinking in public',
  title: 'Some answers are found by *making.*',
  items: [
    {
      title: 'How much consistency is enough?',
      description: 'Familiarity without sameness.',
    },
    {
      title: 'What should be shared?',
      description: 'Which decisions belong to the whole product, and which stay open.',
    },
    {
      title: 'Can a system make design faster without making it automatic?',
      description: 'Where structure helps, and where it gets in the way.',
    },
    {
      title: 'What happens when the system grows?',
      description: 'How foundations change as products and teams get more complex.',
    },
  ],
};

export const stillBecoming = {
  label: 'Still becoming',
  title: "Graphyene isn't finished. That's *intentional.*",
  items: [
    {
      title: 'What belongs in the foundation',
      summary: 'What should be decided once, and what should stay flexible?',
    },
    {
      title: 'How components connect',
      summary: 'How can reusable parts stay useful across different products?',
    },
    {
      title: 'How teams use the system',
      summary: 'How can guidance help people decide without slowing them down?',
    },
    {
      title: 'How the system keeps its character',
      summary: 'How do we build consistency without flattening creativity?',
    },
  ],
};

export const closing = {
  label: 'Follow along',
  title: "We're not building a library of parts. We're building a way of *thinking.*",
  note: 'Graphyene is shaped by the products we design along the way.',
};
