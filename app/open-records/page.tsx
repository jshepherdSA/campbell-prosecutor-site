import type { Metadata } from "next";
import { CheckIcon } from "lucide-react";
import { OfficeContact } from "@/components/office-contact";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { TextLink } from "@/components/text-link";
import { circuitClerk } from "@/lib/directory";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Open Records Requests",
  description:
    "How to request public records from the Commonwealth’s Attorney’s office in Campbell County under the Kentucky Open Records Act, what a request must include, and which records are exempt.",
  alternates: { canonical: "/open-records" },
};

const requestForm =
  "https://www.ag.ky.gov/Documents/2021_Standardized_Open_Records_Request_Form_V3.pdf";

const include: string[] = [
  "Your name, printed legibly, and your signature",
  "A mailing address or email address for the reply",
  "A description of the records, specific enough for staff to find them",
  "How you qualify as a Kentucky resident under the Act",
  "Whether the records will be used for a commercial purpose",
];

export default function OpenRecordsPage() {
  const { street, city, region, postalCode } = site.address;
  return (
    <>
      <PageHeader
        title="Open records requests"
        lead="The Kentucky Open Records Act (KRS 61.870 to 61.884) gives Kentucky residents the right to inspect public records. This page explains how to make a request to this office."
      />

      <section
        aria-labelledby="request-heading"
        className="bg-white py-18 md:py-24"
      >
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <SectionHeading
              id="request-heading"
              eyebrow="Making a request"
              title="Put it in writing"
              lead="A request must be written and signed. You can use the Attorney General’s standard form, but any letter that covers the points below will do."
            />
            <ul className="mt-8 border-t border-silver-300">
              {include.map((item) => (
                <li
                  key={item}
                  className="flex gap-3.5 border-b border-silver-300 py-4 text-base leading-[1.625rem] text-ink"
                >
                  <CheckIcon
                    aria-hidden="true"
                    strokeWidth={2.5}
                    className="mt-1 size-[1.125rem] shrink-0 text-bronze-700"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8">
              <TextLink href={requestForm}>
                Standard open records request form (PDF)
              </TextLink>
            </p>
          </div>

          <div className="lg:col-span-5 lg:pl-8">
            <h3 className="text-[1.3125rem] leading-7 font-semibold lg:text-2xl lg:leading-[1.9375rem]">
              Where to send it
            </h3>
            <p className="mt-3">Mail or hand-deliver your request to:</p>
            <address className="mt-4 border-l-[3px] border-bronze-500 bg-silver-50 py-5 pr-6 pl-5 text-[0.9375rem] leading-6 not-italic">
              <span className="block font-bold text-navy-800">
                Records Custodian
              </span>
              {site.office}
              <br />
              {street}
              <br />
              {city}, {region} {postalCode}
            </address>
            {site.email ? (
              <p className="mt-4">
                Or email it to{" "}
                <TextLink href={`mailto:${site.email}`}>{site.email}</TextLink>.
              </p>
            ) : null}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="next-heading"
        className="bg-silver-100 py-18 md:py-24"
      >
        <div className="container-site grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              id="next-heading"
              eyebrow="After you ask"
              title="What happens next"
            />
            <div className="mt-6 max-w-[36rem] space-y-5">
              <p>
                The office answers in writing within five business days of
                receiving a request. The answer will either make the records
                available, say when they will be, or explain which part of the
                law allows them to be withheld.
              </p>
              <p>
                You may inspect records at the office during business hours or
                ask for copies. The Act allows a reasonable fee for copies, no
                higher than the actual cost of making them.
              </p>
              <p>
                If a request is denied, you can ask the Kentucky Attorney
                General to review the decision. Send the Attorney General a copy
                of your request and of the denial.
              </p>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Know before you ask"
              title="Most case files are exempt"
            />
            <div className="mt-6 max-w-[36rem] space-y-5">
              <p>
                The Act exempts records that a Commonwealth&rsquo;s Attorney
                compiles and keeps for criminal investigations and criminal
                cases, and they stay exempt after the case is over (
                <span className="whitespace-nowrap">KRS 61.878(1)(h)</span>).
                Requests for a prosecutor&rsquo;s case file are usually denied
                for that reason.
              </p>
              <p>
                Other offices hold public versions of many of the same records.
                Police reports come from the police agency that wrote them.
                Indictments, orders and other documents filed in a case come
                from the clerk of the court.
              </p>
            </div>
            <OfficeContact
              office={circuitClerk}
              label="Court records"
              className="mt-8 max-w-[26rem] bg-white"
            />
          </div>
        </div>
      </section>
    </>
  );
}
