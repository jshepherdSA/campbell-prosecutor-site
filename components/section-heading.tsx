import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  /** Applied to the <h2>, for the section's aria-labelledby. */
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  /** `dark` when the section background is navy. */
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  lead,
  tone = "light",
  className,
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <div className={cn("max-w-[46rem]", className)}>
      {eyebrow ? (
        <p
          className={cn(
            "eyebrow",
            dark ? "text-bronze-400" : "text-bronze-700",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={cn(
          "text-[1.9375rem] leading-[2.3125rem] font-bold tracking-[-0.01em] md:text-[2.375rem] md:leading-[2.75rem] lg:text-[2.75rem] lg:leading-[3.125rem]",
          eyebrow && "mt-3",
          dark && "text-white",
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={cn(
            "mt-5 max-w-[42rem] text-lg leading-[1.8125rem] md:text-xl md:leading-8",
            dark ? "text-silver-300" : "text-body",
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
