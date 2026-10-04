import {capabilities} from './practice';

export type FieldCopy = {label: string; hint: string};

/** Enquiry form copy, for the three-step form on Start a Project. */
export const formCopy = {
  name: {label: 'Your name', hint: 'What should we call you?'},
  email: {label: 'Email address', hint: 'Where can we reach you?'},
  company: {label: 'Company / Product', hint: 'What are you building?'},
  message: {
    label: 'What are you working on?',
    hint: 'Tell us a little about the product, idea, or problem.',
  },
  helpWith: {label: 'What would you like help with?', hint: 'Choose what feels closest:'},
  difficulty: {
    label: 'What feels difficult right now?',
    hint: "What isn't working, or what are you trying to improve?",
  },
  stage: {label: 'Where are you right now?'},
  timeline: {label: 'When are you looking to start?'},
  notes: {label: 'Anything else you think we should know?'},
  next: 'Continue',
  back: 'Back',
  submit: "Let's make sense of it",
  microcopy: "By sending this, you're starting a conversation. Nothing more.",
  privacy: 'Your details stay with Graphikx and are used only to respond to your enquiry.',
  privacyLink: {label: 'Privacy', href: '/privacy'},
};

/** The three steps, in order. */
export const formSteps = [
  {title: 'About you', description: 'So we know who we’re talking to.'},
  {title: 'The project', description: 'In your own words. Rough is fine.'},
  {title: 'Where you are', description: 'A little context helps us prepare.'},
] as const;

export const NOT_SURE = 'Not sure yet';

export const projectTypes = [...capabilities.map(capability => capability.title), NOT_SURE];

export const stageOptions = [
  'Just an idea',
  'Early exploration',
  'Designing the product',
  'Already have a product',
  'Improving an existing experience',
  NOT_SURE,
];

export const timelineOptions = [
  'As soon as possible',
  'In the next few weeks',
  'In the next few months',
  'Just exploring for now',
];

/** Shown near the service choice so people who don't know what they need don't leave. */
export const notSureHelper = {
  title: 'Not sure what you need?',
  description: "That's completely fine.",
  action: 'Help me figure it out',
  selected:
    "Tell us what's happening in your own words.\nYou don't need to choose a service first.",
};

/** Shown at the top of the project step to lower the stakes. "*word*" sets the accent. */
export const humanNudge =
  "Don't *overthink* this. Write it the way you'd explain it to a person; we'll ask if we need more.";

export const confirmation = {
  eyebrow: 'We got it',
  title: "Something's on its way.",
  paragraphs: [
    "Thanks for sharing what's on your mind.",
    "We've got your note and will take a look.",
    "We'll get back to you with the next step.",
  ],
  action: {label: 'Back to Graphikx', href: '/'},
  secondaryAction: {label: 'Keep exploring Thinking', href: '/thinking'},
};

/** Start a Project page copy, in page order. "*word*" sets the italic serif accent. */
export const startProjectPage = {
  hero: {
    label: 'Start a project',
    title: "You don't need a perfect *brief.*",
    description:
      "Bring us the idea, the problem, or the half-finished thought. We'll start from there.",
    meta: ['3 short steps', 'No polished brief', 'Just a conversation'],
  },
  enquiry: {
    id: 'enquiry',
    label: 'Tell us a little',
    title: 'What are you *working on?*',
    intro: 'A few details help us understand where you are and what might be useful.',
    contactLabel: 'Prefer email?',
  },
  faq: {
    label: 'Before you ask',
    title: 'A few things worth *knowing.*',
    items: [
      {
        question: 'What happens after I send this?',
        answer: "We'll take a look at your note and get back to you with the next step.",
      },
      {
        question: 'Do I need to know which service I need?',
        answer: "No. Tell us what's happening in your own words. You don't need to choose a service first.",
      },
      {
        question: 'Is this a commitment?',
        answer:
          "No. By sending this, you're starting a conversation. We'll use it to understand the problem and figure out whether Graphikx is the right fit.",
      },
      {
        question: 'What do you do with my details?',
        answer: 'They stay with Graphikx and are used only to respond to your enquiry.',
      },
    ],
  },
  closing: {
    label: 'Every project starts somewhere',
    title: 'Sometimes with just “something isn’t *working.*”',
    note: "That's enough.",
  },
};
