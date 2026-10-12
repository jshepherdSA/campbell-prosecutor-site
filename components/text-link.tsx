import type { ReactNode } from "react";
import Link from "next/link";
import { telHref } from "@/lib/directory";
import { cn } from "@/lib/utils";

const linkClasses =
  "font-semibold text-navy-800 underline decoration-bronze-500 decoration-2 underline-offset-4 hover:text-royal-600";

/** A link inside running text. Off-site URLs open in a new tab. */
export function TextLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  if (/^https?:\/\//.test(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(linkClasses, className)}
      >
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }
  return (
    <Link href={href} className={cn(linkClasses, className)}>
      {children}
    </Link>
  );
}

/** A phone number that dials when tapped. Never wraps mid-number. */
export function PhoneLink({
  number,
  className,
}: {
  number: string;
  className?: string;
}) {
  return (
    <a
      href={telHref(number)}
      className={cn(linkClasses, "whitespace-nowrap", className)}
    >
      {number}
    </a>
  );
}
