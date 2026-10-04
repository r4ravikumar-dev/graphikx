/**
 * Studio page copy, in page order. "*word*" sets the italic serif accent
 * (in the manifesto, the brand-blue keyword); "\n" breaks a line.
 */

export const hero = {
  label: 'Studio',
  title: "We didn't start Graphikx to make more *screens.*",
  description:
    'We started it because good ideas kept getting lost in experiences that were harder than they needed to be.',
  meta: ['Founded by Ravi Kumar', 'Product', 'Experience', 'Interfaces', 'Systems'],
};

export const manifesto = {
  label: 'Why Graphikx exists',
  text: 'Too many steps. Too many decisions. Too many things competing for attention. So we start with the *person,* understand the problem, question what isn’t working, then design what actually *helps.*',
};

export const whyWeStarted = {
  label: 'Why we started',
  title: 'Good ideas deserve good *experiences.*',
  intro:
    'We work on the space between what a product wants to do and what people actually experience. We take something complicated and ask:',
  questions: [
    'What is really necessary here?',
    'What could be clearer?',
    'What would make this easier?',
    'What could disappear?',
  ],
  resolution: 'Then we make something *better* from the answers.',
};

export const beliefs = {
  label: 'What we believe',
  title: 'A few things we keep *coming back* to.',
  items: [
    {
      title: 'People first',
      summary: 'Design starts with the person, not the screen.',
      detail: 'Not the screen. Not the feature. Not the trend. Design starts with the person trying to get something done.',
    },
    {
      title: 'Clarity matters',
      summary: 'Nobody should work hard to understand a product.',
      detail: "People shouldn't have to work hard to understand what a product is asking them to do.",
    },
    {
      title: 'Less can be more',
      summary: 'Keep what helps.',
      detail: "Every extra element is another thing to notice, understand or decide. We'd rather keep what helps.",
    },
    {
      title: 'Good design asks questions',
      summary: 'The first idea is rarely the right one.',
      detail: 'Curiosity makes room for better answers than the first one that comes to mind.',
    },
    {
      title: 'Details add up',
      summary: 'Small things shape the whole experience.',
      detail: 'A small label. A well-timed message. A useful empty state. A thoughtful transition. The little things shape the whole.',
    },
    {
      title: 'Systems should help people create',
      summary: 'Structure gives a better place to start.',
      detail: "Structure is useful when it gives people a better place to start. It shouldn't take away their ability to think.",
    },
  ],
};

export const howWeWork = {
  label: 'How we work',
  title: "There's no one right process. There's a right place to *start.*",
  steps: [
    {title: 'Listen', description: "What you're building, who it's for and what's in the way."},
    {title: 'Look closer', description: 'Question assumptions; find what deserves attention.'},
    {title: 'Explore', description: 'Different directions, not just the first answer.'},
    {title: 'Make', description: 'Flows, interfaces and interactions people can try.'},
    {title: 'Learn', description: "What works, what doesn't, what needs another pass."},
    {title: 'Refine', description: 'Keep the useful parts until it feels whole.'},
  ],
};

export const founder = {
  label: 'The people',
  /** If emptied, the profile is hidden. */
  name: 'Ravi Kumar',
  role: 'Founder · Product & Design',
  quote: 'I like taking things apart until I understand why they *feel* the way they do.',
  bio: 'Ravi works where products, people and ideas meet: product design, user experience, interfaces and design systems, always looking for ways to make complicated things feel simpler.',
  team: 'As Graphikx grows, we’re building a team around curiosity, craft and the willingness to ask one more question.',
};

export const currentlyExploring = {
  label: 'Currently exploring',
  title: "We're building some things for *ourselves,* too.",
  items: [
    {
      title: 'Graphyene',
      description: 'How design systems can help products grow without losing clarity or character.',
      action: {label: 'Explore Graphyene', href: '/graphyene'},
    },
    {
      title: 'Better product experiences',
      description: 'The moments where digital products become unnecessarily difficult.',
    },
    {
      title: 'Interfaces that explain themselves',
      description: 'How hierarchy, language, interaction and motion show people what to do next.',
    },
    {
      title: 'Simpler ways to build',
      description: 'No-code tools and lightweight ways to turn ideas into experiences quickly.',
    },
  ],
};

export const closing = {
  title: "We're still figuring things *out.*",
  note: "And that's exactly how we like it.",
};
