import Image from "next/image";
import Link from "next/link";
import { SealRings } from "@/components/seal-rings";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="on-dark relative isolate overflow-hidden bg-navy-950 text-silver-300">
      <SealRings className="absolute -bottom-[34rem] -left-[30rem] -z-10 size-[80rem] opacity-60" />

      <div className="container-site grid gap-12 py-16 md:grid-cols-12 md:gap-8 lg:py-20">
        <div className="min-w-0 md:col-span-6 lg:col-span-5">
          <div className="flex items-center gap-4 sm:gap-5">
            <Image
              src="/images/seal.webp"
              alt={`Seal of the ${site.county} Commonwealth’s Attorney’s Office`}
              width={96}
              height={96}
              className="size-16 shrink-0 sm:size-20 lg:size-24"
            />
            <p>
              <span className="block font-heading text-lg leading-6 font-bold text-white sm:text-2xl sm:leading-8">
                {site.office}
              </span>
              <span className="eyebrow mt-1 block text-bronze-400">
                {site.circuit} &bull; {site.county}
              </span>
            </p>
          </div>
          <p className="mt-6 max-w-[26rem] text-[0.9375rem] leading-6">
            {site.person}, {site.personTitle}
          </p>
          <p className="mt-4 max-w-[26rem] text-[0.9375rem] leading-6">
            This website is not monitored for emergencies. If you or someone
            else is in danger, call{" "}
            <a
              href="tel:911"
              className="font-bold text-white underline decoration-bronze-400 underline-offset-4 hover:decoration-white"
            >
              911
            </a>
            .
          </p>
        </div>

        <div className="md:col-span-3 lg:col-span-3 lg:col-start-7">
          <h2 className="eyebrow font-sans text-white">Office</h2>
          <address className="mt-4 text-[0.9375rem] leading-7 not-italic">
            {site.address.street}
            <br />
            {site.address.city}, {site.address.region} {site.address.postalCode}
          </address>
          <a
            href={site.address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-[0.9375rem] font-bold text-white underline decoration-bronze-400 underline-offset-4 hover:decoration-white"
          >
            Get directions
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <h2 className="eyebrow font-sans text-white">Site</h2>
          <ul className="mt-3 text-[0.9375rem] leading-7">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-block py-1 underline decoration-transparent underline-offset-4 transition-colors duration-150 hover:text-white hover:decoration-bronze-400"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/15">
        <div className="container-site flex flex-col gap-2 py-6 text-[0.8125rem] leading-5 text-silver-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {site.office}, {site.circuit} of {site.state}
          </p>
          <p>Commonwealth of {site.state}</p>
        </div>
      </div>
    </footer>
  );
}
