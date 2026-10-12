import { ArrowUpRightIcon } from "lucide-react";
import { Blocks } from "@/components/blocks";
import { ButtonLink } from "@/components/button-link";
import { OfficeContact } from "@/components/office-contact";
import { PageHeader } from "@/components/page-header";
import { TextLink } from "@/components/text-link";
import type { Service } from "@/lib/services";

const h2 =
  "text-[1.625rem] leading-9 font-bold tracking-[-0.01em] md:text-[1.9375rem] md:leading-[2.3125rem]";

/** The shared layout for a service: what it is, the steps, who to contact. */
export function ServicePage({
  service,
  parent = { label: "Services", href: "/services" },
}: {
  service: Service;
  parent?: { label: string; href: string };
}) {
  const {
    title,
    lead,
    cta,
    offices = [],
    sections = [],
    links,
    faqs,
  } = service;
  return (
    <>
      <PageHeader parent={parent} title={title} lead={lead} />

      <div className="bg-white py-14 md:py-20">
        <div className="container-site grid gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="space-y-14 lg:col-span-7">
            {/* On small screens the aside sits below the text, so repeat the main action up here. */}
            {cta ? (
              <ButtonLink
                href={cta.href}
                size="lg"
                className="w-full lg:hidden"
              >
                {cta.label}
                <ArrowUpRightIcon aria-hidden="true" />
              </ButtonLink>
            ) : null}
            {sections.map(({ title: heading, blocks }) => (
              <section key={heading}>
                <h2 className={h2}>{heading}</h2>
                <Blocks blocks={blocks} className="mt-5" />
              </section>
            ))}

            {faqs ? (
              <section>
                <h2 className={h2}>Common questions</h2>
                <div className="mt-6 border-t-2 border-navy-800">
                  {faqs.map(({ q, a }) => (
                    <article
                      key={q}
                      className="border-b border-silver-300 py-6"
                    >
                      <h3 className="text-[1.1875rem] leading-[1.625rem] font-semibold lg:text-[1.3125rem] lg:leading-7">
                        {q}
                      </h3>
                      <div className="mt-3 max-w-[42rem] space-y-4">
                        {a.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ) : null}
          </div>

          <aside
            aria-label="Contact and forms"
            className="space-y-10 lg:col-span-4 lg:col-start-9"
          >
            {cta ? (
              <ButtonLink
                href={cta.href}
                size="lg"
                className="hidden w-full lg:inline-flex"
              >
                {cta.label}
                <ArrowUpRightIcon aria-hidden="true" />
              </ButtonLink>
            ) : null}

            {offices.length > 0 ? (
              <div className="space-y-5">
                {offices.map((office, index) => (
                  <OfficeContact
                    key={office.name}
                    office={office}
                    label={index === 0 ? "Who to contact" : "Where to file"}
                  />
                ))}
                <p className="text-sm leading-[1.375rem] text-muted-foreground">
                  Hours, fees and requirements are set by that office and can
                  change. Call ahead to confirm.
                </p>
              </div>
            ) : null}

            {links ? (
              <div>
                <h2 className="eyebrow font-sans text-bronze-700">
                  Forms and links
                </h2>
                <ul className="mt-4 border-t border-silver-300 text-base leading-[1.625rem]">
                  {links.map(({ label, href }) => (
                    <li
                      key={href}
                      className="border-b border-silver-300 py-3.5"
                    >
                      <TextLink href={href}>{label}</TextLink>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </aside>
        </div>
      </div>
    </>
  );
}
