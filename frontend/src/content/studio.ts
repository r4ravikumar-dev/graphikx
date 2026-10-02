/**
 * Studio page copy, in page order. Multi-line strings use "\n" for line
 * breaks, and **double asterisks** for emphasis.
 */

export const opening = {
  eyebrow: 'The studio',
  title: "We didn't start Graphikx to make more screens.",
  paragraphs: [
    'We started it because we kept noticing the same thing:',
    'A lot of digital products are built with good intentions, but somewhere along the way, they become harder to understand than they need to be.',
  ],
  tooMany: ['Too many steps.', 'Too many decisions.', 'Too many things competing for attention.'],
  turn: 'We wanted to explore a different way of making.',
  approach: [
    'Start with the person.',
    'Understand the problem.',
    "Question what isn't working.",
    'Then design what actually helps.',
  ],
  closing: "That's why Graphikx exists.",
  microcopy: 'Make sense of it.',
};

export const whyWeStarted = {
  eyebrow: 'Why we started',
  title: 'Good ideas deserve good experiences.',
  paragraphs: [
    'A strong idea can lose its meaning when the experience around it becomes difficult.',
    'A useful product can become frustrating.\nA simple task can become a long journey.\nA thoughtful feature can get buried under everything else.',
    'We started Graphikx to work on that space between **what a product wants to do and what people actually experience**.',
    'We like taking something complicated and asking:',
  ],
  questions: [
    'What is really necessary here?',
    'What could be clearer?',
    'What would make this easier?',
    'What could disappear?',
  ],
  afterQuestions: 'Then we make something better from the answers.',
  statement: "We're interested in the difference a thoughtful design decision can make.",
};

export const beliefs = {
  eyebrow: 'What we believe',
  title: 'A few things we keep coming back to.',
  items: [
    {
      icon: 'users',
      title: 'People first',
      description:
        'Design starts with the person trying to get something done.\nNot the screen.\nNot the feature.\nNot the trend.',
    },
    {
      icon: 'eye',
      title: 'Clarity matters',
      description:
        "People shouldn't have to work hard to understand what a product is asking them to do.",
    },
    {
      icon: 'minus',
      title: 'Less can be more',
      description:
        "Every extra element creates another thing to notice, understand, or decide.\nWe'd rather keep what helps.",
    },
    {
      icon: 'question',
      title: 'Good design asks questions',
      description:
        "We don't believe the first idea is always the right one.\nCuriosity makes room for better answers.",
    },
    {
      icon: 'details',
      title: 'Details add up',
      description:
        'A small label.\nA well-timed message.\nA useful empty state.\nA thoughtful transition.\nThe little things shape the whole experience.',
    },
    {
      icon: 'blocks',
      title: 'Systems should help people create',
      description:
        "Structure is useful when it gives people a better place to start.\nIt shouldn't take away their ability to think.",
    },
  ],
};

export const howWeWork = {
  eyebrow: 'How we work',
  title: "There isn't one right process.\nThere is a right place to start.",
  paragraphs: [
    'Every project begins in a different place.',
    "Sometimes there's an idea.\nSometimes there's a product that has grown messy.\nSometimes there's a flow that isn't working.\nSometimes nobody is quite sure what the problem is yet.",
    "So we don't begin by forcing everything into a fixed process.",
    "We begin by understanding what you're trying to do.",
  ],
  steps: [
    {
      title: 'Listen',
      description:
        "We learn what you're building, who it's for, what matters, and what's getting in the way.",
    },
    {
      title: 'Look closer',
      description:
        'We examine the experience, question assumptions, and find the parts that deserve attention.',
    },
    {
      title: 'Explore',
      description: 'We consider different directions instead of locking onto the first answer.',
    },
    {
      title: 'Make',
      description:
        'We turn the strongest ideas into flows, interfaces, interactions, and experiences people can actually try.',
    },
    {
      title: 'Learn',
      description: "We look at what works, what doesn't, and what needs another pass.",
    },
    {
      title: 'Refine',
      description:
        'We keep the useful parts, remove the unnecessary ones, and make the experience feel whole.',
    },
  ],
  statement: "The process can change. The attention shouldn't.",
};

export const people = {
  eyebrow: 'The people',
  title: 'Just people who care about making things better.',
  paragraphs: [
    'Graphikx is built by designers who enjoy looking closely at how things work, and wondering how they could work better.',
    "We're designers, thinkers, makers, and lifelong question-askers.",
    "We don't believe in having all the answers before we begin.",
    'We believe in being curious enough to find them.',
  ],
  founder: {
    /**
     * If this is ever emptied, the profile is hidden in production and shown
     * with a placeholder in development.
     */
    name: 'Ravi Kumar',
    role: 'Founder · Product & Design',
    /** "{name}" is replaced with the founder's name. */
    bio: [
      '{name} is interested in the space where products, people, and ideas meet.',
      'Their work moves between product design, user experience, interfaces, and design systems, always looking for ways to make complicated things feel simpler.',
    ],
    quote: 'I like taking things apart until I understand why they feel the way they do.',
  },
  team: {
    title: 'Different minds. One way of looking.',
    description:
      "As Graphikx grows, we're building a team around curiosity, craft, and the willingness to ask one more question before settling on an answer.",
    microcopy: 'People change.\nThe curiosity stays.',
  },
};

export const currentlyExploring = {
  eyebrow: 'Currently exploring',
  title: "We're building some things for ourselves, too.",
  paragraphs: [
    'Not every idea needs to become a client project.',
    'Some ideas are worth exploring simply because they teach us something.',
    "Right now, we're spending time thinking about:",
  ],
  areas: [
    {
      title: 'Graphyene',
      description:
        'Our evolving idea around how design systems can help products grow without losing clarity or character.',
      action: {label: 'Explore Graphyene', href: '/graphyene'},
    },
    {
      title: 'Better product experiences',
      description:
        'Looking closely at the moments where digital products become unnecessarily difficult.',
    },
    {
      title: 'Interfaces that explain themselves',
      description:
        'Exploring how hierarchy, language, interaction, and motion can help people understand what to do next.',
    },
    {
      title: 'Simpler ways to build',
      description:
        'Experimenting with no-code tools and lightweight ways to turn ideas into experiences quickly.',
    },
  ],
  statement: "We're not waiting for the perfect project to learn.",
};

export const outsideTheWork = {
  eyebrow: 'Outside the work',
  title: 'Design is what we do.\nCuriosity is what keeps us going.',
  paragraphs: ['We notice things.'],
  noticing: [
    'Why one app feels easier than another.',
    'Why a tiny interaction feels satisfying.',
    'Why some products feel calm and others feel exhausting.',
    'Why a system that looks organised can still be difficult to use.',
  ],
  afterNoticing: 'Those observations find their way into our work.',
  outcomes: [
    'Sometimes they become a design decision.',
    'Sometimes an experiment.',
    'Sometimes just a conversation.',
  ],
  microcopy: "We're okay with not knowing yet.",
};

export const mascotMoment = {
  eyebrow: "One of the things we've learned",
  frames: ['Do we have the answer?', 'Not yet.', "Good. Let's keep looking."],
  microcopy: 'Curiosity is part of the craft.',
};

export const closing = {
  title: "We're still figuring things out.",
  description:
    "And that's exactly how we like it.\nBecause every good product starts with something that isn't clear yet.\n\nA question. A problem. An idea. A possibility.\n\nThat's where we come in.",
  action: {label: 'Start a project', href: '/start-a-project'},
  secondaryAction: {label: "See what we're thinking", href: '/thinking'},
};
