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

export type NavItem = { label: string; href: string };

/**
 * Until the inner pages are approved and built, each link points at the
 * matching section of the homepage.
 */
export const nav: NavItem[] = [
  { label: "The Office", href: "/#office" },
  { label: "How a Case Works", href: "/#process" },
  { label: "Victims & Witnesses", href: "/#victims" },
  { label: "Contact", href: "/#contact" },
];
