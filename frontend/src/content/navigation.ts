import {journey} from './journey';

/**
 * Navigation copy. Voice: clear, quiet, human, confident.
 * Never use "Services", "Solutions", "Insights", "About Us", "Get in Touch"
 * or similar. The labels below are the Graphikx worldview in four words.
 */

export type NavLink = {
  label: string;
  href: string;
  /** Announced to screen readers on desktop. */
  description: string;
  /** The small line that appears on hover, e.g. "What we make". */
  hint: string;
  /** Shown under the label in the mobile menu. */
  mobileDescription: string;
};

export const navLinks: NavLink[] = [
  {
    label: journey.practice.title,
    href: journey.practice.href,
    description: 'Explore what we design and how we can help.',
    hint: 'What we make',
    mobileDescription: 'Products, interfaces, flows, and experiences.',
  },
  {
    label: journey.thinking.title,
    href: journey.thinking.href,
    description: 'Ideas, questions, and observations from Graphikx.',
    hint: 'What we question',
    mobileDescription: "Ideas we're exploring and questions we're asking.",
  },
  {
    label: journey.graphyene.title,
    href: journey.graphyene.href,
    description: 'Our evolving idea around design systems.',
    hint: "What we're building",
    mobileDescription: 'A design-system idea in progress.',
  },
  {
    label: journey.studio.title,
    href: journey.studio.href,
    description: 'Why Graphikx exists, what we believe, and who we are.',
    hint: "Why we're here",
    mobileDescription: 'The people and thinking behind Graphikx.',
  },
];

export const brand = {
  homeLabel: 'Back to Graphikx home',
};

export const projectAction = {
  label: 'Start a project',
  href: journey.startProject.href,
  description: 'Have something worth figuring out?',
  hint: 'Bring us the problem',
};

export const mobileMenu = {
  openLabel: 'Menu',
  title: 'Explore Graphikx',
  prompt: 'Something on your mind?',
};

export const statusCopy = {
  loading: 'One moment…',
  notFound: {
    title: 'Looks like we lost the *flow.*',
    description: "The page you're looking for isn't here.",
    action: {label: 'Back to Graphikx', href: '/'},
  },
};
