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

| Area                | Description                                                         |
| ------------------- | ------------------------------------------------------------------- |
| **Home**            | The Graphikx story, point of view, practice, and brand experience   |
| **Practice**        | Product, UX, UI, interaction, flow, no-code, and SaaS design        |
| **Graphyene**       | Graphikx's evolving design-system exploration                       |
| **Thinking**        | Articles, observations, and ideas around digital product design     |
| **Studio**          | The people, principles, and thinking behind Graphikx                |
| **Start a Project** | Project enquiries and conversations                                 |

A future **Work** section can be added as Graphikx begins to publish real client projects.

---

## Repository Structure

```
graphikx/
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── components/
│   ├── pages/              # or app/ depending on framework
│   ├── styles/
│   └── ...
│
├── backend/
│   ├── src/
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   ├── models/
│   ├── middleware/
│   └── ...
│
├── README.md
├── .gitignore
└── ...
```

> The exact folder structure may vary depending on the framework and project setup.

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

_Update this section with the technologies used in the project._

```
Framework:  [Next.js / React / Other]
Language:   [TypeScript / JavaScript]
Styling:    [Tailwind CSS / CSS Modules / Other]
Animation:  [Framer Motion / GSAP / Other]
Forms:      [Library]
CMS:        [CMS / Custom]
```

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

_Update this section with the technologies used._

```
Runtime:         [Node.js / Other]
Framework:       [Express / NestJS / Other]
Language:        [TypeScript / JavaScript]
Database:        [PostgreSQL / MongoDB / Other]
Authentication:  [If applicable]
Email:           [Resend / SendGrid / SMTP / Other]
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
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_ANALYTICS_ID=
```

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
PORT=5000
DATABASE_URL=
CORS_ORIGIN=
EMAIL_HOST=
EMAIL_USER=
EMAIL_PASSWORD=
```

Start the backend:

```bash
npm run dev
```

The API should now be available at [http://localhost:5000](http://localhost:5000).

---

## Environment Variables

Environment variables should **never** be committed to the repository.

Keep sensitive values inside local `.env` files or your deployment provider's environment configuration.

### Frontend

```env
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_SITE_URL=
```

### Backend

```env
PORT=
DATABASE_URL=
CORS_ORIGIN=
```

Add service-specific variables as required.

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
  "message": "We are redesigning an existing product."
}
```

> The actual request body should match the implementation in the backend.

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
│   ├── NarrativeBlock
│   ├── Statement
│   └── SectionIntro
│
├── practice/
│   ├── PracticeSection
│   ├── Capability
│   └── PracticePreview
│
├── graphyene/
│   ├── Principle
│   ├── Architecture
│   └── Exploration
│
├── thinking/
│   ├── ArticleCard
│   ├── ArticleList
│   ├── CategoryFilter
│   └── ArticleContent
│
├── forms/
│   ├── Input
│   ├── Textarea
│   ├── Select
│   └── ProjectForm
│
└── mascot/
    ├── Mascot
    └── MascotScene
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

_Update these commands to match the actual project configuration._

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

[Website URL] · [LinkedIn URL] · [Contact Email]

</div>
