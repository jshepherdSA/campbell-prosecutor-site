import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { TextLink } from "@/components/text-link";
import {
  circuitClerk,
  dispatch,
  victimCompensation,
  vine,
} from "@/lib/directory";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Questions & Answers",
  description:
    "Answers to common questions about the Commonwealth’s Attorney’s office in Campbell County: reporting a crime, felony cases, grand juries, subpoenas, restitution and records.",
  alternates: { canonical: "/faq" },
};

type Question = {
  q: string;
  /** Plain-text paragraphs. Also used for the page's structured data. */
  a: string[];
  more?: { label: string; href: string };
};

type Group = { id: string; title: string; questions: Question[] };

const groups: Group[] = [
  {
    id: "office",
    title: "About the office",
    questions: [
      {
        q: "What does the Commonwealth’s Attorney do?",
        a: [
          `Each judicial circuit in Kentucky has a Commonwealth’s Attorney who prosecutes felony cases in Circuit Court on behalf of the people of the Commonwealth. The ${site.circuit} is ${site.county}.`,
          "The office presents cases to the grand jury, handles them through trial and sentencing, and keeps victims informed along the way.",
        ],
        more: { label: "Felony prosecution", href: "/prosecution" },
      },
      {
        q: "How is this office different from the County Attorney?",
        a: [
          "They are two separate offices. The County Attorney prosecutes misdemeanor, traffic and juvenile cases in District Court, runs the child support office, and is the lawyer for county government.",
          "The Commonwealth’s Attorney prosecutes felonies in Circuit Court.",
        ],
        more: {
          label: "See which office handles what",
          href: "/find-the-right-office",
        },
      },
      {
        q: "Can the office give me legal advice or represent me?",
        a: [
          "No. Prosecutors represent the Commonwealth, not individual people, so the office cannot give legal advice or act as your lawyer, even if you are the victim in a case.",
          "Legal Aid of the Bluegrass helps people with low incomes in civil matters. If you are charged with a crime and cannot afford a lawyer, the court can appoint a public defender.",
        ],
        more: { label: "Finding a lawyer", href: "/resources#legal-help" },
      },
    ],
  },
  {
    id: "cases",
    title: "Cases and court",
    questions: [
      {
        q: "How do I report a crime?",
        a: [
          `In an emergency, call 911. Otherwise contact the police department where the crime happened, or call ${dispatch.name} at ${dispatch.phone} for police help that is not an emergency.`,
          "This office does not take crime reports. Police investigate first, and the case comes to a prosecutor after that.",
        ],
      },
      {
        q: "What is the difference between a felony and a misdemeanor?",
        a: [
          "A felony can be punished by a year or more in state prison and is decided in Circuit Court. A misdemeanor carries no more than twelve months in a county jail and is decided in District Court.",
        ],
        more: { label: "Felony classes and penalties", href: "/prosecution" },
      },
      {
        q: "What is a grand jury?",
        a: [
          "A grand jury is a group of twelve citizens who hear evidence in private and decide whether there is enough to charge someone with a felony. If at least nine agree, they return an indictment.",
          "An indictment is a formal charge. It is not a finding of guilt, and the person charged is presumed innocent.",
        ],
      },
      {
        q: "Can a victim drop the charges?",
        a: [
          "No. A criminal case is brought by the Commonwealth, not by the victim, so the decision to go forward, reduce or dismiss a charge belongs to the prosecutor and the court.",
          "The prosecutor must consult the victim about how the case may be resolved, and the victim’s wishes are taken seriously.",
        ],
        more: { label: "Victims’ rights", href: "/victims" },
      },
      {
        q: "How do I find out when a court date is?",
        a: [
          `The Kentucky Court of Justice publishes court dockets online, searchable by county and date. You can also call the ${circuitClerk.name} at ${circuitClerk.phone}.`,
          "If you are a victim in a case this office is prosecuting, the office will tell you about court dates as long as it has your current contact details.",
        ],
        more: {
          label: "Court docket search",
          href: "https://kcoj.kycourts.net/dockets/",
        },
      },
    ],
  },
  {
    id: "victims",
    title: "Victims and witnesses",
    questions: [
      {
        q: "How will I know if the defendant is released from jail?",
        a: [
          `Register with VINE, a free and confidential service that notifies you by phone, text or email when an offender’s custody status changes. Call ${vine.phone} at any time or sign up online.`,
        ],
        more: { label: "VINELink for Kentucky", href: vine.href! },
      },
      {
        q: "I received a subpoena. Do I have to go?",
        a: [
          "Yes. A subpoena is a court order to appear at the date, time and place it names. If you have a conflict, contact the office that issued it as soon as you can. Do not simply stay away.",
          "Kentucky law does not allow an employer to fire or penalize you for taking time off to obey a subpoena.",
        ],
        more: {
          label: "If you are called to testify",
          href: "/victims#witnesses",
        },
      },
      {
        q: "Can I get back the money the crime cost me?",
        a: [
          "When a defendant is convicted, the court must order restitution for the victim’s financial losses. Keep receipts, bills and records of missed work so the amount can be proved.",
          `Kentucky’s Crime Victims Compensation program may also help eligible victims of violent crime with certain costs. Call ${victimCompensation.phone}.`,
        ],
        more: {
          label: "Crime Victims Compensation",
          href: victimCompensation.href!,
        },
      },
      {
        q: "What is a victim impact statement?",
        a: [
          "It is your own written account of how the crime affected you and your family. The judge must consider it before deciding on a sentence.",
        ],
        more: { label: "More for victims", href: "/victims" },
      },
    ],
  },
  {
    id: "records",
    title: "Records and other help",
    questions: [
      {
        q: "How do I get a copy of a police report?",
        a: [
          "Ask the law enforcement agency that took the report. Each police department handles its own records requests.",
        ],
      },
      {
        q: "How do I request records from this office?",
        a: [
          "Send a written request under the Kentucky Open Records Act. Most records in a prosecutor’s case file are exempt from disclosure by law, so court records and police reports are usually better requested from the clerk or the police agency.",
        ],
        more: { label: "Open records requests", href: "/open-records" },
      },
      {
        q: "How do I get a charge or conviction expunged?",
        a: [
          "Expungement is requested through the court where the case was handled, and it begins with a certificate of eligibility from the state. The Kentucky Court of Justice explains the steps and provides the forms.",
          "This office cannot advise you on whether you qualify. A lawyer can.",
        ],
        more: {
          label: "Expungement information from the Kentucky courts",
          href: "https://www.kycourts.gov/AOC/Information-and-Technology/Pages/Expungement.aspx",
        },
      },
      {
        q: "Where do I go about a traffic ticket, child support or guardianship?",
        a: [
          "Those are handled by the Campbell County Attorney’s Office, which is separate from this one. The Services pages explain each one and give that office’s contact details.",
        ],
        more: { label: "Services", href: "/services" },
      },
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: groups.flatMap(({ questions }) =>
    questions.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a.join(" ") },
    })),
  ),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <PageHeader
        title="Questions & answers"
        lead="Plain answers to the questions the public asks most often. This is general information, not legal advice."
      />

      <div className="bg-white py-14 md:py-20">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-8">
          <nav
            aria-label="Question groups"
            className="lg:sticky lg:top-32 lg:col-span-3 lg:self-start"
          >
            <ul className="flex flex-wrap gap-x-6 gap-y-2 border-b border-silver-300 pb-5 lg:block lg:space-y-1 lg:border-b-0 lg:border-l lg:pb-0">
              {groups.map(({ id, title }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="-ml-px block py-1.5 text-[0.9375rem] leading-6 font-semibold text-navy-800 underline decoration-transparent underline-offset-4 hover:decoration-bronze-500 lg:border-l-[3px] lg:border-transparent lg:pl-5 lg:hover:border-bronze-500 lg:hover:no-underline"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-16 lg:col-span-9 lg:pl-4">
            {groups.map(({ id, title, questions }) => (
              <section key={id} id={id} aria-labelledby={`${id}-heading`}>
                <h2
                  id={`${id}-heading`}
                  className="text-[1.9375rem] leading-[2.3125rem] font-bold tracking-[-0.01em] md:text-[2.375rem] md:leading-[2.75rem]"
                >
                  {title}
                </h2>
                <div className="mt-8 border-t-2 border-navy-800">
                  {questions.map(({ q, a, more }) => (
                    <article
                      key={q}
                      className="border-b border-silver-300 py-7"
                    >
                      <h3 className="text-[1.3125rem] leading-7 font-semibold lg:text-2xl lg:leading-[1.9375rem]">
                        {q}
                      </h3>
                      <div className="mt-3 max-w-[42rem] space-y-4">
                        {a.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                        {more ? (
                          <p>
                            <TextLink href={more.href}>{more.label}</TextLink>
                          </p>
                        ) : null}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
