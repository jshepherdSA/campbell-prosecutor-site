import { PhoneLink } from "@/components/text-link";
import type { Office } from "@/lib/directory";
import { cn } from "@/lib/utils";

/** Name, address, phone and hours for another office, with a bronze side rule. */
export function OfficeContact({
  office,
  label = "Handled by",
  className,
}: {
  office: Office;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "border-l-[3px] border-bronze-500 bg-silver-50 py-5 pr-6 pl-5 text-[0.9375rem] leading-6",
        className,
      )}
    >
      <p className="eyebrow text-bronze-700">{label}</p>
      <address className="mt-2 not-italic">
        <span className="block font-bold text-navy-800">{office.name}</span>
        {office.address.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </address>
      <p className="mt-2">
        <PhoneLink number={office.phone} />
      </p>
      {office.hours ? (
        <p className="mt-1 text-muted-foreground">{office.hours}</p>
      ) : null}
    </div>
  );
}
