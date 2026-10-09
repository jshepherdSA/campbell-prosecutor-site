"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Sticky wrapper for the main header. A zero-height sentinel sits just above
 * it; once that scrolls out of view the header is "stuck" and gains a shadow.
 */
export function StickyShell({ children }: { children: ReactNode }) {
  const sentinel = useRef<HTMLDivElement>(null);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const node = sentinel.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) =>
      setStuck(!entry.isIntersecting),
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinel} aria-hidden="true" />
      <header
        className={cn(
          "sticky top-0 z-40 bg-white transition-shadow duration-200 ease-out",
          stuck && "shadow-raised",
        )}
      >
        {children}
      </header>
    </>
  );
}
