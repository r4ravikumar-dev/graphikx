/**
 * The visitor journey through the site. Each stop answers one question:
 *
 *   Home "Who are they?"
 *     → Practice "What do they do?" | Thinking "How do they think?"
 *     → Graphyene "What are they building?"
 *     → Studio "Who are they?" (the full answer to Home's first impression)
 *     → Start a Project "Let's talk."
 *
 * `question` is the visitor's question; `prompt` is how the site answers it.
 */
export type JourneyStop = 'home' | 'practice' | 'thinking' | 'graphyene' | 'studio' | 'startProject';

export type JourneyStep = {
  title: string;
  href: string;
  question: string;
  prompt: string;
  description: string;
};

export const journey: Record<JourneyStop, JourneyStep> = {
  home: {
    title: 'Home',
    href: '/',
    question: 'Who are they?',
    prompt: 'Who we are',
    description: 'The Graphikx story and point of view.',
  },
  practice: {
    title: 'Practice',
    href: '/practice',
    question: 'What do they do?',
    prompt: 'What we do',
    description: 'Seven ways we help products make sense, from strategy to a single interaction.',
  },
  thinking: {
    title: 'Thinking',
    href: '/thinking',
    question: 'How do they think?',
    prompt: 'How we think',
    description: 'Articles, observations, and ideas about digital product design.',
  },
  graphyene: {
    title: 'Graphyene',
    href: '/graphyene',
    question: 'What are they building?',
    prompt: 'What we are building',
    description: 'Our evolving design-system exploration, shown honestly as work in progress.',
  },
  studio: {
    title: 'Studio',
    href: '/studio',
    question: 'Who are they?',
    prompt: 'Who we are',
    description: 'The people, principles, and thinking behind Graphikx.',
  },
  startProject: {
    title: 'Start a Project',
    href: '/start-a-project',
    question: "Let's talk.",
    prompt: "Let's talk",
    description: 'Tell us what you are working on. We listen first.',
  },
};

