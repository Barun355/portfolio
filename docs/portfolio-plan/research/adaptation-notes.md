# Adaptation Notes for Barun

## Target position

Barun should be presented as:

**Software and AI engineer building secure production systems, targeting engineering roles in cybersecurity companies.**

The portfolio must prove existing engineering depth while making the security direction credible. It should not claim mature SOC, penetration-testing, or AppSec experience without evidence.

## Keep from Ramx

### Information design

- Narrow, readable content column
- Small sticky header
- Immediate identity and contact
- Home previews leading to deeper pages
- Text-first project and writing lists
- Dedicated work page
- Dedicated writing system
- Search command
- Complete footer directory

### Visual system

- Restrained near-monochrome palette
- Strong typography instead of decorative cards
- Light/dark modes
- Minimal borders and shadows
- Sans-serif UI, serif editorial headings, monospace technical content
- Consistent 4/8 px spacing rhythm

### Interaction

- 150 ms micro-interactions
- Short staggered entrance motion
- Reduced-motion support
- Copy email/code feedback
- Expandable details
- Article table of contents and progress
- Category filtering

## Change for Barun

### Primary navigation

Recommended:

1. Home
2. Work
3. Security
4. Writing
5. Resume

Projects should be reachable from Home and Work, or replace Resume in the header if five text links become too tight. Resume can remain a clear header action.

### Home hierarchy

Recommended order:

1. Identity and cybersecurity-company goal
2. Current role
3. Selected secure systems
4. AI engineering evidence
5. Security engineering evidence
6. Recent writing/labs
7. Contact

Replace Ramx Development and Personal directories with:

- Secure Systems
- AI Engineering
- Application Security
- IoT Security
- Labs and Writing

### Projects

Keep Ramx’s compact index, but every featured row should open an internal case study before offering external links.

Each case study should answer:

1. What problem existed?
2. What did Barun own?
3. How does the system work?
4. What security risks existed?
5. What controls were implemented?
6. What measurable result followed?
7. What remains confidential?

Priority case studies:

- Smart Weight System
- Simple Form and ransomware hardening lesson
- Mailchimp integration
- Healthcare application
- AI Answer Engine
- Manufacturing ERP

### Security page

Use a proof-led structure:

- Existing secure engineering work
- Authentication and identity
- API and deployment hardening
- IoT trust boundaries
- AI-security learning
- Labs, reports, writeups, and certifications
- Current boundaries: what is learned versus professionally practiced

### Interactive layer

An optional shell can fit the identity, but it must be progressive enhancement.

Useful commands:

- `whoami`
- `experience`
- `projects`
- `security`
- `ai`
- `writing`
- `contact`
- `help`

Rules:

- Standard navigation remains visible.
- No forced boot animation.
- No fake “hacking” output.
- Commands reveal the same verified content as normal pages.
- Keyboard, touch, screen reader, and reduced-motion support remain complete.

### Visual product demonstrations

Use interaction only where it proves engineering:

- Animated architecture flow for Smart Weight System
- QR/device-to-cloud event walkthrough
- Controlled AI Answer Engine multi-provider request visualization
- Interactive threat-boundary diagram
- Before/after deployment-hardening story

Provide static fallbacks and short explanations. Do not embed client systems or expose sensitive details.

## Remove from the Ramx pattern

- Books, movies, and gear pages as top-level destinations
- Music status
- Repeated technology walls
- External-only project links
- Generic lifestyle writing in the primary recruiter path
- Stale project-detail routes
- Generic article social images
- Global structured data copied unchanged to every page

## Content rules

- Verified facts first.
- Results before tool lists.
- Security relevance must be tied to real implementation.
- Learning must be labelled as learning.
- Confidential systems use anonymized diagrams and sanitized screenshots.
- Every major claim should link to code, a live product, a report, a merged contribution, or a clear case study.

## Suggested design-token direction

Preserve Ramx’s neutral foundation, then add one security/AI accent:

- Background: warm near-white and near-black
- Text: high-contrast neutral
- Accent: controlled electric cyan, blue, or green
- Success: green only for verified/current states
- Warning: amber for disclosed limitations
- Mono type: commands, logs, identifiers, architecture labels
- Serif type: optional for writing only

## Accessibility requirements

- 44 px touch targets where controls are isolated.
- Visible focus state.
- Skip link.
- Correct H1–H4 order.
- Descriptive image alternatives.
- No information encoded by color alone.
- Terminal has equivalent non-terminal navigation.
- Diagrams include text summaries.
- Motion disabled through `prefers-reduced-motion`.

## Locked 2026-09-19

Header is Home · Work · Blog · Resume. No Security or Writing label in nav.

Removed from the site: Terminal, Setup, Movies, Gears, RSS, Books.

Projects and a security page stay off-route for this build. Selected systems sit on Home. Security proof sits inside Work, systems, and writing.

Stack is HTML, CSS, and Motion. Next.js is out.

## Decision summary

Adopt Ramx’s restraint and system consistency. Do not copy its content architecture literally. Barun needs fewer personal side pages, deeper internal case studies, a first-class security evidence page, and optional interactions that demonstrate secure-system thinking rather than decorate the site.
