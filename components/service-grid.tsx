import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Service } from "@/lib/services";
import { cn } from "@/lib/utils";

/** Services as cards. The whole card is the link. */
export function ServiceGrid({
  services,
  className,
}: {
  services: Service[];
  className?: string;
}) {
  return (
    <ul className={cn("grid gap-5 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {services.map(({ href, title, summary }) => (
        <li key={href} className="flex">
          <Card className="w-full transition-colors duration-150 hover:bg-silver-50">
            <CardHeader>
              <CardTitle>
                <h3 className="font-semibold">
                  <Link
                    href={href}
                    className="after:absolute after:inset-0 focus-visible:outline-none"
                  >
                    {title}
                  </Link>
                </h3>
              </CardTitle>
              <CardDescription>
                <p>{summary}</p>
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <ArrowRightIcon
                aria-hidden="true"
                className="size-4 text-navy-800 transition-transform duration-150 ease-out group-hover/card:translate-x-1"
              />
            </CardFooter>
          </Card>
        </li>
      ))}
    </ul>
  );
}
