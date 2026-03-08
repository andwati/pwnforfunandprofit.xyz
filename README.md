# pwnforfunandprofit.xyz


# features

## Performance and SEO
- [ ] Optimized for performance: 99/100 on mobile and 100/100 on desktop in Google PageSpeed Insights
- [ ] Optimized SEO performance with a correct SEO SCHEMA based on JSON-LD

## Appearance and Layout
- [ ] Pagination supported
- [ ] Easy-to-use and self-expanding table of contents
- [ ] Beautiful CSS animation
- [ ] social links supported

## Extended Features
- [ ] Search support
- [ ] Twemoji supported
- [ ] Automatically highlighting code
- [ ] Copy code to clipboard with one click
- [ ] Mathematical formula supported by KaTeX
- [ ] Diagrams shortcode supported by mermaid
- [ ] Interactive data visualization shortcode supported by ECharts
- [ ] Dynamic scroll supported by native CSS
- [ ] Cookie consent banner supported by cookieconsent
- [ ] Option to cache remote images

---

## Configuration

The site is highly configurable through `zola.toml`. All customization happens in the `[extra]` section.

### Basic Information

```toml
[extra]
author = "mockingspectre"
```

### Profile Section (Homepage)

Control the homepage profile section:

```toml
show_profile = true  # Show/hide entire profile section
avatar_url = "/images/avatar.webp"  # Local or remote URL
profile_subtitle = "offending binaries"
```

Place avatar images in `static/images/` to use local assets.

### Social Links

Add or remove social links by setting URLs. Empty values will hide the icon:

```toml
github_url = "https://github.com/mockingspectre"
twitter_url = "https://twitter.com/mockinspectre"
linkedin_url = ""  # Empty = not shown
email = ""  # Empty = not shown
show_rss_link = true  # RSS feed link
```

### Comments System

Configure Utterances comments (appears on all pages when enabled):

```toml
enable_comments = true
utterances_repo = "andwati/pwnforfunandprofit.xyz"
utterances_theme = "github-dark"
```

To disable comments site-wide, set `enable_comments = false`. To control comments per page, add frontmatter to your content:

```toml
+++
title = "My Post"
[extra]
comments = false  # Disable comments on this specific page
+++
```

### Navigation Menu

Customize navigation menu items:

```toml
[[extra.menu]]
name = "About"
url = "/about/"

[[extra.menu]]
name = "Posts"
url = "/posts"

[[extra.menu]]
name = "Tags"
url = "/tags/"

[[extra.menu]]
name = "Archive"
url = "@/archive/_index.md"
```

Add more menu items by duplicating the `[[extra.menu]]` block.

### Feature Toggles

Enable or disable features:

```toml
enable_search = true
enable_theme_toggle = true
```

### Analytics

```toml
google_analytics = ""  # Add your GA tracking ID
google_site_verification = ""  # Google Search Console verification
```

---

## Development

```bash
# Serve locally
zola serve

# Build for production
zola build

# Check for errors
zola check
```