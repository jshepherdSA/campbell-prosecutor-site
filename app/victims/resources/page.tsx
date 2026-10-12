import type { Metadata } from "next";
import { ListingGrid } from "@/components/listing-grid";
import { PageHeader } from "@/components/page-header";
import { PhoneLink } from "@/components/text-link";
import { dispatch, victimResources } from "@/lib/directory";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Help for Victims",
  description:
    "Hotlines, shelters, counseling, compensation and legal help for crime victims in Campbell County and Northern Kentucky, with phone numbers and links.",
  alternates: { canonical: "/victims/resources" },
};

export default function VictimResourcesPage() {
  return (
    <>
      <PageHeader
        parent={{ label: "Victims & Witnesses", href: "/victims" }}
        title="Help for victims"
        lead="Organizations in Campbell County and across Kentucky that support people harmed by crime. Their services are separate from this office, and most are free."
      />

      <section aria-labelledby="emergency-heading" className="bg-silver-50">
        <div className="container-site py-10">
          <div className="on-dark grid gap-6 bg-navy-800 px-7 py-8 text-silver-300 sm:px-10 md:grid-cols-2 md:gap-10">
            <div>
              <h2
                id="emergency-heading"
                className="text-[1.75rem] leading-9 font-bold text-white"
              >
                In danger right now?
              </h2>
              <p className="mt-2 text-lg leading-[1.8125rem] font-semibold text-white">
                Call{" "}
                <a
                  href="tel:911"
                  className="underline decoration-bronze-400 decoration-2 underline-offset-[6px] hover:decoration-white"
                >
                  911
                </a>
                .
              </p>
            </div>
            <p className="md:border-l md:border-white/20 md:pl-10">
              For police help that is not an emergency, call {dispatch.name} at{" "}
              <PhoneLink
                number={dispatch.phone}
                className="text-white decoration-bronze-400 hover:text-white hover:decoration-white"
              />
              . This website is not monitored for emergencies.
            </p>
          </div>
        </div>
      </section>

      {victimResources.map(({ id, title, listings }, index) => (
        <section
          key={id}
          id={id}
          aria-labelledby={`${id}-heading`}
          className={cn(
            "py-14 md:py-18",
            index % 2 === 0 ? "bg-silver-50" : "bg-white",
          )}
        >
          <div className="container-site">
            <h2
              id={`${id}-heading`}
              className="text-[1.9375rem] leading-[2.3125rem] font-bold tracking-[-0.01em] md:text-[2.375rem] md:leading-[2.75rem]"
            >
              {title}
            </h2>
            <ListingGrid listings={listings} className="mt-8" />
          </div>
        </section>
      ))}
    </>
  );
}
