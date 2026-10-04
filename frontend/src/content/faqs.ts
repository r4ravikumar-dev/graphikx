import type {Faq} from '@/components/editorial/FaqList';
import {site} from './site';

export type FaqGroup = {label: string; title: string; items: Faq[]};

/**
 * Contextual questions: each page answers what someone on that page is
 * probably wondering, rather than one generic FAQ. Every answer follows the
 * same shape: a direct answer, a useful clarification, then a gentle next
 * step where it helps. Keep each group to 5-8 questions; deeper questions
 * belong on the page where the uncertainty happens.
 */

export const homeFaq: FaqGroup = {
  label: 'Questions',
  title: 'Before you *go.*',
  items: [
    {
      question: 'What does Graphikx actually do?',
      answer: [
        'We design digital products and experiences.',
        'That covers product design, UX, UI, interaction, UX flow improvement, no-code and SaaS products. We can help shape something new or improve something that already exists.',
      ],
    },
    {
      question: 'Do I need to know exactly what service I need?',
      answer: [
        'No.',
        "Come to us with the problem, the idea or the part of the product that isn't working. We'll help figure out where to start.",
      ],
    },
    {
      question: 'Do you only work on new products?',
      answer: [
        'No.',
        'We work on new ideas and on existing products that need a clearer experience, a better flow or a visual rethink. Sometimes the best starting point isn’t a blank canvas.',
      ],
    },
    {
      question: 'Do you work with early-stage ideas?',
      answer: [
        'Yes.',
        "An idea doesn't have to be fully formed before you talk to us. Often, the earlier we understand the problem, the more useful the design process can be.",
      ],
    },
    {
      question: 'Do you work on SaaS products and dashboards?',
      answer: [
        'Yes.',
        'We work on products with complex workflows, dashboards, data, settings, tables, filters and different user needs.',
      ],
    },
    {
      question: 'Do you build the product too?',
      answer: [
        'Our focus is design.',
        'We also create interactive experiences and no-code builds when that helps move an idea forward.',
      ],
    },
    {
      question: 'Do you have a portfolio?',
      answer: [
        "We're building our body of client work.",
        "For now, we share our thinking, explorations and Graphyene to show how we approach design, rather than presenting unfinished or hypothetical work as client projects. As Graphikx grows, we'll share real projects and the stories behind them.",
      ],
    },
    {
      question: 'What makes Graphikx different?',
      answer: [
        "We don't start with a screen or a visual style.",
        'We start by understanding what people are trying to do, where things become difficult, and what could make the experience clearer.',
      ],
    },
  ],
};

export const practiceFaq: FaqGroup = {
  label: 'Questions',
  title: 'A few things you might be *wondering.*',
  items: [
    {
      question: 'Can you redesign an existing product?',
      answer: [
        'Yes.',
        'We can review the current experience, find where people get stuck, and rethink the parts that need attention.',
        "You don't have to start from scratch.",
      ],
    },
    {
      question: 'Can I hire you for just one part of a project?',
      answer: [
        'Yes.',
        "You don't always need a full redesign. We can work on a specific flow, feature, interface or interaction, depending on what the problem needs.",
      ],
    },
    {
      question: 'Can you help with UX without redesigning the UI?',
      answer: [
        'Yes.',
        'Sometimes the problem is in the journey rather than the visuals. We can focus on the experience first and decide what needs to change afterwards.',
      ],
    },
    {
      question: 'Can you redesign only the UI?',
      answer: [
        'Yes.',
        "When the product's structure already works, we can focus on the interface: visual hierarchy, responsive design, accessibility and overall visual direction.",
      ],
    },
    {
      question: 'What does a UX Flow Revamp include?',
      answer: [
        'A close look at one journey, rebuilt around its goal.',
        'We look at an existing flow, find unnecessary steps, unclear choices and places where people get stuck, then rethink it around what the person is trying to do.',
      ],
    },
    {
      question: 'Can you work with our existing design system?',
      answer: [
        'Yes.',
        'We can work within the system you already have, and point out the areas that may need improvement.',
      ],
    },
    {
      question: 'Can you create a design system for our product?',
      answer: [
        'Yes.',
        'The scope depends on the product, the team and the stage. We can define the foundations, reusable elements, patterns and guidance your product needs.',
      ],
    },
    {
      question: 'Do you work with developers?',
      answer: [
        'Yes.',
        'We make the design understandable and usable for the people who will build it, with clear handoff, documentation and conversation where needed.',
      ],
    },
  ],
};

export const graphyeneFaq: FaqGroup = {
  label: 'Questions',
  title: "Questions we're already being *asked.*",
  items: [
    {
      question: 'What exactly is Graphyene?',
      answer: [
        "An evolving design-system idea we're building at Graphikx.",
        "We're exploring how systems can help products stay clear, consistent and flexible as they grow.",
      ],
    },
    {
      question: 'Is Graphyene a finished design system?',
      answer: [
        'No.',
        "It's being explored, tested and refined. We don't want to present unfinished work as something final.",
      ],
    },
    {
      question: 'Can I use Graphyene for my product today?',
      answer: [
        'Not as a finished public system.',
        "We're still developing the thinking, structure and practical foundations behind it.",
      ],
    },
    {
      question: 'Why are you building Graphyene?',
      answer: [
        "Because we've seen how quickly products become inconsistent as they grow.",
        "We're exploring whether a better system can reduce repeated decisions while still leaving room for thoughtful design.",
      ],
    },
    {
      question: 'Will Graphyene become publicly available?',
      answer: [
        "That's something we're exploring.",
        "As the system develops, we'll share more about what becomes ready.",
      ],
    },
    {
      question: 'Is Graphyene the system you use for every client?',
      answer: [
        'Not necessarily.',
        'A good system should respond to the product, rather than force every product into the same visual language.',
      ],
    },
    {
      question: 'What are you trying to solve with Graphyene?',
      answer: [
        'Consistency without rigidity.',
        "We're exploring questions around consistency, flexibility, reuse and clarity, and how teams can make design decisions without starting from scratch every time.",
      ],
    },
    {
      question: "Why show Graphyene while it's still unfinished?",
      answer: [
        'Because the thinking is part of the work.',
        "We'd rather share the questions and experiments honestly than wait until everything looks polished.",
      ],
    },
  ],
};

export const thinkingFaq: FaqGroup = {
  label: 'Questions',
  title: 'About these *ideas.*',
  items: [
    {
      question: 'Who writes the Thinking articles?',
      answer: [
        'The Graphikx team.',
        'They come from our observations, design work, experiments and ongoing exploration.',
      ],
    },
    {
      question: 'Are the ideas based on real projects?',
      answer: [
        "Some come from things we've seen while working on products. Others are independent observations or explorations.",
        'We will clearly identify client work when we publish it.',
      ],
    },
    {
      question: 'Are your articles meant to be tutorials?',
      answer: [
        'Not always.',
        "Some explain an idea. Some explore a question. Some simply share something we've noticed and think is worth discussing.",
      ],
    },
    {
      question: 'How often will you publish?',
      answer: [
        'When we have something useful to say.',
        "We'd rather do that than publish to fill a calendar.",
      ],
    },
    {
      question: 'Can I suggest a topic?',
      answer: [
        'Yes.',
        `Some of the best questions come from conversations with people building real products. Send yours to ${site.email}.`,
      ],
    },
    {
      question: 'Can I share a Graphikx article?',
      answer: [
        'Yes.',
        "You're welcome to share links to our articles. To reproduce substantial parts of one, please ask us first.",
      ],
    },
    {
      question: 'Are these articles professional advice?',
      answer: [
        'No.',
        'They share our current thinking and are meant for learning and discussion. Every product and situation is different.',
      ],
    },
    {
      question: 'Can I work with Graphikx after reading something here?',
      answer: [
        'Absolutely.',
        'Reading, thinking and talking about a problem is often where a project starts.',
      ],
    },
  ],
};

export const studioFaq: FaqGroup = {
  label: 'Questions',
  title: 'Getting to know the *studio.*',
  items: [
    {
      question: 'Why did you start Graphikx?',
      answer: [
        'To build a studio around the way we naturally like to work.',
        'Understanding the problem closely, asking better questions, and making complicated things easier to use.',
      ],
    },
    {
      question: 'Is Graphikx a large agency?',
      answer: [
        'No.',
        "We're building Graphikx as a focused design studio, and growing thoughtfully as the work grows.",
      ],
    },
    {
      question: 'Who do you work with?',
      answer: [
        'Founders, startups, growing product teams and businesses.',
        'Anyone who needs help making a digital product or experience clearer.',
      ],
    },
    {
      question: 'Do you work alone or with a team?',
      answer: [
        'That depends on the project.',
        'Graphikx has a core team, and we bring in the right people or specialists when a project needs something beyond our core capabilities.',
      ],
    },
    {
      question: 'Can we work with Graphikx remotely?',
      answer: [
        'Yes.',
        'We collaborate remotely with teams in different locations, in India and abroad.',
      ],
    },
    {
      question: 'Do you work with in-house designers?',
      answer: [
        'Yes.',
        'We can work alongside an existing design team when extra thinking, capacity or a fresh perspective is useful.',
      ],
    },
    {
      question: 'Do you take every project?',
      answer: [
        'No.',
        "We'd rather take on work where we can genuinely contribute. If we're not the right fit, we'll say so clearly.",
      ],
    },
    {
      question: 'What kind of projects interest you most?',
      answer: [
        'Products where the experience needs careful thinking.',
        'Especially products that are useful, complex, growing or still taking shape.',
      ],
    },
  ],
};

export const startProjectFaq: FaqGroup = {
  label: 'Questions',
  title: 'Before you *send it.*',
  items: [
    {
      question: "I don't have a proper brief yet. Can I still contact you?",
      answer: [
        "Yes. You don't need a polished brief.",
        "Tell us what you're building, what's difficult or what you're trying to improve. We'll help figure out the rest.",
      ],
    },
    {
      question: 'What should I include in my enquiry?',
      answer: [
        'Whatever you already know.',
        "A short explanation of the product, the problem, where you are today and what you'd like to improve is enough.",
      ],
    },
    {
      question: 'Do I need to choose a service first?',
      answer: ['No.', 'Select “Not sure yet” and simply tell us what’s happening.'],
    },
    {
      question: 'What happens after I submit the form?',
      answer: [
        "We'll read your message and get back to you.",
        "If it looks like we could help, we'll continue the conversation and understand the problem in more detail. A first conversation doesn't commit you to anything.",
      ],
    },
    {
      question: 'How quickly will you reply?',
      answer: ['We aim to reply within one business day.'],
    },
    {
      question: 'How do you decide whether a project is a good fit?',
      answer: [
        'We look at the whole picture.',
        "The problem, the stage of the product, what you need, and whether our skills and availability match what you're trying to achieve.",
      ],
    },
    {
      question: 'Can you work with a small budget?',
      answer: [
        'Possibly.',
        "The right approach depends on what needs solving, so we're happy to understand the situation before suggesting a scope.",
      ],
    },
    {
      question: 'Do you sign an NDA?',
      answer: [
        'We can discuss an NDA when confidentiality is needed.',
        'Please avoid sending highly confidential information through this form unless the right protections are already in place.',
      ],
    },
  ],
};

export const privacyFaq: FaqGroup = {
  label: 'Questions',
  title: 'Still *unclear?*',
  items: [
    {
      question: 'Why do you have a Privacy notice?',
      answer: [
        'So you can understand what we receive from you, why we use it, and what choices you have.',
      ],
    },
    {
      question: 'How can I ask what information you have about me?',
      answer: [
        `Email us at ${site.email}.`,
        "We'll explain the process and what information we may hold about you.",
      ],
    },
    {
      question: 'Why do you use analytics?',
      answer: [
        'To understand whether the website is useful and where we can improve it.',
        "We don't use the website's analytics to build advertising profiles.",
      ],
    },
    {
      question: 'Can I ask you to delete my information?',
      answer: [
        'Where the law allows, yes.',
        `Contact us at ${site.email} and we'll review your request.`,
      ],
    },
  ],
};

export const termsFaq: FaqGroup = {
  label: 'Questions',
  title: 'Still *unclear?*',
  items: [
    {
      question: 'Is sending an enquiry a contract?',
      answer: [
        'No.',
        'An enquiry starts a conversation. A project begins only when both sides agree to its terms in writing.',
      ],
    },
    {
      question: 'Can I share or quote your work?',
      answer: [
        'Yes, with credit.',
        'Share links freely and quote short passages with a link back. For anything more, please ask us first.',
      ],
    },
    {
      question: 'Who do I contact about these terms?',
      answer: [`Email us at ${site.email}.`, "We're happy to explain anything that isn't clear."],
    },
  ],
};
