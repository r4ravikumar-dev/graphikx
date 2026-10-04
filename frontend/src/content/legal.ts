/**
 * One block of a legal section, read top to bottom like a document:
 * - "p": a paragraph
 * - "h": a subheading within the section
 * - "list": a bulleted list
 * - "note": a short line in plain words, set apart as a callout
 * - "email": the studio address as a link
 */
export type LegalBlock =
  | {kind: 'p'; text: string}
  | {kind: 'h'; text: string}
  | {kind: 'list'; items: string[]}
  | {kind: 'note'; text: string}
  | {kind: 'email'};

export type LegalPage = {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  sections: {heading: string; blocks: LegalBlock[]}[];
  /** The closing statement; "*word*" sets the italic serif accent. */
  closing: {title: string; text: string[]};
};

const p = (text: string): LegalBlock => ({kind: 'p', text});
const h = (text: string): LegalBlock => ({kind: 'h', text});
const list = (...items: string[]): LegalBlock => ({kind: 'list', items});
const note = (text: string): LegalBlock => ({kind: 'note', text});
const email: LegalBlock = {kind: 'email'};

/**
 * Plain-language policies describing what the site does today: hosting and
 * Web Analytics on Vercel, typefaces from Google Fonts, enquiries by email
 * through Zoho Mail. Website-ready copy, not a substitute for legal review.
 * Update them before the site starts collecting or sharing anything new
 * (another analytics tool, a CRM, a newsletter, a booking tool).
 */
export const privacy: LegalPage = {
  eyebrow: 'Privacy',
  title: 'Your details stay with Graphikx.',
  intro:
    'This page explains what information Graphikx receives, why we receive it, and what happens to it. We try to collect only what we need to run the website, understand how it is used, and respond when you reach out.',
  updated: '2026-10-05',
  sections: [
    {
      heading: 'Who we are',
      blocks: [
        p(
          'Graphikx is a design studio working across digital products, user experience, interfaces, interaction, no-code experiences, SaaS products and design systems.',
        ),
        p('For privacy questions, or requests about information you have shared with us:'),
        email,
        p(
          'This notice covers information handled through the Graphikx website. Projects and client engagements may have additional privacy and confidentiality terms in their agreements.',
        ),
      ],
    },
    {
      heading: 'What we collect',
      blocks: [
        h('Information you choose to give us'),
        p('When you send a project enquiry, we may receive:'),
        list(
          'your name and email address',
          'your company or product name',
          'the kind of help you are looking for',
          'information about your project and the problem you are trying to solve',
          'your timeline or project context',
          'anything else you choose to include in your message',
        ),
        p('You decide how much to share.'),
        p(
          'Please avoid sending passwords, payment details, confidential customer information, health information or other sensitive information unless it is genuinely necessary and an appropriate agreement is in place.',
        ),
        h('Information collected when you use the website'),
        p(
          'Like most websites, our hosting and technical systems process basic technical information needed to deliver and secure the website, such as:',
        ),
        list(
          'IP address',
          'browser, device and operating system',
          'pages requested and when',
          'referring pages',
          'technical error information',
        ),
        p('We also receive aggregated information about how visitors use the website.'),
      ],
    },
    {
      heading: 'Analytics',
      blocks: [
        h('Understanding whether the website is useful'),
        p(
          'We use Vercel Web Analytics to understand general website usage, such as which pages are visited and how people find the site.',
        ),
        p(
          'Vercel describes its Web Analytics as privacy-friendly: it does not rely on cookies, and the identifier it uses is discarded after 24 hours.',
        ),
        p('We use this to understand:'),
        list(
          'which pages are useful',
          'whether people can find what they are looking for',
          'which parts of the website need improvement',
          'how the website performs over time',
        ),
        p('We do not use website analytics to build advertising profiles of visitors.'),
        note(
          'We want to understand whether the website works, not follow you around the internet.',
        ),
      ],
    },
    {
      heading: 'How we use it',
      blocks: [
        p('When you send us an enquiry, we use what you share to:'),
        list(
          'read and understand your request',
          'reply to you and ask follow-up questions',
          'discuss whether Graphikx may be able to help',
          'plan a possible project conversation',
          'keep records needed for legitimate business or legal purposes',
        ),
        p('We use technical and aggregated website information to:'),
        list(
          'operate the website and keep it secure',
          'fix technical issues',
          'understand general usage',
          'improve the content and experience',
        ),
        p('We do not sell the personal information you send us.'),
        p(
          'We do not add you to a marketing mailing list because you sent an enquiry. That would only happen if you separately chose to receive such emails.',
        ),
      ],
    },
    {
      heading: 'Where it goes',
      blocks: [
        h('The services that help us run Graphikx'),
        p(
          'Information is processed by a small number of providers that help us operate the website and respond to you:',
        ),
        list(
          'Hosting: the website is hosted on Vercel.',
          'Analytics: Vercel Web Analytics, for aggregated usage information.',
          'Email: enquiries are delivered to and stored in our Zoho Mail inbox so we can read and reply to them.',
          'Fonts: our typefaces are loaded from Google Fonts.',
        ),
        p(
          'We only use third-party services where they help us run, understand or improve the website, or respond to you.',
        ),
      ],
    },
    {
      heading: 'Google Fonts',
      blocks: [
        h('A note about fonts'),
        p('Graphikx uses Google Fonts to display some of the typefaces on this website.'),
        p(
          'When your browser loads a font from Google, it makes a request to Google’s servers. That request includes technical information about the connection, such as your IP address and browser details.',
        ),
        p(
          'We use Google Fonts for typography only. We do not use it to build advertising profiles of Graphikx visitors.',
        ),
      ],
    },
    {
      heading: 'Cookies',
      blocks: [
        h('What we use'),
        p(
          'Graphikx does not use advertising cookies or third-party tracking cookies on this website.',
        ),
        p('Our Vercel Web Analytics setup is designed not to rely on cookies.'),
        p(
          'Some technical services may still use necessary browser storage or similar technologies to provide or secure their service. The website itself does not store anything in your browser.',
        ),
        p(
          'If we ever introduce optional cookies or other tracking technologies, we will update this notice first and give you a choice where the law requires it.',
        ),
        note('No advertising cookies. No selling your information. No hidden mailing list.'),
      ],
    },
    {
      heading: 'Who we share it with',
      blocks: [
        h('We don’t sell your information'),
        p('We share information only when someone needs it to provide a service to Graphikx:'),
        list(
          'hosting, email, analytics and infrastructure providers',
          'security providers',
          'professional advisers, where necessary',
          'legal or regulatory authorities, where the law requires it',
        ),
        p('We do not sell your personal information or give enquiries to advertisers.'),
        p(
          'We do not pass your enquiry to unrelated businesses because they might be interested in contacting you.',
        ),
      ],
    },
    {
      heading: 'How long we keep it',
      blocks: [
        h('Not forever'),
        p(
          'We keep information only as long as it is reasonably needed for the reason we received it.',
        ),
        list(
          'Project enquiries: while we are considering or discussing a possible project, and for a reasonable period afterwards for business, record-keeping or legal purposes.',
          'Website analytics: according to the analytics provider’s settings and retention practices.',
          'Some records: longer, where the law requires it, or to resolve a dispute, prevent misuse or protect our rights.',
        ),
        p(
          'When information is no longer needed, we delete it or remove it from active use, subject to technical, legal or contractual requirements.',
        ),
      ],
    },
    {
      heading: 'Your choices and rights',
      blocks: [
        h('You can ask us about your information'),
        p('Depending on the law that applies, you can ask us to:'),
        list(
          'tell you what personal information we hold about you',
          'correct or update information that is wrong or has changed',
          'delete information when there is no longer a valid reason to keep it',
          'withdraw consent, where we rely on your consent',
          'look into a concern or complaint about how your information is handled',
        ),
        p(
          'India’s Digital Personal Data Protection framework includes rights to access, correction and erasure, withdrawal of consent where consent is the basis, and grievance redressal, as its provisions come into force.',
        ),
        h('How to ask'),
        email,
        p(
          'Include enough detail for us to understand your request. We may need to confirm your identity before changing or sharing information.',
        ),
      ],
    },
    {
      heading: 'Consent',
      blocks: [
        h('You stay in control where consent is required'),
        p(
          'Where we rely on your consent to process personal information, you can withdraw it at any time, and doing so is meant to be as easy as giving it.',
        ),
        p('Withdrawing consent does not undo processing that was lawful before you withdrew it.'),
      ],
    },
    {
      heading: 'International processing',
      blocks: [
        h('Some providers operate in other countries'),
        p(
          'Some of the technology providers we use may process information in countries outside India.',
        ),
        p(
          'Where this happens, we take the steps required by applicable law and by our agreements with those providers. Locations and arrangements can change as our tools change.',
        ),
      ],
    },
    {
      heading: 'Security',
      blocks: [
        h('We take reasonable care'),
        p(
          'We use reasonable technical and organisational measures to protect information against unauthorised access, loss, misuse, alteration or disclosure.',
        ),
        p('Still, no website, email system or internet connection can be completely secure.'),
        p(
          'For your own protection, please don’t send passwords, payment credentials, access keys or highly sensitive information through our enquiry form.',
        ),
        p(
          'If we become aware of a security incident affecting your personal information, we will respond as the law requires.',
        ),
      ],
    },
    {
      heading: 'Children',
      blocks: [
        h('This is not a website for children'),
        p(
          'The Graphikx website is meant for people using it for professional, personal or informational purposes. We do not knowingly ask children to send personal information through our enquiry form.',
        ),
        p(
          'If you believe a child has sent us personal information, contact us and we will review it and, where appropriate, remove it.',
        ),
      ],
    },
    {
      heading: 'Changes to this notice',
      blocks: [
        h('Privacy practices can change'),
        p(
          'As Graphikx grows, we may add new tools, services, forms or features. When that happens, we will update this notice to reflect what has changed and change the “Last updated” date.',
        ),
        p('It is worth checking this page now and then.'),
      ],
    },
    {
      heading: 'Questions',
      blocks: [
        h('Talk to us'),
        p('Privacy questions, requests or concerns?'),
        email,
        p(
          'We are happy to explain what information we have, why we have it, and what options you have.',
        ),
      ],
    },
  ],
  closing: {
    title: 'Good privacy should be *understandable.*',
    text: [
      'We don’t expect you to read every word on this page. But if you do, we want it to make sense.',
    ],
  },
};

export const terms: LegalPage = {
  eyebrow: 'Terms',
  title: 'Using this website.',
  intro:
    'These terms cover your use of the Graphikx website: what you can expect from it, and what we ask of you when you use it.',
  updated: '2026-10-05',
  sections: [
    {
      heading: 'About these terms',
      blocks: [
        h('Using Graphikx'),
        p(
          'By visiting or using the Graphikx website, you agree to use it responsibly and in line with these terms.',
        ),
        p(
          'The website is here to help you understand Graphikx, explore our work and thinking, learn about our services, read our articles, explore Graphyene and get in touch with us.',
        ),
        p(
          'These terms apply to the website itself. They do not replace any agreement we make with a client, partner, contributor or anyone else. If we work together on a project, that work is covered by a separate agreement setting out scope, fees, timelines, ownership, confidentiality and other terms.',
        ),
        h('Who we are'),
        p(
          'Graphikx is a design studio focused on digital products, user experience, interfaces, interaction, no-code experiences, SaaS products and related design work.',
        ),
        email,
        p('These website terms do not, on their own, create a client relationship.'),
      ],
    },
    {
      heading: 'Our content',
      blocks: [
        h('What belongs to Graphikx'),
        p(
          'Unless we say otherwise, the writing, illustrations, graphics, photographs, layouts, visual identity, interfaces, animations, logos and other original content on this website belong to Graphikx or are used with permission.',
        ),
        p(
          'You are welcome to visit, read, share links to and refer to our content for personal, informational or professional purposes.',
        ),
        p('Please don’t:'),
        list(
          'copy substantial parts of the website',
          'reproduce or republish our work as your own',
          'remove our branding or attribution',
          'sell, distribute or commercially reuse our original content without permission',
          'use our name, logo or work in a way that suggests we endorse something we haven’t agreed to',
        ),
        p(
          'Short quotations are fine with credit and a link back to the original page. For anything beyond that, please ask us first.',
        ),
        email,
      ],
    },
    {
      heading: 'Thinking, ideas and Graphyene',
      blocks: [
        h('Ideas are ideas, not professional advice'),
        p(
          'Our Thinking articles, observations, experiments and other published material share our views at the time we publish them.',
        ),
        p(
          'They are there to encourage discussion and exploration, not to promise that a particular design approach will work for every product, team or situation.',
        ),
        h('Graphyene is a work in progress'),
        p(
          'Graphyene is an evolving design-system idea being explored by Graphikx. Parts of it may change, disappear or be replaced as we learn more.',
        ),
        p(
          'Treat anything we publish about Graphyene as exploration, unless we clearly describe it as a released or final resource.',
        ),
        note(
          'We’d rather show what we’re learning than pretend everything is already figured out.',
        ),
      ],
    },
    {
      heading: 'Project enquiries',
      blocks: [
        h('Starting a conversation'),
        p('When you send us a project enquiry, you are starting a conversation. It does not:'),
        list(
          'create a contract',
          'guarantee that Graphikx will take on the work',
          'reserve time in our schedule',
          'promise anything about pricing, delivery or availability',
        ),
        p('We will read what you send and get in touch if we think we can help.'),
        h('Please be careful with confidential information'),
        p('Our enquiry form is not a confidentiality or non-disclosure agreement.'),
        p(
          'Please avoid sending passwords, access credentials, trade secrets, confidential customer information or other highly sensitive information through the form, unless an existing agreement with us covers it.',
        ),
        p(
          'If a project needs confidentiality before details are shared, we can discuss an NDA or another suitable arrangement.',
        ),
      ],
    },
    {
      heading: 'Website information',
      blocks: [
        h('We try to get things right'),
        p(
          'We make a reasonable effort to keep the information on this website useful, current and accurate.',
        ),
        p(
          'Still, design ideas evolve, services change, links go out of date and mistakes happen. Website content is general information, not a guarantee, promise or contractual commitment, unless we have explicitly agreed otherwise in writing.',
        ),
        p('If something looks wrong, we’d appreciate hearing from you.'),
        email,
      ],
    },
    {
      heading: 'Third-party websites and tools',
      blocks: [
        h('Some things aren’t ours to control'),
        p(
          'The website may link to other websites, platforms, tools, social networks, articles or resources. They have their own terms and privacy practices.',
        ),
        p(
          'Once you leave Graphikx, we are not responsible for how another website works, what it publishes, how it uses your information, or whether it stays available.',
        ),
        p(
          'We also use third-party services to host the website, provide analytics, deliver fonts and receive enquiries. Our Privacy notice describes them.',
        ),
      ],
    },
    {
      heading: 'Website availability',
      blocks: [
        h('Things can occasionally break'),
        p(
          'We aim to keep Graphikx available and working well, but we can’t promise it will always be:',
        ),
        list(
          'available and uninterrupted',
          'completely free of errors',
          'compatible with every device or browser',
          'free from technical issues or security risks',
        ),
        p(
          'We may change, pause, remove or improve parts of the website without notice when needed.',
        ),
        note('We build carefully. We can’t promise the internet will always behave.'),
      ],
    },
    {
      heading: 'Responsible use',
      blocks: [
        h('Please use the website normally'),
        p('You agree not to use Graphikx to:'),
        list(
          'break laws or regulations',
          'try to access the website or its systems without permission',
          'interfere with how the website works',
          'introduce malicious software or harmful code',
          'scrape or copy content at a scale that harms the website',
          'impersonate Graphikx or someone working with us',
          'misuse forms, the enquiry system or other features',
        ),
        p(
          'We may take reasonable steps to protect the website, our team and other visitors from misuse.',
        ),
      ],
    },
    {
      heading: 'Our relationship with you',
      blocks: [
        h('A website visit isn’t a business agreement'),
        p(
          'Nothing on this website creates a partnership, employment, agency, joint venture or client relationship between you and Graphikx.',
        ),
        p(
          'A project relationship begins only when both sides agree to the relevant terms in writing.',
        ),
        p(
          'If something on the website conflicts with a signed project agreement, the project agreement generally takes priority for that project.',
        ),
      ],
    },
    {
      heading: 'Changes to these terms',
      blocks: [
        h('Things change'),
        p(
          'We may update these terms when the website, our services, technology or legal requirements change. When we make a meaningful update, we will change the “Last updated” date at the top of this page.',
        ),
        p('The latest version published here applies to your continued use of the website.'),
      ],
    },
    {
      heading: 'Governing law',
      blocks: [
        h('Where these terms apply'),
        p(
          'These terms are governed by the laws of India, unless a separate written agreement with a client or other party says otherwise.',
        ),
        p(
          'Any dispute about the use of this website will be subject to the jurisdiction of the competent courts in India, subject to applicable law.',
        ),
      ],
    },
    {
      heading: 'Questions',
      blocks: [
        h('We’re easier to reach than most legal pages'),
        p('Questions about these terms?'),
        email,
      ],
    },
  ],
  closing: {
    title: 'We’re here to make complicated things *clearer.*',
    text: ['That includes these terms.'],
  },
};
