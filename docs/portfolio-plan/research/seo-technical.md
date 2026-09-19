# SEO and Technical Findings

## Route metadata

### Home

- Title: `Ramkrishna Swarnkar - Full Stack Web Developer`
- Description: full-stack developer, open-source contributor, MVP/product positioning
- Canonical: `https://ramx.in`
- Robots: `index, follow`
- Open Graph type: `website`
- Open Graph image: `/meta/hero.png`
- Twitter card: `summary_large_image`

### Projects

- Title: `Projects - Case Studies & Products`
- Unique description and canonical
- Open Graph image: `/meta/projects.png`
- Open Graph type: `website`

### Work

- Title: `Work Experience - Professional Journey`
- Unique description and canonical
- Open Graph image: `/meta/work.png`
- Open Graph type: `website`

### Blog index

- Title: `Blog - Thoughts & Tutorials`
- Unique description and canonical
- Open Graph image: `/meta/blogs.png`
- Open Graph type: `website`

### Blog article

- Unique title, description, and canonical
- Open Graph type: `article`
- Twitter card: `summary_large_image`
- Issue: social image remains the generic blog image instead of the visible article cover

### Supporting routes

Every audited route has a unique title, description, canonical, route-specific Open Graph image, and index/follow directive:

- Gears — `/meta/gears.png`
- Setup — `/meta/setup.png`
- Terminal — `/meta/terminal.png`
- Books — `/meta/books.png`
- Movies — `/meta/movies.png`
- Resume — `/meta/resume.png`

Resume uses `summary`; most other pages use `summary_large_image`.

## Structured data

Global JSON-LD observed:

- `Person`
- `WebSite`
- `ProfilePage`

Person data includes:

- Name and profile image
- Job title
- Description
- Social/profile links
- Known technologies
- Work organization

WebSite data includes a `SearchAction` targeting:

```text
https://ramx.in/blog?q={search_term_string}
```

### Structured-data issues

- Global Person, WebSite, and ProfilePage blocks repeat on every route.
- Blog articles do not add `Article` or `BlogPosting`.
- Blog articles do not expose `article:published_time` or `article:author` metadata.
- Project index has no `ItemList`.
- Work page has no role-specific structure.
- Breadcrumb schema was not found.
- `worksFor: Freelance / Independent` can become stale or conflict with visible employment.

## Crawl files

### Sitemap

`/sitemap.xml` returned HTTP 200 in the browser.

It includes:

- Home
- Work
- Resume
- Blog
- Projects
- Books
- Movies
- Gears
- Setup
- Terminal
- Twenty blog articles

It supplies `lastmod`, `changefreq`, and `priority`.

Issues:

- Top-level route `lastmod` values are shared and may represent deployment time rather than content change.
- No project-detail URLs exist.
- Search engines may ignore `changefreq` and `priority`; accurate `lastmod` matters more.

### Robots

`/robots.txt`:

- Allows normal search crawling.
- Disallows `/api/`.
- References the sitemap.
- Blocks several AI training/crawler agents.
- Declares Cloudflare content signals: search allowed, AI training disallowed, reference use.

There are two wildcard user-agent groups. They are not necessarily invalid, but a simpler generated file would be easier to maintain.

### RSS

`/blog/feed.xml` returned HTTP 200.

It provides:

- Feed title and description
- Self link
- Language
- Build date
- Article title, URL, summary, and publication date

## HTTP behavior

- Main audited routes: HTTP 200.
- Unknown routes: HTTP 404.
- `/projects/the-quest`: HTTP 404.
- 404 pages use `robots=noindex`.
- Cloudflare sometimes serves a verification page to automated fetchers even when the same route works in a normal browser.

## Heading hierarchy

Strengths:

- One H1 on every audited content page.
- Blog articles use H1, H2, and H3 visibly.
- Project titles use H2.
- Blog list titles use H3.

Issues:

- Work page jumps from H1 to company H3 and internal H4 labels.
- The server document order for reviewed article headings placed Comments and Related Posts before MDX article headings, likely because of rendering/component order.
- Category controls are buttons, correctly avoiding fake heading use.

## Semantic structure

- One main landmark and one footer per audited page.
- Header and footer each expose navigation landmarks.
- Icon-only search and theme buttons have accessible names.
- Resume iframe has title `Resume`.
- Comments uses a labelled region.
- Project and article rows have descriptive full-link names.

## Image accessibility

- Home server markup contained three images. The profile image has descriptive alt text; two Spotify icon instances use empty alt as decorative media.
- Reviewed article contained two images, one with empty alt.
- Cover image had descriptive alt.

Empty alt is correct only for decorative media. Embedded screenshots or content-bearing profile images need meaningful alternatives.

## Internal linking

Strengths:

- Header exposes core routes.
- Footer exposes full route set.
- Home previews link to deeper pages.
- Articles link to related posts and the blog index.
- 404 provides Home and Blog recovery.

Weaknesses:

- Projects link externally and do not build internal case-study depth.
- Projects is absent from primary header.
- Supporting pages are mainly discoverable from Home/footer.

## Framework and delivery evidence

- `next-size-adjust` metadata and route behavior indicate Next.js.
- Public project repository describes Next.js App Router, TypeScript, Tailwind, shadcn/ui, MDX, and Umami.
- Live implementation differs from repository `main`; treat repository details as context, not exact deployed truth.

## Recommended SEO baseline for Barun

- Unique title, description, canonical, OG, and Twitter metadata per route.
- Home-only `ProfilePage` + `Person`; site-wide `WebSite`.
- `BlogPosting` for writing.
- `SoftwareApplication`, `SoftwareSourceCode`, or `CreativeWork` for projects as appropriate.
- `ItemList` for project and writing indexes.
- `BreadcrumbList` on details.
- Project-specific and article-specific 1200 × 630 social images.
- Accurate sitemap modification dates.
- RSS for writing.
- 404 with HTTP 404 and `noindex`.
- Descriptive image alternatives.
- Security headers and privacy-respecting analytics, verified during implementation.
