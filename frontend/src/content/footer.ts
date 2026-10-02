import {navLinks, projectAction} from './navigation';
import {site} from './site';

/** The one footer used on every page. */
export const footer = {
  statement: site.tagline,
  description:
    'Graphikx is a design studio working across products, experiences, interfaces, and ideas, helping make complex things clearer, more useful, and easier to use.',
  explore: {
    title: 'Explore',
    links: navLinks.map(({label, href, hint}) => ({label, href, hint})),
  },
  workWithUs: {
    title: 'Work with us',
    action: {label: projectAction.label, href: projectAction.href},
    microcopy: "Have something you're figuring out?",
  },
  connect: {title: 'Find us'},
  legal: [
    {label: 'Privacy', href: '/privacy'},
    {label: 'Terms', href: '/terms'},
  ],
  closing: "Still figuring things out.\nThat's where good things start.",
};
