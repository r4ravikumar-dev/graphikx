# Graphikx · Premium design direction

A study of five production design-studio sites, what makes them feel premium and mature, and a proposed structure for Graphikx based on it.

References: [Visuvate](https://visuvate.com/) · [Studio RS](https://studiors.be/) · [Havu](https://www.havu.cc/en) · [Creativeans](https://www.creativeans.com/) · [Levo Studio](https://levo-studio.com/)

---

## 1. What each reference does

| Studio | Feel | Type | Signature moves |
| --- | --- | --- | --- |
| **Visuvate** | Dark, cinematic, product-led | Display 92–150px, medium weight, one italic serif word in the hero ("Crafted *Websites*") | Hero with a live product mock under it. A pinned 3D carousel of work behind a 150px "Our Works". Bento grid for the approach. FAQ accordion. Big closing statement over a giant logo mark. |
| **Studio RS** | Editorial, confident, crafted | Grotesk up to 190px, italic serif accents ("VOIR, *avant de lire.*"), serif body text | A manifesto whose words light up as you scroll. Numbered section labels ("02 · Projets en image"). A horizontal project rail. A giant "La MÉTHODE" with full-screen sticky steps (Écouter → Dessiner → Construire → Livrer). Services as a list of large type with hairlines. A 3-step contact form. A giant wordmark in the footer. Alternating dark and light bands. |
| **Havu** | Calm, systems-minded, mature. **Closest to Graphikx's positioning.** | One family, 40px section headings, a 90px hero, tiny letter-spaced labels | Small uppercase index labels with a rule ("01 ── Issue"). A heading on the left with a numbered problem list on the right. A process loop drawn as a diagram. Services with big faint numerals. A vertical step timeline (Discover → Define → Explore → Build → Learn). A marquee of deliverables. Team cards, including pixel characters. A pixel "LESS IS MORE" sign-off. |
| **Creativeans** | Warm, editorial, established | Serif display 90px with italic ("Build That *Matters*") | A floating pill navigation dock. Press logos. A row of key numbers (1962 · 289+ · 9 · 55+). Solution panels in solid colours that stack. Large serif testimonials. |
| **Levo Studio** | Technical, restrained, extremely spacious | 116px hero, 48px section heads, mono microcopy | Each service gets a full-screen scene. A manifesto whose words highlight as you scroll, with accent-coloured keywords. Animated line diagrams explain each service (interface → api/workers → postgres). Near-monochrome with one amber accent. The page is 24,000px tall. |

## 2. Why they read as premium and mature

1. **Extreme scale contrast.** Headlines run 90–190px against 12–17px body text, a 6–10× ratio. Graphikx's largest is 56px over 16px body, only 3.5×, so everything reads at a similar volume.
2. **Space is the luxury.** One idea per screen. Sections are often a full viewport tall with 120–200px of vertical padding. The pages are 10,000–24,000px tall but hold less text than Graphikx's 7,300px homepage.
3. **Very little text per screen.** A headline, one or two sentences and one action. The detail lives one click deeper.
4. **A quiet structural voice.** Small uppercase or mono labels ("01 ── Approach"), hairline rules and numbered lists organise the page without boxes.
5. **Few cards.** Lists, rules and whitespace do the grouping. Cards appear only for real objects such as projects and people.
6. **One expressive typographic move.** A single italic serif word inside a sans headline (Visuvate, Studio RS, Creativeans), or accent-coloured keywords (Levo). Used once per headline, never everywhere.
7. **Proof, shown not told.** Work imagery, diagrams of the process, numbers, testimonials, the team. Havu and Levo prove their thinking with diagrams rather than client work, which is the model for Graphikx until real projects exist.
8. **Scroll as narrative.** Word-by-word manifestos, sticky step sequences, horizontal rails and marquees. Each is used once, for the part of the story it suits.
9. **Restrained colour.** Near-monochrome plus one accent. Studio RS alternates dark and light bands; Graphikx deliberately doesn't, and marks chapters with a muted tone of the current theme instead.
10. **Confident endings.** A huge closing line, the email as a giant link, and an oversized wordmark in the footer.

## 3. Where Graphikx is today

| | Graphikx now | References |
| --- | --- | --- |
| Homepage height | 7,272px | 10,000–24,000px |
| Words on the homepage | ~1,080 | Roughly 400–700 |
| Headings | 40 | 10–20 |
| Cards | 18 | 0–12, mostly real objects |
| Largest type | 56px | 90–190px |
| Section padding | 60px | 120–200px, often a full viewport |
| Imagery or diagrams | Almost none | Central |

**Diagnosis:** every section uses the same recipe (eyebrow, heading, paragraphs, list or cards, microcopy) at similar sizes and short spacing. Nothing dominates, so nothing feels important.

---

## 4. Proposed design system changes

### 4.1 Space

| Token | Desktop | Tablet | Mobile |
| --- | --- | --- | --- |
| Section padding (block) | 160px | 120px | 96px |
| Chapter (full-screen sections) | `min-height: 100svh` | same | auto |
| Space between title and content | 64–96px | 56px | 40px |
| Content width | 1280px, 12-column grid, 24px gutters | 8 columns | 4 columns |
| Reading measure | 640px max for paragraphs | same | full width |

### 4.2 Typography: add a display tier above v1

The v1 scale stays for everything functional (body, labels, captions, headlines). Add an **expressive tier** used at most once per section:

| Role | Desktop | Tablet | Mobile | Line height | Use |
| --- | --- | --- | --- | --- | --- |
| Display XXL | 144px | 104px | 64px | 95% | Homepage hero only |
| Display XL | 96px | 72px | 48px | 100% | Chapter titles ("Practice", "How we think") |
| Display L to S (v1) | 56 / 48 / 40 | ... | ... | 110% | Statements, page titles |

- **Italic serif accent:** one word per hero or chapter title set in an italic serif, for example "Make *sense* of it.". This needs a second typeface alongside Stone's Montserrat, such as Instrument Serif or Fraunces Italic.
- **Index labels:** "01 ── Practice" in 12px uppercase, letter-spaced, with a hairline rule.

### 4.3 Colour and surfaces

- Keep Stone's neutrals with the slate-blue emphasis, plus one optional brand accent from the logo blue (#2059DF), used for keywords and the main action only.
- Alternate surfaces by chapter: light, dark, light. This replaces the current muted bands.

### 4.4 New layout components

| Component | Inspired by | Replaces |
| --- | --- | --- |
| `ChapterHeader`: index label, Display XL title, short intro aligned right | Havu, Studio RS | SectionIntro and eyebrows |
| `StickySplit`: heading pinned on the left while content scrolls on the right | Havu, Studio RS | NarrativeBlock |
| `Manifesto`: a paragraph whose words light up as you scroll, with accent keywords | Studio RS, Levo | Point-of-view paragraphs |
| `IndexList`: rows of large type with hairlines, a number, an arrow, and a hover hint or preview | Studio RS services, Havu services | Capability cards, TopicGrid |
| `StepTimeline`: full-screen sticky steps with a large numeral | Studio RS method, Havu process | ProcessSteps |
| `LineDiagram`: animated line diagrams that explain an idea | Levo, Havu | Architecture cards, part of FlowComparison |
| `Marquee`: one slow line of words | Studio RS, Havu | Tag clouds |
| `BigStatement`: a closing line, the email as a giant link, one button | Studio RS, Visuvate | ProjectInvitation |
| `GiantWordmark`: an oversized logo across the footer | Studio RS, Visuvate | The current footer heading |

---

## 5. Page structures

Each line below is roughly one screen.

### Home: about 10 chapters, about 450 words

1. **Hero (full viewport).** A Display XXL "Make *sense* of it.", one sentence and "Start a project ↗". A meta row along the bottom: Digital design studio · Product · UX · UI, plus a quiet scroll indicator.
2. **Manifesto.** "People don't experience screens. They experience what happens between them…", with words lighting up as you scroll.
3. **The problem (`StickySplit`).** "Products rarely become complicated all at once." stays on the left while the layered lines build up on the right, ending on "Less confusion. Less friction. More clarity."
4. **Practice (`IndexList`).** Seven rows: `01  Product Design  Shape a product around what people need  →`. Hovering reveals a one-line hint. Ends with "Explore the practice".
5. **How we think (`StepTimeline`).** Understand, Question, Simplify, Shape, Refine. One step per scroll, with a large numeral.
6. **Graphyene (on the muted surface).** A Display XL "Graphyene", one line and an animated `LineDiagram` (Foundation → Tokens → Components → Patterns → Experiences). The principles run in a marquee.
7. **Thinking.** Three articles as editorial rows (category · title · read time), not cards.
8. **Maybe this sounds familiar.** One large "Maybe…" line at a time, then "You don't need the perfect brief."
9. **Mascot moment (full viewport).** The looping dialogue on its own.
10. **Closing (`BigStatement`).** "Bring us something worth figuring out.", the email as a giant link and "Start a project ↗". The inline homepage form moves to the Start a Project page.

**Footer:** the `GiantWordmark` plus the current four columns, with more space.

### Practice

1. A hero with a Display XL title and one sentence.
2. Three chapters (Product thinking, Interface thinking, Product building). Each is a `StickySplit` with its practice areas as expanding `IndexList` rows. The detail (what we work on, the nudge line) opens inline instead of always being shown.
3. "These aren't separate pieces": an animated `LineDiagram` of Product → UX → UI → Interaction → Build → Evolve.
4. The approach as a `StepTimeline`.
5. "You don't have to know what to ask for": the large "Maybe…" lines.
6. `BigStatement`.

### Thinking

1. A hero with "We like to think about the things people usually overlook." and the four observations as a `Manifesto`.
2. The featured article as one large editorial block, with space for a cover image.
3. All articles as a filterable list of large-type rows with hairlines.
4. `BigStatement` ("Have a question we've missed?").

**Article pages:** a 680px reading column, a larger article title (Display L), section headings at Headline L, pull quotes in the italic serif, and full-bleed visuals.

### Graphyene

1. A dark hero: "Products grow. Design gets complicated."
2. A `Manifesto`: "The challenge isn't making more things…"
3. "A system should…" as an `IndexList` of six rows.
4. The principles as a `StepTimeline`, or six large numbered rows.
5. The architecture as a full-screen animated `LineDiagram`.
6. The explorations as a horizontal rail of four large question cards.
7. "Still becoming": the status badge, with the current focus areas as a list.
8. `BigStatement`.

### Studio

1. A hero: "We didn't start Graphikx to make more screens."
2. A `Manifesto` of the origin story.
3. The beliefs as an `IndexList`.
4. How we work as a `StepTimeline`.
5. People: a large founder portrait (needs a photo), name and quote. The team line as a `BigStatement`-style moment.
6. Currently exploring: a horizontal rail.
7. Mascot moment.
8. `BigStatement`.

### Start a Project

1. A hero: "You don't need a perfect brief." with a short list.
2. **A step-by-step form**, one question group per step with a progress indicator: 1. About you · 2. The project · 3. Where you are. This replaces the long single form.
3. The confirmation stays as it is.

---

## 6. Interaction and motion rules

- **One showpiece per page.** A manifesto, a sticky sequence or a diagram, not all three on every page.
- **Hover is quiet:** a hairline underline, an arrow nudge and a one-line hint. No scaling cards.
- **Sticky sequences use spatial springs.** Word highlights are linked to scroll position, not timers.
- **Illustrations loop slowly.** Minimal 2D line art on a faint dot grid, with soft tinted surfaces and one brand-blue moving accent. Lines draw in once, then each scene runs a slow 7–12s loop (a pulse travelling a path, layers drifting, a lens scanning). Loops run only on screen and pause on hover. The mascot dialogue is the only other looping element.
- **Respect reduced motion.** Sticky sections become plain stacked sections, manifestos render fully lit, and illustrations show their finished still.
- **Navigation:** keep the current header. Consider a floating pill dock that appears after the hero, like Creativeans, as an optional enhancement.

## 7. What not to copy (yet)

- **Work carousels and project rails** (Visuvate, Studio RS, Creativeans) need real case studies. Plan the Work section for when they exist, as the navigation spec already says.
- **Pricing tables, press logos, client counts and testimonials** need real proof. Don't add placeholders, because invented numbers undermine the mature tone.
- **3D and WebGL scenes** look impressive but cost performance and maintenance. Graphikx's line diagrams and the mascot give character more cheaply.

## 8. Suggested build order

1. **System.** Add the space tokens, the display tier, the italic serif accent and the index labels, then build the nine new layout components.
2. **Home**, which carries the biggest change in perceived quality.
3. **Practice, then Graphyene, then Studio, then Thinking.**
4. **The step-by-step form on Start a Project.**
5. **A review pass.** Fewer words, check every page against "one idea per screen", and test on mobile.

## 9. Decisions needed

1. **Type scale.** v1 caps the desktop at 56px. Should the expressive tier (Display XL 96px and Display XXL 144px) be added as a v2 extension?
2. **Italic serif accent.** Should a second typeface be added for single accent words, such as Instrument Serif or Fraunces Italic?
3. **Accent colour.** Should the logo blue (#2059DF) be used as one sparing brand accent, or should everything stay on Stone's neutrals?
4. **Copy reduction.** Is it OK to cut each page to roughly half its current words and move the detail into expandable rows and inner pages?
5. **Homepage form.** Should the homepage close with a statement and the email instead of the full form?
6. **Imagery.** Is there anything to show, such as a founder photo, interface explorations or sketches? Diagrams can carry the visuals until then.

---

## 10. Responsive system (built)

Measured on the references at 375, 768 and 1920px: gutters grow with the screen (about 20 → 35 → 64–80px), display type keeps growing past desktop (Havu and Visuvate reach 92px h1s at 1920; Studio RS's display word reaches 272px), content goes nearly full width on large screens (1750–1830px at 1920), and body text stays at 15–16px throughout.

| Tier | Width | Hero | Gutter | Layout |
|---|---|---|---|---|
| mobile-sm | < 390 | 54–64px | 16–20px | single column; display type eases to 85% |
| mobile-lg | 390–767 | 64–90px | 20–36px | single column; menu toggle; compact index rows |
| tablet | 768–1023 | 90–112px | 36–47px | two-column grids; split layouts stack; horizontal diagram |
| desktop-sm | 1024–1439 | 112–144px | 47–64px | sticky 5/7 splits; one-line index rows |
| desktop-lg | 1440–1919 | 144–171px | 64–85px | the approved desktop design |
| wide | 1920+ | 171–208px | 85–112px | content up to 2080px; illustrations 1.45× |

Display/headline roles, gutters and section spacing are fluid (`clamp()`) between anchors at 320, 390, 1440 and 2560px; labels, body and captions step at 768 and 1024. Source: `src/theme/breakpoints.ts`, `typeScale.ts`, `spaceScale.ts`, applied through the theme's `adaptations` with custom `widthBreakpoints`.

---

## 11. Inner pages: structure and consistency (built)

### What the references do across pages

| Pattern | Seen on | Graphikx rule |
|---|---|---|
| One inner-page hero frame: label, big H1 with one accent, one sentence, a meta row of facts | Havu service pages (duration, price), Studio RS, Visuvate ("Let's *Connect*") | Every inner page opens with `EditorialHero` at Display XL (the homepage alone gets XXL and full height) |
| The same ending on every page | Studio RS ("Contact" closes every page), Visuvate | Every page closes with `BigStatement` and the email |
| An FAQ chapter on service and about pages | Studio RS, Havu | Expandable hairline rows (`FaqList`) on Practice, Studio and Start a Project |
| Services as large rows; detail expands or links | Studio RS, Havu | Practice capabilities as expandable `IndexList` rows, deep-linkable by `#slug` |
| About: founder note, principles as numbered statements, values | Studio RS, Havu, Visuvate | Studio: manifesto, beliefs, process, founder, current explorations |
| Blog: H1, filter, list | Visuvate, Creativeans | Thinking: filter chips over large editorial rows, not cards |
| Contact: serif-accent H1, form in a panel, details beside it | Visuvate | Start a Project: a three-step form with the email beside it |

### Shared frame (every page)

1. `EditorialHero` with an `IndexLabel`, one *accent* word, one sentence, a mono meta row and a looping illustration.
2. Numbered chapters (`01 ── LABEL`) built only from the shared components: `ChapterHeader`, `StickySplit`, `Manifesto`, `IndexList`, `BuildUp`, `StepTimeline`, `LineDiagram`, `Marquee`, `QuestionRail`, `FaqList`.
3. Every section follows the device's light or dark mode. Never flip a section to the opposite scheme: it jars people mid-scroll. To set a chapter apart, use the theme's muted surface (`tone="muted"`), never adjacent to another muted chapter. The footer uses the muted surface too.
4. `BigStatement` to close, then the footer.

### Page structures

**Practice:** hero → 01–03 the three groups (sticky title, expandable capability rows numbered as on the homepage) → 04 "These aren't *separate* pieces" (muted, line diagram) → 05 approach (step timeline) → 06 FAQ → close.

**Graphyene:** hero (status meta) → 01 the problem (build-up) → 02 the idea (manifesto) → 03 "A system should…" (rows) → 04 principles (muted, step timeline) → 05 architecture (line diagram) → 06 explorations (question rail) → 07 still becoming (rows) → close.

**Studio:** hero → manifesto → 01 why we started (questions build-up) → 02 beliefs (expandable rows) → 03 how we work (muted, step timeline) → 04 the founder (quote, bio) → 05 currently exploring (question rail) → mascot moment → close.

**Thinking:** hero → manifesto (the overlooked details) → 01 featured article → 02 all thinking (filter and rows) → close. **Article:** reading-column header (back link, category, Display L title, intro, mono meta) → body → keep thinking (rows) → close.

**Start a Project:** hero → 01 the form (three steps: About you, The project, Where you are; email and LinkedIn beside it) → 02 FAQ → close.
