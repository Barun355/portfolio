# Home Page

URL: https://ramx.in/

## Purpose

Fast professional overview plus gateways into deeper content. It behaves more like a compact personal index than a marketing landing page.

## Section order

### 1. Global header

- Home, Work, Blog, Resume
- Blog search button with `Ctrl+K` hint on desktop
- Light/dark theme switch
- Sticky, translucent background with 8 px backdrop blur

### 2. Identity hero

- Pixel-art/avatar image
- H1: owner name
- Inline identity: Engineer · Polymath · email
- Copy-email control
- One-sentence personal summary
- “Last played” Spotify-style status
- Compact social icon row

The hero avoids a large headline, sales pitch, or full-screen height. Identity and contact appear immediately.

### 3. Experience preview

- H2 section label
- Three compact experience rows
- Company, role, abbreviated date, and location
- Green “Working” status on the current role
- Expand-details controls
- “Show all work experiences” action

Desktop shows long date/location labels. Mobile uses abbreviated variants such as `Jan 26 – Present` and `Hyd, IN`.

### 4. Blog preview

- Three recent article rows
- Title, one-line summary, date, and “Read more”
- “Show all blogs” action

### 5. Development directory (Ramx only — removed for Barun)

- Gears
- Setup
- Terminal

### 6. Personal directory (Ramx only — removed for Barun)

- Books
- Movies

Barun Home replaces these with selected systems, then writing.

### 7. Footer

- Random quotation card
- Navigate link group
- Connect/social link group
- Copyright

## Layout

- **Measured:** global content container is 42 rem / 672 px including 16 px side padding.
- **Measured:** readable inner width is about 640 px.
- **Measured:** page top padding is 32 px below the 56 px header.
- **Measured:** major sections use about 40 px vertical separation.
- **Measured:** at 390 px, containers become full width with 16 px side padding.

## Components

- Sticky header
- Profile identity block
- Copy control and toast
- Social icon row
- Current-status badge
- Compact experience row
- Expandable details
- Blog row
- Directory row
- Section heading
- Quote card
- Footer directories
- Floating music/status element
- Decorative pointer-following pixel cat

## Motion

- Viewport entry: opacity 0 and `translateY(20px)` to visible.
- Duration: 350 ms.
- Stagger: 0, 50, 100, 150, and 200 ms.
- Current-role dot pulses every 2 seconds.
- Link colors and controls transition over 150 ms.

## Responsive behavior

- Same information architecture on desktop and mobile.
- Header remains one row; no mobile menu.
- Logo/ornament behavior varies by viewport, but navigation remains the primary anchor.
- Experience dates and locations switch to shorter labels.
- Horizontal experience layout compresses without changing section order.

## Reusable ideas

- Immediate identity, availability, and contact.
- Three-item experience and writing previews.
- Compact rows instead of oversized cards.
- Progressive disclosure for experience details.
- Footer as complete navigation fallback.

## Do not copy

- “Polymath” positioning without proof.
- Lifestyle sections above stronger engineering or security evidence.
- Music status if it competes with recruiter-focused information.
- Missing or empty image alternatives unless images are deliberately decorative.
