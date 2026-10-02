export type PracticeGroupId = 'product' | 'interface' | 'building';

export type Capability = {
  slug: string;
  title: string;
  group: PracticeGroupId;
  /** One line, used on cards (e.g. the homepage preview). */
  summary: string;
  /** Use "\n" for an intentional line break. */
  headline: string;
  body: string[];
  workOn: string[];
  nudge: string;
};

/** In homepage order. The Practice page groups them by `group`, keeping this order within each group. */
export const capabilities: Capability[] = [
  {
    slug: 'product-design',
    title: 'Product Design',
    group: 'product',
    summary: 'Shape a product around what people actually need.',
    headline: 'Turn an idea into a product people can understand.',
    body: [
      "Whether you're starting something new or reshaping something that already exists, we help bring structure to the experience.",
      'We explore the people, problems, journeys, and decisions that shape a product, then turn them into something real and usable.',
    ],
    workOn: [
      'Product structure',
      'User journeys',
      'Information architecture',
      'Wireframes',
      'Core experiences',
      'Responsive product experiences',
    ],
    nudge: 'A good product starts with knowing what deserves to exist.',
  },
  {
    slug: 'ux-design',
    title: 'UX Design',
    group: 'product',
    summary: 'Create journeys that are easier to follow.',
    headline: 'Make the next step easier to find.',
    body: [
      'UX is about helping people move through a product without constantly stopping to figure it out.',
      'We design journeys that feel clear, logical, and natural, from the first interaction to the final action.',
    ],
    workOn: [
      'User journeys',
      'Navigation',
      'Task flows',
      'Information structure',
      'Wireframes',
      'Usability',
    ],
    nudge: "The best path isn't always the shortest. It's the one that feels right.",
  },
  {
    slug: 'ui-design',
    title: 'UI Design',
    group: 'interface',
    summary: 'Build interfaces that feel clear, consistent, and intentional.',
    headline: 'Make clarity visible.',
    body: [
      'We create interfaces that are easy to read, easy to navigate, and consistent without feeling repetitive.',
      'From the first visual direction to detailed screens, we bring together hierarchy, typography, spacing, color, and structure to create a clear visual language.',
    ],
    workOn: [
      'Web interfaces',
      'Mobile interfaces',
      'Product UI',
      'Responsive design',
      'Visual hierarchy',
      'Accessible interfaces',
    ],
    nudge: "Good UI doesn't ask to be noticed. It helps people notice what matters.",
  },
  {
    slug: 'interaction-design',
    title: 'Interaction Design',
    group: 'interface',
    summary: 'Make actions, feedback, and transitions easier to understand.',
    headline: 'The small moments matter.',
    body: [
      'A click. A transition. A loading state. A confirmation. A change on screen.',
      'These moments tell people whether something worked, what happens next, and whether they can move forward with confidence.',
      'We design those moments to feel useful, natural, and connected to the experience around them.',
    ],
    workOn: [
      'States and feedback',
      'Transitions',
      'Micro-interactions',
      'Motion',
      'Hover and touch behaviour',
      'Interaction patterns',
    ],
    nudge: 'Every interaction should answer a simple question: “What happens now?”',
  },
  {
    slug: 'ux-flow-revamp',
    title: 'UX Flow Revamp',
    group: 'product',
    summary:
      'Find the parts of an existing experience that are getting in the way, then rethink them.',
    headline: 'When a product feels harder than it should.',
    body: [
      'Products change over time. Features get added, journeys get longer, and shortcuts become permanent.',
      'We step back, look at what has changed, find where people are getting stuck, and reshape the experience around what matters most.',
    ],
    workOn: [
      'Existing flow reviews',
      'Navigation problems',
      'Unnecessary steps',
      'Drop-off points',
      'Confusing journeys',
      'Flow restructuring',
    ],
    nudge: 'Sometimes a better experience is already hiding inside the product you have.',
  },
  {
    slug: 'no-code-design',
    title: 'No-code Design',
    group: 'building',
    summary: 'Turn ideas into realistic, interactive experiences without starting with a full build.',
    headline: 'Make the idea real enough to test.',
    body: [
      'No-code lets us move quickly from a concept to an experience people can interact with.',
      'We use it to bring landing pages, prototypes, digital products, and early ideas to life, especially when learning matters more than building everything at once.',
    ],
    workOn: [
      'Interactive prototypes',
      'Framer experiences',
      'Webflow experiences',
      'Landing pages',
      'Early product concepts',
      'Design validation',
    ],
    nudge: "You don't always need to build the whole thing to learn what works.",
  },
  {
    slug: 'saas-product-design',
    title: 'SaaS Product Design',
    group: 'building',
    summary: 'Make complex products, dashboards, and workflows easier to use.',
    headline: "Complex products don't have to feel complicated.",
    body: [
      'SaaS products often bring together dashboards, data, workflows, permissions, settings, and many different types of users.',
      'We help bring structure to that complexity and turn it into experiences people can understand and use with confidence.',
    ],
    workOn: [
      'SaaS products',
      'Dashboards',
      'Data-heavy interfaces',
      'Tables and filters',
      'Workflows',
      'Admin experiences',
      'Settings and permissions',
    ],
    nudge: "More features shouldn't always mean more things to figure out.",
  },
];

export type PracticeGroup = {
  id: PracticeGroupId;
  eyebrow: string;
  title: string;
  paragraphs: string[];
};

export const practiceGroups: PracticeGroup[] = [
  {
    id: 'product',
    eyebrow: 'Product thinking',
    title: 'Before we design the screen,\nwe understand the journey.',
    paragraphs: [
      "Good product experiences don't happen one screen at a time.",
      'We look at what people are trying to do, what they need along the way, and where the experience starts getting in their way.',
      'That thinking shapes what the product should do, and how it should feel.',
    ],
  },
  {
    id: 'interface',
    eyebrow: 'Interface thinking',
    title: 'The interface is where the thinking becomes visible.',
    paragraphs: [
      'Once the journey is clear, the interface gives it form.',
      'We design visual and interactive details that help people understand where they are, what they can do, and what happens next.',
    ],
  },
  {
    id: 'building',
    eyebrow: 'Product building',
    title: 'From something you can imagine\nto something you can experience.',
    paragraphs: [
      'Sometimes ideas need more than screens.',
      'We help turn design into something people can actually click, explore, test, and experience, without adding unnecessary distance between an idea and its first real version.',
    ],
  },
];

export const practicePage = {
  opening: {
    eyebrow: 'The Graphikx practice',
    title: 'Design for what people need.\nNot just what they see.',
    paragraphs: [
      'We work across products, experiences, interfaces, and the systems behind them.',
      'From shaping a new idea to reworking an existing experience, we help make digital products clearer, more useful, and easier to use.',
    ],
    microcopy: 'Start with the problem. The design follows.',
  },
  connects: {
    eyebrow: 'One product. Many decisions.',
    title: "These aren't separate pieces.",
    paragraphs: [
      "A product's experience doesn't stop at UX.",
      'The flow affects the interface.\nThe interface affects the interaction.\nThe interaction affects how the product feels.',
      'And as the product grows, all of it needs to stay connected.',
      "That's why we look at the experience as a whole.",
    ],
    sequence: ['Product', 'UX', 'UI', 'Interaction', 'Build', 'Evolve'],
    microcopy: 'Different disciplines. One experience.',
  },
  approach: {
    eyebrow: 'Our approach',
    title: 'Start with understanding.\nEnd with something useful.',
    steps: [
      {
        title: 'Understand',
        description: "We learn what you're building, who it's for, and what's getting in the way.",
      },
      {title: 'Explore', description: 'We look at different ways the experience could work.'},
      {
        title: 'Shape',
        description: 'We turn the strongest direction into clear flows, interfaces, and interactions.',
      },
      {
        title: 'Test',
        description: 'We put ideas in front of people and learn what needs to change.',
      },
      {title: 'Refine', description: "We keep the useful parts and remove what isn't helping."},
    ],
    closing: "We don't design more than the problem needs.",
  },
  whereToStart: {
    eyebrow: 'Where to start',
    title: "You don't have to know what to ask for.",
    situations: [
      'Maybe you need a new product.',
      'Maybe the product already exists but the experience feels messy.',
      "Maybe one important flow isn't working.",
      'Maybe the interface needs a rethink.',
      'Or maybe you have an idea and need help figuring out where to begin.',
    ],
    closing: "That's enough.",
    action: {label: "Tell us what you're trying to solve", href: '/start-a-project'},
  },
  closing: {
    title: "Something feels difficult.\nLet's make sense of it.",
    description:
      "Tell us what you're working on, where you're stuck, or what you're trying to improve.\nWe'll start from there.",
    action: {label: 'Start a project', href: '/start-a-project'},
    microcopy: 'No perfect brief required.',
  },
};
