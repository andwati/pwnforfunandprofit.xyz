## UI / UX Polish

- [ ] **Heading Anchor Links** — Add an interactive `#` link that appears when hovering over `<h2>` and `<h3>` tags to make linking to specific sections easier.
- [x] **Custom Terminal Scrollbars** — Style the browser's default scrollbar to match the dark terminal 

- [ ] **Custom 404 Page** — Design an interactive terminal-style 404 page ("Command not found") that fits the pwnforfunandprofit theme.

## Features & Content

- [ ] **Post Series Support** — Add a `series` front-matter field to automatically group related tutorials (e.g., "Buffer Overflows Part 1, 2, 3") and render a "Part N of X" navigation box.

## Performance & SEO


- [x] **Lazy Loading** — Ensure all `<img>` and `<iframe>` tags across the site use `loading="lazy"` to drastically improve initial page load times.
- [x] **Asset Preloading** — Add `<link rel="preload">` tags in the `<head>` for critical assets like the primary font files to eliminate text rendering flashes (FOUT/FOIT).


- [x] **Minify HTML & CSS** — Enable and configure Zola's built-in minification settings (`minify_html = true`) to shave off extra bytes in production.
