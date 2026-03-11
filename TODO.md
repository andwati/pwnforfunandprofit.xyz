# TODO — pwnforfunandprofit.xyz

Feature backlog for the blog. Check off items as they're implemented.

---

## Discovery & Navigation

- [ ] **Client-side search** — enable `build_search_index = true` in `zola.toml`, add a search page/modal with Elasticlunr
- [ ] **Reading time estimate** — use `page.reading_time` to display "X min read" in post headers
- [ ] **Related posts** — show 2–3 posts with overlapping tags at the bottom of each post
- [ ] **Post series support** — `series` front-matter field; render a "Part N of X" callout with links to all parts in the series
- [ ] **Keyboard shortcuts** — `K` to open search, `T` to toggle theme; show a small hotkey hint overlay

---

## Content Enhancements

- [ ] **Callout / admonition shortcodes** — `{% note %}`, `{% warning %}`, `{% tip %}`, `{% danger %}` Tera shortcodes styled as terminal callout boxes

- [x] **Updated-at badge** — show "Last updated: <date>" on posts that have `updated` front-matter set, distinct from the published date

---

## Post List & Filtering

- [ ] **Tag filtering on posts page** — JS-powered tag chip filter; clicking a tag hides non-matching posts without a page reload
- [ ] **Reading progress bar** — thin accent-colored bar at the top of the viewport that fills as you scroll through a post
- [ ] **Post view count** — Cloudflare Worker + KV store to track and display view counts (fits existing `wrangler.toml` setup)
- [ ] **Sort / filter controls on posts page** — toggle between newest-first, oldest-first, and filter by tag or difficulty

---

## UI / UX Polish

- [x] **Scroll-to-top button** — floating button that appears after scrolling down, smooth-scrolls back to top
- [ ] **Table of contents active-section highlight** — as you scroll, the current heading is highlighted in the TOC
- [ ] **Terminal-style command palette** — `Ctrl+K` opens a fuzzy-search palette over posts and nav links
- [ ] **Animated hero terminal prompt** — typewriter effect on the homepage subtitle / profile section
- [ ] **Back-to-top keyboard shortcut** — pressing `G` then `G` (vim-style) scrolls to the top of the page
- [ ] **Smooth page transitions** — CSS View Transitions API for navigation between pages
- [ ] **Footnote hover previews** — hover over a footnote ref to see its content in a tooltip without jumping to the bottom

---

## Distribution & Reach

- [ ] **Newsletter / email subscription** — integrate Buttondown or self-hosted Listmonk with a subscribe form
