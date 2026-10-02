/**
 * Homepage copy, in page order. Multi-line strings use "\n" for line breaks;
 * arrays are separate paragraphs.
 */

export const opening = {
  eyebrow: 'Graphikx · Digital design studio',
  title: 'Make sense of it.',
  description:
    'We design digital products, interfaces, experiences, and systems that make complex things easier to understand and easier to use.',
  microcopy: 'Good design starts by asking better questions.',
  primaryAction: {label: 'See how we think', href: '#how-we-think'},
};

export const pointOfView = {
  id: 'point-of-view',
  eyebrow: 'Our point of view',
  title: "People don't experience screens.\nThey experience what happens between them.",
  paragraphs: [
    'A button is only a button until someone wonders what it does.\nA flow is only a flow until someone gets lost in it.',
    'We look at those moments closely: the hesitation, the extra step, the unclear choice, the part that almost works.',
    'Then we make it simpler.',
  ],
  microcopy: 'Because a better experience often starts with a smaller question.',
};

export const problem = {
  eyebrow: 'The thing we keep noticing',
  title: 'Products rarely become complicated all at once.',
  buildUp: [
    'A new feature gets added.',
    'Another screen follows.',
    'A shortcut becomes a workaround.',
    'A useful idea becomes another layer.',
  ],
  paragraphs: [
    'Eventually, something that once felt simple starts asking people to think too much.',
    "That's where we like to step in.",
  ],
  highlight: ['Less confusion.', 'Less friction.', 'More clarity.'],
  microcopy: "Sometimes the answer isn't more design. It's better decisions.",
};

export const whatWeShape = {
  eyebrow: 'What we shape',
  title: 'From first idea to everyday use.',
  description:
    'Different problems need different kinds of design. We work across the experience to make the whole thing feel connected.',
  items: [
    {
      icon: 'sparkles',
      title: 'Product experiences',
      description:
        'From early ideas to real products, we help shape what people need, what they see, and what they do next.',
    },
    {
      icon: 'route',
      title: 'Clearer journeys',
      description:
        'We simplify user flows so people can move forward without stopping to figure things out.',
    },
    {
      icon: 'palette',
      title: 'Thoughtful interfaces',
      description:
        'We create visual experiences that are clear, useful, accessible, and easy to understand.',
    },
    {
      icon: 'pointer',
      title: 'Meaningful interactions',
      description:
        'We design the small moments that give people feedback, direction, and confidence.',
    },
    {
      icon: 'dashboard',
      title: 'Simpler complex products',
      description:
        'We bring structure to products with dashboards, workflows, data, and many moving parts.',
    },
    {
      icon: 'sprout',
      title: 'Design that can grow',
      description:
        'We create foundations that help products stay consistent as they, and the teams behind them, grow.',
    },
  ],
  microcopy: 'Different screens. One connected experience.',
} as const;

export const howWeThink = {
  id: 'how-we-think',
  eyebrow: 'How we think',
  title: "We don't rush to make it look good.",
  paragraphs: [
    "We first try to understand what isn't working.",
    'Then we question what could be simpler, clearer, or more useful.',
    'Only then do we start shaping the experience.',
  ],
  steps: [
    {title: 'Understand', description: 'What are people trying to do?'},
    {
      title: 'Question',
      description: 'Where does the experience make them stop, wonder, or work too hard?',
    },
    {title: 'Simplify', description: 'What can be removed, changed, or made clearer?'},
    {title: 'Shape', description: 'Turn the thinking into an experience people can use.'},
    {title: 'Refine', description: 'Keep improving until it feels natural.'},
  ],
  closing: 'Good design is often what remains after the unnecessary parts are gone.',
  microcopy: 'Less showing off. More figuring out.',
};

export const practicePreview = {
  eyebrow: 'The Graphikx practice',
  title: 'What we can help you figure out.',
  description:
    'We work across product design, UX, UI, interaction, and digital experiences, from a single journey to an entire product.',
  action: {label: 'Explore our practice', href: '/practice'},
};

export const graphyenePreview = {
  eyebrow: "An idea we're building",
  title: 'Graphyene',
  subtitle: 'A different way to think about design systems.',
  paragraphs: [
    'As products grow, design can start to feel disconnected.',
    'Different screens begin to speak different visual languages.\nSmall decisions become repeated decisions.\nSimple changes take more effort than they should.',
    'Graphyene is our ongoing exploration into how a design system can bring clarity and consistency to growing products, while still leaving room for ideas.',
  ],
  principles: [
    'Consistency without sameness.',
    'Structure without rigidity.',
    'Clarity without compromise.',
    'A system that supports creativity, not replaces it.',
  ],
  status: 'Currently being explored, tested, and shaped at Graphikx.',
  action: {label: 'Explore Graphyene', href: '/graphyene'},
};

export const thinkingPreview = {
  eyebrow: 'Thinking',
  title: 'Some things are worth slowing down for.',
  description:
    'We write about the details behind digital products: the decisions, patterns, questions, and small observations that shape the way people experience them.',
  articleSlugs: [
    'why-dashboards-feel-harder',
    'the-flow-is-the-experience',
    'when-consistency-feels-repetitive',
  ],
  microcopy: 'No formulas. No universal answers. Just things worth thinking about.',
  action: {label: 'Explore our thinking', href: '/thinking'},
};

export const whoWeWorkWith = {
  eyebrow: 'Maybe this sounds familiar',
  title: 'Your product works.\nBut something feels off.',
  situations: [
    "Maybe the idea is strong, but the experience hasn't caught up.",
    'Maybe users are taking longer than they should to complete simple things.',
    "Maybe your product has grown and the interface hasn't grown with it.",
    'Maybe the flow made sense six months ago.',
    'Maybe your team keeps solving the same design problems again and again.',
    "Maybe you're starting with nothing but an idea.",
  ],
  closing: "You don't need to have the perfect brief.",
  microcopy: 'You just need something worth figuring out.',
  action: {label: "Tell us what's going on", href: '#start-a-project'},
};

export const mascotMoment = {
  eyebrow: 'One last thought',
  frames: ['Wait...', 'What if it could be simpler?', 'What if the next step was obvious?', "Let's find out."],
  microcopy: 'Graphikx is always looking for the better question.',
};

export const startConversation = {
  id: 'start-a-project',
  eyebrow: 'Start a project',
  title: 'Bring us something worth figuring out.',
  prompts: [
    'A new product.',
    'A difficult flow.',
    'A growing SaaS product.',
    "An interface that isn't quite working.",
    "An idea that's still taking shape.",
  ],
  closing: "Tell us where you are. We'll start from there.",
};
