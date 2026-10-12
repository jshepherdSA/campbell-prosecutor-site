import { ArrowUpRightIcon } from "lucide-react";
import { PhoneLink } from "@/components/text-link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Listing } from "@/lib/directory";
import { cn } from "@/lib/utils";

/** Organizations as cards: what each one does, its phone number and website. */
export function ListingGrid({
  listings,
  className,
}: {
  listings: Listing[];
  className?: string;
}) {
  return (
    <ul className={cn("grid gap-5 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {listings.map(({ name, description, phone, phoneLabel, href }) => (
        <li key={name} className="flex">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>
                <h3 className="font-semibold">{name}</h3>
              </CardTitle>
              <CardDescription>
                <p>{description}</p>
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto space-y-2 text-[0.9375rem] leading-6">
              {phone ? (
                <p>
                  {phoneLabel ? (
                    <span className="block text-muted-foreground">
                      {phoneLabel}
                    </span>
                  ) : null}
                  <PhoneLink number={phone} className="text-lg" />
                </p>
              ) : null}
              {href ? (
                <p>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 font-bold text-navy-800 underline decoration-bronze-500 decoration-2 underline-offset-4 hover:text-royal-600"
                  >
                    Visit website
                    <span className="sr-only">
                      {" "}
                      for {name} (opens in a new tab)
                    </span>
                    <ArrowUpRightIcon
                      aria-hidden="true"
                      className="size-4 transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </p>
              ) : null}
            </CardContent>
          </Card>
        </li>
      ))}
    </ul>
  );
}

/** A plain list of links with a one-line note each, for long directories. */
export function LinkList({
  listings,
  className,
}: {
  listings: Listing[];
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "grid gap-x-10 border-t border-silver-300 sm:grid-cols-2",
        className,
      )}
    >
      {listings.map(({ name, description, phone, href }) => (
        <li
          key={name}
          className="border-b border-silver-300 py-4 text-base leading-[1.625rem]"
        >
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-baseline gap-1.5 font-bold text-navy-800 underline decoration-bronze-500 decoration-2 underline-offset-4 hover:text-royal-600"
            >
              {name}
              <span className="sr-only"> (opens in a new tab)</span>
              <ArrowUpRightIcon
                aria-hidden="true"
                className="size-4 shrink-0 translate-y-0.5 transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:translate-y-0"
              />
            </a>
          ) : (
            <span className="font-bold text-navy-800">{name}</span>
          )}
          {description ? (
            <span className="mt-1 block text-[0.9375rem] leading-6">
              {description}
            </span>
          ) : null}
          {phone ? (
            <span className="mt-1 block text-[0.9375rem] leading-6">
              <PhoneLink number={phone} />
            </span>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
