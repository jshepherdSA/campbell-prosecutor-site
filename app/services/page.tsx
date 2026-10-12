import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ServiceGrid } from "@/components/service-grid";
import { TextLink } from "@/components/text-link";
import { countyAttorney } from "@/lib/directory";
import { services, trafficDiversion } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Prosecution, victim assistance, bad checks, Casey’s Law, child support, delinquent taxes, guardianship, involuntary treatment, juvenile court and traffic diversion in Campbell County.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services"
        lead={`Legal services for ${site.county} residents, with what each one involves, what to bring and who to contact.`}
      />

      <section
        aria-labelledby="services-heading"
        className="bg-silver-50 py-14 md:py-20"
      >
        <div className="container-site">
          <h2 id="services-heading" className="sr-only">
            All services
          </h2>
          <ServiceGrid services={[...services, trafficDiversion]} />
          <p className="mt-10 max-w-[42rem] border-t border-silver-300 pt-6 text-[0.9375rem] leading-6">
            This office prosecutes felonies and assists victims and witnesses.
            The other services listed here are run by the {countyAttorney.name},
            a separate office, and each page gives that office&rsquo;s contact
            details.{" "}
            <TextLink href="/find-the-right-office">
              See who handles what
            </TextLink>
          </p>
        </div>
      </section>
    </>
  );
}
