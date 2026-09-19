# Motion and Interactions

## Motion philosophy

Motion is short, quiet, and functional. The site avoids large parallax scenes or constant decorative animation.

## Viewport entrance

Measured keyframes:

```text
Start: opacity 0; transform translateY(20px)
End:   opacity 1; transform translateY(0)
Duration: 350 ms
Fill: both
Easing inside keyframes: ease-out
```

Repeated list items use 50 ms staggering:

- 0 ms
- 50 ms
- 100 ms
- 150 ms
- 200 ms

The effect is attached when an item enters view.

## Page transitions

Measured View Transition CSS:

- Old view: fade out for 150 ms with ease-in.
- New view: fade in for 210 ms with ease-out after the old-view delay.
- Morphing groups: 400 ms.
- Morphing image pair uses a blur transition.

These transitions preserve continuity between internal routes without turning navigation into a showpiece.

## Micro-interactions

### Links

- Color/background/border/fill/stroke transition: 150 ms.
- Default muted text changes to primary on hover.
- Blog and project titles inherit group-hover emphasis.

### Buttons

- Hover changes muted surface or text color.
- Active state scales to 0.98.
- Disabled state reduces opacity and blocks pointer events.
- Focus-visible state adds border/ring feedback.

### Theme switch

- Sun/moon icons transition opacity and transform over 200 ms.
- Theme changes the token set instead of restyling each component independently.

### Copy controls

- Accessory button can fade from opacity 0 to visible when the parent row is hovered.
- Toast region confirms clipboard actions.

### Current status

- Green status dot uses a 2-second infinite opacity pulse.

### Loading

- Skeleton blocks use the same 2-second pulse.
- Generic spinner token: 1-second linear infinite rotation.

### Article headings

- Desktop hover reveals `##` or `###` to the left.
- Transition duration: 300 ms.

### Reading progress

- Floating bottom pill names the current article section.
- Circular indicator communicates document progress.
- Section changes should follow heading intersection, not raw scroll percentage alone.

### Oneko mascot

- A 32 px pixel-art cat uses a GIF sprite sheet and fixed positioning.
- It follows the pointer and changes sprite position to simulate movement.
- It is decorative and separate from navigation.

### Smooth scrolling

- Root scroll behavior is smooth.
- Used for heading/table-of-contents movement and back-to-top behavior.

## Interactive components

- Global `Ctrl+K` blog search
- Light/dark theme toggle
- Copy email
- Expandable experience details on home
- Blog category filtering
- “Show all” category disclosure
- Share dialog
- Code/settings copy
- Settings disclosure
- Embedded resume viewer
- Comments embed
- External project links

## Reduced motion

Measured `prefers-reduced-motion: reduce` behavior:

- Smooth scrolling becomes automatic.
- Transition and animation duration becomes `0.01ms`.
- Animation iterations become one.
- Transforms are removed.
- View-transition animations are set to zero duration and delay.

This is a strong reference pattern and should be retained.

## Motion risks

- Entrance animation on every long-list item can feel repetitive.
- Hidden-on-hover copy controls need a permanently available mobile state.
- View transitions can briefly show stale visual content if navigation and capture timing disagree; implementation should test rapid route changes.
- Floating reading controls must not cover text or mobile browser controls.
- Pointer-following decoration can distract, overlap controls, and add no recruiter evidence.

## Adaptation rule

Use motion for:

- Route continuity
- Disclosure
- Selection
- Progress
- Copy/share confirmation
- Product-demo affordances

Avoid motion for:

- Constant “hacker” effects
- Matrix rain behind long text
- Unnecessary cursor trails
- Forced boot sequences
- Delayed access to core recruiter information
