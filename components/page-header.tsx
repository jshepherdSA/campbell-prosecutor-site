import type { ReactNode } from "react";
import Link from "next/link";
import { SealRings } from "@/components/seal-rings";
import { site } from "@/lib/site";

type PageHeaderProps = {
  title: ReactNode;
  lead?: ReactNode;
  /** The page above this one, shown over the title as a link back. */
  parent?: { label: string; href: string };
};

/** The navy title band at the top of every inner page. Holds the page's <h1>. */
export function PageHeader({ title, lead, parent }: PageHeaderProps) {
  return (
    <section
      aria-labelledby="page-heading"
      className="on-dark relative isolate overflow-hidden bg-navy-900 text-white"
    >
      <SealRings className="absolute top-1/2 -right-[34rem] -z-10 size-[84rem] max-w-none -translate-y-1/2 opacity-70" />
      <div className="container-site py-14 md:py-16 lg:py-20">
        {parent ? (
          <Link
            href={parent.href}
            className="eyebrow inline-block text-bronze-400 underline decoration-transparent underline-offset-4 transition-colors duration-150 hover:decoration-bronze-400"
          >
            {parent.label}
          </Link>
        ) : (
          <p className="eyebrow text-bronze-400">{site.office}</p>
        )}
        <h1
          id="page-heading"
          className="mt-4 max-w-[52rem] text-[2.125rem] leading-[2.5rem] font-bold tracking-[-0.015em] text-white md:text-[3rem] md:leading-[3.375rem] lg:text-[3.5rem] lg:leading-[3.75rem]"
        >
          {title}
        </h1>
        {lead ? (
          <p className="mt-5 max-w-[42rem] text-lg leading-[1.8125rem] text-silver-300 md:text-xl md:leading-8">
            {lead}
          </p>
        ) : null}
      </div>
    </section>
  );
}
