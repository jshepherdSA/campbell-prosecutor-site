import type { Metadata } from "next";
import { ArrowRightIcon } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { OfficeContact } from "@/components/office-contact";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { PhoneLink, TextLink } from "@/components/text-link";
import { caseSteps } from "@/lib/case-steps";
import { countyAttorney, dispatch } from "@/lib/directory";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Felony Prosecution",
  description:
    "How the Commonwealth’s Attorney prosecutes felony cases in Campbell County: what counts as a felony, how a case moves through court, sentencing and restitution.",
  alternates: { canonical: "/prosecution" },
};

const classes: { name: string; term: string }[] = [
  {
    name: "Capital offense",
    term: "Death, life without parole, life without parole for 25 years, life, or 20 to 50 years",
  },
  { name: "Class A felony", term: "20 to 50 years, or life" },
  { name: "Class B felony", term: "10 to 20 years" },
  { name: "Class C felony", term: "5 to 10 years" },
  { name: "Class D felony", term: "1 to 5 years" },
];

export default function ProsecutionPage() {
  return (
    <>
      <PageHeader
        title="Felony prosecution"
        lead={`The office prosecutes felony crimes committed in ${site.county}, from the grand jury through sentencing in Campbell Circuit Court.`}
      />

      <section
        aria-labelledby="felonies-heading"
        className="bg-white py-18 md:py-24"
      >
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <SectionHeading
              id="felonies-heading"
              eyebrow="What the office prosecutes"
              title="Felonies are the most serious crimes"
              lead="A felony is a crime that can be punished by a year or more in state prison. Kentucky sorts felonies into classes, and the class sets the range of prison time a court can impose."
            />
            <table className="mt-10 w-full border-t-2 border-navy-800 text-left text-base leading-[1.625rem]">
              <caption className="sr-only">
                Kentucky felony classes and the prison term for each
              </caption>
              <thead>
                <tr className="border-b border-silver-300">
                  <th scope="col" className="eyebrow py-3 pr-6 text-bronze-700">
                    Class
                  </th>
                  <th scope="col" className="eyebrow py-3 text-bronze-700">
                    Prison term
                  </th>
                </tr>
              </thead>
              <tbody>
                {classes.map(({ name, term }) => (
                  <tr key={name} className="border-b border-silver-300">
                    <th
                      scope="row"
                      className="py-4 pr-6 align-top font-bold whitespace-nowrap text-navy-800"
                    >
                      {name}
                    </th>
                    <td className="py-4 text-ink">{term}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 max-w-[42rem] text-sm leading-[1.375rem] text-muted-foreground">
              These are the basic ranges in KRS 532.030 and 532.060. A
              person&rsquo;s prior felony convictions and the facts of the case
              can change them.
            </p>
          </div>

          <div className="lg:col-span-5 lg:pl-8">
            <h3 className="text-[1.3125rem] leading-7 font-semibold lg:text-2xl lg:leading-[1.9375rem]">
              Not a felony?
            </h3>
            <p className="mt-3">
              Misdemeanors, violations, traffic offenses and juvenile cases are
              prosecuted in District Court by the {countyAttorney.name}, which
              is a separate office.
            </p>
            <OfficeContact office={countyAttorney.criminal} className="mt-6" />
            <p className="mt-6">
              <TextLink href="/find-the-right-office">
                See which office handles what
              </TextLink>
            </p>
          </div>
        </div>
      </section>

      <section
        id="process"
        aria-labelledby="process-heading"
        className="bg-silver-100 py-18 md:py-24"
      >
        <div className="container-site">
          <SectionHeading
            id="process-heading"
            eyebrow="How a case works"
            title="The path of a felony case"
            lead="A felony case passes through two courts and several stages before it is resolved. This is the usual order in Kentucky."
          />
          <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-y-14">
            {caseSteps.map(({ title, body }, index) => (
              <li key={title} className="border-t-2 border-navy-800 pt-6">
                <span
                  aria-hidden="true"
                  className="block font-heading text-[2.75rem] leading-none font-bold text-bronze-700"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-[1.3125rem] leading-7 font-semibold lg:text-2xl lg:leading-[1.9375rem]">
                  {title}
                </h3>
                <p className="mt-3 max-w-[26rem] text-base leading-[1.625rem]">
                  {body}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-12 max-w-[42rem] border-t border-silver-300 pt-6 text-sm leading-[1.375rem] text-muted-foreground">
            Every case is different, and this outline leaves out many details.
            It is general information, not legal advice.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="reporting-heading"
        className="bg-white py-18 md:py-24"
      >
        <div className="container-site grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              id="reporting-heading"
              eyebrow="Before a case begins"
              title="Reporting a crime"
            />
            <div className="mt-6 max-w-[36rem] space-y-5">
              <p>
                This office does not take crime reports. Crimes are reported to
                law enforcement, which investigates before a case reaches a
                prosecutor.
              </p>
              <p>
                In an emergency, call{" "}
                <a
                  href="tel:911"
                  className="font-semibold text-navy-800 underline decoration-bronze-500 decoration-2 underline-offset-4 hover:text-royal-600"
                >
                  911
                </a>
                . Otherwise contact the police department where the crime
                happened, or call {dispatch.name} at{" "}
                <PhoneLink number={dispatch.phone} /> for police help that is
                not an emergency.
              </p>
              <p>
                If police investigate and decide not to file a charge, the{" "}
                {countyAttorney.name} can review a request for a criminal
                complaint.{" "}
                <TextLink href="/find-the-right-office#criminal-complaints">
                  How that works
                </TextLink>
              </p>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="After a conviction"
              title="Sentencing and restitution"
            />
            <div className="mt-6 max-w-[36rem] space-y-5">
              <p>
                After a guilty plea or a guilty verdict, the judge imposes the
                sentence. When a jury convicts, it also recommends a sentence
                within the range the law allows. Depending on the offense and
                the person&rsquo;s record, the result can be prison, probation
                under conditions set by the court, or in some eligible cases a
                supervised diversion program.
              </p>
              <p>
                When a crime costs a victim money, Kentucky law requires the
                court to order restitution as part of the sentence, including in
                probation and diversion agreements (KRS 532.032). The judge sets
                the amount and the payment schedule and can call the person back
                to court if payments stop (KRS 532.033).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="victims-cta-heading"
        className="on-dark bg-navy-900 py-16 text-white md:py-20"
      >
        <div className="container-site flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-[40rem]">
            <h2
              id="victims-cta-heading"
              className="text-[1.75rem] leading-9 font-bold text-white md:text-[2.375rem] md:leading-[2.75rem]"
            >
              Is a case about something that happened to you?
            </h2>
            <p className="mt-4 text-lg leading-[1.8125rem] text-silver-300">
              Victims have rights at every stage, and witnesses have protections
              too.
            </p>
          </div>
          <ButtonLink
            href="/victims"
            variant="accent"
            size="lg"
            className="self-start lg:self-auto"
          >
            Victims &amp; Witnesses
            <ArrowRightIcon className="transition-transform duration-150 ease-out group-hover/button:translate-x-1" />
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
