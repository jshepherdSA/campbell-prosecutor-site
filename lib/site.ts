/**
 * Office details used across the site.
 *
 * Every value here comes from the client's seal or the signed engagement
 * letter. Fields set to `null` have not been supplied yet; components skip them
 * rather than show a placeholder, so filling one in is a one-line change.
 */
export const site = {
  name: "Campbell County Commonwealth’s Attorney",
  office: "Office of the Commonwealth’s Attorney",
  circuit: "17th Judicial Circuit",
  county: "Campbell County",
  state: "Kentucky",
  person: "Rob Sanders",
  personTitle: "Special Commonwealth’s Attorney",
  /** Set NEXT_PUBLIC_SITE_URL once the domain is chosen. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  address: {
    street: "601 Washington Street, Suite 201",
    city: "Newport",
    region: "KY",
    postalCode: "41071",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=601+Washington+Street+Suite+201+Newport+KY+41071",
  },
  phone: null as string | null,
  phoneHref: null as string | null,
  email: null as string | null,
  hours: null as string | null,
} as const;

export type NavItem = { label: string; href: string; children?: NavItem[] };

/**
 * Primary navigation. Items with `children` open a menu in the header and link
 * to an index page that lists the same pages. "About" and "Contact" are
 * homepage sections.
 */
export const nav: NavItem[] = [
  { label: "About", href: "/#office" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Prosecution", href: "/prosecution" },
      { label: "Victim Assistance", href: "/victims" },
      { label: "Bad Check Program", href: "/services/bad-check-program" },
      { label: "Casey’s Law", href: "/services/caseys-law" },
      { label: "Child Support", href: "/services/child-support" },
      {
        label: "Delinquent Tax Collection",
        href: "/services/delinquent-tax-collection",
      },
      { label: "Fiscal Court Advisor", href: "/services/fiscal-court-advisor" },
      { label: "Guardianships", href: "/services/guardianships" },
      {
        label: "Involuntary Treatment",
        href: "/services/involuntary-treatment",
      },
      { label: "Juvenile Court", href: "/services/juvenile-court" },
    ],
  },
  { label: "Traffic Diversion", href: "/traffic-diversion" },
  { label: "News", href: "/news" },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Community Resources", href: "/resources" },
      { label: "Help for Victims", href: "/victims/resources" },
      { label: "Find the Right Office", href: "/find-the-right-office" },
      { label: "Questions & Answers", href: "/faq" },
      { label: "Open Records", href: "/open-records" },
    ],
  },
  { label: "Contact", href: "/#contact" },
];

/** Shown in the mobile menu and footer, where there are no drop-down menus. */
export const secondaryNav: NavItem[] = [
  { label: "Victims & Witnesses", href: "/victims" },
  { label: "Questions & Answers", href: "/faq" },
  { label: "Open Records", href: "/open-records" },
];
