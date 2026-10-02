import {capabilities} from './practice';

export type FieldCopy = {label: string; hint: string};

/**
 * Enquiry form copy. "short" is the homepage form; "full" is the Start a
 * Project page, which asks a little more.
 */
export const formCopy = {
  short: {
    name: {label: 'Your name', hint: 'How should we call you?'},
    email: {label: 'Email', hint: 'Where can we reach you?'},
    company: {label: 'Company / product', hint: 'What are you working on?'},
    message: {
      label: 'Tell us about it',
      hint: "What's happening, and what would you like to improve?",
    },
    timeline: {label: 'Timeline', hint: 'When are you hoping to start?'},
    microcopy: 'No polished brief needed.',
  },
  full: {
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
    stage: {label: 'Where are you right now?', hint: ''},
    timeline: {label: 'When are you looking to start?', hint: ''},
    notes: {label: 'Anything else you think we should know?', hint: ''},
    microcopy: "By sending this, you're starting a conversation. Nothing more.",
    privacy: 'Your details stay with Graphikx and are used only to respond to your enquiry.',
    privacyLink: {label: 'Privacy', href: '/privacy'},
  },
  submit: "Let's make sense of it",
};

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

/** A visual interruption between fields that lowers the stakes. */
export const humanNudge = {
  title: "Don't overthink this.",
  description:
    "Write it the way you'd explain it to a person.\nYou can send us a rough thought.\nWe'll ask questions if we need more.",
  microcopy: 'Honestly is more useful than impressive.',
};

export const beforeSubmitting = {
  eyebrow: 'One last thing',
  title: 'Start where you are.',
  paragraphs: [
    "You don't need to know exactly what you need from us.",
    "We'll use the first conversation to understand the problem, explore what might help, and figure out whether Graphikx is the right fit.",
  ],
  microcopy: 'No pressure. No hard sell. Just a conversation.',
};

export const confirmation = {
  eyebrow: 'We got it',
  title: "Something's on its way.",
  paragraphs: [
    "Thanks for sharing what's on your mind.",
    "We've got your note and will take a look.",
    "We'll get back to you with the next step.",
  ],
  mascotLine: "Got it. Let's figure this out.",
  action: {label: 'Back to Graphikx', href: '/'},
  secondaryAction: {label: 'Keep exploring Thinking', href: '/thinking'},
};

export const startProjectPage = {
  opening: {
    eyebrow: 'Start a project',
    title: "You don't need a perfect brief.",
    lines: [
      'Bring us the idea.',
      'The problem.',
      'The half-finished thought.',
      "The flow that isn't working.",
      "Or simply the thing you're trying to figure out.",
    ],
    closing: "We'll start from there.",
    microcopy: 'No polished presentation. No perfect wording. Just tell us what’s going on.',
  },
  enquiry: {
    id: 'enquiry',
    eyebrow: 'Tell us a little',
    title: 'What are you working on?',
    description: 'A few details help us understand where you are and what might be useful.',
  },
  closing: {
    title: 'Every project starts somewhere.',
    lines: [
      'Sometimes with a clear direction.',
      'Sometimes with a messy problem.',
      'Sometimes with just:',
    ],
    quote: '“Something isn’t working.”',
    enough: "That's enough.",
    action: {label: 'Start the conversation', href: '#enquiry'},
  },
};
