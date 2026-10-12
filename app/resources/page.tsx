import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { LinkList } from "@/components/listing-grid";
import { PageHeader } from "@/components/page-header";
import { communityResources } from "@/lib/directory";

export const metadata: Metadata = {
  title: "Community Resources",
  description:
    "Links to Campbell County government, its cities, law enforcement, the Kentucky courts, state law and legal help.",
  alternates: { canonical: "/resources" },
};

const onThisSite: { label: string; detail: string; href: string }[] = [
  {
    label: "Find the right office",
    detail: "Traffic tickets, child support, guardianship and more.",
    href: "/find-the-right-office",
  },
  {
    label: "Help for victims",
    detail: "Hotlines, shelters, counseling and compensation.",
    href: "/victims/resources",
  },
  {
    label: "Questions and answers",
    detail: "Common questions about cases and court.",
    href: "/faq",
  },
  {
    label: "Open records requests",
    detail: "How to ask this office for public records.",
    href: "/open-records",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        title="Community resources"
        lead="Local government, courts, law enforcement and legal help for Campbell County residents. These websites belong to other offices and organizations."
      />

      <section aria-labelledby="site-heading" className="bg-silver-50">
        <div className="container-site py-12 md:py-14">
          <h2 id="site-heading" className="sr-only">
            On this website
          </h2>
          <ul className="grid border-t-[3px] border-bronze-500 bg-white shadow-raised sm:grid-cols-2 xl:grid-cols-4">
            {onThisSite.map(({ label, detail, href }) => (
              <li
                key={href}
                className="border-b border-silver-200 sm:odd:border-r xl:border-r xl:border-b-0 xl:last:border-r-0 sm:[&:nth-last-child(-n+2)]:border-b-0"
              >
                <Link
                  href={href}
                  className="group flex h-full flex-col gap-2 px-7 py-6 transition-colors duration-150 ease-out hover:bg-silver-50"
                >
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
      </section>

      <div className="bg-white py-14 md:py-20">
        <div className="container-site space-y-16 md:space-y-20">
          {communityResources.map(({ id, title, listings }) => (
            <section key={id} id={id} aria-labelledby={`${id}-heading`}>
              <h2
                id={`${id}-heading`}
                className="text-[1.9375rem] leading-[2.3125rem] font-bold tracking-[-0.01em] md:text-[2.375rem] md:leading-[2.75rem]"
              >
                {title}
              </h2>
              <LinkList listings={listings} className="mt-8" />
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
