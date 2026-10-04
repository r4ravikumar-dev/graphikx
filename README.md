# Graphikx

> A digital design studio creating thoughtful products, interfaces, and experiences that make complex things easier to understand.

Graphikx is the website and digital presence for the Graphikx design studio. This repository contains the frontend and backend required to build, run, and maintain the platform.

The project is designed to support the Graphikx brand, content, project enquiries, future case studies, Graphyene explorations, and ongoing studio thinking.

---

## Table of Contents

- [Overview](#overview)
- [Repository Structure](#repository-structure)
- [Frontend](#frontend)
- [Backend](#backend)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [API](#api)
- [Content Structure](#content-structure)
- [Design Principles](#design-principles)
- [Component Architecture](#component-architecture)
- [Design System](#design-system)
- [Accessibility](#accessibility)
- [SEO](#seo)
- [Development Scripts](#development-scripts)
- [Development Workflow](#development-workflow)
- [Git Conventions](#git-conventions)
- [Project Roadmap](#project-roadmap)
- [Contribution](#contribution)
- [License](#license)

---

## Overview

Graphikx brings together product design, UX design, UI design, interaction design, UX flow revamp, no-code design, and SaaS product design.

The website is structured around a storytelling-led experience rather than a traditional agency portfolio.

### Core areas

| Area                | Visitor question          | Description                                                       |
| ------------------- | ------------------------- | ----------------------------------------------------------------- |
| **Home**            | "Who are they?"           | The Graphikx story, point of view, practice, and brand experience |
| **Practice**        | "What do they do?"        | Product, UX, UI, interaction, flow, no-code, and SaaS design      |
| **Thinking**        | "How do they think?"      | Articles, observations, and ideas around digital product design   |
| **Graphyene**       | "What are they building?" | Graphikx's evolving design-system exploration                     |
| **Studio**          | "Who are they?"           | The people, principles, and thinking behind Graphikx              |
| **Start a Project** | "Let's talk."             | Project enquiries and conversations                               |

A future **Work** section can be added as Graphikx begins to publish real client projects.

### Site journey

The site is built as a journey. Each page answers one question and ends by pointing to the next stop.

```
                DISCOVER
                   ↓
                 HOME
             "Who are they?"
                   ↓
          ┌────────┴────────┐
          ↓                 ↓
       PRACTICE          THINKING
    "What do they      "How do they
        do?"              think?"
          │                 │
          └────────┬────────┘
                   ↓
               GRAPHYENE
          "What are they
            building?"
                   ↓
                STUDIO
           "Who are they?"
                   ↓
            START A PROJECT
             "Let's talk."
```

- Home gives a first impression of who Graphikx is. Studio gives the full answer once the visitor has seen the work and the thinking.
- Home forks into Practice and Thinking. Both lead on to Graphyene.
- The journey is defined in `frontend/src/content/journey.ts`, and the main navigation order is generated from it.
- Each page moves visitors on through its own calls to action. The homepage previews of Practice, Graphyene and Thinking link onward, and each inner page closes with an invitation to start a project.
- Every page shares one footer. Its copy lives in `frontend/src/content/footer.ts`.
- The Privacy and Terms pages (`/privacy`, `/terms`) are plain-language drafts in `frontend/src/content/legal.ts`. Review them before launch, and update them whenever the site starts collecting anything new.
- The "Start a project" button stays in the top navigation on every page, so a visitor never has to finish the journey to get in touch.


---

## Repository Structure

```
graphikx/
│
├── frontend/                 # Next.js website
│   ├── public/
│   └── src/
│       ├── app/              # Routes, layout, metadata, sitemap, robots
│       ├── components/       # Grouped by purpose (see Component Architecture)
│       ├── content/          # Site copy: practice, principles, Graphyene, articles
│       ├── lib/              # API client
│       └── motion/           # M3 Expressive spring tokens
│
├── backend/                  # Express API
│   ├── src/
│   │   ├── config/           # Environment parsing
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── models/           # Zod schemas and types
│   │   ├── middleware/
│   │   └── data/
│   └── tests/
│
├── README.md
└── .gitignore
```


---

## Frontend

The frontend is responsible for the Graphikx website experience, responsive layouts, interactions, animations, content presentation, and communication with the backend.

### Frontend responsibilities

- Graphikx website experience
- Responsive design
- Navigation
- Storytelling sections
- Service and practice content
- Graphyene content
- Thinking / article pages
- Studio content
- Project enquiry experience
- Form validation
- Accessibility
- SEO metadata
- Analytics integration
- API communication

### Frontend stack

```
Framework:   Next.js 16 (App Router) + React 19
Language:    TypeScript
Components:  Astryx (@astryxdesign/core): https://astryx.atmeta.com/components
Theme:       Astryx Stone (@astryxdesign/theme-stone), extended in src/theme
Typography:  Graphikx Responsive Typography Scale v1 (src/theme/typeScale.ts)
Templates:   Astryx templates (shell-top-nav, centered-hero, contact-form)
Styling:     Astryx components + design tokens (no Tailwind)
Animation:   Framer Motion with Material Design 3 Expressive springs
Icons:       Lucide
Forms:       Astryx form components with custom validation
CMS:         None yet; content lives in src/content
```

Pages are built from Astryx templates. Run `npx astryx build "<page idea>"` in `frontend/` to find the closest template, and `npx astryx component <Name>` for component props.

Motion uses the Material Design 3 Expressive spring tokens in `frontend/src/motion/springs.ts`. Spatial springs (movement) overshoot slightly and settle. Effects springs (opacity, colour) never bounce. Reduced-motion preferences are respected everywhere.

---

## Backend

The backend handles the server-side functionality required by the Graphikx website.

### Backend responsibilities

- Project enquiry handling
- API endpoints
- Form processing
- Data validation
- Email notifications
- Content management where applicable
- Database communication
- Security and request handling
- Future integrations

### Backend stack

```
Runtime:         Node.js 22+
Framework:       Express 5
Language:        TypeScript
Validation:      Zod
Security:        Helmet, CORS, rate limiting on enquiries
Database:        None yet (DATABASE_URL reserved)
Authentication:  Not applicable
Email:           SMTP via Nodemailer (logs to console when EMAIL_HOST is unset)
Testing:         Vitest + Supertest
```

---

## Getting Started

### Prerequisites

Make sure the following are installed:

- Node.js
- npm / pnpm / yarn
- Git
- [Database, if required]

Check your installed versions:

```bash
node -v
npm -v
git --version
```

### Clone the repository

```bash
git clone https://github.com/r4ravikumar-dev/graphikx.git
cd graphikx
```

The frontend and backend each have their own `package.json`. Run each one in its own terminal.

### Frontend setup

Move into the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create the environment file:

```bash
cp .env.example .env.local
```

Add the required values to `.env.local`. Example:

```env
BACKEND_URL=http://localhost:4000
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

The browser always calls the API on the same origin (`/api/...`). In local development, `next.config.ts` proxies `/api/*` to `BACKEND_URL`.

Start the development server:

```bash
npm run dev
```

The frontend should now be available at [http://localhost:3000](http://localhost:3000).

### Backend setup

Open a new terminal and move into the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create the environment file:

```bash
cp .env.example .env
```

Add the required environment variables. Example:

```env
PORT=4000
CORS_ORIGIN=http://localhost:3000
DATABASE_URL=
EMAIL_HOST=
EMAIL_PORT=587
EMAIL_USER=
EMAIL_PASSWORD=
EMAIL_FROM=
ENQUIRY_NOTIFY_TO=
```

Leave `EMAIL_HOST` empty during development. Enquiries are then printed to the console instead of being emailed.

Start the backend:

```bash
npm run dev
```

The API should now be available at [http://localhost:4000](http://localhost:4000).

> Port 5000 is avoided because macOS uses it for AirPlay Receiver.

---

## Environment Variables

Environment variables should **never** be committed to the repository.

Keep sensitive values inside local `.env` files or your deployment provider's environment configuration.

### Frontend

```env
BACKEND_URL=              # local development only; leave unset on Vercel
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_CONTACT_EMAIL=
NEXT_PUBLIC_LINKEDIN_URL=
```

### Backend

```env
PORT=
CORS_ORIGIN=
DATABASE_URL=
EMAIL_HOST=
ENQUIRY_NOTIFY_TO=
```

Add service-specific variables as required.

---

## Deployment

The site deploys to Vercel as **one project with two [services](https://vercel.com/docs/services)**, configured in `vercel.json` at the repository root:

| Service    | Root        | Framework | Public path                    |
| ---------- | ----------- | --------- | ------------------------------ |
| `backend`  | `backend/`  | Express   | `/api/*`                       |
| `frontend` | `frontend/` | Next.js   | everything else (`/*`)         |

- Both services share one domain, so the browser calls the API at `/api/...` on the same origin, with no CORS and no API URL to configure.
- Vercel passes the original path to each service, so `/api/health` reaches Express as `/api/health`, matching its routes.
- The backend's entrypoint is set to `src/server.ts`. Without it, Vercel would pick up `src/app.ts`, which only exports a factory.
- The frontend server never calls the backend, so there are no service bindings. If server-side code ever needs the API, add a binding on the `frontend` service rather than hard-coding a URL.

Set these environment variables in the Vercel project, not in `vercel.json`:

| Variable                                         | Used by  | Notes                                            |
| ------------------------------------------------ | -------- | ------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL`                           | frontend | The production URL, for canonical links and the sitemap |
| `NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_LINKEDIN_URL` | frontend | Optional. Default to the Graphikx contacts     |
| `EMAIL_HOST`, `EMAIL_PORT`, `EMAIL_USER`, `EMAIL_PASSWORD`, `EMAIL_FROM` | backend | SMTP for enquiry emails. Without them, enquiries are only logged |
| `ENQUIRY_NOTIFY_TO`                              | backend  | Where enquiries are sent                         |

Do not set `BACKEND_URL` on Vercel.

To run both services together locally, the way they run on Vercel:

```bash
vercel dev
```

---

## API

The backend exposes endpoints used by the frontend.

Example structure:

```
/api
│
├── /projects
│   └── POST /enquiry
│
├── /thinking
│   ├── GET /
│   └── GET /:slug
│
└── /health
    └── GET /
```

### Health check

```http
GET /api/health
```

Expected response:

```json
{
  "status": "ok"
}
```

### Project enquiry

```http
POST /api/projects/enquiry
```

Example request:

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "company": "Example",
  "projectType": "Product Design",
  "stage": "Already have a product",
  "timeline": "In the next few weeks",
  "message": "We are redesigning an existing product."
}
```

Only `name`, `email` and `message` are required. `company`, `projectType` (what they'd like help with), `stage` (where they are right now), `timeline`, `difficulty` (what feels difficult) and `notes` are optional. A successful request returns `201 {"status": "received"}`. A request that fails validation returns `422` with a message for each field:

```json
{
  "error": "Please check the highlighted fields",
  "fields": {"email": "Enter a valid email address"}
}
```

Enquiries are limited to 5 per IP every 15 minutes.

---

## Content Structure

Graphikx content is organized around a small number of core areas.

```
Home
Practice
Graphyene
Thinking
Studio
Start a Project
```

### Practice

```
Product Design
UX Design
UI Design
Interaction Design
UX Flow Revamp
No-code Design
SaaS Product Design
```

### Thinking

```
Product
UX
UI
Interaction
SaaS
Design Systems
No-code
```

### Graphyene

Graphyene is currently an **evolving design-system exploration** rather than a completed design system.

Content should clearly distinguish between:

- Current thinking
- Experiments
- Explorations
- Decisions
- Future direction

> Do not describe unfinished work as a finalized system.

---

## Design Principles

The Graphikx website follows a storytelling-led approach.

**Make sense of it**
Graphikx focuses on making complex products, experiences, and ideas easier to understand.

**People first**
Design decisions should begin with the people using the product.

**Clarity over noise**
The interface should help people understand what matters.

**Curiosity before assumptions**
Questions should come before solutions.

**Systems that support creativity**
Structure should make good design easier without removing room for thought.

---

## Component Architecture

Frontend components should be reusable and grouped by purpose.

```
components/
│
├── layout/
│   ├── Header
│   ├── Footer
│   └── Container
│
├── navigation/
│   ├── MainNav
│   ├── MobileNav
│   └── SectionNav
│
├── storytelling/
│   ├── Hero
│   ├── Eyebrow
│   ├── Microcopy
│   ├── NarrativeBlock
│   ├── Statement
│   ├── SectionIntro
│   ├── Highlight
│   ├── LayeredLines
│   ├── TopicGrid
│   ├── ProcessSteps
│   ├── SituationList
│   ├── KeyStatement
│   └── ProjectInvitation
│
├── practice/
│   ├── PracticeGroup
│   ├── PracticeSection
│   ├── Capability
│   ├── DisciplineFlow
│   └── PracticePreview
│
├── graphyene/
│   ├── Principle
│   ├── Architecture
│   ├── Exploration
│   ├── StatusBadge
│   └── GraphyenePreview
│
├── thinking/
│   ├── ArticleCard
│   ├── ArticleList
│   ├── CategoryFilter
│   ├── FeaturedArticle
│   ├── FlowComparison
│   └── ArticleContent
│
├── forms/
│   ├── Input
│   ├── Textarea
│   ├── Select
│   ├── ProjectForm
│   └── ProjectEnquiry
│
├── studio/
│   ├── FounderProfile
│   └── FocusArea
│
└── mascot/
    ├── Mascot           # Used only inside MascotDialogue
    └── MascotDialogue   # The looping mascot moment; the only element on the site that loops
```

### Naming

Component names should describe **what the component is**, not where it happens to be used.

| ✅ Good          | ❌ Avoid          |
| ---------------- | ----------------- |
| `NarrativeBlock` | `HomeSection3`    |
| `ArticleCard`    | `BlueCard`        |
| `ProjectForm`    | `FinalCTASection` |

This keeps the system easier to maintain as the website grows.

---

## Design System

The Graphikx website should use shared design tokens for:

- Typography
- Colour
- Spacing
- Border radius
- Borders
- Shadows
- Motion
- Breakpoints
- Accessibility states

Avoid creating page-specific values when an existing token can be reused.

Graphyene may later become the formal design-system foundation for Graphikx projects, but it should remain separate from the current implementation until its structure is ready.

---

## Accessibility

Accessibility is considered part of the product, not a final checklist.

The frontend should support:

- Keyboard navigation
- Visible focus states
- Semantic HTML
- Logical heading hierarchy
- Accessible form labels
- Sufficient text contrast
- Reduced-motion preferences
- Alternative text for meaningful images
- Accessible interactive elements
- Responsive layouts

---

## SEO

The website should be optimized for both people and search engines.

### Core goals

- Clear page titles
- Useful meta descriptions
- Semantic HTML
- Structured headings
- Descriptive URLs
- Open Graph metadata
- Descriptive image alt text
- Internal linking
- Fast page loading
- Mobile-friendly layouts
- Article metadata for Thinking content
- Structured data where appropriate

### Primary topics

Topics naturally associated with Graphikx include:

```
Product Design
UX Design
UI Design
Interaction Design
UX Flow Revamp
SaaS Product Design
No-code Design
Design Systems
```

SEO copy should remain natural and useful rather than repeating keywords unnecessarily.

---

## Development Scripts

### Frontend

| Command         | Description                   |
| --------------- | ----------------------------- |
| `npm run dev`   | Start the development server  |
| `npm run build` | Create a production build     |
| `npm run start` | Run the production build      |
| `npm run lint`  | Lint the codebase             |

### Backend

| Command         | Description                   |
| --------------- | ----------------------------- |
| `npm run dev`   | Start the development server  |
| `npm run build` | Create a production build     |
| `npm run start` | Run the production build      |
| `npm run test`  | Run the test suite            |
| `npm run lint`  | Lint the codebase             |
| `npm run typecheck` | Type-check without building |

---

## Development Workflow

### 1. Create a branch

```bash
git checkout -b feature/feature-name
```

### 2. Make the change

Keep changes focused and avoid unrelated modifications.

### 3. Test locally

Run, where applicable:

```bash
npm run lint
npm run test
npm run build
```

### 4. Commit

Use clear commit messages. Examples:

```
feat: add project enquiry form
fix: improve mobile navigation
refactor: simplify article card
docs: update setup instructions
```

### 5. Open a pull request

Include:

- What changed
- Why it changed
- Screenshots for UI changes
- Testing completed
- Known limitations

---

## Git Conventions

Avoid committing:

```
.env
.env.local
node_modules/
dist/
build/
.next/
coverage/
*.log
```

Keep secrets and private credentials out of source control.

---

## Project Roadmap

### Current focus

- Graphikx website
- Core brand experience
- Practice content
- Graphyene exploration
- Thinking platform
- Project enquiry flow

### Planned

- More Thinking articles
- Graphyene evolution
- Additional interactions
- Better content management
- Analytics and reporting
- Performance improvements

### Future

```
Work
├── Project 01
├── Project 02
└── Project 03
```

The Work section will be introduced when Graphikx has real projects to showcase.

When it arrives, add it to the navigation without replacing another section. It sits between what Graphikx can do and what Graphikx has done:

```
Practice · Work · Thinking · Graphyene · Studio · Start a project ↗
```

- Hover hint: **What we've made**, with "Projects · Stories · Outcomes"
- Landing headline: **Things we've made with other people.**
- Supporting line: A collection of products, experiences, and design problems we've had the chance to work through.

### Navigation voice

Navigation labels stay clear, quiet, human and confident. Use Practice, Thinking, Graphyene, Studio and Start a project. Avoid generic labels such as Services, Solutions, Insights, Resources, About Us, Get in Touch or Book a Call. All navigation copy lives in `frontend/src/content/navigation.ts`.

---

## Contribution

Graphikx is developed as a shared project. Before making a change:

1. Understand the existing component and content structure.
2. Reuse existing components where possible.
3. Follow the established naming conventions.
4. Test responsive and accessible states.
5. Keep the visual language consistent with Graphikx.

For larger changes, document the reason behind the change before implementation.

---

## License

[Add the appropriate license here.]

For private or commercial repositories, do not add an open-source license unless the project owner intends to make the code available under those terms.

---

<div align="center">

### Graphikx

**Make sense of it.**

A design studio exploring better ways to make digital products clearer, more useful, and more human.

[Website URL] · [LinkedIn](https://www.linkedin.com/company/graphikxstudio/) · [design@graphikx.in](mailto:design@graphikx.in)

</div>
