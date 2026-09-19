# Blog Pages

Index: https://ramx.in/blog  
Article reviewed: https://ramx.in/blog/cursor-code-indexing

## Blog index purpose

Searchable, filterable proof of technical thinking and personal perspective.

## Blog index structure

1. Global header
2. H1 “Blog”
3. Introductory sentence
4. Category filter controls
5. Twenty article rows
6. Quote card
7. Global footer

## Category controls

Initially visible:

- All
- Personal
- AI
- Engineering
- Next.js
- Design

Each control includes a count. A “Show all” control expands additional categories. Filtering happens in place.

## Article row

- H3 title
- One-line description
- One or more category tags
- Publication date
- “Read more” accessory
- Full-row link

The list is text-first and chronological. No thumbnails are used on the index.

## Global blog search

- Available from every page.
- Desktop trigger displays `Ctrl K`.
- Trigger has accessible label “Open blog search (Ctrl+K).”
- Intended behavior is a command-style search dialog for article discovery.

## Article structure

1. Global header
2. Back to Blog
3. Large cover image
4. Serif H1
5. Description
6. Date and Share action
7. Divider
8. Article prose
9. Floating table-of-contents/progress pill
10. Comments region
11. Related posts
12. Quote card
13. Global footer

## Article typography

- H1: Instrument Serif, 48 px / 60 px desktop.
- H2: Instrument Serif, 30 px / 36 px.
- H3: Instrument Serif, 24 px / 32 px.
- Body: Hanken Grotesk, 16 px / 24 px.
- Inline code: Geist Mono, 14 px / 20 px.
- Blockquote: 4 px primary left border, 16 px left padding, italic muted text.
- Article readable width: 640 px.

At mobile width, the article H1 drops to the 36 px scale and wraps naturally.

## Reading interactions

- Share button opens sharing UI.
- Floating black pill shows the current section and circular reading progress.
- Section headings reveal Markdown-style `##` or `###` markers on desktop hover.
- Code controls support copying where code blocks are present.
- Comments use a separately labelled region.
- Related posts provide three continuation paths.
- Smooth scroll supports heading navigation.

## Media

- Cover image measured at 640 × 360 in the desktop layout.
- Cover radius is about 10 px.
- Reviewed article cover had useful alt text.
- A secondary tweet image had empty alt text.

## Metadata behavior

- Article has unique title, description, canonical URL, and `og:type=article`.
- Visible article cover is unique, but Open Graph uses the generic `/meta/blogs.png`.
- No article-specific `BlogPosting` or `Article` JSON-LD was found.

## Reusable ideas

- Writing as product evidence, not a detached blog.
- Category count filters.
- Command search available globally.
- Distinct editorial typeface for long-form headings.
- Floating section progress without a permanent sidebar.
- Related posts and RSS feed.

## Weaknesses to improve

- Generic social image wastes the article-specific cover.
- Missing article schema.
- Empty alt text on meaningful embedded media.
- Twenty-row index can become long without pagination or search visible in context.
- Article heading order in server HTML places comments/related headings before MDX headings, although the rendered visual order is correct.
