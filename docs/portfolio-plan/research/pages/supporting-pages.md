# Supporting Pages

Locked 2026-09-19: Gears, Setup, Terminal, Books, Movies, and RSS are removed from Barun’s site. Resume stays as an HTML page. Notes below are the Ramx audit only.

## Gears

URL: https://ramx.in/gears

Purpose: curated tools and equipment.

Structure:

1. Page title and introduction
2. Devices & Accessories
3. Web Extensions
4. Software
5. Quote and footer

Each item is a linked card/row with an H3 title. The page uses grouped categories and the same narrow container as the rest of the site.

## Setup

URL: https://ramx.in/setup

Purpose: step-by-step VS Code/Cursor environment guide.

Structure:

1. Page title and introduction
2. Download necessary files
3. Install extensions
4. Configure VS Code/Cursor
5. Expandable `settings.json`
6. Complete setup
7. Quote and footer

Components:

- Numbered instruction rows
- Download links
- Keyboard shortcut presentation
- Expand/collapse control
- Code/settings panel
- Copy affordance

## Terminal

URL: https://ramx.in/terminal

Purpose: Zsh terminal setup guide.

Structure:

1. Page title and introduction
2. Prerequisites
3. Linux installation disclosure
4. Install required packages
5. Configure Zsh
6. Configure Fastfetch
7. Expandable `.zshrc` configuration
8. Expandable Fastfetch configuration
9. Apply configuration
10. Source repository
11. Quote and footer

Components:

- Numbered steps
- Prerequisite cards
- Shell code blocks
- Copy-code controls
- Repository link

This is a documentation page about a terminal setup, not an interactive terminal portfolio.

## Books and Movies

URLs:

- https://ramx.in/books
- https://ramx.in/movies

Purpose: personal taste and personality.

Pattern:

- Page title and introduction
- Repeated collection rows/cards
- Item title and secondary metadata such as author
- Quote and footer

Books are grouped by themes including:

- Power & Influence
- Mastery & Focus
- Discipline & Grit
- Meaning & Mind
- Habits & Systems
- Attention & Dopamine
- Creativity
- Big Ideas

Movies presents a ten-item list with title and year, including Ford v Ferrari, Whiplash, The Social Network, Rush, Steve Jobs, The Founder, Silicon Valley, Black Swan, The Big Short, and F1.

These pages humanize the owner but provide little direct hiring proof.

## Resume

URL: https://ramx.in/resume

Structure:

1. Page title and introduction
2. Embedded Google Drive document
3. Quote and footer

Implementation observed:

- Titled iframe: `Resume`
- Source: Google Drive preview URL
- Width: full inner container
- Height: `70vh`
- Minimum height: 500 px
- Measured mobile width: about 356 px inside a bordered wrapper

The accessibility tree cannot inspect iframe contents. A direct download link was not visible outside the embedded viewer.

## Not found

Observed at `/projects/the-quest` and `/does-not-exist`.

Structure:

1. Global header
2. Large `404`
3. H1 “Page not found”
4. Explanation
5. Home and Blog recovery actions
6. Quote and footer

Behavior:

- Correct HTTP 404 response.
- `robots=noindex`.
- Uses the home-page canonical and default social metadata.

## Shared observations

- All supporting pages retain header, footer, theme switch, search, narrow width, and title-block pattern.
- Their value comes from consistency, not custom layouts.
- For Barun, security labs, architecture notes, and technical writing should replace low-priority lifestyle collections.
