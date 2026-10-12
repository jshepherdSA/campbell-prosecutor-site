import type { Metadata } from "next";
import type { ReactNode } from "react";
import { OfficeContact } from "@/components/office-contact";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { PhoneLink, TextLink } from "@/components/text-link";
import { circuitClerk, countyAttorney, type Office } from "@/lib/directory";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Find the Right Office",
  description:
    "Who handles traffic tickets, misdemeanors, child support, bad checks, delinquent property taxes, guardianship, Casey’s Law and juvenile court in Campbell County, with phone numbers and addresses.",
  alternates: { canonical: "/find-the-right-office" },
};

/** The County Attorney's courthouse office, for matters outside its criminal work. */
const courthouseOffice: Office = {
  ...countyAttorney.criminal,
  name: countyAttorney.name,
};

type Topic = {
  id: string;
  title: string;
  body: ReactNode;
  office: Office;
  /** The page that covers this topic in full. */
  more?: { label: string; href: string };
  links?: { label: string; href: string }[];
};

const topics: Topic[] = [
  {
    id: "misdemeanors",
    title: "Misdemeanor, traffic and violation charges",
    body: (
      <>
        <p>
          Charges that carry no more than twelve months in jail, such as most
          DUI and traffic cases, minor assaults and lower-value thefts, are
          prosecuted in Campbell District Court by the County Attorney&rsquo;s
          Criminal Division.
        </p>
        <p>
          That division also handles the first stage of a felony case, the
          preliminary hearing, before the case comes to this office.
        </p>
      </>
    ),
    office: countyAttorney.criminal,
  },
  {
    id: "criminal-complaints",
    title: "Asking for charges when police have not filed them",
    body: (
      <>
        <p>
          Start with the police department where the crime happened and ask for
          an investigation. If officers decide not to charge, an adult can ask
          the County Attorney&rsquo;s Criminal Division to review a criminal
          complaint. Requests are made in person.
        </p>
        <p>
          Bring a government-issued photo ID, the police report, any other
          evidence, and what you know about the person: full name, address and
          date of birth. An attorney there reviews the request and decides how
          to proceed.
        </p>
      </>
    ),
    office: countyAttorney.criminal,
    links: [
      {
        label: "Criminal complaint form (Word document)",
        href: "https://www.campbellcountyattorney.com/s/Private-Complaint-Form.doc",
      },
      {
        label: "Court process flow chart (PDF)",
        href: "https://www.campbellcountyattorney.com/s/court-process-flow-chart.pdf",
      },
    ],
  },
  {
    id: "traffic-diversion",
    more: { label: "Traffic diversion in full", href: "/traffic-diversion" },
    title: "Traffic ticket diversion (the CATS program)",
    body: (
      <>
        <p>
          The County Attorney Traffic Safety program lets some drivers take a
          short online course and pay a fee in place of going to court. When the
          course is finished, the citation is dismissed and no points go on the
          driver&rsquo;s record.
        </p>
        <p>
          Not every ticket or driver qualifies. Commercial license holders and
          some higher-speed offenses are excluded, and the County
          Attorney&rsquo;s office decides who is eligible and sets the fee.
        </p>
      </>
    ),
    office: countyAttorney.criminal,
    links: [
      { label: "CATS program website", href: "https://www.catsprogram.com/" },
    ],
  },
  {
    id: "bad-checks",
    more: {
      label: "The bad check program in full",
      href: "/services/bad-check-program",
    },
    title: "Bad checks",
    body: (
      <>
        <p>
          A business or person who is paid with a check that the bank returns
          can take it to the County Attorney&rsquo;s bad check program. That
          office writes to the check writer to seek repayment, and it can bring
          a charge of theft by deception if the check is not made good.
        </p>
        <p>
          Bring the returned check and what you know about the writer, including
          a street address. Disputes over the quality of goods or work are civil
          matters and are not prosecuted.
        </p>
      </>
    ),
    office: countyAttorney.civil,
  },
  {
    id: "child-support",
    more: { label: "Child support in full", href: "/services/child-support" },
    title: "Child support",
    body: (
      <>
        <p>
          The County Attorney&rsquo;s Child Support Division works with the
          state to locate parents, establish paternity, set support and medical
          support orders, collect payments and review orders when circumstances
          change. Either parent can ask for help.
        </p>
        <p>
          Payments and account information are handled through the state&rsquo;s
          child support website.
        </p>
      </>
    ),
    office: countyAttorney.childSupport,
    links: [
      {
        label: "Kentucky Child Support",
        href: "https://kentuckychildsupport.ky.gov/",
      },
    ],
  },
  {
    id: "delinquent-taxes",
    more: {
      label: "Delinquent taxes in full",
      href: "/services/delinquent-tax-collection",
    },
    title: "Delinquent property taxes",
    body: (
      <>
        <p>
          Property tax bills are paid to the Sheriff. Bills still unpaid after
          April 15 go to the County Clerk as certificates of delinquency, which
          become liens on the property and gain interest and fees. Unpaid
          certificates can later be sold to private buyers, who may add their
          own costs.
        </p>
        <p>
          The County Attorney&rsquo;s Civil Division collects these bills and
          can set up a payment plan that keeps a certificate from being sold.
        </p>
      </>
    ),
    office: countyAttorney.civil,
    links: [
      {
        label: "Sheriff’s tax bill lookup",
        href: "https://sheriff.campbellcountykentucky.com/",
      },
      {
        label: "Campbell County Clerk",
        href: "https://campbell.countyclerk.us/",
      },
    ],
  },
  {
    id: "guardianship",
    more: { label: "Guardianship in full", href: "/services/guardianships" },
    title: "Guardianship and conservatorship",
    body: (
      <>
        <p>
          When an adult can no longer manage personal or financial affairs,
          anyone concerned for that person can ask the District Court to appoint
          a guardian or conservator. A doctor, a psychologist and a social
          worker evaluate the person, and the court then holds a hearing,
          usually before a jury, to decide whether the person needs help and how
          much.
        </p>
        <p>
          The County Attorney represents the Commonwealth at the hearing and can
          answer questions about the process and the forms.
        </p>
      </>
    ),
    office: courthouseOffice,
    links: [
      {
        label: "Petition form (AOC-740)",
        href: "https://www.kycourts.gov/Legal-Forms/Legal%20Forms/740.pdf",
      },
      {
        label: "Kentucky Guardianship Association",
        href: "https://www.kyguardianship.org/",
      },
    ],
  },
  {
    id: "caseys-law",
    more: { label: "Casey’s Law in full", href: "/services/caseys-law" },
    title: "Casey’s Law: court-ordered treatment for addiction",
    body: (
      <>
        <p>
          Casey&rsquo;s Law lets a relative or friend ask the District Court to
          order treatment for someone whose drug or alcohol use puts that person
          or others in danger. It is a civil process. No criminal charge is
          involved.
        </p>
        <p>
          The petition is filed with the District Court Clerk at the courthouse,
          330 York Street. Two health professionals, one of them a physician,
          evaluate the person before a hearing. The person who files arranges
          the treatment and is responsible for its cost.
        </p>
      </>
    ),
    office: countyAttorney.civil,
    links: [
      {
        label: "Petition form (AOC-700A)",
        href: "https://www.kycourts.gov/Legal-Forms/Legal%20Forms/700A.pdf",
      },
    ],
  },
  {
    id: "involuntary-hospitalization",
    more: {
      label: "Involuntary treatment in full",
      href: "/services/involuntary-treatment",
    },
    title: "Involuntary hospitalization for mental illness",
    body: (
      <>
        <p>
          A person with a mental illness who is a danger to themselves or
          others, and who can benefit from treatment, can be hospitalized by
          court order when no less restrictive option will work. A petition is
          filed in District Court asking for up to 60 or 360 days, and mental
          health professionals examine the person before a judge decides.
        </p>
        <p>
          In a mental health crisis, call or text{" "}
          <a
            href="tel:988"
            className="font-semibold text-navy-800 underline decoration-bronze-500 decoration-2 underline-offset-4 hover:text-royal-600"
          >
            988
          </a>
          , or call NorthKey Community Care&rsquo;s 24-hour crisis line at{" "}
          <PhoneLink number="(859) 331-3292" />.
        </p>
      </>
    ),
    office: countyAttorney.civil,
  },
  {
    id: "juvenile",
    more: { label: "Juvenile court in full", href: "/services/juvenile-court" },
    title: "Juvenile court",
    body: (
      <>
        <p>
          Cases about children are handled by the County Attorney in District
          and Family Court. They include dependency, neglect and abuse cases,
          status offenses such as truancy, and offenses committed by minors.
          Juvenile court records are confidential.
        </p>
        <p>
          The most serious charges against older juveniles can be transferred to
          Circuit Court, where this office prosecutes them. To report suspected
          abuse or neglect of a child, call{" "}
          <PhoneLink number="(877) 597-2331" />.
        </p>
      </>
    ),
    office: countyAttorney.criminal,
  },
  {
    id: "county-government",
    more: {
      label: "The County Attorney’s role in full",
      href: "/services/fiscal-court-advisor",
    },
    title: "County government legal matters",
    body: (
      <>
        <p>
          The County Attorney is the legal adviser to the Campbell County Fiscal
          Court and to county officials. That office reviews county contracts,
          drafts and enforces county ordinances and represents the county in
          civil cases.
        </p>
      </>
    ),
    office: countyAttorney.civil,
    links: [
      {
        label: "Campbell County Fiscal Court",
        href: "https://campbellcountyky.gov/",
      },
      {
        label: "Code of Ordinances",
        href: "https://campbellcountyky.gov/division/blocks.php?structureid=46",
      },
    ],
  },
  {
    id: "court-clerk",
    title: "Court records, jury service and protective orders",
    body: (
      <>
        <p>
          The Circuit Court Clerk keeps the records of Campbell Circuit and
          District Court, manages jury service, takes payments of fines and
          court costs, and accepts petitions for protective orders.
        </p>
      </>
    ),
    office: circuitClerk,
    links: [
      {
        label: "Campbell County courts",
        href: "https://www.kycourts.gov/Courts/County-Information/Pages/Campbell.aspx",
      },
      {
        label: "Court docket search",
        href: "https://kcoj.kycourts.net/dockets/",
      },
    ],
  },
];

export default function FindTheRightOfficePage() {
  return (
    <>
      <PageHeader
        title="Find the right office"
        lead={`Two prosecutors’ offices serve ${site.county}, and each does different work. This page shows who handles what, so you can go straight to the people who can help.`}
      />

      <section
        aria-labelledby="two-offices-heading"
        className="bg-white py-18 md:py-24"
      >
        <div className="container-site">
          <SectionHeading
            id="two-offices-heading"
            eyebrow="Two separate offices"
            title="Commonwealth&rsquo;s Attorney or County Attorney?"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="border border-silver-200 border-t-[3px] border-t-navy-800 px-7 py-8">
              <h3 className="text-[1.3125rem] leading-7 font-semibold lg:text-2xl lg:leading-[1.9375rem]">
                Commonwealth&rsquo;s Attorney
              </h3>
              <p className="eyebrow mt-2 text-bronze-700">This office</p>
              <ul className="mt-5 list-disc space-y-2 pl-5 marker:text-bronze-500">
                <li>Felony cases in Campbell Circuit Court</li>
                <li>Presenting cases to the grand jury</li>
                <li>Victims and witnesses in felony cases</li>
              </ul>
              <p className="mt-6">
                <TextLink href="/prosecution">
                  How felony prosecution works
                </TextLink>
              </p>
            </div>
            <div className="border border-silver-200 border-t-[3px] border-t-bronze-500 px-7 py-8">
              <h3 className="text-[1.3125rem] leading-7 font-semibold lg:text-2xl lg:leading-[1.9375rem]">
                County Attorney
              </h3>
              <p className="eyebrow mt-2 text-bronze-700">A separate office</p>
              <ul className="mt-5 list-disc space-y-2 pl-5 marker:text-bronze-500">
                <li>
                  Misdemeanor, traffic and juvenile cases in District Court
                </li>
                <li>Child support</li>
                <li>
                  Guardianship, Casey&rsquo;s Law and involuntary
                  hospitalization
                </li>
                <li>Bad checks and delinquent property taxes</li>
                <li>Legal advice to county government</li>
              </ul>
              <p className="mt-6">
                <TextLink href={countyAttorney.href}>
                  Campbell County Attorney&rsquo;s website
                </TextLink>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="topics-heading"
        className="bg-silver-50 py-18 md:py-24"
      >
        <div className="container-site">
          <SectionHeading
            id="topics-heading"
            eyebrow="By topic"
            title="Who handles what"
            lead="The details below come from each office and can change. Call ahead to confirm hours, fees and what to bring."
          />
          <nav aria-label="Topics on this page" className="mt-10">
            <ul className="flex flex-wrap gap-2">
              {topics.map(({ id, title }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="inline-block rounded-sm border border-silver-300 bg-white px-3.5 py-2 text-[0.9375rem] leading-6 font-semibold text-navy-800 transition-colors duration-150 hover:border-navy-800"
                  >
                    {title.split(":")[0]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-12 space-y-6">
            {topics.map(({ id, title, body, office, more, links }) => (
              <article
                key={id}
                id={id}
                aria-labelledby={`${id}-heading`}
                className="grid gap-8 border border-silver-200 bg-white px-7 py-8 sm:px-10 sm:py-10 lg:grid-cols-12 lg:gap-10"
              >
                <div className="lg:col-span-7">
                  <h3
                    id={`${id}-heading`}
                    className="text-[1.3125rem] leading-7 font-semibold lg:text-2xl lg:leading-[1.9375rem]"
                  >
                    {title}
                  </h3>
                  <div className="mt-4 space-y-4 text-base leading-[1.625rem]">
                    {body}
                  </div>
                  {more || links ? (
                    <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-base leading-[1.625rem]">
                      {[...(more ? [more] : []), ...(links ?? [])].map(
                        ({ label, href }) => (
                          <li key={href}>
                            <TextLink href={href}>{label}</TextLink>
                          </li>
                        ),
                      )}
                    </ul>
                  ) : null}
                </div>
                <div className="lg:col-span-5">
                  <OfficeContact office={office} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
