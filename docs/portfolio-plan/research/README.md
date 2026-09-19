# Ramx Portfolio Reference Research

Reference audited: https://ramx.in  
Audit date: 2026-09-14  
Purpose: extract reusable portfolio patterns for Barun Tiwary's AI/software-to-cybersecurity positioning.

## Scope

This research covers the live Ramx site:

- Public routes and information architecture
- Page and section hierarchy
- Shared components and interaction states
- Header and footer behavior
- Desktop and mobile layout
- Typography and visual tokens
- Motion and reduced-motion behavior
- Search, theme, sharing, article, and resume interactions
- Metadata, structured data, robots, sitemap, RSS, and crawl behavior
- Patterns worth adapting and patterns to avoid

The live website is the primary source. The public `ramxcodes/sleek-portfolio` repository was used only as supporting context because its current `main` branch does not fully match the deployed site.

Live Barun IA and build list: [../README.md](../README.md) and [information-architecture.md](information-architecture.md). This folder stays a Ramx audit.

## Documents

- [Information architecture](information-architecture.md)
- [Home page](pages/home.md)
- [Projects](pages/projects.md)
- [Work](pages/work.md)
- [Blog](pages/blog.md)
- [Supporting pages](pages/supporting-pages.md)
- [Components](components.md)
- [Design system](design-system.md)
- [Motion and interactions](motion-interactions.md)
- [SEO and technical findings](seo-technical.md)
- [Adaptation notes for Barun](adaptation-notes.md)

## Evidence notation

- **Measured:** read from the live DOM or computed styles.
- **Observed:** verified through the rendered page or accessibility tree.
- **Inferred:** likely behavior based on repeated patterns; verify during implementation.
- **Issue:** weakness in the reference, not a pattern to reproduce.

## Main conclusion

Ramx succeeds through restraint: one narrow content column, clear type hierarchy, text-first lists, light interaction, and strong writing support. Its best reusable ideas are the compact home summary, command search, minimal project index, expandable experience rows, article reading system, theme support, and consistent footer. Barun's version should preserve this clarity while replacing personal lifestyle content with secure-system case studies and stronger cybersecurity proof.
