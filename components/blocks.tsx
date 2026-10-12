import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/** Plain-text content blocks, used by the service pages and the articles. */
export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] };

export function Blocks({
  blocks,
  className,
}: {
  blocks: Block[];
  className?: string;
}) {
  return (
    <div className={cn("max-w-[42rem] space-y-5", className)}>
      {blocks.map((block, index) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={index}
                className="pt-6 text-[1.625rem] leading-9 font-bold tracking-[-0.01em] first:pt-0 md:text-[1.9375rem] md:leading-[2.3125rem]"
              >
                {block.text}
              </h2>
            );
          case "ul":
            return (
              <ul key={index} className="border-t border-silver-300">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3.5 border-b border-silver-300 py-3.5 text-base leading-[1.625rem] text-ink"
                  >
                    <CheckIcon
                      aria-hidden="true"
                      strokeWidth={2.5}
                      className="mt-1 size-[1.125rem] shrink-0 text-bronze-700"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={index} className="border-t border-silver-300">
                {block.items.map((item, step) => (
                  <li
                    key={item}
                    className="flex gap-5 border-b border-silver-300 py-4 text-base leading-[1.625rem] text-ink"
                  >
                    <span
                      aria-hidden="true"
                      className="w-7 shrink-0 font-heading text-2xl leading-7 font-bold text-bronze-700"
                    >
                      {step + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            );
          default:
            return <p key={index}>{block.text}</p>;
        }
      })}
    </div>
  );
}
