import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  CheckIcon,
  GavelIcon,
  HandHeartIcon,
  LandmarkIcon,
  MapPinIcon,
  RouteIcon,
  ScaleIcon,
  ShieldCheckIcon,
  SirenIcon,
  UsersIcon,
  type LucideIcon,
} from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { SealRings } from "@/components/seal-rings";
import { SectionHeading } from "@/components/section-heading";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `${site.name} | ${site.circuit} of Kentucky`,
  },
  description:
    "The Office of the Commonwealth’s Attorney prosecutes felony crimes in Campbell County, Kentucky’s 17th Judicial Circuit. Find the office, learn how a felony case works, and read about victims’ rights.",
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GovernmentOffice",
  name: `${site.office}, ${site.circuit} of ${site.state}`,
  alternateName: site.name,
  url: site.url,
  areaServed: `${site.county}, ${site.state}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: "US",
  },
};

type Task = { icon: LucideIcon; label: string; detail: string; href: string };

const tasks: Task[] = [
  {
    icon: HandHeartIcon,
    label: "understand my rights as a victim",
    detail: "What Kentucky law guarantees you.",
    href: "/#victims",
  },
  {
    icon: RouteIcon,
    label: "see how a felony case works",
    detail: "From the charge to sentencing.",
    href: "/#process",
  },
  {
    icon: SirenIcon,
    label: "report a crime",
    detail: "Who to call, and when.",
    href: "/#report",
  },
  {
    icon: MapPinIcon,
    label: "find the office",
    detail: "Address and directions.",
    href: "/#contact",
  },
];

type Role = { icon: LucideIcon; title: string; body: string };

const roles: Role[] = [
  {
    icon: ScaleIcon,
    title: "Prosecuting felonies",
    body: "The office represents the Commonwealth in felony cases, the most serious crimes under Kentucky law, in Campbell Circuit Court.",
  },
  {
    icon: UsersIcon,
    title: "Presenting cases to the grand jury",
    body: "Prosecutors present evidence to the Campbell County grand jury, which decides whether a felony charge goes forward.",
  },
  {
    icon: HandHeartIcon,
    title: "Keeping victims informed",
    body: "The office tells victims about the proceedings in their case and works with the witnesses who are called to testify.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Working with law enforcement",
    body: "Prosecutors work with the police agencies that investigate crime in Campbell County, from the first report through trial.",
  },
];

const steps: { title: string; body: string }[] = [
  {
    title: "Investigation and charge",
    body: "Police investigate and file a charge, or the case is presented directly to the grand jury.",
  },
  {
    title: "District Court",
    body: "Most felony cases start in District Court, where a judge sets bond and decides at a preliminary hearing whether there is probable cause to send the case on.",
  },
  {
    title: "Grand jury",
    body: "Twelve citizens hear the evidence in private. If at least nine agree there is enough to proceed, they return an indictment.",
  },
  {
    title: "Circuit Court",
    body: "The defendant is arraigned before a Circuit Judge. Both sides exchange evidence and the court rules on motions. Many cases end here with a guilty plea.",
  },
  {
    title: "Trial",
    body: "At trial the Commonwealth must prove guilt beyond a reasonable doubt. A jury of twelve must agree unanimously on its verdict.",
  },
  {
    title: "Sentencing",
    body: "After a conviction or a guilty plea, the judge imposes the final sentence. Victims may give a statement about how the crime affected them.",
  },
];

const rights: string[] = [
  "To be notified of the court proceedings in your case",
  "To be present at those proceedings",
  "To be heard at hearings on release, a plea or sentencing",
  "To consult with the prosecutor handling the case",
  "To reasonable protection from the accused",
  "To be told, on request, if the accused is released or escapes",
  "To have your safety considered when bail is set",
  "To full restitution from a convicted defendant",
];

function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="on-dark relative isolate overflow-hidden bg-navy-900 text-white"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(56rem_38rem_at_80%_42%,rgb(28_71_184_/_0.38),transparent_72%)]"
      />
      <div className="container-site grid items-center gap-14 pt-14 pb-28 md:pt-20 md:pb-32 lg:grid-cols-12 lg:gap-8 lg:pt-24 lg:pb-40">
        <div className="min-w-0 lg:col-span-7">
          <p className="eyebrow animate-rise text-bronze-400">{site.office}</p>
          <h1
            id="hero-heading"
            className="mt-5 animate-rise text-[clamp(1.75rem,calc((100vw-3rem)/9.4),2.5rem)] leading-[1.125] font-bold tracking-[-0.015em] text-white [animation-delay:70ms] md:text-[3.5rem] md:leading-[3.75rem] xl:text-[4.5rem] xl:leading-[4.75rem]"
          >
            Justice for{" "}
            <span className="whitespace-nowrap">{site.county}.</span>
          </h1>
          <p className="mt-6 max-w-[35rem] animate-rise text-lg leading-[1.8125rem] text-silver-300 [animation-delay:140ms] md:text-xl md:leading-8">
            The {site.office} for Kentucky&rsquo;s {site.circuit} prosecutes
            felony crimes in {site.county} on behalf of the people of the
            Commonwealth.
          </p>
          <div className="mt-9 flex animate-rise flex-col gap-4 [animation-delay:210ms] sm:flex-row">
            <ButtonLink href="/#victims" variant="accent" size="lg">
              Victims &amp; Witnesses
              <ArrowRightIcon className="transition-transform duration-150 ease-out group-hover/button:translate-x-1" />
            </ButtonLink>
            <ButtonLink href="/#office" variant="outline-light" size="lg">
              About the Office
            </ButtonLink>
          </div>
          <p className="mt-12 animate-rise [animation-delay:280ms]">
            <span className="block font-heading text-[1.375rem] leading-7 font-semibold text-white">
              {site.person}
            </span>
            <span className="eyebrow mt-1 block text-silver-300">
              {site.personTitle}
            </span>
          </p>
        </div>

        <div className="flex min-w-0 justify-center lg:col-span-5 lg:justify-end">
          <div className="relative size-56 shrink-0 md:size-72 lg:size-80 xl:size-[25rem]">
            <SealRings className="absolute top-1/2 left-1/2 -z-10 size-[400%] max-w-none -translate-x-1/2 -translate-y-1/2 animate-rings" />
            <Image
              src="/images/seal.webp"
              alt={`Seal of the ${site.county} Commonwealth’s Attorney’s Office, Commonwealth of Kentucky`}
              width={400}
              height={400}
              preload
              sizes="(min-width: 80rem) 400px, (min-width: 64rem) 320px, (min-width: 48rem) 288px, 224px"
              className="size-full animate-fade drop-shadow-[0_24px_48px_rgb(3_14_48_/_0.55)] [animation-delay:350ms]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Tasks() {
  return (
    <section aria-labelledby="tasks-heading" className="flow-root bg-silver-50">
      <div className="container-site">
        <div className="relative z-10 -mt-16 grid border-t-[3px] border-bronze-500 bg-white shadow-raised lg:grid-cols-[15rem_1fr]">
          <div className="flex items-center bg-navy-800 px-7 py-6 lg:px-8">
            <h2
              id="tasks-heading"
              className="text-[1.75rem] leading-9 font-bold text-white lg:text-[2rem] lg:leading-10"
            >
              I need to&hellip;
            </h2>
          </div>
          <ul className="grid divide-y divide-silver-200 sm:grid-cols-2 sm:divide-y-0 xl:grid-cols-4">
            {tasks.map(({ icon: Icon, label, detail, href }) => (
              <li
                key={href}
                className="border-silver-200 sm:border-b sm:odd:border-r xl:border-r xl:border-b-0 xl:last:border-r-0 sm:[&:nth-last-child(-n+2)]:border-b-0"
              >
                <Link
                  href={href}
                  className="group flex h-full flex-col gap-3 px-7 py-6 transition-colors duration-150 ease-out hover:bg-silver-50"
                >
                  <Icon
                    aria-hidden="true"
                    strokeWidth={1.5}
                    className="size-6 text-bronze-700"
                  />
                  <span className="font-heading text-[1.1875rem] leading-[1.625rem] font-semibold text-navy-800">
                    {label}
                  </span>
                  <span className="mt-auto flex items-center justify-between gap-3 text-[0.9375rem] leading-6 text-muted-foreground">
                    {detail}
                    <ArrowRightIcon
                      aria-hidden="true"
                      className="size-4 shrink-0 text-navy-800 transition-transform duration-150 ease-out group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="h-18 md:h-24" />
    </section>
  );
}

function Office() {
  return (
    <section
      id="office"
      aria-labelledby="office-heading"
      className="bg-white py-18 md:py-24 lg:py-32"
    >
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <SectionHeading
            id="office-heading"
            eyebrow="The Office"
            title="What the Commonwealth&rsquo;s Attorney does"
            lead="In Kentucky, each judicial circuit has a Commonwealth&rsquo;s Attorney who prosecutes felony cases in Circuit Court. In the 17th Circuit, that means Campbell County."
          />
          <div className="mt-8 flex max-w-[30rem] gap-4 border-l-[3px] border-bronze-500 bg-silver-50 py-5 pr-6 pl-5">
            <LandmarkIcon
              aria-hidden="true"
              strokeWidth={1.5}
              className="mt-0.5 size-6 shrink-0 text-navy-800"
            />
            <p className="text-[0.9375rem] leading-6">
              <strong className="font-bold text-navy-800">
                Looking for a different office?
              </strong>{" "}
              Misdemeanors, traffic offenses and juvenile cases are prosecuted
              in District Court by the Campbell County Attorney, which is a
              separate office.
            </p>
          </div>
        </div>
        <ul className="grid gap-5 sm:grid-cols-2 lg:col-span-7 lg:gap-6">
          {roles.map(({ icon: Icon, title, body }) => (
            <li key={title} className="flex">
              <Card className="w-full">
                <CardHeader>
                  <Icon
                    aria-hidden="true"
                    strokeWidth={1.5}
                    className="mb-3 size-7 text-bronze-700"
                  />
                  <CardTitle>
                    <h3 className="font-semibold">{title}</h3>
                  </CardTitle>
                  <CardDescription>
                    <p>{body}</p>
                  </CardDescription>
                </CardHeader>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CommonwealthsAttorney() {
  return (
    <section
      aria-labelledby="attorney-heading"
      className="on-dark relative isolate overflow-hidden bg-navy-900 py-18 text-white md:py-24"
    >
      <SealRings className="absolute top-1/2 -right-[32rem] -z-10 size-[84rem] max-w-none -translate-y-1/2 opacity-70" />
      <div className="container-site">
        {/* inset hairline frame: a ring inside a ring, squared off */}
        <div className="relative border border-white/15 bg-navy-950/40 px-7 py-12 after:pointer-events-none after:absolute after:inset-2.5 after:border after:border-bronze-500/60 sm:px-12 md:py-16 lg:px-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-8">
            <div className="lg:col-span-5">
              <GavelIcon
                aria-hidden="true"
                strokeWidth={1.5}
                className="size-8 text-bronze-400"
              />
              <p className="eyebrow mt-6 text-bronze-400">{site.personTitle}</p>
              <h2
                id="attorney-heading"
                className="mt-3 text-[2.5rem] leading-[2.875rem] font-bold tracking-[-0.015em] whitespace-nowrap text-white sm:text-[3rem] sm:leading-[3.25rem] xl:text-[3.5rem] xl:leading-[3.75rem]"
              >
                {site.person}
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-[1.8125rem] text-silver-300 md:text-xl md:leading-8 lg:col-span-7 lg:border-l lg:border-white/15 lg:pl-12">
              <p>
                {site.person} serves as {site.personTitle} for Kentucky&rsquo;s{" "}
                {site.circuit}, leading the prosecution of felony cases in{" "}
                {site.county}.
              </p>
              <p>
                He is also the Commonwealth&rsquo;s Attorney for the 16th
                Judicial Circuit in neighboring Kenton County.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="bg-silver-100 py-18 md:py-24 lg:py-32"
    >
      <div className="container-site">
        <SectionHeading
          id="process-heading"
          eyebrow="How a Case Works"
          title="The path of a felony case"
          lead="A felony case passes through two courts and several stages before it is resolved. This is the usual order in Kentucky."
        />
        <ol className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-y-14">
          {steps.map(({ title, body }, index) => (
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
          Every case is different, and this outline leaves out many details. It
          is general information, not legal advice.
        </p>
      </div>
    </section>
  );
}

function Victims() {
  return (
    <section
      id="victims"
      aria-labelledby="victims-heading"
      className="bg-white py-18 md:py-24 lg:py-32"
    >
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <SectionHeading
            id="victims-heading"
            eyebrow="Victims &amp; Witnesses"
            title="If you are the victim of a crime"
            lead="Kentucky&rsquo;s Constitution gives crime victims a voice in the criminal case. These protections are often called Marsy&rsquo;s Law."
          />
          <p className="mt-6 max-w-[30rem]">
            The prosecutor represents the Commonwealth rather than any one
            person, but you have the right to be kept informed and to be heard
            as the case moves through court.
          </p>
          <p className="mt-8">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 font-bold text-navy-800 underline decoration-bronze-500 decoration-2 underline-offset-[6px] hover:text-royal-600"
            >
              How to reach the office
              <ArrowRightIcon
                aria-hidden="true"
                className="size-4 transition-transform duration-150 ease-out group-hover:translate-x-1"
              />
            </Link>
          </p>
        </div>
        <div className="lg:col-span-7">
          <div className="border border-silver-200 bg-silver-50 px-7 py-8 sm:px-10 sm:py-10">
            <h3 className="eyebrow font-sans text-bronze-700">
              Your rights under Kentucky law
            </h3>
            <ul className="mt-6 grid gap-x-10 sm:grid-cols-2">
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
  );
}

function Contact() {
  const { street, city, region, postalCode, mapsUrl } = site.address;
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-silver-50 py-18 md:py-24 lg:py-32"
    >
      <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6">
          <SectionHeading
            id="contact-heading"
            eyebrow="Contact"
            title="Find the office"
          />
          <address className="mt-8 text-xl leading-8 text-ink not-italic">
            <span className="block font-bold text-navy-800">{site.office}</span>
            {street}
            <br />
            {city}, {region} {postalCode}
          </address>
          {site.phone && site.phoneHref ? (
            <p className="mt-4 text-xl leading-8">
              <a
                href={site.phoneHref}
                className="font-bold text-navy-800 underline decoration-bronze-500 decoration-2 underline-offset-[6px]"
              >
                {site.phone}
              </a>
            </p>
          ) : null}
          {site.email ? (
            <p className="mt-2 text-xl leading-8">
              <a
                href={`mailto:${site.email}`}
                className="font-bold text-navy-800 underline decoration-bronze-500 decoration-2 underline-offset-[6px]"
              >
                {site.email}
              </a>
            </p>
          ) : null}
          {site.hours ? <p className="mt-4">{site.hours}</p> : null}
          <div className="mt-8">
            <ButtonLink href={mapsUrl}>
              <MapPinIcon aria-hidden="true" />
              Get Directions
            </ButtonLink>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div
            id="report"
            className="on-dark relative h-full bg-navy-800 px-7 py-10 text-silver-300 after:pointer-events-none after:absolute after:inset-2.5 after:border after:border-bronze-500/60 sm:px-12 sm:py-12"
          >
            <SirenIcon
              aria-hidden="true"
              strokeWidth={1.5}
              className="size-8 text-bronze-400"
            />
            <h3 className="mt-5 text-[1.75rem] leading-9 font-bold text-white">
              To report a crime
            </h3>
            <p className="mt-4 max-w-[30rem]">
              Crimes are reported to law enforcement, which investigates before
              a case reaches this office. Contact your local police department.
            </p>
            <p className="mt-6 max-w-[30rem] border-t border-white/20 pt-6 text-lg leading-[1.8125rem] font-semibold text-white">
              If you or someone else is in danger, call{" "}
              <a
                href="tel:911"
                className="underline decoration-bronze-400 decoration-2 underline-offset-[6px] hover:decoration-white"
              >
                911
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <Tasks />
      <Office />
      <CommonwealthsAttorney />
      <Process />
      <Victims />
      <Contact />
    </>
  );
}
