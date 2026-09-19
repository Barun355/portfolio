# Component Inventory

## Global shell

### Header

- Sticky at viewport top
- 56 px height
- Same 42 rem content container as pages
- Left group: Home, Work, Blog, Resume
- Right group: search and theme controls
- Translucent background and 8 px backdrop blur
- No visible bottom shadow
- Text links use 14 px medium type and secondary color
- Hover moves text to primary color
- Keyboard focus uses a visible ring

Mobile keeps the navigation links visible. Search removes its text shortcut and becomes icon-only.

### Footer

- Full-width low-contrast muted background
- Top border
- Inner 42 rem container
- 48 px vertical padding
- Quote card first
- “Navigate” and “Connect” groups
- Repeats primary and secondary routes
- Copyright last

Measured desktop footer height on the home page: about 302 px.

### Content container

- Outer maximum: 42 rem / 672 px
- Horizontal padding: 16 px
- Inner readable width: about 640 px
- Centered at desktop
- Full width at mobile

### Oneko mascot

- Decorative 32 × 32 px pixel cat
- Fixed layer with very high z-index
- Rendered as a `div` with sprite-sheet background
- Audited asset: `/oneko/oneko-tora.gif`
- Sits at 16 px from the top/left when idle and follows pointer movement
- It can resemble a header logo in a static screenshot, but it is an independent decorative layer

### Page title block

- H1
- One muted supporting sentence
- Consistent top spacing
- Used on Projects, Work, Blog, Gears, Setup, Terminal, Books, Movies, and Resume

## Navigation and controls

### Text navigation link

States:

- Default: secondary text
- Hover: primary text
- Focus-visible: ring
- Active-page styling is subtle; route context depends mainly on title

### Search trigger and command dialog

- Search icon
- `Ctrl K` keyboard hint on desktop
- Accessible trigger name
- Opens blog-oriented command search
- Search should support keyboard movement, dismissal, and direct article navigation

### Theme switch

- Icon-only button
- Accessible label changes between light and dark mode
- Sun/moon icons transition opacity and transform over 200 ms
- User choice persists across navigation

### Copy action

- Used for email and code/settings content
- Icon changes or toast confirms success
- Buttons can be hidden until parent hover on desktop

### Standard button

- Compact 14 px medium label
- Low-contrast 1 px border
- Small radius or full pill depending on use
- Hover background change
- Active scale: 0.98
- Disabled state blocks pointer events and reduces opacity

## Home components

### Identity block

- Avatar
- Name H1
- Role descriptors
- Inline email/copy control
- One-line bio
- Music/status row
- Social icon list

### Social icon link

- Small square/circle target
- Muted default color
- Primary hover color
- Tooltip or accessible label expected

### Compact experience row

- Company and optional status
- Role
- Date
- Location
- Expand-details button
- Mobile-specific short labels

### Current-status badge

- Small green dot
- “Working” text
- Soft background
- Dot uses a 2-second pulse

### Directory row

- Title
- One-line description
- Entire row linked
- 64 px measured height on desktop
- 12 px horizontal and 10 px vertical padding
- Rounded XL border box with card background
- Hover changes the card to a muted surface
- Vertical list with 8 px gaps
- Used for development and personal destinations

## Work components

### Full experience record

- Company/role/date/location header
- Technology list
- Responsibility/outcome bullets
- Current status
- Repeated in chronological order

### Technology badge

- Small icon or text
- Compact spacing
- Wraps across lines
- Secondary visual importance

## Project components

### Project row

- Full-row external link
- H2 title
- One-line description
- Bottom divider
- Horizontal desktop and stacked mobile layout

There is no live internal project-detail component in the audited deployment.

## Blog components

### Category filter

- Label and article count
- Selected/unselected states
- “Show all” disclosure for more categories
- Wraps on small screens

### Blog row

- Full-row link
- H3 title
- Description
- Category tags
- Date
- “Read more” accessory

### Article cover

- 16:9 image
- Full readable width
- About 10 px radius
- Descriptive alt required

### Article prose

- Sans-serif body
- Serif headings
- Inline links, lists, images, blockquotes, and code
- 640 px maximum reading width

### Heading anchor affordance

- H2 shows `##` on desktop hover
- H3 shows `###`
- 300 ms transition
- Marker sits left of the reading column

### Reading-position control

- Floating black pill near bottom center
- Current heading label
- Circular progress indicator
- Should remain keyboard and screen-reader friendly

### Share control

- Compact outlined button
- Opens share options
- Requires graceful clipboard fallback

### Comments

- Labelled Comments region
- Visually separated after article body

### Related-post row/card

- Three article recommendations
- Same title, summary, date language as the blog index
- “View All Blogs” continuation action

## Supporting components

- Gear/product link card
- Numbered list item
- Instruction step
- Download file row
- Expandable settings panel
- Code block with copy action
- Book/movie collection row
- Resume iframe wrapper
- Quote card
- 404 recovery button group
- Toast notification region

## Component rules worth retaining

- Shared data between previews and full pages.
- Entire list row as the click target.
- One component language across professional, writing, and personal pages.
- Interaction feedback without decorative shadows.
- Accessibility labels on icon-only controls.
- Responsive content changes through short labels, wrapping, and stacking rather than separate layouts.
