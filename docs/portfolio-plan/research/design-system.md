# Design System

## Visual direction

Quiet editorial minimalism:

- Near-monochrome palette
- Narrow reading column
- Almost no elevation
- Borders and spacing create hierarchy
- Sans-serif interface with serif article headings
- Content and interaction carry personality

## Typography

### Families

- **Hanken Grotesk:** default interface and body family
- **Instrument Serif:** article H1, H2, and H3
- **Geist Mono:** code
- **Geist:** loaded as supporting UI font but not the measured body default

### Weights

- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

### Measured scale

- Base body: 16 px / 24 px
- Small UI and descriptions: 14 px / 20 px
- Extra-small metadata: 12 px / 16 px
- Standard page H1: 24 px / 32 px, bold
- Standard section H2: 20 px / 28 px, bold
- Article H1 desktop: 48 px / 60 px, Instrument Serif 400
- Article H2: 30 px / 36 px, Instrument Serif 400
- Article H3: 24 px / 32 px, Instrument Serif 400
- Article H1 mobile: approximately 36 px on the defined `text-4xl` step

### Tracking

- Tight: `-0.025em`
- Wide: `0.025em`
- Wider: `0.05em`
- Widest: `0.1em`

## Color tokens

Values below combine measured CSS LAB values with practical sRGB approximations.

### Light theme

- Background/card: `lab(97.8656% 0 0)` — approximately `#F8F8F8`
- Foreground: `lab(4.39474% .369586 .132287)` — approximately `#0D0D0D`
- Primary: `lab(7.78201% 0 0)` — approximately `#171717`
- Primary foreground: `lab(98.26% 0 0)` — approximately `#FAFAFA`
- Muted: `lab(96.52% 0 0)` — approximately `#F5F5F5`
- Muted foreground: `lab(48.496% 0 0)` — approximately `#737373`
- Secondary text observed: `rgb(144,144,146)` — `#909092`
- Border/input: `lab(90.952% 0 0)` — approximately `#E5E5E5`
- Focus ring: `lab(66.128% 0 0)` — approximately `#A1A1A1`
- Current status: Tailwind green-500 range, approximately `#22C55E`

### Dark theme

- Background: approximately `#0D0D0D`
- Foreground: approximately `#FAFAFA`
- Muted surface: approximately `#262626`
- Muted foreground: approximately `#A3A3A3`
- Border: white at 10% opacity
- Primary: approximately `#D4D4D4`
- Primary foreground: approximately `#171717`

### Semantic

- Destructive token uses a strong red LAB value.
- Chart variables exist but charts were not part of the audited pages.
- Most pages remain neutral; green is reserved for active/current status.

## Spacing

- Base spacing token: 0.25 rem / 4 px
- Common horizontal page padding: 16 px
- Header height: 56 px
- Main top padding: 32 px
- Major section separation: 40 px
- Footer vertical padding: 48 px
- Article H2: 32 px top, 16 px bottom
- Article H3: 24 px top, 12 px bottom
- Blockquote left padding: 16 px
- Common inline gaps: 4, 6, 8, 12, 16, and 24 px

The effective rhythm is an 8 px system with 4 px adjustments for compact UI.

## Widths and breakpoints

- Primary container: `max-width: 42rem` / 672 px
- Inner content after padding: about 640 px
- Article: 640 px measured
- `sm`: 40 rem / 640 px
- Additional framework container tokens exist at 20, 24, 28, 36, 42, 56, 64, and 80 rem

The design relies mainly on one breakpoint: below 640 px, rows stack and labels shorten.

## Shape

- Base radius: 0.45 rem / 7.2 px
- Medium radius: about 5.76 px
- XL radius: about 10.08 px
- Pills: fully rounded
- Cover images: about 10 px
- Inline code: 4 px

## Borders and elevation

- Standard divider: 1 px low-contrast border
- Cards rely on border/background, not shadow
- Measured header, footer, text, and standard buttons had no meaningful box shadow
- Focus uses ring rather than shadow-like elevation

## Surfaces

- Page and card surfaces are nearly identical.
- Muted surfaces separate footer, code, badges, filters, and controls.
- Header uses translucent background and backdrop blur.
- Dark mode preserves the same hierarchy by changing luminance, not introducing new accents.

## Iconography

- Small outline icons
- Usually 16 px inside compact targets
- Used for search, theme, social links, calendar/date, copy, share, external arrows, status, and code actions
- Icons support text or receive accessible names when icon-only

## Imagery

- Pixel-art identity/avatar creates personality.
- Projects index intentionally avoids imagery.
- Blog detail uses a 16:9 cover image.
- Supporting lists are mostly text/icon based.

## Token recommendation

Keep the system structure, not its exact values:

```text
color.bg
color.surface
color.text
color.textMuted
color.border
color.accent
color.success

font.ui
font.editorial
font.mono

space.1 = 4
space.2 = 8
space.3 = 12
space.4 = 16
space.6 = 24
space.8 = 32
space.10 = 40
space.12 = 48

radius.sm
radius.md
radius.lg
radius.pill

content.readable = 640
content.shell = 672
header.height = 56
```
