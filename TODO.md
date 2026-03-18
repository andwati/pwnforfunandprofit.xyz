

## Typography & Reading Experience

- [x] **Code Font Ligatures** — Integrate a dedicated ligaturized monospace font (like Fira Code or JetBrains Mono) for cleaner code snippets.
- [x] **Text Wrap Balancing** — Apply `text-wrap: balance` to headings and `text-wrap: pretty` to paragraphs to prevent awkward orphaned words.
- [x] **Fluid Typography Scale** — Refactor font sizes to use CSS `clamp()` functions for perfectly smooth scaling across all devices without relying on breakpoints.
- [ ] **Line Highlighting in Code Blocks** — Implement a custom shortcode or modify the syntax highlighter to allow highlighting specific lines of code (vital for exploit tutorials).
- [ ] **Footnote Backlinks** — Add a smooth-scroll return link (e.g., `[↩]`) inside the expanded footnote tooltip or at the bottom of the article to jump back to the reading position.

## UI / UX Polish

- [ ] **Heading Anchor Links** — Add an interactive `#` link that appears when hovering over `<h2>` and `<h3>` tags to make linking to specific sections easier.
- [ ] **Custom Terminal Scrollbars** — Style the browser's default scrollbar to match the dark terminal aesthetic using `::-webkit-scrollbar` and `scrollbar-color`.

- [ ] **Custom 404 Page** — Design an interactive terminal-style 404 page ("Command not found") that fits the pwnforfunandprofit theme.

## Features & Content

- [ ] **Post Series Support** — Add a `series` front-matter field to automatically group related tutorials (e.g., "Buffer Overflows Part 1, 2, 3") and render a "Part N of X" navigation box.

- [ ] **Interactive CVE Timeline** — A shortcode to render animated timeline infographics for big exploit write-ups or breach post-mortems.


## Performance & SEO


- [ ] **Lazy Loading** — Ensure all `<img>` and `<iframe>` tags across the site use `loading="lazy"` to drastically improve initial page load times.
- [ ] **Asset Preloading** — Add `<link rel="preload">` tags in the `<head>` for critical assets like the primary font files to eliminate text rendering flashes (FOUT/FOIT).


- [ ] **Minify HTML & CSS** — Enable and configure Zola's built-in minification settings (`minify_html = true`) to shave off extra bytes in production.
