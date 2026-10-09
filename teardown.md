# Teardown — reference sites for the 17th Circuit Commonwealth's Attorney site

Stage 3 output of the website-builder pipeline. Three reference sites were torn
down with the `site-teardown` skill on 2026-10-07:

| Reference                     | Tag       | What it is                                                  |
| ----------------------------- | --------- | ----------------------------------------------------------- |
| https://ag.ny.gov/            | `[inspo]` | New York Attorney General. A public law-enforcement office. |
| https://www.craigswapp.com/   | `[inspo]` | Craig Swapp & Associates. A private injury firm.            |
| https://newlinlawoffices.com/ | `[inspo]` | Newlin Law Offices. A private injury firm.                  |

All three are **style inspiration only**. Their visual patterns feed this build;
their content, page lists and navigation do not.

**How far to trust this.** Every value below was read from each site's fetched
HTML, CSS and JavaScript. Nothing was rendered in a browser, so statements about
appearance are readings of the source, and each teardown marks what was confirmed,
calculated, inferred or not verified. The raw downloads were not kept in this repo.

## Synthesis: what this build takes, and from where

The three sites agree on more than they differ. All of them run a dark primary, a
light alternate and one rationed accent, and all put a small uppercase label over
a large title. That shared base is the direction for this site.

### Adopted on the homepage

| Pattern                                                                 | From                                                   | How it appears here                                                                                                                          |
| ----------------------------------------------------------------------- | ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Utility bar over a seal-led masthead                                    | NY AG                                                  | `navy-950` bar with circuit and county, then a white header with the seal and a two-line lockup. Unlike the reference, the header is sticky. |
| Task-first "I want to…" control                                         | NY AG                                                  | The "I need to…" panel directly under the hero: four plain tasks the public actually comes for.                                              |
| Panel overlapping the section above                                     | NY AG (feature card), Craig Swapp (overlapping sheets) | The task panel rises 64px into the hero. No shadow-heavy cards elsewhere.                                                                    |
| Thin metallic ornament as the brand flourish                            | NY AG (gold dot-ended rule)                            | The bronze-over-silver double rule above every section heading.                                                                              |
| Service before message, no slogan-and-phone hero                        | NY AG                                                  | The hero states what the office is and links to two destinations. No sales call to action.                                                   |
| Dark primary, paper-tone alternate, one rationed accent                 | Newlin, Craig Swapp                                    | Navy, warm silver, bronze. Bronze is used for rules, icons and one button style, never for body text on light.                               |
| Dark bands never sit back to back                                       | Newlin                                                 | Section order alternates navy with white or silver.                                                                                          |
| Serif headings over a sans for UI and body                              | Newlin                                                 | Besley over Libre Franklin.                                                                                                                  |
| Uppercase tracked eyebrow above a large title                           | all three                                              | The `eyebrow` utility, which also echoes the seal's lettering.                                                                               |
| Square, flat and thin-lined; almost no shadow                           | Newlin                                                 | 2px radius, hairline borders, a single shadow reserved for raised elements.                                                                  |
| Inset hairline frame on dark bands and callouts                         | Newlin                                                 | A bronze 1px line set 10px inside the Commonwealth's Attorney band and the "To report a crime" callout.                                      |
| Square uppercase tracked buttons; outlined secondary; arrow text link   | Craig Swapp, Newlin                                    | The `Button` variants and the arrow links. All have a visible focus style, which the references lack.                                        |
| Left-aligned hero text: eyebrow, serif h1, capped paragraph, buttons    | Newlin                                                 | The hero's left column.                                                                                                                      |
| Split section header: label and title on one side, content on the other | Craig Swapp                                            | The Office, Victims and Contact sections (5/7 and 6/6 splits).                                                                               |
| Icon-column grid                                                        | Craig Swapp                                            | "What the Commonwealth's Attorney does": four cards with a line icon, title and paragraph.                                                   |
| Numbered steps                                                          | Craig Swapp                                            | "The path of a felony case": six numbered stages. Static rather than tabbed, so nothing is hidden.                                           |
| Banded footer: identity and contact, then a legal row                   | NY AG, Craig Swapp                                     | The `navy-950` footer with a hairline and a legal row beneath.                                                                               |
| Calm motion: nothing moves unless touched                               | NY AG                                                  | One short load animation in the hero, then hover and focus states only.                                                                      |

### Deliberately left out

- **Every lead-capture device**: phone-number header buttons, fixed call bars,
  chat widgets, qualification quizzes, testimonials, results slideshows, fee
  promises. This is a public office.
- **Advertising and call-tracking tags.** Victims and witnesses use this site.
  Analytics is added later, behind the consent banner, and nothing else.
- **Photo heroes and gradient-washed photography.** No photography was supplied,
  so the seal carries the hero. The layout can take a portrait or a courthouse
  photo later.
- **Stat bands.** They need real, sourced figures from the office. None exist yet.
- **Pill buttons, 25 to 50px corners, rounded "sheets"** (NY AG, Craig Swapp).
  The squared direction suits the seal better; the only circles on the site are
  the seal and its rings.
- **Scroll-triggered entrance animations, autoplay slideshows** (Newlin, Craig
  Swapp). Content is never hidden waiting on a scroll trigger.
- **Accessibility habits not to inherit**: removed focus rings, placeholder-only
  labels, low-contrast gray text, no reduced-motion handling, no skip link.

### Held for the inner pages

- News list: uppercase date over a plain headline link, hairline dividers (NY AG).
- FAQ split with an accordion (Craig Swapp, Newlin). Suits victim and witness
  questions.
- Portrait beside a short bio or message (Newlin). Needs a photo of the
  Commonwealth's Attorney.
- People row for staff (Newlin).
- Form fields: square, 48 to 56px tall, visible labels (Newlin's shape, with the
  labelling fixed).
- Breadcrumb strip and sticky in-page contents box for long pages (Newlin).

---

The three full teardowns follow, unedited.

---

# Site Teardown: New York State Attorney General (ag.ny.gov)

**URL:** https://ag.ny.gov/
**Built by:** Not identifiable from source (no agency credit in meta tags, footer or CSS comments).
**Platform:** Drupal (theme machine name `oag`, at `/themes/composer/oag/`), hosted on Pantheon behind Varnish/Fastly.
**Date analyzed:** 2026-10-07
**Purpose of this teardown:** style reference only (visual language), for a Kentucky Commonwealth's Attorney site. Content and page architecture are deliberately not catalogued.

## How to read this document

Every value is tagged by how I know it:

- **[source]** read directly from the fetched HTML, CSS or JS.
- **[calc]** my arithmetic on a source value (mostly rem to px).
- **[inferred]** deduced from class names, file names or CSS behaviour, not directly observed.
- **[not verified]** I could not see it. Nothing was rendered in a browser for this teardown, so anything about how the page actually looks on screen is a reading of the CSS, not an observation.

px equivalents assume a 16px root. Neither stylesheet sets `html { font-size }` [source], so the browser default applies [inferred].

### What was fetched

All with curl, all HTTP 200, no bot wall. Saved under `ag-ny/raw/`.

| File                  | Size             | What it is                                                                                                                                                      |
| --------------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `index.html`          | 71 KB            | Homepage, server-rendered                                                                                                                                       |
| `css_0.css`           | 3.7 KB           | Drupal core utility classes only                                                                                                                                |
| `css_1.css`           | 325 KB           | The whole theme: Tailwind build plus component CSS (1,735 top-level rules)                                                                                      |
| `typekit_mjg2xab.css` | 4.8 KB           | Adobe Fonts kit                                                                                                                                                 |
| `js_0_*.js`           | 96 KB            | Drupal aggregate: jQuery 3.7.1, `once` 1.0.1, core                                                                                                              |
| `js_1` to `js_8`      | 17 to 35 KB each | One webpack bundle per component; each is ~16 KB of core-js polyfill plus a few hundred bytes of real behaviour                                                 |
| `assets/`             |                  | `logo.svg`, `oag_seal_white.svg`, `dot-pattern.png`, `wave-pattern.png`, `eva.svg` sprite, webmanifest                                                          |
| `inner_*.html`        |                  | Three inner pages (About the Office, Press Releases, File a Complaint), fetched only to confirm how headings, breadcrumbs and buttons are used off the homepage |

A one-rule-per-line copy of the theme CSS is at `ag-ny/derived/css_1.split.css`; line numbers cited below refer to that file.

## Tech Stack (Confirmed from Source)

| Technology                                             | Evidence                                                                                                                          | Purpose                                                                                                                     |
| ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Drupal                                                 | `data-drupal-selector`, `drupal-settings-json`, `Drupal.behaviors.*`, `paragraph--type--*` classes, `Expires: 19 Nov 1978` header | CMS. Version not determinable (no generator tag). Pages are assembled from Paragraphs components inside "section" wrappers. |
| Pantheon + Varnish/Fastly                              | `x-pantheon-styx-hostname`, `via: 1.1 varnish`, `x-served-by: cache-*` headers                                                    | Hosting and CDN                                                                                                             |
| Tailwind CSS, `tw-` prefix, every utility `!important` | `.tw-flex{display:flex!important}`, full `--tw-*` variable reset                                                                  | Layout and utilities. v3.x [inferred from the variable set].                                                                |
| Adobe Fonts (Typekit)                                  | `@import url(https://use.typekit.net/mjg2xab.css)` as the first line of the theme CSS                                             | Web font delivery                                                                                                           |
| jQuery 3.7.1                                           | License banner in the JS aggregate                                                                                                | Used only by Drupal core and the language switcher; component behaviours are vanilla JS                                     |
| Webpack + core-js                                      | Bundle wrapper and polyfill modules in every component file                                                                       | Build tooling                                                                                                               |
| Eva Icons SVG sprite                                   | `/themes/composer/oag/images/sprites/eva.svg`, 493 symbols, referenced by `<use xlink:href>` and as CSS `mask-image`              | All icons. The name "Eva Icons" is [inferred] from the filename and symbol names.                                           |
| Google Tag Manager + GA4                               | `GTM-N5QQ9GXN`, `G-DB9MQJQJ8Z`                                                                                                    | Analytics                                                                                                                   |
| Vimeo via Drupal oEmbed                                | `iframe.media-oembed-content` pointing at vimeo.com                                                                               | Video                                                                                                                       |
| Smartling [inferred]                                   | `.smartling-es` etc. logo swaps, `smt-*` class names, language subdomains in `language-switcher.js`                               | Translated subdomains                                                                                                       |

No animation library of any kind. Zero hits across all JS for GSAP, ScrollTrigger, IntersectionObserver, scroll listeners, Swiper, Slick, AOS, Lenis or `matchMedia` [source].

## Design System

### Colors

The palette is defined as Tailwind theme colours; each has `tw-bg-*`, `tw-text-*` and `tw-border-*` utilities. Hex values below are the ones written literally in component CSS; the rgb triplets are from the utilities. Both forms are [source].

**Core palette (used on the homepage)**

| Token name in source | Hex       | rgb         | Used for                                                                                                                                                                                                  |
| -------------------- | --------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `blue`               | `#005481` | 0 84 129    | Primary. Primary button fill, h1 and h4 colour, official's name, footer main band, logo artwork fill, pager, mobile menu icon, focus outline on fields, centre stop of the divider gradient               |
| `dark-blue`          | `#053451` | 5 52 81     | Top utility bar background, h2/h3/h5 colour, nav text, bold "basic" links, translation footer band                                                                                                        |
| `light-blue`         | `#007ea8` | 0 126 168   | Body link colour and underline, primary button hover, nav hover/open, date eyebrow on news items, underline colour on footer links                                                                        |
| `lightest-blue`      | `#e4f3f7` | 228 243 247 | The tint. End stop of the gradient band, secondary button hover, tab hover, chip-link fill, cookie bar, outer stops of the divider gradient                                                               |
| `gold`               | `#d8ab46` | 216 171 70  | The single accent. Nav item dividers, heading underline ornament, callout rule, selected-tab underline, focus underline on links, active ring on buttons, hero toggle button outline, breadcrumb dividers |
| `dark`               | `#0e0e0e` | 14 14 14    | Body text                                                                                                                                                                                                 |
| `white`              | `#fff`    |             | Page background, cards, panels                                                                                                                                                                            |
| `light-gray`         | `#f3f3f3` | 243 243 243 | Dropdown and mega-menu panels, search pill, footer legal bar, table head                                                                                                                                  |
| `gray`               | `#cfcfcf` | 207 207 207 | Field borders, table borders, disabled states, menu group dividers                                                                                                                                        |

**Extended palette (defined in the CSS; not seen in use on any of the four fetched pages except where noted)**

| Token                                  | Hex / rgb                         | Note                                                                                               |
| -------------------------------------- | --------------------------------- | -------------------------------------------------------------------------------------------------- |
| `dark-gold` / `light-gold`             | `#d2973e` / `#ddc14e`             | Focus and hover of a gold newsletter submit button (CSS only; the form is not in the fetched HTML) |
| `red` / `dark-red` / `light-red`       | `#9b2915` / `#660000` / `#b83725` | `red` is used by the form "cancel" button                                                          |
| `cyan` / `dark-cyan` / `light-cyan`    | `#0095c1` / `#0082af` / `#0fa1ce` |                                                                                                    |
| `green` / `dark-green` / `light-green` | `#54d7a4` / `#00cd90` / `#8ee2bf` |                                                                                                    |
| `dark-gray` / `lightest-gray`          | `#9e9e9e` / `#f9f9f9`             |                                                                                                    |
| `black`                                | `#000`                            |                                                                                                    |

**Gradients and patterns [source]**

| Name                                  | Value                                                                                                                                                                                                                                 |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hairline divider (the signature rule) | `border-image: linear-gradient(90deg, #e4f3f7, #005481, #e4f3f7) 1` on a 1px border. Fades from pale blue at the edges to full blue in the centre. Used on `hr`, header bottom edge, footer top edge, news list dividers, accordions. |
| `tw-bg-blue-gradient`                 | `linear-gradient(180deg, rgba(243,250,252,0), #e4f3f7)`. White at the top fading to pale blue at the bottom.                                                                                                                          |
| `tw-bg-dot-pattern`                   | Tiled 54x30px PNG: white with small dots of rgb(217,230,236), about `#d9e6ec` (decoded from the PNG). Very faint.                                                                                                                     |
| `tw-bg-wave-pattern`                  | Tiled 400x400px PNG of near-white waves (`#fcfcfc` down to `#f6f6f6`). Defined but not used on the homepage.                                                                                                                          |
| Hero action panel                     | `rgba(0,84,129,.9)` over the photo                                                                                                                                                                                                    |

**Shadows [source]** (all Tailwind defaults except the first)

| Use                                                         | Value                                                             |
| ----------------------------------------------------------- | ----------------------------------------------------------------- |
| Tab and media panels                                        | `0 2px 4px rgba(5,52,81,.2)` (dark-blue tinted)                   |
| Small cards, dropdowns, hero panel                          | `0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -2px rgba(0,0,0,.1)`    |
| Feature card content panel, help dropdown, media card hover | `0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -4px rgba(0,0,0,.1)`  |
| Spotlight cards at rest                                     | `0 20px 25px -5px rgba(0,0,0,.1), 0 8px 10px -6px rgba(0,0,0,.1)` |
| Chip-link focus                                             | `0 1px 4px 1px #d8ab46`                                           |

**Light/dark rhythm.** The body of the page is light throughout. Dark colour appears only as bookends: the 40px dark-blue utility bar at the very top and the blue footer. Between them the homepage alternates white with tinted bands rather than light with dark:

1. dark-blue utility bar
2. white header
3. full-bleed photo hero
4. white
5. white-to-pale-blue gradient band
6. white
7. dot-pattern band (reads as white with texture)
8. white name strip, then solid blue footer band, light-gray legal bar, dark-blue translation band

The CSS supports solid blue, dark-blue and dark section backgrounds (they flip text and headings to white via `--header-color:#fff`, line 600), but the homepage uses none of them.

### Typography

**One family for everything [source].** `mr-eaves-xl-modern` (Mr Eaves XL Modern), served by Adobe Fonts kit `mjg2xab`. Fallback stack: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif`.

Faces in the kit: 400, 400 italic, 700, 700 italic, 800, 900 italic. `font-display: auto`. Note there is no upright 900 in the kit, yet `font-weight:900` is applied to upright text in several places (bold links, callout `strong`); the browser would substitute the 800 face there [inferred].

Other families in the CSS (`zhi-mang-xing`, `nanum-gothic`, `schnebel-sans-me`, `roboto`) are for translated subdomains only.

**Size scale [source for rem, calc for px].** Custom, not Tailwind's default. Steps are roughly x1.2 to x1.25.

| Token         | Size                | px            | Line-height |
| ------------- | ------------------- | ------------- | ----------- |
| `xs`          | .875rem             | 14            | 1.25rem     |
| `sm`          | 1rem                | 16            | 1.5rem      |
| `base`        | 1.25rem             | 20            | 1.66rem     |
| `lg`          | 1.527rem            | 24.4          | 1.833rem    |
| `xl`          | 1.833rem            | 29.3          | 1.944rem    |
| `2xl`         | 2.22rem             | 35.5          | 2.833rem    |
| `3xl`         | 2.777rem            | 44.4          | 3.333rem    |
| `4xl`         | 3.333rem            | 53.3          | 1           |
| `5xl`         | 4.166rem            | 66.7          | 1           |
| `6xl`         | 4.999rem            | 80            | 1           |
| `7xl` / `8xl` | 6.666rem / 8.888rem | 106.7 / 142.2 | 1           |

**Element defaults [source]**

| Role                         | Size / line-height          | Weight | Style     | Colour    | Other                                                                    |
| ---------------------------- | --------------------------- | ------ | --------- | --------- | ------------------------------------------------------------------------ |
| Body                         | 1.25rem / 1.66rem           | 400    |           | `#0e0e0e` | `p` margin 1.5rem top and bottom                                         |
| h1                           | 2.777rem / 3.333rem         | 900    | italic    | `#005481` | margin 1rem 0 .625rem                                                    |
| h2                           | 2.22rem / 2.833rem          | 800    |           | `#053451` | same margins                                                             |
| h3                           | 1.833rem / 1.944rem         | 700    |           | `#053451` | `padding-bottom:.75rem`; gets the gold ornament inside rich text (below) |
| h4                           | 1.527rem / 1.833rem         | 800    |           | `#005481` |                                                                          |
| h5                           | inherits size               | 700    |           | `#053451` |                                                                          |
| `h2.small` (eyebrow heading) | 1rem / 1.5rem               | 900    | uppercase | `#053451` |                                                                          |
| Lead paragraph               | 1.527rem, line-height 1.625 |        |           |           |                                                                          |
| `strong`                     |                             | 700    |           |           |                                                                          |
| blockquote                   |                             |        | italic    |           | 2px left border `#007ea8`, curly quotes added by CSS                     |
| Table caption                | 1.833rem                    | 700    |           | `#005481` |                                                                          |

Inner-page h1s are stepped responsively with utilities: `xl` (29px) on mobile, `2xl` at 768px, `3xl` (44px) at 1024px [source, About the Office page].

**Letter-spacing:** none. There is not a single `letter-spacing` declaration in the theme CSS [source].

**Casing habits [source]:**

- Sentence case almost everywhere: nav labels, buttons, card titles, section headings ("Areas of interest", "Recent press releases").
- Uppercase is used in exactly two places: the date line above each news item (`xs`, bold, light-blue) and the `h2.small` eyebrow.
- Heavy italic (900 italic) is reserved for identity and page titles: the official's name in the header and footer, and every h1. Nothing else is italic except blockquotes and the small "How can we help you?" label.

**Heading ornament [source, lines 116 to 119].** Inside rich-text areas (`.tw-typography`), every h3 gets a short gold rule under it with a dot at each end:

```css
.tw-typography h3 {
  background: linear-gradient(#d8ab46, #d8ab46) 0 100% / 40px 2px no-repeat;
  padding-bottom: 0.75rem;
  margin: 1rem 0 1.25rem;
  position: relative;
}
.tw-typography h3:before,
.tw-typography h3:after {
  content: " ";
  position: absolute;
  bottom: -2px;
  width: 6px;
  height: 6px;
  border-radius: 9999px;
  background: #d8ab46;
}
.tw-typography h3:before {
  left: 0;
}
.tw-typography h3:after {
  left: 40px;
}
```

The same idea, centred, is the callout rule: a 1px gold line one-sixth of the container wide with a 5px dot at each end (lines 455 to 466).

### Layout

**Container [source, lines 321 to 326].** Standard Tailwind container: `width:100%`, centred, `1rem` side padding at every size, `max-width` equal to the current breakpoint: 640 / 768 / 1024 / 1280 / 1536px.

**Other widths [source]:**

- Full-bleed sections (hero, spotlight card band) are capped at `max-width:1920px`, centred.
- Prose measure: `tw-max-w-content` = `66.25rem` (1060px).
- Feature card media: `max-width:800px`.
- Spotlight card: `max-width:350px`, `min-height:395px`.

**Breakpoints [source].** Tailwind defaults, min-width, mobile first: `sm` 640, `md` 768, `lg` 1024, `xl` 1280, `2xl` 1536. `lg` (1024px) is the one that matters: it is where the mobile menu becomes the desktop nav, stacked cards go side by side, and the hero takes its fixed height. A stray 540px query exists only for the translation footer.

**Grid.** No CSS Grid for page layout. Everything is flexbox:

- `layout-1-column`: full width.
- `layout-3-column`: column on mobile, row at `lg`, `1rem` margin on every item with a `-1rem` wrapper (so a 2rem gutter).
- `layout-2-column-flex`: column on mobile, row at `lg`, `gap:1.5rem`, children `width:40%` with `flex:1 1 auto` (so two equal columns that would wrap a third).

**Section vertical rhythm [source, lines 593 to 602].** Compact and uniform:

- Plain section: `margin: 2.5rem 0` (40px).
- Section with a background: margin removed, `padding: 2.5rem 0` instead.
- Components inside a section: `2.5rem` apart, first and last trimmed to 0.
- First and last section on the page lose their outer margin.
- Footer sits `2.5rem` below main.

There is one spacing step between major blocks (40px), with no larger "hero" spacing. Smaller internal gaps follow Tailwind's default 4px scale: `1rem` card padding, `1.25rem` panel padding, `.75rem` between chip links, `1.25rem` vertical padding per news item.

**Radius vocabulary [source].** Rounded everywhere, in a small set of sizes:

| Radius                    | Used on                                                        |
| ------------------------- | -------------------------------------------------------------- |
| `9999px` (pill)           | Buttons, search field, help button, pager, round toggle        |
| `100px` (one corner only) | Bottom-right of the hero image at `lg` and up                  |
| `60px` (two corners)      | Hero action panel                                              |
| `40px`                    | Images and video inside cards, text cards                      |
| `25px`                    | Tab and media panels                                           |
| `1.5rem`                  | Media carousel cards                                           |
| `1rem`                    | Default on every `img` (global rule `img{border-radius:1rem}`) |
| `.75rem`                  | Card panels, mega-menu bottom corners                          |
| `.5rem`                   | Form fields, tables                                            |
| `15px` / `12px`           | Help dropdown / cookie bar top corners                         |

## Header and Navigation

Structure, top to bottom [source]:

1. **Utility bar** (`#top-bar`). 40px tall, `#053451`, white text. Left: the office name as plain text (`.8rem`, growing to `1rem` then `1.25rem`). Right: a language switcher that JavaScript injects after page load (`#translate-wrap`); it is not in the fetched HTML, so its markup and look are [not verified] beyond its CSS (white bold underlined links, 200px dropdown with `0 0 15px 15px` corners).
2. **Main header.** White, with the gradient hairline as its bottom edge. Fixed height at desktop: 180px at `lg`, 215px at `xl`.
   - **Seal.** A large circular SVG seal, absolutely positioned so it rises up over the utility bar (`top:-10px`, `-30px` at `lg`). Height 75px mobile, 120px at `md`, 180px at `lg`, 270px at `xl`. At `xl` it is taller than the header itself and overhangs the content below [calc].
   - **Name lockup**, pushed right of the seal by left padding (85 / 140 / 200 / 320px). Line 1 is the official's name: 900 italic, `#005481`, stepping `lg` to `2xl` to `5xl` (67px) to `6xl` (80px). Line 2 is the office title: regular weight, `#053451`, stepping `sm` to `base` to `xl` to `2xl` (36px). The person's name is more than twice the size of the office title.
   - **Right column (desktop only, 25% wide):** search field, then a "How can we help you?" block.
     - Search: a pill, `#f3f3f3`, 20px magnifier icon in `#005481` inset at the left, borderless transparent input, placeholder in `#005481`. The submit button and sort selects are hidden with CSS; Enter submits.
     - Help block: a small italic label in `#005481` at `1rem`, then one pill button (`#005481` fill, white bold text, padding `.375rem .75rem`, a 16px chevron on the right that rotates 180deg when open). It opens a dropdown list of task links: `#f3f3f3` panel, `0 0 15px 15px` corners, large shadow, items `.625rem .75rem`, underline on hover. The open button squares its bottom corners so it joins the panel.
   - **Primary nav.** Absolutely positioned along the bottom edge of the header at `lg` and up, indented to clear the seal (180px, 305px at `xl`). Four top-level items, all `<button>`s. Text bold, `#053451`, `line-height:1`; hover and open state `#007ea8`. Items are separated by 3px solid gold vertical rules with `1rem` padding either side. No background, no underline.
3. **Breadcrumb row** (inner pages): inline list in `#005481`, items separated by 1px gold vertical rules.

**Dropdown / mega-menu style [source, lines 652 to 672].**

- Panels: `position:absolute; top:37px`, `#f3f3f3`, bottom corners `.75rem`, medium shadow, `z-index:10`.
- Items: regular weight, `#0e0e0e`, padding `.625rem .75rem`, underline (offset 4px) on hover.
- Three of the four menus are simple single-column lists.
- One is a mega menu: the panel becomes a flex row anchored to the left of the nav, with two columns. Each column has a non-clickable group heading (bold, `#053451`, 1px `#cfcfcf` rule beneath) over its list of links. No images, icons or descriptions in the mega menu.
- Opens on click, not hover. Closes when focus leaves the item. Entrance animation is `tw-tw-dropdown` (see Motion).

**Sticky behaviour:** none. No `position:sticky` or `position:fixed` rule targets the header, and no script listens for scroll [source]. The header scrolls away with the page.

**Alert bar:** none present at fetch time. A `#notifications` container sits under the header (empty), and the CSS has a `.tw-alert` component with only structural rules (inline message, a divider, inherited colours). Its colours come from background utilities chosen per alert, so what an alert looks like is [not verified].

**Mobile menu (below 1024px) [source].**

- Right column and nav disappear; a single icon button appears at the right of the header: 30px (45px at `md`), `#005481`, drawn with a CSS mask that swaps from a hamburger to a circled X on `aria-expanded`.
- It toggles one panel that expands in place under the header (not an off-canvas drawer, no overlay): `max-height:0` to `2000px` with the same dropdown animation.
- Panel contents in order: search pill, primary nav, help button. Top-level nav items are full-width rows with `.75rem` padding and a 1px gold rule under each; submenus expand inline as accordions with the `#f3f3f3` panel.

**Skip link:** first element in `<body>`, visually hidden until focused, then appears at `top:3.5rem; left:1rem` styled as a secondary pill button with a down-arrow icon.

## Hero Treatment

One full-bleed photograph (capped at 1920px), no headline, no text over the image, no overlay or gradient scrim [source].

- Desktop (`lg` and up): fixed `height:680px`, `object-fit:cover`, `object-position:top`. Bottom-left corner `1rem`, bottom-right corner `100px`. That single large corner is the hero's only shape gesture.
- Mobile: image at natural aspect ratio (source art is about 2.53:1), bottom corners `1rem`.
- Served with `<picture>` and six breakpoint-matched sources, 1x and 2x.
- It does not butt against the header: an empty breadcrumb row above it carries a top margin of `1.5rem` (`3rem` at `lg`), so there is a white gap between the header rule and the photo.

**The action panel.** The hero's only content is a "popular actions" panel pinned to the left edge:

- Closed, at desktop: vertically centred on the left edge, slid off-canvas so only a 120px tab shows (`transform: translate(-100%) translate(120px)`). The tab carries its title set vertically (`writing-mode:vertical-rl` rotated 180deg), `2.22rem`, white, on `rgba(0,84,129,.9)` with `0 60px 60px 0` corners.
- A round toggle button straddles the panel's right edge: white fill, 2px gold border, 30px gold arrowhead icon.
- Open: panel slides fully in, title turns horizontal, four links appear stacked. Links are white, `1.527rem`, underlined in `#007ea8` with 6px offset, `1.5rem` apart. The arrow rotates 180deg.
- Mobile: the panel sits directly below the image as a bar with `0 0 60px 60px` corners; the title is horizontal and the links expand downward (`max-height:0` to `600px`), toggle centred on the bottom edge.

Whether the panel starts open or closed on first paint is [not verified]; the HTML ships without the open class, so closed is the default unless a script I did not find opens it.

## Recurring Section Patterns (homepage, described generically)

Each is a self-contained component dropped into a section wrapper.

1. **Intro statement.** A single centred sentence in bold `#005481` at `2xl` (36px), followed by the centred gold dot-ended rule. No heading, no button. Functions as the page's mission line directly under the hero.

2. **Feature card (image with overlapping panel).** Large image left (max 800px, `40px` radius). To its right, a white panel (`.75rem` radius, large shadow, `3rem 2rem` padding) that overlaps the image by 60px and sits 60px higher than the image's bottom edge (`margin: 0 0 60px -60px`). Panel holds an h3 title, a short paragraph, and one primary pill button. Stacks vertically below `lg` with the panel full width under the image.

3. **Spotlight card row on a tinted band.** Three equal cards centred on the white-to-pale-blue gradient. Each card is one link: white, `.75rem` radius, extra-large shadow, max 350px wide, min 395px tall. Image fills the top 215px edge to edge (`object-fit:cover`, square corners inside the card's clip). Below, `1rem` padding, title in `#005481` at `lg` size in regular weight, one or two lines of body text. No button or "read more"; the whole card scales up on hover.

4. **Chip-link row ("wayfinder").** A small heading (900, `2xl`, `#053451`) over a wrapping row of topic links. Each link is `lg` size, bold, `#053451`, with a trailing 24px arrow icon and a pale-blue highlight on the lower half of the text that fills upward on hover. `.75rem` gap. No boxes or borders: the highlight is the chip.
   - Inner-page variant: the same links inside a white box with a 2px `#005481` border, 8px top border and `.5rem` radius, used as an in-page table of contents.

5. **Basic feature (media beside text).** Video or image left (max 800px, `40px` radius, 16:9), text right with `2rem` side padding: h3, paragraph, one bold text link. No panel, no shadow. The quieter sibling of pattern 2.

6. **Two-up panel row on the dot pattern.** Two equal white panels (`25px` radius, soft blue-tinted shadow), each with a tab-style header strip:
   - **News list panel.** Header is a single tab label with a 3px gold underline. Body is a list of four items separated by gradient hairlines; each item is a date line (uppercase, `xs`, bold, `#007ea8`) over a headline link (`lg`, regular weight, `#053451`), `1.25rem` vertical padding. A bold "view all" text link closes the panel.
   - **Media carousel panel.** Same header strip with the label left and back/forward arrow buttons right. Body is a horizontally sliding row of square image cards (17rem, 30rem at `xl`; `1.5rem` radius; caption beneath in a fixed 9rem-tall area). Cards lift on hover.

Not on the homepage: stat bands, testimonial blocks, logo rows, full-width CTA bands, icon grids. The CSS does define text cards with solid colour fills (`40px` radius, white text on blue/dark/red), an accordion, a step "wizard", tables and a pager, described under Components.

## Components

### Buttons [source, lines 426 to 454]

| Property               | Value                                                                                                                                                                                                                                 |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Shape                  | Pill, `border-radius:9999px`                                                                                                                                                                                                          |
| Type                   | 700, `1.25rem` / `1.66rem`                                                                                                                                                                                                            |
| Padding                | sm `.125rem .625rem` (font 1rem); md `.25rem 1.25rem`; lg `.5rem 1.5rem` (font 1.527rem)                                                                                                                                              |
| Primary                | `#005481` fill, white text. Hover: fill `#007ea8`.                                                                                                                                                                                    |
| Secondary              | White fill, 2px `#005481` border, `#005481` text. Hover: fill `#e4f3f7`.                                                                                                                                                              |
| Active (pressed)       | 2px gold (`#d8ab46`) ring with a 2px white offset                                                                                                                                                                                     |
| Disabled               | Primary: `#cfcfcf` fill, `#0e0e0e` text. Secondary: `#cfcfcf` border and text.                                                                                                                                                        |
| Shadow                 | None                                                                                                                                                                                                                                  |
| Icon                   | Optional, inline, `.5rem` gap, fill matches text                                                                                                                                                                                      |
| Destructive ("cancel") | Uses red `#9b2915` with hover fill `rgba(155,41,21,.1)`. The rule (line 210) sets both `color` and `background-color` to the same red, so how it actually renders is [not verified]; read it as "red outline-style button" in intent. |

- **Topic button** (defined, not on homepage): rectangular, `.375rem` radius, `#f3f3f3` fill, 8px gold left border, min-height 65px, `1.527rem` `#005481` text, label left and icon right; hover fill `#cfcfcf` with underline.
- **Focus:** there is no `:focus` style for buttons beyond the text colour. The gold ring is on `:active` only, and the CSS does not remove outlines, so keyboard focus shows the browser's default outline [inferred].
- **Transition:** the rule declares `.15s` with `cubic-bezier(.4,0,.2,1)` but then overrides duration with `var(--btn-transition-duration,150)`, a unitless fallback. That is invalid at computed-value time, so the hover colour change is probably instant [inferred, not verified in a browser]. Treat `.15s` as the intent.

### Links [source, lines 65 to 68 and 327 to 351]

| Variant                      | Rest                                                                          | Hover                                              | Focus                                               | Visited   |
| ---------------------------- | ----------------------------------------------------------------------------- | -------------------------------------------------- | --------------------------------------------------- | --------- |
| Rich-text / inline           | `#007ea8`, 1px underline drawn as a background gradient                       | Underline becomes dashed (10px repeat, 75% filled) | Thick gold band rises behind the bottom of the text | `#005481` |
| Bold "basic" link            | `#053451`, weight 900, `1.25rem`, same 1px underline in `#007ea8`             | Text turns `#007ea8`                               | Gold band                                           | `#053451` |
| Chip / shaded link           | `#053451`, bold, `1.527rem`, pale-blue fill on the lower half, trailing arrow | Fill animates to full height                       | Full fill plus gold glow `0 1px 4px 1px #d8ab46`    | `#053451` |
| Bare `<a>`                   | `#007ea8`                                                                     | `text-decoration-style:dashed`                     | `#005481`                                           | `#005481` |
| On dark (footer, hero panel) | White, underline in `#007ea8`, offset 5 to 6px                                |                                                    |                                                     |           |

Solid-to-dashed underline on hover and gold on focus are consistent across every link type.

### Cards [source, lines 467 to 509]

| Card                   | Radius                                      | Shadow                       | Border | Hover                                            |
| ---------------------- | ------------------------------------------- | ---------------------------- | ------ | ------------------------------------------------ |
| Spotlight (linked)     | `.75rem`                                    | XL at rest                   | none   | `transform:scale(1.05)`, `.2s`                   |
| Feature content panel  | `.75rem`                                    | LG                           | none   | none                                             |
| Media carousel card    | `1.5rem`                                    | MD                           | none   | lifts `translateY(-.5rem)`, shadow to LG, `.15s` |
| Tab / media panel      | `25px`                                      | `0 2px 4px rgba(5,52,81,.2)` | none   | none                                             |
| Text card (solid fill) | `40px`                                      | none                         | none   | none                                             |
| Card media             | `40px` on images and video (16:9 for video) |                              |        |                                                  |

Cards never have borders; separation is by shadow on white or on the tinted bands.

### Form fields [source, lines 131 to 211]

| Property                    | Value                                                                                                                                                                      |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Inputs, selects, textareas  | White, 1px `#cfcfcf` border, `.5rem` radius, padding `.5rem .75rem`, `1.25rem` text                                                                                        |
| Focus                       | 2px ring plus `outline-color:#005481`. The ring colour is not overridden, so it is Tailwind's default `rgba(59,130,246,.5)`, a brighter blue than anything in the palette. |
| Placeholder                 | rgb(243,243,243). Almost invisible on white; looks like an oversight rather than a choice.                                                                                 |
| Labels                      | Block, bold, above the field. Checkbox and radio labels regular weight, inline.                                                                                            |
| Help text                   | `1rem`, `hsla(0,0%,5%,.6)`                                                                                                                                                 |
| Checkbox / radio            | 18px, `#cfcfcf` ground, glyphs from the icon sprite                                                                                                                        |
| Fieldset legend             | `1.833rem`, 800, `#005481`                                                                                                                                                 |
| Submit                      | Primary pill button                                                                                                                                                        |
| File input button           | Secondary pill button                                                                                                                                                      |
| Form container (some forms) | `#efefef`, `8px` radius, padding `15px 15px 40px`                                                                                                                          |
| Field spacing               | `1rem` above and below each item                                                                                                                                           |

### Other defined components (CSS only)

- **Tabs:** buttons `10px 25px`, 3px transparent bottom border turning gold when selected, hover fill `#e4f3f7`; strip has a 1px `rgba(5,52,81,.1)` bottom rule.
- **Accordion:** rows divided by the gradient hairline, `.75em` padding, trigger at `1.527rem` with a chevron that rotates 90deg.
- **Tables:** 1px `#cfcfcf` border, `.5rem` radius, `#f3f3f3` head and foot, pale-blue full-width rows; collapse to stacked cards under 640px.
- **Pager:** 34px pill numerals, 2px `#005481` border, active one filled.
- **Cookie notice:** fixed to the bottom, inset 5% each side, `#e4f3f7`, top corners 12px, one primary button.

## Motion

Minimal, CSS-only, and entirely triggered by click or hover. There are no scroll-driven or entrance-on-scroll animations, no parallax, no page transitions [source: no scroll listeners or IntersectionObserver anywhere]. There is also no `prefers-reduced-motion` handling.

| Effect                      | Implementation                                                                                                                                                                                                                                              | Complexity | Cloneable? |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | ---------- |
| Dropdown / mobile menu open | `@keyframes tw-tw-dropdown { 0% {opacity:0; transform:scaleY(0)} 60% {opacity:1} to {transform:scaleY(1)} }`, `.2s ease-out`, `transform-origin:top`. JS only flips `aria-expanded`; CSS keys off `button[aria-expanded=true] + .menu`. No close animation. | Low        | Yes        |
| Chip-link highlight fill    | Background is `linear-gradient(0deg, #e4f3f7 50%, transparent 0)` at `background-size:100% 200%`; keyframes move `background-position` between `0 50%` and `0 100%`, `.2s ease`, `forwards`.                                                                | Low        | Yes        |
| Underline solid to dashed   | Underline is a 1px background gradient; hover swaps it for a 75%-filled gradient at `10px 1px`. No transition, instant.                                                                                                                                     | Low        | Yes        |
| Spotlight card hover        | `transform:scale(1.05)`, `.2s cubic-bezier(.4,0,.2,1)`                                                                                                                                                                                                      | Low        | Yes        |
| Media card hover            | `translateY(-.5rem)` plus larger shadow, `.15s`                                                                                                                                                                                                             | Low        | Yes        |
| Hero action panel           | Class toggle; `transition: all .15s cubic-bezier(.4,0,.2,1)` on the panel's transform, `.3s linear` on the arrow rotation                                                                                                                                   | Low        | Yes        |
| Tab switch                  | Panels stacked with `margin-right:-100%`; cross-fade via `transition: visibility .3s linear, opacity .3s linear` on `aria-hidden`                                                                                                                           | Low        | Yes        |
| Carousel                    | Vanilla JS sets `translateX(Nrem)` on a flex row, one card width per click; CSS `transition: all .3s cubic-bezier(.4,0,.2,1)`. No drag, no autoplay, no dots, no looping.                                                                                   | Low        | Yes        |
| Accordion                   | `transition: height .35s cubic-bezier(.4,0,.2,1)`; chevron rotates 90deg                                                                                                                                                                                    | Low        | Yes        |
| Help-button chevron         | `transition: transform .2s ease-out`, 180deg                                                                                                                                                                                                                | Low        | Yes        |

The common timing is `.2s`, with `.15s` for the smallest moves and `.3s` for fades and slides.

## Footer

Four stacked bands [source]:

1. **Name strip.** White, with the gradient hairline along its top edge. Left-aligned repeat of the header lockup at small size: name in 900 italic `#005481` (`xl`, `2xl` at `md`), office title beneath in `#053451`.
2. **Main band.** Solid `#005481`, `1.25rem` vertical padding, white text. A flex row at `lg` (stacked on mobile) with up to four groups:
   - White line-art seal (max 100px) with a row of 18px white social icons beneath, `1rem` apart.
   - Contact block: bold "Contact" label, then postal address and phone numbers in an `<address>`, `1.25rem` text.
   - Four utility links stacked and spread to the full column height, white, underlined in `#007ea8` (offset 5px).
   - A fourth slot that is empty in the fetched HTML. The CSS has a newsletter form for it (pill email field joined to a gold `#d8ab46` submit button), but the form was not present, so its appearance is [not verified].
3. **Legal bar.** `#f3f3f3`, `1rem` vertical padding. Copyright line left at `xs`, three policy links right in `#005481` at `xs` separated by 1px blue rules.
4. **Translation band.** `#053451`, white text, a heading with a translate icon and a row of language links (a `<select>` on mobile). Injected by JavaScript, so [not verified] beyond its CSS.

## What Makes It Feel the Way It Does

This section is my interpretation of the source, not a measurement.

- **Approachable rather than imposing.** For a law-enforcement office the geometry is soft: pill buttons, 40px image corners, a 100px hero corner, round seal. Nothing is square-cornered except the full-bleed bands.
- **One typeface doing everything, set large.** A 20px body and a generous scale make it read as plain-spoken and accessible. Hierarchy comes from weight and colour, never from tracking or caps.
- **A personal signature.** The heavy italic is used only for the official's name and page titles. It gives the masthead a campaign-signature quality and makes the name, not the office, the dominant mark.
- **Two blues and one gold.** Blue carries all the structure; gold appears only as thin ornaments (dividers, dot-ended rules, the selected tab, focus). It reads as institutional without being heavy, and the gold never fills an area.
- **Light throughout.** Dark colour is confined to the top bar and footer, so the page feels open and the photo hero is the only heavy element.
- **Service before message.** Two of the most prominent elements in the first screen are task lists (the "I want to" button and the hero action panel). The hero carries no slogan.
- **Calm.** Nothing moves unless touched, and what moves is small and quick.
- **Compact vertical rhythm.** 40px between sections is tight by current standards; the page feels dense and practical rather than spacious.

## Patterns That Would Transfer to a County Prosecutor's Office Site

1. **Utility bar plus oversized seal masthead.** A slim dark bar carrying the office name, with the official seal breaking up over it and a two-line lockup beside it. Works for any office with a seal.
2. **A task-first "I want to" control.** One pill button in the header opening a plain list of the things the public actually comes to do. Cheap to build and the most functionally relevant idea here.
3. **Hero as photograph plus action panel.** A single strong photo with one oversized rounded corner and a small panel of top tasks instead of a headline.
4. **The gradient hairline and the gold dot-ended rule.** Two tiny ornaments that do most of the brand work. Easy to re-colour.
5. **Mission line under the hero.** One centred bold sentence and a short ornamental rule, in place of a text-heavy intro.
6. **Feature card with overlapping white panel.** A good container for a lead story or a priority programme.
7. **Three-up spotlight cards on a pale tint.** Fully clickable, image-topped, no button.
8. **Chip-link row for topic areas.** Text links with a half-height highlight; lighter than a card grid when there are five to eight short labels.
9. **News list in a rounded panel.** Uppercase small date over a plain headline link, hairline dividers, one "view all" link.
10. **Footer in bands.** Identity strip, solid colour band with seal, contact and a few links, then a light legal bar.

Things to adjust rather than copy:

- **Name versus office.** Here the individual's name is far larger than the office title. Whether an elected prosecutor's site should lead with the person or the office is a client decision; the lockup works either way if the two lines swap emphasis.
- **Header is not sticky.** With a tall masthead (215px at desktop) the nav is gone after one scroll.
- **Accessibility gaps worth not inheriting:** near-invisible placeholder text, no explicit keyboard focus style on buttons, a 5% hover scale on cards and no reduced-motion fallback, upright 900 weight requested without a matching font file.
- **Body size.** 20px base is larger than most sites; keep it if the audience skews older or less web-fluent, but check line lengths on mobile.

## Assets and Licensing Notes

1. **Typeface.** Mr Eaves XL Modern is delivered through the NY AG's own Adobe Fonts kit. That kit cannot be reused. Using the same face needs the client's own Adobe Fonts project (or a licence from the foundry). Whether the client has Adobe Fonts access is unknown.
2. **Icons.** The sprite appears to be Eva Icons [inferred], which is open source; confirm the licence before use. Any consistent rounded line-icon set would give the same effect.
3. **Seal and photography.** NY-specific; nothing reusable. The seal treatment needs a clean vector of the client's own seal in two versions (full colour on white, white line art for the footer).
4. **Patterns.** The dot tile is trivial to regenerate (pale blue-gray dots on white, about 54x30px repeat).

## Reusable Tokens

Stack-neutral, values straight from the source. Colour names kept as the site names them.

```css
:root {
  /* colour */
  --blue: #005481;
  --dark-blue: #053451;
  --light-blue: #007ea8;
  --lightest-blue: #e4f3f7;
  --gold: #d8ab46;
  --dark: #0e0e0e;
  --gray: #cfcfcf;
  --light-gray: #f3f3f3;
  --white: #fff;
  --red: #9b2915;

  /* type: one family, weights 400 / 700 / 800, 900 italic for h1 and name */
  --text-xs: 0.875rem;
  --text-sm: 1rem;
  --text-base: 1.25rem;
  --text-lg: 1.527rem;
  --text-xl: 1.833rem;
  --text-2xl: 2.22rem;
  --text-3xl: 2.777rem;
  --text-5xl: 4.166rem;
  --text-6xl: 4.999rem;

  /* layout */
  --container-pad: 1rem; /* max-widths 640 / 768 / 1024 / 1280 / 1536 */
  --bleed-max: 1920px;
  --measure: 66.25rem;
  --section-gap: 2.5rem;

  /* radius */
  --r-pill: 9999px;
  --r-hero: 100px;
  --r-media: 40px;
  --r-panel: 25px;
  --r-card: 0.75rem;
  --r-field: 0.5rem;
  --r-img: 1rem;

  /* shadow */
  --shadow-panel: 0 2px 4px rgba(5, 52, 81, 0.2);
  --shadow-md:
    0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  --shadow-lg:
    0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  --shadow-xl:
    0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);

  /* signature divider */
  --hairline: linear-gradient(90deg, #e4f3f7, #005481, #e4f3f7);

  /* motion */
  --ease: cubic-bezier(0.4, 0, 0.2, 1);
  --dur-fast: 0.15s;
  --dur: 0.2s;
  --dur-slow: 0.3s;
}
```

## Notes on This Teardown

- **Deviation from the skill template.** The site-teardown skill ends with a clone build plan (recommended stack, npm packages, section-by-section build order). The brief was visual language only, not page architecture, so that is replaced with the transferable-patterns list and the token block. The skill also says to use WebFetch and save under `research/`; I used curl and the scratchpad path as instructed.
- **Nothing was rendered.** No browser, no screenshots. Every statement about appearance is derived from CSS and markup. Hover, focus and open states are as declared, not as observed.
- **JavaScript-injected content not seen:** the language switcher in the top bar, the translation band at the bottom, and the cookie notice's visible state.
- **Not present at fetch time, so unverified:** any site-wide alert bar, the footer newsletter form, and a Twitter timeline panel that the CSS still styles for the homepage.
- **Fonts.** The kit CSS was fetched and read; the font files themselves were not downloaded, so glyph shapes and rendering are unverified.
- **Photos** were not downloaded; hero and card imagery is known only from alt text and dimensions.
- **Scope.** The homepage was read in full. Three inner pages were fetched only to confirm heading, breadcrumb and button usage; they were not torn down.

---

# Site Teardown: Craig Swapp & Associates (visual-language reference)

**URL:** https://www.craigswapp.com/
**Built by:** Law Firm Sites (footer credit links to lawfirmsites.com; theme header names the author as Kaleb Mosher)
**Platform:** WordPress, custom parent/child theme (`lawfirmsites` / `lawfirmsites-child`), homepage on a `page-flex-new` template
**Date analyzed:** 2026-10-07
**Scope:** homepage only, plus the `/contact/` page for form fields (the homepage has no form). Inspiration only: this document records the visual language, not the content or page architecture.

## How to read this document

- **Method.** Everything was fetched with curl and read as source. No browser was used, so nothing here is a computed style or a screenshot observation.
- **"Confirmed"** means the value is literally present in the fetched HTML, CSS or JS.
- **"Cascade-resolved"** means several rules compete for the same property and I picked the winner by source order and specificity. These are likely right but were not verified in a browser.
- **"Inferred"** means I am reading intent from class names, file names or library defaults.
- **Raw files** are in `craigswapp/raw/` next to this document. The helper scripts I wrote are in `craigswapp-scripts/`.

Two things about the source make the cascade messier than usual:

1. The cached page served to visitors has WP Rocket's "used CSS" inlined as one 219 KB `<style>` block. I also fetched the un-optimised variant (`/?nowprocket=1`) to see the original stylesheet order.
2. The homepage loads **Bootstrap 5.2.2 and UIkit 3.17.11 together**, then a custom layer, then a second 66 KB inline `<style>` block in the head that repeats much of the custom layer with a few changed values. Where the two disagree, the inline block comes last and wins.

## Tech stack (confirmed from source)

| Technology                                                                   | Evidence                                                                                                                                                                                   | Purpose on this site                                                                                              |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| WordPress on PHP 8.4.25, LiteSpeed / WPX Cloud                               | Response headers, `wp-content` paths                                                                                                                                                       | CMS and hosting                                                                                                   |
| Theme `lawfirmsites` + `lawfirmsites-child`                                  | Body classes, stylesheet paths                                                                                                                                                             | Custom theme; sections carry `flexible-layout layout-*` classes (a flexible-content page builder, inferred)       |
| UIkit 3.17.11 (CSS and JS with icons)                                        | Banner comment in `combined-styles.css` and `uikit_with_icons.min.js`                                                                                                                      | Grid, sections, navbar, dropdowns, off-canvas menu, slideshow, slider, switcher, accordion, icons, lazy images    |
| Bootstrap 5.2.2 (CSS and JS)                                                 | Stylesheet link                                                                                                                                                                            | Only the footer uses its grid (`.container`, `.row`, `.col-*`) and `.btn`                                         |
| Boxicons 2.1.4                                                               | Stylesheet link, `.bx` classes                                                                                                                                                             | Footer social icons                                                                                               |
| jQuery 3.7.1                                                                 | Script tag                                                                                                                                                                                 | Mobile sub-menu toggle, mega-menu tab builder                                                                     |
| slick-slider-accessible                                                      | Script and CSS loaded                                                                                                                                                                      | **Not used on the homepage** (no `.slick` markup in the body)                                                     |
| WP Rocket 3.23.3.3                                                           | Generator meta                                                                                                                                                                             | Unused-CSS removal, JS delayed until first user interaction, lazy images                                          |
| Adobe Fonts kit `uoe1eyi` + Google Fonts                                     | Two stylesheet links                                                                                                                                                                       | Both serve Lato and Montserrat (see Typography)                                                                   |
| Gravity Forms 2.10.5                                                         | `/contact/` page only                                                                                                                                                                      | Contact form                                                                                                      |
| Juvo Leads chat, CallRail number swap, about a dozen ad and analytics pixels | Script tags and inline snippets (GTM, Google Ads, Hotjar-style `hj`, Spotify Ads, Premion, Audiohook, mgln.ai, `oaiq` from bzrcdn.openai.com, lightsite.ai, Koko Analytics, `_tvq`, `saq`) | Lead capture and ad attribution. Not part of the visual language; listed because they shape the "commercial" feel |

## Design system

### Colour palette

All values confirmed in `combined-styles.css` (custom section, line 14656 onward) and `navstyles.css`. Counts are occurrences in that custom layer.

| Role              | Value                                                                                                                                                     | Where it is used                                                                                                                                         |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Deep navy         | `#0C192A` (9)                                                                                                                                             | Body text colour on light sections. Background of most dark sections (UIkit "secondary"), dark cards, footer locations band. Hover state of navy buttons |
| Navy              | `#122741` (11)                                                                                                                                            | Hero base colour, the "primary" panel sections, the inner testimonial panel, off-canvas menu, footer bottom band, navy button fill                       |
| CTA red           | `#D62027` (30)                                                                                                                                            | Every primary button, 5px accent rules, "next" slider arrow, outlined numerals, mega-menu heading underline                                              |
| Dark red          | `#B40023` (9)                                                                                                                                             | Button hover and focus fill. Accent text on light backgrounds (`.uk-text-secondary`). Links inside accordion answers. Stroke colour of the line icons    |
| Coral             | `#DC555A` (6), `#D15257` (4)                                                                                                                              | Red that stays legible on navy: eyebrow on a dark split section, footer links, phone numbers, social icons                                               |
| Footer link hover | `#A52026`                                                                                                                                                 | Footer link hover                                                                                                                                        |
| Muted blue-grey   | `#A4ABB4` (4)                                                                                                                                             | Body copy on dark backgrounds (footer text, paragraph in the dark split section)                                                                         |
| Slate blue        | `#354F70`                                                                                                                                                 | "Previous" slider arrow                                                                                                                                  |
| Social hover      | `#1D3F69`                                                                                                                                                 | Social icon hover background                                                                                                                             |
| Dim note          | `#49525D`                                                                                                                                                 | Small italic note in footer cards                                                                                                                        |
| White             | `#FFF` (42)                                                                                                                                               | Page background, text on dark, nav hover pill                                                                                                            |
| Light greys       | `#F8F8F8` (accordion cards, UIkit "muted"), `#E6E8EB` (dropdown hover), `#EEE` (mega-menu tab rail), `#DFDFDF` (accordion border)                         | Neutral surfaces and borders                                                                                                                             |
| Text greys        | `#333` (headings on light, UIkit default left in place), `rgb(102,102,102)` (default link colour, set through `--bs-link-color`), `#999` (dropdown links) | Text on light                                                                                                                                            |
| Placeholder       | `#8E96A5`                                                                                                                                                 | Form placeholder text (parent theme)                                                                                                                     |

The logo SVG uses `#fff`, `#d62027` and a grey `#84878b`.

**Gradients (confirmed, exact strings):**

| Name               | Value                                                                                                                                               | Used on                                                               |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Hero overlay       | `linear-gradient(#0c192adb, #0c192aa6, #04080D)`                                                                                                    | Over the hero photo, top to bottom: 86% navy, 65% navy, near-black    |
| Photo-card overlay | `linear-gradient(222deg, #47131D 0%, #08132159 32%, #0A1727E6 64%, #0C192A 100%)`                                                                   | Image cards: maroon top-right corner fading to solid navy bottom-left |
| Stat-slide overlay | `linear-gradient(180deg, #0C192A 0%, #081321AB 73%, #7202184d 100%)`                                                                                | Stat slideshow over a photo                                           |
| CTA-band overlay   | `linear-gradient(247deg, #720218 0%, #081321D1 55%, #0C192A 100%)`                                                                                  | Rounded call-to-action band over a photo                              |
| Radial glow        | `radial-gradient(closest-side at 50% 50%, #B40023 0%, #D6202700 100%)` at `opacity: .29`, positioned `top:-50%; left:-50%; width:100%; height:100%` | A soft red glow in the top-left corner of two dark sections           |
| Mobile hero fade   | `linear-gradient(0deg, #122741 0, #122741 10%, 50%, transparent)`, 30px tall                                                                        | Blends the bottom of the hero photo into navy at 960px and below      |

**Contrast ratios (computed by me from the hex values, not taken from the site):**

| Pair                                              | Ratio             |
| ------------------------------------------------- | ----------------- |
| White on `#D62027` (buttons)                      | 5.13:1            |
| White on `#B40023` (button hover)                 | 7.08:1            |
| White on `#0C192A` / `#122741`                    | 17.68:1 / 15.08:1 |
| `#A4ABB4` on `#0C192A` / `#122741`                | 7.63:1 / 6.51:1   |
| `#D15257` on `#0C192A` / `#122741` (footer links) | 4.26:1 / 3.63:1   |
| `#DC555A` on `#0C192A` (eyebrow)                  | 4.62:1            |
| `#49525D` on `#0C192A` (footer note)              | 2.23:1            |
| `#999` on white (dropdown links)                  | 2.85:1            |
| `#B40023` on white                                | 7.08:1            |

### Light and dark rhythm

The homepage is dark-dominant. Section order with background (confirmed from classes; D = dark, L = light):

| #   | Section pattern          | Background                                      | Shape                                                                |
| --- | ------------------------ | ----------------------------------------------- | -------------------------------------------------------------------- |
| 1   | Hero                     | D: photo + navy gradient over `#122741`         | Full bleed                                                           |
| 2   | Testimonial slider       | D: `#0C192A`, inner panel `#122741`             | 50px radius, overlaps the hero by 70px and the next section by 160px |
| 3   | Stat slideshow           | D: `#0C192A`                                    | Inner 25px-radius card                                               |
| 4   | Split text / media       | D: `#0C192A`                                    | Full bleed                                                           |
| 5   | Icon-column grid         | L: near-white paper-grain photo                 | Full bleed                                                           |
| 6   | Single-column CTA        | D: `#0C192A` + red radial glow                  | 50px radius                                                          |
| 7   | Split text with quote    | L: white                                        | Full bleed                                                           |
| 8   | Image-card slider        | D: `#0C192A`                                    | 50px radius                                                          |
| 9   | Split text with portrait | L: white                                        | Full bleed                                                           |
| 10  | Numbered step cards      | D: `#122741` + red radial glow, cards `#0C192A` | 50px radius, overlaps the next section by 160px                      |
| 11  | CTA band                 | D: photo + red-to-navy gradient                 | 25px-radius card inside a large container                            |
| 12  | FAQ accordion            | L: white, cards `#F8F8F8`                       | Full bleed                                                           |
| 13  | Footer: locations        | D: `#0C192A`                                    | Full bleed                                                           |
| 14  | Footer: bottom band      | D: `#122741`                                    | Full bleed                                                           |

After the opening run of four dark sections, light and dark alternate one for one. The dark sections are the ones with rounded corners, so they read as navy "sheets" laid over a white page.

### Typography

**Families and sources (confirmed):**

- **Montserrat** for headings, navigation and numerals. **Lato** for body text, links and buttons.
- Both families are loaded twice: from Adobe Fonts (`https://use.typekit.net/uoe1eyi.css`, `font-display: auto`) and from Google Fonts (`css2?family=Lato:wght@400;700&family=Montserrat:wght@300..900&display=swap`). Which source's file actually renders for a given weight is not something I can tell from source.
- Adobe kit faces: Lato 400/500/600/700/800 with italics; Montserrat 200/300/400/500/600/700/800 with some italics. Google faces: Lato 400/700; Montserrat 300 to 900.
- Base rules: `body { font-family: "montserrat", sans-serif; font-size: 16px; color: #0C192A }`, then `body, li, p, a { font-family: lato, sans-serif; line-height: 1.5 }`, then `h1..h6 { font-family: montserrat, sans-serif; font-weight: 500; line-height: 1.2 }` and `h1 { font-weight: 800 }`.

**Scale (cascade-resolved unless marked):**

| Role                                                   | Family     | Size                                                                    | Weight                                                                          | Line-height | Notes                                                                                                                       |
| ------------------------------------------------------ | ---------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------- |
| Body                                                   | Lato       | 16px                                                                    | 400                                                                             | 1.5         | Colour `#0C192A`                                                                                                            |
| Hero headline (h1)                                     | Montserrat | `clamp(1.5rem, 8vw, 70px)`; at 960px and up `clamp(1.5rem, 5vw, 110px)` | 800                                                                             | 1           | An older rule (`20vw`, then `140px` at 960px) is still in `combined-styles.css` but is overridden by the later inline block |
| Hero kicker (h2, placed above the h1 with `order: -1`) | Lato       | 30px                                                                    | 500                                                                             | 1.2         |                                                                                                                             |
| Section title (`h2.section-title`)                     | Montserrat | 45px, 70px at 960px and up                                              | 500 by default; 300 with `.uk-text-light`; 700 at 60px on the single-column CTA | 1.2         | One dark split section declares 43px at weight 100, but neither font source lists a 100 face                                |
| Plain h2                                               | Montserrat | 30px up to 767px; `calc(1.325rem + .9vw)` from 768px; 2rem from 1200px  | 500                                                                             | 1.2         |                                                                                                                             |
| Stat numeral                                           | Montserrat | 45px, 70px at 960px and up                                              | 500                                                                             | 1.2         | Confirmed                                                                                                                   |
| Outlined numeral (`.highlight`)                        | Montserrat | 102px                                                                   | 700                                                                             | not set     | Confirmed. Fill `#0c192a` (same as the card), outline faked with five 1px `#D62027` text-shadows                            |
| h3 (card titles)                                       | Montserrat | 1.5rem (24px)                                                           | 500; `bolder` on cards                                                          | 1.2         |                                                                                                                             |
| h4 (eyebrow)                                           | Montserrat | 1.25rem (20px)                                                          | 600 with `.uk-text-bold`                                                        | 1.2         |                                                                                                                             |
| h5 (eyebrow variant)                                   | Montserrat | 16px                                                                    | 600                                                                             | 1.2         | `#DC555A` on the dark split section                                                                                         |
| Lead paragraph (`.uk-text-lead`)                       | Lato       | 19px                                                                    | 600 with `.uk-text-bold`                                                        | 1.5         | Confirmed override of UIkit's 1.5rem                                                                                        |
| Small text                                             | Lato       | 0.875rem                                                                | inherits                                                                        | 1.5         |                                                                                                                             |
| Button                                                 | Lato       | 15px                                                                    | 600                                                                             | 1           | Uppercase; `letter-spacing: 2px` from 768px                                                                                 |
| Nav link                                               | Montserrat | 0.875rem                                                                | bold                                                                            | not set     | Uppercase                                                                                                                   |
| Header tagline / phone                                 | Montserrat | 16px / 22px                                                             | 600                                                                             | 1.4 / 1     | `letter-spacing: 1px` / `2px`                                                                                               |
| Footer city name                                       | Lato       | 24px                                                                    | 300 declared                                                                    | 1.2         | No 300 Lato face in either font source                                                                                      |

**Letter-spacing (confirmed):** only three uses on the page: buttons (2px), the header phone button (2px) and the header tagline (1px). Headings and eyebrows have none.

**Casing habits:**

- `text-transform: uppercase` is applied by CSS only to buttons, top-level nav links, footer nav links and the state name in footer cards.
- Eyebrows, the hero headline and most card titles appear in capitals because they are **typed in capitals in the content**, not transformed.
- Section titles are title case.
- The recurring heading pair is: small bold all-caps eyebrow (20px) directly above a very large, light or medium-weight title (70px). The size jump of 3.5x with no letter-spacing is the main typographic signature.

### Layout, spacing and breakpoints

**Containers (confirmed, UIkit defaults left unchanged):**

| Class                  | Max width                                    | Used for                            |
| ---------------------- | -------------------------------------------- | ----------------------------------- |
| `.uk-container`        | 1200px                                       | Stat slideshow, icon-column section |
| `.uk-container-large`  | 1400px                                       | Most sections                       |
| `.uk-container-xlarge` | 1600px (header: 1700px from 1600px viewport) | Header and hero                     |
| Footer `.container`    | 1500px                                       | Both footer bands                   |

Side padding on UIkit containers is 15px, 30px from 640px and 40px from 960px. Containers use `box-sizing: content-box`, so the padding sits outside the max width.

**Spacing scale (confirmed, UIkit defaults):** the whole page is built from 10 / 15 / 20 / 30 / 40 / 70 / 140px.

| Token                               | Value                                                                                                          |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Section padding (`.uk-section`)     | 40px top and bottom; 70px from 960px                                                                           |
| Large section (`.uk-section-large`) | 70px; 140px from 960px. This is the default for content sections                                               |
| Extra-small section                 | 20px                                                                                                           |
| Grid gutter                         | 30px; 40px from 1200px                                                                                         |
| Large grid gutter                   | 40px; 70px from 1200px                                                                                         |
| Small grid gutter                   | 15px                                                                                                           |
| Box padding (`.uk-padding`)         | 30px; 40px from 1200px. Small 15px. Large 40px; 70px from 1200px                                               |
| Stack margins                       | 10px small, 20px default, 40px large (70px from 1200px)                                                        |
| Section overlap                     | `margin-bottom: -160px` (`.section-overlap-bottom`); the homepage's first section also has `margin-top: -70px` |
| Footer bands                        | Locations: 70px top / 90px bottom (cascade-resolved). Bottom band: 50px top / 100px bottom (cascade-resolved)  |

**Grid:** flexbox throughout. Typical column splits: 1/2 + 1/2 from 960px or 1200px for split sections; 2/5 + 3/5 for hero and FAQ; 1/3 + 2/3 for the testimonial section; card grids of 2 columns from 960px and 3 or 4 columns from 1200px.

**Breakpoints (confirmed):**

- Main system (UIkit): 640, 960, 1200, 1600px. 960px is the mobile-to-desktop switch (navigation appears, split layouts begin). 1200px is where 3 and 4 column grids and two-column section headers begin.
- Footer (Bootstrap): 576, 768, 992, 1200, 1400px.
- Ad hoc queries in the custom layer: 500, 576, 767/768, 1280, 1330, 1400, 1450px. Most of these exist to keep the navigation from wrapping between 960 and 1450px.

### Radius, borders and shadows (confirmed)

| Element                                     | Value                                                                      |
| ------------------------------------------- | -------------------------------------------------------------------------- |
| Rounded sections                            | 50px (`.uk-section.uk-border-rounded`, `.uk-border-rounded-large`)         |
| Cards, accordion items, CTA band, stat card | 25px (`.uk-border-rounded-medium`)                                         |
| Nav links and dropdowns                     | 5px                                                                        |
| Buttons                                     | **0** (square). This is deliberate contrast with the very round containers |
| Slider arrows, icon rings, social icons     | 50%                                                                        |
| Form fields (`/contact/`)                   | 10px                                                                       |
| Accent rule                                 | 5px solid `#D62027`                                                        |
| Accordion item border                       | 1px solid `#DFDFDF`                                                        |
| Dropdown shadow                             | `0 5px 12px rgba(0,0,0,.15)`; on hover `0 28px 50px rgba(0,0,0,.16)`       |
| Off-canvas menu                             | `box-shadow: inset -10px 0 25px -15px #000`                                |
| Cards and sections                          | No shadows at all. Depth comes from colour blocks, radius and overlap      |

## Header and navigation

**Structure (confirmed):**

- `header#masthead` is `position: absolute; top: 0; z-index: 999` and transparent, so it sits over the hero photo. It is **not sticky**: there is no `uk-sticky` attribute and no fixed-position rule for it. Top padding is 30px from 960px and 15px from 1200px.
- One row inside a 1600px container: logo left (SVG, 314 x 55, constrained to 180 to 200px at smaller widths), five top-level links spread with `justify-content: space-between`, and a phone block on the right.
- **No utility bar and no alert bar** in the markup.
- Phone block (`.header-phone`): a one-line tagline (16px, weight 600, 1px tracking) above a red button containing the phone number (22px).

**Top-level link style (confirmed):** Montserrat, bold, uppercase, 0.875rem, white, `padding: 9px 21px` at 1450px and up (tighter below), `border-radius: 5px`. On hover the link becomes a white pill with black text. Links with children square off their bottom corners so the pill joins the dropdown like a tab.

**Simple dropdowns (confirmed):** white panel, no padding, opens on hover with UIkit's `uk-animation-slide-top-small` at 100ms. Items are 0.875rem, `#999` turning `#666`, with a `#E6E8EB` hover background. Third-level menus fly out to the right on a `#E6E8EB` background.

**Mega menu (confirmed in CSS and JS; the JS-built part was not seen rendered):**

- Full-width white panel, opens on hover with a 300ms fade and a 100ms hide delay.
- `menuTabsLayout.js` builds a vertical tab rail on the left from the first-level items when the viewport is wider than 959px. Rail background `#EEE`, items 20px, right-aligned, minimum width 210px. The active tab is white with a left-edge shadow. A smaller tab size (15px) is used for a second tier of items.
- The right side shows the selected group: a 28px heading link with a 5px red underline, then links at 18px in two columns, with nested groups at 14px. A 2px red top border (`.red-border-top`) separates sub-groups.

**Mobile, 959px and below (confirmed in CSS; arrangement inferred):**

- The link row is hidden and a hamburger icon opens an off-canvas panel from the right (`uk-offcanvas="overlay: true; flip: true"`). Panel width 270px (350px from 640px), background `#122741`.
- Menu items are an accordion. Each parent row has a separate square expand button (10px padding, 15% white fill, 1px 50% white border). Sub-lists open with jQuery `slideToggle`; the chevron flips with `rotateX(180deg)` over 0.22s.
- The phone block becomes a full-width two-cell bar, 48px high: tagline cell in navy, phone cell in red, each 50% wide. The header container uses `flex-wrap: wrap-reverse`, which I read as placing this bar above the logo row.
- A third-party script (Juvo Leads) also injects a fixed "Call Now / Text Now" bar at the top of the screen at 960px and below. Its CSS is in the page; its markup is added by JavaScript on load, so I did not see it.

## Hero treatment

Confirmed from markup and CSS; described generically.

- **Background:** a wide photograph of the region (the desktop file is a 1920 x 768 city skyline against mountains; I viewed it). Three such photos cross-fade in a UIkit slideshow: `animation: fade; autoplay: true; autoplay-interval: 7000`. Separate mobile and desktop crops are served through `<picture>` with a 768px switch. The first image is also present as a static cover image so the hero paints before JavaScript runs.
- **Overlay:** the navy gradient listed above, heavy enough that the photo reads as texture. Section base colour `#122741`.
- **Layout:** two columns from 960px. Left column 2/5 (1/2 from 1600px), right column 3/5 (1/2 from 1600px), bottom-aligned.
- **Left column, centred text stack, top to bottom:** kicker line (Lato 30px), headline (Montserrat 800, up to 110px, line-height 1, two lines), a small badge image, one red button, a 25px one-line statistic, a second badge image.
- **Right column:** a cut-out group portrait (transparent PNG, 1048 x 895; I viewed it) standing on the bottom edge of the hero. On mobile it is hidden in the grid and shown below the text at up to 450px wide.
- **Vertical padding on the text stack:** 120px top / 50px bottom on mobile; 120 / 170 from 768px; 100 / 130 from 960px; 120 / 170 from 1400px. The hero has no fixed height.
- **Exit:** the next section is a navy sheet with 50px corners pulled up 70px over the bottom of the hero.

## Recurring section patterns

Each pattern is described so it can be rebuilt with different content.

**1. Split section header.** Two columns from 1200px. Left: eyebrow (h4, bold, caps) and section title (45px, 70px on desktop). Right: a 5px red rule with 50px of space below it (`.secondary-border:before`), then one bold lead paragraph at 19px. Used above card grids and sliders.

**2. Icon-column grid.** Under a split header: 2 columns from 960px, 3 from 1200px, 30px row gap. Each cell is a line icon (stroke 2px, `#B40023`, no fill, roughly 99 x 88), an h3 in caps, and a paragraph whose first sentence is bold. Sits on a near-white paper-grain background photo.

**3. Testimonial slider.** Left third: eyebrow, a bold h2, a button. Right two-thirds: a `#122741` panel with 50px corners and 40 to 70px padding. Each slide is a 110px avatar with name and place on the left quarter and a bold pull-quote heading plus paragraph on the right. Dot navigation below; circular arrow buttons on the panel edges.

**4. Stat slideshow.** A single card, maximum 1000px wide, 25px corners, photo background with the stat-slide gradient. Each slide is a one-line label, a large numeral (70px) and a button, centred. Card height is set by `padding-bottom`: 85% on phones, 50% from 500px, 25% from 768px. No autoplay.

**5. Image-card slider.** Under a split header. Cards show 2 across from 960px and 4 across from 1200px. Each card is a cover photo under the diagonal maroon-to-navy gradient, with an h3, a short paragraph and a red-outlined circular chevron. The whole card is one link. I found no hover rule specific to these cards.

**6. Split text with pull quote.** Two columns from 1200px with a 70px gutter. Left: eyebrow, section title, then a quote block (padding 30 to 40px, a quote-mark icon at 5x size and 10% opacity behind small italic text, attribution right-aligned in bold). Right: red rule, bold lead, body paragraphs, button. A variant swaps the quote for a portrait photo (maximum height 445px).

**7. Numbered step cards that act as tabs.** A navy `#122741` section with 50px corners and the red radial glow. Centred eyebrow and title. Four cards in a row from 1200px (2 from 960px), 15px gutters. Each card is `#0C192A`, 25px corners, 30 to 40px padding, with a 102px outlined numeral, a bold h3, a short paragraph and a navy outline button pinned to the bottom. Clicking a card reveals a matching full-width detail panel below (UIkit switcher, none open initially) and the page scrolls to it smoothly.

**8. CTA band.** A 25px-radius card inside a 1400px container: photo background with the red-to-navy diagonal gradient, white text. Two columns from 960px: title, bold sub-heading and button on the left; one or two paragraphs on the right. A louder single-column variant puts a 60px bold title and an oversized button (30px text, 20px 25px padding) on a rounded navy section.

**9. FAQ split.** Two columns from 1200px, vertically centred. Left 2/5: eyebrow, light-weight section title, button. Right 3/5: accordion. Each item is a `#F8F8F8` card with 25px corners, 15px padding and a 1px `#DFDFDF` border, 20px apart. Question in bold 1.25rem with a plus/minus icon floated right.

**10. Centred heading with side rules.** `.lined`: a centred heading with a 5px red line running out to both edges, 20px clear of the text. Used once, above the footer location grid.

## Components

### Buttons (confirmed)

| Variant                                     | Rest                                                                                                                                                 | Hover and focus                        |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| Primary (`.uk-button-default`; also `.btn`) | Fill `#D62027`, border 1px `#D62027`, white text, Lato 600 15px uppercase, 2px tracking from 768px, `padding: 10px 20px`, `line-height: 1`, radius 0 | Fill `#B40023`, border stays `#D62027` |
| Navy (`.uk-button-secondary`)               | Fill `#122741`, border 1px `#FFF`, white text                                                                                                        | Fill and border `#0C192A`              |
| Header and footer `.btn`                    | Same red, `padding: 10px 25px`, border 3px, 2px tracking                                                                                             | Fill `#B40023`                         |
| Slider arrows                               | 36px circles; previous `#354F70`, next `#D62027`; arrow icon at 2x                                                                                   | UIkit default hover on dark            |

Transition on buttons: `0.1s ease-in-out` on colour, background and border. The colour set is forced with `!important`, so primary buttons look identical on light and dark backgrounds. The hero button is taller than the rest (`line-height: 2.1` instead of 1).

### Cards

No single card component. Cards are assembled from utilities: a background colour (`#0C192A`, `#122741` or `#F8F8F8`), 25px radius, 15 to 40px padding, no shadow, no border except on accordion items.

### Links (cascade-resolved)

- Default: `rgb(102,102,102)`, underlined, same colour on hover.
- On dark sections: white.
- Accent links in accordion answers: `#B40023`.
- Footer: `#D15257`, hover `#A52026`; footer nav and city names white, hover `#D15257`.
- All anchors carry `transition: all .2s ease` from the parent theme.

### Focus states (confirmed)

- UIkit sets `:focus { outline: none }` and `:focus-visible { outline: 2px dotted #333 }` (white inside dark sections).
- The parent theme then sets `a:focus, a:hover { outline: 0; box-shadow: none }` and the same for `button`. That selector is more specific than `:focus-visible`, so as I read the cascade, **links and buttons show no focus ring**. Buttons do change colour on focus, the same change as hover.
- A skip link ("Skip to content") is present and becomes visible on focus.

### Form fields (from `/contact/`, which uses a different stylesheet stack)

The homepage has no form. The contact page loads the older child `style.css`, a `combined-styles-testing.css` I did not fetch, and Gravity Forms' own theme CSS, which I also did not fetch. From the parent and child theme rules I did read:

- Inputs, selects and textareas: `padding: 15px 20px`, `border: 1px solid black`, `border-radius: 10px`, `font-size: 15px`, text `#000`, placeholder `#8E96A5`. Select height 59px.
- Labels are replaced by placeholders (required-field markers are hidden).
- Form maximum width 900px; 7px row gap.
- Custom consent checkbox: 20px white box, 5px radius, inset shadow `0 3px 6px #00000052`; turns `#D62027` with a check glyph when ticked.
- Submit is the red `.btn`.
- Field focus styling: not verified.

## Motion

| Effect                             | Implementation (confirmed)                                                                                                                                                      | Notes                                                                                                                                                                       |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hero background cross-fade         | UIkit slideshow, `animation: fade`, autoplay every 7000ms                                                                                                                       | No pause control in the markup                                                                                                                                              |
| Testimonial and image-card sliders | UIkit slider with default options, dot nav and previous/next buttons                                                                                                            | No autoplay                                                                                                                                                                 |
| Stat slideshow                     | UIkit slideshow, `ratio: false`                                                                                                                                                 | No autoplay                                                                                                                                                                 |
| Dropdowns                          | UIkit drop: fade 300ms for the mega menu; slide-top-small 100ms for simple menus                                                                                                | Hover-triggered                                                                                                                                                             |
| Off-canvas menu                    | UIkit off-canvas with overlay                                                                                                                                                   |                                                                                                                                                                             |
| Mobile sub-menus                   | jQuery `slideToggle`; chevron `rotateX(180deg)` over 0.22s; expand buttons fade in over 0.5 to 1s                                                                               |                                                                                                                                                                             |
| Step-card detail panel             | UIkit switcher; on `show`, a 5-line snippet calls `scrollIntoView({behavior: "smooth"})`                                                                                        |                                                                                                                                                                             |
| Accordion                          | UIkit accordion defaults                                                                                                                                                        |                                                                                                                                                                             |
| Hover transitions                  | `a { transition: all .2s ease }`; buttons and nav links 0.1s ease-in-out                                                                                                        | No transforms, no scale, no lift                                                                                                                                            |
| Scroll reveal                      | `animations.js`: an IntersectionObserver adds `.is-inviewport` to `[data-inviewport]` elements; CSS for `slide-up` is `transition: 1s; transform: translateY(30px); opacity: 0` | **Effectively switched off.** Later rules force `opacity: 1 !important` and `transform: translateY(0px) !important`. The attribute appears only in the footer (24 elements) |
| Smooth scrolling                   | `:root { scroll-behavior: smooth }` inside `prefers-reduced-motion: no-preference` (Bootstrap)                                                                                  |                                                                                                                                                                             |

There is no parallax, no scroll-scrubbed animation, no sticky element and no entrance animation in the main content. The site's energy comes from colour and scale, not movement. On the cached page all JavaScript is held back until the first user interaction, so first paint is fully static.

## Footer structure (confirmed)

**Band 1, locations (`#0C192A`, text `#A4ABB4`):**

- Centred heading with red side rules (pattern 10), 70px below it to the grid.
- A centred, wrapping grid of office cards: 1 column on phones, 2 from 576px, 3 from 768px, 4 from 992px, 5 from 1200px. 1rem gutters. 22 cards on this site.
- Each card, top to bottom: city name (24px, light, white link to a map), state (weight 600, uppercase, white), optional small italic note, address in Lato at line-height 1.4, phone number in weight 600 coral.

**Band 2, bottom (`#122741`, text `#A4ABB4`):** two halves from 992px.

- Left: logo (300px wide), a horizontal nav of five links (Montserrat 600, uppercase, white, `padding: 3px 1.5rem`), then a row with the copyright line and three legal links separated by pipes.
- Right: a badge image, a row of social icons (45px circles, 36px glyphs, coral, hover fill `#1D3F69`), a red button, and the agency credit.
- Below 768px everything centres and the nav stacks vertically.

## Assets the look depends on

1. **Wide regional photographs** for the hero, with separate mobile crops. Heavily darkened by the overlay, so content matters more than fine detail.
2. **A cut-out portrait on a transparent background**, bottom-aligned in the hero.
3. **Line icons**, single colour, 2px stroke, no fill.
4. **A subtle paper-grain texture** as a light section background (2048 x 1152 JPEG; near-white with faint grain).
5. **Dark, moody photographs** behind image cards and CTA bands; the gradients do most of the work.
6. **A logo that works reversed out of navy.**

## What makes the site feel the way it does

- **Two navies and one red, used with no restraint on the red.** Every action is the same saturated red rectangle. Nothing else on the page competes with it.
- **Very large type against small bold caps.** 70px light titles under 20px bold eyebrows, a 110px extra-bold headline, 102px outlined numerals, 70px figures. The page shouts in a controlled way.
- **Round containers, square buttons.** 50px and 25px corners on sections and cards make the page feel soft and modern; the square red buttons stay blunt and urgent.
- **Overlapping navy sheets** instead of stacked stripes. The negative margins and big radii give depth without any shadows.
- **Photos as atmosphere.** Almost every image sits under a navy or maroon gradient, so the palette stays intact whatever the photo is.
- **Constant asking.** There is a call to action in the header, hero, and nearly every section, plus chat and call widgets. This persistence, more than any single visual choice, is what makes it read as a personal-injury advertiser.

## Transfer assessment for a county prosecutor's office

**Patterns that transfer well:**

| Pattern                                                      | Why it fits a public office                                                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| Navy, white and a single accent colour                       | Reads as institutional and serious. Keep the two-navy depth; consider reserving red for one or two true actions per page |
| Montserrat headings with Lato body, eyebrow over large title | Clear hierarchy, free fonts, highly legible                                                                              |
| Split section header with the 5px rule and bold lead         | A calm, editorial way to open any section                                                                                |
| Rounded navy sheets overlapping white sections               | Gives a modern feel without motion or imagery. Works with smaller radii too                                              |
| Hero with a darkened photo of the place                      | A courthouse or county landscape under the navy gradient would give local identity without a sales pitch                 |
| Icon-column grid                                             | Suits divisions, services or "what this office does"                                                                     |
| Numbered step cards with expandable detail                   | A natural fit for explaining how a case moves through the system or what a victim or witness can expect                  |
| FAQ split with rounded accordion cards                       | Directly reusable                                                                                                        |
| Multi-office footer grid                                     | Reusable for offices, courthouses or counties served                                                                     |
| Mega menu with a vertical tab rail                           | Useful if the site has several counties or divisions with parallel sub-pages                                             |
| Two-cell bar at the top of the mobile header                 | Could carry a neutral service message and a main office number instead of a slogan                                       |

**Patterns that are too commercial for a public office:**

| Device                                                        | Concern                                                                                                                     |
| ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Slogan headline with a phone number as the main header button | Advertising posture. A prosecutor's site should lead with the office's name and function                                    |
| Dollar-figure results slideshow                               | Outcome boasting. If statistics are shown at all they need neutral, sourced framing                                         |
| Fee-promise and partnership badges                            | Sales trust signals with no public-sector equivalent                                                                        |
| "Does my case qualify?" quiz call to action                   | Lead-capture funnel                                                                                                         |
| Client testimonial slider                                     | Endorsements are inappropriate for a prosecuting office                                                                     |
| Chat widget, fixed "Call Now / Text Now" bar                  | Hard-sell lead capture, and it covers content on small screens                                                              |
| Call-tracking number swap and roughly a dozen ad pixels       | Visitors to a prosecutor's site include victims and witnesses; advertising trackers are a privacy problem there             |
| Cut-out portrait with a pointing gesture                      | Billboard styling. A straightforward portrait of the elected official elsewhere on the page is the conventional alternative |
| A call to action in every section; the oversized 30px button  | Too insistent. One clear action per page section at most                                                                    |
| Red radial glows and maroon gradient corners                  | Borderline: they add drama and urgency. Usable sparingly, or replaced with flat navy                                        |

**Habits from this build not to inherit (my reading, relevant because a public office will be held to accessibility standards):**

- Focus rings are removed on links and buttons.
- `.visually-hidden { display: none }` is declared in the custom CSS, which hides screen-reader-only text completely (the social links do still have `aria-label`s).
- An autoplaying slideshow with no pause control.
- Low-contrast pairs: `#999` on white (2.85:1), `#49525D` on navy (2.23:1), coral links on `#122741` (3.63:1).
- Decorative background images given the alt text "background image".
- Placeholders used in place of visible form labels.
- Two CSS frameworks loaded for one page, and two sources for the same fonts.

## Gaps and things not verified

- **No rendered view.** I did not use a browser. Layout descriptions come from markup and CSS; competing rules were resolved by reading, not by computed style.
- **JavaScript-injected content not seen:** the Juvo chat and call bar, the CallRail number swap, the mega-menu tab rail (I read the code that builds it), UIkit-generated slider dots.
- **Empty slots in the source:** the dark split section's media column is an empty `<div>`; the single-column CTA has an empty second column and a background image with `data-src=""`.
- **Font source ambiguity:** Adobe and Google both define Lato and Montserrat. Declared weights 100 (Montserrat) and 300 (Lato) have no matching face in either source.
- **Hover on image cards and step cards:** no specific rule found; I cannot confirm visually that nothing happens.
- **Forms:** taken from `/contact/`, which runs a different, older stylesheet stack. I did not fetch `combined-styles-testing.css` or the Gravity Forms theme CSS, so field focus and error states are unknown.
- **Interior pages** were not analysed and use a different template from the homepage; their styling may differ from what is recorded here.
- **Libraries not read line by line:** UIkit, Bootstrap, jQuery and slick are stock. I read the UIkit banner and the custom snippet appended to its bundle.
- **Mobile header arrangement** (phone bar above the logo row) is inferred from `flex-wrap: wrap-reverse` and `order: 1`.

## Raw files

In `craigswapp/raw/`:

| File                                                                                     | What it is                                                                     |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `index.html`, `headers.txt`                                                              | Cached homepage as served, and response headers                                |
| `index-nowprocket.html`                                                                  | Homepage without WP Rocket optimisation (original stylesheet and script links) |
| `usedcss.css`, `usedcss.flat.css`                                                        | WP Rocket's inlined used CSS, raw and one rule per line                        |
| `combined-styles.css`                                                                    | UIkit 3.17.11 plus the custom layer (custom part starts at line 14263)         |
| `navstyles.css`, `parent-style.css`                                                      | Navigation styles and the parent theme stylesheet                              |
| `inline-style-06.css`, `inline-critical.flat.css`                                        | The 66 KB inline head block that comes last in the cascade                     |
| `child-style.css`                                                                        | Child theme stylesheet. **Not loaded on the homepage**; loaded on `/contact/`  |
| `typekit-uoe1eyi.css`, `google-fonts.css`                                                | Font declarations                                                              |
| `animations.js`, `menuTabsLayout.js`, `mobileNavAccordion.js`, `uikit_with_icons.min.js` | Theme scripts and the UIkit bundle                                             |
| `contact-nowprocket.html`                                                                | Contact page, for the form                                                     |
| `outline-full.txt`                                                                       | Indented structural outline of the homepage body                               |
| `img/`                                                                                   | Eight sample images and icons downloaded to check photo and icon style         |

---

# Site Teardown: Newlin Law Offices (style reference only)

**URL:** https://newlinlawoffices.com/
**Platform:** Webflow (confirmed: `<meta name="generator" content="Webflow">`, `data-wf-site`, Webflow CSS/JS bundles; "Last Published: Thu Sep 24 2026" in the HTML comment)
**Built by:** not stated in the source. One inline script whitelists `growlawfirm.com` for followed links, which hints at a legal-marketing agency, but that is an inference, not a credit.
**Date analyzed:** 2026-10-07
**Purpose of this document:** visual-language reference for a Kentucky Commonwealth's Attorney's office site. Content and page architecture are deliberately not captured.

## How this was produced, and how far to trust it

- Fetched with `curl` only (no browser, no rendering). Everything below comes from reading source: the homepage HTML, the single site stylesheet, the Webflow JS bundle (interaction data extracted from it), plus two extra pages fetched to confirm patterns the homepage does not contain (`/contact-us` for form fields, `/portland-car-accident-lawyer` for inner-page blocks).
- I also downloaded 13 image assets and looked at nine of them directly (hero photo in its desktop and mobile crops, CTA photo, the color and black-and-white portraits, three line-art backgrounds, the map). The four logo SVGs were only inspected as text (dimensions and fill colors). Descriptions of imagery come from those files.
- **Nothing was seen rendered.** Every statement about how things line up on screen is derived from CSS values and DOM order. Where a layout result depends on rendering I could not do, it is marked **Unverified**.
- Tags used: **Confirmed** = value read directly from fetched source. **Inferred** = my reading of class names, number patterns or CSS interplay. **Computed** = I calculated it (contrast ratios).
- No bot wall, no blocked fetches. All requests returned 200.

Raw files: `teardown/newlin/raw/` (see the file list at the end).

---

## Tech stack (confirmed from source)

| Technology                          | Evidence                                                                             | Purpose                                                              |
| ----------------------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| Webflow                             | generator meta, `webflow.*.js`, `nlo-dev.webflow.shared.c6f11f752.css`               | CMS, hosting, layout                                                 |
| Webflow Interactions (IX2)          | `Webflow.require("ix2").init({...})` in `webflow.44871327…js`                        | All scroll entrance animations                                       |
| jQuery 3.5.1                        | script tag (Webflow dependency)                                                      | Webflow runtime                                                      |
| Swiper 8                            | lazy-loaded from `cdn.jsdelivr.net/npm/swiper@8` when a `.swiper` nears the viewport | Review and blog sliders                                              |
| body-scroll-lock 3.1.5              | lazy-loaded from cdnjs on first burger click                                         | Locks page scroll under the mobile menu                              |
| flatpickr                           | script + CSS from jsdelivr                                                           | Date picker on the intake form (not on homepage)                     |
| Google reCAPTCHA v2                 | lazy-loaded when a form with `.captcha-wrapper` nears the viewport                   | Form spam protection                                                 |
| Google Tag Manager / Google Ads tag | `GTM-5J8MJJND`, `AW-11405262779`; GTM is deferred until first scroll/mousemove/touch | Marketing analytics                                                  |
| Custom vanilla JS                   | inline `<script>` embeds                                                             | Header state, mobile menu, tabs, FAQ accordion, lazy-loading helpers |

No GSAP, no Lenis/smooth-scroll, no page transitions, no Lottie in use (confirmed by searching both bundles).

---

## 1. Typography

### Families and loading (confirmed)

Two families, both **self-hosted as woff2 on the Webflow CDN** via `@font-face` with `font-display: swap`. No Google Fonts `<link>`, no Typekit.

| Family                   | Weights loaded | Role                                                                | Fallback stack in CSS                |
| ------------------------ | -------------- | ------------------------------------------------------------------- | ------------------------------------ |
| **Domine** (serif)       | 400 only       | All headings, stat numbers, pull quotes, sub-labels, footer address | `Domine, Verdana, sans-serif`        |
| **Hind Siliguri** (sans) | 400, 500, 600  | Body, nav, buttons, eyebrows, form fields                           | `Hind Siliguri, Verdana, sans-serif` |

Notes:

- Domine is only ever used at weight 400. Hierarchy comes from size and color, never from bold serif.
- A few rules ask for `font-weight: 700`, but no 700 file is loaded. Those rules belong to landing-page variants, not the homepage.
- Both families are, to my knowledge, free Google Fonts (that is outside knowledge, not something the source states).

### Scale (confirmed, px values straight from the stylesheet)

| Element                         | Desktop (base, >= 992px) | <= 991px | Line-height | Weight       | Color                                              |
| ------------------------------- | ------------------------ | -------- | ----------- | ------------ | -------------------------------------------------- |
| `body`                          | 18px                     | 18px     | 150%        | 400          | `#3a3a3a`                                          |
| `p`                             | 18px                     | 18px     | 140%        | 400          | `#000` by default, usually overridden to `#5d5d5d` |
| `h1`                            | 64px                     | 36px     | 120%        | 400          | `#053826` (white over hero)                        |
| `h2`                            | 48px                     | 32px     | 120%        | 400          | `#053826`                                          |
| `h3`                            | 45px                     | 28px     | 120%        | 400          | `#053826`                                          |
| card/list titles (h3 overrides) | 40px                     | 26px     | 120%        | 400          | green, or white on dark                            |
| `h4`                            | 40px                     | 26px     | 120%        | 400          | `#000`                                             |
| `h5`                            | 24px                     | 22px     | 140%        | 400          | `#000`                                             |
| Stat number                     | 80px                     | 40px     | 90%         | 400 (Domine) | `#053826`                                          |
| Serif sub-label / pull quote    | 24px                     | 22px     | 120%        | 400 (Domine) | green or white                                     |
| Lead / intro paragraph          | 20px                     | 18px     | 140%        | 400          | `#5d5d5d` or `#3a3a3a`                             |
| Eyebrow (pre-title)             | 18px (inherited)         | 16px     | 150%        | 600          | white over hero                                    |
| Nav link, button, text link     | 16px                     | 16px     | 140%        | 600          | varies                                             |
| Small / meta                    | 16px                     | 14px     | 140-150%    | 400          | `#5d5d5d`                                          |
| Header phone number             | 28px                     | 18px     | 100%        | 600          | white, orange when header is white                 |

There is one step down only (at 991px). No fluid `clamp()` type; sizes are fixed px per breakpoint.

### Letter-spacing and casing habits (confirmed)

- Body and headings: **no letter-spacing set** (browser default).
- Eyebrows and tag chips: `text-transform: uppercase; letter-spacing: 1.8px; font-weight: 600` (drops to 1.6px on small screens for one chip variant).
- Hero `h1` has `text-transform: capitalize`. Other headings are title case in the copy itself.
- Buttons and nav are **not** uppercased; they are sentence/title case at 16px semibold.
- Margins under headings are a flat 24px (`h1`-`h4`), paragraphs 20px.

---

## 2. Color

### Tokens (confirmed, from `:root`)

| Token                       | Value            | Used for                                                                                                                               |
| --------------------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `--green`                   | `#053826`        | The brand color. Dark section backgrounds, footer, primary button fill, all headings, text links, nav text once the header turns white |
| `--orange`                  | `#c25405`        | Accent only: inset hairline on buttons, outlined-button border, quote rule, list bullets, phone number on white header                 |
| `--cream`                   | `#fcf8ef`        | Alternate light section background; body-ish text on dark green                                                                        |
| `--white`                   | `white`          | Default page background, text on dark                                                                                                  |
| `--white-gray`              | `whitesmoke`     | Quiet card fill (feature cards, accordions, plain inner-page hero), small print on dark                                                |
| `--dark-gray`               | `#3a3a3a`        | Body text, dropdown links                                                                                                              |
| `--gray`                    | `#5d5d5d`        | Secondary text, captions, inactive tabs                                                                                                |
| `--black`                   | `#000`           | Default `p`, `h4`, `h5`                                                                                                                |
| `--bordercolor` / `--berge` | `#cacaca`        | Input borders, chip borders                                                                                                            |
| `--maxpad` / `--minpad`     | `120px` / `60px` | Section vertical padding (spacing tokens stored alongside colors)                                                                      |

### Hard-coded values that sit outside the tokens (confirmed)

| Value           | Where                                                           | Note                                                                                            |
| --------------- | --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `#c65809`       | Inset section frames, tab hover, blog-title hover, review stars | A second, near-identical orange. The token is `#c25405`; inline embeds use `#c65809`. Pick one. |
| `#C61409`       | `.invalid-input` border and text                                | Form error red                                                                                  |
| `#94a3a9`       | Disabled slider arrow fill                                      |                                                                                                 |
| `#ffffff4d`     | Language-toggle border over the hero                            | White at 30%                                                                                    |
| `#0000004d`     | `.shadow` overlay on inner-page photo heroes                    | Black at 30%                                                                                    |
| `#2e2e2e`       | Footer social icon chips                                        |                                                                                                 |
| `#EAEAEA`       | Monogram watermark SVG                                          |                                                                                                 |
| `#888` / `#555` | Custom scrollbar thumb / hover                                  |                                                                                                 |

The stylesheet also carries colors that do not appear on the homepage (`#141a1f`, `#ffd038`, `#592126`, `#8c1109`, `#1a1b1f`, `#3a4554`, …). They belong to landing-page variants (`.hero-2`, `.hero-3`) and to leftover Webflow template blocks (pricing cards, newsletter footer). Ignore them.

### Light/dark rhythm on the homepage (confirmed from section background rules)

| #   | Section                    | Background                                             | Text                         |
| --- | -------------------------- | ------------------------------------------------------ | ---------------------------- |
| 1   | Hero                       | Dark photo over `#053826` fallback                     | White                        |
| 2   | Stat band                  | Cream `#fcf8ef`                                        | Green numbers, gray captions |
| 3   | Intro split (photos + bio) | White                                                  | Green heads, gray body       |
| 4   | Tabbed topic explorer      | Cream (panel on cream, tab list on white at >= 1280px) | Green / gray                 |
| 5   | CTA band                   | Photo darkened with `filter: brightness(51%)`          | White / cream                |
| 6   | Reviews                    | Cream                                                  | Dark gray                    |
| 7   | Team                       | Solid `#053826`                                        | White                        |
| 8   | Service area + map         | White                                                  | Green / dark gray            |
| 9   | Latest posts               | White                                                  | Green                        |
| 10  | Footer                     | Solid `#053826`                                        | Cream / whitesmoke           |

So: dark, cream, white, cream, dark, cream, dark, white, white, dark. Dark bands never sit back to back, and cream is used as the "second white" so two light sections in a row still read as separate.

### Contrast (computed by me, WCAG formula)

| Pair                              | Ratio       | Reads as                         |
| --------------------------------- | ----------- | -------------------------------- |
| Green `#053826` on white / cream  | 13.1 / 12.4 | Passes AAA                       |
| White / cream on green            | 13.1 / 12.4 | Passes AAA                       |
| Body `#3a3a3a` on white           | 11.4        | Passes AAA                       |
| Gray `#5d5d5d` on white / cream   | 6.6 / 6.2   | Passes AA                        |
| Orange `#c25405` on white         | 4.6         | Barely AA for normal text        |
| Orange `#c25405` on cream         | 4.3         | **Fails AA** for normal text     |
| Orange `#c65809` on white / cream | 4.4 / 4.1   | **Fails AA** for normal text     |
| Orange on green                   | 2.9         | Decorative use only (hairlines)  |
| Input border `#cacaca` on white   | 1.6         | Below the 3:1 non-text guideline |

The site mostly uses orange for hairlines and hover states, which is fine. If a public office borrows the palette idea, orange-as-text needs darkening.

---

## 3. Layout

### Container (confirmed)

```css
.container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 16px;
}
@media (min-width: 1440px) {
  .container {
    padding: 0 72px;
  }
}
```

Usable width at 1440px and above is 1296px. Gutters are 16px all the way up to 1439px, which is tight for tablet/laptop widths.

### Grid (inferred from repeated numbers)

There is no declared 12-column grid; sections use flexbox or ad-hoc CSS grid. But the max-widths recur in a strict series: **306, 416, 526, 636, 746, 856px**. Those step by 110px, which is exactly an **86px column + 24px gutter**; 12 columns of that make 1296px. So the designer worked on a 12-col / 86px / 24px-gutter / 72px-margin grid at 1440 and the build hard-coded the resulting widths (3 cols = 306, 4 = 416, 5 = 526, 6 = 636, 7 = 746, 8 = 856). This is my inference from the arithmetic, but it fits every case I checked.

Gaps actually used (confirmed): 8, 16, 24, 40, 46, 50px; 24px is the default card gutter.

### Section vertical padding (confirmed)

| Context                    | Top / bottom                                          |
| -------------------------- | ----------------------------------------------------- |
| Standard section, desktop  | 120px / 120px (`--maxpad`)                            |
| Standard section, <= 991px | 60px / 60px (`--minpad`)                              |
| Stat band                  | 48px / 48px (24px at <= 991px)                        |
| Hero                       | 185px / 165px (300/40 at <= 991px; 100/0 at <= 767px) |
| CTA band                   | 421px top (image shows above the text) / 48px bottom  |
| Inner-page photo hero      | 386px / 60px                                          |
| Footer                     | 48px / 24px                                           |

Spacing rhythm inside sections: heading to content 40px (60px for the intro split); card image to title 24px; title to meta 8-24px.

### Breakpoints (confirmed)

`max-width: 479px`, `767px`, `991px` (Webflow defaults) plus `min-width: 1280px`, `1440px`, `1920px`. The base styles describe the 992-1279px range; the "true desktop" layout (side-by-side splits, hover effects) only switches on at **1280px**. Every hover transition is gated behind `min-width: 1280px`.

---

## 4. Header and navigation

### Structure (confirmed)

- `<header class="header">`: `position: fixed; top: 0; z-index: 99; padding: 10px 0`.
- Inner grid: `grid-template-columns: 1fr max-content`. Logo (289 x 77px) sits left and spans two rows. Right column, row 1: a "control panel" (language toggle + call button). Right column, row 2: the nav list.
- **No separate utility bar or alert bar.** The two-row right column does the job of a utility row.
- Nav: six top-level links, 16px / 600, gap 20px (40px at >= 1440px). Hover = `opacity: .7`.
- Language toggle: a 54 x 54px square with a 1px border, showing only the non-current locale code plus a small icon.
- Call button in the header: green fill, **8px radius**, phone icon + two lines (14px/600 title, 11px subtext). This and the mobile sticky bar are the only rounded rectangles on the homepage; everything else is square. (Inferred: they look like later conversion add-ons; their class names follow a different naming convention.)

### Transparent-to-solid behavior (confirmed)

- At page top on desktop the header is transparent over the hero photo with a white logo and white nav.
- A scroll listener adds `.header--scroll` as soon as `pageYOffset > 0` (desktop only). On `.header--scroll`, and also on plain `:hover` of the header, CSS swaps: background to `#fff`, logo to the green version (two `<img>`s toggled with `display`), nav text to green, phone to orange, and (hover only) a `1px solid green` bottom border. Transition: `border .3s, background-color .3s`.
- Pages without a photo hero get `.header--draw` from JS, which is the same solid-white state from the start.
- The header never hides on scroll-down; it is always pinned.
- **Unverified:** the Webflow interaction data also contains a page-scroll action ("Nav Bar Bg") that animates the header background from transparent to black between 0% and 1% scroll on all breakpoints. A later inline rule forces `.header--scroll { background-color: #ffffff !important; }` on desktop. I could not render the page to see which wins on tablet/mobile, where `.header--scroll` is not applied.

### Dropdowns (confirmed)

- Not a mega-menu. A plain white panel (`.nav__wrap-sub`): `padding: 16px 24px`, no radius, no shadow, no border, positioned `top: 158%; left: 0`. Links are 16px/600 `#3a3a3a`, `white-space: nowrap`, 16px apart, hover color green.
- Long lists are split into two side-by-side `<ul>` columns with a 12px gap; the last item is a "View all" link.
- Reveal: starts `opacity: 0; transform: translate(-50%) scale3d(0,1,1)` and transitions over 0.3s to `translateX(0) scaleX(1); opacity: 1`, so it wipes open horizontally from the left.
- Triggers: `:hover` on the list item, `:focus` / `:focus-within`, and a small `keyup` script that adds `.tabbed` while keyboard focus is inside. A 24px invisible `::before` bridge keeps the hover alive across the gap.
- Chevron is a 5px CSS-border square rotated 45deg, not an icon.

### Mobile menu, <= 991px (confirmed)

- Header becomes solid white, `padding: 16px 0`; logo swaps to a 49px monogram; nav row disappears.
- Burger: 48 x 48px box with 1px green border; three 28 x 3px green bars (`border-radius: 4px`) each skewed `-21deg` for a slanted look; morphs to an X with transforms and `clip-path` over 0.3s.
- Drawer: `position: fixed; top: 82px;` full width and height, white, `padding: 40px 16px 96px`, slides in from the left (`translate(-100%)` to `translate(0)`, 0.3s ease). Page scroll is locked with body-scroll-lock.
- Submenus drill down: tapping a parent opens its list as an overlay panel with a "Back to the menu" button; the list height is animated in JS.
- A `ResizeObserver` physically moves the call button and language toggle into the drawer on small screens and back out on large ones.
- **Sticky call bar:** at <= 479px a fixed bottom bar (`.mobile-sticky-cta`, green, 8px radius, 10px padding, 32px icon) appears, and `body` gets `padding-bottom: 56px` at <= 767px to make room.

---

## 5. Hero

Confirmed from CSS, DOM and the image file:

- Full-bleed photograph, `position: absolute; object-fit: cover; object-position: 76% 50%` (shifts to `50% 27%` at >= 1920px), over a `#053826` fallback. Served `loading="eager"` with `fetchpriority="high"` and a preload hint.
- **No overlay or gradient on the homepage hero.** Legibility relies on the photo itself: a warm, low-key environmental portrait whose left two-thirds are near-black (dark wall, out-of-focus plant) with the subject on the right. Text sits left. Inner-page heroes do add a flat 30% black overlay (`.shadow`).
- Content stack, left-aligned, all inside the standard container:
  1. Eyebrow: uppercase, 1.8px tracking, 600, white, 24px below.
  2. `h1`: Domine 64px/120%, white, `max-width: 889px`, capitalized.
  3. Sub-paragraph: 18px/150%, white, `max-width: 526px`, 40px below.
  4. One button (the solid green button with the inset orange hairline).
- No form, no badges, no video, no slider in the hero. Height comes purely from padding (185px top, 165px bottom).
- Entrance: eyebrow slides down, `h1` and paragraph slide in from the left, staggered 0 / 100 / 200ms (see Motion).
- Mobile (<= 767px): the pattern flips. Background goes white, text goes green/gray, and a separate tighter crop of the same portrait (AVIF, `max-height: 400px`) is shown as a normal image under the text instead of behind it.

---

## 6. Recurring section patterns (generic descriptions)

All confirmed from DOM + CSS unless marked.

### A. Stat band

Full-width cream strip, 48px padding. Four items in a `space-between` flex row. Each: a huge serif figure (Domine 80px, line-height 90%, green, centered) over a short gray caption. Collapses to a 2 x 2 grid with 40px left-aligned figures at <= 991px. Items rise in from below with 0/100/200/300ms stagger.

### B. Intro split with layered portraits

`h2` capped at 636px, 60px gap, then two columns at >= 1280px.

- Left cluster (max 746px): a tall color portrait (416 x 583) with a blockquote directly beneath it (1px orange left rule, 32px left padding, green 20px text); beside it, bottom-aligned, a smaller second portrait (306 x 430, black-and-white in the asset); behind them a pale `#EAEAEA` monogram as a watermark.
- Right column (max 416px): `h3`, paragraph, a small serif label (24px), a bulleted list with **orange square bullets** and gray text, closing paragraph, arrow text-link.
- Behind the whole thing, top right: a faint engraved line-art illustration (890 x 345 asset; light gray hatching fading to white).
- Below 1280px it stacks, text first (`column-reverse`).

### C. Tabbed topic explorer

- Left: a vertical list of plain-text tab buttons (24px, gray; active = green + weight 500; hover = orange), followed by a "view all" arrow link.
- Right: a cream panel with an `h2`, then image (max 504 x 473, cover) beside a narrow text block (max 306px: `h3`, 20px gray paragraph, outlined button).
- Switching tabs replays a keyframe: `opacity 0 -> 1` and `translateX(45px) -> 0` over 1s ease.
- Below 1280px the tab list becomes a horizontally scrolling strip (60px tall, 24px gaps) and the panel stacks.
- Built with plain `<button>`s and class toggles; **no ARIA tab roles** in the markup.
- **Unverified:** whether the cream panel bleeds to the right viewport edge or stops at the container.

### D. Photo CTA band with inset frame

Full-bleed photo darkened to 51% brightness. Very tall top padding (421px) so the image shows above the copy. White `h2` (max 672px), then a two-column row (458px / 452px): left = cream paragraph, solid button, large phone number (28px/600) with a small availability line; right = right-aligned serif pull quote (24px) with the author preceded by a 74px x 1px white rule. A **1px orange frame inset 10px** from every edge sits over the image. On small screens the quote drops out below the image as dark text.

### E. Testimonial slider

Cream background. At >= 1280px: `h2` on the left (max 375px), slider on the right (max 743px). One review per view: star row, 20px dark-gray text, 16px gray author. A giant quotation-mark SVG (264 x 204, `#5D5D5D` at 4% opacity) sits behind the top-left corner. Controls are two bare 21px green arrow icons, 24px apart, below the text; disabled arrow turns `#94a3a9`. Swiper config: `slidesPerView: 1, autoHeight: true, speed: 700`, no autoplay, no pagination dots.

### F. People row on dark

Solid green section with the same inset orange frame. White `h2`. A flex row of person tiles (max 306px each, 24px gap): portrait (404px tall, cover, overflow hidden), serif name (40px, white), role line (16px, white). **No card chrome at all**: no background, border, radius or shadow. Hover zooms the photo to `scale(1.08)` over 0.3s. Two-up at <= 991px, single column at <= 767px.

### G. Link list + map split

White section. Left: `h2` (max 700px), a two-column grid of place links (24px, green, underlined; underline removed on hover; `column-gap: 90px; row-gap: 16px`), then a 32px closing line. Right: a stylized map image, absolutely positioned and deliberately oversized (`height: 141%`, `max-width: 800px`), so it runs past the section's top and bottom. The map asset uses the two brand colors as flat fills over a grayscale basemap.

### H. Article cards slider

`h2` on the left (max 389px), slider on the right. Each card: image (291px tall, cover), serif title (40px), then a meta line ("Published: date", "By author"). Hover: image `scale(1.05)` inside an `overflow: hidden` wrapper and title turns orange, both 0.3s ease-out, driven by `:has()` so hovering either the image or the title triggers both. Swiper: 1.3 slides on phones (peek of the next card), 2 from 768px, 16px gap.

### I. Section "notch" connector (signature device)

Several sections carry a pseudo-element that is a 50 x 50px square rotated 45deg, placed at `top: -40px` near the horizontal center and filled with the **previous** section's color. The visible half forms a small downward-pointing triangle at the seam, so one band appears to point into the next. Confirmed in CSS for four sections (white, cream, cream, green fills). **Unverified** how each one lands on screen.

### J. Inner-page patterns (confirmed on `/portland-car-accident-lawyer`, CSS shared)

- **Photo hero with overlay:** 386px top padding, 30% black overlay, same text stack as the homepage hero.
- **Plain hero:** whitesmoke band with breadcrumbs and an `h1`, no image.
- **Breadcrumb strip:** 24px padding, 600-weight links, CSS chevron separators.
- **Feature card grid:** three columns, 24px gap. Card = whitesmoke fill, **1px orange left border only**, 24px padding, 70px icon, serif 32px title, body text. This is the only true "card" style on the site.
- **Article + sticky sidebar:** `1fr auto` grid; sidebar box (max 416px) is `position: sticky; top: 130px`, solid green with a 1px orange outline inset 10px.
- **Table-of-contents box:** cream fill, 1px green border, 32px padding, serif 40px title.
- **FAQ accordion:** each item a white box with 1px green border, `padding: 16px 16px 16px 40px`, 24px apart; serif 28px question; a plus icon built from two 27 x 3px slanted bars that collapses to a minus; answer animates `max-height` over 0.3s.
- **Filter chips:** 1px `#cacaca` border, green uppercase text with 1.8px tracking, `padding: 8px 16px`; hover border goes green; active = solid green with white text.

---

## 7. Components

### Buttons (confirmed)

| Variant                            | Rest                                                                                                                                                                                                | Hover (>= 1280px only)                                                                                                                  |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **Primary** `.button`              | `background: #053826; color: white; padding: 16px 24px; font: 600 16px/140%`; square corners; **`outline: 1px solid #c25405; outline-offset: -4px`** (a thin orange line inset 4px inside the fill) | Inverts: white fill, green text, 1px green border, outline turns white. `transition: border-color .3s, background-color .3s, color .3s` |
| **White** `.button--white`         | White fill, green text, green inset outline                                                                                                                                                         | Text turns orange                                                                                                                       |
| **Outlined** `.button-transparent` | Transparent, `border: 1px solid #c25405`, gray text `#5d5d5d`, `padding: 20px 32px`, 600 16px                                                                                                       | Text turns green and gains `box-shadow: 0 4px 4px #00000040`; `transition: box-shadow .35s, color .35s`                                 |
| **Arrow text link** `.link`        | Inline-flex, green, 600, 8px gap, 9 x 8px arrow SVG, no underline                                                                                                                                   | A 1px green underline slides in from the left (`translateX(-101%)` to `0`, 0.3s)                                                        |
| **Header call button**             | Green, 8px radius, 10px padding, icon + two text lines                                                                                                                                              | none defined                                                                                                                            |

- Border radius across the homepage: **0 everywhere** except the two call buttons (8px), burger bars (4px) and footer social chips (100px).
- Buttons carry no shadow at rest.
- **Focus states: none are defined** for buttons or links. No `:focus` or `:focus-visible` rule exists in the site CSS for them, so they fall back to the browser default ring. Note the primary button already uses `outline` decoratively, so the browser focus outline will replace the orange hairline while focused.

### Cards (confirmed)

The site is nearly card-free. People tiles and article tiles are bare image + text. The one boxed card (feature grid) is flat: whitesmoke fill, single orange left border, no radius, no shadow. The only shadows in homepage-relevant CSS are the outlined button's hover shadow and a white `drop-shadow` used to lift text off the map.

### Form fields (confirmed on `/contact-us`)

- Form sits in a white box (`max-width: 746px; padding: 56px 55px`), two-column grid (`gap: 16px 24px`), single column at <= 479px.
- Inputs: `height: 56px; border: 1px solid #cacaca; padding: 16px 16px 5px; font: 500 16px; color: #5d5d5d;` square corners; `transition: border-color .3s`. Textarea min-height 147px, `resize: none`.
- **Floating labels:** the `<label>` follows the input in the DOM and is absolutely positioned at `top: 14px; left: 16px`. The real placeholder is made transparent. On `:focus` or `:not(:placeholder-shown)` the label shrinks to 14px, turns green and moves `translateY(-13px)`; the border turns `#053826`. Pure CSS.
- Error state: `.invalid-input` gives `border: 1px solid #C61409; color: #C61409`.
- Focus: border color change only. Webflow's base rule sets `outline: 0` on focused inputs, so there is no focus ring.
- Success message: solid green block with white centered text.
- Labelling is broken in the source and should not be copied: five different labels carry `for="phone"`, two others point at ids that do not exist (`for="first-name"` vs `id="first_name"`, `for="message"` vs `id="Message-2"`), and two non-phone inputs have `aria-label="phone"`.
- A hidden honeypot field plus reCAPTCHA v2 guard submission.

### Links (confirmed)

- Global `a { text-decoration: underline; color: inherit }`. In practice most UI links switch underline off and signal hover with `opacity: .7` over 0.3s (nav, footer, breadcrumbs, phone numbers) or a color change to orange (authors, titles).
- Inline place links keep the underline and drop it on hover.

---

## 8. Motion

### Scroll entrance animations (confirmed from extracted IX2 data)

Implemented entirely with Webflow Interactions presets, triggered by `SCROLL_INTO_VIEW` with a 0% offset. Site-wide there are 244 such triggers using only five presets:

| Preset          | From                             | To                          | Duration | Easing     |
| --------------- | -------------------------------- | --------------------------- | -------- | ---------- |
| `slideInLeft`   | `opacity: 0; translateX(-100px)` | `opacity: 1; translateX(0)` | 1000ms   | `outQuart` |
| `slideInRight`  | `opacity: 0; translateX(100px)`  | same                        | 1000ms   | `outQuart` |
| `slideInBottom` | `opacity: 0; translateY(100px)`  | same                        | 1000ms   | `outQuart` |
| `slideInTop`    | `opacity: 0; translateY(-100px)` | same                        | 1000ms   | `outQuart` |
| `fadeIn`        | `opacity: 0`                     | `opacity: 1`                | 1000ms   | `outQuart` |

- Stagger is done with per-element delays of 0, 100, 200, 300 or 400ms.
- Convention: headings and left columns come from the left, right columns and quotes from the right, grids and decorative backgrounds from below, photos fade.
- Plays once, no reverse, **desktop only** (`mediaQueries: ["main"]`, i.e. >= 992px). An inline rule hides the targets (`opacity: 0`) until the interaction engine starts, only when JS is on and only at >= 992px.
- **Reduced motion is not respected.** Webflow only honors `prefers-reduced-motion` when `<body>` has `data-wf-ix-vacation`, which this site does not set, and the CSS has no reduced-motion media query.

Plain-CSS equivalent if rebuilding: an `IntersectionObserver` adds a class; CSS does `transition: opacity 1s, transform 1s cubic-bezier(0.165, 0.84, 0.44, 1)` (that bezier is the standard `easeOutQuart`; the bezier value is my equivalence, the name is what the source uses). A 100px travel is large; 24-40px gives the same feel with less movement.

### Hover and state transitions (confirmed)

- Everything is 0.2-0.35s; nearly all rules use the default `ease`.
- Image zoom on hover: `scale(1.08)` (people) and `scale(1.05)` (articles) inside clipped wrappers.
- Underline wipe on arrow links; button color inversion; opacity dim on nav and footer links.
- Tab content: 1s fade + 45px slide. FAQ: `max-height` 0.3s. Mobile drawer: 0.3s slide. Dropdown: 0.3s horizontal scale + fade.
- Sliders: Swiper with `speed: 700`, drag enabled, no autoplay.

### Not present

No parallax, no scroll-scrubbed animation, no custom cursor, no page transitions, no marquee, no video, no counting-up numbers on the stats (they are static text).

---

## 9. Footer

Confirmed:

- Solid `#053826`, `padding: 48px 0 24px`. Container overrides `max-width` to `none`, so the footer spans the full viewport width.
- Three-column grid (`1fr 1fr 1fr` at >= 1280px, row gap 56px):
  1. **Identity block**, centered, max 459px: logo (same SVG forced white with `filter: brightness(0%) invert()`, 77px tall), then address, phone and a language note set in **Domine 24px cream**, then social icons in dark round chips (`#2e2e2e`, `border-radius: 100px`, 10px padding, icons inverted to white).
  2. **Disclaimer block:** serif 24px cream title + 16px whitesmoke paragraph.
  3. **Embedded Google Map** iframe, 300px tall.
- Bottom row spans all columns: copyright plus four legal/utility links, 16px cream, underlined, `opacity: .7` on hover.
- No link columns, no newsletter signup, no secondary nav. It is a contact-and-compliance footer, not a sitemap footer.
- Stacks to one column at <= 991px.

---

## 10. What makes it feel the way it does

1. **Two colors and a paper tone.** One very dark green does all the heavy lifting (headings, buttons, dark bands, footer). Orange is rationed to hairlines and hover states. Cream replaces gray as the secondary background, which keeps it warm rather than corporate.
2. **Serif headlines at regular weight.** Domine 400 at 48-64px against a compact semibold sans for UI. Nothing is bold-serif or uppercase-shouty; authority comes from size and whitespace.
3. **Square, flat, thin-lined.** Zero radius, almost zero shadow, 1px rules. The recurring flourish is an **inset 1px orange hairline** used at three scales: 4px inside buttons, 10px inside sidebar boxes, 10px inside whole dark sections. That single idea makes it look tailored.
4. **Generous, regular rhythm.** 120px section padding, a strict 12-column measure, text columns capped at 416-636px.
5. **Real photography, low-key and warm.** Dark-walled environmental portraits with shallow depth of field; the hero works without an overlay because the photo was shot dark on one side.
6. **Quiet local texture.** Faint engraved landscape line art behind white sections, a monogram watermark, a map in brand colors.
7. **One motion idea, repeated.** Everything slides in 100px and fades over a second. It is consistent, if heavy-handed.

The commercial layer (phone number repeated in header, CTA band and sticky bar; urgency copy; stars) is bolted on top of that calm base and is the least coherent part visually: it is where the only rounded corners and the only 11px text appear.

---

## 11. Transfer guide for a county prosecutor's office

### Transfers well

| Pattern                                                                                            | Why it suits a public law office                                                                                         |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Dark primary + paper/cream alternate + one rationed accent                                         | Reads institutional and calm; easy to re-key to office or county colors. Keep the accent for rules and states, not text. |
| Serif 400 headings + semibold sans UI, fixed scale (64/48/40/24/18/16)                             | Dignified without looking like a law-firm ad.                                                                            |
| Uppercase tracked eyebrow above headings                                                           | Good for labels such as division or program names.                                                                       |
| Inset hairline frame on dark bands and callout boxes                                               | Distinctive, cheap to build, formal. Works for notices or "how to reach us" blocks.                                      |
| Square primary button with inverted hover; outlined secondary; arrow text link with underline wipe | A complete three-tier action system. Add a real focus style.                                                             |
| Stat band                                                                                          | Works with factual figures (counties served, staff, year established). Avoid outcome boasts.                             |
| Split intro with portrait + pull quote                                                             | Natural fit for a message from the elected official.                                                                     |
| Tabbed topic explorer                                                                              | Maps well onto divisions or services. Rebuild with proper ARIA tabs.                                                     |
| People row on dark, chrome-free tiles                                                              | Staff or leadership listing.                                                                                             |
| Link list + stylized map                                                                           | Jurisdiction or county coverage.                                                                                         |
| Article cards with image, serif title, date/byline                                                 | Press releases and news. A plain grid or list would suit better than a slider.                                           |
| Feature card (whitesmoke, single accent left border)                                               | Resource and service tiles.                                                                                              |
| FAQ accordion, breadcrumb strip, sticky sidebar box, table-of-contents box                         | Useful on content-heavy pages (victim services, court process).                                                          |
| Transparent-to-solid fixed header with two-row right side                                          | The upper row can carry genuine utility items (language, phone, key links) instead of a sales CTA.                       |
| Compliance-style footer (identity, disclaimer, map, legal row)                                     | Close to what a public office needs; add a few link columns.                                                             |
| Floating-label fields with square 56px inputs                                                      | Clean; fix labelling and focus ring.                                                                                     |
| Faint line-art texture and section notches                                                         | Optional local character (courthouse or landscape line art).                                                             |

### Too commercial for a public office

| Device                                                                                                                     | Reason to drop or rework                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "Injured? Call 24/7" header button with persuasion subtext, and the fixed bottom call bar on phones                        | Hard-sell lead capture. A plain phone/contact link is appropriate; a persistent sales bar is not. An emergency notice ("call 911") would be the legitimate use of a persistent bar. |
| Hero button promising an eligibility check; "no fee unless we win"; availability claims                                    | Client-acquisition copy. Not applicable to a prosecutor.                                                                                                                            |
| Testimonial slider with star ratings and review schema                                                                     | Soliciting or showcasing praise for a prosecutor's office is inappropriate. If the layout is wanted, repurpose it for a mission statement or victim-rights text without stars.      |
| Photo CTA band whose job is "get started / call now" with an oversized phone number                                        | The layout is good; the purpose is sales. Reuse for a neutral action (report a crime tip, victim services contact).                                                                 |
| "Results" style bragging blocks, sticky sidebar sales box on articles                                                      | Outcome marketing; also raises fairness concerns for a prosecuting office.                                                                                                          |
| Marketing instrumentation (Google Ads tag, deferred GTM, heard-about-us and fault questions in the intake form, reCAPTCHA) | A public office should minimize tracking and collect only what it needs.                                                                                                            |
| Dozens of location landing pages in the nav                                                                                | SEO structure, not something to mirror.                                                                                                                                             |

### Fix rather than copy (accessibility, relevant to a government site)

- Define visible `:focus-visible` styles; the reference has none for buttons or links and removes the outline on inputs.
- Honor `prefers-reduced-motion`, shorten travel distance, and do not hide content at `opacity: 0` pending JS.
- Darken the accent if it is ever used for text; raise the input border contrast above 3:1.
- Give tabs and accordions proper roles and states; give every input a correctly matched label.
- Add a skip link (the reference has none).
- Widen side gutters between 768 and 1439px (the reference stays at 16px).
- Put a scrim behind hero text rather than depending on one particular photo being dark.

---

## 12. Gaps and things I could not verify

- **No rendered view.** No screenshots, no computed styles. Pixel alignment, actual header height, and how overlapping absolutely-positioned decorations land are all unverified.
- **Header background on scroll** below 992px (black from the Webflow interaction vs white from CSS): unresolved from source alone.
- **Tabbed section at >= 1280px:** whether the cream panel bleeds to the viewport edge.
- **Notch connectors:** CSS confirmed; on-screen result not seen.
- **Language-toggle icon** (`Frame.webp`, 18 x 14px) was not downloaded or viewed, so I do not know what it depicts.
- (Resolved, for the record: review stars are `#C65809`. The `#FFD600` in the star SVG is only the shape of an alpha mask, so that yellow is never painted.)
- **Inner pages:** only two were fetched. Other templates (blog article, about, case results, areas) are described from the shared stylesheet only where noted, not from their DOM.
- **Spanish locale** not fetched.
- **Third-party CSS/JS** (Swiper, flatpickr, reCAPTCHA) not fetched; their default styling is not described.
- **Legacy stylesheet** `nlo-dev.2bfec9dc1.min.css` is referenced only inside an HTML comment (not loaded by the page). I downloaded it but did not use it.
- **Font licensing / source** beyond "self-hosted woff2 on the Webflow CDN" is not stated in the source.
- **12-column grid** is an inference from repeated widths, not a declared system.

## Raw files

All under `teardown/newlin/raw/`:

- `index.html`, `headers.txt` — homepage and response headers
- `main.css` — the live stylesheet; `main.compact.txt` / `main.full.compact.txt` — same rules, one per line, tagged with their media query
- `webflow.main.js`, `webflow.schunk.js` — Webflow bundles; `ix2-data.js.txt` — extracted interaction data
- `inline-styles.css`, `inline-scripts.js`, `outline.txt` — homepage inline embeds and DOM outline
- `contact-us.html` (+ `contact-*.{css,js,txt}`), `practice-page.html` (+ `practice-*.{css,js,txt}`) — the two extra pages
- `legacy-hinted.css` — not loaded by the site, not used
- `img/` — downloaded image assets (WebP originals plus PNG conversions for viewing)
- Helper scripts are in `teardown/newlin/tools/`

---
