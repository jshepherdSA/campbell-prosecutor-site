import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { MobileNav } from "@/components/mobile-nav";
import { StickyShell } from "@/components/sticky-shell";
import { nav, site } from "@/lib/site";

// "Contact" is the button at the end of the bar, so it is left out of the links.
const primary = nav.filter((item) => item.href !== "/#contact");

export function SiteHeader() {
  return (
    <>
      {/* Tier 1: utility bar. Scrolls away; only the main header sticks. */}
      <div className="on-dark bg-navy-950 text-silver-300">
        <div className="container-site flex min-h-10 flex-wrap items-center justify-between gap-x-6 gap-y-1 py-2 text-[0.8125rem] leading-5">
          <p className="hidden sm:block">
            {site.circuit} of {site.state}
            <span aria-hidden="true" className="mx-2 text-silver-400/60">
              /
            </span>
            {site.county}
          </p>
          <p className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-block size-2 rounded-full bg-bronze-400"
            />
            <span>
              In an emergency, call{" "}
              <a
                href="tel:911"
                className="font-bold text-white underline decoration-bronze-400 underline-offset-4 hover:decoration-white"
              >
                911
              </a>
            </span>
          </p>
        </div>
      </div>

      {/* Tier 2: brand and primary navigation. Tier 3: the bronze rule. */}
      <StickyShell>
        <div className="container-site flex h-20 items-center justify-between gap-6 lg:h-[5.5rem]">
          <Link
            href="/"
            className="group flex min-w-0 items-center gap-3 sm:gap-4 xl:shrink-0"
            aria-label={`${site.name}, home`}
          >
            <Image
              src="/images/seal.webp"
              alt=""
              width={64}
              height={64}
              preload
              className="size-11 shrink-0 sm:size-14 lg:size-16"
            />
            <span className="min-w-0">
              <span className="block font-heading text-[clamp(0.8125rem,4vw,1.0625rem)] leading-[1.3] font-bold text-navy-800 sm:text-xl sm:leading-7">
                Commonwealth&rsquo;s Attorney
              </span>
              <span className="eyebrow block text-[0.625rem] leading-4 text-muted-foreground sm:text-[0.6875rem]">
                {site.county}
                <span className="hidden sm:inline">
                  <span aria-hidden="true" className="mx-1.5 text-bronze-500">
                    &bull;
                  </span>
                  {site.circuit}
                </span>
              </span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex items-center gap-8">
              {primary.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="relative block py-2 text-[0.8125rem] whitespace-nowrap font-bold tracking-[0.08em] text-navy-800 uppercase after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:origin-left after:scale-x-0 after:bg-bronze-500 after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100 focus-visible:after:scale-x-100"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <ButtonLink
              href="/#contact"
              size="sm"
              className="hidden md:inline-flex"
            >
              Contact
            </ButtonLink>
            <MobileNav />
          </div>
        </div>
        <div aria-hidden="true" className="h-[3px] bg-bronze-500" />
      </StickyShell>
    </>
  );
}
