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
  label: string;
  /** "*word*" sets the italic serif accent. */
  title: string;
  intro: string;
};

export const practiceGroups: PracticeGroup[] = [
  {
    id: 'product',
    label: 'Product thinking',
    title: 'Understand the *journey* first.',
    intro: 'What people are trying to do, and where the experience gets in their way, shapes everything else.',
  },
  {
    id: 'interface',
    label: 'Interface thinking',
    title: 'Where the thinking becomes *visible.*',
    intro: 'Visual and interactive details that show people where they are, what they can do and what happens next.',
  },
  {
    id: 'building',
    label: 'Product building',
    title: 'Real enough to *test.*',
    intro: 'Design people can click, explore and try, without unnecessary distance between an idea and its first version.',
  },
];

/** Practice page copy, in page order. "*word*" sets the italic serif accent. */
export const practicePage = {
  hero: {
    label: 'Practice',
    title: 'Design for what people *need.*',
    description:
      'Products, experiences, interfaces and the systems behind them: from a new idea to a product that needs a rethink.',
    action: {label: 'Start a project', href: '/start-a-project', direction: 'out' as const},
    meta: ['Product thinking', 'Interface thinking', 'Product building', '7 disciplines'],
  },
  connects: {
    label: 'One product. Many decisions.',
    title: "These aren't *separate* pieces.",
    description:
      'The flow shapes the interface, the interface shapes the interaction, and the interaction shapes how the product feels. So we design the whole.',
    sequence: ['Product', 'UX', 'UI', 'Interaction', 'Build', 'Evolve'],
  },
  approach: {
    label: 'Our approach',
    title: 'Start with understanding. End with something *useful.*',
    steps: [
      {title: 'Understand', description: "What you're building, who it's for, and what's in the way."},
      {title: 'Explore', description: 'Different ways the experience could work.'},
      {title: 'Shape', description: 'The strongest direction, as flows, interfaces and interactions.'},
      {title: 'Test', description: 'Ideas in front of people, to learn what needs to change.'},
      {title: 'Refine', description: "Keep what's useful. Remove what isn't helping."},
    ],
  },
  faq: {
    label: 'Questions',
    title: 'Things people often *ask.*',
    items: [
      {
        question: 'Do I need a detailed brief?',
        answer:
          "No. Bring the idea, the problem or the half-finished thought. We'll use the first conversation to understand it.",
      },
      {
        question: "What if I don't know which discipline I need?",
        answer:
          "That's fine. Tell us what's happening in your own words. You don't need to choose a service first.",
      },
      {
        question: 'Can you work on a product that already exists?',
        answer:
          "Yes. That's what UX Flow Revamp is for: we find where people get stuck and reshape the experience around what matters most.",
      },
      {
        question: 'Do you only design, or build too?',
        answer:
          'We design, and we use no-code tools like Framer and Webflow to turn ideas into experiences people can click, explore and test.',
      },
    ],
  },
  closing: {
    title: "Something feels difficult. Let's make *sense* of it.",
    note: 'No perfect brief required.',
  },
};
