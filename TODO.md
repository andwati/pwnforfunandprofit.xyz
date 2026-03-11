# Future Enhancements Backlog

Here is a curated list of suggestions to further refine the blog's typography, user experience, feature set, and performance. Check items off as they are implemented!

## Typography & Reading Experience

- [ ] **Code Font Ligatures** — Integrate a dedicated ligaturized monospace font (like Fira Code or JetBrains Mono) for cleaner code snippets.
- [ ] **Text Wrap Balancing** — Apply `text-wrap: balance` to headings and `text-wrap: pretty` to paragraphs to prevent awkward orphaned words.
- [ ] **Fluid Typography Scale** — Refactor font sizes to use CSS `clamp()` functions for perfectly smooth scaling across all devices without relying on breakpoints.
- [ ] **Line Highlighting in Code Blocks** — Implement a custom shortcode or modify the syntax highlighter to allow highlighting specific lines of code (vital for exploit tutorials).
- [ ] **Reading Progress Time Remaining** — Instead of just a progress bar, dynamically calculate and display "X mins remaining" based on current scroll depth.
- [ ] **Footnote Backlinks** — Add a smooth-scroll return link (e.g., `[↩]`) inside the expanded footnote tooltip or at the bottom of the article to jump back to the reading position.

## UI / UX Polish

- [ ] **Image Zoom / Lightbox** — Implement a Medium-style image zoom (e.g., using `medium-zoom` library) allowing users to enlarge detailed screenshots by clicking them.
- [ ] **Heading Anchor Links** — Add an interactive `#` link that appears when hovering over `<h2>` and `<h3>` tags to make linking to specific sections easier.
- [ ] **Custom Terminal Scrollbars** — Style the browser's default scrollbar to match the dark terminal aesthetic using `::-webkit-scrollbar` and `scrollbar-color`.
- [ ] **Sticky Sidebar Table of Contents** — On wide desktop layouts, detach the Table of Contents and make it sticky on the right or left side so it follows the user as they read.
- [ ] **Code Block Copy Confirmation** — Add a subtle visual state change (like a checkmark or a "Copied!" popover toast) when a user successfully copies a code block.
- [ ] **Custom 404 Page** — Design an interactive terminal-style 404 page ("Command not found") that fits the pwnforfunandprofit theme.

## Features & Content

- [ ] **Post Series Support** — Add a `series` front-matter field to automatically group related tutorials (e.g., "Buffer Overflows Part 1, 2, 3") and render a "Part N of X" navigation box.
- [ ] **Interactive Exploit Demos** — If applicable, embed small interactive WebAssembly (WASM) or xterm.js terminals demonstrating basic concepts directly in the browser.
- [ ] **"Recently Viewed" Posts** — Use `localStorage` to remember the last 3 posts a user visited and display them on the homepage.
- [ ] **Drafts & Unlisted Posts** — Configure Zola to ignore posts marked with `draft = true` or create an `unlisted` tag that hides posts from the main feed but keeps them accessible via direct link.
- [ ] **Exploit Scripts Download** — A dedicated button or shortcode block that bundles all code snippets from an article into a single downloadable `.py` or `.c` file.
- [ ] **Interactive CVE Timeline** — A shortcode to render animated timeline infographics for big exploit write-ups or breach post-mortems.
- [ ] **Configurable Comments** — Modify the Utterances/Giscus integration to respect a `comments = false` flag in the post front-matter, allowing you to disable discussion on specific pages.

## Performance & SEO

- [ ] **Automatic WebP Image Optimization** — Refactor image rendering to use Zola's `resize_image` function to automatically generate highly compressed `webp` versions of all uploaded images at build time.
- [ ] **Lazy Loading** — Ensure all `<img>` and `<iframe>` tags across the site use `loading="lazy"` to drastically improve initial page load times.
- [ ] **Asset Preloading** — Add `<link rel="preload">` tags in the `<head>` for critical assets like the primary font files to eliminate text rendering flashes (FOUT/FOIT).
- [ ] **PWA / Offline Support** — Add a simple Service Worker and a `manifest.json` so readers can "install" the blog to their home screen and read cached articles offline.
- [ ] **RSS Feed Thumbnail Images** — Modify the `rss.xml` template to include post cover images (or a default banner) so aggregators display your articles more attractively.
- [ ] **Minify HTML & CSS** — Enable and configure Zola's built-in minification settings (`minify_html = true`) to shave off extra bytes in production.
