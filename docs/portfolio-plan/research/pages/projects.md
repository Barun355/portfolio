# Projects Page

URL: https://ramx.in/projects

## Purpose

Scannable directory of products and experiments.

## Section order

1. Global header
2. H1 “Projects”
3. Short supporting sentence
4. Twelve project rows
5. Quote card
6. Global footer

## Project row

Each row contains:

- Project title as H2
- One-line description
- Full-row link
- Divider between entries
- Hover color feedback

No thumbnail, long technology list, metric, role label, or secondary action appears in the index. This makes the page unusually fast to scan.

## Listed work

- NotesBuddy
- Appwrite MCP Server
- Syncify
- Pasandida Aurat
- The Quest
- FestX
- I’m a chill guy
- Ram’s Space
- Intent JS
- Moonstone 2K25
- Valorant Remastered
- That Startup

## Link behavior

All observed project rows point directly to external product domains. The index does not currently link to internal case studies.

Observed examples:

- `notesbuddy.in`
- `mcp.ramx.in`
- `syncify.rocks`
- `quest.ramx.in`
- `intent-js.ramx.in`

## Project-detail finding

- `/projects/the-quest` returned HTTP 404 during the live audit.
- Project-detail routes are absent from the XML sitemap.
- A public source repository contains an older project-detail template, but it is not evidence of current live behavior.

## Layout and typography

- Same 672 px outer / 640 px inner content column.
- H1: 24 px bold on the index.
- Project titles: compact bold text.
- Descriptions: 14 px secondary text with 20 px line height.
- Rows use vertical spacing and a low-contrast bottom border, not card backgrounds.

## Responsive behavior

- Desktop row can align text and accessory content horizontally.
- At mobile width, row content stacks vertically.
- Text remains left aligned and full width.

## Reusable ideas

- Text-first project index.
- Entire row as a large link target.
- One sentence per project.
- No decorative imagery when it adds no evidence.

## Weaknesses to improve

- External-only linking prevents the portfolio from explaining ownership and decisions.
- No visible role, date, result, security relevance, or source-code state.
- No categories or filters.
- No clear distinction among products, client work, experiments, and open source.
- Missing internal case studies weakens recruiter evaluation.
