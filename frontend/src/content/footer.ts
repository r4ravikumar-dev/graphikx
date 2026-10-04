import {navLinks, projectAction} from './navigation';
import {site} from './site';

/** The one footer used on every page. "*word*" sets the italic serif accent. */
export const footer = {
  statement: 'Make *sense* of it.',
  description:
    'A design studio for products, interfaces and ideas, making complex things clearer and easier to use.',
  explore: {
    title: 'Explore',
    links: navLinks.map(({label, href, hint}) => ({label, href, hint})),
  },
  contact: {
    email: {label: 'Email', value: site.email, href: `mailto:${site.email}`},
    linkedin: {label: 'LinkedIn', value: 'Graphikx Studio', href: site.linkedinUrl},
    project: {label: 'Work with us', value: projectAction.label, href: projectAction.href},
    top: {label: 'Back to', value: 'Top'},
  },
  studio: {title: 'Studio'},
  legal: [
    {label: 'Privacy', href: '/privacy'},
    {label: 'Terms', href: '/terms'},
  ],
  closing: "Still figuring things out.\nThat's where good things start.",
};
