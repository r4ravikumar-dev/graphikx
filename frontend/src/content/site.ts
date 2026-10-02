import {journey} from './journey';

export const site = {
  name: 'Graphikx',
  tagline: 'Make sense of it.',
  description:
    'A digital design studio creating thoughtful products, interfaces, and experiences that make complex things easier to understand.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'design@graphikx.in',
  /** Hidden in the footer if set to an empty value. */
  linkedinUrl:
    process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://www.linkedin.com/company/graphikxstudio/',
} as const;

export type NavItem = {label: string; href: string};

/** Ordered to follow the visitor journey (see content/journey.ts). */
export const mainNav: NavItem[] = (['practice', 'thinking', 'graphyene', 'studio'] as const).map(
  stop => ({label: journey[stop].title, href: journey[stop].href}),
);

export const projectCta: NavItem = {
  label: 'Start a project',
  href: journey.startProject.href,
};
