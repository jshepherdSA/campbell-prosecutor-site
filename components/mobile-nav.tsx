"use client";

import { useState } from "react";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            className="text-navy-800 xl:hidden"
            aria-label="Open menu"
          />
        }
      >
        <MenuIcon className="size-6" />
      </SheetTrigger>
      <SheetContent side="right" className="w-[86%] gap-0 p-0 sm:max-w-sm">
        <SheetHeader className="border-b border-silver-200 px-6 py-5">
          <SheetTitle className="font-heading text-xl font-bold text-navy-800">
            Menu
          </SheetTitle>
          <SheetDescription className="eyebrow text-[0.6875rem] text-muted-foreground">
            {site.county} &bull; {site.circuit}
          </SheetDescription>
        </SheetHeader>
        <nav aria-label="Primary" className="px-6 py-2">
          <ul className="divide-y divide-silver-200">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={close}
                  className="block py-4 font-heading text-xl font-semibold text-navy-800"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto space-y-4 bg-silver-50 px-6 py-6 text-[0.9375rem] leading-6">
          <address className="not-italic">
            <span className="block font-bold text-navy-800">{site.office}</span>
            {site.address.street}
            <br />
            {site.address.city}, {site.address.region} {site.address.postalCode}
          </address>
          <Link
            href="/#contact"
            onClick={close}
            className={cn(buttonVariants({ size: "default" }), "w-full")}
          >
            Contact the Office
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
