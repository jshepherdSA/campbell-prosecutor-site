# Backend & Compliance Checklist — Commonwealth's Attorney, 17th Judicial Circuit (Campbell County)

This is the standard pre-launch checklist for every site built with the
website-builder skill. It is written to `CHECKLIST.md` in the repo root and
shown in chat at the homepage gate and again at final handoff.

Status key: [x] done · [~] pending (builds after homepage approval) · [ ] manual

**Status as of 2026-10-12: inner pages in progress.** The homepage and seven
inner pages are built (see "Inner pages" below). The cookie banner, policy pages
and standard site files have not been started.

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

## Inner pages

Built on 2026-10-12. The user asked for the resources and content of
campbellcountyattorney.com, without Steve Franzen. That site belongs to the
Campbell County Attorney, a separate office, so its services are not presented
here as this office's own. All copy was written new; none was copied.

- [x] `/prosecution` — felony classes, how a case moves, reporting, restitution
- [x] `/victims` — victims' rights, what to expect, help, witnesses
- [x] `/victims/resources` — hotlines and support organizations
- [x] `/resources` — county, cities, law enforcement, courts, legal help
- [x] `/find-the-right-office` — the County Attorney's services (traffic and
      CATS, misdemeanors, child support, bad checks, delinquent taxes,
      guardianship, Casey's Law, involuntary hospitalization, juvenile court),
      each with who handles it and how to reach them
- [x] `/faq` — common questions, with FAQ structured data
- [x] `/open-records` — how to request records from this office
- [x] Each page checked: lint, type-check and production build pass; one
      `<h1>`; headings in order; no horizontal scroll at 320, 390, 768 or
      1024px; internal links resolve; no mention of Steve Franzen

Not built, pending a decision from the user:

- [ ] **News / article library.** The source has about 75 legal-information
      columns. They are copyrighted and credited to the County Attorney's
      office, so they cannot be copied, and most cover topics outside a felony
      prosecutor's work.
- [ ] **Staff and attorney directory.** The source lists the County Attorney's
      employees. This office's staff list has not been supplied.
- [ ] **Arraignment calendar.** The source's calendar is for District Court
      arraignments handled by the County Attorney.

Phone numbers and links for other offices live in `lib/directory.ts`. They were
checked against each organization's own website on 2026-10-12 and need
re-checking before launch.

## Needed from the client

Required before the policy pages and `llms.txt` can be built:

- [ ] **Legal entity name** for the policies (for example "Office of the
      Commonwealth's Attorney, 17th Judicial Circuit of Kentucky")
- [ ] **Website domain** (also sets canonical URLs, the sitemap and share links;
      goes in `NEXT_PUBLIC_SITE_URL`)
- [ ] **Contact email** for privacy and accessibility requests

Requested, and left off the site until supplied (nothing is shown as a
placeholder):

- [ ] Office phone number, public email address and office hours. The Attorney
      General's directory lists (859) 292-6490 and fax (859) 292-6488 for the
      17th Circuit Commonwealth's Attorney. Not added until confirmed.
- [ ] **Suite number.** The site uses Suite 201, from the engagement letter.
      The Attorney General's directory and the county's website list the
      Commonwealth's Attorney at 601 Washington Street, Suite 210.
- [ ] The name or title of the office's open records custodian, and an email
      address for requests (the `/open-records` page gives the mailing address
      only)
- [ ] A portrait of Rob Sanders, and any courthouse or Newport photography
- [ ] Approved copy. The engagement letter contains no site copy, so the
      homepage text was drafted from the seal, the letter's name, title and
      address, and general descriptions of what a Kentucky Commonwealth's
      Attorney does. It all needs the office's sign-off.
- [ ] Sign-off on the page list above, and on the three items not built

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
