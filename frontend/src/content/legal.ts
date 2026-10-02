import {site} from './site';

export type LegalPage = {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  sections: {heading: string; paragraphs: string[]}[];
};

/**
 * Plain-language summaries of what the site does today. Review these with a
 * legal adviser before launch, and update them whenever the site starts
 * collecting or sharing anything new (analytics, a database, a newsletter).
 */
export const privacy: LegalPage = {
  eyebrow: 'Privacy',
  title: 'Your details stay with Graphikx.',
  intro:
    'This page explains what information this website collects, why, and what happens to it. We keep it short because we collect very little.',
  updated: '2026-10-02',
  sections: [
    {
      heading: 'What we collect',
      paragraphs: [
        'When you send a project enquiry, we receive what you type into the form: your name, email address, and anything you choose to tell us about your company, product, or project.',
        'We do not use analytics, advertising, or tracking cookies on this website.',
      ],
    },
    {
      heading: 'How we use it',
      paragraphs: [
        'We use your enquiry only to read it, reply to you, and talk about whether we can help. We do not sell it, share it for marketing, or add you to a mailing list.',
      ],
    },
    {
      heading: 'Where it goes',
      paragraphs: [
        'Your enquiry is sent to the Graphikx team by email, so it is stored by our email provider as well as by us.',
        'This website loads its typefaces from Google Fonts, which means your browser requests them from Google’s servers.',
      ],
    },
    {
      heading: 'Your choices',
      paragraphs: [
        `You can ask us what we hold about you, or ask us to delete it, at any time by emailing ${site.email}.`,
      ],
    },
  ],
};

export const terms: LegalPage = {
  eyebrow: 'Terms',
  title: 'Using this website.',
  intro:
    'These terms cover your use of the Graphikx website. Any project we take on together is covered by a separate agreement.',
  updated: '2026-10-02',
  sections: [
    {
      heading: 'Our content',
      paragraphs: [
        'The writing, design, and visuals on this website belong to Graphikx unless we say otherwise. You are welcome to share links to our pages and quote short passages with credit. Please ask before reusing anything else.',
      ],
    },
    {
      heading: 'Ideas and articles',
      paragraphs: [
        'Our Thinking articles and Graphyene explorations share our current views and experiments. They are not professional advice for your specific situation, and Graphyene in particular is a work in progress.',
      ],
    },
    {
      heading: 'Enquiries',
      paragraphs: [
        'Sending an enquiry starts a conversation. It does not create an agreement or commit either of us to anything.',
      ],
    },
    {
      heading: 'Links and availability',
      paragraphs: [
        'We may link to other websites we do not control. We try to keep this website accurate and available, but we cannot promise it will always be error-free or online.',
      ],
    },
    {
      heading: 'Changes',
      paragraphs: [
        `We may update these terms as the website changes. Questions are welcome at ${site.email}.`,
      ],
    },
  ],
};
