/**
 * Other offices, agencies and organizations the site points people to.
 *
 * Phone numbers and web addresses were checked against each organization's own
 * website on 2026-10-12. They belong to other people, so re-check them before
 * launch and from time to time after.
 */

/** "(859) 581-8015" becomes "tel:+18595818015". */
export function telHref(phone: string) {
  return `tel:+1${phone.replace(/\D/g, "")}`;
}

export type Listing = {
  name: string;
  description: string;
  phone?: string;
  /** Shown before the number, for example "24-hour hotline". */
  phoneLabel?: string;
  href?: string;
};

export type ListingGroup = { id: string; title: string; listings: Listing[] };

export type Office = {
  name: string;
  address: string[];
  phone: string;
  hours?: string;
};

/**
 * The Campbell County Attorney is a separate elected office. Its divisions sit
 * at three addresses in Newport.
 */
export const countyAttorney = {
  name: "Campbell County Attorney’s Office",
  href: "https://www.campbellcountyattorney.com/",
  criminal: {
    name: "Campbell County Attorney, Criminal Division",
    address: [
      "Campbell County Courthouse, 3rd Floor",
      "330 York Street",
      "Newport, KY 41071",
    ],
    phone: "(859) 581-8015",
    hours: "Monday to Friday, 9 a.m. to 4 p.m.",
  },
  civil: {
    name: "Campbell County Attorney, Civil Division",
    address: ["319 York Street", "Newport, KY 41071"],
    phone: "(859) 491-7700",
  },
  childSupport: {
    name: "Campbell County Attorney, Child Support Division",
    address: ["601 Washington Avenue, Suite 290", "Newport, KY 41071"],
    phone: "(859) 431-0522",
    hours: "Monday to Friday, 8 a.m. to 4 p.m.",
  },
} satisfies {
  name: string;
  href: string;
  criminal: Office;
  civil: Office;
  childSupport: Office;
};

export const circuitClerk: Office = {
  name: "Campbell Circuit Court Clerk",
  address: [
    "Campbell County Courthouse",
    "330 York Street",
    "Newport, KY 41071",
  ],
  phone: "(859) 292-6314",
};

export const dispatch = {
  name: "Campbell County Consolidated Dispatch",
  phone: "(859) 292-3622",
};

export const vine: Listing = {
  name: "VINE (Victim Information and Notification Everyday)",
  description:
    "A free, confidential service that tells you by phone, text or email when an offender’s custody status changes. Available 24 hours a day.",
  phone: "(800) 511-1670",
  href: "https://vinelink.vineapps.com/search/KY",
};

export const victimCompensation: Listing = {
  name: "Kentucky Crime Victims Compensation",
  description:
    "Can help eligible victims of violent crime with costs such as medical care, counseling, lost wages and funeral expenses when there is no other way to pay. Run by the state Office of Claims and Appeals.",
  phone: "(502) 782-8255",
  href: "https://kycc.ky.gov/",
};

export const victimResources: ListingGroup[] = [
  {
    id: "crisis",
    title: "Crisis and safety",
    listings: [
      {
        name: "The Ion Center for Violence Prevention",
        description:
          "Free, confidential support for survivors of sexual violence, partner violence, child abuse and stalking in Northern Kentucky. Formerly the Women’s Crisis Center.",
        phone: "(859) 491-3335",
        phoneLabel: "24-hour hotline",
        href: "https://ioncenter.org/",
      },
      {
        name: "National Domestic Violence Hotline",
        description:
          "Confidential support, safety planning and referrals, any time of day.",
        phone: "(800) 799-7233",
        phoneLabel: "24-hour hotline",
        href: "https://www.thehotline.org/",
      },
      {
        name: "St. Elizabeth DOVE Program",
        description:
          "Specially trained nurses provide care and forensic exams for people hurt by domestic or partner violence. Exams are free and do not require a police report. Outside office hours, go to any St. Elizabeth emergency department.",
        phone: "(859) 212-4254",
        phoneLabel: "Weekdays, 7 a.m. to 3 p.m.",
        href: "https://www.stelizabeth.com/community-outreach/dove-program/",
      },
      {
        name: "NorthKey Community Care",
        description:
          "Mental health and substance use services for Northern Kentucky, with a crisis line that is always staffed.",
        phone: "(859) 331-3292",
        phoneLabel: "24-hour crisis line",
        href: "https://www.northkey.org/",
      },
      {
        name: "ZeroV",
        description:
          "Kentucky’s statewide coalition of domestic violence programs, formerly the Kentucky Coalition Against Domestic Violence.",
        href: "https://www.zerov.org/",
      },
    ],
  },
  {
    id: "children",
    title: "Children and vulnerable adults",
    listings: [
      {
        name: "Report child or adult abuse or neglect",
        description:
          "Kentucky’s statewide reporting line, run by the Cabinet for Health and Family Services. Reports that are not emergencies can also be made online.",
        phone: "(877) 597-2331",
        phoneLabel: "Reporting line",
        href: "https://prd.webapps.chfs.ky.gov/reportabuse/home.aspx",
      },
      {
        name: "Family Nurturing Center",
        description:
          "Counseling, education and support to end child abuse and help families heal.",
        phone: "(859) 525-3200",
        href: "https://familynurture.org/",
      },
      {
        name: "National Center for Missing & Exploited Children",
        description:
          "Help when a child is missing or is being exploited, including online.",
        phone: "(800) 843-5678",
        phoneLabel: "24-hour hotline",
        href: "https://www.missingkids.org/",
      },
    ],
  },
  {
    id: "case",
    title: "Your case and your rights",
    listings: [
      vine,
      victimCompensation,
      {
        name: "Campbell Circuit Court Clerk",
        description:
          "Where petitions for protective orders are filed. The clerk’s office has the forms and can explain the steps.",
        phone: circuitClerk.phone,
        href: "https://www.kycourts.gov/Courts/County-Information/Pages/Campbell.aspx",
      },
      {
        name: "Kentucky Attorney General, Office of Victims Advocacy",
        description:
          "State-level help for crime victims, including questions about victims’ rights.",
        phone: "(502) 696-5300",
        href: "https://www.ag.ky.gov/about/Office-Divisions/OVA/Pages/default.aspx",
      },
      {
        name: "Marsy’s Law in Kentucky",
        description:
          "The Attorney General’s summary of the rights the Kentucky Constitution gives crime victims.",
        href: "https://www.ag.ky.gov/Resources/Victim-Resources/Pages/Marsys-Law.aspx",
      },
    ],
  },
  {
    id: "needs",
    title: "Housing and everyday needs",
    listings: [
      {
        name: "Welcome House",
        description:
          "Housing help and related services for people who are homeless or at risk of losing their home.",
        phone: "(859) 431-8717",
        href: "https://www.welcomehouseky.org/get-assistance/",
      },
      {
        name: "Brighton Center",
        description:
          "Emergency assistance, housing, employment and family services, based in Newport.",
        phone: "(859) 491-8303",
        href: "https://www.brightoncenter.com/contact",
      },
      {
        name: "Cabinet for Health and Family Services",
        description:
          "State benefits and family support programs, including food and medical assistance.",
        phone: "(855) 306-8959",
        href: "https://www.chfs.ky.gov/Pages/index.aspx",
      },
      {
        name: "Legal Aid of the Bluegrass",
        description:
          "Free civil legal help for people with low incomes, including protective orders, housing and family law.",
        href: "https://lablaw.org/",
      },
    ],
  },
];

export const communityResources: ListingGroup[] = [
  {
    id: "county",
    title: "Campbell County government",
    listings: [
      {
        name: "Campbell County Fiscal Court",
        description: "County government, departments and public meetings.",
        href: "https://campbellcountyky.gov/",
      },
      {
        name: "County elected officials",
        description: "Who holds each county office and how to reach them.",
        href: "https://campbellcountyky.gov/officials/",
      },
      {
        name: "Code of Ordinances",
        description: "The county’s local laws.",
        href: "https://campbellcountyky.gov/division/blocks.php?structureid=46",
      },
      {
        name: "Campbell County Clerk",
        description:
          "Vehicle registration, deeds and land records, elections and delinquent tax bills.",
        href: "https://campbell.countyclerk.us/",
      },
      {
        name: "Property Valuation Administrator",
        description: "Property assessments and records.",
        href: "https://pva.campbellcountykentucky.com/",
      },
      {
        name: countyAttorney.name,
        description:
          "Misdemeanor and traffic cases, juvenile court, child support and county legal matters. A separate office from this one.",
        href: countyAttorney.href,
      },
    ],
  },
  {
    id: "cities",
    title: "Cities",
    listings: [
      {
        name: "Alexandria",
        description: "",
        href: "https://alexandriaky.gov/",
      },
      { name: "Bellevue", description: "", href: "https://bellevueky.org/" },
      {
        name: "Cold Spring",
        description: "",
        href: "https://coldspringky.gov/",
      },
      { name: "Dayton", description: "", href: "https://daytonky.com/" },
      {
        name: "Fort Thomas",
        description: "",
        href: "https://fortthomasky.org/",
      },
      { name: "Highland Heights", description: "", href: "https://hhky.com/" },
      { name: "Newport", description: "", href: "https://www.newportky.gov/" },
      {
        name: "Silver Grove",
        description: "",
        href: "https://cityofsilvergroveky.com/",
      },
      { name: "Southgate", description: "", href: "https://southgateky.org/" },
      { name: "Wilder", description: "", href: "https://wilderky.gov/" },
    ],
  },
  {
    id: "safety",
    title: "Law enforcement and public safety",
    listings: [
      {
        name: "Campbell County Police Department",
        description: "County police services.",
        href: "https://campbellcountyky.gov/department/index.php?structureid=38",
      },
      {
        name: "Campbell County Sheriff’s Office",
        description: "Court security, service of court papers and tax bills.",
        href: "https://www.campbellcountysheriffky.org/",
      },
      {
        name: "Kentucky State Police",
        description: "Statewide law enforcement.",
        href: "https://www.kentuckystatepolice.ky.gov/",
      },
      {
        name: "Kentucky Sex Offender Registry",
        description: "Search for registered offenders by name or address.",
        href: "https://www.kentuckystatepolice.ky.gov/sex-offender-registry",
      },
      {
        ...vine,
        name: "VINE custody notifications",
        description:
          "Find out whether an offender is in custody and sign up to be told when that changes.",
      },
    ],
  },
  {
    id: "courts",
    title: "Courts and Kentucky law",
    listings: [
      {
        name: "Kentucky Court of Justice",
        description: "The state court system’s main website.",
        href: "https://www.kycourts.gov/",
      },
      {
        name: "Campbell County courts",
        description: "Judges, the Circuit Court Clerk and courthouse details.",
        phone: circuitClerk.phone,
        href: "https://www.kycourts.gov/Courts/County-Information/Pages/Campbell.aspx",
      },
      {
        name: "Court docket search",
        description: "Look up upcoming court dates by county and date.",
        href: "https://kcoj.kycourts.net/dockets/",
      },
      {
        name: "Court forms",
        description:
          "Official forms from the Administrative Office of the Courts.",
        href: "https://www.kycourts.gov/Legal-Forms/Pages/default.aspx",
      },
      {
        name: "Expungement",
        description:
          "How to ask a court to clear an eligible charge or conviction from your record.",
        href: "https://www.kycourts.gov/AOC/Information-and-Technology/Pages/Expungement.aspx",
      },
      {
        name: "Kentucky Revised Statutes",
        description: "The laws passed by the General Assembly.",
        href: "https://apps.legislature.ky.gov/law/statutes/",
      },
      {
        name: "Kentucky Constitution",
        description:
          "Including Section 26A, the crime victims’ rights amendment.",
        href: "https://apps.legislature.ky.gov/law/constitution",
      },
    ],
  },
  {
    id: "legal-help",
    title: "Finding a lawyer",
    listings: [
      {
        name: "Legal Aid of the Bluegrass",
        description: "Free civil legal help for people with low incomes.",
        href: "https://lablaw.org/",
      },
      {
        name: "Department of Public Advocacy",
        description:
          "Kentucky’s public defenders, for people charged with a crime who cannot afford a lawyer.",
        href: "https://dpa.ky.gov/",
      },
      {
        name: "Kentucky Bar Association",
        description: "The state bar, with information on finding a lawyer.",
        href: "https://www.kybar.org/",
      },
    ],
  },
  {
    id: "families",
    title: "Children and families",
    listings: [
      {
        name: "Kentucky Child Support",
        description:
          "Apply for services, make a payment or check a child support account.",
        href: "https://kentuckychildsupport.ky.gov/",
      },
      {
        name: "Cabinet for Health and Family Services",
        description: "State benefits, child protection and family support.",
        phone: "(855) 306-8959",
        href: "https://www.chfs.ky.gov/Pages/index.aspx",
      },
      {
        name: "Report child or adult abuse or neglect",
        description: "Kentucky’s statewide reporting line.",
        phone: "(877) 597-2331",
        href: "https://prd.webapps.chfs.ky.gov/reportabuse/home.aspx",
      },
    ],
  },
];
