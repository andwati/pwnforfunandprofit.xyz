---
applyTo: "**/*"
---

# Copilot Instructions for pwnforfunandprofit.xyz

## 0. Mission

Produce production-grade changes that are correct, verifiable, maintainable, and aligned with this Zola blog site's architecture, leveraging high-end premium design aesthetics.

---

## 1. Project Context

### Workspace Structure
- **Framework**: Zola (Rust-based static site generator)
- **Templates**: Tera templates (`templates/`)
- **Styling**: SCSS (`sass/`)
- **Content**: Markdown (`content/`)
- **Static Assets**: JavaScript and CSS (`static/`)
- **Scripts**: Python auxiliary scripts (`scripts/`)
- **Skill Instructions**: High-level AI design rules (`llms/`)

### Key Dependencies & Tools
- **Zola**: Static Site Generator (v0.22.1)
- **Template Engine**: Tera (Django/Jinja2-like)
- **Styling**: Vanilla SCSS (No Tailwind or external CSS themes allowed)
- **SEO/Metadata**: Built-in JSON-LD schemas
- **Syntax Highlighting**: Zola built-in (Catppuccin Mocha theme)
- **Math**: KaTeX via CDN
- **Diagrams**: Mermaid.js via CDN
- **Comments**: Utterances (GitHub issues based)

### Runtime & Commands
- **Serve Locally**: `zola serve`
- **Build**: `zola build`
- **Check/Lint**: `zola check`
- **Scripting**: Python 3 + `venv` for data manipulation (e.g. RSS migrations)

---

## 2. Rule Priority and Conflict Resolution

When instructions conflict, follow this order:

1. Safety, correctness, and premium design rules
2. User-requested behavior
3. This repository instruction file
4. The custom `llms/` guidelines (`taste-skill.md` and `redesign-skill.md`)
5. Existing codebase patterns and conventions

---

## 3. Operational Mode

- Execute end-to-end without pausing for non-blocking confirmations.
- Keep responses concise during execution; provide one complete summary at the end.
- Do not claim completion until `zola check` confirms zero validation errors.
- Ensure all styling upgrades strictly adhere to the internal bespoke CSS variables.

---

## 4. Definition of Done (Mandatory)

A task is complete only when all applicable items pass:
1. ✓ Requested behavior implemented.
2. ✓ `zola check` detects no orphaned links or missing taxonomies.
3. ✓ `zola build` outputs seamlessly in less than a second.
4. ✓ Code changes reflect the high-end `design-taste-frontend` specifics (no generic "AI-slop" designs, no Tailwind injections).
5. ✓ Modified templates remain semantic HTML5.

---

## 5. Mandatory Execution Workflow

### Initialization
1. Check existing implementations in `templates/` and `sass/`.
2. Use absolute URLs (`get_url()`) inside templates instead of relative paths.

### Implementation
3. Implement in small, verifiable increments.
4. If modifying SCSS variables or structural Tera blocks, verify via:
   ```bash
   zola check
   ```

### Verification
5. Spin up the server to verify visual cadence:
   ```bash
   zola serve
   ```
6. Ensure any new categories or tags are explicitly defined in `zola.toml`.

---

## 6. Code Purity and Output Rules

- Generate raw executable code only.
- **Forbidden**: commented-out code, generic placeholder names (e.g. "John Doe", "Acme"), emojis in code or text (unless explicitly requested).
- **Allowed**: required comments explaining non-obvious logic.
- Keep SCSS deterministic: Rely on global variables rather than arbitrary hardcoded hexs.
- Never use emojis in code, documentation, commit messages, or alt texts. 

---

## 7. Frontend Rules (Zola + SCSS)

### 7.1 Architecture
- Use `{% extends "base.html" %}` to establish layout inheritance.
- Leverage `{% block %}` elements for page-specific overrides.
- Use `config.extra.*` for user-defined configuration toggles.
- Never write JS SPAs inside this structure: interactivity resides in targeted Vanilla JS files in `static/js/`.

### 7.2 Styling Constraints
- Rely exclusively on internal SCSS architecture. Do not suggest or install TailwindCSS.
- Follow `llms/taste-skill.md` requirements:
  - Dark Mode overrides inside `html.dark`.
  - Prefer `Outfit` or high-quality sans-serif text.
  - No default flexbox percentage math (use CSS grid).
  - No arbitrary `100vh`; use `100dvh`.
  - Ensure focus rings and accessible outlines exist.

### 7.3 Content Constraints
- All Markdown files must be prefixed with valid TOML frontmatter (`+++`).
- Frontmatter must include: `title`, `date`.
- Do not utilize unsupported Markdown extensions (Zola relies on CommonMark + specific extensions configurable in `zola.toml`).

---

## 8. Debugging Commands Reference

```bash
zola serve                # Live preview server on http://127.0.0.1:1111
zola build                # Build static site into public/
zola check                # Validate internal links and config mappings
python3 scripts/migrate.py # Re-run Substack migration script if testing feeds
```

## 9. Quick Help

### "My template is failing to build with a parse error"
→ Zola's Tera engine uses `{{ variable }}` for printing and `{% expression %}` for logic. Check your variable structures.

### "Styles updates aren't applying"
→ Ensure `compile_sass` is enabled in `zola.toml` and you are modifying valid `.scss` assets inside `sass/`.

### "My taxonomy doesn't work or throws an error"
→ If you see `Tried to render taxonomy_list.html`, ensure you created the taxonomy view templates and registered the taxonomy array in `zola.toml`.

---

**Last Updated**: March 8, 2026  
**Site Generator**: Zola  
**Styling Paradigm**: Bespoke SCSS
