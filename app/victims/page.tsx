import type { Metadata } from "next";
import {
  ArrowRightIcon,
  BellRingIcon,
  CheckIcon,
  HandHeartIcon,
  ShieldCheckIcon,
  SirenIcon,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import { ButtonLink } from "@/components/button-link";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { PhoneLink, TextLink } from "@/components/text-link";
import { circuitClerk, victimCompensation, vine } from "@/lib/directory";

export const metadata: Metadata = {
  title: "Victims & Witnesses",
  description:
    "Rights of crime victims under Kentucky law, what to expect from the Commonwealth’s Attorney’s office, how to stay informed about a case, and what to do if you are called as a witness.",
  alternates: { canonical: "/victims" },
};

const rights: string[] = [
  "To timely notice of every court proceeding in the case",
  "To be present at those proceedings, other than the grand jury",
  "To be heard at any proceeding about release, a plea, sentencing, or a pardon or commutation",
  "To proceedings free from unreasonable delay",
  "To consult with the prosecutor handling the case",
  "To reasonable protection from the accused and anyone acting for the accused",
  "To be told, on request, if the accused is released or escapes",
  "To have your safety and your family’s safety considered when bail and release conditions are set",
  "To full restitution from the person convicted",
  "To fairness, and to consideration of your safety, dignity and privacy",
  "To be told about these rights, and to ask a court to enforce them",
];

type Help = { icon: LucideIcon; title: string; body: ReactNode };

const help: Help[] = [
  {
    icon: BellRingIcon,
    title: "Know when custody changes",
    body: (
      <>
        VINE is a free, confidential service that tells you by phone, text or
        email when an offender is released, transferred or escapes. Register at{" "}
        <TextLink href={vine.href!}>VINELink</TextLink> or call{" "}
        <PhoneLink number={vine.phone!} />, any time of day.
      </>
    ),
  },
  {
    icon: ShieldCheckIcon,
    title: "Protective orders",
    body: (
      <>
        A judge can order a person to stay away from you. Petitions are filed
        with the {circuitClerk.name} at the courthouse, 330 York Street in
        Newport. The clerk&rsquo;s office has the forms and can explain the
        steps: <PhoneLink number={circuitClerk.phone} />.
      </>
    ),
  },
  {
    icon: HandHeartIcon,
    title: "Help with the costs of a crime",
    body: (
      <>
        Kentucky&rsquo;s Crime Victims Compensation program can help eligible
        victims of violent crime with costs such as medical care, counseling,
        lost wages and funeral expenses when there is no other way to pay.
        Claims generally must be filed within five years. Apply through the{" "}
        <TextLink href={victimCompensation.href!}>
          Office of Claims and Appeals
        </TextLink>{" "}
        or call <PhoneLink number={victimCompensation.phone!} />.
      </>
    ),
  },
  {
    icon: SirenIcon,
    title: "If someone threatens you",
    body: (
      <>
        It is a crime to threaten or pressure a victim or witness about a case.
        If you are in danger, call{" "}
        <a
          href="tel:911"
          className="font-semibold text-navy-800 underline decoration-bronze-500 decoration-2 underline-offset-4 hover:text-royal-600"
        >
          911
        </a>
        . Tell the police and the prosecutor about any contact that worries you,
        and keep messages or voicemails.
      </>
    ),
  },
];

const witnessTips: string[] = [
  "A subpoena is a court order. Read it for the date, time and courtroom, and bring it with you.",
  "Tell the office right away if you have a conflict or your contact details change.",
  "Arrive early and dress as you would for an important appointment.",
  "Tell the truth. If you do not know or do not remember, say so.",
  "Listen to each question and answer only what was asked.",
  "Do not discuss your testimony with other witnesses.",
];

export default function VictimsPage() {
  return (
    <>
      <PageHeader
        title="Victims & witnesses"
        lead="If a felony case involves you, Kentucky law gives you rights, and there are people and programs that can help."
      />

      <section
        aria-labelledby="rights-heading"
        className="bg-white py-18 md:py-24"
      >
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <SectionHeading
              id="rights-heading"
              eyebrow="Your rights"
              title="What the Kentucky Constitution guarantees"
              lead="In 2020 Kentucky voters added Section 26A to the state constitution. It is often called Marsy’s Law, and it gives crime victims a voice in the criminal case."
            />
            <p className="mt-6 max-w-[30rem]">
              State law adds more detail in the Crime Victim Bill of Rights (KRS
              421.500 to 421.575).
            </p>
            <p className="mt-6">
              <TextLink href="https://www.ag.ky.gov/Resources/Victim-Resources/Pages/Marsys-Law.aspx">
                The Attorney General&rsquo;s guide to Marsy&rsquo;s Law
              </TextLink>
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="border border-silver-200 bg-silver-50 px-7 py-8 sm:px-10 sm:py-10">
              <h3 className="eyebrow font-sans text-bronze-700">
                As a victim, you have the right
              </h3>
              <ul className="mt-6">
                {rights.map((right) => (
                  <li
                    key={right}
                    className="flex gap-3.5 border-t border-silver-300 py-4 text-base leading-[1.625rem] text-ink"
                  >
                    <CheckIcon
                      aria-hidden="true"
                      strokeWidth={2.5}
                      className="mt-1 size-[1.125rem] shrink-0 text-bronze-700"
                    />
                    {right}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="expect-heading"
        className="bg-silver-100 py-18 md:py-24"
      >
        <div className="container-site grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              id="expect-heading"
              eyebrow="Working with the office"
              title="What to expect from the prosecutor"
            />
            <div className="mt-6 max-w-[36rem] space-y-5">
              <p>
                Kentucky law asks prosecutors to keep victims informed. If you
                give the office a current address and phone number, it will make
                every reasonable effort to tell you promptly about court dates
                and schedule changes.
              </p>
              <p>
                The prosecutor will also consult you about how the case may be
                resolved, including a dismissal, the defendant&rsquo;s release
                before trial, a plea agreement or a diversion program.
              </p>
              <p>
                The prosecutor represents the Commonwealth rather than any one
                person, and makes the final decisions in the case. Your views
                matter, and you have the right to give them.
              </p>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="At sentencing"
              title="Victim impact statements"
            />
            <div className="mt-6 max-w-[36rem] space-y-5">
              <p>
                A victim impact statement is your own written account of how the
                crime affected you and your family: physically, emotionally and
                financially.
              </p>
              <p>
                The judge must consider it before deciding on a sentence or on
                the defendant&rsquo;s release (KRS 421.520). You can also say
                what you think the sentence should be and what restitution you
                are owed.
              </p>
              <p>
                Keep receipts, bills and records of time lost from work. They
                help the court set restitution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="help-heading"
        className="bg-white py-18 md:py-24"
      >
        <div className="container-site">
          <SectionHeading
            id="help-heading"
            eyebrow="Staying informed and safe"
            title="Help while the case is open"
          />
          <ul className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {help.map(({ icon: Icon, title, body }) => (
              <li key={title} className="border-t-2 border-navy-800 pt-6">
                <Icon
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="size-7 text-bronze-700"
                />
                <h3 className="mt-4 text-[1.3125rem] leading-7 font-semibold lg:text-2xl lg:leading-[1.9375rem]">
                  {title}
                </h3>
                <p className="mt-3 max-w-[34rem] text-base leading-[1.625rem]">
                  {body}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <ButtonLink href="/victims/resources">
              Find help near you
              <ArrowRightIcon className="transition-transform duration-150 ease-out group-hover/button:translate-x-1" />
            </ButtonLink>
          </div>
        </div>
      </section>

      <section
        id="witnesses"
        aria-labelledby="witness-heading"
        className="bg-silver-50 py-18 md:py-24"
      >
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <SectionHeading
              id="witness-heading"
              eyebrow="Witnesses"
              title="If you are called to testify"
              lead="Cases depend on people who are willing to tell a court what they saw or heard."
            />
            <p className="mt-6 max-w-[30rem]">
              Kentucky law protects your job. An employer may not fire or
              penalize you for taking time off to obey a subpoena (KRS 337.415).
            </p>
            <p className="mt-6">
              <TextLink href="/#contact">How to reach the office</TextLink>
            </p>
          </div>
          <div className="lg:col-span-7">
            <ol className="border-t border-silver-300">
              {witnessTips.map((tip, index) => (
                <li
                  key={tip}
                  className="flex gap-5 border-b border-silver-300 py-5 text-base leading-[1.625rem] text-ink"
                >
                  <span
                    aria-hidden="true"
                    className="w-8 shrink-0 font-heading text-2xl leading-7 font-bold text-bronze-700"
                  >
                    {index + 1}
                  </span>
                  {tip}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
