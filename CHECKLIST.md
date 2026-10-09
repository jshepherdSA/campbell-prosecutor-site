# Backend & Compliance Checklist — Commonwealth's Attorney, 17th Judicial Circuit (Campbell County)

This is the standard pre-launch checklist for every site built with the
website-builder skill. It is written to `CHECKLIST.md` in the repo root and
shown in chat at the homepage gate and again at final handoff.

Status key: [x] done · [~] pending (builds after homepage approval) · [ ] manual

**Status as of 2026-10-07: homepage gate.** Only the homepage is built. Nothing
below the gate has been started.

## Auto-built by the skill (verify these rendered)

- [~] **Privacy Policy** — page at `/privacy`, linked in footer
- [~] **Accessibility Statement** — page at `/accessibility`, linked in footer
- [~] **Cookie Policy** — page at `/cookies`, linked in footer
- [~] **Cookie consent banner** — functional: blocks GA/GTM until consent,
  suppresses on decline, remembers choice (see below)
- [~] **llms.txt** — at site root, lists key pages + policies
- [~] **robots.txt** — exists AND allows AI crawlers (GPTBot, ClaudeBot,
  PerplexityBot, Google-Extended) plus normal search crawlers
- [~] **sitemap.xml** — generated, referenced in robots.txt

The three policy pages and `llms.txt` cannot be built until the client details
under "Needed from the client" are supplied. The skill does not allow a
placeholder to be left on a live legal page.

## Manual setup (human does these in Google — skill cannot)

- [ ] **Google Analytics** — create property, paste Measurement ID into the
      site's analytics config. NOTE: must be wired through the consent banner
      so it only fires after consent.
- [ ] **Google Tag Manager** — create container, paste GTM container ID.
      Also gated by consent.
- [ ] **Google Search Console** — verify the property (via DNS or the
      verification meta tag), then submit the sitemap.xml URL.

## Done at the homepage gate

- [x] Next.js app scaffolded (App Router, TypeScript, Tailwind, shadcn/ui, Prettier)
- [x] `design-system.md` written from the seal
- [x] `teardown.md` written from the three reference sites
- [x] Homepage built and checked: lint, type-check and production build pass;
      no console errors; no horizontal scroll from 320px to 1440px; one `<h1>`;
      headings in order; all images have alt text; keyboard focus visible;
      mobile menu opens, traps focus and closes with Escape
- [x] Favicon, Apple touch icon and Open Graph image generated from the seal
- [x] Page metadata and `GovernmentOffice` structured data

## Needed from the client

Required before the policy pages and `llms.txt` can be built:

- [ ] **Legal entity name** for the policies (for example "Office of the
      Commonwealth's Attorney, 17th Judicial Circuit of Kentucky")
- [ ] **Website domain** (also sets canonical URLs, the sitemap and share links;
      goes in `NEXT_PUBLIC_SITE_URL`)
- [ ] **Contact email** for privacy and accessibility requests

Requested, and left off the site until supplied (nothing is shown as a
placeholder):

- [ ] Office phone number, public email address and office hours
- [ ] A portrait of Rob Sanders, and any courthouse or Newport photography
- [ ] Approved copy. The engagement letter contains no site copy, so the
      homepage text was drafted from the seal, the letter's name, title and
      address, and general descriptions of what a Kentucky Commonwealth's
      Attorney does. It all needs the office's sign-off.
- [ ] The page list for the rest of the site

## Notes for handoff

- The three Google items require dashboard access and account setup, so they
  stay manual by design. The skill leaves clearly-marked config slots for the
  GA Measurement ID and GTM container ID so paste-in is the only step.
- Consent gating is wired in stage 6b: once the IDs are pasted, GA/GTM will
  automatically respect the banner. Do not add GA/GTM via a raw <script> tag
  that bypasses the consent gate.
- The accessibility statement is generic template language. A public
  prosecutor's office may have specific accessibility obligations (for example
  under ADA Title II), so the statement should get a human or legal review
  before launch.
- `npm audit` reports 9 high-severity advisories (7 in production dependencies,
  2 in dev). All 9 trace to one package, `braces`, a denial-of-service issue in
  glob-pattern expansion that is pulled in through `fast-glob`. In production
  dependencies it arrives only through the `shadcn` command-line tool, which is
  listed as a dependency because the stylesheet imports `shadcn/tailwind.css`.
  It is build tooling, not code served to visitors. Not fixed here because the
  available fix is a breaking major-version change to `shadcn`. Worth a look
  before launch.
- The engagement letter is not in this repo and should stay out of it.
