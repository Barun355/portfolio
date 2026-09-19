# Information Architecture

Locked: 2026-09-19  
Owner: Barun Tiwary  
Reference audit (Ramx): 2026-09-14

This file is the live site map. Ramx notes at the bottom are reference only.

## Keep

Primary routes:

| Route | Page | Why |
| --- | --- | --- |
| `/` | Home | Identity, goal, proof preview |
| `/work` | Work log | Full experience record |
| `/blog` | Blog index | Writing as hiring proof |
| `/blog/[slug]` | Article | Long-form reading |
| `/resume` | Resume | Recruiter document |
| unknown | 404 | Recovery |

Keep in the chrome, not as pages:

- Sticky header: Home · Work · Blog · Resume
- Blog search (`Ctrl+K`)
- Light/dark theme
- Footer directory of the same four routes
- Skip link, toasts, copy-email

Keep on Home as previews, not separate sites:

- Selected systems (Smart Weight, Simple Form, Mailchimp work, AI Answer Engine)
- Recent writing (three rows → `/blog`)
- Contact / social

## Remove

Do not build, link, or sitemap these Ramx routes:

| Removed | Old route | Why |
| --- | --- | --- |
| Terminal | `/terminal` | Lifestyle/setup guide, not hiring proof |
| Setup | `/setup` | Editor config, not portfolio evidence |
| Movies | `/movies` | Personal taste, dilutes the story |
| Gears | `/gears` | Tool list, not work proof |
| RSS | `/blog/feed.xml` | Explicitly out of scope |
| Books | `/books` | Same lifestyle problem as movies |

Also do not rebuild:

- Interactive terminal / fake shell
- Music / “last played” status
- Pointer-following mascot
- External-only project index with no ownership story
- Legacy Ramx paths: `/work-experience`, `/contact`, `/journey`

## Not in this build

These can return later. They are not current routes.

- `/projects` and project case-study pages
- `/security` evidence page
- Comments
- Article RSS
- Resume PDF / Google Drive embed (HTML resume is the page)

## Global route model

Primary header:

1. Home — `/`
2. Work — `/work`
3. Blog — `/blog`
4. Resume — `/resume`
5. Blog search — command dialog, `Ctrl+K`
6. Theme switch — light/dark

Content routes:

- Article — `/blog/[slug]`
- Not found — any unknown path

## Sitemap hierarchy

```text
/
├── /work
├── /blog
│   └── /blog/[slug]
└── /resume
```

XML sitemap lists only these HTML routes plus published articles. No feed, gears, setup, terminal, books, movies, or project-detail URLs.

## Page templates

### Home

Condensed résumé + directory. Previews destinations. Does not dump Work or Blog.

Order:

1. Identity, contact, cybersecurity-company goal
2. Recent experience (three rows, expandable)
3. Selected systems
4. Recent writing
5. Quote, navigation, social footer

### Work

Expanded chronological records. Home preview and this page share the same facts.

### Blog

Filterable article rows. Categories only for published writing (Engineering, Security, AI). No lifestyle categories.

### Article

Back to Blog → title → date/share → prose → related posts.

### Resume

HTML document the recruiter can read and print. No iframe dependency.

### 404

Home and Blog recovery. `noindex`.

## Navigation behavior

- Sticky ~56 px header
- Four text links stay visible; no hamburger
- Search is icon-only on small screens; desktop shows `Ctrl K`
- Theme is icon-only with an accessible name
- Footer repeats only kept routes
- Articles add “Back to Blog”
- Unknown routes offer Home and Blog

## Content rules

- Verified facts first. Label learning vs shipped work.
- Results before tool lists.
- Confidential client systems stay anonymized.
- No SOC / pentest / AppSec seniority claims.

## Ramx reference (audit only)

Observed on https://ramx.in in 2026-09-14. Do not copy this map.

Primary: Home, Work, Blog, Resume, search, theme.  
Secondary: Projects, Gears, Setup, Terminal, Books, Movies, RSS.  
Useful patterns kept: narrow column, sticky header, home previews, command search, theme.  
Weaknesses we are fixing: lifestyle routes, missing project ownership, header omitting proof surfaces that matter for hiring.
